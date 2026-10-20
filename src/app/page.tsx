import React from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { LiveMonitor } from "../components/LiveMonitor";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { ArchitecturePhilosophy } from "../components/ArchitecturePhilosophy";
import { SkillsSection } from "../components/SkillsSection";
import { LeadershipSection } from "../components/LeadershipSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col relative selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Global Background Grid & Vignette */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-vignette opacity-80 pointer-events-none z-0" />

      {/* Main Content Flow */}
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <LiveMonitor />
          <ProjectsGrid />
          <ArchitecturePhilosophy />
          <SkillsSection />
          <LeadershipSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
