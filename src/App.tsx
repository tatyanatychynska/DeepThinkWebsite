import { useReveal } from "@/lib/useReveal";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { Problem } from "@/components/Problem";
import { Platform } from "@/components/Platform";
import { AskAnything } from "@/components/AskAnything";
import { Agents } from "@/components/Agents";
import { ValuePetals } from "@/components/ValuePetals";
import { WhtSpotlight } from "@/components/WhtSpotlight";
import { Governance } from "@/components/Governance";
import { Framework } from "@/components/Framework";
import { Comparison } from "@/components/Comparison";
import { Impact } from "@/components/Impact";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { DemoModal } from "@/components/DemoModal";
import { LegalModal } from "@/components/LegalModal";

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Integrations />
        <Problem />
        <Platform />
        <AskAnything />
        <Agents />
        <ValuePetals />
        <WhtSpotlight />
        <Governance />
        <Framework />
        <Comparison />
        <Impact />
        <FinalCta />
      </main>
      <Footer />
      <DemoModal />
      <LegalModal />
    </div>
  );
}
