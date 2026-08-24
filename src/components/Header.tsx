import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../data';
import { Phone, Menu, X } from 'lucide-react';
import RainbowLogo from './RainbowLogo';


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
      e.preventDefault();
      setMobileMenuOpen(false);
      if (window.location.pathname !== href) {
        window.history.pushState(null, '', href);
        window.dispatchEvent(new PopStateEvent('popstate'));
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products & Spares', href: '/products/' },
    { label: 'RO Installation', href: '/ro-installation-hyderabad' },
    { label: 'RO AMC Service', href: '/ro-amc-service' },
    { label: 'RO Repair', href: '/ro-repair-hyderabad' },
    { label: 'Commercial Plants', href: '/commercial-ro-plants' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md border-blue-100 shadow-sm py-3 text-slate-800' 
          : 'bg-white border-blue-50 shadow-xs py-4 text-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo area */}
            <a href="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center hover:opacity-95 transition-opacity">
              <RainbowLogo className="shadow-none border-none rounded-none" showSubText={false} />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-semibold tracking-wide transition-all text-slate-600 hover:text-blue-600 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Action buttons (Desktop & Tablet) */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Direct click-to-call in header */}
              <a
                href={`tel:${CONTACT_INFO.rawPhones[0]}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md shadow-blue-100 transition-all hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4" /> <span>+91 8885556965</span>
              </a>
            </div>

            {/* Mobile / Tablet menu toggle and shortcuts */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${CONTACT_INFO.rawPhones[0]}`}
                className="sm:hidden p-2 rounded-lg border border-blue-200 text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all flex items-center justify-center"
                title="Call Now"
              >
                <Phone className="w-4.5 h-4.5" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center min-w-[40px] min-h-[40px]"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-red-600" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Dropdown menu inside header to align perfectly at bottom of header */}
        {mobileMenuOpen && (
          <div 
            className="absolute top-full left-0 right-0 bg-white border-t border-b border-blue-100 shadow-xl p-5 flex flex-col space-y-4 animate-in slide-in-from-top-4 duration-200 lg:hidden max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-blue-55 bg-slate-50/60 hover:bg-blue-50 hover:text-blue-700 transition-all flex items-center border border-slate-100/50 hover:border-blue-100/80 shadow-3xs"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 shrink-0" />
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:hidden gap-2.5">
              <a
                href={`tel:${CONTACT_INFO.rawPhones[0]}`}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
              >
                <Phone className="w-4.5 h-4.5" /> Call +91 8885556965
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
                  "Hi Rainbow Aquafresh,\n\nI'd like to enquire about your RO water purifier products and services.\n\nPlease share the details."
                )}`}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 rounded-xl text-center text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-[0.98]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-4.5 h-4.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.535 0 10.04-4.437 10.043-9.896.002-2.643-1.027-5.127-2.9-7c-1.872-1.873-4.363-2.903-7.007-2.904-5.54 0-10.04 4.439-10.043 9.897-.002 1.812.479 3.59 1.393 5.172l-.936 3.422 3.51-.904zM18.22 16.516c-.3-.149-1.77-.872-2.046-.972-.276-.1-.476-.149-.676.15-.2.299-.775.972-.95 1.171-.175.2-.35.224-.65.074-.3-.15-1.265-.466-2.41-1.484-.89-.793-1.49-1.772-1.664-2.071-.175-.299-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.498.1-.2.05-.374-.025-.523-.075-.15-.675-1.62-.925-2.224-.244-.587-.493-.508-.675-.517-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8.374-.275.3-.1.748.1.972.175.224.275.498.425.823.1.224.05.422-.025.571-.075.15-.675 1.624-.675 2.224 0 2.64 1.93 5.107 4.2 5.107 1.83 0 3.237-1.392 3.237-1.392s.374.05.825-.1c.3-.1.6-.374.8-.722s.1-.647.05-.722c-.05-.1-.2-.149-.5-.299z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop outside header so it doesn't block header interactions */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-xs lg:hidden" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
