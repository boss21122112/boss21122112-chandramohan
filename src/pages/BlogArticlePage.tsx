import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  MessageSquare, 
  Sparkles,
  ChevronDown,
  Tag
} from 'lucide-react';
import { BLOG_ARTICLES_DATA, BlogArticleData } from '../data/blogArticlesData';

interface BlogArticlePageProps {
  articleKey: string;
}

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ articleKey }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const article: BlogArticleData = BLOG_ARTICLES_DATA[articleKey] || {
    slug: articleKey,
    title: articleKey.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
    category: "Water Purification Guide",
    readTime: "5 min read",
    publishDate: "August 2026",
    excerpt: "Essential tips, technological insights, and maintenance guidance for water purifiers in Hyderabad.",
    contentParagraphs: [
      {
        heading: "Expert Water Purification Guide",
        text: "Clean drinking water is fundamental to family health and well-being. Selecting and maintaining the right RO purifier ensures 100% protection against impurities and dissolved hardness."
      }
    ],
    keyTakeaways: [
      "Always verify input water TDS before choosing a purifier technology.",
      "Replace sediment pre-filters every 3 to 4 months.",
      "Professional service preserves water purity and equipment longevity."
    ],
    relatedSlugs: []
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans antialiased">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-blue-50 py-3 text-xs font-semibold text-slate-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span className="text-slate-300">/</span>
          <a href="/blog" className="hover:text-blue-600 transition-colors">Blog & Guides</a>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600 font-bold truncate max-w-xs">{article.title}</span>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 lg:py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase tracking-wider">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-400 font-medium">
              <Calendar className="w-3.5 h-3.5" /> {article.publishDate}
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8 pb-8 border-b border-slate-100">
            {article.excerpt}
          </p>

          {/* Key Takeaways Box */}
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-6 border border-blue-100/80 mb-10">
            <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-blue-600" /> Key Takeaways
            </h3>
            <ul className="space-y-2">
              {article.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Content Paragraphs */}
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            {article.contentParagraphs.map((para, idx) => (
              <div key={idx}>
                {para.heading && (
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {para.heading}
                  </h2>
                )}
                <p className="text-slate-600 leading-relaxed">
                  {para.text}
                </p>
              </div>
            ))}
          </div>

          {/* FAQs if present */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Related Questions</h3>
              <div className="space-y-3">
                {article.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full px-5 py-3.5 text-left font-bold text-xs sm:text-sm text-slate-800 flex items-center justify-between gap-4"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-blue-600' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Callout Box */}
          <div className="mt-12 p-6 rounded-2xl bg-blue-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
            <div>
              <h4 className="text-lg font-bold">Have Questions About Your Water Quality?</h4>
              <p className="text-xs text-blue-100 mt-1">Get free TDS testing and doorstep advice from our water experts.</p>
            </div>
            <a
              href="tel:+918885556965"
              className="shrink-0 bg-white text-blue-600 hover:bg-blue-50 font-bold px-5 py-3 rounded-xl text-xs transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call +91 8885556965
            </a>
          </div>

          {/* Related Articles */}
          {article.relatedSlugs && article.relatedSlugs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-base font-bold uppercase tracking-wider text-slate-500 mb-4">
                Recommended Articles:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {article.relatedSlugs.map((slug, idx) => {
                  const rel = BLOG_ARTICLES_DATA[slug];
                  if (!rel) return null;
                  return (
                    <a
                      key={idx}
                      href={`/blog/${rel.slug}`}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/40 transition-all group"
                    >
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{rel.category}</span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800 mt-1 group-hover:text-blue-600 transition-colors">
                        {rel.title}
                      </h4>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </article>
    </div>
  );
};
