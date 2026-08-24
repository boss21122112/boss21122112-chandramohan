export interface LocationData {
  slug: string;
  name: string;
  pincode: string;
  landmarks: string[];
  tdsRange: string;
  waterSource: string;
  commonIssues: string[];
  nearbyAreas: { name: string; slug: string }[];
  faqs: { question: string; answer: string }[];
}

export const HYDERABAD_LOCATIONS_DATA: Record<string, LocationData> = {
  "dilsukhnagar": {
    slug: "ro-service-dilsukhnagar-hyderabad",
    name: "Dilsukhnagar",
    pincode: "500060",
    landmarks: ["Dilsukhnagar Bus Depot", "Konark Theatre", "Chaitanyapuri Border", "Moosarambagh Bridge", "Gaddiannaram"],
    tdsRange: "900 - 1,800 PPM",
    waterSource: "Mixed HMWSSB Municipal Pipeline and Deep Underground Borewells",
    commonIssues: ["High calcium hardness scaling in membrane", "Choked spun sediment pre-filter from pipeline silt", "Booster pump noise due to high input pressure variance"],
    nearbyAreas: [
      { name: "Kothapet", slug: "/ro-water-purifier-service-kothapet-hyderabad" },
      { name: "LB Nagar", slug: "/ro-service-lb-nagar-hyderabad" },
      { name: "Malakpet", slug: "/ro-service-malakpet-hyderabad" },
      { name: "Chaitanyapuri", slug: "/ro-service-chaitanyapuri-hyderabad" },
      { name: "Nagole", slug: "/ro-service-nagole-hyderabad" }
    ],
    faqs: [
      { question: "How quickly can an RO technician reach my home in Dilsukhnagar?", answer: "Our mobile technician team covers Dilsukhnagar, Gaddiannaram, and P&T Colony daily. Technicians typically reach within 60 to 90 minutes of booking." },
      { question: "What is the typical TDS level in Dilsukhnagar water?", answer: "Groundwater in Dilsukhnagar ranges from 900 to 1,800 PPM. Our multi-stage RO systems reduce this to an optimal 80-120 PPM for sweet, healthy drinking water." },
      { question: "Do you repair Kent and Aquaguard purifiers in Dilsukhnagar?", answer: "Yes, we service all brands including Kent, Aquaguard, Livpure, Pureit, AO Smith, and custom assembled RO units with genuine spare parts." }
    ]
  },
  "lb-nagar": {
    slug: "ro-service-lb-nagar-hyderabad",
    name: "LB Nagar",
    pincode: "500074",
    landmarks: ["LB Nagar Ring Road", "Bahadurguda", "Mansoorabad", "Bairamalguda", "Sagar Ring Road", "Alkapuri"],
    tdsRange: "1,100 - 2,200 PPM",
    waterSource: "Deep Borewells (600-900 ft) and Krishna Drinking Water Project connections",
    commonIssues: ["Heavy borewell hardness scaling", "Slow storage tank filling speed", "Frequent pre-filter clogging due to underground sand"],
    nearbyAreas: [
      { name: "Vanasthalipuram", slug: "/ro-service-vanasthalipuram-hyderabad" },
      { name: "Hayathnagar", slug: "/ro-service-hayathnagar-hyderabad" },
      { name: "Nagole", slug: "/ro-service-nagole-hyderabad" },
      { name: "Dilsukhnagar", slug: "/ro-service-dilsukhnagar-hyderabad" },
      { name: "Kothapet", slug: "/ro-water-purifier-service-kothapet-hyderabad" }
    ],
    faqs: [
      { question: "Why is water flowing slowly from my RO in LB Nagar?", answer: "High borewell mineral load frequently chokes the 5-micron pre-filter and scales the RO membrane. Our technician tests pump pressure and replaces exhausted filters on-site." },
      { question: "What is the service charge for RO inspection in LB Nagar?", answer: "Our general service and 12-point health inspection fee is ₹299, covering TDS testing, pipe leak checks, and electrical diagnostic." },
      { question: "Do you provide RO AMC for apartments in LB Nagar?", answer: "Yes, we offer comprehensive Annual Maintenance Contracts starting at ₹1,999/year with 3 periodic services and filter replacements." }
    ]
  },
  "kukatpally": {
    slug: "ro-service-kukatpally-hyderabad",
    name: "Kukatpally",
    pincode: "500072",
    landmarks: ["KPHB Phase 1-9", "Vivek Nagar", "Bhagya Nagar", "Balaji Nagar", "Moosapet", "Y Junction"],
    tdsRange: "1,200 - 2,400 PPM",
    waterSource: "High-density borewells and HMWSSB Godavari pipeline supplies",
    commonIssues: ["High mineral encrustation on TFC membranes", "Continuous wastewater drainage from solenoid valve failure", "Foul water taste after 6 months of use"],
    nearbyAreas: [
      { name: "KPHB", slug: "/ro-service-kphb-hyderabad" },
      { name: "Miyapur", slug: "/ro-service-miyapur-hyderabad" },
      { name: "Hitech City", slug: "/ro-service-hitech-city-hyderabad" },
      { name: "Kondapur", slug: "/ro-service-kondapur-hyderabad" },
      { name: "Gachibowli", slug: "/ro-service-gachibowli-hyderabad" }
    ],
    faqs: [
      { question: "How often should I change RO filters in Kukatpally?", answer: "Due to high TDS in Kukatpally borewell water, pre-filters should be replaced every 3-4 months, carbon blocks every 9-12 months, and RO membranes every 18-24 months." },
      { question: "Can you fix leaking RO purifiers in Kukatpally?", answer: "Yes, we carry genuine food-grade push-fit connectors, elbow joints, and housing O-rings to resolve all leakage issues immediately." },
      { question: "Do you install commercial RO plants for hostels in Kukatpally?", answer: "Yes, we manufacture and install 50 to 2000 LPH commercial RO plants for student hostels, schools, and hospitals across Kukatpally." }
    ]
  },
  "miyapur": {
    slug: "ro-service-miyapur-hyderabad",
    name: "Miyapur",
    pincode: "500049",
    landmarks: ["Miyapur Metro Station", "Allwyn Colony", "Mayuri Nagar", "HMT Swarnapuri", "Janapriya West City", "Bollaram Road"],
    tdsRange: "1,200 - 2,500 PPM",
    waterSource: "Deep borewell groundwater (800-1200 ft) and mixed municipal tankers",
    commonIssues: ["Severe calcium carbonate scaling", "Low booster pump pressure", "SMPS adapter voltage burnouts from power fluctuations"],
    nearbyAreas: [
      { name: "Kukatpally", slug: "/ro-service-kukatpally-hyderabad" },
      { name: "KPHB", slug: "/ro-service-kphb-hyderabad" },
      { name: "Kondapur", slug: "/ro-service-kondapur-hyderabad" },
      { name: "Gachibowli", slug: "/ro-service-gachibowli-hyderabad" }
    ],
    faqs: [
      { question: "How fast can an RO technician reach Miyapur?", answer: "Our technician team is stationed across Miyapur and Allwyn Colony, providing doorstep service within 60 to 90 minutes." },
      { question: "What causes vibrating humming noise in RO purifiers in Miyapur?", answer: "Loud vibrating sounds usually indicate worn booster pump bearings or inlet water pressure drops. Our technician can repair or replace the pump motor." },
      { question: "Do you supply genuine membranes for high-TDS water in Miyapur?", answer: "Yes, we install original 80 GPD and 100 GPD Filmtec/Vontron TFC membranes engineered specifically for 2000+ PPM groundwater." }
    ]
  },
  "gachibowli": {
    slug: "ro-service-gachibowli-hyderabad",
    name: "Gachibowli",
    pincode: "500032",
    landmarks: ["Financial District", "Telecom Nagar", "TNGOs Colony", "Nanakramguda", "DLF Cybercity", "Gowlidoddy"],
    tdsRange: "1,100 - 2,400 PPM",
    waterSource: "High-rise borewell sumps, water tankers, and HMWSSB bulk supplies",
    commonIssues: ["High hydrostatic line pressure causing connector leaks", "Scale buildup on under-sink RO membranes", "Solenoid valve clogging"],
    nearbyAreas: [
      { name: "Hitech City", slug: "/ro-service-hitech-city-hyderabad" },
      { name: "Kondapur", slug: "/ro-service-kondapur-hyderabad" },
      { name: "Manikonda", slug: "/ro-service-manikonda-hyderabad" },
      { name: "Jubilee Hills", slug: "/ro-service-jubilee-hills-hyderabad" }
    ],
    faqs: [
      { question: "Do you service under-the-counter RO purifiers in Gachibowli?", answer: "Yes, we specialize in under-sink RO systems, alkaline water units, and multi-stage purifiers in high-rise gated communities." },
      { question: "Why is pressure regulator valve needed in Gachibowli apartments?", answer: "Multi-story buildings have high water column pressure that can crack filter housings. We install pressure-reducing valves (PRV) for safety." },
      { question: "Can I get weekend RO service in Gachibowli?", answer: "Yes, our technicians are available 7 days a week from 8:00 AM to 9:00 PM." }
    ]
  },
  "kondapur": {
    slug: "ro-service-kondapur-hyderabad",
    name: "Kondapur",
    pincode: "500084",
    landmarks: ["Botanical Garden Road", "Raja Rajeshwara Nagar", "Raghavendra Colony", "Silpa Park", "Kothaguda Junction"],
    tdsRange: "1,000 - 2,100 PPM",
    waterSource: "Borewell groundwater and municipal tanker supplies",
    commonIssues: ["Membrane pore blockage from hard water minerals", "Bitter water taste", "UV lamp failure"],
    nearbyAreas: [
      { name: "Gachibowli", slug: "/ro-service-gachibowli-hyderabad" },
      { name: "Hitech City", slug: "/ro-service-hitech-city-hyderabad" },
      { name: "Miyapur", slug: "/ro-service-miyapur-hyderabad" },
      { name: "Kukatpally", slug: "/ro-service-kukatpally-hyderabad" }
    ],
    faqs: [
      { question: "How can I book an urgent RO repair in Kondapur?", answer: "Call us at +91 8885556965 or message on WhatsApp. We dispatch a technician to your address within 60-90 minutes." },
      { question: "Do you replace UV sterilization lamps in Kondapur?", answer: "Yes, we carry original 11W and 16W Philips germicidal UV lamps with electronic chokes." }
    ]
  },
  "uppal": {
    slug: "ro-service-uppal-hyderabad",
    name: "Uppal",
    pincode: "500039",
    landmarks: ["Uppal Ring Road", "Uppal Stadium", "Habsiguda Border", "Peerzadiguda", "Survey of India", "Chilkanagar"],
    tdsRange: "900 - 1,900 PPM",
    waterSource: "HMWSSB Krishna pipeline water and borewell sources",
    commonIssues: ["Sediment pre-filter silt accumulation", "Booster pump diaphragm wear", "Low water output"],
    nearbyAreas: [
      { name: "Nagole", slug: "/ro-service-nagole-hyderabad" },
      { name: "Ramanthapur", slug: "/ro-service-ramanthapur-hyderabad" },
      { name: "Tarnaka", slug: "/ro-service-tarnaka-hyderabad" },
      { name: "LB Nagar", slug: "/ro-service-lb-nagar-hyderabad" }
    ],
    faqs: [
      { question: "What is included in the Uppal RO general service?", answer: "General service includes pre-filter cleaning/replacement, TDS inspection, pump pressure test, pipeline sanitization, and leakage check." },
      { question: "Do you service commercial RO plants in Uppal industrial area?", answer: "Yes, we install and service industrial RO plants for factories, packaging units, and institutions in Uppal." }
    ]
  },
  "nagole": {
    slug: "ro-service-nagole-hyderabad",
    name: "Nagole",
    pincode: "500068",
    landmarks: ["Nagole Metro Station", "Bandlaguda", "Anand Nagar", "Fatima Nagar", "Alkapuri X Roads", "Jaipuri Colony"],
    tdsRange: "1,000 - 2,000 PPM",
    waterSource: "Groundwater borewells and municipal distribution",
    commonIssues: ["Hard water scale encrustation", "TDS controller drift", "Continuous drain discharge"],
    nearbyAreas: [
      { name: "LB Nagar", slug: "/ro-service-lb-nagar-hyderabad" },
      { name: "Uppal", slug: "/ro-service-uppal-hyderabad" },
      { name: "Kothapet", slug: "/ro-water-purifier-service-kothapet-hyderabad" },
      { name: "Dilsukhnagar", slug: "/ro-service-dilsukhnagar-hyderabad" }
    ],
    faqs: [
      { question: "How to fix foul taste in RO water in Nagole?", answer: "Foul taste indicates expired activated carbon or degraded post-carbon filter. We replace carbon blocks with high-iodine food-grade coconut shell carbon." }
    ]
  },
  "secunderabad": {
    slug: "ro-service-secunderabad",
    name: "Secunderabad",
    pincode: "500003",
    landmarks: ["Secunderabad Station", "Marredpally", "Bowenpally", "Trimulgherry", "Paradise", "Sainikpuri"],
    tdsRange: "800 - 1,700 PPM",
    waterSource: "Cantonment water supply, municipal lines, and borewells",
    commonIssues: ["Old plumbing pipeline rust contaminating filters", "Pump pressure drops", "SMPS adapter failures"],
    nearbyAreas: [
      { name: "Tarnaka", slug: "/ro-service-tarnaka-hyderabad" },
      { name: "Banjara Hills", slug: "/ro-service-banjara-hills-hyderabad" },
      { name: "Jubilee Hills", slug: "/ro-service-jubilee-hills-hyderabad" }
    ],
    faqs: [
      { question: "Do you cover all areas of Secunderabad?", answer: "Yes, we serve Marredpally, Bowenpally, Trimulgherry, Karkhana, Sainikpuri, and surrounding zones." }
    ]
  },
  "jubilee-hills": {
    slug: "ro-service-jubilee-hills-hyderabad",
    name: "Jubilee Hills",
    pincode: "500033",
    landmarks: ["Road No 36 & 45", "Journalist Colony", "Film Nagar", "Checkpost", "Prashasan Nagar"],
    tdsRange: "900 - 1,800 PPM",
    waterSource: "Municipal supply, borewells, and bulk tanker water",
    commonIssues: ["Under-sink RO plumbing leaks", "Alkaline mineral cartridge exhaustion", "TDS imbalance"],
    nearbyAreas: [
      { name: "Banjara Hills", slug: "/ro-service-banjara-hills-hyderabad" },
      { name: "Hitech City", slug: "/ro-service-hitech-city-hyderabad" },
      { name: "Gachibowli", slug: "/ro-service-gachibowli-hyderabad" },
      { name: "Manikonda", slug: "/ro-service-manikonda-hyderabad" }
    ],
    faqs: [
      { question: "Do you install alkaline and copper water purifiers in Jubilee Hills?", answer: "Yes, we provide advanced multi-stage RO+UV+UF+Alkaline+Copper purifiers with customized TDS modulation." }
    ]
  },
  "banjara-hills": {
    slug: "ro-service-banjara-hills-hyderabad",
    name: "Banjara Hills",
    pincode: "500034",
    landmarks: ["Road No 1 to 14", "Care Hospital Road", "Taj Krishna Enclave", "Mithila Nagar", "Umanagar"],
    tdsRange: "850 - 1,750 PPM",
    waterSource: "Municipal pipeline connections and deep borewells",
    commonIssues: ["Mineral cartridge depletion", "Slow filtration speed", "Filter housing hairline cracks"],
    nearbyAreas: [
      { name: "Jubilee Hills", slug: "/ro-service-jubilee-hills-hyderabad" },
      { name: "Secunderabad", slug: "/ro-service-secunderabad" },
      { name: "Malakpet", slug: "/ro-service-malakpet-hyderabad" }
    ],
    faqs: [
      { question: "How to schedule doorstep water purifier service in Banjara Hills?", answer: "Call +91 8885556965 or book via WhatsApp. We assign an expert technician right away." }
    ]
  },
  "hitech-city": {
    slug: "ro-service-hitech-city-hyderabad",
    name: "Hitech City",
    pincode: "500081",
    landmarks: ["Cyber Towers", "Madhapur", "Mindspace", "Inorbit Mall Road", "Image Gardens"],
    tdsRange: "1,100 - 2,300 PPM",
    waterSource: "High-rise sumps, deep borewells, and tanker supplies",
    commonIssues: ["High mineral buildup in membrane pores", "Booster pump failure from low inlet flow", "Electronic PCB sensor issues"],
    nearbyAreas: [
      { name: "Gachibowli", slug: "/ro-service-gachibowli-hyderabad" },
      { name: "Kondapur", slug: "/ro-service-kondapur-hyderabad" },
      { name: "Kukatpally", slug: "/ro-service-kukatpally-hyderabad" },
      { name: "Jubilee Hills", slug: "/ro-service-jubilee-hills-hyderabad" }
    ],
    faqs: [
      { question: "Do you service commercial RO water dispensers in Hitech City offices?", answer: "Yes, we install and maintain commercial RO dispensers, 50-500 LPH plants, and water coolers for corporate IT offices." }
    ]
  },
  "kphb": {
    slug: "ro-service-kphb-hyderabad",
    name: "KPHB Colony",
    pincode: "500072",
    landmarks: ["KPHB Phase 1 to 9", "Temple Bus Stop", "JNTU Road", "Remedy Hospital Lane", "Road No 1"],
    tdsRange: "1,200 - 2,400 PPM",
    waterSource: "Deep borewells and municipal water connections",
    commonIssues: ["Heavy scaling on membranes", "Choked pre-filter cartridges", "Leaking quick connectors"],
    nearbyAreas: [
      { name: "Kukatpally", slug: "/ro-service-kukatpally-hyderabad" },
      { name: "Miyapur", slug: "/ro-service-miyapur-hyderabad" },
      { name: "Hitech City", slug: "/ro-service-hitech-city-hyderabad" }
    ],
    faqs: [
      { question: "How much does membrane replacement cost in KPHB?", answer: "Genuine 75/80/100 GPD TFC RO membranes with high salt rejection range between ₹1,400 and ₹2,200 with service warranty." }
    ]
  },
  "manikonda": {
    slug: "ro-service-manikonda-hyderabad",
    name: "Manikonda",
    pincode: "500089",
    landmarks: ["Puppalguda", "Secretariat Colony", "Lanco Hills Road", "Alkapur Township", "Ou Colony"],
    tdsRange: "1,300 - 2,500 PPM",
    waterSource: "High hardness groundwater borewells and private water tankers",
    commonIssues: ["High mineral salinity in drinking water", "Booster pump burnout", "Frequent sediment filter choke"],
    nearbyAreas: [
      { name: "Gachibowli", slug: "/ro-service-gachibowli-hyderabad" },
      { name: "Jubilee Hills", slug: "/ro-service-jubilee-hills-hyderabad" },
      { name: "Banjara Hills", slug: "/ro-service-banjara-hills-hyderabad" }
    ],
    faqs: [
      { question: "Is borewell water in Manikonda safe to drink with basic UV filters?", answer: "No, Manikonda borewell water TDS exceeds 1500 PPM. Only Reverse Osmosis (RO) with high-pressure booster pump can remove these dissolved heavy salts." }
    ]
  },
  "tarnaka": {
    slug: "ro-service-tarnaka-hyderabad",
    name: "Tarnaka",
    pincode: "500007",
    landmarks: ["Tarnaka Flyover", "Osmania University Campus", "Lalaguda", "Kimtee Enclave", "Nagarjuna Nagar"],
    tdsRange: "850 - 1,600 PPM",
    waterSource: "Municipal Krishna water supply and local borewells",
    commonIssues: ["Pipe sediment accumulation", "Low output flow rate", "Solenoid valve leakage"],
    nearbyAreas: [
      { name: "Secunderabad", slug: "/ro-service-secunderabad" },
      { name: "Uppal", slug: "/ro-service-uppal-hyderabad" },
      { name: "Ramanthapur", slug: "/ro-service-ramanthapur-hyderabad" }
    ],
    faqs: [
      { question: "Can you install water purifiers in Tarnaka flats?", answer: "Yes, we handle new RO installations, wall mounting, and under-sink plumbing within 90 minutes." }
    ]
  },
  "vanasthalipuram": {
    slug: "ro-service-vanasthalipuram-hyderabad",
    name: "Vanasthalipuram",
    pincode: "500070",
    landmarks: ["NGO's Colony", "Red Tank", "Rythu Bazar", "Sushma Theater", "Ganesh Temple Area", "Saheb Nagar"],
    tdsRange: "1,100 - 2,200 PPM",
    waterSource: "Deep borewell groundwater and Krishna water pipeline",
    commonIssues: ["Borewell hardness scaling", "Choked pre-filter cartridges", "TDS meter reading above 300 PPM"],
    nearbyAreas: [
      { name: "LB Nagar", slug: "/ro-service-lb-nagar-hyderabad" },
      { name: "Hayathnagar", slug: "/ro-service-hayathnagar-hyderabad" },
      { name: "Dilsukhnagar", slug: "/ro-service-dilsukhnagar-hyderabad" }
    ],
    faqs: [
      { question: "Why does purified water taste salty in Vanasthalipuram?", answer: "When RO membranes degrade or scale, dissolved salts pass into drinking water. A membrane replacement restores sweet taste." }
    ]
  },
  "hayathnagar": {
    slug: "ro-service-hayathnagar-hyderabad",
    name: "Hayathnagar",
    pincode: "500070",
    landmarks: ["Pedda Amberpet", "Kuntloor Road", "Word and Deed School Area", "Autonagar Border", "Lords Colony"],
    tdsRange: "1,300 - 2,400 PPM",
    waterSource: "Underground borewells and semi-urban water pipelines",
    commonIssues: ["Heavy sand and silt clogging filters", "Pump pressure drop", "Continuous drain flow"],
    nearbyAreas: [
      { name: "Vanasthalipuram", slug: "/ro-service-vanasthalipuram-hyderabad" },
      { name: "LB Nagar", slug: "/ro-service-lb-nagar-hyderabad" },
      { name: "Nagole", slug: "/ro-service-nagole-hyderabad" }
    ],
    faqs: [
      { question: "Do you service residential RO purifiers in Hayathnagar?", answer: "Yes, our technicians cover Hayathnagar, Pedda Amberpet, and Kuntloor daily." }
    ]
  },
  "chaitanyapuri": {
    slug: "ro-service-chaitanyapuri-hyderabad",
    name: "Chaitanyapuri",
    pincode: "500060",
    landmarks: ["Chaitanyapuri Metro Station", "Prabhat Nagar", "Maruthi Nagar", "White House Area", "Telephone Colony"],
    tdsRange: "950 - 1,850 PPM",
    waterSource: "Municipal Krishna water supply and residential borewells",
    commonIssues: ["Filter cartridge choking", "Adapter short circuits", "Dripping tap faucets"],
    nearbyAreas: [
      { name: "Kothapet", slug: "/ro-water-purifier-service-kothapet-hyderabad" },
      { name: "Dilsukhnagar", slug: "/ro-service-dilsukhnagar-hyderabad" },
      { name: "LB Nagar", slug: "/ro-service-lb-nagar-hyderabad" }
    ],
    faqs: [
      { question: "How to fix a dripping RO tap in Chaitanyapuri?", answer: "We replace worn food-grade faucet valves and internal push-fit connectors on-site in under 20 minutes." }
    ]
  },
  "malakpet": {
    slug: "ro-service-malakpet-hyderabad",
    name: "Malakpet",
    pincode: "500036",
    landmarks: ["MCH Colony", "Old Malakpet", "New Malakpet", "Moosarambagh", "Super Bazar", "Yashoda Hospital Road"],
    tdsRange: "900 - 1,800 PPM",
    waterSource: "Municipal piped lines and underground borewells",
    commonIssues: ["Pre-filter sediment load", "Low booster pump pressure", "Periodic filter replacement needed"],
    nearbyAreas: [
      { name: "Dilsukhnagar", slug: "/ro-service-dilsukhnagar-hyderabad" },
      { name: "Kothapet", slug: "/ro-water-purifier-service-kothapet-hyderabad" },
      { name: "Banjara Hills", slug: "/ro-service-banjara-hills-hyderabad" },
      { name: "Ramanthapur", slug: "/ro-service-ramanthapur-hyderabad" }
    ],
    faqs: [
      { question: "Where is Rainbow Aquafresh Systems head office in Malakpet?", answer: "Our main operations office is located at 16-10-27/109, MCH Colony, Malakpet, Hyderabad 500036. Call +91 8885556965." }
    ]
  },
  "ramanthapur": {
    slug: "ro-service-ramanthapur-hyderabad",
    name: "Ramanthapur",
    pincode: "500013",
    landmarks: ["Doordarshan TV Studio", "Amberpet Border", "Indira Nagar", "Nehru Nagar", "Polytechnic College Area"],
    tdsRange: "900 - 1,750 PPM",
    waterSource: "Municipal Krishna water supply and local borewells",
    commonIssues: ["Silt and mud choking pre-filters", "Slow tank filling", "UV lamp expiry"],
    nearbyAreas: [
      { name: "Uppal", slug: "/ro-service-uppal-hyderabad" },
      { name: "Tarnaka", slug: "/ro-service-tarnaka-hyderabad" },
      { name: "Malakpet", slug: "/ro-service-malakpet-hyderabad" },
      { name: "Dilsukhnagar", slug: "/ro-service-dilsukhnagar-hyderabad" }
    ],
    faqs: [
      { question: "How quickly can I get RO service in Ramanthapur?", answer: "Technicians reach within 60 to 90 minutes anywhere in Ramanthapur and Amberpet." }
    ]
  }
};
