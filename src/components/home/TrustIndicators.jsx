import React from "react";
import { motion } from "framer-motion";
import { Users, MapPin, Globe, FileCheck } from "lucide-react";

const stats = [
  { icon: Users, value: "1,000+", label: "Happy Travelers", color: "#5B16E8" },
  { icon: MapPin, value: "30+", label: "Domestic Tours", color: "#F68B6A" },
  { icon: Globe, value: "20+", label: "International Tours", color: "#F4B642" },
  { icon: FileCheck, value: "100%", label: "Visa Success Rate", color: "#3B0FA8" },
];

export default function TrustIndicators() {
  return (
    <section className="px-4 py-20 lg:px-8 bg-gradient-to-br from-[#EBF2FF] via-[#F3E8FF] to-[#EBF2FF] border-y border-indigo-100/60">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
            Why Travelers Choose{" "}
            <span className="text-gradient-purple">
              Fitourism
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">
            Thousands of happy travelers trust us with their dream vacations. Here is why.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-lg shadow-indigo-100/80 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#5B16E8]/30 hover:shadow-xl hover:shadow-indigo-200/50"
            >
              <div
                className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl shadow-md"
                style={{ background: s.color }}
              >
                <s.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-3xl font-black text-[#0f172a]">{s.value}</div>
              <div className="mt-2 text-sm font-bold text-slate-500 uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}