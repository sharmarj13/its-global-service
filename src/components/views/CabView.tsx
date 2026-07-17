"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaCar, FaCalendarAlt, FaCheckCircle, FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

export default function CabView() {
  const router = useRouter();
  const [currentCabImgIndex, setCurrentCabImgIndex] = useState(0);
  const cabImages = [
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=300&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCabImgIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const cabFleets = [
    {
      id: 1,
      type: "Hatchback",
      model: "WagonR, Swift or similar",
      seats: 4,
      bags: 1,
      price: "₹ 1,200",
      ideal: "City rides"
    },
    {
      id: 2,
      type: "Sedan",
      model: "Dzire, Etios or similar",
      seats: 4,
      bags: 2,
      price: "₹ 1,500",
      ideal: "Comfortable outstation"
    },
    {
      id: 3,
      type: "SUV",
      model: "Innova, Ertiga or similar",
      seats: 6,
      bags: 4,
      price: "₹ 2,400",
      ideal: "Family trips"
    }
  ];

  return (
    <div className="space-y-10 animate-fade-in pt-4">
      {/* Cab Offers */}
      <section className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Exclusive Cab Offers</h2>
            <p className="text-xs text-slate-500 mt-0.5">Save big on your intercity travel and airport transfers.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div 
            onClick={() => router.push('/cabs/search')}
            className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-600 rounded-2xl p-6 text-white flex items-center justify-between cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full mb-3 inline-block shadow-sm">Airport Transfers</span>
              <h3 className="text-2xl font-black mb-1">Flat 15% OFF</h3>
              <p className="text-xs text-amber-100 font-medium">Valid on pre-booked airport pickups & drops.</p>
            </div>
            <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
              <FaCar className="text-3xl text-white animate-float-1" />
            </div>
          </div>
          <div 
            onClick={() => router.push('/cabs/search')}
            className="relative bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-800 rounded-2xl p-6 text-white flex items-center justify-between cursor-pointer hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full mb-3 inline-block shadow-sm">Outstation Rides</span>
              <h3 className="text-2xl font-black mb-1">Up to ₹500 Cashback</h3>
              <p className="text-xs text-emerald-100 font-medium">On your first outstation round-trip.</p>
            </div>
            <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
              <FaMapMarkerAlt className="text-3xl text-white animate-float-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Cab Fleets Section */}
      <section className="max-w-5xl mx-auto bg-gradient-to-br from-emerald-50/40 via-teal-50/20 to-slate-50 border border-slate-200/80 p-6 md:p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -ml-20 -mt-20 pointer-events-none" />
        
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 relative z-10">
          <div>
            <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
              <FaCar className="text-emerald-500" /> Premium Cab Fleet
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5">Choose from a variety of cars for outstation, hourly rentals, and airport transfers.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
          {cabFleets.map((fleet) => (
            <div 
              key={fleet.id} 
              onClick={() => router.push('/cabs/search')}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative group cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] text-emerald-600 font-bold uppercase block">{fleet.ideal}</span>
                  <h3 className="font-black text-lg text-slate-800 tracking-tight">{fleet.type}</h3>
                  <span className="text-[10px] text-slate-500">{fleet.model}</span>
                </div>
              </div>

              <div className="flex gap-2 text-[10px] text-slate-600 font-bold mb-4">
                <span className="bg-slate-100 px-2 py-1 rounded">{fleet.seats} Seats</span>
                <span className="bg-slate-100 px-2 py-1 rounded">{fleet.bags} Bags</span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px]">
                <span className="font-black text-lg text-slate-800">{fleet.price}</span>
                <button className="text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-600 px-3 py-1.5 rounded-lg transition-colors">Select</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Cab Routes */}
      <section className="max-w-5xl mx-auto space-y-6 pt-4">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
          <div>
            <h2 className="text-xl font-black text-slate-900">Popular Cab Routes</h2>
            <p className="text-xs text-slate-500 mt-0.5">Explore the most frequently booked outstation routes.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { from: "Delhi", to: "Agra", price: "₹ 2,500" },
            { from: "Mumbai", to: "Pune", price: "₹ 2,200" },
            { from: "Bangalore", to: "Mysore", price: "₹ 3,100" },
            { from: "Chennai", to: "Pondicherry", price: "₹ 2,800" },
            { from: "Chandigarh", to: "Shimla", price: "₹ 4,500" },
            { from: "Ahmedabad", to: "Udaipur", price: "₹ 4,200" },
            { from: "Delhi", to: "Jaipur", price: "₹ 3,300" },
            { from: "Pune", to: "Mahabaleshwar", price: "₹ 2,800" },
          ].map((route, i) => (
            <div 
              key={i} 
              onClick={() => router.push('/cabs/search')}
              className="flex items-center justify-between p-3.5 bg-white border border-slate-200/80 rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <div className="relative z-10">
                <div className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors flex items-center">
                  {route.from} <FaChevronRight className="inline text-[8px] mx-1 text-slate-400 group-hover:translate-x-0.5 transition-transform" /> {route.to}
                </div>
                <div className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
                  <FaCar className="text-[8px]" /> Cabs
                </div>
              </div>
              <div className="text-sm font-black text-slate-900 relative z-10 group-hover:scale-105 transition-transform">{route.price}</div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Why Book Cabs with ITS Global */}
      <section className="max-w-5xl mx-auto bg-slate-50 border border-slate-200/60 p-6 md:p-8 rounded-3xl space-y-6 mt-8">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
          <h2 className="text-xl font-black text-slate-900">Why Book Cabs with ITS Global?</h2>
          <p className="text-xs text-slate-500">Enjoy safe, reliable, and comfortable rides at the best prices.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col items-center text-center space-y-4 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center text-2xl relative z-10 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-sm">
              <FaCheckCircle className="animate-float-1" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-base relative z-10">Verified Drivers</h3>
            <p className="text-xs text-slate-500 leading-relaxed relative z-10">Travel with peace of mind. All our drivers are thoroughly vetted and highly rated.</p>
          </div>
          
          <div className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col items-center text-center space-y-4 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-teal-50 text-teal-500 rounded-full flex items-center justify-center text-2xl relative z-10 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all shadow-sm">
              <FaCar className="animate-float-2" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-base relative z-10">Sanitized Cars</h3>
            <p className="text-xs text-slate-500 leading-relaxed relative z-10">Your safety is our priority. Every cab is deeply cleaned and sanitized before pickup.</p>
          </div>

          <div className="bg-white p-6 rounded-[24px] shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col items-center text-center space-y-4 group transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-16 h-16 bg-indigo-50 text-indigo-500 rounded-full flex items-center justify-center text-2xl relative z-10 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-sm">
              <FaCalendarAlt className="animate-float-3" />
            </div>
            <h3 className="font-extrabold text-slate-800 text-base relative z-10">Transparent Billing</h3>
            <p className="text-xs text-slate-500 leading-relaxed relative z-10">No hidden charges. What you see is what you pay for tolls, taxes, and driver allowance.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
