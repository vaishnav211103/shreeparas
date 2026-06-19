import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart, Check, Apple, Milk, Home, Droplets, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import supermarketImg from "@/assets/supermarket.jpg";

const categories = [
  { icon: Apple, label: "Fresh Groceries", desc: "Farm-fresh fruits, vegetables, and staples" },
  { icon: Milk, label: "Daily Essentials", desc: "Dairy, bread, eggs and morning must-haves" },
  { icon: Home, label: "Household Products", desc: "Cleaning supplies and home necessities" },
  { icon: Droplets, label: "Beverages", desc: "Juices, water, soft drinks and more" },
];

const highlights = [
  "5000+ Products in stock",
  "Daily fresh produce delivery",
  "Competitive pricing guaranteed",
  "Knowledgeable & friendly staff",
  "Hygienic storage & packaging",
  "Loyalty rewards for regular customers",
];

export default function Supermarket() {
  return (
    <>
      {/* Hero */}
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
            Business Unit 01
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4"
            style={{ color: "white" }}
          >
            Shreeparas <span className="text-shimmer">Supermarket</span>
          </motion.h1>
          <div className="gold-divider mx-auto" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto text-sm sm:text-base"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Your one-stop destination for premium groceries and daily essentials.
          </motion.p>
        </div>
      </section>

      {/* About + Image */}
      <section className="py-12 sm:py-16 md:py-24 section-cream">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[380px] max-h-[420px]">
                <img src={supermarketImg} alt="Shreeparas Supermarket" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="flex items-center gap-3 sm:gap-4 mb-6">
                <div
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gradient-navy)" }}
                >
                  <ShoppingCart size={22} style={{ color: "hsl(var(--gold))" }} />
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                  Your Neighbourhood Superstore
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                Shreeparas Supermarket is more than just a grocery store — it's your family's daily partner. We bring together thousands of products under one roof, from fresh farm produce to packaged goods, ensuring you never have to look further for your household needs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                With a warm, welcoming atmosphere and a team that knows your preferences, shopping at Shreeparas is an experience that keeps you coming back.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "hsl(var(--gold) / 0.15)" }}>
                      <Check size={11} style={{ color: "hsl(var(--gold-dark))" }} />
                    </div>
                    <span className="text-sm text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-6 sm:mt-8 btn-gold text-sm"
              >
                Visit Us <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16 md:py-20" style={{ background: "hsl(0 0% 98%)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-8 sm:mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">Product Categories</h3>
            <div className="gold-divider mx-auto mt-2" />
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {categories.map(({ icon: Icon, label, desc }, i) => (
              <ScrollReveal key={label} delay={i * 0.08}>
                <div className="card-premium p-4 sm:p-5 md:p-6 text-center group h-full flex flex-col">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "var(--gradient-navy)" }}
                  >
                    <Icon size={22} className="sm:w-6 sm:h-6" style={{ color: "hsl(var(--gold))" }} />
                  </div>
                  <h4 className="font-semibold text-primary text-sm mb-1">{label}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-navy py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm sm:text-base mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
            Ready to shop? We're here for you every day.
          </p>
          <Link to="/businesses" className="text-sm font-medium inline-flex items-center gap-2" style={{ color: "hsl(var(--gold))" }}>
            ← Back to all businesses
          </Link>
        </div>
      </section>
    </>
  );
}
