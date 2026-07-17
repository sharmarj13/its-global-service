"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaPlane, FaCalendarAlt, FaCheckCircle, FaChevronRight } from "react-icons/fa";

interface FlightViewProps {
  userMode: "new" | "returning";
}

export default function FlightView({ userMode }: FlightViewProps) {
  const router = useRouter();
  
  const flightDeals = [
    {
      id: 1,
      airline: "IndiGo",
      route: "DEL ➔ BLR",
      price: "₹ 5,400",
      date: "15 Jul'26",
      type: "Economy",
      tag: "Best Seller"
    },
    {
      id: 2,
      airline: "Air India",
      route: "BOM ➔ DXB",
      price: "₹ 14,200",
      date: "20 Jul'26",
      type: "Premium Economy",
      tag: "Trending"
    },
    {
      id: 3,
      airline: "Vistara",
      route: "DEL ➔ GOI",
      price: "₹ 6,100",
      date: "12 Aug'26",
      type: "Economy",
      tag: "Weekend Getaway"
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in pt-4">
      
      {/* Flight Deals Section */}
      <section className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <FaPlane className="text-cyan-500" /> Exclusive Flight Deals
            </h2>
            <p className="text-sm text-slate-500 mt-1">Grab the best offers on domestic and international flights.</p>
          </div>
          <button className="text-sm font-bold text-primary hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {flightDeals.map((deal) => (
            <div 
              key={deal.id} 
              onClick={() => router.push('/flights/search')}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-cyan-200 transition-all duration-300 relative group cursor-pointer"
            >
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                {deal.tag}
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">{deal.airline}</span>
                  <h3 className="font-black text-lg text-slate-800 tracking-tight">{deal.route}</h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Starting</span>
                  <span className="font-black text-lg text-primary">{deal.price}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px]">
                <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                  <FaCalendarAlt className="text-slate-400" /> {deal.date}
                </div>
                <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-lg font-bold">{deal.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Flight Routes */}
      <section className="max-w-5xl mx-auto space-y-6 pt-4">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Popular Flight Routes</h2>
            <p className="text-xs text-slate-500 mt-0.5">Find the best fares for top domestic and international routes.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { from: "Delhi", to: "Mumbai", price: "₹ 4,500" },
            { from: "Bangalore", to: "Delhi", price: "₹ 5,200" },
            { from: "Mumbai", to: "Goa", price: "₹ 3,100" },
            { from: "Hyderabad", to: "Bangalore", price: "₹ 2,800" },
            { from: "Delhi", to: "Dubai", price: "₹ 11,500" },
            { from: "Mumbai", to: "London", price: "₹ 42,000" },
            { from: "Chennai", to: "Singapore", price: "₹ 15,300" },
            { from: "Kolkata", to: "Bangkok", price: "₹ 12,800" },
          ].map((route, i) => (
            <div 
              key={i} 
              onClick={() => router.push('/flights/search')}
              className="flex items-center justify-between p-3.5 bg-white border border-slate-200/80 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <div className="relative z-10">
                <div className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors flex items-center">
                  {route.from} <FaChevronRight className="inline text-[8px] mx-1 text-slate-400 group-hover:translate-x-0.5 transition-transform" /> {route.to}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
                  <FaPlane className="text-[8px]" /> Flights
                </div>
              </div>
              <div className="text-sm font-black text-slate-900 relative z-10 group-hover:scale-105 transition-transform">{route.price}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Why Book Flights with ITS Global */}
      <section className="max-w-5xl mx-auto bg-slate-50 border border-slate-200/60 p-6 md:p-8 rounded-3xl space-y-6 mt-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <h2 className="text-xl font-black text-slate-900">Why Book Flights with ITS Global?</h2>
          <p className="text-xs text-slate-500">Experience seamless booking, transparent pricing, and world-class support.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col items-center text-center space-y-4 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-2xl relative z-10 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-sm">
              <FaCheckCircle className="animate-float-1" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-base relative z-10">Easy Cancellations</h3>
            <p className="text-xs text-slate-500 leading-relaxed relative z-10">Get instant refunds and flexible cancellation policies on top airlines.</p>
          </div>
          
          <div className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col items-center text-center space-y-4 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-2xl relative z-10 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
              <FaPlane className="animate-float-2" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-base relative z-10">Unbeatable Fares</h3>
            <p className="text-xs text-slate-500 leading-relaxed relative z-10">We negotiate directly with airlines to bring you exclusive discounts and offers.</p>
          </div>

          <div className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col items-center text-center space-y-4 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center text-2xl relative z-10 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-sm">
              <FaCalendarAlt className="animate-float-3" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-base relative z-10">Live Seat Selection</h3>
            <p className="text-xs text-slate-500 leading-relaxed relative z-10">Pick your preferred seats instantly during the booking process with real-time maps.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
