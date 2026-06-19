import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section 
      className="py-10 sm:py-14 md:py-16 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(var(--navy) / 0.95) 0%, hsl(var(--navy-light) / 0.85) 50%, hsl(var(--gold) / 0.08) 100%)"
      }}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-shimmer px-2">
            Our Story in Motion
          </h2>
          <div 
            className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-elevated" 
            style={{ 
              aspectRatio: "16/9",
              boxShadow: "0 0 30px hsl(var(--gold) / 0.25), inset 0 0 20px hsl(var(--navy) / 0.1)"
            }}>
            <video
              className="w-full h-full object-cover bg-black"
              controls
              poster="/video-poster.jpg"
              preload="metadata"
              playsInline
            >
              <source src="/promo-video.mp4" type="video/mp4" />
              <source src="/promo-video.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center mt-4 sm:mt-6 text-xs sm:text-sm px-2" style={{ color: "hsl(var(--gold) / 0.8)" }}>
            Experience the legacy and excellence of Shreeparas through our story
          </p>
        </motion.div>
      </div>
    </section>
  );
}
