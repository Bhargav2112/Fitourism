import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { heroSlides, WHATSAPP_NUMBER } from "./fitourism-data";

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const active = heroSlides[index];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img src={active.image} alt={active.label} className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Minimal overlay for image visibility */}
      <div className="absolute inset-0 bg-black/20" />

      {/* CTA Buttons */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-wrap justify-center gap-3 px-4 sm:bottom-12 lg:bottom-16 lg:left-12 lg:translate-x-0 lg:justify-start">
        <button
          onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex h-11 items-center gap-2 rounded-full px-7 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl"
          style={{ background: "linear-gradient(135deg, #5B16E8, #7C3AED)" }}
        >
          Explore Packages <ArrowRight className="h-4 w-4" />
        </button>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'd like a free consultation for a travel package.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-full border-2 border-[#25D366]/60 bg-[#25D366]/15 px-7 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-[#25D366]/25"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Inquiry
        </a>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              i === index ? "w-8 h-2 bg-white" : "h-2 w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}