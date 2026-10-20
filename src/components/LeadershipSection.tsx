"use client";

import React from "react";
import { Users, Award, Briefcase, GraduationCap, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function LeadershipSection() {
  const experiences = [
    {
      role: "Team Lead & Lead AI Architect",
      organization: "Team Vighnaharta",
      period: "2023 — Present",
      location: "Maharashtra, India",
      description:
        "Directing technical architecture, model design, and delivery for critical competitive and research engineering challenges. Spearheaded MirrorGate AI, establishing deterministic tool-call guardrails for autonomous agents with 100% interception of adversarial vectors.",
      highlights: [
        "Led cross-functional team in developing context-aware agentic runtime security layers",
        "Authored comprehensive research slide decks, QC reports, and reproducible benchmark suites",
        "Architected SQLite SHA-256 immutable audit logging pipelines",
      ],
      tag: "Lead Architect",
    },
    {
      role: "Prototype Lead & GovTech Systems Designer",
      organization: "Smart India Hackathon (Problem: SIH26136)",
      period: "2024",
      location: "National Initiative",
      description:
        "Engineered 'MahaInnovate'—a startup-friendly public procurement prototype enabling Maharashtra Government departments to discover, pilot, and scale startup innovations under GeM Rule 149(viii).",
      highlights: [
        "Modeled end-to-end 8-stage innovation procurement workflow compliant with statutory state finance rules",
        "Built simulated live IoT telemetry hub tracking 4 municipal efficiency KPIs",
        "Designed algorithmic multi-district scaling model calculating municipal cost savings (₹6.8 Cr projected)",
      ],
      tag: "GovTech Finalist",
    },
    {
      role: "Computer Vision & Infrastructure Capstone Lead",
      organization: "Highway & Transportation Engineering AI",
      period: "2023 — 2024",
      location: "Academic Capstone",
      description:
        "Developed RoadGuard AI, a Level-1 decision support tool combining Ultralytics YOLOv8 and classical CV heuristics for automated road distress categorization aligned with Indian Roads Congress (IRC:82-2023) standards.",
      highlights: [
        "Trained models on RDD2022 dataset for longitudinal, transverse, alligator cracks, and potholes",
        "Designed transparent 0–100 Priority Distress Score based on pavement structure and traffic loads",
        "Built georeferenced SQLite GIS distress cluster engine and automated PDF report generator",
      ],
      tag: "Civil AI Research",
    },
  ];

  return (
    <section id="leadership" className="py-20 md:py-28 relative border-t border-white/[0.08] bg-[#02050f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>LEADERSHIP & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Impact, Team Leadership & Honors
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Guiding high-performance teams to design, benchmark, and defend mission-critical AI systems.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md hover:border-indigo-500/40 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/[0.06] mb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                    {exp.organization}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                    {exp.period}
                  </span>
                  <span className="text-xs font-mono text-amber-300 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30">
                    {exp.tag}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light mb-4">
                {exp.description}
              </p>

              <div className="space-y-2">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
