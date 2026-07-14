"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaCarSide, FaBolt, FaChevronRight, FaRegCheckCircle } from "react-icons/fa";
import { MdMyLocation } from "react-icons/md";

interface Vehicle {
  id: string;
  name: string;
  type: string;
  capacity: number;
  ratePerKm: number;
  durationEst: string;
  icon: any;
  highlighted?: boolean;
}

const vehicles: Vehicle[] = [
  { id: "eco", name: "Eco Ride", type: "Hatchback & Compact", capacity: 4, ratePerKm: 1.2, durationEst: "5 mins away", icon: FaCarSide },
  { id: "lux", name: "Premium Luxe", type: "Executive Sedan", capacity: 4, ratePerKm: 2.5, durationEst: "3 mins away", icon: FaCarSide, highlighted: true },
  { id: "ev", name: "Tesla Model Y", type: "Electric Eco", capacity: 4, ratePerKm: 1.8, durationEst: "8 mins away", icon: FaBolt },
];

export default function CabBooking() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState<string>("lux");
  const [distance, setDistance] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [bookedCab, setBookedCab] = useState<any>(null);

  const calculateEstimate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup || !dropoff) return;
    setLoading(true);
    setTimeout(() => {
      setDistance(Math.floor(Math.random() * 20) + 5);
      setLoading(false);
    }, 1000);
  };

  const handleBook = () => {
    const vehicle = vehicles.find((v) => v.id === selectedVehicle);
    setBookedCab({
      vehicle: vehicle?.name,
      pickup,
      dropoff,
      driverName: "Alexander Pierce",
      driverPhone: "+1 (555) 234-5678",
      plateNumber: "TX-990-2K",
      eta: vehicle?.durationEst,
    });
  };

  const currentVehicle = vehicles.find((v) => v.id === selectedVehicle);
  const calculatedPrice = distance && currentVehicle ? Math.round(distance * currentVehicle.ratePerKm) : 0;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">Cab Booking</h2>
        <p className="text-slate-500 text-xs mt-1">On-demand luxury rides, city transfers, and eco-friendly electric vehicles.</p>
      </div>

      {bookedCab ? (
        /* Confirmed Cab Animation Card */
        <div className="glass p-6 rounded-2xl max-w-xl mx-auto text-center space-y-4 animate-scale-in border border-emerald-100">
          <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-white text-xl shadow-lg shadow-emerald-500/20">
            <FaRegCheckCircle />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">Your ride is on the way!</h3>
            <p className="text-slate-500 text-xs mt-1">Driver {bookedCab.driverName} will arrive at {bookedCab.pickup} in {bookedCab.eta}.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3.5 rounded-xl text-left text-xs max-w-sm mx-auto border border-slate-200/50">
            <div>
              <span className="text-slate-500 text-[10px] uppercase block">Vehicle</span>
              <span className="text-slate-800 font-bold">{bookedCab.vehicle}</span>
            </div>
            <div>
              <span className="text-slate-500 text-[10px] uppercase block">License Plate</span>
              <span className="text-slate-800 font-bold">{bookedCab.plateNumber}</span>
            </div>
            <div className="col-span-2 pt-2 border-t border-slate-200">
              <span className="text-slate-500 text-[10px] uppercase block">Driver Contact</span>
              <span className="text-slate-800 font-bold">{bookedCab.driverPhone}</span>
            </div>
          </div>

          <button
            onClick={() => {
              setBookedCab(null);
              setPickup("");
              setDropoff("");
              setDistance(0);
            }}
            className="px-4 py-2 rounded-lg border border-slate-200 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-slate-800 hover:border-slate-400 transition-all"
          >
            Cancel Ride
          </button>
        </div>
      ) : (
        /* Booking Interface */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Booking inputs form */}
          <div className="lg:col-span-2 space-y-4">
            <form onSubmit={calculateEstimate} className="bg-slate-50/50 p-4 rounded-xl border border-slate-200/60 space-y-3">
              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Pickup Location</label>
                <div className="relative">
                  <MdMyLocation className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                  <input
                    type="text"
                    required
                    placeholder="Enter pickup address"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    className="w-full glass-input pl-9 pr-3 py-2 rounded-xl text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Dropoff Destination</label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                  <input
                    type="text"
                    required
                    placeholder="Enter destination address"
                    value={dropoff}
                    onChange={(e) => setDropoff(e.target.value)}
                    className="w-full glass-input pl-9 pr-3 py-2 rounded-xl text-xs"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white hover:bg-slate-50 text-slate-700 font-bold py-2 rounded-xl border border-slate-200 transition-all text-xs flex items-center justify-center gap-1.5"
              >
                {loading ? "Calculating..." : "Find Available Rides"}
              </button>
            </form>

            {/* Cab Category Options */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-600 text-xs">Select Vehicle Class</h4>
              {vehicles.map((v) => {
                const Icon = v.icon;
                const isSelected = selectedVehicle === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVehicle(v.id)}
                    className={`w-full text-left p-3 rounded-xl flex items-center justify-between transition-all ${
                      isSelected
                        ? "bg-primary/5 border-2 border-primary/45 shadow-sm"
                        : "bg-white border border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isSelected ? "bg-primary text-white" : "bg-slate-100 text-slate-500"}`}>
                        <Icon className="text-lg" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-800 block text-xs flex items-center gap-1.5">
                          {v.name}
                          {v.id === "ev" && (
                            <span className="text-[8px] bg-emerald-100 text-emerald-700 border border-emerald-200 px-1.5 py-0.5 rounded font-black tracking-wider uppercase">
                              Eco
                            </span>
                          )}
                        </span>
                        <span className="text-[10px] text-slate-500">{v.type} • Max {v.capacity} guests</span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[9px] text-slate-400 block">{v.durationEst}</span>
                      <span className="text-xs font-bold text-slate-800">${v.ratePerKm}/km</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pricing Estimation card */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 flex flex-col justify-between h-fit min-h-[220px]">
            <div>
              <h4 className="font-bold text-sm text-slate-800 mb-3">Fare Invoice</h4>
              {distance > 0 ? (
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Distance:</span>
                    <span className="text-slate-800 font-bold">{distance} km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Base Rate:</span>
                    <span className="text-slate-800 font-bold">${currentVehicle?.ratePerKm}/km</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tolls & Booking:</span>
                    <span className="text-slate-800 font-bold">$5</span>
                  </div>
                </div>
              ) : (
                <div className="text-slate-400 text-xs py-4 text-center">
                  Fill in pickup & dropoff addresses to calculate live fare prices.
                </div>
              )}
            </div>

            {distance > 0 && (
              <div className="mt-4 pt-3 border-t border-slate-200">
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-slate-500 text-xs">Estimated Total:</span>
                  <span className="text-2xl font-black text-slate-800">${calculatedPrice + 5}</span>
                </div>
                <button
                  onClick={handleBook}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1 text-xs"
                >
                  <span>Request Ride</span>
                  <FaChevronRight className="text-[9px]" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
