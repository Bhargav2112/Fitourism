import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, MessageCircle } from "lucide-react";
import { visaServices, WHATSAPP_NUMBER } from "./fitourism-data";

export default function VisaServices() {
  return (
    <section id="visa" className="px-4 py-20 lg:px-8 bg-[#EBF2FF]">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
            Dubai{" "}
            <span className="text-gradient-orange">Visa Services</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            Fast processing · Easy approval · Trusted service. Get your Dubai visa with Fitourism.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {visaServices.map((visa, i) => {
            const waMsg = encodeURIComponent(`Hi, I'm interested in the ${visa.title}. Price: ${visa.price}. Please share details.`);
            return (
              <motion.div
                key={visa.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md ${
                  visa.popular ? "border-[#5B16E8]/50 shadow-[#5B16E8]/10" : "border-slate-100"
                }`}
              >
                {visa.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#5B16E8] to-[#7C3AED] px-4 py-1 text-xs font-bold text-white shadow-md">
                    Most Popular
                  </span>
                )}
                <div className="mb-3 text-4xl">{visa.flag}</div>
                <h3 className="text-lg font-extrabold text-[#0f172a]">{visa.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{visa.description}</p>
                <div className="my-5">
                  <div className="text-3xl font-extrabold text-[#5B16E8]">{visa.price}</div>
                  <div className="text-xs text-slate-400">Per Person</div>
                </div>
                <ul className="mb-6 space-y-2">
                  {visa.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="h-4 w-4 shrink-0 text-[#5B16E8]" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                  style={{ background: visa.popular ? "linear-gradient(135deg, #5B16E8, #7C3AED)" : "linear-gradient(135deg, #F68B6A, #F4B642)" }}
                >
                  <MessageCircle className="h-4 w-4" /> Apply Now via WhatsApp
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}