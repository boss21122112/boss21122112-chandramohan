import fs from "fs";
import path from "path";
import { ROUTE_SEO_CONFIG } from "../src/seo-renderer";
import { BLOG_ARTICLES_DATA } from "../src/data/blogArticlesData";

const validRoutes = new Set(Object.keys(ROUTE_SEO_CONFIG));
console.log("Total valid SEO routes found:", validRoutes.size);

function getFiles(dir: string): string[] {
  const subdirs = fs.readdirSync(dir);
  const files = subdirs.map(subdir => {
    const res = path.resolve(dir, subdir);
    return fs.statSync(res).isDirectory() ? getFiles(res) : [res];
  });
  return files.flat();
}

const allFiles = getFiles("src").filter(f => f.endsWith(".tsx") || f.endsWith(".ts"));

let broken: { file: string; link: string }[] = [];
let uppercase: { file: string; link: string }[] = [];
let allHrefs = new Set<string>();

for (const f of allFiles) {
  const content = fs.readFileSync(f, "utf-8");
  const hrefRegex = /href=["'`](\/[^"'`#?]*)/g;
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const link = match[1];
    
    // Handle template literals like /blog/${post.slug} or /blog/${art.slug}
    if (link.includes("${post.slug}") || link.includes("${art.slug}")) {
      Object.values(BLOG_ARTICLES_DATA).forEach(art => {
        allHrefs.add(`/blog/${art.slug}`);
      });
      continue;
    }

    allHrefs.add(link);
    if (/[A-Z]/.test(link)) {
      uppercase.push({ file: path.relative(".", f), link });
    }
    if (
      !validRoutes.has(link) &&
      !link.startsWith("/icons/") &&
      !link.startsWith("/assets/") &&
      !link.endsWith(".xml") &&
      !link.endsWith(".txt") &&
      !link.endsWith(".png") &&
      !link.endsWith(".svg") &&
      !link.endsWith(".jpg") &&
      !link.endsWith(".webp")
    ) {
      broken.push({ file: path.relative(".", f), link });
    }
  }
}

console.log("Total unique internal hrefs:", allHrefs.size);
console.log("Uppercase links:", uppercase);
console.log("Broken links:", broken);

// Also check for orphan routes in ROUTE_SEO_CONFIG
const orphanRoutes = [...validRoutes].filter(route => !allHrefs.has(route));
console.log("Orphan routes count:", orphanRoutes.length);
if (orphanRoutes.length > 0) {
  console.log("Orphan routes list:", orphanRoutes);
}

