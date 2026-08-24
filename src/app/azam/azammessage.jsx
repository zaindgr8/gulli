"use client";
import React, { useState } from "react";
import { HiSparkles, HiShieldCheck, HiPhone, HiEnvelope, HiMapPin, HiCheck } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

const budgetTiers = [
  "AED 2M – 5M",
  "AED 5M – 15M",
  "AED 15M – 50M",
  "AED 50M+ Ultra-Prime",
];

const objectives = [
  "High-Yield Off-Plan (8–12% ROI)",
  "10-Year Golden Visa Residency",
  "Luxury Waterfront / Penthouse End-Use",
  "Off-Market Trophy Acquisition",
];

const Azammessage = () => {
  const [selectedBudget, setSelectedBudget] = useState("AED 5M – 15M");
  const [selectedObjective, setSelectedObjective] = useState("High-Yield Off-Plan (8–12% ROI)");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    const msg = `*VIP Private Client Consultation Request*%0A%0A*Name:* ${encodeURIComponent(
      name || "Prospective Investor"
    )}%0A*Phone/WhatsApp:* ${encodeURIComponent(phone || "Not specified")}%0A*Target Budget:* ${encodeURIComponent(
      selectedBudget
    )}%0A*Investment Objective:* ${encodeURIComponent(
      selectedObjective
    )}%0A*Additional Requirements:* ${encodeURIComponent(notes || "None")}`;

    window.open(`https://wa.me/971507771947?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-24 relative bg-[#09090C] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 w-[800px] h-[350px] bg-gold-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Personal Narrative & Trust Points */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              <HiSparkles className="w-3.5 h-3.5" />
              Private Representation
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Bespoke Advisory for the{" "}
              <span className="text-gold-gradient font-serif-luxury italic font-normal">
                Discerning Investor
              </span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
              Navigating Dubai’s luxury market requires deep local relationships, 
              data-driven market timing, and uncompromising discretion. Whether you are acquiring 
              a trophy home on Palm Jumeirah or structuring a multi-unit high-yield portfolio, 
              Gulraiz Naveed provides direct, senior-level guidance at every milestone.
            </p>

            {/* Credibility Checklist */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                  <HiCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Direct Developer Pricing & Pre-Launch Priority</h4>
                  <p className="text-xs text-zinc-400 font-light">No agency commissions on off-plan acquisitions directly from master developers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                  <HiCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Full Legal, Escrow & Golden Visa Processing</h4>
                  <p className="text-xs text-zinc-400 font-light">Complete coordination with Dubai Land Department (DLD) and UAE immigration authorities.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                  <HiCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">International Fiat & Crypto Transaction Support</h4>
                  <p className="text-xs text-zinc-400 font-light">Compliant cross-border payment structures tailored to overseas investors.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+971507771947"
                className="luxury-card p-4 rounded-2xl flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gold-400 group-hover:border-gold-400">
                  <HiPhone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Direct Line</span>
                  <span className="text-sm font-semibold text-white">+971 50 777 1947</span>
                </div>
              </a>

              <a
                href="mailto:therealtaholic@gmail.com"
                className="luxury-card p-4 rounded-2xl flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-gold-400 group-hover:border-gold-400">
                  <HiEnvelope className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider block">Private Email</span>
                  <span className="text-sm font-semibold text-white">therealtaholic@gmail.com</span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: VIP Consultation Form */}
          <div className="lg:col-span-6">
            <div className="luxury-card-gold p-6 sm:p-8 rounded-3xl relative shadow-2xl">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.2em] text-gold-400 font-bold block mb-1">
                  Concierge Service
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Schedule a VIP Strategy Session
                </h3>
                <p className="text-xs text-zinc-300 font-light mt-1">
                  Fill out your parameters to receive a custom property shortlist or speak directly with Gulraiz.
                </p>
              </div>

              <form onSubmit={handleWhatsAppBooking} className="space-y-5">
                
                {/* Investment Budget Selector */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block mb-2">
                    Target Investment Range (AED)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgetTiers.map((tier) => (
                      <button
                        type="button"
                        key={tier}
                        onClick={() => setSelectedBudget(tier)}
                        className={`py-2 px-3 rounded-xl text-xs font-medium transition-all ${
                          selectedBudget === tier
                            ? "bg-gold-500 text-black font-semibold shadow"
                            : "bg-white/[0.04] text-zinc-300 border border-white/10 hover:border-gold-400/40"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Investment Objective Selector */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block mb-2">
                    Primary Objective
                  </label>
                  <div className="grid grid-cols-1 gap-1.5">
                    {objectives.map((obj) => (
                      <button
                        type="button"
                        key={obj}
                        onClick={() => setSelectedObjective(obj)}
                        className={`py-2 px-3 rounded-xl text-xs text-left transition-all ${
                          selectedObjective === obj
                            ? "bg-white text-black font-semibold shadow"
                            : "bg-white/[0.04] text-zinc-300 border border-white/10 hover:border-gold-400/40"
                        }`}
                      >
                        {obj}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder:text-zinc-600 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-zinc-300 font-semibold block mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-black/60 border border-white/15 text-white placeholder:text-zinc-600 text-xs focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="btn-gold w-full text-xs uppercase tracking-wider !py-3 font-bold"
                >
                  <FaWhatsapp className="w-4 h-4 text-black" />
                  <span>Connect with Gulraiz via WhatsApp</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-emerald-400 font-medium animate-fadeIn">
                    ✓ Opening WhatsApp concierge with your investment parameters...
                  </p>
                )}

                <p className="text-[11px] text-center text-zinc-400 font-light">
                  🔒 Strictly Confidential. No spam. Direct private broker communication.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Azammessage;