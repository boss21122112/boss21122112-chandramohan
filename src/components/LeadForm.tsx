import React, { useState } from 'react';
import { Phone, MessageSquare, Send, CheckCircle, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data';

interface LeadFormProps {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  compact?: boolean;
  className?: string;
  onSuccess?: () => void;
}

export const LeadForm: React.FC<LeadFormProps> = ({
  title = "Book RO Service or Request Callback",
  subtitle = "Our technical coordinator will call you back within 15 minutes for doorstep engineer assignment across Hyderabad.",
  defaultService = "RO Repair & Service",
  compact = false,
  className = "",
  onSuccess
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [service, setService] = useState(defaultService);
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    try {
      const existingLeads = JSON.parse(localStorage.getItem('RAINBOW_AQUAFRESH_LOCAL_LEADS') || '[]');
      const newLead = {
        id: Date.now().toString(),
        name,
        mobile: phone,
        area: area || 'Hyderabad',
        serviceType: service,
        note,
        date: new Date().toLocaleString('en-IN')
      };
      localStorage.setItem('RAINBOW_AQUAFRESH_LOCAL_LEADS', JSON.stringify([newLead, ...existingLeads]));
    } catch (err) {
      console.error('Lead storage error:', err);
    }

    setSubmitted(true);
    if (onSuccess) onSuccess();
  };

  const whatsappLink = `https://wa.me/918885556965?text=${encodeURIComponent(
    `Hi Rainbow Aquafresh Systems,\nI need RO Service / Inquiry:\n- Name: ${name || 'Customer'}\n- Phone: ${phone || 'Not provided'}\n- Area: ${area || 'Hyderabad'}\n- Service Needed: ${service}`
  )}`;

  return (
    <div className={`bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden ${className}`}>
      {/* Header Accent Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-6 sm:p-8 text-white relative">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-500/30 text-blue-100 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-400/30">
            ⚡ 15-Min Response Guarantee
          </span>
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
          {title}
        </h3>
        {subtitle && (
          <p className="text-blue-100/90 text-xs sm:text-sm mt-1.5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-slate-900">Inquiry Logged Successfully!</h4>
              <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                Thank you, <strong>{name}</strong>. Our Malakpet central dispatch desk has received your request for <strong>{service}</strong> ({area || 'Hyderabad'}).
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-900 space-y-2">
              <p className="font-bold">Want immediate assistance right now?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-1">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition"
                >
                  <MessageSquare className="w-4 h-4" /> Open WhatsApp Chat Now
                </a>
                <a
                  href={`tel:${CONTACT_INFO.rawPhones[0]}`}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl flex items-center justify-center gap-2 transition"
                >
                  <Phone className="w-4 h-4" /> Call Technician: {CONTACT_INFO.phones[0]}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setName("");
                setPhone("");
                setArea("");
                setNote("");
              }}
              className="text-xs text-blue-600 font-bold hover:underline"
            >
              ← Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Suresh Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Locality / Area in Hyderabad
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g. Malakpet, Kothapet, Madhapur..."
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  />
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                Service Required
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
              >
                <option value="RO Repair & Service">RO Repair & General Service (₹150 Diagnostic)</option>
                <option value="RO Filter Replacement">RO Filter & Membrane Replacement</option>
                <option value="New Purifier Purchase">Buy New RO Water Purifier</option>
                <option value="RO Installation / Shifting">RO Installation / Re-Installation</option>
                <option value="RO AMC Maintenance">RO AMC Annual Maintenance Contract</option>
                <option value="Commercial RO Plant">Commercial RO Plant (25 - 2000 LPH)</option>
              </select>
            </div>

            {!compact && (
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Issue Details / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Water taste bitter, leak from filter, pump noise..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                />
              </div>
            )}

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-600/25 transition flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" /> Request Call Back
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-600/25 transition flex items-center justify-center gap-2 text-sm"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Instant Chat
              </a>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-600" /> 2-Hour Doorstep Visit
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Genuine Spares
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
