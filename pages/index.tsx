"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@app/components/header";
import Hero from "@app/components/hero"
import WhatWeDo from "@app/components/what-we-do";
import WorkWithUs from "@app/components/work-with-us";
import TalkToNutritionist from "@app/components/talk-to-nutritionist"
import CTA from "@app/components/cta"
import Footer from "@app/components/footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    //where all the individual components will live
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    // </main>
    <div className="bg-primaryBeige min-h-screen">
    <div className="px-4 lg:px-8 w-full">
        <Header />
      </div>
      <div className=" h-7 bg-[#EEC438]" />
      <Hero />
    <div className="px-4 lg:px-8">
      <WhatWeDo />
    </div>
      <WorkWithUs />
      <TalkToNutritionist />
      <CTA />
      <Footer />
  </div>
    
  );
}
