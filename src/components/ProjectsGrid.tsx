"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_PROJECTS, Project, SOCIAL_LINKS } from "../data/portfolioData";
import { 
  Cpu, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  X, 
  CheckCircle2, 
  Info,
  ChevronRight,
  Sparkles,
  RefreshCw,
  GitBranch,
  Star,
  Radio,
  ArrowUpRight
} from "lucide-react";

// Inline GitHub SVG
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function ProjectsGrid() {
  const [projects, setProjects] = useState<Project[]>(PORTFOLIO_PROJECTS);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSyncTime, setLastSyncTime] = useState<string>("Cached local baseline");
  const [syncCount, setSyncCount] = useState<number>(PORTFOLIO_PROJECTS.length);

  const fetchLiveGithubProjects = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch("/api/github", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        if (data.projects && Array.isArray(data.projects)) {
          setProjects(data.projects);
          setSyncCount(data.projects.length);
          const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
          setLastSyncTime(`Live Synced at ${time}`);
        }
      }
    } catch (e) {
      console.warn("GitHub sync check notice:", e);
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    fetchLiveGithubProjects();
  }, []);

  const categories = [
    { id: "all", label: `All Systems (${projects.length})` },
    { id: "geospatial", label: "Disaster & Spatial AI" },
    { id: "security", label: "Cybersecurity & Trust" },
    { id: "civic", label: "GovTech & Civic" },
    { id: "vision", label: "Vision & Speech AI" },
    { id: "agentic", label: "Agentic Safety" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="systems" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5 text-indigo-400" />
            <span>DYNAMIC GITHUB SYNC & PRODUCTION SYSTEMS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Flagship Engineering Systems
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Real software platforms engineered with explainable ML, mathematical ground truth, and live GitHub CI/CD synchronization.
          </p>

          {/* GitHub Live Sync Status Card */}
          <div className="w-full max-w-xl mt-6 p-3 rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 via-slate-900/40 to-indigo-950/20 backdrop-blur-md flex items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-cyan-400">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-200">
                    GitHub Real-Time Sync: <span className="font-mono text-cyan-400">@{SOCIAL_LINKS.githubUsername}</span>
                  </span>
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                </div>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                  When you push new repos, this portfolio auto-updates • {lastSyncTime}
                </p>
              </div>
            </div>

            <button
              onClick={fetchLiveGithubProjects}
              disabled={isSyncing}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono font-medium transition-all shrink-0 active:scale-95 disabled:opacity-50"
              title="Poll GitHub API to synchronize any newly created repositories"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? "animate-spin text-cyan-400" : ""}`} />
              <span>{isSyncing ? "Syncing..." : "Sync GitHub"}</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === c.id
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg shadow-indigo-500/25"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-white/[0.01] hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all duration-300 shadow-xl overflow-hidden hover:-translate-y-1"
            >
              <div className="p-6 sm:p-7 space-y-5">
                
                {/* Badges Bar */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-white/[0.1] bg-white/[0.03] text-cyan-300 font-semibold tracking-wide uppercase">
                    {project.trustTier}
                  </span>
                  
                  {project.stars !== undefined && project.stars > 0 && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                      <Star className="w-3 h-3 fill-amber-400" />
                      {project.stars}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-indigo-400 mt-1 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-light line-clamp-3">
                  {project.description}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <span className="text-[10px] font-mono text-slate-500 uppercase block">
                        {m.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold font-mono text-slate-200">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-slate-500">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-white/[0.01] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-slate-500 hover:bg-white/[0.08] transition-all"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-xs font-mono font-medium transition-all"
                      title="Open Live Demonstration"
                    >
                      <span>Live App</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-white group-hover:translate-x-0.5 transition-all"
                >
                  <span>Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive System Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/[0.15] bg-[#080d1e] p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                    {activeModalProject.trustTier}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {activeModalProject.categoryLabel}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm font-mono text-indigo-400 mt-0.5">
                  {activeModalProject.tagline}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-400 hover:text-white hover:bg-white/[0.1] transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Link Buttons in Modal */}
            <div className="flex flex-wrap items-center gap-3">
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white hover:bg-white/[0.1] text-xs font-mono transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Code on GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              )}
              {activeModalProject.liveDemoUrl && (
                <a
                  href={activeModalProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-mono font-semibold transition-all hover:opacity-90"
                >
                  <span>Launch Live Prototype</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {activeModalProject.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-slate-500 uppercase block">
                    {m.label}
                  </span>
                  <span className="text-base font-bold font-mono text-cyan-300">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Problem Statement */}
            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20">
              <h4 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" />
                Problem Statement & Critical Gap
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {activeModalProject.problemStatement}
              </p>
            </div>

            {/* Key Engineering Innovations */}
            <div>
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Key Engineering Breakthroughs
              </h4>
              <div className="space-y-2">
                {activeModalProject.keyInnovations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 font-light">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h4 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Subsystem Architecture Pipeline
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalProject.architectureHighlights.map((arch, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-300 flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">0{idx + 1}.</span>
                    <span>{arch}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Complete Tech Stack */}
            <div>
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
                Technologies & Tools Employed
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-slate-200 border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <div className="pt-4 border-t border-white/[0.08] flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-6 py-2.5 rounded-xl font-medium text-xs font-mono bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.1] transition-all"
              >
                Close Deep Dive
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
