import React from "react";
import { CheckCircle, Shield, Phone, ArrowRight, Building2, Factory, Stethoscope, Utensils } from "lucide-react";

interface CommercialPlantsPageProps {
  onOpenBooking?: () => void;
}

export const CommercialPlantsPage: React.FC<CommercialPlantsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-blue-50 text-center max-w-4xl mx-auto">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            Industrial Water Purification Systems
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Commercial & Industrial RO Plants in Hyderabad
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Rainbow Aquafresh Systems manufactures, supplies, and maintains heavy-duty stainless steel and FRP commercial Reverse Osmosis plants across Hyderabad and Telangana. Engineered for continuous industrial duty cycles compliant with BIS drinking standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
            >
              Request Plant Quotation <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="tel:+918885556965"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl shadow-md transition"
            >
              <Phone className="w-5 h-5" /> Speak to Engineer: +91 8885556965
            </a>
          </div>
        </div>

        {/* Plant Capacities Grid */}
        <div className="space-y-8">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Custom Skids</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Our Commercial RO Plant Capacities</h2>
            <p className="text-slate-600 text-sm mt-2 max-w-3xl">
              From compact institutional skids to mega industrial packaging units, we configure systems based on your exact raw water TDS and daily volume requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
              <div>
                <span className="bg-blue-50 text-blue-700 font-extrabold text-xs px-3 py-1 rounded-full uppercase">Light Institutional</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-4">25 LPH & 50 LPH Plants</h3>
                <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                  Ideal for schools, clinics, restaurants, and small corporate offices (20 to 100 persons). Compact skid mounting with commercial 300 GPD high-rejection TFC membranes and heavy-duty dual booster pumps.
                </p>
                <ul className="space-y-2 mt-6 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> 5-Stage RO+UV+TDS Purification</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> Stainless Steel / MS Epoxy Skid</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> Fully Automatic Float Operation</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Turnkey Price</div>
                  <div className="text-lg font-extrabold text-blue-600">From ₹18,500</div>
                </div>
                <button onClick={onOpenBooking} className="bg-slate-900 text-white font-bold px-4 py-2 rounded-xl text-xs">Get Quote</button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between border-blue-500/30">
              <div>
                <span className="bg-blue-600 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase">Medium Institutional</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-4">100 LPH & 250 LPH Plants</h3>
                <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                  Engineered for mid-sized IT tech parks, hospitals, hostels, and residential apartment clubhouses (100 to 500 persons). Equipped with vertical multi-stage centrifugal booster pumps and antiscalant dosing.
                </p>
                <ul className="space-y-2 mt-6 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> 4040 Commercial TFC Membranes</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> Rotameter Flow Meters & Pressure Gauges</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> Auto-Flush Solenoid Control Panel</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Turnkey Price</div>
                  <div className="text-lg font-extrabold text-blue-600">From ₹45,000</div>
                </div>
                <button onClick={onOpenBooking} className="bg-blue-600 text-white font-bold px-4 py-2 rounded-xl text-xs">Get Quote</button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md flex flex-col justify-between">
              <div>
                <span className="bg-purple-100 text-purple-700 font-extrabold text-xs px-3 py-1 rounded-full uppercase">Heavy Industrial</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-4">500 LPH to 2000 LPH Plants</h3>
                <p className="text-slate-600 text-xs mt-3 leading-relaxed">
                  Heavy industrial water purification for packaged drinking water units, beverage factories, pharmaceutical manufacturing, boiler feeds, and mega residential townships.
                </p>
                <ul className="space-y-2 mt-6 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> FRP Sand & Activated Carbon Vessels</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> PLC Touch Screen Automation</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> Industrial UV & Ozone Sterilization</li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Industrial Skid</div>
                  <div className="text-lg font-extrabold text-purple-600">Custom Specs</div>
                </div>
                <button onClick={onOpenBooking} className="bg-slate-900 text-white font-bold px-4 py-2 rounded-xl text-xs">Get Quote</button>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Served */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Industries & Applications We Serve</h2>
            <p className="text-slate-600 text-sm mt-2">Custom water treatment engineering across Hyderabad, Jeedimetla, Balanagar, Medchal, and Patancheru industrial corridors.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
              <Building2 className="w-10 h-10 text-blue-600 mx-auto" />
              <h3 className="font-bold text-slate-900">Schools & IT Tech Parks</h3>
              <p className="text-xs text-slate-600">Safe, chilled drinking water stations with central RO purification for students and IT employees.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
              <Stethoscope className="w-10 h-10 text-green-600 mx-auto" />
              <h3 className="font-bold text-slate-900">Hospitals & Labs</h3>
              <p className="text-xs text-slate-600">Zero-bacteria, low-conductivity water for dialysis units, laboratories, and surgical sterilization.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
              <Utensils className="w-10 h-10 text-amber-600 mx-auto" />
              <h3 className="font-bold text-slate-900">Hotels & Restaurants</h3>
              <p className="text-xs text-slate-600">Mineral-balanced water for commercial kitchens, ice machines, coffee brewers, and guest dining.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-3">
              <Factory className="w-10 h-10 text-purple-600 mx-auto" />
              <h3 className="font-bold text-slate-900">Manufacturing & Boilers</h3>
              <p className="text-xs text-slate-600">Softened and de-mineralized water to prevent scale build-up in industrial boilers and chillers.</p>
            </div>
          </div>
        </div>

        {/* Commercial & Industrial Water Solutions Directory */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg space-y-6">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider">Turnkey Engineering Directory</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Specialized Commercial RO Plant Solutions</h2>
            <p className="text-slate-600 text-sm mt-2">Explore custom engineered water purification systems tailored to your industry requirements across Hyderabad and Telangana.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/commercial-ro-plant-installation-hyderabad" className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">Commercial RO Installation <ArrowRight className="w-4 h-4 text-blue-600" /></h3>
                <p className="text-xs text-slate-500 mt-2">Custom skid mounting, plumbing & electrical commissioning.</p>
              </div>
              <span className="text-xs text-blue-600 font-semibold mt-3">Explore Service →</span>
            </a>
            <a href="/commercial-ro-plant-amc-maintenance-hyderabad" className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">Commercial RO AMC <ArrowRight className="w-4 h-4 text-blue-600" /></h3>
                <p className="text-xs text-slate-500 mt-2">Preventative maintenance, antiscalant dosing & membrane descaling.</p>
              </div>
              <span className="text-xs text-blue-600 font-semibold mt-3">Explore Service →</span>
            </a>
            <a href="/industrial-ro-plant-manufacturers-hyderabad" className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">Industrial RO Plants <ArrowRight className="w-4 h-4 text-blue-600" /></h3>
                <p className="text-xs text-slate-500 mt-2">Up to 20,000 LPH heavy-duty manufacturing skids.</p>
              </div>
              <span className="text-xs text-blue-600 font-semibold mt-3">Explore Service →</span>
            </a>
            <a href="/apartment-gated-community-ro-plants-hyderabad" className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">Apartment & Gated Communities <ArrowRight className="w-4 h-4 text-blue-600" /></h3>
                <p className="text-xs text-slate-500 mt-2">Centralized water purification for residential societies.</p>
              </div>
              <span className="text-xs text-blue-600 font-semibold mt-3">Explore Service →</span>
            </a>
            <a href="/hospital-healthcare-ro-plants-hyderabad" className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">Hospital & Healthcare Plants <ArrowRight className="w-4 h-4 text-blue-600" /></h3>
                <p className="text-xs text-slate-500 mt-2">Dialysis grade, sterile low-conductivity water systems.</p>
              </div>
              <span className="text-xs text-blue-600 font-semibold mt-3">Explore Service →</span>
            </a>
            <a href="/school-college-ro-water-plants-hyderabad" className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">School & College RO Plants <ArrowRight className="w-4 h-4 text-blue-600" /></h3>
                <p className="text-xs text-slate-500 mt-2">High volume drinking water coolers for campus students.</p>
              </div>
              <span className="text-xs text-blue-600 font-semibold mt-3">Explore Service →</span>
            </a>
            <a href="/hotel-resort-commercial-ro-plants-hyderabad" className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">Hotel & Resort RO Plants <ArrowRight className="w-4 h-4 text-blue-600" /></h3>
                <p className="text-xs text-slate-500 mt-2">Dining, kitchen, laundry and boiler water treatment.</p>
              </div>
              <span className="text-xs text-blue-600 font-semibold mt-3">Explore Service →</span>
            </a>
            <a href="/restaurant-cafe-ro-water-purification-hyderabad" className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50 transition-all flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold text-slate-900 flex items-center justify-between">Restaurant & Cafe Purification <ArrowRight className="w-4 h-4 text-blue-600" /></h3>
                <p className="text-xs text-slate-500 mt-2">Beverage-grade water for espresso and culinary prep.</p>
              </div>
              <span className="text-xs text-blue-600 font-semibold mt-3">Explore Service →</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
