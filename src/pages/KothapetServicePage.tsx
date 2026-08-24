import React, { useState } from 'react';
import { 
  CheckCircle, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  Wrench, 
  Zap, 
  Droplets, 
  AlertTriangle,
  Clock,
  MapPin,
  Star,
  Award,
  ChevronDown,
  Building,
  Check,
  PhoneCall,
  MessageSquare,
  HelpCircle,
  FileText,
  ExternalLink
} from 'lucide-react';

interface KothapetServicePageProps {
  onOpenBooking?: () => void;
}

export const KothapetServicePage: React.FC<KothapetServicePageProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured Schema Objects
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rainbow Aquafresh Systems - RO Water Purifier Service Kothapet",
    "image": "https://www.rainbowafs.com/assets/images/young_indian_lady_drinking_water_1782205858892.jpg",
    "@id": "https://www.rainbowafs.com/#localbusiness",
    "url": "https://www.rainbowafs.com/ro-water-purifier-service-kothapet-hyderabad",
    "telephone": "+91 88855 56965",
    "priceRange": "₹150 - ₹4500",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16-10-27/109, 33-2RT, MCH Colony, Malakpet",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500036",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3712,
      "longitude": 78.5284
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "21:00"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Kothapet, Hyderabad"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Chaitanyapuri, Hyderabad"
      },
      {
        "@type": "AdministrativeArea",
        "name": "LB Nagar, Hyderabad"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Saroornagar, Hyderabad"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Dilsukhnagar, Hyderabad"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Malakpet, Hyderabad"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "320"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "RO Water Purifier Repair, Installation and Servicing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Rainbow Aquafresh Systems",
      "telephone": "+91 88855 56965"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Kothapet, Hyderabad, Telangana"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Water Purifier Services in Kothapet",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Doorstep RO Repair & Diagnostics in Kothapet"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "RO Filter & Membrane Replacement in Kothapet"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic RO Installation and Uninstallation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "RO Annual Maintenance Contract (AMC) Plans"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial & Industrial RO Plant Servicing"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.rainbowafs.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Location Services",
        "item": "https://www.rainbowafs.com/contact"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "RO Water Purifier Service in Kothapet",
        "item": "https://www.rainbowafs.com/ro-water-purifier-service-kothapet-hyderabad"
      }
    ]
  };

  const faqList = [
    {
      question: "How quickly can a service engineer reach my home in Kothapet, Hyderabad?",
      answer: "Rainbow Aquafresh Systems operates a dedicated mobile service team based near Malakpet and LB Nagar. For requests from Kothapet, Chaitanyapuri, Doctors Colony, or Victoria Memorial Home area, our certified service technician usually arrives within 30 to 90 minutes after your booking."
    },
    {
      question: "What is the cost of an RO service visit in Kothapet?",
      answer: "Our standard on-site diagnostic and visiting fee is a flat ₹150. If you proceed with any repair, filter replacement, or motor servicing during the visit, this diagnostic fee is completely waived! Basic routine servicing starts at ₹350–₹500."
    },
    {
      question: "Do you service all brands of water purifiers in Kothapet?",
      answer: "Yes! While we manufacture premier Rainbow Aquafresh domestic and commercial purifiers, our experienced technicians repair and service all popular brands including Kent, Aquaguard (Eureka Forbes), Pureit, Livpure, A.O. Smith, Blue Star, Havells, LG, and generic custom-built RO systems."
    },
    {
      question: "Why does water in Kothapet smell or taste salty, and how does RO fix it?",
      answer: "Groundwater in Kothapet and surrounding Saroornagar localities often exhibits Total Dissolved Solids (TDS) levels between 800 ppm and 1600+ ppm due to deep borewell extraction. High TDS water tastes salty and hard. Our multi-stage RO filtration with USA Filmtec high-rejection membranes reduces TDS by up to 95%, restoring pure, crisp, fresh tasting drinking water."
    },
    {
      question: "How often should RO filter candles and membranes be replaced in Kothapet?",
      answer: "In Kothapet, pre-filter sediment candles should be changed every 3 to 4 months due to fine silt in groundwater. Main inline sediment and activated carbon filters should be replaced every 8 to 12 months, and the main RO membrane usually lasts 18 to 24 months depending on daily water consumption."
    },
    {
      question: "What is included in the Rainbow Aquafresh RO AMC plan in Kothapet?",
      answer: "Our Comprehensive Annual Maintenance Contract (AMC) includes 3 mandatory periodic preventative maintenance visits, 1 complete set of filter replacements (spun pre-filter, sediment filter, carbon block), membrane sanitization, unlimited emergency breakdown calls, and full coverage for electrical components like SMPS and booster pump."
    },
    {
      question: "Do you supply genuine spare parts and copper booster pumps in Kothapet?",
      answer: "Absolutely. We only install 100% genuine, food-grade ABS spare parts, 100 GPD 100% copper-winding booster pumps, genuine Solenoid Valves (SV), original SMPS adapters, and certified active Copper-Alkaline mineralizer cartridges with clear warranties."
    },
    {
      question: "Can you install an RO purifier if I am moving homes within Kothapet or LB Nagar?",
      answer: "Yes, we offer complete RO uninstallation and re-installation services. Our technicians safely dismount your purifier, transport it carefully, drill clean wall mounts at your new residence, fit leak-proof inlet valves, adjust TDS index, and verify leak-free operation."
    },
    {
      question: "Do you handle Commercial RO Plants for hostels, schools, and offices in Kothapet?",
      answer: "Yes! Kothapet has numerous educational institutes, coaching centers, hospitals, and commercial complexes. We manufacture, install, and maintain commercial RO water plants ranging from 25 LPH, 50 LPH, 100 LPH, up to 1000 LPH with stainless steel skids and automatic dosing pumps."
    },
    {
      question: "How can I book same-day RO service in Kothapet with Rainbow Aquafresh?",
      answer: "You can call us directly on +91 88855 56965 or +91 83412 56965. You can also send a direct message on WhatsApp for instant doorstep engineer assignment."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 antialiased selection:bg-blue-600 selection:text-white">
      {/* Schema Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* BREADCRUMB BAR */}
      <div className="bg-white border-b border-slate-200 py-3 text-xs text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span>/</span>
          <a href="/contact" className="hover:text-blue-600 transition-colors">Locations</a>
          <span>/</span>
          <span className="text-blue-700 font-bold">RO Water Purifier Service in Kothapet</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> Kothapet, Hyderabad • 30-Min Express Doorstep Arrival
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                RO Water Purifier Service in Kothapet, Hyderabad
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
                Looking for dependable, fast, and transparent <strong className="text-white font-semibold">RO Water Purifier Service in Kothapet</strong>? <strong className="text-white font-semibold">Rainbow Aquafresh Systems</strong> delivers expert doorstep repair, filter cartridge replacements, new RO installation, and affordable AMC plans across Kothapet, Chaitanyapuri, LB Nagar, and Saroornagar. Enjoy pure, healthy, mineral-balanced drinking water today!
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-slate-200 pt-2">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>30-Min Doorstep SLA</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Genuine Spares</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Flat ₹150 Visit Fee</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-2">
                  <Award className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>20+ Yrs Hyderabad EEAT</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={onOpenBooking}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer hover:scale-[1.02]"
                >
                  <Wrench className="w-5 h-5" /> Book Service Online Now
                </button>
                <a
                  href="tel:+918885556965"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer hover:scale-[1.02]"
                >
                  <PhoneCall className="w-5 h-5" /> Call Technician: +91 88855 56965
                </a>
              </div>
            </div>

            {/* Quick Service Request Card */}
            <div className="lg:col-span-4">
              <div className="bg-white text-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-100 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
                  Same Day Booking
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-slate-900">Request Kothapet RO Call</h2>
                </div>
                <p className="text-xs text-slate-500 mb-6 font-medium">Certified technicians available in Kothapet right now.</p>

                <div className="space-y-4 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Service Hub:</span>
                    <p className="font-bold text-slate-800">Malakpet & LB Nagar Response Squad</p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Inspection Fee:</span>
                    <p className="font-bold text-blue-700">₹150 (Waived on Repair Approval!)</p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Guaranteed Support:</span>
                    <p className="font-bold text-slate-800">Free Digital TDS Check + 1-Yr Spare Warranty</p>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl uppercase tracking-wider transition-all text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Schedule Immediate Visit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/918885556965?text=Hi%20Rainbow%20Aquafresh%2C%20I%20need%20RO%20water%20purifier%20service%20in%20Kothapet%2C%20Hyderabad."
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 font-bold py-3 rounded-xl transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp Direct Dispatch</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: INTRODUCTION & LOCAL WATER LANDSCAPE */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-4xl space-y-4">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Local Water Quality Insight</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive RO Water Purifier Service in Kothapet, Hyderabad
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Kothapet is one of East Hyderabad’s most vibrant commercial and residential hubs, situated strategically between Dilsukhnagar, Chaitanyapuri, LB Nagar, and Saroornagar. Known for landmark destinations such as the historic <strong>Kothapet Fruit Market</strong>, <strong>Chaitanyapuri Metro Station</strong>, <strong>Victoria Memorial Home (VM Home)</strong>, and rapidly growing residential colonies like <strong>Doctors Colony</strong>, <strong>Mohan Nagar</strong>, and <strong>Vasavi Nagar</strong>, the locality houses tens of thousands of families and flourishing commercial establishments.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              However, families and business owners in Kothapet face unique drinking water challenges. Ground water drawn from deep borewells in the Saroornagar catchment belt frequently records Total Dissolved Solids (TDS) levels ranging from <strong className="text-slate-800 font-semibold">750 ppm to over 1600 ppm</strong>. High concentrations of calcium hardness, magnesium, fluorides, and dissolved salts impart a bitter taste, leave white chalky scaling on kitchen utensils, and pose long-term health risks if consumed untreated. Even areas receiving municipal Krishna or Manjeera surface water experience seasonal pipe turbidities, chlorine odors, and silt contamination during monsoon months.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              This is where <a href="/" className="text-blue-600 font-bold hover:underline">Rainbow Aquafresh Systems</a> steps in. With over two decades of localized expertise in Hyderabad, we deliver end-to-end, trustworthy <strong className="text-slate-900 font-semibold">RO Water Purifier Service in Kothapet</strong>. From instant 30-minute breakdown repairs to precision digital TDS calibration, genuine membrane replacements, domestic RO installations, and commercial water treatment plants, our team ensures your family consumes 100% pure, mineral-enriched drinking water every single day.
            </p>
          </div>

          {/* IMAGE SUGGESTION 1 PLACEHOLDER / DISPLAY */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-xs">
            <div className="w-full md:w-1/3 aspect-video bg-blue-100 rounded-xl overflow-hidden relative flex items-center justify-center shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=800&q=80" 
                alt="Certified engineer performing RO Water Purifier Service in Kothapet Hyderabad with digital TDS meter"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded">SEO Image Reference • ALT Optimized</span>
              <h3 className="text-lg font-extrabold text-slate-900">On-Site TDS Testing & Certified Filter Maintenance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our technicians carry digital TDS meters, pressure gauges, and sanitary sanitization kits to test your input borewell and output RO water right before your eyes. We adhere to drinking water standards prescribed by the{' '}
                <a href="https://www.bis.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Bureau of Indian Standards (BIS IS 10500:2012)</a>{' '}
                and the{' '}
                <a href="https://www.who.int/news-room/fact-sheets/detail/drinking-water" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">World Health Organization (WHO Guidelines)</a>.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE RAINBOW AQUAFRESH SYSTEMS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">EEAT Trust & Quality Assured</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Why Kothapet Residents Trust Rainbow Aquafresh Systems
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We don't just fix purifiers; we safeguard your family's health with transparent pricing, original manufacturer parts, and dependable localized service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Express 30–90 Min Doorstep SLA</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our service vehicles are dispatched directly from Malakpet and LB Nagar branches. When you report an RO breakdown in Kothapet, our engineer reaches your location within 30 to 90 minutes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">100% Genuine Spare Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We strictly install food-grade ABS filter housings, high-rejection USA Filmtec RO membranes, 100 GPD copper booster pumps, and original SMPS power supplies with 1-year warranty cards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Transparent ₹150 Diagnostic Fee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No hidden charges or inflated estimates. Our visiting diagnostic fee is just ₹150. If you authorize the service or replacement, the inspection fee is completely waived!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Active Copper + Alkaline Balancing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We don't strip your drinking water of vital minerals. Our multi-stage process integrates active Copper-Alkaline technology to raise pH to a healthy 7.5–8.5 and replenish natural minerals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Multi-Brand Expertise</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you own a Rainbow Aquafresh system, Kent, Aquaguard, Pureit, Livpure, A.O. Smith, Blue Star, or custom assembly purifier, our technicians master all brand architectures effortlessly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">4.9 Star Verified Client Rating</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Backed by 320+ verified Google customer reviews across Malakpet, Kothapet, Dilsukhnagar, and LB Nagar. We take pride in delivering honest craftsmanship and lasting peace of mind.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: OUR COMPLETE RO SERVICES IN KOTHAPET */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">End-to-End Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our RO Water Purifier Services Offered in Kothapet
            </h2>
            <p className="text-slate-600 text-sm">
              We cater to all domestic, commercial, and industrial water purification requirements under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Service 1 */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Fast Repair</span>
                <span className="text-xs font-bold text-slate-500 font-mono">From ₹150</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">1. Emergency RO Repair & Troubleshooting</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Is your water purifier leaking continuously, making loud vibrating sounds, or failing to turn on? Our expert technicians fix motor pump failures, burnt power adapters, leaky Solenoid Valves (SV), auto-cut switch trips, and choked membranes on the spot. Learn more about our <a href="/ro-repair-hyderabad" className="text-blue-600 font-bold hover:underline">RO Repair Services in Hyderabad</a>.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Solenoid Valve & Auto-Cut Switch Replacement</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 100 GPD Booster Pump Overhaul & Head Repair</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> SMPS Adapter & Float Switch Wiring Fixes</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Filter Replacement</span>
                <span className="text-xs font-bold text-slate-500 font-mono">From ₹350</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">2. RO Filter & Membrane Replacement</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clogged pre-filters restrict water output and overload booster pumps. We replace dirty 5-micron spun candles, inline sediment cartridges, activated block carbon, and USA Filmtec RO membranes with high salt-rejection capability. Read about our <a href="/ro-filter-replacement-hyderabad" className="text-blue-600 font-bold hover:underline">RO Filter Replacement Services</a>.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> High-Density Polypropylene Spun Pre-Filter</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 80 GPD / 100 GPD High-Rejection RO Membranes</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Active Copper + Bio-Alkaline Post-Filter Cartridge</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Installation</span>
                <span className="text-xs font-bold text-slate-500 font-mono">From ₹450</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">3. RO Purifier Installation & Uninstallation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Moving to a new house in Kothapet, Chaitanyapuri, or Victoria Memorial Home colony? We provide neat, professional wall-mounting and under-sink RO installation services, complete with food-grade inlet diverter valves and leak-proof tubing. Check our <a href="/ro-installation-hyderabad" className="text-blue-600 font-bold hover:underline">RO Installation Hyderabad Guide</a>.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Precision Wall Mounting & Tap Connection</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Food-Grade Diverter Valve & Drain Line Setup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Post-Installation Pressure & TDS Validation</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Annual Contract</span>
                <span className="text-xs font-bold text-slate-500 font-mono">From ₹1,999/yr</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">4. RO Annual Maintenance Contract (AMC)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enjoy hassle-free pure water all year long with our comprehensive AMC contracts. Our plans cover 3 mandatory preventive service visits, free filter replacements, and unlimited emergency breakdown calls with zero additional labor fees. Explore our <a href="/ro-amc-service" className="text-blue-600 font-bold hover:underline">RO AMC Packages</a>.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 3 Periodic Maintenance Visits per Year</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Free Replacement of Spun, Sediment & Carbon Filters</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Free Spare Electrical Part Coverage (Comprehensive AMC)</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: COMMON RO PROBLEMS SOLVED (TABLE FORMAT) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Diagnostic Troubleshooting</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Common RO Problems We Solve Daily in Kothapet
            </h2>
            <p className="text-slate-600 text-sm">
              Here is a quick diagnostic reference table for water purifier issues faced by households near Kothapet Fruit Market and Chaitanyapuri Metro:
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono uppercase text-[11px] tracking-wider">
                  <th className="p-4 border-b border-slate-800">RO Problem</th>
                  <th className="p-4 border-b border-slate-800">Root Cause</th>
                  <th className="p-4 border-b border-slate-800">Professional Solution</th>
                  <th className="p-4 border-b border-slate-800">Estimated Repair Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Continuous Wastewater Flow</td>
                  <td className="p-4">Faulty Solenoid Valve (SV) or stuck auto-shutoff valve</td>
                  <td className="p-4">Replace SV coil with food-grade solenoid valve & flush sensor lines</td>
                  <td className="p-4 text-blue-600 font-bold">20 – 30 Minutes</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Low Water Flow or Thin Stream</td>
                  <td className="p-4">Choked 5-micron pre-filter, clogged RO membrane, or weak pump</td>
                  <td className="p-4">Replace spun candle, clean carbon cartridge, and test booster pump bar pressure</td>
                  <td className="p-4 text-blue-600 font-bold">30 – 45 Minutes</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Loud Vibrate / Rattling Motor Noise</td>
                  <td className="p-4">Worn diaphragm bearings inside 100 GPD booster pump or air lock</td>
                  <td className="p-4">Service pump head diaphragm or replace with 100% copper-winding 100 GPD pump</td>
                  <td className="p-4 text-blue-600 font-bold">30 – 40 Minutes</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Bad Taste / High Output TDS</td>
                  <td className="p-4">Exhausted RO membrane pores or misaligned TDS mixing valve</td>
                  <td className="p-4">Install genuine 80 GPD USA Filmtec membrane and calibrate TDS index to 80–120 ppm</td>
                  <td className="p-4 text-blue-600 font-bold">35 – 50 Minutes</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">No Power / Dead RO Machine</td>
                  <td className="p-4">Burnt 24V/36V SMPS power supply adapter or tripped float switch</td>
                  <td className="p-4">Install heavy-duty surge-protected SMPS power supply & verify electrical float switch</td>
                  <td className="p-4 text-blue-600 font-bold">20 – 30 Minutes</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Water Leaking From Bottom Body</td>
                  <td className="p-4">Loose push-fit elbow joints, cracked filter housing, or broken O-ring</td>
                  <td className="p-4">Replace high-pressure elbow fittings, insert fresh food-grade O-rings & re-test line</td>
                  <td className="p-4 text-blue-600 font-bold">15 – 30 Minutes</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* SECTION 5: BENEFITS OF REGULAR MAINTENANCE */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Long-Term Health Benefits</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Regular RO Maintenance Matters in Kothapet
            </h2>
            <p className="text-slate-600 text-sm">
              Timely filter servicing protects both your drinking water quality and your appliance investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" /> Complete Disease Prevention
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Stagnant bio-films and dirty carbon filters harbor bacteria and viruses over time. Regular UV bulb replacement and tank sanitization prevent waterborne illnesses like typhoid, gastroenteritis, and jaundice.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" /> Lower Power & Water Consumption
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A choked pre-filter forces the booster pump to work twice as hard, consuming excess electricity and generating excessive wastewater. Clean filters optimize filtration speed and reduce energy bills.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-blue-600" /> Extended Membrane Lifespan
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Replacing cheap ₹150 pre-filter spun candles every 3 months shields the expensive RO membrane from heavy borewell silt, doubling the membrane’s operational life to 2+ years.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: RO INSTALLATION PROCESS STEP-BY-STEP */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Standardized Protocol</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Our 6-Step Standardized RO Installation Process
            </h2>
            <p className="text-slate-600 text-sm">
              Whether you purchase a new domestic purifier or re-install an existing machine in Kothapet, our engineers execute a flawless installation workflow:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 relative">
              <span className="text-3xl font-black text-blue-600/20 font-mono absolute top-4 right-4">01</span>
              <h3 className="text-base font-bold text-slate-900">Raw Water TDS Analysis</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We measure your inlet water TDS and pressure levels to configure the optimal membrane rejection ratio and determine whether a pressure reducer valve is necessary.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 relative">
              <span className="text-3xl font-black text-blue-600/20 font-mono absolute top-4 right-4">02</span>
              <h3 className="text-base font-bold text-slate-900">Precision Wall Mounting</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our technicians drill clean, level wall mounts or place under-sink units securely away from direct heat sources and direct sunlight.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 relative">
              <span className="text-3xl font-black text-blue-600/20 font-mono absolute top-4 right-4">03</span>
              <h3 className="text-base font-bold text-slate-900">Inlet Valve & Tubing Fitting</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We install a food-grade brass/SS inlet diverter valve at your tap point and connect heavy-duty food-grade LLDPE water tubing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 relative">
              <span className="text-3xl font-black text-blue-600/20 font-mono absolute top-4 right-4">04</span>
              <h3 className="text-base font-bold text-slate-900">System Flushing & Air Purging</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Before connecting the main RO membrane, we flush carbon micro-fines to prevent premature membrane pore choking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 relative">
              <span className="text-3xl font-black text-blue-600/20 font-mono absolute top-4 right-4">05</span>
              <h3 className="text-base font-bold text-slate-900">TDS Index Balancing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We calibrate the mineral controller valve to adjust purified drinking water TDS between 80 ppm and 150 ppm, ensuring essential minerals remain intact.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 relative">
              <span className="text-3xl font-black text-blue-600/20 font-mono absolute top-4 right-4">06</span>
              <h3 className="text-base font-bold text-slate-900">Leak Test & Customer Handover</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We test auto-cut switch shutoff, inspect all push-fit joints for micro-leaks, issue warranty cards, and provide maintenance tips to the homeowner.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: AMC PLANS COMPARISON TABLE */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Affordable Protection</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              RO Annual Maintenance Contract (AMC) Plans in Kothapet
            </h2>
            <p className="text-slate-600 text-sm">
              Protect your water purifier with our popular AMC plans tailored for Kothapet households:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* AMC Plan 1 */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all">
              <div>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">Basic Maintenance</span>
                <h3 className="text-xl font-bold text-slate-900 mt-3">Basic RO Service Plan</h3>
                <p className="text-xs text-slate-500 mt-1">Ideal for purifiers under 2 years old with good water pressure.</p>
                <div className="mt-4 text-2xl font-black text-slate-900">₹1,999 <span className="text-xs font-normal text-slate-500">/ Year</span></div>
                
                <ul className="text-xs text-slate-600 space-y-2.5 mt-6 font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 3 Periodic Service Visits per Year</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 2 Free Spun Pre-Filter Replacements</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Free Sediment & Carbon Cleaning</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Free Breakdown Labor Charges</li>
                </ul>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all text-xs uppercase tracking-wider"
              >
                Subscribe Basic AMC
              </button>
            </div>

            {/* AMC Plan 2 */}
            <div className="bg-gradient-to-b from-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-blue-500/30 flex flex-col justify-between space-y-6 shadow-xl relative scale-[1.02]">
              <div className="absolute top-0 right-8 bg-blue-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-b-xl uppercase tracking-wider">
                Most Popular
              </div>
              <div>
                <span className="bg-blue-500/30 text-blue-300 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">Comprehensive Coverage</span>
                <h3 className="text-xl font-bold text-white mt-3">Comprehensive RO AMC</h3>
                <p className="text-xs text-slate-300 mt-1">Complete peace of mind with full electrical part & membrane coverage.</p>
                <div className="mt-4 text-2xl font-black text-white">₹3,499 <span className="text-xs font-normal text-slate-300">/ Year</span></div>
                
                <ul className="text-xs text-slate-200 space-y-2.5 mt-6 font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-400 shrink-0" /> 3 Periodic Service Visits per Year</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-400 shrink-0" /> 1 Free Genuine RO Membrane Replacement</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-400 shrink-0" /> Free Pre-Filter, Sediment & Carbon Filters</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-400 shrink-0" /> Free Pump, SMPS & SV Electrical Repairs</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-sky-400 shrink-0" /> Unlimited Free Breakdown Calls</li>
                </ul>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30"
              >
                Subscribe Comprehensive
              </button>
            </div>

            {/* AMC Plan 3 */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all">
              <div>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">Commercial Solutions</span>
                <h3 className="text-xl font-bold text-slate-900 mt-3">Commercial RO AMC</h3>
                <p className="text-xs text-slate-500 mt-1">Customized for 25 LPH, 50 LPH & 100 LPH plants in offices & hostels.</p>
                <div className="mt-4 text-2xl font-black text-slate-900">Custom Quote <span className="text-xs font-normal text-slate-500">/ Year</span></div>
                
                <ul className="text-xs text-slate-600 space-y-2.5 mt-6 font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Monthly Preventive Servicing Inspections</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Jumbo Filter Cartridge & Media Replacement</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Dosing Pump & Raw Water Pump Overhaul</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Guaranteed 4-Hour Emergency SLA Response</li>
                </ul>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all text-xs uppercase tracking-wider"
              >
                Request Commercial Quote
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: COMMERCIAL RO PLANTS SOLUTIONS */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Commercial Water Treatment</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Commercial RO Plants for Schools, Hostels & Offices in Kothapet
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kothapet and adjacent Chaitanyapuri host dozens of junior colleges, coaching institutions, private hospitals, corporate offices, and student hostels requiring thousands of liters of safe drinking water daily. Rainbow Aquafresh Systems manufactures and maintains high-performance Commercial RO Plants ranging from <strong className="text-slate-800 font-semibold">25 LPH, 50 LPH, 100 LPH, 250 LPH, up to 1000 LPH</strong> capacity.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Built with heavy-duty SS 304 food-grade skids, automatic multiport backwash valves, antiscalant dosing pumps, and high-pressure raw water pumps, our commercial plants operate reliably even under heavy 20-hour continuous duties. Check our full <a href="/commercial-ro-plants" className="text-blue-600 font-bold hover:underline">Commercial RO Plants Range</a>.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold text-slate-800">
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>25 LPH – 100 LPH Compact Plants</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200 flex items-center gap-2">
                  <Building className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>250 LPH – 1000 LPH Industrial Plants</span>
                </div>
              </div>
            </div>

            {/* IMAGE SUGGESTION 2 PLACEHOLDER / DISPLAY */}
            <div className="lg:col-span-5 bg-white p-4 rounded-3xl border border-slate-200 shadow-md">
              <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative mb-3">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80" 
                  alt="Industrial Commercial RO Plant manufacturing and installation by Rainbow Aquafresh Systems Hyderabad"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="text-center space-y-1">
                <p className="text-xs font-bold text-slate-900">Commercial RO Plant Installation in Kothapet</p>
                <p className="text-[10px] text-slate-500 font-mono">Custom SS Skid • Automatic Dosing • Digital Flow Meters</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9: LOCAL AREAS SERVED NEAR KOTHAPET */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Localized Coverage</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Areas We Serve Near Kothapet, Hyderabad
            </h2>
            <p className="text-slate-600 text-sm">
              Our mobile technicians provide 30-minute doorstep RO servicing across all key colonies and neighboring landmarks in East Hyderabad:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 text-xs text-slate-700 font-medium">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">Kothapet Fruit Market</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">Chaitanyapuri Metro</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">Doctors Colony</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">Mohan Nagar</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">Victoria Memorial Home</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">Green Hills Colony</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">Vasavi Nagar</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">Asthalakshmi Temple Rd</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">LB Nagar Junction</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">Saroornagar Lake</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">Dilsukhnagar</div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-center font-semibold text-slate-800">Malakpet HQ</div>
          </div>

        </div>
      </section>

      {/* SECTION 10: FREQUENTLY ASKED QUESTIONS (10 FAQS) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Frequently Asked Questions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Got Questions? We Have Instant Answers
            </h2>
            <p className="text-slate-600 text-sm">
              Common questions regarding RO water purifier repair, filter replacement, and AMC in Kothapet:
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base gap-4 cursor-pointer hover:text-blue-600 transition-colors"
                >
                  <span>{index + 1}. {item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openFaq === index ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 11: CONCLUSION & STRONG CALL TO ACTION */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          
          <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider inline-block border border-blue-400/30">
            Pure Water Guarantee Across Kothapet
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Schedule Same-Day RO Water Purifier Service in Kothapet Today!
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Don't compromise your family's health with dirty, salty, or uncalibrated borewell water. Contact <strong className="text-white font-semibold">Rainbow Aquafresh Systems</strong> for instant doorstep repair, genuine filter replacements, new RO installations, and affordable AMC plans in Kothapet, Chaitanyapuri, and LB Nagar.
          </p>

          {/* Business contact card block */}
          <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 max-w-2xl mx-auto space-y-4 text-xs">
            <div className="text-sky-300 font-mono uppercase font-bold text-xs">Rainbow Aquafresh Systems • Head Branch</div>
            <p className="text-slate-200">16-10-27/109, 33-2RT, MCH Colony, Malakpet, Hyderabad – 500036</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm font-bold pt-2">
              <a 
                href="tel:+918885556965" 
                className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-4 h-4" /> Call +91 88855 56965
              </a>
              <a 
                href="tel:+918341256965" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <PhoneCall className="w-4 h-4" /> Call +91 83412 56965
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="bg-white text-slate-900 hover:bg-slate-100 font-extrabold px-8 py-4 rounded-xl transition-all text-sm shadow-xl cursor-pointer"
            >
              Book Service Technician Online
            </button>
            <a
              href="https://wa.me/918885556965?text=Hi%20Rainbow%20Aquafresh%2C%20I%20want%20to%20book%20RO%20service%20in%20Kothapet%2C%20Hyderabad."
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-8 py-4 rounded-xl transition-all text-sm shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
