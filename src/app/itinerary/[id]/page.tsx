"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { mockItineraries } from "@/data/mockData";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaPlane,
  FaBed,
  FaUtensils,
  FaCamera,
  FaCar,
  FaHeart,
  FaShareAlt,
  FaDownload,
  FaHotel,
  FaSyncAlt,
  FaMagic,
  FaMap
} from "react-icons/fa";

export default function ItineraryDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("itinerary");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const itinerary = mockItineraries[params.id] || mockItineraries["goa-123"];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "travel": return <FaCar className="text-blue-500" />;
      case "accommodation": return <FaBed className="text-indigo-500" />;
      case "dining": return <FaUtensils className="text-orange-500" />;
      case "culture": return <FaCamera className="text-rose-500" />;
      default: return <FaMapMarkerAlt className="text-emerald-500" />;
    }
  };

  const getActivityStyle = (type: string) => {
    switch (type) {
      case "travel": return "bg-blue-50/80 border-blue-200 text-blue-600";
      case "accommodation": return "bg-indigo-50/80 border-indigo-200 text-indigo-600";
      case "dining": return "bg-orange-50/80 border-orange-200 text-orange-600";
      case "culture": return "bg-rose-50/80 border-rose-200 text-rose-600";
      default: return "bg-emerald-50/80 border-emerald-200 text-emerald-600";
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f7fb] font-sans pb-24 selection:bg-indigo-100 selection:text-indigo-900 relative overflow-x-hidden">

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-200/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px]"></div>
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

      {/* Stunning Hero Header */}
      <div className="relative h-[75vh] min-h-[400px] w-full overflow-hidden z-10">
        <img
          src={itinerary.imageUrl}
          alt={itinerary.destination}
          className="w-full h-full object-cover scale-105 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1930] via-[#0a1930]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1930]/60 via-transparent to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full pb-56">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-xl">
              <FaMagic className="text-yellow-400" /> Curated specifically for you
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-5 tracking-tight drop-shadow-2xl leading-tight max-w-4xl">{itinerary.destination}</h1>

            <div className="flex flex-wrap gap-3 text-white text-xs font-bold uppercase tracking-widest">
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg"><FaCalendarAlt className="text-indigo-300" /> {itinerary.days} Days</span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg"><FaMoneyBillWave className="text-emerald-300" /> {itinerary.budget}</span>
              <span className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
                <FaHeart className="text-rose-300" /> {itinerary.preferences.join(" • ")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-48 relative z-20 flex flex-col lg:flex-row gap-6 lg:gap-8">

        {/* Main Timeline */}
        <div className="flex-[2] space-y-6 lg:space-y-8 animate-slide-up">
          {itinerary.timeline.map((day, idx) => (
            <div key={idx} className="bg-white/90 backdrop-blur-2xl rounded-[1.5rem] shadow-xl shadow-slate-200/50 border border-white p-5 md:p-8 relative overflow-hidden group">

              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Day Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-indigo-600 text-white flex flex-col items-center justify-center shadow-lg shadow-indigo-500/30 flex-shrink-0 border border-indigo-400/20">
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-80 mb-0.5">Day</span>
                  <span className="text-xl font-black leading-none">{day.day}</span>
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900 tracking-tight">{day.theme}</h2>
                  {day.date && <p className="text-slate-500 font-bold mt-0.5 tracking-wider uppercase text-[10px]">{day.date}</p>}
                </div>
              </div>

              {/* Activities Timeline */}
              <div className="relative space-y-6 before:absolute before:top-4 before:bottom-0 before:left-[26px] before:w-[3px] before:bg-gradient-to-b before:from-indigo-200 before:via-slate-200 before:to-transparent before:rounded-full z-10">
                {day.activities.map((activity, aIdx) => (
                  <div key={aIdx} className="relative flex items-start gap-4 md:gap-5 group/activity pl-[6px]">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10 border transition-transform group-hover/activity:scale-110 duration-300 text-base backdrop-blur-md shadow-sm ${getActivityStyle(activity.type)}`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 bg-white backdrop-blur-md border border-slate-100 p-4 rounded-xl transition-all shadow-sm group-hover/activity:border-indigo-100 group-hover/activity:shadow-md group-hover/activity:bg-indigo-50/30">
                      <div className="inline-block px-2 py-0.5 bg-slate-100 border border-slate-200 rounded-full text-[9px] font-black text-slate-500 uppercase tracking-widest mb-2">{activity.time}</div>
                      <h3 className="text-base font-black text-slate-900 mb-1 group-hover/activity:text-primary transition-colors">{activity.title}</h3>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Sidebar Actions */}
        <div className="w-full lg:w-[320px] flex-shrink-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="sticky top-28 space-y-5">

            {/* Map Preview */}
            <div className="bg-white/90 backdrop-blur-2xl rounded-[1.5rem] shadow-xl shadow-slate-200/50 border border-white overflow-hidden group cursor-pointer relative p-1.5">
              <div className="h-32 bg-slate-200 rounded-[1.125rem] relative overflow-hidden border border-slate-100">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700" alt="Map" />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[1px]">
                  <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-1.5 text-slate-900 border border-white/50 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors">
                    <FaMap className="text-primary group-hover:text-white text-xs" /> View on Map
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-2xl rounded-[1.5rem] shadow-xl shadow-slate-200/50 border border-white p-5 md:p-6">
              <h3 className="font-black text-slate-900 mb-5 text-lg flex items-center gap-2.5">
                <div className="w-1 h-5 bg-gradient-to-b from-primary to-indigo-600 rounded-full shadow-sm"></div> Let's make it happen
              </h3>

              <div className="space-y-3">
                <button
                  onClick={() => router.push('/flights/search')}
                  className="w-full bg-slate-900 hover:bg-black border border-slate-800 text-white font-black py-3 px-4 rounded-xl transition-all flex items-center justify-between group shadow-md hover:shadow-lg hover:-translate-y-0.5 text-xs"
                >
                  <span className="flex items-center gap-2.5"><FaPlane className="text-base text-indigo-400 group-hover:text-indigo-300 transition-colors" /> Book Flights</span>
                  <span className="text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all">→</span>
                </button>
                <button
                  onClick={() => router.push('/hotels/search')}
                  className="w-full bg-slate-900 hover:bg-black border border-slate-800 text-white font-black py-3 px-4 rounded-xl transition-all flex items-center justify-between group shadow-md hover:shadow-lg hover:-translate-y-0.5 text-xs"
                >
                  <span className="flex items-center gap-2.5"><FaHotel className="text-base text-indigo-400 group-hover:text-indigo-300 transition-colors" /> Book Hotels</span>
                  <span className="text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all">→</span>
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-2 gap-2.5">
                <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-rose-50 hover:border-rose-200 transition-all text-slate-500 hover:text-rose-600 font-bold text-[9px] uppercase tracking-[0.2em] group shadow-sm">
                  <FaHeart className="text-base" /> Save Trip
                </button>
                <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 transition-all text-slate-500 hover:text-indigo-600 font-bold text-[9px] uppercase tracking-[0.2em] group shadow-sm">
                  <FaShareAlt className="text-base" /> Share
                </button>
                <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-emerald-50 hover:border-emerald-200 transition-all text-slate-500 hover:text-emerald-600 font-bold text-[9px] uppercase tracking-[0.2em] group shadow-sm">
                  <FaDownload className="text-base" /> PDF
                </button>
                <button onClick={() => router.push('/itinerary/create')} className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border border-slate-200 bg-slate-50 hover:bg-amber-50 hover:border-amber-200 transition-all text-slate-500 hover:text-amber-600 font-bold text-[9px] uppercase tracking-[0.2em] group shadow-sm">
                  <FaSyncAlt className="text-base" /> Remake
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
