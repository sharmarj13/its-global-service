"use client";

import React, { useState } from "react";
import { FaSearch, FaStar, FaMapMarkerAlt, FaBed, FaWifi, FaSwimmingPool, FaChevronRight } from "react-icons/fa";

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  price: number;
  image: string;
  amenities: string[];
}

const mockHotels: Hotel[] = [
  {
    id: 1,
    name: "The Ritz-Carlton, Kyoto",
    location: "Kyoto, Japan",
    rating: 4.9,
    price: 350,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
    amenities: ["Spa", "Pool", "Wifi", "Breakfast"],
  },
  {
    id: 2,
    name: "Aman Tokyo",
    location: "Tokyo, Japan",
    rating: 4.8,
    price: 420,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    amenities: ["Gym", "Bar", "Wifi", "Ocean View"],
  },
  {
    id: 3,
    name: "Marina Bay Sands",
    location: "Singapore",
    rating: 4.7,
    price: 280,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80",
    amenities: ["Infinity Pool", "Casino", "Wifi", "Sky Lounge"],
  },
];

export default function HotelBooking() {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState({ checkIn: "", checkOut: "" });
  const [guests, setGuests] = useState(1);
  const [hotels, setHotels] = useState<Hotel[]>(mockHotels);
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination) {
      setHotels(mockHotels);
      return;
    }
    const filtered = mockHotels.filter((hotel) =>
      hotel.location.toLowerCase().includes(destination.toLowerCase()) ||
      hotel.name.toLowerCase().includes(destination.toLowerCase())
    );
    setHotels(filtered);
  };

  const handleBook = (hotelName: string) => {
    setBookingSuccess(`Successfully booked stay at ${hotelName}! Check your email for reservation details.`);
    setTimeout(() => setBookingSuccess(null), 5000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Title */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 tracking-tight">Hotel Booking</h2>
        <p className="text-slate-500 text-xs mt-1">Explore and reserve stays at top-tier premium resorts and suites worldwide.</p>
      </div>

      {/* Booking Success Alert */}
      {bookingSuccess && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 animate-scale-in text-center text-xs font-semibold">
          {bookingSuccess}
        </div>
      )}

      {/* Search Console */}
      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-slate-50/50 rounded-xl border border-slate-200/60">
        <div className="space-y-1">
          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Destination</label>
          <div className="relative">
            <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm" />
            <input
              type="text"
              placeholder="Where are you going?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full glass-input pl-9 pr-3 py-2 rounded-xl text-xs"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Check-In Date</label>
          <input
            type="date"
            value={dates.checkIn}
            onChange={(e) => setDates({ ...dates, checkIn: e.target.value })}
            className="w-full glass-input px-3 py-2 rounded-xl text-xs"
          />
        </div>

        <div className="space-y-1">
          <label className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Check-Out Date</label>
          <input
            type="date"
            value={dates.checkOut}
            onChange={(e) => setDates({ ...dates, checkOut: e.target.value })}
            className="w-full glass-input px-3 py-2 rounded-xl text-xs"
          />
        </div>

        <div className="flex items-end">
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-1.5 bg-primary hover:bg-primary-hover text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all duration-300 shadow-md shadow-primary/10 hover:scale-[1.01]"
          >
            <FaSearch />
            <span>Search Stays</span>
          </button>
        </div>
      </form>

      {/* Hotel Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div key={hotel.id} className="relative h-80 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-end">
              {/* Hotel image */}
              <img
                src={hotel.image}
                alt={hotel.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
              
              {/* Floating Rating Badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-lg flex items-center gap-1 text-yellow-600 text-[10px] font-bold shadow-sm z-20">
                <FaStar />
                <span>{hotel.rating}</span>
              </div>

              {/* Unique Overlaid Content */}
              <div className="relative p-4 text-white space-y-3 z-10">
                <div>
                  <div className="flex items-center gap-1 text-[9px] text-cyan-300 font-bold uppercase tracking-wider">
                    <FaMapMarkerAlt />
                    <span>{hotel.location}</span>
                  </div>
                  <h3 className="text-sm font-black mt-1 leading-snug drop-shadow-sm">
                    {hotel.name}
                  </h3>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {hotel.amenities.map((amenity, idx) => (
                      <span key={idx} className="text-[8px] uppercase font-bold tracking-wider text-slate-100 bg-white/10 backdrop-blur-sm border border-white/15 px-2 py-0.5 rounded-md">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2.5 border-t border-white/15 flex items-center justify-between">
                  <div>
                    <span className="text-[8px] text-slate-300 block uppercase tracking-wider font-bold">Price / night</span>
                    <span className="text-sm font-black text-cyan-300">${hotel.price}</span>
                  </div>
                  <button
                    onClick={() => handleBook(hotel.name)}
                    className="flex items-center gap-1 bg-gradient-to-r from-cyan-400 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 text-slate-900 px-3.5 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all shadow-md shadow-cyan-500/10 hover:scale-[1.03]"
                  >
                    <span>Reserve</span>
                    <FaChevronRight className="text-[8px]" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center py-10 text-slate-400 text-xs">
            No hotels match your destination criteria. Try searching "Kyoto", "Tokyo", or "Singapore".
          </div>
        )}
      </div>
    </div>
  );
}
