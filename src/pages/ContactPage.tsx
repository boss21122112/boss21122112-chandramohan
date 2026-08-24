import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Shield, MessageSquare } from "lucide-react";
import { GoogleMapSection } from "../components/GoogleMapSection";
import { CONTACT_INFO } from "../data";

export const ContactPage: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("RO Repair & Service");
  const [area, setArea] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    try {
      const existingLeads = JSON.parse(localStorage.getItem('RAINBOW_AQUAFRESH_LOCAL_LEADS') || '[]');
      const newLead = {
        id: Date.now().toString(),
        name,
        mobile: phone,
        area: area || 'Hyderabad',
        serviceType: service,
        note: message,
        date: new Date().toLocaleString('en-IN')
      };
      localStorage.setItem('RAINBOW_AQUAFRESH_LOCAL_LEADS', JSON.stringify([newLead, ...existingLeads]));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  const whatsappMsg = `Hi Rainbow Aquafresh Systems,\nI need RO Service / Inquiry:\n- Name: ${name || 'Customer'}\n- Phone: ${phone || 'Not provided'}\n- Area: ${area || 'Hyderabad'}\n- Service Needed: ${service}`;

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-blue-50 text-center max-w-4xl mx-auto">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            Get in Touch Instantly
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Contact Rainbow Aquafresh Systems — RO Service & Support in Hyderabad
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Our customer support desk and technical field engineers are available 365 days a year across Hyderabad and Secunderabad. Speak directly with our team for immediate emergency repair, AMC enrollment, or commercial RO plant quotations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918885556965"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" /> Direct Helpline: +91 8885556965
            </a>
            <a
              href={`https://wa.me/918885556965?text=${encodeURIComponent('Hi Rainbow Aquafresh Systems, I want to book RO service in Hyderabad.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-600/30 transition transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-5 h-5" /> WhatsApp Support
            </a>
          </div>
        </div>

        {/* Contact Details & Interactive Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Office Address & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-900 border-b border-slate-100 pb-4">
                Headquarters & Service Hub
              </h2>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-1 font-bold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Canonical Address</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    <strong>Rainbow Aquafresh Systems</strong><br />
                    16-10-27/109, 33-2RT, MCH Colony, Old Malakpet,<br />
                    Hyderabad, Telangana 500036
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1 font-bold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Telephone Numbers</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1 space-y-1">
                    <a href="tel:+918885556965" className="block text-blue-600 font-bold hover:underline">📞 +91 8885556965</a>
                    <a href="tel:+918341256965" className="block text-blue-600 font-bold hover:underline">📞 +91 8341256965</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 mt-1 font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Email Address</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    <a href="mailto:rainbow.afs@gmail.com" className="text-blue-600 font-medium hover:underline">rainbow.afs@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 mt-1 font-bold">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Working Hours</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    <strong>Monday – Sunday:</strong> 10:00 AM – 7:00 PM<br />
                    <em>Emergency breakdown support available 365 days</em>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-400" /> Hyderabad Service Jurisdiction
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our mobile technician teams are stationed across Malakpet, Dilsukhnagar, L.B. Nagar, Santosh Nagar, Kothapet, Uppal, Banjara Hills, Jubilee Hills, Gachibowli, Madhapur, Kukatpally, Kondapur, Begumpet, and Secunderabad for guaranteed 4-hour SLA response.
              </p>
            </div>
          </div>

          {/* Right Column: Direct Contact & Booking Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-lg">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Send Us an Instant Inquiry</h2>
            <p className="text-xs text-slate-500 mb-6">Fill out the form below and our technical coordinator will call you back within 15 minutes.</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-8 rounded-2xl text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-xl font-bold text-green-900">Inquiry Received Successfully!</h3>
                <p className="text-sm text-green-800">
                  Thank you, <strong>{name}</strong>. Our senior technical support desk has logged your request for <strong>{service}</strong>. A technician will contact you shortly at <strong>{phone}</strong>.
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href="tel:+918885556965"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition"
                  >
                    Need Urgent Help? Call +91 8885556965
                  </a>
                  <a
                    href={`https://wa.me/918885556965?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-4 h-4" /> Open WhatsApp Chat
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Service Required</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition font-medium"
                    >
                      <option value="RO Repair & Service">RO Repair & Service (₹150 Diagnostic)</option>
                      <option value="New Purifier Purchase">New Purifier Purchase & Demo</option>
                      <option value="RO Installation / Shifting">RO Installation / Re-Installation</option>
                      <option value="AMC Plan Enrollment">RO AMC Plan Enrollment</option>
                      <option value="Commercial RO Plant">Commercial RO Plant (25 LPH - 2000 LPH)</option>
                      <option value="Spare Parts & Membranes">Spare Membranes / Booster Pumps</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Your Area / Locality in Hyderabad</label>
                  <input
                    type="text"
                    placeholder="e.g. Malakpet, Dilsukhnagar, Banjara Hills, Gachibowli..."
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Additional Message or Problem Description</label>
                  <textarea
                    rows={4}
                    placeholder="Describe the issue (e.g. continuous wastewater running, pump vibrating, shifting needed)..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition"
                  ></textarea>
                </div>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" /> Submit Immediate Request
                  </button>

                  <a
                    href={`https://wa.me/918885556965?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 transition flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageSquare className="w-4 h-4" /> Instant WhatsApp Chat
                  </a>
                </div>
                <p className="text-[11px] text-slate-400 text-center">
                  By submitting, you authorize Rainbow Aquafresh Systems to contact you via phone or WhatsApp regarding your water purification query.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Embedded Interactive Google Map */}
        <GoogleMapSection />

      </div>
    </div>
  );
};

