"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaPlane, FaHotel, FaCar, FaUserCircle, FaSignOutAlt, FaBell, FaLifeRing, FaQuestionCircle, FaEnvelope, FaInfoCircle, FaTag, FaTags, FaCompass, FaRegUser, FaHeart, FaSuitcase, FaStar, FaWallet, FaCreditCard, FaChevronDown } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import AuthModal from "@/components/AuthModal";

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

  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [internalIsLoggedIn, setInternalIsLoggedIn] = useState(isLoggedIn);
  const [internalUsername, setInternalUsername] = useState<string | null>(username);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInternalIsLoggedIn(isLoggedIn);
    setInternalUsername(username);
  }, [isLoggedIn, username]);

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    const storedUser = localStorage.getItem('username');
    if (storedLogin === 'true') {
      setInternalIsLoggedIn(true);
      setInternalUsername(storedUser);
    }
  }, []);

  const handleLoginSuccess = (email: string) => {
    setInternalIsLoggedIn(true);
    const user = email ? email.split("@")[0] : "Traveler";
    setInternalUsername(user);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', user);
    setShowAuthModal(false);
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
    setShowProfileMenu(false);
  };

  const confirmLogout = () => {
    setInternalIsLoggedIn(false);
    setInternalUsername(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setShowLogoutConfirm(false);
    if (onLogout) onLogout();
  };

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
        <div className="flex items-center cursor-pointer group" onClick={() => {
          if (pathname === '/') {
            if (setActiveTab) setActiveTab("hotel");
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            router.push('/');
          }
        }}>
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

          {/* Itinerary Link */}
          <button
            onClick={() => router.push('/itinerary/create')}
            className="flex items-center gap-1.5 px-3 py-2 text-indigo-600 hover:bg-indigo-50 rounded-xl text-xs font-black transition-all"
          >
            <FaCompass className="text-sm" />
            <span className="hidden sm:inline">AI Itinerary</span>
          </button>

          {/* Offers Link */}
          <button
            onClick={() => router.push('/offers')}
            className="flex items-center gap-1.5 px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-black transition-all"
          >
            <FaTag className="text-sm" />
            <span className="hidden sm:inline">Offers</span>
          </button>

          {/* Support Link */}
          <div className="relative">
            <button
              onClick={() => router.push('/support')}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-semibold border border-slate-200 transition-all"
            >
              <FaLifeRing className="text-sm" />
              <span className="hidden sm:inline">Support</span>
            </button>


          </div>

          {/* User profile / Login State */}
          <div>
            {internalIsLoggedIn ? (
              <div className="relative" ref={profileMenuRef}>
                <div
                  className="flex items-center gap-1.5 cursor-pointer hover:bg-slate-50 p-1 rounded-xl transition-colors"
                  onClick={() => {
                    setShowProfileMenu(!showProfileMenu);
                    setShowNotifications(false);
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-sm border border-emerald-200">
                    {internalUsername ? internalUsername.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'U'}
                  </div>
                  <FaChevronDown className={`text-[10px] text-slate-500 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} />
                </div>

                {showProfileMenu && (
                  <div className="absolute right-0 mt-3 w-[320px] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden animate-scale-in z-50">
                    <div className="p-4 border-b border-slate-100 bg-slate-50">
                      <div className="text-[11px] font-bold text-slate-500 mb-0.5">You are viewing your personal profile</div>
                      <div className="text-xs font-black text-blue-600 truncate">{internalUsername ? internalUsername.toLowerCase().replace(' ', '') : 'user'}@gmail.com</div>
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

                      <div className="flex gap-4 items-start p-3 hover:bg-slate-50 cursor-pointer transition-colors" onClick={() => { router.push('/trips'); setShowProfileMenu(false); }}>
                        <FaSuitcase className="text-slate-400 mt-0.5 text-lg" />
                        <div>
                          <div className="text-sm font-black text-slate-800">My Trips</div>
                          <div className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">See booking details, Print e-ticket, Cancel Booking, Modify Booking, Check Refund Status & more.</div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start p-3 hover:bg-slate-50 cursor-pointer transition-colors" onClick={() => { router.push('/wallet'); setShowProfileMenu(false); }}>
                        <FaWallet className="text-slate-400 mt-0.5 text-lg" />
                        <div>
                          <div className="text-sm font-black text-slate-800 flex items-center gap-2">
                            My Wallet <span className="bg-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded-full shadow-sm">₹0</span>
                          </div>
                          <div className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">Use your wallet money to avail even greater discounts</div>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start p-3 hover:bg-rose-50 cursor-pointer transition-colors border-t border-slate-100" onClick={handleLogoutClick}>
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
                onClick={() => setShowAuthModal(true)}
                className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
              >
                Sign In
              </button>
            )}
          </div>

        </div>
      </nav>

      <AuthModal
        show={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
        onGoogleLogin={() => handleLoginSuccess("google@user.com")}
      />

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-scale-in p-6 text-center">
            <h2 className="text-xl font-black text-slate-800 mb-2">Are you sure?</h2>
            <p className="text-sm text-slate-600 font-medium mb-6">Do you really want to logout of your account?</p>
            <div className="flex gap-4">
              <button 
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmLogout}
                className="flex-1 px-4 py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl transition-colors shadow-lg shadow-rose-500/30"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
