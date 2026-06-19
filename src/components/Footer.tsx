import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube, Heart, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Shreeparas Supermarket", href: "/businesses/supermarket" },
  { label: "Shree Paras Fashion World", href: "/businesses/fashion" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook", color: "#1877f2" },
  { icon: Instagram, href: "#", label: "Instagram", color: "#e1306c" },
  { icon: Twitter, href: "#", label: "Twitter", color: "#1da1f2" },
  { icon: Youtube, href: "#", label: "YouTube", color: "#ff0000" },
];

const contactItems = [
  { icon: MapPin, text: "Shree Paras Compound, Behind M G Petrol Pump, Soygaon, Malegaon-423105, Maharashtra" },
  { icon: Phone, text: "+91 00000 00000", href: "tel:+910000000000" },
  { icon: Mail, text: "info@shreeparas.com", href: "mailto:info@shreeparas.com" },
  { icon: Clock, text: "Mon – Sun: 9:00 AM – 9:00 PM" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0f172a" }}>

      {/* ── TOP ACCENT BAND ── */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, hsl(346,60%,58%) 0%, hsl(346,65%,72%) 50%, hsl(346,60%,58%) 100%)" }}
      />

      {/* ── BRAND HERO STRIP ── */}
      <div
        className="relative py-14 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 60%, #1a0d17 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
          style={{ background: "hsl(346 60% 58% / 0.12)" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full blur-3xl pointer-events-none"
          style={{ background: "hsl(220 60% 50% / 0.08)" }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Brand identity */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="font-serif text-5xl font-bold mb-2"
                style={{ color: "#fff" }}
              >
                Shreeparas
              </div>
              <div
                className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: "hsl(346,60%,68%)" }}
              >
                Legacy · Trust · Excellence
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                Serving our community with quality products and exceptional service since 2005.
              </p>
            </motion.div>

            {/* Social icons */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300"
                  style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.7)" }}
                  whileHover={{ scale: 1.12, backgroundColor: "hsl(346,60%,58%)", color: "#fff" }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── MAIN LINKS + CONTACT GRID ── */}
      <div style={{ background: "#111827" }}>
        <div className="container mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ background: "hsl(346,60%,58%)" }}
                />
                <h3 className="font-serif text-base font-bold tracking-wide" style={{ color: "#fff" }}>
                  Quick Links
                </h3>
              </div>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-2 text-sm transition-all duration-200"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "hsl(346,65%,72%)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)")}
                    >
                      <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ background: "hsl(346,60%,58%)" }}
                />
                <h3 className="font-serif text-base font-bold tracking-wide" style={{ color: "#fff" }}>
                  Contact Info
                </h3>
              </div>
              <ul className="space-y-5">
                {contactItems.map(({ icon: Icon, text, href }) => (
                  <li key={text} className="flex gap-3 items-start">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "hsl(346 60% 58% / 0.15)" }}
                    >
                      <Icon size={14} style={{ color: "hsl(346,60%,68%)" }} />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm leading-relaxed transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "hsl(346,65%,72%)")}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                      >
                        {text}
                      </a>
                    ) : (
                      <span className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Business Info */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ background: "hsl(346,60%,58%)" }}
                />
                <h3 className="font-serif text-base font-bold tracking-wide" style={{ color: "#fff" }}>
                  Business Info
                </h3>
              </div>

              <div className="space-y-4">
                {/* GST Card */}
                <div
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.04)" }}
                >
                  <p className="text-xs uppercase tracking-widest mb-1 font-semibold" style={{ color: "hsl(346,60%,60%)" }}>
                    GST Number
                  </p>
                  <p className="font-mono text-base font-bold" style={{ color: "#fff" }}>
                    XXXXXXXXXXXX
                  </p>
                </div>

                {/* Est + Stores in a 2-col mini grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className="rounded-2xl p-4 text-center"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <p className="text-xs uppercase tracking-widest mb-1 font-semibold" style={{ color: "hsl(346,60%,60%)" }}>
                      Est.
                    </p>
                    <p className="font-serif font-bold text-xl" style={{ color: "#fff" }}>2005</p>
                  </div>
                  <div
                    className="rounded-2xl p-4 text-center"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <p className="text-xs uppercase tracking-widest mb-1 font-semibold" style={{ color: "hsl(346,60%,60%)" }}>
                      Stores
                    </p>
                    <p className="font-serif font-bold text-xl" style={{ color: "#fff" }}>2</p>
                  </div>
                </div>

                {/* Customers served pill */}
                <div
                  className="rounded-2xl p-4 flex items-center gap-3"
                  style={{ background: "hsl(346 60% 58% / 0.1)" }}
                >
                  <Heart size={16} style={{ color: "hsl(346,60%,65%)", flexShrink: 0 }} />
                  <div>
                    <p className="text-xs font-medium" style={{ color: "hsl(346,65%,72%)" }}>Happy Customers</p>
                    <p className="font-serif font-bold text-lg" style={{ color: "#fff" }}>1,00,000+</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM COPYRIGHT STRIP ── */}
      <div style={{ background: "#0a0f1a" }}>
        <div className="container mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Shreeparas. All rights reserved. | Shreeparas Supermarket &amp; Shree Paras Fashion World
          </p>
          <p className="text-xs font-medium" style={{ color: "hsl(346,55%,55%)" }}>
            Crafted with legacy &amp; pride ✦
          </p>
        </div>
      </div>
    </footer>
  );
}
