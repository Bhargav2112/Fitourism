import React, { useState } from "react";
import { motion } from "framer-motion";
import PackageCard from "./PackageCard";
import ImageModal from "./ImageModal";
import { internationalPackages } from "./fitourism-data";

export default function InternationalPackages() {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <section id="international" className="px-4 py-20 lg:px-8 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[#0f172a] sm:text-5xl">
            Go{" "}
            <span className="text-gradient-orange">International Tours</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-500">
            Dubai, Thailand, Azerbaijan and beyond — explore the world's finest destinations with expert-curated packages.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {internationalPackages.map((pkg, i) => (
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