"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelBooking from "@/components/HotelBooking";
import FlightBooking from "@/components/FlightBooking";
import CabBooking from "@/components/CabBooking";
import AiChat from "@/components/AiChat";
import ItineraryPlanner from "@/components/ItineraryPlanner";
import {
  FaPlane,
  FaHotel,
  FaCar,
  FaRobot,
  FaCompass,
  FaSearch,
  FaHistory,
  FaBookmark,
  FaRegStar,
  FaTags,
  FaMapMarkedAlt,
  FaInfoCircle,
  FaChevronRight,
  FaChevronLeft,
  FaPhoneAlt,
  FaWhatsapp,
  FaTimes,
  FaGoogle,
  FaEnvelope,
  FaLock,
  FaUser,
  FaQuestionCircle,
  FaCheckCircle,
  FaCalendarAlt,
  FaHeadphones,
  FaShieldAlt,
  FaPaperPlane,
  FaRoute,
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

interface Package {
  id: number;
  name: string;
  destination: string;
  budget: string;
  type?: string;
  rating: string;
  price: string;
  overview: string;
  inclusions: string[];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("hotel");
  const [userMode, setUserMode] = useState<"new" | "returning">("returning");
  const [globalSearch, setGlobalSearch] = useState("");
  const [activeDiscovery, setActiveDiscovery] = useState<"budget" | "destination" | "type" | "trending">("trending");

  // Auth States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authStep, setAuthStep] = useState<"login" | "signup" | "forgot" | "onboarding">("login");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");

  // Onboarding Preference states
  const [preferences, setPreferences] = useState({
    budget: "Mid-range",
    style: "Relaxed",
    tripType: "Solo",
  });

  // Package Detail Modal State
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const cabImages = [
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=300&q=80"
  ];
  const [currentCabImgIndex, setCurrentCabImgIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCabImgIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (scrollDestsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollDestsRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollDestsRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollDestsRef.current.scrollTo({ left: scrollLeft + 310, behavior: "smooth" });
        }
      }
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const popularDests = [
    {
      name: "Dubai",
      count: "19,464 accommodations",
      price: "$120",
      code: "4k",
      flag: "🇦🇪",
      shadow: "shadow-purple-500/20 hover:shadow-purple-500/40",
      overlay: "from-purple-950 via-purple-900/30 to-transparent",
      btnBg: "bg-purple-950/45",
      btnBorder: "border-purple-500/20",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Abu Dhabi",
      count: "721 accommodations",
      price: "$150",
      code: "1k",
      flag: "🇦🇪",
      shadow: "shadow-teal-500/20 hover:shadow-teal-500/40",
      overlay: "from-teal-950 via-teal-900/30 to-transparent",
      btnBg: "bg-teal-950/45",
      btnBorder: "border-teal-500/20",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Bangkok",
      count: "12,048 accommodations",
      price: "$90",
      code: "3k",
      flag: "🇹🇭",
      shadow: "shadow-amber-500/20 hover:shadow-amber-500/40",
      overlay: "from-amber-950 via-amber-900/30 to-transparent",
      btnBg: "bg-amber-950/45",
      btnBorder: "border-amber-500/20",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Sharjah",
      count: "323 accommodations",
      price: "$85",
      code: "800",
      flag: "🇦🇪",
      shadow: "shadow-blue-500/20 hover:shadow-blue-500/40",
      overlay: "from-blue-950 via-blue-900/30 to-transparent",
      btnBg: "bg-blue-950/45",
      btnBorder: "border-blue-500/20",
      image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Kuala Lumpur",
      count: "19,902 accommodations",
      price: "$110",
      code: "2k",
      flag: "🇲🇾",
      shadow: "shadow-rose-500/20 hover:shadow-rose-500/40",
      overlay: "from-rose-950 via-rose-900/30 to-transparent",
      btnBg: "bg-rose-950/45",
      btnBorder: "border-rose-500/20",
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=300&q=80"
    },
  ];

  const featuredPackages = [
    {
      id: 1,
      name: "Mizuho Blossom Escape",
      destination: "Kyoto, Japan",
      budget: "Luxury",
      rating: "4.9",
      price: "$2,400",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80",
      overview: "Experience the magic of cherry blossom season in Kyoto. Stay in luxury traditional Ryokans, participate in tea ceremonies, and explore bamboo groves.",
      inclusions: ["5-Star Ryokan Accommodation", "Daily Matcha & Traditional Breakfast", "Private Kyoto Tour Guide", "All Local Shinkansen Rail Transfers"],
      shadow: "shadow-purple-500/20 hover:shadow-purple-500/40",
      overlay: "from-purple-950 via-purple-900/30 to-transparent",
      btnBg: "bg-purple-950/45",
      btnBorder: "border-purple-500/20",
    },
    {
      id: 2,
      name: "Alps Glacier Cabin",
      destination: "Zermatt, Switzerland",
      budget: "Premium",
      rating: "4.8",
      price: "$3,100",
      image: "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=600&q=80",
      overview: "A majestic alpine getaway at the foot of the Matterhorn. Ideal for families looking for skiing adventure and cozy evening fireplaces.",
      inclusions: ["Premium Ski Lodge Stay", "Daily Lift Passes for Zermatt Area", "Ski Equipment Rental", "Private Family Glacier Hike Guide"],
      shadow: "shadow-blue-500/20 hover:shadow-blue-500/40",
      overlay: "from-blue-950 via-blue-900/30 to-transparent",
      btnBg: "bg-blue-950/45",
      btnBorder: "border-blue-500/20",
    },
    {
      id: 3,
      name: "Ubud Sanctuary Resort",
      destination: "Bali, Indonesia",
      budget: "Budget Friendly",
      rating: "4.7",
      price: "$980",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80",
      overview: "Recharge your spirit in the lush jungles of Ubud. Perfect for solo travelers seeking wellness, yoga classes, and local artisan village tours.",
      inclusions: ["Boutique Jungle Resort Accommodation", "Daily Wellness Yoga & Spa Sessions", "Traditional Balinese Culinary Class", "Airport Pick-up & Drop-off"],
      shadow: "shadow-emerald-500/20 hover:shadow-emerald-500/40",
      overlay: "from-emerald-950 via-emerald-900/30 to-transparent",
      btnBg: "bg-emerald-950/45",
      btnBorder: "border-emerald-500/20",
    },
    {
      id: 4,
      name: "Honeymoon Overwater Villa",
      destination: "Maldives",
      budget: "Elite",
      rating: "4.95",
      price: "$4,500",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=600&q=80",
      overview: "Escape to crystal clear blue waters and stay directly over the ocean in a private villa with your partner.",
      inclusions: ["Overwater Bungalow with Pool", "Sunset Champagne Yacht Cruise", "Couples Massage Treatment", "All-Inclusive Dining Plan"],
      shadow: "shadow-cyan-500/20 hover:shadow-cyan-500/40",
      overlay: "from-cyan-950 via-cyan-900/30 to-transparent",
      btnBg: "bg-cyan-950/45",
      btnBorder: "border-cyan-500/20",
    },
    {
      id: 5,
      name: "Harajuku Neon Suites",
      destination: "Tokyo, Japan",
      budget: "Mid-range",
      rating: "4.7",
      price: "$1,200",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80",
      overview: "Experience pop culture, modern gaming centers, and world-class sushi bars.",
      inclusions: ["Modern Capsule Suite", "Private Ghibli Museum Tickets", "Shibuya Food Tasting Tour", "Suica Card prefilled with ¥10,000"],
      shadow: "shadow-rose-500/20 hover:shadow-rose-500/40",
      overlay: "from-rose-950 via-rose-900/30 to-transparent",
      btnBg: "bg-rose-950/45",
      btnBorder: "border-rose-500/20",
    },
    {
      id: 6,
      name: "Sands Sky Residence",
      destination: "Singapore",
      budget: "Luxury",
      rating: "4.8",
      price: "$1,800",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80",
      overview: "Discover modern architecture, futuristic gardens, and luxury shopping centers with your family.",
      inclusions: ["Skyline Residence Stay", "Gardens by the Bay Admission Passes", "Cable Car Dinner Experience", "Universal Studios VIP Access"],
      shadow: "shadow-amber-500/20 hover:shadow-amber-500/40",
      overlay: "from-amber-950 via-amber-900/30 to-transparent",
      btnBg: "bg-amber-950/45",
      btnBorder: "border-amber-500/20",
    },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setUsername(authEmail ? authEmail.split("@")[0] : "Traveler");
    setUserMode("returning");
    setShowAuthModal(false);
  };

  const handleGoogleLogin = () => {
    setIsLoggedIn(true);
    setUsername("Google User");
    setUserMode("returning");
    setShowAuthModal(false);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthStep("onboarding");
  };

  const handleOnboardingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setUsername(authEmail ? authEmail.split("@")[0] : "Traveler");
    setUserMode("returning");
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(null);
    setUserMode("new");
  };

  const getHeroBg = () => {
    switch (activeTab) {
      case "flight":
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVcnbXxJqLTGb8skydMvJ2mOPAZdmPeJw8ADr5F7Vb7hB4pQKPMq1Ve0&s=10";
      case "hotel":
        return "https://images.unsplash.com/photo-1566073771259-6a8506099945?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjBib29raW5nfGVufDB8fDB8fHww";
      case "cab":
        return "https://t3.ftcdn.net/jpg/17/98/91/70/360_F_1798917085_YXJO3tZKPrM5U3e6exn3mZ0ejtYiwLmu.jpg";
      default:
        return "https://images.unsplash.com/photo-1566073771259-6a8506099945?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWwlMjBib29raW5nfGVufDB8fDB8fHww";
    }
  };

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const scrollPackages = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 340 : scrollLeft + 340;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const scrollDestsRef = React.useRef<HTMLDivElement>(null);
  const scrollDests = (direction: "left" | "right") => {
    if (scrollDestsRef.current) {
      const { scrollLeft } = scrollDestsRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 320 : scrollLeft + 320;
      scrollDestsRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#f4f6fc]">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes subtle-glow {
          0%, 100% { box-shadow: 0 4px 20px -2px rgba(25, 25, 117, 0.08), 0 0 0 1px rgba(25, 25, 117, 0.04); }
          50% { box-shadow: 0 10px 25px -2px rgba(0, 210, 255, 0.18), 0 0 8px 2px rgba(0, 210, 255, 0.12); }
        }
        @keyframes gradient-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes scale-background {
          0%, 100% { transform: scale(1.02); }
          50% { transform: scale(1.08); }
        }
        @keyframes drift {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, -45px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        .animate-bg-zoom {
          animation: scale-background 22s ease-in-out infinite;
        }
        .animate-drift-1 {
          animation: drift 25s ease-in-out infinite;
        }
        .animate-drift-2 {
          animation: drift 30s ease-in-out infinite -10s;
        }
        .animate-float-1 { animation: float 6s ease-in-out infinite; }
        .animate-float-2 { animation: float 6s ease-in-out infinite 1.5s; }
        .animate-float-3 { animation: float 6s ease-in-out infinite 3s; }
        .animate-float-4 { animation: float 6s ease-in-out infinite 4.5s; }
        .animate-glow { animation: subtle-glow 4s ease-in-out infinite; }
        .animate-btn-gradient {
          background: linear-gradient(-45deg, #191975, #00d2ff, #191975, #9b51e0);
          background-size: 400% 400%;
          animation: gradient-flow 10s ease infinite;
        }
      `}</style>

      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#191975]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#00d2ff]/5 blur-[130px] pointer-events-none" />

      {/* Navbar Component */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoggedIn={isLoggedIn}
        username={username}
        onLoginClick={() => {
          setAuthStep("login");
          setShowAuthModal(true);
        }}
        onLogout={handleLogout}
        onSupportClick={(section) => {
          const el = document.getElementById(section + "-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Hero Banner Section with Background Image */}
      <section className="relative w-full min-h-[480px] flex items-center justify-center -mt-[116px] pt-[150px] pb-[170px] overflow-hidden">
        {/* Animated Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out animate-bg-zoom"
          style={{ backgroundImage: `url('${getHeroBg()}')` }}
        />
        {/* Soft dark overlay with modern gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/65 via-slate-900/40 to-[#f4f6fc]" />

        {/* Floating gradient circles */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-drift-1" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-400/20 rounded-full blur-[120px] pointer-events-none animate-drift-2" />

        {/* Banner Content */}
        <div className="relative text-center space-y-4 max-w-3xl mx-auto px-6 z-10 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold text-white tracking-wide uppercase shadow-sm">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping" />
            Your Travel Dashboard
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
            Discover & Book Your Next{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-200 bg-clip-text text-transparent">
              Premium Journey
            </span>
          </h1>
          <p className="text-slate-100 text-xs md:text-sm max-w-lg mx-auto font-medium drop-shadow-sm leading-relaxed">
            Plan flights, hotels, cabs, and itineraries in one dashboard. Sign up to save preferences.
          </p>
        </div>
      </section>

      {/* Main Content Container overlapping the Hero Banner */}
      <div className="max-w-7xl mx-auto px-6 -mt-[100px] space-y-10 relative z-20">
        {/* Integrated Booking Form Hub */}
        <section className="glass rounded-3xl p-5 md:p-8 shadow-2xl border border-slate-200/80 max-w-5xl mx-auto bg-white/95 backdrop-blur-md">
          <div className="flex justify-between items-center border-b border-slate-200/85 pb-4 mb-6">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("hotel")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "hotel"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-500 hover:text-primary hover:bg-slate-100"
                  }`}
              >
                <FaHotel />
                <span>Hotels</span>
              </button>
              <button
                onClick={() => setActiveTab("flight")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "flight"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-500 hover:text-primary hover:bg-slate-100"
                  }`}
              >
                <FaPlane />
                <span>Flights</span>
              </button>
              <button
                onClick={() => setActiveTab("cab")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === "cab"
                  ? "bg-primary text-white shadow-sm"
                  : "text-slate-500 hover:text-primary hover:bg-slate-100"
                  }`}
              >
                <FaCar />
                <span>Cabs</span>
              </button>
            </div>
            <div className="text-[9px] uppercase tracking-widest font-black text-slate-400 select-none hidden sm:block">
              ITS SSL SECURE
            </div>
          </div>

          <div className="transition-all duration-300">
            {activeTab === "hotel" && <HotelBooking />}
            {activeTab === "flight" && <FlightBooking />}
            {activeTab === "cab" && <CabBooking />}
          </div>
        </section>

        {/* Popular Destinations Suggestions Section */}
        <section className="max-w-5xl mx-auto bg-gradient-to-br from-slate-50 via-indigo-50/40 to-blue-50/20 border border-slate-200/80 p-6 md:p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
          {/* Decorative subtle background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          <div className="flex items-center justify-between border-b border-slate-200 pb-4 relative z-10">
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight">Popular destinations outside India</h2>
              <p className="text-[11px] text-slate-500 mt-0.5">Explore premium global destinations and check hotels & bookings instantly.</p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => scrollDests("left")}
                className="p-2 rounded-xl border border-slate-200 hover:border-primary bg-white hover:bg-slate-50 text-slate-700 transition-all shadow-sm"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={() => scrollDests("right")}
                className="p-2 rounded-xl border border-slate-200 hover:border-primary bg-white hover:bg-slate-50 text-slate-700 transition-all shadow-sm"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>

          <div
            ref={scrollDestsRef}
            className="flex gap-5 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth relative z-10"
            style={{ scrollbarWidth: "none" }}
          >
            {popularDests.map((dest) => (
              <div
                key={dest.name}
                className={`w-[280px] sm:w-[290px] flex-shrink-0 relative h-[360px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col justify-end p-5 group cursor-pointer transition-all duration-500 hover:-translate-y-2.5 ${dest.shadow}`}
              >
                <img src={dest.image} alt={dest.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
                <div className={`absolute inset-0 bg-gradient-to-t ${dest.overlay}`} />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div>
                    <h3 className="font-black text-xl text-white flex items-center gap-2 tracking-tight">
                      {dest.name} <span className="text-lg">{dest.flag}</span>
                    </h3>
                    <div className="flex justify-between items-center text-[10px] text-indigo-100 mt-1 font-bold">
                      <span>{dest.count.split(" ")[0]} Destinations</span>
                      <span>{dest.code}+ Hotels</span>
                    </div>
                  </div>

                  <button className={`w-full ${dest.btnBg} backdrop-blur-md border ${dest.btnBorder} text-white font-black py-3 px-4 rounded-2xl text-[10px] flex items-center justify-between transition-all hover:brightness-125 uppercase tracking-widest`}>
                    <span>Explore now</span>
                    <FaChevronRight className="text-[8px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Journey Roadmap Section */}
        <section className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
            <div>
              <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">Live Itinerary Builder</span>
              <h2 className="text-xl font-black text-slate-900 mt-1">Your Premium Journey Roadmap</h2>
              <p className="text-xs text-slate-500 mt-0.5">A visual summary of your custom-scheduled flight, hotel, and airport cab transfers.</p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-[10px] font-bold text-emerald-700">
              <FaCheckCircle className="text-emerald-500 text-xs" />
              Blueprint Sync Active
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative pt-2">

            {/* Step 1: Destination */}
            <div className="relative bg-white rounded-[26px] p-5 border border-slate-200/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 group animate-float-1 shadow-sm mt-3">

              <div className="space-y-4">
                <div className="w-full h-36 rounded-2xl overflow-hidden shadow-sm relative">
                  <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=80" alt="Kyoto Destination" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-900/10" />
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-black uppercase text-primary tracking-widest block">Destination</span>
                  <h3 className="font-extrabold text-slate-800 text-sm">Kyoto, Japan</h3>
                  <span className="text-[10px] text-slate-500 flex items-center gap-1"><FaCalendarAlt className="text-[9px] text-slate-400" /> Aug 12 - Aug 17</span>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-[10px]">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[8px]">Status</span>
                <span className="text-emerald-700 bg-emerald-50/80 font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-100/60 uppercase text-[8px] tracking-wider">Confirmed</span>
              </div>
            </div>

            <div className="relative bg-white rounded-[26px] p-5 border border-slate-200/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 group animate-float-2 shadow-sm mt-3">

              <div className="space-y-4">
                <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 flex flex-col justify-between p-3.5 text-white border border-primary/20 shadow-md relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />

                  {/* Ticket Header */}
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-[8px] text-cyan-300 font-black uppercase tracking-widest">ANA Airlines</span>
                    <FaPlane className="text-sm text-cyan-400 rotate-45" />
                  </div>

                  {/* Airport Codes */}
                  <div className="flex justify-between items-center text-center relative z-10 py-1">
                    <div>
                      <span className="text-lg font-black tracking-tight block">HND</span>
                      <span className="text-[7px] text-indigo-200 block uppercase font-bold">Tokyo</span>
                    </div>
                    <div className="flex-1 flex flex-col items-center px-2">
                      <span className="text-[7px] text-indigo-300 font-medium italic">Direct</span>
                      <div className="w-full h-[1px] bg-indigo-500/50 relative my-0.5">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-cyan-400" />
                      </div>
                      <span className="text-[7px] text-indigo-200">11h 20m</span>
                    </div>
                    <div>
                      <span className="text-lg font-black tracking-tight block">LAX</span>
                      <span className="text-[7px] text-indigo-200 block uppercase font-bold">Los Angeles</span>
                    </div>
                  </div>

                  {/* Flight Info Footer */}
                  <div className="pt-2 border-t border-white/10 flex justify-between items-center relative z-10">
                    <div>
                      <span className="text-[6px] text-indigo-300 block uppercase font-bold">Flight No</span>
                      <span className="text-[9px] font-black text-white">NH112</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[6px] text-indigo-300 block uppercase font-bold">Seat Code</span>
                      <span className="text-[9px] font-black text-cyan-300">12D (Biz)</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[8px] font-black uppercase text-primary tracking-widest block">Flight Reserved</span>
                  <h3 className="font-extrabold text-slate-800 text-sm">NH112 Booking</h3>
                  <span className="text-[10px] text-slate-500 flex items-center gap-1"><FaCalendarAlt className="text-[9px] text-slate-400" /> Departure: 19:05</span>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-[10px]">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[8px]">Fare Class</span>
                <span className="text-primary bg-primary/5 font-extrabold px-2.5 py-0.5 rounded-full border border-primary/10 uppercase text-[8px] tracking-wider">Business</span>
              </div>
            </div>

            {/* Step 3: Hotel */}
            <div className="relative bg-white rounded-[26px] p-5 border border-slate-200/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 group animate-float-3 shadow-sm mt-3">

              <div className="space-y-4">
                <div className="w-full h-36 rounded-2xl overflow-hidden shadow-sm relative">
                  <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=300&q=80" alt="Ritz-Carlton Hotel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-slate-900/15" />
                  <div className="absolute top-2.5 right-2.5 bg-black/45 backdrop-blur-sm text-yellow-400 text-[8px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5 shadow-sm">
                    ★ 4.9 Rating
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-black uppercase text-primary tracking-widest block">Luxury Lodging</span>
                  <h3 className="font-extrabold text-slate-800 text-sm">The Ritz-Carlton</h3>
                  <span className="text-[10px] text-yellow-600 font-bold block">★★★★★ Luxury Stay</span>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-[10px]">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[8px]">Suite Type</span>
                <span className="text-slate-700 bg-slate-100 font-extrabold px-2.5 py-0.5 rounded-full border border-slate-200 uppercase text-[8px] tracking-wider">Mizuho Suite</span>
              </div>
            </div>

            <div className="relative bg-white rounded-[26px] p-5 border border-slate-200/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 group animate-float-4 shadow-sm mt-3">

              <div className="space-y-4">
                <div className="w-full h-36 rounded-2xl overflow-hidden relative border border-slate-200/50 group bg-slate-100 shadow-inner">
                  {cabImages.map((img, idx) => (
                    <img
                      key={img}
                      src={img}
                      alt="Cab Luxury"
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${idx === currentCabImgIndex ? "opacity-100" : "opacity-0"
                        }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-2.5 z-10">
                    <span className="text-[7px] bg-emerald-500 text-white font-black px-1.5 py-0.5 rounded w-fit uppercase tracking-widest mb-0.5 animate-pulse">
                      Live Shuttle
                    </span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="text-[8px] font-black uppercase text-primary tracking-widest block">Airport Transfer</span>
                  <h3 className="font-extrabold text-slate-800 text-sm">Tesla Model Y (EV)</h3>
                  <span className="text-[10px] text-slate-500 flex items-center gap-1"><FaCalendarAlt className="text-[9px] text-slate-400" /> ETA: 5 mins away</span>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-4 flex items-center justify-between text-[10px]">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-[8px]">Rate</span>
                <span className="text-emerald-700 bg-emerald-50/80 font-extrabold px-2.5 py-0.5 rounded-full border border-emerald-100/60 uppercase text-[8px] tracking-wider">$1.8 / km</span>
              </div>
            </div>
          </div>
        </section>

        {/* Personalized User Center Section */}
        <section className="max-w-5xl mx-auto bg-gradient-to-br from-slate-50 via-indigo-50/30 to-blue-50/15 border border-slate-200/80 p-6 md:p-8 rounded-[32px] space-y-6 shadow-xl relative overflow-hidden">
          {/* Subtle glowing elements */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-4 relative z-10">
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                Personalized User Center
              </h2>
              <p className="text-[11px] text-slate-500 mt-0.5">Manage preferences, live track bookings, and view history.</p>
            </div>

            <div className="bg-slate-200/50 p-1 rounded-xl flex items-center gap-1 border border-slate-350/20 backdrop-blur-sm self-start sm:self-auto">
              <button
                onClick={() => setUserMode("new")}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all uppercase tracking-wider ${userMode === "new" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
                  }`}
              >
                New User
              </button>
              <button
                onClick={() => setUserMode("returning")}
                className={`px-4 py-1.5 rounded-lg text-[10px] font-black transition-all uppercase tracking-wider ${userMode === "returning" ? "bg-white text-slate-800 shadow-sm" : "text-slate-500 hover:text-slate-800"
                  }`}
              >
                Returning User
              </button>
            </div>
          </div>

          {userMode === "returning" ? (
            /* Returning User View: Recent Searches, Bookings, Saved Itineraries */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {/* Column 1: Recent Searches */}
              <div className="bg-white rounded-2xl p-5 border-t-[4px] border-t-primary border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 space-y-4">
                <h3 className="text-xs text-slate-800 font-extrabold uppercase tracking-wider flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-indigo-50 text-primary"><FaHistory className="text-xs" /></span>
                  Recent Searches
                </h3>
                <div className="space-y-3">
                  <div className="bg-slate-50 hover:bg-white hover:border-primary p-3 rounded-xl flex items-center justify-between text-[11px] cursor-pointer border border-slate-200/60 transition-all shadow-sm group">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-xs"><FaHotel /></div>
                      <div>
                        <span className="font-extrabold text-slate-800 block leading-tight">Kyoto Ryokan Suites</span>
                        <span className="text-[9px] text-slate-400 block mt-0.5">Check-in: Aug 12, 2 guests</span>
                      </div>
                    </div>
                    <FaChevronRight className="text-slate-400 text-[9px] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="bg-slate-50 hover:bg-white hover:border-primary p-3 rounded-xl flex items-center justify-between text-[11px] cursor-pointer border border-slate-200/60 transition-all shadow-sm group">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center text-xs"><FaPlane className="text-xs rotate-45" /></div>
                      <div>
                        <span className="font-extrabold text-slate-800 block leading-tight">HND ➔ LAX Flights</span>
                        <span className="text-[9px] text-slate-400 block mt-0.5">Aug 20 • Business Cabin</span>
                      </div>
                    </div>
                    <FaChevronRight className="text-slate-400 text-[9px] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Column 2: Previous Bookings */}
              <div className="bg-white rounded-2xl p-5 border-t-[4px] border-t-emerald-500 border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 space-y-4">
                <h3 className="text-xs text-slate-800 font-extrabold uppercase tracking-wider flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600"><FaBookmark className="text-xs" /></span>
                  Previous Bookings
                </h3>
                <div className="space-y-3">
                  <div className="bg-slate-50 p-3 rounded-xl flex items-center justify-between text-[11px] border border-slate-200/60 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs"><FaHotel /></div>
                      <div>
                        <span className="font-extrabold text-slate-800 block leading-tight">Hotel Ritz-Carlton</span>
                        <span className="text-[9px] text-emerald-650 bg-emerald-50 px-1.5 py-0.5 rounded font-extrabold block w-fit mt-1 border border-emerald-100/50">Completed July 2026</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-700 bg-slate-100 px-2 py-0.5 rounded-lg border border-slate-200">$350</span>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl flex items-center justify-between text-[11px] border border-slate-200/60 shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs"><FaCar /></div>
                      <div>
                        <span className="font-extrabold text-slate-800 block leading-tight">Tesla Y Premium Cab</span>
                        <span className="text-[9px] text-emerald-650 bg-emerald-50 px-1.5 py-0.5 rounded font-extrabold block w-fit mt-1 border border-emerald-100/50">Completed June 2026</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-slate-700 bg-slate-100 px-2 py-0.5 rounded-lg border border-slate-200">$45</span>
                  </div>
                </div>
              </div>

              {/* Column 3: Saved Itineraries */}
              <div className="bg-white rounded-2xl p-5 border-t-[4px] border-t-amber-500 border border-slate-200/80 shadow-md hover:shadow-lg transition-all duration-300 space-y-4">
                <h3 className="text-xs text-slate-800 font-extrabold uppercase tracking-wider flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-amber-50 text-amber-600"><FaRegStar className="text-xs" /></span>
                  Saved Itineraries
                </h3>
                <div className="space-y-3">
                  <div className="bg-slate-50 hover:bg-white hover:border-primary p-3 rounded-xl flex items-center justify-between text-[11px] cursor-pointer border border-slate-200/60 transition-all shadow-sm group">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-xs">✨</div>
                      <div>
                        <span className="font-extrabold text-slate-800 block leading-tight">5-Day Kyoto Honeymoon</span>
                        <span className="text-[9px] text-slate-400 block mt-0.5">Sightseeing & Culture theme</span>
                      </div>
                    </div>
                    <span className="text-[8px] font-black text-primary bg-primary/5 border border-primary/15 px-2 py-0.5 rounded-full flex items-center gap-1 uppercase tracking-wider">
                      <span className="w-1 h-1 bg-primary rounded-full animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* New User View: AI chat and Travel Package guide */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 animate-scale-in">
              <div className="glass p-5 rounded-xl flex flex-col justify-between space-y-3 border border-slate-200/60">
                <div>
                  <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">First Journey?</span>
                  <h3 className="text-base font-bold text-slate-800 mt-0.5">Use our Smart AI Travel Agent</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Planning trips is simple. Tell our AI Concierge where you want to go, budget details, or interests to build customized logs instantly.
                  </p>
                </div>
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-3 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm">
                    <FaRobot />
                  </div>
                  <div className="text-[10px]">
                    <span className="font-bold text-slate-800 block">AI Agent is ready</span>
                    <span className="text-slate-500">"Try typing: Suggest a budget honeymoon plan in Kyoto."</span>
                  </div>
                </div>
              </div>

              <div className="glass p-5 rounded-xl flex flex-col justify-between space-y-3 border border-slate-200/60">
                <div>
                  <span className="text-[10px] text-secondary font-bold uppercase tracking-wider block">Signature Tours</span>
                  <h3 className="text-base font-bold text-slate-800 mt-0.5">Package Discovery Guide</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Check out pre-selected packages arranged by budget tier, destination landmarks, or travel style. Select and bundle flights + stays instantly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById("packages-section");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 rounded-xl text-xs transition-all flex items-center justify-center gap-1 shadow-md shadow-primary/10"
                >
                  <span>Explore Packages</span>
                  <FaChevronRight className="text-[9px]" />
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Discovery Sections Matrix (Full Width Slider) */}
        <section id="packages-section" className="max-w-5xl mx-auto space-y-4 relative">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <div>
              <h2 className="text-base font-bold text-slate-800 flex items-center gap-1.5">
                <FaTags className="text-accent text-xs" />
                Signature Tour Packages
              </h2>
              <p className="text-[10px] text-slate-500 font-medium">Swipe to explore handpicked luxury packages around the globe.</p>
            </div>

            {/* Slider Buttons */}
            <div className="flex gap-1.5">
              <button
                onClick={() => scrollPackages("left")}
                className="p-1.5 rounded-lg border border-slate-200 hover:border-primary text-slate-500 hover:text-primary transition-all bg-white shadow-sm"
              >
                <FaChevronLeft className="text-[10px]" />
              </button>
              <button
                onClick={() => scrollPackages("right")}
                className="p-1.5 rounded-lg border border-slate-200 hover:border-primary text-slate-500 hover:text-primary transition-all bg-white shadow-sm"
              >
                <FaChevronRight className="text-[10px]" />
              </button>
            </div>
          </div>

          {/* Horizontal Scrollable Packages Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: "none" }}
          >
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg)}
                className={`w-[280px] sm:w-[300px] flex-shrink-0 relative h-[360px] rounded-[32px] overflow-hidden shadow-2xl flex flex-col justify-end p-5 group cursor-pointer transition-all duration-500 hover:-translate-y-2.5 ${pkg.shadow}`}
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 pointer-events-none"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${pkg.overlay}`} />

                {/* Floating Top Badges */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/20 text-white text-[8px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                  {pkg.budget}
                </div>
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-yellow-400 text-[9px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-0.5">
                  ★ {pkg.rating}
                </div>

                {/* Content Container */}
                <div className="relative z-10 space-y-3.5">
                  <div>
                    <h3 className="font-black text-base text-white tracking-tight leading-tight line-clamp-1 group-hover:text-cyan-300 transition-colors">
                      {pkg.name}
                    </h3>
                    <span className="text-[10px] text-indigo-150 flex items-center gap-1.5 mt-1 font-bold">
                      <FaMapMarkedAlt className="text-[9px] text-indigo-300" /> {pkg.destination}
                    </span>
                  </div>

                  <div className="w-full border-t border-white/10 pt-3 flex items-center justify-between">
                    <div>
                      <span className="text-[8px] text-indigo-200 block font-bold uppercase tracking-wider">Starts at</span>
                      <span className="text-sm font-black text-white">{pkg.price}</span>
                    </div>
                    <button
                      className={`px-4 py-2.5 rounded-2xl ${pkg.btnBg} border ${pkg.btnBorder} text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-1 hover:brightness-125 transition-all shadow-md`}
                    >
                      <span>Details</span>
                      <FaChevronRight className="text-[7px]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Helper Widgets Grid (Side-by-side 50% each) */}
        <section id="itinerary-section" className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <AiChat />
          <ItineraryPlanner />
        </section>

        {/* Why Choose ITS Global / Information Section */}
        <section className="max-w-5xl mx-auto bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 border border-slate-200/60 p-6 md:p-8 rounded-3xl space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">Seamless Global Standards</span>
            <h2 className="text-xl font-black text-slate-900">Why Modern Travelers Choose ITS Global</h2>
            <p className="text-xs text-slate-500">We offer a unified booking ecosystem that prioritizes luxury, flexibility, and round-the-clock peace of mind.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {/* Feature 1 */}
            <div className="bg-white hover:bg-slate-50 border-t-[4px] border-t-indigo-500 p-6 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col space-y-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-base shadow-sm group-hover:scale-110 transition-transform">
                <FaHeadphones />
              </div>
              <h3 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">24/7 Global Concierge</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Connect directly with our dedicated travel help desk via chat or WhatsApp, anywhere in the world.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white hover:bg-slate-50 border-t-[4px] border-t-emerald-500 p-6 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col space-y-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-base shadow-sm group-hover:scale-110 transition-transform">
                <FaShieldAlt />
              </div>
              <h3 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">Flexible Protection</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Enjoy peace of mind with 100% verified, flexible cancellation options across top global hotel suites.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white hover:bg-slate-50 border-t-[4px] border-t-purple-500 p-6 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col space-y-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-base shadow-sm group-hover:scale-110 transition-transform">
                <FaPaperPlane />
              </div>
              <h3 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">Cabin Customization</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Compare premium economy, business class rates and select preferred cabin seats directly from our live map.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white hover:bg-slate-50 border-t-[4px] border-t-amber-500 p-6 rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col space-y-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-base shadow-sm group-hover:scale-110 transition-transform">
                <FaRoute />
              </div>
              <h3 className="font-extrabold text-slate-800 text-xs uppercase tracking-wider">On-Demand Transfers</h3>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                Pre-book certified electric cabs and local airport transfers, directly integrated with your active route timeline.
              </p>
            </div>
          </div>
        </section>

      </div>

      <Footer
        onFAQScroll={() => {
          const el = document.getElementById("faq-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* Package Detail Modal (with Whatsapp CTA) */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-4 border border-slate-100 relative animate-scale-in shadow-2xl">
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 p-1.5 rounded-full"
            >
              <FaTimes />
            </button>
            <div>
              <span className="text-[10px] text-primary font-bold uppercase tracking-wider block">{selectedPackage.budget} tour</span>
              <h3 className="text-lg font-black text-slate-900 mt-1">{selectedPackage.name}</h3>
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                <FaMapMarkedAlt className="text-xs text-slate-400" /> {selectedPackage.destination}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-xs text-slate-800">Overview</h4>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-150">
                {selectedPackage.overview}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-xs text-slate-800">Inclusions</h4>
              <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                {selectedPackage.inclusions.map((inc, i) => (
                  <li key={i}>{inc}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div>
                <span className="text-[10px] text-slate-400 block">Price Starting At</span>
                <span className="text-lg font-bold text-slate-800">{selectedPackage.price}</span>
              </div>
              <div className="flex gap-2">
                <a
                  href="tel:+15551239988"
                  className="bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5"
                >
                  <FaPhoneAlt />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/15551239988?text=I%20am%20interested%20in%2520booking%20the%20${encodeURIComponent(selectedPackage.name)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-emerald-500/10"
                >
                  <FaWhatsapp />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Authentication & Onboarding wizard Overlay */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 border border-slate-100 relative animate-scale-in shadow-2xl">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 p-1.5 rounded-full"
            >
              <FaTimes />
            </button>

            {authStep === "login" && (
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="text-center space-y-1.5">
                  <h3 className="text-lg font-black text-slate-900">Sign in to ITS Travels</h3>
                  <p className="text-xs text-slate-500">Access saved trips, bookings, and recent itineraries.</p>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Email Address</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        className="w-full glass-input pl-9 pr-3 py-2 rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] text-slate-500 font-bold uppercase">Password</label>
                      <button
                        type="button"
                        onClick={() => setAuthStep("forgot")}
                        className="text-[10px] text-primary font-bold hover:underline"
                      >
                        Forgot?
                      </button>
                    </div>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={authPassword}
                        onChange={(e) => setAuthPassword(e.target.value)}
                        className="w-full glass-input pl-9 pr-3 py-2 rounded-xl text-xs"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-md shadow-primary/10"
                >
                  Sign In
                </button>

                <div className="relative flex py-1 items-center">
                  <div className="flex-grow border-t border-slate-200"></div>
                  <span className="flex-shrink mx-3 text-slate-400 text-[10px] uppercase font-bold">Or</span>
                  <div className="flex-grow border-t border-slate-200"></div>
                </div>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <FaGoogle className="text-slate-500" />
                  <span>Sign in with Google</span>
                </button>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-slate-500">Don't have an account? </span>
                  <button
                    type="button"
                    onClick={() => setAuthStep("signup")}
                    className="text-[11px] text-primary font-black hover:underline"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            )}

            {authStep === "signup" && (
              <form onSubmit={handleSignup} className="space-y-4">
                <div className="text-center space-y-1.5">
                  <h3 className="text-lg font-black text-slate-900">Create your account</h3>
                  <p className="text-xs text-slate-500">Register in seconds and personalize your dashboard preferences.</p>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Email Address</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={authEmail}
                        onChange={(e) => setAuthEmail(e.target.value)}
                        className="w-full glass-input pl-9 pr-3 py-2 rounded-xl text-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Password</label>
                    <div className="relative">
                      <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
                      <input
                        type="password"
                        required
                        placeholder="Create password"
                        className="w-full glass-input pl-9 pr-3 py-2 rounded-xl text-xs"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-md shadow-primary/10"
                >
                  Continue to Preferences
                </button>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-slate-500">Already registered? </span>
                  <button
                    type="button"
                    onClick={() => setAuthStep("login")}
                    className="text-[11px] text-primary font-black hover:underline"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            )}

            {authStep === "forgot" && (
              <div className="space-y-4">
                <div className="text-center space-y-1.5">
                  <h3 className="text-lg font-black text-slate-900">Reset your password</h3>
                  <p className="text-xs text-slate-500">Enter your email and we'll send a password recovery link.</p>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] text-slate-500 font-bold uppercase">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full glass-input px-3 py-2 rounded-xl text-xs"
                  />
                </div>

                <button
                  onClick={() => setAuthStep("login")}
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-xl text-xs transition-all"
                >
                  Send Recovery Link
                </button>

                <button
                  onClick={() => setAuthStep("login")}
                  className="w-full text-center text-xs text-slate-500 hover:text-slate-800 font-bold"
                >
                  Back to Sign In
                </button>
              </div>
            )}

            {authStep === "onboarding" && (
              <form onSubmit={handleOnboardingSubmit} className="space-y-4">
                <div className="text-center space-y-1.5">
                  <h3 className="text-lg font-black text-slate-900">Personalize Experience</h3>
                  <p className="text-xs text-slate-500">Provide preferences to customize your travel package guides.</p>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Trip Style</label>
                    <select
                      value={preferences.style}
                      onChange={(e) => setPreferences({ ...preferences, style: e.target.value })}
                      className="w-full glass-input px-3 py-2 rounded-xl"
                    >
                      <option value="Relaxed">Relaxed (Wellness, Spa)</option>
                      <option value="Active">Active (Adventure, Sports)</option>
                      <option value="Cultural">Cultural (Sightseeing, History)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Budget Range</label>
                    <select
                      value={preferences.budget}
                      onChange={(e) => setPreferences({ ...preferences, budget: e.target.value })}
                      className="w-full glass-input px-3 py-2 rounded-xl"
                    >
                      <option value="Economy">Economy</option>
                      <option value="Mid-range">Mid-range</option>
                      <option value="Luxury">Luxury</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-500 font-bold uppercase">Trip Group Type</label>
                    <select
                      value={preferences.tripType}
                      onChange={(e) => setPreferences({ ...preferences, tripType: e.target.value })}
                      className="w-full glass-input px-3 py-2 rounded-xl"
                    >
                      <option value="Solo">Solo Traveler</option>
                      <option value="Couple">Couple Getaway</option>
                      <option value="Family">Family Vacation</option>
                      <option value="Business">Business Trip</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-md shadow-primary/10"
                >
                  Save and Start Exploring
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
