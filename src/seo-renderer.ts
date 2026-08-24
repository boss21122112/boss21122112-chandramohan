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
      <a href="/ro-installation-hyderabad" style="color: #333; text-decoration: none; font-weight: 500;">RO Installation</a>
      <a href="/ro-amc-service" style="color: #333; text-decoration: none; font-weight: 500;">RO AMC Service</a>
      <a href="/commercial-ro-plants" style="color: #333; text-decoration: none; font-weight: 500;">Commercial RO</a>
      <a href="/ro-repair-hyderabad" style="color: #333; text-decoration: none; font-weight: 500;">RO Repair</a>
      <a href="/ro-filter-replacement-hyderabad" style="color: #333; text-decoration: none; font-weight: 500;">Filter Replacement</a>
      <a href="/about" style="color: #333; text-decoration: none; font-weight: 500;">About</a>
      <a href="/contact" style="color: #333; text-decoration: none; font-weight: 500;">Contact</a>
    </nav>
  </div>
</header>
`;

const COMMON_FOOTER = `
<section style="margin-top: 40px; padding: 24px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
  <h2 style="font-size: 24px; font-weight: 700; color: #0f172a; margin-bottom: 12px;">Contact & Location Information</h2>
  <p style="margin-bottom: 8px;"><strong>Business Name:</strong> Rainbow Aquafresh Systems</p>
  <p style="margin-bottom: 8px;"><strong>Business Type:</strong> Ro Sales and Service</p>
  <p style="margin-bottom: 8px;"><strong>Telephone:</strong> <a href="tel:+918885556965" style="color: #2563eb;">+91 8885556965</a> / <a href="tel:+919966555965" style="color: #2563eb;">+91 9966555965</a></p>
  <p style="margin-bottom: 8px;"><strong>Address:</strong> 16-10-27/109, mch colony malakpet, hyderabad 500036, Telangana, India</p>
  <p style="margin-bottom: 8px;"><strong>Area Served:</strong> Hyderabad, Secunderabad, Malakpet, Dilsukhnagar, Banjara Hills, Kukatpally, Gachibowli, and all Telangana districts</p>
  <p style="margin-bottom: 0;"><strong>Opening Hours:</strong> Monday – Sunday: 10:00 AM – 7:00 PM</p>
</section>
<footer style="margin-top: 40px; padding: 20px; border-top: 1px solid #eee; background: #fff; text-align: center; font-size: 14px; color: #64748b;">
  <p>&copy; 2026 Rainbow Aquafresh Systems. All rights reserved. | <a href="/sitemap.xml" style="color: #2563eb;">Sitemap</a></p>
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

        <section style="margin-bottom: 40px; background: #f8fafc; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Understanding Water Quality & RO Filtration Requirements Across Greater Hyderabad</h2>
          <p style="margin-bottom: 16px;">Drinking water quality across Greater Hyderabad varies significantly depending on whether your supply originates from municipal Manjeera or Krishna river pipelines, deep borewells, or commercial water tankers. Ground water in rapidly expanding residential and IT corridors such as Gachibowli, Hitec City, Kondapur, Kukatpally, Miyapur, Tellapur, Jubilee Hills, and Secunderabad frequently exhibits elevated Total Dissolved Solids (TDS) levels ranging from 400 mg/L to over 1800 mg/L, accompanied by high mineral hardness, dissolved heavy metals, and fluoride.</p>
          <p style="margin-bottom: 16px;">According to official drinking water safety specifications established by the <a href="https://www.bis.gov.in" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: bold; text-decoration: underline;">Bureau of Indian Standards (BIS IS 10500:2012)</a>, the desirable limit for TDS in potable water is 500 mg/L. Furthermore, international drinking water safety recommendations published by the <a href="https://www.who.int/news-room/fact-sheets/detail/drinking-water" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: bold; text-decoration: underline;">World Health Organization (WHO Drinking Water Guidelines)</a> emphasize the vital balance between eliminating chemical contaminants, dissolved heavy metals, and biological pathogens, while retaining essential natural minerals such as calcium, magnesium, and potassium.</p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px; margin-bottom: 24px;">
            <div style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">
              <h3 style="font-size: 18px; font-weight: 700; color: #1e3a8a; margin-bottom: 8px;">5-Stage RO + UV + UF + Copper Alkaline Process</h3>
              <p style="font-size: 14px; color: #475569;">Our multi-stage domestic purifiers utilize a 5-micron spun sediment pre-filter to trap physical rust, sand, and silt particles. Next, an activated carbon block absorbs residual chlorine, pesticides, and foul odors. The high-rejection 0.0001-micron Reverse Osmosis (RO) membrane removes up to 98% of dissolved salts and micro-impurities. UV sterilizers kill biological microbes, while an active Copper Alkaline cartridge restores essential minerals and optimizes water pH to a healthy 7.5–8.5 level.</p>
            </div>
            <div style="background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #cbd5e1;">
              <h3 style="font-size: 18px; font-weight: 700; color: #1e3a8a; margin-bottom: 8px;">Same-Day Doorstep Service & Diagnostic Repairs</h3>
              <p style="font-size: 14px; color: #475569;">If your water purifier suffers from reduced water flow, continuous wastewater discharge, abnormal booster pump noise, power supply adapter trip, or taste variations, our certified technicians arrive within 2 hours across Malakpet, Dilsukhnagar, LB Nagar, Jubilee Hills, Secunderabad, and surrounding areas. We stock 100% genuine spares including 100GPD copper booster pumps, Food-Grade ABS filter housings, and USA Filmtec membranes.</p>
            </div>
          </div>

          <div style="background: #fff; padding: 24px; border-radius: 8px; border: 1px solid #cbd5e1; margin-bottom: 24px;">
            <h3 style="font-size: 20px; font-weight: 700; color: #0f172a; margin-bottom: 12px;">Comprehensive RO Servicing Process & Quality Standards</h3>
            <p style="font-size: 14px; color: #334155; margin-bottom: 12px;">When you schedule an RO service with Rainbow Aquafresh Systems, our certified field engineers follow a rigorous 12-point inspection checklist to ensure your water purifier functions at maximum thermodynamic and filtration efficiency. We perform input and output TDS testing using digital meters, measure static water inlet pressure, inspect pre-filter sediment loading, test solenoid valve shut-off mechanisms, flush carbon blocks to clear micro-particles, verify booster pump pressure output, and evaluate membrane recovery ratios.</p>
            <p style="font-size: 14px; color: #334155; margin-bottom: 12px;">Regular servicing every 3 to 6 months prevents premature membrane scaling, reduces energy consumption, and eliminates bacterial bio-film accumulation inside storage tanks. Whether you own an inline domestic water purifier or an industrial commercial RO skid, our technicians utilize calibrated testing instruments and original manufacturer spare parts to extend equipment lifespan.</p>
          </div>

          <div style="background: #fff; padding: 24px; border-radius: 8px; border: 1px solid #cbd5e1;">
            <h3 style="font-size: 20px; font-weight: 700; color: #0f172a; margin-bottom: 12px;">Doorstep Service Reach Across Greater Hyderabad Localities</h3>
            <p style="font-size: 14px; color: #334155; margin-bottom: 12px;">Rainbow Aquafresh Systems operates dedicated mobile technician hubs strategically distributed across Telangana. Our 2-hour doorstep response window covers Central Hyderabad (Malakpet, Amberpet, Koti, Abids, Himayatnagar), Eastern Suburbs (Dilsukhnagar, LB Nagar, Kothapet, Nagole, Uppal, Vanasthalipuram, Hayathnagar), Western IT & Financial Hubs (Gachibowli, Hitec City, Madhapur, Kondapur, Raidurg, Manikonda, Puppalguda, Narsingi, Kokapet, Tellapur), Northern Zones (Kukatpally, KPHB Colony, Miyapur, Bachupally, Nizampet, Chanda Nagar, Alwal, Secunderabad, Begumpet, Kompally), and Southern Districts (Attapur, Mehdipatnam, Rajendranagar, Shamshabad, Chandrayangutta).</p>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our Dedicated RO Services in Hyderabad</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 10px;"><a href="/ro-installation-hyderabad" style="color: #2563eb; text-decoration: none;">RO Water Purifier Installation</a></h3>
              <p>Professional wall-mount and under-sink RO purifier installation, re-installation, and uninstallation across Malakpet, Dilsukhnagar, Banjara Hills, Gachibowli, Kukatpally, and Secunderabad. We calibrate TDS, check water pressure, and install food-grade piping.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 10px;"><a href="/ro-amc-service" style="color: #2563eb; text-decoration: none;">RO AMC Plans (Annual Maintenance)</a></h3>
              <p>Comprehensive RO AMC contracts starting from just ₹1,999/year. Includes periodic maintenance visits, free pre-filter cleaning, genuine membrane replacement, and unlimited breakdown calls with 4-hour SLA response times.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 10px;"><a href="/commercial-ro-plants" style="color: #2563eb; text-decoration: none;">Commercial & Industrial RO Plants</a></h3>
              <p>Turnkey manufacturing, supply, and servicing of 25 LPH, 50 LPH, 100 LPH, 250 LPH, 500 LPH, 1000 LPH, and 2000 LPH commercial RO water purification plants for schools, colleges, hospitals, corporate offices, restaurants, and apartments.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 10px;"><a href="/ro-repair-hyderabad" style="color: #2563eb; text-decoration: none;">RO Water Purifier Repair & Service</a></h3>
              <p>Expert diagnostics and emergency repair for all RO purifier brands including Kent, Aquaguard, Pureit, Livpure, Havells, Blue Star, and A.O. Smith. We fix pump vibrations, wastewater overflow, power failure, and leakage.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 10px;"><a href="/products/" style="color: #2563eb; text-decoration: none;">RO Purifiers, Spares & Membranes</a></h3>
              <p>Explore our complete product line: AquaGrand, LX-One, Hot & Cold 3-in-1, genuine TFC RO membranes (75 GPD / 100 GPD), heavy-duty copper booster pumps, active copper mineral cartridges, and food-grade ABS storage tanks.</p>
            </div>
          </div>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/products/": {
    title: "RO Purifiers & Commercial RO Plants Hyderabad | Rainbow",
    description: "Buy domestic RO purifiers, commercial RO plants & spare membranes in Hyderabad. Original factory parts & certified technicians. Call +91 8885556965.",
    keywords: "RO Purifiers Hyderabad, RO Membranes Hyderabad, RO Booster Pump Hyderabad, Commercial RO Plant Price Hyderabad, RO Spare Parts Hyderabad, RO Technicians Hyderabad, Rainbow Aquafresh Systems",
    canonical: "https://www.rainbowafs.com/products/",
    h1: "RO Purifiers, Commercial Plants, Spare Membranes, Pumps & Certified Technicians in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">RO Purifiers, Commercial Plants, Spare Membranes, Pumps & Certified Technicians in Hyderabad</h1>
        <p style="font-size: 18px; color: #475569; margin-bottom: 32px;">Rainbow Aquafresh Systems is Hyderabad's one-stop destination for advanced domestic RO water purifiers, industrial commercial RO plants, genuine spare consumables, high-rejection membranes, heavy-duty booster pumps, and certified field service technicians.</p>
        
        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">1. Domestic RO Water Purifiers</h2>
          <p style="margin-bottom: 16px;">We supply top-tier residential water purifiers engineered specifically for Hyderabad municipal and high-TDS borewell water conditions up to 2500 PPM:</p>
          <ul style="margin-left: 20px; margin-bottom: 20px;">
            <li><strong>Hot and Cold 3 in 1 RO:</strong> 6-stage advanced RO+UV+UF+TDS purifier with instant hot, cold, and normal water, featuring a stainless steel hot tank. MRP: ₹22,500 | Offer: ₹16,500.</li>
            <li><strong>AquaGrand Active Copper RO:</strong> 12L large storage capacity with real bio-alkaline copper mineralizer and auto-flushing electronic valve. Offer: ₹8,500.</li>
            <li><strong>LX-One Premium RO:</strong> Sleek aesthetic kitchen cabinet profile with multi-stage mineral retention and high-speed purification. Offer: ₹7,999.</li>
            <li><strong>Aiqua Black & Purosis Bio:</strong> Modern designer water purifiers with smart LED health indicators and automated membrane self-cleaning.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">2. Commercial & Industrial RO Water Plants</h2>
          <p style="margin-bottom: 16px;">We design, assemble, and install heavy-duty stainless steel and FRP commercial RO water plants from 25 LPH to 2000 LPH:</p>
          <ul style="margin-left: 20px; margin-bottom: 20px;">
            <li><strong>25 LPH & 50 LPH RO Plants:</strong> Ideal for schools, colleges, restaurants, clinics, and small offices (20 to 100 persons). Compact skid mounting with commercial TFC membranes.</li>
            <li><strong>100 LPH & 250 LPH RO Plants:</strong> Engineered for mid-sized corporate offices, apartment complexes, hospitals, and hostels. Features vertical multi-stage booster pumps and automatic antiscalant dosing.</li>
            <li><strong>500 LPH, 1000 LPH & 2000 LPH Industrial Plants:</strong> Turnkey purification systems for beverage manufacturing, chemical industries, large residential townships, and packaging water plants. Equipped with PLC touch panels, sand/carbon filtration vessels, and UV/Ozone sterilization.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">3. Genuine RO Membranes, Booster Pumps & Spare Parts</h2>
          <p style="margin-bottom: 16px;">To ensure 100% purity and long appliance lifespan, we stock and install only certified, factory-genuine spare parts across Hyderabad:</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">High-Rejection RO Membranes</h3>
              <p>Genuine Thin Film Composite (TFC) membranes available in 75 GPD, 80 GPD, 100 GPD, and commercial 300 GPD / 4040 sizes. Engineered to reject up to 98% of dissolved salts, heavy metals, arsenic, fluoride, and hardness while maintaining rapid flow rates.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">100% Copper Booster Pumps</h3>
              <p>Heavy-duty 75 GPD, 100 GPD, and 150 GPD diaphragm booster pumps featuring 100% pure copper winding. Provides steady high-pressure water feed to RO membranes with ultra-low noise, minimal vibration, and built-in thermal overload protection.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">Mineralizer & Carbon Filters</h3>
              <p>Premium spun polypropylene sediment filters, inline granular activated carbon (GAC), high-iodine activated carbon blocks, active copper-zinc mineral cartridges, alkaline pH boosters, and Philips UV sterilization lamps.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">Electricals & ABS Tanks</h3>
              <p>Original 24V / 36V DC SMPS power supplies, heavy-duty solenoid valves (SV), auto-flushing actuators, high/low pressure switches, float switches, and 100% food-grade BPA-free storage tanks.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">4. Our Certified RO Technicians & Support Team</h2>
          <p style="margin-bottom: 16px;">At Rainbow Aquafresh Systems, our greatest asset is our team of certified, background-verified water purification engineers:</p>
          <ul style="margin-left: 20px; margin-bottom: 20px;">
            <li><strong>Experienced & Uniformed Engineers:</strong> Every technician undergoes rigorous training on multi-brand RO diagnostics, TDS calibration, electrical troubleshooting, and hygienic filter replacement.</li>
            <li><strong>Rapid 4-Hour SLA in Hyderabad:</strong> Our field service network covers Malakpet, Dilsukhnagar, L.B. Nagar, Santosh Nagar, Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Kukatpally, Begumpet, Secunderabad, and all surrounding areas.</li>
            <li><strong>On-Site Digital Water Testing:</strong> Technicians arrive equipped with calibrated digital TDS meters, pH testing kits, and hardness sensors to scientifically verify your drinking water safety before and after every service.</li>
            <li><strong>100% Warranty Assurance:</strong> All spare parts, pumps, and membranes installed by our technicians carry official replacement warranty backed by our prompt customer support desk.</li>
          </ul>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-installation-hyderabad": {
    title: "RO Water Purifier Installation Hyderabad | Rainbow AFS",
    description: "Expert RO water purifier installation & re-installation in Hyderabad. Free digital TDS testing, precision fitting & same-day service. Call 8885556965.",
    keywords: "RO Installation Hyderabad, RO Re-installation Hyderabad, RO Uninstallation Near Me, Water Purifier Fitting Hyderabad, RO Installation Price Hyderabad, Kent RO Installation Hyderabad, Aquaguard Fitting Hyderabad",
    canonical: "https://www.rainbowafs.com/ro-installation-hyderabad",
    h1: "RO Water Purifier Installation & Re-Installation Services in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">RO Water Purifier Installation & Re-Installation Services in Hyderabad</h1>
        <p style="font-size: 18px; color: #475569; margin-bottom: 32px;">Rainbow Aquafresh Systems offers professional wall-mount, tabletop, and under-sink RO water purifier installation, re-installation, and shifting services across all neighborhoods in Hyderabad and Secunderabad. Whether you have purchased a new water purifier online or are relocating to a new house, our certified technicians ensure leak-proof fitting and perfect TDS balance.</p>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Comprehensive RO Installation Services</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">New RO Purifier Installation</h3>
              <p>Complete mounting and plumbing setup for newly purchased water purifiers. We drill precise mounting holes, install inlet diverter valves, connect food-grade LLDPE tubing, flush pre-carbon filters, and adjust the TDS controller to match Indian drinking water safety standards (50-150 PPM).</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">RO Re-Installation & Shifting</h3>
              <p>Moving to a new home in Hyderabad? We carefully uninstall your existing purifier from your old kitchen, safely transport or prepare it for shifting, and re-install it at your new residence with fresh external piping and pressure calibration.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">Under-Sink & Modular Kitchen Fitting</h3>
              <p>Specialized installation for compact under-sink water purifiers and hydrostatic storage tanks. We neatly route stainless steel faucets through your marble or granite countertop without damaging modular cabinetry.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Why Choose Rainbow Aquafresh for RO Fitting?</h2>
          <ul style="margin-left: 20px; margin-bottom: 20px;">
            <li><strong>All Brands Supported:</strong> We install and service Kent, Aquaguard (Eureka Forbes), Pureit (HUL), Livpure, Havells, Blue Star, A.O. Smith, Xiaomi, LG, Panasonic, and custom assembled RO purifiers.</li>
            <li><strong>Transparent Pricing:</strong> Standard installation charges range from ₹350 to ₹500, with no hidden costs for basic fittings.</li>
            <li><strong>Free Digital TDS & pH Testing:</strong> Every installation includes complimentary water testing of your raw input water and output purified water.</li>
            <li><strong>Same-Day Service across Hyderabad:</strong> Rapid response technicians available in Malakpet, Dilsukhnagar, L.B. Nagar, Santosh Nagar, Kothapet, Uppal, Banjara Hills, Jubilee Hills, Madhapur, Gachibowli, Kukatpally, Kondapur, Begumpet, and Secunderabad.</li>
          </ul>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-amc-service": {
    title: "RO AMC Plans & Water Purifier AMC Hyderabad | Rainbow",
    description: "Secure pure drinking water with RO AMC plans in Hyderabad from ₹1,999/year. Free filter replacements & unlimited repair visits. Call +91 8885556965.",
    keywords: "RO AMC Hyderabad, Water Purifier AMC Price Hyderabad, RO Annual Maintenance Contract Hyderabad, Kent RO AMC Hyderabad, Aquaguard AMC Near Me, RO Filter Replacement Hyderabad",
    canonical: "https://www.rainbowafs.com/ro-amc-service",
    h1: "RO Annual Maintenance Contract (AMC) & Filter Replacement in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">RO Annual Maintenance Contract (AMC) & Filter Replacement in Hyderabad</h1>
        <p style="font-size: 18px; color: #475569; margin-bottom: 32px;">Ensure 365 days of uninterrupted, 100% pure and mineral-rich drinking water with Rainbow Aquafresh Systems' comprehensive RO Annual Maintenance Contracts (AMC). Our AMC plans protect your family from waterborne diseases while eliminating unexpected repair bills and costly filter replacements.</p>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our AMC Plan Benefits (Starting at ₹1,999/Year)</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">Scheduled Periodic Servicing</h3>
              <p>We conduct proactive quarterly mandatory service visits to clean pre-filters, sanitize water storage tanks, check electrical voltage, and test mineral TDS levels before any scaling issues occur.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">Free Genuine Filter Replacement</h3>
              <p>Our comprehensive AMC covers scheduled replacement of spun sediment cartridges, activated carbon blocks, post-carbon filters, and high-performance TFC RO membranes as per water consumption cycles.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">Unlimited Breakdown Support</h3>
              <p>Experience zero visiting charges and zero repair labor fees for any sudden emergency breakdown. If your pump stops or buzzer alarms sound, our technician arrives within 4 hours anywhere in Hyderabad.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Why Annual Filter Replacement is Mandatory</h2>
          <p style="margin-bottom: 16px;">In Hyderabad, municipal and borewell water contains varying levels of dissolved chlorine, mud, rust, and heavy salts. Over time, these impurities clog sediment pre-filters and exhaust activated carbon adsorption capacity. An active AMC ensures timely replacement of cartridges, preventing harmful bacteria growth and protecting your expensive RO booster pump and membrane from premature failure.</p>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/commercial-ro-plants": {
    title: "Commercial & Industrial RO Plants Hyderabad | Rainbow",
    description: "Commercial & industrial RO water plants in Hyderabad from 25 LPH to 2000 LPH. Complete turnkey setup, repair & AMC support. Call +91 8885556965.",
    keywords: "Commercial RO Plant Hyderabad, 100 LPH RO Plant Price Hyderabad, 500 LPH RO Plant Hyderabad, Industrial Water Treatment Hyderabad, 25 LPH RO Plant, 2000 LPH RO Plant, Commercial RO AMC Hyderabad",
    canonical: "https://www.rainbowafs.com/commercial-ro-plants",
    h1: "Commercial & Industrial RO Water Plants (25 LPH to 2000 LPH) in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">Commercial & Industrial RO Water Plants (25 LPH to 2000 LPH) in Hyderabad</h1>
        <p style="font-size: 18px; color: #475569; margin-bottom: 32px;">Rainbow Aquafresh Systems is a trusted manufacturer, supplier, and maintenance provider of heavy-duty commercial and industrial Reverse Osmosis (RO) water treatment plants across Hyderabad and Telangana. Engineered for continuous duty cycles, our skid-mounted RO plants deliver ultra-pure water compliant with BIS and WHO drinking standards.</p>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our Commercial RO Plant Capacities</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">25 LPH & 50 LPH Commercial Plants</h3>
              <p>Designed for schools, restaurants, coffee shops, clinics, and small offices (20 to 100 staff). Compact wall-mount or free-standing stainless steel skids equipped with 300 GPD high-flow TFC membranes and booster pumps.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">100 LPH & 250 LPH Institutional Skids</h3>
              <p>Ideal for mid-sized corporate IT parks, hospitals, hostels, and residential apartment clubhouses (100 to 500 persons). Features vertical multi-stage centrifugal pumps, rotameter flow meters, and auto-flush solenoid panels.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">500 LPH, 1000 LPH & 2000 LPH Industrial Plants</h3>
              <p>Turnkey water treatment systems for bottled drinking water units, beverage factories, pharmaceutical manufacturing, boiler feeds, and mega residential townships. Includes FRP pressure vessels for sand filtration, activated carbon adsorption, antiscalant dosing, and UV/Ozone sterilization.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Commercial RO AMC & Membrane Clean-in-Place (CIP)</h2>
          <p style="margin-bottom: 16px;">We offer specialized industrial AMC contracts and chemical membrane washing (CIP) services to restore water recovery ratios and eliminate calcium carbonate and silica scaling. Our emergency industrial support team provides 4-hour on-site SLA across Hyderabad, Jeedimetla, Balanagar, Patancheru, Medchal, and Adibatla industrial zones.</p>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-repair-hyderabad": {
    title: "RO Water Purifier Repair & Service Hyderabad | Rainbow",
    description: "Same-day RO water purifier repair & servicing in Hyderabad. Fix leakage, pump noise & continuous wastewater. Diagnostics at ₹150. Call +91 8885556965.",
    keywords: "RO Repair Hyderabad, RO Service Near Me, Water Purifier Repair Hyderabad, Kent RO Repair Hyderabad, Aquaguard Service Hyderabad, RO Leakage Repair, RO Pump Repair Hyderabad",
    canonical: "https://www.rainbowafs.com/ro-repair-hyderabad",
    h1: "RO Water Purifier Repair, Servicing & Breakdown Support in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">RO Water Purifier Repair, Servicing & Breakdown Support in Hyderabad</h1>
        <p style="font-size: 18px; color: #475569; margin-bottom: 32px;">Is your water purifier leaking, making loud pump noises, or running wastewater continuously? Rainbow Aquafresh Systems provides same-day emergency RO water purifier repair and breakdown troubleshooting across all areas in Hyderabad. With our honest diagnostic fee of just ₹150 (completely waived upon repair approval), we restore your drinking water safety instantly.</p>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Common RO Purifier Problems We Solve Daily</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">Continuous Wastewater Running</h3>
              <p>If drain water flows non-stop even when the storage tank is full, it indicates a faulty Solenoid Valve (SV), defective check valve, or failed auto-shutoff sensor. We replace defective valves with food-grade components instantly.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">Loud Pump Vibration or Noise</h3>
              <p>A rattling or screeching booster pump signals worn-out internal diaphragm bearings or low input water pressure. We repair or replace 75 GPD / 100 GPD copper booster pumps with 1-year warranty.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">Bad Taste, Odor or High TDS</h3>
              <p>Bitter, salty, or metallic tasting water indicates an exhausted RO membrane or depleted post-carbon mineralizer. We perform on-site digital TDS testing and replace clogged cartridges with genuine TFC membranes.</p>
            </div>
            <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #2563eb; margin-bottom: 10px;">No Power or Dead Purifier</h3>
              <p>Complete power failure is typically caused by a burnt SMPS DC power adapter, blown internal fuse, or faulty float switch. We carry genuine 24V/36V SMPS power supplies for immediate replacement.</p>
            </div>
          </div>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/about": {
    title: "About Rainbow Aquafresh Systems | RO Experts Hyderabad",
    description: "Rainbow Aquafresh Systems is Hyderabad's trusted RO company with 20+ years of experience in water purifier sales, service & AMC. Call +91 8885556965.",
    keywords: "About Rainbow Aquafresh Systems, RO Company Hyderabad, Water Purifier Dealers Hyderabad, Trusted RO Service Hyderabad",
    canonical: "https://www.rainbowafs.com/about",
    h1: "About Rainbow Aquafresh Systems — Hyderabad's Trusted Water Purification Experts",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">About Rainbow Aquafresh Systems — Hyderabad's Trusted Water Purification Experts</h1>
        <p style="font-size: 18px; color: #475569; margin-bottom: 32px;">For over two decades, Rainbow Aquafresh Systems has been at the forefront of drinking water purification technology in Hyderabad, Telangana. Founded with the mission to eradicate waterborne diseases and make pure, mineral-balanced water accessible to every household and enterprise, we have grown into Hyderabad's most dependable RO sales, installation, repair, and AMC organization.</p>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our Core Mission & Quality Pledge</h2>
          <p style="margin-bottom: 16px;">We believe that safe drinking water is a fundamental human right, not a luxury. In a city like Hyderabad where water TDS levels vary drastically between municipal Krishna/Godavari river connections and deep borewells (ranging from 150 PPM to over 2500 PPM), a one-size-fits-all purifier simply does not work. Our certified engineers scientifically evaluate your source water and configure customized multi-stage RO+UV+UF+TDS+Alkaline purification systems that remove 100% of toxins while preserving essential calcium and magnesium minerals.</p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 28px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Why Over 10,000+ Customers Trust Us</h2>
          <ul style="margin-left: 20px; margin-bottom: 20px;">
            <li><strong>20+ Years of Proven Track Record:</strong> Established reputation for uncompromising ethics, transparent pricing, and genuine spare parts.</li>
            <li><strong>Certified & Uniformed Technicians:</strong> Our in-house service team is thoroughly trained, background-verified, and equipped with precision digital testing instrumentation.</li>
            <li><strong>Multi-Brand Expertise:</strong> Complete mastery over sales and servicing of all leading water purifier brands including Kent, Aquaguard, Pureit, Livpure, A.O. Smith, and Havells.</li>
            <li><strong>Rapid On-Site Support:</strong> Strategically headquartered in Malakpet with mobile technician hubs across Dilsukhnagar, L.B. Nagar, Banjara Hills, Gachibowli, Kukatpally, and Secunderabad for 4-hour SLA response.</li>
          </ul>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/contact": {
    title: "Contact Rainbow Aquafresh Systems | RO Support Hyderabad",
    description: "Contact Rainbow Aquafresh Systems in Hyderabad for RO sales, installation, repair & AMC bookings. Call +91 8885556965 or visit our Malakpet office.",
    keywords: "Contact Rainbow Aquafresh Systems, RO Phone Number Hyderabad, RO Purifier Customer Care Hyderabad, Rainbow Aquafresh Malakpet Address, RO Service Center Hyderabad",
    canonical: "https://www.rainbowafs.com/contact",
    h1: "Contact Rainbow Aquafresh Systems — RO Service & Support in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">Contact Rainbow Aquafresh Systems — RO Service & Support in Hyderabad</h1>
        <p style="font-size: 18px; color: #475569; margin-bottom: 32px;">We are always ready to assist you with your water purification needs. Reach out to our customer support desk for instant service bookings, new product sales inquiries, AMC renewals, or commercial RO plant quotations.</p>

        <section style="margin-bottom: 40px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <div style="padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff;">
              <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-bottom: 12px;">Headquarters & Service Hub</h2>
              <p style="margin-bottom: 8px;"><strong>Address:</strong> 16-10-27/109, MCH Colony, Malakpet, Hyderabad 500036, Telangana, India</p>
              <p style="margin-bottom: 8px;"><strong>Landmark:</strong> Near Malakpet Railway Station / MCH Colony Park</p>
              <p style="margin-bottom: 8px;"><strong>Service Jurisdiction:</strong> All localities across Hyderabad, Secunderabad, Malakpet, Dilsukhnagar, L.B. Nagar, Santosh Nagar, Kothapet, Uppal, Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Kukatpally, Kondapur, and Begumpet.</p>
            </div>
            <div style="padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background: #fff;">
              <h2 style="font-size: 22px; font-weight: 700; color: #0f172a; margin-bottom: 12px;">Direct Helpline Numbers</h2>
              <p style="margin-bottom: 12px;">Speak directly with our technical support team without automated IVR delays:</p>
              <p style="font-size: 20px; font-weight: bold; margin-bottom: 8px;"><a href="tel:+918885556965" style="color: #2563eb; text-decoration: none;">📞 +91 8885556965</a></p>
              <p style="font-size: 20px; font-weight: bold; margin-bottom: 16px;"><a href="tel:+919966555965" style="color: #2563eb; text-decoration: none;">📞 +91 9966555965</a></p>
              <p style="margin-bottom: 8px;"><strong>Email:</strong> <a href="mailto:rainbow.afs@gmail.com" style="color: #2563eb;">rainbow.afs@gmail.com</a></p>
              <p style="margin-bottom: 0;"><strong>Working Hours:</strong> Monday to Sunday — 10:00 AM to 7:00 PM</p>
            </div>
          </div>
        </section>
        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-filter-replacement-hyderabad": {
    title: "RO Filter Replacement Hyderabad | Rainbow Aquafresh",
    description: "Get genuine RO filter replacement in Hyderabad. Fast same-day doorstep service, original membranes, pre-filters & TDS balance. Call +91 8885556965.",
    keywords: "RO Filter Replacement Hyderabad, RO Filter Change Near Me, RO Service Hyderabad, Water Purifier Filter Replacement, RO Membrane Replacement Hyderabad, RO Maintenance Hyderabad, RO Service Near Me, Best RO Service Hyderabad, RO Technician Hyderabad",
    canonical: "https://www.rainbowafs.com/ro-filter-replacement-hyderabad",
    h1: "RO Filter Replacement in Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">Professional RO Filter Replacement in Hyderabad</h1>
        <p style="font-size: 18px; color: #475569; margin-bottom: 24px;">Get genuine RO filters replaced by experienced technicians. Same-day home service across Hyderabad with original spare parts, digital TDS level balancing, and affordable pricing. Call +91 8885556965.</p>

        <section style="margin-bottom: 40px; padding: 24px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Why Timely RO Filter Replacement in Hyderabad is Essential</h2>
          <p style="margin-bottom: 16px;">Drinking water quality across Greater Hyderabad presents a unique hydrological challenge. In rapidly expanding residential corridors such as Gachibowli, Hitec City, Kondapur, Kukatpally, Miyapur, Jubilee Hills, Secunderabad, and LB Nagar, groundwater TDS levels frequently exceed 500 mg/L to over 1,800 mg/L. Over time, spun sediment pre-filters, activated carbon blocks, TFC Reverse Osmosis membranes, and UV lamps become clogged with mud, rust, bio-film, and scale deposits.</p>
          <p style="margin-bottom: 16px;">According to specifications by the <strong>Bureau of Indian Standards (BIS IS 10500:2012)</strong> and the <strong>World Health Organization (WHO)</strong>, drinking water should be free of harmful dissolved toxins while retaining essential minerals such as calcium and magnesium. Scheduling timely <strong>RO Filter Replacement Hyderabad</strong> ensures 100% pure, sweet-tasting drinking water for your family.</p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Recommended RO Filter Replacement Schedule</h2>
          <ul style="margin-left: 20px; line-height: 1.8;">
            <li><strong>Sediment Pre-Filter:</strong> Replace every 3 – 6 months (traps mud, rust, and silt).</li>
            <li><strong>Pre-Carbon Filter:</strong> Replace every 6 – 12 months (removes chlorine, pesticides & odor).</li>
            <li><strong>RO Membrane (0.0001 Micron):</strong> Replace every 18 – 24 months (removes heavy metals, dissolved salts & TDS).</li>
            <li><strong>UV Disinfection Lamp:</strong> Replace every 12 months (sterilizes bacteria and viruses).</li>
            <li><strong>Post-Carbon / Active Copper Mineralizer:</strong> Replace every 12 months (polishes water taste and adds healthy copper minerals).</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px; padding: 24px; background: #eff6ff; border-radius: 12px; border: 1px solid #bfdbfe;">
          <h2 style="font-size: 26px; font-weight: 700; color: #1e3a8a; margin-bottom: 16px;">Why Choose Rainbow Aquafresh Systems?</h2>
          <ul style="margin-left: 20px; line-height: 1.8; color: #1e40af;">
            <li><strong>20+ Years Experience:</strong> Trusted water purifier service leaders in Hyderabad.</li>
            <li><strong>100% Genuine Spare Parts:</strong> Original factory-sealed filters and membranes.</li>
            <li><strong>Same-Day Doorstep Service:</strong> 2-hour technician arrival across all Hyderabad localities.</li>
            <li><strong>Digital TDS Calibration:</strong> Precise mineral setting for healthy drinking water.</li>
            <li><strong>Affordable & Upfront Pricing:</strong> Transparent quotes with zero hidden charges.</li>
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Frequently Asked Questions (FAQs)</h2>
          <div style="margin-bottom: 16px;">
            <p style="font-weight: bold; color: #0f172a;">Q: How often should RO filters be replaced?</p>
            <p style="color: #475569;">A: Sediment filters every 3–6 months, pre-carbon filters every 6–12 months, and RO membranes every 18–24 months depending on input water TDS in Hyderabad.</p>
          </div>
          <div style="margin-bottom: 16px;">
            <p style="font-weight: bold; color: #0f172a;">Q: How much does RO filter replacement cost in Hyderabad?</p>
            <p style="color: #475569;">A: Individual pre-filters start from ₹350, while complete multi-stage filter replacement sets range from ₹1,800 to ₹2,500 including installation and digital TDS calibration.</p>
          </div>
          <div style="margin-bottom: 16px;">
            <p style="font-weight: bold; color: #0f172a;">Q: Do you service all major RO purifier brands?</p>
            <p style="color: #475569;">A: Yes, we service Kent, Aquaguard, Pureit, Livpure, A.O. Smith, Blue Star, LG, Havells, V-Guard, and custom assembled RO systems across Hyderabad.</p>
          </div>
        </section>

        <section style="padding: 32px; background: #0f172a; color: #fff; border-radius: 12px; text-align: center;">
          <h2 style="font-size: 28px; font-weight: 800; margin-bottom: 12px;">Need RO Filter Replacement Today in Hyderabad?</h2>
          <p style="font-size: 18px; color: #94a3b8; margin-bottom: 20px;">Call Rainbow Aquafresh Systems now for 2-hour doorstep service!</p>
          <p style="font-size: 22px; font-weight: bold;"><a href="tel:+918885556965" style="color: #38bdf8; text-decoration: none;">📞 Call Now: +91 8885556965</a></p>
        </section>

        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-water-purifier-service-kothapet-hyderabad": {
    title: "RO Water Purifier Service in Kothapet | Rainbow",
    description: "Expert RO water purifier service in Kothapet, Hyderabad. Doorstep repair, filter change, AMC & installation by Rainbow Aquafresh. Call 8885556965.",
    keywords: "RO Water Purifier Service in Kothapet, RO Service Hyderabad, Water Purifier Repair Hyderabad, RO Installation Hyderabad, RO AMC Hyderabad, RO Filter Replacement, Commercial RO Plant Hyderabad, Best RO Service Near Me, Rainbow Aquafresh Systems",
    canonical: "https://www.rainbowafs.com/ro-water-purifier-service-kothapet-hyderabad",
    h1: "RO Water Purifier Service in Kothapet, Hyderabad",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">RO Water Purifier Service in Kothapet, Hyderabad</h1>
          <p style="font-size: 18px; color: #475569; margin-bottom: 24px;">Rainbow Aquafresh Systems delivers fast, reliable, and transparent RO water purifier service, repair, filter replacement, AMC, and installation across Kothapet, Chaitanyapuri, LB Nagar, and Saroornagar in Hyderabad. Call +91 8885556965 for 30-minute express doorstep assistance.</p>
          <p style="font-weight: bold; color: #2563eb;">Emergency Helpline Kothapet: +91 8885556965 | +91 8341256965</p>
        </section>

        <section style="margin-bottom: 40px; background: #f8fafc; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Water Quality Challenges & RO Service Necessity in Kothapet</h2>
          <p style="margin-bottom: 16px;">Kothapet is a major commercial and residential hub in East Hyderabad located along the Vijayawada highway, bounded by Dilsukhnagar, Chaitanyapuri, Victoria Memorial Home, and LB Nagar. Groundwater in Kothapet, Doctors Colony, Mohan Nagar, and Saroornagar catchment zones frequently records Total Dissolved Solids (TDS) levels between 750 ppm and 1600+ ppm due to deep borewell extraction.</p>
          <p style="margin-bottom: 16px;">According to drinking water specifications in <a href="https://www.bis.gov.in" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: bold;">BIS IS 10500:2012</a> and <a href="https://www.who.int/news-room/fact-sheets/detail/drinking-water" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: bold;">WHO Drinking Water Guidelines</a>, ideal drinking water TDS should be calibrated between 80 ppm and 150 ppm with balanced essential minerals. Rainbow Aquafresh Systems provides precision digital TDS testing, high-rejection Filmtec RO membrane installation, active Copper-Alkaline mineral restoration, and complete motor booster pump overhauls in Kothapet.</p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our Water Purifier Services in Kothapet</h2>
          <ul style="line-height: 2; font-size: 16px; color: #334155;">
            <li><strong>RO Water Purifier Repair:</strong> Instant diagnosis for continuous wastewater flow, pump noise, SMPS adapter burns, and water leakage. (<a href="/ro-repair-hyderabad" style="color: #2563eb;">Learn more</a>)</li>
            <li><strong>RO Filter & Membrane Replacement:</strong> Original spun candles, activated carbon blocks, and 100 GPD high-rejection membranes. (<a href="/ro-filter-replacement-hyderabad" style="color: #2563eb;">Learn more</a>)</li>
            <li><strong>RO Installation & Relocation:</strong> Wall-mounting, under-sink fitting, and leak-proof tap diverters. (<a href="/ro-installation-hyderabad" style="color: #2563eb;">Learn more</a>)</li>
            <li><strong>RO AMC Plans:</strong> Annual contracts starting at ₹1,999/yr covering 3 maintenance visits and free filter replacements. (<a href="/ro-amc-service" style="color: #2563eb;">Learn more</a>)</li>
            <li><strong>Commercial RO Plants:</strong> 25 LPH to 1000 LPH plants for hostels, schools, hospitals, and offices in Kothapet. (<a href="/commercial-ro-plants" style="color: #2563eb;">Learn more</a>)</li>
          </ul>
        </section>

        <section style="padding: 32px; background: #0f172a; color: #fff; border-radius: 12px; text-align: center;">
          <h2 style="font-size: 28px; font-weight: 800; margin-bottom: 12px;">Need Immediate RO Water Purifier Service in Kothapet?</h2>
          <p style="font-size: 18px; color: #94a3b8; margin-bottom: 20px;">Call Rainbow Aquafresh Systems now for express 30-minute doorstep service!</p>
          <p style="font-size: 22px; font-weight: bold;"><a href="tel:+918885556965" style="color: #38bdf8; text-decoration: none;">📞 Call Now: +91 8885556965</a> | <a href="tel:+918341256965" style="color: #38bdf8; text-decoration: none;">+91 8341256965</a></p>
        </section>

        ${COMMON_FOOTER}
      </main>
    `
  },
  "/ro-service-hyderabad": {
    title: "RO Service Hyderabad | Doorstep Water Purifier Repair & AMC",
    description: "Top-rated RO service in Hyderabad by Rainbow Aquafresh. 30-min doorstep repair, filter replacement, AMC & installation across all localities. Call 8885556965.",
    keywords: "RO Service Hyderabad, RO Water Purifier Service Hyderabad, Water Purifier Repair Hyderabad, RO Filter Replacement Hyderabad, RO Installation Hyderabad, RO AMC Service Hyderabad, Best RO Service Near Me, Rainbow Aquafresh Systems",
    canonical: "https://www.rainbowafs.com/ro-service-hyderabad",
    h1: "RO Water Purifier Service in Hyderabad – Express Doorstep Repair & Maintenance",
    contentHtml: `
      ${COMMON_HEADER}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif; line-height: 1.6; color: #1e293b;">
        <section style="margin-bottom: 40px;">
          <h1 style="font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">RO Water Purifier Service in Hyderabad</h1>
          <p style="font-size: 18px; color: #475569; margin-bottom: 24px;">Rainbow Aquafresh Systems delivers fast, reliable, and transparent RO water purifier service, doorstep repair, filter replacement, AMC plans, and new installation across all localities in Greater Hyderabad and Secunderabad. Call +91 8885556965 for 30-minute express doorstep assistance.</p>
          <p style="font-weight: bold; color: #2563eb;">Hyderabad 24/7 Service Helpline: +91 8885556965 | +91 8341256965</p>
        </section>

        <section style="margin-bottom: 40px; background: #f8fafc; padding: 30px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Water Quality Challenges & RO Service Necessity in Hyderabad</h2>
          <p style="margin-bottom: 16px;">Hyderabad relies heavily on deep borewell water mixed with municipal surface water. Groundwater TDS in regions like Kukatpally, Madhapur, Gachibowli, LB Nagar, Kothapet, Miyapur, and Manikonda ranges from 600 ppm to over 2000 ppm. High TDS drinking water contains elevated calcium hardness, magnesium salts, fluorides, and heavy metals that affect water taste and pose health risks.</p>
          <p style="margin-bottom: 16px;">Following official drinking water specifications in <a href="https://www.bis.gov.in" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: bold;">BIS IS 10500:2012</a> and <a href="https://www.who.int/news-room/fact-sheets/detail/drinking-water" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: bold;">WHO Drinking Water Guidelines</a>, ideal drinking water TDS should be calibrated between 80 ppm and 150 ppm with balanced essential minerals. Rainbow Aquafresh Systems provides precision digital TDS testing, high-rejection Filmtec RO membrane replacement, active Copper-Alkaline mineral restoration, and complete motor booster pump overhauls in Hyderabad.</p>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #0f172a; margin-bottom: 16px;">Our Complete Water Purifier Services in Hyderabad</h2>
          <ul style="line-height: 2; font-size: 16px; color: #334155;">
            <li><strong>RO Repair & Breakdown Service:</strong> Fast diagnostic troubleshooting for continuous wastewater flow, pump noise, power supply failures, and leaks. (<a href="/ro-repair-hyderabad" style="color: #2563eb;">Learn more</a>)</li>
            <li><strong>RO Filter & Membrane Replacement:</strong> High-density 5-micron spun candles, activated carbon cartridges, and USA Filmtec RO membranes. (<a href="/ro-filter-replacement-hyderabad" style="color: #2563eb;">Learn more</a>)</li>
            <li><strong>RO Installation & Relocation:</strong> Precision wall-mounting, under-sink fitting, and leak-proof diverter tap connections. (<a href="/ro-installation-hyderabad" style="color: #2563eb;">Learn more</a>)</li>
            <li><strong>RO Annual Maintenance Contracts (AMC):</strong> Affordable yearly plans starting at ₹1,999/yr covering 3 preventive service visits and free filter replacements. (<a href="/ro-amc-service" style="color: #2563eb;">Learn more</a>)</li>
            <li><strong>Commercial RO Water Plants:</strong> 25 LPH to 2000 LPH plants for offices, hostels, schools, hospitals, and restaurants in Hyderabad. (<a href="/commercial-ro-plants" style="color: #2563eb;">Learn more</a>)</li>
            <li><strong>Kothapet Local Service Hub:</strong> Dedicated doorstep service for Kothapet, Dilsukhnagar, Chaitanyapuri, and Saroornagar. (<a href="/ro-water-purifier-service-kothapet-hyderabad" style="color: #2563eb;">Learn more</a>)</li>
          </ul>
        </section>

        <section style="padding: 32px; background: #0f172a; color: #fff; border-radius: 12px; text-align: center;">
          <h2 style="font-size: 28px; font-weight: 800; margin-bottom: 12px;">Need Immediate Doorstep RO Service in Hyderabad?</h2>
          <p style="font-size: 18px; color: #94a3b8; margin-bottom: 20px;">Call Rainbow Aquafresh Systems now for express 30-minute engineer dispatch!</p>
          <p style="font-size: 22px; font-weight: bold;"><a href="tel:+918885556965" style="color: #38bdf8; text-decoration: none;">📞 Call Now: +91 8885556965</a> | <a href="tel:+918341256965" style="color: #38bdf8; text-decoration: none;">+91 8341256965</a></p>
        </section>

        ${COMMON_FOOTER}
      </main>
    `
  }
};

// Route aliases for seamless routing
ROUTE_SEO_CONFIG["/products"] = ROUTE_SEO_CONFIG["/products/"];
ROUTE_SEO_CONFIG["/ro-service-kothapet-hyderabad"] = ROUTE_SEO_CONFIG["/ro-water-purifier-service-kothapet-hyderabad"];

