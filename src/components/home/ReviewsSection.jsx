import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, Check } from "lucide-react";

const reviews = [
  {
    stars: 5,
    text: "The Kashmir trip was absolutely magical! Fitourism handled everything — from Shikara ride on Dal Lake to Gulmarg gondola. Best experience!",
    name: "Priya Sharma",
    location: "Ahmedabad, Gujarat",
    trip: "Kashmir Package",
    platform: "Google",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80",
  },
  {
    stars: 5,
    text: "Booked Pattaya + Bangkok package — phenomenal. Coral Island speedboat and Alcazar show were highlights. Amazing value for money!",
    name: "Rahul Patel",
    location: "Surat, Gujarat",
    trip: "Pattaya + Bangkok Package",
    platform: "Google",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80",
  },
  {
    stars: 5,
    text: "Dubai Family Package exceeded expectations! UAE Visa was included and desert safari unforgettable. Stress-free family holiday.",
    name: "Anjali & Family",
    location: "Rajkot, Gujarat",
    trip: "Dubai Family Package",
    platform: "Instagram",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&q=80",
  },
];

export default function ReviewsSection() {
  const [idx, setIdx] = useState(0);
  const active = reviews[idx];

  return (
    <section className="px-4 py-20 lg:px-8 bg-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
          What Our Travelers Say
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
          Real reviews from real travelers. Thousands trust Fitourism for their dream vacations.
        </p>

        <div className="relative mx-auto mt-10 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-slate-100 bg-white px-8 py-10 shadow-sm"
            >
              <Quote className="mx-auto h-10 w-10 text-[#5B16E8]/20" />
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: active.stars }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#F4B642] text-[#F4B642]" />
                ))}
              </div>
              <p className="mt-5 text-base italic leading-8 text-slate-600">"{active.text}"</p>
              <div className="mt-7 flex items-center justify-center gap-4 flex-wrap">
                <img src={active.avatar} alt={active.name} className="h-11 w-11 rounded-full object-cover border-2 border-[#5B16E8]/20" />
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-800">{active.name}</p>
                  <p className="text-xs text-slate-400">{active.location}</p>
                  <p className="text-xs font-semibold text-[#F68B6A]">{active.trip}</p>
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-green-600">
                  <Check className="h-3.5 w-3.5" /> Verified on {active.platform}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-5 flex justify-center gap-2.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === idx ? "w-7 h-2.5 bg-[#5B16E8]" : "h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}