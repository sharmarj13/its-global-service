"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  FaPlane, FaHotel, FaHome, FaTrain, FaBus, FaCar, FaCcVisa, FaMoneyBillWave, FaSuitcase,
  FaUserCircle, FaInfoCircle, FaCheckCircle, FaLeaf, FaClock, FaCheck, FaPercentage, FaRobot,
  FaTimes, FaAward, FaShieldAlt, FaAngleDown, FaSearch, FaArrowRight, FaMapMarkerAlt, FaCircle, FaCalendarAlt
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
export default function CabsSearchResults() {
  const searchParams = useSearchParams();
  const [tripType, setTripType] = useState("Outstation Round-Trip");
  const [fromCity, setFromCity] = useState("Mumbai");
  const [toCity, setToCity] = useState("Pune");
  const [pickupDate, setPickupDate] = useState("Sat, 18 Jul 26");
  const [dropDate, setDropDate] = useState("Sat, 18 Jul 26");
  const [pickupTime, setPickupTime] = useState("10:00 AM");
  const [dropTime, setDropTime] = useState("till 09:45 PM");

  const [modifyPopup, setModifyPopup] = useState<string | null>(null);
  const [addStopsModal, setAddStopsModal] = useState(false);
  const [addStopsType, setAddStopsType] = useState("Round Trip");
  const [showModal, setShowModal] = useState(false);

  // Navbar state mocks
  const [activeTab, setActiveTab] = useState("cab");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (searchParams.get("from")) setFromCity(searchParams.get("from") || "Mumbai");
    if (searchParams.get("to")) setToCity(searchParams.get("to") || "Pune");
    if (searchParams.get("pickupTime")) setPickupTime(searchParams.get("pickupTime") || "10:00 AM");

    // Convert trip type format
    const tt = searchParams.get("tripType");
    if (tt === "outstation-one-way") setTripType("Outstation One-Way");
    else if (tt === "outstation-round") setTripType("Outstation Round-Trip");
    else if (tt === "airport") setTripType("Airport Transfers");
    else if (tt === "hourly") setTripType("Hourly Rentals");

    // In a real app we'd parse dates, but for exact replica we hardcode or format
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-sans pb-10">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={isLoggedIn}
        username={null}
        onLoginClick={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
        onSupportClick={() => { }}
      />

      {/* Search Modify Bar */}
      <div className="pt-32 bg-[#0a1930] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-xl p-2 flex flex-wrap lg:flex-nowrap items-center gap-2 text-slate-800 shadow-xl relative">

            <div className="relative shrink-0">
              <div
                className={`flex flex-col px-3 py-1.5 rounded-lg cursor-pointer border transition-colors ${modifyPopup === 'tripType' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                onClick={() => setModifyPopup(modifyPopup === 'tripType' ? null : 'tripType')}
              >
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">Trip Type</div>
                <div className="font-black text-sm flex items-center gap-2">{tripType} <span className="text-[10px] text-slate-400">▼</span></div>
              </div>

              {modifyPopup === 'tripType' && (
                <div className="absolute top-[115%] left-0 bg-white text-slate-800 w-[280px] rounded-lg shadow-2xl z-50 border border-slate-100 py-2">
                  <div className="px-4 py-2 hover:bg-slate-50 cursor-pointer" onClick={() => { setTripType('Outstation One-Way'); setModifyPopup(null); }}>
                    <div className="font-bold text-sm">Outstation One-Way</div>
                    <div className="text-[11px] text-slate-500">Drop off that includes one lunch stop</div>
                  </div>
                  <div className="px-4 py-2 hover:bg-slate-50 cursor-pointer" onClick={() => { setTripType('Outstation Round-Trip'); setModifyPopup(null); }}>
                    <div className="font-bold text-sm">Outstation Round-Trip</div>
                    <div className="text-[11px] text-slate-500">Return trip that includes mutiple stops</div>
                  </div>
                  <div className="px-4 py-2 hover:bg-slate-50 cursor-pointer" onClick={() => { setTripType('Airport Cabs'); setModifyPopup(null); }}>
                    <div className="font-bold text-sm">Airport Cabs</div>
                    <div className="text-[11px] text-slate-500">Pre-book airport pickup & drop</div>
                  </div>
                  <div className="px-4 py-2 hover:bg-slate-50 cursor-pointer" onClick={() => { setTripType('Rentals'); setModifyPopup(null); }}>
                    <div className="font-bold text-sm">Rentals</div>
                    <div className="text-[11px] text-slate-500">Car rental within the city</div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-[1px] h-10 bg-slate-200 mx-1 hidden lg:block"></div>

            <div className="relative flex-1">
              <div
                className={`flex flex-col px-4 py-1.5 rounded-lg cursor-pointer border transition-colors ${modifyPopup === 'from' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                onClick={() => setModifyPopup(modifyPopup === 'from' ? null : 'from')}
              >
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">From</div>
                <div className="font-black text-sm truncate">{fromCity}</div>
              </div>

              {modifyPopup === 'from' && (
                <div className="absolute top-[115%] left-0 w-[340px] bg-white text-slate-800 shadow-2xl z-50 border border-slate-100">
                  <div className="p-3 border-b border-slate-100 flex items-center gap-2">
                    <FaSearch className="text-slate-400 text-sm" />
                    <input type="text" placeholder="from" className="w-full outline-none font-semibold placeholder-slate-400" autoFocus />
                  </div>
                  <div className="max-h-[350px] overflow-y-auto">
                    <div className="text-[10px] font-bold text-slate-500 bg-slate-50 px-4 py-2">SEARCH RESULTS</div>
                    <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50" onClick={() => { setFromCity('Mumbai'); setModifyPopup(null); }}>
                      <div className="font-bold text-sm">Mumbai</div>
                      <div className="text-xs text-slate-500">Mumbai, Maharashtra, India</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-[1px] h-10 bg-slate-200 mx-1 hidden lg:block"></div>

            <div className="relative flex-1">
              <div
                className={`flex flex-col px-4 py-1.5 rounded-lg cursor-pointer border transition-colors ${modifyPopup === 'to' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                onClick={() => setModifyPopup(modifyPopup === 'to' ? null : 'to')}
              >
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">To</div>
                <div className="font-black text-sm truncate">{toCity}</div>
              </div>

              {modifyPopup === 'to' && (
                <div className="absolute top-[115%] left-0 w-[340px] bg-white text-slate-800 shadow-2xl z-50 border border-slate-100">
                  <div className="p-3 border-b border-slate-100 flex items-center gap-2">
                    <FaSearch className="text-slate-400 text-sm" />
                    <input type="text" defaultValue="pune" className="w-full outline-none font-semibold placeholder-slate-400" autoFocus />
                  </div>
                  <div className="max-h-[350px] overflow-y-auto">
                    <div className="text-[10px] font-bold text-slate-500 bg-slate-50 px-4 py-2 uppercase">Search Results</div>
                    <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50" onClick={() => { setToCity('Pune'); setModifyPopup(null); }}>
                      <div className="font-bold text-sm">Pune</div>
                      <div className="text-xs text-slate-500">Pune, Maharashtra, India</div>
                    </div>
                    <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50" onClick={() => { setToCity('Pune Railway Station'); setModifyPopup(null); }}>
                      <div className="font-bold text-sm">Pune Railway Station (Platform 6 side)</div>
                      <div className="text-xs text-slate-500">Pune Railway Station (Platform 6 side), Sangamvadi, Pune, Maharashtra, India</div>
                    </div>
                    <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-50" onClick={() => { setToCity('PUNE RAILWAY STATION'); setModifyPopup(null); }}>
                      <div className="font-bold text-sm uppercase">PUNE RAILWAY STATION</div>
                      <div className="text-xs text-slate-500">PUNE RAILWAY STATION, Pune Railway Station Road, Agarkar Nagar, Pune, Maharashtra, India</div>
                    </div>
                    <div className="px-4 py-3 hover:bg-slate-50 cursor-pointer" onClick={() => { setToCity('PUNE JUNCTION'); setModifyPopup(null); }}>
                      <div className="font-bold text-sm uppercase">PUNE JUNCTION</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 mx-2">
              <div
                onClick={() => setAddStopsModal(true)}
                className="bg-[#008cff] hover:bg-[#007add] transition-colors text-[10px] font-bold px-3 py-1 rounded text-white flex items-center cursor-pointer whitespace-nowrap relative"
              >
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#eb2026] text-white text-[8px] px-1 rounded-sm shadow-sm z-10">new</span>
                + ADD STOPS
              </div>
            </div>

            <div className="w-[1px] h-10 bg-slate-200 mx-1 hidden lg:block"></div>

            <div className="relative flex-1">
              <div
                className={`flex flex-col px-4 py-1.5 rounded-lg cursor-pointer border transition-colors ${modifyPopup === 'pickupDate' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                onClick={() => setModifyPopup(modifyPopup === 'pickupDate' ? null : 'pickupDate')}
              >
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">Pick-Up Date</div>
                <div className="font-black text-sm truncate">Sat, 18 Jul</div>
              </div>

              {modifyPopup === 'pickupDate' && (
                <div className="absolute top-[115%] left-1/2 -translate-x-1/2 w-[550px] bg-white text-slate-800 shadow-2xl z-50 border border-slate-100 rounded-lg p-4">
                  <div className="flex border-b border-slate-100 mb-4 pb-2">
                    <div className="font-bold text-sm border-b-2 border-[#008cff] pb-2 px-2 text-[#008cff]">18 Jul 2026</div>
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <div className="font-bold text-center mb-4">July 2026</div>
                      <div className="grid grid-cols-7 text-center text-xs text-slate-400 mb-2">
                        <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                      </div>
                      <div className="grid grid-cols-7 text-center text-sm font-semibold gap-y-4">
                        <div className="text-slate-300"></div><div className="text-slate-300"></div><div className="text-slate-300">1</div><div className="text-slate-300">2</div><div className="text-slate-300">3</div><div className="text-slate-300">4</div><div className="text-slate-300">5</div>
                        <div className="text-slate-300">6</div><div className="text-slate-300">7</div><div className="text-slate-300">8</div><div className="text-slate-300">9</div><div className="text-slate-300">10</div><div className="text-slate-300">11</div><div className="text-slate-300">12</div>
                        <div className="text-slate-300">13</div><div className="text-slate-300">14</div><div className="text-slate-300">15</div><div className="text-slate-300">16</div><div className="cursor-pointer">17</div>
                        <div className="cursor-pointer bg-[#008cff] text-white rounded" onClick={() => setModifyPopup(null)}>18</div>
                        <div className="cursor-pointer">19</div><div className="cursor-pointer">20</div><div className="cursor-pointer">21</div><div className="cursor-pointer">22</div><div className="cursor-pointer">23</div><div className="cursor-pointer">24</div>
                        <div className="cursor-pointer">25</div><div className="cursor-pointer">26</div><div className="cursor-pointer">27</div><div className="cursor-pointer">28</div><div className="cursor-pointer">29</div><div className="cursor-pointer">30</div>
                        <div className="cursor-pointer">31</div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-center mb-4 flex items-center justify-between">
                        <span>August 2026</span>
                        <FaArrowRight className="text-[#008cff] text-sm cursor-pointer" />
                      </div>
                      <div className="grid grid-cols-7 text-center text-xs text-slate-400 mb-2">
                        <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                      </div>
                      <div className="grid grid-cols-7 text-center text-sm font-semibold gap-y-4">
                        <div></div><div></div><div></div><div></div><div></div><div></div><div className="cursor-pointer">1</div>
                        <div className="cursor-pointer">2</div><div className="cursor-pointer">3</div><div className="cursor-pointer">4</div><div className="cursor-pointer">5</div><div className="cursor-pointer">6</div><div className="cursor-pointer">7</div><div className="cursor-pointer">8</div>
                        <div className="cursor-pointer">9</div><div className="cursor-pointer">10</div><div className="cursor-pointer">11</div><div className="cursor-pointer">12</div><div className="cursor-pointer">13</div><div className="cursor-pointer">14</div><div className="cursor-pointer">15</div>
                        <div className="cursor-pointer">16</div><div className="cursor-pointer">17</div><div className="cursor-pointer">18</div><div className="cursor-pointer">19</div><div className="cursor-pointer">20</div><div className="cursor-pointer">21</div><div className="cursor-pointer">22</div>
                        <div className="cursor-pointer">23</div><div className="cursor-pointer">24</div><div className="cursor-pointer">25</div><div className="cursor-pointer">26</div><div className="cursor-pointer">27</div><div className="cursor-pointer">28</div><div className="cursor-pointer">29</div>
                        <div className="cursor-pointer">30</div><div className="cursor-pointer">31</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-[1px] h-10 bg-slate-200 mx-1 hidden lg:block"></div>

            <div className="relative flex-1">
              <div
                className={`flex flex-col px-4 py-1.5 rounded-lg cursor-pointer border transition-colors ${modifyPopup === 'dropDate' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                onClick={() => setModifyPopup(modifyPopup === 'dropDate' ? null : 'dropDate')}
              >
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">Drop Date</div>
                <div className="font-black text-sm truncate">Sat, 18 Jul</div>
              </div>
            </div>

            <div className="w-[1px] h-10 bg-slate-200 mx-1 hidden lg:block"></div>

            <div className="relative flex-1">
              <div
                className={`flex flex-col px-4 py-1.5 rounded-lg cursor-pointer border transition-colors ${modifyPopup === 'pickupTime' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                onClick={() => setModifyPopup(modifyPopup === 'pickupTime' ? null : 'pickupTime')}
              >
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">Pick-Up Time</div>
                <div className="font-black text-sm truncate">{pickupTime}</div>
              </div>

              {modifyPopup === 'pickupTime' && (
                <div className="absolute top-[115%] left-1/2 -translate-x-1/2 w-[280px] bg-white text-slate-800 shadow-2xl z-50 border border-slate-100 rounded-lg overflow-hidden flex flex-col">
                  <div className="p-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="font-semibold text-sm tracking-wide">10: 00 AM</span>
                    <button className="bg-[#008cff] text-white text-[10px] font-bold px-4 py-1.5 rounded-full" onClick={() => setModifyPopup(null)}>APPLY</button>
                  </div>
                  <div className="flex h-[220px]">
                    <div className="flex-1 overflow-y-auto border-r border-slate-100 scrollbar-hide py-2">
                      {['06 Hr', '07 Hr', '08 Hr', '09 Hr', '10 Hr', '11 Hr'].map(h => (
                        <div key={h} className={`p-2.5 text-center text-sm cursor-pointer ${h === '10 Hr' ? 'bg-[#008cff] text-white font-bold' : 'hover:bg-slate-50'}`}>{h}</div>
                      ))}
                    </div>
                    <div className="flex-1 overflow-y-auto border-r border-slate-100 scrollbar-hide py-2">
                      {['00 Min', '05 Min', '10 Min', '15 Min', '20 Min', '25 Min'].map(m => (
                        <div key={m} className={`p-2.5 text-center text-sm cursor-pointer ${m === '00 Min' ? 'bg-[#008cff] text-white font-bold' : 'hover:bg-slate-50'}`}>{m}</div>
                      ))}
                    </div>
                    <div className="flex-1 overflow-y-auto scrollbar-hide py-2">
                      {['AM', 'PM'].map(a => (
                        <div key={a} className={`p-2.5 text-center text-sm cursor-pointer ${a === 'AM' ? 'bg-[#008cff] text-white font-bold' : 'hover:bg-slate-50'}`}>{a}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="w-[1px] h-10 bg-slate-200 mx-1 hidden lg:block"></div>

            <div className="relative flex-1">
              <div className="flex flex-col px-4 py-1.5 rounded-lg border border-transparent">
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">Drop Time</div>
                <div className="font-black text-sm truncate text-slate-400">{dropTime}</div>
              </div>
            </div>

            <button className="bg-[#008cff] hover:bg-blue-600 text-white font-bold text-sm px-8 py-3.5 rounded-lg uppercase shadow-sm transition-colors shrink-0 ml-2">
              Search
            </button>
          </div>
        </div>
      </div>

      {addStopsModal && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl w-[500px] overflow-hidden">
            <div className="flex justify-end p-2 bg-slate-800 border-b">
              <FaTimes className="text-white cursor-pointer" onClick={() => setAddStopsModal(false)} />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Outstation Trip Plan</h2>
                <div className="flex bg-slate-50 rounded-lg p-1 border border-slate-200">
                  <div className="px-4 py-2 text-sm text-slate-600 font-semibold cursor-pointer" onClick={() => setAddStopsType('One-way')}>
                    <div className={`font-bold ${addStopsType === 'One-way' ? 'text-slate-900' : 'text-slate-500'}`}>One-way</div>
                    <div className="text-[10px]">Get dropped off</div>
                  </div>
                  <div className={`px-4 py-2 text-sm rounded-md font-semibold cursor-pointer ${addStopsType === 'Round Trip' ? 'bg-blue-50 text-[#008cff]' : 'text-slate-500'}`} onClick={() => setAddStopsType('Round Trip')}>
                    <div className="font-bold">Round Trip</div>
                    <div className="text-[10px]">Keep cab till return</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 relative before:absolute before:left-4 before:top-4 before:bottom-12 before:w-[1px] before:bg-slate-200">
                <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-3 relative z-10">
                  <FaCircle className="text-slate-400 text-[10px] bg-white z-10 outline outline-4 outline-white" />
                  <div className="flex-1">
                    <div className="text-[10px] text-slate-500 font-bold uppercase">From</div>
                    <div className="font-bold text-sm">Mumbai</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-3 shadow-sm relative z-10">
                  <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center text-[8px] bg-white z-10 text-slate-500 outline outline-4 outline-white">1</div>
                  <div className="flex-1">
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Stop 1</div>
                    <div className="font-bold text-sm">Pune</div>
                  </div>
                  <div className="text-slate-300 grid grid-cols-2 gap-0.5 opacity-50"><div className="w-1 h-1 bg-current rounded-full"></div><div className="w-1 h-1 bg-current rounded-full"></div><div className="w-1 h-1 bg-current rounded-full"></div><div className="w-1 h-1 bg-current rounded-full"></div><div className="w-1 h-1 bg-current rounded-full"></div><div className="w-1 h-1 bg-current rounded-full"></div></div>
                  <FaTimes className="text-slate-400 cursor-pointer hover:text-slate-700 ml-2" />
                </div>

                <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg p-3 shadow-sm relative z-10">
                  <div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center bg-white z-10 outline outline-4 outline-white"><div className="w-1.5 h-1.5 bg-slate-400"></div></div>
                  <div className="flex-1">
                    <div className="font-bold text-sm text-slate-400 uppercase">Enter Location Here</div>
                  </div>
                  <div className="text-slate-300 grid grid-cols-2 gap-0.5 opacity-50"><div className="w-1 h-1 bg-current rounded-full"></div><div className="w-1 h-1 bg-current rounded-full"></div><div className="w-1 h-1 bg-current rounded-full"></div><div className="w-1 h-1 bg-current rounded-full"></div><div className="w-1 h-1 bg-current rounded-full"></div><div className="w-1 h-1 bg-current rounded-full"></div></div>
                  <FaTimes className="text-slate-400 cursor-pointer hover:text-slate-700 ml-2" />
                </div>

                <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-lg p-3 relative z-10">
                  <FaCircle className="text-slate-400 text-[10px] bg-slate-50 z-10 outline outline-4 outline-slate-50" />
                  <div className="flex-1">
                    <div className="text-[10px] text-slate-500 font-bold uppercase flex gap-2 items-center">Return to Pickup Location <span className="bg-blue-100 text-[#008cff] px-1.5 rounded-sm capitalize">Round trip</span></div>
                    <div className="font-bold text-sm">Mumbai</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <button className="text-[#008cff] border border-[#008cff] font-bold text-sm px-6 py-2 rounded-lg hover:bg-blue-50">+ Add a stop</button>
              </div>

              <button className="w-full mt-6 bg-[#d4d4d4] text-white font-bold py-3.5 rounded-lg text-sm" onClick={() => setAddStopsModal(false)}>DONE</button>
            </div>
          </div>
        </div>
      )}


      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-4 flex gap-5 px-4">

        {/* Sidebar Filters */}
        <div className="w-[260px] flex-shrink-0">
          <div className="bg-white rounded shadow-sm overflow-hidden border border-slate-200">
            <div className="px-4 py-3 flex justify-between items-center border-b border-slate-100">
              <span className="font-bold text-sm text-slate-800">Filters</span>
              <span className="text-[11px] text-[#008cff] font-bold cursor-pointer uppercase">Clear All</span>
            </div>

            {/* Cab Type Filter */}
            <div className="px-4 py-4 border-b border-slate-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-[13px] text-slate-800">Cab Type</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#9b9b9b] font-bold cursor-pointer uppercase">Clear</span>
                  <span className="text-[10px] text-slate-400">▲</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">Sedan</span>
                  </div>
                  <span className="text-[11px] text-slate-400">(1)</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">SUV</span>
                  </div>
                  <span className="text-[11px] text-slate-400">(5)</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">Minibus</span>
                  </div>
                  <span className="text-[11px] text-slate-400">(1)</span>
                </label>
              </div>
            </div>

            {/* Cab Model Filter */}
            <div className="px-4 py-4 border-b border-slate-100">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-[13px] text-slate-800">Cab Model</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#9b9b9b] font-bold cursor-pointer uppercase">Clear</span>
                  <span className="text-[10px] text-slate-400">▲</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">Tata Tigor</span>
                  </div>
                  <span className="text-[11px] text-slate-400">(1)</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">Toyota Innova</span>
                  </div>
                  <span className="text-[11px] text-slate-400">(1)</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">Innova Crysta</span>
                  </div>
                  <span className="text-[11px] text-slate-400">(1)</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">Toyota Innova Hycross</span>
                  </div>
                  <span className="text-[11px] text-slate-400">(1)</span>
                </label>
              </div>
            </div>

            {/* Fuel Type Filter */}
            <div className="px-4 py-4">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-[13px] text-slate-800">Fuel Type</span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-[#9b9b9b] font-bold cursor-pointer uppercase">Clear</span>
                  <span className="text-[10px] text-slate-400">▲</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">Electric</span>
                  </div>
                  <span className="text-[11px] text-slate-400">(1)</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">Diesel</span>
                  </div>
                  <span className="text-[11px] text-slate-400">(5)</span>
                </label>
                <label className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                    <span className="text-sm text-slate-600 group-hover:text-slate-900">Petrol</span>
                  </div>
                  <span className="text-[11px] text-slate-400">(1)</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="flex-1 pb-16">

          {/* Top Tabs */}
          <div className="bg-[#0f294d] text-white rounded-t-lg flex relative h-16">
            <div className="flex-1 flex flex-col items-center justify-center cursor-pointer border-b-4 border-[#008cff] bg-[#1c3a63]">
              <div className="bg-white text-[#008cff] rounded-full p-1 mb-1 shadow">
                <FaCheckCircle className="text-xs" />
              </div>
              <span className="text-sm font-bold">Trusted Drivers</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center cursor-pointer hover:bg-[#1c3a63]/50 transition-colors" onClick={() => setShowModal(true)}>
              <div className="bg-white text-[#008cff] rounded-full p-1 mb-1 shadow">
                <FaCheckCircle className="text-xs" />
              </div>
              <span className="text-sm font-bold">Clean Cabs</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center cursor-pointer hover:bg-[#1c3a63]/50 transition-colors" onClick={() => setShowModal(true)}>
              <div className="bg-white text-[#008cff] rounded-full p-1 mb-1 shadow">
                <FaClock className="text-xs" />
              </div>
              <span className="text-sm font-bold">On-Time Pickup</span>
            </div>
            <div className="absolute right-3 top-3 cursor-pointer" onClick={() => setShowModal(true)}>
              <FaInfoCircle className="text-white/60 hover:text-white" />
            </div>
          </div>

          <div className="text-xs text-slate-500 py-3 font-semibold">
            Rates as per included kilometers | 12 hr(s) approx time
          </div>

          <div className="space-y-4">

            {/* Cab 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e5e5] overflow-hidden">
              <div className="p-4 flex gap-6 relative">
                <div className="w-32 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=300&q=80" alt="car" className="w-24 h-16 object-cover rounded-md shadow-sm" />
                  <span className="bg-[#008cff] text-white text-[10px] font-bold px-4 py-0.5 rounded-full mt-2 inline-block">Electric</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[18px] font-black text-slate-800">Tata Tigor</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="text-slate-500">exact model</span>
                    <span className="bg-[#008cff] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">4.3/5</span>
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium">
                    AC • 4 Seats
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium mt-0.5">
                    284 kms included
                  </div>
                </div>

                <div className="text-right flex flex-col items-end w-48">
                  <div className="text-[22px] font-black text-slate-900 mt-1">₹ 2,863</div>
                  <div className="text-[11px] text-slate-500 mb-2">+ ₹591 (Taxes & Charges)</div>
                  <Link href="/cabs/review">
                    <button className="bg-gradient-to-r from-[#008cff] to-[#007add] hover:from-[#007add] hover:to-[#0052cc] text-white font-bold text-sm px-6 py-2.5 rounded-full uppercase shadow-md transition-all">
                      Select Cab
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cab 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e5e5] overflow-hidden">
              <div className="p-4 flex gap-6 relative">
                <div className="w-32 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=300&q=80" alt="car" className="w-24 h-16 object-cover rounded-md shadow-sm" />
                  <span className="bg-[#24963f] text-white text-[10px] font-bold px-2 py-0.5 rounded-full mt-2 inline-block">CNG/Diesel</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[18px] font-black text-slate-800">Xylo, Ertiga</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="text-slate-500">or similar</span>
                    <span className="bg-[#008cff] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">4.4/5</span>
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium">
                    AC • 6 Seats
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium mt-0.5">
                    300 kms included
                  </div>
                </div>

                <div className="text-right flex flex-col items-end w-48">
                  <div className="flex items-center justify-end gap-1 mb-0.5">
                    <span className="text-[#24963f] text-xs font-bold italic">14% off</span>
                    <span className="text-slate-400 text-xs line-through relative">
                      ₹ 4,865
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500 transform rotate-[-15deg]"></div>
                    </span>
                  </div>
                  <div className="text-[22px] font-black text-slate-900 leading-none">₹ 4,165</div>
                  <div className="text-[11px] text-slate-500 mb-2 mt-1">+ ₹600 (Taxes & Charges)</div>
                  <Link href="/cabs/review">
                    <button className="bg-gradient-to-r from-[#008cff] to-[#007add] hover:from-[#007add] hover:to-[#0052cc] text-white font-bold text-sm px-6 py-2.5 rounded-full uppercase shadow-md transition-all">
                      Select Cab
                    </button>
                  </Link>
                </div>
              </div>
              <div className="bg-[#f9f9f9] border-t border-[#e5e5e5] px-4 py-2 flex items-center gap-2">
                <span className="text-[#d19a30] text-xs">✨</span>
                <span className="text-xs font-semibold text-slate-700">Add <span className="font-bold">Roof Carrier</span> to fit 6 more bags @ ₹209</span>
              </div>
            </div>

            {/* Offer Banner */}
            <div className="bg-gradient-to-r from-[#e3f7ff] to-[#d4f2ff] rounded-xl shadow-sm border border-[#b8e8ff] p-4 flex justify-between items-center relative overflow-hidden">
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-1">Get Up to Rs. 1000 Off</h4>
                <p className="text-xs text-[#008cff] font-semibold mb-1">Use coupon code: MMTDELIGHT</p>
                <p className="text-[10px] text-slate-500">Limited Time Offer!</p>
              </div>
              <div className="bg-[#008cff] rounded-full p-2.5 relative z-10">
                <FaPercentage className="text-white text-lg" />
              </div>
              {/* decorative circles */}
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-[#b8e8ff]/50 rounded-full"></div>
              <div className="absolute right-10 -bottom-4 w-12 h-12 bg-[#b8e8ff]/50 rounded-full"></div>
            </div>

            {/* Cab 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e5e5] overflow-hidden">
              <div className="p-4 flex gap-6 relative">
                <div className="w-32 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=300&q=80" alt="car" className="w-24 h-16 object-cover rounded-md shadow-sm" />
                  <span className="bg-[#d17f28] text-white text-[10px] font-bold px-4 py-0.5 rounded-full mt-2 inline-block">Diesel</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[18px] font-black text-slate-800">Xylo, Ertiga</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="text-slate-500">or similar</span>
                    <span className="bg-[#008cff] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">4.2/5</span>
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium">
                    AC • 6 Seats
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium mt-0.5">
                    299 kms included
                  </div>
                </div>

                <div className="text-right flex flex-col items-end w-48">
                  <div className="flex items-center justify-end gap-1 mb-0.5">
                    <span className="text-[#24963f] text-xs font-bold italic">14% off</span>
                    <span className="text-slate-400 text-xs line-through relative">
                      ₹ 6,592
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500 transform rotate-[-15deg]"></div>
                    </span>
                  </div>
                  <div className="text-[22px] font-black text-slate-900 leading-none">₹ 5,661</div>
                  <div className="text-[11px] text-slate-500 mb-2 mt-1">+ ₹641 (Taxes & Charges)</div>
                  <Link href="/cabs/review">
                    <button className="bg-gradient-to-r from-[#008cff] to-[#007add] hover:from-[#007add] hover:to-[#0052cc] text-white font-bold text-sm px-6 py-2.5 rounded-full uppercase shadow-md transition-all">
                      Select Cab
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cab 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e5e5] overflow-hidden">
              <div className="p-4 flex gap-6 relative">
                <div className="w-32 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=300&q=80" alt="car" className="w-24 h-16 object-cover rounded-md shadow-sm" />
                  <span className="bg-[#d17f28] text-white text-[10px] font-bold px-4 py-0.5 rounded-full mt-2 inline-block">Diesel</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[18px] font-black text-slate-800">Toyota Innova</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="text-slate-500">exact model</span>
                    <span className="bg-[#008cff] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">4.4/5</span>
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium">
                    AC • 6 Seats
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium mt-0.5">
                    300 kms included
                  </div>
                </div>

                <div className="text-right flex flex-col items-end w-48">
                  <div className="flex items-center justify-end gap-1 mb-0.5">
                    <span className="text-[#24963f] text-xs font-bold italic">14% off</span>
                    <span className="text-slate-400 text-xs line-through relative">
                      ₹ 7,000
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500 transform rotate-[-15deg]"></div>
                    </span>
                  </div>
                  <div className="text-[22px] font-black text-slate-900 leading-none">₹ 6,000</div>
                  <div className="text-[11px] text-slate-500 mb-2 mt-1">+ ₹763 (Taxes & Charges)</div>
                  <button className="bg-gradient-to-r from-[#008cff] to-[#007add] hover:from-[#007add] hover:to-[#0052cc] text-white font-bold text-sm px-6 py-2.5 rounded-full uppercase shadow-md transition-all">
                    Select Cab
                  </button>
                </div>
              </div>
              <div className="bg-[#f9f9f9] border-t border-[#e5e5e5] px-4 py-2 flex items-center gap-2">
                <span className="text-[#d19a30] text-xs">✨</span>
                <span className="text-xs font-semibold text-slate-700">Add <span className="font-bold">Roof Carrier</span> to fit 6 more bags @ ₹262</span>
              </div>
            </div>

            {/* Cab 5 */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e5e5] overflow-hidden">
              <div className="p-4 flex gap-6 relative">
                <div className="w-32 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=300&q=80" alt="car" className="w-24 h-16 object-cover rounded-md shadow-sm" />
                  <span className="bg-[#d17f28] text-white text-[10px] font-bold px-4 py-0.5 rounded-full mt-2 inline-block">Diesel</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[18px] font-black text-slate-800">Innova Crysta</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="text-slate-500">exact model</span>
                    <span className="bg-[#008cff] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">4.4/5</span>
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium">
                    AC • 6 Seats
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium mt-0.5">
                    300 kms included
                  </div>
                </div>

                <div className="text-right flex flex-col items-end w-48">
                  <div className="flex items-center justify-end gap-1 mb-0.5">
                    <span className="text-[#24963f] text-xs font-bold italic">14% off</span>
                    <span className="text-slate-400 text-xs line-through relative">
                      ₹ 7,260
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-red-500 transform rotate-[-15deg]"></div>
                    </span>
                  </div>
                  <div className="text-[22px] font-black text-slate-900 leading-none">₹ 6,225</div>
                  <div className="text-[11px] text-slate-500 mb-2 mt-1">+ ₹774 (Taxes & Charges)</div>
                  <button className="bg-gradient-to-r from-[#008cff] to-[#007add] hover:from-[#007add] hover:to-[#0052cc] text-white font-bold text-sm px-6 py-2.5 rounded-full uppercase shadow-md transition-all">
                    Select Cab
                  </button>
                </div>
              </div>
              <div className="bg-[#f9f9f9] border-t border-[#e5e5e5] px-4 py-2 flex items-center gap-2">
                <span className="text-[#d19a30] text-xs">✨</span>
                <span className="text-xs font-semibold text-slate-700">Add <span className="font-bold">Roof Carrier</span> to fit 6 more bags @ ₹262</span>
              </div>
            </div>

            {/* Cab 6 */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e5e5] overflow-hidden">
              <div className="p-4 flex gap-6 relative">
                <div className="w-32 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1558227976-13a69dc97607?auto=format&fit=crop&w=300&q=80" alt="car" className="w-24 h-16 object-cover rounded-md shadow-sm" />
                  <span className="bg-[#d17f28] text-white text-[10px] font-bold px-4 py-0.5 rounded-full mt-2 inline-block">Diesel</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[18px] font-black text-slate-800">Minibus or Similar</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="text-slate-500">exact model</span>
                    <span className="bg-[#008cff] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">New</span>
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium">
                    AC • 20 Seats
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium mt-0.5">
                    300 kms included
                  </div>
                </div>

                <div className="text-right flex flex-col items-end w-48">
                  <div className="text-[22px] font-black text-slate-900 mt-1">₹ 10,425</div>
                  <div className="text-[11px] text-slate-500 mb-2">+ ₹1373 (Taxes & Charges)</div>
                  <button className="bg-gradient-to-r from-[#008cff] to-[#007add] hover:from-[#007add] hover:to-[#0052cc] text-white font-bold text-sm px-6 py-2.5 rounded-full uppercase shadow-md transition-all">
                    Select Cab
                  </button>
                </div>
              </div>
            </div>

            {/* Cab 7 */}
            <div className="bg-white rounded-xl shadow-sm border border-[#e5e5e5] overflow-hidden">
              <div className="p-4 flex gap-6 relative">
                <div className="w-32 flex flex-col items-center">
                  <img src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=300&q=80" alt="car" className="w-24 h-16 object-cover rounded-md shadow-sm" />
                  <span className="bg-[#d17f28] text-white text-[10px] font-bold px-4 py-0.5 rounded-full mt-2 inline-block">Petrol</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[18px] font-black text-slate-800">Toyota Innova Hycross</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="text-slate-500">exact model</span>
                    <span className="bg-[#008cff] text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">New</span>
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium">
                    AC • 6 Seats
                  </div>
                  <div className="text-[13px] text-slate-600 font-medium mt-0.5">
                    284 kms included
                  </div>
                </div>

                <div className="text-right flex flex-col items-end w-48">
                  <div className="text-[22px] font-black text-slate-900 mt-1">₹ 20,258</div>
                  <div className="text-[11px] text-slate-500 mb-2">+ ₹1408 (Taxes & Charges)</div>
                  <button className="bg-gradient-to-r from-[#008cff] to-[#007add] hover:from-[#007add] hover:to-[#0052cc] text-white font-bold text-sm px-6 py-2.5 rounded-full uppercase shadow-md transition-all">
                    Select Cab
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-full shadow-2xl p-2 flex items-center gap-3 pr-4 cursor-pointer border border-slate-200 hover:shadow-xl transition-shadow">
          <div className="w-10 h-10 bg-[#eef6ff] rounded-full flex items-center justify-center">
            <FaRobot className="text-[#008cff] text-xl" />
          </div>
          <span className="text-[#008cff] font-bold text-sm">Trip assistant</span>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl relative animate-scale-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-7 h-7 bg-slate-500 hover:bg-slate-600 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <FaTimes className="text-xs" />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-black text-slate-900 mb-1">Guaranteed on-time cabs!</h2>
              <p className="text-slate-600 text-[13px] mb-6 font-medium">Travel with our handpicked suppliers, carefully selected for your comfort</p>

              <h3 className="font-bold text-[15px] text-slate-800 mb-4">How Do We Ensure This?</h3>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <div className="w-6 h-6 rounded-full border-2 border-[#008cff] flex items-center justify-center">
                      <FaAward className="text-[#008cff] text-[10px]" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-[14px] text-slate-900 leading-tight">Trusted Drivers</div>
                    <div className="text-[12px] text-slate-500 mt-0.5">Verified and experienced drivers with local know how</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <div className="w-6 h-6 rounded-full border-2 border-[#008cff] flex items-center justify-center">
                      <FaCheckCircle className="text-[#008cff] text-[10px]" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-[14px] text-slate-900 leading-tight">Clean and Quality cabs</div>
                    <div className="text-[12px] text-slate-500 mt-0.5">Hygienic & sanitized rides from our trusted operators</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-0.5">
                    <div className="w-6 h-6 rounded-full border-2 border-[#008cff] flex items-center justify-center">
                      <FaShieldAlt className="text-[#008cff] text-[10px]" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-[14px] text-slate-900 leading-tight">On-Time Pickup</div>
                    <div className="text-[12px] text-slate-500 mt-0.5">Real time monitoring of cab allocated through command centre</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowModal(false)}
                className="w-full border-2 border-[#008cff] text-[#008cff] font-bold text-sm py-3 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Ok, Got it!
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
