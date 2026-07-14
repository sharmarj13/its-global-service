"use client";

import React, { useState } from "react";
import { FaPaperPlane, FaRobot, FaUser, FaRegLightbulb } from "react-icons/fa";

interface Message {
  sender: "user" | "ai";
  text: string;
}

export default function AiChat() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "Hello! I am your ITS AI Travel Assistant. Ask me anything about destinations, budget planning, or itineraries!" },
  ]);
  const [input, setInput] = useState("");

  const suggestionPrompts = [
    "Plan a 5-day honeymoon in Kyoto",
    "Best budget hotels in Singapore",
    "Suggest a scenic drive around Tokyo",
  ];

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const updatedMessages: Message[] = [...messages, { sender: "user" as const, text: textToSend }];
    setMessages(updatedMessages);
    setInput("");

    setTimeout(() => {
      let aiResponse = "That sounds exciting! Let me search the best flights and custom stays matching that request for you...";
      if (textToSend.toLowerCase().includes("kyoto")) {
        aiResponse = "Kyoto is beautiful! I recommend visiting the Fushimi Inari Shrine early in the morning, booking a traditional Machiya townhome, and arranging a bullet train from Tokyo.";
      } else if (textToSend.toLowerCase().includes("singapore")) {
        aiResponse = "For Singapore on a budget, try checking out boutique hostels near Chinatown or Little India. Food is fantastic and cheap at Hawker Centers like Lau Pa Sat!";
      } else if (textToSend.toLowerCase().includes("tokyo")) {
        aiResponse = "A scenic drive around Tokyo is spectacular, especially near Tokyo Tower at night or heading out towards Hakone for Mt. Fuji views. I can book an electric Tesla for you right now!";
      }
      setMessages([...updatedMessages, { sender: "ai" as const, text: aiResponse }]);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-br from-white/95 via-white to-indigo-50/30 backdrop-blur-md rounded-[30px] p-5 flex flex-col h-[380px] justify-between border border-slate-200/80 shadow-xl relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center gap-3 pb-3 border-b border-slate-100 relative z-10">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-indigo-800 flex items-center justify-center text-white shadow-md shadow-primary/20">
          <FaRobot className="text-base" />
        </div>
        <div>
          <span className="font-extrabold text-xs text-slate-800 block">ITS AI Concierge</span>
          <span className="text-[9px] text-emerald-600 font-extrabold flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Online & Ready
          </span>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto my-3.5 space-y-3 pr-1 scrollbar-thin relative z-10">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-2.5 max-w-[85%] ${msg.sender === "user" ? "ml-auto flex-row-reverse" : ""}`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] shadow-sm ${msg.sender === "user" ? "bg-primary text-white" : "bg-slate-200 text-slate-600"}`}>
              {msg.sender === "user" ? <FaUser /> : <FaRobot />}
            </div>
            <div className={`p-3 rounded-2xl text-[11px] leading-relaxed shadow-sm transition-all ${
              msg.sender === "user"
                ? "bg-gradient-to-br from-primary to-indigo-800 text-white rounded-tr-none shadow-indigo-500/10"
                : "bg-gradient-to-br from-indigo-50/70 to-blue-50/40 text-slate-800 rounded-tl-none border border-indigo-100/30"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Suggestion Prompts */}
      {messages.length === 1 && (
        <div className="mb-3 space-y-1.5 relative z-10">
          <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block flex items-center gap-1">
            <FaRegLightbulb className="text-amber-500" /> Suggestions:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {suggestionPrompts.map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(p)}
                className="text-[9px] text-left text-slate-700 hover:text-white bg-slate-100 hover:bg-slate-900 border border-slate-200 hover:border-slate-900 px-3 py-1 rounded-full transition-all duration-300 shadow-sm"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input controls */}
      <div className="flex items-center gap-2 relative z-10">
        <input
          type="text"
          placeholder="Ask AI Travel Assistant..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
          className="flex-1 px-3.5 py-2.5 rounded-xl text-[11px] border border-slate-200 bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary shadow-inner"
        />
        <button
          onClick={() => handleSend(input)}
          className="bg-gradient-to-br from-primary to-indigo-800 hover:brightness-110 text-white p-3 rounded-xl transition-all shadow-md shadow-primary/20"
        >
          <FaPaperPlane className="text-[10px]" />
        </button>
      </div>
    </div>
  );
}
