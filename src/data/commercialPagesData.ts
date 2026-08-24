export interface CommercialPlantData {
  slug: string;
  title: string;
  shortTitle: string;
  capacityRange: string;
  badge: string;
  description: string;
  applications: string[];
  keySpecs: { label: string; value: string }[];
  engineeringHighlights: string[];
  faqs: { question: string; answer: string }[];
}

export const COMMERCIAL_PLANTS_DATA: Record<string, CommercialPlantData> = {
  "commercial-ro-plant-installation": {
    slug: "commercial-ro-plant-installation-hyderabad",
    title: "Commercial RO Plant Installation in Hyderabad (50 to 2000 LPH)",
    shortTitle: "Commercial RO Installation",
    capacityRange: "50 LPH to 2000 LPH",
    badge: "Turnkey Skid-Mounted Engineering",
    description: "Rainbow Aquafresh Systems manufactures, customizes, and installs heavy-duty commercial reverse osmosis plants across Hyderabad. Featuring SS-304 stainless steel or FRP skids, high-pressure vertical multistage pumps, multi-port sand/carbon media filtration, and automated PLC panels for commercial establishments.",
    applications: [
      "Residential Gated Communities & Apartment Associations",
      "Hospitals, Diagnostic Centers & Dialysis Units",
      "Schools, Colleges, Universities & Hostels",
      "Hotels, Luxury Resorts & Banquet Halls",
      "Restaurants, Bakeries & Cloud Kitchens",
      "Pharmaceutical & Food Processing Plants"
    ],
    keySpecs: [
      { label: "Capacities Available", value: "50 LPH, 100 LPH, 250 LPH, 500 LPH, 1000 LPH, 2000 LPH" },
      { label: "Membrane Type", value: "Hydranautics / Dow Filmtec 4040 / 8040 Industrial Elements" },
      { label: "High Pressure Pump", value: "CRI / CNP Stainless Steel Vertical Multistage Pump" },
      { label: "Vessel Material", value: "FRP (Fiberglass Reinforced Polymer) or SS-304" },
      { label: "Pre-Treatment", value: "Dual Media Sand Filter + Activated Carbon Vessel + Micron Filter" },
      { label: "Automation", value: "Microprocessor / PLC Control with Auto-Flushing & Dry Run Cutoff" }
    ],
    engineeringHighlights: [
      "Custom engineered based on specific raw water TDS and hardness lab reports",
      "Antiscalant chemical dosing system to prevent membrane mineral scaling",
      "Digital flow rotameters for real-time monitoring of permeate and reject streams",
      "1 Year Comprehensive Warranty with on-site technician support"
    ],
    faqs: [
      { question: "How to determine the right commercial RO plant capacity?", answer: "Calculate your daily drinking water demand: Multiply the number of people by 5-10 liters/day. For instance, a hostel with 200 students needs approximately 1,500-2,000 liters/day, which is easily met by a 250 LPH or 500 LPH plant operating 4-6 hours." },
      { question: "What is the timeline for commercial RO installation?", answer: "We survey the site, test water samples, and complete installation and commissioning within 2 to 4 working days." }
    ]
  },
  "commercial-ro-plant-amc": {
    slug: "commercial-ro-plant-amc-maintenance-hyderabad",
    title: "Commercial RO Plant AMC & Maintenance Service Hyderabad",
    shortTitle: "Commercial RO AMC",
    capacityRange: "All Capacities (50-5000 LPH)",
    badge: "Preventive Care & Chemical CIP Cleaning",
    description: "Ensure uninterrupted clean drinking water and prevent costly plant shutdowns with our industrial RO Annual Maintenance Contracts. Includes monthly technician visits, periodic media backwashing, membrane chemical CIP descaling, and high-pressure pump servicing.",
    applications: [
      "Commercial Offices & Corporate Campuses",
      "Educational Institutions & Hostels",
      "Hospitals & Healthcare Facilities",
      "Industrial Manufacturing & Boiler Feed Plants"
    ],
    keySpecs: [
      { label: "Service Frequency", value: "Monthly Scheduled Visits + Emergency Call-Outs" },
      { label: "Chemical Descaling", value: "Periodic CIP (Clean-In-Place) Acid & Alkaline Flushing" },
      { label: "Media Renewal", value: "Annual Silica Sand & Activated Carbon Media Replacements" },
      { label: "SLA Response", value: "Guaranteed 4 to 6 Hour On-Site Emergency Attendance" }
    ],
    engineeringHighlights: [
      "Quarterly water laboratory testing reports for regulatory compliance",
      "Spare parts replacement discounts on membranes, cartridges, and pump seals",
      "Dedicated senior water treatment engineer assigned to your facility"
    ],
    faqs: [
      { question: "What is included in a Commercial RO AMC?", answer: "Monthly physical health checks, pressure gauge calibration, media backwashing, antiscalant dosing optimization, free breakdown calls, and routine filter cartridge swaps." }
    ]
  },
  "industrial-ro-plant-manufacturers": {
    slug: "industrial-ro-plant-manufacturers-hyderabad",
    title: "Industrial RO Plant Manufacturers in Hyderabad",
    shortTitle: "Industrial RO Plants",
    capacityRange: "1000 LPH to 10,000 LPH+",
    badge: "High-Capacity Industrial Water Systems",
    description: "Custom design, fabrication, and commissioning of high-volume industrial reverse osmosis systems for pharmaceutical manufacturing, chemical industries, boiler feedwater, and food & beverage packaging in Telangana.",
    applications: [
      "Pharmaceutical formulations requiring USP grade purified water",
      "Industrial steam boilers requiring low-conductivity feedwater",
      "Automotive and electroplating paint rinse operations",
      "Packaged drinking water bottling facilities"
    ],
    keySpecs: [
      { label: "Capacity Range", value: "1,000 to 25,000 Liters Per Hour" },
      { label: "Automation Level", value: "Full PLC with SCADA / HMI Touchscreen Interface" },
      { label: "Instrumentation", value: "Online Conductivity, pH, Redox, Flow, and Pressure Transmitters" },
      { label: "Piping", value: "SS-316L Sanitary Grade or UPVC High-Pressure Sch-80" }
    ],
    engineeringHighlights: [
      "Advanced recovery optimization up to 75-80% to minimize wastewater",
      "Integrated Clean-In-Place (CIP) skid with heating and chemical tanks",
      "Factory Acceptance Testing (FAT) and complete documentation"
    ],
    faqs: [
      { question: "Do you supply industrial RO systems compliant with FDA/GMP?", answer: "Yes, our pharmaceutical industrial RO skids feature orbital welded SS-316L piping, tri-clamp sanitary connections, and full validation documentation." }
    ]
  },
  "apartment-gated-community-ro-plants": {
    slug: "apartment-gated-community-ro-plants-hyderabad",
    title: "Apartment & Gated Community Commercial RO Plants Hyderabad",
    shortTitle: "Apartment RO Plants",
    capacityRange: "250 LPH to 2000 LPH",
    badge: "Centralized Society Drinking Water",
    description: "Centralized commercial RO plants engineered for residential gated communities, high-rise apartment towers, and resident welfare associations (RWA). Deliver safe, sweet drinking water to every resident or centralized dispensing points at fractions of bottled water costs.",
    applications: [
      "Gated Communities with 50 to 500+ Flats",
      "Villa Communities & Township Enclaves",
      "Society Clubhouse & Gym Drinking Stations",
      "Smart Water ATM Card Dispensing Systems"
    ],
    keySpecs: [
      { label: "Typical Capacities", value: "500 LPH (50-100 flats), 1000 LPH (100-250 flats), 2000 LPH (250+ flats)" },
      { label: "Storage System", value: "SS-304 Hydro-pneumatic or Food-Grade Polyethylene Tanks" },
      { label: "Dispensing Options", value: "Direct Kitchen Ring-Main Supply or Central RFID Dispensing Kiosk" },
      { label: "Cost Per Liter", value: "Less than ₹0.15 per liter compared to ₹2-3 for 20L cans" }
    ],
    engineeringHighlights: [
      "Eliminates dependency on outside 20-liter bubble water can suppliers",
      "Significant operational savings for residential welfare associations",
      "Continuous digital TDS display for resident peace of mind"
    ],
    faqs: [
      { question: "How much can an apartment society save with a centralized RO plant?", answer: "Societies typically recover the entire equipment capital cost within 8 to 12 months by replacing expensive water cans with in-house purified water." }
    ]
  },
  "hospital-healthcare-ro-plants": {
    slug: "hospital-healthcare-ro-plants-hyderabad",
    title: "Hospital & Healthcare Grade Commercial RO Plants Hyderabad",
    shortTitle: "Hospital RO Plants",
    capacityRange: "100 LPH to 2000 LPH",
    badge: "Medical & Dialysis Grade Water",
    description: "Ultra-pure water purification systems for hospitals, dialysis centers, pathology laboratories, medical research facilities, and sterile surgical suites. Multi-barrier filtration with double-pass RO, sub-micron endotoxin filters, and UV sterilization.",
    applications: [
      "Hemodialysis Machines & Dialyzer Reprocessing",
      "Sterilization & Autoclave Steam Generators",
      "Biochemistry Laboratory Analyzers",
      "Patient Ward & Hospital Cafeteria Clean Drinking Water"
    ],
    keySpecs: [
      { label: "Standards Compliance", value: "AAMI / ISO 23500 Dialysis Water Quality Standards" },
      { label: "Filtration Stages", value: "Dual Softener + Dual Pass RO + 0.2 Micron Endotoxin Retention" },
      { label: "Disinfection", value: "Ozone Gas Contact Tank & High-Dose Germicidal UV Chamber" },
      { label: "Conductivity", value: "< 1.0 µS/cm for laboratory grade water" }
    ],
    engineeringHighlights: [
      "Redundant dual pump systems to ensure zero hospital downtime",
      "Complete microbiological and endotoxin testing validation",
      "24/7 priority emergency technical support"
    ],
    faqs: [
      { question: "Do you supply dialysis-compatible water systems in Hyderabad?", answer: "Yes, we engineer dedicated double-pass RO systems with online conductivity meters and bacterial endotoxin barriers for hospital nephrology units." }
    ]
  },
  "school-college-ro-water-plants": {
    slug: "school-college-ro-water-plants-hyderabad",
    title: "School & College Commercial RO Water Plants Hyderabad",
    shortTitle: "School & College RO Plants",
    capacityRange: "100 LPH to 1000 LPH",
    badge: "Healthy Students, Disease-Free Campuses",
    description: "High-capacity commercial RO systems with multi-tap stainless steel water dispensing coolers for schools, junior colleges, universities, and student hostels across Hyderabad. Ensures 100% protection against waterborne infections like typhoid, jaundice, and gastroenteritis.",
    applications: [
      "Primary & High School Campus Corridors",
      "College & University Cafeterias",
      "Student Hostels & Boarding Dining Halls",
      "Sports Complexes & Playgrounds"
    ],
    keySpecs: [
      { label: "Capacities Available", value: "100 LPH (150-300 students), 250 LPH (300-800 students), 500 LPH (800-1500 students)" },
      { label: "Cooler Integration", value: "Connected to SS-304 Multi-Tap Cold Water Coolers" },
      { label: "Safety Features", value: "Child-safe rounded stainless steel edges, tamper-proof lockable panels" }
    ],
    engineeringHighlights: [
      "High peak-hour dispensing capacity for recess and lunch breaks",
      "Heavy-duty pre-filtration to handle tough municipal/borewell fluctuations",
      "Low maintenance costs designed for educational budgets"
    ],
    faqs: [
      { question: "Can the RO plant be connected to existing water coolers?", answer: "Yes, our commercial RO skids connect seamlessly to single, double, and four-tap stainless steel water coolers." }
    ]
  },
  "hotel-resort-commercial-ro-plants": {
    slug: "hotel-resort-commercial-ro-plants-hyderabad",
    title: "Hotel & Resort Commercial RO Water Plants Hyderabad",
    shortTitle: "Hotel & Resort RO Plants",
    capacityRange: "250 LPH to 2000 LPH",
    badge: "Hospitality Grade Taste & Glass Clarity",
    description: "Premium commercial RO plants designed for luxury hotels, boutique resorts, banquet halls, and conference centers in Hyderabad. Delivers crystal-clear ice cubes, superior coffee and tea extraction, and spotless glassware.",
    applications: [
      "Hotel Guest Rooms & In-House Glass Bottling Plants",
      "Commercial Hotel Kitchens & Bakery Ovens",
      "Commercial Ice Cube Makers & Beverage Bars",
      "Banquet & Wedding Function Catering"
    ],
    keySpecs: [
      { label: "Water Quality", value: "Optimal 80-120 PPM TDS with alkaline and mineral balance" },
      { label: "Pre-Treatment", value: "Iron removal + Water softening to protect dishwashers & boilers" },
      { label: "Ice Machine Feed", value: "Scale-free demineralized water for crystal-clear ice cubes" }
    ],
    engineeringHighlights: [
      "Helps hospitality venues eliminate single-use plastic bottles with in-house bottling",
      "Protects commercial combi-ovens and espresso machines from mineral scale",
      "Compact footprint to fit in hotel basement utility rooms"
    ],
    faqs: [
      { question: "How does RO water improve commercial kitchen equipment life?", answer: "By removing scale-forming calcium and magnesium, commercial dishwashers, steam ovens, and espresso machines avoid heating element burnouts." }
    ]
  },
  "restaurant-cafe-ro-water-purification": {
    slug: "restaurant-cafe-ro-water-purification-hyderabad",
    title: "Restaurant & Cafe Commercial RO Water Systems Hyderabad",
    shortTitle: "Restaurant & Cafe RO",
    capacityRange: "50 LPH to 500 LPH",
    badge: "Superior Taste for Coffee, Tea & Cooking",
    description: "Compact, high-flow commercial RO systems for restaurants, artisanal coffee cafes, bakeries, and cloud kitchens in Hyderabad. Standardizes food flavor, enhances beverage aroma, and protects expensive commercial kitchen equipment.",
    applications: [
      "Espresso & Specialty Coffee Machines",
      "Cooking & Gravy Preparation in Fine Dining",
      "Cloud Kitchens & Bakery Dough Mixers",
      "Customer Table Drinking Water Dispensers"
    ],
    keySpecs: [
      { label: "Capacities", value: "50 LPH (small cafe), 100 LPH (medium restaurant), 250 LPH (high-volume dining)" },
      { label: "Dimensions", value: "Space-saving compact under-counter or wall-mounted frames" },
      { label: "Taste Enhancer", value: "Active Coconut Carbon + Calcium-Magnesium Remineralizer" }
    ],
    engineeringHighlights: [
      "Prevents bitter or flat notes in specialty coffee and tea brews",
      "Continuous high flow rate without waiting for tank refills",
      "Easy sanitization and quick-change filter cartridges"
    ],
    faqs: [
      { question: "Why do cafes need customized TDS for espresso machines?", answer: "Specialty coffee brewing requires a specific TDS range of 75-150 PPM and balanced alkalinity to extract coffee aromatics without scaling the boiler." }
    ]
  }
};
