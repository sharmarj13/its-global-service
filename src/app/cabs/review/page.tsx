"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaPlane, FaHotel, FaHome, FaTrain, FaBus, FaCar, FaCcVisa, FaMoneyBillWave, FaSuitcase,
  FaRobot, FaCheckCircle, FaInfoCircle, FaStar, FaThumbsUp, FaMapMarkerAlt, FaCheck, FaShieldAlt, FaLock
} from "react-icons/fa";
import Navbar from "@/components/Navbar";

export default function CabReviewBooking() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("cab");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<string | null>(null);
  const [paymentOption, setPaymentOption] = useState<"part" | "full">("full");
  const [showFareBreakup, setShowFareBreakup] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16 text-slate-800">

      {/* Top Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={isLoggedIn}
        username={null}
        onLoginClick={() => setIsLoggedIn(true)}
        onLogout={() => setIsLoggedIn(false)}
        onSupportClick={() => { }}
      />

      {/* Review Booking Banner */}
      <div className="bg-gradient-to-r from-[#0a1930] via-[#0f294d] to-[#0a1930] text-white pt-28 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
        <div className="absolute -bottom-10 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 animate-slide-up">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-2">Review Your Booking</h1>
          <p className="text-blue-100 font-medium text-sm">Please verify your itinerary details before proceeding to payment.</p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-6 items-start">

          {/* Left Column (Main Details) */}
          <div className="flex-1 w-full flex flex-col gap-6">

            {/* Trip Details Card */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 overflow-hidden animate-slide-up hover:border-blue-100 transition-all duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">Outstation Round Trip</div>
                  <div className="flex items-center gap-2 text-sm font-bold text-primary bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 shadow-sm">
                    <span>📅</span> 18 Jul, 10:00 AM - 18 Jul
                  </div>
                </div>

                <div className="flex items-center text-lg font-black text-slate-900 mb-2">
                  <span>Mumbai</span>
                  <span className="mx-4 text-slate-300">›</span>
                  <span>Pune</span>
                  <span className="mx-4 text-slate-300">›</span>
                  <span>Mumbai</span>
                </div>
                <div className="flex items-center text-xs font-medium text-slate-500 mb-6">
                  <FaMapMarkerAlt className="mr-1 opacity-50" />
                  <span>Mumbai, Maharashtra</span>
                  <span className="mx-4 opacity-0">›</span>
                  <FaMapMarkerAlt className="mr-1 opacity-50" />
                  <span>Pune, Maharashtra</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 border-t border-slate-100 pt-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-black text-slate-800">Toyota Innova</h3>
                      <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">4.4/5 <FaStar className="text-[10px]" /></span>
                      <span className="text-xs text-primary font-bold cursor-pointer hover:underline">261 reviews</span>
                    </div>
                    <div className="text-xs font-medium text-slate-500 mb-3">or similar equivalent</div>
                    <div className="flex gap-2">
                      <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-md">SUV</span>
                      <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-md">AC</span>
                      <span className="bg-slate-100 text-slate-700 text-xs font-bold px-3 py-1 rounded-md">6 Seats</span>
                    </div>
                  </div>
                  <div className="w-full sm:w-40 flex flex-col items-center justify-center bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <img src="https://promos.makemytrip.com/images/50x50-O-SUV-23052019.png" alt="car" className="w-28 h-auto object-contain drop-shadow-md transition-transform hover:scale-105" />
                    <span className="bg-orange-500 text-white text-[10px] font-black px-4 py-1 rounded-full mt-3 shadow-sm uppercase tracking-wider">Diesel</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50/50 border-t border-amber-100/50 p-4 flex gap-3 items-start text-sm font-medium text-slate-700">
                <FaInfoCircle className="text-amber-500 mt-1 flex-shrink-0 text-lg" />
                <span>Cab and driver details will be shared up to 30 mins prior to departure via SMS and Email.</span>
              </div>
            </div>

            {/* Top Rated Partner Banner */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-sm border border-blue-100 p-4 flex flex-col sm:flex-row justify-between items-center px-6 gap-4">
              <div>
                <div className="text-sm font-black text-slate-800 mb-1 flex items-center gap-2">
                  <FaStar className="text-amber-500" /> Our Top Rated Partner
                </div>
                <div className="text-xs font-medium text-slate-600">India's Leading Outstation Cab Rentals Since 2006</div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl shadow-sm border border-blue-100/50">
                <span className="text-primary font-black italic text-sm">SAVAARI</span>
                <div className="w-px h-6 bg-slate-200"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/MakeMyTrip_Logo.svg/2560px-MakeMyTrip_Logo.svg.png" className="h-5 opacity-80" alt="logo" />
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs text-emerald-600 font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                    <FaCheckCircle /> INCLUSIONS
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0"><span className="text-emerald-600 text-lg">🛣️</span></div>
                      <div>
                        <div className="text-sm font-bold text-slate-800">300 Km included</div>
                        <div className="text-xs font-medium text-slate-500 mt-0.5">₹20.0/km will apply beyond the included kms</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0"><span className="text-emerald-600 text-lg">👨‍✈️</span></div>
                      <div>
                        <div className="text-sm font-bold text-slate-800">Driver allowance</div>
                        <div className="text-xs font-medium text-slate-500 mt-0.5">Driver food and accommodation charges are included</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0"><span className="text-emerald-600 text-lg">⏳</span></div>
                      <div>
                        <div className="text-sm font-bold text-slate-800 flex items-center gap-1">Waiting time upto 45 mins <FaInfoCircle className="text-slate-400 cursor-pointer hover:text-primary transition-colors text-xs" /></div>
                        <div className="text-xs font-medium text-slate-500 mt-0.5">₹100/30 mins post 45 mins</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0"><span className="text-emerald-600 text-lg">⛽</span></div>
                      <div>
                        <div className="text-sm font-bold text-slate-800">Fuel charges included</div>
                        <div className="text-xs font-medium text-slate-500 mt-0.5">Fuel cost for your trip is included in the fare</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-rose-500 font-black uppercase tracking-widest mb-5 flex items-center gap-2">
                    <FaInfoCircle /> EXCLUSIONS
                  </div>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center flex-shrink-0 text-rose-500 text-lg">📑</div>
                      <div>
                        <div className="text-sm font-bold text-slate-800">Toll and other charges</div>
                        <div className="text-xs font-medium text-slate-500 mt-0.5">Toll (₹640 Approx), Parking charges are not included</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 mt-8 pt-6">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 text-primary border border-blue-100">
                    <FaRobot className="text-xl" />
                  </div>
                  <div className="bg-slate-50 text-slate-700 border border-slate-200 rounded-full px-5 py-2 text-xs font-bold cursor-pointer hover:bg-blue-50 hover:text-primary hover:border-blue-200 transition-colors shadow-sm">
                    Luggage capacity?
                  </div>
                  <div className="bg-slate-50 text-slate-700 border border-slate-200 rounded-full px-5 py-2 text-xs font-bold cursor-pointer hover:bg-blue-50 hover:text-primary hover:border-blue-200 transition-colors shadow-sm">
                    Till when can I keep the cab?
                  </div>
                  <div className="bg-slate-50 text-slate-700 border border-slate-200 rounded-full px-5 py-2 text-xs font-bold cursor-pointer hover:bg-blue-50 hover:text-primary hover:border-blue-200 transition-colors shadow-sm">
                    More queries? Ask AI Myra
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-black text-slate-900 mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-emerald-500" /> Cancellation Policy
              </h2>
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center justify-between mb-4">
                <div>
                  <span className="font-black text-emerald-700">Free cancellation until</span> 
                  <span className="font-bold text-slate-800 ml-2">9:00 AM, Sat 18 Jul</span>
                </div>
                <span className="text-xs font-bold text-slate-500 bg-white px-3 py-1 rounded-md border border-slate-200">1 hr before pickup</span>
              </div>
              <div className="text-primary font-bold text-sm cursor-pointer hover:underline flex items-center justify-between">
                <span>View Full Cancellation Policy</span>
                <span>›</span>
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-black text-slate-900 mb-6">Customer Reviews</h2>
              
              <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-8 bg-slate-50 p-6 rounded-xl border border-slate-100">
                <div className="bg-indigo-600 text-white flex flex-col items-center justify-center w-24 h-24 rounded-2xl shadow-lg shadow-indigo-600/20">
                  <div className="text-4xl font-black">4.4</div>
                  <div className="text-[10px] font-bold tracking-widest mt-1 uppercase opacity-90">Excellent</div>
                </div>
                
                <div className="flex-1 w-full space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                      <span>Driver Rating</span>
                      <span>4.4 / 5</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full w-[88%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-700 mb-1.5">
                      <span>Cab Condition</span>
                      <span>4.4 / 5</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 rounded-full w-[88%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sm font-black text-slate-800 mb-4">Recent Reviews</div>
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                <span className="border border-blue-200 bg-blue-50 text-primary rounded-full px-4 py-1.5 text-xs font-bold cursor-pointer whitespace-nowrap">Good Experience (124)</span>
                <span className="border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 rounded-full px-4 py-1.5 text-xs font-bold cursor-pointer whitespace-nowrap">Clean Cab (89)</span>
                <span className="border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 rounded-full px-4 py-1.5 text-xs font-bold cursor-pointer whitespace-nowrap">Professional Driver (76)</span>
              </div>

              <div className="space-y-6">
                <div className="border border-slate-100 bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-bold text-slate-900 text-sm">
                      Keshav Agrawal <span className="text-slate-400 font-normal mx-2">•</span> <span className="text-slate-500 font-medium text-xs">booked Toyota Innova</span>
                    </div>
                    <span className="bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-black px-2 py-1 rounded-md flex items-center gap-1">4.5 <FaStar className="text-[10px]" /></span>
                  </div>
                  <div className="text-xs font-medium text-slate-400 mb-3">08 Jul 2024</div>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    "The driver was smooth and everything was good. Highly recommend this for outstation trips."
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-primary text-sm font-black cursor-pointer text-center hover:underline bg-slate-50 py-3 rounded-xl border border-slate-100">
                Read all 261 reviews
              </div>
            </div>

            {/* Special Requests */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-black text-slate-900 mb-6">Special Requests <span className="text-sm font-medium text-slate-500 ml-2">(Optional)</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <label className="border border-slate-200 rounded-xl p-4 flex gap-4 cursor-pointer hover:border-primary hover:shadow-md transition-all group relative overflow-hidden">
                  <input type="checkbox" className="mt-1 w-5 h-5 border-slate-300 rounded text-primary focus:ring-primary focus:ring-offset-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <div className="text-sm font-black text-slate-800 group-hover:text-primary transition-colors">Roof Carrier</div>
                      <div className="text-sm font-black text-slate-900">₹ 262</div>
                    </div>
                    <div className="text-xs font-medium text-slate-500">Add Roof Carrier to fit 6 more bags</div>
                  </div>
                </label>

                <label className="border border-slate-200 rounded-xl p-4 flex gap-4 cursor-pointer hover:border-primary hover:shadow-md transition-all group relative overflow-hidden">
                  <input type="checkbox" className="mt-1 w-5 h-5 border-slate-300 rounded text-primary focus:ring-primary focus:ring-offset-0" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <div className="text-sm font-black text-slate-800 group-hover:text-primary transition-colors">Drivers Language</div>
                      <div className="text-sm font-black text-slate-900">₹ 209</div>
                    </div>
                    <div className="text-xs font-medium text-slate-500">Choose your preferred language for a smoother ride.</div>
                  </div>
                </label>

              </div>
            </div>

            {/* Traveller Details */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-black text-slate-900 mb-6">Traveller Details</h2>

              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-8">
                <div className="text-sm font-black text-slate-800 mb-3 flex items-center gap-2"><FaMapMarkerAlt className="text-primary" /> Exact Pickup Location</div>
                <div className="bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
                  <input type="text" placeholder="E.g. House No. 42, Bandra West..." className="bg-transparent w-full px-4 py-3 outline-none text-sm font-bold placeholder:text-slate-400 text-slate-800" />
                </div>
              </div>

              <div className="text-sm font-black text-slate-800 mb-4">Contact Details</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                  <div className="text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider px-1">Full Name</div>
                  <input type="text" placeholder="John Doe" className="bg-transparent w-full outline-none text-sm font-bold text-slate-800 px-1" />
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 relative focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                  <div className="text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider px-1">Gender</div>
                  <select className="bg-transparent w-full outline-none text-sm font-bold text-slate-800 appearance-none cursor-pointer px-1">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex gap-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                  <div className="flex flex-col border-r border-slate-300 pr-3 justify-center">
                    <div className="flex items-center gap-1 text-sm font-black text-slate-800 cursor-pointer">
                      +91 <span className="text-[10px]">▼</span>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <div className="text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider">Mobile Number</div>
                    <input type="text" placeholder="9876543210" className="bg-transparent w-full outline-none text-sm font-bold text-slate-800" />
                  </div>
                </div>
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                  <div className="text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider px-1">Email ID</div>
                  <input type="email" placeholder="john@example.com" className="bg-transparent w-full outline-none text-sm font-bold text-slate-800 px-1" />
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="h-px bg-slate-200 flex-1"></div>
                <div className="text-xs font-bold text-slate-400 uppercase">Or</div>
                <div className="h-px bg-slate-200 flex-1"></div>
              </div>
              
              <div className="flex justify-center mb-8">
                <button className="text-primary bg-blue-50 hover:bg-blue-100 border border-blue-200 text-xs font-black px-6 py-2.5 rounded-full uppercase transition-colors flex items-center gap-2 shadow-sm">
                  <FaCheckCircle className="text-base" /> Log Into Existing Account
                </button>
              </div>

              <label className="flex items-center gap-3 cursor-pointer mb-6 bg-slate-50 p-4 rounded-xl border border-slate-100 hover:border-slate-300 transition-colors">
                <input type="checkbox" defaultChecked className="w-5 h-5 border-slate-300 rounded text-primary focus:ring-primary" />
                <span className="text-sm text-slate-800 font-bold">Use pickup location as billing address</span>
              </label>

              <div className="text-xs font-medium text-slate-500 text-center px-4">
                By proceeding to book, I agree to ITS Global's <span className="text-primary font-bold cursor-pointer hover:underline">Privacy Policy</span>, <span className="text-primary font-bold cursor-pointer hover:underline">Terms of Service</span>, & <span className="text-primary font-bold cursor-pointer hover:underline">Cancellation Rules</span>.
              </div>
            </div>

          </div>

          {/* Right Column (Sidebar) */}
          <div className="w-full lg:w-[380px] flex-shrink-0 flex flex-col gap-6 sticky top-28">

            {/* Coupon & Offers */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-6">
              <h2 className="text-lg font-black text-slate-900 mb-5">Coupons & Offers</h2>

              <div className="space-y-4 mb-6">
                <label className="flex items-start gap-4 cursor-pointer group bg-slate-50 hover:bg-blue-50/50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-all">
                  <input
                    type="radio"
                    name="coupon"
                    className="mt-1 w-5 h-5 border-slate-300 text-primary focus:ring-primary"
                    onChange={() => setSelectedCoupon("MMTDEAL")}
                    checked={selectedCoupon === "MMTDEAL"}
                  />
                  <div>
                    <div className="bg-emerald-100 border border-emerald-200 rounded-md px-2 py-1 text-xs font-black text-emerald-700 mb-2 inline-flex items-center gap-1 shadow-sm">
                      <span className="text-emerald-600">🏷️</span> MMTDEAL
                    </div>
                    <div className="text-sm font-medium text-slate-700">Get flat <strong className="text-slate-900">₹120 off</strong> on your cab booking!</div>
                  </div>
                </label>

                <label className="flex items-start gap-4 cursor-pointer group bg-slate-50 hover:bg-blue-50/50 p-4 rounded-xl border border-slate-100 hover:border-blue-200 transition-all">
                  <input
                    type="radio"
                    name="coupon"
                    className="mt-1 w-5 h-5 border-slate-300 text-primary focus:ring-primary"
                    onChange={() => setSelectedCoupon("MEGASALE")}
                    checked={selectedCoupon === "MEGASALE"}
                  />
                  <div>
                    <div className="bg-blue-100 border border-blue-200 rounded-md px-2 py-1 text-xs font-black text-blue-700 mb-2 inline-flex items-center gap-1 shadow-sm">
                      <span className="text-blue-600">🏷️</span> MEGA SALE
                    </div>
                    <div className="text-sm font-medium text-slate-700">Save <strong className="text-slate-900">₹240 instantly</strong>. Hurry, limited time offer!</div>
                  </div>
                </label>
              </div>

              <div className="relative">
                <input type="text" placeholder="Enter Coupon Code" className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-4 pr-20 text-sm font-bold text-slate-800 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all uppercase placeholder:normal-case" />
                <button className="absolute right-2 top-2 bottom-2 bg-slate-800 text-white text-xs font-black px-4 rounded-lg hover:bg-slate-900 transition-colors">APPLY</button>
              </div>
            </div>

            {/* Payment options & Fare Breakup */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/40 border border-slate-100 p-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-lg font-black text-slate-900 mb-5">Payment Options</h2>

              <div className="space-y-4 mb-8">
                <label className="flex items-center justify-between cursor-pointer group bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-primary transition-all">
                  <div className="flex gap-4 items-center">
                    <input
                      type="radio"
                      name="payment"
                      className="w-5 h-5 border-slate-300 text-primary focus:ring-primary"
                      onChange={() => setPaymentOption("part")}
                      checked={paymentOption === "part"}
                    />
                    <div>
                      <div className="text-sm font-black text-slate-800">Part Pay</div>
                      <div className="text-xs font-medium text-slate-500 mt-0.5">Pay rest to the driver</div>
                    </div>
                  </div>
                  <div className="text-base font-black text-slate-900">₹ 1,429</div>
                </label>

                <label className="flex items-center justify-between cursor-pointer group bg-blue-50/50 p-4 rounded-xl border border-blue-200 hover:border-primary transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-black px-2 py-0.5 rounded-bl-lg">RECOMMENDED</div>
                  <div className="flex gap-4 items-center">
                    <input
                      type="radio"
                      name="payment"
                      className="w-5 h-5 border-slate-300 text-primary focus:ring-primary"
                      onChange={() => setPaymentOption("full")}
                      checked={paymentOption === "full"}
                    />
                    <div>
                      <div className="text-sm font-black text-slate-800">Full Pay</div>
                      <div className="text-xs font-medium text-slate-500 mt-0.5">No hidden charges</div>
                    </div>
                  </div>
                  <div className="text-base font-black text-slate-900">₹ 6,763</div>
                </label>
              </div>

              <div className="pt-5 border-t border-slate-100 mb-6">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-600 font-bold text-sm">Total Amount</span>
                  <span className="text-2xl font-black text-slate-900">₹ {paymentOption === "full" ? "6,763" : "1,429"}</span>
                </div>
                <div className="text-xs font-medium text-slate-500 text-right">Includes all taxes and fees</div>
              </div>

              <button 
                onClick={() => router.push('/payment')} 
                className="w-full bg-primary hover:bg-blue-700 text-white font-black text-base py-4 rounded-xl shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 uppercase tracking-wider mb-5 flex justify-center items-center gap-2"
              >
                <FaLock /> Proceed to Pay
              </button>

              <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                <div
                  className="bg-slate-100 px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-slate-200 transition-colors"
                  onClick={() => setShowFareBreakup(!showFareBreakup)}
                >
                  <span className="text-sm font-bold text-slate-800">View Fare Breakup</span>
                  <span className="text-slate-500 text-xs">{showFareBreakup ? "▲" : "▼"}</span>
                </div>

                {showFareBreakup && (
                  <div className="p-4 space-y-3 text-sm animate-fade-in">
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>Base Fare</span>
                      <span>₹ 6,000</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-slate-500">
                      <span>Cab & Fuel</span>
                      <span>₹ 6,000</span>
                    </div>

                    <div className="h-px bg-slate-200 my-2"></div>

                    <div className="flex justify-between font-bold text-slate-800">
                      <span>Taxes & Fees</span>
                      <span>₹ 763</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-slate-500">
                      <span>Driver Allowance</span>
                      <span>₹ 350</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-slate-500">
                      <span>GST (5%)</span>
                      <span>₹ 318</span>
                    </div>
                    <div className="flex justify-between text-xs font-medium text-slate-500">
                      <span>Service Fee</span>
                      <span>₹ 95</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Floating Assistant Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-full shadow-2xl p-2 flex items-center gap-3 pr-5 cursor-pointer border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all group">
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 group-hover:bg-primary transition-colors">
            <FaRobot className="text-primary group-hover:text-white text-2xl transition-colors" />
          </div>
          <span className="text-slate-800 font-black text-sm pr-1">Need help?</span>
        </div>
      </div>

    </div>
  );
}
