import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const topSocials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Businesses",
    href: "/businesses",
    dropdown: [
      { label: "Shreeparas Supermarket", href: "/businesses/supermarket" },
      { label: "Shree Paras Fashion World", href: "/businesses/fashion" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top Bar: GSTIN left, Social right */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-navy-dark h-9 sm:h-10">
        <div className="container mx-auto px-3 sm:px-4 h-full flex items-center justify-between gap-2">
          <p className="text-[10px] sm:text-xs font-medium truncate min-w-0" style={{ color: "hsl(var(--gold-light))" }}>
            GSTIN: <span className="font-mono font-semibold" style={{ color: "hsl(var(--gold))" }}>XXXXXXXXXXXX</span>
          </p>
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {topSocials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "hsl(var(--gold) / 0.12)",
                  color: "hsl(var(--gold))",
                  border: "1px solid hsl(var(--gold) / 0.25)",
                }}
              >
                <Icon size={12} strokeWidth={2} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || mobileOpen ? "navbar-solid" : "navbar-transparent"
        }`}
        style={{ top: "40px" }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo with Image - responsive size */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 min-w-0">
            <img
              src="/logo.jpg"
              alt="Shreeparas Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain shrink-0"
              style={{ maxWidth: "52px" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="flex flex-col leading-none min-w-0">
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-shimmer truncate">
                SHREEPARAS
              </span>
              <span className="text-[10px] sm:text-xs tracking-widest uppercase truncate" style={{ color: "hsl(var(--gold-light))", opacity: 0.8 }}>
                Legacy · Trust · Excellence
              </span>
            </div>
          </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative group">
                <button
                  className={`flex items-center gap-1 text-sm font-medium transition-all duration-200 ${
                    scrolled
                      ? isActive(item.href)
                        ? "text-gold"
                        : "text-primary-foreground hover:text-gold"
                      : "text-white hover:text-gold-light"
                  }`}
                  style={
                    !scrolled
                      ? {
                          color: isActive(item.href)
                            ? "hsl(var(--gold))"
                            : "rgba(255,255,255,0.9)",
                        }
                      : {
                          color: isActive(item.href)
                            ? "hsl(var(--gold))"
                            : "hsl(var(--primary-foreground))",
                        }
                  }
                >
                  {item.label}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-56 bg-navy-dark border border-gold/20 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-elevated">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      className="block px-4 py-3 text-sm transition-all duration-150 hover:bg-gold/10 border-b border-gold/10 last:border-0"
                      style={{ color: "hsl(var(--gold-light))" }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-medium transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
                  isActive(item.href)
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }`}
                style={{
                  color: !scrolled
                    ? isActive(item.href)
                      ? "hsl(var(--gold))"
                      : "rgba(255,255,255,0.9)"
                    : isActive(item.href)
                    ? "hsl(var(--gold))"
                    : "hsl(var(--primary-foreground))",
                  "--tw-after-bg": "hsl(var(--gold))",
                } as React.CSSProperties}
              >
                <span style={{
                  "--after-color": "hsl(var(--gold))"
                } as React.CSSProperties}>{item.label}</span>
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:block btn-gold text-sm"
        >
          Visit Us
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "hsl(var(--gold))" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "hsl(var(--navy-dark))" }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className={`block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-150 ${
                      isActive(item.href) ? "bg-gold/10" : "hover:bg-gold/5"
                    }`}
                    style={{
                      color: isActive(item.href)
                        ? "hsl(var(--gold))"
                        : "hsl(var(--primary-foreground))",
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="ml-4 flex flex-col gap-1 mt-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          to={sub.href}
                          className="py-2 px-4 text-xs rounded-lg hover:bg-gold/5 transition-all"
                          style={{ color: "hsl(var(--gold-light))" }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="btn-gold text-center mt-4 text-sm"
              >
                Visit Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
