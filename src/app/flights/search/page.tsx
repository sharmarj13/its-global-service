"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { FaPlane, FaSearch, FaChevronRight, FaChevronLeft, FaArrowRight, FaShieldAlt, FaInfoCircle, FaCheckSquare, FaRegSquare, FaTimes, FaCheckCircle, FaMinusCircle, FaAngleRight, FaCheck, FaAngleDown } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function FlightSearch() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("flight");
  const [selectedFlight, setSelectedFlight] = useState<any>(null);
  const [activeFareTab, setActiveFareTab] = useState<"economy" | "premium" | "business">("economy");
  
  // Modify Bar States
  const [modifyPopup, setModifyPopup] = useState<string | null>(null);
  const [tripType, setTripType] = useState("One Way");
  const [fromCity, setFromCity] = useState("New Delhi, India");
  const [toCity, setToCity] = useState("Bengaluru, India");
  const [departDate, setDepartDate] = useState("Fri, 17 Jul 26");
  const [adults, setAdults] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabinClass, setCabinClass] = useState("Economy/ Premium Economy");
  const [carouselStart, setCarouselStart] = useState(23);
  const [selectedDate, setSelectedDate] = useState(25);
  const [activeSort, setActiveSort] = useState("Cheapest");

  // Mock data for flights
  const mockFlights = [
    {
      id: 1,
      airline: "IndiGo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/IndiGo_Airlines_logo.svg",
      departTime: "06:00",
      departCity: "New Delhi",
      arrivalTime: "08:15",
      arrivalCity: "Mumbai",
      duration: "02 h 15 m",
      stops: "Non stop",
      price: 5432,
    },
    {
      id: 2,
      airline: "Air India",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Air_India_Logo.svg/1200px-Air_India_Logo.svg.png",
      departTime: "07:00",
      departCity: "New Delhi",
      arrivalTime: "09:10",
      arrivalCity: "Mumbai",
      duration: "02 h 10 m",
      stops: "Non stop",
      price: 5432,
    },
    {
      id: 3,
      airline: "Vistara",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Vistara_logo.svg",
      departTime: "08:30",
      departCity: "New Delhi",
      arrivalTime: "10:45",
      arrivalCity: "Mumbai",
      duration: "02 h 15 m",
      stops: "Non stop",
      price: 6112,
    },
    {
      id: 4,
      airline: "Akasa Air",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Akasa_Air_logo.svg",
      departTime: "09:15",
      departCity: "New Delhi",
      arrivalTime: "11:25",
      arrivalCity: "Mumbai",
      duration: "02 h 10 m",
      stops: "Non stop",
      price: 5432,
    },
    {
      id: 5,
      airline: "IndiGo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/IndiGo_Airlines_logo.svg",
      departTime: "10:30",
      departCity: "New Delhi",
      arrivalTime: "12:50",
      arrivalCity: "Mumbai",
      duration: "02 h 20 m",
      stops: "Non stop",
      price: 6332,
    }
  ];

  const renderFareModal = () => {
    if (!selectedFlight) return null;

    return (
      <div className="fixed inset-0 bg-black/60 z-[100] flex justify-center items-center p-4 backdrop-blur-sm">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-hidden flex flex-col animate-scale-in">

          {/* Modal Header */}
          <div className="bg-white px-6 py-4 border-b border-slate-200 flex justify-between items-center shrink-0 sticky top-0 z-20">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">Flight Details and Fare Options available for you!</h2>
            <button onClick={() => setSelectedFlight(null)} className="text-slate-400 hover:text-slate-600 transition-colors p-1">
              <FaTimes className="text-2xl font-light" />
            </button>
          </div>

          <div className="overflow-y-auto flex-1 flex flex-col">
            <div className="px-6 pt-6 bg-white shrink-0">
              {/* Flight Info Header */}
              <div className="flex items-center gap-2 mb-6">
                <span className="font-semibold text-sm text-slate-700">{selectedFlight.departCity.substring(0, 3).toUpperCase()}-{selectedFlight.arrivalCity.substring(0, 3).toUpperCase()}</span>
                <img src={selectedFlight.logo} alt="airline" className="w-5 h-5 object-contain ml-2" />
                <span className="text-sm text-slate-600">{selectedFlight.airline} • Sat, 18 Jul 26 • Departure at {selectedFlight.departTime} - Arrival at {selectedFlight.arrivalTime}</span>
              </div>

              {/* Cabin Class Tabs */}
              <div className="flex gap-4 relative">
                {/* Continuous bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#008cff]"></div>

                <div
                  onClick={() => setActiveFareTab("economy")}
                  className={`relative px-4 py-3 rounded-t-xl border-t-2 border-l-2 border-r-2 cursor-pointer transition-all ${activeFareTab === "economy" ? "border-[#008cff] bg-white z-10" : "border-slate-200 text-slate-500 hover:bg-slate-50"} min-w-[220px]`}
                >
                  {activeFareTab === "economy" && <div className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-white z-20"></div>}
                  <div className={`font-bold text-base ${activeFareTab === "economy" ? "text-slate-900" : "text-slate-700"}`}>Economy</div>
                  <div className="text-[11px] font-bold text-slate-700">Starting at ₹ {(selectedFlight.price).toLocaleString('en-IN')}</div>
                  <div className="text-[10px] text-slate-500 mt-1">Affordable fares & value for money</div>
                </div>

                <div
                  onClick={() => setActiveFareTab("premium")}
                  className={`relative px-4 py-3 rounded-t-xl border-t-2 border-l-2 border-r-2 cursor-pointer transition-all ${activeFareTab === "premium" ? "border-[#008cff] bg-white z-10" : "border-slate-200 text-slate-500 hover:bg-slate-50"} min-w-[220px]`}
                >
                  <div className="absolute -top-2.5 left-8 bg-white border border-[#008cff] text-[#008cff] text-[9px] font-bold px-2 py-0.5 rounded-full z-30">Recommended</div>
                  {activeFareTab === "premium" && <div className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-white z-20"></div>}
                  <div className={`font-bold text-base mt-1 ${activeFareTab === "premium" ? "text-slate-900" : "text-slate-700"}`}>Premium Economy</div>
                  <div className="text-[11px] font-bold text-slate-700">Starting at ₹ {(selectedFlight.price + 3637).toLocaleString('en-IN')}</div>
                  <div className="text-[10px] text-slate-500 mt-1">Comfortable seating & priority check-in</div>
                </div>

                <div
                  onClick={() => setActiveFareTab("business")}
                  className={`relative px-4 py-3 rounded-t-xl border-t-2 border-l-2 border-r-2 cursor-pointer transition-all ${activeFareTab === "business" ? "border-[#008cff] bg-white z-10" : "border-slate-200 text-slate-500 hover:bg-slate-50"} min-w-[220px]`}
                >
                  {activeFareTab === "business" && <div className="absolute -bottom-[2px] left-0 right-0 h-[3px] bg-white z-20"></div>}
                  <div className={`font-bold text-base ${activeFareTab === "business" ? "text-slate-900" : "text-slate-700"}`}>Business Class</div>
                  <div className="text-[11px] font-bold text-slate-700">Starting at ₹ {(selectedFlight.price + 48186).toLocaleString('en-IN')}</div>
                  <div className="text-[10px] text-slate-500 mt-1">Luxury experience with premium services</div>
                </div>
              </div>
            </div>

            {/* Modal Body with Sidebar and Content */}
            <div className="flex-1 flex relative bg-[#f2f4f7] overflow-hidden">

              {/* Left Sidebar (Image Overlay) */}
              <div className="w-[280px] shrink-0 relative hidden md:block">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540339832862-4745ea9cb471?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 p-6 flex flex-col justify-end h-full pb-12">
                  <div className="text-white">
                    <div className="text-[10px] font-black uppercase tracking-widest mb-3 opacity-90">{activeFareTab === "economy" ? "ALL FARES INCLUDE" : "THIS FARE INCLUDES"}</div>
                    <ul className="space-y-2">
                      {activeFareTab === "business" && (
                        <li className="flex items-center gap-2 text-sm font-semibold">
                          <FaCheck className="text-white" /> Standard recliner
                        </li>
                      )}
                      <li className="flex items-center gap-2 text-sm font-semibold">
                        <FaCheck className="text-white" /> Complimentary meal
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Fare Cards Container */}
              <div className="flex-1 p-6 overflow-x-auto">
                <div className="flex gap-4 min-w-max pb-4">

                  {activeFareTab === "economy" && (
                    <>
                      {/* ECO VALUE */}
                      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col w-[300px] shrink-0">
                        <div className="p-4 border-b border-slate-100 min-h-[110px]">
                          <div className="text-xl font-black text-slate-900">₹ {(selectedFlight.price).toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-600">per adult</span></div>
                          <div className="text-[11px] text-slate-600 mt-0.5">ECO VALUE</div>

                          <div className="mt-3 bg-emerald-50 text-emerald-700 text-[10px] font-bold p-1.5 rounded flex items-center gap-1.5 border border-emerald-100">
                            <span className="bg-emerald-500 text-white rounded-full w-3 h-3 flex items-center justify-center text-[8px]">%</span> FLAT 10% OFF using MMTHDFCCC code | ... <FaInfoCircle className="ml-auto opacity-50" />
                          </div>
                        </div>

                        <div className="p-4 flex-1 space-y-5 bg-white">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Baggage</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 7 Kgs Cabin Baggage</li>
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 15 Kgs Check-in Baggage</li>
                            </ul>
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Flexibility</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-amber-100 rounded-full p-0.5 mt-0.5"><div className="w-[8px] h-[2px] bg-amber-500"></div></div> Cancellation fee starts at ₹ 5,000 (up to 2 hours before departure)</li>
                              <li className="flex items-start gap-2"><div className="bg-amber-100 rounded-full p-0.5 mt-0.5"><div className="w-[8px] h-[2px] bg-amber-500"></div></div> Date Change fee starts at ₹ 3,100 up to 2 hrs before departure</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 bg-white border-t border-slate-100 mt-auto">
                          <label className="flex items-start gap-2 cursor-pointer mb-3">
                            <input type="checkbox" className="mt-1 w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                            <div>
                              <div className="text-[11px] font-bold text-slate-900">Add Price Drop Protection at ₹ 349</div>
                              <div className="text-[9px] text-slate-500">See a fare drop? We refund the difference.</div>
                            </div>
                          </label>
                          <button 
                            onClick={() => router.push('/flights/book')}
                            className="w-full bg-[#008cff] hover:bg-blue-600 text-white font-bold py-2.5 rounded-lg shadow-sm text-sm transition-colors"
                          >
                            BOOK NOW
                          </button>
                        </div>
                      </div>

                      {/* ECO CLASSIC */}
                      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col w-[300px] shrink-0">
                        <div className="p-4 border-b border-slate-100 min-h-[110px]">
                          <div className="text-xl font-black text-slate-900"><span className="text-sm font-normal text-slate-400 line-through mr-1 text-decoration-slate-400">₹{(selectedFlight.price + 536).toLocaleString('en-IN')}</span> ₹ {(selectedFlight.price + 212).toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-600">per adult</span></div>
                          <div className="text-[11px] text-slate-600 mt-0.5">ECO CLASSIC</div>
                        </div>

                        <div className="p-4 flex-1 space-y-5 bg-white">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Baggage</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 7 Kgs Cabin Baggage</li>
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 20 Kgs Check-in Baggage</li>
                            </ul>
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Flexibility</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-amber-100 rounded-full p-0.5 mt-0.5"><div className="w-[8px] h-[2px] bg-amber-500"></div></div> Lower Cancellation fee of ₹ 3,500 (up to 2 hours before departure)</li>
                              <li className="flex items-start gap-2"><div className="bg-amber-100 rounded-full p-0.5 mt-0.5"><div className="w-[8px] h-[2px] bg-amber-500"></div></div> Lower Date Change fee ₹ 1,000 up to 2 hrs before departure</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 bg-white border-t border-slate-100 mt-auto">
                          <label className="flex items-start gap-2 cursor-pointer mb-3">
                            <input type="checkbox" className="mt-1 w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                            <div>
                              <div className="text-[11px] font-bold text-slate-900">Add Price Drop Protection at ₹ 349</div>
                              <div className="text-[9px] text-slate-500">See a fare drop? We refund the difference.</div>
                            </div>
                          </label>
                          <button 
                            onClick={() => router.push('/flights/book')}
                            className="w-full bg-[#008cff] hover:bg-blue-600 text-white font-bold py-2.5 rounded-lg shadow-sm text-sm transition-colors"
                          >
                            BOOK NOW
                          </button>
                        </div>
                      </div>

                      {/* ECO FLEX */}
                      <div className="bg-[#fff9e6] rounded-xl shadow-md border border-amber-200 overflow-hidden flex flex-col w-[300px] shrink-0 relative transform scale-[1.02] z-10">
                        <div className="absolute top-0 right-0 bg-slate-800 text-amber-400 text-[9px] font-black uppercase px-2 py-1 rounded-bl shadow-sm z-10">MMTSPECIAL</div>
                        <div className="p-4 border-b border-amber-100/50 min-h-[110px]">
                          <div className="text-xl font-black text-slate-900"><span className="text-sm font-normal text-slate-400 line-through mr-1 text-decoration-slate-400">₹{(selectedFlight.price + 1166).toLocaleString('en-IN')}</span> ₹ {(selectedFlight.price + 742).toLocaleString('en-IN')}</div>
                          <div className="text-xs font-normal text-slate-600">per adult</div>
                          <div className="text-[11px] text-slate-600 mt-0.5 uppercase">FARE BY MAKEMYTRIP</div>
                        </div>

                        <div className="p-4 flex-1 space-y-5">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Baggage</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 7 Kgs Cabin Baggage</li>
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 15 Kgs Check-in Baggage</li>
                            </ul>
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Flexibility</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> Free Cancellation</li>
                            </ul>
                            <div className="bg-orange-100/50 rounded mt-3 text-[11px] border border-orange-100">
                              <div className="font-bold text-slate-800 bg-orange-100/50 p-1.5 flex items-center justify-between border-b border-orange-100">BENEFITS INCLUDED <FaInfoCircle className="text-slate-400 font-normal" /></div>
                              <div className="flex items-center gap-2 text-slate-700 p-2 py-3"><span className="w-3.5 h-3.5 rounded-full bg-amber-400 text-white flex items-center justify-center text-[10px]">★</span> Flexifly worth ₹ 5,000</div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-white border-t border-amber-100 mt-auto">
                          <label className="flex items-start gap-2 cursor-pointer mb-3">
                            <input type="checkbox" className="mt-1 w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                            <div>
                              <div className="text-[11px] font-bold text-slate-900">Add Price Drop Protection at ₹ 349</div>
                              <div className="text-[9px] text-slate-500">See a fare drop? We refund the difference.</div>
                            </div>
                          </label>
                          <button 
                            onClick={() => router.push('/flights/book')}
                            className="w-full bg-[#008cff] hover:bg-blue-600 text-white font-bold py-2.5 rounded-lg shadow-sm text-sm transition-colors"
                          >
                            BOOK NOW
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {activeFareTab === "premium" && (
                    <>
                      {/* PREMIUM VALUE */}
                      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col w-[300px] shrink-0">
                        <div className="p-4 border-b border-slate-100 min-h-[110px]">
                          <div className="text-xl font-black text-slate-900">₹ {(selectedFlight.price + 3637).toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-600">per adult</span></div>
                          <div className="text-[11px] text-slate-600 mt-0.5">PREMIUM VALUE</div>

                          <div className="mt-3 bg-emerald-50 text-emerald-700 text-[10px] font-bold p-1.5 rounded flex items-center gap-1.5 border border-emerald-100">
                            <span className="bg-emerald-500 text-white rounded-full w-3 h-3 flex items-center justify-center text-[8px]">%</span> FLAT 10% OFF using MMTHDFCCC code | ... <FaInfoCircle className="ml-auto opacity-50" />
                          </div>
                        </div>

                        <div className="p-4 flex-1 space-y-5 bg-white">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Baggage</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 7 Kgs Cabin Baggage</li>
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 15 Kgs Check-in Baggage</li>
                            </ul>
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Flexibility</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-amber-100 rounded-full p-0.5 mt-0.5"><div className="w-[8px] h-[2px] bg-amber-500"></div></div> Cancellation fee starts at ₹ 5,000 (up to 2 hours before departure)</li>
                              <li className="flex items-start gap-2"><div className="bg-amber-100 rounded-full p-0.5 mt-0.5"><div className="w-[8px] h-[2px] bg-amber-500"></div></div> Date Change fee starts at ₹ 3,000</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 bg-white border-t border-slate-100 mt-auto">
                          <label className="flex items-start gap-2 cursor-pointer mb-3">
                            <input type="checkbox" className="mt-1 w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                            <div>
                              <div className="text-[11px] font-bold text-slate-900">Add Price Drop Protection at ₹ 449</div>
                              <div className="text-[9px] text-slate-500">See a fare drop? We refund the difference.</div>
                            </div>
                          </label>
                          <button 
                            onClick={() => router.push('/flights/book')}
                            className="w-full bg-[#008cff] hover:bg-blue-600 text-white font-bold py-2.5 rounded-lg shadow-sm text-sm transition-colors"
                          >
                            BOOK NOW
                          </button>
                        </div>
                      </div>

                      {/* PREMIUM FLEX */}
                      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col w-[300px] shrink-0">
                        <div className="p-4 border-b border-slate-100 min-h-[110px]">
                          <div className="text-xl font-black text-slate-900">₹ {(selectedFlight.price + 5442).toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-600">per adult</span></div>
                          <div className="text-[11px] text-slate-600 mt-0.5">PREMIUM FLEX</div>

                          <div className="mt-3 bg-emerald-50 text-emerald-700 text-[10px] font-bold p-1.5 rounded flex items-center gap-1.5 border border-emerald-100">
                            <span className="bg-emerald-500 text-white rounded-full w-3 h-3 flex items-center justify-center text-[8px]">%</span> FLAT 10% OFF using MMTHDFCCC code | ... <FaInfoCircle className="ml-auto opacity-50" />
                          </div>
                        </div>

                        <div className="p-4 flex-1 space-y-5 bg-white">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Baggage</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 7 Kgs Cabin Baggage</li>
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 25 Kgs Check-in Baggage</li>
                            </ul>
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Flexibility</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-amber-100 rounded-full p-0.5 mt-0.5"><div className="w-[8px] h-[2px] bg-amber-500"></div></div> Lower Cancellation fee of ₹ 999 (up to 2 hours before departure)</li>
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> <span className="text-emerald-600">Free Date Change</span> up to 2 hrs before departure</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 bg-white border-t border-slate-100 mt-auto">
                          <label className="flex items-start gap-2 cursor-pointer mb-3">
                            <input type="checkbox" className="mt-1 w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                            <div>
                              <div className="text-[11px] font-bold text-slate-900">Add Price Drop Protection at ₹ 349</div>
                              <div className="text-[9px] text-slate-500">See a fare drop? We refund the difference.</div>
                            </div>
                          </label>
                          <button 
                            onClick={() => router.push('/flights/book')}
                            className="w-full bg-[#008cff] hover:bg-blue-600 text-white font-bold py-2.5 rounded-lg shadow-sm text-sm transition-colors"
                          >
                            BOOK NOW
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {activeFareTab === "business" && (
                    <>
                      {/* BUSINESS VALUE */}
                      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col w-[300px] shrink-0">
                        <div className="p-4 border-b border-slate-100 min-h-[110px]">
                          <div className="text-xl font-black text-slate-900">₹ {(selectedFlight.price + 48186).toLocaleString('en-IN')} <span className="text-xs font-normal text-slate-600">per adult</span></div>
                          <div className="text-[11px] text-slate-600 mt-0.5">BUSINESS VALUE</div>

                          <div className="mt-3 bg-emerald-50 text-emerald-700 text-[10px] font-bold p-1.5 rounded flex items-center gap-1.5 border border-emerald-100">
                            <span className="bg-emerald-500 text-white rounded-full w-3 h-3 flex items-center justify-center text-[8px]">%</span> Flat 8% OFF using code MMTHSBCBIZ | Fla... <FaInfoCircle className="ml-auto opacity-50" />
                          </div>
                        </div>

                        <div className="p-4 flex-1 space-y-5 bg-white">
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Baggage</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 10 Kgs Cabin Baggage</li>
                              <li className="flex items-start gap-2"><div className="bg-emerald-100 rounded-full p-0.5 mt-0.5"><FaCheck className="text-emerald-500 text-[8px]" /></div> 30 Kgs Check-in Baggage</li>
                            </ul>
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 mb-2">Flexibility</div>
                            <ul className="space-y-2 text-[11px] text-slate-700">
                              <li className="flex items-start gap-2"><div className="bg-amber-100 rounded-full p-0.5 mt-0.5"><div className="w-[8px] h-[2px] bg-amber-500"></div></div> Cancellation fee starts at ₹ 7,500 (up to 2 hours before departure)</li>
                              <li className="flex items-start gap-2"><div className="bg-amber-100 rounded-full p-0.5 mt-0.5"><div className="w-[8px] h-[2px] bg-amber-500"></div></div> Date Change fee starts at ₹ 3,000</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 bg-white border-t border-slate-100 mt-auto">
                          <label className="flex items-start gap-2 cursor-pointer mb-3">
                            <input type="checkbox" className="mt-1 w-3.5 h-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                            <div>
                              <div className="text-[11px] font-bold text-slate-900">Add Price Drop Protection at ₹ 449</div>
                              <div className="text-[9px] text-slate-500">See a fare drop? We refund the difference.</div>
                            </div>
                          </label>
                          <button 
                            onClick={() => router.push('/flights/book')}
                            className="w-full bg-[#008cff] hover:bg-blue-600 text-white font-bold py-2.5 rounded-lg shadow-sm text-sm transition-colors"
                          >
                            BOOK NOW
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#f2f4f7] font-sans">
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={true}
        username="User"
        onLoginClick={() => { }}
        onLogout={() => { }}
        onSupportClick={() => { }}
      />

      <div className="pt-32 bg-[#0a1930] pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-lg p-2 flex flex-wrap lg:flex-nowrap items-center gap-2 text-slate-800 shadow-md relative">
            
            {/* Trip Type */}
            <div className="relative shrink-0">
              <div 
                className={`flex flex-col px-3 py-1.5 rounded-lg cursor-pointer border ${modifyPopup === 'tripType' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                onClick={() => setModifyPopup(modifyPopup === 'tripType' ? null : 'tripType')}
              >
                <div className="text-[10px] uppercase font-semibold text-slate-500 flex items-center gap-1">Trip Type <FaAngleDown className="text-slate-400"/></div>
                <div className="font-black text-sm">{tripType}</div>
              </div>
              
              {modifyPopup === 'tripType' && (
                <div className="absolute top-[115%] left-0 bg-white text-slate-800 w-[160px] rounded-lg shadow-2xl z-50 overflow-hidden border border-slate-100 animate-scale-in">
                  {['One Way', 'Round Trip', 'Multi City'].map(t => (
                    <div 
                      key={t}
                      className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${tripType === t ? 'bg-[#008cff] text-white font-semibold' : 'hover:bg-slate-50'}`}
                      onClick={() => { setTripType(t); setModifyPopup(null); }}
                    >
                      {t}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="w-[1px] h-10 bg-slate-200 mx-1"></div>

            <div className="flex-1 flex flex-wrap md:flex-nowrap items-center w-full">
              {/* FROM */}
              <div className="relative flex-1">
                <div 
                  className={`flex flex-col px-4 py-1.5 rounded-lg cursor-pointer border transition-colors ${modifyPopup === 'from' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                  onClick={() => setModifyPopup(modifyPopup === 'from' ? null : 'from')}
                >
                  <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">From</div>
                  <div className="font-black text-sm truncate">{fromCity}</div>
                </div>

                {modifyPopup === 'from' && (
                  <div className="absolute top-[115%] left-0 w-[340px] bg-white text-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden border border-slate-100 animate-scale-in">
                    <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                      <FaSearch className="text-slate-400 text-sm" />
                      <input type="text" placeholder="From" className="w-full outline-none text-sm font-semibold placeholder-slate-400" autoFocus />
                    </div>
                    <div className="max-h-[350px] overflow-y-auto p-5 bg-slate-50/50">
                      <div className="text-xs font-bold text-slate-900 mb-3">Visa-Free/Visa-on-Arrival Destinations</div>
                      <div className="grid grid-cols-3 gap-2.5 mb-6">
                        {['Manila', 'Male', 'Kuala Lum...', 'Colombo', 'Mauritius', 'Hong Kong', 'Paro', 'Mahe Island', 'Nadi'].map(c => (
                          <div key={c} className="bg-white border border-slate-200 text-center py-2.5 px-1.5 rounded-lg text-[11px] font-semibold hover:border-[#008cff] hover:text-[#008cff] hover:shadow-sm cursor-pointer transition-all" onClick={() => { setFromCity(c); setModifyPopup(null); }}>{c}</div>
                        ))}
                      </div>
                      <div className="text-xs font-bold text-slate-900 mb-3">E-Visa Destinations</div>
                      <div className="grid grid-cols-3 gap-2.5">
                        {['Denpasar...', 'Ho Chi Mi...', 'Tokyo'].map(c => (
                          <div key={c} className="bg-white border border-slate-200 text-center py-2.5 px-1.5 rounded-lg text-[11px] font-semibold hover:border-[#008cff] hover:text-[#008cff] hover:shadow-sm cursor-pointer transition-all" onClick={() => { setFromCity(c); setModifyPopup(null); }}>{c}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Swap Icon */}
              <div 
                className="w-8 h-8 rounded-full bg-white border border-slate-200 text-[#008cff] shadow-sm flex items-center justify-center cursor-pointer hover:bg-slate-50 z-10 -mx-4 shrink-0 transition-transform hover:rotate-180"
                onClick={() => {
                  const temp = fromCity;
                  setFromCity(toCity);
                  setToCity(temp);
                }}
              >
                <FaArrowRight className="text-[10px]" />
              </div>

              {/* TO */}
              <div className="relative flex-1 pl-4">
                <div 
                  className={`flex flex-col px-4 py-1.5 rounded-lg cursor-pointer border transition-colors ${modifyPopup === 'to' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                  onClick={() => setModifyPopup(modifyPopup === 'to' ? null : 'to')}
                >
                  <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">To</div>
                  <div className="font-black text-sm truncate">{toCity}</div>
                </div>

                {modifyPopup === 'to' && (
                  <div className="absolute top-[115%] left-0 w-[340px] bg-white text-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden border border-slate-100 animate-scale-in">
                    <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                      <FaSearch className="text-slate-400 text-sm" />
                      <input type="text" placeholder="To" className="w-full outline-none text-sm font-semibold placeholder-slate-400" autoFocus />
                    </div>
                    <div className="max-h-[350px] overflow-y-auto p-5 bg-slate-50/50">
                      <div className="text-xs font-bold text-slate-900 mb-3">Visa-Free/Visa-on-Arrival Destinations</div>
                      <div className="grid grid-cols-3 gap-2.5 mb-6">
                        {['Manila', 'Male', 'Kuala Lum...', 'Colombo', 'Mauritius', 'Hong Kong', 'Paro', 'Mahe Island', 'Nadi'].map(c => (
                          <div key={c} className="bg-white border border-slate-200 text-center py-2.5 px-1.5 rounded-lg text-[11px] font-semibold hover:border-[#008cff] hover:text-[#008cff] hover:shadow-sm cursor-pointer transition-all" onClick={() => { setToCity(c); setModifyPopup(null); }}>{c}</div>
                        ))}
                      </div>
                      <div className="text-xs font-bold text-slate-900 mb-3">E-Visa Destinations</div>
                      <div className="grid grid-cols-3 gap-2.5">
                        {['Denpasar...', 'Ho Chi Mi...', 'Tokyo'].map(c => (
                          <div key={c} className="bg-white border border-slate-200 text-center py-2.5 px-1.5 rounded-lg text-[11px] font-semibold hover:border-[#008cff] hover:text-[#008cff] hover:shadow-sm cursor-pointer transition-all" onClick={() => { setToCity(c); setModifyPopup(null); }}>{c}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="w-[1px] h-10 bg-slate-200 mx-1"></div>

              {/* DEPART */}
              <div className="relative flex-1">
                <div 
                  className={`flex flex-col px-4 py-1.5 rounded-lg cursor-pointer border transition-colors ${modifyPopup === 'depart' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                  onClick={() => setModifyPopup(modifyPopup === 'depart' ? null : 'depart')}
                >
                  <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">Depart</div>
                  <div className="font-black text-sm truncate">{departDate}</div>
                </div>

                {/* Calendar Popup */}
                {modifyPopup === 'depart' && (
                  <div className="absolute top-[115%] right-0 lg:left-0 lg:right-auto w-[650px] bg-white text-slate-800 rounded-xl shadow-2xl z-50 p-6 border border-slate-100 animate-scale-in">
                    <div className="flex justify-between items-center mb-6 px-4">
                      <FaChevronLeft className="text-[#008cff] cursor-pointer" />
                      <div className="font-bold text-lg">July 2026</div>
                      <div className="font-bold text-lg">August 2026</div>
                      <FaChevronRight className="text-[#008cff] cursor-pointer" />
                    </div>
                    
                    <div className="flex gap-8">
                      {/* July */}
                      <div className="flex-1">
                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className="text-xs font-semibold text-slate-500">{d}</div>)}
                        </div>
                        <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center">
                          {/* Empty days */}
                          <div className="col-span-3"></div>
                          {/* Days */}
                          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(d => (
                            <div key={d} className="flex flex-col items-center justify-center opacity-30 cursor-not-allowed">
                              <span className="text-sm font-semibold text-slate-800">{d}</span>
                            </div>
                          ))}
                          <div className="flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 rounded py-1">
                            <span className="text-sm font-bold text-slate-900">16</span>
                            <span className="text-[9px] font-semibold text-slate-500">11,503</span>
                          </div>
                          <div 
                            className="flex flex-col items-center justify-center cursor-pointer bg-[#008cff] text-white rounded py-1"
                            onClick={() => { setDepartDate("Fri, 17 Jul 26"); setModifyPopup(null); }}
                          >
                            <span className="text-sm font-bold">17</span>
                            <span className="text-[9px] font-semibold opacity-90">11,064</span>
                          </div>
                          {[18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(d => (
                            <div key={d} className="flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 rounded py-1" onClick={() => { setDepartDate(`Fri, ${d} Jul 26`); setModifyPopup(null); }}>
                              <span className="text-sm font-bold text-slate-900">{d}</span>
                              <span className="text-[9px] font-semibold text-emerald-600">{(8000 + (d*111)).toLocaleString('en-IN')}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* August */}
                      <div className="flex-1">
                        <div className="grid grid-cols-7 gap-1 text-center mb-2">
                          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d} className="text-xs font-semibold text-slate-500">{d}</div>)}
                        </div>
                        <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center">
                          {/* Empty days */}
                          <div className="col-span-6"></div>
                          {/* Days */}
                          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(d => (
                            <div key={d} className="flex flex-col items-center justify-center cursor-pointer hover:bg-slate-100 rounded py-1" onClick={() => { setDepartDate(`Sat, ${d} Aug 26`); setModifyPopup(null); }}>
                              <span className="text-sm font-bold text-slate-900">{d}</span>
                              <span className="text-[9px] font-semibold text-emerald-600">{(8000 + (d*33)).toLocaleString('en-IN')}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="w-[1px] h-10 bg-slate-200 mx-1"></div>

              {/* RETURN */}
              <div className="flex-1 flex flex-col px-4 py-1.5 rounded-lg border border-transparent opacity-60 cursor-not-allowed">
                <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">Return</div>
                <div className="font-black text-sm text-slate-400">Select Return</div>
              </div>

              <div className="w-[1px] h-10 bg-slate-200 mx-1"></div>

              {/* TRAVELLERS */}
              <div className="relative flex-1">
                <div 
                  className={`flex flex-col px-4 py-1.5 rounded-lg cursor-pointer border transition-colors ${modifyPopup === 'travellers' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                  onClick={() => setModifyPopup(modifyPopup === 'travellers' ? null : 'travellers')}
                >
                  <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">Travellers</div>
                  <div className="font-black text-sm truncate">{adults + childrenCount + infants} <span className="font-semibold text-xs">Traveller{adults + childrenCount + infants > 1 ? 's' : ''}</span></div>
                </div>

                {modifyPopup === 'travellers' && (
                  <div className="absolute top-[115%] right-0 lg:left-0 lg:right-auto w-[450px] bg-white text-slate-800 rounded-xl shadow-2xl z-50 p-6 border border-slate-100 animate-scale-in">
                    <div className="mb-6">
                      <div className="flex justify-between items-end mb-3">
                        <div>
                          <div className="text-xs font-bold text-slate-900">ADULTS (12y +)</div>
                          <div className="text-[10px] text-slate-500">on the day of travel</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {[1,2,3,4,5,6,7,8,9].map(n => (
                          <div 
                            key={n} 
                            onClick={() => setAdults(n)}
                            className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold cursor-pointer transition-colors ${adults === n ? 'bg-[#008cff] text-white shadow' : 'bg-white border border-slate-200 text-slate-700 hover:border-[#008cff]'}`}
                          >{n}</div>
                        ))}
                        <div className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold cursor-pointer bg-white border border-slate-200 text-slate-700 hover:border-[#008cff]">{'>'}9</div>
                      </div>
                    </div>

                    <div className="flex gap-8 mb-8">
                      <div className="flex-1">
                        <div className="mb-3">
                          <div className="text-xs font-bold text-slate-900">CHILDREN (2y - 12y)</div>
                          <div className="text-[10px] text-slate-500">on the day of travel</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {[0,1,2,3,4,5,6].map(n => (
                            <div 
                              key={n} 
                              onClick={() => setChildrenCount(n)}
                              className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold cursor-pointer transition-colors ${childrenCount === n ? 'bg-[#008cff] text-white shadow' : 'bg-white border border-slate-200 text-slate-700 hover:border-[#008cff]'}`}
                            >{n}</div>
                          ))}
                          <div className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold cursor-pointer bg-white border border-slate-200 text-slate-700 hover:border-[#008cff]">{'>'}6</div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="mb-3">
                          <div className="text-xs font-bold text-slate-900">INFANTS (below 2y)</div>
                          <div className="text-[10px] text-slate-500">on the day of travel</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {[0,1,2,3,4,5,6].map(n => (
                            <div 
                              key={n} 
                              onClick={() => setInfants(n)}
                              className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold cursor-pointer transition-colors ${infants === n ? 'bg-[#008cff] text-white shadow' : 'bg-white border border-slate-200 text-slate-700 hover:border-[#008cff]'}`}
                            >{n}</div>
                          ))}
                          <div className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold cursor-pointer bg-white border border-slate-200 text-slate-700 hover:border-[#008cff]">{'>'}6</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button onClick={() => setModifyPopup(null)} className="bg-[#008cff] hover:bg-blue-600 text-white font-bold px-8 py-2 rounded shadow-sm text-sm transition-colors">
                        NEXT
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="w-[1px] h-10 bg-slate-200 mx-1"></div>

              {/* CABIN CLASS */}
              <div className="relative flex-1">
                <div 
                  className={`flex flex-col px-4 py-1.5 rounded-lg cursor-pointer border transition-colors ${modifyPopup === 'cabin' ? 'border-[#008cff] bg-[#008cff]/5' : 'border-transparent hover:bg-slate-50'}`}
                  onClick={() => setModifyPopup(modifyPopup === 'cabin' ? null : 'cabin')}
                >
                  <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-0.5">Cabin Class</div>
                  <div className="font-black text-sm truncate">{cabinClass.split('/')[0]}</div>
                </div>

                {modifyPopup === 'cabin' && (
                  <div className="absolute top-[115%] right-0 w-[350px] bg-white text-slate-800 rounded-xl shadow-2xl z-50 p-4 border border-slate-100 animate-scale-in">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-3 px-2">Choose Cabin Class</div>
                    <div className="space-y-2">
                      {[
                        { name: "Economy/ Premium Economy", icon: "💺", desc: "" },
                        { name: "Premium Economy", icon: "💺", desc: "Extra Legroom • Extra Baggage" },
                        { name: "Business Class", icon: "🛋️", desc: "Luxury Lounges • Cabin Comfort" },
                        { name: "First Class", icon: "🛏️", desc: "Private Suites • Fine Dining" }
                      ].map((cls, idx) => (
                        <div 
                          key={idx}
                          onClick={() => { setCabinClass(cls.name); setModifyPopup(null); }}
                          className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${cabinClass === cls.name ? 'border-[#008cff] bg-blue-50/50' : 'border-slate-200 hover:border-[#008cff]'}`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`mt-0.5 flex items-center justify-center w-4 h-4 rounded-full border ${cabinClass === cls.name ? 'border-[#008cff]' : 'border-slate-300'}`}>
                              {cabinClass === cls.name && <div className="w-2.5 h-2.5 bg-[#008cff] rounded-full"></div>}
                            </div>
                            <div>
                              <div className="font-bold text-sm text-slate-900">{cls.name}</div>
                              {cls.desc && <div className="text-[10px] text-slate-500 mt-1">{cls.desc}</div>}
                            </div>
                          </div>
                          <div className="text-2xl">{cls.icon}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button onClick={() => setModifyPopup(null)} className="bg-[#008cff] hover:bg-blue-600 text-white font-bold px-8 py-2 rounded shadow-sm text-sm transition-colors">
                        DONE
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <button className="bg-[#008cff] hover:bg-blue-600 text-white font-black px-8 py-3.5 rounded-lg shadow uppercase tracking-widest transition-colors shrink-0 ml-2">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">

        {/* Date Carousel */}
        <div className="bg-white shadow-sm border-b border-x border-slate-200 flex items-stretch mb-6">
          <button 
            className="w-12 flex items-center justify-center text-[#008cff] hover:bg-slate-50 transition-colors border-r border-slate-100 shrink-0"
            onClick={() => setCarouselStart(prev => prev > 1 ? prev - 1 : 31)}
          >
            <FaChevronLeft className="text-lg font-light" />
          </button>

          <div className="flex-1 flex overflow-hidden">
            {[0, 1, 2, 3, 4, 5, 6].map((offset) => {
              const date = carouselStart + offset;
              const displayDate = date > 31 ? date - 31 : date;
              return (
                <div 
                  key={displayDate} 
                  onClick={() => setSelectedDate(displayDate)}
                  className={`flex-1 text-center py-2.5 cursor-pointer transition-colors border-r border-slate-100 last:border-r-0 ${selectedDate === displayDate ? 'bg-white relative' : 'bg-white hover:bg-slate-50'}`}
                >
                  {selectedDate === displayDate && <div className="absolute inset-x-0 bottom-0 h-0.5 bg-[#008cff]"></div>}
                  <div className={`text-sm font-bold ${selectedDate === displayDate ? 'text-slate-900' : 'text-slate-700'}`}>Fri, Jul {displayDate}</div>
                  <div className={`text-xs font-semibold mt-1 ${selectedDate === displayDate ? 'text-[#008cff]' : 'text-emerald-500'}`}>₹ {(5432 + (offset * 110)).toLocaleString('en-IN')}</div>
                </div>
              )
            })}
          </div>

          <button 
            className="w-12 flex items-center justify-center text-[#008cff] hover:bg-slate-50 transition-colors border-l border-slate-100 shrink-0"
            onClick={() => setCarouselStart(prev => prev < 31 ? prev + 1 : 1)}
          >
            <FaChevronRight className="text-lg font-light" />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start pb-16">

          {/* LEFT SIDEBAR - FILTERS */}
          <div className="w-full lg:w-64 bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden shrink-0">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-black text-slate-900">Filters</h3>
              <span className="text-[10px] font-bold text-blue-600 cursor-pointer">RESET ALL</span>
            </div>

            <div className="p-4 space-y-6">
              {/* Popular Filters */}
              <div>
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-3">Popular Filters</h4>
                <div className="space-y-2">
                  <label className="flex items-start gap-2 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5" />
                    <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">Non Stop</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5" />
                    <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">Morning Departures</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer group">
                    <input type="checkbox" className="mt-0.5" />
                    <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">IndiGo</span>
                  </label>
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* Stops */}
              <div>
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-3">Stops</h4>
                <div className="space-y-2">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">Non Stop</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">₹ 5,432</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">1 Stop</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">₹ 5,790</span>
                  </label>
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* Departure Time */}
              <div>
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-3">Departure Time</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="border border-slate-200 rounded p-2 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                    <div className="text-[10px] font-bold text-slate-600">Before 6 AM</div>
                  </div>
                  <div className="border border-slate-200 rounded p-2 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                    <div className="text-[10px] font-bold text-slate-600">6 AM - 12 PM</div>
                  </div>
                  <div className="border border-slate-200 rounded p-2 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                    <div className="text-[10px] font-bold text-slate-600">12 PM - 6 PM</div>
                  </div>
                  <div className="border border-slate-200 rounded p-2 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                    <div className="text-[10px] font-bold text-slate-600">After 6 PM</div>
                  </div>
                </div>
              </div>

              <hr className="border-slate-100" />

              {/* Airlines */}
              <div>
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider mb-3">Airlines</h4>
                <div className="space-y-2">
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">IndiGo</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">₹ 5,432</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">Air India</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">₹ 5,432</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">Vistara</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">₹ 6,112</span>
                  </label>
                  <label className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="mt-0.5" />
                      <span className="text-xs font-semibold text-slate-700 group-hover:text-blue-600">Akasa Air</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold">₹ 5,432</span>
                  </label>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN - FLIGHT LIST */}
          <div className="flex-1 w-full space-y-4">

            {/* Sort Header */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden flex divide-x divide-slate-100">
              {['Cheapest', 'Fastest', 'Recommended'].map((tab) => (
                <div 
                  key={tab}
                  onClick={() => setActiveSort(tab)}
                  className={`flex-1 p-3 text-center cursor-pointer transition-colors border-b-2 ${activeSort === tab ? 'border-blue-500 bg-white' : 'border-transparent hover:bg-slate-50'}`}
                >
                  <div className="text-sm font-black text-slate-900">{tab}</div>
                  <div className="text-[10px] text-slate-500 font-semibold">
                    {tab === 'Cheapest' ? '₹ 5,432 • 02 h 10 m' : tab === 'Fastest' ? '₹ 5,432 • 02 h 10 m' : '₹ 5,432 • 02 h 15 m'}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs font-semibold text-blue-800 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2"><FaShieldAlt /> Fares are subject to change. Lock prices now!</div>
              <button className="bg-blue-600 text-white font-bold px-3 py-1 rounded text-[10px] uppercase">Lock Prices</button>
            </div>

            {/* Flight Cards Loop */}
            {mockFlights.map((flight, idx) => (
              <div key={flight.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="p-5 flex items-center justify-between">

                  {/* Airline Info */}
                  <div className="flex items-center gap-3 w-[200px]">
                    <img src={flight.logo} alt={flight.airline} className="w-10 h-10 object-contain bg-white rounded shadow-sm border border-slate-100 p-1" />
                    <div>
                      <div className="text-sm font-black text-slate-900">{flight.airline}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-medium">{flight.airline.substring(0, 2).toUpperCase()}-{(100 + flight.id * 33).toString()}</div>
                    </div>
                  </div>

                  {/* Flight Timing Info */}
                  <div className="flex-1 flex items-center justify-center px-4 max-w-md">
                    <div className="text-right w-24">
                      <div className="text-2xl font-black text-slate-900 leading-none">{flight.departTime}</div>
                      <div className="text-xs font-semibold text-slate-500 mt-1">{flight.departCity}</div>
                    </div>

                    <div className="flex-1 px-6 flex flex-col items-center">
                      <div className="text-[10px] font-bold text-slate-500 mb-1.5">{flight.duration}</div>
                      <div className="w-full relative flex items-center justify-center">
                        <div className="absolute w-full h-[2px] bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative z-10"></div>
                      </div>
                      <div className="text-[9px] font-bold text-emerald-600 mt-1.5 uppercase tracking-wider">{flight.stops}</div>
                    </div>

                    <div className="text-left w-24">
                      <div className="text-2xl font-black text-slate-900 leading-none">{flight.arrivalTime}</div>
                      <div className="text-xs font-semibold text-slate-500 mt-1">{flight.arrivalCity}</div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="text-right flex flex-col items-end w-40 border-l border-slate-100 pl-6">
                    <div className="text-[26px] font-black text-slate-900 mb-2 tracking-tight">₹ {(flight.price).toLocaleString('en-IN')}</div>
                    <button
                      onClick={() => setSelectedFlight(flight)}
                      className="bg-[#ff6d38] hover:bg-[#e55928] text-white font-bold text-sm px-6 py-2.5 rounded-[20px] uppercase tracking-wide shadow-sm transition-colors w-full"
                    >
                      View Prices
                    </button>
                  </div>

                </div>

                <div className="bg-slate-50 border-t border-slate-100 px-5 py-2.5 flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="text-emerald-600 bg-emerald-100/50 border border-emerald-100 px-2 py-0.5 rounded">Free Meals</span>
                    <span className="hover:text-[#008cff] cursor-pointer transition-colors">Flight Details</span>
                  </div>
                  <div className="text-rose-500 flex items-center gap-1.5 font-semibold">
                    <FaInfoCircle className="text-xs" /> Only 2 seats left at this price
                  </div>
                </div>
              </div>
            ))}

            {/* Promo Banner */}
            <div className="w-full rounded-lg overflow-hidden relative h-24 my-6 shadow-sm border border-slate-200 group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-700"></div>
              <div className="relative h-full px-8 flex items-center justify-between text-white">
                <div>
                  <h3 className="font-black text-xl italic tracking-tight text-amber-400">SUMMER SALE!</h3>
                  <p className="font-semibold text-xs mt-1 opacity-90">Get up to ₹2000 OFF on your first domestic flight.</p>
                </div>
                <div className="bg-white text-blue-900 font-black text-xs px-4 py-2 rounded uppercase shadow-lg">Use Code: FIRSTFLIGHT</div>
              </div>
            </div>

            {mockFlights.slice(2).map((flight, idx) => (
              <div key={`dup-${flight.id}`} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="p-5 flex items-center justify-between">

                  {/* Airline Info */}
                  <div className="flex items-center gap-3 w-[200px]">
                    <img src={flight.logo} alt={flight.airline} className="w-10 h-10 object-contain bg-white rounded shadow-sm border border-slate-100 p-1" />
                    <div>
                      <div className="text-sm font-black text-slate-900">{flight.airline}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-medium">{flight.airline.substring(0, 2).toUpperCase()}-{(300 + flight.id * 33).toString()}</div>
                    </div>
                  </div>

                  {/* Flight Timing Info */}
                  <div className="flex-1 flex items-center justify-center px-4 max-w-md">
                    <div className="text-right w-24">
                      <div className="text-2xl font-black text-slate-900 leading-none">{flight.departTime}</div>
                      <div className="text-xs font-semibold text-slate-500 mt-1">{flight.departCity}</div>
                    </div>

                    <div className="flex-1 px-6 flex flex-col items-center">
                      <div className="text-[10px] font-bold text-slate-500 mb-1.5">{flight.duration}</div>
                      <div className="w-full relative flex items-center justify-center">
                        <div className="absolute w-full h-[2px] bg-slate-200"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 relative z-10"></div>
                      </div>
                      <div className="text-[9px] font-bold text-emerald-600 mt-1.5 uppercase tracking-wider">{flight.stops}</div>
                    </div>

                    <div className="text-left w-24">
                      <div className="text-2xl font-black text-slate-900 leading-none">{flight.arrivalTime}</div>
                      <div className="text-xs font-semibold text-slate-500 mt-1">{flight.arrivalCity}</div>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="text-right flex flex-col items-end w-40 border-l border-slate-100 pl-6">
                    <div className="text-[26px] font-black text-slate-900 mb-2 tracking-tight">₹ {(flight.price + 1100).toLocaleString('en-IN')}</div>
                    <button
                      onClick={() => setSelectedFlight(flight)}
                      className="bg-[#ff6d38] hover:bg-[#e55928] text-white font-bold text-sm px-6 py-2.5 rounded-[20px] uppercase tracking-wide shadow-sm transition-colors w-full"
                    >
                      View Prices
                    </button>
                  </div>

                </div>

                <div className="bg-slate-50 border-t border-slate-100 px-5 py-2.5 flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="hover:text-[#008cff] cursor-pointer transition-colors">Flight Details</span>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Fare Details Modal */}
      {selectedFlight && renderFareModal()}

    </div>
  );
}
