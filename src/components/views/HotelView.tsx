"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight, FaMapMarkedAlt, FaTags, FaHistory, FaBookmark, FaRegStar, FaHotel, FaPlane, FaCar, FaRobot } from "react-icons/fa";
import { Package } from "@/data/mockData";

interface HotelViewProps {
  popularDests: any[];
  featuredPackages: Package[];
  userMode: "new" | "returning";
  setUserMode: (mode: "new" | "returning") => void;
  setSelectedPackage: (pkg: Package | null) => void;
}

export default function HotelView({
  popularDests,
  featuredPackages,
  userMode,
  setUserMode,
  setSelectedPackage
}: HotelViewProps) {
  const router = useRouter();
  const scrollDestsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollDests = (direction: "left" | "right") => {
    if (scrollDestsRef.current) {
      const { scrollLeft } = scrollDestsRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 320 : scrollLeft + 320;
      scrollDestsRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const scrollPackages = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 340 : scrollLeft + 340;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-12 animate-fade-in pt-4">
      {/* Hotel Offers */}
      <section className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Exclusive Hotel Offers</h2>
            <p className="text-sm text-slate-500 mt-1">Best deals on premium stays across the globe.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            onClick={() => router.push('/hotels/search')}
            className="relative bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-between cursor-pointer hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full mb-4 inline-block">Domestic Hotels</span>
              <h3 className="text-3xl font-black text-slate-800 mb-2">Up to 40% OFF</h3>
              <p className="text-sm text-slate-500 font-medium">On your first booking with ITS Global.</p>
            </div>
            <div className="relative z-10 w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaHotel className="text-3xl animate-float-1" />
            </div>
          </div>

          <div 
            onClick={() => router.push('/hotels/search')}
            className="relative bg-white border border-slate-200 rounded-3xl p-8 flex items-center justify-between cursor-pointer hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-50 rounded-full blur-3xl -ml-10 -mb-10" />
            <div className="relative z-10">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full mb-4 inline-block">International Stays</span>
              <h3 className="text-3xl font-black text-slate-800 mb-2">Flat ₹5,000 OFF</h3>
              <p className="text-sm text-slate-500 font-medium">Use code ITSGLOBAL on checkout.</p>
            </div>
            <div className="relative z-10 w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <FaMapMarkedAlt className="text-3xl animate-float-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Suggestions Section */}
      <section className="max-w-5xl mx-auto bg-gradient-to-br from-slate-50 via-indigo-50/40 to-blue-50/20 border border-slate-200/80 p-6 md:p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
        {/* Decorative subtle background pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="flex items-center justify-between border-b border-slate-200 pb-4 relative z-10">
          <div>
            <h2 className="text-lg font-black text-slate-900 tracking-tight">Popular destinations outside India</h2>
            <p className="text-[11px] text-slate-500 mt-0.5">Explore premium global destinations and check hotels & bookings instantly.</p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scrollDests("left")}
              className="p-2 rounded-xl border border-slate-200 hover:border-primary bg-white hover:bg-slate-50 text-slate-700 transition-all shadow-sm"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={() => scrollDests("right")}
              className="p-2 rounded-xl border border-slate-200 hover:border-primary bg-white hover:bg-slate-50 text-slate-700 transition-all shadow-sm"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>

        <div
          ref={scrollDestsRef}
          className="flex gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth relative z-10"
          style={{ scrollbarWidth: "none" }}
        >
          {popularDests.map((dest) => (
            <div
              key={dest.name}
              onClick={() => router.push('/hotels/search')}
              className={`w-[280px] sm:w-[290px] flex-shrink-0 relative h-[360px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col justify-end p-5 group cursor-pointer transition-all duration-500 hover:-translate-y-2.5 ${dest.shadow}`}
            >
              <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
              <div className={`absolute inset-0 bg-gradient-to-t ${dest.overlay}`} />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                <div>
                  <h3 className="font-black text-xl text-white flex items-center gap-2 tracking-tight">
                    {dest.name} <span className="text-lg">{dest.flag}</span>
                  </h3>
                  <div className="flex justify-between items-center text-[10px] text-indigo-100 mt-1 font-bold">
                    <span>{dest.count.split(" ")[0]} Destinations</span>
                    <span>{dest.code}+ Hotels</span>
                  </div>
                </div>

                <button className={`w-full ${dest.btnBg} backdrop-blur-md border ${dest.btnBorder} text-white font-black py-3 px-4 rounded-2xl text-[10px] flex items-center justify-between transition-all hover:brightness-125 uppercase tracking-widest`}>
                  <span>Explore now</span>
                  <FaChevronRight className="text-[8px]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discovery Sections Matrix (Full Width Slider) */}
      <section id="packages-section" className="max-w-5xl mx-auto space-y-4 relative">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
          <div>
            <h2 className="text-base font-bold text-slate-800 flex items-center gap-1.5">
              <FaTags className="text-accent text-xs" />
              Signature Tour Packages
            </h2>
            <p className="text-[10px] text-slate-500 font-medium">Swipe to explore handpicked luxury packages around the globe.</p>
          </div>

          {/* Slider Buttons */}
          <div className="flex gap-1.5">
            <button
              onClick={() => scrollPackages("left")}
              className="p-1.5 rounded-lg border border-slate-200 hover:border-primary text-slate-500 hover:text-primary transition-all bg-white shadow-sm"
            >
              <FaChevronLeft className="text-[10px]" />
            </button>
            <button
              onClick={() => scrollPackages("right")}
              className="p-1.5 rounded-lg border border-slate-200 hover:border-primary text-slate-500 hover:text-primary transition-all bg-white shadow-sm"
            >
              <FaChevronRight className="text-[10px]" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Packages Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {featuredPackages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg)}
              className={`w-[280px] sm:w-[300px] flex-shrink-0 relative h-[360px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col justify-end p-5 group cursor-pointer transition-all duration-500 hover:-translate-y-2.5 ${pkg.shadow}`}
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 pointer-events-none"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${pkg.overlay}`} />

              {/* Floating Top Badges */}
              <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/20 text-white text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                {pkg.budget}
              </div>
              <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-yellow-400 text-[9px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-0.5">
                ★ {pkg.rating}
              </div>

              {/* Content Container */}
              <div className="relative z-10 space-y-3.5">
                <div>
                  <h3 className="font-black text-base text-white tracking-tight leading-tight line-clamp-1 group-hover:text-cyan-300 transition-colors">
                    {pkg.name}
                  </h3>
                  <span className="text-[10px] text-indigo-150 flex items-center gap-1.5 mt-1 font-bold">
                    <FaMapMarkedAlt className="text-[9px] text-indigo-300" /> {pkg.destination}
                  </span>
                </div>

                <div className="w-full border-t border-white/10 pt-3 flex items-center justify-between">
                  <div>
                    <span className="text-[8px] text-indigo-200 block font-bold uppercase tracking-wider">Starts at</span>
                    <span className="text-sm font-black text-white">{pkg.price}</span>
                  </div>
                  <button
                    className={`px-4 py-2.5 rounded-2xl ${pkg.btnBg} border ${pkg.btnBorder} text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-1 hover:brightness-125 transition-all shadow-md`}
                  >
                    <span>Details</span>
                    <FaChevronRight className="text-[7px]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Book Hotels with ITS Global */}
      <section className="max-w-5xl mx-auto bg-slate-50 border border-slate-200/60 p-6 md:p-8 rounded-3xl space-y-6 mt-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <h2 className="text-xl font-black text-slate-900">Why Book Hotels with ITS Global?</h2>
          <p className="text-xs text-slate-500">Unmatched prices, verified stays, and 24/7 support for a perfect trip.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col items-center text-center space-y-4 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-2xl relative z-10 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
              <FaHotel className="animate-float-1" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-base relative z-10">Verified Stays</h3>
            <p className="text-xs text-slate-500 leading-relaxed relative z-10">All our partner properties go through a strict quality check for your safety and comfort.</p>
          </div>
          
          <div className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col items-center text-center space-y-4 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center text-2xl relative z-10 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
              <FaRegStar className="animate-float-2" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-base relative z-10">Genuine Reviews</h3>
            <p className="text-xs text-slate-500 leading-relaxed relative z-10">Make informed decisions with millions of authentic reviews from verified guests.</p>
          </div>

          <div className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col items-center text-center space-y-4 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-2xl relative z-10 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
              <FaHistory className="animate-float-3" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-base relative z-10">Pay at Hotel</h3>
            <p className="text-xs text-slate-500 leading-relaxed relative z-10">Book now and pay when you check-in. Zero cancellation charges on selected stays.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
