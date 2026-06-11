import React, { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, DISPLAY_NAME } from "./fitourism-data";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-2xl border border-white/20 bg-[#0B2154] p-5 shadow-2xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#25D366] grid place-items-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">{DISPLAY_NAME}</p>
                <p className="text-xs text-green-400">Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/40 hover:text-white">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="rounded-xl bg-white/10 p-3 text-xs text-white/80 mb-3">
            Hi there! Looking for a travel package? We're here to help you plan your dream trip!
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your tour packages. Please share details.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold text-white"
            style={{ background: "#25D366" }}
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-transform hover:scale-110"
        style={{ background: "#25D366", boxShadow: "0 0 20px rgba(37,211,102,0.5)" }}
        aria-label="WhatsApp Chat"
      >
        {open ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
}