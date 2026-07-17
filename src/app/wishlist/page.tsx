"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { FaChevronRight, FaHeart, FaShareAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function WishlistPage() {
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

      {/* Hero Banner Section */}
      <div className="relative pt-[120px] pb-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover" alt="Beach Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#f4f6fc]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-4">
          {/* Breadcrumbs */}
          <div className="text-white text-xs font-bold py-4 flex items-center gap-2 drop-shadow-md">
            <span className="hover:text-slate-200 cursor-pointer transition-colors">Home</span>
            <FaChevronRight className="text-[8px]" />
            <span className="hover:text-slate-200 cursor-pointer transition-colors">My Account</span>
            <FaChevronRight className="text-[8px]" />
            <span className="text-white">Wishlist</span>
          </div>

          <h1 className="text-2xl font-black text-slate-900 mt-8 drop-shadow-md">Your Wishlists (1)</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Create New Card */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[250px] cursor-pointer transition-all hover:-translate-y-1 group">
            <div className="w-16 h-16 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center mb-6 group-hover:border-blue-400 transition-colors">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center shadow-md">
                <FaHeart className="text-white text-lg" />
              </div>
            </div>
            <h3 className="text-blue-600 font-bold text-sm mb-2 group-hover:underline uppercase tracking-wider">+ CREATE NEW</h3>
            <p className="text-xs text-slate-500 font-semibold text-center leading-snug">Save stays and destinations to your wishlist.</p>
          </div>

          {/* Saved Trip Card */}
          <div 
            onClick={() => router.push('/wishlist/lakhimpur')}
            className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 overflow-hidden min-h-[250px] cursor-pointer transition-all hover:-translate-y-1 flex flex-col"
          >
            <div className="relative h-[160px] w-full">
              <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Lakhimpur Trip" />
              <button className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-colors">
                <FaShareAlt /> Share
              </button>
            </div>
            <div className="p-4 flex justify-between items-center bg-white flex-1">
              <div>
                <h3 className="font-black text-slate-900 text-[15px] mb-1">Lakhimpur Trip</h3>
                <p className="text-xs text-slate-500 font-semibold">1 Stay</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-black shadow-sm">
                K
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
