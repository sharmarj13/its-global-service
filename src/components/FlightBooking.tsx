"use client";

import React, { useState } from "react";
import { FaPlane, FaSearch, FaUser, FaInfoCircle, FaChevronLeft } from "react-icons/fa";
import { MdEventSeat, MdOutlineAirlineSeatReclineExtra } from "react-icons/md";

interface Flight {
  id: string;
  airline: string;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  price: number;
}

const mockFlights: Flight[] = [
  { id: "NH112", airline: "All Nippon Airways", from: "HND", to: "LAX", departure: "19:05", arrival: "13:15", duration: "10h 10m", price: 820 },
  { id: "SQ022", airline: "Singapore Airlines", from: "SIN", to: "EWR", departure: "23:35", arrival: "06:00", duration: "18h 25m", price: 1250 },
  { id: "EK503", airline: "Emirates", from: "DXB", to: "LHR", departure: "14:30", arrival: "18:45", duration: "7h 15m", price: 680 },
];

export default function FlightBooking() {
  const [search, setSearch] = useState({ from: "", to: "", date: "" });
  const [flights, setFlights] = useState<Flight[]>(mockFlights);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [bookingMsg, setBookingMsg] = useState<string | null>(null);

  const rows = Array.from({ length: 10 }, (_, i) => i + 1);
  const cols = ["A", "B", "C", "D", "E", "F"];
  const occupiedSeats = ["1A", "2F", "3C", "4D", "6B", "7E", "9A"];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search.from && !search.to) {
      setFlights(mockFlights);
      return;
    }
    const filtered = mockFlights.filter(
      (f) =>
        f.from.toLowerCase().includes(search.from.toLowerCase()) ||
        f.to.toLowerCase().includes(search.to.toLowerCase())
    );
    setFlights(filtered);
  };

  const handleSeatClick = (seat: string) => {
    if (occupiedSeats.includes(seat)) return;
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleFlightSelect = (flight: Flight) => {
    setSelectedFlight(flight);
    setSelectedSeats([]);
  };

  const handleFinalBooking = () => {
    if (selectedSeats.length === 0) return;
    const dateStr = search.date ? ` on ${search.date}` : "";
    setBookingMsg(`Flight ${selectedFlight?.id}${dateStr} seats ${selectedSeats.join(", ")} confirmed successfully!`);
    setTimeout(() => {
      setBookingMsg(null);
      setSelectedFlight(null);
      setSelectedSeats([]);
    }, 6000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Title */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">Flight Booking</h2>
        <p className="text-slate-500 text-xs mt-1">Book premium first class, business, and economy flights globally.</p>
      </div>

      {bookingMsg && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 animate-scale-in text-center text-xs font-semibold">
          {bookingMsg}
        </div>
      )}

      {/* Flight Search */}
      {!selectedFlight && (
        <>
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-slate-50/50 rounded-xl border border-slate-200/60">
            <div className="space-y-1">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">From</label>
              <input
                type="text"
                placeholder="Airport (e.g. HND, SIN)"
                value={search.from}
                onChange={(e) => setSearch({ ...search, from: e.target.value })}
                className="w-full glass-input px-3 py-2 rounded-xl text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">To</label>
              <input
                type="text"
                placeholder="Airport (e.g. LAX, EWR)"
                value={search.to}
                onChange={(e) => setSearch({ ...search, to: e.target.value })}
                className="w-full glass-input px-3 py-2 rounded-xl text-xs"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Departure Date</label>
              <input
                type="date"
                value={search.date}
                onChange={(e) => setSearch({ ...search, date: e.target.value })}
                className="w-full glass-input px-3 py-2 rounded-xl text-xs text-slate-700"
              />
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all duration-300 shadow-md shadow-primary/10 hover:scale-[1.01]"
              >
                <FaSearch />
                <span>Search Flights</span>
              </button>
            </div>
          </form>

          {/* Flights Display List */}
          <div className="space-y-3">
            {flights.map((flight) => (
              <div key={flight.id} className="glass-card p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="p-2.5 bg-primary/5 border border-primary/10 rounded-xl text-primary">
                    <FaPlane className="text-lg" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block">{flight.airline}</span>
                    <span className="text-sm font-bold text-slate-800">{flight.id}</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-6 w-full md:w-auto">
                  <div className="text-center">
                    <span className="text-lg font-black text-slate-800">{flight.from}</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{flight.departure}</span>
                  </div>
                  <div className="flex flex-col items-center flex-1 min-w-[80px]">
                    <span className="text-[9px] text-slate-400 uppercase tracking-widest">{flight.duration}</span>
                    <div className="w-full h-[1px] bg-slate-300 relative mt-1.5">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border border-primary rounded-full flex items-center justify-center">
                        <FaPlane className="text-[6px] text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-black text-slate-800">{flight.to}</span>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{flight.arrival}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-5 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <div className="text-left md:text-right">
                    <span className="text-[9px] text-slate-500 block">Roundtrip / Cabin</span>
                    <span className="text-base font-bold text-slate-850">${flight.price}</span>
                  </div>
                  <button
                    onClick={() => handleFlightSelect(flight)}
                    className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
                  >
                    Select Seats
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Interactive Seat Selector Module */}
      {selectedFlight && (
        <div className="glass p-5 rounded-2xl grid grid-cols-1 lg:grid-cols-3 gap-6 animate-scale-in">
          {/* Seat Layout */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Configure Seating</span>
                <h3 className="text-base font-bold text-slate-800">Select Seats for {selectedFlight.id}</h3>
              </div>
              <button
                onClick={() => setSelectedFlight(null)}
                className="text-[10px] text-slate-500 hover:text-primary px-2.5 py-1 rounded-lg border border-slate-200 hover:border-primary transition-all flex items-center gap-1"
              >
                <FaChevronLeft /> Back
              </button>
            </div>

            {/* Seat Map */}
            <div className="bg-slate-50 rounded-xl p-4 overflow-x-auto border border-slate-200/50">
              <div className="min-w-[400px] space-y-3">
                <div className="flex justify-center text-[10px] text-slate-500 font-bold mb-2 uppercase tracking-widest bg-slate-200/50 py-1 rounded-lg">
                  Aircraft Front
                </div>

                {rows.map((row) => (
                  <div key={row} className="flex items-center justify-between gap-1.5">
                    <span className="w-5 text-center text-[10px] text-slate-400 font-bold">{row}</span>
                    <div className="flex items-center gap-1">
                      {cols.slice(0, 3).map((col) => {
                        const seatCode = `${row}${col}`;
                        const isOccupied = occupiedSeats.includes(seatCode);
                        const isSelected = selectedSeats.includes(seatCode);

                        return (
                          <button
                            key={seatCode}
                            disabled={isOccupied}
                            onClick={() => handleSeatClick(seatCode)}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                              isOccupied
                                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                                : isSelected
                                ? "bg-primary text-white scale-105 shadow-sm shadow-primary/20"
                                : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                            }`}
                          >
                            <MdEventSeat className="text-base" />
                          </button>
                        );
                      })}
                    </div>
                    {/* Aisle */}
                    <div className="w-6 flex items-center justify-center text-[9px] text-slate-400 font-bold select-none uppercase">
                      •
                    </div>
                    <div className="flex items-center gap-1">
                      {cols.slice(3).map((col) => {
                        const seatCode = `${row}${col}`;
                        const isOccupied = occupiedSeats.includes(seatCode);
                        const isSelected = selectedSeats.includes(seatCode);

                        return (
                          <button
                            key={seatCode}
                            disabled={isOccupied}
                            onClick={() => handleSeatClick(seatCode)}
                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                              isOccupied
                                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                                : isSelected
                                ? "bg-primary text-white scale-105 shadow-sm shadow-primary/20"
                                : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                            }`}
                          >
                            <MdEventSeat className="text-base" />
                          </button>
                        );
                      })}
                    </div>
                    <span className="w-5 text-center text-[10px] text-slate-400 font-bold">{row}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Seat Map Legend */}
            <div className="flex justify-center gap-4 text-[10px] mt-2">
              <div className="flex items-center gap-1 text-slate-500">
                <span className="w-3 h-3 bg-white border border-slate-200 rounded" />
                <span>Available</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500">
                <span className="w-3 h-3 bg-primary rounded" />
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500">
                <span className="w-3 h-3 bg-slate-200 rounded" />
                <span>Occupied</span>
              </div>
            </div>
          </div>

          {/* Seat Map Ticket Summary */}
          <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-4 flex flex-col justify-between">
            <div>
              <h4 className="font-bold text-sm text-slate-800 mb-3">Fare Breakdown</h4>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Base Flight:</span>
                  <span className="text-slate-800 font-semibold">${selectedFlight.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Seats Count:</span>
                  <span className="text-slate-800 font-semibold">{selectedSeats.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Seats:</span>
                  <span className="text-primary font-bold">{selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}</span>
                </div>
                <div className="flex justify-between pt-2.5 border-t border-slate-250">
                  <span className="text-slate-500">Tax & Fees:</span>
                  <span className="text-slate-800 font-semibold">${Math.round(selectedFlight.price * selectedSeats.length * 0.1)}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-250">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-slate-500 text-xs">Total Estimate:</span>
                <span className="text-2xl font-black text-slate-800">
                  ${selectedFlight.price * selectedSeats.length + Math.round(selectedFlight.price * selectedSeats.length * 0.1)}
                </span>
              </div>
              <button
                disabled={selectedSeats.length === 0}
                onClick={handleFinalBooking}
                className={`w-full py-2.5 rounded-xl font-bold flex items-center justify-center gap-1.5 transition-all text-xs ${
                  selectedSeats.length > 0
                    ? "bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/10"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                <MdOutlineAirlineSeatReclineExtra className="text-base" />
                <span>Confirm Reservation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
