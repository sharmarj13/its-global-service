"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { FaBus } from "react-icons/fa";

export default function BusesPage() {
  return (
    <div className="min-h-screen bg-[#f4f6fc] font-sans pb-20">
      <Navbar
        activeTab="buses"
        setActiveTab={() => {}}
        isLoggedIn={true}
        username="Kuldeep Sharma"
        onLoginClick={() => {}}
        onLogout={() => {}}
        onSupportClick={() => {}}
      />
      <div className="pt-[150px] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
          <FaBus />
        </div>
        <h1 className="text-3xl font-black text-slate-800 mb-4">Bus Booking Coming Soon</h1>
        <p className="text-slate-500 font-medium max-w-md">Get ready to book Volvo, AC, and Non-AC buses across India at the best prices.</p>
      </div>
    </div>
  );
}
