"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar, FaHeart, FaMapMarkerAlt, FaCheck, FaAngleDown, FaSearch, FaFilter } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import HorizontalHotelSearch from "@/components/HorizontalHotelSearch";

// Mock Data based on the screenshot
const mockHotels = [
  {
    id: "1",
    name: "Taj Resort & Convention Centre",
    location: "Dona Paula, Goa",
    distance: "12 km from center",
    rating: 4.8,
    reviews: 1245,
    stars: 5,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
    price: 15400,
    originalPrice: 22000,
    taxes: 1848,
    tags: ["Couple Friendly", "Free Cancellation", "Breakfast Included"],
    isSoldOut: false,
  },
  {
    id: "2",
    name: "The Leela Goa",
    location: "Cavelossim, Goa",
    distance: "18 km from center",
    rating: 4.9,
    reviews: 2100,
    stars: 5,
    image: "https://images.unsplash.com/photo-1551882547-ff40eb0d1b73?q=80&w=800&auto=format&fit=crop",
    price: 24500,
    originalPrice: 35000,
    taxes: 2940,
    tags: ["Beachfront", "Luxury", "Spa"],
    isSoldOut: false,
  },
  {
    id: "3",
    name: "Hard Rock Hotel Goa",
    location: "Calangute, Goa",
    distance: "2 km from beach",
    rating: 4.5,
    reviews: 850,
    stars: 4,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
    price: 8500,
    originalPrice: 12000,
    taxes: 1020,
    tags: ["Party Vibe", "Live Music", "Free Wi-Fi"],
    isSoldOut: false,
  },
  {
    id: "4",
    name: "W Goa",
    location: "Vagator, Goa",
    distance: "500m from Vagator Beach",
    rating: 4.7,
    reviews: 1500,
    stars: 5,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    price: 18000,
    originalPrice: 25000,
    taxes: 2160,
    tags: ["Pet Friendly", "Ocean View"],
    isSoldOut: false,
  },
  {
    id: "5",
    name: "ITC Grand Goa",
    location: "Arossim, Goa",
    distance: "Beachfront",
    rating: 4.6,
    reviews: 1900,
    stars: 5,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
    price: 16500,
    originalPrice: 24000,
    taxes: 1980,
    tags: ["Resort", "Family Friendly"],
    isSoldOut: true,
  }
];

export default function SearchResults() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("hotel");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f1f8] via-[#f4f7fb] to-[#F2F2F2]">
      {/* Reusing Navbar - solid background since it's not over an image */}
      <div className="bg-gradient-to-r from-[#0a1930] via-[#0f294d] to-[#0a1930] pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isLoggedIn={false}
          username=""
          onLoginClick={() => { }}
          onLogout={() => { }}
          onSupportClick={() => { }}
        />

        {/* Search Header Info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-6">
          <HorizontalHotelSearch />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 relative z-10 pb-16">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left Sidebar (Filters) */}
          <div className="w-full lg:w-[280px] flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <FaFilter className="text-blue-500" /> Filters
                </h3>
                <span className="text-xs font-bold text-blue-600 cursor-pointer hover:underline">CLEAR ALL</span>
              </div>

              {/* Popular Filters */}
              <div className="p-5 border-b border-slate-100">
                <h4 className="text-sm font-bold text-slate-800 mb-3">Popular Filters</h4>
                <div className="space-y-3">
                  {["Free Breakfast", "Free Cancellation", "Pool", "Couple Friendly"].map(filter => (
                    <label key={filter} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                        <FaCheck className="text-[10px] text-transparent" />
                      </div>
                      <span className="text-sm text-slate-600 group-hover:text-slate-900">{filter}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="p-5 border-b border-slate-100">
                <h4 className="text-sm font-bold text-slate-800 mb-3">Price per night</h4>
                <div className="space-y-3">
                  {["₹0 - ₹2000", "₹2000 - ₹5000", "₹5000 - ₹10000", "₹10000+"].map(filter => (
                    <label key={filter} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center group-hover:border-blue-500 transition-colors"></div>
                      <span className="text-sm text-slate-600 group-hover:text-slate-900">{filter}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Star Category */}
              <div className="p-5 border-b border-slate-100">
                <h4 className="text-sm font-bold text-slate-800 mb-3">Star Category</h4>
                <div className="space-y-3">
                  {[5, 4, 3].map(star => (
                    <label key={star} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 rounded border border-slate-300 flex items-center justify-center group-hover:border-blue-500 transition-colors"></div>
                      <span className="text-sm text-slate-600 flex items-center gap-1 group-hover:text-slate-900">
                        {star} <FaStar className="text-orange-400 text-xs" />
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Column (Listings) */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-3 mb-6 flex justify-between items-center">
              <span className="text-sm font-semibold text-slate-700">Showing {mockHotels.length} Properties</span>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase">Sort By:</span>
                <select className="text-sm font-bold text-slate-800 border-none outline-none bg-transparent cursor-pointer">
                  <option>Popularity</option>
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                  <option>User Rating</option>
                </select>
              </div>
            </div>

            {/* Hotel Cards List */}
            <div className="space-y-5">
              {mockHotels.map(hotel => (
                <div
                  key={hotel.id}
                  onClick={() => router.push(`/hotels/${hotel.id}`)}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col sm:flex-row cursor-pointer group sm:h-[240px] animate-slide-up"
                >
                  {/* Image Section */}
                  <div className="relative w-full sm:w-[300px] h-[220px] sm:h-full flex-shrink-0 overflow-hidden bg-slate-100">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full text-slate-400 hover:text-rose-500 hover:bg-white transition-colors">
                      <FaHeart />
                    </div>
                    {hotel.isSoldOut && (
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-red-600 text-white font-black px-4 py-1.5 rounded-lg text-sm shadow-lg rotate-12 border-2 border-white">SOLD OUT</span>
                      </div>
                    )}
                  </div>

                  {/* Details Section */}
                  <div className="p-5 flex-1 flex flex-col justify-between overflow-hidden">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h2 className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {hotel.name}
                          </h2>
                          <div className="flex items-center gap-1 mt-1 text-orange-400 text-[10px]">
                            {Array.from({ length: hotel.stars }).map((_, i) => <FaStar key={i} />)}
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                            {hotel.rating} / 5
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 mt-1">{hotel.reviews} reviews</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 text-sm text-slate-500 font-semibold mb-3">
                        <FaMapMarkerAlt className="text-blue-500 text-xs" />
                        {hotel.location} <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded ml-1">{hotel.distance}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4 overflow-hidden h-[24px]">
                        {hotel.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-600 border border-emerald-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3 mt-auto">
                      <div className="flex items-center gap-2 text-xs font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded-md">
                        🔥 High Demand
                      </div>
                      <div className="text-right">
                        {!hotel.isSoldOut && (
                          <>
                            <div className="text-xs text-slate-400 line-through decoration-rose-400 font-bold mb-0.5">₹ {hotel.originalPrice.toLocaleString('en-IN')}</div>
                            <div className="text-2xl font-black text-slate-900 leading-none mb-1">
                              ₹ {hotel.price.toLocaleString('en-IN')}
                            </div>
                            <div className="text-[10px] font-semibold text-slate-500">+ ₹ {hotel.taxes.toLocaleString('en-IN')} taxes & fees</div>
                            <div className="text-[10px] font-bold text-slate-400">per night</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Section (Right Edge Desktop) */}
                  <div className="hidden sm:flex flex-col items-center justify-center p-5 bg-slate-50 border-l border-slate-100 w-[180px] flex-shrink-0 h-full">
                    {!hotel.isSoldOut ? (
                      <>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg shadow-md shadow-blue-600/20 transition-all text-sm group-hover:scale-105">
                          VIEW ROOMS
                        </button>
                        <div className="text-center mt-3 text-[10px] font-bold text-rose-500 bg-rose-50 px-2 py-1 rounded border border-rose-100">
                          Login to unlock Best Prices
                        </div>
                      </>
                    ) : (
                      <button disabled className="w-full bg-slate-300 text-white font-bold py-2.5 rounded-lg shadow-sm text-sm cursor-not-allowed">
                        SOLD OUT
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
