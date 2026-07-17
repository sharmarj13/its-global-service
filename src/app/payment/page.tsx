"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { FaCreditCard, FaMobileAlt, FaBuilding, FaWallet, FaLock, FaChevronRight } from "react-icons/fa";

export default function PaymentPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("card");

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

      {/* Banner Area */}
      <div className="pt-[100px] bg-gradient-to-r from-primary to-secondary h-[200px] w-full absolute top-0 left-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-[120px]">
        
        <div className="mb-6">
          <h1 className="text-3xl font-black text-white">Complete Your Payment</h1>
          <p className="text-white/80 font-medium mt-1">Secure payment gateway powered by ITS Global</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Column: Payment Options */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-slide-up flex flex-col sm:flex-row min-h-[500px]">
            
            {/* Sidebar Tabs */}
            <div className="w-full sm:w-64 bg-slate-50 border-r border-slate-200 p-4">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 px-4 mt-2">Payment Options</div>
              
              <button 
                onClick={() => setActiveTab("card")}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all font-bold text-sm mb-2 ${activeTab === 'card' ? 'bg-blue-100/50 text-blue-700 shadow-sm border border-blue-200' : 'text-slate-600 hover:bg-white border border-transparent'}`}
              >
                <div className="flex items-center gap-3"><FaCreditCard className="text-lg" /> Credit/Debit Card</div>
                {activeTab === 'card' && <FaChevronRight className="text-[10px]" />}
              </button>
              
              <button 
                onClick={() => setActiveTab("upi")}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all font-bold text-sm mb-2 ${activeTab === 'upi' ? 'bg-blue-100/50 text-blue-700 shadow-sm border border-blue-200' : 'text-slate-600 hover:bg-white border border-transparent'}`}
              >
                <div className="flex items-center gap-3"><FaMobileAlt className="text-lg" /> UPI</div>
                {activeTab === 'upi' && <FaChevronRight className="text-[10px]" />}
              </button>

              <button 
                onClick={() => setActiveTab("netbanking")}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all font-bold text-sm mb-2 ${activeTab === 'netbanking' ? 'bg-blue-100/50 text-blue-700 shadow-sm border border-blue-200' : 'text-slate-600 hover:bg-white border border-transparent'}`}
              >
                <div className="flex items-center gap-3"><FaBuilding className="text-lg" /> Net Banking</div>
                {activeTab === 'netbanking' && <FaChevronRight className="text-[10px]" />}
              </button>

              <button 
                onClick={() => setActiveTab("wallet")}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all font-bold text-sm mb-2 ${activeTab === 'wallet' ? 'bg-blue-100/50 text-blue-700 shadow-sm border border-blue-200' : 'text-slate-600 hover:bg-white border border-transparent'}`}
              >
                <div className="flex items-center gap-3"><FaWallet className="text-lg" /> Wallets</div>
                {activeTab === 'wallet' && <FaChevronRight className="text-[10px]" />}
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 p-8">
              {activeTab === "card" && (
                <div className="animate-fade-in">
                  <h2 className="text-xl font-black text-slate-800 mb-6">Enter Card Details</h2>
                  
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">Card Number</label>
                      <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">Name on Card</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">CVV</label>
                        <input type="password" placeholder="***" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <button 
                      onClick={() => router.push('/booking-success')}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                    >
                      <FaLock /> Pay ₹ 5,400 Securely
                    </button>
                    <p className="text-center text-xs font-semibold text-slate-500 mt-4">By continuing, you agree to our Terms & Conditions</p>
                  </div>
                </div>
              )}

              {activeTab === "upi" && (
                <div className="animate-fade-in">
                  <h2 className="text-xl font-black text-slate-800 mb-6">Pay via UPI</h2>
                  <div className="mb-6">
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">Enter UPI ID</label>
                    <input type="text" placeholder="username@upi" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                  </div>
                  <button 
                    onClick={() => router.push('/booking-success')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                  >
                    Verify & Pay
                  </button>
                  
                  <div className="my-8 relative text-center">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
                    <span className="relative bg-white px-4 text-xs font-bold text-slate-400">OR SCAN QR CODE</span>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-40 h-40 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center flex-col gap-2 shadow-inner">
                      <FaMobileAlt className="text-3xl text-slate-400" />
                      <span className="text-xs font-bold text-slate-500">Scan via any UPI App</span>
                    </div>
                  </div>
                </div>
              )}
              
              {(activeTab === "netbanking" || activeTab === "wallet") && (
                <div className="animate-fade-in flex flex-col items-center justify-center h-full text-center pb-10">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    {activeTab === "netbanking" ? <FaBuilding className="text-3xl text-blue-500" /> : <FaWallet className="text-3xl text-blue-500" />}
                  </div>
                  <h2 className="text-xl font-black text-slate-800 mb-2">Select {activeTab === "netbanking" ? "Bank" : "Wallet"}</h2>
                  <p className="text-sm text-slate-500 font-medium max-w-[250px]">Choose from a list of popular providers in the next step to complete payment.</p>
                  <button 
                    onClick={() => router.push('/booking-success')}
                    className="mt-8 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all"
                  >
                    Proceed to Select
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[350px]">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 animate-slide-up" style={{ animationDelay: '100ms' }}>
              <h2 className="text-lg font-black text-slate-800 mb-4 pb-4 border-b border-slate-100">Fare Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>Base Fare</span>
                  <span>₹ 4,800</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>Taxes & Surcharges</span>
                  <span>₹ 650</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-green-600">
                  <span>Coupon Discount</span>
                  <span>- ₹ 50</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-between items-center mb-6">
                <span className="text-base font-black text-slate-800">Total Amount</span>
                <span className="text-xl font-black text-slate-900">₹ 5,400</span>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start gap-3">
                <div className="mt-0.5 text-emerald-500"><FaLock /></div>
                <div>
                  <div className="text-xs font-bold text-emerald-700">Safe & Secure Payments</div>
                  <div className="text-[10px] font-medium text-emerald-600/80 mt-1">100% Secure transaction via PCI DSS compliant gateways.</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
