import React, { useState } from "react";
import { motion } from "framer-motion";
import PackageCard from "./PackageCard";
import ImageModal from "./ImageModal";
import { packages } from "./fitourism-data";

export default function FeaturedPackages() {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <section id="packages" className="px-4 py-20 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
            Featured Travel{" "}
            <span className="text-gradient-purple">Packages</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            Handpicked domestic and international packages at the best prices — crafted for every kind of traveler.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              index={i}
              onViewDetails={(p) => setPreviewImage({ image: p.image, title: p.title })}
            />
          ))}
        </div>
      </div>

      <ImageModal
        image={previewImage?.image}
        title={previewImage?.title}
        onClose={() => setPreviewImage(null)}
      />
    </section>
  );
}