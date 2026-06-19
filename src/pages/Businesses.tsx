import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Shirt, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import supermarketImg from "@/assets/supermarket.jpg";
import fashionImg from "@/assets/fashion.jpg";

const businesses = [
  {
    title: "Shreeparas Supermarket",
    tagline: "Your one-stop for groceries & daily essentials",
    href: "/businesses/supermarket",
    image: supermarketImg,
    icon: ShoppingCart,
    gradient: "var(--gradient-navy)",
  },
  {
    title: "Shree Paras Fashion World",
    tagline: "Traditional & contemporary fashion for the family",
    href: "/businesses/fashion",
    image: fashionImg,
    icon: Shirt,
    gradient: "var(--gradient-gold)",
  },
];

export default function Businesses() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden" style={{ background: "var(--gradient-navy)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full -translate-y-1/2 translate-x-1/2" style={{ background: "hsl(var(--gold))" }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-widest uppercase mb-2 sm:mb-3 font-medium"
            style={{ color: "hsl(var(--gold))" }}
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4"
            style={{ color: "white" }}
          >
            Our <span className="text-shimmer">Businesses</span>
          </motion.h1>
          <div className="gold-divider mx-auto" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-xl mx-auto text-sm sm:text-base"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Two distinct businesses, one unified commitment to quality.
          </motion.p>
        </div>
      </section>

      {/* BUSINESS CARDS */}
      <section className="py-12 sm:py-16 md:py-24 section-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {businesses.map((b, i) => (
              <ScrollReveal key={b.href} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
                <Link
                  to={b.href}
                  className="group block rounded-xl sm:rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 bg-card"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                    <img
                      src={b.image}
                      alt={b.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 flex items-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(to top, hsl(224 50% 10% / 0.9), transparent 50%)" }}
                    >
                      <span className="text-sm font-medium" style={{ color: "hsl(var(--gold-light))" }}>
                        {b.tagline}
                      </span>
                    </div>
                    <div
                      className="absolute top-4 left-4 sm:top-6 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center"
                      style={{ background: b.gradient }}
                    >
                      <b.icon size={20} className="sm:w-6 sm:h-6" style={{ color: b.gradient === "var(--gradient-gold)" ? "hsl(var(--navy-dark))" : "hsl(var(--gold))" }} />
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 md:p-8">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2">{b.title}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base mb-4">{b.tagline}</p>
                    <span className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all" style={{ color: "hsl(var(--gold-dark))" }}>
                      Explore <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
