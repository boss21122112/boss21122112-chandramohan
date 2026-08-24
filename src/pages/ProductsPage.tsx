import React from "react";
import { DOMESTIC_PRODUCTS, COMMERCIAL_CAPACITIES, CONTACT_INFO } from "../data";
import { ProductCardImage } from "../components/ProductImageGallery";
import { Product } from "../types";
import { CheckCircle, Shield, Award, Wrench, Phone, ArrowRight, Droplets, Zap, Filter } from "lucide-react";

interface ProductsPageProps {
  products?: Product[];
  customImages?: Record<string, string[]>;
  onSelectProduct?: (product: any) => void;
  onOpenBooking?: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  customImages,
  onSelectProduct,
  onOpenBooking,
}) => {
  const displayProducts = products && products.length > 0 ? products : DOMESTIC_PRODUCTS;

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-blue-50">
          <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block font-mono">
            Complete Purification Catalog
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            RO Purifiers, Commercial Plants, Spare Membranes, Pumps & Certified Technicians in Hyderabad
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
            Explore our complete range of 100% genuine domestic water purifiers, industrial skid-mounted commercial RO systems, heavy-duty copper booster pumps, high-rejection TFC membranes, and certified field technicians.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${CONTACT_INFO.rawPhones[0]}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" /> Call Sales: {CONTACT_INFO.phones[0]}
            </a>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition cursor-pointer"
            >
              Book Installation / Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Section 1: Domestic RO Water Purifiers */}
        <section className="space-y-8" id="domestic-products">
          <div className="border-b border-slate-200 pb-4 flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Residential Models ({displayProducts.length} Products)</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">1. Domestic RO Water Purifiers</h2>
            </div>
            <p className="text-slate-500 text-sm max-w-md">
              Engineered specifically for Hyderabad municipal (Krishna/Godavari) and high-TDS borewell water up to 2500 PPM.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProducts.map((prod) => (
              <div 
                key={prod.id} 
                className="bg-white rounded-3xl border border-blue-50/80 overflow-hidden shadow-md shadow-blue-900/5 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Decorative product model indicator flag */}
                <div className="p-4 bg-slate-50 border-b border-blue-50 flex justify-between items-center">
                  <span className="text-xs font-black uppercase tracking-wider text-slate-400 font-mono">MODEL ID: {prod.id}</span>
                </div>

                {/* Purifier interactive Visual Mockup */}
                <div className="group relative">
                  <ProductCardImage 
                    productId={prod.id} 
                    productName={prod.name} 
                    onClickDetails={() => onSelectProduct?.(prod)} 
                    customImages={customImages}
                  />
                </div>

                {/* Body textual block */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between font-sans">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-none">{prod.name}</h3>
                      <div className="text-right flex flex-col items-end">
                        <div className="flex items-center gap-1.5">
                          {prod.originalPrice && (
                            <span className="text-xs text-slate-400 line-through font-semibold font-mono">{prod.originalPrice}</span>
                          )}
                          <span className="text-sm font-black text-blue-600 bg-blue-50/80 px-2.5 py-1 rounded-lg border border-blue-100 font-mono shadow-xs">
                            {prod.price || 'Enquire'}
                          </span>
                        </div>
                        <span className="text-[10px] font-black text-emerald-600 tracking-tight mt-1 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded-sm uppercase whitespace-nowrap animate-pulse">📞 Call for Best Offer</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-slate-500 mt-2.5 leading-relaxed h-14 overflow-hidden font-normal text-ellipsis">
                      {prod.description}
                    </p>

                    <div className="mt-4 bg-slate-50 border border-blue-50/60 rounded-xl p-3 space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block font-mono">Best Application:</span>
                      <p className="text-xs text-slate-700 font-bold leading-none">{prod.bestFor}</p>
                    </div>

                    {/* Specifications */}
                    <div className="grid grid-cols-2 gap-2 mt-4 text-[11px]">
                      <div className="bg-slate-50 p-2 rounded-lg border border-blue-50/40 text-slate-600 font-medium flex items-center justify-between">
                        <span>💾 Cap:</span>
                        <strong className="text-indigo-600 font-black bg-indigo-50 px-2.5 py-0.5 rounded-md border border-indigo-100 font-mono text-[10px] shadow-2xs">{prod.storageCapacity}</strong>
                      </div>
                      <div className="bg-slate-50 p-2 rounded-lg border border-blue-50/40 text-slate-600 font-medium flex items-center justify-between">
                        <span>⚡ Flow:</span>
                        <strong className="text-blue-600 font-black bg-blue-50/80 px-2.5 py-0.5 rounded-md border border-blue-100 font-mono text-[10px] shadow-2xs">{prod.flowCapacity}</strong>
                      </div>
                    </div>

                    {/* Features list */}
                    {prod.keyFeatures && prod.keyFeatures.length > 0 && (
                      <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                        {prod.keyFeatures.slice(0, 3).map((f, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />
                            <span className="truncate">{f}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Operational buttons */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onSelectProduct?.(prod)}
                        className="border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold py-2.5 rounded-xl text-center text-xs transition-all cursor-pointer"
                      >
                        Specs & Gallery
                      </button>

                      <button
                        onClick={() => {
                          if (onSelectProduct) {
                            onSelectProduct(prod);
                          } else if (onOpenBooking) {
                            onOpenBooking();
                          }
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-center text-xs shadow-md shadow-blue-100 transition-all cursor-pointer"
                      >
                        Buy Now
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
                          `Hi Rainbow Aquafresh,\n\nI want to buy the ${prod.name} RO Purifier.\n\nPlease share delivery and installation timings.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded-xl text-center text-[10px] transition-all flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                      >
                        WhatsApp Enquiry
                      </a>

                      <a
                        href={`tel:${CONTACT_INFO.rawPhones[0]}`}
                        className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded-xl text-center text-[10px] transition-all flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
                      >
                        <Phone className="w-3 h-3" /> Call Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Commercial & Industrial RO Plants */}
        <section className="space-y-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-md" id="commercial-plants">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Heavy Duty Institutional Systems ({COMMERCIAL_CAPACITIES.length} Capacities)</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">2. Commercial & Industrial RO Water Plants</h2>
            <p className="text-slate-600 text-sm mt-2 max-w-3xl">
              Turnkey manufacturing, assembly, and maintenance of stainless steel and FRP skid commercial RO plants from 25 LPH to 2000 LPH for schools, hospitals, corporate tech parks, restaurants, and apartment complexes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMERCIAL_CAPACITIES.map((c) => (
              <div key={c.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 hover:shadow-lg transition-all">
                <div>
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-3 font-black text-lg">
                    {c.capacity.replace(' LPH', '')}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{c.capacity} RO Plant</h3>
                  <p className="text-xs text-blue-700 font-bold font-mono mb-2">Output: {c.hourlyOutput}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {c.idealFor}
                  </p>
                  <div className="space-y-1 mb-3">
                    {c.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-700">
                        <CheckCircle className="w-3 h-3 text-green-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                  <button
                    onClick={onOpenBooking}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition cursor-pointer"
                  >
                    Get Quotation
                  </button>
                  <a
                    href={`tel:${CONTACT_INFO.rawPhones[0]}`}
                    className="text-slate-700 hover:text-blue-600 font-bold text-xs flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Genuine Spare Parts, Membranes & Booster Pumps */}
        <section className="space-y-8" id="spare-parts">
          <div>
            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider font-mono">Certified Consumables</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">3. Genuine RO Membranes, Booster Pumps & Spare Parts</h2>
            <p className="text-slate-600 text-sm mt-2 max-w-3xl">
              We supply and install only 100% genuine, factory-certified consumables to guarantee optimal water rejection, taste, and electrical safety.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Filter className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">High-Rejection Membranes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Genuine Thin Film Composite (TFC) 75 GPD, 80 GPD, and 100 GPD membranes. Rejects up to 98% of dissolved heavy metals, hardness, and salt up to 2500 PPM TDS.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Zap className="w-8 h-8 text-amber-500 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">100% Copper Booster Pumps</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Heavy-duty 75 GPD, 100 GPD, and 150 GPD diaphragm booster pumps with 100% pure copper motor winding. Silent operation with dry-run and overload protection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Droplets className="w-8 h-8 text-cyan-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Mineralizer & Alkaline Filters</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active copper-zinc mineral cartridges, alkaline pH boosters, inline activated carbon GAC blocks, and 5-micron polypropylene sediment pre-filters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <Wrench className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-bold text-slate-900 mb-1">Electricals & ABS Tanks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Original 24V/36V SMPS power adapters, food-grade solenoid valves (SV), auto-flushing actuators, float switches, and BPA-free ABS storage tanks.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Certified RO Technicians & Support */}
        <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="max-w-3xl space-y-6 relative z-10">
            <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider font-mono">
              Hyderabad Field Team
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight">
              4. Our Certified RO Technicians & Technical Support
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              When you book a service or order a spare part from Rainbow Aquafresh Systems, you receive support from background-verified, uniformed water purification engineers with over 10+ years of technical experience across Hyderabad and Secunderabad.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm font-medium">4-Hour SLA Emergency Response</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm font-medium">On-Site Digital TDS & pH Testing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Wrench className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm font-medium">Multi-Brand Diagnostic Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm font-medium">100% Genuine Parts Warranty</span>
              </div>
            </div>
            <div className="pt-6">
              <a
                href={`tel:${CONTACT_INFO.rawPhones[0]}`}
                className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-blue-50 font-bold px-6 py-3.5 rounded-xl shadow-lg transition"
              >
                <Phone className="w-5 h-5 text-blue-600" /> Call Technician Helpline: {CONTACT_INFO.phones[0]}
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
