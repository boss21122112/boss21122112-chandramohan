import React from "react";
import { CheckCircle, Wrench, Shield, Phone, ArrowRight, Clock, Award } from "lucide-react";

interface InstallationPageProps {
  onOpenBooking?: () => void;
}

export const InstallationPage: React.FC<InstallationPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-blue-50 text-center max-w-4xl mx-auto">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            Professional Fitting & Shifting
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            RO Water Purifier Installation & Re-Installation Services in Hyderabad
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Precision wall-mount, tabletop, and under-sink water purifier installation, re-installation, and shifting across all localities in Hyderabad and Secunderabad. We calibrate TDS levels, verify water pressure, and use 100% food-grade plumbing tubing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
            >
              Book Installation Now <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+918885556965"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition"
            >
              <Phone className="w-5 h-5" /> +91 8885556965
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">New Purifier Installation</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Complete mounting and plumbing setup for newly purchased water purifiers (online or retail). We drill clean mounting holes, fit inlet diverter valves, connect food-grade LLDPE tubing, flush pre-carbon filters, and calibrate the TDS controller.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Standard Fitting</span>
              <span className="text-lg font-extrabold text-blue-600">₹350 – ₹500</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Re-Installation & Shifting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Moving to a new residence in Hyderabad? We carefully uninstall your existing purifier from your old kitchen without damaging fittings, prepare it for shifting, and re-install it at your new home with fresh external piping and pressure check.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Complete Shifting Support</span>
              <span className="text-lg font-extrabold text-green-600">₹450 – ₹600</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Under-Sink Modular Fitting</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Specialized installation for compact under-sink water purifiers and hydrostatic storage tanks. We route stainless steel designer faucets through your marble or granite countertop cleanly without harming modular kitchen cabinetry.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Specialized Fitting</span>
              <span className="text-lg font-extrabold text-purple-600">₹500 – ₹800</span>
            </div>
          </div>
        </div>

        {/* Brands Supported & Why Choose Us */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Universal Compatibility</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              We Install & Re-Install All Leading RO Brands
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our certified technicians are trained on the wiring, hydraulic diagrams, and membrane configurations of every major water purifier brand in India.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {["Kent RO", "Aquaguard", "Pureit (HUL)", "Livpure", "Havells", "Blue Star", "A.O. Smith", "Xiaomi Mi", "LG / Panasonic"].map((brand, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 py-2.5 px-3 rounded-xl text-center font-bold text-slate-700 text-xs">
                  {brand}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-400" /> The Rainbow Aquafresh Advantage
            </h3>
            <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong>Free Digital Water Testing:</strong> Calibrated TDS meter and pH check before and after installation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong>Zero Water Leakage Guarantee:</strong> High-pressure threaded joints sealed with food-grade Teflon tape.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <span><strong>4-Hour On-Site SLA:</strong> Technicians available across Malakpet, Dilsukhnagar, Banjara Hills, Gachibowli, Kukatpally, and all Hyderabad areas.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};
