"use client";
import React from "react";
import { motion } from "framer-motion";
import { HiCheckBadge, HiArrowTrendingUp, HiKey, HiGlobeEuropeAfrica } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

const Azamvision = () => {
  return (
    <section id="advisor" className="py-24 relative bg-[#070709] overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Gallery of Gulraiz Naveed */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Main Portrait Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-gold-500/30 p-2 bg-gradient-to-b from-white/10 to-transparent shadow-2xl shadow-black/80">
                <div className="relative h-[480px] sm:h-[540px] w-full rounded-2xl overflow-hidden">
                  <img
                    src="/assets/img/gulli/1.jpeg"
                    alt="Gulraiz Naveed - Luxury Real Estate Strategist Dubai"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Floating Verified Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-xl bg-black/60 border border-white/15">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5 text-white font-semibold text-sm">
                          <span>Gulraiz Naveed</span>
                          <HiCheckBadge className="text-gold-400 w-4 h-4" />
                        </div>
                        <span className="text-[11px] text-zinc-300 tracking-wider uppercase block">
                          Sales Head • Cresco Real Estate Dubai
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gold-500/20 text-gold-300 border border-gold-500/40">
                        Top Performer 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Proof Card */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-2xl luxury-card-gold max-w-xs shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400/40 flex items-center justify-center shrink-0">
                  <HiGlobeEuropeAfrica className="text-gold-400 w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">Global Investor Network</span>
                  <span className="text-[11px] text-zinc-400 block">UK, Europe, GCC, India & USA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Value Propositions */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Private Client Advisory
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              A Decade of Mastery in <br className="hidden sm:block" />
              <span className="text-gold-gradient font-serif-luxury italic font-normal">
                Dubai’s Ultra-Prime
              </span> Real Estate
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
              With over 10 years at the forefront of Dubai’s dynamic property market, 
              Gulraiz Naveed serves as a trusted advisor to high-net-worth individuals, 
              family offices, and institutional investors. Leading sales at 
              <strong className="text-white font-medium"> Cresco Real Estate Dubai</strong> and 
              having facilitated in excess of <strong className="text-white font-medium"> AED 1 Billion</strong> in transactions, 
              Gulraiz provides unmatched market intelligence, off-market deal flow, and 
              bespoke acquisition strategies.
            </p>

            {/* Three Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="luxury-card p-4 rounded-2xl">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-3">
                  <HiKey className="text-gold-400 w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">First-Access Allocations</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Priority pre-launch access and floor selection directly from premier developers.
                </p>
              </div>

              <div className="luxury-card p-4 rounded-2xl">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-3">
                  <HiCheckBadge className="text-gold-400 w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">Golden Visa Concierge</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Turnkey residency guidance for 10-year UAE Golden Visa qualifying assets (AED 2M+).
                </p>
              </div>

              <div className="luxury-card p-4 rounded-2xl">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-3">
                  <HiArrowTrendingUp className="text-gold-400 w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1.5">8–12% High-Yield Exit</h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  Data-backed ROI structuring and strategic resale timing for optimal capital appreciation.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/971507771947?text=Hello%20Gulraiz,%20I%20would%20like%20to%20consult%20with%20you%20on%20an%20exclusive%20property%20investment."
                target="_blank"
                rel="noreferrer"
                className="btn-gold text-sm"
              >
                <FaWhatsapp className="w-4 h-4" />
                <span>Private Consultation with Gulraiz</span>
              </a>
              <a
                href="#developers"
                className="btn-outline-gold text-sm"
              >
                View Top Developers
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Azamvision;