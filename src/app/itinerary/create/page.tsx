"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaHeart, FaPlane, FaMagic } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function CreateItineraryPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("itinerary");
  const [isClient, setIsClient] = useState(false);
  
  const [destination, setDestination] = useState("Goa, India");
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState("Mid-range");
  
  const allPreferences = ["Beaches", "Culture", "Relaxation", "Adventure", "Nightlife", "Nature", "Shopping", "Food"];
  const [preferences, setPreferences] = useState<string[]>(["Beaches", "Relaxation"]);
  
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  if (!isClient) return null;

  const togglePreference = (pref: string) => {
    if (preferences.includes(pref)) {
      setPreferences(preferences.filter(p => p !== pref));
    } else {
      setPreferences([...preferences, pref]);
    }
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      router.push("/itinerary/goa-123");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] font-sans relative overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Dynamic Bright Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop" 
          alt="Travel Background" 
          className="w-full h-full object-cover opacity-20 scale-105 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#f4f7fb] via-transparent to-transparent"></div>
        
        {/* Decorative Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-300/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={false}
        username=""
        onLoginClick={() => { }}
        onLogout={() => { }}
        onSupportClick={() => { }}
      />

      <div className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center gap-16 min-h-[90vh]">
        
        {/* Left Side: Hero Copy */}
        <div className="flex-1 text-slate-900 animate-slide-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white text-xs font-black uppercase tracking-widest mb-6 shadow-sm">
            <FaMagic className="text-primary" /> Next-Gen Travel
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-700 leading-tight mb-6 drop-shadow-sm">
            Design Your <br/>Dream Trip in <span className="text-primary">Seconds.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-xl leading-relaxed mb-10">
            Say goodbye to endless research. Let our AI craft a personalized, day-by-day itinerary tailored perfectly to your budget, style, and wanderlust.
          </p>
          
          <div className="flex items-center gap-6">
            <div className="flex -space-x-4">
              <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" />
              <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" />
              <img className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" />
            </div>
            <div className="text-sm font-semibold text-slate-500">
              <span className="text-slate-900 font-black text-lg block">10,000+</span> 
              Trips Planned
            </div>
          </div>
        </div>

        {/* Right Side: Glassmorphism Form */}
        <div className="w-full max-w-lg lg:w-[500px] flex-shrink-0 animate-slide-up">
          <div className="bg-white/70 backdrop-blur-2xl border border-white p-8 rounded-[2rem] shadow-2xl shadow-slate-300/50 relative overflow-hidden group">
            
            {/* Interactive Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            {isGenerating && (
              <div className="absolute inset-0 bg-white/90 backdrop-blur-xl z-50 flex flex-col items-center justify-center animate-fade-in rounded-[2rem]">
                <div className="relative w-24 h-24 mb-8">
                  <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                  <FaPlane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-3xl animate-pulse" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">AI is Thinking...</h3>
                <p className="text-slate-500 font-medium animate-pulse text-sm text-center px-6">Curating the best hotels, hidden gems, and dining experiences.</p>
              </div>
            )}

            <div className="space-y-8 relative z-10">
              
              {/* Destination */}
              <div className="space-y-2.5">
                <label className="text-xs font-black text-slate-700 uppercase tracking-widest flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary" /> Where do you want to go?
                </label>
                <input 
                  type="text" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-white/60 border border-slate-200/60 rounded-xl px-5 py-4 text-slate-900 font-bold focus:outline-none focus:border-primary focus:bg-white transition-all text-lg shadow-sm placeholder-slate-400"
                  placeholder="e.g. Kyoto, Japan"
                />
              </div>

              {/* Days & Budget Flex */}
              <div className="flex gap-6">
                <div className="flex-1 space-y-2.5">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest flex items-center gap-2">
                    <FaCalendarAlt className="text-primary" /> Days
                  </label>
                  <div className="flex items-center justify-between bg-white/60 border border-slate-200/60 rounded-xl px-2 py-2 shadow-sm">
                    <button onClick={() => setDays(Math.max(1, days - 1))} className="w-10 h-10 rounded-lg text-slate-600 font-black hover:bg-white hover:shadow-sm transition-all flex items-center justify-center text-xl">-</button>
                    <div className="text-xl font-black text-slate-900">{days}</div>
                    <button onClick={() => setDays(days + 1)} className="w-10 h-10 rounded-lg text-slate-600 font-black hover:bg-white hover:shadow-sm transition-all flex items-center justify-center text-xl">+</button>
                  </div>
                </div>

                <div className="flex-[1.5] space-y-2.5">
                  <label className="text-xs font-black text-slate-700 uppercase tracking-widest flex items-center gap-2">
                    <FaMoneyBillWave className="text-primary" /> Budget
                  </label>
                  <select 
                    value={budget} 
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-white/60 border border-slate-200/60 rounded-xl px-4 py-3.5 text-slate-900 font-bold focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer shadow-sm"
                  >
                    <option value="Economy">Economy</option>
                    <option value="Mid-range">Mid-range</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-3">
                <label className="text-xs font-black text-slate-700 uppercase tracking-widest flex items-center gap-2">
                  <FaHeart className="text-primary" /> What's your vibe?
                </label>
                <div className="flex flex-wrap gap-2">
                  {allPreferences.map((pref) => (
                    <button
                      key={pref}
                      onClick={() => togglePreference(pref)}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${preferences.includes(pref) ? "bg-primary text-white border-primary shadow-md shadow-primary/20" : "bg-white/60 text-slate-600 border-slate-200/60 hover:bg-white shadow-sm"}`}
                    >
                      {pref}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={handleGenerate}
                  disabled={!destination.trim() || isGenerating}
                  className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary-hover hover:to-indigo-700 text-white font-black py-4.5 rounded-xl shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 text-sm tracking-[0.2em] uppercase flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed h-14"
                >
                  <FaMagic className="text-lg" /> Generate Magic
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
