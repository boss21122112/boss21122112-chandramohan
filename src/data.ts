import { Product, ServiceItem, CommercialCapacity, CustomerReview, ServiceArea } from './types';

export const DOMESTIC_PRODUCTS: Product[] = [
  {
    id: 'dolphin',
    name: 'Dolphin',
    category: 'domestic',
    description: 'Compact, wall-mountable, elegant design with advanced multi-stage RO + UV purification. Extremely durable and perfect for Indian households.',
    image: 'dolphin_purifier',
    bestFor: 'Medium families with TDS level up to 1500 ppm',
    storageCapacity: '8 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'RO + UV Purification',
    tdsController: 'Yes, Manual Adjuster',
    copperFeature: 'No Dedicated Copper Filter',
    warranty: '12 Months Warranty',
    powerConsumption: '24W DC',
    price: '₹7,499',
    originalPrice: '₹12,500',
    keyFeatures: [
      'Wall Mountable / Desktop Design',
      'Leak-Proof Connector Joints',
      'Auto Shut-Off on Full Tank',
      'Long-Life Membrane'
    ]
  },
  {
    id: 'aquagrand',
    name: 'Aquagrand+',
    category: 'domestic',
    description: 'Hyderabad’s all-time favorite model. Features a clear transparent tank, smart LED indicators, and active copper + alkaline mineralizer for sweet-tasting healthy water.',
    image: 'aquagrand_purifier',
    bestFor: 'Hyderabad water conditions (high calcium/magnesium TDS)',
    storageCapacity: '12 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'RO + UV + UF + TDS + Copper',
    tdsController: 'Yes, Digital Adjuster',
    copperFeature: 'Yes, Active Copper Cartridge',
    warranty: '1 Year Warranty',
    powerConsumption: '36W DC',
    price: '₹8,999',
    originalPrice: '₹14,500',
    keyFeatures: [
      'Active Copper Technology',
      'LED Working & Full Indicators',
      'Double Protection UV LED in Tank',
      '100GPD High Flow Pump'
    ]
  },
  {
    id: 'aiqua-black',
    name: 'AIQUA',
    category: 'domestic',
    description: 'Sleek, futuristic deep matte black finish. Equipped with intelligent microprocessor, automatic membrane flusher, and real-time filter health alert buzzer.',
    image: 'aiquablack_purifier',
    bestFor: 'Tech-savvy users looking for premium aesthetics',
    storageCapacity: '10 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'RO + UV + UF + TDS Controller',
    tdsController: 'Yes, Audio-Visual Alerts',
    copperFeature: 'Yes, Bio-Alkaline Copper',
    warranty: '1 Year',
    powerConsumption: '30 Watts',
    price: '₹9,500',
    originalPrice: '₹17,000',
    keyFeatures: [
      'Alkaline Bio pH Balance Booster',
      'Matte Black Anti-Fingerprint Finish',
      'Smart Auto Flushing System',
      'Smart Water Saving Mode'
    ]
  },
  {
    id: 'curve-organic',
    name: 'Curve Organic',
    category: 'domestic',
    description: 'Elegant wave-curve aesthetic cabinet design combined with active organic copper, zinc, and bio-alkaline minerals for natural tasting sweet drinking water.',
    image: 'curve_organic_purifier',
    bestFor: 'Modern premium modular kitchens with design-focus',
    storageCapacity: '15 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'Large Family Storage, RO + UV + UF + TDS',
    tdsController: 'Yes, Organic Mineralizer',
    copperFeature: 'Yes, Organic Copper & Zinc',
    warranty: '1 Year',
    powerConsumption: '36 Watts',
    price: '₹10,500',
    originalPrice: '₹19,000',
    keyFeatures: [
      'Organic Active Copper & Zinc cartridge',
      'Futuristic wave curved cabinet profile',
      'Eco Intelligent Auto Flush controller',
      '100% Food-grade path for safe hydration'
    ]
  },
  {
    id: 'aqua-pearl',
    name: 'Aqua Pearl',
    category: 'domestic',
    description: 'Premium Pearl-finish curvilinear cabinet with smart carbon blocks and dynamic membrane flushing mechanism for maximized filter life.',
    image: 'aquapearl_purifier',
    bestFor: 'Modern modular kitchens & large families',
    storageCapacity: '10 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'RO + UV + UF + TDS Controller',
    tdsController: 'Yes, Manual Controller',
    copperFeature: 'Yes, Carbon Copper Filter',
    warranty: '1 Year',
    powerConsumption: '28 Watts',
    price: '₹9,500',
    originalPrice: '₹15,000',
    keyFeatures: [
      'Eco-Flush Auto Clean System',
      'Super Fine Sediment Removal',
      'Premium Aesthetic Cabinet',
      'Ultra Low Water Wastage Technology'
    ]
  },
  {
    id: 'copper-pearl',
    name: 'Copper Pearl',
    category: 'domestic',
    description: 'Luxury pristine pearlescent gloss design featuring dedicated active copper booster columns to naturally enrich water safety and immunity value.',
    image: 'copper_pearl_purifier',
    bestFor: 'Health-focused families desiring traditional benefits of copper',
    storageCapacity: '10 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'RO + UV + Active Copper Cartridge',
    tdsController: 'Yes, Manual Controller',
    copperFeature: 'Yes, Premium Copper Booster',
    warranty: '12 Months Warranty',
    powerConsumption: '32 Watts',
    price: '₹9,999',
    originalPrice: '₹16,000',
    keyFeatures: [
      'Immunity charged Active Copper technology',
      'Pristine visual pearlescent shell finish',
      'Superior taste-enhancer active filters',
      'Long running active membrane warranty'
    ]
  },
  {
    id: 'purosis',
    name: 'Purosis',
    category: 'domestic',
    description: 'Heavy duty, professional workhorse purifies ground borewell water effortlessly. Industry-tested standard RO architecture with dynamic booster pump.',
    image: 'purosis_purifier',
    bestFor: 'High Borewell TDS environments up to 3000 ppm',
    storageCapacity: '10 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'Double RO + TDS Adjuster',
    tdsController: 'Yes, Heavy-Duty Adjuster',
    copperFeature: 'No Dedicated Copper Filter',
    warranty: '1 Year Warranty',
    powerConsumption: '40 Watts',
    price: '₹11,499',
    originalPrice: '₹18,500',
    keyFeatures: [
      'Dual Filtration Passes',
      'Thick Heavy-Duty Filter Housing',
      'In-Built Pressure Relief Valve',
      'Compatible with municipal & borewell water'
    ]
  },
  {
    id: 'purosis-plus',
    name: 'Purosis Plus',
    category: 'domestic',
    description: 'Continuous continuous ultra-safe commercial-grade heavy purifier built for residential complexes. Includes ultra high flow components and safety valves.',
    image: 'purosis_plus_purifier',
    bestFor: 'High capacity residential apartments or larger villas',
    storageCapacity: '14 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'RO + UV + UF + TDS Controller',
    tdsController: 'Yes, Advanced Controller',
    copperFeature: 'No Dedicated Copper Filter',
    warranty: '1 Year',
    powerConsumption: '48 Watts',
    price: '₹12,999',
    originalPrice: '₹21,500',
    keyFeatures: [
      'Twin booster mechanism for quick recovery',
      'Built in auto electrical surge breaker',
      'Impact resistant heavy duty filter houses',
      'Multiport backflashing option support'
    ]
  },
  {
    id: 'innovica',
    name: 'Innovica',
    category: 'domestic',
    description: 'Slimline elegant space-saving purifier with advanced hot/cold option support framework. Fits beautifully under standard kitchen cabinets or tight wall spaces.',
    image: 'innovica_purifier',
    bestFor: 'Apartments & space-constrained standard kitchens',
    storageCapacity: '7 Litres',
    flowCapacity: '12 LPH',
    purificationTechnology: 'RO + UV + Mineralizer',
    tdsController: 'Yes, Integrated Adjuster',
    copperFeature: 'No Dedicated Copper Filter',
    warranty: '1 Year Warranty',
    powerConsumption: '24 Watts',
    price: '₹12,499',
    originalPrice: '₹19,000',
    keyFeatures: [
      'Super Slim Compact Form Factor',
      'Push-to-Open Child-Lock Faucet',
      'Fully Sealed Cabinet (Dust & Bug Proof)',
      'Dual-Density Sediment Prefilter Included'
    ]
  },
  {
    id: 'lx-one',
    name: 'LX One',
    category: 'domestic',
    description: 'High-end series model. Impeccable high-efficiency design featuring heavy duties filters, integrated pressure gauge, and active mineral revitalizer.',
    image: 'lxone_purifier',
    bestFor: 'Large households expecting 24/7 continuous pure water',
    storageCapacity: '10 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'Advanced RO Purification',
    tdsController: 'Yes, Digital MTDS Adjuster',
    copperFeature: 'Yes, Mineral Infused',
    warranty: '1 Year',
    powerConsumption: '36 Watts',
    price: '₹13,999',
    originalPrice: '₹22,000',
    keyFeatures: [
      'Dry Run Protection (Pump protection)',
      'Integrated Water Pressure Gauge',
      'Stainless Steel High Flow Faucet Option',
      'Food-Grade Virgin ABS Housing'
    ]
  },
  {
    id: 'lx-two',
    name: 'LX Two',
    category: 'domestic',
    description: 'The flagship supreme purifier, loaded with UV LED sterile reservoir, multi-directional tap, and carbon block composite matrix filters.',
    image: 'lxtwo_purifier',
    bestFor: 'Ultra-luxurious setups craving perfect purity and robust backup',
    storageCapacity: '10 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'RO + UV + UF + TDS Controller',
    tdsController: 'Yes, Intelli-Adjuster',
    copperFeature: 'Yes, Advanced Copper Core',
    warranty: '1 Year',
    powerConsumption: '45 Watts',
    price: '₹14,999',
    originalPrice: '₹24,000',
    keyFeatures: [
      'In-Tank continuous UV-C sterilization',
      'Turbo-charged 120 GPD Solenoid valve',
      'Alkaline Balance Regulator (pH 7.5 - 8.5)',
      'E-Z service design for rapid filter changes'
    ]
  },
  {
    id: 'aqua-2090',
    name: 'Aqua 2090',
    category: 'domestic',
    description: 'Heavy duty, advanced next-generation model with transparent water level visibility, intelligent LED status bar, and ultra-high-flow booster system.',
    image: 'aqua_2090_purifier',
    bestFor: 'Borewells with severe hardness / TDS spikes',
    storageCapacity: '10 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'Premium High Capacity Water Purifier',
    tdsController: 'Yes, Integrated Controller',
    copperFeature: 'No Dedicated Copper Filter',
    warranty: '1 Year',
    powerConsumption: '38 Watts',
    price: '₹11,500',
    originalPrice: '₹13,500',
    keyFeatures: [
      'Mega capacity transparent reservoir',
      'High-durability leakage-proof connector locks',
      'Intelligent Auto-power-off sensor suite',
      'Advanced double-layered pre-treatment block'
    ]
  },
  {
    id: 'aqua-roma',
    name: 'Aqua Roma',
    category: 'domestic',
    description: 'Value-for-money, high-durability RO model. Combines strong ABS body structure with high-output membrane filters to give crystal-clear tasting water on a budget.',
    image: 'aquaroma_purifier',
    bestFor: 'Excellent performance-to-cost ratio seekers, rental homes',
    storageCapacity: '10 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'Premium Domestic Water Purifier',
    tdsController: 'No',
    copperFeature: 'No',
    warranty: '1 Year',
    powerConsumption: '24 Watts',
    price: '₹9,500',
    originalPrice: '₹11,000',
    keyFeatures: [
      'Highly Affordable Spares',
      'Transparent Lower Panel to view water levels',
      'Standard 10-inch size cartridges',
      'Extremely Low Maintenance Cost'
    ]
  },
  {
    id: 'hot-and-cold-3-in-1',
    name: 'Hot and Cold 3 in 1 RO',
    category: 'domestic',
    description: 'Advanced 3-in-1 multi-temperature RO water purifier delivering instant Hot, Cold, and Normal water with 6-stage advanced purification and stainless steel hot water tank.',
    image: 'aquagrandReal',
    bestFor: 'Homes and offices requiring instant hot, cold, and normal pure drinking water',
    storageCapacity: '10 Litres',
    flowCapacity: '15 LPH',
    purificationTechnology: 'RO + UV + UF + TDS Controller',
    tdsController: 'Yes, Advanced TDS Controller',
    copperFeature: '3 in 1 (Hot | Cold | Normal)',
    warranty: '12 Months Warranty',
    powerConsumption: '500W (Hot) / 80W (Cold)',
    price: '₹16,500',
    originalPrice: '₹22,500',
    keyFeatures: [
      'Hot | Cold | Normal Water',
      '6 Stage Advanced Purification',
      'RO + UV + UF + TDS Controller',
      '100% Pure & Healthy Water',
      'Advanced Safety Protection',
      '10 Litre Storage Tank',
      'Stainless Steel Hot Water Tank',
      'Instant Hot & Cold Water'
    ]
  }
].map((item) => ({
  ...item,
  category: item.category as 'domestic' | 'commercial' | 'accessories',
  specs: [
    { label: 'Purification Technology', value: item.purificationTechnology },
    { label: 'Storage Capacity', value: item.storageCapacity },
    { label: 'Flow Capacity (LPH)', value: item.flowCapacity },
    { label: 'TDS Controller', value: item.tdsController },
    { label: 'Copper Feature', value: item.copperFeature },
    { label: 'Warranty', value: item.warranty },
    { label: 'Power Consumption', value: item.powerConsumption }
  ]
}));

export const COMMERCIAL_CAPACITIES: CommercialCapacity[] = [
  {
    id: '25-lph',
    capacity: '25 LPH',
    hourlyOutput: '25 Litres Per Hour',
    idealFor: 'Small offices, clinics, showrooms, and large villas of 10-25 people',
    applications: ['Staff drinking water', 'Coffee machines', 'Small clinics & dental setups'],
    features: ['Dual 150 GPD booster pumps', 'Robust twin GPD membranes', 'Sleek stainless steel skid frame', 'Compact wall-mountable setup'],
    specs: ['Purification Stages: RO + Active Carbon + Sediment pre-filters', 'Duty Cycle: 4-6 hours daily', 'Power Consumption: 60W']
  },
  {
    id: '50-lph',
    capacity: '50 LPH',
    hourlyOutput: '50 Litres Per Hour',
    idealFor: 'Mid-sized corporate offices, gyms, schools, and bakeries with 25-60 people',
    applications: ['Bulk dining drinking water', 'Kitchen cooking prep', 'High volume cafeteria counters'],
    features: ['Heavy-duty steel support structure', 'Water flow meter integration', 'Auto flushing electronic valve', 'Dry run safety sensor system'],
    specs: ['Purification Stages: Heavy Prefiltration + Dual RO path + Post Carbon', 'Duty Cycle: 6-8 hours daily', 'Power Consumption: 120W']
  },
  {
    id: '100-lph',
    capacity: '100 LPH',
    hourlyOutput: '100 Litres Per Hour',
    idealFor: 'Large offices, hostels, educational institutions, and healthcare centers',
    applications: ['Centralized drinking fountains', 'Mess and food courts', 'Commercial beverage points'],
    features: ['High-flow rotary pump mechanism', 'Real-time TDS & physical pressure monitors', 'Automated electrical control panel', 'Super sturdy rust-proof coating'],
    specs: ['Purification Stages: Sand/Carbon vessels + Micron filter + Dual high flow RO', 'Duty Cycle: 10 hours daily', 'Power: 250W']
  },
  {
    id: '250-lph',
    capacity: '250 LPH',
    hourlyOutput: '250 Litres Per Hour',
    idealFor: 'Industrial sites, assembly halls, commercial food production, small hotels',
    applications: ['Industrial process water', 'Commercial kitchen prep', 'Bottled water plant pre-prep'],
    features: ['Multi-port valve system automated controls', 'High-pressure SS vertical pump', 'Durable fiber-reinforced polymer (FRP) vessels', 'Fully automatic electrical protection'],
    specs: ['Feed Pump: 1.0 HP SS304 Pump', 'Membranes: 4040 Industrial Membrane', 'Power: Single Phase (230V AC)']
  },
  {
    id: '500-lph',
    capacity: '500 LPH',
    hourlyOutput: '500 Litres Per Hour',
    idealFor: 'Large apartments, resorts, colleges, beverage labs, or medium factories',
    applications: ['Entire apartment central supply', 'Industrial boilers', 'High volume raw water correction'],
    features: ['Comprehensive digital PLC control board panel', 'Dual FRP pretreatment channels', 'SS304 industrial skidding', 'Continuous TDS feedback telemetry'],
    specs: ['Feed Pump: 1.5 HP High Pressure', 'Pressure vessel: 12x48 FRP vessel', 'Power: Three Phase or Single Phase']
  },
  {
    id: '1000-lph',
    capacity: '1000 LPH',
    hourlyOutput: '1000 Litres Per Hour',
    idealFor: 'Heavy manufacturing industries, hotels, large institutions, community water stations',
    applications: ['Mass municipal distribution', 'Chemical processing factories', 'Pharma ingredient feed wash'],
    features: ['Industrial Grade PLC screen automation', 'Triplex pre-filtration assembly', 'Ultimate UV-C terminal disinfection', 'Maximum efficiency high rejection rate'],
    specs: ['Feed Pump: 2.0 HP SS Multi-stage', 'Vessels: 13x54 FRP High Strength', 'Power Requirement: Three Phase (415V AC)']
  },
  {
    id: '2000-lph',
    capacity: '2000 LPH',
    hourlyOutput: '2000 Litres Per Hour',
    idealFor: 'Mega beverage plants, chemical industries, industrial manufacturing zones, commercial layouts',
    applications: ['Mega packaging water line', 'Continuous process boiler feeds', 'Large industrial housing societies'],
    features: ['Fully automated touch screen PLC telemetry panel', 'Heavy duty multi stage vertical booster pump', 'Triplex large capacity vessel assembly', 'Double UV-C and ozone dosing integration'],
    specs: ['Feed Pump: 3.5 HP SS Vertical Stage', 'Vessels: High strength structural FRP vessels', 'Power Requirement: Three Phase (415V AC)']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'installation',
    title: 'RO Installation',
    description: 'Professional wall mount or under-sink installation. Level calibration, high-grade piping, check-valve adjustment, pressure testing, and first-flow water TDS balancing.',
    iconName: 'Wrench',
    priceRange: 'Est. ₹350 - ₹500',
    commonSigns: ['Moving to new house', 'Upgraded to new purifier', 'Relocating kitchen layout']
  },
  {
    id: 'repair',
    title: 'RO Repair',
    description: 'Expert diagnostics for all purifier brands. Resolve pump vibrations, high rejection overflow, power adapter breakdown, leakage issues, or complete system startup failure.',
    iconName: 'AlertTriangle',
    priceRange: 'Diagnostics at ₹150 (Waived on repair)',
    commonSigns: ['Wastewater running non-stop', 'No water coming out', 'Buzzer/alarm sounding', 'Vibrating/loud pump noise']
  },
  {
    id: 'maintenance',
    title: 'General Maintenance',
    description: 'Thorough inspection, chemical cleaning of filters, checking pressure settings, clearing mineral scaling, and system sanitization for consistent tasting pure water.',
    iconName: 'Activity',
    priceRange: 'Starting from ₹299',
    commonSigns: ['Slight taste difference', 'Slow water flow speed', 'Water looking slightly cloudy', '6+ months since last check']
  },
  {
    id: 'filter-replacement',
    title: 'Filter Replacement',
    description: 'Genuine replacements of sediment pre-filters, activated inline carbon blocks, ultrafiltration threads, and high-performance RO membranes to maintain 100% safety.',
    iconName: 'RefreshCw',
    priceRange: 'Variable by cartridge choice',
    commonSigns: ['Spurred filter change light', 'Bad odor in purified water', 'Yellowing of outer prefilter', 'Completed 8000+ Litres']
  },
  {
    id: 'amc-services',
    title: 'RO AMC Plans (Annual Contract)',
    description: 'Enjoy peace of mind with our Annual Maintenance Contracts. Includes periodic filter replacements, scheduled maintenance visits, emergency calls, and unlimited wear-tear coverage.',
    iconName: 'Shield',
    priceRange: 'Plans start at ₹1,999/Year (Includes Spares)',
    commonSigns: ['Want hassle-free pure water', 'Avoid sudden expensive breakdown bills', 'Commercial site SLA compliance']
  },
  {
    id: 'tds-adjustment',
    title: 'TDS Adjustment',
    description: 'Water tasting too bitter or bland? We restore health-essential calcium and magnesium minerals by optimizing the mineral modulator to target the ideal 80-150 TDS range.',
    iconName: 'Compass',
    priceRange: 'Est. ₹200 - ₹300',
    commonSigns: ['Water tastes heavily bitter (Low minerals)', 'High mineral build-up inside kettle', 'TDS testing above 300 or below 50']
  },
  {
    id: 'water-testing',
    title: 'Water Quality Testing',
    description: 'Using high-precision digital TDS sensors, pH indicator reagents, and biological hardness tests to ascertain safe baseline standards for your borewell or municipal tap supplies.',
    iconName: 'Droplet',
    priceRange: 'FREE with any Service Booking',
    commonSigns: ['Skin dryness or hair-fall', 'Salty/metallic tap taste', 'Yellow scale deposits on utensils']
  },
  {
    id: 'commercial-amc',
    title: 'Commercial RO Maintenance',
    description: 'Dedicated business service for 25 LPH up to 10k LPH heavy skids. Involves antiscalant dosing, membrane backwashing, SS pump servicing, and prompt 4-hour SLA reaction times in Hyderabad.',
    iconName: 'Settings',
    priceRange: 'Custom quotation on-site',
    commonSigns: ['Office RO system failure', 'Flow rate drops in commercial line', 'Weekly compliance safety testing']
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  { name: 'Malakpet', pincodes: ['500036', '500024'], notes: 'Our Head Office is here. Emergency same-hour service!' },
  { name: 'Dilsukhnagar', pincodes: ['500060', '500035'], notes: 'Same-day home visit filter replacement' },
  { name: 'LB Nagar', pincodes: ['500074', '500039', '500068'], notes: 'Regular commercial AMC routes' },
  { name: 'Kothapet', pincodes: ['500035'], notes: 'Daily domestic service visits' },
  { name: 'Nagole', pincodes: ['500068', '500039'], notes: 'Rapid expert repair cover' },
  { name: 'Uppal', pincodes: ['500039', '500007'], notes: 'Commercial installation & setup support' },
  { name: 'Secunderabad', pincodes: ['500003', '500015', '500025'], notes: 'Broad domestic service networks' },
  { name: 'Kukatpally', pincodes: ['500072', '500085'], notes: 'Next-day installation schedules' },
  { name: 'Miyapur', pincodes: ['500049'], notes: 'Trained technician coverage area' },
  { name: 'Gachibowli', pincodes: ['500032', '500081'], notes: 'Corporate office customized AMC solutions' },
  { name: 'Hyderabad (All Major Zones)', pincodes: [], notes: 'Contact +91 8885556965 for same-day priority service across Hyderabad!' }
];

export const GOOGLE_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    name: 'Srinivas Rao K. (Malakpet)',
    rating: 5,
    comment: 'Exceptional service! I ordered an Aquagrand+ purifier from Rainbow Aquafresh Malakpet. The technician showed up on the same day, completed the installation within 45 mins, and adjusted the TDS to a perfect 95 ppm. Sweet tasting water and incredibly honest staff!',
    source: 'Google Review',
    date: '2 weeks ago'
  },
  {
    id: 'rev-2',
    name: 'Madhuri Reddy (Kothapet)',
    rating: 5,
    comment: 'My domestic water purifier was discharging wastewater continuously with zero storage. Called Rainbow Aquafresh Systems. Their tech quickly diagnosed a choked pre-carbon and a faulty solenoid valve, replacing with original parts in front of me at a very genuine price. Highly recommended!',
    source: 'Google Review',
    date: '1 month ago'
  },
  {
    id: 'rev-3',
    name: 'Zameer Ahmed (Malakpet / Secunderabad)',
    rating: 5,
    comment: 'We installed a 100 LPH Commercial RO Plant for our hospital cafeteria. Rainbow Aquafresh Systems proved their 20 years of experience with skilled installation, rigid SS frame, and smart digital automation. The flow rate is great, and water quality is pristine.',
    source: 'Google Review',
    date: '3 months ago'
  },
  {
    id: 'rev-4',
    name: 'Ananth Narayanan (LB Nagar & Dilsukhnagar)',
    rating: 5,
    comment: 'Excellent Dealer Support! I signed up as a sub-distributor for LB Nagar and Kothapet area. The owner provided outstanding wholesale pricing, technical training for our staff, and marketing banners. Transparent dealings and top quality filters.',
    source: 'Google Review',
    date: '2 months ago'
  },
  {
    id: 'rev-5',
    name: 'Priya Ramakrishnan (Madhapur & Hitec City)',
    rating: 5,
    comment: 'Borewell water TDS at our Madhapur gated community was above 1100 ppm. Rainbow Aquafresh installed their AIQUA model with an active mineralizer. TDS dropped to 110 ppm with natural minerals retained. Excellent same-day technician visit!',
    source: 'Google Review',
    date: '3 weeks ago'
  },
  {
    id: 'rev-6',
    name: 'Kalyan Varma (Kukatpally / KPHB)',
    rating: 5,
    comment: 'Enquired on WhatsApp at 9 PM after our RO booster pump stopped working. They responded immediately and dispatched a technician next morning at 10 AM with a original 100GPD copper pump. Honest testing and zero hidden charges!',
    source: 'Google Review',
    date: '1 week ago'
  },
  {
    id: 'rev-7',
    name: 'Dr. Harish Chandra (Gachibowli)',
    rating: 5,
    comment: 'Taking their RO Annual Maintenance Contract (AMC) for 2 years now in Gachibowli. 3 comprehensive filter changes per year with genuine USA Filmtec membranes. Water quality is tested with digital meters right in front of us.',
    source: 'Google Review',
    date: '2 months ago'
  },
  {
    id: 'rev-8',
    name: 'Praneeth G. (Jubilee Hills / Banjara Hills)',
    rating: 5,
    comment: 'Reliable service at affordable cost. They have been managing the AMC of our entire apartment water purification for 3 years now. Prompt filters replacement and never a single delay. Hyderabad dwellers, trust them without doubt!',
    source: 'Google Review',
    date: '4 months ago'
  }
];

export const CONTACT_INFO = {
  companyName: 'Rainbow Aquafresh Systems',
  tagline: 'Complete Water Purifier Solutions',
  address: '16-10-27/109, 33-2RT, MCH Colony, Old Malakpet, Hyderabad, Telangana 500036',
  phones: ['+91 8885556965', '+91 8341256965'],
  rawPhones: ['+918885556965', '+918341256965'],
  whatsapp: '+918885556965',
  website: 'www.rainbowafs.com',
  instagram: 'rainbow_aquafresh_systems',
  youtube: 'rainbowaqua009',
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.1511019623863!2d78.498877!3d17.356234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb997f8ef83a31%3A0xc49b78ca99a38ef6!2sMalakpet%2C%20Hyderabad%20500036!5e0!3m2!1sen!2sin!4v1687422112344!5m2!1sen!2sin'
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  contentHtml: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'ro-vs-uv-water-purifiers-hyderabad',
    title: 'RO vs UV Water Purifiers: Which is Best for Hyderabad Water?',
    excerpt: 'Comprehensive guide comparing municipal Manjeera/Krishna supply (TDS 150-300 ppm) with groundwater borewell supplies (TDS 800-2000 ppm) across Hyderabad localities.',
    category: 'Water Guide',
    readTime: '5 min read',
    date: 'August 2026',
    contentHtml: `
      <h2>Understanding Hyderabad Water Quality & Source Differences</h2>
      <p>Hyderabad's drinking water varies dramatically depending on whether your home receives municipal HMWSSB water (Manjeera, Krishna, or Godavari supply) or relies heavily on high-hardness borewell water supplies in areas like Madhapur, Kukatpally, Gachibowli, or Kothapet.</p>
      
      <h3>Municipal Tap Water (TDS 150 – 300 PPM)</h3>
      <p>Municipal water supplies in Hyderabad are generally treated at source plants. However, as water flows through aging underground distribution pipelines, it can pick up rust particles, microbial pathogens, and fine silt. For pure municipal water under 300 PPM TDS, a UV + UF (Ultra Violet + Ultra Filtration) system is adequate. However, if hardness or seasonal TDS spikes occur, an <strong>RO + UV + TDS Modulator</strong> provides total safety.</p>

      <h3>Borewell & Groundwater Supplies (TDS 800 – 2200 PPM)</h3>
      <p>Groundwater in eastern and western IT corridors of Hyderabad contains high dissolved salts, heavy metals, carbonates, and calcium. UV technology <em>cannot</em> lower chemical TDS or saltiness. Only a semi-permeable Reverse Osmosis (RO) membrane can filter out heavy salts, reducing 1500 PPM groundwater to a sweet, healthy 80-120 PPM drinking standard.</p>

      <h3>The Rainbow Aquafresh Recommendation</h3>
      <p>For 90% of Hyderabad residences, a multi-stage <strong>RO + UV + UF + Active Copper + TDS Controller</strong> system is the safest long-term investment. It handles both borewell TDS spikes and municipal supply contamination seamlessy.</p>
    `
  },
  {
    slug: 'ro-membrane-replacement-cost-lifespan-hyderabad',
    title: 'RO Membrane Replacement Cost & Lifespan Guide in Hyderabad (2026)',
    excerpt: 'Everything you need to know about RO membrane degradation, 75GPD vs 100GPD USA Filmtec membranes, and standard replacement costs in Hyderabad.',
    category: 'Maintenance',
    readTime: '4 min read',
    date: 'August 2026',
    contentHtml: `
      <h2>How Long Does an RO Membrane Last in Hyderabad Water Conditions?</h2>
      <p>The RO membrane is the core engine of your water purifier. In Hyderabad, an RO membrane typically lasts between <strong>12 to 24 months</strong> depending on raw water TDS levels, daily consumption volume, and timely pre-filter maintenance.</p>

      <h3>Key Warning Signs Your RO Membrane is Choked or Damaged</h3>
      <ul>
        <li><strong>Reduced Flow Rate:</strong> Storage tank takes 3-4 hours instead of 45 minutes to fill.</li>
        <li><strong>Continuous Wastewater Flow:</strong> Drain pipe runs continuously even when the tank is empty.</li>
        <li><strong>Taste Variation:</strong> Water tastes salty, heavy, or metallic due to membrane scaling.</li>
        <li><strong>High Output TDS:</strong> Output water TDS rises above 200 PPM when input is 1000 PPM.</li>
      </ul>

      <h3>RO Membrane Replacement Cost Breakdown</h3>
      <p>At Rainbow Aquafresh Systems, we install 100% genuine, high-rejection 80GPD and 100GPD USA Filmtec / Vontron membranes starting from <strong>₹1,200 to ₹1,800</strong> including doorstep installation, TDS digital verification, and sanitizer flushing.</p>

      <h3>Pro Tip to Double Your Membrane Life</h3>
      <p>Replace your 10-inch PP Spun Pre-Filter every 3 to 4 months (costing just ₹150–₹250). Sediment pre-filters catch sand, mud, and rust before they reach and choke the delicate microscopic RO membrane pores!</p>
    `
  },
  {
    slug: 'understanding-water-tds-levels-hyderabad',
    title: 'Understanding Water TDS in Hyderabad: What Level Requires RO?',
    excerpt: 'What is Total Dissolved Solids (TDS)? Learn the optimal drinking water range (80-150 PPM) and how to avoid health risks of over-purified zero TDS water.',
    category: 'Health & TDS',
    readTime: '6 min read',
    date: 'August 2026',
    contentHtml: `
      <h2>What is TDS (Total Dissolved Solids) in Drinking Water?</h2>
      <p>TDS refers to the combined concentration of dissolved minerals, salts, calcium, magnesium, sodium, potassium, and trace heavy metals present in water, expressed in milligrams per liter (mg/L) or Parts Per Million (PPM).</p>

      <h3>Bureau of Indian Standards (BIS) & WHO TDS Guidelines</h3>
      <ul>
        <li><strong>Below 50 PPM:</strong> Over-purified / Mineral Deficient (Flat, acidic taste).</li>
        <li><strong>80 to 150 PPM:</strong> Ideal Healthy Sweet Water (Rich in essential calcium & magnesium).</li>
        <li><strong>150 to 300 PPM:</strong> Good for consumption (Standard treated municipal water).</li>
        <li><strong>300 to 500 PPM:</strong> Fair / Acceptable (Hard water).</li>
        <li><strong>Above 500 PPM:</strong> Unacceptable for direct drinking without Reverse Osmosis (RO) treatment.</li>
      </ul>

      <h3>Why Over-Purified "Zero TDS" Water is Unhealthy</h3>
      <p>Drinking water purified to less than 30 PPM lacks vital minerals, leading to an acidic pH balance. Rainbow Aquafresh RO purifiers feature calibrated <strong>TDS Modulators & Bio-Alkaline Copper Cartridges</strong> that keep drinking water balanced at the sweet, healthy spot of 90-120 PPM with natural alkalinity.</p>
    `
  },
  {
    slug: '5-signs-water-purifier-needs-service',
    title: '5 Critical Signs Your Water Purifier Needs Immediate Service',
    excerpt: 'Avoid drinking contaminated water or burning out expensive booster pumps by recognizing these 5 early warning indicators.',
    category: 'Troubleshooting',
    readTime: '3 min read',
    date: 'August 2026',
    contentHtml: `
      <h2>Don\'t Ignore These Early Water Purifier Warning Signs</h2>
      <p>Your RO water purifier operates under continuous hydraulic pressure. Over time, sediment accumulation and electrical wear can lower purification efficiency. Watch out for these 5 critical indicators:</p>

      <ol>
        <li><strong>1. Water Tastes Foul, Bitter, or Foul-Smelling:</strong> Indicates exhausted activated carbon block or bacterial biofilm accumulation inside internal tubing.</li>
        <li><strong>2. Slow Water Tank Filling / Trickling Water:</strong> Caused by choked PP spun pre-filter cartridge or failing 24V/36V DC booster pump head.</li>
        <li><strong>3. Continuous Waste Water Drainage:</strong> Indicates a faulty Solenoid Valve (SV) or auto-shutoff valve that fails to cut off raw supply when tank is full.</li>
        <li><strong>4. Abnormal Vibration or Loud Humming Noise:</strong> Indicates air lock or worn-out bearings in the booster pump motor.</li>
        <li><strong>5. Power Supply Adapter Trips or Smells:</strong> Indicates SMPS power supply adapter failure due to voltage fluctuations.</li>
      </ol>

      <p><strong>Need Immediate RO Repair in Hyderabad?</strong> Call Rainbow Aquafresh Systems at <strong>+91 8885556965</strong> or submit our 1-click lead form for a certified engineer visit within 2 hours across Malakpet, Kothapet, Dilsukhnagar, Madhapur, and Kukatpally.</p>
    `
  }
];

