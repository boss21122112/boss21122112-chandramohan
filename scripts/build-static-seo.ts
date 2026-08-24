import fs from 'node:fs';
import path from 'node:path';
import { ROUTE_SEO_CONFIG } from '../src/seo-renderer.js';

async function generateStaticPages() {
  const distDir = path.join(process.cwd(), 'dist');
  const indexHtmlPath = path.join(distDir, 'index.html');

  if (!fs.existsSync(indexHtmlPath)) {
    console.error('Error: dist/index.html not found. Run vite build first.');
    process.exit(1);
  }

  const baseTemplate = fs.readFileSync(indexHtmlPath, 'utf-8');

  console.log('Generating pre-rendered static HTML files for all SEO routes...');

  // Copy apple-touch-icon.png to dist
  const publicAppleIcon = path.join(process.cwd(), 'public', 'apple-touch-icon.png');
  if (fs.existsSync(publicAppleIcon)) {
    fs.copyFileSync(publicAppleIcon, path.join(distDir, 'apple-touch-icon.png'));
    console.log('  ✓ Copied apple-touch-icon.png to dist/apple-touch-icon.png');
  }

  for (const [routePath, seo] of Object.entries(ROUTE_SEO_CONFIG)) {
    // Inject Title, Description, Keywords, Canonical, and SSR Body Content
    let html = baseTemplate;

    // Replace Title
    if (seo.title) {
      html = html.replace(/<title>.*?<\/title>/i, `<title>${seo.title}</title>`);
    }

    // Replace or insert Meta Description
    if (seo.description) {
      if (html.includes('<meta name="description"')) {
        html = html.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${seo.description}" />`);
      } else {
        html = html.replace('</head>', `  <meta name="description" content="${seo.description}" />\n</head>`);
      }
    }

    // Replace or insert Meta Keywords
    if (seo.keywords) {
      if (html.includes('<meta name="keywords"')) {
        html = html.replace(/<meta name="keywords" content=".*?" \/>/i, `<meta name="keywords" content="${seo.keywords}" />`);
      } else {
        html = html.replace('</head>', `  <meta name="keywords" content="${seo.keywords}" />\n</head>`);
      }
    }

    // Replace or insert Canonical link
    if (seo.canonical) {
      if (html.includes('<link rel="canonical"')) {
        html = html.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${seo.canonical}" />`);
      } else {
        html = html.replace('</head>', `  <link rel="canonical" href="${seo.canonical}" />\n</head>`);
      }
    }

    // Inject SSR Crawlable Content into root div
    if (seo.contentHtml) {
      const ssrWrapper = `<div id="root">${seo.contentHtml}</div>`;
      html = html.replace('<div id="root"></div>', ssrWrapper);
    }

    // Determine output file paths for static hosting compatibility
    // e.g. /ro-repair-hyderabad -> dist/ro-repair-hyderabad/index.html AND dist/ro-repair-hyderabad.html
    const normalizedPath = routePath === '/' ? '' : routePath.replace(/^\//, '').replace(/\/$/, '');

    if (normalizedPath === '') {
      // Root index.html
      fs.writeFileSync(indexHtmlPath, html, 'utf-8');
      console.log('  ✓ Updated dist/index.html');
    } else {
      // Directory style: dist/ro-repair-hyderabad/index.html
      const routeSubDir = path.join(distDir, normalizedPath);
      fs.mkdirSync(routeSubDir, { recursive: true });
      fs.writeFileSync(path.join(routeSubDir, 'index.html'), html, 'utf-8');

      // File style: dist/ro-repair-hyderabad.html
      fs.writeFileSync(path.join(distDir, `${normalizedPath}.html`), html, 'utf-8');

      console.log(`  ✓ Generated dist/${normalizedPath}/index.html & dist/${normalizedPath}.html`);
    }
  }

  console.log('Static pre-rendering build completed successfully!');
}

generateStaticPages().catch((err) => {
  console.error('Failed to generate static pages:', err);
  process.exit(1);
});
