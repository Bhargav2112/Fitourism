import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "./fitourism-data";

const services = [
  {
    title: "Visa Assistance",
    description: "Expert visa processing services with high success rates for tourism, business, and study.",
    image: "/visa-assistance.png",
    whatsappText: "Hi, I'm interested in Visa Assistance services.",
  },
  {
    title: "Passport Assistance",
    description: "Expert guidance and support for new passport applications, renewals, and quick processing.",
    image: "/passport-assistance.png",
    whatsappText: "Hi, I'm interested in Passport Assistance.",
  },
  {
    title: "Flight Booking",
    description: "Get the best flight fares for domestic and international travel with flexible booking options.",
    image: "/flight-booking.png",
    whatsappText: "Hi, I'm interested in Flight Booking.",
  },
  {
    title: "Hotel Booking",
    description: "Get the best deals on luxury resorts, business hotels, and budget stays worldwide.",
    image: "/hotel-booking.png",
    whatsappText: "Hi, I'm interested in Hotel Booking.",
  },
  {
    title: "Train Booking",
    description: "Convenient and confirmed train ticket bookings for hassle-free rail journeys across India.",
    image: "/train-booking.png",
    whatsappText: "Hi, I'm interested in Train Booking.",
  },
  {
    title: "Domestic Tour Packages",
    description: "Explore the diverse landscapes, rich culture, and heritage of India with curated packages.",
    image: "/domestic-packages.png",
    whatsappText: "Hi, I'm interested in Domestic Tour Packages.",
  },
  {
    title: "International Tour Packages",
    description: "Discover exotic destinations across the globe with hassle-free and affordable itineraries.",
    image: "/international-packages.jpg",
    whatsappText: "Hi, I'm interested in International Tour Packages.",
  },
  {
    title: "Customized Holiday Packages",
    description: "Tailor-made itineraries designed to match your unique travel style, budget, and preferences.",
    image: "/customized-packages.png",
    whatsappText: "Hi, I'm interested in Customized Holiday Packages.",
  },
  {
    title: "Honeymoon Packages",
    description: "Create unforgettable romantic memories with our specially crafted, handpicked couple getaways.",
    image: "/honeymoon-packages.png",
    whatsappText: "Hi, I'm interested in Honeymoon Packages.",
  },
  {
    title: "Group Tours",
    description: "Fun-filled, guided travel experiences perfect for families, friends, and corporate groups.",
    image: "/group-tours.png",
    whatsappText: "Hi, I'm interested in Group Tours.",
  },
  {
    title: "Cruise Holidays",
    description: "Sail away on luxury liners to exotic international destinations with all-inclusive premium stays.",
    image: "/cruise-holidays.jpg",
    whatsappText: "Hi, I'm interested in Cruise Holidays.",
  },
];

export default function OurServices() {
  return (
    <section id="services" className="px-4 py-20 lg:px-8 bg-[#EBF2FF]">
      <div className="mx-auto max-w-7xl">
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
            End-to-end travel solutions — from custom holiday planning and honeymoon getaways to luxury cruises.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex w-full max-w-sm flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 justify-between">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
                </div>

                {/* Centered WhatsApp Button */}
                <div className="flex justify-center mt-auto">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(s.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#20ba5a] hover:shadow-lg"
                  >
                    <MessageCircle className="h-4 w-4 fill-current" /> Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}