import React, { useState } from "react";
import { 
  CheckCircle, 
  Shield, 
  Award, 
  Users, 
  Phone, 
  ArrowRight, 
  HeartHandshake, 
  MapPin, 
  Mail, 
  Clock, 
  Building2, 
  Wrench, 
  Sparkles, 
  Droplet, 
  ChevronDown, 
  PhoneCall, 
  MessageSquare 
} from "lucide-react";

interface AboutPageProps {
  onOpenBooking?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How long has Rainbow Aquafresh Systems operated in Hyderabad?",
      answer: "Rainbow Aquafresh Systems was established in 2004 in Malakpet, Hyderabad. For more than 20 consecutive years, we have provided residential and commercial water purification sales, repair, and annual maintenance contracts across Greater Hyderabad and Secunderabad."
    },
    {
      question: "What range of services does Rainbow Aquafresh Systems provide?",
      answer: "We provide end-to-end water treatment solutions including domestic RO purifier sales and assembly, multi-brand doorstep repairs, filter and membrane replacements, annual maintenance contracts (AMC), turnkey commercial RO plants (50 LPH to 2,000 LPH), industrial water treatment systems, and whole-house automatic water softeners."
    },
    {
      question: "Are your technicians in-house employees or subcontractors?",
      answer: "All service calls are handled by our full-time, background-verified, in-house technical team. We do not outsource service requests to third-party freelancers, ensuring consistent workmanship, professional ethics, and transparent pricing."
    },
    {
      question: "Do you provide written warranties on repairs and spare parts?",
      answer: "Yes. Every component replaced by our engineers—including booster pumps, SMPS adapters, and RO membranes—comes with an official 6 to 12-month written warranty alongside verified digital TDS testing."
    },
    {
      question: "What areas do you serve across Hyderabad and Telangana?",
      answer: "We provide doorstep technician dispatch across all localities of Greater Hyderabad and Secunderabad—including Malakpet, Dilsukhnagar, LB Nagar, Kothapet, Kukatpally, Miyapur, Gachibowli, Kondapur, Hitech City, Madhapur, Uppal, and Banjara Hills. For commercial and industrial RO plants, we serve clients throughout Telangana and Andhra Pradesh."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans antialiased">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-blue-50 py-3 text-xs font-semibold text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600 font-bold">About Us</span>
        </div>
      </div>

      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-blue-50 text-center max-w-4xl mx-auto">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
              20+ Years of Drinking Water Excellence (Est. 2004)
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              About Rainbow Aquafresh Systems
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              For over two decades, Rainbow Aquafresh Systems has stood as Hyderabad's benchmark for drinking water purification engineering, sales, emergency doorstep repairs, and commercial water plant installations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
              >
                Consult Our Engineers <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+918885556965"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition"
              >
                <Phone className="w-5 h-5" /> +91 8885556965
              </a>
              <a
                href="https://wa.me/918885556965?text=Hello%20Rainbow%20Aquafresh,%20I%20have%20an%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-md transition"
              >
                <MessageSquare className="w-5 h-5" /> WhatsApp Desk
              </a>
            </div>
          </div>

          {/* Company Story & Vision */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Our Heritage</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Solving Hyderabad's Complex Water Challenges Since 2004
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                What began as a specialized technical repair and assembly workshop in Malakpet has grown into a premier water treatment network serving more than 50,000 households, gated communities, hospitals, academic institutions, and manufacturing facilities across Greater Hyderabad, Telangana, and Andhra Pradesh.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                In Hyderabad, drinking water sources vary wildly. Municipal Krishna or Godavari supplies carry seasonal turbidity and chlorine, while deep borewells across Malakpet, Dilsukhnagar, LB Nagar, Kukatpally, Gachibowli, Miyapur, and Secunderabad face extreme Total Dissolved Solids (TDS) exceeding 1,200 to 2,500 PPM accompanied by aggressive calcium and magnesium hardness.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We established Rainbow Aquafresh Systems to replace guesswork with scientific water engineering. Before recommending any purification hardware or replacement filter, our technicians test feed water TDS, pH balance, and pump pressures to ensure optimal mineral balance and pure, sweet-tasting water.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center space-y-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">20+</div>
                <div className="text-xs font-bold text-slate-700 uppercase">Years of Service</div>
                <p className="text-[11px] text-slate-500">Unbroken track record across Telangana</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl border border-green-100 text-center space-y-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-green-600">50,000+</div>
                <div className="text-xs font-bold text-slate-700 uppercase">Happy Customers</div>
                <p className="text-[11px] text-slate-500">Residential & commercial clients</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 text-center space-y-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-purple-600">60-90m</div>
                <div className="text-xs font-bold text-slate-700 uppercase">Doorstep SLA</div>
                <p className="text-[11px] text-slate-500">Rapid on-site emergency support</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-center space-y-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-600">100%</div>
                <div className="text-xs font-bold text-slate-700 uppercase">Genuine Spares</div>
                <p className="text-[11px] text-slate-500">Factory sealed TFC membranes & pumps</p>
              </div>
            </div>
          </div>

          {/* Infrastructure & Facilities */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Technical Backbone
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Our Infrastructure & Testing Facilities
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                We combine central workshop precision with distributed mobile response teams:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Malakpet Workshop</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our central assembly, testing, and component overhaul workshop at 37-2RT, MCH Colony, Malakpet, Hyderabad.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-bold mb-3">
                  <Droplet className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Water Testing Lab</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipped with digital TDS meters, pH indicators, total hardness titration kits, and pressure gauges.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Mobile Service Fleet</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fully equipped mobile service vans operating across East, West, North, South, and Central Hyderabad.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-3">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Commercial Fabrication</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated team fabricating SS-304 frames and assembling commercial RO plants from 50 to 2,000 LPH.
                </p>
              </div>
            </div>
          </div>

          {/* Full-Spectrum Solutions Portfolio */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Comprehensive Offerings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Full-Spectrum Water Treatment Solutions
              </h2>
              <p className="text-slate-600 text-sm mt-2">Everything from residential under-sink purifiers to industrial plant installations:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. Domestic RO Purifiers</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Custom-configured multi-stage RO+UV+UF+Alkaline systems engineered specifically for Hyderabad municipal and borewell water profiles.
                  </p>
                </div>
                <a href="/products/" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Explore Domestic Products <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. Commercial RO Plants</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Skid-mounted commercial plants (50 LPH to 2,000 LPH) with SS-304 frames, FRP vessels, and industrial 4040/8040 membranes for schools, hospitals, and restaurants.
                  </p>
                </div>
                <a href="/commercial-ro-plants" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  View Commercial Plants <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">3. Multi-Brand Doorstep Repair</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Rapid on-site troubleshooting for low water flow, pump vibration, leakage, UV fail alarms, and PCB faults for Kent, Aquaguard, Pureit, and Livpure.
                  </p>
                </div>
                <a href="/ro-repair-hyderabad" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Schedule RO Repair <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">4. Annual Maintenance Contracts</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Worry-free maintenance contracts starting at ₹1,999/yr covering periodic service visits, free consumable filters, membrane coverage, and zero labor fees.
                  </p>
                </div>
                <a href="/ro-amc-service" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  View AMC Plans <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">5. Genuine Spares & Membranes</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Direct factory procurement of 75/80/100 GPD TFC membranes, heavy-duty 24V booster pumps, SMPS adapters, and food-grade push-fit fittings.
                  </p>
                </div>
                <a href="/ro-membrane-replacement-service-hyderabad" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Membrane Replacement <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">6. Water Softeners & Media Filtration</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Automatic ion-exchange water softeners and multi-grade sand/activated carbon filters to treat hard borewell water for entire homes and apartments.
                  </p>
                </div>
                <a href="/water-guide" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  Read Water Guide <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Our Core Guarantees */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Our Core Operating Standards</h2>
              <p className="text-slate-600 text-sm mt-2">We build lifelong customer relationships through transparency, technical mastery, and prompt service.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Certified In-House Engineers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We never outsource service calls to untrained freelancers. Our field technicians are full-time, background-verified employees who undergo rigorous technical training in electro-mechanical diagnostics and water chemistry.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">100% Honest Diagnostics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We believe in ethical repair. We test feed TDS and operating pressure in front of the customer and never recommend replacing a booster pump or RO membrane unless scientific digital tests confirm it is genuinely necessary.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Factory-Sealed Spares & Warranty</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We procure original components directly from certified manufacturers. Every replacement—from booster pumps to TFC membranes—comes with a clear 6 to 12-month written warranty for your peace of mind.
                </p>
              </div>
            </div>
          </div>

          {/* Official Registered Office & Contact Details */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Registered Head Office & Support Desk
              </h2>
              <p className="text-slate-600 text-sm mt-2">Visit our Malakpet office or reach out to our service coordinators:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Office Address</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  16-10-27/109, 37-2RT, MCH Colony, Malakpet, Hyderabad, Telangana 500036, India
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-2">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Helpline Numbers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Primary: <a href="tel:+918885556965" className="text-blue-600 font-bold">+91 8885556965</a><br />
                  Alternate: <a href="tel:+918341256965" className="text-blue-600 font-bold">+91 8341256965</a>
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 text-center space-y-2">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">Working Hours</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Monday to Sunday: 8:00 AM – 9:00 PM<br />
                  Emergency Doorstep Dispatch: 365 Days
                </p>
              </div>
            </div>
          </div>

          {/* Service Reach Across Hyderabad */}
          <div className="bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-4">
            <h2 className="text-2xl font-bold text-white">
              Service Reach Across Hyderabad & Secunderabad
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong>East & South Zone:</strong> Malakpet, Dilsukhnagar, Kothapet, LB Nagar, Chaitanyapuri, Nagole, Hayathnagar, Vanasthalipuram, Ramanthapur, Uppal, Santosh Nagar.<br />
              <strong>West & IT Corridor:</strong> Gachibowli, Kondapur, Hitech City, Madhapur, Manikonda, Kukatpally, KPHB Colony, Miyapur, Chandanagar, Hafeezpet.<br />
              <strong>North & Central Zone:</strong> Secunderabad, Begumpet, Banjara Hills, Jubilee Hills, Tarnaka, Malkajgiri, Alwal, Bowenpally, Somajiguda, Mehdipatnam.
            </p>
          </div>

          {/* FAQs Section */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Frequently Asked Questions About Rainbow Aquafresh
              </h2>
            </div>

            <div className="space-y-3 max-w-4xl mx-auto">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between gap-4 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180 text-blue-600' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 pt-3 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Related Services Links */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">
              Explore Our Core Services & Products:
            </h3>
            <div className="flex flex-wrap gap-2.5">
              <a href="/ro-service-hyderabad" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                RO Service Hyderabad <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/products/" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                Domestic Purifiers Catalog <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/ro-amc-service" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                Annual Maintenance Plans <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/commercial-ro-plants" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                Commercial RO Plants <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/ro-repair-hyderabad" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                Doorstep RO Repair <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/ro-membrane-replacement-service-hyderabad" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                RO Membrane Replacement <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/kent-ro-service-repair-hyderabad" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                Kent RO Service <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                Contact & Office Location <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
