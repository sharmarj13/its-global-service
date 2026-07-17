"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaPlane, FaHotel, FaHome, FaTrain, FaBus, FaCar, FaCcVisa, FaMoneyBillWave, FaSuitcase,
  FaRobot, FaCheckCircle, FaInfoCircle, FaStar, FaThumbsUp
} from "react-icons/fa";
import Navbar from "@/components/Navbar";

const navItems = [
  { icon: FaPlane, label: "Flights", id: "flights" },
  { icon: FaHotel, label: "Hotels", id: "hotels" },
  { icon: FaHome, label: "Homesta...", id: "homestays" },
  { icon: FaSuitcase, label: "Holiday P...", id: "holidays" },
  { icon: FaTrain, label: "Trains", id: "trains" },
  { icon: FaBus, label: "Buses", id: "buses" },
  { icon: FaCar, label: "Cabs", id: "cabs", active: true },
  { icon: FaCcVisa, label: "Visa", id: "visa" },
  { icon: FaMoneyBillWave, label: "Forex Ca...", id: "forex" },
  { icon: FaSuitcase, label: "Travel Ins...", id: "insurance" },
];

export default function CabReviewBooking() {
  const [activeTab, setActiveTab] = useState("cab");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<string | null>(null);
  const [paymentOption, setPaymentOption] = useState<"part" | "full">("full");
  const [showFareBreakup, setShowFareBreakup] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f1f8] via-[#f4f7fb] to-[#F2F2F2] font-sans pb-10 text-slate-800">

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
      <div className="bg-gradient-to-r from-[#0a1930] via-[#0f294d] to-[#0a1930] text-white pt-32 pb-12 px-8 mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto relative z-10 animate-slide-up">
          <h1 className="text-[32px] font-black tracking-tight">Review booking</h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto flex gap-5 px-4 items-start">

        {/* Left Column (Main Details) */}
        <div className="flex-[0.72] flex flex-col gap-5">

          {/* Trip Details Card */}
          <div className="bg-white rounded-xl shadow-lg shadow-slate-200/40 border border-[#e5e5e5] overflow-hidden animate-slide-up hover:shadow-xl hover:border-blue-100 transition-all duration-300">
            <div className="p-5">
              <div className="text-[13px] text-slate-500 mb-2">Outstation Round Trip</div>

              <div className="flex items-center text-sm font-bold text-slate-900 mb-1">
                <span className="text-base">Mumbai</span>
                <span className="mx-3 text-slate-400">›</span>
                <span className="text-base">Pune</span>
                <span className="mx-3 text-slate-400">›</span>
                <span className="text-base">Mumbai</span>
              </div>
              <div className="flex items-center text-[11px] text-slate-500 mb-4">
                <span>Mumbai, Maharashtra</span>
                <span className="mx-[30px] opacity-0">›</span>
                <span>Pune, Maharashtra</span>
                <span className="mx-[30px] opacity-0">›</span>
                <span>Mumbai, Maharashtra</span>
              </div>

              <div className="flex items-center gap-2 text-[13px] font-semibold text-slate-700 bg-slate-50 border border-slate-100 rounded px-3 py-1.5 w-max mb-6">
                <span>📅</span> 18 Jul, 10:00 AM - 18 Jul
              </div>

              <div className="flex gap-6 border-t border-slate-100 pt-5">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-black text-slate-800">Toyota Innova</h3>
                    <span className="bg-[#008cff] text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">4.4/5 <FaStar className="text-[8px]" /></span>
                    <span className="text-[11px] text-[#008cff] font-semibold underline">261 reviews</span>
                  </div>
                  <div className="text-[11px] text-slate-500 mb-2">or similar</div>
                  <div className="text-[13px] text-slate-600 font-medium">SUV • AC • 6 Seats</div>
                </div>
                <div className="w-32 flex flex-col items-center">
                  <img src="https://promos.makemytrip.com/images/50x50-O-SUV-23052019.png" alt="car" className="w-24 h-auto object-contain" />
                  <span className="bg-[#d17f28] text-white text-[10px] font-bold px-4 py-0.5 rounded-full mt-2 inline-block">Diesel</span>
                </div>
              </div>
            </div>

            <div className="bg-[#fff9e5] border-t border-[#f2e6b3] p-3 flex gap-2 items-start text-[12px] text-slate-700">
              <FaInfoCircle className="text-[#d19a30] mt-0.5" />
              <span>Cab and driver details will be shared up to 30 mins prior to departure</span>
            </div>
          </div>

          {/* Top Rated Partner Banner */}
          <div className="bg-[#eaf5ff] rounded shadow-sm border border-[#b8e8ff] p-3 flex justify-between items-center px-6">
            <div>
              <div className="text-sm font-bold text-slate-800 mb-0.5">Our Top Rated Partner</div>
              <div className="text-[11px] text-slate-500">India's Leading Outstation Cab Rentals Since 2006</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-[#008cff] text-white font-black italic px-3 py-1 rounded text-sm">SAVAARI</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/MakeMyTrip_Logo.svg/2560px-MakeMyTrip_Logo.svg.png" className="h-4" alt="logo" />
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="bg-white rounded shadow-sm border border-[#e5e5e5] p-5 pb-4">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">INCLUSIONS</div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 flex justify-center"><span className="text-[#24963f] text-lg">🛣️</span></div>
                <div>
                  <div className="text-[13px] font-bold text-slate-800">300 Km included</div>
                  <div className="text-[11px] text-slate-500">₹20.0/km will apply beyond the included kms</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 flex justify-center"><span className="text-[#24963f] text-lg">👨‍✈️</span></div>
                <div>
                  <div className="text-[13px] font-bold text-slate-800">Driver allowance</div>
                  <div className="text-[11px] text-slate-500">Driver food and accommodation(stay) charges are included</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 flex justify-center"><span className="text-[#24963f] text-lg">⏳</span></div>
                <div>
                  <div className="text-[13px] font-bold text-slate-800 flex items-center gap-1">Waiting time upto 45 mins for pickup <FaInfoCircle className="text-[#008cff] text-[10px]" /></div>
                  <div className="text-[11px] text-slate-500">₹100/30 mins post 45 mins</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 flex justify-center"><span className="text-[#24963f] text-lg">📍</span></div>
                <div>
                  <div className="text-[13px] font-bold text-slate-800">Sightseeing included</div>
                  <div className="text-[11px] text-slate-500">Sightseeing included in Pune</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 flex justify-center"><span className="text-[#24963f] text-lg">⛽</span></div>
                <div>
                  <div className="text-[13px] font-bold text-slate-800">Fuel charges included</div>
                  <div className="text-[11px] text-slate-500">Fuel cost for your trip is included in the fare</div>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-4">EXCLUSIONS</div>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 flex justify-center text-[#eb2026] text-lg">📑</div>
                <div>
                  <div className="text-[13px] font-bold text-slate-800">Toll and other charges</div>
                  <div className="text-[11px] text-slate-500">Toll (₹640 Approx), Parking charges are not included (To be paid as per original receipt)</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <div className="w-8 h-8 rounded-full bg-[#eaf5ff] flex items-center justify-center flex-shrink-0 text-[#008cff]">
                <FaRobot />
              </div>
              <div className="bg-[#eaf5ff] text-[#008cff] border border-[#b8e8ff] rounded-full px-4 py-1.5 text-[11px] font-semibold whitespace-nowrap cursor-pointer hover:bg-[#d4f2ff]">
                What is the luggage capacity of the cab?
              </div>
              <div className="bg-[#eaf5ff] text-[#008cff] border border-[#b8e8ff] rounded-full px-4 py-1.5 text-[11px] font-semibold whitespace-nowrap cursor-pointer hover:bg-[#d4f2ff]">
                Till when can I keep the cab?
              </div>
              <div className="bg-[#eaf5ff] text-[#008cff] border border-[#b8e8ff] rounded-full px-4 py-1.5 text-[11px] font-semibold whitespace-nowrap cursor-pointer hover:bg-[#d4f2ff]">
                More queries? Just ask Myra
              </div>
            </div>

            <div className="border-t border-slate-100 mt-4 pt-4">
              <div className="text-[#008cff] font-bold text-[13px] cursor-pointer hover:underline flex items-center justify-between">
                <span>View Policies</span>
                <span>›</span>
              </div>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className="bg-white rounded shadow-sm border border-[#e5e5e5] p-5">
            <h2 className="text-[18px] font-black text-slate-900 mb-4">Cancellation Policy</h2>
            <div className="text-[13px] mb-4">
              <span className="font-bold text-[#24963f]">Free cancellation until</span> <span className="font-bold">9:00 AM, Sat 18 Jul</span> <span className="text-[11px] text-slate-400">1 hour before pick up time</span>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <div className="text-[#008cff] font-bold text-[13px] cursor-pointer hover:underline flex items-center justify-between">
                <span>View Cancellation Policy</span>
                <span>›</span>
              </div>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="bg-white rounded shadow-sm border border-[#e5e5e5] p-5">
            <h2 className="text-[18px] font-black text-slate-900 mb-4">Customer reviews</h2>
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-[#0052cc] text-white flex flex-col items-center justify-center w-16 h-16 rounded-lg">
                <div className="text-2xl font-black">4.4</div>
                <div className="text-[9px] font-semibold uppercase">Excellent</div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span className="w-20">Driver rating</span>
                  <div className="flex-1 h-1.5 bg-slate-200 rounded-full mx-3 overflow-hidden">
                    <div className="h-full bg-[#0052cc] w-[88%]"></div>
                  </div>
                  <span>4.4</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600">
                  <span className="w-20">Cab Rating</span>
                  <div className="flex-1 h-1.5 bg-slate-200 rounded-full mx-3 overflow-hidden">
                    <div className="h-full bg-[#0052cc] w-[88%]"></div>
                  </div>
                  <span>4.4</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2 items-center text-[12px] text-slate-700 font-semibold mb-6">
              <FaThumbsUp className="text-[#d19a30]" />
              <span>Rated by 261 travellers who booked this for Mumbai to Pune</span>
            </div>

            <div className="text-[13px] font-bold text-slate-800 mb-3">All Reviews</div>
            <div className="flex gap-2 mb-6">
              <span className="border border-slate-300 rounded-full px-3 py-1 text-[11px] text-slate-600 font-semibold cursor-pointer">Good Experience</span>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <div className="flex items-center justify-between mb-1">
                <div className="text-[13px] font-bold text-slate-900">
                  Keshav Agrawal <span className="text-slate-400 font-normal ml-1 mr-1">•</span> <span className="text-slate-500 font-normal">booked Toyota Innova or similar</span>
                </div>
                <span className="border border-[#008cff] text-[#008cff] text-[10px] font-bold px-1.5 py-0.5 rounded">4.5</span>
              </div>
              <div className="text-[10px] text-slate-400 mb-3">08 Jul 2024</div>
              <p className="text-[13px] text-slate-700 leading-relaxed mb-3">
                The driver was smooth and everything was good. But the driver reported around 1 hour late in the morning making us late to reach our destination.
              </p>
              <div className="text-[#008cff] text-[11px] font-bold cursor-pointer text-right hover:underline">See more reviews</div>
            </div>
          </div>

          {/* Special Requests */}
          <div className="bg-white rounded shadow-sm border border-[#e5e5e5] p-5">
            <h2 className="text-[18px] font-black text-slate-900 mb-4">Special Requests</h2>
            <div className="grid grid-cols-2 gap-4">

              <label className="border border-slate-200 rounded-lg p-3 flex gap-3 cursor-pointer hover:bg-slate-50 transition-colors">
                <input type="checkbox" className="mt-1 w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="text-[13px] font-bold text-slate-800">Roof Carrier</div>
                    <div className="text-[13px] font-black text-slate-900">₹ 262</div>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Add Roof Carrier to fit 6 more bags</div>
                </div>
              </label>

              <label className="border border-slate-200 rounded-lg p-3 flex gap-3 cursor-pointer hover:bg-slate-50 transition-colors">
                <input type="checkbox" className="mt-1 w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="text-[13px] font-bold text-slate-800">Drivers Language</div>
                    <div className="text-[13px] font-black text-slate-900">₹ 209</div>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Choose your preferred language for a smoother ride.</div>
                  <div className="text-[10px] text-[#d17f28] font-semibold mt-1">Most likely the assigned driver speaks local language if not selected</div>
                </div>
              </label>

              <label className="border border-slate-200 rounded-lg p-3 flex gap-3 cursor-pointer hover:bg-slate-50 transition-colors">
                <input type="checkbox" className="mt-1 w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="text-[13px] font-bold text-slate-800">Local sightseeing in Mumbai</div>
                    <div className="text-[13px] font-black text-slate-900">₹ 737</div>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Covers six hours of sightseeing in Mumbai.</div>
                  <div className="text-[10px] text-[#d17f28] font-semibold mt-1">Sightseeing in Pune is already included in base fare</div>
                </div>
              </label>

              <label className="border border-slate-200 rounded-lg p-3 flex gap-3 cursor-pointer hover:bg-slate-50 transition-colors">
                <input type="checkbox" className="mt-1 w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="text-[13px] font-bold text-slate-800">Additional KM</div>
                    <div className="text-[13px] font-black text-slate-900">₹ 567</div>
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">100 kms top up</div>
                </div>
              </label>

            </div>
          </div>

          {/* Traveller Details */}
          <div className="bg-white rounded shadow-sm border border-[#e5e5e5] p-5">
            <h2 className="text-[18px] font-black text-slate-900 mb-5">Traveller Details</h2>

            <div className="text-[13px] font-bold text-slate-800 mb-2">Pickup Details</div>
            <div className="bg-[#f4f4f4] border border-slate-200 rounded p-3 mb-6">
              <input type="text" placeholder="ENTER PICKUP LOCATION" className="bg-transparent w-full outline-none text-[13px] font-semibold placeholder:text-slate-500 text-slate-800" />
            </div>

            <div className="text-[13px] font-bold text-slate-800 mb-2">Traveller Contact Details</div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-[#f4f4f4] border border-slate-200 rounded p-2 px-3">
                <div className="text-[10px] font-bold text-slate-500 mb-0.5 uppercase">Full Name</div>
                <input type="text" className="bg-transparent w-full outline-none text-[13px] font-semibold text-slate-800" />
              </div>
              <div className="bg-[#f4f4f4] border border-slate-200 rounded p-2 px-3 relative">
                <div className="text-[10px] font-bold text-slate-500 mb-0.5 uppercase">Gender</div>
                <select className="bg-transparent w-full outline-none text-[13px] font-semibold text-slate-800 appearance-none cursor-pointer">
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <div className="absolute right-3 top-1/2 mt-1 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">▼</div>
              </div>
              <div className="bg-[#f4f4f4] border border-slate-200 rounded p-2 px-3 flex gap-2">
                <div className="flex flex-col border-r border-slate-300 pr-2">
                  <div className="text-[10px] font-bold text-slate-500 mb-0.5 uppercase whitespace-nowrap">Mobile Number</div>
                  <div className="flex items-center gap-1 text-[13px] font-semibold text-slate-800 cursor-pointer">
                    +91 <span className="text-[10px]">▼</span>
                  </div>
                </div>
                <input type="text" className="bg-transparent w-full outline-none text-[13px] font-semibold text-slate-800 mt-3" />
              </div>
              <div className="bg-[#f4f4f4] border border-slate-200 rounded p-2 px-3">
                <div className="text-[10px] font-bold text-slate-500 mb-0.5 uppercase">Email ID</div>
                <input type="text" className="bg-transparent w-full outline-none text-[13px] font-semibold text-slate-800" />
              </div>
            </div>

            <div className="text-xs text-slate-500 mb-2">Or</div>
            <div className="text-[#008cff] text-[11px] font-bold uppercase cursor-pointer hover:underline mb-6 flex items-center gap-1">
              <FaCheckCircle className="text-base" /> LOG INTO EXISTING ACCOUNT
            </div>

            <label className="flex items-center gap-2 cursor-pointer mb-6">
              <input type="checkbox" defaultChecked className="w-4 h-4 border-slate-300 rounded text-[#008cff] focus:ring-[#008cff]" />
              <span className="text-[13px] text-slate-800 font-medium">Use pickup location as billing address</span>
            </label>

            <div className="text-[11px] text-slate-500">
              By proceeding to book, I agree to MakeMyTrip's <span className="text-[#008cff] cursor-pointer hover:underline">PrivacyPolicy, UserAgreement, TermsOfService,</span> & <span className="text-[#008cff] cursor-pointer hover:underline">CancellationRules</span>
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar) */}
        <div className="flex-[0.28] flex flex-col gap-5 sticky top-24">

          {/* Coupon & Offers */}
          <div className="bg-white rounded shadow-sm border border-[#e5e5e5] p-4">
            <h2 className="text-[14px] font-bold text-slate-900 mb-4">Coupon & Offers</h2>

            <div className="space-y-4 mb-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="coupon"
                  className="mt-1 w-4 h-4 border-slate-300 text-[#008cff] focus:ring-[#008cff]"
                  onChange={() => setSelectedCoupon("MMTDEAL")}
                  checked={selectedCoupon === "MMTDEAL"}
                />
                <div>
                  <div className="border border-slate-300 rounded px-2 py-0.5 text-[10px] font-black text-slate-700 mb-1 inline-flex items-center gap-1">
                    <span className="text-[#24963f] text-xs">🏷️</span> MMTDEAL
                  </div>
                  <div className="text-[11px] text-slate-600">Get flat Rs. 120 off on your cab booking!</div>
                </div>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group border-t border-slate-100 pt-4">
                <input
                  type="radio"
                  name="coupon"
                  className="mt-1 w-4 h-4 border-slate-300 text-[#008cff] focus:ring-[#008cff]"
                  onChange={() => setSelectedCoupon("MEGASALE")}
                  checked={selectedCoupon === "MEGASALE"}
                />
                <div>
                  <div className="border border-slate-300 rounded px-2 py-0.5 text-[10px] font-black text-slate-700 mb-1 inline-flex items-center gap-1">
                    <span className="text-[#008cff] text-xs">🏷️</span> MEGA SALE
                  </div>
                  <div className="text-[11px] text-slate-600">Save Rs. 240 instantly on this Cab booking. Hurry, limited time offer!</div>
                </div>
              </label>
            </div>

            <div className="border border-slate-200 rounded-lg flex items-center overflow-hidden focus-within:border-[#008cff]">
              <input type="text" placeholder="ENTER A COUPON" className="w-full px-3 py-2 text-[11px] font-bold text-slate-800 outline-none" />
              <button className="text-[#008cff] text-[11px] font-bold px-4 hover:underline">APPLY</button>
            </div>
          </div>

          {/* Payment options */}
          <div className="bg-white rounded shadow-sm border border-[#e5e5e5] p-4">
            <h2 className="text-[14px] font-bold text-slate-900 mb-4">Payment options</h2>

            <div className="space-y-4 mb-6">
              <label className="flex items-start justify-between cursor-pointer group">
                <div className="flex gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1 w-4 h-4 border-slate-300 text-[#008cff] focus:ring-[#008cff]"
                    onChange={() => setPaymentOption("part")}
                    checked={paymentOption === "part"}
                  />
                  <div>
                    <div className="text-[13px] font-bold text-slate-800">Part Pay</div>
                    <div className="text-[11px] text-slate-500">Pay rest to the driver</div>
                  </div>
                </div>
                <div className="text-[13px] font-black text-slate-900">₹ 1,429</div>
              </label>

              <label className="flex items-start justify-between cursor-pointer group">
                <div className="flex gap-3">
                  <input
                    type="radio"
                    name="payment"
                    className="mt-1 w-4 h-4 border-slate-300 text-[#008cff] focus:ring-[#008cff]"
                    onChange={() => setPaymentOption("full")}
                    checked={paymentOption === "full"}
                  />
                  <div>
                    <div className="text-[13px] font-bold text-slate-800">Full Pay</div>
                    <div className="text-[11px] text-slate-500">Full amount</div>
                  </div>
                </div>
                <div className="text-[13px] font-black text-slate-900">₹ 6,763</div>
              </label>
            </div>

            <button className="w-full bg-gradient-to-r from-[#008cff] to-[#007add] hover:from-[#007add] hover:to-[#0052cc] text-white font-bold text-[15px] py-3 rounded-lg shadow-md transition-all uppercase mb-4">
              Pay Now
            </button>

            <div
              className="text-[#008cff] font-bold text-[13px] text-center cursor-pointer hover:underline mb-4 flex items-center justify-center gap-1"
              onClick={() => setShowFareBreakup(!showFareBreakup)}
            >
              {showFareBreakup ? "Hide Fare Break up" : "Show Fare Break up"} <span className="text-xs">{showFareBreakup ? "▲" : "▼"}</span>
            </div>

            {showFareBreakup && (
              <div className="bg-[#f9f9f9] border border-slate-200 rounded p-3 text-[13px]">
                <div className="flex justify-between font-bold text-slate-800 mb-1">
                  <span>Base Fare</span>
                  <span>₹ 6,000</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 mb-3 pl-2">
                  <span>Cab charges (Includes fuel, cab)</span>
                  <span>₹ 6,000</span>
                </div>

                <div className="flex justify-between font-bold text-slate-800 mb-1">
                  <span>Taxes & Fees</span>
                  <span>₹ 763</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 mb-1 pl-2">
                  <span>Driver Charges (Driver food and stay)</span>
                  <span>₹ 350</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 mb-1 pl-2">
                  <span>GST</span>
                  <span>₹ 318</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-500 mb-3 pl-2">
                  <span>Service Fee</span>
                  <span>₹ 95</span>
                </div>

                <div className="border-t border-slate-300 pt-3 flex justify-between font-black text-slate-900 text-[15px]">
                  <span>Total</span>
                  <span>₹ 6,763</span>
                </div>
              </div>
            )}
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

    </div>
  );
}
