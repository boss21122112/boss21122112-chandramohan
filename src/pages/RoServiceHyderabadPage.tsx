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
  ExternalLink,
  Shield,
  ThumbsUp,
  Settings,
  Sparkles
} from 'lucide-react';

interface RoServiceHyderabadPageProps {
  onOpenBooking?: () => void;
}

export const RoServiceHyderabadPage: React.FC<RoServiceHyderabadPageProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured Schemas
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rainbow Aquafresh Systems - RO Service Hyderabad",
    "image": "https://www.rainbowafs.com/assets/images/young_lady_drinking_water_1782204286662.jpg",
    "@id": "https://www.rainbowafs.com/#localbusiness",
    "url": "https://www.rainbowafs.com/ro-service-hyderabad",
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
      { "@type": "City", "name": "Hyderabad" },
      { "@type": "City", "name": "Secunderabad" },
      { "@type": "AdministrativeArea", "name": "Kukatpally, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Madhapur, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Gachibowli, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Kondapur, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Jubilee Hills, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Banjara Hills, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Malakpet, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Kothapet, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Dilsukhnagar, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "LB Nagar, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Miyapur, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Begumpet, Hyderabad" },
      { "@type": "AdministrativeArea", "name": "Uppal, Hyderabad" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "480"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "RO Water Purifier Repair, Maintenance & Installation Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Rainbow Aquafresh Systems",
      "telephone": "+91 88855 56965",
      "url": "https://www.rainbowafs.com/"
    },
    "areaServed": {
      "@type": "City",
      "name": "Hyderabad, Telangana, India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "RO Water Purifier Services in Hyderabad",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Doorstep RO Repair & Diagnostic Inspection in Hyderabad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "RO Filter & Filmtec Membrane Replacement in Hyderabad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Domestic RO Installation & Relocation in Hyderabad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Annual Maintenance Contract (AMC) Plans for RO Purifiers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial & Industrial RO Water Plant Servicing in Hyderabad"
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
        "name": "Services",
        "item": "https://www.rainbowafs.com/contact"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "RO Service Hyderabad",
        "item": "https://www.rainbowafs.com/ro-service-hyderabad"
      }
    ]
  };

  const faqList = [
    {
      question: "How fast can a Rainbow Aquafresh service engineer reach my home in Hyderabad?",
      answer: "We operate localized service units across Central, East, West, North, and South Hyderabad. Upon receiving your service request or booking, our certified service technician usually arrives at your doorstep within 30 to 90 minutes anywhere in Greater Hyderabad, including IT corridors like Madhapur, Gachibowli, and Kondapur as well as residential hubs like Malakpet, Kothapet, Kukatpally, and Secunderabad."
    },
    {
      question: "What is the inspection or diagnostic fee for RO service in Hyderabad?",
      answer: "Our standard on-site door visit and diagnostic fee across Hyderabad is a flat ₹150. If you authorize any repair work, spare part replacement, or filter change during the technician's visit, this ₹150 diagnostic fee is completely waived! Routine minor servicing starts from ₹350–₹500."
    },
    {
      question: "Do you service all brands of water purifiers in Hyderabad?",
      answer: "Yes! While we manufacture premier Rainbow Aquafresh domestic and commercial water purifiers, our multi-brand expert engineers service all major purifier brands including Kent, Aquaguard (Eureka Forbes), Pureit, Livpure, A.O. Smith, Blue Star, Havells, LG, Panasonic, and custom assembled RO units."
    },
    {
      question: "Why is water quality in Hyderabad hard or salty, and how does RO filtration help?",
      answer: "Groundwater drawn from deep borewells across Hyderabad (such as Kukatpally, LB Nagar, Kothapet, Miyapur, and Manikonda) often records high Total Dissolved Solids (TDS) ranging between 600 ppm and 2000+ ppm, rich in calcium, magnesium, and fluorides. Reverse Osmosis (RO) filtration combined with USA Filmtec high-rejection membranes reduces TDS by up to 95%, removing heavy metals and hardness while maintaining healthy mineral ratios."
    },
    {
      question: "How frequently should RO filters and membranes be changed in Hyderabad?",
      answer: "Due to high silt and mineral content in Hyderabad borewell water, the 5-micron spun pre-filter candle should be replaced every 3 to 4 months. The main inline sediment and activated carbon filters need replacement every 8 to 12 months, while the core RO membrane typically lasts 18 to 24 months depending on daily family consumption."
    },
    {
      question: "What is covered in the Rainbow Aquafresh RO Annual Maintenance Contract (AMC)?",
      answer: "Our comprehensive AMC plans include 3 mandatory periodic preventative servicing visits per year, 1 full set of filter replacements (spun pre-filter, sediment filter, carbon block cartridge), membrane sanitization, unlimited free breakdown calls, and full warranty coverage for electrical spare parts including the 100 GPD booster pump and SMPS power supply."
    },
    {
      question: "Do you supply genuine spare parts with warranty in Hyderabad?",
      answer: "Yes, absolutely. We install only 100% genuine, food-grade ABS spare parts, 100 GPD 100% copper-winding booster pumps, original Solenoid Valves (SV), heavy-duty SMPS adapters, and certified active Copper-Alkaline mineralizer cartridges with written warranty cards."
    },
    {
      question: "Can you re-install my RO purifier if I am shifting homes within Hyderabad?",
      answer: "Yes! We provide complete RO uninstallation and re-installation services. Our engineers safely dismount your purifier, transport it safely, drill clean wall mounts at your new location, connect food-grade tap diverter valves, calibrate output TDS, and verify leak-free operation."
    },
    {
      question: "Do you provide Commercial RO Plants for offices, schools, and hostels in Hyderabad?",
      answer: "Yes, Rainbow Aquafresh Systems manufactures, installs, and services commercial and industrial RO water plants ranging from 25 LPH, 50 LPH, 100 LPH, 250 LPH, 500 LPH, up to 2000 LPH with stainless steel skids, automatic dosing pumps, and multi-port sand/carbon media filters across Hyderabad."
    },
    {
      question: "How can I book doorstep RO service in Hyderabad with Rainbow Aquafresh Systems?",
      answer: "Booking is simple! You can call us directly at +91 88855 56965 or +91 83412 56965. You can also click the 'Book Service Online' button on our website or send us an instant message on WhatsApp for immediate engineer dispatch."
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
          <a href="/contact" className="hover:text-blue-600 transition-colors">Services</a>
          <span>/</span>
          <span className="text-blue-700 font-bold">RO Service Hyderabad</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md">
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> Hyderabad & Secunderabad • 30-Min Doorstep SLA
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
                RO Water Purifier Service & Repair in Hyderabad
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl font-normal">
                Searching for quick, expert, and transparent <strong className="text-white font-semibold">RO Service in Hyderabad</strong>? <strong className="text-white font-semibold">Rainbow Aquafresh Systems</strong> is Hyderabad's most trusted water purification specialist with over 20 years of experience. We provide 30-minute doorstep RO repair, filter replacement, new installation, AMC contracts, and commercial RO plants across all localities in Hyderabad and Secunderabad.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-slate-200 pt-2">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>30-90 Min Response</span>
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
                  <span>20+ Years EEAT</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={onOpenBooking}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 text-sm cursor-pointer hover:scale-[1.02]"
                >
                  <Wrench className="w-5 h-5" /> Book Doorstep Service
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
                  <h2 className="text-xl font-bold text-slate-900">Hyderabad Express RO Call</h2>
                </div>
                <p className="text-xs text-slate-500 mb-6 font-medium">Certified engineers stationed in all major Hyderabad zones.</p>

                <div className="space-y-4 text-xs">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Service Reach:</span>
                    <p className="font-bold text-slate-800">All Localities in Hyderabad & Secunderabad</p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Doorstep Inspection Fee:</span>
                    <p className="font-bold text-blue-700">Flat ₹150 (Waived on Repair Approval!)</p>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Quality Assurance:</span>
                    <p className="font-bold text-slate-800">Free Digital TDS Check + 1-Yr Spare Warranty</p>
                  </div>

                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl uppercase tracking-wider transition-all text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Schedule Immediate Technician</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/918885556965?text=Hi%20Rainbow%20Aquafresh%2C%20I%20need%20RO%20water%20purifier%20service%20in%20Hyderabad."
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

      {/* SECTION 1: DETAILED INTRODUCTION & HYDERABAD WATER QUALITY ANALYSIS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-4xl space-y-4">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Local Water Quality Expert Analysis</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Professional RO Water Purifier Service is Essential in Hyderabad
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Hyderabad is one of India's fastest-growing mega-cities, blending bustling IT tech hubs like Madhapur, Gachibowli, and Hitec City with sprawling residential communities in Kukatpally, Miyapur, Malakpet, Kothapet, Dilsukhnagar, LB Nagar, and Kompally. However, securing clean, safe, and pleasant-tasting drinking water remains a daily challenge for millions of Hyderabad households and business owners.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              The city relies on a dual water supply system: municipal surface water sourced from Krishna, Godavari, and Manjeera rivers, alongside millions of private borewells drilled deep into Hyderabad's rocky granite terrain. Groundwater in many parts of Hyderabad frequently records Total Dissolved Solids (TDS) levels between <strong className="text-slate-900 font-semibold">600 ppm and 2000+ ppm</strong>. High TDS groundwater contains elevated levels of calcium carbonate, magnesium hardness, fluorides, nitrates, and dissolved heavy minerals. This causes severe scale buildup inside pipes, damages kitchen appliances, gives water a bitter or salty taste, and leads to health concerns such as kidney stones, digestive distress, and skin dryness over time.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Even in areas supplied by municipal water, seasonal pipeline maintenance, old distribution networks, and overhead storage tank contamination can introduce fine silt, rust particles, chlorine residues, and pathogenic microbes. Adhering to official drinking water standards published by the{' '}
              <a href="https://www.bis.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">Bureau of Indian Standards (BIS IS 10500:2012)</a>{' '}
              and the{' '}
              <a href="https://www.who.int/news-room/fact-sheets/detail/drinking-water" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">World Health Organization (WHO Guidelines)</a>, ideal drinking water must maintain a TDS level between 80 ppm and 150 ppm with an optimal pH range of 7.2 to 8.5.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              This is where <a href="/" className="text-blue-600 font-bold hover:underline">Rainbow Aquafresh Systems</a> excels. As Hyderabad’s premier localized water purification provider based in Malakpet, we bring over two decades of hands-on expertise to every neighborhood. Whether you need an emergency breakdown repair, filter replacement, new machine installation, routine AMC service, or a commercial RO plant, our team ensures your drinking water is pure, crystal-clear, and healthfully mineralized.
            </p>
          </div>

          {/* IMAGE SUGGESTION / FEATURE HIGHLIGHT */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-xs">
            <div className="w-full md:w-1/3 aspect-video bg-blue-100 rounded-xl overflow-hidden relative flex items-center justify-center shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1548839140-29a749e1cf4e?auto=format&fit=crop&w=800&q=80" 
                alt="Expert technician conducting digital TDS check and RO water purifier service in Hyderabad"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded">SEO Image Reference • Localized Service</span>
              <h3 className="text-lg font-extrabold text-slate-900">On-Site TDS Calibration & Sanitary Filter Maintenance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our technicians test your tap water and purified water in real-time using digital TDS meters, pressure gauges, and sanitary gloves. We adjust the mineral controller to guarantee safe, delicious, mineral-rich water tailored specifically to your locality’s water hardness.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE RAINBOW AQUAFRESH SYSTEMS (EEAT) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">EEAT Trust & Proven Excellence</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Why Hyderabad Chooses Rainbow Aquafresh Systems
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              We combine localized technical knowledge with 100% genuine spare parts, transparent flat pricing, and an unbeatable doorstep response SLA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Express 30–90 Min Doorstep SLA</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We maintain dedicated service engineers stationed across Central, East, West, North, and South Hyderabad. When you request a call, our technician reaches your home within 30 to 90 minutes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">100% Genuine Spare Guarantee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We strictly fit food-grade ABS housings, USA Filmtec RO membranes, 100 GPD 100% copper booster pumps, and original SMPS power supplies backed by written 1-year replacement warranties.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Flat ₹150 Diagnostic Fee</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No hidden costs or bloated estimates. Our doorstep inspection fee is a flat ₹150. If you proceed with the repair or replacement, this diagnostic fee is completely waived!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Active Copper + Alkaline Technology</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We go beyond basic filtration. Our multi-stage RO systems integrate active Copper-Alkaline technology to infuse healthy minerals like copper, calcium, and magnesium back into your water while optimizing pH levels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Multi-Brand Expertise</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you own a Rainbow Aquafresh system, Kent, Aquaguard, Pureit, Livpure, A.O. Smith, Blue Star, LG, or custom assembled purifier, our certified technicians repair all models effortlessly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">4.9 Star Rating Across Hyderabad</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Backed by 480+ verified Google customer reviews across Malakpet, Kothapet, Dilsukhnagar, Kukatpally, Madhapur, and Secunderabad. We pride ourselves on honest, dependable service.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: OUR COMPLETE RO SERVICES IN HYDERABAD */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">End-to-End Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Comprehensive RO Services Offered in Hyderabad
            </h2>
            <p className="text-slate-600 text-sm">
              We cater to all residential, commercial, and industrial water treatment requirements under one roof:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Service 1 */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Fast Repair</span>
                <span className="text-xs font-bold text-slate-500 font-mono">From ₹150</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">1. Emergency RO Repair & Breakdown Service</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Is your water purifier leaking continuously, making loud motor vibrations, or completely unresponsive? Our experienced technicians diagnose and fix booster pump failures, burnt SMPS adapters, stuck Solenoid Valves (SV), auto-cut switch trips, and choked membranes on the spot. Learn more about our <a href="/ro-repair-hyderabad" className="text-blue-600 font-bold hover:underline">RO Repair Services in Hyderabad</a>.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Solenoid Valve & Auto-Cut Switch Replacement</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 100 GPD Booster Pump Head Overhaul & Diaphragm Repair</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> SMPS Adapter, PCB & Float Switch Wiring Fixes</li>
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
                Clogged pre-filters restrict water flow and overload your booster pump. We replace dirty 5-micron spun candles, inline sediment cartridges, activated block carbon, and USA Filmtec RO membranes with high salt-rejection capability. Read about our <a href="/ro-filter-replacement-hyderabad" className="text-blue-600 font-bold hover:underline">RO Filter Replacement Services</a>.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> High-Density Polypropylene Spun Pre-Filter Candle</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 80 GPD / 100 GPD High-Rejection RO Membrane</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Active Copper + Bio-Alkaline Post-Filter Cartridge</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-blue-300 transition-all">
              <div className="flex items-center justify-between">
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Installation</span>
                <span className="text-xs font-bold text-slate-500 font-mono">From ₹450</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">3. RO Purifier Installation & Relocation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Shifting homes in Hyderabad? We offer neat, professional wall-mounting and under-sink RO installation services, complete with food-grade inlet diverter valves, leak-proof tubing, and pressure testing. Check our <a href="/ro-installation-hyderabad" className="text-blue-600 font-bold hover:underline">RO Installation Hyderabad Guide</a>.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Precision Wall Mounting & Tap Connection</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Food-Grade Diverter Valve & Drain Line Setup</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Post-Installation Pressure & Digital TDS Validation</li>
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
                Enjoy complete peace of mind with our annual maintenance contracts. Our plans cover 3 mandatory preventive service visits per year, free filter replacements, and unlimited breakdown calls with zero additional labor fees. Explore our <a href="/ro-amc-service" className="text-blue-600 font-bold hover:underline">RO AMC Packages</a>.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 3 Mandatory Preventive Maintenance Visits</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Free Replacement of Spun, Sediment & Carbon Filters</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Free Spare Electrical Part Coverage (Comprehensive AMC)</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 4: DIAGNOSTIC TROUBLESHOOTING TABLE */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Diagnostic Reference</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Common RO Purifier Problems We Solve Daily in Hyderabad
            </h2>
            <p className="text-slate-600 text-sm">
              Refer to our quick diagnostic table for common water purifier issues encountered across Hyderabad households:
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-mono uppercase text-[11px] tracking-wider">
                  <th className="p-4 border-b border-slate-800">RO Issue</th>
                  <th className="p-4 border-b border-slate-800">Root Cause</th>
                  <th className="p-4 border-b border-slate-800">Expert Technical Solution</th>
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
                  <td className="p-4 font-bold text-slate-900">Low Water Flow or Trickle Stream</td>
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
                  <td className="p-4 font-bold text-slate-900">No Power / Unresponsive RO Machine</td>
                  <td className="p-4">Burnt 24V/36V SMPS power supply adapter or tripped float switch</td>
                  <td className="p-4">Install heavy-duty surge-protected SMPS power supply & verify electrical float switch</td>
                  <td className="p-4 text-blue-600 font-bold">20 – 30 Minutes</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 font-bold text-slate-900">Water Leaking From Bottom Cabinet</td>
                  <td className="p-4">Loose push-fit elbow joints, cracked filter housing, or broken O-ring</td>
                  <td className="p-4">Replace high-pressure elbow fittings, insert fresh food-grade O-rings & re-test line</td>
                  <td className="p-4 text-blue-600 font-bold">15 – 30 Minutes</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* SECTION 5: MULTI-BRAND SERVICING */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Multi-Brand Capability</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              We Service All Major Water Purifier Brands in Hyderabad
            </h2>
            <p className="text-slate-600 text-sm">
              Our technicians carry brand-compatible original spare parts for all leading manufacturers:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {['Rainbow Aquafresh', 'Kent RO', 'Aquaguard', 'Pureit', 'Livpure', 'A.O. Smith', 'Blue Star', 'Havells', 'LG RO', 'Panasonic', 'Aquagrand', 'Custom Assembly'].map((brand, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-xl font-bold text-slate-800 text-xs shadow-2xs hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                {brand}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: AMC PLANS COMPARISON TABLE */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Annual Protection</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              RO Annual Maintenance Contract (AMC) Plans
            </h2>
            <p className="text-slate-600 text-sm">
              Protect your water purifier year-round with our budget-friendly AMC plans tailored for Hyderabad homes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* AMC Plan 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all">
              <div>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">Basic Maintenance</span>
                <h3 className="text-xl font-bold text-slate-900 mt-3">Basic RO Service Plan</h3>
                <p className="text-xs text-slate-500 mt-1">Ideal for newer purifiers with stable water pressure.</p>
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
                Select Basic Plan
              </button>
            </div>

            {/* AMC Plan 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-600 shadow-xl flex flex-col justify-between space-y-6 relative">
              <div className="absolute -top-3.5 right-6 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
              <div>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">Full Filter AMC</span>
                <h3 className="text-xl font-bold text-slate-900 mt-3">Standard RO AMC Plan</h3>
                <p className="text-xs text-slate-500 mt-1">Includes 100% complete filter and membrane replacement.</p>
                <div className="mt-4 text-2xl font-black text-blue-700">₹2,999 <span className="text-xs font-normal text-slate-500">/ Year</span></div>
                
                <ul className="text-xs text-slate-600 space-y-2.5 mt-6 font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 3 Periodic Servicing Visits per Year</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 1 New 80/100 GPD High-Rejection RO Membrane</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 1 Full Set Sediment & Carbon Filter Cartridges</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Free Unlimited Emergency Breakdown Calls</li>
                </ul>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-all text-xs uppercase tracking-wider shadow-md shadow-blue-600/30"
              >
                Select Standard Plan
              </button>
            </div>

            {/* AMC Plan 3 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all">
              <div>
                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">100% All-Inclusive</span>
                <h3 className="text-xl font-bold text-slate-900 mt-3">Comprehensive RO AMC Plan</h3>
                <p className="text-xs text-slate-500 mt-1">Full coverage for filters, membrane, pump & SMPS power supply.</p>
                <div className="mt-4 text-2xl font-black text-slate-900">₹4,250 <span className="text-xs font-normal text-slate-500">/ Year</span></div>
                
                <ul className="text-xs text-slate-600 space-y-2.5 mt-6 font-medium">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> All Features of Standard Filter AMC</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 100 GPD Booster Pump Replacement Coverage</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> SMPS Adapter & Solenoid Valve Coverage</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Zero Labor & Zero Parts Cost Guarantee</li>
                </ul>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all text-xs uppercase tracking-wider"
              >
                Select Comprehensive Plan
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: COMMERCIAL RO SOLUTIONS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Commercial & Industrial Treatment</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Commercial RO Plants for Hostels, Offices & Institutions in Hyderabad
            </h2>
            <p className="text-slate-600 text-sm">
              We design, install, and maintain high-capacity commercial water purifiers across Hyderabad:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded font-mono text-[10px]">25 & 50 LPH</span>
              <h3 className="text-base font-bold text-slate-900">Offices & Small Cafes</h3>
              <p className="text-slate-600 leading-relaxed">
                Ideal for 20–50 employees. Compact wall-mount or table-top stainless steel frame with dual booster pumps. Explore <a href="/commercial-ro-plants" className="text-blue-600 font-bold hover:underline">Commercial RO Plants</a>.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded font-mono text-[10px]">100 & 250 LPH</span>
              <h3 className="text-base font-bold text-slate-900">Hostels & Schools</h3>
              <p className="text-slate-600 leading-relaxed">
                Heavy-duty commercial plants designed for student hostels, PG accommodations, dining halls, and schools across Hyderabad.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded font-mono text-[10px]">500 LPH</span>
              <h3 className="text-base font-bold text-slate-900">Hospitals & Hotels</h3>
              <p className="text-slate-600 leading-relaxed">
                SS-304 skids with multi-media sand filters, activated carbon vessels, antiscalant dosing pumps, and UV disinfection.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-2">
              <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded font-mono text-[10px]">1000 - 2000 LPH</span>
              <h3 className="text-base font-bold text-slate-900">Industrial & Bottling</h3>
              <p className="text-slate-600 leading-relaxed">
                Industrial grade reverse osmosis plants tailored for manufacturing units, residential gated communities, and food processing plants.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: EXTENSIVE HYDERABAD LOCALITIES COVERAGE */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Service Footprint</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Areas We Serve Across Hyderabad & Secunderabad
            </h2>
            <p className="text-slate-600 text-sm">
              Our mobile service units provide 30-to-90-minute doorstep RO assistance across all major Hyderabad zones:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm text-blue-700">East Hyderabad & Suburbs</h3>
              <p className="text-slate-600 leading-relaxed">
                Malakpet, <a href="/ro-water-purifier-service-kothapet-hyderabad" className="text-blue-600 font-bold hover:underline">Kothapet</a>, Dilsukhnagar, LB Nagar, Chaitanyapuri, Saroornagar, Nagole, Uppal, Ramanthapur, Vanasthalipuram, Hayathnagar, Santoshnagar, Champapet.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm text-blue-700">West Hyderabad & IT Corridor</h3>
              <p className="text-slate-600 leading-relaxed">
                Madhapur, Gachibowli, Kondapur, Hitec City, Jubilee Hills, Banjara Hills, Kukatpally, KPHB Colony, Miyapur, Chandanagar, Serilingampally, Manikonda, Financial District, Narsingi.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm text-blue-700">Central & North Hyderabad</h3>
              <p className="text-slate-600 leading-relaxed">
                Begumpet, Secunderabad, Ameerpet, SR Nagar, Panjagutta, Somajiguda, Khairatabad, Himayatnagar, Narayanaguda, Musheerabad, Alwal, Malkajgiri, Kompally, Suchitra, Sainikpuri.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm text-blue-700">South Hyderabad & Old City</h3>
              <p className="text-slate-600 leading-relaxed">
                Mehdipatnam, Attapur, Tolichowki, Rajendranagar, Falaknuma, Chandrayangutta, Charminar, Bahadurpura, Barkas, Bandlaguda.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 9: FAQ SECTION */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Here are answers to common queries regarding RO water purifier service in Hyderabad:
            </p>
          </div>

          <div className="space-y-3">
            {faqList.map((faq, index) => (
              <div 
                key={index}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-900 text-sm sm:text-base gap-4 cursor-pointer hover:bg-slate-100/80 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${openFaq === index ? 'rotate-180 text-blue-600' : ''}`} />
                </button>

                {openFaq === index && (
                  <div className="p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-16 bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <CheckCircle className="w-4 h-4 text-emerald-400" /> Express 30-Minute Doorstep Dispatch
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Book Same-Day RO Service in Hyderabad Today!
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Don't compromise your family's health with hard, salty, or unpurified water. Get certified RO repair, filter replacements, or AMC service delivered directly to your doorstep anywhere in Hyderabad.
          </p>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 max-w-xl mx-auto space-y-3 text-xs sm:text-sm text-slate-200">
            <div className="font-bold text-white text-base">Rainbow Aquafresh Systems</div>
            <p>16-10-27/109, 33-2RT, MCH Colony, Malakpet, Hyderabad – 500036</p>
            <p className="font-mono text-emerald-300 font-bold">Helpline: +91 88855 56965 | +91 83412 56965</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button
              onClick={onOpenBooking}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-blue-600/30 transition-all text-sm uppercase tracking-wider cursor-pointer hover:scale-[1.02]"
            >
              Book Service Online
            </button>
            <a
              href="tel:+918885556965"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-emerald-600/30 transition-all text-sm uppercase tracking-wider cursor-pointer hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Call +91 88855 56965
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
