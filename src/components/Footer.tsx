"use client";

import React, { useState } from "react";
import { 
  FaPhoneAlt, 
  FaWhatsapp, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaChevronDown, 
  FaHeart,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

interface FooterProps {
  onFAQScroll: () => void;
}

export default function Footer({ onFAQScroll }: FooterProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is your package cancellation policy?",
      a: "Flights and hotel packages follow the policy of our third-party provider aggregators. Cab cancellations follow our internal flat-rate cancellation guidelines.",
    },
    {
      q: "How does the AI Itinerary planner function?",
      a: "Our system takes your destination, travel interests, and days to outline suggested timelines. You can easily click Save to add the trip itinerary directly to your profile.",
    },
    {
      q: "Can I coordinate multiple booking rooms?",
      a: "Yes, our system accommodates multi-room reservations and custom group passenger details during the checkout flow.",
    },
  ];

  return (
    <footer className="mt-24 border-t border-slate-900 bg-slate-950 pt-16 pb-8 px-6 text-slate-400 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        
        {/* Column 1: About Us */}
        <div className="space-y-4">
          <div className="flex items-center cursor-pointer">
            <div className="bg-[#191975] py-2 px-3.5 rounded-xl shadow-md border border-white/5">
              <img
                src="/image/ITS-Global-White.png"
                alt="ITS Global Logo"
                className="h-7 w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
            The objective of this project is to build a unified travel platform that enables users to plan and book their trips within a single system. Flights, hotels, and cabs under one roof.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="font-extrabold text-xs uppercase text-white tracking-wider">Book Services</h4>
          <ul className="space-y-2.5 text-[11px] font-bold text-slate-350">
            <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" /> Search Flights
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" /> Explore Hotels
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" /> Request Luxury Cabs
            </li>
            <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-cyan-400" /> AI Itinerary Builder
            </li>
          </ul>
        </div>

        {/* Column 3: FAQ Layer Accordion */}
        <div id="faq-section" className="space-y-4 md:col-span-1">
          <h4 className="font-extrabold text-xs uppercase text-white tracking-wider">FAQs Help Section</h4>
          <div className="space-y-2.5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-900 pb-2.5">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left py-1 text-slate-300 hover:text-white font-bold text-xs flex justify-between items-center transition-colors"
                >
                  <span className="truncate pr-2">{faq.q}</span>
                  <FaChevronDown className={`text-[8px] text-cyan-400 transition-transform duration-350 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <p className="text-[10px] text-slate-450 mt-1.5 leading-relaxed animate-fade-in font-medium">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Column 4: Contact Us & Channels */}
        <div id="contact-section" className="space-y-4">
          <h4 className="font-extrabold text-xs uppercase text-white tracking-wider">Contact Channels</h4>
          <div className="space-y-3 text-[11px] text-slate-350 font-bold">
            <div className="flex items-center gap-2.5">
              <FaPhoneAlt className="text-cyan-400 text-xs" />
              <a href="tel:+15551239988" className="hover:text-cyan-400 transition-colors">+1 (555) 123-9988</a>
            </div>
            <div className="flex items-center gap-2.5">
              <FaWhatsapp className="text-emerald-400 text-xs" />
              <a href="https://wa.me/15551239988" className="hover:text-cyan-400 transition-colors">WhatsApp: Chat Live</a>
            </div>
            <div className="flex items-center gap-2.5">
              <FaEnvelope className="text-indigo-400 text-xs" />
              <a href="mailto:support@itsglobal.com" className="hover:text-cyan-400 transition-colors">support@itsglobal.com</a>
            </div>
            <div className="flex items-start gap-2.5">
              <FaMapMarkerAlt className="text-slate-500 text-xs mt-0.5" />
              <span className="text-[10px] text-slate-450 leading-relaxed font-medium">Suite 400, Travel Tower, Silicon Valley, CA</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-550 gap-4 relative z-10">
        <div>© 2026 ITS Global Travels Inc. All rights reserved.</div>
        
        {/* Social Links */}
        <div className="flex items-center gap-2.5">
          <a href="#" className="w-7 h-7 rounded-full bg-slate-900 hover:bg-cyan-400 hover:text-slate-950 flex items-center justify-center text-xs transition-all duration-300 border border-slate-800"><FaFacebookF /></a>
          <a href="#" className="w-7 h-7 rounded-full bg-slate-900 hover:bg-cyan-400 hover:text-slate-950 flex items-center justify-center text-xs transition-all duration-300 border border-slate-800"><FaTwitter /></a>
          <a href="#" className="w-7 h-7 rounded-full bg-slate-900 hover:bg-cyan-400 hover:text-slate-950 flex items-center justify-center text-xs transition-all duration-300 border border-slate-800"><FaInstagram /></a>
          <a href="#" className="w-7 h-7 rounded-full bg-slate-900 hover:bg-cyan-400 hover:text-slate-950 flex items-center justify-center text-xs transition-all duration-300 border border-slate-800"><FaLinkedinIn /></a>
        </div>

        <div className="flex items-center gap-1.5">
          <span>Made with</span>
          <FaHeart className="text-cyan-400 animate-pulse text-xs" />
          <span>for premium travelers globally.</span>
        </div>
      </div>
    </footer>
  );
}
