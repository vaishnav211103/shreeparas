import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import supermarketImg from "@/assets/supermarket.jpg";
import fashionImg from "@/assets/fashion.jpg";

const galleryItems = [
  { src: gallery1, alt: "Fresh Produce Section", category: "Supermarket", span: "row-span-2" },
  { src: gallery2, alt: "Fashion Display", category: "Fashion", span: "row-span-2" },
  { src: gallery3, alt: "Store Interior", category: "Supermarket", span: "" },
  { src: gallery4, alt: "Clothing Collection", category: "Fashion", span: "" },
  { src: supermarketImg, alt: "Supermarket Aisle", category: "Supermarket", span: "" },
  { src: fashionImg, alt: "Fashion Boutique", category: "Fashion", span: "" },
  { src: gallery5, alt: "Community Event", category: "Events", span: "" },
  { src: gallery6, alt: "Product Shelves", category: "Supermarket", span: "" },
];

const categories = ["All", "Supermarket", "Fashion", "Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-32 pb-20 relative overflow-hidden" style={{ background: "var(--gradient-navy)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/2" style={{ background: "hsl(var(--gold))" }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-widest uppercase mb-3 font-medium"
            style={{ color: "hsl(var(--gold))" }}
          >
            A Visual Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl font-bold mb-4"
            style={{ color: "white" }}
          >
            Our <span className="text-shimmer">Gallery</span>
          </motion.h1>
          <div className="gold-divider" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Glimpses of our stores, collections, and the community we proudly serve.
          </motion.p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 section-cream">
        <div className="container mx-auto px-4">
          {/* Filter Tabs */}
          <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={
                  activeCategory === cat
                    ? { background: "var(--gradient-gold)", color: "hsl(var(--navy-dark))" }
                    : {
                        background: "hsl(var(--gold) / 0.08)",
                        color: "hsl(var(--gold-dark))",
                      }
                }
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>

          {/* Masonry Grid */}
          <div className="gallery-grid">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="gallery-item"
                  onClick={() => setLightbox(item.src)}
                >
                  <img src={item.src} alt={item.alt} className="w-full" loading="lazy" />
                  <div className="gallery-overlay">
                    <div className="text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{ background: "hsl(var(--gold) / 0.2)", border: "1px solid hsl(var(--gold) / 0.5)" }}
                      >
                        <ZoomIn size={20} style={{ color: "hsl(var(--gold-light))" }} />
                      </div>
                      <p className="text-sm font-medium" style={{ color: "hsl(var(--gold-light))" }}>{item.alt}</p>
                      <p className="text-xs mt-1 tracking-widest uppercase" style={{ color: "hsl(var(--gold) / 0.7)" }}>{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
            style={{ background: "hsl(var(--navy-dark) / 0.95)" }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "hsl(var(--gold) / 0.2)", border: "1px solid hsl(var(--gold) / 0.4)" }}
              onClick={() => setLightbox(null)}
            >
              <X size={18} style={{ color: "hsl(var(--gold-light))" }} />
            </button>
            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              src={lightbox}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-elevated object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
