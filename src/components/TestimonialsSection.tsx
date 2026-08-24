import React from 'react';
import { Star, ShieldCheck, MapPin, MessageSquare, Quote } from 'lucide-react';
import { GOOGLE_REVIEWS, CONTACT_INFO } from '../data';

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "Verified Customer Reviews Across Hyderabad",
  subtitle = "Over 480+ local homeowners and business owners trust Rainbow Aquafresh Systems for honest pricing, genuine spares, and rapid doorstep service.",
  className = ""
}) => {
  return (
    <section className={`py-12 bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> 4.9 ★ Google Rated Local Water Purifier Experts
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl flex flex-col justify-between hover:border-blue-500/50 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold px-2 py-0.5 rounded-full">
                    {rev.source}
                  </span>
                </div>

                <Quote className="w-6 h-6 text-slate-600 mb-2 group-hover:text-blue-400 transition" />
                <p className="text-xs text-slate-300 leading-relaxed italic mb-4">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-white text-xs flex items-center gap-1">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] text-slate-400">{rev.date}</span>
                </div>
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-10 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-500/30 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-extrabold text-white text-base sm:text-lg">
              Experience the Rainbow Aquafresh Difference in Your Area
            </h3>
            <p className="text-slate-300 text-xs mt-0.5">
              Serving Malakpet, Kothapet, Dilsukhnagar, Madhapur, Kukatpally, Gachibowli & all Greater Hyderabad.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.rawPhones[0]}`}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg transition"
            >
              Call +91 8885556965
            </a>
            <a
              href={`https://wa.me/918885556965?text=${encodeURIComponent('Hi Rainbow Aquafresh Systems, I would like to book RO service for my location.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg transition flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Chat
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
