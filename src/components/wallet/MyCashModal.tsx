"use client";

import React, { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";

interface MyCashModalProps {
  show: boolean;
  onClose: () => void;
}

export default function MyCashModal({ show, onClose }: MyCashModalProps) {
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
        <div className="p-8 border-b border-slate-100 flex justify-between items-start">
          <div className="pr-8">
            <h2 className="text-2xl font-black text-slate-800 mb-2">What is My Cash?</h2>
            <p className="text-sm text-slate-600 font-medium">Unrestricted amount credited in wallet thru ITS Black and cancellation refunds</p>
          </div>
          <div className="flex flex-col items-end">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 transition-colors p-2 hover:bg-slate-100 rounded-full"
            >
              <FaTimes className="text-lg" />
            </button>
            <div className="flex flex-col items-end mt-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-[#00a8cc] shadow-md flex items-center justify-center text-white font-black italic text-lg shadow-secondary/30 mb-2">
                ITS
              </div>
              <div className="text-xl font-black text-slate-900">₹ 0</div>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="overflow-y-auto p-4 sm:p-8 flex-1 bg-slate-50">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 divide-y divide-slate-100">
            {/* Accordion 1 */}
            <div className="flex flex-col">
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => toggleAccordion("what")}
              >
                <span className="font-bold text-slate-800 text-sm">What is My Cash?</span>
                <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${openAccordion === 'what' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === "what" && (
                <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                  My Cash is the amount earned via cancellation refunds, reaching ITS Black milestones and spends accumulated via ITS-ICICI Bank credit card. The old wallet+ cash balance is also now a part of My Cash.
                </div>
              )}
            </div>

            {/* Accordion 2 */}
            <div className="flex flex-col">
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => toggleAccordion("expire")}
              >
                <span className="font-bold text-slate-800 text-sm">When does My Cash expire?</span>
                <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${openAccordion === 'expire' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === "expire" && (
                <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                  My Cash earned via cancellation refunds never expires. My Cash earned via ITS Black milestones will expire after 3 months of earning. My Cash earned via ITS-ICICI cobrand card will expire after 12 months of credit date.
                </div>
              )}
            </div>

            {/* Accordion 3 */}
            <div className="flex flex-col">
              <button 
                className="w-full text-left px-6 py-5 flex items-center justify-between hover:bg-slate-50 transition-colors"
                onClick={() => toggleAccordion("applicable")}
              >
                <span className="font-bold text-slate-800 text-sm">Where is My Cash applicable?</span>
                <FaChevronDown className={`text-blue-500 text-xs transition-transform duration-300 ${openAccordion === 'applicable' ? 'rotate-180' : ''}`} />
              </button>
              {openAccordion === "applicable" && (
                <div className="px-6 pb-6 text-sm text-slate-600 font-medium leading-loose bg-slate-50/80 pt-4 border-t border-slate-100">
                  My Cash can be fully used on all flight, hotel, and holiday bookings across the ITS Global platform without any restrictions.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
