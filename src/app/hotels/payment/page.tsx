"use client";

import React, { useState } from "react";
import { FaShieldAlt, FaChevronDown, FaWallet, FaUserCircle, FaChevronRight, FaArrowLeft, FaCreditCard, FaBuilding, FaMobileAlt, FaInfoCircle, FaSearch, FaCheckCircle, FaLock } from "react-icons/fa";

export default function PaymentPage() {
  const [activeView, setActiveView] = useState<"menu" | "card" | "netbanking" | "upi" | "emi" | "wallets">("menu");

  const renderPaymentMenu = () => (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-slate-50">
        <h3 className="font-black text-slate-900 text-lg">Payment Options</h3>
      </div>

      <div className="flex flex-col divide-y divide-slate-100">
        {/* UPI Option */}
        <div onClick={() => setActiveView("upi")} className="flex justify-between items-center p-5 hover:bg-slate-50 cursor-pointer transition-colors group">
          <div className="flex items-center gap-4">
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-upi-logo-icon-download-in-svg-png-gif-file-formats--unified-payments-interface-payment-money-transfer-logos-icons-1747946.png" className="w-8 h-8 object-contain" alt="UPI" />
            <div>
              <div className="font-black text-slate-800">UPI Options</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Pay Directly From Your Bank Account</div>
            </div>
          </div>
          <FaChevronRight className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Credit & Debit Cards Option */}
        <div onClick={() => setActiveView("card")} className="flex justify-between items-center p-5 hover:bg-slate-50 cursor-pointer transition-colors group">
          <div className="flex items-center gap-4">
            <FaCreditCard className="text-blue-500 text-3xl" />
            <div>
              <div className="font-black text-slate-800">Credit & Debit Cards</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Visa, Mastercard, Amex, Rupay and more</div>
            </div>
          </div>
          <FaChevronRight className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* EMI Option */}
        <div onClick={() => setActiveView("emi")} className="flex justify-between items-center p-5 hover:bg-slate-50 cursor-pointer transition-colors group">
          <div className="flex items-center gap-4">
            <div className="relative">
              <FaCreditCard className="text-slate-400 text-3xl" />
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5"><FaInfoCircle className="text-blue-500 text-[10px]" /></div>
            </div>
            <div>
              <div className="font-black text-slate-800">EMI</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">Credit/Debit Card & Cardless EMI available</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full">NO COST EMI</span>
            <FaChevronRight className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* Net Banking Option */}
        <div onClick={() => setActiveView("netbanking")} className="flex justify-between items-center p-5 hover:bg-slate-50 cursor-pointer transition-colors group">
          <div className="flex items-center gap-4">
            <FaBuilding className="text-blue-500 text-3xl" />
            <div>
              <div className="font-black text-slate-800">Net Banking</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">40+ Banks Available</div>
            </div>
          </div>
          <FaChevronRight className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Gift Cards & E-wallets */}
        <div onClick={() => setActiveView("wallets")} className="flex justify-between items-center p-5 hover:bg-slate-50 cursor-pointer transition-colors group">
          <div className="flex items-center gap-4">
            <FaWallet className="text-slate-500 text-3xl" />
            <div>
              <div className="font-black text-slate-800">Gift Cards & e-wallets</div>
              <div className="text-xs text-slate-500 font-semibold mt-0.5">ITS Gift cards & Amazon Pay</div>
            </div>
          </div>
          <FaChevronRight className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );

  const renderCardView = () => (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
      <div className="p-4 border-b border-slate-100 flex items-center gap-3">
        <button onClick={() => setActiveView("menu")} className="text-blue-500 hover:text-blue-700 flex items-center gap-1 font-bold text-xs uppercase tracking-wider">
          <FaArrowLeft /> ALL PAYMENT OPTIONS
        </button>
      </div>
      <div className="p-4 border-b border-slate-100 bg-slate-50">
        <h3 className="font-black text-slate-900 text-lg">Cards</h3>
      </div>

      <div className="p-6">
        <div className="flex gap-4 mb-6">
          <FaCreditCard className="text-blue-600 text-2xl mt-1" />
          <div>
            <div className="text-sm font-black text-slate-800">Enter card details</div>
            <div className="text-xs text-slate-500 font-semibold mt-0.5">We support all major domestic & international cards</div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 flex justify-between items-center mb-6">
          <span className="text-xs text-slate-700 font-semibold">Please ensure your card is enabled for online transaction.</span>
          <span className="text-xs font-bold text-blue-600 cursor-pointer">KNOW MORE</span>
        </div>

        <div className="space-y-4 max-w-md">
          <div className="relative">
            <input type="text" placeholder="ENTER CARD NUMBER" className="w-full border border-slate-300 rounded-lg p-3 text-sm font-bold text-slate-800 outline-none focus:border-blue-500" />
          </div>

          <div className="flex gap-4">
            <div className="flex-1 border border-slate-300 rounded-lg p-3 flex justify-between items-center cursor-pointer">
              <span className="text-sm font-bold text-slate-500">MM</span>
              <FaChevronDown className="text-blue-500 text-xs" />
            </div>
            <div className="flex-1 border border-slate-300 rounded-lg p-3 flex justify-between items-center cursor-pointer">
              <span className="text-sm font-bold text-slate-500">YY</span>
              <FaChevronDown className="text-blue-500 text-xs" />
            </div>
            <div className="flex-1 relative">
              <input type="password" placeholder="CVV" className="w-full border border-slate-300 rounded-lg p-3 text-sm font-bold text-slate-800 outline-none focus:border-blue-500" />
              <FaInfoCircle className="absolute right-3 top-3.5 text-slate-400 text-sm" />
            </div>
          </div>

          <button className="w-full bg-slate-200 text-white font-black text-sm py-4 rounded-lg mt-4 cursor-not-allowed uppercase tracking-wider">
            PAY
          </button>
        </div>
      </div>
    </div>
  );

  const renderNetBankingView = () => (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden animate-fade-in relative pb-20">
      <div className="p-4 border-b border-slate-100 flex items-center gap-3">
        <button onClick={() => setActiveView("menu")} className="text-blue-500 hover:text-blue-700 flex items-center gap-1 font-bold text-xs uppercase tracking-wider">
          <FaArrowLeft /> ALL PAYMENT OPTIONS
        </button>
      </div>
      <div className="p-4 border-b border-slate-100 bg-slate-50">
        <h3 className="font-black text-slate-900 text-lg">Net banking</h3>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl">
            <FaBuilding />
          </div>
          <span className="font-black text-slate-800 text-sm">40+ Banks Available</span>
        </div>

        <div className="relative mb-6 max-w-lg">
          <FaSearch className="absolute left-4 top-3.5 text-slate-400" />
          <input type="text" placeholder="Search Bank Here" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 pl-10 pr-4 text-sm font-semibold text-slate-800 outline-none focus:border-blue-500" />
        </div>

        <div className="max-w-lg border border-slate-200 rounded-lg overflow-hidden h-[300px] overflow-y-auto relative mb-6">
          <div className="bg-slate-50 p-3 border-b border-slate-200 text-[10px] font-black text-slate-800 uppercase tracking-wider sticky top-0 z-10">
            POPULAR BANKS
          </div>
          <div className="flex flex-col divide-y divide-slate-100">
            {['Axis Bank', 'HDFC Bank', 'ICICI Bank', 'State Bank of India'].map((bank, i) => (
              <label key={bank} className={`flex items-center gap-4 p-4 cursor-pointer ${i === 1 ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}>
                <input type="radio" name="bank" defaultChecked={i === 1} className="w-4 h-4 text-blue-600" />
                <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center font-black text-[10px] text-slate-400">B</div>
                <span className="text-sm font-semibold text-slate-800">{bank}</span>
              </label>
            ))}
            <div className="bg-slate-50 p-3 border-y border-slate-200 text-[10px] font-black text-slate-800 uppercase tracking-wider">
              ALL BANKS
            </div>
            {['Airtel Payments Bank', 'AU Small Finance Bank'].map(bank => (
              <label key={bank} className="flex items-center gap-4 p-4 hover:bg-slate-50 cursor-pointer">
                <input type="radio" name="bank" className="w-4 h-4 text-blue-600" />
                <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center font-black text-[10px] text-slate-400">B</div>
                <span className="text-sm font-semibold text-slate-800">{bank}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-lg uppercase tracking-wider transition-colors">
          PAY ON BANK PAGE
        </button>
      </div>
    </div>
  );

  const renderUPIView = () => (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
      <div className="p-4 border-b border-slate-100 flex items-center gap-3">
        <button onClick={() => setActiveView("menu")} className="text-blue-500 hover:text-blue-700 flex items-center gap-1 font-bold text-xs uppercase tracking-wider">
          <FaArrowLeft /> ALL PAYMENT OPTIONS
        </button>
      </div>
      <div className="p-4 border-b border-slate-100 bg-slate-50">
        <h3 className="font-black text-slate-900 text-lg">UPI</h3>
      </div>

      <div className="p-6">
        <div className="flex gap-4 items-start mb-8">
          <div className="w-10 h-10 rounded-full border border-blue-200 flex items-center justify-center text-blue-500 bg-blue-50 shrink-0">
            <FaSearch className="text-lg" />
          </div>
          <div>
            <h4 className="font-black text-slate-900 text-sm mb-4">Scan QR & Pay</h4>
            <div className="flex gap-4 items-center">
              <div className="w-[120px] h-[120px] rounded-lg border-2 border-dashed border-slate-300 relative bg-slate-50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-2 bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover opacity-60"></div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-[10px] px-4 py-2 rounded-lg relative z-10 uppercase tracking-widest shadow-md">
                  VIEW QR
                </button>
              </div>
              <div className="text-xs font-semibold text-slate-600">
                <div className="font-black text-slate-900 mb-1">Scan to Pay</div>
                <div>Instant Refund & High Success Rate</div>
                <div className="flex gap-2 mt-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" className="h-5" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="Paytm" className="h-5" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4 text-xs font-bold text-slate-400">OR</span>
          </div>
        </div>

        <div className="flex gap-4 items-start mt-6">
          <div className="w-10 h-10 rounded-full border border-blue-200 flex items-center justify-center text-blue-500 bg-blue-50 shrink-0">
            <FaChevronRight className="text-lg" />
          </div>
          <div className="flex-1">
            <h4 className="font-black text-slate-900 text-sm flex items-center gap-2">
              Share Payment Link <span className="bg-rose-100 text-rose-500 text-[9px] px-1.5 py-0.5 rounded border border-rose-200">new</span>
            </h4>
            <div className="text-xs text-orange-600 font-semibold mt-1 mb-4">
              Payments via UPI ID are discontinued as per latest NPCI guidelines - You can still request money by sharing the payment link.
            </div>

            <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 mb-4 text-[11px] font-semibold text-slate-700 space-y-2">
              <div className="flex gap-2"><FaCheckCircle className="text-emerald-500 shrink-0 mt-0.5" /> Link for payment of ₹14,452 will be valid for 10 minutes.</div>
              <div className="flex gap-2"><FaCheckCircle className="text-emerald-500 shrink-0 mt-0.5" /> Any offer you apply will also be valid under the same terms and benefits.</div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-lg uppercase tracking-wider transition-colors">
              SHARE PAYMENT LINK
            </button>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center gap-3 text-xs font-semibold text-slate-600">
        All UPI apps supported
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" className="h-4" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="Paytm" className="h-4" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="h-4" />
        & more
      </div>
    </div>
  );

  const renderEMIView = () => (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden animate-fade-in relative pb-20">
      <div className="p-4 border-b border-slate-100 flex items-center gap-3">
        <button onClick={() => setActiveView("menu")} className="text-blue-500 hover:text-blue-700 flex items-center gap-1 font-bold text-xs uppercase tracking-wider">
          <FaArrowLeft /> ALL PAYMENT OPTIONS
        </button>
      </div>

      <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
        <h3 className="font-black text-slate-900 text-lg">EMI</h3>
        <div className="flex gap-2">
          <button className="border border-blue-500 text-blue-600 bg-white px-3 py-1 rounded text-[10px] font-black uppercase">CREDIT CARD</button>
          <button className="border border-slate-200 text-slate-600 bg-white px-3 py-1 rounded text-[10px] font-bold uppercase hover:bg-slate-50">DEBIT CARD</button>
          <button className="border border-slate-200 text-slate-600 bg-white px-3 py-1 rounded text-[10px] font-bold uppercase hover:bg-slate-50">CARDLESS EMI</button>
        </div>
      </div>

      <div className="p-6 flex gap-6">
        {/* Vertical Stepper Indicator */}
        <div className="flex flex-col items-center shrink-0">
          <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xs">1</div>
          <div className="w-px h-full bg-blue-500 my-1"></div>
          <div className="w-6 h-6 rounded-full bg-slate-200 text-white flex items-center justify-center font-bold text-xs">2</div>
          <div className="w-px h-6 bg-slate-200 my-1"></div>
          <div className="w-6 h-6 rounded-full bg-slate-200 text-white flex items-center justify-center font-bold text-xs">3</div>
        </div>

        <div className="flex-1">
          <h4 className="font-black text-slate-900 text-sm">Select your bank</h4>
          <div className="text-xs text-slate-500 font-semibold mb-4">Below is the list of banks and their starting interest rates</div>

          <div className="relative mb-4">
            <FaSearch className="absolute left-3 top-3 text-slate-400" />
            <input type="text" placeholder="Search here" className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2.5 pl-9 pr-4 text-xs font-semibold text-slate-800 outline-none focus:border-blue-500" />
          </div>

          <div className="border border-slate-200 rounded-lg overflow-hidden h-[240px] overflow-y-auto relative mb-6">
            <div className="bg-slate-50 p-2.5 border-b border-slate-200 text-[10px] font-black text-slate-800 uppercase tracking-wider sticky top-0 z-10">
              ALL BANKS
            </div>
            <div className="flex flex-col divide-y divide-slate-100">
              {['Standard Chartered Bank', 'Jammu & Kashmir Bank', 'Yes Bank', 'ONECARD', 'AU Small Finance Bank', 'Canara Bank', 'DBS Bank'].map((bank, i) => (
                <label key={bank} className={`flex items-center gap-3 p-3 cursor-pointer ${i === 0 ? 'bg-blue-50/50' : 'hover:bg-slate-50'}`}>
                  <input type="radio" name="emi_bank" defaultChecked={i === 0} className="w-4 h-4 text-blue-600" />
                  <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center font-black text-[10px] text-slate-400">B</div>
                  <span className="text-sm font-semibold text-slate-800">{bank}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="text-slate-300 font-bold text-xs flex items-center gap-2 mb-2"><span className="opacity-0">2</span> Select tenure</div>
          <div className="text-slate-300 font-bold text-xs flex items-center gap-2"><span className="opacity-0">3</span> Provide card details</div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-lg uppercase tracking-wider transition-colors">
          NEXT
        </button>
      </div>
    </div>
  );

  const renderWalletsView = () => (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden animate-fade-in relative pb-20">
      <div className="p-4 border-b border-slate-100 flex items-center gap-3">
        <button onClick={() => setActiveView("menu")} className="text-blue-500 hover:text-blue-700 flex items-center gap-1 font-bold text-xs uppercase tracking-wider">
          <FaArrowLeft /> ALL PAYMENT OPTIONS
        </button>
      </div>
      <div className="p-4 border-b border-slate-100 bg-slate-50">
        <h3 className="font-black text-slate-900 text-lg">E Wallets and Gift Cards</h3>
      </div>

      <div className="p-6">
        <h4 className="font-black text-slate-900 text-sm mb-3">Select an E-wallet</h4>
        <div className="border border-slate-200 rounded-lg p-4 mb-6">
          <label className="flex items-center gap-4 cursor-pointer">
            <input type="radio" name="wallet" defaultChecked className="w-5 h-5 text-blue-600" />
            <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center text-[10px] font-black">pay</div>
            <span className="font-black text-slate-800">Amazon Pay</span>
          </label>
        </div>

        <h4 className="font-black text-slate-900 text-sm mb-3">Select a Gift Card</h4>
        <div className="border border-slate-200 rounded-lg p-4">
          <label className="flex items-center gap-4 cursor-pointer">
            <input type="radio" name="wallet" className="w-5 h-5 text-blue-600" />
            <div className="w-8 h-8 rounded-full border border-orange-200 bg-orange-50 text-orange-500 flex items-center justify-center"><FaWallet /></div>
            <span className="font-black text-slate-800">Gift Card</span>
          </label>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-3 rounded-lg uppercase tracking-wider transition-colors">
          PAY NOW
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f2f4f7] font-sans pb-16">

      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <img src="/image/ITS-Global-White.png" alt="Logo" className="h-8 object-contain filter invert" />
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
          <FaShieldAlt /> SAFE & SECURED
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* LEFT COLUMN */}
          <div className="flex-1 space-y-4">

            {/* Hotel Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 flex gap-4">
                <div className="w-16 h-16 rounded overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hotel" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h2 className="text-base font-black text-slate-900 leading-tight">Radisson Blu Plaza Delhi Airport</h2>
                    <span className="text-[10px] font-bold text-blue-600 cursor-pointer">VIEW DETAILS <FaChevronDown className="inline text-[8px]" /></span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-[10px] font-semibold text-slate-600">
                    <span className="flex items-center gap-1"><FaCheckCircle className="text-slate-400" /> Sat, 25 Jul'26 - Sun, 26 Jul'26</span>
                    <span className="flex items-center gap-1"><FaUserCircle className="text-slate-400" /> 1 Room | 2 Adults | 1 Night</span>
                  </div>
                  <div className="text-[10px] text-emerald-600 font-bold mt-1">Free cancellation till 2:59 PM, 24 Jul 2026</div>
                </div>
              </div>
              <div className="bg-slate-50 border-t border-slate-100 p-3 text-[10px] font-semibold text-slate-600 flex gap-4">
                <span className="flex items-center gap-1"><FaUserCircle className="text-slate-400" /> Kuldeep Sharma (Primary)</span>
                <span className="flex items-center gap-1"><FaMobileAlt className="text-slate-400" /> rj13sv9061mk@gmail.com, +91-7014557249</span>
              </div>
            </div>

            {/* Login Banner */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex justify-between items-center">
              <div>
                <div className="text-sm font-black text-slate-900">Additional discounts and saved payment options</div>
                <div className="text-[10px] font-semibold text-slate-600 mt-0.5">Login to access saved payments and discounts!</div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-xs px-6 py-2 rounded shadow-sm">LOGIN</button>
            </div>

            {/* Gift Cards Banner */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3">
                <FaWallet className="text-orange-500 text-xl" />
                <span className="font-black text-slate-900 text-sm">Gift Cards</span>
              </div>
              <span className="text-[10px] font-bold text-blue-600 flex items-center gap-1">VIEW ALL <FaChevronDown /></span>
            </div>

            {/* Dynamic View Area */}
            {activeView === "menu" && renderPaymentMenu()}
            {activeView === "card" && renderCardView()}
            {activeView === "netbanking" && renderNetBankingView()}
            {activeView === "upi" && renderUPIView()}
            {activeView === "emi" && renderEMIView()}
            {activeView === "wallets" && renderWalletsView()}

          </div>

          {/* RIGHT COLUMN */}
          <div className="w-full lg:w-[320px] flex-shrink-0 space-y-4">

            {/* Total Due Box */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-5 flex justify-between items-center border-b border-slate-100">
                <h3 className="font-black text-xl text-slate-900">Total Due</h3>
                <div className="font-black text-xl text-emerald-600">₹ 14,452</div>
              </div>
              <div className="p-5 space-y-4">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                  <span>Hotel Fare</span>
                  <span className="font-bold text-slate-900">₹ 11,661</span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                  <span>Taxes</span>
                  <span className="font-bold text-slate-900">₹ 2,798</span>
                </div>
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700">
                  <span>Trip Secure</span>
                  <span className="font-bold text-slate-900">₹ 138</span>
                </div>
                <div className="flex justify-between items-center text-xs font-bold text-emerald-600">
                  <span>MMTSMARTDEAL</span>
                  <span>- ₹ 145</span>
                </div>
              </div>
            </div>

            {/* Scan to Pay Box */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <h3 className="font-black text-slate-900 text-lg mb-1">Scan to Pay</h3>
              <div className="flex gap-4">
                <div className="flex-1 text-[10px] font-semibold text-slate-600 leading-tight">
                  Instant Refund & High Success Rate
                  <div className="flex gap-2 mt-4 opacity-50">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Paytm_logo.png" alt="Paytm" className="h-4" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" alt="PhonePe" className="h-4" />
                  </div>
                </div>
                <div className="w-[100px] h-[100px] rounded-lg border-2 border-dashed border-slate-300 relative bg-slate-50 flex items-center justify-center overflow-hidden">
                  {/* Fake QR Pattern */}
                  <div className="absolute inset-2 bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover opacity-60"></div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-[8px] px-3 py-1.5 rounded relative z-10 uppercase tracking-widest shadow-md">
                    VIEW QR
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Security Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xl">
            <FaLock />
          </div>
          <div>
            <div className="text-xs font-black text-emerald-600 uppercase tracking-wider">ITS Global IS SECURED</div>
            <div className="text-[10px] font-bold text-emerald-600">100% RBI Compliant</div>
          </div>
        </div>
        <div className="flex items-center gap-4 opacity-70">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="MasterCard" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/PCI_DSS_Logo.svg" alt="PCI DSS" className="h-6" />
        </div>
        <div className="text-[9px] font-semibold text-slate-500 max-w-xs leading-tight">
          By continuing to pay, I understand and agree with the <span className="text-blue-600 hover:underline cursor-pointer">Terms of Service</span>, <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span> and <span className="text-blue-600 hover:underline cursor-pointer">User Agreement</span> of ITS Global.
        </div>
      </div>

    </div>
  );
}
