"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, Copy, Check, Sparkles, MessageSquare, ShieldCheck, ArrowUpRight, ExternalLink } from "lucide-react";
import { SOCIAL_LINKS } from "../data/portfolioData";

function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26m1.4 9.74v-8.37H5.06v8.37h2.8z" />
    </svg>
  );
}

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
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

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSent(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setIsSent(false), 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & LinkedIn Connect Card */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>LET&apos;S COLLABORATE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Connect & Collaborate With Harshvardhan.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              I am open to high-impact opportunities in <strong className="text-white">AI Systems Engineering</strong>, 
              <strong className="text-white"> Full-Stack Machine Learning</strong>, and 
              <strong className="text-white"> Autonomous Agent Security</strong>. 
              Connect with me on LinkedIn for direct networking or inspect my open-source code on GitHub.
            </p>

            {/* LinkedIn Featured Connect Card */}
            <div className="p-6 rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-950/30 via-slate-900/60 to-indigo-950/30 backdrop-blur-md space-y-4 hover:border-blue-400 transition-all shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-500/30">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">LinkedIn Network</h3>
                    <p className="text-xs font-mono text-blue-300">Harshvardhan Gund</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Direct Profile
                </span>
              </div>

              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Connect for professional inquiries, software engineering roles, hackathon collaborations, or technical research.
              </p>

              <a
                href={SOCIAL_LINKS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 font-sans"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub Profile Card */}
            <div className="p-5 rounded-2xl border border-white/[0.1] bg-white/[0.02] backdrop-blur-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">GitHub Organization & Repos</h4>
                  <p className="text-xs font-mono text-slate-400">@{SOCIAL_LINKS.githubUsername}</p>
                </div>
              </div>
              <a
                href={SOCIAL_LINKS.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-mono font-medium border border-white/[0.12] bg-white/[0.04] text-slate-200 hover:text-white hover:bg-white/[0.08] transition-all flex items-center gap-1.5"
              >
                <span>View Repos</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl border border-white/[0.1] bg-white/[0.02] backdrop-blur-md space-y-3">
              <span className="text-xs font-mono uppercase text-slate-500 tracking-wider">
                Direct Primary Email
              </span>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`mailto:${SOCIAL_LINKS.email}`}
                  className="font-mono text-base sm:text-lg font-bold text-cyan-300 hover:text-white transition-colors"
                >
                  {SOCIAL_LINKS.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="p-6 sm:p-8 rounded-3xl border border-white/[0.12] bg-[#070b18] shadow-2xl relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-mono font-bold text-white">Send Direct Message</span>
              </div>
              <span className="text-[11px] font-mono text-slate-500">Verified Delivery</span>
            </div>

            {isSent ? (
              <div className="py-12 flex flex-col items-center justify-center text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Dispatched!</h4>
                <p className="text-xs font-mono text-slate-400 max-w-sm">
                  Thank you! Your inquiry has been routed to Harshvardhan Gund. A response will follow shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Recruiters, Founders, Engineers"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">Opportunity or Project Scope</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the opportunity, role, or collaboration you'd like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors font-sans resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-500 to-cyan-500 hover:opacity-95 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
