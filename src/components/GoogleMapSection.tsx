import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface GoogleMapSectionProps {
  className?: string;
  title?: string;
}

export const GoogleMapSection: React.FC<GoogleMapSectionProps> = ({
  className = "",
  title = "Visit Our Malakpet Service Headquarters or Request Doorstep Visit"
}) => {
  return (
    <section className={`bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden ${className}`}>
      <div className="p-6 sm:p-8 border-b border-slate-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-700 bg-blue-50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5" /> Canonical Head Office & Workshop
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Serving all of Greater Hyderabad & Secunderabad with localized mobile technician dispatch hubs.
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=16-10-27/109,+MCH+Colony,+Malakpet,+Hyderabad+500036"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition shrink-0"
          >
            <Navigation className="w-4 h-4" /> Get Directions on Google Maps <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Interactive Google Map Embed */}
        <div className="lg:col-span-8 h-[350px] lg:h-[420px] bg-slate-100 relative">
          <iframe
            title="Rainbow Aquafresh Systems Malakpet Headquarters Google Map Location"
            src={CONTACT_INFO.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        {/* Address & Quick Info Side Card */}
        <div className="lg:col-span-4 p-6 sm:p-8 bg-slate-50 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                Canonical Business Address
              </span>
              <p className="text-sm font-bold text-slate-900 leading-snug">
                {CONTACT_INFO.companyName}
              </p>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {CONTACT_INFO.address}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200/80 space-y-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 font-bold">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Call Helpline</span>
                  <a href={`tel:${CONTACT_INFO.rawPhones[0]}`} className="font-extrabold text-blue-700 hover:underline">
                    {CONTACT_INFO.phones[0]}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 font-bold">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">Working Hours</span>
                  <span className="font-bold text-slate-800">Mon - Sun: 10:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200/80 p-4 rounded-2xl text-xs space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-blue-900">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" /> Fast Doorstep Service SLA
            </div>
            <p className="text-blue-800/90 text-[11px] leading-normal">
              Technicians stationed in Malakpet, Kothapet, Dilsukhnagar, LB Nagar, Madhapur & Kukatpally arrive within 30 to 90 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
