import React, { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { LOGO_URL, PHONE, WHATSAPP_NUMBER } from "./fitourism-data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 80);
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Our Service", id: "services" },
    { label: "Domestic Tour", id: "domestic" },
    { label: "International Tour", id: "international" },
    { label: "Visa", id: "visa" },
    { label: "Contact Us", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <button onClick={() => scrollTo("home")} className="flex items-center">
          <img src={LOGO_URL} alt="Fitourism" className="h-11 w-auto object-contain" />
        </button>

        <div className="hidden items-center gap-0 lg:flex">
          {navLinks.map((item, i) => (
            <span key={item.label} className="flex items-center">
              <button
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-slate-600 hover:text-[#5B16E8] transition-colors px-3"
              >
                {item.label}
              </button>
              {i < navLinks.length - 1 && (
                <span className="text-slate-300 select-none">|</span>
              )}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 h-9 rounded-full px-4 text-sm font-bold text-white"
            style={{ background: "linear-gradient(135deg, #5B16E8, #7C3AED)" }}
          >
            <Phone className="h-3.5 w-3.5" /> {PHONE}
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="h-9 rounded-full px-5 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #F68B6A, #F4B642)" }}
          >
            Book Now
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-600 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg lg:hidden">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.id)}
              className="block w-full py-3 text-left text-sm font-medium text-slate-600 hover:text-[#5B16E8]"
            >
              {item.label}
            </button>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#25D366]"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}