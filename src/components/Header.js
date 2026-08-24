"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "About Gulraiz", href: "#advisor" },
  { label: "Prime Portfolio", href: "#portfolio" },
  { label: "Developers", href: "#developers" },
  { label: "Market Insights", href: "#video-insights" },
  { label: "The Team", href: "#team" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#070709]/95 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl shadow-black/60"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-2 xl:gap-6">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gold-500/40 p-1 flex items-center justify-center bg-black/50 group-hover:border-gold-400 transition-colors shrink-0">
              <img
                src="/assets/img/gulli/glogo1.png"
                alt="The Realtaholic"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/glogo.png";
                }}
              />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="text-white font-bold tracking-[0.18em] text-xs sm:text-sm uppercase group-hover:text-gold-300 transition-colors whitespace-nowrap">
                THE REALTAHOLIC
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-gold-500 font-medium whitespace-nowrap">
                Dubai Private Advisory
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6 shrink-0">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] xl:text-xs uppercase tracking-[0.14em] xl:tracking-[0.18em] font-medium text-zinc-300 hover:text-gold-300 transition-colors whitespace-nowrap py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            {/* Social Direct Links */}
            <div className="flex items-center gap-2.5 text-zinc-400 border-r border-white/10 pr-3 xl:pr-4 shrink-0">
              <a
                href="https://www.facebook.com/profile.php?id=61555243659353&mibextid=wwXIfr&mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-400 transition-colors p-1 shrink-0"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/therealtaholic?igsi=MTgzOGxkcmN5OHMxeg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-400 transition-colors p-1 shrink-0"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@therealtaholic?si=ss0o5FXyl4h3NWPc"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-400 transition-colors p-1 shrink-0"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/971507771947"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors p-1 shrink-0"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>

            {/* VIP CTA */}
            <a
              href="#consultation"
              className="btn-gold !text-xs !py-2.5 !px-4 xl:!px-5 !uppercase !tracking-wider whitespace-nowrap shrink-0"
            >
              VIP Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-300 hover:text-gold-400 p-2 focus:outline-none shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#070709]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 animate-fadeIn">
          <div className="flex flex-col gap-6">
            <div className="pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-[0.2em] text-gold-500 font-semibold">
                Navigation
              </span>
            </div>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-200 hover:text-gold-300 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <div className="flex justify-center items-center gap-6 text-zinc-400 py-2">
              <a
                href="https://www.facebook.com/profile.php?id=61555243659353&mibextid=wwXIfr&mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-400 transition-colors text-xl"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/therealtaholic?igsi=MTgzOGxkcmN5OHMxeg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-400 transition-colors text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@therealtaholic?si=ss0o5FXyl4h3NWPc"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold-400 transition-colors text-xl"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://wa.me/971507771947"
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-400 transition-colors text-xl"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
            <a
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold w-full text-center justify-center !text-sm whitespace-nowrap"
            >
              Book VIP Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
