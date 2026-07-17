"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { FaUserCircle, FaEnvelope, FaPhoneAlt, FaChevronRight, FaRegUser, FaUserFriends, FaKey, FaChevronDown, FaGift, FaCamera, FaEye } from "react-icons/fa";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="min-h-screen bg-[#f4f6fc] font-sans pb-20">
      <Navbar
        activeTab=""
        setActiveTab={() => {}}
        isLoggedIn={true}
        username="Kuldeep Sharma"
        onLoginClick={() => {}}
        onLogout={() => {}}
        onSupportClick={() => {}}
      />

      {/* Hero Banner Section */}
      <div className="relative pt-[120px] pb-12 bg-slate-900">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 mix-blend-overlay" alt="Forest Background" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="text-white/80 text-xs font-bold py-4 flex items-center gap-2">
            <span className="hover:text-white cursor-pointer transition-colors">Home</span>
            <FaChevronRight className="text-[8px]" />
            <span className="text-white">My Account</span>
          </div>

          {/* Profile Header Card */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-8 pt-4">
            <div className="flex items-center gap-6">
              <div className="relative group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-emerald-500 text-white flex items-center justify-center text-4xl font-black shadow-lg border-4 border-white/20 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <span>KS</span>
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-[10px] font-bold py-1 text-center rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity flex justify-center"><FaCamera /></div>
              </div>
              <div className="text-white">
                <h1 className="text-3xl font-black mb-2">Kuldeep Sharma</h1>
                <div className="flex items-center gap-4 text-xs font-semibold text-white/80">
                  <span className="flex items-center gap-1.5"><FaPhoneAlt className="text-emerald-400" /> 7014557249</span>
                  <span className="flex items-center gap-1.5"><FaEnvelope className="text-emerald-400" /> kuldeeprjsharma13@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6 md:mt-0">
              <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-white text-xs font-bold cursor-pointer hover:bg-black/60 transition-colors">
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-[8px] text-black">M</div>
                myCash ₹ 0 <FaChevronRight className="text-[10px]" />
              </div>
              <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2 text-white text-xs font-bold cursor-pointer hover:bg-black/60 transition-colors">
                <FaGift className="text-blue-400" />
                Buy Gift Cards <FaChevronRight className="text-[10px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Sidebar */}
          <div className="w-full lg:w-[280px] shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-100">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">My Account</div>
              </div>
              <div className="flex flex-col py-2">
                <div 
                  onClick={() => setActiveTab("profile")}
                  className={`flex items-center gap-3 px-6 py-4 cursor-pointer transition-colors relative ${activeTab === "profile" ? "bg-blue-50/50" : "hover:bg-slate-50"}`}
                >
                  <FaRegUser className={`text-lg ${activeTab === "profile" ? "text-blue-600" : "text-slate-400"}`} />
                  <span className={`text-sm font-bold ${activeTab === "profile" ? "text-slate-900" : "text-slate-600"}`}>My Profile</span>
                  {activeTab === "profile" && <div className="absolute right-4 w-1.5 h-1.5 bg-rose-500 rounded-full"></div>}
                </div>
                
                <div 
                  onClick={() => setActiveTab("cotravellers")}
                  className={`flex items-center gap-3 px-6 py-4 cursor-pointer transition-colors relative ${activeTab === "cotravellers" ? "bg-blue-50/50" : "hover:bg-slate-50"}`}
                >
                  <FaUserFriends className={`text-lg ${activeTab === "cotravellers" ? "text-blue-600" : "text-slate-400"}`} />
                  <span className={`text-sm font-bold ${activeTab === "cotravellers" ? "text-slate-900" : "text-slate-600"}`}>Co-Travellers</span>
                </div>
              </div>
              
              <div className="border-t border-slate-100 py-2 mt-4">
                <div 
                  onClick={() => setActiveTab("password")}
                  className={`flex items-center gap-3 px-6 py-4 cursor-pointer transition-colors ${activeTab === "password" ? "bg-blue-50/50" : "hover:bg-slate-50"}`}
                >
                  <FaKey className={`text-lg ${activeTab === "password" ? "text-blue-600" : "text-slate-400"}`} />
                  <span className={`text-sm font-bold ${activeTab === "password" ? "text-slate-900" : "text-slate-600"}`}>Reset Password</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1">
            {activeTab === "profile" && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
                <div className="px-8 py-5 border-b border-slate-100 flex justify-between items-center">
                  <h2 className="text-xl font-black text-slate-900">My Profile</h2>
                  <button className="bg-slate-200 text-slate-500 font-bold px-6 py-2 rounded-lg text-xs uppercase tracking-wider hover:bg-slate-300 transition-colors">Save</button>
                </div>
                
                <div className="p-8 space-y-10">
                  {/* General Info */}
                  <section>
                    <h3 className="text-sm font-black text-slate-900 mb-6">General Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">First & Middle Name</label>
                        <input type="text" defaultValue="Kuldeep" className="w-full border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-4 py-2.5 rounded-lg text-sm font-bold text-slate-900 outline-none transition-all bg-white shadow-sm" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                        <input type="text" defaultValue="Sharma" className="w-full border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 px-4 py-2.5 rounded-lg text-sm font-bold text-slate-900 outline-none transition-all bg-white shadow-sm" />
                      </div>
                      <div className="space-y-1 relative">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Gender</label>
                        <div className="w-full border border-slate-200 focus-within:border-blue-500 px-4 py-2.5 rounded-lg text-sm font-bold text-slate-900 bg-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
                          <span>Male</span>
                          <FaChevronDown className="text-slate-400 text-xs" />
                        </div>
                      </div>
                      <div className="space-y-1 relative">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Date of Birth</label>
                        <div className="w-full border border-slate-200 focus-within:border-blue-500 px-4 py-2.5 rounded-lg text-sm font-bold text-slate-900 bg-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
                          <span>26/11/1997</span>
                          <FaChevronDown className="text-slate-400 text-xs" />
                        </div>
                      </div>
                      <div className="space-y-1 relative">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Nationality</label>
                        <div className="w-full border border-slate-200 focus-within:border-blue-500 px-4 py-2.5 rounded-lg text-sm font-bold text-slate-900 bg-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
                          <span>India</span>
                          <FaChevronDown className="text-slate-400 text-xs" />
                        </div>
                      </div>
                      <div className="space-y-1 relative">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Marital Status</label>
                        <div className="w-full border border-slate-200 focus-within:border-blue-500 px-4 py-2.5 rounded-lg text-sm font-bold text-slate-900 bg-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
                          <span>Married</span>
                          <FaChevronDown className="text-slate-400 text-xs" />
                        </div>
                      </div>
                      <div className="space-y-1 relative">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Anniversary</label>
                        <div className="w-full border border-slate-200 focus-within:border-blue-500 px-4 py-2.5 rounded-lg text-sm font-bold text-slate-900 bg-white shadow-sm flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors">
                          <span>01/01/2024</span>
                          <FaChevronDown className="text-slate-400 text-xs" />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div className="border border-slate-200 rounded-lg px-4 py-2 bg-white relative flex items-center justify-between cursor-pointer hover:border-blue-300 transition-colors">
                        <div>
                          <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">City of Residence</label>
                        </div>
                        <FaChevronDown className="text-slate-400 text-xs" />
                      </div>
                      <div>
                        <div className="border border-slate-200 rounded-lg px-4 py-2 bg-white relative flex items-center justify-between cursor-pointer hover:border-blue-300 transition-colors">
                          <div>
                            <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">State</label>
                          </div>
                          <FaChevronDown className="text-slate-400 text-xs" />
                        </div>
                        <p className="text-[9px] text-slate-400 mt-1.5 ml-1">Required for GST purpose on your tax invoice</p>
                      </div>
                    </div>
                  </section>

                  {/* Contact Details */}
                  <section className="border-t border-slate-100 pt-8">
                    <h3 className="text-sm font-black text-slate-900 mb-1">Contact Details</h3>
                    <p className="text-xs text-slate-500 mb-6 font-semibold">Add contact information to receive booking details & other alerts</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-slate-200 rounded-lg px-4 py-3 flex justify-between items-center bg-white hover:border-blue-300 transition-colors">
                        <div>
                          <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Mobile Number</label>
                          <div className="font-bold text-slate-900 text-sm mt-1">+91-7014557249</div>
                        </div>
                        <button className="text-blue-600 text-xs font-bold hover:underline">Edit</button>
                      </div>
                      <div className="border border-slate-200 rounded-lg px-4 py-3 flex justify-between items-center bg-white hover:border-blue-300 transition-colors">
                        <div>
                          <label className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block">Email ID</label>
                          <div className="font-bold text-slate-900 text-sm mt-1 truncate max-w-[180px]">kuldeeprjsharma13@gmail.com</div>
                        </div>
                        <button className="text-blue-600 text-xs font-bold hover:underline">Edit</button>
                      </div>
                    </div>
                  </section>

                  {/* Documents Details */}
                  <section className="border-t border-slate-100 pt-8">
                    <h3 className="text-sm font-black text-slate-900 mb-6">Documents Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="border border-slate-200 rounded-lg px-4 py-3 bg-slate-50 cursor-pointer hover:border-blue-300 transition-colors">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Passport No.</label>
                      </div>
                      <div className="border border-slate-200 rounded-lg px-4 py-3 bg-slate-50 flex items-center justify-between cursor-pointer hover:border-blue-300 transition-colors">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Expiry Date</label>
                        <FaChevronDown className="text-slate-300 text-xs" />
                      </div>
                      <div className="border border-slate-200 rounded-lg px-4 py-3 bg-slate-50 flex items-center justify-between cursor-pointer hover:border-blue-300 transition-colors">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Issuing Country</label>
                        <FaChevronDown className="text-slate-300 text-xs" />
                      </div>
                      <div className="border border-slate-200 rounded-lg px-4 py-3 bg-slate-50 cursor-pointer hover:border-blue-300 transition-colors">
                        <label className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">PAN Card Number</label>
                      </div>
                    </div>
                    <p className="text-[9px] text-slate-500 mt-2 font-semibold">
                      <span className="text-orange-500 font-bold">NOTE:</span> Your PAN No. will only be used for international bookings as per RBI Guidelines
                    </p>
                  </section>

                  {/* Travel Insurance */}
                  <section className="border-t border-slate-100 pt-8">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-sm font-black text-slate-900">Auto-Add Travel Insurance/Trip Secure</h3>
                      <div className="w-4 h-4 rounded-full border border-blue-400 text-blue-500 flex items-center justify-center text-[10px]">i</div>
                    </div>
                    <p className="text-xs text-slate-500 mb-6 font-semibold">Set your default choice for travel insurance/trip secure to be added automatically on your future flights and hotel bookings.</p>
                    
                    <div className="border border-slate-200 rounded-lg divide-y divide-slate-100">
                      <div className="flex justify-between items-center p-4 hover:bg-slate-50">
                        <div className="flex-1 text-[11px] italic text-slate-500 font-semibold">On booking a Domestic Hotel:</div>
                        <div className="flex-1 font-bold text-sm text-slate-800 text-center">Add Trip Secure (Hotels)</div>
                        <div className="flex-1 flex justify-end"><input type="checkbox" className="w-4 h-4 cursor-pointer" /></div>
                      </div>
                      <div className="flex justify-between items-center p-4 hover:bg-slate-50">
                        <div className="flex-1 text-[11px] italic text-slate-500 font-semibold">On booking a Domestic Flight:</div>
                        <div className="flex-1 font-bold text-sm text-slate-800 text-center">Add Trip Secure (Flights)</div>
                        <div className="flex-1 flex justify-end"><input type="checkbox" className="w-4 h-4 cursor-pointer" /></div>
                      </div>
                      <div className="flex justify-between items-center p-4 hover:bg-slate-50">
                        <div className="flex-1 text-[11px] italic text-slate-500 font-semibold">On booking an International Hotel:</div>
                        <div className="flex-1 font-bold text-sm text-slate-800 text-center">Add International Travel & Medical Insurance (Hotels)</div>
                        <div className="flex-1 flex justify-end"><input type="checkbox" className="w-4 h-4 cursor-pointer" /></div>
                      </div>
                      <div className="flex justify-between items-center p-4 hover:bg-slate-50">
                        <div className="flex-1 text-[11px] italic text-slate-500 font-semibold">On booking an International Flight:</div>
                        <div className="flex-1 font-bold text-sm text-slate-800 text-center">Add International Travel & Medical Insurance (Flights)</div>
                        <div className="flex-1 flex justify-end"><input type="checkbox" className="w-4 h-4 cursor-pointer" /></div>
                      </div>
                    </div>
                  </section>

                  {/* Frequent Flyer */}
                  <section className="border-t border-slate-100 pt-8">
                    <h3 className="text-sm font-black text-slate-900 mb-4">Frequent Flyer Details</h3>
                    <button className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:underline">
                      + Add
                    </button>
                  </section>
                </div>
              </div>
            )}

            {activeTab === "cotravellers" && (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[600px] flex flex-col animate-fade-in">
                <div className="px-8 py-5 border-b border-slate-100 flex justify-between items-center">
                  <h2 className="text-xl font-black text-slate-900">Co-Travellers</h2>
                  <button className="text-blue-600 font-bold text-xs uppercase tracking-wider hover:underline">+ Add New Co-Traveller</button>
                </div>
                
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                  <div className="w-48 h-48 bg-slate-50 rounded-full mb-6 relative overflow-hidden flex items-center justify-center">
                    {/* Placeholder illustration matching screenshot */}
                    <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=300&auto=format&fit=crop" alt="No travellers" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">No Co-travellers saved</h3>
                  <p className="text-sm text-slate-500 font-semibold">Make bookings faster and easier by saving your Co-traveller details</p>
                </div>
              </div>
            )}

            {activeTab === "password" && (
              <div className="bg-white rounded-xl shadow-lg shadow-slate-200/50 border border-slate-200 overflow-hidden max-w-[500px] mx-auto mt-10 p-8 animate-slide-up">
                <div className="flex items-center gap-2 mb-4">
                  <FaKey className="text-slate-400 text-xl" />
                  <h2 className="text-2xl font-black text-slate-900">Reset Password</h2>
                </div>
                <p className="text-sm text-slate-600 font-semibold mb-8">
                  Your password must be at least 8 characters long and include both small and uppercase letters, numbers, and special characters (e.g., $!@%)
                </p>

                <div className="space-y-4 mb-6">
                  <div className="border border-slate-200 rounded-lg px-4 py-3 flex items-center justify-between focus-within:border-blue-400 transition-colors">
                    <input type="password" placeholder="OLD PASSWORD" className="text-sm font-bold w-full outline-none placeholder:text-slate-400" />
                    <FaEye className="text-slate-400 cursor-pointer hover:text-slate-600" />
                  </div>
                  <div className="border border-slate-200 rounded-lg px-4 py-3 flex items-center justify-between focus-within:border-blue-400 transition-colors">
                    <input type="password" placeholder="NEW PASSWORD" className="text-sm font-bold w-full outline-none placeholder:text-slate-400" />
                    <FaEye className="text-slate-400 cursor-pointer hover:text-slate-600" />
                  </div>
                </div>

                <div className="text-blue-600 text-sm font-bold mb-8 cursor-pointer hover:underline inline-block">Forgot your password?</div>

                <div className="flex gap-4">
                  <button onClick={() => setActiveTab("profile")} className="flex-1 py-3 rounded-lg border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-colors">Cancel</button>
                  <button className="flex-1 py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">RESET PASSWORD</button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
