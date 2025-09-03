"use client";

import TimelineDemo from "@/components/TimelineDemo";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import About from "@/components/About";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TimelineDemo />
      <Marquee />
      <About />
    </main>
  );
}
