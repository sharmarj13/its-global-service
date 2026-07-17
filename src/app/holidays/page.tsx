"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { FaUmbrellaBeach } from "react-icons/fa";

export default function HolidaysPage() {
  return (
    <div className="min-h-screen bg-[#f4f6fc] font-sans pb-20">
      <Navbar
        activeTab="holidays"
        setActiveTab={() => {}}
        isLoggedIn={true}
        username="Kuldeep Sharma"
        onLoginClick={() => {}}
        onLogout={() => {}}
        onSupportClick={() => {}}
      />
      <div className="pt-[150px] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
          <FaUmbrellaBeach />
        </div>
        <h1 className="text-3xl font-black text-slate-800 mb-4">Holiday Packages Coming Soon</h1>
        <p className="text-slate-500 font-medium max-w-md">Explore curated domestic and international tour packages designed for your perfect vacation.</p>
      </div>
    </div>
  );
}
