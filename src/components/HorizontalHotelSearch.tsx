"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaCalendarAlt, FaPaw, FaSearch, FaChartLine } from "react-icons/fa";

export default function HorizontalHotelSearch() {
  const router = useRouter();
  
  const [activePopup, setActivePopup] = useState<"city" | "checkin" | "checkout" | "guests" | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [city, setCity] = useState("Delhi");
  const [checkIn, setCheckIn] = useState("2026-07-24");
  const [checkOut, setCheckOut] = useState("2026-08-17");
  
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setActivePopup(null);
      }
    }
    if (activePopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activePopup]);

  const suggestions = ["Delhi", "Mumbai", "Bengaluru", "Goa", "Chennai", "Dubai"];

  const handleCitySelect = (cityName: string) => {
    setCity(cityName);
    setActivePopup(null);
    setSearchQuery("");
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    const weekday = date.toLocaleString('default', { weekday: 'short' });
    return `${weekday}, ${day} ${month} ${year}`;
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      city: city,
      checkIn,
      checkOut,
      rooms: rooms.toString(),
      adults: adults.toString()
    });
    router.push(`/hotels/search?${params.toString()}`);
    setActivePopup(null);
  };

  const renderCalendar = () => {
    return (
      <div ref={popupRef} className="absolute top-[115%] left-0 w-[700px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden text-slate-800">
        {/* Calendar Header */}
        <div className="flex items-center gap-6 px-4 py-3 border-b border-slate-100 bg-white">
          <div className={`flex items-center gap-2 pb-1 ${activePopup === "checkin" ? "border-b-2 border-blue-500 font-bold" : ""}`}>
            <FaCalendarAlt className="text-slate-400" />
            <span>24 Jul 26</span>
          </div>
          <span className="text-slate-400">-</span>
          <div className={`flex items-center gap-2 pb-1 ${activePopup === "checkout" ? "border-b-2 border-blue-500 font-bold" : ""}`}>
            <FaCalendarAlt className="text-slate-400" />
            <span className={activePopup === "checkout" ? "text-blue-500" : ""}>Select CheckOut Date</span>
          </div>
        </div>
        
        {/* Dual Month View */}
        <div className="flex p-4 gap-6">
          {/* Month 1 */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <span className="text-blue-500 cursor-pointer">←</span>
              <div className="font-bold text-slate-800">July <span className="font-light">26</span></div>
              <span className="text-transparent">→</span>
            </div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center mb-4">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="text-[11px] font-semibold text-slate-500">{d}</div>)}
              <div/><div/><div/>
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(d => (
                <div key={d} className="flex flex-col items-center justify-center text-slate-300">
                  <span className="text-sm font-bold">{d}</span>
                </div>
              ))}
              {[16,17,18,19,20,21,22,23].map(d => (
                <div key={d} className="flex flex-col items-center justify-center text-slate-800 cursor-pointer hover:bg-slate-50 rounded-lg py-1 relative">
                  <span className="text-sm font-bold">{d}</span>
                  {[16,17,18,19].includes(d) && <span className="absolute bottom-0 w-4 h-0.5 bg-orange-400 rounded-full"></span>}
                  {d === 16 && <span className="absolute -top-3 text-[8px] bg-orange-100 text-orange-800 px-1 rounded whitespace-nowrap">Rath...</span>}
                </div>
              ))}
              <div onClick={() => setActivePopup("checkout")} className="flex flex-col items-center justify-center bg-blue-500 text-white cursor-pointer rounded-lg py-1">
                <span className="text-sm font-bold">24</span>
              </div>
              {[25,26,27,28,29,30,31].map(d => (
                <div key={d} className="flex flex-col items-center justify-center text-slate-800 cursor-pointer hover:bg-slate-50 rounded-lg py-1">
                  <span className="text-sm font-bold">{d}</span>
                </div>
              ))}
            </div>
            <div className="text-[9px] text-slate-600 mt-2 border-t border-slate-100 pt-2 space-y-1">
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> 16 Jul-19 Jul Rath Yatra</div>
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> 15 Aug-16 Aug Independence Day</div>
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> 26 Aug-27 Aug Milad un-Nabi</div>
            </div>
          </div>

          {/* Month 2 */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <span className="text-transparent">←</span>
              <div className="font-bold text-slate-800">August <span className="font-light">26</span></div>
              <span className="text-blue-500 cursor-pointer">→</span>
            </div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center mb-4">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="text-[11px] font-semibold text-slate-500">{d}</div>)}
              <div/><div/><div/><div/><div/><div/>
              {Array.from({length: 31}, (_, i) => i + 1).map(d => (
                <div key={d} className="flex flex-col items-center justify-center text-slate-800 cursor-pointer hover:bg-slate-50 rounded-lg py-1 relative">
                  <span className="text-sm font-bold">{d}</span>
                  {[15,16,26,27,28,29,30].includes(d) && <span className="absolute bottom-0 w-4 h-0.5 bg-orange-400 rounded-full"></span>}
                  {d === 15 && <span className="absolute -top-3 text-[8px] bg-orange-100 text-orange-800 px-1 rounded whitespace-nowrap">Inde...</span>}
                  {d === 26 && <span className="absolute -top-3 text-[8px] bg-orange-100 text-orange-800 px-1 rounded whitespace-nowrap">Mila...</span>}
                  {d === 28 && <span className="absolute -top-3 text-[8px] bg-orange-100 text-orange-800 px-1 rounded whitespace-nowrap">Raks...</span>}
                </div>
              ))}
            </div>
            <div className="text-[9px] text-slate-600 mt-2 border-t border-slate-100 pt-2 space-y-1">
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> 28 Aug-30 Aug Raksha Bandhan</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-2 flex items-center gap-2 relative">
      
      {/* City Input */}
      <div 
        className="flex-1 min-w-[200px] border border-slate-200 rounded-md px-3 py-1.5 cursor-pointer relative"
        onClick={() => setActivePopup("city")}
      >
        <div className="text-[10px] font-semibold text-slate-400 uppercase">City, Area or Property</div>
        <div className="font-bold text-slate-800 truncate">{city}</div>
        
        {activePopup === "city" && (
          <div ref={popupRef} className="absolute top-[115%] left-0 w-[300px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-4 max-h-[400px] overflow-y-auto">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3 relative">
              <FaSearch className="text-slate-400 text-sm absolute left-1" />
              <input 
                type="text" 
                autoFocus
                placeholder="Where do you want to stay?" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full outline-none text-sm font-semibold text-slate-800 pl-7 pr-10"
              />
            </div>
            <div className="mb-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">SUGGESTIONS</div>
            <div className="flex flex-col gap-1">
              {suggestions.filter(d => d.toLowerCase().includes(searchQuery.toLowerCase())).map(dest => (
                <div key={dest} onClick={(e) => { e.stopPropagation(); handleCitySelect(dest); }} className="flex items-center gap-3 hover:bg-slate-50 px-2 py-2 rounded-lg cursor-pointer transition-colors group">
                  <FaChartLine className="text-slate-400 text-lg group-hover:text-blue-500" />
                  <span className="text-sm font-semibold text-slate-800">{dest}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Check-In */}
      <div 
        className="w-[160px] border border-slate-200 rounded-md px-3 py-1.5 cursor-pointer relative"
        onClick={() => setActivePopup("checkin")}
      >
        <div className="text-[10px] font-semibold text-slate-400 uppercase">Check-In</div>
        <div className="font-bold text-slate-800 truncate">{formatDate(checkIn)}</div>
        {activePopup === "checkin" && renderCalendar()}
      </div>

      {/* Check-Out */}
      <div 
        className="w-[160px] border border-slate-200 rounded-md px-3 py-1.5 cursor-pointer relative"
        onClick={() => setActivePopup("checkout")}
      >
        <div className="text-[10px] font-semibold text-slate-400 uppercase">Check-Out</div>
        <div className="font-bold text-slate-800 truncate">{formatDate(checkOut)}</div>
        {activePopup === "checkout" && renderCalendar()}
      </div>

      {/* Rooms & Guests */}
      <div 
        className="flex-1 min-w-[200px] border border-slate-200 rounded-md px-3 py-1.5 cursor-pointer relative"
        onClick={() => setActivePopup("guests")}
      >
        <div className="text-[10px] font-semibold text-slate-400 uppercase">Rooms & Guests</div>
        <div className="font-bold text-slate-800 truncate">{rooms} Room, {adults + children} Adults</div>
        
        {activePopup === "guests" && (
          <div ref={popupRef} onClick={e => e.stopPropagation()} className="absolute top-[115%] right-0 w-[320px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-5">
            <div className="space-y-4 mb-4">
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-slate-800">Rooms</div>
                <div className="flex items-center gap-3 border border-slate-200 rounded px-2 py-1">
                  <span className="text-slate-400 cursor-pointer hover:text-blue-500 font-bold" onClick={() => setRooms(Math.max(1, rooms - 1))}>−</span>
                  <span className="text-sm font-bold w-4 text-center">{rooms}</span>
                  <span className="text-slate-400 cursor-pointer hover:text-blue-500 font-bold" onClick={() => setRooms(rooms + 1)}>+</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold text-slate-800">Adults</div>
                <div className="flex items-center gap-3 border border-slate-200 rounded px-2 py-1">
                  <span className="text-slate-400 cursor-pointer hover:text-blue-500 font-bold" onClick={() => setAdults(Math.max(1, adults - 1))}>−</span>
                  <span className="text-sm font-bold w-4 text-center">{adults}</span>
                  <span className="text-slate-400 cursor-pointer hover:text-blue-500 font-bold" onClick={() => setAdults(adults + 1)}>+</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm font-bold text-slate-800">Children</div>
                  <div className="text-[10px] text-slate-400">0 - 17 Years Old</div>
                </div>
                <div className="flex items-center gap-3 border border-slate-200 rounded px-2 py-1">
                  <span className="text-slate-400 cursor-pointer hover:text-blue-500 font-bold" onClick={() => setChildren(Math.max(0, children - 1))}>−</span>
                  <span className="text-sm font-bold w-4 text-center">{children}</span>
                  <span className="text-slate-400 cursor-pointer hover:text-blue-500 font-bold" onClick={() => setChildren(children + 1)}>+</span>
                </div>
              </div>
            </div>
            
            <label className="flex items-start gap-3 border border-slate-200 rounded-lg p-3 cursor-pointer hover:bg-slate-50 transition-colors mb-4 group">
              <input type="checkbox" checked={pets} onChange={(e) => setPets(e.target.checked)} className="mt-1" />
              <div className="flex-1">
                <div className="text-sm font-bold text-slate-800 flex justify-between">Are you travelling with pets? <FaPaw className="text-slate-400 text-lg group-hover:text-slate-500" /></div>
                <div className="text-[10px] text-slate-500 mt-1 leading-tight">Selecting this option will show only pet-friendly properties. Please review the pet policies & applicable fees, if any.</div>
              </div>
            </label>
            <div className="flex justify-end border-t border-slate-100 pt-4">
              <button onClick={() => setActivePopup(null)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full text-sm shadow-md transition-colors w-full">
                APPLY
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Search Button */}
      <button 
        onClick={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-md shadow-sm transition-colors text-sm tracking-wider uppercase"
      >
        Search
      </button>

      {/* Rewards Badge */}
      <div className="border border-teal-200 bg-teal-50 rounded-md px-3 py-1 flex items-center gap-2 cursor-pointer">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-[10px] font-bold">O</div>
        <div className="text-[10px] font-bold text-teal-700 leading-tight">
          <span className="text-pink-600 border border-pink-600 px-1 rounded-[3px] text-[8px] mr-1">new</span><br/>
          OneCircle<br/>Rewards
        </div>
      </div>

    </div>
  );
}
