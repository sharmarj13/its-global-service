"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPlane, FaHotel, FaCar, FaUserCircle, FaSignOutAlt, FaBell, FaLifeRing, FaQuestionCircle, FaEnvelope, FaInfoCircle, FaTags, FaCompass, FaRegUser, FaHeart, FaSuitcase, FaStar, FaWallet, FaCreditCard, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";

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
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const router = useRouter();
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <div className="relative" ref={profileMenuRef}>
                <div 
                  className="flex items-center gap-1.5 cursor-pointer hover:bg-slate-50 p-1 rounded-xl transition-colors"
                  onClick={() => {
                    setShowProfileMenu(!showProfileMenu);
                    setShowNotifications(false);
                    setShowSupportMenu(false);
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-sm border border-emerald-200">
                    {username ? username.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase() : 'U'}
                  </div>
                  <FaChevronDown className={`text-[10px] text-slate-500 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                </div>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-3 w-[320px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-scale-in z-50">
                    <div className="p-4 border-b border-slate-100 bg-slate-50">
                      <div className="text-[11px] font-bold text-slate-500 mb-0.5">You are viewing your personal profile</div>
                      <div className="text-xs font-black text-blue-600 truncate">{username ? username.toLowerCase().replace(' ', '') : 'user'}@gmail.com</div>
                    </div>

                    <div className="flex flex-col py-2">
                      <div className="flex gap-4 items-start p-3 hover:bg-slate-50 cursor-pointer transition-colors" onClick={() => { router.push('/profile'); setShowProfileMenu(false); }}>
                        <FaRegUser className="text-slate-400 mt-0.5 text-lg" />
                        <div>
                          <div className="text-sm font-black text-slate-800">My Profile</div>
                          <div className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">Manage your profile, traveller details, login details and password</div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start p-3 hover:bg-slate-50 cursor-pointer transition-colors" onClick={() => { router.push('/wishlist'); setShowProfileMenu(false); }}>
                        <FaHeart className="text-slate-400 mt-0.5 text-lg" />
                        <div>
                          <div className="text-sm font-black text-slate-800">Wishlist</div>
                          <div className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">Save your favorite hotels and homestays. Share with loved ones and plan your trip together.</div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start p-3 hover:bg-slate-50 cursor-pointer transition-colors">
                        <FaSuitcase className="text-slate-400 mt-0.5 text-lg" />
                        <div>
                          <div className="text-sm font-black text-slate-800">My Trips</div>
                          <div className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">See booking details, Print e-ticket, Cancel Booking, Modify Booking, Check Refund Status & more.</div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start p-3 hover:bg-slate-50 cursor-pointer transition-colors">
                        <div className="relative">
                          <FaStar className="text-slate-400 mt-0.5 text-lg" />
                          <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                        <div>
                          <div className="text-sm font-black text-slate-800">MMTBLACK</div>
                          <div className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">Explore MakeMyTrip's Loyalty Program</div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start p-3 hover:bg-slate-50 cursor-pointer transition-colors">
                        <FaWallet className="text-slate-400 mt-0.5 text-lg" />
                        <div>
                          <div className="text-sm font-black text-slate-800 flex items-center gap-2">
                            My Wallet <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded-full shadow-sm">₹0</span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">Use your wallet money to avail even greater discounts</div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start p-3 hover:bg-slate-50 cursor-pointer transition-colors">
                        <FaCreditCard className="text-slate-400 mt-0.5 text-lg" />
                        <div>
                          <div className="text-sm font-black text-slate-800">Make a payment</div>
                          <div className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">Complete your pending payments here</div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start p-3 hover:bg-rose-50 cursor-pointer transition-colors border-t border-slate-100" onClick={onLogout}>
                        <FaSignOutAlt className="text-rose-400 mt-0.5 text-lg" />
                        <div>
                          <div className="text-sm font-black text-rose-600">Logout</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
