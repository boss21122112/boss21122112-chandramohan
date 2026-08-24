import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import compression from "compression";
import { ROUTE_SEO_CONFIG } from "./src/seo-renderer";

// Safely resolve directory path in both ESM and bundled CJS environments
const currentDir = typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const PORT = 3000;

async function startServer() {
  const app = express();

  // Enable HTTP response compression (gzip/brotli) for reduced latency and fast response time
  app.use(compression());

  // HTTP Security Headers
  app.use((req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    res.setHeader("Content-Security-Policy", "default-src 'self' https: data: blob: 'unsafe-inline' 'unsafe-eval'; img-src 'self' https: data: blob:; font-src 'self' https: data:;");
    next();
  });

  // Ensure charset=utf-8 is explicitly declared on all HTML responses
  app.use((req, res, next) => {
    const origSetHeader = res.setHeader;
    res.setHeader = function (name: string, value: any) {
      if (typeof name === "string" && name.toLowerCase() === "content-type") {
        if (typeof value === "string" && value.includes("text/html") && !value.includes("charset")) {
          value = "text/html; charset=utf-8";
        }
      }
      return origSetHeader.call(this, name, value);
    };
    next();
  });

  // 1. CRITICAL: 301 Permanent Redirect for non-www domain (rainbowafs.com -> www.rainbowafs.com) on EVERY route
  app.use((req, res, next) => {
    const host = (req.get("host") || "").toLowerCase();
    if (host === "rainbowafs.com" || host.startsWith("rainbowafs.com:")) {
      const targetUrl = `https://www.rainbowafs.com${req.originalUrl}`;
      return res.redirect(301, targetUrl);
    }
    next();
  });

  // Increase payload limit for base64 images
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // Shared lazy-loaded Gemini client
  let aiClient: GoogleGenAI | null = null;
  function getAIClient() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY environment variable is required. Please set your Gemini API key in Settings > Secrets to enable AI image generation.");
      }
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          }
        }
      });
    }
    return aiClient;
  }

  // 1. API Route for gallery generation
  app.post("/api/generate-gallery", async (req, res) => {
    try {
      const { base64Image, productId } = req.body;
      if (!base64Image) {
        return res.status(400).json({ error: "Missing base64Image parameter." });
      }

      // Check key existence early
      if (!process.env.GEMINI_API_KEY) {
        return res.status(400).json({
          error: "GEMINI_API_KEY is not configured. Please add your key in Settings > Secrets to enable automatic AI gallery generation."
        });
      }

      const ai = getAIClient();

      // Clean base64 header if present
      const matches = base64Image.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,(.+)$/);
      let mimeType = "image/jpeg";
      let rawBase64 = base64Image;

      if (matches && matches.length >= 3) {
        mimeType = matches[1];
        rawBase64 = matches[2];
      } else if (base64Image.includes("base64,")) {
        rawBase64 = base64Image.split("base64,")[1];
      }

      console.log(`Generating AI product gallery images for ${productId}...`);

      const styles = [
        {
          id: 2,
          prompt: "You are an expert commercial product photographer. Using this uploaded water purifier image as an exact reference, generate a new professional product photo. The water purifier must be shown from a straight front angle. The background must be a high-end premium modern kitchen with elegant marble countertops, clean minimalistic tiles, warm ambient lighting, and elegant decor. Keep the exact water purifier's shape, body, logo, colors, display panels, buttons, water taps, and physical design completely identical to the reference image. Do not invent, change, or distort the product's features. The final image must look like a realistic high-end advertisement."
        },
        {
          id: 3,
          prompt: "You are an expert commercial product photographer. Using this uploaded water purifier image as an exact reference, generate a new professional product photo. The water purifier must be shown rotated at a 45-degree perspective, showing its side profile depth and elegant 3D structure. The lighting should be luxury kitchen downlighting with warm light casting beautiful soft shadows and highlights on the purifier's body. The background should be a modern luxury kitchen. Keep the exact water purifier's shape, colors, branding, display, and features identical to the reference image. Do not distort or alter the product's design."
        },
        {
          id: 4,
          prompt: "You are an expert commercial product photographer. Using this uploaded water purifier image as an exact reference, generate a beautiful lifestyle product photo. The water purifier must be shown installed neatly mounted on a kitchen wall or placed on a pristine granite countertop in a gorgeous, spacious modular kitchen with bright, airy, natural morning sunlight coming from a window. Next to the purifier on the countertop, place a clean transparent glass of sparkling water and some high-end modular kitchen utensils. Keep the exact water purifier's physical model, shape, logos, colors, and design completely intact and identical to the reference image. The photo must look incredibly realistic, warm, and inviting."
        }
      ];

      // Run generation requests concurrently
      const generationPromises = styles.map(async (style) => {
        try {
          const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-image",
            contents: {
              parts: [
                {
                  inlineData: {
                    data: rawBase64,
                    mimeType: mimeType,
                  },
                },
                {
                  text: style.prompt,
                },
              ],
            },
            config: {
              imageConfig: {
                aspectRatio: "1:1",
              }
            }
          });

          // Extract inlineData image from candidates
          let generatedBase64: string | null = null;
          if (response.candidates?.[0]?.content?.parts) {
            for (const part of response.candidates[0].content.parts) {
              if (part.inlineData?.data) {
                generatedBase64 = `data:image/png;base64,${part.inlineData.data}`;
                break;
              }
            }
          }

          if (!generatedBase64) {
            throw new Error(`Model did not return image data for Style ${style.id}`);
          }

          return { id: style.id, url: generatedBase64 };
        } catch (err: any) {
          console.error(`Error generating style ${style.id}:`, err);
          throw new Error(`Style ${style.id} Generation Failed: ${err.message || err}`);
        }
      });

      const results = await Promise.all(generationPromises);
      
      // Return generated images sorted by style id
      const generatedUrls = results.sort((a, b) => a.id - b.id).map(r => r.url);

      res.json({
        success: true,
        images: generatedUrls
      });
    } catch (error: any) {
      console.error("AI Gallery Generation Error:", error);
      res.status(500).json({
        success: false,
        error: error.message || "Failed to generate AI gallery images."
      });
    }
  });

  // Initialize Vite dev server or static middleware
  let vite: any = null;
  if (process.env.NODE_ENV !== "production") {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
  }

  // Explicit SEO sitemap & robots routes
  app.get("/sitemap.xml", (req, res) => {
    const possiblePaths = [
      path.join(process.cwd(), process.env.NODE_ENV === "production" ? "dist/sitemap.xml" : "public/sitemap.xml"),
      path.join(process.cwd(), "public/sitemap.xml"),
      path.join(process.cwd(), "sitemap.xml"),
      path.join(currentDir, "sitemap.xml"),
      path.join(currentDir, "../public/sitemap.xml")
    ];
    const filePath = possiblePaths.find(p => fs.existsSync(p));
    if (filePath) {
      res.sendFile(filePath);
    } else {
      res.status(404).send("Sitemap not found");
    }
  });

  app.get("/robots.txt", (req, res) => {
    const possiblePaths = [
      path.join(process.cwd(), process.env.NODE_ENV === "production" ? "dist/robots.txt" : "public/robots.txt"),
      path.join(process.cwd(), "public/robots.txt"),
      path.join(process.cwd(), "robots.txt"),
      path.join(currentDir, "robots.txt"),
      path.join(currentDir, "../public/robots.txt")
    ];
    const filePath = possiblePaths.find(p => fs.existsSync(p));
    if (filePath) {
      res.sendFile(filePath);
    } else {
      res.status(404).send("Robots.txt not found");
    }
  });

  // Helper function to render pre-generated SSR HTML for SEO pages
  async function renderSeoPage(req: express.Request, res: express.Response, routeKey: string, statusCode = 200) {
    const seo = ROUTE_SEO_CONFIG[routeKey] || ROUTE_SEO_CONFIG["/"];

    try {
      let template: string;
      if (process.env.NODE_ENV !== "production" && vite) {
        const rawHtml = await fs.promises.readFile(path.join(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(req.originalUrl, rawHtml);
      } else {
        const possiblePaths = [
          path.join(process.cwd(), "dist/index.html"),
          path.join(process.cwd(), "index.html"),
          path.join(currentDir, "index.html"),
          path.join(currentDir, "../index.html"),
          path.join(currentDir, "../../index.html")
        ];
        const distIndex = possiblePaths.find(p => fs.existsSync(p));
        if (distIndex) {
          template = await fs.promises.readFile(distIndex, "utf-8");
        } else {
          template = await fs.promises.readFile(path.join(process.cwd(), "index.html"), "utf-8");
        }
      }

      let html = template
        .replace(/<title>.*?<\/title>/s, `<title>${seo.title}</title>`)
        .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="${seo.description}" />`)
        .replace(/<meta name="keywords" content=".*?" \/>/s, `<meta name="keywords" content="${seo.keywords}" />`)
        .replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="${seo.canonical}" />`)
        .replace(/<meta property="og:title" content=".*?" \/>/s, `<meta property="og:title" content="${seo.title}" />`)
        .replace(/<meta property="og:description" content=".*?" \/>/s, `<meta property="og:description" content="${seo.description}" />`)
        .replace(/<meta property="og:url" content=".*?" \/>/s, `<meta property="og:url" content="${seo.canonical}" />`)
        .replace(/<meta name="twitter:title" content=".*?" \/>/s, `<meta name="twitter:title" content="${seo.title}" />`)
        .replace(/<meta name="twitter:description" content=".*?" \/>/s, `<meta name="twitter:description" content="${seo.description}" />`);

      html = html.replace(/<div id="root">.*?<\/div>/s, `<div id="root">${seo.contentHtml}</div>`);

      res.status(statusCode).set({
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": statusCode === 200 
          ? "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800" 
          : "no-cache, no-store, must-revalidate"
      }).send(html);
    } catch (e: any) {
      console.error(`SEO SSR Error for ${routeKey}:`, e);
      res.status(500).send("Internal Server Error");
    }
  }

  // Render proper HTTP 404 page for unknown / deleted URLs
  async function render404Page(req: express.Request, res: express.Response) {
    try {
      let template: string;
      if (process.env.NODE_ENV !== "production" && vite) {
        const rawHtml = await fs.promises.readFile(path.join(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(req.originalUrl, rawHtml);
      } else {
        const possiblePaths = [
          path.join(process.cwd(), "dist/index.html"),
          path.join(process.cwd(), "index.html"),
          path.join(currentDir, "index.html"),
          path.join(currentDir, "../index.html")
        ];
        const distIndex = possiblePaths.find(p => fs.existsSync(p));
        template = await fs.promises.readFile(distIndex || path.join(process.cwd(), "index.html"), "utf-8");
      }

      const notFoundHtml = `
        <header style="padding: 20px; border-bottom: 1px solid #eee; background: #fff;">
          <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center;">
            <a href="/" style="font-size: 20px; font-weight: bold; color: #0052A3; text-decoration: none;">Rainbow Aquafresh Systems</a>
            <nav><a href="/" style="color: #2563eb; font-weight: bold; text-decoration: none;">Back to Home</a></nav>
          </div>
        </header>
        <main style="max-width: 800px; margin: 60px auto; padding: 20px; text-align: center; font-family: sans-serif;">
          <h1 style="font-size: 48px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">404 - Page Not Found</h1>
          <p style="font-size: 18px; color: #64748b; margin-bottom: 30px;">The requested URL <code>${req.path}</code> was not found on our server. It may have been moved or removed.</p>
          <a href="/" style="display: inline-block; background: #2563eb; color: #fff; font-weight: bold; padding: 12px 24px; border-radius: 8px; text-decoration: none;">Return to Rainbow Aquafresh Home</a>
        </main>
      `;

      let html = template
        .replace(/<title>.*?<\/title>/s, `<title>404 Page Not Found | Rainbow Aquafresh Systems</title>`)
        .replace(/<meta name="description" content=".*?" \/>/s, `<meta name="description" content="The page you requested could not be found. Rainbow Aquafresh Systems provides RO water purifier sales and service in Hyderabad." />`)
        .replace(/<link rel="canonical" href=".*?" \/>/s, `<link rel="canonical" href="https://www.rainbowafs.com/" />`);

      html = html.replace(/<div id="root">.*?<\/div>/s, `<div id="root">${notFoundHtml}</div>`);

      res.status(404).set({
        "Content-Type": "text/html; charset=utf-8",
        "Cache-Control": "no-cache, no-store, must-revalidate"
      }).send(html);
    } catch (e) {
      res.status(404).send("404 Page Not Found");
    }
  }

  // 301 Redirects for legacy .php URLs
  const phpRedirects: Record<string, string> = {
    "/index.php": "/",
    "/about.php": "/about",
    "/contact.php": "/contact",
    "/products.php": "/products",
    "/ro-service.php": "/ro-service-hyderabad",
    "/ro-service-hyderabad.php": "/ro-service-hyderabad",
    "/ro-installation.php": "/ro-installation-hyderabad",
    "/ro-installation-hyderabad.php": "/ro-installation-hyderabad",
    "/ro-repair.php": "/ro-repair-hyderabad",
    "/ro-repair-hyderabad.php": "/ro-repair-hyderabad",
    "/amc.php": "/ro-amc-service",
    "/ro-amc-service.php": "/ro-amc-service",
    "/commercial.php": "/commercial-ro-plants",
    "/commercial-ro-plants.php": "/commercial-ro-plants",
    "/filter-replacement.php": "/ro-filter-replacement-hyderabad"
  };

  Object.entries(phpRedirects).forEach(([oldPhpPath, newRoute]) => {
    app.get(oldPhpPath, (req, res) => {
      res.redirect(301, newRoute);
    });
  });

  // Handle trailing slash redirects for non-trailing-slash canonical pages
  const trailingSlashRedirects = [
    "/ro-installation-hyderabad/",
    "/ro-amc-service/",
    "/commercial-ro-plants/",
    "/ro-repair-hyderabad/",
    "/ro-filter-replacement-hyderabad/",
    "/about/",
    "/contact/"
  ];

  trailingSlashRedirects.forEach((slashPath) => {
    const canonicalPath = slashPath.slice(0, -1);
    app.get(canonicalPath, (req, res, next) => {
      if (req.path === slashPath) {
        return res.redirect(301, canonicalPath);
      }
      next();
    });
  });

  // Explicit route registrations for SEO crawlability and exact path matching
  const explicitRoutes = [
    "/",
    "/products",
    "/products/",
    "/ro-service-hyderabad",
    "/ro-installation-hyderabad",
    "/ro-amc-service",
    "/commercial-ro-plants",
    "/ro-repair-hyderabad",
    "/ro-filter-replacement-hyderabad",
    "/ro-water-purifier-service-kothapet-hyderabad",
    "/ro-service-kothapet-hyderabad",
    "/about",
    "/contact"
  ];

  explicitRoutes.forEach((routePath) => {
    app.get(routePath, (req, res) => {
      renderSeoPage(req, res, routePath, 200);
    });
  });

  // Mount Vite or Static Middleware
  if (process.env.NODE_ENV !== "production" && vite) {
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath, {
      index: false,
      maxAge: "1d",
      setHeaders: (res, filePath) => {
        if (filePath.endsWith('.html')) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
        } else if (filePath.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff2?)$/)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      }
    }));
  }

  // Fallback wildcard handler for any other unlisted page routes
  app.get("*", async (req, res, next) => {
    if (req.method !== "GET" || req.path.startsWith("/api/")) return next();
    if (req.path.includes(".") && !req.path.endsWith(".html") && !req.path.endsWith(".php")) return next();

    if (ROUTE_SEO_CONFIG[req.path]) {
      renderSeoPage(req, res, req.path, 200);
    } else {
      render404Page(req, res);
    }
  });

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT} (${process.env.NODE_ENV || "development"} mode)`);
  });
}

startServer();
