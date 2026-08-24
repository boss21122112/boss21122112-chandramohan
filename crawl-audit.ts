import fs from "fs";
import { ROUTE_SEO_CONFIG } from "./src/seo-renderer";

async function runCrawlAudit() {
  console.log("=== STARTING COMPLETE SEO & CRAWL HEALTH AUDIT ===");

  const baseURL = "http://localhost:3000";
  const visited = new Set<string>();
  const queue: string[] = ["/", "/sitemap.xml", "/robots.txt", ...Object.keys(ROUTE_SEO_CONFIG)];
  
  // Results
  const statusCodes = new Map<string, number>();
  const pageH1s = new Map<string, string[]>();
  const wordCounts = new Map<string, number>();
  const titles = new Map<string, string>();
  const descs = new Map<string, string>();
  const brokenLinks: { source: string; target: string; status: number }[] = [];

  while (queue.length > 0) {
    const currentPath = queue.shift()!;
    if (visited.has(currentPath)) continue;
    visited.add(currentPath);

    const fullUrl = `${baseURL}${currentPath}`;
    try {
      const res = await fetch(fullUrl, { redirect: "manual" });
      statusCodes.set(currentPath, res.status);

      if (res.status >= 400) {
        brokenLinks.push({ source: "CrawlQueue", target: currentPath, status: res.status });
        continue;
      }

      if (res.status >= 300 && res.status < 400) {
        const location = res.headers.get("location");
        console.log(`[3xx Redirect] ${currentPath} -> ${location}`);
        if (location && location.startsWith("/")) {
          if (!visited.has(location) && !queue.includes(location)) {
            queue.push(location);
          }
        }
        continue;
      }

      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("text/html")) continue;

      const html = await res.text();

      // Extract Title
      const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
      if (titleMatch) titles.set(currentPath, titleMatch[1]);

      // Extract Description
      const descMatch = html.match(/<meta name="description" content="([^"]*)"/i);
      if (descMatch) descs.set(currentPath, descMatch[1]);

      // Extract H1s
      const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => 
        m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
      );
      pageH1s.set(currentPath, h1Matches);

      // Estimate Word Count of visible text
      const cleanBody = html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
        .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      const words = cleanBody.split(" ").filter(w => w.length > 0).length;
      wordCounts.set(currentPath, words);

      // Discover internal links in html
      const hrefMatches = [...html.matchAll(/href=["'](\/[^"'#?]*)["']/gi)];
      for (const hm of hrefMatches) {
        const link = hm[1];
        if (link && !visited.has(link) && !queue.includes(link)) {
          queue.push(link);
        }
      }
    } catch (e: any) {
      console.error(`Error fetching ${fullUrl}:`, e.message);
      brokenLinks.push({ source: "Network", target: currentPath, status: 0 });
    }
  }

  console.log(`\n=== CRAWL COMPLETED: Visited ${visited.size} URLs ===`);

  console.log("\n--- 1. Broken Links (4xx/5xx) ---");
  if (brokenLinks.length === 0) {
    console.log("✓ Zero 4xx/5xx broken links found!");
  } else {
    brokenLinks.forEach(b => console.log(`❌ ${b.status} on ${b.target} (from ${b.source})`));
  }

  console.log("\n--- 2. H1 Analysis (Multiple or Missing H1s) ---");
  let h1Issues = 0;
  const h1Frequency = new Map<string, string[]>();
  for (const [p, h1s] of pageH1s.entries()) {
    if (h1s.length === 0) {
      console.log(`❌ Page missing H1: ${p}`);
      h1Issues++;
    } else if (h1s.length > 1) {
      console.log(`❌ Page has multiple H1s (${h1s.length}): ${p} ->`, h1s);
      h1Issues++;
    } else {
      const h1Text = h1s[0];
      if (!h1Frequency.has(h1Text)) h1Frequency.set(h1Text, []);
      h1Frequency.get(h1Text)!.push(p);
    }
  }
  if (h1Issues === 0) console.log("✓ Every page has exactly one H1 tag!");

  console.log("\n--- 3. Duplicate H1 Analysis across Pages ---");
  let dupH1Count = 0;
  for (const [h1Text, pages] of h1Frequency.entries()) {
    if (pages.length > 1) {
      console.log(`⚠️ Duplicate H1 "${h1Text}" shared by ${pages.length} pages:`, pages);
      dupH1Count++;
    }
  }
  if (dupH1Count === 0) console.log("✓ All H1 tags across all pages are completely unique!");

  console.log("\n--- 4. Low Content Pages (Word Count < 350 words) ---");
  let lowContentCount = 0;
  for (const [p, count] of wordCounts.entries()) {
    if (count < 350) {
      console.log(`⚠️ Low content page: ${p} (Only ${count} words)`);
      lowContentCount++;
    }
  }
  if (lowContentCount === 0) console.log("✓ All pages have rich content (>350 words)!");
}

runCrawlAudit();
