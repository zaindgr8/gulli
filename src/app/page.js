"use client";
import React from "react";
import Layout from "@/components/Layout";
import FirstSection from "./azam/firstsection";
import Azamvision from "./azam/azamvision";
import AzamPrivateCollection from "./azam/azamprivatecollection";
import Azamprojects from "./azam/azamprojects";
import Azamvideo from "./azam/azamvideo";
import Azamteam from "./azam/azamteam";
import Azammessage from "./azam/azammessage";

export default function Home() {
  return (
    <Layout>
      <main className="bg-[#070709] text-white">
        {/* 1. Cinematic Hero Section with Key Metrics */}
        <FirstSection />

        {/* 2. Authority & Biography of Gulraiz Naveed */}
        <Azamvision />

        {/* 3. Curated Prime Property Collections with Currency Switcher */}
        <AzamPrivateCollection />

        {/* 4. Tier-1 Master Developer Collaborations */}
        <Azamprojects />

        {/* 5. Video Tours & Social Media Authority */}
        <Azamvideo />

        {/* 6. Elite Advisory Collective */}
        <Azamteam />

        {/* 7. VIP Private Client Consultation Booking */}
        <Azammessage />
      </main>
    </Layout>
  );
}
