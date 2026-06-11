import React from "react";
import { motion } from "framer-motion";
import { Compass, DollarSign, FileCheck, HeadphonesIcon, MapPin, Building2, ShieldCheck, PhoneCall } from "lucide-react";

const reasons = [
  { icon: Compass, title: "Personalized Tour Planning", desc: "Every itinerary is crafted to match your travel style, pace, and budget." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees. What you see is what you pay — always fair and upfront." },
  { icon: FileCheck, title: "Visa Assistance", desc: "Expert guidance for Dubai, Thailand and more — 100% approval track record." },
  { icon: HeadphonesIcon, title: "Dedicated Travel Consultant", desc: "A personal expert assigned to your trip from planning to return." },
  { icon: MapPin, title: "Ahmedabad Based Support", desc: "Local office in Naranpura — walk in anytime or reach us 24×7." },
  { icon: Building2, title: "Best Hotel Selection", desc: "Handpicked 3-star and above hotels verified by our team." },
  { icon: ShieldCheck, title: "No Hidden Charges", desc: "All taxes, permits, and fees included in the listed package price." },
  { icon: PhoneCall, title: "24×7 Customer Support", desc: "Round-the-clock assistance — we're always just a call away." },
];

export default function WhyChooseUs() {
  return (
    <section className="px-4 py-20 lg:px-8 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
            Why Travelers Love{" "}
            <span className="text-gradient-purple">Fitourism</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">
            From planning to return — every step is designed to give you peace of mind and unforgettable memories.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#5B16E8]/30 hover:shadow-md"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-[#5B16E8]/10">
                <r.icon className="h-5 w-5 text-[#5B16E8]" />
              </div>
              <h3 className="text-sm font-bold text-slate-800">{r.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}