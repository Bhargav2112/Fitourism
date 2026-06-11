import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageModal({ image, title, onClose }) {
  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative max-h-[90vh] max-w-[90vw]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-slate-700 shadow-lg hover:bg-slate-100 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={image}
            alt={title || ""}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}