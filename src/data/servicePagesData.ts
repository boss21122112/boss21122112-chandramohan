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
}

export const SPECIALIZED_SERVICES_DATA: Record<string, ServiceDetailData> = {
  "ro-membrane-replacement": {
    slug: "ro-membrane-replacement-service-hyderabad",
    title: "RO Membrane Replacement Service in Hyderabad",
    shortTitle: "RO Membrane Replacement",
    category: "component-repair",
    badge: "100% Genuine USA Filmtec & Vontron",
    description: "Reverse Osmosis (RO) membranes are the core purification engine that filters dissolved salts, heavy metals, arsenic, and chemicals at 0.0001 microns. We provide original 75 GPD, 80 GPD, and 100 GPD high-rejection TFC membranes for Hyderabad borewell water up to 2500 PPM TDS.",
    symptoms: [
      "Purified water tasting salty, hard, or bitter",
      "Digital TDS meter showing output TDS above 200 PPM",
      "Purified water trickling very slowly while wastewater drains rapidly",
      "Membrane has been in continuous use for over 18-24 months"
    ],
    serviceInclusions: [
      "Digital input & output TDS water audit",
      "Removal and housing flush of old membrane",
      "Installation of brand new 75/80/100 GPD TFC Membrane",
      "New Flow Restrictor (FR 450/550) calibration to prevent backpressure",
      "Post-carbon and mineral cartridge balance test"
    ],
    pricingRange: "₹1,400 - ₹2,400 (Includes Membrane + Fitting)",
    warranty: "6 to 12 Months Replacement Warranty",
    faqs: [
      { question: "How do I know if my RO membrane is damaged?", answer: "If your purified water TDS exceeds 150-200 PPM when input is high, or water output reduces to a slow drip despite good pump pressure, the membrane pores are scaled and need replacement." },
      { question: "Which membrane capacity do I need for borewell water?", answer: "For groundwater between 1200 and 2500 PPM in Hyderabad, we recommend an 80 GPD or 100 GPD high-rejection TFC membrane with an FR 550 flow restrictor." }
    ],
    relatedServices: [
      { name: "Booster Pump Repair", slug: "/ro-booster-pump-repair-replacement-hyderabad" },
      { name: "Filter Replacement", slug: "/ro-filter-replacement-hyderabad" },
      { name: "TDS Adjustment", slug: "/ro-tds-adjustment-controller-service-hyderabad" }
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
    badge: "Certified Kent Spares & Rapid Support",
    description: "Specialized service and repair for all Kent models including Kent Grand+, Kent Prime, Kent Pearl, Kent Sterling, Kent Maxx, and Kent Supreme. We provide genuine Kent filter kits, high-rejection membranes, UV fail alarms, and PCB repairs.",
    symptoms: [
      "Kent RO beeping continuously (UV Fail / Filter Change Alarm)",
      "Kent Grand+ water filling very slowly into storage tank",
      "Kent booster pump making loud vibrating noise",
      "Water leaking from push-fit fittings inside the cabinet"
    ],
    serviceInclusions: [
      "Kent filter life alarm reset and PCB diagnostic",
      "Original Kent sediment, carbon, and RO membrane replacement",
      "Kent UV chamber and germicidal lamp testing",
      "Digital TDS controller calibration for sweet taste"
    ],
    pricingRange: "₹299 Service | Genuine Spares at Transparent Rates",
    warranty: "6 to 12 Months Warranty on Parts",
    faqs: [
      { question: "Why is my Kent RO beeping continuously?", answer: "Kent purifiers beep for two reasons: 2 beeps indicate the UV lamp has burned out, and 4 beeps indicate the filter life timer has expired. We reset the sensor and replace components on-site." }
    ],
    relatedServices: [
      { name: "Aquaguard Service", slug: "/aquaguard-ro-service-repair-hyderabad" },
      { name: "RO Membrane Replacement", slug: "/ro-membrane-replacement-service-hyderabad" }
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
