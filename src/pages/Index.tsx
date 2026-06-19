import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star, ShoppingCart, Shirt, ChevronDown } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpeg";
import supermarketImg from "@/assets/supermarket.jpg";
import fashionImg from "@/assets/fashion.jpg";

const timelineEvents = [
  { year: "2005", title: "Our Beginning", desc: "Founded with a vision to serve quality groceries to the community." },
  { year: "2010", title: "Fashion Expansion", desc: "Launched Shree Paras Fashion World, adding style to our portfolio." },
  { year: "2015", title: "Community Milestone", desc: "Served over 50,000 happy customers across both businesses." },
  { year: "2023", title: "Modern Era", desc: "Upgraded store infrastructure and expanded product range significantly." },
];


const heroImages = [
  { src: "/banner.jpeg", fallback: heroBg, alt: "Shreeparas Store 1" },
  { src: "/parasf.jpeg", fallback: heroBg, alt: "Shreeparas Store 2" },
  { src: "/hero-3.jpg", fallback: heroBg, alt: "Shreeparas Store 3" },
  { src: "/hero-4.jpg", fallback: heroBg, alt: "Shreeparas Store 4" },
];

export default function Index() {
  const heroRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Auto-rotate hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = heroImages[currentImageIndex];

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Carousel Background */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-[120%]"
        >
          <motion.img
            key={currentImageIndex}
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = currentImage.fallback;
            }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          />
        </motion.div>

        {/* Image indicators/dots */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <motion.button
              key={index}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: index === currentImageIndex ? "hsl(var(--gold))" : "hsl(var(--gold) / 0.3)",
                width: index === currentImageIndex ? "24px" : "8px"
              }}
              onClick={() => setCurrentImageIndex(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-1 h-full opacity-40" style={{ background: "var(--gradient-gold)" }} />
        <div className="absolute top-0 right-0 w-1 h-full opacity-40" style={{ background: "var(--gradient-gold)" }} />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center container mx-auto px-4"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-6 text-xs tracking-widest uppercase font-medium"
            style={{
              background: "hsl(var(--gold) / 0.15)",
              color: "hsl(var(--gold-light))",
            }}
          >
            <Star size={12} fill="currentColor" /> Est. 2005 · Legacy Brand
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight"
            style={{ color: "white" }}
          >
            Shreeparas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-2xl mb-4 font-light tracking-wide"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Where Quality Meets Lifestyle
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-sm md:text-base mb-10 max-w-xl mx-auto"
            style={{ color: "hsl(var(--gold-light) / 0.8)" }}
          >
            Two premium businesses — one trusted name. Serving fresh groceries and timeless fashion to our beloved community.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/businesses" className="btn-gold flex items-center gap-2 justify-center">
              Explore Our Businesses <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-outline-gold flex items-center gap-2 justify-center">
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "hsl(var(--gold) / 0.7)" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>

      {/* STATS SECTION */}
      <section className="section-navy">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <AnimatedCounter end={20} suffix="+" label="Years of Excellence" />
            <AnimatedCounter end={100000} suffix="+" label="Happy Customers" />
            <AnimatedCounter end={5000} suffix="+" label="Products Available" />
            <AnimatedCounter end={2} label="Premium Businesses" />
          </div>
        </div>
      </section>

      {/* LEGACY SECTION */}
      <section className="section-cream py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: "hsl(var(--gold-dark))" }}>Our Journey</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              A Legacy Built on Trust
            </h2>
            <div className="gold-divider" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
              For over two decades, Shreeparas has been a cornerstone of our community — delivering quality, value, and warmth to every family we serve.
            </p>
          </ScrollReveal>

          {/* Timeline */}
          <div className="max-w-2xl mx-auto">
            {timelineEvents.map((event, i) => (
              <ScrollReveal key={event.year} delay={i * 0.15} direction="left">
                <div className="timeline-item">
                  <div className="timeline-dot">
                    <div className="w-2 h-2 rounded-full" style={{ background: "hsl(var(--navy-dark))" }} />
                  </div>
                  <div className="card-premium p-5 ml-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="font-serif text-2xl font-bold"
                        style={{ color: "hsl(var(--gold-dark))" }}
                      >
                        {event.year}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-primary">{event.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS SHOWCASE */}
      <section className="py-24" style={{ background: "hsl(0 0% 100%)" }}>
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: "hsl(var(--gold-dark))" }}>Our Businesses</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Two Worlds, One Brand
            </h2>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Supermarket Card */}
            <ScrollReveal delay={0.1} direction="left">
              <div className="group rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500">
                <div className="img-zoom-container h-72">
                  <img src={supermarketImg} alt="Shreeparas Supermarket" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: "hsl(var(--navy) / 0.6)" }}>
                    <p className="text-sm font-medium" style={{ color: "hsl(var(--gold-light))" }}>Fresh groceries, daily essentials, household products & more.</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--gold) / 0.12)" }}>
                      <ShoppingCart size={18} style={{ color: "hsl(var(--gold-dark))" }} />
                    </div>
                    <p className="text-xs uppercase tracking-widest font-medium" style={{ color: "hsl(var(--gold-dark))" }}>Supermarket</p>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">Shreeparas Supermarket</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Your one-stop destination for premium groceries, fresh produce, daily essentials, and household products — all under one roof with unbeatable quality.
                  </p>
                  <Link
                    to="/businesses/supermarket"
                    className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    style={{ color: "hsl(var(--gold-dark))" }}
                  >
                    Explore More <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Fashion Card */}
            <ScrollReveal delay={0.25} direction="right">
              <div className="group rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500">
                <div className="img-zoom-container h-72">
                  <img src={fashionImg} alt="Shree Paras Fashion World" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: "hsl(var(--navy) / 0.6)" }}>
                    <p className="text-sm font-medium" style={{ color: "hsl(var(--gold-light))" }}>Men, Women, Kids collections in traditional & western styles.</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--gold) / 0.12)" }}>
                      <Shirt size={18} style={{ color: "hsl(var(--gold-dark))" }} />
                    </div>
                    <p className="text-xs uppercase tracking-widest font-medium" style={{ color: "hsl(var(--gold-dark))" }}>Fashion</p>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-3">Shree Paras Fashion World</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Discover a curated collection of traditional and contemporary fashion for men, women, and kids. Style that speaks your story.
                  </p>
                  <Link
                    to="/businesses/fashion"
                    className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    style={{ color: "hsl(var(--gold-dark))" }}
                  >
                    Explore More <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TWO VIDEOS SECTION */}
      <section 
        className="py-16 sm:py-20 md:py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(var(--navy) / 0.98) 0%, hsl(220 30% 12% / 0.92) 100%)"
        }}>
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: "hsl(var(--gold))" }}>Our Stories</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: "hsl(var(--gold))" }}>
              Shreeparas in Motion
            </h2>
            <div className="gold-divider" />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Video 1 - Supermarket */}
            <ScrollReveal delay={0.1} direction="left">
              <motion.div 
                className="rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated"
                style={{ 
                  aspectRatio: "16/9",
                  boxShadow: "0 0 30px hsl(var(--gold) / 0.2), inset 0 0 20px hsl(var(--navy) / 0.1)"
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  className="w-full h-full object-cover bg-black"
                  controls
                  poster="/video-poster1.jpg"
                  preload="metadata"
                  playsInline
                >
                  <source src="/supermarket-video.mp4" type="video/mp4" />
                  <source src="/supermarket-video.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
              <div className="mt-4">
                <h3 className="font-serif text-xl font-bold" style={{ color: "hsl(var(--gold))" }}>Shreeparas Supermarket</h3>
                <p className="text-sm mt-2" style={{ color: "hsl(var(--gold-light) / 0.8)" }}>
                  Experience fresh groceries and quality products curated for your family.
                </p>
              </div>
            </ScrollReveal>

            {/* Video 2 - Fashion */}
            <ScrollReveal delay={0.2} direction="right">
              <motion.div 
                className="rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated"
                style={{ 
                  aspectRatio: "16/9",
                  boxShadow: "0 0 30px hsl(var(--gold) / 0.2), inset 0 0 20px hsl(var(--navy) / 0.1)"
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <video
                  className="w-full h-full object-cover bg-black"
                  controls
                  poster="/video-poster2.jpg"
                  preload="metadata"
                  playsInline
                >
                  <source src="/fashion-video.mp4" type="video/mp4" />
                  <source src="/fashion-video.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
              <div className="mt-4">
                <h3 className="font-serif text-xl font-bold" style={{ color: "hsl(var(--gold))" }}>Shree Paras Fashion World</h3>
                <p className="text-sm mt-2" style={{ color: "hsl(var(--gold-light) / 0.8)" }}>
                  Discover timeless fashion and traditional styles for every occasion.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="section-navy py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full" style={{ background: "hsl(var(--gold))" }} />
          <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full" style={{ background: "hsl(var(--gold))" }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <p className="text-xs tracking-widest uppercase mb-3 font-medium" style={{ color: "hsl(var(--gold))" }}>Come Visit Us</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ color: "white" }}>
              Experience Shreeparas Today
            </h2>
            <div className="gold-divider" />
            <p className="mt-6 mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>
              Step into a world of quality and style. We're open every day, ready to serve you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold">
                Get Directions
              </Link>
              <Link to="/gallery" className="btn-outline-gold">
                View Gallery
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
