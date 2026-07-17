"use client";

import React, { useState } from "react";
import { FaChevronRight, FaInfoCircle, FaCheckCircle, FaMinusCircle, FaAngleRight, FaCheck, FaAngleDown, FaTimes, FaSuitcase, FaPlane, FaRegCircle, FaRegCheckCircle, FaUser, FaRegUser, FaShieldAlt, FaTicketAlt, FaUtensils, FaPen } from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function FlightBookPage() {
  const [tripSecure, setTripSecure] = useState<"yes" | "no" | null>("yes");
  const [adultGender, setAdultGender] = useState<"male" | "female" | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [activeSeatTab, setActiveSeatTab] = useState("Seats");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f1f8] via-[#f4f7fb] to-[#F2F2F2] font-sans text-slate-800 pb-20">
      <Navbar
        activeTab="flight"
        setActiveTab={() => { }}
        isLoggedIn={true}
        username="User"
        onLoginClick={() => { }}
        onLogout={() => { }}
        onSupportClick={() => { }}
      />

      {/* Top Header */}
      <div className="bg-gradient-to-r from-[#0a1930] via-[#0f294d] to-[#0a1930] text-white pt-28 pb-4 px-4 sm:px-6 shadow-md sticky top-0 z-40 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10 animate-slide-up">
          <h1 className="text-xl font-black">Complete your booking</h1>
          <div className="hidden md:flex items-center gap-6 text-[10px] font-semibold text-slate-400">
            <span className={currentStep === 1 ? "text-white bg-slate-800/50 px-3 py-1 rounded cursor-pointer" : "cursor-pointer hover:text-white transition-colors"} onClick={() => setCurrentStep(1)}>Flight Summary</span>
            <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setCurrentStep(1)}>Flight Insurance</span>
            <span className="cursor-pointer hover:text-white transition-colors" onClick={() => setCurrentStep(1)}>Traveller Details</span>
            <span className={currentStep === 2 ? "text-white bg-slate-800/50 px-3 py-1 rounded cursor-pointer" : "cursor-pointer hover:text-white transition-colors"} onClick={() => setCurrentStep(2)}>Seats & Meals</span>
            <span className="cursor-pointer hover:text-white transition-colors">Add-ons</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-6 flex flex-col lg:flex-row gap-6">

        {/* LEFT COLUMN */}
        <div className="flex-1 space-y-6">
          {currentStep === 1 && (
            <div className="space-y-6">

              {/* FLIGHT SUMMARY */}
              <div className="bg-white rounded-xl shadow-lg shadow-slate-200/40 border border-slate-200 overflow-hidden animate-slide-up hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex justify-between items-center">
                  <div>
                    <h2 className="font-black text-lg text-slate-900">New Delhi → Bengaluru</h2>
                    <div className="text-xs font-semibold text-slate-500 mt-0.5">
                      <span className="text-slate-800 bg-amber-100 px-1 rounded mr-1">Saturday, Jul 18</span> Non Stop • 2h 55m
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded uppercase tracking-wider mb-1 inline-block">CANCELLATION REFUND POLICY</div>
                    <div className="text-xs font-bold text-blue-600 hover:underline cursor-pointer">View Fare Rules</div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IndiGo_Airlines_logo.svg" alt="IndiGo" className="h-4" />
                      <span className="font-bold text-sm text-slate-900">IndiGo</span>
                      <span className="text-xs text-slate-500">6E 5022</span>
                      <span className="text-[10px] border border-slate-300 text-slate-500 px-1 rounded ml-1">Airbus A321</span>
                    </div>
                    <div className="text-[10px] font-bold text-slate-500">
                      Economy • <span className="text-emerald-600">SMART CANCELLATION</span>
                    </div>
                  </div>

                  <div className="flex bg-slate-50/50 p-4 rounded border border-slate-100">
                    <div className="w-20 text-center">
                      <div className="text-lg font-black text-slate-900">22:00</div>
                      <div className="text-xs text-slate-500 mt-1">18 Jul</div>
                    </div>
                    <div className="flex-1 px-4 relative">
                      <div className="flex items-center justify-between absolute -left-2 -right-2 top-2">
                        <div className="w-3 h-3 rounded-full border-2 border-slate-400 bg-white z-10"></div>
                        <div className="flex-1 h-[2px] bg-slate-200"></div>
                        <div className="w-3 h-3 rounded-full border-2 border-slate-400 bg-white z-10"></div>
                      </div>
                      <div className="mt-6 text-xs text-slate-800 font-semibold mb-1">New Delhi</div>
                      <div className="text-[10px] text-slate-500 leading-tight">Indira Gandhi International Airport, Terminal T3</div>
                      <div className="text-xs text-slate-400 font-bold my-3 text-center">2h 55m</div>
                      <div className="text-xs text-slate-800 font-semibold mb-1">Bengaluru</div>
                      <div className="text-[10px] text-slate-500 leading-tight">Kempegowda International Airport Bengaluru, Terminal T1</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-5 text-[11px] font-bold text-slate-600">
                    <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded">
                      <FaSuitcase className="text-amber-600" /> Cabin Baggage: 7 Kgs (1 piece only) / Adult
                    </div>
                    <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded">
                      <FaSuitcase className="text-amber-600" /> Check-In Baggage: 15 Kgs (1 piece only) / Adult
                    </div>
                  </div>
                </div>

                <div className="bg-[#f0f9ff] border-t border-blue-100 p-3 px-5 flex items-center justify-between">
                  <div className="text-xs font-semibold text-blue-900 flex items-center gap-2">
                    <FaSuitcase className="text-blue-500" /> Got excess baggage? Don't stress, buy extra check-in baggage allowance for ₹644/kg at the airport.
                  </div>
                  <button className="text-xs font-bold text-blue-600 hover:underline uppercase tracking-wider">ADD BAGGAGE</button>
                </div>

                <div className="bg-[#fdf4ff] border-t border-fuchsia-100 p-2.5 px-5 flex items-center gap-2">
                  <div className="bg-fuchsia-600 text-white text-[10px] font-bold px-2 py-0.5 rounded">AI</div>
                  <span className="text-xs font-semibold text-fuchsia-900">Need a summary? Just ask Myra! <FaChevronRight className="inline text-[10px]" /></span>
                </div>
              </div>

              {/* CANCELLATION POLICY */}
              <div className="bg-white rounded shadow-sm border border-slate-200 p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#fdf4ff] border-b border-l border-fuchsia-100 p-2 pl-4 rounded-bl-xl flex items-center gap-2 cursor-pointer">
                  <span className="text-[11px] font-semibold text-fuchsia-900">Need a summary? Just ask Myra!</span> <FaChevronRight className="text-fuchsia-600 text-[10px]" />
                </div>

                <h3 className="font-black text-slate-900 flex items-center justify-between mb-4">
                  Cancellation & Date Change Policy
                  <span className="text-xs text-[#008cff] font-bold hover:underline cursor-pointer mr-64">View Policy</span>
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">DEL-BLR</span>
                </div>

                <div className="w-full text-xs">
                  <div className="flex justify-between text-slate-500 font-semibold mb-2">
                    <span>Cancellation Penalty:</span>
                    <span className="text-slate-900 font-bold">₹ 0</span>
                    <span className="text-slate-900 font-bold">₹ 3,349</span>
                    <span className="text-slate-900 font-bold">₹ 11,765</span>
                  </div>
                  <div className="relative h-1 bg-slate-200 rounded-full mb-2">
                    <div className="absolute left-0 w-[30%] h-full bg-emerald-500 rounded-full"></div>
                    <div className="absolute left-[30%] w-[40%] h-full bg-amber-500"></div>
                    <div className="absolute right-0 w-[30%] h-full bg-rose-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-bold text-slate-500">
                    <span>Cancel Between (IST):</span>
                    <span>Now</span>
                    <span>17 Jul<br />20:00</span>
                    <span>18 Jul<br />18:00</span>
                    <span>18 Jul<br />22:00</span>
                  </div>
                </div>
              </div>

              {/* ADD ONS - FLEXIBILITY */}
              <div className="bg-white rounded shadow-sm border border-slate-200 p-5">
                <h3 className="font-bold text-slate-900 text-sm mb-3">Unsure of your travel plans? Get full flexibility with our special add-ons</h3>

                <div className="border border-[#008cff] bg-[#008cff]/5 rounded-lg p-4 flex gap-4 relative">
                  <input type="radio" checked className="mt-1 accent-[#008cff]" readOnly />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div className="font-black text-slate-900 text-sm flex items-center gap-2">
                        Flexifly <span className="text-[9px] bg-slate-800 text-amber-400 px-1 rounded uppercase">Most Popular</span>
                      </div>
                      <div className="font-black text-slate-900">₹ 626</div>
                    </div>
                    <div className="text-[11px] font-bold text-slate-500 mt-1">Zero Cancellation or Date Change fee</div>
                    <div className="text-[10px] font-semibold mt-2 space-y-1">
                      <div className="text-emerald-700">Cancel: Get refund of up to ₹ 11,765 for cancelled flight up to 24 hours before departure</div>
                      <div className="text-blue-700">Change: zero date change charges up to 2 hours before departure. You pay only the fare difference. <span className="underline cursor-pointer">View T&C</span></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMPORTANT INFORMATION */}
              <div className="bg-white rounded shadow-sm border border-slate-200 p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#fdf4ff] border-b border-l border-fuchsia-100 p-2 px-4 rounded-bl-xl flex items-center gap-2 cursor-pointer">
                  <span className="text-[11px] font-semibold text-fuchsia-900">Get a quick summary. Just ask Myra!</span> <FaChevronRight className="text-fuchsia-600 text-[10px]" />
                </div>

                <h3 className="font-black text-slate-900 mb-5">Important Information</h3>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-rose-500 font-bold text-sm mb-1">
                      <FaInfoCircle /> Check-in guidelines and baggage information
                    </div>
                    <ul className="list-disc list-outside ml-6 text-xs text-slate-600 space-y-1">
                      <li>Carry no more than 1 check-in baggage and 1 hand baggage per passenger. If crossed, airline may levy extra charges.</li>
                      <li>Please note that check-in counters will close 60 minutes before departure and no additions may be allowed boarding.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-rose-500 font-bold text-sm mb-1">
                      <FaInfoCircle /> Availability of Boarding Pass
                    </div>
                    <ul className="list-disc list-outside ml-6 text-xs text-slate-600 space-y-1">
                      <li>Once web check-in is completed, your boarding pass will be available within 12 hours of your flight departure.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-rose-500 font-bold text-sm mb-1">
                      <FaInfoCircle /> Unaccompanied Minors Travelling
                    </div>
                    <ul className="list-disc list-outside ml-6 text-xs text-slate-600 space-y-1">
                      <li>An unaccompanied minor usually refers to a child traveling without an adult aged 18 or older.</li>
                      <li>Please check with the airline for their rules and regulations regarding unaccompanied minors, as these can differ between airlines.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* TRIP SECURE */}
              <div className="bg-white rounded shadow-sm border border-slate-200 p-5">
                <h3 className="font-black text-slate-900 mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-blue-500" /> Trip Secure
                </h3>

                <div className="font-black text-sm text-slate-900 mb-3">₹ 399 <span className="text-xs font-semibold text-slate-500 font-normal">/Traveller (18% GST included)</span></div>

                <div className="flex gap-4 mb-5">
                  <div className="flex-1 bg-slate-50 border border-slate-100 rounded p-3 flex gap-3 items-center">
                    <FaSuitcase className="text-[#008cff] text-xl" />
                    <div>
                      <div className="font-bold text-xs text-[#008cff]">24x7 Support</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Lost Baggage Assistance</div>
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-50 border border-slate-100 rounded p-3 flex gap-3 items-center">
                    <FaPlane className="text-emerald-500 text-xl" />
                    <div>
                      <div className="font-bold text-xs text-emerald-600">Up to ₹ 6,000</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Missed Flight</div>
                    </div>
                  </div>
                  <div className="flex-1 bg-slate-50 border border-slate-100 rounded p-3 flex gap-3 items-center">
                    <FaCheckCircle className="text-rose-500 text-xl" />
                    <div>
                      <div className="font-bold text-xs text-rose-600">Up to ₹ 4,000</div>
                      <div className="text-[10px] text-slate-500 font-semibold">Trip Cancellation</div>
                    </div>
                  </div>
                </div>

                <div className="bg-rose-50 text-rose-600 text-[10px] font-bold px-2 py-1 inline-block rounded mb-4">Recommended for your travel within India.</div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div onClick={() => setTripSecure("yes")} className={`w-4 h-4 rounded-full border flex items-center justify-center ${tripSecure === "yes" ? 'border-[#008cff]' : 'border-slate-300'}`}>
                      {tripSecure === "yes" && <div className="w-2 h-2 rounded-full bg-[#008cff]"></div>}
                    </div>
                    <span className="text-sm font-bold text-slate-900">Yes, Secure my trip.</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <div onClick={() => setTripSecure("no")} className={`w-4 h-4 rounded-full border flex items-center justify-center ${tripSecure === "no" ? 'border-[#008cff]' : 'border-slate-300'}`}>
                      {tripSecure === "no" && <div className="w-2 h-2 rounded-full bg-[#008cff]"></div>}
                    </div>
                    <span className="text-sm font-bold text-slate-700">No, I will book without trip secure.</span>
                  </label>
                </div>

                <div className="mt-6 text-[10px] text-slate-500 font-semibold border-t border-slate-100 pt-4">
                  Trip Secure is non-refundable. By selecting it, I confirm all travellers are Indian nationals aged 2 months to 70 years, and accept the <span className="text-[#008cff] underline cursor-pointer">T&Cs</span>
                </div>
              </div>

              {/* PRICE DROP PROTECTION */}
              <div className="bg-white rounded shadow-sm border border-slate-200 p-5 flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded flex items-center justify-center shrink-0">
                    <FaShieldAlt className="text-[#008cff] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-sm flex items-center gap-2">
                      Price Drop Protection <span className="bg-rose-100 text-rose-600 text-[9px] px-1 rounded">NEW</span>
                    </h3>
                    <div className="text-xs text-slate-600 font-semibold mt-1 mb-2">If the price drops after you book, we refund the difference.</div>
                    <div className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-1 inline-block rounded mb-2 border border-emerald-100">Use code FIRSTFLIGHT to get free Price Drop Protection & 200 OFF</div>
                    <div className="text-[10px] font-bold text-slate-500 flex items-center gap-1">
                      <FaInfoCircle className="text-amber-500" /> 1 in 5 fares tend to drop for bookings made at this time
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-black text-sm text-slate-900 mb-2">₹ 249 <span className="text-[10px] text-slate-500 font-semibold font-normal">/adult</span></div>
                  <button className="border border-[#008cff] text-[#008cff] font-bold text-[10px] px-3 py-1 rounded uppercase hover:bg-blue-50">ADD</button>
                </div>
              </div>

              {/* INDIGO FAST FORWARD */}
              <div className="bg-white rounded shadow-sm border border-slate-200 p-5 flex items-start justify-between">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded flex items-center justify-center shrink-0">
                    <FaSuitcase className="text-slate-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 text-sm">IndiGo Fast Forward</h3>
                    <div className="text-[11px] text-slate-500 font-semibold mt-1 mb-3">A service that provides you a hassle free and comfortable check-in experience at the airport with our priority check-in counter.</div>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-600">
                      <span className="flex items-center gap-1"><FaSuitcase className="text-slate-400" /> Priority Check-in</span>
                      <span className="flex items-center gap-1"><FaCheckCircle className="text-slate-400" /> Any Time Boarding</span>
                      <span>• ₹ 400</span>
                    </div>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <button className="border border-[#008cff] text-[#008cff] font-bold text-[10px] px-3 py-1 rounded uppercase hover:bg-blue-50">+ ADD</button>
                </div>
              </div>

              {/* TRAVELLER DETAILS */}
              <div className="bg-white rounded shadow-sm border border-slate-200">
                <div className="p-5 border-b border-slate-200 flex items-center gap-2">
                  <h3 className="font-black text-slate-900 text-lg">Traveller Details</h3>
                </div>

                <div className="p-5 space-y-5">
                  <div className="bg-[#f0f9ff] p-3 rounded flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <FaUser className="text-[#008cff]" /> Log in to view your saved traveller list, unlock amazing deals & much more!
                    </div>
                    <button className="text-[#008cff] font-bold text-xs uppercase hover:underline">LOGIN NOW</button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                      <FaUser className="text-slate-400" /> ADULT (12 yrs+)
                    </div>
                    <div className="text-xs font-bold text-slate-500">1/1 added</div>
                  </div>

                  <div className="bg-amber-50 p-3 rounded text-[11px] font-semibold text-slate-700 leading-relaxed border border-amber-100">
                    <span className="font-bold">Important:</span> Enter name as mentioned on your passport or Government approved IDs.<br />
                    Please ensure that the Frequent Flyer No entered here is against the same passenger name otherwise the points will not be updated by the airline.
                  </div>

                  <div className="border border-slate-200 rounded p-4 shadow-sm relative">
                    <label className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-4 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#008cff] accent-[#008cff]" />
                      ADULT 1
                    </label>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <input type="text" placeholder="First & Middle Name" defaultValue="sonu" className="border border-[#008cff] outline-none rounded p-2 text-sm font-semibold focus:ring-1 focus:ring-[#008cff]" />
                      <input type="text" placeholder="Last Name" className="border border-slate-300 outline-none rounded p-2 text-sm font-semibold focus:border-slate-400" />
                      <div className="flex rounded overflow-hidden border border-slate-300">
                        <div
                          onClick={() => setAdultGender('male')}
                          className={`flex-1 text-center py-2 text-xs font-bold cursor-pointer transition-colors ${adultGender === 'male' ? 'bg-[#008cff] text-white' : 'bg-white hover:bg-slate-50 text-slate-600'}`}
                        >
                          MALE
                        </div>
                        <div className="w-[1px] bg-slate-300"></div>
                        <div
                          onClick={() => setAdultGender('female')}
                          className={`flex-1 text-center py-2 text-xs font-bold cursor-pointer transition-colors ${adultGender === 'female' ? 'bg-[#008cff] text-white' : 'bg-white hover:bg-slate-50 text-slate-600'}`}
                        >
                          FEMALE
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                      <div>
                        <div className="text-[11px] font-semibold text-slate-600 mb-1">Country Code</div>
                        <select className="w-full border border-slate-300 outline-none rounded p-2 text-sm font-semibold focus:border-slate-400 bg-white">
                          <option>Country Code(Optional)</option>
                        </select>
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-slate-600 mb-1">Mobile No</div>
                        <input type="text" placeholder="Mobile No(Optional)" className="w-full border border-slate-300 outline-none rounded p-2 text-sm font-semibold focus:border-slate-400" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-slate-600 mb-1">Email</div>
                        <input type="email" placeholder="Email(Optional)" className="w-full border border-slate-300 outline-none rounded p-2 text-sm font-semibold focus:border-slate-400" />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-1 text-xs font-bold text-slate-800 mb-3 cursor-pointer">
                        <FaSuitcase className="text-slate-400" /> Frequent Flyer Number <span className="text-slate-500 font-semibold font-normal">(Avail extra benefits & earn points)</span> <FaAngleDown className="text-[#008cff]" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="text-[11px] font-semibold text-slate-600 mb-1">Frequent Flyer Airline</div>
                          <select className="w-full border border-slate-300 outline-none rounded p-2 text-sm font-semibold focus:border-slate-400 bg-white text-slate-400">
                            <option>Frequent Flyer Airline</option>
                          </select>
                        </div>
                        <div>
                          <div className="text-[11px] font-semibold text-slate-600 mb-1">Frequent Flyer No</div>
                          <input type="text" placeholder="Frequent Flyer No" className="w-full border border-slate-300 outline-none rounded p-2 text-sm font-semibold focus:border-slate-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <button className="text-[#008cff] font-bold text-xs uppercase hover:underline">+ ADD NEW ADULT</button>
                  </div>

                </div>

                <div className="bg-slate-50 border-t border-slate-200 p-5 space-y-4 rounded-b">
                  <h4 className="font-bold text-sm text-slate-900">Booking details will be sent to</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-[11px] font-semibold text-slate-600 mb-1">Country Code</div>
                      <select className="w-full border border-slate-300 outline-none rounded p-2 text-sm font-semibold focus:border-slate-400 bg-white">
                        <option>India(91)</option>
                      </select>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-600 mb-1">Mobile No</div>
                      <input type="text" placeholder="Mobile No" className="w-full border border-slate-300 outline-none rounded p-2 text-sm font-semibold focus:border-slate-400" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-600 mb-1">Email</div>
                      <input type="email" placeholder="Email" className="w-full border border-slate-300 outline-none rounded p-2 text-sm font-semibold focus:border-slate-400" />
                    </div>
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer mt-2">
                    <input type="checkbox" className="w-3.5 h-3.5 rounded text-[#008cff] accent-[#008cff]" />
                    <span className="text-xs font-semibold text-slate-700">I have a GST number <span className="text-slate-400">(Optional)</span></span>
                  </label>
                </div>
              </div>

              {/* YOUR STATE */}
              <div className="bg-white rounded shadow-sm border border-slate-200 p-5">
                <h3 className="font-black text-slate-900 text-sm mb-1">Your State <span className="font-semibold text-[11px] text-slate-500 font-normal ml-1">Required for GST purpose on your tax invoice. You can edit this anytime later in your profile section.</span></h3>

                <div className="w-64 mt-3 mb-4">
                  <select className="w-full border border-slate-300 outline-none rounded p-2 text-sm font-semibold focus:border-slate-400 bg-white">
                    <option>Rajasthan</option>
                  </select>
                </div>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-3.5 h-3.5 rounded text-[#008cff] accent-[#008cff]" />
                  <span className="text-xs font-semibold text-slate-700">Confirm and save billing details to your profile</span>
                </label>
              </div>

              {/* CONTINUE BUTTON */}
              <button
                onClick={() => setCurrentStep(2)}
                className="bg-[#008cff] hover:bg-blue-600 text-white font-black px-8 py-3 rounded-lg shadow-sm uppercase tracking-widest transition-colors text-sm"
              >
                CONTINUE
              </button>

              {/* ACCORDIONS */}
              <div className="space-y-2 mt-4 pb-20">
                <div className="bg-white rounded shadow-sm border border-slate-200 p-4 font-black text-slate-900 text-sm cursor-pointer hover:bg-slate-50 flex justify-between">Seats & Meals <FaAngleDown className="text-slate-400" /></div>
                <div className="bg-white rounded shadow-sm border border-slate-200 p-4 font-black text-slate-900 text-sm cursor-pointer hover:bg-slate-50 flex justify-between">Cabs <FaAngleDown className="text-slate-400" /></div>
                <div className="bg-white rounded shadow-sm border border-slate-200 p-4 font-black text-slate-900 text-sm cursor-pointer hover:bg-slate-50 flex items-center justify-between">
                  <div>Add-ons <span className="font-semibold text-xs text-slate-500 font-normal ml-2">Flight Delay Insurance, Airport Services, Baggage Courier Service</span></div>
                  <FaAngleDown className="text-slate-400" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">

              {/* Collapsed Accordions */}
              <div className="space-y-2 mb-4">
                {/* Trip Summary */}
                <div className="bg-white rounded shadow-sm border border-slate-200 p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => setCurrentStep(1)}>
                  <div>
                    <div className="font-black text-sm text-slate-900">Trip Summary</div>
                    <div className="text-xs font-semibold text-slate-500 mt-1">New Delhi → Bengaluru  Saturday, Jul 18 - Non Stop - 2h 55m</div>
                  </div>
                  <FaAngleDown className="text-slate-400" />
                </div>
                {/* Traveller Details */}
                <div className="bg-white rounded shadow-sm border border-slate-200 p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => setCurrentStep(1)}>
                  <div>
                    <div className="font-black text-sm text-slate-900 flex items-center gap-2">Traveller Details <span className="font-semibold text-xs text-slate-500 font-normal">Sonu Adf</span></div>
                  </div>
                  <FaPen className="text-[#008cff] text-xs" />
                </div>
                {/* Your State */}
                <div className="bg-white rounded shadow-sm border border-slate-200 p-4 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors" onClick={() => setCurrentStep(1)}>
                  <div className="font-black text-sm text-slate-900">Your State</div>
                  <FaPen className="text-[#008cff] text-xs" />
                </div>
              </div>

              {/* SEATS & MEALS SECTION */}
              <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden mb-4">
                <div className="flex border-b border-slate-200 bg-slate-50 text-sm font-bold text-slate-500">
                  <div
                    onClick={() => setActiveSeatTab("Seats")}
                    className={`flex items-center gap-2 px-6 py-4 cursor-pointer transition-colors ${activeSeatTab === "Seats" ? 'text-blue-600 bg-white border-b-2 border-blue-600' : 'hover:bg-slate-100'}`}
                  >
                    <FaTicketAlt className={activeSeatTab === "Seats" ? "text-amber-500" : ""} /> Seats
                  </div>
                  <div
                    onClick={() => setActiveSeatTab("Meals")}
                    className={`flex items-center gap-2 px-6 py-4 cursor-pointer transition-colors ${activeSeatTab === "Meals" ? 'text-blue-600 bg-white border-b-2 border-blue-600' : 'hover:bg-slate-100'}`}
                  >
                    <FaUtensils className={activeSeatTab === "Meals" ? "text-amber-500" : ""} /> Meals
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <div className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold px-4 py-2 rounded flex items-center gap-2 mb-4 shadow-sm">
                    <FaTicketAlt className="text-emerald-500" /> Use code SEATFREE to get a free seat (up to 350/passenger)
                  </div>

                  {/* Seat Map Header */}
                  <div className="bg-slate-50 p-4 flex justify-between items-center border border-slate-200 rounded-t shadow-sm">
                    <div>
                      <div className="font-black text-slate-900 text-sm">New Delhi → Bengaluru</div>
                      <div className="text-[10px] text-slate-500 font-semibold mt-0.5">1 of 1 Seat(s) Selected</div>
                    </div>
                    <div className="text-right">
                      <div className="font-black text-slate-900 text-sm">₹ 507</div>
                      <div className="text-[10px] text-slate-500 font-semibold mt-0.5">Added to fare</div>
                    </div>
                  </div>

                  {/* Seat Map Visual */}
                  <div className="bg-[#bce4f7] p-8 flex justify-center relative min-h-[550px] shadow-inner">

                    {/* Plane Body */}
                    <div className="w-[340px] bg-white rounded-t-[170px] relative shadow-lg pt-16 pb-12 border border-slate-200">

                      {/* Plane Nose Details */}
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex gap-6 opacity-80">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-5 bg-slate-700 rotate-[35deg] rounded-sm"></div>
                          <div className="w-2.5 h-5 bg-slate-700 rotate-[35deg] rounded-sm"></div>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-5 bg-slate-700 -rotate-[35deg] rounded-sm"></div>
                          <div className="w-2.5 h-5 bg-slate-700 -rotate-[35deg] rounded-sm"></div>
                        </div>
                      </div>

                      {/* Lavatory/Exit Line */}
                      <div className="flex justify-between px-8 text-slate-300 text-xs font-bold mt-12 mb-6 items-center">
                        <div className="text-rose-600 text-[10px] flex items-center gap-1 font-black">◀ EXIT</div>
                        <div className="w-6 h-6 border-2 border-slate-200 rounded flex items-center justify-center text-[10px]">🚻</div>
                        <div className="w-6 h-6 border-2 border-slate-200 rounded flex items-center justify-center text-[10px]">🚻</div>
                        <div className="text-rose-600 text-[10px] flex items-center gap-1 font-black">EXIT ▶</div>
                      </div>

                      {/* Column Headers */}
                      <div className="flex justify-between px-12 text-[10px] font-black text-slate-500 mb-3">
                        <div className="flex gap-4">
                          <div className="w-5 text-center">A</div>
                          <div className="w-5 text-center">B</div>
                          <div className="w-5 text-center">C</div>
                        </div>
                        <div className="flex gap-4">
                          <div className="w-5 text-center">D</div>
                          <div className="w-5 text-center">E</div>
                          <div className="w-5 text-center">F</div>
                        </div>
                      </div>

                      {/* Rows */}
                      <div className="px-6 space-y-1.5">
                        {[1, 2, 3, 4, 5, 6].map(row => (
                          <div key={row} className="flex justify-between items-center text-[10px] font-bold text-slate-500">
                            <div className="w-4 text-center">{row}</div>
                            <div className="flex gap-1.5">
                              <div className={`w-6 h-7 border rounded flex items-center justify-center cursor-pointer transition-colors ${row === 1 || row === 6 ? 'bg-purple-300 border-purple-400 hover:bg-purple-400' : 'bg-white border-slate-300 hover:bg-slate-100'} ${row === 6 && 'bg-purple-400 border-purple-500'}`}>
                                {row > 1 && row < 6 && <FaTimes className="text-slate-300 text-[10px]" />}
                              </div>
                              <div className={`w-6 h-7 border rounded flex items-center justify-center cursor-pointer transition-colors ${row === 1 || row === 6 ? 'bg-purple-300 border-purple-400 hover:bg-purple-400' : 'bg-white border-slate-300 hover:bg-slate-100'} ${row === 6 && 'bg-purple-400 border-purple-500'}`}>
                                {row > 1 && row < 6 && <FaTimes className="text-slate-300 text-[10px]" />}
                              </div>
                              <div className={`w-6 h-7 border rounded flex items-center justify-center cursor-pointer transition-colors ${row === 1 || row === 6 ? 'bg-purple-300 border-purple-400 hover:bg-purple-400' : 'bg-white border-slate-300 hover:bg-slate-100'} ${row === 6 && 'bg-purple-400 border-purple-500'}`}>
                                {row > 1 && row < 6 && <FaTimes className="text-slate-300 text-[10px]" />}
                              </div>
                            </div>
                            <div className="w-4"></div> {/* Aisle */}
                            <div className="flex gap-1.5">
                              <div className={`w-6 h-7 border rounded flex items-center justify-center cursor-pointer transition-colors ${row === 1 || row === 6 ? 'bg-purple-300 border-purple-400 hover:bg-purple-400' : 'bg-white border-slate-300 hover:bg-slate-100'}`}>
                                {row > 1 && row < 6 && <FaTimes className="text-slate-300 text-[10px]" />}
                              </div>
                              <div className={`w-6 h-7 border rounded flex items-center justify-center cursor-pointer transition-colors ${row === 1 || row === 6 ? 'bg-purple-300 border-purple-400 hover:bg-purple-400' : 'bg-white border-slate-300 hover:bg-slate-100'}`}>
                                {row > 1 && row < 6 && <FaTimes className="text-slate-300 text-[10px]" />}
                              </div>
                              <div className={`w-6 h-7 border rounded flex items-center justify-center cursor-pointer transition-colors ${row === 1 || row === 6 ? 'bg-purple-300 border-purple-400 hover:bg-purple-400' : 'bg-white border-slate-300 hover:bg-slate-100'}`}>
                                {row > 1 && row < 6 && <FaTimes className="text-slate-300 text-[10px]" />}
                              </div>
                            </div>
                            <div className="w-4 text-center">{row}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Legend (Left Side Absolute) */}
                    <div className="absolute left-6 bottom-6 bg-white p-5 rounded shadow-lg border border-slate-200 text-[10px] font-bold text-slate-600 space-y-3">
                      <div className="flex items-center gap-3"><div className="w-4 h-4 bg-emerald-300 rounded shadow-sm"></div> Free</div>
                      <div className="flex items-center gap-3"><div className="w-4 h-4 bg-blue-200 rounded shadow-sm"></div> ₹ 301-507</div>
                      <div className="flex items-center gap-3"><div className="w-4 h-4 bg-purple-300 rounded shadow-sm"></div> ₹ 529-1009</div>
                      <div className="flex items-center gap-3"><div className="w-4 h-4 border border-rose-500 rounded relative shadow-sm"><div className="absolute top-0 right-0 w-1.5 h-1.5 bg-rose-500 rounded-bl"></div></div> Exit Row Seats</div>
                      <div className="flex items-center gap-3"><div className="w-4 h-4 bg-white border border-slate-300 rounded shadow-sm"></div> Non Reclining</div>
                      <div className="flex items-center gap-3"><div className="w-4 h-4 bg-white border border-slate-300 rounded shadow-sm text-[8px] flex items-center justify-center font-black">XL</div> Extra Legroom</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <button className="bg-[#008cff] hover:bg-blue-600 text-white font-black px-12 py-3 rounded-lg shadow-md uppercase tracking-widest transition-colors text-sm">
                  CONTINUE
                </button>
                <div className="text-xs font-bold text-[#008cff] hover:underline cursor-pointer">Skip to cabs</div>
              </div>

              {/* Accordions */}
              <div className="space-y-2 pb-20 mt-4">
                <div className="bg-white rounded shadow-sm border border-slate-200 p-4 font-black text-slate-900 text-sm cursor-pointer hover:bg-slate-50 transition-colors flex justify-between">Cabs <FaAngleDown className="text-slate-400" /></div>
                <div className="bg-white rounded shadow-sm border border-slate-200 p-4 font-black text-slate-900 text-sm cursor-pointer hover:bg-slate-50 transition-colors flex items-center justify-between">
                  <div>Add-ons <span className="font-semibold text-xs text-slate-500 font-normal ml-2">Flight Delay Insurance, Airport Services, Baggage Courier Service</span></div>
                  <FaAngleDown className="text-slate-400" />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-[320px] shrink-0 space-y-4">

          {/* FARE SUMMARY */}
          <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 p-4">
              <h3 className="font-black text-slate-900">Fare Summary</h3>
            </div>

            <div className="p-4 space-y-4 text-sm font-bold text-slate-800">
              <div className="flex justify-between items-center cursor-pointer">
                <span className="flex items-center gap-2 text-slate-600"><FaMinusCircle className="text-[10px] text-slate-400" /> Base Fare</span>
                <span>₹ 13,421</span>
              </div>
              <div className="flex justify-between items-center cursor-pointer">
                <span className="flex items-center gap-2 text-slate-600"><FaMinusCircle className="text-[10px] text-slate-400" /> Taxes and Surcharges</span>
                <span>₹ 1,364</span>
              </div>
              <div className="flex justify-between items-center cursor-pointer">
                <span className="flex items-center gap-2 text-slate-600"><FaMinusCircle className="text-[10px] text-slate-400" /> Other Services</span>
                <span>₹ 626</span>
              </div>
              <div className="flex justify-between items-center text-emerald-600 cursor-pointer">
                <span className="flex items-center gap-2"><FaMinusCircle className="text-[10px] text-emerald-400" /> Discounts</span>
                <span>- ₹ 654</span>
              </div>
            </div>

            <div className="border-t border-slate-200 p-4 flex justify-between items-center">
              <span className="font-black text-lg text-slate-900">Total Amount</span>
              <span className="font-black text-lg text-slate-900">₹ 12,391</span>
            </div>
          </div>

          {/* COUPONS AND OFFERS */}
          <div className="bg-white rounded shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-amber-100/50 p-4 border-b border-amber-200 flex justify-between items-center relative overflow-hidden">
              {/* Pattern background */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,_#fbbf24_1px,_transparent_0)] bg-[size:10px_10px]"></div>
              <h3 className="font-black text-slate-900 relative z-10">Coupons and Offers</h3>
              <div className="relative z-10 text-3xl">🎁</div>
            </div>

            <div className="p-4 space-y-4">
              <div className="flex">
                <input type="text" placeholder="Enter coupon code" className="flex-1 border border-slate-300 rounded-l px-3 py-2 text-sm font-semibold outline-none focus:border-[#008cff] uppercase placeholder-normal" />
              </div>

              <div className="flex bg-white rounded border border-slate-200 overflow-hidden font-bold text-xs">
                <div className="flex-1 text-center py-2 bg-blue-50 border-r border-slate-200 text-[#008cff] cursor-pointer">All</div>
                <div className="flex-1 text-center py-2 border-r border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer">Bank</div>
                <div className="flex-1 text-center py-2 text-slate-600 hover:bg-slate-50 cursor-pointer">Add-ons</div>
              </div>

              <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
                {/* Coupon 1 */}
                <div className="border border-emerald-500 rounded p-3 relative cursor-pointer hover:shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2 font-black text-sm text-slate-900">
                      <FaCheckCircle className="text-emerald-500" /> MMTSECURE
                    </div>
                    <div className="text-emerald-600 font-bold text-xs">₹ 654 off</div>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 pr-10">Get an instant discount of ₹ 654 on your flight booking and Trip Secure combo</div>
                  <div className="absolute bottom-3 right-3 text-[#008cff] font-bold text-xs uppercase cursor-pointer hover:underline">Apply</div>
                </div>

                {/* Coupon 2 */}
                <div className="border border-slate-200 rounded p-3 relative cursor-pointer hover:border-slate-300">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2 font-black text-sm text-slate-900">
                      <div className="w-4 h-4 bg-rose-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold italic">i</div> ICICIEMI
                    </div>
                    <div className="text-emerald-600 font-bold text-xs">₹ 1,471 off</div>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 pr-10">Get ₹ 1,471 Instant Discount on ICICI bank Credit Card EMI paymode.</div>
                  <div className="absolute bottom-3 right-3 text-[#008cff] font-bold text-xs uppercase cursor-pointer hover:underline">Apply</div>
                </div>

                {/* Coupon 3 */}
                <div className="border border-slate-200 rounded p-3 relative cursor-pointer hover:border-slate-300">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2 font-black text-sm text-slate-900">
                      <div className="w-4 h-4 bg-red-600 text-white flex items-center justify-center text-[8px] font-bold rounded">HSBC</div> MMTHSBC
                    </div>
                    <div className="text-emerald-600 font-bold text-xs">₹ 1,471 off</div>
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 pr-10">Get FLAT 12% discount on your flight booking with HSBC Credit Cards</div>
                  <div className="absolute bottom-3 right-3 text-[#008cff] font-bold text-xs uppercase cursor-pointer hover:underline">Apply</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
