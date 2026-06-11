import React from "react";
import { Mail, MapPin, Phone, Clock, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER, PHONE, EMAIL, ADDRESS, DISPLAY_NAME, SOCIAL_LINKS } from "./fitourism-data";

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 lg:px-8 bg-[#EBF2FF]">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
            Contact <span className="text-gradient-orange">Us</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-slate-500">
            Reach out to our team of travel consultants and start planning your next journey today.
          </p>
        </motion.div>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-stretch">
          {/* Left Column: Google Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-slate-100 bg-white p-4 shadow-lg shadow-indigo-100/60 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50 flex"
          >
            <iframe
              title="Fitourism Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5!2d72.54!3d23.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDA0JzQ4LjAiTiA3MsKwMzInMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "1.25rem" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[450px] w-full min-h-[350px] object-cover"
            />
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-indigo-100/60 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-black text-[#0f172a] tracking-tight">{DISPLAY_NAME}</h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Connect with our team to book your packages, customize itineraries, or get assistance with visa applications.
              </p>

              <div className="mt-8 space-y-6">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#5B16E8]/10 text-[#5B16E8]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Office Address</h4>
                    <p className="mt-1 text-sm font-semibold text-slate-700 leading-relaxed">{ADDRESS}</p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F68B6A]/10 text-[#F68B6A]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</h4>
                    <a href={`tel:${PHONE.replace(/\s+/g, "")}`} className="mt-1 block text-sm font-bold text-slate-700 hover:text-[#5B16E8] transition-colors">
                      {PHONE}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#25D366]/10 text-[#25D366]">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.479 2.015 14.017 1 11.378 1 5.94 1 1.517 5.372 1.514 10.8c-.001 1.765.467 3.491 1.357 5.022l-.994 3.633 3.738-.981zm12.39-7.25c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp Contact</h4>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I'm%20interested%20in%20your%20tour%20packages.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-bold text-[#25D366] hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#F4B642]/10 text-[#F4B642]">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</h4>
                    <a href={`mailto:${EMAIL}`} className="mt-1 block text-sm font-bold text-slate-700 hover:text-[#5B16E8] transition-colors">
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#3B0FA8]/10 text-[#3B0FA8]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Working Hours</h4>
                    <p className="mt-1 text-sm font-semibold text-slate-700 leading-normal">
                      Monday – Saturday: 10:00 AM – 7:00 PM <span className="block text-xs font-normal text-slate-400 mt-0.5">(Sunday: Closed)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Connect With Us</h4>
              <div className="flex gap-3">
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-500 hover:bg-[#5B16E8] hover:text-white transition-all shadow-sm"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-500 hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-500 hover:bg-red-600 hover:text-white transition-all shadow-sm"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-500 hover:bg-blue-700 hover:text-white transition-all shadow-sm"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}