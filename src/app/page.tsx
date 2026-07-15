"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HotelBooking from "@/components/HotelBooking";
import FlightBooking from "@/components/FlightBooking";
import CabBooking from "@/components/CabBooking";
import HotelView from "@/components/views/HotelView";
import FlightView from "@/components/views/FlightView";
import CabView from "@/components/views/CabView";
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
  FaChevronDown,
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
  FaHome,
  FaUmbrellaBeach,
  FaTrain,
  FaBus,
  FaCamera,
  FaPassport,
  FaShip,
  FaMoneyBillWave,
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
  
  const commonFaqs = [
    {
      q: "What is your package cancellation policy?",
      a: "Flights and hotel packages follow the policy of our third-party provider aggregators. Cab cancellations follow our internal flat-rate cancellation guidelines.",
    },
    {
      q: "How does the AI Itinerary planner function?",
      a: "Our system takes your destination, travel interests, and days to outline suggested timelines. You can easily click Save to add the trip itinerary directly to your profile.",
    },
    {
      q: "Can I coordinate multiple booking rooms?",
      a: "Yes, our system accommodates multi-room reservations and custom group passenger details during the checkout flow.",
    },
    {
      q: "Are there any hidden charges on my bookings?",
      a: "No, ITS Global believes in complete transparency. The price you see during checkout is the final price inclusive of all applicable taxes and fees.",
    }
  ];

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
        @keyframes shimmer {
          100% { transform: translateX(100%); }
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

      {/* Hero Background Image */}
      <div className="absolute top-0 left-0 w-full h-[750px] z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80" 
          alt="Flights Background" 
          className="w-full h-full object-cover animate-bg-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-[#f4f6fc]"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 pt-32 space-y-10 relative z-20">
        {/* Integrated Booking Form Hub */}
        {/* Integrated Booking Form Hub */}
        <section className="max-w-6xl mx-auto relative z-20 mt-[-30px]">
          {/* Top Navigation Tabs */}
          <div className="bg-white rounded-t-xl sm:rounded-full shadow-lg border border-slate-200/80 mx-auto w-full max-w-[1100px] flex overflow-x-auto no-scrollbar justify-between px-4 py-2 sm:px-8 relative z-10 mb-[-10px] items-center min-h-[70px]">
            {[
              { id: "flight", icon: <FaPlane className="text-xl" />, label: "Flights" },
              { id: "hotel", icon: <FaHotel className="text-xl" />, label: "Hotels" },
              { id: "homestays", icon: <FaHome className="text-xl" />, label: "Villas & Homestays" },
              { id: "holiday", icon: <FaUmbrellaBeach className="text-xl" />, label: "Holiday Packages" },
              { id: "train", icon: <FaTrain className="text-xl" />, label: "Trains" },
              { id: "bus", icon: <FaBus className="text-xl" />, label: "Buses" },
              { id: "cab", icon: <FaCar className="text-xl" />, label: "Cabs" },
              { id: "tours", icon: <FaCamera className="text-xl" />, label: "Tours & Attractions" },
              { id: "visa", icon: <FaPassport className="text-xl" />, label: "Visa" },
              { id: "cruise", icon: <FaShip className="text-xl" />, label: "Cruise", badge: "new" },
              { id: "forex", icon: <FaMoneyBillWave className="text-xl" />, label: "Forex Card & Currency" },
              { id: "insurance", icon: <FaShieldAlt className="text-xl" />, label: "Travel Insurance" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center gap-1.5 px-3 py-1.5 min-w-[70px] relative transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-slate-500 hover:text-primary hover:bg-slate-50 rounded-lg border-b-2 border-transparent"
                }`}
              >
                {tab.badge && (
                  <span className="absolute -top-1 -right-2 bg-pink-600 text-white text-[8px] font-bold px-1.5 rounded-full shadow-sm animate-pulse">
                    {tab.badge}
                  </span>
                )}
                {tab.icon}
                <span className={`text-[10px] leading-tight text-center ${activeTab === tab.id ? "font-black" : "font-medium"}`}>
                  {tab.label.split(" ").map((word, idx) => (
                    <React.Fragment key={idx}>
                      {word}
                      {idx !== tab.label.split(" ").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              </button>
            ))}
          </div>

          {/* Main Booking Form Card */}
          <div className="bg-white rounded-[24px] shadow-2xl border border-slate-200/80 p-5 md:p-8 relative pt-10">
            <div className="transition-all duration-300">
              {activeTab === "hotel" && <HotelBooking />}
              {activeTab === "flight" && <FlightBooking />}
              {activeTab === "cab" && <CabBooking />}
              {!["hotel", "flight", "cab"].includes(activeTab) && (
                <div className="py-20 text-center text-slate-500 font-medium">
                  Booking form for {activeTab} is coming soon.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Active Tab View */}
        {activeTab === "hotel" && (
          <HotelView
            popularDests={popularDests}
            featuredPackages={featuredPackages}
            userMode={userMode}
            setUserMode={setUserMode}
            setSelectedPackage={setSelectedPackage}
          />
        )}
        {activeTab === "flight" && (
          <FlightView userMode={userMode} />
        )}
        {activeTab === "cab" && (
          <CabView />
        )}

        {/* Common FAQs Section */}
        <section id="faq-section" className="max-w-4xl mx-auto bg-white border border-slate-200/60 p-6 md:p-8 rounded-3xl shadow-sm mt-12 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 mt-2">Find answers to the most common queries about booking with ITS Global.</p>
          </div>
          
          <div className="space-y-4">
            {commonFaqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-5 py-4 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-sm flex justify-between items-center"
                >
                  <span className="pr-2">{faq.q}</span>
                  <FaChevronDown className={`text-xs text-slate-500 transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 py-4 bg-white border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
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
