"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaPaperPlane, FaUserCircle, FaRobot, FaSuitcaseRolling, FaPlane, FaHotel } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  isHtml?: boolean;
}

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your ITS AI Trip Planner ✨ Where would you like to travel?",
      sender: "ai",
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { id: Date.now(), text: userMsg, sender: "user" }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking and response
    setTimeout(() => {
      setIsTyping(false);
      
      let aiResponseText = "";
      let isHtml = false;

      if (userMsg.toLowerCase().includes("goa") || userMsg.toLowerCase().includes("beach")) {
        isHtml = true;
        aiResponseText = `
          <div class="space-y-2">
            <p>I found the perfect 4-day Goa itinerary for you! 🌴</p>
            <div class="bg-blue-50 border border-blue-100 rounded-lg p-3 text-xs text-slate-700">
              <div class="font-bold text-blue-700 mb-1 flex items-center gap-1">✈️ Flights (Round Trip)</div>
              <div>Delhi → Goa (Starts at ₹4,500)</div>
            </div>
            <div class="bg-rose-50 border border-rose-100 rounded-lg p-3 text-xs text-slate-700">
              <div class="font-bold text-rose-700 mb-1 flex items-center gap-1">🏨 Top Hotel Stay</div>
              <div>Taj Exotica Resort & Spa (South Goa)</div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-2">
              <button class="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition-colors">Book Package</button>
              <a href="/itinerary/create" class="w-full bg-indigo-600 text-white text-center font-bold py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center">Plan Itinerary</a>
            </div>
          </div>
        `;
      } else if (userMsg.toLowerCase().includes("hi") || userMsg.toLowerCase().includes("hello")) {
        aiResponseText = "Hello! I can help you find flights, suggest hotels, or plan an entire day-by-day itinerary. Try asking: 'Plan a 3-day trip to Manali'.";
      } else {
        aiResponseText = "That sounds exciting! I'm currently in demo mode, but I can help you search for the best flights and premium hotels for that destination. Would you like me to show you some options?";
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, text: aiResponseText, sender: "ai", isHtml }]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // If closed, render the floating input box
  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-[100] animate-bounce-short">
        <div 
          onClick={() => setIsOpen(true)}
          className="bg-white rounded-full shadow-2xl border-2 border-blue-100 px-6 py-4 flex items-center gap-3 cursor-text hover:border-blue-300 transition-all group w-[300px] lg:w-[350px]"
        >
          <span className="text-slate-400 font-medium text-sm flex-1">What are you looking for?</span>
          <BsStars className="text-blue-500 text-lg group-hover:rotate-12 transition-transform" />
        </div>
      </div>
    );
  }

  // If open, render the sidebar
  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Content */}
      <div className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col animate-slide-left border-l border-slate-100">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 flex items-center justify-between text-white shrink-0 shadow-md relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <BsStars className="text-xl" />
            </div>
            <div>
              <h3 className="font-black text-lg leading-tight">ITS AI Planner</h3>
              <p className="text-xs font-medium text-white/80">Online & ready to plan</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          >
            <FaTimes />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">Today</span>
          </div>
          
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
              {/* Avatar */}
              <div className="shrink-0 mt-1">
                {msg.sender === 'ai' ? (
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm shadow-sm">
                    <FaRobot />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-sm shadow-sm">
                    <FaUserCircle />
                  </div>
                )}
              </div>
              
              {/* Message Bubble */}
              <div className={`p-3.5 rounded-2xl text-sm shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-sm' 
                  : 'bg-white border border-slate-100 text-slate-700 rounded-tl-sm'
              }`}>
                {msg.isHtml ? (
                  <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                ) : (
                  <p className="leading-relaxed">{msg.text}</p>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 max-w-[85%]">
              <div className="shrink-0 mt-1 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm shadow-sm">
                <FaRobot />
              </div>
              <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1.5">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100 shrink-0 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-400/20 transition-all">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="E.g. Plan a 3-day trip to Goa..."
              className="flex-1 bg-transparent border-none outline-none text-sm font-medium text-slate-800 py-2 placeholder-slate-400"
            />
            <button 
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${inputValue.trim() && !isTyping ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md' : 'bg-slate-200 text-slate-400'}`}
            >
              <FaPaperPlane className="text-xs ml-0.5" />
            </button>
          </div>
          <div className="mt-2 text-center">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">AI can make mistakes. Verify important info.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
