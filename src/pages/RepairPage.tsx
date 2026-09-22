import React from "react";
import { CheckCircle, Shield, Phone, ArrowRight, Wrench, Zap, Droplets, AlertTriangle } from "lucide-react";

interface RepairPageProps {
  onOpenBooking?: () => void;
}

export const RepairPage: React.FC<RepairPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-blue-50 text-center max-w-4xl mx-auto">
          <span className="bg-red-100 text-red-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            Emergency Breakdown Support
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            RO Water Purifier Repair Service in Hyderabad
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Is your RO leaking, making loud vibrating noises, or running wastewater continuously? Rainbow Aquafresh Systems provides same-day emergency RO repair across all areas in Hyderabad. Honest diagnostic fee of just ₹150 — completely waived upon repair approval!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-red-600/30 transition transform hover:-translate-y-0.5"
            >
              Book Emergency Repair <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+918885556965"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition"
            >
              <Phone className="w-5 h-5" /> Urgent Helpline: +91 8885556965
            </a>
          </div>
        </div>

        {/* Common Problems Solved */}
        <div className="space-y-8">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Fast Troubleshooting</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Common RO Purifier Problems We Fix Daily</h2>
            <p className="text-slate-600 text-sm mt-2 max-w-3xl">
              Our technicians carry genuine multi-brand spare parts in their service kits to fix 95% of water purifier failures on the very first visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <Droplets className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Continuous Wastewater Running</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  If drain water flows non-stop even when the storage tank is full, it indicates a faulty Solenoid Valve (SV), defective check valve, or failed auto-shutoff sensor. We replace defective valves with food-grade components instantly.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-blue-600">Fixed within 30 mins</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <Wrench className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Loud Pump Vibration & Noise</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A rattling or screeching booster pump signals worn-out internal diaphragm bearings or low input water pressure. We repair or replace 75 GPD / 100 GPD copper booster pumps with 1-year warranty.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-amber-600">100% Copper Replacement</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <AlertTriangle className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">Bad Taste, Odor or High TDS</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bitter, salty, or metallic tasting water indicates an exhausted RO membrane or depleted post-carbon mineralizer. We perform on-site digital TDS testing and replace clogged cartridges with genuine TFC membranes.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-red-600">Digital TDS Balancing</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <Zap className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-900 mb-2">No Power or Dead Purifier</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete power failure is typically caused by a burnt SMPS DC power adapter, blown internal fuse, or faulty float switch. We carry genuine 24V/36V SMPS power supplies for immediate replacement.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-bold text-purple-600">Original SMPS Fitment</div>
            </div>
          </div>
        </div>

        {/* Specialized Component Repair Services Directory */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Targeted Repair Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Specialized RO Component Repairs in Hyderabad</h2>
            <p className="text-slate-600 text-sm mt-2 max-w-3xl">
              Need a specific spare replacement? We carry certified 100% original OEM parts with comprehensive warranty:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <a href="/ro-booster-pump-repair-replacement-hyderabad" className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between mb-1">
                  Booster Pump Repair <ArrowRight className="w-4 h-4 text-blue-600" />
                </h3>
                <p className="text-slate-600">Copper 75/100 GPD motor troubleshooting, head leak repairs & replacement.</p>
              </div>
              <span className="mt-3 text-blue-600 font-semibold">Learn More →</span>
            </a>

            <a href="/ro-pcb-circuit-board-repair-hyderabad" className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between mb-1">
                  PCB Circuit Repair <ArrowRight className="w-4 h-4 text-blue-600" />
                </h3>
                <p className="text-slate-600">Microcontroller board diagnosis, relay fixes & electrical sensor calibration.</p>
              </div>
              <span className="mt-3 text-blue-600 font-semibold">Learn More →</span>
            </a>

            <a href="/ro-smps-power-supply-repair-hyderabad" className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between mb-1">
                  SMPS Adapter Fix <ArrowRight className="w-4 h-4 text-blue-600" />
                </h3>
                <p className="text-slate-600">Heavy-duty 24V / 36V 2.5A power supplies with surge protection.</p>
              </div>
              <span className="mt-3 text-blue-600 font-semibold">Learn More →</span>
            </a>

            <a href="/ro-uv-lamp-replacement-hyderabad" className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between mb-1">
                  UV Lamp Replacement <ArrowRight className="w-4 h-4 text-blue-600" />
                </h3>
                <p className="text-slate-600">Philips 11W UV tube replacement, quartz sleeve cleaning & ballast repair.</p>
              </div>
              <span className="mt-3 text-blue-600 font-semibold">Learn More →</span>
            </a>

            <a href="/ro-tds-adjustment-controller-service-hyderabad" className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between mb-1">
                  TDS Controller Tuning <ArrowRight className="w-4 h-4 text-blue-600" />
                </h3>
                <p className="text-slate-600">Mineralizer flow regulator balancing to achieve optimal 80-150 PPM drinking TDS.</p>
              </div>
              <span className="mt-3 text-blue-600 font-semibold">Learn More →</span>
            </a>

            <a href="/ro-water-leakage-repair-hyderabad" className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between mb-1">
                  Leakage & Pipe Repair <ArrowRight className="w-4 h-4 text-blue-600" />
                </h3>
                <p className="text-slate-600">Cracked housing replacement, quick-connect elbow fixes & food-grade tubing.</p>
              </div>
              <span className="mt-3 text-blue-600 font-semibold">Learn More →</span>
            </a>

            <a href="/ro-sanitization-tank-cleaning-service-hyderabad" className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between mb-1">
                  Tank Sanitization <ArrowRight className="w-4 h-4 text-blue-600" />
                </h3>
                <p className="text-slate-600">Food-grade sanitization, biofilm disinfection & internal pipe descaling.</p>
              </div>
              <span className="mt-3 text-blue-600 font-semibold">Learn More →</span>
            </a>

            <a href="/complete-ro-maintenance-service-hyderabad" className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center justify-between mb-1">
                  Complete Maintenance <ArrowRight className="w-4 h-4 text-blue-600" />
                </h3>
                <p className="text-slate-600">Comprehensive 12-point preventative service & full system health audit.</p>
              </div>
              <span className="mt-3 text-blue-600 font-semibold">Learn More →</span>
            </a>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-bold text-slate-700 py-1">Brand Repair Centers:</span>
            <a href="/kent-ro-service-repair-hyderabad" className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-semibold transition-colors">Kent RO</a>
            <a href="/aquaguard-ro-service-repair-hyderabad" className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-semibold transition-colors">Aquaguard</a>
            <a href="/livpure-ro-service-repair-hyderabad" className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-semibold transition-colors">Livpure</a>
            <a href="/pureit-ro-service-repair-hyderabad" className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-semibold transition-colors">Pureit</a>
            <a href="/ao-smith-ro-service-repair-hyderabad" className="px-3 py-1 rounded-lg bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 font-semibold transition-colors">AO Smith</a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-3 text-xs">
            <span className="font-bold text-slate-700 py-1">Related Services:</span>
            <a href="/ro-filter-replacement-hyderabad" className="text-blue-600 hover:underline py-1">RO Filter Replacement</a>
            <span className="text-slate-300">•</span>
            <a href="/ro-installation-hyderabad" className="text-blue-600 hover:underline py-1">RO Installation</a>
            <span className="text-slate-300">•</span>
            <a href="/ro-amc-service" className="text-blue-600 hover:underline py-1">RO AMC Plans</a>
            <span className="text-slate-300">•</span>
            <a href="/ro-shifting-uninstallation-reinstallation-hyderabad" className="text-blue-600 hover:underline py-1">RO Shifting & Reinstallation</a>
            <span className="text-slate-300">•</span>
            <a href="/ro-service-hyderabad" className="text-blue-600 hover:underline py-1">All Hyderabad Locations</a>
          </div>
        </div>

        {/* Repair Pricing & Diagnostics */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Transparent Service Standards</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How Our RO Repair Process Works
            </h2>
            <ol className="space-y-4 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                <span><strong>Book Online or Call:</strong> Schedule a visit at your preferred 2-hour time slot across Malakpet, Dilsukhnagar, Banjara Hills, Gachibowli, Kukatpally, or Secunderabad.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                <span><strong>360° Technical Inspection (₹150):</strong> Our technician tests water TDS, electrical voltage, pump pressure, and valve integrity.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                <span><strong>Upfront Estimate Approval:</strong> You receive an exact estimate before any repair work begins. When you approve, the ₹150 inspection fee is 100% waived!</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">4</span>
                <span><strong>Genuine Parts & Warranty:</strong> We install factory-sealed spare parts backed by our official replacement warranty.</span>
              </li>
            </ol>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield className="w-6 h-6 text-green-400" /> Multi-Brand Repair Specialists
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We carry specialized tooling and original filter cartridges for all Indian and international water purifier brands:
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-200">
              <div className="bg-slate-800 p-2.5 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" /> Kent RO Systems
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" /> Eureka Forbes Aquaguard
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" /> HUL Pureit
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" /> Livpure & Havells
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" /> Blue Star & A.O. Smith
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" /> Custom Assembled RO
              </div>
            </div>
            <div className="pt-4 border-t border-slate-800 text-center">
              <button
                onClick={onOpenBooking}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg text-sm"
              >
                Schedule Rapid Diagnostic Visit
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
