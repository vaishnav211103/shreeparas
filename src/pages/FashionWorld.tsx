import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shirt, Check, Users, Sparkles, Baby, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import fashionImg from "@/assets/fashion.jpg";

const categories = [
  { icon: Users, label: "Men's Collection", desc: "Traditional kurtas, formal shirts, casual wear" },
  { icon: Sparkles, label: "Women's Collection", desc: "Sarees, salwar suits, western wear" },
  { icon: Baby, label: "Kids' Collection", desc: "Colourful, comfortable, age-appropriate styles" },
];

const highlights = [
  "Traditional & western collections",
  "Seasonal new arrivals",
  "Custom stitching services",
  "Festive special discounts",
  "Premium fabric quality",
  "Expert fashion consultants",
];

export default function FashionWorld() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden" style={{ background: "var(--gradient-navy)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full translate-y-1/2 -translate-x-1/2" style={{ background: "hsl(var(--gold))" }} />
        </div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-widest uppercase mb-2 sm:mb-3 font-medium"
            style={{ color: "hsl(var(--gold))" }}
          >
            Business Unit 02
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4"
            style={{ color: "white" }}
          >
            Shree Paras <span className="text-shimmer">Fashion World</span>
          </motion.h1>
          <div className="gold-divider mx-auto" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto text-sm sm:text-base"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Where tradition meets contemporary — style for the whole family.
          </motion.p>
        </div>
      </section>

      {/* About + Image */}
      <section className="py-12 sm:py-16 md:py-24 scroll-mt-20" style={{ background: "hsl(220 30% 15%)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold mb-4" style={{ color: "white" }}>
                Style That Tells Your Story
              </h2>
              <p className="leading-relaxed mb-4 text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
                Shree Paras Fashion World is where tradition meets contemporary — a curated fashion destination for every member of your family. From vibrant festive wear to everyday casuals, we bring you quality fashion at remarkable prices.
              </p>
              <p className="leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base" style={{ color: "rgba(255,255,255,0.75)" }}>
                Our passionate fashion consultants help you discover looks that complement your personality and the occasion. Whether it's a wedding, festival, or daily wear, we have it all.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ background: "hsl(var(--gold) / 0.2)" }}>
                      <Check size={11} style={{ color: "hsl(var(--gold))" }} />
                    </div>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{h}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 btn-gold text-sm"
              >
                Visit Us <ArrowRight size={16} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[380px] max-h-[420px]" style={{ boxShadow: "0 20px 60px hsl(var(--gold) / 0.15)" }}>
                <img src={fashionImg} alt="Shree Paras Fashion World" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 sm:py-16 md:py-20" style={{ background: "hsl(220 30% 13%)", borderTop: "1px solid hsl(var(--gold) / 0.1)" }}>
        <div className="container mx-auto px-4 sm:px-6">
          <ScrollReveal className="text-center mb-8 sm:mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold" style={{ color: "white" }}>Fashion Collections</h3>
            <div className="gold-divider mx-auto mt-2" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {categories.map(({ icon: Icon, label, desc }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <div
                  className="p-6 sm:p-8 rounded-xl sm:rounded-2xl text-center group transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                  style={{
                    background: "hsl(var(--gold) / 0.07)",
                  }}
                >
                  <div
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <Icon size={26} className="sm:w-7 sm:h-7" style={{ color: "hsl(var(--navy-dark))" }} />
                  </div>
                  <h4 className="font-serif text-lg font-bold mb-2" style={{ color: "hsl(var(--gold-light))" }}>{label}</h4>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(255,255,255,0.65)" }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16" style={{ background: "hsl(220 30% 15%)" }}>
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm sm:text-base mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
            Find your perfect look. We're here to help.
          </p>
          <Link to="/businesses" className="text-sm font-medium inline-flex items-center gap-2" style={{ color: "hsl(var(--gold))" }}>
            ← Back to all businesses
          </Link>
        </div>
      </section>
    </>
  );
}
