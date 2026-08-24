import React from "react";
import { CheckCircle, Shield, Award, Users, Phone, ArrowRight, HeartHandshake } from "lucide-react";

interface AboutPageProps {
  onOpenBooking?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-blue-50 text-center max-w-4xl mx-auto">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            20+ Years of Drinking Water Excellence
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            About Rainbow Aquafresh Systems
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            For over two decades, Rainbow Aquafresh Systems has been at the forefront of drinking water purification technology in Hyderabad, Telangana. We dedicate ourselves to delivering 100% pure, healthy, and mineral-balanced water to homes, institutions, and industries.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition"
            >
              Consult Our Engineers <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+918885556965"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition"
            >
              <Phone className="w-5 h-5" /> +91 8885556965
            </a>
          </div>
        </div>

        {/* Company Story & Vision */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Our Heritage</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why We Began: Solving Hyderabad's Complex Water Challenges
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              In Hyderabad, drinking water sources vary wildly. Households receiving municipal Krishna or Godavari water often deal with seasonal turbidity and chlorine, while deep borewell connections across Malakpet, Dilsukhnagar, Gachibowli, Kukatpally, and Secunderabad face extreme total dissolved solids (TDS) exceeding 1500 to 2500 PPM, along with high hardness and heavy metal contamination.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We established Rainbow Aquafresh Systems to replace guesswork with scientific water engineering. By analyzing input TDS and chemical composition, our certified engineers install customized RO+UV+UF+Alkaline systems that eliminate 100% of toxins while retaining vital natural calcium and magnesium.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600">20+</div>
              <div className="text-xs font-bold text-slate-700 uppercase">Years of Service</div>
              <p className="text-[11px] text-slate-500">Unbroken track record across Telangana</p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-green-600">10,000+</div>
              <div className="text-xs font-bold text-slate-700 uppercase">Happy Families</div>
              <p className="text-[11px] text-slate-500">Residential & commercial clients</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-purple-600">4 Hr</div>
              <div className="text-xs font-bold text-slate-700 uppercase">SLA Response</div>
              <p className="text-[11px] text-slate-500">Rapid on-site emergency support</p>
            </div>
            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-600">100%</div>
              <div className="text-xs font-bold text-slate-700 uppercase">Genuine Spares</div>
              <p className="text-[11px] text-slate-500">Factory sealed TFC membranes & pumps</p>
            </div>
          </div>
        </div>

        {/* Our Pillars of Excellence */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What Sets Rainbow Aquafresh Apart</h2>
            <p className="text-slate-600 text-sm mt-2">We build lifelong customer relationships through transparency, technical mastery, and prompt service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Certified In-House Engineers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never outsource service calls to untrained freelancers. Our field technicians are full-time, background-verified employees who undergo rigorous technical training and wear official company uniforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">100% Honest Diagnostics</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe in ethical repair. We never recommend replacing a booster pump or RO membrane unless scientific digital TDS and pressure tests confirm it is genuinely necessary.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Comprehensive AMC Assurance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our AMC contracts provide complete peace of mind with scheduled proactive maintenance, free consumable filter replacements, and zero labor charges for any unexpected breakdown.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
