"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { FaCheckCircle, FaDownload, FaSuitcaseRolling } from "react-icons/fa";

export default function BookingSuccessPage() {
  const router = useRouter();

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

      {/* Banner Area */}
      <div className="pt-[100px] bg-gradient-to-r from-emerald-500 to-teal-600 h-[250px] w-full absolute top-0 left-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 pt-[120px]">
        
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-slide-up text-center">
          
          <div className="p-10 pb-6">
            <div className="w-24 h-24 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner animate-bounce-short">
              <FaCheckCircle className="text-5xl" />
            </div>
            
            <h1 className="text-3xl font-black text-slate-800 mb-2">Booking Confirmed!</h1>
            <p className="text-slate-500 font-medium">Thank you for booking with ITS Global. Your trip is now secure.</p>
          </div>

          <div className="px-10 py-6 bg-slate-50/50 border-y border-slate-100 flex justify-center gap-10 sm:gap-20">
            <div className="text-center">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Booking ID / PNR</div>
              <div className="text-xl font-black text-blue-600 tracking-widest">ITS889211X</div>
            </div>
            <div className="text-center">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Total Paid</div>
              <div className="text-xl font-black text-slate-800">₹ 5,400</div>
            </div>
          </div>

          <div className="p-10 pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <FaDownload /> Download E-Ticket
            </button>
            <button 
              onClick={() => router.push('/trips')}
              className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
            >
              <FaSuitcaseRolling /> Go to My Trips
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
