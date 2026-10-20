"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
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

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#02040b] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 text-xs">
                HG
              </div>
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Harshvardhan Gund</p>
              <p className="font-mono text-[11px] text-slate-500">
                AI Systems Engineer • Team Lead @ Team Vighnaharta
              </p>
            </div>
          </div>

          {/* Social Profiles & Quick Nav Anchors */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            <a
              href={SOCIAL_LINKS.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-blue-400 hover:text-white transition-colors"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={SOCIAL_LINKS.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">•</span>
            <a href="#systems" className="hover:text-cyan-400 transition-colors">
              Systems
            </a>
            <span className="text-slate-700">•</span>
            <a href="#monitor" className="hover:text-cyan-400 transition-colors">
              Mission Control
            </a>
            <span className="text-slate-700">•</span>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/[0.08] hover:border-slate-500 hover:text-white transition-all font-mono text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 font-mono text-[11px]">
          <p>© 2026 Harshvardhan Gund. Engineered for high-resilience environments.</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Next.js 16 • Turbopack • Live GitHub CI/CD</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
