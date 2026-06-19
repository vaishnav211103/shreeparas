import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["Shree Paras Compound, Behind M G Petrol Pump", "Soygaon, Malegaon-423105, Maharashtra"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 00000 00000", "+91 00000 00001"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["info@shreeparas.com", "support@shreeparas.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Monday – Saturday: 9AM – 9PM", "Sunday: 10AM – 8PM"],
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
            We'd Love to Hear From You
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl font-bold mb-4"
            style={{ color: "white" }}
          >
            Get in <span className="text-shimmer">Touch</span>
          </motion.h1>
          <div className="gold-divider" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Have a question or want to visit us? We're always here to help.
          </motion.p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="py-16 section-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ icon: Icon, title, lines }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div className="card-premium p-6 text-center group">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: "var(--gradient-navy)" }}
                  >
                    <Icon size={22} style={{ color: "hsl(var(--gold))" }} />
                  </div>
                  <h3 className="font-serif font-semibold text-primary mb-3 text-sm uppercase tracking-wide">{title}</h3>
                  {lines.map((line, j) => (
                    <p key={j} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="py-16 pb-24" style={{ background: "hsl(0 0% 100%)" }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FORM */}
            <ScrollReveal direction="left">
              <div className="card-premium p-8 md:p-10">
                <h2 className="font-serif text-3xl font-bold text-primary mb-2">Send Us a Message</h2>
                <div className="gold-divider-left" />
                <p className="text-muted-foreground text-sm mt-4 mb-8">Fill in the form below and we'll get back to you within 24 hours.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <CheckCircle size={56} style={{ color: "hsl(var(--gold))" }} className="mb-4" />
                    <h3 className="font-serif text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground text-sm">Thank you for reaching out. We'll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder=" "
                          className="form-input"
                        />
                        <label htmlFor="name" className="form-label">Full Name *</label>
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder=" "
                          className="form-input"
                        />
                        <label htmlFor="email" className="form-label">Email Address *</label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder=" "
                          className="form-input"
                        />
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                      </div>
                      <div className="form-group">
                        <select
                          name="subject"
                          id="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="form-input"
                          style={{ paddingTop: "1.25rem" }}
                        >
                          <option value="" disabled>Select Subject</option>
                          <option value="supermarket">Shreeparas Supermarket</option>
                          <option value="fashion">Shree Paras Fashion World</option>
                          <option value="general">General Inquiry</option>
                          <option value="feedback">Feedback</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder=" "
                        className="form-input resize-none"
                      />
                      <label htmlFor="message" className="form-label">Your Message *</label>
                    </div>

                    <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2">
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* MAP + Extra Info */}
            <ScrollReveal direction="right">
              <div className="flex flex-col gap-6 h-full">
                {/* Map embed placeholder */}
                <div
                  className="rounded-2xl overflow-hidden flex-1 flex items-center justify-center min-h-72"
                  style={{
                    background: "var(--gradient-navy)",
                    minHeight: "320px",
                  }}
                >
                  <div className="text-center">
                    <MapPin size={48} className="mx-auto mb-4" style={{ color: "hsl(var(--gold))" }} />
                    <p className="font-serif text-xl font-bold mb-2" style={{ color: "white" }}>Find Us Here</p>
                    <p className="text-sm mb-1" style={{ color: "hsl(var(--gold-light) / 0.7)" }}>Shree Paras Compound, Behind M G Petrol Pump</p>
                    <p className="text-sm" style={{ color: "hsl(var(--gold-light) / 0.7)" }}>Soygaon, Malegaon-423105, Maharashtra</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Shree+Paras+Compound,+Behind+M+G+Petrol+Pump,+Soygaon,+Malegaon-423105,+Maharashtra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-gold inline-block mt-6 text-sm"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* GST Info */}
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "hsl(var(--cream))" }}
                >
                  <h3 className="font-serif text-lg font-bold text-primary mb-4">Business Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm pb-2">
                      <span className="text-muted-foreground">GST Number</span>
                      <span className="font-mono font-semibold text-primary">XXXXXXXXXXXX</span>
                    </div>
                    <div className="flex justify-between text-sm pb-2">
                      <span className="text-muted-foreground">Established</span>
                      <span className="font-semibold text-primary">2005</span>
                    </div>
                    <div className="flex justify-between text-sm pb-2">
                      <span className="text-muted-foreground">Business Units</span>
                      <span className="font-semibold text-primary">2 Stores</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Customers Served</span>
                      <span className="font-semibold text-primary">1,00,000+</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
