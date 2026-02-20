import React from "react";
import { motion, type Variants } from "framer-motion";
import { galleryItems } from "../constants/galleryItems";
import type { GalleryItem } from "../interface/interface";
import { Colors } from "../constants/colors";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const PortfolioGallery: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16" id="projects">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center mb-16"
      >
        Featured Projects
      </motion.h2>

      {/* Masonry Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 space-y-8"
      >
        {galleryItems.map((item: GalleryItem) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            layout
            whileHover={{ y: -8 }}
            className="break-inside-avoid cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white group relative"
            style={{
              border: `1px solid ${Colors.secondary}`,
            }}
          >
            {/* Image Wrapper */}
            <div className="relative overflow-hidden">
              <motion.img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/60 flex items-center justify-center"
              >
                {item.liveUrl && (
                  <motion.a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-2 rounded-lg font-semibold"
                    style={{
                      backgroundColor: Colors.primary,
                      color: "#000",
                    }}
                  >
                    View Project
                  </motion.a>
                )}
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-600 transition">
                {item.title}
              </h3>

              {item.tech && (
                <p className="text-sm text-gray-500">{item.tech}</p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioGallery;
