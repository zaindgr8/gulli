"use client";
import React, { useState } from "react";
import { HiSparkles, HiOutlineBuildingOffice2, HiMapPin, HiCheckBadge, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

const categories = [
  { id: "all", label: "All Prime Collections" },
  { id: "penthouses", label: "Sky Mansions & Penthouses" },
  { id: "waterfront", label: "Waterfront Villas" },
  { id: "branded", label: "Branded Residences" },
  { id: "investment", label: "High-ROI Portfolios" },
];

const properties = [
  {
    id: 1,
    category: "penthouses",
    title: "The Royal Sky Penthouse",
    location: "Downtown Dubai",
    developer: "Emaar Properties",
    priceAed: 18500000,
    beds: "4–5 Beds",
    baths: "6 Baths",
    area: "7,850 Sq.Ft.",
    handover: "Q4 2026",
    tag: "Burj Khalifa Panoramic Views",
    goldenVisa: true,
    roi: "8.5% Projected Yield",
    image: "/assets/img/regions/emr.jpeg",
  },
  {
    id: 2,
    category: "branded",
    title: "Bugatti Signature Sky Villa",
    location: "Business Bay, Dubai",
    developer: "Binghatti Developers",
    priceAed: 24000000,
    beds: "3–4 Beds",
    baths: "5 Baths",
    area: "6,200 Sq.Ft.",
    handover: "Q1 2027",
    tag: "Private Car Elevator & Pool",
    goldenVisa: true,
    roi: "10.2% Projected Yield",
    image: "/assets/img/regions/bingathi.jpeg",
  },
  {
    id: 3,
    category: "waterfront",
    title: "Ellington Beachfront Sanctuary",
    location: "Palm Jumeirah",
    developer: "Ellington Properties",
    priceAed: 32000000,
    beds: "5–6 Beds",
    baths: "7 Baths",
    area: "9,400 Sq.Ft.",
    handover: "Q2 2026",
    tag: "Private Beach & Yacht Berth",
    goldenVisa: true,
    roi: "9.0% Projected Yield",
    image: "/assets/img/regions/ellington.jpeg",
  },
  {
    id: 4,
    category: "investment",
    title: "Sobha Hartland II Forest Reserve",
    location: "Sobha Hartland, MBR City",
    developer: "Sobha Realty",
    priceAed: 3400000,
    beds: "1–3 Beds",
    baths: "2–4 Baths",
    area: "1,250 - 2,800 Sq.Ft.",
    handover: "Q4 2025",
    tag: "High Capital Appreciation",
    goldenVisa: true,
    roi: "9.8% Net Annual Yield",
    image: "/assets/img/regions/sobha.jpeg",
  },
  {
    id: 5,
    category: "investment",
    title: "Azizi Riviera Waterfront Boulevard",
    location: "Meydan One, Dubai",
    developer: "Azizi Developments",
    priceAed: 1850000,
    beds: "Studio - 2 Beds",
    baths: "1–2 Baths",
    area: "680 - 1,450 Sq.Ft.",
    handover: "Ready / Q2 2025",
    tag: "Prime High-Yield Rental",
    goldenVisa: false,
    roi: "10.5% Net Annual Yield",
    image: "/assets/img/regions/azizi.jpeg",
  },
  {
    id: 6,
    category: "penthouses",
    title: "Danube Oceanz Waterfront Suites",
    location: "Dubai Maritime City",
    developer: "Danube Properties",
    priceAed: 2950000,
    beds: "2–3 Beds",
    baths: "3 Baths",
    area: "1,600 Sq.Ft.",
    handover: "Q1 2027",
    tag: "1% Monthly Payment Plan",
    goldenVisa: true,
    roi: "9.2% Net Annual Yield",
    image: "/assets/img/regions/danube.jpeg",
  },
];

export default function AzamPrivateCollection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currency, setCurrency] = useState("AED"); // "AED" or "USD"

  const filteredProperties =
    activeCategory === "all"
      ? properties
      : properties.filter((p) => p.category === activeCategory);

  const formatPrice = (priceAed) => {
    if (currency === "USD") {
      const usdPrice = Math.round(priceAed / 3.6725);
      return `$ ${usdPrice.toLocaleString("en-US")}`;
    }
    return `AED ${priceAed.toLocaleString("en-US")}`;
  };

  return (
    <section id="portfolio" className="py-24 relative bg-[#09090C] overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute left-1/2 top-10 -translate-x-1/2 w-[700px] h-[300px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <HiSparkles className="w-3.5 h-3.5" />
              Curated Dubai Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Exclusive Prime <br className="hidden sm:block" />
              <span className="text-gold-gradient font-serif-luxury italic font-normal">
                Residences & Investment
              </span> Allocations
            </h2>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
              Currency:
            </span>
            <div className="p-1 rounded-full bg-white/[0.04] border border-white/10 flex items-center">
              <button
                onClick={() => setCurrency("AED")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  currency === "AED"
                    ? "bg-gold-500 text-black shadow"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                AED (د.إ)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  currency === "USD"
                    ? "bg-gold-500 text-black shadow"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                  : "bg-white/[0.03] text-zinc-300 border border-white/[0.07] hover:border-gold-400/40 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProperties.map((item) => (
            <div
              key={item.id}
              className="luxury-card rounded-3xl overflow-hidden flex flex-col group"
            >
              {/* Image Container with Badges */}
              <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-gold-300 border border-gold-500/30">
                    {item.developer}
                  </span>
                  {item.goldenVisa && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <HiCheckBadge className="w-3 h-3" />
                      Golden Visa
                    </span>
                  )}
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-3 left-3.5 right-3.5">
                  <span className="text-[11px] font-medium text-zinc-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-zinc-400 text-xs mb-2">
                    <HiMapPin className="text-gold-400 w-3.5 h-3.5" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Feature Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-white/[0.03] border border-white/[0.05] mb-4 text-center">
                    <div>
                      <span className="text-[10px] uppercase text-zinc-500 block">Bedrooms</span>
                      <span className="text-xs font-semibold text-zinc-200">{item.beds}</span>
                    </div>
                    <div className="border-x border-white/10">
                      <span className="text-[10px] uppercase text-zinc-500 block">Area</span>
                      <span className="text-xs font-semibold text-zinc-200">{item.area}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-zinc-500 block">Handover</span>
                      <span className="text-xs font-semibold text-gold-400">{item.handover}</span>
                    </div>
                  </div>
                </div>

                {/* Price and Inquiry Action */}
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">
                        Starting Price
                      </span>
                      <span className="text-lg font-bold text-white">
                        {formatPrice(item.priceAed)}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block">
                        {item.roi}
                      </span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/971507771947?text=Hello%20Gulraiz,%20I%20am%20interested%20in%20receiving%20the%20VIP%20brochure%20and%20floorplans%20for%20${encodeURIComponent(
                      item.title + " (" + item.location + ")"
                    )}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-gold-500 hover:text-black border border-white/10 hover:border-transparent text-xs font-semibold uppercase tracking-wider text-zinc-200 transition-all flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    <span>Inquire / Get Brochure</span>
                    <HiArrowTopRightOnSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-8 rounded-3xl luxury-card-gold flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">
              Looking for Off-Market Penthouses & Private Mansions?
            </h4>
            <p className="text-zinc-300 text-sm max-w-xl font-light">
              Gulraiz Naveed holds direct allocations for exclusive confidential listings 
              across Palm Jumeirah, Emirates Hills, and Bulgari Lighthouse.
            </p>
          </div>
          <a
            href="https://wa.me/971507771947?text=Hello%20Gulraiz,%20I%20would%20like%20to%20request%20access%20to%20your%20off-market%20luxury%20portfolio."
            target="_blank"
            rel="noreferrer"
            className="btn-gold whitespace-nowrap text-xs uppercase tracking-wider"
          >
            Request Private Access
          </a>
        </div>

      </div>
    </section>
  );
}
