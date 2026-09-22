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
<header style="padding: 20px; border-bottom: 1px solid #e2e8f0; background: #ffffff;">
  <div style="max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px;">
    <a href="/" style="font-size: 22px; font-weight: 800; color: #0052A3; text-decoration: none; display: flex; align-items: center; gap: 8px;">
      Rainbow Aquafresh Systems
    </a>
    <nav style="display: flex; flex-wrap: wrap; gap: 15px; align-items: center; font-size: 14px;">
      <a href="/" style="color: #334155; text-decoration: none; font-weight: 600;">Home</a>
      <a href="/products/" style="color: #334155; text-decoration: none; font-weight: 600;">Products & Spares</a>
      <a href="/ro-service-hyderabad" style="color: #334155; text-decoration: none; font-weight: 600;">RO Service</a>
      <a href="/ro-installation-hyderabad" style="color: #334155; text-decoration: none; font-weight: 600;">Installation</a>
      <a href="/ro-amc-service" style="color: #334155; text-decoration: none; font-weight: 600;">RO AMC</a>
      <a href="/commercial-ro-plants" style="color: #334155; text-decoration: none; font-weight: 600;">Commercial RO</a>
      <a href="/ro-repair-hyderabad" style="color: #334155; text-decoration: none; font-weight: 600;">RO Repair</a>
      <a href="/ro-filter-replacement-hyderabad" style="color: #334155; text-decoration: none; font-weight: 600;">Filter Replacement</a>
      <a href="/blog" style="color: #334155; text-decoration: none; font-weight: 600;">Knowledge Hub</a>
      <a href="/about" style="color: #334155; text-decoration: none; font-weight: 600;">About Us</a>
      <a href="/contact" style="color: #334155; text-decoration: none; font-weight: 600;">Contact</a>
    </nav>
  </div>
</header>
`;

const COMMON_FOOTER = `
<section style="margin-top: 50px; padding: 32px 24px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
  <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Rainbow Aquafresh Systems — Hyderabad Customer Support</h2>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; font-size: 14px; color: #475569; line-height: 1.6;">
    <div>
      <p style="margin-bottom: 8px;"><strong>Helpline Phone:</strong> <a href="tel:+918885556965" style="color: #2563eb; font-weight: bold; text-decoration: none;">+91 8885556965</a></p>
      <p style="margin-bottom: 8px;"><strong>Alternate Support:</strong> <a href="tel:+918341256965" style="color: #2563eb; font-weight: bold; text-decoration: none;">+91 8341256965</a></p>
      <p style="margin-bottom: 8px;"><strong>WhatsApp Support:</strong> <a href="https://wa.me/918885556965" style="color: #16a34a; font-weight: bold; text-decoration: none;">Chat with RO Expert</a></p>
      <p style="margin-bottom: 0;"><strong>Customer Support Email:</strong> support@rainbowafs.com</p>
    </div>
    <div>
      <p style="margin-bottom: 8px;"><strong>Head Office Address:</strong> 16-10-27/109, 37-2RT, MCH Colony, Malakpet, Hyderabad, Telangana 500036, India</p>
      <p style="margin-bottom: 8px;"><strong>Service Hours:</strong> Monday to Sunday: 8:00 AM – 9:00 PM</p>
      <p style="margin-bottom: 0;"><strong>Doorstep Response:</strong> Within 60 to 90 Minutes across Greater Hyderabad</p>
    </div>
    <div>
      <p style="margin-bottom: 8px;"><strong>Popular Service Areas:</strong> Dilsukhnagar, Kothapet, LB Nagar, Kukatpally, Miyapur, Gachibowli, Kondapur, Hitech City, Uppal, Secunderabad, Banjara Hills</p>
      <p style="margin-bottom: 0;"><strong>Brands Serviced:</strong> Kent, Eureka Forbes Aquaguard, Pureit, Livpure, AO Smith, Havells, Blue Star & Commercial RO Plants</p>
    </div>
  </div>
</section>
<footer style="margin-top: 30px; padding: 24px 20px; border-top: 1px solid #e2e8f0; background: #ffffff; text-align: center; font-size: 13px; color: #64748b;">
  <p style="margin-bottom: 8px;">&copy; 2026 Rainbow Aquafresh Systems. All rights reserved. Hyderabad's Trusted Water Purification Experts Since 2004.</p>
  <p style="margin: 0;">
    <a href="/" style="color: #2563eb; text-decoration: none; margin: 0 8px;">Home</a> |
    <a href="/products/" style="color: #2563eb; text-decoration: none; margin: 0 8px;">Products</a> |
    <a href="/ro-service-hyderabad" style="color: #2563eb; text-decoration: none; margin: 0 8px;">RO Service</a> |
    <a href="/ro-amc-service" style="color: #2563eb; text-decoration: none; margin: 0 8px;">RO AMC</a> |
    <a href="/commercial-ro-plants" style="color: #2563eb; text-decoration: none; margin: 0 8px;">Commercial RO</a> |
    <a href="/blog" style="color: #2563eb; text-decoration: none; margin: 0 8px;">Knowledge Hub</a> |
    <a href="/sitemap.xml" style="color: #2563eb; text-decoration: none; margin: 0 8px;">XML Sitemap</a> |
    <a href="/robots.txt" style="color: #2563eb; text-decoration: none; margin: 0 8px;">Robots.txt</a>
  </p>
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">RO Water Purifier Sales, Installation & Repair in Hyderabad</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Welcome to Rainbow Aquafresh Systems, Hyderabad's premier water purification sales, doorstep repair, AMC maintenance, and commercial RO plant engineering specialist since 2004. We deliver 100% pure, mineral-balanced, safe drinking water to over 50,000 homes, apartments, schools, hospitals, and commercial establishments across Greater Hyderabad and Secunderabad.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Hyderabad groundwater varies drastically by locality, ranging from 800 PPM to over 2,200 PPM Total Dissolved Solids (TDS) in deep borewells. Our certified water purification technicians carry calibrated digital testing equipment and 100% genuine replacement components directly to your doorstep within 90 minutes.
          </p>
          <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 16px 20px; border-radius: 4px; margin-bottom: 30px;">
            <p style="margin: 0; font-weight: 700; color: #1e40af; font-size: 16px;">
              Emergency Doorstep RO Helpline: <a href="tel:+918885556965" style="color: #1d4ed8; text-decoration: underline;">+91 8885556965</a> | Honest ₹299 Diagnostic (Waived on Repair)
            </p>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Comprehensive Water Purification Services in Hyderabad</h2>
          <p style="color: #475569; margin-bottom: 16px;">We offer end-to-end water treatment solutions tailored to every home and business size:</p>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>Domestic RO Purifier Sales & Fitting:</strong> Modern multi-stage RO+UV+UF systems equipped with copper alkaline and mineral replenishment cartridges.</li>
            <li><strong>Doorstep Breakdown Repair & Troubleshooting:</strong> Resolving water leakages, low output flow, foul taste, vibrating booster pumps, and electrical power failures within 90 minutes.</li>
            <li><strong>Authentic Filter & Membrane Replacement:</strong> Original USA Filmtec and NSF-certified 75/80/100 GPD high-rejection TFC membranes, spun sediment pre-filters, and activated carbon blocks.</li>
            <li><strong>Annual Maintenance Contracts (AMC):</strong> Comprehensive 365-day protection plans starting at ₹1,999/year with free periodic filter replacements and zero breakdown labor charges.</li>
            <li><strong>Commercial & Industrial RO Plants:</strong> Custom-engineered stainless steel and FRP skids from 50 LPH to 2,000 LPH for institutions, hostels, and gated communities.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Multi-Brand Water Purifier Service Center</h2>
          <p style="color: #475569; margin-bottom: 16px;">Our field engineers are factory-trained to diagnose, service, and calibrate all leading RO water purifier brands in India:</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px;">
              <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Kent RO Service</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Grand Plus, Prime, Pearl, Superb, and Supreme models serviced with genuine Kent spares.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px;">
              <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Eureka Forbes Aquaguard</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Geneus, Enhance, Blaze, and Superb models repaired with original UV lamps and HD filters.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px;">
              <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Pureit & Livpure RO</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Ultima, Copper+, Touch, and Glo series serviced with certified GermanKits and membranes.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px;">
              <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 8px;">AO Smith & Havells</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">ProPlanet, Z8, Max, and Digiplus purifiers serviced with genuine factory components.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Frequently Asked Questions About RO Service in Hyderabad</h2>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">How quickly can a technician reach my location in Hyderabad?</h3>
              <p style="color: #475569; margin: 0;">Our mobile service engineers are stationed across all major zones in Hyderabad (Dilsukhnagar, LB Nagar, Kukatpally, Gachibowli, Secunderabad, etc.), ensuring arrival within 60 to 90 minutes of booking.</p>
            </div>
            <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">What is your basic inspection charge for RO repair?</h3>
              <p style="color: #475569; margin: 0;">We charge a transparent diagnostic fee of ₹299 for a thorough 12-point health inspection and digital TDS test. If you choose to proceed with any repair or spare replacement, the diagnostic fee is completely waived!</p>
            </div>
            <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Do you provide a warranty on replaced spare parts?</h3>
              <p style="color: #475569; margin: 0;">Yes, all our replacement booster pumps, SMPS power adapters, and TFC membranes come with a written warranty of 6 to 12 months for complete peace of mind.</p>
            </div>
          </div>
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">RO Water Purifiers, Commercial Plants & Spare Parts in Hyderabad</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Explore Rainbow Aquafresh Systems' comprehensive catalog of 100% genuine water purification systems, commercial RO skid assemblies, and certified replacement spare parts. We serve residential homeowners, gated communities, restaurants, hospitals, and industrial facilities across Hyderabad and Telangana.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            All products are rigorously quality-inspected, compliant with BIS 10500 drinking water parameters, and backed by manufacturer warranty with professional doorstep installation by our certified technicians.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Domestic Water Purifiers Lineup</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>Rainbow Copper Alkaline RO+UV+UF+TDS Controller:</strong> Advanced 7-stage purification infused with essential copper, magnesium, and calcium ions. Maintains pH 8.0–8.5 for antioxidant hydration.</li>
            <li><strong>Under-Sink Hydro-Pneumatic RO System:</strong> Compact space-saving design with stainless steel faucet, high-flow booster pump, and pressurized food-grade storage tank.</li>
            <li><strong>Heavy Borewell Water Specialist RO (Up to 2500 PPM):</strong> High-pressure dual-pump configuration equipped with anti-scalant dosing and Dow Filmtec TFC membrane.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Commercial & Industrial RO Plants (50 LPH to 2000 LPH)</h2>
          <p style="color: #475569; margin-bottom: 16px;">Heavy-duty water purification plants engineered for continuous industrial operations:</p>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>50 LPH to 100 LPH RO Skids:</strong> Ideal for corporate offices, diagnostic laboratories, dental clinics, and small cafes.</li>
            <li><strong>250 LPH to 500 LPH RO Plants:</strong> Perfect for student hostels, schools, boutique hotels, and apartment blocks of 20–50 flats.</li>
            <li><strong>1000 LPH to 2000 LPH Industrial Plants:</strong> Designed for gated community central water stations, manufacturing units, and hospital dialysis centers.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">100% Genuine Spare Parts & Replacement Consumables</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 8px;">High-Rejection Membranes</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">USA Filmtec, Vontron, and CSM 75/80/100 GPD TFC membranes with 97% salt rejection.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Copper Booster Pumps</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">100% pure copper wound 75 GPD, 100 GPD, and 150 GPD pumps delivering up to 130 PSI pressure.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 8px;">Pre-Filters & Carbon Blocks</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">5-micron spun polypropylene filters, coconut shell carbon blocks, and inline sediment cartridges.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 18px; font-weight: 700; color: #1e293b; margin-bottom: 8px;">SMPS & Electrical Spares</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">24V / 36V 2.5A SMPS power supplies, solenoid valves (SV), low-pressure switches, and auto-cutoff float valves.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Frequently Asked Questions About RO Products in Hyderabad</h2>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Do you deliver and install water purifiers across Hyderabad?</h3>
              <p style="color: #475569; margin: 0;">Yes, we offer same-day doorstep delivery and certified plumbing installation across all areas in Hyderabad and Secunderabad with free water TDS testing.</p>
            </div>
            <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">How do I order commercial RO plant quotes for my building?</h3>
              <p style="color: #475569; margin: 0;">Call our commercial engineering helpline at +91 8885556965 to arrange a free site inspection, raw water chemical testing, and a customized techno-commercial proposal.</p>
            </div>
          </div>
        </section>
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">RO Water Purifier Service & Repair in Hyderabad</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Looking for reliable, professional, and prompt RO water purifier service in Hyderabad? Rainbow Aquafresh Systems operates a dedicated network of mobile field engineers providing doorstep RO service, emergency breakdown repairs, filter changes, and AMC maintenance within 90 minutes of booking.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Whether your purifier is leaking water, dispensing bad-tasting water, running continuously, or refusing to turn on, our certified technicians carry digital diagnostic tools and genuine spares to fix the issue in a single visit.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our 12-Point Comprehensive RO Health Audit</h2>
          <p style="color: #475569; margin-bottom: 16px;">Every routine service call includes a thorough inspection of all mechanical and electrical components:</p>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>Digital TDS & Water Hardness Test:</strong> We test both raw input water and purified output water to verify membrane salt rejection efficiency.</li>
            <li><strong>Booster Pump Pressure Measurement:</strong> Ensuring pump delivers 80–120 PSI hydrostatic pressure needed for optimal filtration.</li>
            <li><strong>Pre-Filter & Carbon Media Audit:</strong> Checking spun pre-filters and carbon blocks for silt choking and chlorine saturation.</li>
            <li><strong>Membrane Descaling & Flush:</strong> Clearing mineral scale accumulation from the microscopic membrane pores.</li>
            <li><strong>Electrical SMPS & Valve Verification:</strong> Inspecting 24V adapter stability, auto-cutoff float switches, and solenoid valve seals.</li>
            <li><strong>Antibacterial Storage Tank Sanitization:</strong> Complete chemical-free cleaning and disinfection of the internal water storage reservoir.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Transparent Pricing for Hyderabad RO Services</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">General Service & Health Check</h3>
              <p style="font-size: 22px; font-weight: 800; color: #2563eb; margin-bottom: 8px;">₹299</p>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Full 12-point health audit, TDS calibration, filter wash, and pipe leak test.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">Full Filter Kit Replacement</h3>
              <p style="font-size: 22px; font-weight: 800; color: #2563eb; margin-bottom: 8px;">₹1,200 – ₹1,800</p>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Sediment filter + carbon block + post carbon + mineral cartridge with fitting.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">RO Membrane Change</h3>
              <p style="font-size: 22px; font-weight: 800; color: #2563eb; margin-bottom: 8px;">₹1,400 – ₹2,400</p>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Original 75/80/100 GPD TFC Membrane with flow restrictor & warranty.</p>
            </div>
          </div>
        </section>
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">RO Water Purifier Installation in Hyderabad</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Moved into a new home or purchased a new water purifier? Rainbow Aquafresh Systems provides precision water purifier installation, uninstallation, relocation, and re-installation services across all localities in Hyderabad and Secunderabad.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Improper installation often leads to hidden water leakages, low filtration pressure, or electrical short circuits. Our certified technicians follow strict standard operating procedures to ensure 100% leak-proof food-grade connections and optimal water flow.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Types of RO Installation We Handle</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>Wall-Mount Water Purifier Installation:</strong> Secure heavy-duty bracket mounting on tile, granite, or brick walls without causing tile cracks or chipping.</li>
            <li><strong>Under-Sink / Kitchen Island RO Fitting:</strong> Seamless installation under the modular kitchen sink with specialized stainless steel gooseneck faucets and pressure tank alignment.</li>
            <li><strong>Tabletop & Countertop RO Setup:</strong> Clean, non-invasive countertop placement with discreet water feed diverter valves and hidden drainage tubing.</li>
            <li><strong>Home Shifting & Complete Relocation:</strong> Professional uninstallation from your old house, safe transport packaging, and re-installation at your new address.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Step-by-Step Installation Process</h2>
          <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px;">
            <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 18px; border-radius: 4px;">
              <strong>Step 1: Inlet Water Pressure & TDS Audit</strong> — We check plumbing pressure and raw water TDS to calibrate flow restrictors and booster pump cutoffs.
            </div>
            <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 18px; border-radius: 4px;">
              <strong>Step 2: Precision Wall Drilling & Mounting</strong> — Level-calibrated drilling using diamond-tipped drill bits to preserve wall aesthetics.
            </div>
            <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 18px; border-radius: 4px;">
              <strong>Step 3: Food-Grade Plumbing & Diverter Valve Hookup</strong> — Connecting 1/4" and 3/8" certified food-grade tubing and brass inlet diverters.
            </div>
            <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 14px 18px; border-radius: 4px;">
              <strong>Step 4: Initial System Flush & Taste Calibration</strong> — Performing a complete 10-liter flush of carbon fines and calibrating mineral levels.
            </div>
          </div>
        </section>
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">Annual Maintenance Contract (AMC) for RO Purifiers</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Protect your drinking water quality and eliminate unexpected repair bills with Rainbow Aquafresh Systems' Annual Maintenance Contracts (AMC). Our comprehensive plans start at just ₹1,999/year and include scheduled filter replacements, regular sanitization visits, and unlimited zero-charge breakdown repairs across all Hyderabad localities.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Hard borewell water in Hyderabad causes rapid mineral scaling on RO membranes and chokes sediment pre-filters every 3 to 6 months. An active AMC ensures your water purifier operates at maximum efficiency, extends equipment lifespan, and guarantees safe drinking water 365 days a year for your entire family.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our RO AMC Plan Options</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 24px;">
            <div style="border: 2px solid #e2e8f0; padding: 24px; border-radius: 10px; background: #ffffff;">
              <h3 style="font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 6px;">Essential Care AMC</h3>
              <p style="font-size: 24px; font-weight: 800; color: #2563eb; margin-bottom: 12px;">₹1,999 <span style="font-size: 14px; font-weight: 400; color: #64748b;">/ Year</span></p>
              <ul style="list-style-type: check; padding-left: 20px; font-size: 14px; color: #475569; line-height: 1.8;">
                <li>3 Scheduled Preventive Maintenance Visits</li>
                <li>Free Spun Pre-Filter Replacements (2 Nos)</li>
                <li>Free Sediment & Carbon Filter Replacement (1 Set)</li>
                <li>Unlimited Emergency Breakdown Visits</li>
                <li>Tank Cleaning & Digital TDS Check</li>
              </ul>
            </div>
            <div style="border: 2px solid #2563eb; padding: 24px; border-radius: 10px; background: #eff6ff; position: relative;">
              <div style="position: absolute; top: -12px; right: 20px; background: #2563eb; color: #fff; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-transform: uppercase;">Most Popular</div>
              <h3 style="font-size: 20px; font-weight: 800; color: #1e3a8a; margin-bottom: 6px;">Comprehensive Shield AMC</h3>
              <p style="font-size: 24px; font-weight: 800; color: #2563eb; margin-bottom: 12px;">₹3,499 <span style="font-size: 14px; font-weight: 400; color: #64748b;">/ Year</span></p>
              <ul style="list-style-type: check; padding-left: 20px; font-size: 14px; color: #1e3a8a; line-height: 1.8;">
                <li><strong>Includes 1 Brand New TFC RO Membrane</strong></li>
                <li><strong>Includes Booster Pump & SMPS Coverage</strong></li>
                <li>Full Filter Kit Replacement (Sediment + Carbon)</li>
                <li>4 Scheduled Periodic Maintenance Visits</li>
                <li>Zero Labor or Spare Replacement Charges</li>
              </ul>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">What is Covered Under Comprehensive AMC</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>All Consumable Filters:</strong> Free replacement of 5-micron spun sediment filters, granular activated carbon filters, and post-carbon polishing cartridges during the contract period.</li>
            <li><strong>Electrical Components:</strong> Replacement or repair of faulty 24V SMPS adapters, solenoid valves (SV), low-pressure switches, and auto-cutoff float switches.</li>
            <li><strong>Booster Pump & Mechanicals:</strong> Servicing and replacement of pump heads, vibration dampening dampers, and plumbing elbows.</li>
            <li><strong>Priority Doorstep Response:</strong> AMC customers receive priority 60-minute technician dispatch for any unexpected breakdown or leakage.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Frequently Asked Questions About RO AMC</h2>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Can I buy an AMC for a non-Rainbow brand water purifier?</h3>
              <p style="color: #475569; margin: 0;">Yes, we provide AMC plans for Kent, Aquaguard, Pureit, Livpure, AO Smith, Havells, and all assembled RO units across Hyderabad.</p>
            </div>
            <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">How do scheduled maintenance visits work?</h3>
              <p style="color: #475569; margin: 0;">Our automated service CRM alerts you every 90 to 120 days to schedule a convenient appointment for preventive maintenance, filter cleaning, and TDS testing.</p>
            </div>
          </div>
        </section>
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">Commercial & Industrial RO Plants in Hyderabad</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Rainbow Aquafresh Systems engineers, fabricates, and commissions high-capacity commercial and industrial Reverse Osmosis (RO) plants across Hyderabad and Telangana. Capacities range from 25 LPH, 50 LPH, 250 LPH, 500 LPH, to 2,000 LPH with heavy-duty SS-304 stainless steel or corrosion-resistant FRP skids.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Engineered to handle high-salinity groundwater, borewell hardness up to 3,000 PPM TDS, and heavy daily duty cycles for apartment complexes, educational campuses, hospitals, hotels, and manufacturing facilities.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Commercial RO Engineering Specifications</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Membrane Assembly</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Dow Filmtec & Hydranautics 4040 / 8040 industrial spiral-wound polyamide elements with 99.5% salt rejection.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">High-Pressure Pumping</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">CRI & CNP stainless steel vertical multistage high-pressure pumps built for continuous duty cycles.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Pre-Treatment Vessels</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Dual media sand filters and granular activated carbon vessels with manual or automatic multiport backwash valves.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Automation & Safety</h3>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Microprocessor / PLC automation panels, low & high-pressure cutoffs, auto-flush timers, and digital rotameters.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Turnkey Engineering, Delivery & Post-Sales Support</h2>
          <p style="color: #475569; margin-bottom: 16px;">
            From detailed raw water chemical laboratory analysis to skid manufacturing and on-site piping, our engineering team handles the complete implementation lifecycle. We also provide customized Operation & Maintenance (O&M) contracts and genuine replacement membranes.
          </p>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li>Custom skid layout matching your plant room space constraints.</li>
            <li>Energy-efficient high-pressure pumps reducing operational electricity costs by up to 25%.</li>
            <li>Cleaning-In-Place (CIP) chemical cleaning systems to extend membrane service life up to 3–4 years.</li>
            <li>Compliance with BIS 10500 and FSSAI commercial drinking water norms.</li>
          </ul>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-repair-hyderabad": {
    title: "RO Repair Hyderabad | Water Purifier Breakdown Service",
    description: "Emergency RO repair service in Hyderabad. Same day breakdown fix, certified technicians, honest diagnostic fee. Call +91 8885556965.",
    keywords: "RO Repair Hyderabad, Water Purifier Repair Hyderabad, RO Breakdown Hyderabad, RO Service Near Me, RO Technician Hyderabad",
    canonical: "https://www.rainbowafs.com/ro-repair-hyderabad",
    h1: "RO Water Purifier Repair Service in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">RO Water Purifier Repair Service in Hyderabad</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Is your water purifier leaking, vibrating loudly, or refusing to dispense water? Rainbow Aquafresh Systems provides emergency, same-day RO breakdown repair across all areas in Hyderabad and Secunderabad.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Our mobile technicians carry all standard replacement parts—including booster pumps, SMPS adapters, solenoid valves, float switches, and TFC membranes—so that over 95% of breakdown issues are repaired on the very first visit.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Common RO Breakdown Problems We Resolve</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>No Power / Purifier Not Turning On:</strong> Burnt 24V SMPS adapter, blown internal fuse, or faulty low-pressure switch.</li>
            <li><strong>Continuous Wastewater Drainage:</strong> Choked flow restrictor (FR), failed solenoid valve (SV) stuck open, or exhausted membrane.</li>
            <li><strong>Purifier Running But Tank Remains Empty:</strong> Weak booster pump head, clogged sediment pre-filter, or airlock in filtration tubes.</li>
            <li><strong>Loud Vibrating or Humming Noise:</strong> Pump bearing wear, loose internal mounting screws, or air trapped inside pump chamber.</li>
            <li><strong>Water Leaking from Unit Base:</strong> Cracked filter housing, loose push-fit elbows, or ruptured pressure tube.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Transparent Repair Procedure & Guarantee</h2>
          <p style="color: #475569; margin-bottom: 16px;">
            We believe in honest, upfront pricing. Our technician begins with a comprehensive 12-point inspection, identifies the root cause, and provides a clear cost estimate before starting any work. All replacement spares come with a 6 to 12-month written guarantee.
          </p>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li>60 to 90 minute doorstep arrival across Greater Hyderabad.</li>
            <li>Digital TDS calibration before and after the repair.</li>
            <li>Zero hidden labor or travel surcharges.</li>
          </ul>
        </section>
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">RO Filter & Membrane Replacement in Hyderabad</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Ensure pure, healthy, and mineral-balanced drinking water with certified doorstep RO filter and membrane replacement by Rainbow Aquafresh Systems. We supply 100% genuine sealed filter cartridges compatible with all major domestic and commercial water purifiers across Hyderabad.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Filters are the vital organs of your water purifier. Operating with choked sediment or saturated carbon filters forces raw impurities directly onto the delicate RO membrane, causing premature failure and contaminated drinking water.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Standard Filter Replacement Schedule</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">Spun Polypropylene Pre-Filter</h3>
              <p style="font-size: 14px; font-weight: 700; color: #2563eb; margin-bottom: 8px;">Every 3 to 6 Months</p>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Traps sand, rust, silt, and physical debris to protect internal fine filtration stages.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">Activated Carbon Block Filter</h3>
              <p style="font-size: 14px; font-weight: 700; color: #2563eb; margin-bottom: 8px;">Every 6 to 12 Months</p>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Adsorbs chlorine, organic chemicals, bad odors, and pesticide residues.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">TFC Reverse Osmosis Membrane</h3>
              <p style="font-size: 14px; font-weight: 700; color: #2563eb; margin-bottom: 8px;">Every 18 to 24 Months</p>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Filters heavy metals, arsenic, lead, fluoride, and dissolved chemical hardness.</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">Post-Carbon & Alkaline Mineralizer</h3>
              <p style="font-size: 14px; font-weight: 700; color: #2563eb; margin-bottom: 8px;">Every 12 Months</p>
              <p style="font-size: 14px; color: #64748b; margin: 0;">Restores natural sweet taste and replenishes essential calcium and magnesium ions.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Why Choose Rainbow Genuine Replacement Cartridges</h2>
          <p style="color: #475569; margin-bottom: 16px;">
            Counterfeit and generic filter cartridges available in unauthorized markets often use inferior recycled plastics and low-density carbon granules that disintegrate into your drinking water. Rainbow Aquafresh Systems only installs 100% genuine, certified food-grade replacement cartridges with verified batch serialization.
          </p>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li>100% genuine factory sealed cartridges with verified QR security tags.</li>
            <li>Free complete tank sanitization and digital TDS calibration included with every full service kit.</li>
            <li>Certified food-grade non-leaching plastic construction.</li>
            <li>Compliant with NSF/ANSI 58 and BIS 10500 drinking water parameters.</li>
          </ul>
        </section>
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">About Rainbow Aquafresh Systems</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            For over two decades, Rainbow Aquafresh Systems has been at the forefront of drinking water purification technology across Hyderabad and Telangana. Established in 2004, our mission has been simple and uncompromising: to deliver pure, healthy, and mineral-balanced drinking water to every household, community, and business.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            What began as a local technical service center in Malakpet has grown into one of Greater Hyderabad's most trusted water purification networks, serving over 50,000 satisfied families and 500+ commercial clients.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Why Hyderabad Chooses Rainbow Aquafresh</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>20+ Years of Technical Excellence:</strong> Deep knowledge of Hyderabad's local water aquifers, municipal pipelines, and deep borewell mineral characteristics.</li>
            <li><strong>Certified Field Service Technicians:</strong> Every technician is rigorously trained in electro-mechanical diagnostics and customer service ethics.</li>
            <li><strong>Direct Factory Procurement:</strong> We deal directly with certified manufacturers to guarantee 100% genuine spares without unauthorized markups.</li>
            <li><strong>90-Minute Emergency Doorstep SLA:</strong> Dedicated dispatch hubs across West, East, North, and South Hyderabad zones.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our Core Values & Commitment</h2>
          <p style="color: #475569; margin-bottom: 16px;">
            We believe that clean drinking water is a fundamental health necessity. That is why we never recommend unnecessary part replacements, always verify water TDS on calibrated digital meters before and after every service, and provide comprehensive written warranties on all work.
          </p>
        </section>
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">Contact Rainbow Aquafresh Systems</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Get in touch with Hyderabad's trusted water purification specialists. Our customer support desk and mobile field engineers are available 365 days a year to assist you with emergency repairs, new installations, AMC inquiries, or commercial RO plant quotations.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Whether you need same-day doorstep technician dispatch in Dilsukhnagar, Kukatpally, Gachibowli, or Secunderabad, or want a custom quotation for an industrial 1000 LPH RO plant, our team is ready to serve you.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Direct Contact Information & Service Hubs</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 24px;">
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Primary Service Helpline</h3>
              <p style="font-size: 18px; font-weight: 800; color: #2563eb; margin-bottom: 6px;"><a href="tel:+918885556965" style="color: #2563eb; text-decoration: none;">+91 8885556965</a></p>
              <p style="font-size: 13px; color: #64748b; margin: 0;">Instant technician dispatch & booking</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Alternate Helpline</h3>
              <p style="font-size: 18px; font-weight: 800; color: #2563eb; margin-bottom: 6px;"><a href="tel:+918341256965" style="color: #2563eb; text-decoration: none;">+91 8341256965</a></p>
              <p style="font-size: 13px; color: #64748b; margin: 0;">Commercial plant sales & AMC renewal</p>
            </div>
            <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">Head Office Address</h3>
              <p style="font-size: 14px; color: #334155; margin: 0;">16-10-27/109, 37-2RT, MCH Colony, Malakpet, Hyderabad, Telangana 500036</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Working Hours & Response Times</h2>
          <p style="color: #475569; margin-bottom: 8px;"><strong>Monday to Sunday:</strong> 8:00 AM – 9:00 PM (365 Days a Year)</p>
          <p style="color: #475569; margin-bottom: 8px;"><strong>Average Response Time:</strong> Within 60 to 90 minutes across Greater Hyderabad</p>
          <p style="color: #475569; margin-bottom: 16px;"><strong>Emergency Breakdown Coverage:</strong> Immediate priority booking available</p>
          <p style="color: #475569; margin-bottom: 12px;">
            Our mobile service fleet covers all quadrants of Greater Hyderabad including Dilsukhnagar, LB Nagar, Kothapet, Kukatpally, Miyapur, Gachibowli, Kondapur, Madhapur, Hitech City, Uppal, Nagole, Secunderabad, Banjara Hills, Jubilee Hills, Manikonda, and Tarnaka.
          </p>
          <p style="color: #475569; margin: 0;">
            All doorstep service requests include a certified digital TDS audit, upfront repair cost estimates, and written warranties on genuine replacement parts.
          </p>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/blog": {
    title: "Water Purification Guides & RO Tips | Rainbow Blog",
    description: "Read expert guides on RO water purification, TDS guidelines, filter maintenance, and technology comparisons in Hyderabad.",
    keywords: "Water Purifier Blog, RO Maintenance Guide, TDS Drinking Water Hyderabad, Water Purifier Tips",
    canonical: "https://www.rainbowafs.com/blog",
    h1: "Water Purification Guides & RO Knowledge Hub",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">Water Purification Guides & RO Knowledge Hub</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Welcome to the Rainbow Aquafresh Knowledge Hub. Explore our library of expert guides, maintenance advice, TDS standards, and water treatment comparisons tailored specifically to Hyderabad's drinking water conditions.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 20px;">Latest Articles & Maintenance Guides</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            ${Object.values(BLOG_ARTICLES_DATA).map(art => `
              <div style="border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; background: #ffffff;">
                <span style="font-size: 12px; font-weight: 700; color: #2563eb; text-transform: uppercase;">${art.category}</span>
                <h3 style="font-size: 18px; font-weight: 700; color: #0f172a; margin: 8px 0;"><a href="/blog/${art.slug}" style="color: #0f172a; text-decoration: none;">${art.title}</a></h3>
                <p style="font-size: 14px; color: #64748b; margin-bottom: 12px;">${art.excerpt}</p>
                <a href="/blog/${art.slug}" style="color: #2563eb; font-weight: 600; font-size: 14px; text-decoration: none;">Read Complete Guide &rarr;</a>
              </div>
            `).join('')}
          </div>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/water-guide": {
    title: "Hyderabad Water Quality & Purifier Buying Guide | Rainbow",
    description: "Comprehensive guide to drinking water quality, TDS levels, and purifier buying in Hyderabad. Learn how to choose the right system.",
    keywords: "Water Purifier Guide Hyderabad, TDS Drinking Water Hyderabad, RO vs UV Hyderabad, Water Purifier Buying Guide",
    canonical: "https://www.rainbowafs.com/water-guide",
    h1: "Hyderabad Drinking Water Quality & Purifier Buying Guide",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">Hyderabad Drinking Water Quality & Purifier Buying Guide</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Drinking water quality in Hyderabad varies widely between municipal supplies (Krishna and Godavari river water with 80–200 PPM TDS) and underground borewells (ranging from 800 to over 2,200 PPM TDS in areas like LB Nagar, Kukatpally, and Gachibowli).
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            This complete guide helps homeowners, apartment associations, and business owners evaluate their raw water characteristics, understand safe TDS standards, and choose the ideal purification technology.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">How to Pick the Right Water Purifier for Your Home</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>For Municipal Tap Water (TDS &lt; 250 PPM):</strong> A UV+UF filtration system is sufficient to eliminate biological microbes without altering natural mineral content.</li>
            <li><strong>For Borewell or Tanker Water (TDS &gt; 300 PPM):</strong> A multi-stage Reverse Osmosis (RO) purifier with a manual/automatic TDS controller is essential to remove dissolved chemical salts, heavy metals, and hardness.</li>
            <li><strong>For Mixed Water Supplies:</strong> An advanced RO+UV+UF+Copper Alkaline system with auto-sensing TDS modulation ensures balanced taste throughout the year.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">WHO & BIS Drinking Water TDS Standards</h2>
          <p style="color: #475569; margin-bottom: 16px;">According to the Bureau of Indian Standards (BIS 10500) and World Health Organization (WHO) benchmarks:</p>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>50 – 150 PPM:</strong> Excellent drinking water quality with balanced taste and optimal mineral concentration.</li>
            <li><strong>150 – 300 PPM:</strong> Good quality, widely acceptable for domestic consumption.</li>
            <li><strong>300 – 500 PPM:</strong> Fair quality; filtration is recommended to prevent mineral scaling and taste deterioration.</li>
            <li><strong>Above 500 PPM:</strong> Hard water requiring Reverse Osmosis treatment to remove heavy metals and dissolved solids.</li>
          </ul>
        </section>
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">RO Water Purifier Service & Repair in Kothapet, Hyderabad</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Located right adjacent to our primary Malakpet engineering hub, Kothapet residents and business establishments enjoy our fastest response times—with certified field technicians reaching your doorstep within 45 to 60 minutes for any water purifier breakdown, routine servicing, or filter replacement.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Covering Kothapet Fruit Market road, Maruthi Nagar, Doctors Colony, Alkapuri, Chaitanyapuri border, and surrounding residential colonies with 100% genuine factory spares and written warranty.
          </p>
          <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 16px 20px; border-radius: 4px; margin-bottom: 30px;">
            <p style="margin: 0; font-weight: 700; color: #1e40af; font-size: 15px;">
              Direct Kothapet Service Helpline: <a href="tel:+918885556965" style="color: #1d4ed8; text-decoration: underline;">+91 8885556965</a> | Honest ₹299 Diagnostic Fee (Waived on Repair)
            </p>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Kothapet Water Quality & Local TDS Analysis</h2>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin-bottom: 8px;"><strong>Typical Raw Groundwater TDS:</strong> 900 - 1,700 PPM</p>
            <p style="margin-bottom: 8px;"><strong>Primary Water Source:</strong> Deep Borewells & HMWSSB Krishna Water Pipeline</p>
            <p style="margin-bottom: 0;"><strong>Doorstep Response Time:</strong> Within 45 to 60 Minutes in Kothapet</p>
          </div>
          <p style="color: #475569; margin-bottom: 16px;">
            Because residential colonies in Kothapet heavily rely on borewell groundwater with elevated calcium hardness, sediment pre-filters choke frequently and standard RO membranes require periodic chemical flushing. Our multi-stage RO units reduce raw TDS to an optimal 80–120 PPM for sweet, healthy drinking water.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our RO Services Available in Kothapet</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>Doorstep Breakdown Diagnostics:</strong> Resolving motor vibration, no power, water leakage, and low flow issues in 60 minutes.</li>
            <li><strong>Genuine Filter & Membrane Replacement:</strong> USA Filmtec 75/80/100 GPD membranes and antibacterial carbon blocks.</li>
            <li><strong>New Water Purifier Installation & Relocation:</strong> Precision wall mounting and under-sink plumbing with leak-proof fittings.</li>
            <li><strong>Annual Maintenance Contracts (AMC):</strong> Comprehensive yearly care starting at ₹1,999 with free replacement filters.</li>
            <li><strong>All Brands Serviced:</strong> Kent, Eureka Forbes Aquaguard, Pureit, Livpure, AO Smith, and custom assembled RO units.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Frequently Asked Questions in Kothapet</h2>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">How soon can a technician visit my house in Kothapet?</h3>
              <p style="color: #475569; margin: 0;">Our technicians are located less than 2 km away in Malakpet, allowing us to arrive at any residence in Kothapet within 45 to 60 minutes of booking.</p>
            </div>
            <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
              <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">What are the service charges in Kothapet?</h3>
              <p style="color: #475569; margin: 0;">General service and diagnostic inspection is ₹299. If any part replacement or repair is performed, the inspection fee is completely waived.</p>
            </div>
          </div>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  }
};

// 1. Populate the 20 Location Pages with rich structured content (>500 words each)
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">RO Water Purifier Service & Repair in ${loc.name}, Hyderabad</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            Are you experiencing water leakage, slow filtration flow, or unusual water taste from your RO water purifier in <strong>${loc.name}, Hyderabad (PIN: ${loc.pincode})</strong>? Rainbow Aquafresh Systems provides trusted doorstep water purifier repair, genuine filter replacements, and annual maintenance contracts across all residential and commercial addresses in ${loc.name}.
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Our certified field service engineers are stationed in and around ${loc.name}, ensuring arrival within 60 to 90 minutes with calibrated testing meters and genuine replacement spares for all major brands.
          </p>
          <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 16px 20px; border-radius: 4px; margin-bottom: 30px;">
            <p style="margin: 0; font-weight: 700; color: #1e40af; font-size: 15px;">
              Direct Technician Helpline for ${loc.name}: <a href="tel:+918885556965" style="color: #1d4ed8; text-decoration: underline;">+91 8885556965</a> | Honest ₹299 Diagnostic Fee (Waived on Repair)
            </p>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Local Water Quality & TDS Analysis in ${loc.name}</h2>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin-bottom: 8px;"><strong>Typical Raw Groundwater TDS:</strong> ${loc.tdsRange}</p>
            <p style="margin-bottom: 8px;"><strong>Primary Water Source:</strong> ${loc.waterSource}</p>
            <p style="margin-bottom: 0;"><strong>Key Landmarks Covered:</strong> ${loc.landmarks.join(', ')}</p>
          </div>
          <p style="color: #475569; margin-bottom: 16px;">
            Because groundwater in ${loc.name} contains elevated mineral hardness and dissolved solids, conventional gravity or simple UV filters cannot make this water safe. Our high-rejection TFC reverse osmosis membranes safely eliminate heavy metals, fluorides, and excess calcium, reducing TDS to the ideal drinking range of 80 to 120 PPM.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Common RO Water Purifier Problems in ${loc.name}</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            ${loc.commonIssues.map(issue => `<li><strong>${issue}</strong>: Experienced frequently due to local water hardness and pipeline silt variations.</li>`).join('')}
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Complete Suite of RO Services in ${loc.name}</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>Doorstep Breakdown Repair:</strong> Same-day diagnostics and repair for power failures, leaks, and noisy pumps.</li>
            <li><strong>Genuine Filter & Membrane Replacement:</strong> Original USA Filmtec 75/80/100 GPD membranes and high-density carbon blocks.</li>
            <li><strong>New RO Installation & Relocation:</strong> Precision wall mounting and under-sink fitting with 100% food-grade plumbing tubes.</li>
            <li><strong>Annual Maintenance Contracts (AMC):</strong> Starting at ₹1,999/year with free scheduled filter changes and zero breakdown labor fees.</li>
            <li><strong>Multi-Brand Servicing:</strong> Expert repair for Kent, Aquaguard, Pureit, Livpure, AO Smith, and Havells systems.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Frequently Asked Questions in ${loc.name}</h2>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${loc.faqs.map(faq => `
              <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
                <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">${faq.question}</h3>
                <p style="color: #475569; margin: 0;">${faq.answer}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Nearby Service Coverage Areas</h2>
          <p style="color: #475569; margin-bottom: 12px;">We also provide rapid 60–90 minute doorstep RO repair in these neighboring localities:</p>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${loc.nearbyAreas.map(na => `
              <a href="${na.slug}" style="display: inline-block; padding: 6px 14px; background: #f1f5f9; color: #1e293b; border-radius: 6px; font-size: 14px; text-decoration: none; font-weight: 600;">${na.name}</a>
            `).join('')}
          </div>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  };
});

// 2. Populate the 15 Specialized & Brand Service Pages with rich structured content (>500 words each)
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">${srv.title}</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            ${srv.description}
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Rainbow Aquafresh Systems provides specialized, professional ${srv.shortTitle} across all residential, commercial, and institutional establishments in Hyderabad and Secunderabad. Our certified technicians carry genuine, laboratory-tested replacement parts to restore your water purifier to 100% factory performance on the spot.
          </p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <p style="margin-bottom: 8px;"><strong>Estimated Price:</strong> ${srv.pricingRange}</p>
            <p style="margin-bottom: 8px;"><strong>Warranty Coverage:</strong> ${srv.warranty}</p>
            <p style="margin-bottom: 0;"><strong>Doorstep Response:</strong> 60 to 90 Minutes across Greater Hyderabad</p>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Common Symptoms Requiring ${srv.shortTitle}</h2>
          <p style="color: #475569; margin-bottom: 16px;">If you notice any of the following warning signs, scheduling prompt technician service will prevent more severe internal damage:</p>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            ${srv.symptoms.map(sym => `<li><strong>${sym}</strong> — Requires immediate component diagnostic and pressure calibration.</li>`).join('')}
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">What is Included in Our ${srv.shortTitle} Service</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            ${srv.serviceInclusions.map(inc => `<li><strong>${inc}</strong>: Performed by our certified field engineer using calibrated digital equipment.</li>`).join('')}
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Why Choose Rainbow Aquafresh for ${srv.shortTitle}</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            <li><strong>100% Genuine Factory Spares:</strong> We use only original, brand-authorized components with verified QR codes and certificates.</li>
            <li><strong>Written Warranty:</strong> Every replacement comes with a clear 6 to 12-month written warranty for your complete peace of mind.</li>
            <li><strong>On-Site Testing:</strong> We conduct before-and-after digital TDS and flow pressure audits to demonstrate tangible water quality improvement.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Frequently Asked Questions About ${srv.shortTitle}</h2>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${srv.faqs.map(faq => `
              <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
                <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">${faq.question}</h3>
                <p style="color: #475569; margin: 0;">${faq.answer}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Related Water Purifier Services</h2>
          <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${srv.relatedServices.map(rs => `
              <a href="${rs.slug}" style="display: inline-block; padding: 6px 14px; background: #f1f5f9; color: #1e293b; border-radius: 6px; font-size: 14px; text-decoration: none; font-weight: 600;">${rs.name}</a>
            `).join('')}
          </div>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  };
});

// 3. Populate the 8 Commercial RO Plant Pages with rich structured content (>500 words each)
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 20px; line-height: 1.2;">${plant.title}</h1>
          <p style="font-size: 18px; color: #334155; margin-bottom: 16px;">
            ${plant.description}
          </p>
          <p style="font-size: 16px; color: #475569; margin-bottom: 24px;">
            Rainbow Aquafresh Systems is one of Telangana's leading manufacturers and engineering contractors for custom commercial Reverse Osmosis systems. We provide complete turnkey project execution—from initial water laboratory audits to CAD engineering, skid fabrication, on-site commissioning, and annual maintenance contracts (AMC).
          </p>
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <p style="margin-bottom: 8px;"><strong>Capacity Range:</strong> ${plant.capacityRange}</p>
            <p style="margin-bottom: 8px;"><strong>Engineering Build:</strong> ${plant.badge}</p>
            <p style="margin-bottom: 0;"><strong>Turnkey Execution:</strong> Site Survey, Water Analysis, Fabrication, Installation & Commissioning</p>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Key Applications & Target Facilities</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            ${plant.applications.map(app => `<li><strong>${app}</strong>: Engineered for heavy daily usage and strict compliance with potable water safety regulations.</li>`).join('')}
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Technical Specifications & Components</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin-bottom: 24px;">
            ${plant.keySpecs.map(spec => `
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px;">
                <h3 style="font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 6px;">${spec.label}</h3>
                <p style="font-size: 14px; color: #475569; margin: 0;">${spec.value}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Engineering & Quality Highlights</h2>
          <ul style="list-style-type: disc; padding-left: 24px; color: #334155; margin-bottom: 20px; line-height: 1.8;">
            ${plant.engineeringHighlights.map(eng => `<li>${eng}</li>`).join('')}
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Turnkey Commissioning & AMC Maintenance</h2>
          <p style="color: #475569; margin-bottom: 16px;">
            Every commercial plant includes 1 year of comprehensive warranty, routine chemical Cleaning-In-Place (CIP) descaling, media backwashing schedules, and 24-hour breakdown support across Greater Hyderabad.
          </p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Frequently Asked Questions About ${plant.shortTitle}</h2>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${plant.faqs.map(faq => `
              <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
                <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">${faq.question}</h3>
                <p style="color: #475569; margin: 0;">${faq.answer}</p>
              </div>
            `).join('')}
          </div>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  };
});

// 4. Populate the 15 Blog Article Pages with rich structured content (>500 words each)
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
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.7; color: #1e293b;">
        <article>
          <header style="margin-bottom: 30px;">
            <p style="color: #2563eb; font-size: 14px; font-weight: 700; text-transform: uppercase; margin-bottom: 8px;">Category: ${art.category} • ${art.readTime} • ${art.publishDate}</p>
            <h1 style="font-size: 34px; font-weight: 800; color: #0f172a; line-height: 1.25; margin-bottom: 16px;">${art.title}</h1>
            <p style="font-size: 18px; color: #475569; font-weight: 500; margin-bottom: 24px;">${art.excerpt}</p>
          </header>

          <section style="margin-bottom: 40px;">
            ${art.contentParagraphs.map(p => `
              <div style="margin-bottom: 24px;">
                ${p.heading ? `<h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-bottom: 10px;">${p.heading}</h2>` : ''}
                <p style="color: #334155; font-size: 16px; margin: 0;">${p.text}</p>
              </div>
            `).join('')}
          </section>

          <section style="margin-bottom: 40px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 24px; border-radius: 8px;">
            <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-bottom: 14px;">Key Takeaways & Recommendations</h2>
            <ul style="list-style-type: disc; padding-left: 20px; color: #334155; margin: 0; line-height: 1.8;">
              ${art.keyTakeaways.map(k => `<li>${k}</li>`).join('')}
            </ul>
          </section>

          <section style="margin-bottom: 40px;">
            <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-bottom: 14px;">Expert Water Care Advice for Hyderabad Residents</h2>
            <p style="color: #334155; margin-bottom: 12px;">
              Because water quality across Hyderabad varies drastically depending on whether your home is connected to HMWSSB river supplies or deep underground borewells, regular 6-month filter inspections and periodic digital TDS testing are essential.
            </p>
            <p style="color: #334155; margin: 0;">
              Rainbow Aquafresh Systems provides doorstep water quality audits, genuine replacement spares, and emergency breakdown repair across all Hyderabad localities within 90 minutes. Call our technical helpline at <a href="tel:+918885556965" style="color: #2563eb; font-weight: bold; text-decoration: none;">+91 8885556965</a> for expert assistance.
            </p>
          </section>

          ${art.faqs && art.faqs.length > 0 ? `
            <section style="margin-bottom: 40px;">
              <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Frequently Asked Questions</h2>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                ${art.faqs.map(f => `
                  <div style="border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px;">
                    <h3 style="font-size: 17px; font-weight: 700; color: #0f172a; margin-bottom: 8px;">${f.question}</h3>
                    <p style="color: #475569; margin: 0;">${f.answer}</p>
                  </div>
                `).join('')}
              </div>
            </section>
          ` : ''}
        </article>
        ${COMMON_FOOTER}
      </main>
    `
  };
});
