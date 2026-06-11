import React from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle, MessageCircle, Eye } from "lucide-react";
import { WHATSAPP_NUMBER } from "./fitourism-data";

const badgeStyles = {
  domestic: { bg: "bg-emerald-50 text-emerald-700 border-emerald-200", label: "Domestic" },
  international: { bg: "bg-blue-50 text-blue-700 border-blue-200", label: "International" },
  pilgrimage: { bg: "bg-amber-50 text-amber-700 border-amber-200", label: "Pilgrimage" },
};

export default function PackageCard({ pkg, index = 0, onClick, onViewDetails }) {
  const badge = badgeStyles[pkg.typeBadge] || badgeStyles.domestic;
  const waMsg = encodeURIComponent(`Hi, I'm interested in the *${pkg.title}* package (${pkg.duration}). Price: ${pkg.price}. Please share more details.`);
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="card-premium group flex flex-col overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden cursor-pointer" onClick={() => onViewDetails?.(pkg)}>
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        <span className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-bold ${badge.bg}`}>
          {badge.label}
        </span>
        <span className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          <Clock className="h-3 w-3 text-[#5B16E8]" /> {pkg.duration}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold leading-snug text-slate-800">{pkg.title}</h3>
        <p className="mt-1 text-xs text-slate-400">{pkg.subtitle}</p>

        <ul className="mt-3 space-y-1.5">
          {pkg.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle className="h-3.5 w-3.5 shrink-0 text-[#5B16E8]" /> {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs text-slate-400">Starting from</div>
              <div className="text-2xl font-extrabold text-[#5B16E8]">{pkg.price}</div>
              <div className="text-xs text-slate-400">{pkg.priceLabel}</div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <button
              onClick={(e) => { e.stopPropagation(); onViewDetails?.(pkg); }}
              className="flex items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-bold text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #5B16E8, #7C3AED)" }}
            >
              <Eye className="h-3.5 w-3.5" /> View Details
            </button>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1.5 rounded-lg border-2 border-[#25D366]/40 bg-[#25D366]/5 py-2.5 text-xs font-bold text-[#25D366] transition-all hover:bg-[#25D366]/10 hover:border-[#25D366]/60"
            >
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}