"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelBooking from "@/components/HotelBooking";
import FlightBooking from "@/components/FlightBooking";
import CabBooking from "@/components/CabBooking";
import HotelView from "@/components/views/HotelView";
import FlightView from "@/components/views/FlightView";
import CabView from "@/components/views/CabView";
import AuthModal from "@/components/AuthModal";
import PackageModal from "@/components/PackageModal";
import { Package, commonFaqs, popularDests, featuredPackages } from "@/data/mockData";
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaCamera,
  FaPassport,
  FaShip,
  FaMoneyBillWave,
  FaUmbrellaBeach,
  FaTrain,
  FaBus,
  FaHome,
  FaShieldAlt,
  FaChevronDown,
} from "react-icons/fa";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("flight");
  const [userMode, setUserMode] = useState<"new" | "returning">("returning");

  // Auth States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // Package Detail Modal State
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleLoginSuccess = (email: string) => {
    setIsLoggedIn(true);
    setUsername(email ? email.split("@")[0] : "Traveler");
    setUserMode("returning");
    setShowAuthModal(false);
  };

  const handleGoogleLogin = () => {
    setIsLoggedIn(true);
    setUsername("Google User");
    setUserMode("returning");
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(null);
    setUserMode("new");
  };

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-[#e8f1f8] via-[#f4f7fb] to-[#F2F2F2]">
      <style>{`
        @keyframes scale-background {
          0%, 100% { transform: scale(1.02); }
          50% { transform: scale(1.08); }
        }
        .animate-bg-zoom {
          animation: scale-background 22s ease-in-out infinite;
        }
      `}</style>

      {/* Navbar Component */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={isLoggedIn}
        username={username}
        onLoginClick={() => setShowAuthModal(true)}
        onLogout={handleLogout}
        onSupportClick={(section) => {
          const el = document.getElementById(section + "-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Hero Section Container */}
      <section className="relative w-full min-h-[600px] flex flex-col pt-[120px] pb-10">
        {/* Background Image scoped to this section */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
            alt="Flights Background"
            className="w-full h-full object-cover animate-bg-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#f4f6fc] to-transparent h-32 bottom-0 top-auto"></div>
        </div>

        {/* Hero Content (Tabs & Form) vertically centered */}
        <div className="relative z-20 flex-grow flex items-center justify-center w-full px-4 sm:px-6 mt-10">
          <div className="max-w-6xl w-full mx-auto">
            {/* Top Navigation Tabs */}
            <div className="bg-white/95 backdrop-blur-md rounded-t-xl sm:rounded-full shadow-lg border border-white/50 mx-auto w-11/12 max-w-lg flex overflow-x-auto no-scrollbar justify-between px-6 py-3 sm:px-10 relative z-10 mb-[-10px] items-center min-h-[80px] animate-slide-up">
              {([
                { id: "flight", icon: <FaPlane className="text-3xl" />, label: "Flights" },
                { id: "hotel", icon: <FaHotel className="text-3xl" />, label: "Hotels" },
                { id: "cab", icon: <FaCar className="text-3xl" />, label: "Cabs" },
              ] as { id: string; icon: JSX.Element; label: string; badge?: string }[]).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center justify-center gap-2 px-3 py-1.5 min-w-[80px] relative transition-all duration-300 ${activeTab === tab.id
                    ? "text-primary border-b-2 border-primary scale-105"
                    : "text-slate-500 hover:text-primary hover:bg-slate-50 rounded-lg border-b-2 border-transparent hover:scale-105"
                    }`}
                >
                  {tab.badge && (
                    <span className="absolute -top-1 -right-2 bg-pink-600 text-white text-[10px] font-bold px-2 rounded-full shadow-sm animate-pulse">
                      {tab.badge}
                    </span>
                  )}
                  {tab.icon}
                  <span className={`text-sm sm:text-base leading-tight text-center ${activeTab === tab.id ? "font-black" : "font-medium"}`}>
                    {tab.label.split(" ").map((word, idx) => (
                      <React.Fragment key={idx}>
                        {word}
                        {idx !== tab.label.split(" ").length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </span>
                </button>
              ))}
            </div>

            {/* Main Booking Form Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-[24px] shadow-2xl border border-white/50 p-5 md:p-8 relative pt-10 animate-slide-up hover:shadow-blue-900/10 transition-shadow duration-300">
              <div className="transition-all duration-300">
                {activeTab === "hotel" && <HotelBooking />}
                {activeTab === "flight" && <FlightBooking />}
                {activeTab === "cab" && <CabBooking />}
                {!["hotel", "flight", "cab"].includes(activeTab) && (
                  <div className="py-20 text-center text-slate-500 font-medium">
                    Booking form for {activeTab} is coming soon.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections (Below Hero) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10 relative z-20 pt-10">
        {/* Active Tab View */}
        {activeTab === "hotel" && (
          <HotelView
            popularDests={popularDests}
            featuredPackages={featuredPackages}
            userMode={userMode}
            setUserMode={setUserMode}
            setSelectedPackage={setSelectedPackage}
          />
        )}
        {activeTab === "flight" && (
          <FlightView userMode={userMode} />
        )}
        {activeTab === "cab" && (
          <CabView />
        )}

        {/* Common FAQs Section */}
        <section id="faq-section" className="max-w-4xl mx-auto bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-sm mt-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 mt-2">Find answers to the most common queries about booking with ITS Global.</p>
          </div>

          <div className="space-y-4">
            {commonFaqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-5 py-4 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-sm flex justify-between items-center"
                >
                  <span className="pr-2">{faq.q}</span>
                  <FaChevronDown className={`text-xs text-slate-500 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 py-4 bg-white border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer
        onFAQScroll={() => {
          const el = document.getElementById("faq-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <PackageModal 
        selectedPackage={selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
      />

      <AuthModal 
        show={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
        onGoogleLogin={handleGoogleLogin}
      />
    </main>
  );
}
