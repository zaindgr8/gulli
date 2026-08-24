"use client";
import React, { useState } from "react";
import { FaInstagram, FaYoutube, FaPlay, FaFacebookF } from "react-icons/fa";
import { HiSparkles, HiArrowTopRightOnSquare, HiXMark } from "react-icons/hi2";
import ReusableCountUp from "@/components/counter";

const Azamvideo = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="video-insights" className="py-24 relative bg-[#09090C] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <HiSparkles className="w-3.5 h-3.5" />
            Media & Market Influence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Over 1 Million Views Guiding{" "}
            <span className="text-gold-gradient font-serif-luxury italic font-normal">
              Global Real Estate Investors
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
            Through unfiltered market analysis, on-site construction updates, and transparent 
            investment breakdowns, Gulraiz Naveed empowers buyers worldwide to make profitable Dubai acquisitions.
          </p>
        </div>

        {/* Video Tour Feature & Social Authority */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Cinematic Video Preview Container */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 group bg-black">
              <div className="relative h-[320px] sm:h-[440px] w-full overflow-hidden">
                <img
                  src="/assets/img/gulli/2.jpeg"
                  alt="Gulraiz Naveed Dubai Real Estate Tour"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/40" />

                {/* Play Button Trigger */}
                <button
                  onClick={() => setVideoModalOpen(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gold-500/90 text-black flex items-center justify-center shadow-2xl shadow-gold-500/40 hover:scale-110 hover:bg-gold-400 transition-all z-10 group/btn"
                  aria-label="Play Property Tour Video"
                >
                  <FaPlay className="w-6 h-6 ml-1 text-black" />
                </button>

                {/* Video Info Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400 font-semibold block mb-1">
                      Featured Property Tour
                    </span>
                    <h3 className="text-white font-bold text-lg sm:text-xl">
                      Exclusive Walkthrough: Luxury Living in Dubai
                    </h3>
                  </div>
                  <span className="hidden sm:inline-flex px-3 py-1 rounded-full text-xs bg-white/10 backdrop-blur-md text-zinc-300 border border-white/10">
                    Watch Full Tour
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Metrics & Channel Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            
            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/therealtaholic?igsi=MTgzOGxkcmN5OHMxeg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="luxury-card p-4 rounded-2xl flex items-center justify-between group hover:border-gold-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white text-lg shadow-lg">
                  <FaInstagram />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-white">10,000+</span>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider">Followers</span>
                  </div>
                  <span className="text-xs text-gold-400">@therealtaholic</span>
                </div>
              </div>
              <HiArrowTopRightOnSquare className="text-zinc-500 group-hover:text-gold-400 transition-colors w-4 h-4" />
            </a>

            {/* YouTube Card */}
            <a
              href="https://youtube.com/@therealtaholic?si=ss0o5FXyl4h3NWPc"
              target="_blank"
              rel="noreferrer"
              className="luxury-card p-4 rounded-2xl flex items-center justify-between group hover:border-gold-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white text-lg shadow-lg shadow-red-600/20">
                  <FaYoutube />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-white">5,000+</span>
                    <span className="text-xs text-zinc-400 uppercase tracking-wider">Subscribers</span>
                  </div>
                  <span className="text-xs text-gold-400">@therealtaholic</span>
                </div>
              </div>
              <HiArrowTopRightOnSquare className="text-zinc-500 group-hover:text-gold-400 transition-colors w-4 h-4" />
            </a>

            {/* Facebook Card */}
            <a
              href="https://www.facebook.com/profile.php?id=61555243659353&mibextid=wwXIfr&mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              className="luxury-card p-4 rounded-2xl flex items-center justify-between group hover:border-gold-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white text-lg shadow-lg shadow-blue-600/20">
                  <FaFacebookF />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-white">Official Page</span>
                  </div>
                  <span className="text-xs text-gold-400">The Realtaholic</span>
                </div>
              </div>
              <HiArrowTopRightOnSquare className="text-zinc-500 group-hover:text-gold-400 transition-colors w-4 h-4" />
            </a>

            {/* Transactions Badge */}
            <div className="luxury-card p-4 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-xl font-bold text-white block">AED 1B+</span>
                <span className="text-xs text-zinc-400">Cumulative Real Estate Transactions</span>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold bg-gold-500/20 text-gold-300 border border-gold-500/40">
                Verified
              </span>
            </div>

            {/* Clients Badge */}
            <div className="luxury-card p-5 rounded-2xl flex items-center justify-between">
              <div>
                <span className="text-2xl font-bold text-white block">600+</span>
                <span className="text-xs text-zinc-400">High-Net-Worth International Clients</span>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Global
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-zinc-950 rounded-3xl border border-white/15 overflow-hidden p-2">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-gold-400 transition-colors"
            >
              <HiXMark className="w-6 h-6" />
            </button>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed?listType=user_uploads&list=therealtaholic"
                title="Gulraiz Naveed Dubai Real Estate Insights"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Azamvideo;
