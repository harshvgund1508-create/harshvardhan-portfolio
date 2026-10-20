"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, ArrowUpRight, ShieldCheck, ExternalLink } from "lucide-react";
import { SOCIAL_LINKS } from "../data/portfolioData";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

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

export function Navbar() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#030712]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
            <div className="w-full h-full bg-[#030712] rounded-[11px] flex items-center justify-center">
              <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-sm">
                HG
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 text-sm sm:text-base tracking-tight group-hover:text-cyan-400 transition-colors">
              Harshvardhan Gund
            </span>
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              AI Systems Architect
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-medium text-xs sm:text-sm text-slate-300">
          <a
            href="#systems"
            className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-all"
          >
            Systems
          </a>
          <a
            href="#monitor"
            className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-all flex items-center gap-1.5"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            Live Monitor
          </a>
          <a
            href="#architecture"
            className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-all"
          >
            Architecture
          </a>
          <a
            href="#arsenal"
            className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-all"
          >
            Technical Arsenal
          </a>
          <a
            href="#leadership"
            className="px-3.5 py-1.5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-all"
          >
            Leadership
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* LinkedIn Profile Connect Button */}
          <a
            href={SOCIAL_LINKS.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-500/40 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-white transition-all shadow-sm shadow-blue-500/20"
            title="Connect with Harshvardhan on LinkedIn"
          >
            <LinkedInIcon className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline font-sans">LinkedIn</span>
          </a>

          {/* GitHub Profile Button */}
          <a
            href={SOCIAL_LINKS.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-white/[0.1] bg-white/[0.03] text-slate-300 hover:text-white hover:border-slate-500 hover:bg-white/[0.08] transition-all"
            title="Inspect GitHub Profile & Repositories"
          >
            <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
            <span className="hidden md:inline">GitHub</span>
          </a>

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-white/[0.1] bg-white/[0.03] text-slate-300 hover:text-white hover:border-slate-500 hover:bg-white/[0.08] transition-all"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span className="hidden xl:inline">{SOCIAL_LINKS.email}</span>
                <span className="xl:hidden">Email</span>
              </>
            )}
          </button>

          {/* Connect Action */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/25 hover:opacity-90 active:scale-95 transition-all"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
