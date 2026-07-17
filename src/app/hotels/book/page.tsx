"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { FaStar, FaCheck, FaInfoCircle, FaShieldAlt, FaMedkit, FaMoneyBillWave, FaUserShield, FaStethoscope, FaTag } from "react-icons/fa";

export default function BookingReview() {
  const [activeTab, setActiveTab] = useState("hotel");
  const [addon, setAddon] = useState("none"); // none, breakfast, half, full
  const [tripSecure, setTripSecure] = useState(true);
  const [paymentOption, setPaymentOption] = useState("full"); // full, later

  const basePrice = 10004;
  const taxes = 2431;
  const securePrice = 98; // ₹49 per person * 2 adults

  const getAddonPrice = () => {
    if (addon === "breakfast") return 1078;
    if (addon === "half") return 5193;
    if (addon === "full") return 8507;
    return 0;
  };

  const addonPrice = getAddonPrice();
  const insurancePrice = tripSecure ? securePrice : 0;
  const totalAmount = basePrice + taxes + addonPrice + insurancePrice;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f1f8] via-[#f4f7fb] to-[#F2F2F2] font-sans">

      {/* Keeping our standard Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={false}
        username=""
        onLoginClick={() => { }}
        onLogout={() => { }}
        onSupportClick={() => { }}
      />

      <div className="bg-gradient-to-r from-[#0a1930] via-[#0f294d] to-[#0a1930] text-white pt-32 pb-10 px-4 sm:px-6 shadow-md relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
        <div className="max-w-7xl mx-auto relative z-10 animate-slide-up">
          <h1 className="text-[28px] font-black tracking-tight">Review your Booking</h1>
        </div>
      </div>

      <div className="pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="flex flex-col lg:flex-row gap-6">

            {/* LEFT COLUMN */}
            <div className="flex-1 space-y-6">

              {/* Hotel Summary Card */}
              <div className="bg-white rounded-xl shadow-lg shadow-slate-200/40 border border-slate-200 overflow-hidden animate-slide-up hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="p-5 flex gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-black text-slate-900">Radisson Blu Plaza Delhi Airport</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex text-orange-400 text-[10px]">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                      <span className="text-[10px] font-bold uppercase text-slate-500 border border-slate-200 px-1.5 py-0.5 rounded">Couple Friendly</span>
                    </div>
                    <div className="text-xs text-slate-500 font-semibold mt-1">National Highway 8, Delhi, India</div>
                  </div>
                  <div className="w-[100px] h-[70px] rounded bg-slate-100 overflow-hidden flex-shrink-0">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hotel" />
                  </div>
                </div>

                <div className="bg-slate-50 border-t border-slate-100 p-4 flex flex-wrap gap-8 items-center">
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Check-in</div>
                    <div className="text-sm font-black text-slate-800">Sat 25 Jul <span className="font-semibold text-slate-500">2026</span></div>
                    <div className="text-[10px] text-slate-500 font-bold">3 PM</div>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Check-out</div>
                    <div className="text-sm font-black text-slate-800">Sun 26 Jul <span className="font-semibold text-slate-500">2026</span></div>
                    <div className="text-[10px] text-slate-500 font-bold">12 PM</div>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
                  <div className="text-sm font-black text-slate-800">
                    1 Night <span className="text-slate-300 mx-1">|</span> 2 Adults <span className="text-slate-300 mx-1">|</span> 1 Room
                  </div>
                </div>
              </div>

              {/* Room Details & Cancellation */}
              <div className="bg-white rounded-xl shadow-lg shadow-slate-200/40 border border-slate-200 p-5 animate-slide-up hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full mb-2 inline-block">Super Package</span>
                    <h3 className="text-lg font-black text-slate-900">Superior Room</h3>
                    <div className="text-xs font-semibold text-slate-500">2 Adults</div>
                  </div>
                  <span className="text-xs font-bold text-blue-600 cursor-pointer">See Inclusions</span>
                </div>

                <div className="space-y-1.5 mt-4">
                  <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                    <FaCheck className="text-[10px] text-slate-400 mt-0.5" /> Room With Free Cancellation
                  </div>
                  <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                    <FaCheck className="text-[10px] text-slate-400 mt-0.5" /> No meals included
                  </div>
                  <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                    <FaCheck className="text-[10px] text-slate-400 mt-0.5" /> Complimentary INR 500 Hotel Credit redeemable on Food
                  </div>
                  <div className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                    <FaCheck className="text-[10px] text-slate-400 mt-0.5" /> Enjoy Happy Hours with 1+1 offer
                  </div>
                </div>

                <div className="mt-6 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <FaCheck className="text-emerald-500 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-800">Free Cancellation till 24 hrs before check in <span className="text-blue-600 font-normal cursor-pointer">Cancellation policy details</span></div>
                      <div className="text-[10px] text-slate-500 mt-1">Book with ₹0 Payment. Pay before 23 Jul, 11:59 PM IST to avoid auto-cancellation. Payment can only be done on ITS Global.</div>
                    </div>
                  </div>

                  {/* Timeline Bar */}
                  <div className="mt-6 mx-2 relative">
                    <div className="flex w-full h-2 rounded-full overflow-hidden">
                      <div className="w-[60%] bg-emerald-500 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-white">100% Refund</div>
                      </div>
                      <div className="w-[40%] bg-amber-400 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-[8px] font-black text-white">Non-Refundable</div>
                      </div>
                    </div>
                    {/* Markers */}
                    <div className="flex justify-between text-[9px] font-bold text-slate-500 mt-2">
                      <div className="text-center"><div className="w-1.5 h-1.5 bg-slate-300 rounded-full mx-auto mb-1"></div>NOW</div>
                      <div className="text-center absolute left-[30%] -translate-x-1/2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mx-auto mb-1"></div>23 Jul<br />11:59 PM</div>
                      <div className="text-center absolute left-[60%] -translate-x-1/2 text-slate-800"><div className="w-1.5 h-1.5 bg-slate-800 rounded-full mx-auto mb-1"></div>24 Jul<br />02:59 PM</div>
                      <div className="text-center"><div className="w-1.5 h-1.5 bg-amber-400 rounded-full mx-auto mb-1"></div>25 Jul<br />Check-in</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Addons */}
              <div className="bg-white rounded-xl shadow-lg shadow-slate-200/40 border border-slate-200 p-5 animate-slide-up hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <h3 className="text-lg font-black text-slate-900 mb-1">Addons</h3>
                <div className="text-xs text-slate-500 font-semibold mb-4">Get additional benefits by paying marginal extra</div>

                <div className="space-y-3">
                  {/* Option 1 */}
                  <label className="flex justify-between items-start border border-emerald-100 bg-emerald-50/30 p-3 rounded-lg cursor-pointer hover:bg-emerald-50 transition-colors">
                    <div className="flex gap-3">
                      <input type="radio" name="addon" checked={addon === "breakfast"} onChange={() => setAddon(addon === "breakfast" ? "none" : "breakfast")} className="mt-1 w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 rounded inline-block mb-1">90% travellers enjoyed property's food</div>
                        <div className="text-sm font-bold text-slate-800">Breakfast</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">(Price at hotel is ₹2000 for all guests)</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-slate-900">₹1078</div>
                      <div className="text-[10px] text-slate-500">all guests</div>
                    </div>
                  </label>

                  {/* Option 2 */}
                  <label className="flex justify-between items-start border border-emerald-100 bg-emerald-50/30 p-3 rounded-lg cursor-pointer hover:bg-emerald-50 transition-colors">
                    <div className="flex gap-3">
                      <input type="radio" name="addon" checked={addon === "half"} onChange={() => setAddon(addon === "half" ? "none" : "half")} className="mt-1 w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 rounded inline-block mb-1">92% travellers enjoyed property's food</div>
                        <div className="text-sm font-bold text-slate-800">Breakfast + Lunch/Dinner</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">(Price at hotel is ₹6500 for all guests)</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-slate-900">₹5193</div>
                      <div className="text-[10px] text-slate-500">all guests</div>
                    </div>
                  </label>

                  {/* Option 3 */}
                  <label className="flex justify-between items-start border border-emerald-100 bg-emerald-50/30 p-3 rounded-lg cursor-pointer hover:bg-emerald-50 transition-colors">
                    <div className="flex gap-3">
                      <input type="radio" name="addon" checked={addon === "full"} onChange={() => setAddon(addon === "full" ? "none" : "full")} className="mt-1 w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="text-[10px] font-bold text-emerald-600 bg-emerald-100 px-1.5 rounded inline-block mb-1">99% travellers enjoyed property's food</div>
                        <div className="text-sm font-bold text-slate-800">All Meals</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">(Price at hotel is ₹11500 for all guests)</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-slate-900">₹8507</div>
                      <div className="text-[10px] text-slate-500">all guests</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Important Information */}
              <div className="bg-white rounded-xl shadow-lg shadow-slate-200/40 border border-slate-200 p-5 animate-slide-up hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <h3 className="text-lg font-black text-slate-900 mb-4">Important Information</h3>

                <div className="border border-slate-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-1">
                    <span className="text-blue-500"><FaUserShield /></span> Couple/Bachelor Rules
                  </div>
                  <div className="text-xs text-slate-600">Unmarried couples allowed. Local ids are allowed.</div>
                </div>

                <ul className="list-disc pl-5 space-y-2 text-xs font-semibold text-slate-600 mb-6">
                  <li>Primary Guest should be at least 18 years of age.</li>
                  <li>Groups with only male guests are also allowed at this property.</li>
                  <li>Passport, Aadhar, Driving License and Govt. ID are accepted as ID proof(s).</li>
                  <li>Pets are not allowed.</li>
                </ul>

                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                  <div>
                    <div className="text-xs font-bold text-slate-800">Cribs and Extra beds</div>
                    <div className="text-[10px] text-slate-500">Extra beds will be provided based on availability.</div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">Breakfast Charges</div>
                    <div className="text-[10px] text-slate-500">Fixed breakfast charges will be applicable if it is not included in your booking tariff.</div>
                  </div>
                </div>

                <div className="text-xs font-bold text-blue-600 cursor-pointer mt-4">View More</div>
              </div>

              {/* Guest Details */}
              <div className="bg-white rounded-xl shadow-lg shadow-slate-200/40 border border-slate-200 p-5 animate-slide-up hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <h3 className="text-lg font-black text-slate-900 mb-4">Guest Details</h3>

                <div className="flex gap-4 mb-4">
                  <div className="w-24">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">Title</label>
                    <select className="w-full border border-slate-300 rounded p-2 text-sm outline-none focus:border-blue-500 font-semibold text-slate-800">
                      <option>Mr</option>
                      <option>Mrs</option>
                      <option>Ms</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">First Name</label>
                    <input type="text" placeholder="First Name" className="w-full border border-slate-300 rounded p-2 text-sm outline-none focus:border-blue-500 font-semibold text-slate-800" />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">Last Name</label>
                    <input type="text" placeholder="Last Name" className="w-full border border-slate-300 rounded p-2 text-sm outline-none focus:border-blue-500 font-semibold text-slate-800" />
                  </div>
                </div>

                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">Email Address <span className="text-[9px] font-normal lowercase">(Booking voucher will be sent to this email ID)</span></label>
                    <input type="email" placeholder="Email ID" className="w-full border border-slate-300 rounded p-2 text-sm outline-none focus:border-blue-500 font-semibold text-slate-800" />
                  </div>
                  <div className="flex-1">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 block">Mobile Number</label>
                    <div className="flex">
                      <select className="border border-slate-300 rounded-l p-2 text-sm outline-none focus:border-blue-500 font-semibold text-slate-800 w-20 border-r-0">
                        <option>+91</option>
                      </select>
                      <input type="text" placeholder="Contact Number" className="flex-1 border border-slate-300 rounded-r p-2 text-sm outline-none focus:border-blue-500 font-semibold text-slate-800" />
                    </div>
                  </div>
                </div>

                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer mt-2">
                  <input type="checkbox" className="w-4 h-4" />
                  Enter GST Details <span className="text-[10px] text-slate-400 font-normal">(Optional)</span>
                </label>

                <div className="text-xs font-bold text-blue-600 mt-4 cursor-pointer">+ Add Guest</div>

                <div className="bg-blue-50 rounded-lg p-3 flex justify-between items-center mt-4">
                  <span className="text-xs font-bold text-slate-700">Login to prefill traveller details and get access to secret deals</span>
                  <button className="bg-white border border-blue-500 text-blue-600 font-bold text-[10px] px-4 py-1.5 rounded uppercase tracking-wider">LOGIN</button>
                </div>
              </div>

              {/* Special Requests */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex justify-between items-center">
                <div className="flex items-start gap-3">
                  <div className="text-orange-500 mt-0.5"><FaInfoCircle /></div>
                  <div>
                    <div className="text-sm font-black text-slate-800">Special Requests</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">Add any special requests for your stay. Hotel will try to accommodate them.</div>
                  </div>
                </div>
                <div className="text-xs font-bold text-blue-600 cursor-pointer uppercase tracking-wider">MAKE A REQUEST</div>
              </div>

              {/* Trip Secure */}
              <div className="bg-white rounded-xl shadow-lg shadow-slate-200/40 border border-slate-200 overflow-hidden animate-slide-up hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="bg-emerald-50/50 p-4 flex gap-3 border-b border-emerald-100">
                  <div className="text-emerald-500 mt-1"><FaShieldAlt className="text-xl" /></div>
                  <div>
                    <div className="text-[10px] font-bold text-emerald-600 mb-0.5">Over 1 million travellers secured in the last month</div>
                    <div className="text-lg font-black text-slate-800">Trip Secure</div>
                    <div className="text-xs font-bold text-emerald-600">Enjoy a Worry-Free Stay</div>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 grid grid-cols-2 gap-y-3">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5"><FaStethoscope className="text-blue-500" /> Medical Assistance</span>
                    <span>24*7 SUPPORT</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5"><FaMoneyBillWave className="text-emerald-500" /> Refund on Hotel Cancellation</span>
                    <span>Rs 10,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5"><FaUserShield className="text-rose-500" /> Personal Accident</span>
                    <span>Rs 10,00,000</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5"><FaMedkit className="text-orange-500" /> OPD Expenses</span>
                    <span>Rs 25,000</span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="text-[10px] font-bold text-blue-600 cursor-pointer">7 more benefits</span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="text-sm font-black text-slate-900 mb-0.5">₹49 <span className="text-[10px] text-slate-500 font-normal">per person per night</span></div>
                  <div className="text-[10px] text-slate-500 font-semibold mb-3">18% GST included | Non-Refundable</div>

                  <label className="flex items-start gap-3 border border-emerald-200 bg-emerald-50/20 p-3 rounded-t-lg cursor-pointer">
                    <input type="radio" name="insurance" checked={tripSecure} onChange={() => setTripSecure(true)} className="mt-0.5 w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-bold text-slate-800">Yes, secure my trip.</span>
                  </label>
                  <label className="flex items-start gap-3 border border-t-0 border-slate-200 p-3 rounded-b-lg cursor-pointer hover:bg-slate-50">
                    <input type="radio" name="insurance" checked={!tripSecure} onChange={() => setTripSecure(false)} className="mt-0.5 w-4 h-4" />
                    <span className="text-sm font-semibold text-slate-600">No, I will book without trip secure.</span>
                  </label>
                </div>
              </div>

              {/* Payment Options */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 bg-slate-50 border-b border-slate-200">
                  <h3 className="text-lg font-black text-slate-900">Payment Options</h3>
                </div>

                <label className="flex justify-between items-center border-b border-slate-100 p-4 cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <input type="radio" name="payment" checked={paymentOption === "full"} onChange={() => setPaymentOption("full")} className="mt-1 w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-sm font-bold text-slate-800">Pay Full Amount Now and <span className="text-emerald-600">save ₹101</span></div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Cancel for free any time before 24 Jul</div>
                    </div>
                  </div>
                  <div className="text-sm font-black text-slate-900">₹{(totalAmount - 101).toLocaleString('en-IN')}</div>
                </label>

                <label className="flex justify-between items-center p-4 cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <input type="radio" name="payment" checked={paymentOption === "later"} onChange={() => setPaymentOption("later")} className="mt-1 w-4 h-4 text-blue-600" />
                    <div>
                      <div className="text-sm font-bold text-slate-800">Pay later by 23 Jul, 2026, 11:59 PM</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">Book @ 0 now and pay later using any paymode to avoid auto-cancellation.</div>
                    </div>
                  </div>
                  <div className="text-sm font-black text-slate-900">₹{totalAmount.toLocaleString('en-IN')}</div>
                </label>
              </div>

              {/* Terms and Pay Now */}
              <div className="pt-4 pb-10">
                <label className="flex items-start gap-2 text-xs font-semibold text-slate-600 mb-4 cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-0.5 w-4 h-4" />
                  <span>By proceeding, I agree to ITS Global's <span className="text-blue-600 hover:underline">User Agreement</span>, <span className="text-blue-600 hover:underline">Terms of Service</span> and <span className="text-blue-600 hover:underline">Cancellation & Property Booking Policies</span>.</span>
                </label>

                <button onClick={() => window.location.href = '/hotels/payment'} className="bg-blue-600 hover:bg-blue-700 text-white font-black text-base py-3 px-12 rounded-lg shadow-md transition-all hover:scale-105 uppercase tracking-widest">
                  PAY NOW
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="w-full lg:w-[320px] flex-shrink-0 space-y-6">

              {/* Price Summary */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                  <h3 className="font-black text-slate-900">Price Summary</h3>
                  <span className="text-[10px] font-bold text-blue-600 cursor-pointer">View Price Breakup</span>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
                    <span>Base Price</span>
                    <span>₹{basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  {addon !== "none" && (
                    <div className="flex justify-between items-center text-xs font-bold text-slate-800 border-b border-slate-100 pb-2">
                      <span>Addon: {addon === "breakfast" ? "Breakfast" : addon === "half" ? "Half Board" : "All Meals"}</span>
                      <span>+ ₹{addonPrice.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  {tripSecure && (
                    <div className="flex justify-between items-center text-xs font-bold text-emerald-600 border-b border-slate-100 pb-2">
                      <span>Trip Secure (Insurance)</span>
                      <span>+ ₹{insurancePrice.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
                    <span>Taxes & Service Fees</span>
                    <span>₹{taxes.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between items-end">
                    <div className="text-sm font-black text-slate-900">Total Amount<br /><span className="text-[10px] text-slate-500 font-semibold">to be paid</span></div>
                    <div className="text-2xl font-black text-slate-900">₹{(paymentOption === "full" ? totalAmount - 101 : totalAmount).toLocaleString('en-IN')}</div>
                  </div>
                </div>
              </div>

              {/* Coupon Codes */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-black text-slate-900">Coupon Codes</h3>
                  <span className="text-[10px] font-bold text-blue-600 cursor-pointer">View All</span>
                </div>

                <div className="flex mb-4">
                  <input type="text" placeholder="Have a Coupon Code?" className="flex-1 border border-slate-300 rounded-l p-2 text-xs outline-none font-semibold uppercase" />
                  <button className="bg-slate-200 text-slate-500 font-bold text-[10px] px-4 rounded-r uppercase tracking-wider">Apply</button>
                </div>

                <div className="space-y-3">
                  {/* Coupon 1 */}
                  <div className="border border-blue-200 bg-blue-50/30 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-1.5 font-black text-sm text-slate-800">
                        <span className="w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]"><FaTag /></span> MMTSMARTDEAL
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-slate-900">₹ 126 off</div>
                        <div className="text-[10px] font-bold text-blue-600 cursor-pointer">Remove</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold leading-tight">Congratulations! Discount of INR 126 Applied</div>
                  </div>

                  {/* Coupon 2 */}
                  <div className="border border-slate-200 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-1.5 font-black text-sm text-slate-800">
                        <span className="w-4 h-4 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px]"><FaTag /></span> AXISEMI
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-slate-900">₹ 1,215 off</div>
                        <div className="text-[10px] font-bold text-blue-600 cursor-pointer">Apply</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold leading-tight">Axis Bank Credit Card NoCostEMI Offer - Get INR 1215 Off!</div>
                  </div>

                  {/* Coupon 3 */}
                  <div className="border border-slate-200 rounded-lg p-3">
                    <div className="flex justify-between items-start mb-1">
                      <div className="flex items-center gap-1.5 font-black text-sm text-slate-800">
                        <span className="w-4 h-4 rounded-full bg-orange-600 text-white flex items-center justify-center text-[10px]"><FaTag /></span> HDFCEMI
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-black text-slate-900">₹ 379 off</div>
                        <div className="text-[10px] font-bold text-blue-600 cursor-pointer">Apply</div>
                      </div>
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold leading-tight">HDFC Credit Card NoCostEMI Offer - Get INR 379 Off!</div>
                  </div>
                </div>
              </div>

              {/* Login Info */}
              <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
                <div className="text-xs font-black text-slate-800 uppercase tracking-wider mb-2">Why <span className="text-blue-600">SIGN UP</span> or <span className="text-blue-600">LOGIN</span></div>
                <div className="space-y-1.5 text-[10px] font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5"><FaCheck className="text-emerald-500" /> Get access to <span className="font-bold text-slate-800">Secret Deals</span></div>
                  <div className="flex items-center gap-1.5"><FaCheck className="text-emerald-500" /> <span className="font-bold text-slate-800">Book faster</span> - we'll pre-fill your details</div>
                  <div className="flex items-center gap-1.5"><FaCheck className="text-emerald-500" /> <span className="font-bold text-slate-800">Manage your bookings</span> from one place</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
