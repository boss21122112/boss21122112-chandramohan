import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Wrench,
  Shield,
  Award,
  Clock,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Zap,
  Sparkles,
  MapPin,
  ChevronDown,
  Star,
  ArrowRight,
  ShieldCheck,
  RotateCcw,
  Tag,
  Activity,
  ThumbsUp,
  Volume2,
  TrendingDown,
  Building2,
  Calendar,
  Check,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

// Import image assets for gallery and hero visual
import youngLadyDrinkingWater from '../assets/images/young_indian_lady_drinking_water_1782205858892.jpg';
import dolphinReal from '../assets/images/dolphin_purifier_real_1782197884075.jpg';
import aquagrandReal from '../assets/images/aquagrand_purifier_real_1782198845580.jpg';
import copperPearl from '../assets/images/copper_pearl_purifier_1782309867459.jpg';
import aiquaBlack from '../assets/images/aiqua_black_purifier_1782311042035.jpg';
import purosisPlus from '../assets/images/purosis_plus_purifier_1782311198178.jpg';
import lxTwo from '../assets/images/lx_two_purifier_1782311134517.jpg';
import comm50 from '../assets/images/comm_50_lph_1782311838920.jpg';
import comm500 from '../assets/images/comm_500_lph_1782311871874.jpg';
import bannerImg from '../assets/images/rainbow_aquafresh_banner_1782197155821.jpg';

interface FilterReplacementPageProps {
  onOpenBooking?: () => void;
}

export const FilterReplacementPage: React.FC<FilterReplacementPageProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const contactPhone1 = "8885556965";
  const contactPhone2 = "8341256965";
  const whatsappNumber = "918885556965";

  const faqs = [
    {
      q: "How often should RO filters be replaced?",
      a: "Sediment filters should be changed every 3–6 months, Pre-Carbon filters every 6–12 months, RO membranes every 18–24 months, and UV lamps / Post-Carbon filters every 12 months. Exact intervals depend on water consumption and input TDS hardness in your Hyderabad locality."
    },
    {
      q: "How much does RO filter replacement cost in Hyderabad?",
      a: "Complete RO filter change packages start from as low as ₹350 for individual sediment pre-filters up to ₹1,800–₹2,500 for full multi-stage filter replacement sets (Sediment + Pre-Carbon + RO Membrane + Post-Carbon + Mineralizer). We provide transparent, upfront quotes before starting work with zero hidden charges."
    },
    {
      q: "How long does the RO filter replacement service take?",
      a: "A standard RO filter replacement service takes approximately 30 to 45 minutes at your home. Our technician inspects the purifier, flushes new cartridges, installs genuine parts, calibrates the TDS controller, and performs a complete leak test."
    },
    {
      q: "Do you use 100% genuine and original RO filters?",
      a: "Yes, Rainbow Aquafresh Systems uses 100% factory-sealed, food-grade ABS filter housings, NSF-certified high-rejection TFC RO membranes (such as USA Filmtec & DuPont technology), and genuine activated carbon blocks to ensure maximum health and purity."
    },
    {
      q: "Do you provide same-day doorstep RO service in Hyderabad?",
      a: "Yes! We offer 2-hour doorstep response for RO filter replacement across all major Hyderabad corridors including Malakpet, Dilsukhnagar, LB Nagar, Jubilee Hills, Gachibowli, Hitec City, Kukatpally, Miyapur, Kondapur, Secunderabad, and surrounding areas."
    },
    {
      q: "Which water purifier brands do you service and repair?",
      a: "We service and replace filters for all major domestic water purifier brands including Kent RO, Eureka Forbes Aquaguard, Pureit, Livpure, A.O. Smith, Blue Star, LG, V-Guard, Havells, Rainbow Aquafresh, and custom assembled RO units."
    },
    {
      q: "Do you replace damaged or clogged RO membranes?",
      a: "Yes, we stock 75 GPD, 80 GPD, and 100 GPD high-flux TFC Reverse Osmosis membranes designed specifically to handle high TDS groundwater (up to 2,000+ ppm) found in Hyderabad borewell water."
    },
    {
      q: "What is TDS adjustment and why is it performed during filter replacement?",
      a: "TDS (Total Dissolved Solids) adjustment regulates the mineral level in your output drinking water. During filter replacement, our technician uses a calibrated digital TDS meter to ensure your output water is maintained within the ideal healthy range (50–150 ppm) per BIS guidelines."
    },
    {
      q: "What happens if I delay changing my RO filters?",
      a: "Delaying filter replacement causes clogged cartridges, reduced water flow, foul smell or bitter taste, high TDS levels, heavy strain on the booster pump, higher electricity bills, and bio-film bacteria buildup inside storage tanks."
    },
    {
      q: "Can I replace RO filters by myself at home?",
      a: "While basic pre-filters can be changed manually, full internal RO filter and membrane replacement requires specialized tools, sanitization, leak-proof elbow sealing, pressure testing, and digital TDS calibration. Professional technicians ensure zero leakage and optimal water safety."
    },
    {
      q: "How do I know if my RO membrane is damaged or clogged?",
      a: "Key indicators include a drastic drop in purified water output flow, continuous discharge from the wastewater drain pipe, salty or metallic water taste, or high digital TDS readings exceeding 300 ppm."
    },
    {
      q: "What is the difference between Pre-Carbon and Post-Carbon filters?",
      a: "Pre-Carbon filters sit before the RO membrane to absorb harmful chlorine, pesticides, and organic chemicals that would otherwise degrade the delicate membrane. Post-Carbon filters sit after storage to polish water taste, eliminate lingering odors, and infuse beneficial minerals."
    },
    {
      q: "Do you provide warranty on replaced RO filters and membranes?",
      a: "Yes, all genuine spare parts, electrical adapters, booster pumps, and RO membranes replaced by Rainbow Aquafresh Systems come with official service guarantees and warranty coverage."
    },
    {
      q: "Do you service all localities across Greater Hyderabad?",
      a: "Yes, our mobile service team covers Central, Eastern, Western, Northern, and Southern Hyderabad, including Gachibowli, Kukatpally, Secunderabad, LB Nagar, Uppal, Begumpet, Mehdipatnam, Manikonda, Kompally, and Shamshabad."
    },
    {
      q: "How can I book an RO filter replacement service with Rainbow Aquafresh?",
      a: "You can book instantly by calling us at +91 8885556965 or sending a message on WhatsApp. You can also click the 'Book Service Now' button on this page to schedule a technician visit at your convenient time."
    }
  ];

  // Schema Definitions for Technical SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "WaterPurificationService",
    "name": "Rainbow Aquafresh Systems - RO Filter Replacement Hyderabad",
    "image": "https://www.rainbowafs.com/assets/rainbow_aquafresh_banner.jpg",
    "@id": "https://www.rainbowafs.com/#organization",
    "url": "https://www.rainbowafs.com/ro-filter-replacement-hyderabad",
    "telephone": "+91-8885556965",
    "priceRange": "₹350 - ₹2500",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16-10-27/109, MCH Colony, Malakpet",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500036",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.3712,
      "longitude": 78.4977
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
    "sameAs": [
      "https://www.facebook.com/sharer/sharer.php?u=https://www.rainbowafs.com"
    ]
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
        "name": "RO Filter Replacement Hyderabad",
        "item": "https://www.rainbowafs.com/ro-filter-replacement-hyderabad"
      }
    ]
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans antialiased">
      {/* Inject Structured Data Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* BREADCRUMBS */}
      <div className="bg-white border-b border-blue-100 py-3 px-4 text-xs font-semibold text-slate-500 shadow-3xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span className="text-slate-300">/</span>
          <a href="/ro-repair-hyderabad" className="hover:text-blue-600 transition-colors">RO Services</a>
          <span className="text-slate-300">/</span>
          <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
            RO Filter Replacement Hyderabad
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">

        {/* 1. HERO SECTION */}
        <section className="bg-gradient-to-br from-white via-sky-50/40 to-blue-50/60 p-6 sm:p-10 lg:p-12 rounded-3xl border border-blue-100 shadow-xl shadow-blue-900/5 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-black px-3.5 py-1.5 rounded-full font-mono uppercase tracking-wider">
                <Award className="w-4 h-4 text-blue-600" />
                <span>#1 RO Filter Replacement Service in Hyderabad</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Professional RO Filter Replacement in Hyderabad
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Get genuine RO filters replaced by experienced technicians. Same-day home service across Hyderabad with original spare parts, digital TDS level balancing, and affordable pricing.
              </p>

              {/* Sub features highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold text-slate-700">
                <div className="bg-white/80 p-3 rounded-xl border border-blue-100 flex items-center gap-2 shadow-2xs">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Genuine Spares</span>
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-blue-100 flex items-center gap-2 shadow-2xs">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>2-Hour Doorstep Service</span>
                </div>
                <div className="bg-white/80 p-3 rounded-xl border border-blue-100 flex items-center gap-2 shadow-2xs">
                  <Droplets className="w-4 h-4 text-cyan-600 shrink-0" />
                  <span>Digital TDS Calibration</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-blue-100/60">
                <a
                  href={`tel:+91${contactPhone1}`}
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/25 transition transform hover:-translate-y-0.5 text-sm cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>📞 Call Now: {contactPhone1}</span>
                </a>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hi Rainbow Aquafresh Systems,\n\nI need RO Filter Replacement service at my home in Hyderabad.\n\nPlease share availability and pricing details."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/25 transition transform hover:-translate-y-0.5 text-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>💬 WhatsApp Now</span>
                </a>

                {onOpenBooking && (
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl transition text-sm cursor-pointer"
                  >
                    <Wrench className="w-4 h-4" />
                    <span>Book Service Online</span>
                  </button>
                )}
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white p-3 rounded-3xl border border-blue-100 shadow-xl overflow-hidden group">
                <img
                  src={youngLadyDrinkingWater}
                  alt="Certified RO technician performing RO Filter Replacement in Hyderabad - Rainbow Aquafresh Systems"
                  width="500"
                  height="500"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="p-4 bg-blue-50/70 rounded-xl mt-3 flex items-center justify-between text-xs font-bold text-blue-900 border border-blue-100">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    <span>Certified Technician Visit</span>
                  </div>
                  <span className="text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md text-[11px]">Active in Hyderabad</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. COMPREHENSIVE INTRODUCTION SECTION (800–1200 WORDS) */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8" id="introduction">
          <div className="border-b border-slate-100 pb-6 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-blue-700 font-mono">COMPLETE WATER PURIFIER CARE GUIDE</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Why Timely RO Filter Replacement in Hyderabad is Essential for Your Family's Health
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              An authoritative overview of groundwater contamination in Telangana, RO filtration science, and maintenance protocols.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-6">
            <p className="text-base leading-relaxed">
              Drinking water quality across Greater Hyderabad presents a unique hydrological challenge. Whether your residential property receives water from municipal reservoirs like the Manjeera and Krishna pipelines or relies heavily on deep borewells and commercial water tankers, water quality varies drastically across localities. In rapidly expanding residential and commercial hubs such as Gachibowli, Hitec City, Kondapur, Kukatpally, Miyapur, Tellapur, Jubilee Hills, Secunderabad, LB Nagar, and Uppal, groundwater frequently exhibits Total Dissolved Solids (TDS) levels exceeding 500 mg/L to over 1,800 mg/L. High TDS is typically accompanied by elevated mineral hardness, dissolved heavy metals, nitrates, and fluoride content.
            </p>

            <p>
              To ensure that drinking water remains completely safe, palatable, and chemically balanced, thousands of households and businesses rely on Reverse Osmosis water purifiers. However, an RO purifier is only as effective as the physical and chemical condition of its filter cartridges. Over time, spun sediment pre-filters, activated carbon blocks, TFC Reverse Osmosis membranes, UV lamps, and post-carbon mineralizers become clogged with mud, rust particles, bio-film, chlorine residuals, and scale deposits. Scheduling timely <strong>RO Filter Replacement in Hyderabad</strong> with certified technicians is the single most important step in protecting your family from waterborne contaminants.
            </p>

            <div className="my-8 bg-blue-50/60 p-6 sm:p-8 rounded-2xl border border-blue-100 space-y-4">
              <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                Compliance with Official Drinking Water Safety Standards
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                According to official drinking water safety specifications defined by the{' '}
                <a
                  href="https://www.bis.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                >
                  Bureau of Indian Standards (BIS IS 10500:2012) <ExternalLink className="w-3 h-3" />
                </a>
                , the desirable limit for Total Dissolved Solids (TDS) in potable drinking water is 500 mg/L. Furthermore, international health frameworks published by the{' '}
                <a
                  href="https://www.who.int/news-room/fact-sheets/detail/drinking-water"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-bold underline hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                >
                  World Health Organization (WHO Drinking Water Guidelines) <ExternalLink className="w-3 h-3" />
                </a>
                 emphasize the imperative balance between stripping industrial toxic chemicals, micro-plastics, and biological pathogens, while retaining essential bio-available minerals such as calcium, magnesium, and potassium.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <Droplets className="w-5 h-5 text-blue-600" /> Guaranteed Safe Drinking Water & Taste Enhancement
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clogged or exhausted filters allow microscopic dissolved impurities, pesticides, and organic foul odors to pass into your drinking vessel. Replacing your water purifier cartridges restores 99.9% filtration efficiency, delivering sweet, odor-free, crystal-clear water every time you fill a glass.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" /> Extended Membrane Lifespan & Lower Power Bills
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The delicate 0.0001-micron RO membrane is the most expensive component in your purifier. Replacing low-cost sediment and pre-carbon filters on schedule shields the membrane from premature scaling and punctures, extending membrane life up to 24 months and preventing booster pump overload.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-emerald-600" /> Lower Long-Term Maintenance Costs
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ignoring a simple <strong>RO Filter Change Near Me</strong> prompt often causes secondary failures—such as choked solenoid valves, ruptured booster pump diaphragms, or burnt SMPS power adapters. Regular preventative <strong>RO Maintenance Hyderabad</strong> prevents costly sudden breakdowns.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                  <Clock className="w-5 h-5 text-purple-600" /> Fast Same-Day Doorstep Service Across Hyderabad
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  At Rainbow Aquafresh Systems, our mobile <strong>RO Technician Hyderabad</strong> team carries factory-sealed genuine spare parts for all major brands. Whether you need an emergency <strong>Water Purifier Filter Replacement</strong>, an <strong>RO Membrane Replacement Hyderabad</strong>, or full <strong>RO Service Hyderabad</strong>, we arrive within 2 hours.
                </p>
              </div>
            </div>

            {/* Internal Links Navigation Block */}
            <div className="pt-6 border-t border-slate-100">
              <p className="text-xs font-bold text-slate-800 mb-3 uppercase tracking-wider">Explore Related Rainbow Aquafresh Services & Solutions:</p>
              <div className="flex flex-wrap gap-2.5 text-xs font-medium">
                <a href="/" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-100 transition">🏠 Home Page</a>
                <a href="/ro-repair-hyderabad" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-100 transition">🔧 RO Service & Repair</a>
                <a href="/ro-amc-service" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-100 transition">🛡️ Annual Maintenance (AMC)</a>
                <a href="/commercial-ro-plants" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-100 transition">🏭 Commercial RO Plants</a>
                <a href="/products/" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-100 transition">💧 Domestic RO Products</a>
                <a href="/contact" className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-lg border border-blue-100 transition">📞 Contact Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHEN SHOULD RO FILTERS BE REPLACED? */}
        <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-8" id="replacement-schedule">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="bg-blue-500/20 text-sky-300 text-xs font-black uppercase px-3.5 py-1.5 rounded-full font-mono">REPLACEMENT TIMELINE</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              When Should Your RO Filters Be Replaced?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Recommended filter change intervals based on water consumption, hours of daily operation, and local TDS levels across Greater Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-4">
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 text-center space-y-3 flex flex-col justify-between hover:border-blue-500/50 transition">
              <div>
                <span className="bg-blue-500/20 text-blue-300 text-[10px] font-bold px-2.5 py-1 rounded-full font-mono uppercase">Stage 1</span>
                <h3 className="text-base font-extrabold text-white mt-2">Sediment Filter</h3>
                <p className="text-xs text-slate-400 mt-1">Traps sand, silt, mud, and rust particles.</p>
              </div>
              <div className="bg-blue-600/30 text-sky-200 text-xs font-bold py-2 rounded-xl border border-blue-500/30">
                Every 3 – 6 Months
              </div>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 text-center space-y-3 flex flex-col justify-between hover:border-blue-500/50 transition">
              <div>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full font-mono uppercase">Stage 2</span>
                <h3 className="text-base font-extrabold text-white mt-2">Pre Carbon Filter</h3>
                <p className="text-xs text-slate-400 mt-1">Absorbs chlorine, pesticides, and foul odors.</p>
              </div>
              <div className="bg-emerald-600/30 text-emerald-200 text-xs font-bold py-2 rounded-xl border border-emerald-500/30">
                Every 6 – 12 Months
              </div>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 text-center space-y-3 flex flex-col justify-between hover:border-blue-500/50 transition">
              <div>
                <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2.5 py-1 rounded-full font-mono uppercase">Stage 3</span>
                <h3 className="text-base font-extrabold text-white mt-2">RO Membrane</h3>
                <p className="text-xs text-slate-400 mt-1">Removes dissolved salts, heavy metals & micro-particles.</p>
              </div>
              <div className="bg-purple-600/30 text-purple-200 text-xs font-bold py-2 rounded-xl border border-purple-500/30">
                Every 18 – 24 Months
              </div>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 text-center space-y-3 flex flex-col justify-between hover:border-blue-500/50 transition">
              <div>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full font-mono uppercase">Stage 4</span>
                <h3 className="text-base font-extrabold text-white mt-2">UV Disinfection Lamp</h3>
                <p className="text-xs text-slate-400 mt-1">Sterilizes active bacteria, viruses & pathogens.</p>
              </div>
              <div className="bg-amber-600/30 text-amber-200 text-xs font-bold py-2 rounded-xl border border-amber-500/30">
                Every 12 Months
              </div>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80 text-center space-y-3 flex flex-col justify-between hover:border-blue-500/50 transition">
              <div>
                <span className="bg-rose-500/20 text-rose-300 text-[10px] font-bold px-2.5 py-1 rounded-full font-mono uppercase">Stage 5</span>
                <h3 className="text-base font-extrabold text-white mt-2">Post Carbon / Mineral</h3>
                <p className="text-xs text-slate-400 mt-1">Polishes water taste & infuses copper / essential minerals.</p>
              </div>
              <div className="bg-rose-600/30 text-rose-200 text-xs font-bold py-2 rounded-xl border border-rose-500/30">
                Every 12 Months
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 text-xs text-slate-300 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Important Water Quality Note:</strong> If your household groundwater source in Hyderabad has a TDS above 1,200 ppm or high iron/manganese content, pre-filters may require replacement every 3 months to safeguard the RO membrane from premature choking.
            </p>
          </div>
        </section>

        {/* 4. SIGNS YOUR RO NEEDS NEW FILTERS */}
        <section className="space-y-8" id="signs">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">TROUBLESHOOTING SYMPTOMS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              8 Clear Signs Your RO Purifier Needs New Filters
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              If your water purifier exhibits any of these warning signs, book an expert RO filter change immediately to prevent complete system failure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center font-bold">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">1. Slow Water Flow Rate</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If filling a 1-liter bottle takes twice as long as usual, sediment or carbon pores are clogged with suspended physical impurities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center font-bold">
                <ThumbsUp className="w-6 h-6 rotate-180" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">2. Unpleasant or Bitter Taste</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A sudden salty, bitter, or metallic taste indicates that the RO membrane is exhausted and allowing dissolved salts to slip through.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center font-bold">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">3. Foul Smell or Odor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Foul earthy or chlorine odors mean the activated carbon block has lost its chemical absorption capacity and requires urgent replacement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition">
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">4. High Digital TDS Level</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When output water TDS reads above 300 ppm on a digital TDS meter, your purifier is failing to filter dissolved heavy minerals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition">
              <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center font-bold">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">5. Continuous Water Leakage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Water dripping from the bottom housing or elbow push-fits signals cracked filter casings or loose seal gaskets due to backpressure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
                <Volume2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">6. Unusual Pump Noise</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A loud vibrating or screeching sound from the 100 GPD booster pump happens when choked filters restrict inlet water intake.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center font-bold">
                <RotateCcw className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">7. Low Storage Tank Filling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your 8-liter or 10-liter storage tank takes hours to fill or stays half-empty, internal filter membranes are heavily calcified.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3 hover:border-blue-300 transition">
              <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center font-bold">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900">8. Frequent Electrical Tripping</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Over-pressurized choked filters force the booster pump to draw excessive current, causing the SMPS adapter to trip repeatedly.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FILTER TYPES EXPLAINED */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8" id="filter-types">
          <div className="border-b border-slate-100 pb-4 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-700 font-mono">TECHNICAL FILTRATION SCIENCE</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Types of RO Water Purifier Filters & Their Functions
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Learn how each stage in a 5-stage domestic RO + UV + UF + Copper Alkaline purifier functions to clean your drinking water.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="w-7 h-7 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs">1</span>
                  Spun Sediment Pre-Filter (5 Micron)
                </h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full font-mono">Change: Every 3–6 Months</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Purpose & Benefits:</strong> Installed in the outer transparent housing on your wall, the spun polypropylene sediment filter acts as the primary defense mechanism. It strainers physical particles larger than 5 microns—including mud, sand, rust flaking from overhead water tanks, and suspended silt. Regular replacement prevents pre-filter clogging from restricting water pressure to the internal purifier unit.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="w-7 h-7 bg-emerald-600 text-white rounded-lg flex items-center justify-center text-xs">2</span>
                  Activated Pre-Carbon Block Filter
                </h3>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full font-mono">Change: Every 6–12 Months</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Purpose & Benefits:</strong> Manufactured from high-grade coconut shell activated carbon, this filter possesses immense microporous surface area. It adsorbs dissolved organic compounds, volatile pesticides, industrial chemicals, and residual municipal chlorine. Eliminating chlorine is critical because raw chlorine chemical contact chemically degrades and destroys thin-film composite (TFC) RO membranes.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="w-7 h-7 bg-purple-600 text-white rounded-lg flex items-center justify-center text-xs">3</span>
                  High-Rejection Reverse Osmosis (RO) Membrane (0.0001 Micron)
                </h3>
                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-3 py-1 rounded-full font-mono">Change: Every 18–24 Months</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Purpose & Benefits:</strong> The core filtration engine of the system. Under high pressure delivered by the booster pump, water molecules are forced through semi-permeable spiral membrane layers with micro-pores as small as 0.0001 microns. It rejects up to 98% of Total Dissolved Solids (TDS), heavy metals (lead, arsenic, mercury, fluoride), brackish salts, and micro-plastics.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="w-7 h-7 bg-amber-600 text-white rounded-lg flex items-center justify-center text-xs">4</span>
                  UV Sterilization Chamber (Ultra-Violet Disinfection)
                </h3>
                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full font-mono">Change: Every 12 Months</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Purpose & Benefits:</strong> Encased in a high-purity stainless steel chamber, the 11W UV lamp emits germicidal ultra-violet light at a wavelength of 254 nm. It penetrates the cell walls of biological pathogens—inactivating 99.99% of bacteria, viruses, cysts, and waterborne microbial parasites without adding harmful chemical disinfectants.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="w-7 h-7 bg-rose-600 text-white rounded-lg flex items-center justify-center text-xs">5</span>
                  Post-Carbon & Active Copper Alkaline Mineralizer
                </h3>
                <span className="bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full font-mono">Change: Every 12 Months</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Purpose & Benefits:</strong> The final polishing stage. It eliminates any lingering tank odors, optimizes water pH to an alkaline 7.5–8.5 level, and infuses essential active copper ions (Cu2+), calcium, and magnesium into the purified water—supporting immunity, digestive health, and bone strength.
              </p>
            </div>
          </div>
        </section>

        {/* 6. WHY CHOOSE RAINBOW AQUAFRESH SYSTEMS? */}
        <section className="bg-gradient-to-r from-blue-900 to-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-8" id="why-choose-us">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="bg-blue-500/20 text-sky-300 text-xs font-bold px-3 py-1 rounded-full font-mono uppercase">THE RAINBOW ADVANTAGE</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Why Choose Rainbow Aquafresh Systems for RO Filter Replacement?
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm">
              Hyderabad’s most trusted water purifier service provider with 20+ years of technical excellence and thousands of satisfied families.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700 space-y-2">
              <Award className="w-8 h-8 text-blue-400" />
              <h3 className="text-lg font-bold text-white">20+ Years Experience</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Deep expertise in Hyderabad groundwater chemistry, TDS dynamics, and multi-stage RO filtration mechanics.
              </p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700 space-y-2">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Certified Technicians</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our background-verified field engineers are rigorously trained on all domestic and commercial RO models.
              </p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700 space-y-2">
              <Sparkles className="w-8 h-8 text-sky-400" />
              <h3 className="text-lg font-bold text-white">100% Original Spare Parts</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We install factory-sealed, food-grade ABS filter housings and high-rejection TFC membranes with zero compromise.
              </p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700 space-y-2">
              <Clock className="w-8 h-8 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Same-Day Doorstep Service</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Rapid 2-hour technician arrival across all Greater Hyderabad zones with fully equipped mobile service kits.
              </p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700 space-y-2">
              <Tag className="w-8 h-8 text-rose-400" />
              <h3 className="text-lg font-bold text-white">Affordable & Upfront Pricing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Transparent estimates before work begins with zero hidden service charges or unexpected technician bills.
              </p>
            </div>

            <div className="bg-slate-800/70 p-6 rounded-2xl border border-slate-700 space-y-2">
              <ThumbsUp className="w-8 h-8 text-purple-400" />
              <h3 className="text-lg font-bold text-white">1300+ Happy Customers</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Consistently rated 5-stars for quick response, polite behavior, digital TDS testing, and clean service execution.
              </p>
            </div>
          </div>
        </section>

        {/* 7. BRANDS WE SERVICE */}
        <section className="space-y-6" id="brands">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">MULTI-BRAND COMPATIBILITY</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              RO Water Purifier Brands We Replace Filters For
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              We carry specialized replacement cartridges, membranes, and fittings for all leading domestic and commercial water purifiers.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Kent RO", "Aquaguard", "Aquafresh", "HUL Pureit", "Livpure", "A.O. Smith", "Blue Star", "LG Purifier", "V-Guard", "Havells", "Purosis", "All Assembled RO"].map((brand, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 text-center font-bold text-xs text-slate-800 shadow-2xs hover:border-blue-500 hover:text-blue-600 transition flex items-center justify-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 8. STEP-BY-STEP SERVICE PROCESS */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8" id="process">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-700 font-mono">6-STEP SERVICE EXECUTION</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our 6-Step Professional RO Filter Replacement Process
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Every home visit follows a standardized technical protocol to ensure leak-free performance and optimal mineral output.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm mb-3">1</span>
              <h3 className="text-base font-extrabold text-slate-900">Step 1: Book Service</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Schedule your appointment online or call +91 8885556965 to choose a convenient 2-hour arrival window anywhere in Hyderabad.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm mb-3">2</span>
              <h3 className="text-base font-extrabold text-slate-900">Step 2: Technician Arrival</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our certified technician arrives at your doorstep on time, equipped with background verification badges and sanitization protocols.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm mb-3">3</span>
              <h3 className="text-base font-extrabold text-slate-900">Step 3: Diagnostic Inspection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We test raw inlet TDS, output drinking TDS, booster pump pressure, float valve switch, and electrical SMPS adapter voltage.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm mb-3">4</span>
              <h3 className="text-base font-extrabold text-slate-900">Step 4: Genuine Filter Fitting</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We unbox factory-sealed food-grade sediment filters, activated carbon cartridges, and RO membranes right in front of you.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm mb-3">5</span>
              <h3 className="text-base font-extrabold text-slate-900">Step 5: Digital TDS Calibration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Using a digital TDS meter, we calibrate the TDS controller to set your drinking water within the optimal mineral range (50–150 ppm).
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 relative space-y-2">
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold flex items-center justify-center text-sm mb-3">6</span>
              <h3 className="text-base font-extrabold text-slate-900">Step 6: Final Quality Check</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We run a 10-minute leak check, sanitize the storage tank, issue your official service bill, and hand over the warranty card.
              </p>
            </div>
          </div>
        </section>

        {/* 9. PHOTO GALLERY (10 REAL SERVICE / FILTER PHOTOS) */}
        <section className="space-y-6" id="gallery">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">REAL FIELD SERVICE SHOWCASE</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              RO Filter Replacement & Servicing Photo Gallery
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Real images of our technicians installing genuine spare parts, replacing clogged filters, and servicing purifiers across Hyderabad.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs group overflow-hidden">
              <img
                src={dolphinReal}
                alt="Genuine RO Filter Replacement for Dolphin Purifier Model in Hyderabad"
                width="300"
                height="300"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-[11px] font-bold text-slate-700 mt-2 text-center truncate">Dolphin RO Filter Change</p>
            </div>

            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs group overflow-hidden">
              <img
                src={aquagrandReal}
                alt="Aquagrand Water Purifier Filter & Membrane Replacement Service Hyderabad"
                width="300"
                height="300"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-[11px] font-bold text-slate-700 mt-2 text-center truncate">Aquagrand Filter Service</p>
            </div>

            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs group overflow-hidden">
              <img
                src={copperPearl}
                alt="Active Copper Alkaline Cartridge Replacement in Hyderabad RO Purifier"
                width="300"
                height="300"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-[11px] font-bold text-slate-700 mt-2 text-center truncate">Copper Alkaline Cartridge</p>
            </div>

            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs group overflow-hidden">
              <img
                src={aiquaBlack}
                alt="AIQUA Black RO Membrane Replacement and TDS Balancing Hyderabad"
                width="300"
                height="300"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-[11px] font-bold text-slate-700 mt-2 text-center truncate">TDS Controller Calibration</p>
            </div>

            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs group overflow-hidden">
              <img
                src={purosisPlus}
                alt="Purosis Plus RO Purifier Filter Replacement in Gachibowli Hyderabad"
                width="300"
                height="300"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-[11px] font-bold text-slate-700 mt-2 text-center truncate">Multi-Stage Filter Set</p>
            </div>

            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs group overflow-hidden">
              <img
                src={lxTwo}
                alt="LX Two Domestic RO Water Purifier Servicing and Leak Repair Hyderabad"
                width="300"
                height="300"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-[11px] font-bold text-slate-700 mt-2 text-center truncate">Storage Tank Sanitization</p>
            </div>

            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs group overflow-hidden">
              <img
                src={comm50}
                alt="50 LPH Commercial RO Plant Filter Cartridge Change in Hyderabad Restaurant"
                width="300"
                height="300"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-[11px] font-bold text-slate-700 mt-2 text-center truncate">Commercial 50 LPH Filter</p>
            </div>

            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs group overflow-hidden">
              <img
                src={comm500}
                alt="500 LPH Industrial RO Plant Membrane Replacement Secunderabad Hyderabad"
                width="300"
                height="300"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-[11px] font-bold text-slate-700 mt-2 text-center truncate">500 LPH RO Membrane</p>
            </div>

            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs group overflow-hidden">
              <img
                src={bannerImg}
                alt="Rainbow Aquafresh Mobile Service Van with Spares in Malakpet Hyderabad"
                width="300"
                height="300"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-[11px] font-bold text-slate-700 mt-2 text-center truncate">Mobile Service Fleet</p>
            </div>

            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs group overflow-hidden">
              <img
                src={youngLadyDrinkingWater}
                alt="Satisfied Customer Drinking Purified RO Water After Filter Replacement Hyderabad"
                width="300"
                height="300"
                loading="lazy"
                className="w-full h-40 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
              />
              <p className="text-[11px] font-bold text-slate-700 mt-2 text-center truncate">Crystal Pure Water</p>
            </div>
          </div>
        </section>

        {/* 10. CUSTOMER REVIEWS (6 REVIEWS) */}
        <section className="space-y-6" id="reviews">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">VERIFIED REVIEWS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What Our Hyderabad Customers Say
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Real feedback from homeowners, apartment residents, and offices across Hyderabad who experienced our same-day RO filter replacement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "I called Rainbow Aquafresh for RO filter replacement at my flat in Gachibowli. Technician reached within 90 minutes with genuine Filmtec membrane and sediment filters. Water taste improved instantly and TDS was adjusted to 90 ppm. Highly recommended!"
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-900">Srinivas Rao</span>
                <span className="text-slate-400 font-medium">Gachibowli, Hyderabad</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "My Kent RO was making heavy vibrating noise and water flow became very slow. Rainbow Aquafresh technician inspected and changed the choked sediment and pre-carbon filters at reasonable rates. Very polite technician and honest work."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-900">Priya Sharma</span>
                <span className="text-slate-400 font-medium">Kukatpally, Hyderabad</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "Excellent service! They unboxed original factory-sealed filter cartridges right in front of me and explained every stage. They also sanitized our storage tank for free. Best RO filter change service near me in LB Nagar."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-900">Md. Rizwan</span>
                <span className="text-slate-400 font-medium">LB Nagar, Hyderabad</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "We get high TDS borewell water in Jubilee Hills. Rainbow Aquafresh replaced our Aquaguard membrane with a high-rejection 80 GPD membrane and added an active copper cartridge. Water feels so fresh now!"
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-900">K. Venkat Reddy</span>
                <span className="text-slate-400 font-medium">Jubilee Hills, Hyderabad</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "Prompt service in Secunderabad. Booking on WhatsApp took 1 minute. The technician tested our TDS with a digital meter before and after filter replacement. Very transparent pricing with no extra service charge."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-900">Anitha Fernandez</span>
                <span className="text-slate-400 font-medium">Secunderabad</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                "Got my Livpure RO filters changed by Rainbow Aquafresh. Very professional service, proper invoice provided, and 6-month warranty on filters. Great company to deal with for water purifier maintenance."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-extrabold text-slate-900">Rajesh Agarwal</span>
                <span className="text-slate-400 font-medium">Miyapur, Hyderabad</span>
              </div>
            </div>
          </div>
        </section>

        {/* 11. FAQ ACCORDION (15 SEO-RICH FAQS) */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-8" id="faq">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-blue-700 font-mono">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              RO Filter Replacement FAQs - Everything You Need to Know
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm">
              Answers to common queries about water purifier filter replacement costs, schedules, genuine parts, and home service in Hyderabad.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-colors">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 12. CALL TO ACTION SECTION */}
        <section className="bg-gradient-to-r from-blue-600 via-sky-600 to-blue-700 text-white p-8 sm:p-12 rounded-3xl shadow-xl text-center space-y-6 relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-3 relative z-10">
            <span className="bg-white/20 text-white text-xs font-black uppercase px-3.5 py-1.5 rounded-full font-mono">SAME-DAY HOME SERVICE</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Need RO Filter Replacement Today in Hyderabad?
            </h2>
            <p className="text-sky-100 text-sm leading-relaxed">
              Call Rainbow Aquafresh Systems now for instant 2-hour doorstep service, genuine spare parts, and digital TDS calibration across all Hyderabad localities!
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href={`tel:+91${contactPhone1}`}
                className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-slate-100 font-extrabold px-8 py-4 rounded-xl shadow-lg transition text-sm cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-blue-800" />
                <span>Call {contactPhone1}</span>
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hi Rainbow Aquafresh Systems,\n\nI need urgent RO Filter Replacement at my home in Hyderabad."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 text-white hover:bg-emerald-600 font-extrabold px-8 py-4 rounded-xl shadow-lg transition text-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp {contactPhone1}</span>
              </a>
            </div>

            <p className="text-xs text-sky-200 font-medium pt-2">
              📍 Service Available Across Malakpet, Dilsukhnagar, LB Nagar, Jubilee Hills, Gachibowli, Kukatpally & Secunderabad
            </p>
          </div>
        </section>

        {/* 13. CONTACT DETAILS */}
        <section className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8" id="contact">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-extrabold text-base">
              <Building2 className="w-5 h-5" />
              <span>Head Office Address</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              <strong>Rainbow Aquafresh Systems</strong><br />
              16-10-27/109, MCH Colony, Malakpet,<br />
              Hyderabad, Telangana – 500036
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-extrabold text-base">
              <Phone className="w-5 h-5" />
              <span>Phone Helplines</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Mobile 1: <a href={`tel:+91${contactPhone1}`} className="text-blue-600 font-bold hover:underline">+91 {contactPhone1}</a><br />
              Mobile 2: <a href={`tel:+91${contactPhone2}`} className="text-blue-600 font-bold hover:underline">+91 {contactPhone2}</a><br />
              WhatsApp: <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer" className="text-emerald-600 font-bold hover:underline">+91 {contactPhone1}</a>
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-600 font-extrabold text-base">
              <Calendar className="w-5 h-5" />
              <span>Service Hours & Website</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Working Hours: Monday – Sunday (8:00 AM – 9:00 PM)<br />
              Official Website: <a href="https://www.rainbowafs.com" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">www.rainbowafs.com</a><br />
              Emergency Response: 2 Hours Doorstep
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default FilterReplacementPage;
