export const WHATSAPP_NUMBER = "917434866774";
export const PHONE = "+91 74348 66774";
export const EMAIL = "support@fitourism.com";
export const ADDRESS = "214, Binali Complex, Opp. Torrent Power, Sola Road, Naranpura, Ahmedabad - 13";
export const DISPLAY_NAME = "FiTourism International Tour LLP";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/fitourism_ahmedabad/",
  facebook: "https://www.facebook.com/people/Fitorism-Ahemdabad/61590525810582/",
  youtube: "https://www.youtube.com/@fitourism_ahmedabad",
  linkedin: "https://www.linkedin.com/in/fitourism-ahmedabad-6a2400408",
};

export const LOGO_URL = "https://media.base44.com/images/public/6a267b399614fa89b89b9bea/23552a29c_logo.png";

export const packages = [
  {
    id: "kashmir",
    title: "Kashmir",
    subtitle: "Srinagar • Gulmarg • Sonmarg • Pahalgam",
    duration: "5 Days / 4 Nights",
    price: "₹11,000",
    priceLabel: "Per Person (10 Pax)",
    type: "Domestic",
    typeBadge: "domestic",
    image: "https://media.base44.com/images/public/6a267b399614fa89b89b9bea/2c11a5837_FITourism-Kashmir-Post-03-06-2026.jpg",
    cardImage: "/kashmir-card.jpg",
    highlights: ["Shikara Ride on Dal Lake", "Gulmarg Excursion", "Pahalgam Sightseeing", "Breakfast & Dinner"],
  },
  {
    id: "kashmir-amarnath",
    title: "Kashmir, Amarnath & Mata Vaishno Devi",
    subtitle: "Jammu • Katra • Srinagar • Gulmarg",
    duration: "7 Days / 6 Nights",
    price: "₹18,000",
    priceLabel: "Per Person (Min 4 Pax)",
    type: "Pilgrimage",
    typeBadge: "pilgrimage",
    image: "https://media.base44.com/images/public/6a267b399614fa89b89b9bea/73f8568c3_Fitourism-Kashmir-AmarnathMata-Vaishno-Devi-Post-01-06-2026.jpg",
    cardImage: "/kashmir-amarnath-card.jpg",
    highlights: ["Amarnath Ji Darshan", "Mata Vaishno Devi Darshan", "Gulmarg Excursion", "Private AC Ertiga Cab"],
  },
  {
    id: "goa",
    title: "Goa",
    subtitle: "North Goa • South Goa Sightseeing",
    duration: "4 Days / 3 Nights",
    price: "₹6,999",
    priceLabel: "Per Person (Min 2 Pax)",
    type: "Domestic",
    typeBadge: "domestic",
    image: "https://media.base44.com/images/public/6a267b399614fa89b89b9bea/a8a8667c6_FITourism-Goa-Post-28-05-2026.jpg",
    cardImage: "/goa-card.jpg",
    highlights: ["Fort Aguada", "Vagator Beach", "Miramar Beach", "Breakfast & Dinner"],
  },
  {
    id: "shimla-manali",
    title: "Shimla – Manali",
    subtitle: "Shimla • Manali • Solang Valley • Kullu",
    duration: "6 Days / 5 Nights",
    price: "₹10,049",
    priceLabel: "Per Person (12 Pax)",
    type: "Domestic",
    typeBadge: "domestic",
    image: "https://media.base44.com/images/public/6a267b399614fa89b89b9bea/ee124460d_FiTourism-Simla-Manali-08-06-2026.jpg",
    cardImage: "/shimla-manali-card.jpg",
    highlights: ["Solang Valley", "Kullu Valley", "Kufri Excursion", "Delhi/Chandigarh Pickup"],
  },
  {
    id: "pattaya",
    title: "Pattaya",
    subtitle: "Beach Bliss • Adventure • Memories",
    duration: "4 Days / 3 Nights",
    price: "₹9,800",
    priceLabel: "Per Person (Min 10 Pax)",
    type: "International",
    typeBadge: "international",
    image: "https://media.base44.com/images/public/6a267b399614fa89b89b9bea/049e4a316_FiTourism-Pattaya-Post-05-06-2026.jpg",
    cardImage: "/pattaya-card.jpg",
    highlights: ["Coral Island by Speedboat", "Alcazar Show", "Gems Gallery", "Airport Transfers"],
  },
  {
    id: "pattaya-bangkok",
    title: "Pattaya + Bangkok",
    subtitle: "3N Pattaya + 1N Bangkok",
    duration: "5 Days / 4 Nights",
    price: "₹16,500",
    priceLabel: "Per Person (Min 2 Pax)",
    type: "International",
    typeBadge: "international",
    image: "https://media.base44.com/images/public/6a267b399614fa89b89b9bea/db686c0b8_FITourism-PattayaBangkok-19-05-2026.jpg",
    cardImage: "/pattaya-bangkok-card.jpg",
    highlights: ["Coral Island Tour", "Bangkok Temple Tour", "Alcazar Show", "Daily Breakfast"],
  },
  {
    id: "dubai-family",
    title: "Dubai Family Package",
    subtitle: "4 Nights / 5 Days Group Private Tour",
    duration: "5 Days / 4 Nights",
    price: "₹36,250",
    priceLabel: "Per Person",
    type: "International",
    typeBadge: "international",
    image: "https://media.base44.com/images/public/6a267b399614fa89b89b9bea/cc1fde48f_FITourism-Dubai-Family-Package-21-05-2026.jpg",
    cardImage: "/dubai-card.png",
    highlights: ["UAE Visa Included", "Dhow Cruise Dinner", "Desert Safari", "Abu Dhabi City Tour"],
  },
  {
    id: "azerbaijan",
    title: "Azerbaijan",
    subtitle: "Baku • Absheron • Shahdag • Gabala",
    duration: "5 Days / 4 Nights",
    price: "₹30,000",
    priceLabel: "Per Person (4 Pax)",
    type: "International",
    typeBadge: "international",
    image: "https://media.base44.com/images/public/6a267b399614fa89b89b9bea/29847c0ab_Fitourism-Azerbaijan-04-06-2026.jpg",
    cardImage: "/azerbaijan-card.png",
    highlights: ["Baku City Tour", "Absheron Tour", "Shahdag Adventure", "Gabala Excursion"],
  },
];

export const domesticPackages = packages.filter(p => p.typeBadge === "domestic" || p.typeBadge === "pilgrimage");
export const internationalPackages = packages.filter(p => p.typeBadge === "international");

export const visaServices = [
  {
    title: "Dubai 30 Days Express Visa",
    price: "₹8,000",
    description: "Express Visit Visa for 30 days. Fast processing & easy approval.",
    features: ["Express Processing", "Easy Approval", "Trusted Service", "Document Guidance"],
    flag: "🇦🇪",
  },
  {
    title: "Dubai 60 Days Express Visa",
    price: "₹14,000",
    description: "Extended 60-day Visit Visa for longer stays and exploration.",
    features: ["60 Day Stay", "Express Processing", "Easy Approval", "Trusted Service"],
    flag: "🇦🇪",
    popular: true,
  },
  {
    title: "Multiple Entry Visa (60 Days)",
    price: "₹22,000",
    description: "Multiple Entry Visit Visa for 60 days. Perfect for frequent travelers.",
    features: ["Multiple Entry", "60 Day Validity", "Maximum Flexibility", "Priority Service"],
    flag: "🇦🇪",
  },
];

export const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80",
    label: "Dubai, UAE",
  },
  {
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    label: "Pattaya, Thailand",
  },
  {
    image: "/venice-banner.jpg",
    label: "Venice, Italy",
  },
  {
    image: "/bangkok-banner.jpg",
    label: "Bangkok, Thailand",
  },
  {
    image: "/paris-banner.jpg",
    label: "Paris, France",
  },
];