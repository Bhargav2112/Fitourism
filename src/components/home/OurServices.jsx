import React from "react";
import { motion } from "framer-motion";
import { Compass, Plane, Train, Building2, FileCheck, Users, Ship, Umbrella, Heart, ShieldCheck, Globe } from "lucide-react";

const services = [
  { icon: FileCheck, title: "Visa Assistance", color: "#5B16E8" },
  { icon: Plane, title: "Flight Booking", color: "#3B82F6" },
  { icon: Train, title: "Train Booking", color: "#10B981" },
  { icon: Building2, title: "Hotel Booking", color: "#F68B6A" },
  { icon: FileCheck, title: "Passport Assistance", color: "#8B5CF6" },
  { icon: Compass, title: "Domestic Tour Packages", color: "#3B0FA8" },
  { icon: Globe, title: "International Tour Packages", color: "#F4B642" },
  { icon: Heart, title: "Honeymoon Packages", color: "#EC4899" },
  { icon: Users, title: "Group Tours", color: "#06B6D4" },
  { icon: Ship, title: "Cruise Holidays", color: "#1E40AF" },
  { icon: Umbrella, title: "Customized Holiday Packages", color: "#F97316" },
  { icon: ShieldCheck, title: "Travel Insurance", color: "#059669" },
];

export default function OurServices() {
  return (
    <section id="services" className="px-4 py-20 lg:px-8 bg-[#EBF2FF]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
            Our <span className="text-gradient-purple">Services</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            End-to-end travel solutions — from visas and flights to custom holiday planning.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#5B16E8]/30 hover:shadow-md"
            >
              <div
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                style={{ background: `${s.color}15` }}
              >
                <s.icon className="h-5 w-5" style={{ color: s.color }} />
              </div>
              <span className="text-sm font-bold text-slate-700">{s.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}