"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaStar, FaMapMarkerAlt, FaCheck, FaWifi, FaSwimmingPool, FaParking, FaCoffee, FaSpa, FaShareAlt, FaHeart, FaChevronRight, FaUserFriends, FaBed, FaRulerCombined } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import HorizontalHotelSearch from "@/components/HorizontalHotelSearch";

// Mock Data for the single hotel detail page
const mockHotel = {
  id: "1",
  name: "Taj Resort & Convention Centre, Goa",
  location: "Vainguinim Beach, Dona Paula, Goa 403004, India",
  distance: "12 km from center",
  description: "Experience the epitome of luxury at the Taj Resort & Convention Centre, Goa. Nestled on a hillock overlooking the Arabian Sea, this 5-star resort offers breathtaking panoramic views, world-class amenities, and impeccable hospitality. Whether you're here for a romantic getaway or a corporate retreat, our resort provides an oasis of tranquility with our expansive infinity pool, award-winning Jiva Spa, and diverse culinary experiences.",
  rating: 4.8,
  reviews: 1245,
  stars: 5,
  images: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551882547-ff40eb0d1b73?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=800&auto=format&fit=crop",
  ],
  amenities: [
    { icon: <FaWifi />, label: "Free Wi-Fi" },
    { icon: <FaSwimmingPool />, label: "Infinity Pool" },
    { icon: <FaSpa />, label: "Jiva Spa" },
    { icon: <FaParking />, label: "Valet Parking" },
    { icon: <FaCoffee />, label: "Restaurants" },
  ],
  rooms: [
    {
      id: "r1",
      type: "Superior Sea View Room",
      bed: "1 King Bed",
      size: "35 sq.m",
      guests: "Up to 3 Guests",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=400&auto=format&fit=crop",
      ratePlans: [
        {
          id: "rp1-1",
          name: "Room Only",
          cancellation: "Non-Refundable",
          inclusions: ["No meals included"],
          features: ["Sea View", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
          price: 15400,
          originalPrice: 22000,
          taxes: 1848,
          offer: "Login to get 10% off"
        },
        {
          id: "rp1-2",
          name: "Room with Breakfast",
          cancellation: "Free Cancellation till 24 hrs before check-in",
          inclusions: ["Free Breakfast"],
          features: ["Sea View", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
          price: 18400,
          originalPrice: 24000,
          taxes: 2200,
          offer: null
        }
      ]
    },
    {
      id: "r2",
      type: "Luxury Suite with Balcony",
      bed: "1 King Bed & Sofa Bed",
      size: "65 sq.m",
      guests: "Up to 4 Guests",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=400&auto=format&fit=crop",
      ratePlans: [
        {
          id: "rp2-1",
          name: "Breakfast + Free Airport Transfer",
          cancellation: "Free Cancellation",
          inclusions: ["Free Breakfast", "Free Airport Transfer", "Lounge Access"],
          features: ["Balcony", "Separate Living Area", "Bathtub", "Premium Wi-Fi"],
          price: 32000,
          originalPrice: 45000,
          taxes: 3840,
          offer: "Limited Time Offer"
        }
      ]
    },
    {
      id: "r3",
      type: "Presidential Villa with Private Pool",
      bed: "2 King Beds",
      size: "120 sq.m",
      guests: "Up to 6 Guests",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=400&auto=format&fit=crop",
      ratePlans: [
        {
          id: "rp3-1",
          name: "All Inclusive Package",
          cancellation: "Free Cancellation",
          inclusions: ["All Meals Included", "24/7 Butler Service", "Spa Credit included"],
          features: ["Private Pool", "Oceanfront", "Kitchenette", "Jacuzzi"],
          price: 85000,
          originalPrice: 110000,
          taxes: 10200,
          offer: "Member Exclusive Price"
        }
      ]
    }
  ]
};

export default function HotelDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("hotel");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8f1f8] via-[#f4f7fb] to-[#F2F2F2]">

      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={false}
        username=""
        onLoginClick={() => { }}
        onLogout={() => { }}
        onSupportClick={() => { }}
      />

      {/* Header with dark background */}
      <div className="bg-gradient-to-r from-[#0a1930] via-[#0f294d] to-[#0a1930] pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
        {/* Horizontal Search Bar inserted here */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-32 relative z-10">
          <HorizontalHotelSearch />
        </div>
      </div>

      {/* Main Content Area Overlapping the Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-12 pb-16">

        {/* Unified White Card for Header, Gallery, and Tabs */}
        <div className="bg-white rounded-xl shadow-xl shadow-slate-200/40 border border-slate-200 overflow-hidden mb-6 relative animate-slide-up">

          {/* Hotel Header Section */}
          <div className="p-6 flex flex-col md:flex-row justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-black text-slate-900">{mockHotel.name}</h1>
                <div className="flex text-orange-400 text-sm">
                  {Array.from({ length: mockHotel.stars }).map((_, i) => <FaStar key={i} />)}
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 mb-4">
                <FaMapMarkerAlt className="text-blue-500" />
                {mockHotel.location}
                <span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded ml-1">{mockHotel.distance}</span>
                <span className="text-blue-600 hover:underline cursor-pointer ml-2 text-xs font-bold">View on Map</span>
              </div>

              <div className="flex gap-2">
                {mockHotel.amenities.slice(0, 4).map((am, i) => (
                  <span key={i} className="text-[10px] font-bold text-slate-600 bg-slate-50 border border-slate-200 px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                    {am.icon} {am.label}
                  </span>
                ))}
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-1 rounded-full uppercase tracking-wider cursor-pointer hover:bg-blue-100 transition-colors">
                  +24 More
                </span>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-base font-black text-slate-800">Excellent</div>
                  <div className="text-xs font-semibold text-slate-500 underline cursor-pointer">{mockHotel.reviews} Ratings</div>
                </div>
                <div className="bg-blue-600 text-white text-xl font-black px-4 py-2 rounded-lg shadow-sm">
                  {mockHotel.rating} / 5
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <button className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-blue-600 border border-slate-200 bg-white px-3 py-1.5 rounded-md shadow-sm transition-colors uppercase tracking-wider">
                  <FaShareAlt /> Share
                </button>
                <button className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-rose-500 border border-slate-200 bg-white px-3 py-1.5 rounded-md shadow-sm transition-colors uppercase tracking-wider">
                  <FaHeart /> Save
                </button>
                <button onClick={() => router.push('/hotels/book')} className="bg-orange-500 hover:bg-orange-600 text-white font-black text-xs px-5 py-2 rounded-md shadow-sm transition-all hover:scale-105 uppercase tracking-widest ml-1">
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row gap-2 h-[350px]">
              {/* Main Image */}
              <div className="flex-[2] h-full rounded-tl-lg rounded-bl-lg overflow-hidden cursor-pointer relative group">
                <img src={mockHotel.images[0]} alt="Main" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
              </div>

              {/* Small Images Grid */}
              <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2 h-full">
                <div className="overflow-hidden cursor-pointer group">
                  <img src={mockHotel.images[1]} alt="View 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="rounded-tr-lg overflow-hidden cursor-pointer group">
                  <img src={mockHotel.images[2]} alt="View 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="overflow-hidden cursor-pointer group">
                  <img src={mockHotel.images[3]} alt="View 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="rounded-br-lg overflow-hidden cursor-pointer relative group">
                  <img src={mockHotel.images[4]} alt="View 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center hover:bg-black/40 transition-colors">
                    <span className="text-white font-black text-2xl">+45</span>
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Photos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Page Navigation inside the card */}
          <div className="border-t border-slate-100 bg-white sticky top-20 z-40 shadow-sm">
            <div className="flex overflow-x-auto px-2">
              {["ROOM OPTIONS", "OVERVIEW", "GUEST REVIEWS", "LOCATION", "POLICIES"].map((tab, idx) => (
                <button
                  key={tab}
                  className={`whitespace-nowrap px-6 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors ${idx === 0 ? "border-blue-600 text-blue-600" : "border-transparent text-slate-500 hover:text-slate-800"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-6">

          {/* Main Content (Left Column) */}
          <div className="flex-1 space-y-6">

            {/* Room Options Box */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-50 border-b border-slate-200 p-4">
                <h2 className="text-xl font-black text-slate-800">Select Rooms</h2>
              </div>

              <div className="flex flex-col">
                {mockHotel.rooms.map(room => (
                  <div key={room.id} className="flex flex-col lg:flex-row bg-white border-b border-slate-200 last:border-b-0 hover:bg-slate-50 transition-colors animate-slide-up">

                    {/* Room Info (Left Panel - Sticky on Desktop) */}
                    <div className="lg:w-1/3 p-4 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/30 flex flex-col gap-3">
                      <h3 className="text-lg font-black text-slate-900 leading-tight">{room.type}</h3>
                      <div className="w-full h-[140px] rounded-lg overflow-hidden relative cursor-pointer group shadow-sm">
                        <img src={room.image} alt={room.type} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded backdrop-blur-sm shadow-md">View Details</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-600 mt-2">
                        <div className="flex items-center gap-1.5"><FaRulerCombined className="text-slate-400" /> {room.size}</div>
                        <div className="flex items-center gap-1.5"><FaBed className="text-slate-400" /> {room.bed}</div>
                        <div className="flex items-center gap-1.5 col-span-2"><FaUserFriends className="text-slate-400" /> {room.guests}</div>
                      </div>
                    </div>

                    {/* Rate Plans (Right Panel) */}
                    <div className="lg:w-2/3 flex flex-col divide-y divide-slate-100">
                      {room.ratePlans.map(plan => (
                        <div key={plan.id} className="flex flex-col md:flex-row p-4 gap-4 hover:bg-blue-50/20 transition-colors group">
                          {/* Inclusions (Middle) */}
                          <div className="md:w-3/5 flex flex-col gap-2">
                            <div className="text-sm font-black text-slate-800 mb-1">{plan.name}</div>

                            <div className="flex items-center gap-2 mb-1">
                              {plan.cancellation.includes("Free") ? (
                                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{plan.cancellation}</span>
                              ) : (
                                <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">{plan.cancellation}</span>
                              )}
                            </div>

                            <div className="space-y-1 mt-1">
                              {plan.inclusions.map((inc, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-600">
                                  <FaCheck className="text-[10px] text-emerald-500 mt-0.5 flex-shrink-0" />
                                  <span>{inc}</span>
                                </div>
                              ))}
                            </div>

                            <div className="flex flex-wrap gap-1.5 mt-3">
                              {plan.features.map(feat => (
                                <span key={feat} className="text-[10px] font-bold text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                                  {feat}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Price & Book (Right) */}
                          <div className="md:w-2/5 flex flex-col justify-end items-start md:items-end border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-4 text-left md:text-right">
                            {plan.offer && (
                              <div className="text-[10px] font-bold text-white bg-gradient-to-r from-orange-400 to-rose-400 px-2 py-1 rounded mb-3 shadow-sm animate-pulse whitespace-nowrap">
                                {plan.offer}
                              </div>
                            )}
                            <div className="text-xs text-slate-400 line-through decoration-rose-400 font-bold mb-0.5">
                              ₹ {plan.originalPrice.toLocaleString('en-IN')}
                            </div>
                            <div className="text-2xl font-black text-slate-900 leading-none mb-1 group-hover:text-blue-600 transition-colors">
                              ₹ {plan.price.toLocaleString('en-IN')}
                            </div>
                            <div className="text-[10px] font-semibold text-slate-500 mb-1">
                              + ₹ {plan.taxes.toLocaleString('en-IN')} taxes & fees
                            </div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-4">1 room per night</div>

                            <button onClick={() => router.push('/hotels/book')} className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-black py-2.5 px-8 rounded-lg shadow-md transition-all hover:scale-105 text-sm tracking-widest uppercase">
                              SELECT
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Overview Box */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-black text-slate-800 mb-4">About the Property</h2>
              <p className="text-sm text-slate-600 leading-relaxed font-medium mb-3">
                {mockHotel.description}
              </p>
              <span className="text-sm font-bold text-blue-600 cursor-pointer hover:underline">Read More</span>
            </div>

          </div>

          {/* Sidebar (Right Column) */}
          <div className="w-full lg:w-[350px] flex-shrink-0 space-y-6">

            {/* Map Box */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 border-b border-slate-100">
                <h3 className="font-bold text-slate-800">Explore Location</h3>
                <div className="text-xs font-semibold text-slate-500 mt-1 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-blue-500" /> {mockHotel.location}
                </div>
              </div>
              <div className="h-[200px] w-full bg-slate-200 relative cursor-pointer group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=400&auto=format&fit=crop"
                  alt="Map Placeholder"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] flex items-center justify-center group-hover:bg-transparent transition-colors">
                  <button className="bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded shadow-md group-hover:scale-105 transition-transform">
                    View on Map
                  </button>
                </div>
              </div>
              <div className="p-4 bg-slate-50 text-xs font-semibold text-slate-600 space-y-2">
                <div className="flex justify-between items-center">
                  <span>Goa International Airport</span>
                  <span className="font-bold">24 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Miramar Beach</span>
                  <span className="font-bold">3 km</span>
                </div>
              </div>
            </div>

            {/* Highlights Box */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="font-bold text-slate-800 mb-4">Property Highlights</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <FaCheck />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Sparkling Clean</div>
                    <div className="text-xs text-slate-500 font-semibold">Sanitized rooms and public areas.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaStar />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Top Rated</div>
                    <div className="text-xs text-slate-500 font-semibold">95% guests recommend this place.</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
