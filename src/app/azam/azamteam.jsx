"use client";
import React from "react";
import { HiUserGroup, HiArrowUpRight } from "react-icons/hi2";
import { FaWhatsapp } from "react-icons/fa";

const teamMembers = [
  {
    name: "Sabrine Touti",
    role: "Senior Property Advisor",
    specialty: "Luxury Off-Plan & Secondary Specialist",
    image: "/assets/img/avatar/2.jpg",
    imagePosition: "object-top",
    phone: "+971507771947",
  },
  {
    name: "Waleed Khan",
    role: "Sales Manager",
    specialty: "High-Volume Portfolio & Investment Structuring",
    image: "/assets/img/avatar/5.jpg",
    imagePosition: "object-[center_15%]",
    phone: "+971507771947",
  },
  {
    name: "Doua Reina",
    role: "Creative Head",
    specialty: "Media Strategy & Luxury Brand Positioning",
    image: "/assets/img/avatar/6.jpg",
    imagePosition: "object-top",
    phone: "+971507771947",
  },
  {
    name: "Osama Khalifa",
    role: "Senior Sales Consultant",
    specialty: "Private Client Relations & Operations",
    image: "/assets/img/avatar/7.jpg",
    imagePosition: "object-top",
    phone: "+971507771947",
  },
];

const Azamteam = () => {
  return (
    <section id="team" className="py-24 relative bg-[#070709] overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute right-1/3 top-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 whitespace-nowrap">
              <HiUserGroup className="w-3.5 h-3.5 shrink-0" />
              The Advisory Collective
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Meet The Elite{" "}
              <span className="text-gold-gradient font-serif-luxury italic font-normal">
                Real Estate Advisory
              </span> Team
            </h2>
          </div>
          <p className="text-zinc-400 text-sm max-w-md font-light leading-relaxed">
            Working alongside Gulraiz Naveed at Cresco Real Estate, our dedicated 
            specialists deliver seamless, bespoke representation across Dubai's prime sectors.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="luxury-card rounded-3xl overflow-hidden group flex flex-col justify-between hover:border-gold-500/40"
            >
              <div>
                {/* Photo Frame with Centered Composition */}
                <div className="relative h-80 sm:h-[340px] w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`w-full h-full object-cover ${member.imagePosition} group-hover:scale-105 transition-transform duration-700`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent" />
                  
                  {/* Role Badge Centered on Frame */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-max max-w-[90%] text-center">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/85 backdrop-blur-md text-gold-300 border border-gold-500/30 whitespace-nowrap block text-center shadow-lg">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-gold-300 transition-colors whitespace-nowrap">
                    {member.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed min-h-[36px] flex items-center justify-center">
                    {member.specialty}
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Contact Button */}
              <div className="p-5 pt-0">
                <a
                  href={`https://wa.me/${member.phone.replace(/[^0-9]/g, "")}?text=Hello%20${encodeURIComponent(
                    member.name
                  )},%20I%20would%20like%20to%20inquire%20about%20your%20available%20Dubai%20properties.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-white/[0.03] hover:bg-gold-500 hover:text-black border border-white/10 hover:border-transparent text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <FaWhatsapp className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">Connect with {member.name.split(" ")[0]}</span>
                  <HiArrowUpRight className="w-3 h-3 shrink-0" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Azamteam;