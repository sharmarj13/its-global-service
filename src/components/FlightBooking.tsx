"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaCheck, FaExchangeAlt, FaShieldAlt, FaRupeeSign, FaCalendarAlt, FaUser, FaAngleDown, FaPlane, FaSearch } from "react-icons/fa";

export default function FlightBooking() {
  const router = useRouter();
  const [tripType, setTripType] = useState("one-way");
  const [fareType, setFareType] = useState("regular");

  const [activePopup, setActivePopup] = useState<"from" | "to" | "travellers" | "cabin" | "departure" | "return" | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const [fromCity, setFromCity] = useState({ city: "Delhi", code: "DEL, Delhi Airport India" });
  const [toCity, setToCity] = useState({ city: "Bengaluru", code: "BLR, Bengaluru International Airport India" });

  const [departureDate, setDepartureDate] = useState("2026-07-15");
  const [returnDate, setReturnDate] = useState("");

  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infants, setInfants] = useState(0);

  const [cabin, setCabin] = useState("Economy/Premium Economy");

  const fares = [
    { id: "regular", title: "Regular", subtitle: "Regular fares", badge: "" },
    { id: "student", title: "Student", subtitle: "Extra discounts/baggage", badge: "" },
    { id: "armed", title: "Armed Forces", subtitle: "Up to ₹ 600 off", badge: "" },
    { id: "gst", title: "Have a GST number?", subtitle: "Upto 10% Extra Savings!", badge: "new" },
    { id: "senior", title: "Senior Citizen", subtitle: "Up to ₹ 600 off", badge: "" },
    { id: "doctor", title: "Doctor and Nurses", subtitle: "Up to ₹ 600 off", badge: "" },
  ];

  const visaFreeDests = ["Manila", "Male", "Kuala Lumpur", "Colombo", "Mauritius", "Hong Kong", "Paro", "Mahe Island", "Nadi"];
  const eVisaDests = ["Denpasar", "Ho Chi Minh", "Tokyo", "Siem Reap", "Tbilisi", "Dubai"];

  // Handle clicking outside popup
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

  const handleCitySelect = (city: string) => {
    if (activePopup === "from") {
      setFromCity({ city, code: `${city.substring(0,3).toUpperCase()}, ${city} Airport` });
    } else if (activePopup === "to") {
      setToCity({ city, code: `${city.substring(0,3).toUpperCase()}, ${city} Airport` });
    }
    setActivePopup(null);
    setSearchQuery("");
  };

  const swapCities = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
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

  const depDateObj = formatDate(departureDate);
  const retDateObj = formatDate(returnDate);

  const totalTravellers = adults + childrenCount + infants;

  const renderCalendar = () => {
    return (
      <div ref={popupRef} className="absolute top-[115%] left-0 md:-left-[20%] w-[350px] md:w-[700px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
        {/* Calendar Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-2 text-sm font-bold text-slate-800">
            <FaCalendarAlt className="text-slate-400" />
            <span>15 Jul 26</span>
            <span className="text-slate-400">-</span>
            <span className="text-slate-600 font-semibold">Book round trip for great savings</span>
          </div>
        </div>
        
        {/* Dual Month View */}
        <div className="flex flex-col md:flex-row p-4 gap-6">
          {/* Month 1: July 2026 */}
          <div className="flex-1">
            <div className="text-center font-bold text-slate-800 mb-4">July 2026</div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="text-[11px] font-semibold text-slate-500">{d}</div>)}
              {/* Empty cells */}
              <div/><div/><div/>
              {/* Dates */}
              {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(d => (
                <div key={d} className="flex flex-col items-center justify-center text-slate-300">
                  <span className="text-sm font-bold">{d}</span>
                </div>
              ))}
              <div className="flex flex-col items-center justify-center text-slate-800 cursor-pointer hover:bg-slate-50 rounded-lg py-1">
                <span className="text-sm font-bold">14</span>
                <span className="text-[9px] font-semibold">12,260</span>
              </div>
              <div onClick={() => { 
                if(activePopup === "departure") setDepartureDate("2026-07-15");
                else setReturnDate("2026-07-15");
                setActivePopup(null); 
              }} className="flex flex-col items-center justify-center bg-blue-500 text-white cursor-pointer rounded-lg py-1 shadow-md shadow-blue-500/30">
                <span className="text-sm font-bold">15</span>
                <span className="text-[9px] font-semibold text-blue-100">9,886</span>
              </div>
              <div onClick={() => { 
                if(activePopup === "departure") setDepartureDate("2026-07-16");
                else setReturnDate("2026-07-16");
                setActivePopup(null); 
              }} className="flex flex-col items-center justify-center text-slate-800 cursor-pointer hover:bg-slate-50 rounded-lg py-1">
                <span className="text-sm font-bold">16</span>
                <span className="text-[9px] font-semibold">10,659</span>
              </div>
              {[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(d => (
                <div key={d} onClick={() => { 
                  const dt = `2026-07-${d < 10 ? '0'+d : d}`;
                  if(activePopup === "departure") setDepartureDate(dt);
                  else setReturnDate(dt);
                  setActivePopup(null); 
                }} className="flex flex-col items-center justify-center text-slate-800 cursor-pointer hover:bg-slate-50 rounded-lg py-1">
                  <span className="text-sm font-bold">{d}</span>
                  <span className="text-[9px] font-semibold text-emerald-500">9,148</span>
                </div>
              ))}
            </div>
          </div>

          {/* Month 2: August 2026 */}
          <div className="flex-1 hidden md:block">
            <div className="text-center font-bold text-slate-800 mb-4">August 2026</div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="text-[11px] font-semibold text-slate-500">{d}</div>)}
              {/* Empty cells */}
              <div/><div/><div/><div/><div/><div/>
              {/* Dates */}
              {Array.from({length: 31}, (_, i) => i + 1).map(d => (
                <div key={d} onClick={() => { 
                  const dt = `2026-08-${d < 10 ? '0'+d : d}`;
                  if(activePopup === "departure") setDepartureDate(dt);
                  else setReturnDate(dt);
                  setActivePopup(null); 
                }} className="flex flex-col items-center justify-center text-slate-800 cursor-pointer hover:bg-slate-50 rounded-lg py-1">
                  <span className="text-sm font-bold">{d}</span>
                  <span className="text-[9px] font-semibold text-emerald-500">8,463</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-blue-50/50 px-4 py-2 border-t border-blue-100 flex items-center justify-between">
          <span className="text-[10px] font-semibold text-slate-600">Showing our lowest prices in ₹</span>
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fade-in relative z-30">
      {/* Top Options */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
        <div className="flex items-center gap-4 text-sm">
          <label className="flex items-center gap-1.5 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border transition-colors ${tripType === "one-way" ? "border-blue-500 bg-blue-500" : "border-slate-400 bg-white group-hover:border-blue-400"}`}>
              {tripType === "one-way" && <FaCheck className="text-[10px] text-white" />}
            </div>
            <input type="radio" name="trip" className="hidden" onChange={() => { setTripType("one-way"); setReturnDate(""); }} />
            <span className={tripType === "one-way" ? "text-slate-900 font-black" : "text-slate-600 font-semibold group-hover:text-slate-900"}>One Way</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border transition-colors ${tripType === "round" ? "border-blue-500 bg-blue-500" : "border-slate-400 bg-white group-hover:border-blue-400"}`}>
              {tripType === "round" && <FaCheck className="text-[10px] text-white" />}
            </div>
            <input type="radio" name="trip" className="hidden" onChange={() => { setTripType("round"); setActivePopup("return"); }} />
            <span className={tripType === "round" ? "text-slate-900 font-black" : "text-slate-600 font-semibold group-hover:text-slate-900"}>Round Trip</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border transition-colors ${tripType === "multi" ? "border-blue-500 bg-blue-500" : "border-slate-400 bg-white group-hover:border-blue-400"}`}>
              {tripType === "multi" && <FaCheck className="text-[10px] text-white" />}
            </div>
            <input type="radio" name="trip" className="hidden" onChange={() => setTripType("multi")} />
            <span className={tripType === "multi" ? "text-slate-900 font-black" : "text-slate-600 font-semibold group-hover:text-slate-900"}>Multi City</span>
          </label>
        </div>
        <div className="text-sm font-semibold text-slate-600 hidden md:block">
          Book International and Domestic Flights
        </div>
      </div>

      {/* Main Input Grid */}
      {tripType !== "multi" ? (
        <div className="border border-slate-200 rounded-xl flex flex-col md:flex-row overflow-visible md:h-[110px] bg-white divide-y md:divide-y-0 md:divide-x divide-slate-200 relative mb-6">
          
          {/* From & To container */}
          <div className="flex-1 flex flex-col md:flex-row relative">
            
            {/* FROM */}
            <div 
              onClick={() => { setActivePopup("from"); setSearchQuery(""); }}
              className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors rounded-tl-xl md:rounded-l-xl flex flex-col justify-center relative ${activePopup === "from" ? "bg-blue-50" : ""}`}
            >
              <div className="text-sm text-slate-500 mb-1 font-semibold">From</div>
              <div className="text-3xl font-black text-slate-900 mb-1 truncate">{fromCity.city}</div>
              <div className="text-xs text-slate-500 truncate">{fromCity.code}</div>
            </div>

            {/* Swap Button */}
            <div className="flex-none flex items-center justify-center z-10 px-1">
              <div onClick={swapCities} className="bg-white border border-slate-200 text-blue-500 p-1.5 rounded-full shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                <FaExchangeAlt className="text-[10px]" />
              </div>
            </div>

            {/* TO */}
            <div 
              onClick={() => { setActivePopup("to"); setSearchQuery(""); }}
              className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative ${activePopup === "to" ? "bg-blue-50" : ""}`}
            >
              <div className="text-sm text-slate-500 mb-1 font-semibold">To</div>
              <div className="text-3xl font-black text-slate-900 mb-1 truncate">{toCity.city}</div>
              <div className="text-xs text-slate-500 truncate">{toCity.code}</div>
            </div>

            {/* Location Popup (shared for From and To) */}
            {(activePopup === "from" || activePopup === "to") && (
              <div ref={popupRef} className="absolute top-[115%] left-0 w-[400px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-4 max-h-[400px] overflow-y-auto">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3">
                  <FaSearch className="text-slate-400 text-sm" />
                  <input 
                    type="text" 
                    autoFocus
                    placeholder={activePopup === "from" ? "From" : "To"} 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full outline-none text-sm font-semibold text-slate-800"
                  />
                </div>
                
                <div className="mb-4">
                  <div className="text-xs font-bold text-slate-800 mb-2">Visa-Free/Visa-on-Arrival Destinations</div>
                  <div className="flex flex-wrap gap-2">
                    {visaFreeDests.filter(d => d.toLowerCase().includes(searchQuery.toLowerCase())).map(dest => (
                      <div key={dest} onClick={() => handleCitySelect(dest)} className="border border-slate-200 hover:border-blue-500 hover:bg-blue-50 rounded-lg px-3 py-1.5 text-xs text-slate-700 cursor-pointer transition-colors">
                        {dest}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-slate-800 mb-2">E-Visa Destinations</div>
                  <div className="flex flex-wrap gap-2">
                    {eVisaDests.filter(d => d.toLowerCase().includes(searchQuery.toLowerCase())).map(dest => (
                      <div key={dest} onClick={() => handleCitySelect(dest)} className="border border-slate-200 hover:border-blue-500 hover:bg-blue-50 rounded-lg px-3 py-1.5 text-xs text-slate-700 cursor-pointer transition-colors">
                        {dest}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Departure & Return container */}
          <div className="flex-1 flex flex-col md:flex-row relative">
            <div 
              onClick={() => setActivePopup("departure")}
              className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative ${activePopup === "departure" ? "bg-blue-50" : ""}`}
            >
              <div className="text-sm text-slate-500 mb-1 flex items-center gap-1 font-semibold">Departure <FaAngleDown className="text-[10px] text-blue-500" /></div>
              {depDateObj && (
                <>
                  <div className="text-3xl font-black text-slate-900 mb-1 flex items-baseline gap-1">
                    {depDateObj.day} <span className="text-xl">{depDateObj.month}'{depDateObj.year}</span>
                  </div>
                  <div className="text-xs text-slate-500">{depDateObj.weekday}</div>
                </>
              )}
            </div>
            <div 
              onClick={() => setActivePopup("return")}
              className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative ${activePopup === "return" ? "bg-blue-50" : ""}`}
            >
              <div className="text-sm text-slate-500 mb-1 flex items-center gap-1 font-semibold">Return <FaAngleDown className="text-[10px] text-blue-500" /></div>
              {retDateObj ? (
                <>
                  <div className="text-3xl font-black text-slate-900 mb-1 flex items-baseline gap-1">
                    {retDateObj.day} <span className="text-xl">{retDateObj.month}'{retDateObj.year}</span>
                  </div>
                  <div className="text-xs text-slate-500 flex items-center justify-between">
                    <span>{retDateObj.weekday}</span>
                    <span 
                      onClick={(e) => { e.stopPropagation(); setReturnDate(""); setTripType("one-way"); }}
                      className="text-[10px] text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full w-4 h-4 flex items-center justify-center shadow-sm"
                    >
                      ×
                    </span>
                  </div>
                </>
              ) : (
                <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                  Tap to add a return date for bigger discounts
                </div>
              )}
            </div>
            
            {/* Calendar Popup */}
            {(activePopup === "departure" || activePopup === "return") && renderCalendar()}
          </div>

        {/* Travellers & Cabin Class container */}
        <div className="flex-[0.8] flex flex-col md:flex-row relative">
          <div 
            onClick={() => setActivePopup("travellers")}
            className={`flex-[1.2] px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative ${activePopup === "travellers" ? "bg-blue-50" : ""}`}
          >
            <div className="text-sm text-slate-500 mb-1 flex items-center gap-1 font-semibold">Travellers <FaAngleDown className="text-[10px] text-blue-500" /></div>
            <div className="text-3xl font-black text-slate-900 mb-1 flex items-center gap-2">
              {totalTravellers} <span className="text-xs font-semibold text-slate-500 flex gap-2 ml-2 mt-1"><FaUser/> <FaUser className="text-[10px]"/> <FaUser className="text-[8px]"/></span>
            </div>
          </div>

          <div 
            onClick={() => setActivePopup("cabin")}
            className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors rounded-tr-xl md:rounded-r-xl flex flex-col justify-center relative ${activePopup === "cabin" ? "bg-blue-50" : ""}`}
          >
            <div className="text-sm text-slate-500 mb-1 flex items-center gap-1 font-semibold">Cabin Class <FaAngleDown className="text-[10px] text-blue-500" /></div>
            <div className="text-sm font-bold text-slate-900 leading-snug mt-1">
              {cabin.length > 15 ? cabin.substring(0, 15) + "..." : cabin}
            </div>
          </div>

          {/* Travellers Popup */}
          {activePopup === "travellers" && (
            <div ref={popupRef} className="absolute top-[115%] right-0 md:right-1/2 md:translate-x-1/2 w-[350px] md:w-[450px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-5">
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="text-xs font-bold text-slate-800">ADULTS (12y +)</div>
                    <div className="text-[10px] text-slate-400">on the day of travel</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {[1,2,3,4,5,6,7,8,9].map(num => (
                    <button key={num} onClick={() => setAdults(num)} className={`w-8 h-8 rounded-md text-xs font-bold border transition-colors ${adults === num ? "bg-blue-500 text-white border-blue-500" : "bg-white text-slate-700 border-slate-200 hover:border-blue-300"}`}>
                      {num}
                    </button>
                  ))}
                  <button className={`w-8 h-8 rounded-md text-xs font-bold border bg-white text-slate-700 border-slate-200 hover:border-blue-300`}>&gt;9</button>
                </div>
              </div>

              <div className="flex justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="mb-2">
                    <div className="text-xs font-bold text-slate-800">CHILDREN (2y - 12y)</div>
                    <div className="text-[10px] text-slate-400">on the day of travel</div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {[0,1,2,3,4,5,6].map(num => (
                      <button key={num} onClick={() => setChildrenCount(num)} className={`w-7 h-7 rounded-md text-xs font-bold border transition-colors ${childrenCount === num ? "bg-blue-500 text-white border-blue-500" : "bg-white text-slate-700 border-slate-200 hover:border-blue-300"}`}>
                        {num}
                      </button>
                    ))}
                    <button className={`w-7 h-7 rounded-md text-xs font-bold border bg-white text-slate-700 border-slate-200 hover:border-blue-300`}>&gt;6</button>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-2">
                    <div className="text-xs font-bold text-slate-800">INFANTS (below 2y)</div>
                    <div className="text-[10px] text-slate-400">on the day of travel</div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {[0,1,2,3,4,5,6].map(num => (
                      <button key={num} onClick={() => setInfants(num)} className={`w-7 h-7 rounded-md text-xs font-bold border transition-colors ${infants === num ? "bg-blue-500 text-white border-blue-500" : "bg-white text-slate-700 border-slate-200 hover:border-blue-300"}`}>
                        {num}
                      </button>
                    ))}
                    <button className={`w-7 h-7 rounded-md text-xs font-bold border bg-white text-slate-700 border-slate-200 hover:border-blue-300`}>&gt;6</button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button onClick={() => setActivePopup(null)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-6 rounded-lg text-sm shadow-md transition-colors">
                  NEXT
                </button>
              </div>
            </div>
          )}

          {/* Cabin Class Popup */}
          {activePopup === "cabin" && (
            <div ref={popupRef} className="absolute top-[115%] right-0 w-[300px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-4">
              <div className="text-xs font-bold text-slate-500 mb-3 uppercase">CHOOSE CABIN CLASS</div>
              <div className="space-y-2 mb-4">
                {[
                  { id: "Economy/ Premium Economy", label: "Economy/ Premium Economy" },
                  { id: "Premium Economy", label: "Premium Economy", perks: "Extra Legroom, Extra Baggage" },
                  { id: "Business Class", label: "Business Class", perks: "Luxury Lounges, Cabin Comfort" },
                  { id: "First Class", label: "First Class", perks: "Private Suites, Fine Dining" }
                ].map((item) => (
                  <div 
                    key={item.id} 
                    onClick={() => setCabin(item.id)}
                    className={`border rounded-xl p-3 cursor-pointer transition-all ${cabin === item.id ? "border-blue-500 bg-blue-50" : "border-slate-200 hover:border-blue-300"}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center border-2 ${cabin === item.id ? "border-blue-500 bg-blue-500" : "border-slate-300 bg-white"}`}>
                        {cabin === item.id && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                      </div>
                      <div className="font-bold text-sm text-slate-800">{item.label}</div>
                    </div>
                    {item.perks && (
                      <div className="text-[10px] text-slate-500 mt-1 ml-6">{item.perks}</div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end">
                <button onClick={() => setActivePopup(null)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1.5 px-6 rounded-lg text-sm shadow-md transition-colors">
                  DONE
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      ) : (
        /* Multi City Layout */
        <div className="flex flex-col gap-3 mb-6 relative z-20">
          {/* Row 1 */}
          <div className="border border-slate-200 rounded-xl flex flex-col md:flex-row overflow-visible bg-white divide-y md:divide-y-0 md:divide-x divide-slate-200 relative shadow-sm">
            
            {/* FROM */}
            <div className={`flex-[1.5] px-5 py-2.5 cursor-pointer hover:bg-slate-50 transition-colors rounded-tl-xl md:rounded-l-xl flex flex-col justify-center relative`}>
              <div className="text-[11px] text-slate-500 mb-0.5 font-semibold">From</div>
              <div className="text-2xl font-black text-slate-900 line-clamp-1">{fromCity.city}</div>
              <div className="text-[10px] text-slate-500 line-clamp-1 truncate">{fromCity.code}</div>
            </div>

            {/* TO */}
            <div className={`flex-[1.5] px-5 py-2.5 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative`}>
              <div className="text-[11px] text-slate-500 mb-0.5 font-semibold">To</div>
              <div className="text-2xl font-black text-slate-900 line-clamp-1">{toCity.city}</div>
              <div className="text-[10px] text-slate-500 line-clamp-1 truncate">{toCity.code}</div>
            </div>

            {/* Departure */}
            <div className={`flex-1 px-5 py-2.5 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative`}>
              <div className="text-[11px] text-slate-500 mb-0.5 flex items-center gap-1 font-semibold">Departure <FaAngleDown className="text-[10px] text-blue-500" /></div>
              {depDateObj && (
                <>
                  <div className="text-2xl font-black text-slate-900 flex items-baseline gap-1">
                    {depDateObj.day} <span className="text-sm">{depDateObj.month}'{depDateObj.year}</span>
                  </div>
                  <div className="text-[10px] text-slate-500">{depDateObj.weekday}</div>
                </>
              )}
            </div>

            {/* Travellers */}
            <div className={`flex-1 px-5 py-2.5 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative`}>
              <div className="text-[11px] text-slate-500 mb-0.5 flex items-center gap-1 font-semibold">Travellers <FaAngleDown className="text-[10px] text-blue-500" /></div>
              <div className="text-xl font-black text-slate-900 flex items-center gap-2">
                {totalTravellers} <span className="text-[10px] font-semibold text-slate-500 flex gap-1 ml-1 mt-1"><FaUser/> <FaUser className="text-[8px]"/></span>
              </div>
            </div>

            {/* Cabin Class */}
            <div className={`flex-[1.2] px-5 py-2.5 cursor-pointer hover:bg-slate-50 transition-colors rounded-tr-xl md:rounded-r-xl flex flex-col justify-center relative`}>
              <div className="text-[11px] text-slate-500 mb-0.5 flex items-center gap-1 font-semibold">Cabin Class <FaAngleDown className="text-[10px] text-blue-500" /></div>
              <div className="text-sm font-bold text-slate-900 leading-snug">
                {cabin.length > 15 ? cabin.substring(0, 15) + "..." : cabin}
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="border border-slate-200 rounded-xl flex flex-col md:flex-row overflow-visible bg-white divide-y md:divide-y-0 md:divide-x divide-slate-200 relative shadow-sm">
            {/* FROM */}
            <div className={`flex-[1.5] px-5 py-2.5 cursor-pointer hover:bg-slate-50 transition-colors rounded-tl-xl md:rounded-l-xl flex flex-col justify-center relative`}>
              <div className="text-[11px] text-slate-500 mb-0.5 font-semibold">From</div>
              <div className="text-2xl font-black text-slate-900 line-clamp-1">{toCity.city}</div>
              <div className="text-[10px] text-slate-500 line-clamp-1 truncate">{toCity.code}</div>
            </div>

            {/* TO (Select City) */}
            <div className={`flex-[1.5] px-5 py-2.5 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative`}>
              <div className="text-[11px] text-slate-500 mb-0.5 font-semibold">To</div>
              <div className="text-2xl font-black text-slate-900 line-clamp-1">Select City</div>
              <div className="text-[10px] text-slate-500 line-clamp-1 truncate">&nbsp;</div>
            </div>

            {/* Departure */}
            <div className={`flex-1 px-5 py-2.5 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative`}>
              <div className="text-[11px] text-slate-500 mb-0.5 flex items-center gap-1 font-semibold">Departure <FaAngleDown className="text-[10px] text-blue-500" /></div>
              <div className="text-2xl font-black text-slate-900 flex items-baseline gap-1">
                16 <span className="text-sm">Jul'26</span>
              </div>
              <div className="text-[10px] text-slate-500">Thursday</div>
            </div>

            {/* Action Area */}
            <div className={`flex-[2.2] p-3 flex items-center justify-center bg-slate-50/50 rounded-tr-xl md:rounded-r-xl relative`}>
              <button className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold text-xs uppercase px-6 py-2.5 rounded shadow-sm w-full h-full flex items-center justify-center transition-colors">
                + Add Another City
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Special Fares */}
      <div className="mb-6">
        <div className="text-sm font-bold text-slate-800 mb-2">Select a special fare</div>
        <div className="flex flex-wrap gap-2.5">
          {fares.map((fare) => (
            <div 
              key={fare.id}
              onClick={() => setFareType(fare.id)}
              className={`border rounded-xl p-2 cursor-pointer transition-all duration-300 relative min-w-[130px] ${
                fareType === fare.id 
                  ? "border-blue-500 bg-blue-50" 
                  : "border-slate-200 bg-white hover:border-blue-300"
              }`}
            >
              {fare.badge && (
                <span className="absolute -top-1.5 -right-1.5 bg-pink-600 text-white text-[8px] font-bold px-1.5 rounded-full shadow-sm">
                  {fare.badge}
                </span>
              )}
              <div className={`text-xs font-bold mb-0.5 ${fareType === fare.id ? "text-blue-600" : "text-slate-800"}`}>
                {fare.title}
              </div>
              <div className="text-[10px] text-slate-500 leading-tight">
                {fare.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar: Price Drop Protection & Quick Tools */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 mb-2">
        <div className="flex-1 bg-gradient-to-r from-white via-blue-50 to-blue-100/50 border border-slate-200 rounded-xl p-3 flex items-center gap-3 w-full">
          <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-blue-500" />
          <div className="flex-1 text-xs text-slate-800 flex flex-wrap items-center gap-1">
            <span className="font-bold">Add Price Drop Protection</span> 
            <span className="text-slate-600">If the price drops, we'll refund the difference.</span> 
            <span className="text-blue-500 font-bold cursor-pointer hover:underline">View Details</span>
          </div>
          <div className="bg-blue-500 text-white p-1 rounded-full text-[10px]">
            <FaRupeeSign />
          </div>
        </div>

        <div className="flex flex-col gap-1 hidden md:flex">
          <span className="text-[10px] font-bold text-slate-800 ml-1">Quick Tools</span>
          <div className="border border-slate-200 rounded-xl px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-slate-50">
            <FaPlane className="text-blue-500 text-xs" />
            <span className="text-xs font-semibold text-slate-700">Flight Tracker</span>
          </div>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex justify-center mt-8 relative z-30">
        <button 
          onClick={() => router.push("/flights/search")}
          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xl font-black px-16 py-3 rounded-full shadow-xl shadow-blue-500/30 transition-all hover:scale-105 uppercase tracking-wider"
        >
          Search
        </button>
      </div>
    </div>
  );
}
