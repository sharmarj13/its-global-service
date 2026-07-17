"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { FaChevronRight, FaChevronDown, FaHistory, FaRupeeSign, FaInfoCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import MyCashModal from "@/components/wallet/MyCashModal";
import RewardBonusModal from "@/components/wallet/RewardBonusModal";

export default function WalletPage() {
  const router = useRouter();
  const [showMyCashModal, setShowMyCashModal] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [activeHistoryTab, setActiveHistoryTab] = useState<"All" | "My Cash" | "Reward Bonus">("All");
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  
  // Dummy transactions for the UI
  const transactions = [
    { id: 1, type: "credit", amount: 500, title: "Promotional Bonus", date: "16 Jul 2026, 10:45 AM", category: "Reward Bonus" },
    { id: 2, type: "debit", amount: 200, title: "Flight Booking Discount", date: "10 Jul 2026, 04:20 PM", category: "Reward Bonus" },
    { id: 3, type: "credit", amount: 1500, title: "Cancellation Refund", date: "02 Jul 2026, 09:15 AM", category: "My Cash" },
    { id: 4, type: "debit", amount: 1500, title: "Hotel Booking", date: "28 Jun 2026, 02:30 PM", category: "My Cash" },
    { id: 5, type: "credit", amount: 300, title: "ITS Black Milestone", date: "15 Jun 2026, 11:00 AM", category: "My Cash" }
  ];

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

      <div className="pt-[120px] max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <div className="bg-white rounded-xl shadow-sm px-6 py-4 flex items-center gap-3 mb-8 w-max border border-slate-200">
          <span className="text-blue-500 font-bold cursor-pointer hover:underline text-sm" onClick={() => router.push('/profile')}>My Account</span>
          <FaChevronRight className="text-[10px] text-slate-400" />
          <span className="text-slate-800 font-bold text-sm">Wallet</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column - Balances */}
          <div className="w-full lg:w-[400px] flex-shrink-0 flex flex-col gap-4 animate-slide-up">
            
            {/* Total Balance Banner */}
            <div className="bg-gradient-to-br from-primary via-primary/95 to-primary-hover rounded-t-xl text-white p-8 text-center shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="text-4xl font-black flex items-center justify-center gap-1">
                  <FaRupeeSign className="text-2xl" /> 0
                </div>
                <div className="text-xs font-bold tracking-widest text-indigo-100 mt-2 uppercase">Wallet Balance</div>
              </div>
            </div>

            {/* Wallet Cards Container */}
            <div className="bg-white rounded-b-xl shadow-sm border border-slate-200 p-6 flex flex-col gap-6 -mt-4">
              
              {/* My Cash Card */}
              <div 
                className="flex items-center justify-between cursor-pointer group hover:bg-slate-50 p-4 -mx-4 rounded-xl transition-all"
                onClick={() => setShowMyCashModal(true)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-[#00a8cc] shadow-md flex items-center justify-center text-white font-black italic shadow-secondary/20 group-hover:scale-110 transition-transform">
                    ITS
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-primary transition-colors">My Cash</h3>
                    <div className="bg-secondary text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mt-0.5 shadow-sm">
                      Use Unrestricted
                    </div>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <div className="text-lg font-black text-slate-900 flex items-center gap-1">
                    <FaRupeeSign className="text-sm" /> 0
                  </div>
                  <div className="text-xs font-bold text-blue-500 group-hover:underline">How to earn?</div>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100"></div>

              {/* Reward Bonus Card */}
              <div 
                className="flex items-center justify-between cursor-pointer group hover:bg-slate-50 p-4 -mx-4 rounded-xl transition-all"
                onClick={() => setShowRewardModal(true)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-hover shadow-md flex items-center justify-center text-white font-black italic shadow-accent/20 rotate-45 group-hover:scale-110 transition-transform">
                    <div className="-rotate-45">ITS</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-primary transition-colors">Reward Bonus</h3>
                    <div className="bg-slate-400 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider inline-block mt-0.5 shadow-sm">
                      Use With Restrictions
                    </div>
                  </div>
                </div>
                <div className="text-right flex flex-col items-end">
                  <div className="text-lg font-black text-slate-900 flex items-center gap-1">
                    <FaRupeeSign className="text-sm" /> 0
                  </div>
                  <div className="text-xs font-bold text-blue-500 group-hover:underline">How to earn?</div>
                </div>
              </div>
            </div>

            {/* Quick FAQs */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 mt-2 overflow-hidden divide-y divide-slate-100">
              
              {/* FAQ 1 */}
              <div className="flex flex-col">
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => setActiveAccordion(activeAccordion === "mycash_what" ? null : "mycash_what")}
                >
                  <span className="font-bold text-slate-800 text-sm">What is My Cash?</span>
                  <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${activeAccordion === 'mycash_what' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === "mycash_what" && (
                  <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                    My Cash is the amount earned via cancellation refunds, reaching ITS Black milestones and spends accumulated via ITS-ICICI Bank credit card. The old wallet+ cash balance is also now a part of My Cash.
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="flex flex-col">
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => setActiveAccordion(activeAccordion === "mycash_expire" ? null : "mycash_expire")}
                >
                  <span className="font-bold text-slate-800 text-sm">When does My Cash expire?</span>
                  <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${activeAccordion === 'mycash_expire' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === "mycash_expire" && (
                  <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                    My Cash earned via cancellation refunds never expires. My Cash earned via ITS Black milestones will expire after 3 months of earning.
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="flex flex-col">
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => setActiveAccordion(activeAccordion === "mycash_applicable" ? null : "mycash_applicable")}
                >
                  <span className="font-bold text-slate-800 text-sm">Where is My Cash applicable?</span>
                  <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${activeAccordion === 'mycash_applicable' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === "mycash_applicable" && (
                  <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                    My Cash can be fully used on all flight, hotel, and holiday bookings across the ITS Global platform without any restrictions.
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="flex flex-col">
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => setActiveAccordion(activeAccordion === "reward_what" ? null : "reward_what")}
                >
                  <span className="font-bold text-slate-800 text-sm">What is Reward Bonus?</span>
                  <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${activeAccordion === 'reward_what' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === "reward_what" && (
                  <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                    Reward Bonus is the restricted amount earned in wallet through ITS Global's promotional campaigns.
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="flex flex-col">
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => setActiveAccordion(activeAccordion === "reward_expire" ? null : "reward_expire")}
                >
                  <span className="font-bold text-slate-800 text-sm">When does Reward Bonus expire?</span>
                  <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${activeAccordion === 'reward_expire' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === "reward_expire" && (
                  <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                    Reward Bonus generally expires within 3 months from the date of earning, unless otherwise specified.
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="flex flex-col">
                <button 
                  className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                  onClick={() => setActiveAccordion(activeAccordion === "reward_applicable" ? null : "reward_applicable")}
                >
                  <span className="font-bold text-slate-800 text-sm">Where is Reward Bonus applicable?</span>
                  <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${activeAccordion === 'reward_applicable' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === "reward_applicable" && (
                  <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                    Click the Reward Bonus box above to view the full usage criteria and applicability table.
                  </div>
                )}
              </div>

            </div>

          </div>

          {/* Right Column - Transaction History */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col animate-slide-up" style={{ animationDelay: '100ms' }}>
            
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-200 px-8 py-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <FaHistory />
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900">Transaction History</h2>
                  <p className="text-xs text-slate-500 font-semibold mt-0.5">Track all your wallet credits and debits</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setActiveHistoryTab("All")}
                  className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors ${activeHistoryTab === "All" ? "text-slate-600 bg-white border border-slate-200 shadow-sm" : "text-slate-500 hover:text-slate-800 border border-transparent"}`}
                >All</button>
                <button 
                  onClick={() => setActiveHistoryTab("My Cash")}
                  className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors ${activeHistoryTab === "My Cash" ? "text-slate-600 bg-white border border-slate-200 shadow-sm" : "text-slate-500 hover:text-slate-800 border border-transparent"}`}
                >My Cash</button>
                <button 
                  onClick={() => setActiveHistoryTab("Reward Bonus")}
                  className={`text-xs font-bold px-4 py-2 rounded-lg transition-colors ${activeHistoryTab === "Reward Bonus" ? "text-slate-600 bg-white border border-slate-200 shadow-sm" : "text-slate-500 hover:text-slate-800 border border-transparent"}`}
                >Reward Bonus</button>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto">
              <div className="divide-y divide-slate-100">
                {transactions.filter(txn => activeHistoryTab === "All" || txn.category === activeHistoryTab).length > 0 ? (
                  transactions.filter(txn => activeHistoryTab === "All" || txn.category === activeHistoryTab).map(txn => (
                    <div key={txn.id} className="px-8 py-6 hover:bg-slate-50 transition-colors flex items-center justify-between group cursor-pointer">
                      <div className="flex items-start gap-4">
                        <div className={`mt-1 w-2 h-2 rounded-full ${txn.category === 'My Cash' ? 'bg-secondary' : 'bg-accent'}`}></div>
                        <div>
                          <h3 className="font-bold text-slate-800 text-sm">{txn.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] font-bold text-slate-500">{txn.category}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                            <span className="text-[10px] font-semibold text-slate-400">{txn.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`font-black text-lg flex items-center gap-0.5 ${txn.type === 'credit' ? 'text-emerald-500' : 'text-slate-700'}`}>
                        {txn.type === 'credit' ? '+' : '-'} <FaRupeeSign className="text-sm" />{txn.amount}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-16 flex flex-col items-center justify-center text-center">
                    <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                      <FaHistory className="text-3xl text-slate-300" />
                    </div>
                    <h3 className="font-black text-slate-800 text-lg">No Transactions Yet</h3>
                    <p className="text-sm text-slate-500 font-medium mt-2 max-w-sm">Your wallet transaction history will appear here once you start earning or using wallet cash.</p>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>

      <MyCashModal show={showMyCashModal} onClose={() => setShowMyCashModal(false)} />
      <RewardBonusModal show={showRewardModal} onClose={() => setShowRewardModal(false)} />
    </div>
  );
}
