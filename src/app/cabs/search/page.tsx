"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { FaCarSide, FaSuitcase, FaSnowflake, FaGasPump, FaCheckCircle, FaStar } from "react-icons/fa";

export default function CabsSearchPage() {
  const router = useRouter();

  const dummyCabs = [
    {
      id: 1,
      type: "Hatchback",
      name: "Wagon R, Swift or similar",
      rating: "4.5",
      trips: "1.2k+",
      features: ["AC", "4 Seats", "2 Bags", "Petrol/CNG"],
      price: 1850,
      originalPrice: 2100,
      tag: "Cheapest"
    },
    {
      id: 2,
      type: "Sedan",
      name: "Dzire, Etios or similar",
      rating: "4.8",
      trips: "3.5k+",
      features: ["AC", "4 Seats", "3 Bags", "Diesel"],
      price: 2150,
      originalPrice: 2500,
      tag: "Most Popular"
    },
    {
      id: 3,
      type: "SUV",
      name: "Innova Crysta or similar",
      rating: "4.9",
      trips: "2.1k+",
      features: ["AC", "6 Seats", "4 Bags", "Diesel"],
      price: 3400,
      originalPrice: 4000,
      tag: "Best for Family"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f6fc] font-sans pb-20">
      <Navbar
        activeTab=""
        setActiveTab={() => {}}
        isLoggedIn={true}
        username="Kuldeep Sharma"
        onLoginClick={() => {}}
        onLogout={() => {}}
        onSupportClick={() => {}}
      />

      {/* Banner */}
      <div className="pt-[100px] bg-slate-900 h-[180px] w-full absolute top-0 left-0 z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-2xl font-black text-white mb-2">New Delhi to Agra</h1>
          <p className="text-white/80 font-medium text-sm">25 Jul 2026 • One Way • 240 kms</p>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-[140px] flex flex-col lg:flex-row gap-6">
        
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <h3 className="font-black text-slate-800 mb-4 pb-4 border-b border-slate-100">Filter By</h3>
            
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Cab Type</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm font-medium text-slate-700">Hatchback</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm font-medium text-slate-700">Sedan</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-sm font-medium text-slate-700">SUV</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 flex flex-col gap-4">
          {dummyCabs.map(cab => (
            <div key={cab.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
              
              {/* Image/Icon */}
              <div className="w-32 h-24 bg-slate-50 rounded-lg flex flex-col items-center justify-center border border-slate-100 shrink-0 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-blue-100 text-blue-700 text-[10px] font-bold text-center py-0.5">{cab.tag}</div>
                <FaCarSide className="text-4xl text-slate-400 mt-2" />
                <span className="text-xs font-bold text-slate-600 mt-1">{cab.type}</span>
              </div>

              {/* Details */}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-black text-slate-800">{cab.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1"><FaStar /> {cab.rating}</span>
                      <span className="text-xs font-medium text-slate-500">({cab.trips} trips)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded">
                    <FaSnowflake className="text-slate-400" /> {cab.features[0]}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded">
                    <FaCarSide className="text-slate-400" /> {cab.features[1]}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded">
                    <FaSuitcase className="text-slate-400" /> {cab.features[2]}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-50 px-2 py-1 rounded">
                    <FaGasPump className="text-slate-400" /> {cab.features[3]}
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-600">
                  <FaCheckCircle /> Free cancellation up to 1 hr before pickup
                </div>
              </div>

              {/* Pricing & CTA */}
              <div className="w-full sm:w-48 border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-6 flex flex-col items-end justify-center shrink-0">
                <div className="text-xs font-medium text-slate-400 line-through mb-1">₹ {cab.originalPrice}</div>
                <div className="text-2xl font-black text-slate-900 mb-1">₹ {cab.price}</div>
                <div className="text-[10px] font-semibold text-slate-500 mb-4">Includes Tolls & Taxes</div>
                <button 
                  onClick={() => router.push('/cabs/review')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg shadow-md transition-all hover:-translate-y-0.5"
                >
                  Select & Book
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
