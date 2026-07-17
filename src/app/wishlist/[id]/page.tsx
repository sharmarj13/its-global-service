"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import { FaChevronRight, FaPen, FaTrashAlt, FaEllipsisH, FaThumbsUp, FaThumbsDown, FaShareAlt, FaQrcode, FaEnvelope, FaWhatsapp, FaRegCopy, FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function WishlistDetailsPage() {
  const router = useRouter();

  const hotels = [
    {
      id: "aeroporto",
      name: "Hotel Aeroporto Delhi Airport by PMH",
      stars: 4,
      location: "Mahipalpur, 4 km drive to Indira Gandhi International Airport",
      rating: "Excellent",
      ratingScore: "4.7",
      reviews: "23",
      price: "1,090",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "iva-premium",
      name: "IVA Premium Delhi Airport",
      stars: 5,
      location: "Mahipalpur, 1.5 km drive to Aero City Metro Station",
      rating: "Excellent",
      ratingScore: "4.3",
      reviews: "777",
      price: "4,721",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "su-shree",
      name: "Hotel Su Shree Continental Near NDLS Station (Free Car Parking)",
      stars: 4,
      location: "Paharganj, 10 minutes walk to New Delhi Railway Station",
      rating: "Very Good",
      ratingScore: "4.0",
      reviews: "2622",
      price: "823",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f6fc] font-sans pb-20">
      <Navbar
        activeTab=""
        setActiveTab={() => {}}
        isLoggedIn={true}
        username="Kuldeep Sharma"
        onLoginClick={() => {}}
        onLogout={() => {}}
        onSupportClick={() => {}}
      />

      {/* Hero Banner Section */}
      <div className="relative pt-[120px] pb-10">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1920&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Beach Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-[#f4f6fc]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-4">
          {/* Breadcrumbs */}
          <div className="text-slate-800 text-xs font-bold py-4 flex items-center gap-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors" onClick={() => router.push('/')}>Home</span>
            <FaChevronRight className="text-[8px]" />
            <span className="hover:text-blue-600 cursor-pointer transition-colors" onClick={() => router.push('/profile')}>My Account</span>
            <FaChevronRight className="text-[8px]" />
            <span className="hover:text-blue-600 cursor-pointer transition-colors" onClick={() => router.push('/wishlist')}>Wishlist</span>
          </div>

          <div className="flex justify-between items-start mt-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                Lakhimpur Trip <FaPen className="text-slate-400 text-lg cursor-pointer hover:text-slate-600" />
              </h1>
              <p className="text-xs text-slate-600 font-semibold mt-2">Created by You on 13 Jul '26</p>
            </div>
            <button className="bg-slate-500/80 hover:bg-slate-600 backdrop-blur-sm text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2 text-xs transition-colors shadow-sm">
              <FaTrashAlt /> Delete
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Left Content Area (Saved Hotels) */}
          <div className="flex-1 space-y-4">
            {hotels.map((hotel, index) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-slate-200 overflow-hidden cursor-pointer transition-all hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => router.push(`/hotels/${hotel.id}`)}
              >
                <div className="flex flex-col sm:flex-row p-4 gap-4">
                  
                  {/* Hotel Image */}
                  <div className="w-full sm:w-[240px] h-[160px] rounded-lg overflow-hidden relative shrink-0">
                    <img src={hotel.image} className="w-full h-full object-cover" alt={hotel.name} />
                    <button className="absolute top-2 left-2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-1.5 rounded-full transition-colors" onClick={(e) => e.stopPropagation()}>
                      <FaEllipsisH className="text-xs" />
                    </button>
                    {/* Carousel Dots */}
                    <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                    </div>
                  </div>

                  {/* Hotel Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <div className="pr-4">
                          <h3 className="text-lg font-black text-slate-900 leading-tight flex flex-wrap items-center gap-2">
                            {hotel.name}
                            <div className="flex text-orange-400 text-[10px]">
                              {[...Array(hotel.stars)].map((_, i) => <FaStar key={i} />)}
                            </div>
                          </h3>
                          <p className="text-blue-500 font-bold text-[11px] mt-1 hover:underline">{hotel.location}</p>
                        </div>
                        
                        <div className="text-right shrink-0">
                          <div className="text-sm font-black text-blue-600">{hotel.rating} <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs">{hotel.ratingScore}</span></div>
                          <div className="text-[10px] text-slate-400 font-semibold mt-0.5">({hotel.reviews} Ratings)</div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="text-[10px] text-slate-600 font-bold uppercase tracking-wider mb-0.5">Shortlisted For</div>
                        <div className="text-xs text-slate-700 font-semibold">2 adults • 25-26 Jul</div>
                      </div>
                    </div>

                    <div className="flex justify-end mt-4 sm:mt-0">
                      <div className="text-right">
                        <div className="text-xl font-black text-slate-900">₹ {hotel.price}</div>
                        <div className="text-[10px] text-slate-400 font-semibold">per night</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Reactions */}
                <div className="bg-blue-50/50 border-t border-blue-100 p-3 flex justify-center items-center gap-4" onClick={(e) => e.stopPropagation()}>
                  <span className="text-blue-600 text-xs font-bold cursor-pointer hover:underline">Invite others to see reactions <FaChevronRight className="inline text-[8px]" /></span>
                  <div className="flex items-center gap-2">
                    <button className="flex items-center gap-1.5 bg-white border border-blue-200 text-blue-600 px-3 py-1 rounded text-xs font-bold hover:bg-blue-50 transition-colors">
                      <FaThumbsDown /> 0
                    </button>
                    <button className="flex items-center gap-1.5 bg-white border border-blue-200 text-blue-600 px-3 py-1 rounded text-xs font-bold hover:bg-blue-50 transition-colors">
                      <FaThumbsUp /> 0
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[320px] shrink-0 space-y-4">
            
            {/* Members Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-sm font-black text-slate-900">Members</h3>
                <button className="flex items-center gap-2 border border-blue-400 text-blue-500 hover:bg-blue-50 font-bold px-4 py-1.5 rounded-full text-xs transition-colors">
                  <FaShareAlt /> Share
                </button>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-black shadow-sm">K</div>
                <div>
                  <div className="text-sm font-black text-slate-900">Kuldeep</div>
                  <div className="text-[10px] text-slate-400 font-semibold italic">Owner</div>
                </div>
              </div>
            </div>

            {/* Share Wishlist Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <h3 className="text-sm font-black text-slate-900 mb-6">Share Wishlist</h3>
              
              <div className="flex justify-around mb-6">
                <div className="flex flex-col items-center gap-2 cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 text-xl group-hover:bg-blue-100 transition-colors"><FaQrcode /></div>
                  <span className="text-[10px] font-bold text-slate-600">QR Scan</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 text-xl group-hover:bg-blue-100 transition-colors"><FaEnvelope /></div>
                  <span className="text-[10px] font-bold text-slate-600">Email</span>
                </div>
                <div className="flex flex-col items-center gap-2 cursor-pointer group">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 text-xl group-hover:bg-emerald-100 transition-colors"><FaWhatsapp /></div>
                  <span className="text-[10px] font-bold text-slate-600">Whatsapp</span>
                </div>
              </div>

              <div className="flex border border-slate-200 rounded-lg overflow-hidden bg-slate-50 mb-4 focus-within:border-blue-400 transition-colors">
                <input type="text" readOnly value="https://app.mmyt.co/..." className="flex-1 bg-transparent px-3 py-2 text-xs font-semibold text-slate-500 outline-none" />
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2 text-xs border-l border-slate-200 transition-colors flex items-center gap-1">
                  Copy
                </button>
              </div>

              <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">
                Anyone with the link can view your wishlist when you share the link
              </p>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}
