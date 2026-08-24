"use client";
import React from "react";
import { HiBuildingLibrary, HiSparkles, HiArrowUpRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

const developers = [
  {
    name: "EMAAR PROPERTIES",
    tagline: "The Master Developer of Downtown & Burj Khalifa",
    communities: ["Downtown Dubai", "Dubai Creek Harbour", "Dubai Hills", "Emaar South"],
    badge: "Tier-1 Master Developer",
    image: "/assets/img/regions/emr.jpeg",
  },
  {
    name: "ELLINGTON PROPERTIES",
    tagline: "Artisan Design-Led Luxury Residences",
    communities: ["Palm Jumeirah", "Dubai Islands", "Jumeirah Golf Estates"],
    badge: "Design Excellence",
    image: "/assets/img/regions/ellington.jpeg",
  },
  {
    name: "SOBHA REALTY",
    tagline: "Pioneering Signature In-House Craftsmanship",
    communities: ["Sobha Hartland", "MBR City", "Siniya Island"],
    badge: "Unrivaled Build Quality",
    image: "/assets/img/regions/sobha.jpeg",
  },
  {
    name: "BINGHATTI DEVELOPERS",
    tagline: "Hyper-Luxury & Global Branded Residences",
    communities: ["Business Bay", "Downtown Dubai", "Al Jaddaf"],
    badge: "Bugatti & Mercedes-Benz",
    image: "/assets/img/regions/bingathi.jpeg",
  },
  {
    name: "AZIZI DEVELOPMENTS",
    tagline: "Vibrant French-Mediterranean Waterfront Living",
    communities: ["Riviera Meydan", "Venice Dubai South", "Palm Jumeirah"],
    badge: "High Rental Yields",
    image: "/assets/img/regions/azizi.jpeg",
  },
  {
    name: "DANUBE PROPERTIES",
    tagline: "Pioneers of 1% Monthly Investor Payment Plans",
    communities: ["Dubai Maritime City", "Business Bay", "Al Furjan"],
    badge: "Flexible Payment Plans",
    image: "/assets/img/regions/danube.jpeg",
  },
];

const Azamprojects = () => {
  return (
    <section id="developers" className="py-24 relative bg-[#070709] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <HiBuildingLibrary className="w-3.5 h-3.5" />
            Official Strategic Partnerships
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Direct Allocations with Dubai’s{" "}
            <span className="text-gold-gradient font-serif-luxury italic font-normal">
              Premier Master Developers
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            We work directly with the UAE’s highest-rated master developers to secure
            pre-launch VIP allocations, 0% brokerage fees on off-plan, and direct developer contracts.
          </p>
        </div>

        {/* Developer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {developers.map((dev) => (
            <div
              key={dev.name}
              className="luxury-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-gold-500/40"
            >
              {/* Image & Developer Identity */}
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-[#0E0E12]/50 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-gold-300 border border-gold-500/30">
                      {dev.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-extrabold text-white tracking-wide">
                      {dev.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-zinc-300 text-xs mb-4 font-light leading-relaxed">
                    {dev.tagline}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold block">
                      Prime Locations & Key Projects
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {dev.communities.map((comm) => (
                        <span
                          key={comm}
                          className="px-2.5 py-1 rounded-md text-[11px] bg-white/[0.04] border border-white/[0.07] text-zinc-300"
                        >
                          {comm}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/971507771947?text=Hello%20Gulraiz,%20I%20would%20like%20to%20receive%20the%20latest%20available%20allocations%20and%20payment%20plans%20for%20${encodeURIComponent(
                    dev.name
                  )}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.03] hover:bg-gold-500/20 text-gold-300 hover:text-white border border-gold-500/20 hover:border-gold-400 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-3.5 h-3.5" />
                  <span>Request {dev.name.split(" ")[0]} Inventory</span>
                  <HiArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Azamprojects;
