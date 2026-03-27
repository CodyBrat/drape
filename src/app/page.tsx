import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { ScrollReveal } from "@/components/sections/ScrollReveal";
import { Stats } from "@/components/sections/Stats";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <ScrollReveal />
      <Stats />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
