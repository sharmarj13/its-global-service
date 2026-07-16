"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaCheck, FaAngleDown, FaSearch, FaCalendarAlt, FaPaw, FaChartLine } from "react-icons/fa";

export default function HotelBooking() {
  const [roomType, setRoomType] = useState("upto4");
  
  const [activePopup, setActivePopup] = useState<"city" | "checkin" | "checkout" | "guests" | "price" | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [city, setCity] = useState({ name: "Goa, India", country: "India" });
  const [checkIn, setCheckIn] = useState("2026-07-15");
  const [checkOut, setCheckOut] = useState("2026-07-16");
  
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(false);
  
  const [priceFilter, setPriceFilter] = useState("₹0-₹1500, ₹1500-₹2500,...");

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
  const prices = ["₹0-₹1500", "₹1500-₹2500", "₹2500-₹5000", "₹5000+"];

  const handleCitySelect = (cityName: string) => {
    setCity({ name: cityName + (cityName !== "Dubai" ? ", India" : ", United Arab Emirates"), country: cityName !== "Dubai" ? "India" : "United Arab Emirates" });
    setActivePopup(null);
    setSearchQuery("");
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return null;
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().substr(-2);
    const weekday = date.toLocaleString('default', { weekday: 'long' });
    return { day, month, year, weekday };
  };

  const checkInObj = formatDate(checkIn);
  const checkOutObj = formatDate(checkOut);

  const renderCalendar = () => {
    return (
      <div ref={popupRef} className="absolute top-[115%] left-0 md:-left-[50%] w-[350px] md:w-[700px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
        {/* Calendar Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-4 text-sm font-bold text-slate-800">
            <div className={`flex items-center gap-2 pb-1 ${activePopup === "checkin" ? "border-b-2 border-blue-500" : ""}`}>
              <FaCalendarAlt className={activePopup === "checkin" ? "text-blue-500" : "text-slate-400"} />
              <span className={activePopup === "checkin" ? "text-blue-500" : ""}>15 Jul 26</span>
            </div>
            <span className="text-slate-400">-</span>
            <div className={`flex items-center gap-2 pb-1 ${activePopup === "checkout" ? "border-b-2 border-blue-500" : ""}`}>
              <FaCalendarAlt className={activePopup === "checkout" ? "text-blue-500" : "text-slate-400"} />
              <span className={activePopup === "checkout" ? "text-blue-500" : ""}>16 Jul 26</span>
            </div>
          </div>
        </div>
        
        {/* Dual Month View */}
        <div className="flex flex-col md:flex-row p-4 gap-6">
          {/* Month 1: July 2026 */}
          <div className="flex-1">
            <div className="text-center font-bold text-slate-800 mb-4">July <span className="text-slate-400 font-normal">2026</span></div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center mb-4">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="text-[11px] font-semibold text-slate-500">{d}</div>)}
              <div/><div/><div/>
              {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(d => (
                <div key={d} className="flex flex-col items-center justify-center text-slate-300">
                  <span className="text-sm font-bold">{d}</span>
                </div>
              ))}
              <div className="flex flex-col items-center justify-center text-slate-800 cursor-pointer hover:bg-slate-50 rounded-lg py-1">
                <span className="text-sm font-bold">14</span>
              </div>
              <div onClick={() => { setActivePopup(null); }} className="flex flex-col items-center justify-center bg-blue-500 text-white cursor-pointer rounded-l-lg py-1">
                <span className="text-sm font-bold">15</span>
              </div>
              <div onClick={() => { setActivePopup(null); }} className="flex flex-col items-center justify-center bg-blue-500 text-white cursor-pointer rounded-r-lg py-1 relative">
                <span className="text-sm font-bold">16</span>
                <span className="absolute -top-3 text-[8px] bg-blue-600 px-1 rounded whitespace-nowrap">Rath ...</span>
              </div>
              {[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(d => (
                <div key={d} className="flex flex-col items-center justify-center text-slate-800 cursor-pointer hover:bg-slate-50 rounded-lg py-1 relative">
                  <span className="text-sm font-bold">{d}</span>
                  {d === 19 && <span className="absolute bottom-0 w-4 h-0.5 bg-orange-400 rounded-full"></span>}
                </div>
              ))}
            </div>
            <div className="text-[9px] text-slate-600 mt-2 border-t border-slate-100 pt-2">
              <div className="flex items-center gap-1 mb-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> 16 Jul-19 Jul Rath Yatra</div>
              <div className="flex items-center gap-1 mb-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> 15 Aug-16 Aug Independence Day</div>
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> 26 Aug-27 Aug Milad un-Nabi</div>
            </div>
          </div>

          {/* Month 2: August 2026 */}
          <div className="flex-1 hidden md:block">
            <div className="text-center font-bold text-slate-800 mb-4">August <span className="text-slate-400 font-normal">2026</span></div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center mb-4">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="text-[11px] font-semibold text-slate-500">{d}</div>)}
              <div/><div/><div/><div/><div/><div/>
              {Array.from({length: 31}, (_, i) => i + 1).map(d => (
                <div key={d} className="flex flex-col items-center justify-center text-slate-800 cursor-pointer hover:bg-slate-50 rounded-lg py-1 relative">
                  <span className="text-sm font-bold">{d}</span>
                  {[15,16,26,28,30].includes(d) && <span className="absolute bottom-0 w-4 h-0.5 bg-orange-400 rounded-full"></span>}
                  {d === 15 && <span className="absolute -top-3 text-[8px] bg-orange-100 text-orange-800 px-1 rounded whitespace-nowrap">Indep...</span>}
                  {d === 26 && <span className="absolute -top-3 text-[8px] bg-orange-100 text-orange-800 px-1 rounded whitespace-nowrap">Milad...</span>}
                  {d === 28 && <span className="absolute -top-3 text-[8px] bg-orange-100 text-orange-800 px-1 rounded whitespace-nowrap">Raks...</span>}
                </div>
              ))}
            </div>
            <div className="text-[9px] text-slate-600 mt-2 border-t border-slate-100 pt-2">
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> 28 Aug-30 Aug Raksha Bandhan</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fade-in relative z-30">
      {/* Top Options */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
        <div className="flex items-center gap-4 text-sm font-semibold text-slate-600">
          <label className="flex items-center gap-1.5 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border transition-colors ${roomType === "upto4" ? "border-blue-500 bg-blue-500" : "border-slate-400 bg-white group-hover:border-blue-400"}`}>
              {roomType === "upto4" && <FaCheck className="text-[10px] text-white" />}
            </div>
            <input type="radio" name="hotelRoom" className="hidden" onChange={() => setRoomType("upto4")} />
            <span className={roomType === "upto4" ? "text-slate-900 font-bold" : "group-hover:text-slate-900"}>Upto 4 Rooms</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border transition-colors ${roomType === "group" ? "border-blue-500 bg-blue-500" : "border-slate-400 bg-white group-hover:border-blue-400"}`}>
              {roomType === "group" && <FaCheck className="text-[10px] text-white" />}
            </div>
            <input type="radio" name="hotelRoom" className="hidden" onChange={() => setRoomType("group")} />
            <span className={roomType === "group" ? "text-slate-900 font-bold" : "group-hover:text-slate-900"}>Group Deals</span>
            <span className="bg-pink-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm ml-1">new</span>
          </label>
        </div>
        <div className="text-sm font-semibold text-slate-600 hidden md:block">
          Book Domestic and International Property Online. To list your property <span className="text-blue-500 cursor-pointer hover:underline font-bold">Click Here</span>
        </div>
      </div>

      {/* Main Input Grid */}
      <div className="border border-slate-200 rounded-xl flex flex-col md:flex-row overflow-visible md:h-[110px] bg-white divide-y md:divide-y-0 md:divide-x divide-slate-200 relative mb-5">
        
        {/* Location container */}
        <div 
          onClick={() => { setActivePopup("city"); setSearchQuery(""); }}
          className={`flex-[1.2] px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors rounded-t-xl md:rounded-l-xl md:rounded-tr-none flex flex-col justify-center relative ${activePopup === "city" ? "bg-blue-50" : ""}`}
        >
          <div className="text-sm text-blue-500 mb-1 font-semibold">City, Property Name Or Location</div>
          <div className="text-3xl font-black text-slate-900 mb-1 line-clamp-1 truncate">{city.name}</div>
          <div className="text-xs text-slate-500 line-clamp-1 truncate">{city.country}</div>

          {activePopup === "city" && (
            <div ref={popupRef} className="absolute top-[115%] left-0 w-[350px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-4 max-h-[450px] overflow-y-auto">
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
                <span className="text-[10px] text-slate-400 font-bold absolute right-0 cursor-pointer hover:text-slate-600">CLEAR</span>
              </div>
              
              <div className="text-[11px] text-slate-600 mb-3 font-semibold">
                Search: "{searchQuery || "Beachfront stays Goa"}"
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

        {/* Check-In & Check-Out container */}
        <div className="flex-[1.1] flex flex-col md:flex-row relative">
          <div 
            onClick={() => setActivePopup("checkin")}
            className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors border-r border-slate-200 flex flex-col justify-center relative ${activePopup === "checkin" ? "bg-blue-50" : ""}`}
          >
            <div className="text-sm text-slate-500 mb-1 flex items-center gap-1 font-semibold">Check-In <FaAngleDown className="text-[10px] text-blue-500" /></div>
            {checkInObj && (
              <>
                <div className="text-3xl font-black text-slate-900 mb-1 flex items-baseline gap-1">
                  {checkInObj.day} <span className="text-xl">{checkInObj.month}'{checkInObj.year}</span>
                </div>
                <div className="text-xs text-slate-500">{checkInObj.weekday}</div>
              </>
            )}
          </div>
          <div 
            onClick={() => setActivePopup("checkout")}
            className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative ${activePopup === "checkout" ? "bg-blue-50" : ""}`}
          >
            <div className="text-sm text-slate-500 mb-1 flex items-center gap-1 font-semibold">Check-Out <FaAngleDown className="text-[10px] text-blue-500" /></div>
            {checkOutObj && (
              <>
                <div className="text-3xl font-black text-slate-900 mb-1 flex items-baseline gap-1">
                  {checkOutObj.day} <span className="text-xl">{checkOutObj.month}'{checkOutObj.year}</span>
                </div>
                <div className="text-xs text-slate-500">{checkOutObj.weekday}</div>
              </>
            )}
          </div>

          {/* Calendar Popup */}
          {(activePopup === "checkin" || activePopup === "checkout") && renderCalendar()}
        </div>

        {/* Rooms & Guests container */}
        <div 
          onClick={() => setActivePopup("guests")}
          className={`flex-[0.9] px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative ${activePopup === "guests" ? "bg-blue-50" : ""} ${roomType === "group" ? "border-none rounded-b-xl md:rounded-r-xl md:rounded-bl-none" : "border-b md:border-b-0 md:border-r border-slate-200"}`}
        >
          <div className="text-sm text-slate-500 mb-1 flex items-center gap-1 font-semibold">Rooms & Guests <FaAngleDown className="text-[10px] text-blue-500" /></div>
          <div className="text-3xl font-black text-slate-900 mb-1 flex items-center gap-1.5">
            {rooms} <span className="text-xl text-slate-800 font-bold">Rooms</span> {adults + children} <span className="text-xl text-slate-800 font-bold">Guests</span>
          </div>

          {activePopup === "guests" && (
            <div ref={popupRef} onClick={e => e.stopPropagation()} className="absolute top-[115%] right-0 md:right-auto md:-left-[20%] w-[320px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-5">
              <div className="space-y-4 mb-4">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-slate-800">Room</div>
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
              <div className="text-[10px] text-slate-500 mb-4 pb-4 border-b border-slate-200 leading-tight">
                Please provide right number of children along with their right age for best options and prices.
              </div>
              <label className="flex items-start gap-3 border border-slate-200 rounded-lg p-3 cursor-pointer hover:bg-slate-50 transition-colors mb-4 group">
                <input type="checkbox" checked={pets} onChange={(e) => setPets(e.target.checked)} className="mt-1" />
                <div className="flex-1">
                  <div className="text-sm font-bold text-slate-800 flex justify-between">Are you travelling with pets? <FaPaw className="text-slate-400 text-lg group-hover:text-slate-500" /></div>
                  <div className="text-[10px] text-slate-500 mt-1 leading-tight">Selecting this option will show only pet-friendly properties. Please review the pet policies & applicable fees, if any.</div>
                </div>
              </label>
              <div className="flex justify-end">
                <button onClick={() => setActivePopup(null)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-lg text-sm shadow-md transition-colors w-full">
                  APPLY
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Price Per Night container */}
        {roomType !== "group" && (
          <div 
            onClick={() => setActivePopup("price")}
            className={`flex-[0.8] px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors rounded-b-xl md:rounded-r-xl md:rounded-bl-none flex flex-col justify-center relative ${activePopup === "price" ? "bg-blue-50" : ""}`}
          >
            <div className="text-sm text-slate-500 mb-1 flex items-center gap-1 font-semibold">Price Per Night <FaAngleDown className="text-[10px] text-blue-500" /></div>
            <div className="text-[13px] font-bold text-slate-700 leading-snug mt-1 truncate">
              {priceFilter}
            </div>

            {activePopup === "price" && (
              <div ref={popupRef} className="absolute top-[115%] right-0 w-[200px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-2 py-3 space-y-1">
                {prices.map(price => (
                  <div 
                    key={price} 
                    onClick={(e) => { e.stopPropagation(); setPriceFilter(price); setActivePopup(null); }}
                    className="px-4 py-2 hover:bg-slate-50 text-sm font-semibold text-slate-700 cursor-pointer rounded-lg transition-colors"
                  >
                    {price}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* Trending Searches */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-2 mt-4">
        <div className="text-xs font-semibold text-slate-700">Trending Searches:</div>
        <div className="flex flex-wrap justify-center gap-2">
          {["Dubai, United Arab Emirates", "Bangkok, Thailand", "Singapore, Singapore"].map(ts => (
            <div key={ts} className="bg-slate-100 hover:bg-slate-200 cursor-pointer transition-colors px-3 py-1.5 rounded text-xs font-medium text-slate-700">
              {ts}
            </div>
          ))}
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-8 relative z-30">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xl font-black px-16 py-3 rounded-full shadow-xl shadow-blue-500/30 transition-all hover:scale-105 uppercase tracking-wider">
          {roomType === "group" ? "Get Me Best Prices" : "Search"}
        </button>
      </div>
    </div>
  );
}
