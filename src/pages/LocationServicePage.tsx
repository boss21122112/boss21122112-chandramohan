import React, { useState } from 'react';
import { 
  CheckCircle, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  Wrench, 
  Zap, 
  Droplets, 
  Clock, 
  MapPin, 
  Star, 
  Award, 
  ChevronDown, 
  Building, 
  PhoneCall, 
  MessageSquare, 
  HelpCircle, 
  Sparkles,
  Check
} from 'lucide-react';
import { HYDERABAD_LOCATIONS_DATA, LocationData } from '../data/locationPagesData';

interface LocationServicePageProps {
  locationKey: string;
  onOpenBooking?: () => void;
}

export const LocationServicePage: React.FC<LocationServicePageProps> = ({ locationKey, onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const loc: LocationData = HYDERABAD_LOCATIONS_DATA[locationKey] || {
    slug: `ro-service-${locationKey}-hyderabad`,
    name: locationKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    pincode: "500001",
    landmarks: ["Main Road", "Central Junction", "Residential Colonies"],
    tdsRange: "900 - 2,200 PPM",
    waterSource: "Deep Borewells and Municipal Pipeline Supply",
    commonIssues: ["High mineral hardness scaling", "Choked sediment pre-filter", "Booster pump noise"],
    nearbyAreas: [
      { name: "Kothapet", slug: "/ro-water-purifier-service-kothapet-hyderabad" },
      { name: "Dilsukhnagar", slug: "/ro-service-dilsukhnagar-hyderabad" },
      { name: "LB Nagar", slug: "/ro-service-lb-nagar-hyderabad" },
      { name: "Secunderabad", slug: "/ro-service-secunderabad" }
    ],
    faqs: [
      { question: `How fast can a technician reach my home in ${locationKey}?`, answer: `Our mobile technicians reach any address within 60 to 90 minutes of booking.` },
      { question: `Do you service all RO purifier brands?`, answer: `Yes, we service Kent, Aquaguard, Pureit, Livpure, AO Smith, and all domestic/commercial models.` }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans antialiased">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-blue-50 py-3 text-xs font-semibold text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span className="text-slate-300">/</span>
          <a href="/ro-service-hyderabad" className="hover:text-blue-600 transition-colors">RO Service Hyderabad</a>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600 font-bold">{loc.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-950 to-slate-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6">
                <MapPin className="w-3.5 h-3.5" /> Doorstep RO Water Purifier Service in {loc.name}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
                RO Water Purifier Service & Repair in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">{loc.name}</span>, Hyderabad
              </h1>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                Expert doorstep RO repair, genuine filter replacements, new installation, and AMC for all major brands across <strong className="text-white">{loc.name} (PIN: {loc.pincode})</strong>. Certified technicians at your doorstep within 90 minutes.
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-black text-sky-400">90 Mins</div>
                  <div className="text-[11px] text-slate-300 font-medium">Doorstep Arrival</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">₹299</div>
                  <div className="text-[11px] text-slate-300 font-medium">Service Charge</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 text-center">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">100%</div>
                  <div className="text-[11px] text-slate-300 font-medium">Genuine Spares</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="tel:+918885556965"
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-sm group"
                >
                  <PhoneCall className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Call Now: +91 8885556965
                </a>
                <a
                  href="https://wa.me/918885556965?text=Hello%20Rainbow%20Aquafresh,%20I%20need%20RO%20service%20in%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Quick Booking
                </a>
              </div>
            </div>

            {/* Quick Booking Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100 relative">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Book {loc.name} Service</h2>
                    <p className="text-xs text-slate-500">Same-Day Doorstep Service</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free Input Water TDS & Hardness Testing</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Multi-Brand Expert Technicians (Kent, Aquaguard, Pureit)</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Upfront Transparent Estimates — No Hidden Costs</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Up to 12 Months Warranty on Replaced Spares</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
                  >
                    Schedule Service Call <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2.5">
                    Operating Hours: Mon–Sun 8:00 AM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Local Water Quality Profile */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Local Water Analysis
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
              Drinking Water Profile in {loc.name}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Water quality across {loc.name} varies between deep groundwater borewells and municipal lines, requiring specialized multi-stage purification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center font-bold mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Average Raw TDS</h3>
              <p className="text-2xl font-black text-blue-600 mb-2">{loc.tdsRange}</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Raw groundwater in {loc.name} carries dissolved calcium, magnesium carbonates, and salts that must be reduced to 80-120 PPM.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Primary Water Source</h3>
              <p className="text-sm font-bold text-slate-800 mb-2">{loc.waterSource}</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                We configure sediment pre-filters and high-pressure TFC membranes tailored specifically for this water blend.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Recommended Tech</h3>
              <p className="text-sm font-bold text-slate-800 mb-2">RO + UV + UF + Alkaline + Copper</p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Multi-stage purification guarantees 100% microbial safety and restores natural sweetness with essential minerals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Provided in this Area */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Complete RO Services in {loc.name}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From minor faucet leaks to complete commercial RO plant installations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">RO Repair & Service</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Fix slow flow, continuous wastewater drain, booster pump humming noise, and dead SMPS power adapters.
              </p>
              <a href="/ro-repair-hyderabad" className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Filter & Membrane</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Genuine spun sediment pre-filters, carbon blocks, Filmtec TFC membranes, and UV germicidal lamps.
              </p>
              <a href="/ro-filter-replacement-hyderabad" className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">New RO Installation</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Clean wall mounting, uninstallation, relocation shifting, and diverter valve plumbing at affordable rates.
              </p>
              <a href="/ro-installation-hyderabad" className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">Commercial RO Plants</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                50 to 2000 LPH plants for gated communities, hostels, schools, hospitals, and corporate offices.
              </p>
              <a href="/commercial-ro-plants" className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmarks & Coverage */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-black text-slate-900 mb-4">
            Key Landmarks Covered in {loc.name}
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {loc.landmarks.map((landmark, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200">
                📍 {landmark}
              </span>
            ))}
          </div>

          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
            Nearby Service Hubs in Hyderabad:
          </h3>
          <div className="flex flex-wrap gap-3">
            {loc.nearbyAreas.map((area, idx) => (
              <a
                key={idx}
                href={area.slug}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50/80 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors"
              >
                RO Service {area.name} <ArrowRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions in {loc.name}
            </h2>
            <p className="text-xs text-slate-500 mt-1">Get answers about doorstep service, pricing, and warranty.</p>
          </div>

          <div className="space-y-3">
            {loc.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-4 text-left font-bold text-sm text-slate-800 flex items-center justify-between gap-4 hover:text-blue-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Need Fast RO Service in {loc.name}?
          </h2>
          <p className="text-sm text-blue-100 max-w-2xl mx-auto mb-6">
            Call our helpline now for guaranteed same-day doorstep inspection by certified water purification engineers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918885556965"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl shadow-md text-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call +91 8885556965
            </a>
            <a
              href="https://wa.me/918885556965"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-6 py-3.5 rounded-xl shadow-md text-sm transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
