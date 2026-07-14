"use client";

import React, { useState } from "react";
import { FaCalendarAlt, FaMapPin, FaCompass, FaChevronRight, FaPlus, FaCheckCircle } from "react-icons/fa";

interface DayPlan {
  day: number;
  title: string;
  activities: string[];
}

export default function ItineraryPlanner() {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState(3);
  const [interest, setInterest] = useState("Sightseeing");
  const [itinerary, setItinerary] = useState<DayPlan[] | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination) return;

    const mockPlans: DayPlan[] = Array.from({ length: duration }, (_, i) => ({
      day: i + 1,
      title: i === 0 ? "Arrival & Orientation" : i === duration - 1 ? "Souvenirs & Departure" : "Adventure & Cultural Exploration",
      activities: [
        `09:00 AM - Check-in and enjoy breakfast near ${destination}`,
        `11:30 AM - Custom ${interest} excursion led by local guide`,
        `03:00 PM - Afternoon leisure & photo walkthrough session`,
        `07:30 PM - Dine at a top-rated premium local restaurant`,
      ],
    }));

    setItinerary(mockPlans);
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaved(true);
  };

  return (
    <div className="glass rounded-2xl p-5 space-y-4 border border-slate-200/60 shadow-sm">
      {/* Title */}
      <div className="flex items-center gap-2 pb-2.5 border-b border-slate-100">
        <div className="p-2 bg-accent/15 rounded-xl text-accent">
          <FaCompass className="text-base" />
        </div>
        <div>
          <span className="font-bold text-xs text-slate-800 block">Smart Itinerary Builder</span>
          <span className="text-[10px] text-slate-400">Generate tailor-made schedules in seconds</span>
        </div>
      </div>

      {!itinerary ? (
        <form onSubmit={handleGenerate} className="space-y-3">
          <div className="space-y-1">
            <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Destination</label>
            <div className="relative">
              <FaMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
              <input
                type="text"
                required
                placeholder="Where are you planning to go?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full glass-input pl-8 pr-3 py-1.5 rounded-xl text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Duration (Days)</label>
              <select
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full glass-input px-2.5 py-1.5 rounded-xl text-xs bg-white text-slate-800"
              >
                <option value={3}>3 Days</option>
                <option value={5}>5 Days</option>
                <option value={7}>7 Days</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Travel Interest</label>
              <select
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full glass-input px-2.5 py-1.5 rounded-xl text-xs bg-white text-slate-800"
              >
                <option value="Sightseeing">Sightseeing</option>
                <option value="Adventure Sports">Adventure</option>
                <option value="Culinary & Wine">Food/Wine</option>
                <option value="Relaxation & Spa">Relaxation</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-2 rounded-xl transition-all text-xs flex items-center justify-center gap-1 shadow-md shadow-accent/10"
          >
            <span>Create Custom Plan</span>
            <FaChevronRight className="text-[9px]" />
          </button>
        </form>
      ) : (
        <div className="space-y-3 animate-scale-in">
          {/* Header Summary */}
          <div className="flex justify-between items-center bg-slate-100 p-2.5 rounded-xl border border-slate-200/50">
            <div>
              <span className="font-bold text-xs text-slate-800 block">{destination} Trip</span>
              <span className="text-[9px] text-slate-500">{duration} Days • {interest} theme</span>
            </div>
            <button
              onClick={handleSave}
              className={`px-2.5 py-1 rounded-lg text-[9px] font-bold transition-all ${
                isSaved
                  ? "bg-emerald-100 text-emerald-700 border border-emerald-250"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              {isSaved ? "Saved" : "Save Itinerary"}
            </button>
          </div>

          {/* Timeline */}
          <div className="space-y-3 max-h-[160px] overflow-y-auto pr-1">
            {itinerary.map((dayPlan) => (
              <div key={dayPlan.day} className="relative pl-4 border-l-2 border-primary/20 space-y-1 last:border-transparent">
                <div className="absolute left-[-5px] top-1 w-2 h-2 bg-primary rounded-full" />
                <span className="text-[9px] text-primary font-bold uppercase tracking-wider block">Day {dayPlan.day}: {dayPlan.title}</span>
                <ul className="space-y-0.5 text-[10px] text-slate-600 list-disc list-inside pl-1">
                  {dayPlan.activities.map((act, idx) => (
                    <li key={idx} className="truncate">{act}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button
            onClick={() => setItinerary(null)}
            className="w-full bg-white hover:bg-slate-50 text-slate-650 font-bold py-1.5 rounded-xl text-[10px] border border-slate-200 transition-all"
          >
            Create Another
          </button>
        </div>
      )}
    </div>
  );
}
