"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaWhatsapp, FaArrowUp, FaFacebookF } from "react-icons/fa";
import { HiMapPin, HiPhone, HiEnvelope, HiShieldCheck } from "react-icons/hi2";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/[0.08] text-zinc-400 relative overflow-hidden pt-16 pb-8">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/[0.06]">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="w-10 h-10 rounded-full border border-gold-500/40 p-1 flex items-center justify-center bg-black/60">
                <img
                  src="/assets/img/gulli/glogo1.png"
                  alt="The Realtaholic Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/glogo.png";
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-[0.2em] text-sm uppercase">
                  THE REALTAHOLIC
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold-500 font-medium">
                  Gulraiz Naveed | Dubai
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light max-w-md">
              A premier private real estate advisory serving high-net-worth investors 
              across Dubai’s most coveted off-plan developments, trophy penthouses, 
              and waterfront estates. Sales Head at Cresco Real Estate Dubai.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61555243659353&mibextid=wwXIfr&mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/therealtaholic?igsi=MTgzOGxkcmN5OHMxeg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/@therealtaholic?si=ss0o5FXyl4h3NWPc"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-gold-400 hover:border-gold-400/40 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/971507771947"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-white font-semibold block mb-2">
              Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#overview" className="hover:text-gold-300 transition-colors">Overview</a>
              </li>
              <li>
                <a href="#advisor" className="hover:text-gold-300 transition-colors">About Gulraiz Naveed</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gold-300 transition-colors">Curated Prime Portfolio</a>
              </li>
              <li>
                <a href="#developers" className="hover:text-gold-300 transition-colors">Developer Partnerships</a>
              </li>
              <li>
                <a href="#video-insights" className="hover:text-gold-300 transition-colors">Market Insights & Tours</a>
              </li>
              <li>
                <a href="#team" className="hover:text-gold-300 transition-colors">The Advisory Team</a>
              </li>
              <li>
                <a href="#consultation" className="hover:text-gold-300 transition-colors">VIP Consultation</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Dubai Office & Direct Contact */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-white font-semibold block mb-2">
              Dubai Office & Advisory
            </span>

            <div className="space-y-2.5 text-xs text-zinc-300">
              <div className="flex items-start gap-2.5">
                <HiMapPin className="text-gold-400 w-4 h-4 shrink-0 mt-0.5" />
                <span>Cresco Real Estate, Azizi Riviera, Meydan One, Dubai, UAE</span>
              </div>

              <div className="flex items-center gap-2.5">
                <HiPhone className="text-gold-400 w-4 h-4 shrink-0" />
                <a href="tel:+971507771947" className="hover:text-gold-300 transition-colors">
                  +971 50 777 1947
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <HiEnvelope className="text-gold-400 w-4 h-4 shrink-0" />
                <a href="mailto:therealtaholic@gmail.com" className="hover:text-gold-300 transition-colors">
                  therealtaholic@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[11px] text-zinc-400">
                <HiShieldCheck className="text-emerald-400 w-4 h-4 shrink-0" />
                <span>RERA Licensed & DLD Compliant Channel Partner</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-zinc-300 font-medium">The Realtaholic</strong> • Gulraiz Naveed. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Dubai, United Arab Emirates</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-gold-400 transition-colors"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <FaArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}