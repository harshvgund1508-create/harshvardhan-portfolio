"use client";

import React from "react";
import { ArrowDown, Sparkles, Shield, Cpu, Activity, MapPin, Mail, Award, ExternalLink } from "lucide-react";
import { SOCIAL_LINKS } from "../data/portfolioData";

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
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

export function Hero() {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-indigo-500/15 via-cyan-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md shadow-inner text-indigo-300 text-xs sm:text-sm font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Team Lead @ Team Vighnaharta</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-300 font-mono text-[11px] sm:text-xs">Smart India Hackathon Finalist</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Architecting Resilient AI Systems That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
              Predict, Protect & Scale.
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-light">
            I am <strong className="font-semibold text-white">Harshvardhan Gund</strong>, a Full-Stack Machine Learning Engineer & Systems Architect. 
            I build anticipatory disaster intelligence models with <span className="text-cyan-300 font-medium">Copernicus 30m DEM terrain grounding</span>, 
            explainable cybersecurity threat detection engines with <span className="text-indigo-300 font-medium">38 live heuristic signals</span>, 
            and scalable GovTech infrastructure aligned with statutory state procurement laws.
          </p>

          {/* Location & Social Profile Meta Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400 pt-1">
            {/* LinkedIn Link */}
            <a
              href={SOCIAL_LINKS.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:text-white transition-all shadow-sm shadow-blue-500/20 font-sans font-medium"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>Connect on LinkedIn</span>
            </a>

            {/* GitHub Link */}
            <a
              href={SOCIAL_LINKS.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white hover:border-slate-500 transition-all font-mono"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
              <span>github/{SOCIAL_LINKS.githubUsername}</span>
            </a>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Maharashtra, India</span>
            </div>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>SIH26136 Author</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <a
              href="#systems"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Cpu className="w-4 h-4" />
              <span>Explore Flagship Systems</span>
            </a>
            <a
              href={SOCIAL_LINKS.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-blue-200 border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400 active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-sans"
            >
              <LinkedInIcon className="w-4 h-4 text-blue-400" />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          {/* Metric Badges Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-10 w-full max-w-4xl text-left">
            <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-cyan-500/40 transition-all">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
                98.0%
              </span>
              <p className="text-xs font-semibold text-slate-200 mt-1">ML Threat Accuracy</p>
              <p className="text-[11px] text-slate-500">TrustLink 38-Signal XAI Model</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-amber-500/40 transition-all">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-mono">
                ₹42L+
              </span>
              <p className="text-xs font-semibold text-slate-200 mt-1">SIH GovTech Scale</p>
              <p className="text-[11px] text-slate-500">GeM 149(viii) Procurement Pilot</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-indigo-500/40 transition-all">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-mono">
                30m DEM
              </span>
              <p className="text-xs font-semibold text-slate-200 mt-1">Spatial Ground-Truth</p>
              <p className="text-[11px] text-slate-500">Copernicus Topography & IMD</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm hover:border-emerald-500/40 transition-all">
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono">
                7+
              </span>
              <p className="text-xs font-semibold text-slate-200 mt-1">Engineered Systems</p>
              <p className="text-[11px] text-slate-500">Live Auto-Sync from GitHub</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
