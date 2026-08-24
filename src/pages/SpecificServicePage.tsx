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
  Star, 
  Award, 
  ChevronDown, 
  PhoneCall, 
  MessageSquare, 
  Sparkles,
  AlertTriangle,
  FileCheck
} from 'lucide-react';
import { SPECIALIZED_SERVICES_DATA, ServiceDetailData } from '../data/servicePagesData';

interface SpecificServicePageProps {
  serviceKey: string;
  onOpenBooking?: () => void;
}

export const SpecificServicePage: React.FC<SpecificServicePageProps> = ({ serviceKey, onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const srv: ServiceDetailData = SPECIALIZED_SERVICES_DATA[serviceKey] || {
    slug: `ro-${serviceKey}-hyderabad`,
    title: `${serviceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} in Hyderabad`,
    shortTitle: serviceKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    category: "component-repair",
    badge: "100% Genuine Spare Parts",
    description: "Professional doorstep RO water purifier repair, genuine filter replacements, and technical troubleshooting across Hyderabad.",
    symptoms: [
      "Purified water tasting strange or salty",
      "Slow water filtration flow into tank",
      "Purifier leaking from internal joints",
      "Alarm beeping or warning light on panel"
    ],
    serviceInclusions: [
      "Comprehensive multi-point health checkup",
      "Digital raw vs pure TDS testing",
      "Original spare parts replacement with warranty",
      "Sanitization and final pressure calibration"
    ],
    pricingRange: "₹299 Inspection Fee | Transparent Spare Costs",
    warranty: "6 to 12 Months Replacement Warranty",
    faqs: [
      { question: "How soon can a technician attend to this service?", answer: "Our certified technicians reach your doorstep within 60 to 90 minutes anywhere in Hyderabad." }
    ],
    relatedServices: [
      { name: "RO Repair Service", slug: "/ro-repair-hyderabad" },
      { name: "Filter Replacement", slug: "/ro-filter-replacement-hyderabad" },
      { name: "RO AMC Plans", slug: "/ro-amc-service" }
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
          <a href="/ro-service-hyderabad" className="hover:text-blue-600 transition-colors">Services</a>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600 font-bold">{srv.shortTitle}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white py-16 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" /> {srv.badge}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6">
                {srv.title}
              </h1>
              <p className="text-base sm:text-lg text-slate-300 mb-8 leading-relaxed">
                {srv.description}
              </p>

              {/* Price & Warranty Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Estimated Pricing</div>
                  <div className="text-base sm:text-lg font-black text-emerald-400 mt-0.5">{srv.pricingRange}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                  <div className="text-xs text-slate-400 font-medium">Warranty on Parts</div>
                  <div className="text-base sm:text-lg font-black text-amber-400 mt-0.5">{srv.warranty}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                  <div className="text-xs text-slate-400 font-medium">Response SLA</div>
                  <div className="text-base sm:text-lg font-black text-sky-400 mt-0.5">60-90 Mins</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="tel:+918885556965"
                  className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition-all text-sm group"
                >
                  <PhoneCall className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Call Technician: +91 8885556965
                </a>
                <a
                  href={`https://wa.me/918885556965?text=Hello%20Rainbow%20Aquafresh,%20I%20need%20${encodeURIComponent(srv.shortTitle)}%20in%20Hyderabad`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Book on WhatsApp
                </a>
              </div>
            </div>

            {/* Inclusions Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-black">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">What's Included</h2>
                    <p className="text-xs text-slate-500">Standard Service Protocol</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs font-semibold text-slate-700 mb-6">
                  {srv.serviceInclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm flex items-center justify-center gap-2"
                >
                  Schedule Doorstep Service <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Warning Symptoms Section */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
              Troubleshooting Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
              Common Symptoms Indicating Need for {srv.shortTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {srv.symptoms.map((symptom, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/70 hover:border-amber-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-4">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Issue #{idx + 1}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{symptom}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-500 mt-1">Clear answers regarding warranty, parts, and scheduling.</p>
          </div>

          <div className="space-y-3 mb-10">
            {srv.faqs.map((faq, idx) => (
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

          {/* Related Services */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-600 mb-3">
              Explore Related Water Purifier Services:
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {srv.relatedServices.map((rel, idx) => (
                <a
                  key={idx}
                  href={rel.slug}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50/80 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors"
                >
                  {rel.name} <ArrowRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Book {srv.shortTitle} Today
          </h2>
          <p className="text-sm text-blue-100 max-w-2xl mx-auto mb-6">
            Get instant doorstep service anywhere across Hyderabad with 100% genuine spare parts.
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
