"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { FaHeadset, FaBook, FaLifeRing, FaPlaneDeparture, FaHotel, FaCar, FaChevronRight } from "react-icons/fa";

export default function SupportPage() {
  const topics = [
    { id: 1, title: "Flight Bookings", icon: <FaPlaneDeparture className="text-blue-500" /> },
    { id: 2, title: "Hotel Bookings", icon: <FaHotel className="text-rose-500" /> },
    { id: 3, title: "Cab Bookings", icon: <FaCar className="text-amber-500" /> },
    { id: 4, title: "Refunds & Cancellations", icon: <FaLifeRing className="text-emerald-500" /> },
    { id: 5, title: "Account & Login", icon: <FaHeadset className="text-purple-500" /> },
    { id: 6, title: "Payment Issues", icon: <FaBook className="text-orange-500" /> }
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
      <div className="pt-[100px] bg-gradient-to-r from-blue-600 to-indigo-700 h-[250px] w-full absolute top-0 left-0 z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 text-center px-4 w-full max-w-2xl">
          <h1 className="text-3xl font-black text-white mb-6">How can we help you today?</h1>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for a topic (e.g., How to cancel a flight?)" 
              className="w-full bg-white rounded-xl pl-5 pr-14 py-4 text-sm font-medium text-slate-800 focus:outline-none focus:ring-4 focus:ring-blue-400/30 shadow-lg"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 rounded-lg flex items-center justify-center font-bold text-xs">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-[180px]">
        
        {/* Help Topics Grid */}
        <h2 className="text-xl font-black text-slate-800 mb-6">Browse Help Topics</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex items-center justify-between hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {topic.icon}
                </div>
                <span className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">{topic.title}</span>
              </div>
              <FaChevronRight className="text-slate-300 group-hover:text-blue-500 transition-colors text-xs" />
            </div>
          ))}
        </div>

        {/* Contact Support Block */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden flex flex-col md:flex-row">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 md:w-1/3 flex flex-col justify-center relative overflow-hidden text-white">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
            <h3 className="text-2xl font-black mb-2">Still need help?</h3>
            <p className="text-sm font-medium text-slate-400 leading-relaxed">Our support team is available 24/7 to assist you with your queries and issues.</p>
          </div>
          <div className="p-10 flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl mb-4">
                <FaHeadset />
              </div>
              <h4 className="font-bold text-slate-800 mb-1">Call Us</h4>
              <p className="text-xs text-slate-500 font-medium mb-3">Wait time: Less than 2 mins</p>
              <div className="font-mono font-bold text-lg text-blue-600">1800-123-4567</div>
            </div>
            <div>
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-full flex items-center justify-center text-xl mb-4">
                <FaLifeRing />
              </div>
              <h4 className="font-bold text-slate-800 mb-1">Raise a Ticket</h4>
              <p className="text-xs text-slate-500 font-medium mb-4">Get resolution within 24 hours</p>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-5 py-2.5 rounded-lg transition-colors">
                Create Ticket
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
