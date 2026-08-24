"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowUpRight, HiShieldCheck, HiSparkles } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

const FirstSection = () => {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#070709]">
      {/* Background Dubai Cinematic Image with Luxury Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/img/gulli/6.jpeg"
          alt="Dubai Skyline & Luxury Real Estate"
          fill
          priority
          className="object-cover object-center opacity-30 scale-105"
        />
        {/* Deep Vignette & Dark Luxury Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-[#070709]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070709] via-transparent to-[#070709]" />
        
        {/* Subtle Ambient Gold Radiance Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Luxury Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-gold-500/30 backdrop-blur-md mb-6 whitespace-nowrap">
            <HiSparkles className="text-gold-400 w-4 h-4 shrink-0" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-gold-300 whitespace-nowrap">
              DUBAI PRIVATE CLIENT REAL ESTATE & ADVISORY
            </span>
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.12] mb-6">
            Curating Dubai’s Most{" "}
            <span className="text-gold-gradient font-serif-luxury italic font-normal">
              Exclusive Residences
            </span>{" "}
            & High-Yield Assets
          </h1>

          {/* Subtitle / Value Proposition */}
          <p className="text-zinc-300 text-sm sm:text-lg md:text-xl max-w-3xl mb-10 leading-relaxed font-light">
            Led by <strong className="text-white font-medium">Gulraiz Naveed</strong>, 
            Sales Head at Cresco Real Estate Dubai. Providing ultra-high-net-worth 
            investors worldwide with priority off-plan allocations, trophy penthouses, 
            and bespoke UAE property portfolios.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href="https://wa.me/971507771947?text=Hello%20Gulraiz,%20I%20would%20like%20to%20schedule%20a%20private%20consultation%20regarding%20Dubai%20Luxury%20Real%20Estate."
              target="_blank"
              rel="noreferrer"
              className="btn-gold w-full sm:w-auto text-sm whitespace-nowrap shrink-0"
            >
              <FaWhatsapp className="w-4 h-4 text-black shrink-0" />
              <span className="whitespace-nowrap">Connect on WhatsApp</span>
              <HiArrowUpRight className="w-4 h-4 text-black shrink-0" />
            </a>

            <a
              href="#portfolio"
              className="btn-outline-gold w-full sm:w-auto text-sm whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Explore Prime Portfolio</span>
            </a>
          </div>

          {/* Live Verified Stats Ribbon */}
          <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/[0.08]">
            <div className="luxury-card p-4 sm:p-5 rounded-2xl text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white block mb-1">
                AED 1B+
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 block font-medium">
                Facilitated Volume
              </span>
            </div>

            <div className="luxury-card p-4 sm:p-5 rounded-2xl text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-400 block mb-1">
                Top 1%
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 block font-medium">
                Dubai Sales Leader
              </span>
            </div>

            <div className="luxury-card p-4 sm:p-5 rounded-2xl text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white block mb-1">
                85%+
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 block font-medium">
                Client Closing Rate
              </span>
            </div>

            <div className="luxury-card p-4 sm:p-5 rounded-2xl text-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-400 block mb-1">
                600+
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-zinc-400 block font-medium">
                Global HNWI Clients
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstSection;
