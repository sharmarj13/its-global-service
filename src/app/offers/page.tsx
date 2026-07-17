"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { FaTag, FaCopy, FaCheckCircle, FaPlaneDeparture, FaHotel, FaCar } from "react-icons/fa";

export default function OffersPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const offers = [
    {
      id: 1,
      type: "Flights",
      title: "Flat 12% OFF on Domestic Flights",
      description: "Use HDFC Bank Credit Cards to get up to ₹1,500 instant discount on all domestic routes.",
      code: "HDFCFLY",
      icon: <FaPlaneDeparture className="text-blue-500 text-3xl" />,
      bg: "bg-blue-50",
      border: "border-blue-100"
    },
    {
      id: 2,
      type: "Hotels",
      title: "Get up to 25% OFF on Premium Hotels",
      description: "Book 5-star properties and get up to ₹4,000 discount using SBI Credit Cards.",
      code: "SBIHOTEL",
      icon: <FaHotel className="text-rose-500 text-3xl" />,
      bg: "bg-rose-50",
      border: "border-rose-100"
    },
    {
      id: 3,
      type: "Cabs",
      title: "₹500 Cashback on Outstation Cabs",
      description: "Applicable on your first outstation cab booking with ITS Global.",
      code: "FIRSTCAB",
      icon: <FaCar className="text-amber-500 text-3xl" />,
      bg: "bg-amber-50",
      border: "border-amber-100"
    },
    {
      id: 4,
      type: "All",
      title: "Welcome Bonus: Flat ₹1000 OFF",
      description: "Sign up today and use this code on your first transaction above ₹5000.",
      code: "WELCOME1000",
      icon: <FaTag className="text-emerald-500 text-3xl" />,
      bg: "bg-emerald-50",
      border: "border-emerald-100"
    }
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
      <div className="pt-[100px] bg-gradient-to-r from-rose-500 to-orange-500 h-[220px] w-full absolute top-0 left-0 z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl font-black text-white mb-2">Exclusive Offers & Deals</h1>
          <p className="text-white/90 font-medium text-sm">Save big on your next trip with these handpicked promo codes</p>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-[160px]">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex hover:shadow-md transition-shadow">
              
              {/* Left Color Bar */}
              <div className={`w-32 ${offer.bg} ${offer.border} border-r flex flex-col items-center justify-center p-4 shrink-0`}>
                {offer.icon}
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 mt-2">{offer.type}</span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-black text-slate-800 mb-2 leading-tight">{offer.title}</h3>
                <p className="text-xs font-medium text-slate-500 mb-6 flex-1 leading-relaxed">{offer.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-dashed border-slate-200">
                  <div className="border border-slate-300 border-dashed rounded-lg px-4 py-1.5 bg-slate-50 font-mono text-sm font-bold text-slate-700 tracking-wider">
                    {offer.code}
                  </div>
                  <button 
                    onClick={() => handleCopy(offer.code)}
                    className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    {copiedCode === offer.code ? (
                      <><FaCheckCircle className="text-emerald-500" /> Copied!</>
                    ) : (
                      <><FaCopy /> Copy Code</>
                    )}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
