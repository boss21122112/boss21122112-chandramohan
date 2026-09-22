import fs from 'fs';
import path from 'path';
import { ROUTE_SEO_CONFIG } from '../src/seo-renderer';
import { HYDERABAD_LOCATIONS_DATA } from '../src/data/locationPagesData';
import { SPECIALIZED_SERVICES_DATA } from '../src/data/servicePagesData';
import { COMMERCIAL_PLANTS_DATA } from '../src/data/commercialPagesData';
import { BLOG_ARTICLES_DATA } from '../src/data/blogArticlesData';

console.log('=== PHASE 1: COMPREHENSIVE SEO AUDIT INSPECTION ===\n');

// 1. Check all routes in ROUTE_SEO_CONFIG
const routes = Object.keys(ROUTE_SEO_CONFIG);
console.log(`Total routes in ROUTE_SEO_CONFIG: ${routes.length}`);

// 2. Compare with sitemap.xml
const sitemapXml = fs.readFileSync('./public/sitemap.xml', 'utf8');
const sitemapLocs = (sitemapXml.match(/<loc>[^<]+<\/loc>/g) || []).map(loc => loc.replace(/<\/?loc>/g, ''));
console.log(`Total URLs in sitemap.xml: ${sitemapLocs.length}`);

const sitemapPaths = sitemapLocs.map(url => {
  const u = new URL(url);
  return u.pathname;
});

const inConfigNotSitemap = routes.filter(r => !sitemapPaths.includes(r));
const inSitemapNotConfig = sitemapPaths.filter(p => !routes.includes(p));

console.log('In ROUTE_SEO_CONFIG but not in sitemap:', inConfigNotSitemap);
console.log('In sitemap but not in ROUTE_SEO_CONFIG:', inSitemapNotConfig);

// 3. Check Titles, Descriptions, H1s, Canonicals in ROUTE_SEO_CONFIG
const titleMap = new Map<string, string>();
const descMap = new Map<string, string>();
const h1Map = new Map<string, string>();
const canonicalMap = new Map<string, string>();

let dupTitles = 0;
let dupDescs = 0;
let dupH1s = 0;
let invalidCanonicals = 0;
let titleLengthIssues = 0;
let descLengthIssues = 0;

for (const [route, config] of Object.entries(ROUTE_SEO_CONFIG)) {
  // Title
  if (titleMap.has(config.title)) {
    console.log(`[DUPLICATE TITLE] "${config.title}" on ${route} and ${titleMap.get(config.title)}`);
    dupTitles++;
  }
  titleMap.set(config.title, route);
  if (config.title.length < 30 || config.title.length > 65) {
    titleLengthIssues++;
  }

  // Description
  if (descMap.has(config.description)) {
    console.log(`[DUPLICATE DESC] "${config.description}" on ${route} and ${descMap.get(config.description)}`);
    dupDescs++;
  }
  descMap.set(config.description, route);
  if (config.description.length < 110 || config.description.length > 170) {
    descLengthIssues++;
  }

  // H1
  if (h1Map.has(config.h1)) {
    console.log(`[DUPLICATE H1] "${config.h1}" on ${route} and ${h1Map.get(config.h1)}`);
    dupH1s++;
  }
  h1Map.set(config.h1, route);

  // Canonical
  if (!config.canonical) {
    console.log(`[MISSING CANONICAL] on ${route}`);
    invalidCanonicals++;
  } else if (!config.canonical.startsWith('https://www.rainbowafs.com')) {
    console.log(`[NON-CANONICAL HOST] ${config.canonical} on ${route}`);
    invalidCanonicals++;
  }
}

console.log(`\nAudit Findings:`);
console.log(`- Duplicate Titles: ${dupTitles}`);
console.log(`- Duplicate Descriptions: ${dupDescs}`);
console.log(`- Duplicate H1s: ${dupH1s}`);
console.log(`- Invalid Canonicals: ${invalidCanonicals}`);
console.log(`- Titles outside 30-65 chars: ${titleLengthIssues}`);
console.log(`- Descriptions outside 110-170 chars: ${descLengthIssues}`);

// 4. Check H1 count inside contentHtml of each route in ROUTE_SEO_CONFIG
let multiH1Routes = 0;
let zeroH1Routes = 0;
for (const [route, config] of Object.entries(ROUTE_SEO_CONFIG)) {
  const h1Matches = (config.contentHtml || '').match(/<h1[^>]*>.*?<\/h1>/gi) || [];
  if (h1Matches.length === 0) {
    console.log(`[ZERO H1 IN HTML] on ${route}`);
    zeroH1Routes++;
  } else if (h1Matches.length > 1) {
    console.log(`[MULTIPLE H1 IN HTML (${h1Matches.length})] on ${route}`);
    multiH1Routes++;
  }
}
console.log(`- Routes with multiple H1 in HTML: ${multiH1Routes}`);
console.log(`- Routes with zero H1 in HTML: ${zeroH1Routes}`);
