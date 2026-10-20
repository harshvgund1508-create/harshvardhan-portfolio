"use client";

import React from "react";
import { SKILL_CATEGORIES } from "../data/portfolioData";
import { Brain, Code2, Globe, Shield, Terminal, CheckCircle } from "lucide-react";

export function SkillsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Brain":
        return <Brain className="w-5 h-5 text-indigo-400" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-amber-400" />;
      default:
        return <Terminal className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <section id="arsenal" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono mb-4">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>CORE COMPETENCIES & TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Battle-tested frameworks, machine learning runtimes, and engineering patterns used across production prototypes.
          </p>
        </div>

        {/* 4 Category Arsenal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md hover:border-white/[0.18] transition-all group"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
                <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {category.name}
                </h3>
              </div>

              {/* Skills Tags Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{skill}</span>
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
