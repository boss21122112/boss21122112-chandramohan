import React, { useState } from 'react';
import { Share2, MessageSquare, Facebook, Check, Link2 } from 'lucide-react';

export default function SocialShareBar() {
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.rainbowafs.com';
  const shareTitle = 'Rainbow Aquafresh Systems | RO Water Purifier Sales & Service Hyderabad';

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `Check out Rainbow Aquafresh Systems for RO Water Purifiers, Sales, Installation, Repair & AMC in Hyderabad:\n${currentUrl}`
  )}`;

  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;

  return (
    <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-blue-50 border-y border-blue-100 py-3 px-4 my-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-700 font-bold">
          <Share2 className="w-4 h-4 text-blue-600" />
          <span>Share this page with family & friends:</span>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          {/* WhatsApp Share */}
          <a
            href={whatsappShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-lg transition-colors text-xs shadow-xs"
            title="Share on WhatsApp"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>

          {/* Facebook Share */}
          <a
            href={facebookShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-lg transition-colors text-xs shadow-xs"
            title="Share on Facebook"
          >
            <Facebook className="w-3.5 h-3.5 fill-white" />
            <span>Facebook</span>
          </a>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 text-slate-700 font-bold px-3 py-1.5 rounded-lg border border-slate-200 transition-colors text-xs shadow-xs cursor-pointer"
            title="Copy Page Link"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Link2 className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? 'Copied Link!' : 'Copy Link'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
