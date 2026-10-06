import React, { useState } from "react";
import { 
  CheckCircle, 
  Shield, 
  Phone, 
  ArrowRight, 
  Clock, 
  Award, 
  Sparkles, 
  Wrench, 
  AlertTriangle, 
  ChevronDown, 
  PhoneCall, 
  MessageSquare, 
  Building2, 
  Zap, 
  ShieldCheck, 
  HelpCircle 
} from "lucide-react";

interface AmcPageProps {
  onOpenBooking?: () => void;
}

export const AmcPage: React.FC<AmcPageProps> = ({ onOpenBooking }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the difference between Comprehensive AMC and Basic AMC?",
      answer: "Our Basic (Silver) AMC covers 3 scheduled maintenance visits, 2 full sets of sediment/carbon pre-filters, and unlimited free breakdown service calls with zero visiting charges. Our Comprehensive (Gold & Platinum) AMC additionally includes free replacement of the expensive Reverse Osmosis (RO) membrane and electrical components like the 24V booster pump and SMPS power adapter if they malfunction."
    },
    {
      question: "Does your AMC cover non-Rainbow purifiers like Kent, Aquaguard, Pureit, and Livpure?",
      answer: "Yes. Rainbow Aquafresh Systems provides annual maintenance contracts for all major domestic and commercial water purifier brands in Hyderabad, including Kent, Eureka Forbes Aquaguard, Pureit, Livpure, AO Smith, Havells, Blue Star, and custom-assembled RO systems."
    },
    {
      question: "How often will a technician visit for scheduled preventive maintenance?",
      answer: "Under our AMC contracts, our service team proactively schedules 3 to 4 periodic maintenance visits per year (every 90 to 120 days). During each visit, our technician inspects all filters, tests raw and pure TDS, sanitizes the water storage tank, and measures pump operating pressure."
    },
    {
      question: "Is the RO membrane really replaced free under Gold and Platinum plans?",
      answer: "Yes. If your water purifier's output TDS increases above acceptable limits or water output drops due to membrane scaling during the contract year, we install a 100% brand-new, genuine high-rejection TFC membrane with zero charges for parts or labor."
    },
    {
      question: "What happens if my water purifier breaks down between scheduled service visits?",
      answer: "AMC members receive unlimited emergency breakdown visits. When you call or WhatsApp our helpline, a certified technician is dispatched to your doorstep within 60 to 90 minutes anywhere in Greater Hyderabad with zero visiting or labor charges."
    },
    {
      question: "Do you provide Commercial RO Plant AMC in Hyderabad?",
      answer: "Yes. We offer customized commercial RO plant AMC contracts for residential gated communities, hospitals, schools, corporate offices, and restaurants with plant capacities from 50 LPH to 2,000 LPH, covering high-pressure pumps, multi-port valves, media vessels, and industrial 4040/8040 membranes."
    },
    {
      question: "When is an AMC more economical than paying per visit?",
      answer: "If you pay per visit in Hyderabad, 3 checkups, 2 filter sets, 1 membrane replacement, and 1 breakdown visit cost between ₹3,950 and ₹5,550 annually. Our Gold AMC covers all of this for just ₹2,999, saving over 40% while preventing contaminated water from delayed servicing."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans antialiased">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-blue-50 py-3 text-xs font-semibold text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 flex-wrap">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <span className="text-slate-300">/</span>
          <a href="/ro-service-hyderabad" className="hover:text-blue-600 transition-colors">Services</a>
          <span className="text-slate-300">/</span>
          <span className="text-blue-600 font-bold">RO AMC Service</span>
        </div>
      </div>

      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-blue-50 text-center max-w-4xl mx-auto">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
              365 Days Guaranteed Pure Water Protection
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Annual Maintenance Contract (AMC) for RO Purifiers in Hyderabad
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Protect your family's health and your RO investment with Rainbow Aquafresh AMC plans starting at just ₹1,999/year. Includes scheduled quarterly checkups, free genuine filter & membrane replacement, and unlimited zero-charge breakdown repair visits across Greater Hyderabad.
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
              <a
                href="https://wa.me/918885556965?text=Hello%20Rainbow%20Aquafresh,%20I%20am%20interested%20in%20an%20RO%20AMC%20Plan%20in%20Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl shadow-md transition"
              >
                <MessageSquare className="w-5 h-5" /> WhatsApp AMC Desk
              </a>
            </div>
          </div>

          {/* Who Should Choose an AMC */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Targeted Protection
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Who Needs an RO AMC in Hyderabad?
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Groundwater conditions across Hyderabad make structured annual maintenance essential for:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/70">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">High TDS Borewell Homes</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Areas like Kukatpally, Miyapur, Gachibowli & LB Nagar face 1,200–2,500 PPM TDS. Without AMC, membranes choke within 12 months.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/70">
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-bold mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Busy Households</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Never forget a filter replacement. Our CRM system proactively alerts you and schedules service visits every 90–120 days.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/70">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-3">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Older Purifiers (&gt;2 Years)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Older machines face booster pump vibration, electrical adapter failure, and joint leaks. AMC covers unexpected repair costs.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/70">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Commercial & Clinics</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Offices, cafes, diagnostic labs, and schools require uninterrupted high-volume pure water with guaranteed 2-hour priority SLA.
                </p>
              </div>
            </div>
          </div>

          {/* AMC Pricing Plans */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Published Transparent Rates
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Choose Your AMC Protection Tier</h2>
              <p className="text-slate-600 text-sm mt-2">No hidden labor fees. 100% transparent consumable coverage across Hyderabad.</p>
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
                  <p className="text-slate-600 text-xs mt-3">Ideal for municipal water with moderate TDS levels (&lt;800 PPM).</p>

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
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                      <span>Zero Labor & Zero Visiting Charges</span>
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
                  <p className="text-blue-100 text-xs mt-3">Recommended for Hyderabad borewell water up to 2,000 PPM TDS.</p>

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
                      <span>Zero Labor & Zero Spare Part Charges</span>
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
                  <p className="text-slate-600 text-xs mt-3">Complete peace of mind including electrical pumps, SMPS & UV system.</p>

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
                      <span>UV Chamber, Lamp & Ballast Replacement Free</span>
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

          {/* Detailed Coverage Checklist: What is Covered vs Not Covered */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Detailed AMC Coverage Checklist
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                100% transparent scope of work so you know exactly what is included in your contract:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold border-b border-slate-800">Component / Service Item</th>
                    <th className="p-4 font-bold border-b border-slate-800 text-center">Silver Plan (₹1,999)</th>
                    <th className="p-4 font-bold border-b border-slate-800 text-center">Gold Plan (₹2,999)</th>
                    <th className="p-4 font-bold border-b border-slate-800 text-center">Platinum VIP (₹4,499)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Periodic Preventive Checkups</td>
                    <td className="p-4 text-center">3 Visits</td>
                    <td className="p-4 text-center text-blue-700 font-bold">4 Visits</td>
                    <td className="p-4 text-center text-purple-700 font-bold">4 Visits + Lab Audit</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 font-semibold text-slate-900">Spun Sediment Pre-Filter Candles</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ 2 Sets Free</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ 3 Sets Free</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ 4 Sets Free</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Granular Activated Carbon (GAC) Filters</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ 1 Set Free</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ 2 Sets Free</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ 2 Sets Free</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 font-semibold text-slate-900">High-Rejection TFC RO Membrane</td>
                    <td className="p-4 text-center text-slate-400">Paid at Discount</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ 1 Brand New Free</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ 1 Brand New Free</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Booster Pump Motor / Head</td>
                    <td className="p-4 text-center text-slate-400">Paid at Discount</td>
                    <td className="p-4 text-center text-slate-400">Labor Free / Parts Paid</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ Replaced Free</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 font-semibold text-slate-900">24V/36V SMPS Power Adapter</td>
                    <td className="p-4 text-center text-slate-400">Paid at Discount</td>
                    <td className="p-4 text-center text-slate-400">Labor Free / Parts Paid</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ Replaced Free</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Emergency Breakdown Service Calls</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ Unlimited Free</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ Unlimited Free</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">✓ Unlimited Priority</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 font-semibold text-slate-900">Visiting & Technician Labor Charges</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">₹0 (Included)</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">₹0 (Included)</td>
                    <td className="p-4 text-center text-emerald-600 font-bold">₹0 (Included)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Cost Comparison: AMC vs Pay-Per-Visit */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Financial Savings
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                RO AMC vs. Paying Per Visit: Real Annual Cost Comparison
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                See how an AMC saves over 40% on annual water purifier upkeep across Greater Hyderabad:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold border-b border-slate-800">Service Event (12 Months)</th>
                    <th className="p-4 font-bold border-b border-slate-800 text-red-300">Without AMC (Pay-Per-Visit)</th>
                    <th className="p-4 font-bold border-b border-slate-800 text-emerald-300">With Rainbow Gold AMC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Periodic Inspections (3–4 Visits)</td>
                    <td className="p-4 text-red-600 font-medium">₹800 – ₹1,200 (Visiting fees)</td>
                    <td className="p-4 text-emerald-600 font-bold">₹0 (Included)</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 font-semibold text-slate-900">Pre-Filter & Carbon Replacements (2–3 Sets)</td>
                    <td className="p-4 text-red-600 font-medium">₹1,200 – ₹1,600</td>
                    <td className="p-4 text-emerald-600 font-bold">₹0 (Included)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">RO Membrane Replacement (75/80 GPD)</td>
                    <td className="p-4 text-red-600 font-medium">₹1,600 – ₹2,400</td>
                    <td className="p-4 text-emerald-600 font-bold">₹0 (Included in Gold)</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-4 font-semibold text-slate-900">Emergency Breakdown Service Call</td>
                    <td className="p-4 text-red-600 font-medium">₹350 + Labor</td>
                    <td className="p-4 text-emerald-600 font-bold">₹0 (Unlimited visits)</td>
                  </tr>
                  <tr className="bg-blue-50 font-bold">
                    <td className="p-4 text-blue-950 font-extrabold text-sm">Total Annual Expense</td>
                    <td className="p-4 text-red-700 font-extrabold text-sm">₹3,950 – ₹5,550+</td>
                    <td className="p-4 text-emerald-700 font-extrabold text-base">Only ₹2,999 All-Inclusive</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic mt-4 text-center">
              * In addition to direct cost savings, an AMC guarantees that you never drink contaminated or high-TDS water caused by delayed filter changes.
            </p>
          </div>

          {/* Commercial & Institutional RO Plant AMC */}
          <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">Commercial AMC Solutions</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Commercial & Institutional RO Plant AMC in Hyderabad</h2>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              In addition to residential purifiers, Rainbow Aquafresh Systems manages scheduled maintenance contracts for <a href="/commercial-ro-plants" className="text-sky-400 underline font-semibold">Commercial RO Plants</a> operating in schools, colleges, multi-specialty hospitals, hotels, software parks, and gated communities across Greater Hyderabad.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h3 className="font-bold text-white text-sm mb-1.5">50 to 250 LPH Plants</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tailored for clinics, cafes, boutique offices, and gyms. Includes monthly filter checks, antiscalant dosing, and quarterly membrane CIP chemical wash.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h3 className="font-bold text-white text-sm mb-1.5">500 to 1,000 LPH Plants</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered for schools, hotels, and medium factories. Covers sand/carbon media backwashing, high-pressure pump overhaul, and 4040 membrane maintenance.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-5 rounded-2xl">
                <h3 className="font-bold text-white text-sm mb-1.5">2,000+ LPH Industrial Plants</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Heavy-duty multi-stage skids for pharma, manufacturing, and gated communities. 24/7 breakdown coverage and statutory water test reports.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="/commercial-ro-plants"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition shadow-lg shadow-blue-600/30"
              >
                Explore Commercial RO Plants <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+918885556965"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition border border-white/20"
              >
                <Phone className="w-4 h-4" /> Call Commercial Desk: +91 8885556965
              </a>
            </div>
          </div>

          {/* Multi-Brand Purifiers Supported */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-md">
            <div className="max-w-3xl mx-auto text-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                Multi-Brand Water Purifiers Supported Under AMC
              </h2>
              <p className="text-xs text-slate-500 mt-1">Our certified technicians maintain all domestic and commercial brands:</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/kent-ro-service-repair-hyderabad" className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs px-4 py-2 rounded-xl transition border border-blue-100">
                Kent RO AMC
              </a>
              <span className="bg-slate-100 text-slate-700 font-semibold text-xs px-4 py-2 rounded-xl border border-slate-200">
                Aquaguard Eureka Forbes AMC
              </span>
              <span className="bg-slate-100 text-slate-700 font-semibold text-xs px-4 py-2 rounded-xl border border-slate-200">
                Pureit Water Purifier AMC
              </span>
              <span className="bg-slate-100 text-slate-700 font-semibold text-xs px-4 py-2 rounded-xl border border-slate-200">
                Livpure RO AMC
              </span>
              <span className="bg-slate-100 text-slate-700 font-semibold text-xs px-4 py-2 rounded-xl border border-slate-200">
                AO Smith RO AMC
              </span>
              <span className="bg-slate-100 text-slate-700 font-semibold text-xs px-4 py-2 rounded-xl border border-slate-200">
                Havells & Blue Star AMC
              </span>
              <a href="/products/" className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs px-4 py-2 rounded-xl transition border border-blue-100">
                Rainbow Aquafresh Models
              </a>
            </div>
          </div>

          {/* Step-by-Step AMC Onboarding */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Simple 4-Step Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                How Our AMC Onboarding Works
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-3">1</div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Book AMC Enrollment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Call, WhatsApp, or click enroll. Share your purifier brand, location, and preferred inspection time.</p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-3">2</div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Doorstep Health Audit</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Our engineer tests feed/purified water TDS, pump pressure, and electrical health in front of you.</p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-3">3</div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Filter Replacement & Tune-Up</h3>
                <p className="text-xs text-slate-600 leading-relaxed">We install fresh consumables, sanitize the storage tank, descale valves, and calibrate taste.</p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold mb-3">4</div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Digital Contract & Warranty</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Receive your digital AMC warranty card with automated scheduled quarterly service reminders.</p>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Customer Inquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Frequently Asked Questions About RO AMC
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

          {/* Related Services Internal Links */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-4">
              Explore Related Water Purifier Services:
            </h3>
            <div className="flex flex-wrap gap-2.5">
              <a href="/ro-repair-hyderabad" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                RO Repair Hyderabad <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/ro-service-hyderabad" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                RO Service Hub <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/ro-membrane-replacement-service-hyderabad" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                RO Membrane Replacement <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/ro-filter-replacement-hyderabad" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                Filter Replacement <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/kent-ro-service-repair-hyderabad" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                Kent RO Service & Repair <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/commercial-ro-plants" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                Commercial RO Plants <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/products/" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                Purifiers Catalog <ArrowRight className="w-3 h-3" />
              </a>
              <a href="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-xl transition-colors">
                Contact & Helpline <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 sm:p-12 rounded-3xl shadow-xl text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Enroll in Rainbow Aquafresh AMC Today
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl mx-auto mb-8">
              Guaranteed pure water 365 days a year. Instant technician dispatch within 60 to 90 minutes anywhere across Greater Hyderabad.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-extrabold px-8 py-4 rounded-xl shadow-lg transition"
              >
                Enroll Online Now <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="tel:+918885556965"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition"
              >
                <Phone className="w-5 h-5" /> Call +91 8885556965
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
