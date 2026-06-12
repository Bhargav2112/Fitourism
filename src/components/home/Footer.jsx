import React from "react";
import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin, Globe } from "lucide-react";
import { LOGO_URL, PHONE, EMAIL, ADDRESS, DISPLAY_NAME, SOCIAL_LINKS } from "./fitourism-data";

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const mainLinks = [
    { label: "Home", id: "home" },
    { label: "Our Service", id: "services" },
    { label: "Domestic Tour", id: "domestic" },
    { label: "International Tour", id: "international" },
    { label: "Visa", id: "visa" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <footer className="px-4 pt-14 pb-6 lg:px-8" style={{ background: "#0B2154" }}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-10 border-b border-white/10 md:grid-cols-4">
          <div>
            <img src={LOGO_URL} alt={DISPLAY_NAME} className="h-12 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-sm leading-6 text-white/50">
              {DISPLAY_NAME} — crafting unforgettable travel experiences since day one.
            </p>
            <p className="mt-2 text-xs font-bold text-[#F4B642]">"Chilling ka Fitoor, Only at Fitourism!"</p>
            <div className="mt-5 flex gap-3">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/60 hover:bg-[#5B16E8] hover:text-white transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/60 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/60 hover:bg-red-600 hover:text-white transition-all">
                <Youtube className="h-4 w-4" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/60 hover:bg-blue-700 hover:text-white transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-widest text-white/50">Quick Links</h4>
            <ul className="space-y-3">
              {mainLinks.map((l) => (
                <li key={l.label}>
                  <button onClick={() => scrollTo(l.id)} className="text-sm text-white/40 hover:text-[#F68B6A] transition-colors">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-widest text-white/50">Our Services</h4>
            <ul className="space-y-3 text-sm text-white/40">
              {["Visa Assistance", "Flight Booking", "Train Booking", "Hotel Booking", "Honeymoon Packages", "Group Tours", "Customized Packages"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5B16E8]" /> {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-extrabold uppercase tracking-widest text-white/50">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-white/40">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#F4B642]" /> {PHONE}
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#F4B642]" /> {EMAIL}
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-[#F4B642]" /> www.fitourism.com
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#F4B642]" /> {ADDRESS}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-xs text-white/25">
          <span>© 2026 {DISPLAY_NAME}. All rights reserved.</span>
          <div className="flex gap-5">
            <button className="hover:text-white/60 transition-colors">Privacy Policy</button>
            <button className="hover:text-white/60 transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}