"use client";

import React, { useState } from "react";
import { FaPlane, FaHotel, FaCar, FaUserCircle, FaSignOutAlt, FaBell, FaLifeRing, FaQuestionCircle, FaEnvelope, FaInfoCircle, FaTags, FaCompass } from "react-icons/fa";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isLoggedIn: boolean;
  username: string | null;
  onLoginClick: () => void;
  onLogout: () => void;
  onSupportClick: (section: string) => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  isLoggedIn,
  username,
  onLoginClick,
  onLogout,
  onSupportClick,
}: NavbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSupportMenu, setShowSupportMenu] = useState(false);

  const navItems = [
    { id: "hotel", label: "Hotels", icon: FaHotel },
    { id: "flight", label: "Flights", icon: FaPlane },
    { id: "cab", label: "Cabs", icon: FaCar },
    { id: "packages", label: "Tour Packages", icon: FaTags, isScroll: true, target: "packages" },
    { id: "itinerary", label: "AI Itinerary", icon: FaCompass, isScroll: true, target: "itinerary" },
  ];

  const handleItemClick = (item: typeof navItems[0]) => {
    if (item.isScroll && item.target) {
      onSupportClick(item.target);
    } else {
      setActiveTab(item.id);
      // Smooth scroll back to top booking console
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const mockNotifications = [
    { id: 1, title: "Booking Confirmed", desc: "Flight NH112 is successfully reserved.", time: "2m ago" },
    { id: 2, title: "Payment Successful", desc: "Invoice #ITS-9844 cleared.", time: "1h ago" },
    { id: 3, title: "Cab Driver Assigned", desc: "Alexander Pierce is arriving in 5 mins.", time: "3h ago" },
    { id: 4, title: "Itinerary Ready Alert", desc: "Kyoto 5-Day custom schedule ready.", time: "1d ago" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 py-4 transition-all duration-300">
      <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between shadow-lg relative font-sans">
        
        {/* Logo */}
        <div className="flex items-center cursor-pointer group" onClick={() => { setActiveTab("hotel"); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <div className="bg-[#191975] py-2 px-3.5 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105">
            <img
              src="/image/ITS-Global-White.png"
              alt="ITS Global Logo"
              className="h-7 w-auto object-contain"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                  isActive ? "text-primary bg-primary/5 shadow-sm" : "text-slate-600 hover:text-primary hover:bg-slate-100"
                }`}
              >
                <Icon className="text-sm" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Actions (Notifications, Support, Profile) */}
        <div className="flex items-center gap-3">
          
          {/* Notifications Bell */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowSupportMenu(false);
              }}
              className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition-all border border-slate-200 relative"
            >
              <FaBell className="text-sm" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-accent rounded-full border-2 border-white animate-pulse" />
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 space-y-3 animate-scale-in">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <span className="font-bold text-xs text-slate-800">Notifications</span>
                  <span className="text-[9px] text-primary font-bold cursor-pointer hover:underline">Mark read</span>
                </div>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {mockNotifications.map((notif) => (
                    <div key={notif.id} className="p-2 hover:bg-slate-50 rounded-lg text-xs border border-slate-100 shadow-sm">
                      <div className="flex justify-between font-bold text-slate-800 text-[11px]">
                        <span>{notif.title}</span>
                        <span className="text-slate-400 font-normal text-[9px]">{notif.time}</span>
                      </div>
                      <p className="text-slate-500 mt-0.5 text-[10px] leading-snug">{notif.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Support Dropdown Menu */}
          <div className="relative">
            <button
              onClick={() => {
                setShowSupportMenu(!showSupportMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200 transition-all"
            >
              <FaLifeRing className="text-sm" />
              <span className="hidden sm:inline">Support</span>
            </button>

            {showSupportMenu && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-slate-200 p-3.5 space-y-1.5 animate-scale-in">
                <span className="text-[9px] font-black uppercase text-slate-400 tracking-wider block px-2 pb-1 border-b border-slate-100">
                  Help Center
                </span>
                <button
                  onClick={() => {
                    onSupportClick("about");
                    setShowSupportMenu(false);
                  }}
                  className="w-full text-left flex items-center gap-2 p-2 hover:bg-slate-50 rounded-lg text-xs text-slate-650 font-bold transition-all"
                >
                  <FaInfoCircle className="text-primary text-xs" />
                  <span>About Us</span>
                </button>
                <button
                  onClick={() => {
                    onSupportClick("faq");
                    setShowSupportMenu(false);
                  }}
                  className="w-full text-left flex items-center gap-2 p-2 hover:bg-slate-50 rounded-lg text-xs text-slate-650 font-bold transition-all"
                >
                  <FaQuestionCircle className="text-secondary text-xs" />
                  <span>FAQs</span>
                </button>
                <button
                  onClick={() => {
                    onSupportClick("contact");
                    setShowSupportMenu(false);
                  }}
                  className="w-full text-left flex items-center gap-2 p-2 hover:bg-slate-50 rounded-lg text-xs text-slate-650 font-bold transition-all"
                >
                  <FaEnvelope className="text-accent text-xs" />
                  <span>Contact Us</span>
                </button>
              </div>
            )}
          </div>

          {/* User profile / Login State */}
          <div>
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
                  <FaUserCircle className="text-lg text-primary" />
                  <span className="text-xs font-bold text-slate-700">{username}</span>
                </div>
                <button
                  onClick={onLogout}
                  title="Log Out"
                  className="p-2 bg-slate-100 hover:bg-rose-50 text-slate-500 hover:text-rose-600 rounded-xl transition-all border border-slate-200"
                >
                  <FaSignOutAlt className="text-sm" />
                </button>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
              >
                Sign In
              </button>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
}
