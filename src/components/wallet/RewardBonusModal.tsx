"use client";

import React, { useState } from "react";
import { FaTimes, FaChevronDown, FaInfoCircle } from "react-icons/fa";

interface RewardBonusModalProps {
  show: boolean;
  onClose: () => void;
}

export default function RewardBonusModal({ show, onClose }: RewardBonusModalProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  if (!show) return null;

  const toggleAccordion = (id: string) => {
    if (openAccordion === id) setOpenAccordion(null);
    else setOpenAccordion(id);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in px-4">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden animate-scale-in relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-8 border-b border-slate-100 flex justify-between items-start shrink-0">
          <div className="pr-8">
            <h2 className="text-2xl font-black text-slate-800 mb-2">What is Reward Bonus?</h2>
            <p className="text-sm text-slate-600 font-medium">Restricted amount earned in wallet through ITS Global's promotional campaigns</p>
          </div>
          <div className="flex flex-col items-end">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors p-2 hover:bg-slate-100 rounded-full"
            >
              <FaTimes className="text-lg" />
            </button>
            <div className="flex flex-col items-end mt-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-hover shadow-md flex items-center justify-center text-white font-black italic text-lg shadow-accent/30 mb-2 rotate-45">
                <div className="-rotate-45">ITS</div>
              </div>
              <div className="text-xl font-black text-slate-900">₹ 0</div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-8 flex-1 bg-slate-50">
          
          <h3 className="text-lg font-black text-slate-800 mb-4">Usage Criteria</h3>
          
          {/* Usage Criteria Table */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
            <div className="bg-gradient-to-r from-primary to-primary-hover px-6 py-3 flex justify-between items-center text-white font-bold text-xs">
              <div className="uppercase tracking-wider">Category</div>
              <div className="text-right flex items-center gap-1.5 uppercase tracking-wider">
                <FaInfoCircle /> Applicable Amount<br/>
                <span className="text-[9px] font-medium">*whichever is lower</span>
              </div>
            </div>
            
            <div className="divide-y divide-slate-100">
              <div className="flex justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-xs font-semibold">
                <div className="text-slate-700">Domestic Flights</div>
                <div className="text-slate-900 text-right">Rs. 500 or 2% of total booking amount*</div>
              </div>
              <div className="flex justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-xs font-semibold">
                <div className="text-slate-700">International Flights</div>
                <div className="text-slate-900 text-right">Rs. 1250 or 5% of total booking amount*</div>
              </div>
              <div className="px-6 py-2 bg-orange-50 text-[10px] text-orange-600 font-bold border-y border-orange-100">
                NOTE : In flight booking, reward bonus cannot be applied along with coupon
              </div>
              <div className="flex justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-xs font-semibold">
                <div className="text-slate-700">Domestic Hotels</div>
                <div className="text-slate-900 text-right">Rs. 2000 or 2% of total pre-tax booking amount*</div>
              </div>
              <div className="flex justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-xs font-semibold">
                <div className="text-slate-700">International Hotels</div>
                <div className="text-slate-900 text-right">Rs. 2000 or 2% of total booking amount*</div>
              </div>
              <div className="flex justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-xs font-semibold">
                <div className="text-slate-700">Online Holiday</div>
                <div className="text-slate-900 text-right">Rs. 2000 or 2% of total booking amount*</div>
              </div>
              <div className="flex justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-xs font-semibold">
                <div className="text-slate-700">Bus</div>
                <div className="text-slate-900 text-right line-through text-slate-400">Not Applicable on Bus Bookings</div>
              </div>
              <div className="flex justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-xs font-semibold">
                <div className="text-slate-700">Rails</div>
                <div className="text-slate-900 text-right line-through text-slate-400">Not Applicable on Rail Bookings</div>
              </div>
              <div className="flex justify-between px-6 py-4 hover:bg-slate-50 transition-colors text-xs font-semibold">
                <div className="text-slate-700">Cabs</div>
                <div className="text-slate-900 text-right line-through text-slate-400">Not Applicable on Cab Bookings</div>
              </div>
            </div>
          </div>

          {/* Accordions */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
            {/* Accordion 1 */}
            <div className="flex flex-col">
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => toggleAccordion("what")}
              >
                <span className="font-bold text-slate-800 text-sm">What is Reward Bonus?</span>
                <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${openAccordion === 'what' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === "what" && (
                <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                  Reward Bonus is the restricted amount earned in wallet through ITS Global's promotional campaigns. This amount can only be used on eligible bookings subject to the Usage Criteria mentioned above.
                </div>
              )}
            </div>

            {/* Accordion 2 */}
            <div className="flex flex-col">
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => toggleAccordion("expire")}
              >
                <span className="font-bold text-slate-800 text-sm">When does Reward Bonus expire?</span>
                <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${openAccordion === 'expire' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === "expire" && (
                <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                  Reward Bonus generally expires within 3 months from the date of earning, unless otherwise specified in the specific promotional campaign terms.
                </div>
              )}
            </div>

            {/* Accordion 3 */}
            <div className="flex flex-col">
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => toggleAccordion("applicable")}
              >
                <span className="font-bold text-slate-800 text-sm">Where is Reward Bonus applicable?</span>
                <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${openAccordion === 'applicable' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === "applicable" && (
                <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                  Please refer to the Usage Criteria table above for exact applicability limits across Flights, Hotels, and Holidays.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
