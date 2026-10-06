export interface ServiceDetailData {
  slug: string;
  title: string;
  shortTitle: string;
  category: "component-repair" | "brand-service" | "general-maintenance";
  badge: string;
  description: string;
  symptoms: string[];
  serviceInclusions: string[];
  pricingRange: string;
  warranty: string;
  faqs: { question: string; answer: string }[];
  relatedServices: { name: string; slug: string }[];
  overviewParagraphs?: string[];
  serviceFeatures?: Array<{ title: string; desc: string }>;
  troubleshootingGuide?: Array<{ problem: string; causes: string; solution: string }>;
  brandsOrModels?: string[];
  coverageAreas?: string[];
  disclaimer?: string;
  priceTable?: Array<{ item: string; price: string; description: string }>;
}

export const SPECIALIZED_SERVICES_DATA: Record<string, ServiceDetailData> = {
  "ro-membrane-replacement": {
    slug: "ro-membrane-replacement-service-hyderabad",
    title: "RO Membrane Replacement Service in Hyderabad",
    shortTitle: "RO Membrane Replacement",
    category: "component-repair",
    badge: "100% Genuine USA Filmtec & Vontron (75 / 80 / 100 GPD)",
    description: "Scientific RO membrane replacement service in Hyderabad for borewell and municipal water up to 2,500 PPM TDS. We test salt rejection, input/output TDS, and pump pressure before installing factory-sealed membranes with warranty.",
    symptoms: [
      "Purified water tasting salty, hard, bitter, or flat",
      "Digital TDS meter showing pure water TDS above 150–200 PPM",
      "Purified water trickling very slowly while reject wastewater drains continuously",
      "RO membrane in continuous operation for over 18 to 36 months",
      "High raw borewell water hardness (1,000–2,500 PPM) clogging membrane pores",
      "Sudden drop in water purification speed with normal pump pressure"
    ],
    serviceInclusions: [
      "Digital raw water TDS vs purified water TDS salt rejection audit",
      "Booster pump operational pressure test (80 to 120 PSI)",
      "Membrane housing descaling, chemical sanitization & O-ring replacement",
      "Installation of 100% genuine 75 GPD, 80 GPD, or 100 GPD TFC membrane",
      "Flow restrictor (FR 450 / FR 550) calibration to prevent backpressure",
      "Post-carbon, mineral cartridge balance and taste verification"
    ],
    pricingRange: "₹1,400 - ₹2,400 (Includes Membrane + Fitting)",
    warranty: "6 to 12 Months Replacement Warranty",
    overviewParagraphs: [
      "The Reverse Osmosis (RO) membrane is the biological and chemical purification heart of your water purifier. Operating at a microscopic porosity of 0.0001 microns (0.1 nanometers), the thin-film composite (TFC) polyamide sheet eliminates up to 99% of dissolved salts, toxic heavy metals (lead, arsenic, mercury, fluoride), industrial chemicals, micro-plastics, and pathogenic microorganisms.",
      "In Greater Hyderabad, deep borewell groundwater in neighborhoods like Kukatpally, Gachibowli, Miyapur, LB Nagar, Dilsukhnagar, and Manikonda frequently exceeds 1,200 to 2,500 PPM TDS with severe calcium and magnesium hardness. Over 18 to 36 months of continuous operation, hard mineral scale, silica, and bio-foulants crystallize inside the tightly wound membrane spirals. This causes purified water output to reduce to an agonizing drip while wastewater drains non-stop into the sink.",
      "Replacing your choked RO membrane restores the purifier to 95%+ factory purification efficiency at roughly 15% to 20% of the cost of buying a new machine. Rainbow Aquafresh Systems installs 100% genuine, factory-sealed 75 GPD, 80 GPD, and 100 GPD membranes (USA Dow Filmtec, Vontron, Toray) backed by digital TDS testing, booster pump pressure audits, and written warranties."
    ],
    serviceFeatures: [
      { title: "Digital TDS Rejection Audit", desc: "We test input feed water TDS and purified water TDS with calibrated digital meters to calculate salt rejection percentage before and after membrane replacement." },
      { title: "Booster Pump Pressure Verification", desc: "We ensure the 24V/36V booster pump produces 80 to 120 PSI operational pressure. Fitting a new membrane behind a weak pump causes premature fouling and poor filtration." },
      { title: "Housing Descaling & O-Ring Renewal", desc: "We thoroughly descale the membrane vessel, flush accumulated biofilm, and fit food-grade silicone O-rings to ensure zero bypass and zero internal leakage." },
      { title: "Calibrated Flow Restrictor (FR) Matching", desc: "Every membrane is matched with a calibrated capillary flow restrictor (FR 450 for 75 GPD; FR 550 for 80/100 GPD) to maintain optimum operating backpressure." },
      { title: "Pre-Filter Carbon Protection", desc: "We inspect and replace sediment and activated carbon pre-filters to safeguard the delicate polyamide TFC membrane from chlorine oxidation and silt." },
      { title: "Post-Mineral & Taste Balancing", desc: "We calibrate the post-carbon and alkaline mineral cartridge to deliver naturally sweet, mineral-balanced drinking water in the recommended 80–150 PPM zone." }
    ],
    troubleshootingGuide: [
      { problem: "Purified water tastes salty, hard, or bitter", causes: "Membrane pores fouled by mineral scale or chlorine breakthrough tearing the polyamide layer", solution: "Install 75/80/100 GPD genuine high-rejection TFC membrane & replace pre-carbon filter" },
      { problem: "TDS meter reading above 200–400 PPM in pure water", causes: "Salt rejection fallen below 80% due to aging or membrane housing O-ring bypass", solution: "Digital salt rejection test, housing inspection, new genuine membrane installation" },
      { problem: "Water trickling into tank very slowly, reject water draining non-stop", causes: "Calcium scale and silica deposits severely choking microscopic membrane spiral pores", solution: "Pressure audit (80-120 PSI), chemical flush, and genuine high-flow membrane replacement" },
      { problem: "No pure water output while pump runs normally", causes: "Complete membrane pore blockage or choked flow restrictor causing excessive backpressure", solution: "Replace choked membrane and install new matched Flow Restrictor (FR 450 / FR 550)" },
      { problem: "Foul odor or chemical smell in pure water", causes: "Exhausted carbon pre-filter allowing chlorine to dissolve membrane polyamide sheets", solution: "Dual replacement of pre-carbon cartridge and genuine TFC membrane with sanitization" }
    ],
    priceTable: [
      { item: "75 GPD Genuine TFC Membrane", price: "₹1,400 – ₹1,800", description: "Ideal for municipal and mixed water up to 1,200 PPM TDS. Includes doorstep fitting and digital TDS test." },
      { item: "80 GPD High-Rejection Membrane", price: "₹1,600 – ₹2,000", description: "Optimized for Hyderabad borewell water up to 1,800 PPM TDS with 92%+ salt rejection." },
      { item: "100 GPD Heavy-Duty Borewell Membrane", price: "₹1,900 – ₹2,400", description: "Heavy-duty commercial-grade sheet for severe hardness (up to 2,500 PPM TDS) and faster tank filling." },
      { item: "Membrane + Full Filter Service Kit", price: "₹2,400 – ₹3,200", description: "Includes genuine membrane, spun sediment, pre-carbon, post-carbon, flow restrictor, and full sanitization." }
    ],
    coverageAreas: [
      "Malakpet", "Dilsukhnagar", "LB Nagar", "Kothapet", "Kukatpally", "Gachibowli", "Miyapur",
      "Madhapur", "Kondapur", "Hitech City", "Secunderabad", "Uppal", "Banjara Hills", "Jubilee Hills"
    ],
    faqs: [
      { question: "How do I know if my RO membrane is failing?", answer: "The most reliable indicator is water TDS: if your pure water TDS climbs above 150–200 PPM (or salt rejection falls below 85–90%), or water output reduces to a slow drip while reject water flows normally, the membrane is choked with scale or breached." },
      { question: "Should I replace the membrane or buy a new water purifier?", answer: "In almost all cases, replacing the membrane restores your water purifier to 95%+ factory purification efficiency at a fraction of the ₹12,000–₹20,000 cost of a new machine. Purifiers with intact bodies and good booster pumps work like brand new after membrane replacement." },
      { question: "How long does an RO membrane last in Hyderabad?", answer: "Membrane lifespan typically ranges between 18 and 36 months in Hyderabad. Longevity depends on your input water TDS (e.g. 400 PPM municipal water vs 2,000 PPM borewell water), daily consumption volume, and crucially, whether pre-filters are replaced every 3 to 6 months to prevent chlorine and silt fouling." },
      { question: "Which membrane capacity (GPD) should I choose?", answer: "Standard domestic units use 75 GPD (gallons per day) or 80 GPD membranes for input TDS up to 1,500 PPM. For heavy borewell water above 1,500 PPM or larger families, we install 100 GPD high-rejection membranes paired with an FR 550 flow restrictor." },
      { question: "Do you provide commercial RO membrane replacement?", answer: "Yes, we replace 4040 (250 LPH) and 8040 (1,000+ LPH) industrial membranes for commercial RO plants in schools, hospitals, hotels, and apartment complexes across Hyderabad." },
      { question: "Why is it recommended to replace pre-filters alongside the membrane?", answer: "Sediment and carbon pre-filters protect the delicate polyamide thin-film composite (TFC) membrane from dirt particles and chlorine. Installing a new membrane behind choked pre-filters drastically shortens its lifespan." }
    ],
    relatedServices: [
      { name: "RO Repair Service", slug: "/ro-repair-hyderabad" },
      { name: "Filter Replacement", slug: "/ro-filter-replacement-hyderabad" },
      { name: "RO AMC Plans", slug: "/ro-amc-service" },
      { name: "Kent RO Service", slug: "/kent-ro-service-repair-hyderabad" },
      { name: "Commercial RO Plants", slug: "/commercial-ro-plants" }
    ]
  },
  "ro-booster-pump": {
    slug: "ro-booster-pump-repair-replacement-hyderabad",
    title: "RO Booster Pump Repair & Replacement in Hyderabad",
    shortTitle: "Booster Pump Repair",
    category: "component-repair",
    badge: "100% Pure Copper Wound Motors",
    description: "RO membranes require 60 to 120 PSI hydrostatic pressure to force water through microscopic pores. When your booster pump weakens, leaks, or vibrates loudly, purification stalls. We repair pump heads and install pure copper 75 GPD, 100 GPD, and 150 GPD pumps.",
    symptoms: [
      "Loud vibrating, grinding, or buzzing sound coming from purifier",
      "Purifier running continuously but storage tank remains empty",
      "Water leaking from pump head diaphragm",
      "Output pressure gauge reading below 60 PSI"
    ],
    serviceInclusions: [
      "Electronic PSI pressure gauge testing",
      "Pump diaphragm head inspection & leak repair",
      "Installation of 24V/36V pure copper booster pump",
      "Electrical DC voltage check from SMPS adapter",
      "Vibration dampening rubber pad fitting"
    ],
    pricingRange: "₹1,200 - ₹2,200",
    warranty: "1 Year Comprehensive Motor Warranty",
    faqs: [
      { question: "Why is my RO pump making loud noise?", answer: "Loud noise is caused by worn bearings, scale buildup in the pump head, or trapped airlock bubbles. We repair or replace the diaphragm head on-site." }
    ],
    relatedServices: [
      { name: "SMPS Power Supply", slug: "/ro-smps-power-supply-repair-hyderabad" },
      { name: "Membrane Replacement", slug: "/ro-membrane-replacement-service-hyderabad" }
    ]
  },
  "ro-smps-power-supply": {
    slug: "ro-smps-power-supply-repair-hyderabad",
    title: "RO SMPS Power Supply & Adapter Repair in Hyderabad",
    shortTitle: "SMPS Power Supply Repair",
    category: "component-repair",
    badge: "Surge Protected 24V / 36V 2.5A Units",
    description: "The Switched-Mode Power Supply (SMPS) converts 230V AC mains electricity into stable 24V/36V DC power to operate the booster pump, solenoid valve, and UV lamp. We resolve dead purifiers, power trips, and voltage surge damage with heavy-duty copper SMPS units.",
    symptoms: [
      "Water purifier completely dead with no lights or sound",
      "Flickering LED indicators on the front panel",
      "SMPS adapter feels burning hot to the touch or smells like burnt plastic",
      "Purifier trips the home MCB circuit breaker when turned on"
    ],
    serviceInclusions: [
      "DC voltage and ampere output testing",
      "Float switch sensor continuity check",
      "Installation of surge-protected 24V/36V 2.5A SMPS adapter",
      "Internal wiring harness insulation and heat shrink sealing",
      "Overload and short-circuit safety testing"
    ],
    pricingRange: "₹450 - ₹950",
    warranty: "6 Months Replacement Warranty",
    faqs: [
      { question: "Why did my RO power supply stop working?", answer: "Voltage spikes, loose wall sockets, or pump overload can blow the internal SMPS fuse and rectifier. We replace it with a surge-resistant industrial adapter." }
    ],
    relatedServices: [
      { name: "PCB Circuit Repair", slug: "/ro-pcb-circuit-board-repair-hyderabad" },
      { name: "Booster Pump Repair", slug: "/ro-booster-pump-repair-replacement-hyderabad" }
    ]
  },
  "ro-pcb-circuit-board": {
    slug: "ro-pcb-circuit-board-repair-hyderabad",
    title: "RO PCB Circuit Board & Digital Display Repair Hyderabad",
    shortTitle: "PCB Circuit Board Repair",
    category: "component-repair",
    badge: "Digital Microcontroller Diagnostics",
    description: "Modern smart RO purifiers use microcontroller PCB boards to manage auto-flushing, digital TDS displays, UV fail alarms, and filter life indicators. Our technicians diagnose and repair faulty PCBs, micro-switches, and sensors across all digital purifier brands.",
    symptoms: [
      "Purifier beeping continuously with red error light",
      "Filter replacement alarm won't reset after service",
      "Digital screen blank or showing incorrect TDS readings",
      "Auto-flush function running endlessly"
    ],
    serviceInclusions: [
      "Electronic board component testing",
      "Sensor probe calibration (TDS & water level)",
      "IC chip replacement or full PCB swap",
      "Display touch panel responsiveness check"
    ],
    pricingRange: "₹650 - ₹1,800",
    warranty: "6 Months Warranty",
    faqs: [
      { question: "Can smart digital RO boards be repaired instead of replaced?", answer: "Yes, minor sensor faults and relay issues can be repaired on-site; damaged main microcontrollers are replaced with original brand boards." }
    ],
    relatedServices: [
      { name: "Kent RO Service", slug: "/kent-ro-service-repair-hyderabad" },
      { name: "Aquaguard RO Service", slug: "/aquaguard-ro-service-repair-hyderabad" }
    ]
  },
  "ro-uv-lamp-replacement": {
    slug: "ro-uv-lamp-replacement-hyderabad",
    title: "RO UV Lamp & Quartz Sleeve Replacement Hyderabad",
    shortTitle: "UV Lamp Replacement",
    category: "component-repair",
    badge: "11W / 16W Philips Germicidal Lamps",
    description: "Ultraviolet (UV) purification kills 99.99% of biological pathogens, bacteria, cyst spores, and waterborne viruses. UV lamps lose germicidal intensity after 8,000 burning hours. We replace UV bulbs, quartz sleeves, and UV ballasts with genuine Philips components.",
    symptoms: [
      "UV alarm beeping or flashing red indicator",
      "Purifier storage tank water developing microbial odor",
      "UV chamber metal barrel feels cold when purifier is running",
      "Quartz glass sleeve coated with cloudy mineral scale"
    ],
    serviceInclusions: [
      "UV ballast voltage output verification",
      "Installation of original 11W / 16W 4-pin UV lamp",
      "Quartz glass sleeve cleaning and descaling",
      "Leak-tight silicone O-ring sealing on UV barrel"
    ],
    pricingRange: "₹450 - ₹950",
    warranty: "6 Months Warranty",
    faqs: [
      { question: "How often should UV lamp be changed?", answer: "Even if the lamp still emits blue light, germicidal UV-C intensity degrades after 12 months (approx 8,000 hours). Annual replacement is recommended." }
    ],
    relatedServices: [
      { name: "Tank Cleaning", slug: "/ro-sanitization-tank-cleaning-service-hyderabad" },
      { name: "Filter Replacement", slug: "/ro-filter-replacement-hyderabad" }
    ]
  },
  "ro-tds-adjustment": {
    slug: "ro-tds-adjustment-controller-service-hyderabad",
    title: "RO TDS Adjustment & Controller Service Hyderabad",
    shortTitle: "TDS Adjustment & Controller",
    category: "general-maintenance",
    badge: "Digital TDS & pH Optimization",
    description: "Drinking water stripped of all minerals tastes flat and acidic, while excess TDS tastes salty and bitter. We calibrate manual and digital TDS controllers to achieve the ideal 80–150 PPM drinking range while preserving healthy calcium and magnesium minerals.",
    symptoms: [
      "Purified water tastes bitter, sour, or unnatural",
      "TDS meter reading either too low (<30 PPM) or too high (>300 PPM)",
      "TDS adjusting screw valve leaking water",
      "Family members complaining of flat taste in drinking water"
    ],
    serviceInclusions: [
      "Dual digital TDS calibration of raw vs purified water",
      "TDS controller needle valve tuning or replacement",
      "Active Bio-Alkaline copper post-filter balance",
      "Taste verification and pH strip test (optimal 7.2–8.0 pH)"
    ],
    pricingRange: "₹299 - ₹650",
    warranty: "30 Days Taste & TDS Guarantee",
    faqs: [
      { question: "What is the healthiest TDS level for drinking water?", answer: "WHO and BIS standards recommend a TDS between 80 mg/L and 150 mg/L for optimal taste, hydration, and mineral absorption." }
    ],
    relatedServices: [
      { name: "Maintenance Service", slug: "/complete-ro-maintenance-service-hyderabad" },
      { name: "Membrane Replacement", slug: "/ro-membrane-replacement-service-hyderabad" }
    ]
  },
  "ro-water-leakage": {
    slug: "ro-water-leakage-repair-hyderabad",
    title: "RO Water Leakage Repair Service Hyderabad",
    shortTitle: "Water Leakage Repair",
    category: "component-repair",
    badge: "Same-Day Emergency Response",
    description: "Internal and external water leaks can damage kitchen cabinets, short-circuit electronic adapters, and waste hundreds of liters of water. We carry heavy-duty food-grade push-fit connectors, pressure regulators, and replacement bowls to stop leaks permanently.",
    symptoms: [
      "Water pooling on kitchen counter or under-sink cabinet",
      "Dripping from pre-filter housing bowl threads",
      "Cracked elbow connectors spraying fine mist of water",
      "Wastewater drain pipe running non-stop 24 hours a day"
    ],
    serviceInclusions: [
      "Full pressure diagnostic of all internal tubing",
      "Replacement of damaged 1/4-inch or 3/8-inch food-grade pipes",
      "New EPDM rubber O-rings on filter housings",
      "Solenoid valve auto shut-off verification"
    ],
    pricingRange: "₹250 - ₹650",
    warranty: "90 Days Leak-Free Guarantee",
    faqs: [
      { question: "Why is reject water flowing even when the purifier is switched off?", answer: "This happens when the Solenoid Valve (SV) gets stuck in the open position. Replacing the 24V SV stops the continuous drain flow." }
    ],
    relatedServices: [
      { name: "Installation Service", slug: "/ro-installation-hyderabad" },
      { name: "Booster Pump Repair", slug: "/ro-booster-pump-repair-replacement-hyderabad" }
    ]
  },
  "complete-ro-maintenance": {
    slug: "complete-ro-maintenance-service-hyderabad",
    title: "Complete 12-Point RO Purifier Maintenance Hyderabad",
    shortTitle: "12-Point Maintenance Checkup",
    category: "general-maintenance",
    badge: "Comprehensive 12-Point Health Audit",
    description: "Prevent sudden purifier breakdowns and protect your family's health with our exhaustive 12-point preventive maintenance service. Includes pre-filter flushing, electrical safety checks, membrane descaling, and digital water quality calibration.",
    symptoms: [
      "Purifier has not been serviced for more than 6 months",
      "Water flow rate gradually decreasing",
      "Unpleasant taste or slight odor in stored water",
      "General routine health inspection before monsoon/summer"
    ],
    serviceInclusions: [
      "Raw water vs pure water digital TDS analysis",
      "Sediment pre-filter flush & candle cleaning",
      "Carbon block absorption check",
      "Booster pump PSI pressure test",
      "SMPS voltage & electrical wiring audit",
      "Storage tank sanitization & float valve check"
    ],
    pricingRange: "₹299 (Complete Checkup)",
    warranty: "30 Days Service Guarantee",
    faqs: [
      { question: "How long does a complete RO maintenance visit take?", answer: "Our certified technician completes the full 12-point inspection, sanitization, and calibration in approximately 30 to 45 minutes." }
    ],
    relatedServices: [
      { name: "RO AMC Plans", slug: "/ro-amc-service" },
      { name: "Tank Cleaning", slug: "/ro-sanitization-tank-cleaning-service-hyderabad" }
    ]
  },
  "ro-sanitization-tank-cleaning": {
    slug: "ro-sanitization-tank-cleaning-service-hyderabad",
    title: "RO Tank Cleaning & Internal Sanitization Hyderabad",
    shortTitle: "Tank Cleaning & Sanitization",
    category: "general-maintenance",
    badge: "Food-Grade Disinfection Process",
    description: "Over time, stagnant water tanks can accumulate slime, biofilm, airborne bacteria, and mold spores. Our food-grade disinfection process removes microbial contamination without leaving chemical residues or chlorine aftertaste.",
    symptoms: [
      "Purified water develops a musty or stale smell after sitting in tank",
      "Visible white film or algae lining inside the transparent water tank",
      "Water purifier hasn't been used for several weeks during holidays",
      "Tasting foul despite new filter replacement"
    ],
    serviceInclusions: [
      "Dismantling of water storage reservoir",
      "Food-grade hydrogen peroxide & citric acid sanitization",
      "Faucet tap dismantling and ultrasonic scale removal",
      "High-pressure flush of internal delivery lines",
      "Fresh mineral balance and microbial test"
    ],
    pricingRange: "₹350 - ₹550",
    warranty: "100% Odor-Free Guarantee",
    faqs: [
      { question: "Is chemical used in tank cleaning safe for children?", answer: "Yes, we strictly use 100% certified food-grade, non-toxic sanitizing agents that leave zero residual chemicals or odor." }
    ],
    relatedServices: [
      { name: "Filter Replacement", slug: "/ro-filter-replacement-hyderabad" },
      { name: "UV Lamp Replacement", slug: "/ro-uv-lamp-replacement-hyderabad" }
    ]
  },
  "ro-shifting-reinstallation": {
    slug: "ro-shifting-uninstallation-reinstallation-hyderabad",
    title: "RO Shifting, Uninstallation & Reinstallation Hyderabad",
    shortTitle: "RO Shifting & Reinstallation",
    category: "general-maintenance",
    badge: "Safe Relocation & Precision Wall Mounting",
    description: "Relocating your apartment or shifting houses in Hyderabad? Our technicians safely uninstall your water purifier, pack delicate filter cartridges for transit, and reinstall it at your new home with clean wall mounting and plumbing.",
    symptoms: [
      "Moving to a new apartment or rented flat in Hyderabad",
      "Need uninstallation without spilling water or damaging tiles",
      "New kitchen requiring under-sink or marble wall drilling",
      "Need new diverter valve and extended food-grade piping"
    ],
    serviceInclusions: [
      "Depressurization and safe water drainage of storage tank",
      "Safe unmounting of purifier body and external pre-filter",
      "Precision drilling and vibration-dampened wall mounting at new home",
      "Inlet brass diverter valve installation and pipe routing",
      "Full startup pressure and leak testing"
    ],
    pricingRange: "₹450 - ₹850 (Uninstallation + Reinstallation)",
    warranty: "Installation Guarantee Included",
    faqs: [
      { question: "Do you provide extra piping and plumbing fittings during shifting?", answer: "Yes, our technicians carry extra 1/4-inch and 3/8-inch food-grade pipes, diverter valves, Teflon tape, and heavy-duty wall anchors." }
    ],
    relatedServices: [
      { name: "RO Installation", slug: "/ro-installation-hyderabad" },
      { name: "Leakage Repair", slug: "/ro-water-leakage-repair-hyderabad" }
    ]
  },
  "kent-ro-service": {
    slug: "kent-ro-service-repair-hyderabad",
    title: "Kent RO Service & Repair in Hyderabad",
    shortTitle: "Kent RO Service",
    category: "brand-service",
    badge: "Independent Multi-Brand Specialists | Genuine Compatible Spares",
    description: "Independent specialized service and out-of-warranty repair for all Kent RO models across Hyderabad. We resolve UV fail beeping alarms, filter change alarms, slow water flow, booster pump vibration, PCB faults, and membrane scaling with genuine parts.",
    symptoms: [
      "Kent RO beeping continuously (2 beeps = UV fail alarm; 4 beeps = filter change alarm)",
      "Water filling very slowly into storage tank or stopping completely",
      "Kent booster pump vibrating loudly or leaking from pump head",
      "Purified water tasting strange, bitter, or high output TDS",
      "Water leaking from push-fit internal elbows or auto-shut-off valve",
      "Electrical power failure (no LED indicator light / faulty SMPS adapter)"
    ],
    serviceInclusions: [
      "Kent filter change alarm reset and PCB electronic diagnostic",
      "Genuine Kent sediment filter, activated carbon, and post-carbon replacement",
      "High-rejection 75/80/100 GPD RO membrane installation with TDS testing",
      "UV chamber diagnostic, quartz jacket cleaning & UV lamp replacement",
      "Booster pump pressure test (60–100 PSI) and leak-free elbow replacement",
      "Digital TDS controller calibration for optimum taste and healthy minerals"
    ],
    pricingRange: "₹299 Inspection Fee (Waived on Repair) | Transparent Spare Rates",
    warranty: "6 to 12 Months Warranty on Parts",
    disclaimer: "Independent Service Provider Notice: Rainbow Aquafresh Systems is an independent multi-brand water purifier sales and service provider. We are not an authorized franchisee or official service center of Kent RO Systems Ltd. All product names, logos, and trademarks (such as 'Kent') are the property of their respective owners and are used here solely for descriptive and identification purposes.",
    overviewParagraphs: [
      "Rainbow Aquafresh Systems provides specialized, independent doorstep repair, scheduled servicing, and genuine spare replacement for all Kent RO domestic and commercial water purifiers across Greater Hyderabad. With more than two decades of dedicated water engineering experience, our technicians understand the unique micro-controller electronics, booster pump tolerances, and multi-stage mineral RO configurations inside Kent systems.",
      "Kent water purifiers are equipped with micro-controller PCBs designed to alert users through audio-visual beeps. Continuous 2 beeps indicate a UV fail alarm (UV lamp or ballast failure), while 4 beeps indicate a filter change alarm triggered by the programmed operational timer. Our technicians carry specialized PCB diagnostic tools to identify electronic versus physical faults, replace exhausted filters, and reset alarm timers correctly.",
      "Whether your Kent purifier is vibrating loudly, leaking from push-fit internal elbows, failing to power on, delivering slow water flow, or producing water with high TDS or unpleasant taste, our mobile service units reach your home within 60 to 90 minutes. We provide upfront, transparent quotations before starting any work."
    ],
    brandsOrModels: [
      "Kent Grand+", "Kent Grand Star", "Kent Prime+", "Kent Prime TC", "Kent Pearl", "Kent Pearl Star",
      "Kent Supreme", "Kent Supreme Extra", "Kent Sterling+", "Kent Maxx", "Kent Elegant", "Kent Pride",
      "Kent Wonder", "Kent Mineral RO", "Kent Superb", "Kent Under-Sink RO"
    ],
    serviceFeatures: [
      { title: "UV & Filter Alarm PCB Reset", desc: "Accurate electronic diagnostic for 2-beep (UV lamp failure) and 4-beep (filter life exhaustion) alarms with proper reset sequence." },
      { title: "Genuine Compatible Filter Replacement", desc: "Factory-sealed inline sediment filters, granular activated carbon, and post-carbon taste enhancers designed for Kent filter chambers." },
      { title: "High-Rejection Membrane Installation", desc: "Genuine 75 GPD and 100 GPD TFC RO membranes with up to 95% salt rejection for Hyderabad borewell and municipal supplies." },
      { title: "Booster Pump Pressure & Leak Repair", desc: "High-pressure pump diagnostics (70–110 PSI), pump head diaphragm replacement, and elimination of vibration noise." },
      { title: "TDS Controller Valve Calibration", desc: "Precision calibration of the patented Kent Mineral RO TDS controller valve to keep pure water TDS in the healthy 80–150 PPM zone." },
      { title: "Doorstep 60–90 Min Dispatch", desc: "Technicians deployed throughout East, West, North, and South Hyderabad carrying all required spares and test meters." }
    ],
    troubleshootingGuide: [
      { problem: "Kent RO beeping 2 times continuously", causes: "UV fail alarm: UV germicidal tube blown, quartz sleeve fouled, or UV ballast SMPS circuit damaged", solution: "Test ballast output voltage, replace 11W UV lamp, clean quartz glass sleeve, and reset PCB" },
      { problem: "Kent RO beeping 4 times continuously", causes: "Filter change alarm: micro-controller operational timer reached 600 hours of continuous purification", solution: "Inspect and replace choked inline sediment and carbon cartridges, perform PCB sensor reset" },
      { problem: "Water flowing very slowly into storage tank", causes: "Choked sediment pre-filter, scaled RO membrane, or booster pump operating below 60 PSI", solution: "Digital pressure audit, replace clogged filters or membrane, calibrate flow restrictor" },
      { problem: "Purified water tasting strange, bitter, or flat", causes: "TDS controller set too low (stripping minerals) or post-carbon cartridge exhausted", solution: "Calibrate TDS controller valve with digital TDS meter to 80–150 PPM, replace post-carbon" },
      { problem: "Kent booster pump vibrating loudly or leaking", causes: "Worn pump head diaphragm, loose motor mounting grommets, or dry-run cavitation", solution: "Replace pump head diaphragm seal, tighten anti-vibration rubber mounts, test inlet solenoid" },
      { problem: "Water leaking inside Kent body / base", causes: "Cracked push-fit quick-connect elbow, loose auto-cutoff valve, or damaged tubing", solution: "Pressure leak check, replace faulty push-fit fittings with food-grade locking clips" }
    ],
    priceTable: [
      { item: "Doorstep Inspection & Diagnostic", price: "₹299 (Waived on Repair)", description: "Full electronic and water flow diagnostic, TDS audit, and upfront repair quote." },
      { item: "Kent Filter Change Kit (Sediment + Pre-Carbon)", price: "₹750 – ₹1,100", description: "Genuine compatible inline filters + pre-filter candle + PCB alarm reset." },
      { item: "Genuine Kent RO Membrane Replacement", price: "₹1,400 – ₹2,200", description: "75/80/100 GPD high-rejection TFC membrane with housing chemical sanitization." },
      { item: "Kent UV Lamp & Ballast Replacement", price: "₹650 – ₹1,200", description: "11W Phillips/Osram germicidal UV tube + electronic ballast with UV alarm reset." },
      { item: "Booster Pump Repair / Replacement", price: "₹1,200 – ₹2,200", description: "Heavy-duty 24V copper booster pump replacement or diaphragm repair with 1-year warranty." },
      { item: "Kent Annual Maintenance Contract (AMC)", price: "₹1,999 – ₹2,999/yr", description: "Includes 3-4 visits, free filter changes, free membrane (Gold), and zero repair charges." }
    ],
    coverageAreas: [
      "Malakpet", "Dilsukhnagar", "LB Nagar", "Kothapet", "Kukatpally", "Gachibowli", "Miyapur",
      "Madhapur", "Kondapur", "Hitech City", "Secunderabad", "Uppal", "Banjara Hills", "Jubilee Hills",
      "Begumpet", "Tarnaka", "Mehdipatnam"
    ],
    faqs: [
      { question: "Why is my Kent RO purifier beeping continuously?", answer: "Kent purifiers have built-in micro-controller alarms: 2 short beeps indicate a UV lamp failure or faulty UV ballast; 4 short beeps indicate the filter life timer has reached its programmed limit. Our technicians diagnose the root cause, replace the failing component, and reset the PCB alarm sensor." },
      { question: "Are you an authorized Kent service center?", answer: "Rainbow Aquafresh Systems is an independent multi-brand water purification sales and service provider. We are not an authorized franchise of Kent RO Systems Ltd. We specialize in post-warranty doorstep servicing, transparent pricing, and genuine compatible spare parts across Hyderabad." },
      { question: "Which Kent RO models do you service in Hyderabad?", answer: "We service all domestic Kent models including Kent Grand+, Kent Prime, Kent Pearl, Kent Sterling, Kent Maxx, Kent Supreme, Kent Elegant, Kent Pride, Kent Mineral RO, and Kent under-sink models." },
      { question: "How quickly can a technician visit my home in Hyderabad?", answer: "Our field technicians are located across East, West, North, and South Hyderabad, reaching your doorstep within 60 to 90 minutes of booking." },
      { question: "Can you calibrate the TDS controller on Kent purifiers?", answer: "Yes, Kent Mineral RO purifiers feature an adjustable TDS controller valve. We use calibrated digital TDS meters to adjust the pure water TDS to the recommended 80–150 PPM range for balanced mineral content and pleasant taste." },
      { question: "Do you offer Annual Maintenance Contracts (AMC) for Kent RO?", answer: "Yes, we offer comprehensive and basic annual maintenance contracts for Kent purifiers starting from ₹1,999/year, covering periodic filter changes, free breakdown visits, and membrane replacement." }
    ],
    relatedServices: [
      { name: "RO Repair Service", slug: "/ro-repair-hyderabad" },
      { name: "Membrane Replacement", slug: "/ro-membrane-replacement-service-hyderabad" },
      { name: "Filter Replacement", slug: "/ro-filter-replacement-hyderabad" },
      { name: "RO AMC Plans", slug: "/ro-amc-service" },
      { name: "Aquaguard Service", slug: "/aquaguard-ro-service-repair-hyderabad" },
      { name: "RO Installation", slug: "/ro-installation-hyderabad" }
    ]
  },
  "aquaguard-ro-service": {
    slug: "aquaguard-ro-service-repair-hyderabad",
    title: "Aquaguard RO Service & Repair in Hyderabad",
    shortTitle: "Aquaguard RO Service",
    category: "brand-service",
    badge: "Eureka Forbes Purifier Specialists",
    description: "Expert doorstep repair and maintenance for all Eureka Forbes Aquaguard models including Aquaguard Enhance, Geneus, Magna, Blaze, Royale, and Dr. Aquaguard. Genuine Chemi-Block, Mineral Guard, and HD RO cartridges.",
    symptoms: [
      "Aquaguard service indicator light flashing red",
      "Water flow rate reduced to a trickle",
      "Tasting bitter or stale",
      "Power adapter not turning on"
    ],
    serviceInclusions: [
      "Electronic PCB error code scanning",
      "Replacement of HD sediment and Chemi-block filters",
      "Biocontrol and Mineral Guard cartridge renewal",
      "Sanitization of storage chamber and faucet"
    ],
    pricingRange: "₹299 Service | Spares at Fair Prices",
    warranty: "6 to 12 Months Warranty",
    faqs: [
      { question: "Do you supply original Aquaguard filter cartridges?", answer: "Yes, we use certified high-rejection cartridges compatible with Eureka Forbes models that deliver superior water clarity." }
    ],
    relatedServices: [
      { name: "Kent RO Service", slug: "/kent-ro-service-repair-hyderabad" },
      { name: "Filter Replacement", slug: "/ro-filter-replacement-hyderabad" }
    ]
  },
  "livpure-ro-service": {
    slug: "livpure-ro-service-repair-hyderabad",
    title: "Livpure RO Service & Repair in Hyderabad",
    shortTitle: "Livpure RO Service",
    category: "brand-service",
    badge: "Livpure Multi-Stage Diagnostics",
    description: "Doorstep service and genuine filter replacement for all Livpure models including Livpure Glo, Platino, Pep Pro, Touch Plus, and Zinger. We restore water flow, eliminate noise, and replace genuine filters with warranty.",
    symptoms: [
      "Livpure smart touch panel unresponsive",
      "Filter replacement alarm triggered",
      "Continuous wastewater drainage",
      "Low water pressure output"
    ],
    serviceInclusions: [
      "Livpure multi-stage filter kit replacement",
      "Booster pump PSI verification",
      "Taste enhancer and mineralizer tuning",
      "Complete electrical and leak check"
    ],
    pricingRange: "₹299 Service Fee",
    warranty: "6 Months Warranty on Replaced Spares",
    faqs: [
      { question: "How soon can you service my Livpure purifier?", answer: "Our mobile teams in Hyderabad reach your doorstep within 60 to 90 minutes of booking." }
    ],
    relatedServices: [
      { name: "Pureit Service", slug: "/pureit-ro-service-repair-hyderabad" },
      { name: "AO Smith Service", slug: "/ao-smith-ro-service-repair-hyderabad" }
    ]
  },
  "pureit-ro-service": {
    slug: "pureit-ro-service-repair-hyderabad",
    title: "Pureit RO Service & Germkill Kit Replacement Hyderabad",
    shortTitle: "Pureit RO Service",
    category: "brand-service",
    badge: "HUL Pureit Germkill Kit Specialists",
    description: "Expert servicing for HUL Pureit water purifiers including Pureit Copper+, Ultima, Classic, Mineral RO+UV, and Marvella. We replace genuine GKK (Germkill Kits), RO membranes, and electronic control boards.",
    symptoms: [
      "Pureit Auto-Shut off triggered (Red GKK indicator)",
      "Copper auto-infusion function not operating",
      "Low flow rate into storage tank",
      "Water leaking from bottom joints"
    ],
    serviceInclusions: [
      "Original HUL Pureit GKK-1 / GKK-2 replacement",
      "Pureit internal valve and sensor unlocking",
      "TDS and copper level test",
      "Tank sanitization and leak inspection"
    ],
    pricingRange: "₹299 Service Fee",
    warranty: "Original Manufacturer Specs Warranty",
    faqs: [
      { question: "Why did my Pureit purifier stop dispensing water?", answer: "Pureit purifiers feature an automatic shut-off mechanism when the Germkill Kit expires. Replacing the GKK kit restores water flow immediately." }
    ],
    relatedServices: [
      { name: "Livpure Service", slug: "/livpure-ro-service-repair-hyderabad" },
      { name: "Kent Service", slug: "/kent-ro-service-repair-hyderabad" }
    ]
  },
  "ao-smith-ro-service": {
    slug: "ao-smith-ro-service-repair-hyderabad",
    title: "AO Smith RO Service & Repair in Hyderabad",
    shortTitle: "AO Smith RO Service",
    category: "brand-service",
    badge: "Advanced SCMT & Mineral Tech Care",
    description: "Specialized service and repair for AO Smith water purifiers including AO Smith Z8, Z9 (Hot & Cold), X8, ProPlanet, and Z1. We provide certified replacement filters, heating element troubleshooting, and electronic PCB repairs.",
    symptoms: [
      "AO Smith hot water dispensing not working",
      "Digital glow ring indicating filter change needed",
      "Water pressure drop from faucet",
      "Beeping alarm code on front panel"
    ],
    serviceInclusions: [
      "SCMT (Silver Charged Membrane Tech) filter check",
      "Hot water boiler coil and thermostat diagnostic",
      "High recovery membrane replacement",
      "Pressure regulator and electronic board repair"
    ],
    pricingRange: "₹299 Inspection Fee",
    warranty: "6 to 12 Months Warranty",
    faqs: [
      { question: "Can you fix the hot water function in AO Smith Z8/Z9?", answer: "Yes, our technicians diagnose thermal cutoffs, heating elements, and thermostat sensors to restore hot water dispensing." }
    ],
    relatedServices: [
      { name: "Repair Service", slug: "/ro-repair-hyderabad" },
      { name: "Complete Maintenance", slug: "/complete-ro-maintenance-service-hyderabad" }
    ]
  }
};
