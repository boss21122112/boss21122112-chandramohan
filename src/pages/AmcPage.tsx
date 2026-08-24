import React from "react";
import { CheckCircle, Shield, Phone, ArrowRight, Clock, Award, Sparkles } from "lucide-react";

interface AmcPageProps {
  onOpenBooking?: () => void;
}

export const AmcPage: React.FC<AmcPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-blue-50 text-center max-w-4xl mx-auto">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            365 Days Water Protection
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Annual Maintenance Contract (AMC) for RO Purifiers
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Protect your family's health and your RO investment with Rainbow Aquafresh AMC plans starting at just ₹1,999/year. Includes scheduled quarterly checkups, free genuine filter & membrane replacement, and unlimited zero-charge breakdown repair visits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
            >
              Enroll in AMC Plan <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+918885556965"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition"
            >
              <Phone className="w-5 h-5" /> Call AMC Helpline: +91 8885556965
            </a>
          </div>
        </div>

        {/* AMC Pricing Plans */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Choose Your AMC Protection Tier</h2>
            <p className="text-slate-600 text-sm mt-2">No hidden labor fees. 100% transparent consumable coverage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Plan 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between relative">
              <div>
                <span className="bg-slate-100 text-slate-700 font-bold text-xs px-3 py-1 rounded-full uppercase">Basic AMC</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-4">Silver Protection</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">₹1,999</span>
                  <span className="text-slate-500 text-sm">/ year</span>
                </div>
                <p className="text-slate-600 text-xs mt-3">Ideal for municipal water with moderate TDS levels.</p>

                <ul className="space-y-3.5 mt-6 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                    <span>3 Mandatory Periodic Maintenance Visits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Free Pre-Filter & Carbon Replacement (2 Sets)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                    <span>Unlimited Free Breakdown Service Calls</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-400">
                    <span className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                    <span className="line-through">RO Membrane Replacement (Extra)</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full mt-8 bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold py-3.5 rounded-xl text-sm transition"
              >
                Select Silver Plan
              </button>
            </div>

            {/* Plan 2: Most Popular */}
            <div className="bg-gradient-to-b from-blue-600 to-blue-700 text-white p-8 rounded-3xl shadow-xl border border-blue-500 flex flex-col justify-between relative transform lg:-translate-y-2">
              <span className="absolute -top-3.5 right-8 bg-amber-400 text-slate-950 font-black text-xs px-4 py-1 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Best Value
              </span>
              <div>
                <span className="bg-blue-500/30 text-blue-100 font-bold text-xs px-3 py-1 rounded-full uppercase">Comprehensive AMC</span>
                <h3 className="text-2xl font-bold text-white mt-4">Gold Total Secure</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white">₹2,999</span>
                  <span className="text-blue-200 text-sm">/ year</span>
                </div>
                <p className="text-blue-100 text-xs mt-3">Recommended for Hyderabad borewell water up to 2000 PPM TDS.</p>

                <ul className="space-y-3.5 mt-6 text-xs sm:text-sm text-blue-50">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>4 Mandatory Periodic Service Visits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Free Pre-Filter & Carbon Replacement (3 Sets)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-300 shrink-0" />
                    <span><strong>Free Genuine TFC RO Membrane Replacement</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Unlimited Free Breakdown Service Calls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Zero Labor & Zero Visiting Charges</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full mt-8 bg-white hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 rounded-xl text-sm shadow-lg transition"
              >
                Select Gold Plan
              </button>
            </div>

            {/* Plan 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between relative">
              <div>
                <span className="bg-purple-100 text-purple-700 font-bold text-xs px-3 py-1 rounded-full uppercase">Platinum AMC</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-4">All-Inclusive VIP</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">₹4,499</span>
                  <span className="text-slate-500 text-sm">/ year</span>
                </div>
                <p className="text-slate-600 text-xs mt-3">Complete peace of mind including electrical pumps and SMPS.</p>

                <ul className="space-y-3.5 mt-6 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>4 Mandatory Service Visits + Water Health Audit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>All Consumables & Membrane Replaced Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                    <span><strong>Free Booster Pump & SMPS Replacement</strong> if faulty</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 shrink-0" />
                    <span>Priority 2-Hour SLA Response Time</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full mt-8 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl text-sm transition"
              >
                Select Platinum Plan
              </button>
            </div>

          </div>
        </div>

        {/* Why AMC is Mandatory */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why Annual Filter & Membrane Replacement is Essential
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            In Hyderabad, raw borewell and municipal tap water contains dissolved chlorine, heavy salts, organic matter, and sediment. Without timely filter replacement:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
              <h3 className="font-bold text-slate-900 mb-2">1. Bio-Foul & Bacteria Growth</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Overdue sediment and carbon filters become breeding grounds for bacteria, contaminating your purified water storage tank.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
              <h3 className="font-bold text-slate-900 mb-2">2. Membrane Scaling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Calcium and magnesium scale build up on the delicate TFC membrane pores, drastically reducing water flow and raising TDS levels.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
              <h3 className="font-bold text-slate-900 mb-2">3. Pump Overload Failure</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clogged filters force the booster pump to work against extreme backpressure, causing motor overheating and expensive pump burnout.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
