import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost, CONTACT_INFO } from '../data';
import { BookOpen, Clock, Tag, ChevronRight, ArrowLeft, Phone, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { LeadForm } from '../components/LeadForm';

export const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">

        {selectedPost ? (
          /* Single Blog Post Reader View */
          <div className="space-y-8">
            <button
              onClick={() => {
                setSelectedPost(null);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Water Guides
            </button>

            <article className="bg-white p-6 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
              <div className="space-y-3 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="bg-blue-100 text-blue-700 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {selectedPost.category}
                  </span>
                  <span className="text-slate-400 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {selectedPost.readTime}
                  </span>
                  <span className="text-slate-400 font-medium">• {selectedPost.date}</span>
                </div>

                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  {selectedPost.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                  {selectedPost.excerpt}
                </p>
              </div>

              {/* Body Content */}
              <div 
                className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-xl prose-h2:sm:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-lg prose-h3:mt-6 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: selectedPost.contentHtml }}
              />

              {/* Author / Verified Disclaimer */}
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shrink-0">
                    RA
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Published by Rainbow Aquafresh Systems Technical Desk</h4>
                    <p className="text-xs text-slate-600">Over 20+ years of hands-on water purification & TDS testing expertise in Hyderabad.</p>
                  </div>
                </div>

                <a
                  href={`tel:${CONTACT_INFO.rawPhones[0]}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md transition shrink-0 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Call +91 8885556965
                </a>
              </div>
            </article>

            {/* Embedded Lead Form below Post */}
            <div className="max-w-3xl mx-auto">
              <LeadForm 
                title="Have Questions About Your RO Water Purifier?"
                subtitle="Speak with our chief technician in Malakpet for personalized water testing or service advice."
              />
            </div>
          </div>
        ) : (
          /* Main Blog List View */
          <>
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-blue-900/50 shadow-2xl text-center max-w-4xl mx-auto space-y-4">
              <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider inline-block border border-blue-500/30">
                <BookOpen className="w-3.5 h-3.5 inline mr-1" /> Water Care & RO Knowledge Hub
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Hyderabad RO Water Purifier Buyer & Service Guides
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                Expert advice on water TDS levels, RO membrane replacement, borewell hardness treatment, and picking the right purification system for your Hyderabad neighborhood.
              </p>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {BLOG_POSTS.map((post) => (
                <div
                  key={post.slug}
                  onClick={() => {
                    setSelectedPost(post);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between hover:border-blue-500/50"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="bg-blue-50 text-blue-700 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                        {post.category}
                      </span>
                      <span className="text-slate-400 font-medium flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-medium">{post.date}</span>
                    <span className="text-blue-600 font-extrabold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                      Read Full Article <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Lead Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Free Water Quality Analysis</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  Unsure About Your Home's Water TDS Level?
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our service engineers carry digital TDS testing meters to every home visit. Book a free water quality check or schedule a service visit anywhere in Hyderabad.
                </p>
                <div className="space-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Free Digital TDS & Hardness Test with Any Service
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Certified Technicians Stationed Across All Hyderabad Zones
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Genuine USA Filmtec & Copper Spares Guaranteed
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <LeadForm 
                  title="Book Doorstep Water Test & RO Service"
                  subtitle="Get 100% genuine spares, TDS calibration, and transparent technician advice."
                />
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
