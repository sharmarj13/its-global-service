"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaCheck, FaExchangeAlt, FaAngleDown, FaSearch, FaChartLine } from "react-icons/fa";

export default function CabBooking() {
  const [tripType, setTripType] = useState("outstation-one-way");
  
  const [activePopup, setActivePopup] = useState<"from" | "to" | "departure" | "return" | "time" | "package" | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [fromCity, setFromCity] = useState("Mumbai");
  const [toCity, setToCity] = useState("Pune");
  
  const [departureDate, setDepartureDate] = useState("2026-07-15");
  const [returnDate, setReturnDate] = useState("");
  const [pickupTime, setPickupTime] = useState("10:00 AM");

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

  const suggestions = ["Mumbai", "Pune", "Delhi", "Agra", "Jaipur", "Bengaluru", "Goa"];
  const times = ["06:00 AM", "07:00 AM", "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

  const handleCitySelect = (cityName: string) => {
    if (activePopup === "from") setFromCity(cityName);
    else if (activePopup === "to") setToCity(cityName);
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

  const depObj = formatDate(departureDate);
  const retObj = formatDate(returnDate);

  const [packageOption, setPackageOption] = useState("1 hrs 10 kms");
  const [pickupHr, setPickupHr] = useState("10");
  const [pickupMin, setPickupMin] = useState("00");
  const [pickupMeridian, setPickupMeridian] = useState("AM");

  const packagesList = [
    "1 hrs 10 kms", "2 hrs 20 kms", "3 hrs 30 kms", "4 hrs 40 kms", "5 hrs 50 kms", "6 hrs 60 kms",
    "7 hrs 70 kms", "8 hrs 80 kms", "9 hrs 90 kms", "10 hrs 100 kms", "11 hrs 110 kms", "12 hrs 120 kms"
  ];

  const [showStops, setShowStops] = useState(false);

  const renderTimePicker = () => {
    const hours = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const minutes = ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"];
    
    return (
      <div ref={popupRef} onClick={e => e.stopPropagation()} className="absolute top-[115%] right-0 w-[280px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-3 border-b border-slate-100">
          <div className="text-sm font-bold text-slate-800 flex items-center gap-2">
            <span className="border-b-2 border-blue-500 pb-0.5">{pickupHr}</span> : <span>{pickupMin}</span> <span>{pickupMeridian}</span>
          </div>
          <button 
            onClick={() => { setPickupTime(`${pickupHr}:${pickupMin} ${pickupMeridian}`); setActivePopup(null); }}
            className="bg-blue-500 hover:bg-blue-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase"
          >
            Apply
          </button>
        </div>
        <div className="flex h-[200px] text-sm font-medium">
          <div className="flex-1 overflow-y-auto no-scrollbar border-r border-slate-100">
            {hours.map(h => (
              <div 
                key={h} 
                onClick={() => setPickupHr(h)}
                className={`text-center py-2 cursor-pointer ${pickupHr === h ? "bg-blue-500 text-white font-bold" : "hover:bg-slate-50 text-slate-700"}`}
              >
                {h} Hr
              </div>
            ))}
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar border-r border-slate-100">
            {minutes.map(m => (
              <div 
                key={m} 
                onClick={() => setPickupMin(m)}
                className={`text-center py-2 cursor-pointer ${pickupMin === m ? "bg-blue-500 text-white font-bold" : "hover:bg-slate-50 text-slate-700"}`}
              >
                {m} min
              </div>
            ))}
          </div>
          <div className="flex-[0.8] overflow-y-auto no-scrollbar">
            {["AM", "PM"].map(mer => (
              <div 
                key={mer} 
                onClick={() => setPickupMeridian(mer)}
                className={`text-center py-2 cursor-pointer ${pickupMeridian === mer ? "bg-blue-500 text-white font-bold" : "hover:bg-slate-50 text-slate-700"}`}
              >
                {mer}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderCalendar = () => {
    return (
      <div ref={popupRef} className="absolute top-[115%] left-0 md:-left-[50%] w-[350px] md:w-[700px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
        <div className="flex flex-col md:flex-row p-4 gap-6">
          <div className="flex-1">
            <div className="text-center font-bold text-slate-800 mb-4">July <span className="text-slate-400 font-normal">2026</span></div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center mb-4">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="text-[11px] font-semibold text-slate-500">{d}</div>)}
              <div/><div/><div/>
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(d => (
                <div key={d} className="flex flex-col items-center justify-center text-slate-300">
                  <span className="text-sm font-bold">{d}</span>
                </div>
              ))}
              <div onClick={() => { 
                  if(activePopup === "departure") setDepartureDate("2026-07-15");
                  else setReturnDate("2026-07-15");
                  setActivePopup(null); 
                }} className={`flex flex-col items-center justify-center cursor-pointer rounded-lg py-1 ${departureDate === "2026-07-15" || returnDate === "2026-07-15" ? "bg-blue-500 text-white" : "text-slate-800 hover:bg-slate-50"}`}>
                <span className="text-sm font-bold">15</span>
              </div>
              {[16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(d => (
                <div key={d} onClick={() => { 
                  const dt = `2026-07-${d}`;
                  if(activePopup === "departure") setDepartureDate(dt);
                  else setReturnDate(dt);
                  setActivePopup(null); 
                }} className={`flex flex-col items-center justify-center cursor-pointer rounded-lg py-1 ${departureDate === `2026-07-${d}` || returnDate === `2026-07-${d}` ? "bg-blue-500 text-white" : "text-slate-800 hover:bg-slate-50"}`}>
                  <span className="text-sm font-bold">{d}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 hidden md:block">
            <div className="text-center font-bold text-slate-800 mb-4">August <span className="text-slate-400 font-normal">2026</span></div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center mb-4">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d} className="text-[11px] font-semibold text-slate-500">{d}</div>)}
              <div/><div/><div/><div/><div/><div/>
              {Array.from({length: 31}, (_, i) => i + 1).map(d => (
                <div key={d} onClick={() => { 
                  const dt = `2026-08-${d < 10 ? '0'+d : d}`;
                  if(activePopup === "departure") setDepartureDate(dt);
                  else setReturnDate(dt);
                  setActivePopup(null); 
                }} className={`flex flex-col items-center justify-center cursor-pointer rounded-lg py-1 ${departureDate === `2026-08-${d < 10 ? '0'+d : d}` || returnDate === `2026-08-${d < 10 ? '0'+d : d}` ? "bg-blue-500 text-white" : "text-slate-800 hover:bg-slate-50"}`}>
                  <span className="text-sm font-bold">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fade-in relative z-30">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 gap-3">
        <div className="flex items-center gap-4 text-sm font-semibold text-slate-600 flex-wrap">
          <label className="flex items-center gap-1.5 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border transition-colors ${tripType === "outstation-one-way" ? "border-blue-500 bg-blue-500" : "border-slate-400 bg-white group-hover:border-blue-400"}`}>
              {tripType === "outstation-one-way" && <FaCheck className="text-[10px] text-white" />}
            </div>
            <input type="radio" name="cabTrip" className="hidden" onChange={() => { setTripType("outstation-one-way"); setReturnDate(""); }} />
            <span className={tripType === "outstation-one-way" ? "text-slate-900 font-bold" : "group-hover:text-slate-900"}>Outstation One-Way</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border transition-colors ${tripType === "outstation-round" ? "border-blue-500 bg-blue-500" : "border-slate-400 bg-white group-hover:border-blue-400"}`}>
              {tripType === "outstation-round" && <FaCheck className="text-[10px] text-white" />}
            </div>
            <input type="radio" name="cabTrip" className="hidden" onChange={() => { setTripType("outstation-round"); setActivePopup("return"); }} />
            <span className={tripType === "outstation-round" ? "text-slate-900 font-bold" : "group-hover:text-slate-900"}>Outstation Round-Trip</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border transition-colors ${tripType === "airport" ? "border-blue-500 bg-blue-500" : "border-slate-400 bg-white group-hover:border-blue-400"}`}>
              {tripType === "airport" && <FaCheck className="text-[10px] text-white" />}
            </div>
            <input type="radio" name="cabTrip" className="hidden" onChange={() => setTripType("airport")} />
            <span className={tripType === "airport" ? "text-slate-900 font-bold" : "group-hover:text-slate-900"}>Airport Transfers</span>
          </label>
          <label className="flex items-center gap-1.5 cursor-pointer group">
            <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center border transition-colors ${tripType === "hourly" ? "border-blue-500 bg-blue-500" : "border-slate-400 bg-white group-hover:border-blue-400"}`}>
              {tripType === "hourly" && <FaCheck className="text-[10px] text-white" />}
            </div>
            <input type="radio" name="cabTrip" className="hidden" onChange={() => setTripType("hourly")} />
            <span className={tripType === "hourly" ? "text-slate-900 font-bold" : "group-hover:text-slate-900"}>Hourly Rentals</span>
            <span className="bg-pink-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm ml-1">new</span>
          </label>
        </div>
      </div>

      <div className="border border-slate-200 rounded-xl flex flex-col md:flex-row overflow-visible md:h-[110px] bg-white divide-y md:divide-y-0 md:divide-x divide-slate-200 relative mb-4">
        <div className={`${tripType === "hourly" ? "flex-1" : "flex-[1.5]"} flex flex-col md:flex-row relative`}>
          {tripType !== "hourly" && (
            <div onClick={swapCities} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 text-blue-500 p-1.5 rounded-full shadow-sm cursor-pointer hover:shadow-md transition-shadow">
              <FaExchangeAlt className="text-[10px]" />
            </div>
          )}
          <div 
            onClick={() => { setActivePopup("from"); setSearchQuery(""); }}
            className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors rounded-tl-xl md:rounded-l-xl flex flex-col justify-center relative ${activePopup === "from" ? "bg-blue-50" : ""}`}
          >
            <div className="text-sm text-slate-500 mb-1 font-semibold uppercase">
              {tripType === "airport" ? "Pick up Location" : (tripType === "hourly" ? "Pickup Location" : "From")}
            </div>
            <div className="text-3xl font-black text-slate-900 mb-1 line-clamp-1">
              {tripType === "airport" && fromCity === "Mumbai" ? "Pick up Location" : fromCity}
            </div>
            {tripType === "hourly" && <div className="text-xs text-slate-500 line-clamp-1">{fromCity}</div>}

            {activePopup === "from" && (
              <div ref={popupRef} onClick={e => e.stopPropagation()} className="absolute top-[115%] left-0 w-[350px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-4 max-h-[450px] overflow-y-auto">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3 relative">
                  <FaSearch className="text-slate-400 text-sm absolute left-1" />
                  <input 
                    type="text" 
                    autoFocus
                    placeholder="Enter City" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full outline-none text-sm font-semibold text-slate-800 pl-7 pr-10"
                  />
                  <span className="text-[10px] text-slate-400 font-bold absolute right-0 cursor-pointer hover:text-slate-600">CLEAR</span>
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
          
          {tripType !== "hourly" && (
            <div 
              onClick={() => { setActivePopup("to"); setSearchQuery(""); }}
              className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors flex flex-col justify-center relative ${activePopup === "to" ? "bg-blue-50" : ""}`}
            >
              <div className="text-sm text-slate-500 mb-1 font-semibold uppercase">
                {tripType === "airport" ? "Drop Location" : "To"}
              </div>
              <div className="text-3xl font-black text-slate-900 mb-1 line-clamp-1">
                {tripType === "airport" && toCity === "Pune" ? "Drop Location" : toCity}
              </div>

              {activePopup === "to" && (
                <div ref={popupRef} onClick={e => e.stopPropagation()} className="absolute top-[115%] left-0 w-[350px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-4 max-h-[450px] overflow-y-auto">
                  <div className="flex items-center gap-2 border-b border-slate-200 pb-2 mb-3 relative">
                    <FaSearch className="text-slate-400 text-sm absolute left-1" />
                    <input 
                      type="text" 
                      autoFocus
                      placeholder="Enter City" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full outline-none text-sm font-semibold text-slate-800 pl-7 pr-10"
                    />
                    <span className="text-[10px] text-slate-400 font-bold absolute right-0 cursor-pointer hover:text-slate-600">CLEAR</span>
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
          )}
        </div>

        <div className="flex-1 flex flex-col md:flex-row relative">
          <div 
            onClick={() => setActivePopup("departure")}
            className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors border-r border-slate-200 flex flex-col justify-center relative ${activePopup === "departure" ? "bg-blue-50" : ""}`}
          >
            <div className="text-sm text-slate-500 mb-1 flex items-center gap-1 font-semibold">
              {tripType === "hourly" ? "Pickup Date" : "Departure"} <FaAngleDown className="text-[10px] text-blue-500" />
            </div>
            {depObj && (
              <>
                <div className="text-3xl font-black text-slate-900 mb-1 flex items-baseline gap-1">
                  {depObj.day} <span className="text-xl">{depObj.month}'{depObj.year}</span>
                </div>
                <div className="text-xs text-slate-500">{depObj.weekday}</div>
              </>
            )}
          </div>
          
          {(tripType === "outstation-one-way" || tripType === "outstation-round") && (
            <div 
              onClick={() => { if (tripType !== "outstation-round") setTripType("outstation-round"); setActivePopup("return"); }}
              className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors border-r border-slate-200 flex flex-col justify-center relative group ${activePopup === "return" ? "bg-blue-50" : ""}`}
            >
              <div className="text-sm text-slate-500 mb-1 flex items-center gap-1 font-semibold">
                Return 
                <FaAngleDown className="text-[10px] text-blue-500" />
                {returnDate && (
                  <span 
                    onClick={(e) => { e.stopPropagation(); setReturnDate(""); setTripType("outstation-one-way"); }}
                    className="text-[10px] text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full w-4 h-4 flex items-center justify-center shadow-sm ml-auto"
                  >
                    ×
                  </span>
                )}
              </div>
              {returnDate && retObj ? (
                <>
                  <div className="text-3xl font-black text-slate-900 mb-1 flex items-baseline gap-1">
                    {retObj.day} <span className="text-xl">{retObj.month}'{retObj.year}</span>
                  </div>
                  <div className="text-xs text-slate-500">{retObj.weekday}</div>
                </>
              ) : (
                <div className="text-[11px] text-slate-500 mt-1 leading-snug">
                  Tap to add a return date for bigger discounts
                </div>
              )}
            </div>
          )}

          {(activePopup === "departure" || activePopup === "return") && renderCalendar()}
        </div>

        <div 
          onClick={() => setActivePopup("time")}
          className={`flex-[0.6] px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors border-r border-slate-200 ${tripType !== "hourly" ? "rounded-tr-xl md:rounded-r-xl" : ""} flex flex-col justify-center relative ${activePopup === "time" ? "bg-blue-50" : ""}`}
        >
          <div className="text-sm text-slate-500 mb-1 flex items-center gap-1 font-semibold">Pickup-Time <FaAngleDown className="text-[10px] text-blue-500" /></div>
          <div className="text-3xl font-black text-slate-900 mt-1 flex items-baseline gap-1">
            {pickupTime.split(" ")[0]} <span className="text-xl">{pickupTime.split(" ")[1]}</span>
          </div>
          {tripType === "airport" && (
            <div className="text-[9px] text-slate-400 mt-0.5 leading-tight italic">
              pick up time as per journey city timezone
            </div>
          )}

          {activePopup === "time" && renderTimePicker()}
        </div>
        
        {tripType === "outstation-round" && (
          <div className="flex-[0.6] px-5 py-3 flex flex-col justify-center rounded-tr-xl md:rounded-r-xl">
            <div className="text-sm text-slate-500 mb-1 font-semibold">Drop Time</div>
            <div className="text-3xl font-black text-slate-400 mt-1 flex items-baseline gap-1">
              09:45 <span className="text-xl">PM</span>
            </div>
          </div>
        )}

        {tripType === "hourly" && (
          <div 
            onClick={() => setActivePopup("package")}
            className={`flex-1 px-5 py-3 cursor-pointer hover:bg-slate-50 transition-colors rounded-tr-xl md:rounded-r-xl flex flex-col justify-center relative ${activePopup === "package" ? "bg-blue-50" : ""}`}
          >
            <div className="text-sm text-slate-500 mb-1 font-semibold">Select Package</div>
            <div className="text-2xl font-black text-slate-900 mt-1 line-clamp-1">{packageOption}</div>

            {activePopup === "package" && (
              <div ref={popupRef} className="absolute top-[115%] right-0 w-[200px] bg-white rounded-xl shadow-2xl border border-slate-200 z-50 p-2 py-3 space-y-1 max-h-[300px] overflow-y-auto">
                {packagesList.map(pkg => (
                  <div 
                    key={pkg} 
                    onClick={(e) => { e.stopPropagation(); setPackageOption(pkg); setActivePopup(null); }}
                    className="px-4 py-2 hover:bg-slate-50 text-sm font-semibold text-slate-700 cursor-pointer rounded-lg transition-colors"
                  >
                    {pkg}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {(tripType === "outstation-round" || tripType === "outstation-one-way") && !showStops && (
        <div className="flex justify-between items-center mb-2 mt-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowStops(true)}>
            <span className="text-sm font-bold text-blue-500 hover:underline">+ Add Stops</span>
            <span className="bg-pink-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">new</span>
          </div>
        </div>
      )}

      {(tripType === "outstation-round" || tripType === "outstation-one-way") && showStops && (
        <div className="mb-8 mt-4">
          <div className="text-xs text-slate-500 font-semibold mb-2">Adding stops to your {tripType === "outstation-round" ? "multi city round-trip" : "one-way"} plan</div>
          <div className="flex items-center gap-2">
            <div className="flex-1 border border-blue-200 rounded-lg p-3 flex items-center justify-between bg-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex items-center text-blue-500">
                  <div className="w-3 h-[2px] bg-blue-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <div className="w-3 h-[2px] bg-blue-500"></div>
                </div>
                <span className="text-sm font-semibold text-blue-500">Stop 1</span>
              </div>
              <svg className="w-3 h-3 text-blue-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <div 
              onClick={() => setShowStops(false)}
              className="w-5 h-5 rounded-full bg-slate-400 flex items-center justify-center text-white cursor-pointer hover:bg-slate-500 shadow-sm flex-shrink-0"
            >
              <span className="text-xs font-bold leading-none mb-[2px]">×</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3 cursor-pointer w-max">
            <span className="text-sm font-bold text-blue-500 hover:underline">+ Add More Stops</span>
            <span className="bg-pink-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-sm">new</span>
          </div>
        </div>
      )}

      {/* Search Button */}
      <div className="flex justify-center mt-8 relative z-30">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xl font-black px-16 py-3 rounded-full shadow-xl shadow-blue-500/30 transition-all hover:scale-105 uppercase tracking-wider">
          Search
        </button>
      </div>
    </div>
  );
}
