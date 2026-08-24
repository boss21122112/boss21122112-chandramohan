import { HYDERABAD_LOCATIONS_DATA } from './data/locationPagesData';
import { SPECIALIZED_SERVICES_DATA } from './data/servicePagesData';
import { COMMERCIAL_PLANTS_DATA } from './data/commercialPagesData';
import { BLOG_ARTICLES_DATA } from './data/blogArticlesData';

export interface RouteSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  h1: string;
  contentHtml: string;
}

const COMMON_HEADER = `
<header style="padding: 20px; border-bottom: 1px solid #eee; background: #fff;">
  <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
    <a href="/" style="font-size: 20px; font-weight: bold; color: #0052A3; text-decoration: none;">Rainbow Aquafresh Systems</a>
    <nav style="display: flex; flex-wrap: wrap; gap: 15px;">
      <a href="/" style="color: #333; text-decoration: none; font-weight: 500;">Home</a>
      <a href="/products/" style="color: #333; text-decoration: none; font-weight: 500;">Products & Spares</a>
      <a href="/ro-service-hyderabad" style="color: #333; text-decoration: none; font-weight: 500;">RO Service</a>
      <a href="/ro-installation-hyderabad" style="color: #333; text-decoration: none; font-weight: 500;">Installation</a>
      <a href="/ro-amc-service" style="color: #333; text-decoration: none; font-weight: 500;">RO AMC</a>
      <a href="/commercial-ro-plants" style="color: #333; text-decoration: none; font-weight: 500;">Commercial RO</a>
      <a href="/ro-repair-hyderabad" style="color: #333; text-decoration: none; font-weight: 500;">RO Repair</a>
      <a href="/ro-filter-replacement-hyderabad" style="color: #333; text-decoration: none; font-weight: 500;">Filter Replacement</a>
      <a href="/blog" style="color: #333; text-decoration: none; font-weight: 500;">Blog</a>
      <a href="/about" style="color: #333; text-decoration: none; font-weight: 500;">About</a>
      <a href="/contact" style="color: #333; text-decoration: none; font-weight: 500;">Contact</a>
    </nav>
  </div>
</header>
`;

const COMMON_FOOTER = `
<section style="margin-top: 40px; padding: 24px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
  <h2 style="font-size: 24px; font-weight: 700; color: #0f172a; margin-bottom: 12px;">Contact & Service Helpline</h2>
  <p style="margin-bottom: 8px;"><strong>Business Name:</strong> Rainbow Aquafresh Systems</p>
  <p style="margin-bottom: 8px;"><strong>Business Type:</strong> RO Water Purifier Sales, Service & Commercial RO Plants</p>
  <p style="margin-bottom: 8px;"><strong>Helpline:</strong> <a href="tel:+918885556965" style="color: #2563eb; font-weight: bold;">+91 8885556965</a> / <a href="tel:+919966555965" style="color: #2563eb;">+91 9966555965</a></p>
  <p style="margin-bottom: 8px;"><strong>Head Office Address:</strong> 16-10-27/109, 33-2RT, MCH Colony, Malakpet, Hyderabad, Telangana 500036, India</p>
  <p style="margin-bottom: 8px;"><strong>Service Areas:</strong> Covering all localities across Greater Hyderabad, Secunderabad, and Telangana</p>
  <p style="margin-bottom: 0;"><strong>Working Hours:</strong> Monday – Sunday: 8:00 AM – 9:00 PM</p>
</section>
<footer style="margin-top: 40px; padding: 20px; border-top: 1px solid #eee; background: #fff; text-align: center; font-size: 14px; color: #64748b;">
  <p>&copy; 2026 Rainbow Aquafresh Systems. All rights reserved. | <a href="/sitemap.xml" style="color: #2563eb;">XML Sitemap</a> | <a href="/robots.txt" style="color: #2563eb;">Robots.txt</a></p>
</footer>
`;

export const ROUTE_SEO_CONFIG: Record<string, RouteSEO> = {
  "/": {
    title: "Rainbow Aquafresh Systems | RO Service & Sales Hyderabad",
    description: "Rainbow Aquafresh Systems provides RO water purifier sales, installation, repair, AMC and commercial RO plant solutions in Hyderabad. Call +91 8885556965.",
    keywords: "RO Water Purifier Hyderabad, RO Service Hyderabad, RO Repair Near Me, Water Purifier Service Hyderabad, Commercial RO Plant Hyderabad, RO Installation Hyderabad, Rainbow Aquafresh Systems",
    canonical: "https://www.rainbowafs.com/",
    h1: "RO Water Purifier Sales, Installation & Repair in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">RO Water Purifier Sales, Installation & Repair in Hyderabad</h1>
          <p style="font-size: 18px; color: #475569; margin-bottom: 24px;">Rainbow Aquafresh Systems is Hyderabad's premier water purification sales, installation, repair, AMC, and commercial RO plant service provider. We deliver 100% pure, healthy, mineral-balanced drinking water with advanced TDS controllers across all localities in Hyderabad, Telangana.</p>
          <p style="font-weight: bold; color: #2563eb;">Call Now for Instant Same-Day Service: +91 8885556965 | +91 9966555965</p>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/products/": {
    title: "RO Water Purifiers & Spare Parts Hyderabad | Rainbow",
    description: "Buy domestic RO purifiers, commercial RO plants & spare membranes in Hyderabad. Original factory parts & certified technicians. Call +91 8885556965.",
    keywords: "RO Purifiers Hyderabad, RO Membranes Hyderabad, RO Booster Pump Hyderabad, Commercial RO Plant Price Hyderabad, RO Spare Parts Hyderabad, RO Technicians Hyderabad, Rainbow Aquafresh Systems",
    canonical: "https://www.rainbowafs.com/products/",
    h1: "RO Water Purifiers, Commercial Plants & Spare Parts in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>RO Water Purifiers, Commercial Plants & Spare Parts in Hyderabad</h1>
        <p>Explore our premium domestic RO purifiers, commercial RO skids, and genuine spare membranes with warranty in Hyderabad.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/products": {
    title: "RO Water Purifiers & Spare Parts Hyderabad | Rainbow",
    description: "Buy domestic RO purifiers, commercial RO plants & spare membranes in Hyderabad. Original factory parts & certified technicians. Call +91 8885556965.",
    keywords: "RO Purifiers Hyderabad, RO Membranes Hyderabad, RO Booster Pump Hyderabad, Commercial RO Plant Price Hyderabad, RO Spare Parts Hyderabad, RO Technicians Hyderabad, Rainbow Aquafresh Systems",
    canonical: "https://www.rainbowafs.com/products/",
    h1: "RO Water Purifiers, Commercial Plants & Spare Parts in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>RO Water Purifiers, Commercial Plants & Spare Parts in Hyderabad</h1>
        <p>Explore our premium domestic RO purifiers, commercial RO skids, and genuine spare membranes with warranty in Hyderabad.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-service-hyderabad": {
    title: "RO Service Hyderabad | RO Purifier Repair & Maintenance",
    description: "Top-rated RO water purifier service in Hyderabad. Doorstep technician in 90 mins. All brands Kent, Aquaguard, Pureit, Livpure. Call +91 8885556965.",
    keywords: "RO Service Hyderabad, Water Purifier Repair Hyderabad, RO Maintenance Hyderabad, RO Technician Hyderabad, Kent Service Hyderabad, Aquaguard Service Hyderabad",
    canonical: "https://www.rainbowafs.com/ro-service-hyderabad",
    h1: "RO Water Purifier Service & Repair in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>RO Water Purifier Service & Repair in Hyderabad</h1>
        <p>Doorstep RO service across all localities in Hyderabad with 100% genuine spares and certified engineers.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-installation-hyderabad": {
    title: "RO Installation Service Hyderabad | Wall Mount & Under-Sink",
    description: "Professional RO water purifier installation & reinstallation in Hyderabad. Fast doorstep service, certified plumbing & spares. Call +91 8885556965.",
    keywords: "RO Installation Hyderabad, Water Purifier Installation Hyderabad, RO Wall Mount Hyderabad, RO Shifting Hyderabad",
    canonical: "https://www.rainbowafs.com/ro-installation-hyderabad",
    h1: "RO Water Purifier Installation in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>RO Water Purifier Installation in Hyderabad</h1>
        <p>Expert wall-mount and under-sink RO purifier installation with pressure testing and TDS tuning.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-amc-service": {
    title: "RO AMC Service Hyderabad | Annual Maintenance Plans ₹1999",
    description: "Annual Maintenance Contracts (AMC) for RO water purifiers in Hyderabad. Full coverage, free filter replacement, fast repairs. Call +91 8885556965.",
    keywords: "RO AMC Hyderabad, RO Annual Maintenance Contract Hyderabad, Water Purifier AMC Hyderabad, RO Maintenance Plan",
    canonical: "https://www.rainbowafs.com/ro-amc-service",
    h1: "Annual Maintenance Contract (AMC) for RO Purifiers",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>Annual Maintenance Contract (AMC) for RO Purifiers</h1>
        <p>Protect your drinking water and save up to 40% on maintenance with comprehensive RO AMC plans in Hyderabad.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/commercial-ro-plants": {
    title: "Commercial RO Plants Hyderabad | 25 LPH to 2000 LPH",
    description: "Commercial & industrial RO plant makers in Hyderabad. 50 LPH to 2000 LPH skids with SS/FRP build, installation & AMC. Call +91 8885556965.",
    keywords: "Commercial RO Plant Hyderabad, Industrial RO Plant Hyderabad, 500 LPH RO Plant Hyderabad, 1000 LPH RO Plant Price Hyderabad",
    canonical: "https://www.rainbowafs.com/commercial-ro-plants",
    h1: "Commercial & Industrial RO Plants in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>Commercial & Industrial RO Plants in Hyderabad</h1>
        <p>Turnkey commercial RO systems for schools, hospitals, apartments, hotels, and corporate offices.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-repair-hyderabad": {
    title: "RO Repair Service Hyderabad | Same-Day Doorstep Fix",
    description: "Fast RO water purifier repair in Hyderabad. We fix low flow, leaks, pump noise, and electrical faults. 90-min arrival. Call +91 8885556965.",
    keywords: "RO Repair Hyderabad, Water Purifier Repair Hyderabad, RO Pump Repair Hyderabad, RO Leakage Fix Hyderabad",
    canonical: "https://www.rainbowafs.com/ro-repair-hyderabad",
    h1: "RO Water Purifier Repair Service in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>RO Water Purifier Repair Service in Hyderabad</h1>
        <p>Rapid diagnostic troubleshooting and repair for all RO water purifier faults.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-filter-replacement-hyderabad": {
    title: "RO Filter Replacement Hyderabad | Genuine Membrane Spares",
    description: "Doorstep RO filter and membrane replacement in Hyderabad. Original Filmtec membranes, sediment pre-filters, carbon blocks. Call +91 8885556965.",
    keywords: "RO Filter Replacement Hyderabad, RO Membrane Change Hyderabad, Water Purifier Filter Price Hyderabad, Filmtec Membrane Hyderabad",
    canonical: "https://www.rainbowafs.com/ro-filter-replacement-hyderabad",
    h1: "RO Filter & Membrane Replacement in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>RO Filter & Membrane Replacement in Hyderabad</h1>
        <p>Restore sweet taste and pure water with certified high-rejection RO filters and membranes.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/about": {
    title: "About Rainbow Aquafresh Systems | RO Experts Hyderabad",
    description: "Learn about Rainbow Aquafresh Systems, Hyderabad's trusted water purification specialists since 2004. Certified engineers. Call +91 8885556965.",
    keywords: "About Rainbow Aquafresh, Water Purifier Company Hyderabad, RO Experts Hyderabad",
    canonical: "https://www.rainbowafs.com/about",
    h1: "About Rainbow Aquafresh Systems",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>About Rainbow Aquafresh Systems</h1>
        <p>Over two decades of trusted water purification engineering and doorstep service in Hyderabad.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/contact": {
    title: "Contact Rainbow Aquafresh Systems | RO Service Helpline",
    description: "Contact Rainbow Aquafresh Systems for doorstep RO service in Hyderabad. Call +91 8885556965 or visit our Malakpet office for queries.",
    keywords: "Contact Rainbow Aquafresh, RO Service Number Hyderabad, Water Purifier Phone Number",
    canonical: "https://www.rainbowafs.com/contact",
    h1: "Contact Rainbow Aquafresh Systems",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>Contact Rainbow Aquafresh Systems</h1>
        <p>Reach our certified water treatment engineers at +91 8885556965 for instant doorstep assistance.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/blog": {
    title: "Water Purifier Blog & Buying Guides | Rainbow Aquafresh",
    description: "Read expert guides on RO water purification, TDS guidelines, filter maintenance, and technology comparisons in Hyderabad.",
    keywords: "Water Purifier Blog, RO Maintenance Guide, TDS Drinking Water Hyderabad, Water Purifier Tips",
    canonical: "https://www.rainbowafs.com/blog",
    h1: "Water Purification Guides & RO Knowledge Hub",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>Water Purification Guides & RO Knowledge Hub</h1>
        <p>Expert articles on water purification technologies, TDS standards, and DIY maintenance.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/water-guide": {
    title: "Water Purifier Blog & Buying Guides | Rainbow Aquafresh",
    description: "Read expert guides on RO water purification, TDS guidelines, filter maintenance, and technology comparisons in Hyderabad.",
    keywords: "Water Purifier Blog, RO Maintenance Guide, TDS Drinking Water Hyderabad, Water Purifier Tips",
    canonical: "https://www.rainbowafs.com/water-guide",
    h1: "Water Purification Guides & RO Knowledge Hub",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>Water Purification Guides & RO Knowledge Hub</h1>
        <p>Expert articles on water purification technologies, TDS standards, and DIY maintenance.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-water-purifier-service-kothapet-hyderabad": {
    title: "RO Water Purifier Service Kothapet Hyderabad | Rainbow",
    description: "Doorstep RO service in Kothapet, Chaitanyapuri, LB Nagar & Malakpet. 90-min arrival, certified technicians, genuine spares. Call +91 8885556965.",
    keywords: "RO Service Kothapet, Water Purifier Repair Kothapet, RO Filter Replacement Kothapet, Kent Service Kothapet",
    canonical: "https://www.rainbowafs.com/ro-water-purifier-service-kothapet-hyderabad",
    h1: "RO Water Purifier Service & Repair in Kothapet, Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>RO Water Purifier Service & Repair in Kothapet, Hyderabad</h1>
        <p>Fast doorstep water purifier repair and genuine filter replacement in Kothapet.</p>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-service-kothapet-hyderabad": {
    title: "RO Water Purifier Service Kothapet Hyderabad | Rainbow",
    description: "Doorstep RO service in Kothapet, Chaitanyapuri, LB Nagar & Malakpet. 90-min arrival, certified technicians, genuine spares. Call +91 8885556965.",
    keywords: "RO Service Kothapet, Water Purifier Repair Kothapet, RO Filter Replacement Kothapet, Kent Service Kothapet",
    canonical: "https://www.rainbowafs.com/ro-water-purifier-service-kothapet-hyderabad",
    h1: "RO Water Purifier Service & Repair in Kothapet, Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>RO Water Purifier Service & Repair in Kothapet, Hyderabad</h1>
        <p>Fast doorstep water purifier repair and genuine filter replacement in Kothapet.</p>
        ${COMMON_FOOTER}
      </main>
    `
  }
};

// 1. Populate the 20 Location Pages
Object.entries(HYDERABAD_LOCATIONS_DATA).forEach(([key, loc]) => {
  const routePath = `/${loc.slug}`;
  ROUTE_SEO_CONFIG[routePath] = {
    title: `RO Service & Repair in ${loc.name}, Hyderabad | Rainbow`,
    description: `Doorstep RO service & repair in ${loc.name}, Hyderabad. Fast 90-min technician arrival, genuine filter replacement & AMC. Call +91 8885556965.`,
    keywords: `RO Service ${loc.name}, Water Purifier Repair ${loc.name}, RO Filter Replacement ${loc.name}, Kent Service ${loc.name}, Aquaguard Service ${loc.name}, RO Repair Hyderabad`,
    canonical: `https://www.rainbowafs.com/${loc.slug}`,
    h1: `RO Water Purifier Service & Repair in ${loc.name}, Hyderabad`,
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>RO Water Purifier Service & Repair in ${loc.name}, Hyderabad</h1>
        <p>Providing expert doorstep RO repair, filter replacements, installation, and AMC services across ${loc.name} (PIN: ${loc.pincode}) and nearby areas in Hyderabad.</p>
        <div style="margin: 20px 0; padding: 15px; background: #f1f5f9; border-radius: 8px;">
          <p><strong>Raw Water TDS Range:</strong> ${loc.tdsRange}</p>
          <p><strong>Water Source:</strong> ${loc.waterSource}</p>
          <p><strong>Doorstep Arrival:</strong> Within 60 to 90 minutes</p>
        </div>
        <p>Call our local technician helpline now: <a href="tel:+918885556965" style="color: #2563eb; font-weight: bold;">+91 8885556965</a></p>
        ${COMMON_FOOTER}
      </main>
    `
  };
});

// 2. Populate the 15 Specialized & Brand Service Pages
Object.entries(SPECIALIZED_SERVICES_DATA).forEach(([key, srv]) => {
  const routePath = `/${srv.slug}`;
  let title = `${srv.shortTitle} in Hyderabad | Rainbow Aquafresh`;
  if (title.length > 60) {
    title = `${srv.shortTitle} Hyderabad | Rainbow`;
  }
  ROUTE_SEO_CONFIG[routePath] = {
    title,
    description: `${srv.shortTitle} in Hyderabad. Genuine parts, certified technicians, same-day doorstep service and warranty. Call +91 8885556965.`,
    keywords: `${srv.shortTitle} Hyderabad, RO Repair Hyderabad, RO Spares Hyderabad, Water Purifier Service Hyderabad`,
    canonical: `https://www.rainbowafs.com/${srv.slug}`,
    h1: srv.title,
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>${srv.title}</h1>
        <p>${srv.description}</p>
        <div style="margin: 20px 0; padding: 15px; background: #f1f5f9; border-radius: 8px;">
          <p><strong>Estimated Price:</strong> ${srv.pricingRange}</p>
          <p><strong>Warranty on Parts:</strong> ${srv.warranty}</p>
          <p><strong>Response Time:</strong> 60 to 90 Minutes Doorstep</p>
        </div>
        <p>Book technician now: <a href="tel:+918885556965" style="color: #2563eb; font-weight: bold;">+91 8885556965</a></p>
        ${COMMON_FOOTER}
      </main>
    `
  };
});

// 3. Populate the 8 Commercial RO Plant Pages
Object.entries(COMMERCIAL_PLANTS_DATA).forEach(([key, plant]) => {
  const routePath = `/${plant.slug}`;
  let title = `${plant.shortTitle} in Hyderabad | Rainbow`;
  if (title.length > 60) {
    title = `${plant.shortTitle} Hyderabad | Rainbow`;
  }
  ROUTE_SEO_CONFIG[routePath] = {
    title,
    description: `${plant.shortTitle} in Hyderabad. Industrial grade SS/FRP skids, turnkey installation, commissioning & AMC. Call +91 8885556965.`,
    keywords: `${plant.shortTitle} Hyderabad, Commercial RO Hyderabad, Industrial Water Treatment Hyderabad, 500 LPH Plant Price`,
    canonical: `https://www.rainbowafs.com/${plant.slug}`,
    h1: plant.title,
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1>${plant.title}</h1>
        <p>${plant.description}</p>
        <div style="margin: 20px 0; padding: 15px; background: #f1f5f9; border-radius: 8px;">
          <p><strong>Capacity Range:</strong> ${plant.capacityRange}</p>
          <p><strong>Engineering:</strong> ${plant.badge}</p>
        </div>
        <p>Request commercial proposal: <a href="tel:+918885556965" style="color: #2563eb; font-weight: bold;">+91 8885556965</a></p>
        ${COMMON_FOOTER}
      </main>
    `
  };
});

// 4. Populate the 15 Blog Article Pages
Object.entries(BLOG_ARTICLES_DATA).forEach(([key, art]) => {
  const routePath = `/blog/${art.slug}`;
  let title = art.title;
  if (title.length > 40) {
    title = `${title.slice(0, 38)}... | Rainbow Blog`;
  } else {
    title = `${title} | Rainbow Aquafresh Blog`;
  }
  ROUTE_SEO_CONFIG[routePath] = {
    title,
    description: `${art.excerpt.slice(0, 90)}... Read expert guide at Rainbow Aquafresh Systems Hyderabad.`,
    keywords: `${art.title}, Water Purifier Blog, RO Advice Hyderabad, Water Science`,
    canonical: `https://www.rainbowafs.com/blog/${art.slug}`,
    h1: art.title,
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <article>
          <p style="color: #64748b; font-size: 14px;">Category: ${art.category} | ${art.readTime} | ${art.publishDate}</p>
          <h1>${art.title}</h1>
          <p style="font-size: 18px; color: #475569;">${art.excerpt}</p>
          ${art.contentParagraphs.map(p => `
            <div>
              ${p.heading ? `<h2>${p.heading}</h2>` : ''}
              <p>${p.text}</p>
            </div>
          `).join('')}
        </article>
        ${COMMON_FOOTER}
      </main>
    `
  };
});
