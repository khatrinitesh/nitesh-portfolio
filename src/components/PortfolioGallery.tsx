import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryItems } from "../constants/galleryItems";
import type { GalleryItem } from "../interface/interface";
import { Colors } from "../constants/colors";

const categories = ["all", "web", "app", "design"];

const PortfolioGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8" id="projects">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className="cursor-pointer px-4 py-2 rounded-full font-semibold transition-colors"
            style={{
              backgroundColor:
                selectedCategory === cat
                  ? Colors.filterActiveBg
                  : Colors.filterInactiveBg,
              color:
                selectedCategory === cat
                  ? Colors.filterActiveText
                  : Colors.filterInactiveText,
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        <AnimatePresence>
          {filteredItems.map((item: GalleryItem) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 10px 20px ${Colors.primary}66`, // semi-transparent yellow shadow
              }}
              className="mb-4 break-inside-avoid rounded-lg overflow-hidden cursor-pointer"
              style={{
                border: `2px solid ${Colors.secondary}`,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PortfolioGallery;
