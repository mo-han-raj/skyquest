'use client'

import About from "@/components/About";
import { FeaturesSection } from "@/components/blocks/features-section-demo-1";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";



export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <FeaturesSection />
      <Cta />
    </main>
  );
}
