"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { FaChevronRight, FaSearch, FaPlaneDeparture, FaHotel, FaCar, FaSuitcaseRolling, FaBan, FaCheckCircle, FaClock } from "react-icons/fa";
import { useRouter } from "next/navigation";

type Tab = "UPCOMING" | "CANCELLED" | "COMPLETED";

export default function TripsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("UPCOMING");

  // Dummy data for trips
  const upcomingTrips = [
    {
      id: "bk-101",
      type: "flight",
      title: "New Delhi to Mumbai",
      date: "25 Jul 2026",
      details: "IndiGo 6E-2022 • Economy",
      pnr: "PNR: XYZ123",
      status: "Confirmed",
      amount: "₹ 5,400"
    },
    {
      id: "bk-102",
      type: "hotel",
      title: "Taj Mahal Tower, Mumbai",
      date: "25 Jul - 28 Jul 2026",
      details: "1 Room, 2 Guests • Sea View",
      pnr: "Booking ID: HTL9982",
      status: "Confirmed",
      amount: "₹ 45,000"
    }
  ];

  const cancelledTrips = [
    {
      id: "bk-103",
      type: "flight",
      title: "Bangalore to Goa",
      date: "10 Jun 2026",
      details: "Air India AI-442 • Business",
      pnr: "PNR: ABC987",
      status: "Refund Processed",
      amount: "₹ 12,000"
    }
  ];

  const completedTrips = [
    {
      id: "bk-104",
      type: "cab",
      title: "Airport Transfer - T3 to Vasant Kunj",
      date: "05 May 2026",
      details: "Sedan • 12 kms",
      pnr: "Booking ID: CAB4551",
      status: "Completed",
      amount: "₹ 850"
    },
    {
      id: "bk-105",
      type: "hotel",
      title: "Radisson Blu, Jaipur",
      date: "01 May - 04 May 2026",
      details: "2 Rooms, 4 Guests • Standard",
      pnr: "Booking ID: HTL7732",
      status: "Completed",
      amount: "₹ 18,500"
    }
  ];

  const getActiveTrips = () => {
    switch (activeTab) {
      case "UPCOMING": return upcomingTrips;
      case "CANCELLED": return cancelledTrips;
      case "COMPLETED": return completedTrips;
      default: return [];
    }
  };

  const activeTrips = getActiveTrips();

  const getIconForType = (type: string) => {
    switch(type) {
      case "flight": return <FaPlaneDeparture className="text-white text-xl" />;
      case "hotel": return <FaHotel className="text-white text-xl" />;
      case "cab": return <FaCar className="text-white text-xl" />;
      default: return <FaSuitcaseRolling className="text-white text-xl" />;
    }
  };

  const getGradientForType = (type: string) => {
    switch(type) {
      case "flight": return "from-blue-500 to-indigo-600";
      case "hotel": return "from-rose-400 to-red-600";
      case "cab": return "from-yellow-400 to-orange-500";
      default: return "from-slate-400 to-slate-600";
    }
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

      {/* Banner Area */}
      <div className="pt-[100px] bg-gradient-to-r from-primary to-secondary h-[280px] w-full absolute top-0 left-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-[120px]">
        
        {/* Breadcrumbs & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-white">
            <span className="font-semibold cursor-pointer hover:underline text-sm" onClick={() => router.push('/profile')}>My Account</span>
            <FaChevronRight className="text-[10px] opacity-70" />
            <span className="font-bold text-sm">My Trips</span>
          </div>

          <div className="relative w-full sm:w-[350px]">
            <input 
              type="text" 
              placeholder="Search for a booking" 
              className="w-full bg-white rounded-lg pl-4 pr-12 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-blue-500 hover:bg-blue-600 transition-colors text-white px-4 rounded-r-lg flex items-center justify-center">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-slide-up min-h-[500px] flex flex-col">
          
          {/* Tabs */}
          <div className="flex items-center border-b border-slate-200 px-2 sm:px-8 bg-slate-50 overflow-x-auto hide-scrollbar">
            <button 
              onClick={() => setActiveTab("UPCOMING")}
              className={`flex items-center gap-2 px-6 py-5 text-sm font-bold border-b-4 transition-all whitespace-nowrap ${activeTab === "UPCOMING" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"}`}
            >
              <FaSuitcaseRolling className="text-lg" /> UPCOMING
            </button>
            <button 
              onClick={() => setActiveTab("CANCELLED")}
              className={`flex items-center gap-2 px-6 py-5 text-sm font-bold border-b-4 transition-all whitespace-nowrap ${activeTab === "CANCELLED" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"}`}
            >
              <FaBan className="text-lg" /> CANCELLED
            </button>
            <button 
              onClick={() => setActiveTab("COMPLETED")}
              className={`flex items-center gap-2 px-6 py-5 text-sm font-bold border-b-4 transition-all whitespace-nowrap ${activeTab === "COMPLETED" ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"}`}
            >
              <FaCheckCircle className="text-lg" /> COMPLETED
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 p-4 sm:p-8 bg-slate-50/50">
            {activeTrips.length > 0 ? (
              <div className="flex flex-col gap-6">
                {activeTrips.map(trip => (
                  <div key={trip.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow cursor-pointer group">
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${getGradientForType(trip.type)} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                      {getIconForType(trip.type)}
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                        <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors">{trip.title}</h3>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-max">
                          <FaClock /> {trip.date}
                        </div>
                      </div>
                      <p className="text-sm font-semibold text-slate-600 mb-3">{trip.details}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 mt-auto">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{trip.pnr}</div>
                        <div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block"></div>
                        <div className="text-sm font-black text-slate-800">{trip.amount}</div>
                        <div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block"></div>
                        <div className={`text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded ${
                          activeTab === 'UPCOMING' ? 'bg-green-100 text-green-700' :
                          activeTab === 'CANCELLED' ? 'bg-red-100 text-red-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {trip.status}
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex items-center border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-6 shrink-0">
                      <button className="w-full sm:w-auto px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-lg transition-colors">
                        View Details
                      </button>
                    </div>

                  </div>
                ))}
              </div>
            ) : (
              // Empty State
              <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-60"></div>
                  <FaSuitcaseRolling className="text-8xl text-slate-300 relative z-10" />
                  <div className="absolute -top-4 -right-4 w-6 h-6 border-2 border-slate-300 rounded-full opacity-50"></div>
                  <div className="absolute bottom-0 -left-6 w-4 h-4 bg-slate-200 rounded-full opacity-50"></div>
                  <div className="absolute top-1/2 -right-8 w-3 h-3 bg-blue-200 rounded-full"></div>
                </div>
                <h2 className="text-2xl font-black text-slate-800 mb-2">Looks empty, you've no {activeTab.toLowerCase()} bookings.</h2>
                <p className="text-slate-500 font-medium mb-8">When you book a trip, you will see your itinerary here.</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-blue-500/30 transition-transform hover:scale-105 active:scale-95">
                  PLAN A TRIP
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
