import React, { useState } from 'react';
import { 
  Building, 
  ShieldCheck, 
  Phone, 
  ArrowRight, 
  Wrench, 
  Droplets, 
  CheckCircle, 
  Check, 
  PhoneCall, 
  MessageSquare, 
  FileText, 
  Sparkles,
  ChevronDown,
  Gauge,
  Layers,
  Factory
} from 'lucide-react';
import { COMMERCIAL_PLANTS_DATA, CommercialPlantData } from '../data/commercialPagesData';

interface CommercialPlantDetailPageProps {
  plantKey: string;
  onOpenBooking?: () => void;
}

export const CommercialPlantDetailPage: React.FC<CommercialPlantDetailPageProps> = ({ plantKey, onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plant: CommercialPlantData = COMMERCIAL_PLANTS_DATA[plantKey] || {
    slug: `commercial-ro-plant-${plantKey}-hyderabad`,
    title: `${plantKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} in Hyderabad`,
    shortTitle: plantKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    capacityRange: "50 LPH to 2000 LPH",
    badge: "Turnkey Skid-Mounted Systems",
    description: "Rainbow Aquafresh Systems engineers, manufactures, and installs high-capacity commercial reverse osmosis plants across Hyderabad.",
    applications: [
      "Residential Gated Communities & Apartments",
      "Hospitals & Healthcare Facilities",
      "Schools, Colleges & Hostels",
      "Hotels, Restaurants & Commercial Kitchens"
    ],
    keySpecs: [
      { label: "Capacities Available", value: "50 LPH, 100 LPH, 250 LPH, 500 LPH, 1000 LPH, 2000 LPH" },
      { label: "High Pressure Pump", value: "CRI / CNP Stainless Steel Vertical Multistage Pump" },
      { label: "Membranes", value: "Dow Filmtec / Hydranautics 4040 / 8040 Industrial Elements" }
    ],
    engineeringHighlights: [
      "Customized design based on input water TDS and hardness lab reports",
      "Antiscalant chemical dosing to prolong membrane lifespan",
      "Microprocessor control panel with auto-flushing & dry run protection"
    ],
    faqs: [
      { question: "What is the typical lifespan of commercial RO membranes?", answer: "With regular antiscalant dosing and sand/carbon media backwashing, commercial membranes last 2 to 3 years." }
    ]
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans antialiased">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-blue-50 py-3 text-xs font-semibold text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span className="text-slate-300">/</span>
          <a href="/commercial-ro-plants" className="hover:text-blue-600 transition-colors">Commercial RO Plants</a>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600 font-bold">{plant.shortTitle}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Factory className="w-3.5 h-3.5" /> {plant.badge}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
                {plant.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                {plant.description}
              </p>

              {/* Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Capacity Range</div>
                  <div className="text-base sm:text-lg font-black text-sky-400 mt-0.5">{plant.capacityRange}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Skid Material</div>
                  <div className="text-base sm:text-lg font-black text-emerald-400 mt-0.5">SS-304 / FRP</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-xs text-slate-400 font-medium">Warranty</div>
                  <div className="text-base sm:text-lg font-black text-amber-400 mt-0.5">1 Year Full Warranty</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="tel:+918885556965"
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-sm group"
                >
                  <PhoneCall className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Commercial Hotline: +91 8885556965
                </a>
                <a
                  href={`https://wa.me/918885556965?text=Hello%20Rainbow%20Aquafresh,%20I%20need%20a%20quotation%20for%20${encodeURIComponent(plant.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Request WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Quick Specs Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black">
                    <Gauge className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Engineering Specs</h2>
                    <p className="text-xs text-slate-500">Commercial Standard Hardware</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs mb-6">
                  {plant.keySpecs.map((spec, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="font-bold text-slate-500 block uppercase tracking-wider text-[10px]">{spec.label}</span>
                      <span className="font-bold text-slate-800 text-xs mt-0.5 block">{spec.value}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
                >
                  Schedule Site Inspection <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Target Sectors
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
              Ideal Applications & Use Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plant.applications.map((app, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1">{app}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Delivers high-volume purified water at lowest per-liter operational costs.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Highlights */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Engineering Advantages
            </h2>
            <p className="text-xs text-slate-500 mt-1">Built to endure challenging groundwater hardness conditions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {plant.engineeringHighlights.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="space-y-3">
            {plant.faqs.map((faq, idx) => (
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

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Get a Customized Commercial RO Proposal
          </h2>
          <p className="text-sm text-blue-100 max-w-2xl mx-auto mb-6">
            Our water engineers provide free raw water testing and sizing proposals within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918885556965"
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl shadow-md text-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call +91 8885556965
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
