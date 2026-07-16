export interface Package {
  id: number;
  name: string;
  destination: string;
  budget: string;
  type?: string;
  rating: string;
  price: string;
  overview: string;
  inclusions: string[];
  shadow?: string;
  image?: string;
  overlay?: string;
  btnBg?: string;
  btnBorder?: string;
}

export const commonFaqs = [
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

export const popularDests = [
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

export const featuredPackages = [
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
