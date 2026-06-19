import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Eye, TrendingUp, Award, Users, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import founderImg from "@/assets/founder.jpg";

const visionMission = [
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be the most trusted retail destination in our region — where every customer feels like family and every product reflects our commitment to quality.",
  },
  {
    icon: Target,
    title: "Our Mission",
    desc: "Delivering exceptional value through quality products, honest service, and a warm community experience that keeps families coming back.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Integrity, quality, community care, and continuous improvement — the four pillars that have guided Shreeparas since day one.",
  },
];

const milestones = [
  { year: "2005", title: "Humble Beginnings", desc: "Started as a small grocery store with big dreams and community values." },
  { year: "2008", title: "Growing Trust", desc: "Expanded product range and gained a loyal customer base of 10,000 families." },
  { year: "2010", title: "Fashion Venture", desc: "Launched Shree Paras Fashion World to serve the community's style needs." },
  { year: "2015", title: "Infrastructure Upgrade", desc: "Invested in modern store layouts and premium shelving systems." },
  { year: "2020", title: "Digital Presence", desc: "Embraced modern marketing and community engagement." },
  { year: "2024", title: "New Horizons", desc: "Continuing to grow, innovate, and serve with the same founding spirit." },
];

const achievements = [
  { icon: Award, label: "Best Local Retailer Award" },
  { icon: Users, label: "1,00,000+ Customers Served" },
  { icon: TrendingUp, label: "20 Years of Growth" },
  { icon: Heart, label: "Community Pillar Since 2005" },
];

export default function About() {
  return (
    <>
      {/* PAGE HEADER */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: "var(--gradient-navy)" }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-1/2 translate-x-1/2" style={{ background: "hsl(var(--gold))" }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-widest uppercase mb-3 font-medium"
            style={{ color: "hsl(var(--gold))" }}
          >
            Who We Are
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-serif text-5xl md:text-6xl font-bold mb-4"
            style={{ color: "white" }}
          >
            About <span className="text-shimmer">Shreeparas</span>
          </motion.h1>
          <div className="gold-divider" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-4 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Two decades of trust, quality, and community service.
          </motion.p>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="py-24 section-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="img-zoom-container rounded-2xl shadow-elevated">
                  <img src={founderImg} alt="Founder" className="w-full object-cover rounded-2xl" style={{ maxHeight: "500px" }} />
                </div>
                {/* Floating badge */}
                <div
                  className="absolute -bottom-6 -right-6 rounded-2xl p-5 shadow-gold animate-float"
                  style={{ background: "var(--gradient-navy)" }}
                >
                  <p className="font-serif text-3xl font-bold text-shimmer">20+</p>
                  <p className="text-xs uppercase tracking-widest mt-1" style={{ color: "hsl(var(--gold-light) / 0.8)" }}>Years of Legacy</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: "hsl(var(--gold-dark))" }}>Founder's Story</p>
              <h2 className="font-serif text-4xl font-bold text-primary mb-4">
                A Dream, A Drive,<br />A Dynasty
              </h2>
              <div className="gold-divider-left" />
              <p className="mt-4 text-muted-foreground leading-relaxed mb-4">
                It began with a simple belief — that every family deserves access to quality products at honest prices. Our founder started Shreeparas in 2005 with nothing but determination, integrity, and an unwavering commitment to community service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From a small shop to two flourishing businesses serving thousands of families, the journey of Shreeparas is a testament to what passion and perseverance can achieve. Every product we stock, every service we offer, carries the founder's personal promise of quality.
              </p>
              <div className="flex flex-wrap gap-4">
                {achievements.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                    style={{ background: "hsl(var(--gold) / 0.1)", color: "hsl(var(--gold-dark))" }}
                  >
                    <Icon size={13} />
                    {label}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VISION MISSION VALUES */}
      <section className="py-24" style={{ background: "hsl(0 0% 100%)" }}>
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: "hsl(var(--gold-dark))" }}>Our Purpose</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Vision, Mission & Values</h2>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {visionMission.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.15}>
                <div className="card-premium p-8 h-full text-center group">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "var(--gradient-navy)" }}
                  >
                    <Icon size={28} style={{ color: "hsl(var(--gold))" }} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GROWTH TIMELINE */}
      <section className="py-24 section-cream">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: "hsl(var(--gold-dark))" }}>Our Growth</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">The Journey So Far</h2>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.1}>
                <div className="card-premium p-6 flex gap-5 items-start">
                  <div
                    className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center font-serif font-bold text-sm"
                    style={{ background: "var(--gradient-gold)", color: "hsl(var(--navy-dark))" }}
                  >
                    {m.year}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-primary mb-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRESS BARS */}
      <section className="section-navy py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: "hsl(var(--gold))" }}>Our Strengths</p>
              <h2 className="font-serif text-4xl font-bold mb-4" style={{ color: "white" }}>
                Built on Excellence
              </h2>
              <div className="gold-divider-left" />
              <p className="mt-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                Every metric reflects our commitment to the community we proudly serve.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-6">
                {[
                  { label: "Customer Satisfaction", value: 97 },
                  { label: "Product Quality Standards", value: 99 },
                  { label: "Community Trust", value: 95 },
                  { label: "Brand Recognition", value: 88 },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium" style={{ color: "hsl(var(--gold-light))" }}>{label}</span>
                      <span className="text-sm font-bold" style={{ color: "hsl(var(--gold))" }}>{value}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: "hsl(var(--gold) / 0.15)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        className="h-full rounded-full"
                        style={{ background: "var(--gradient-gold)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
