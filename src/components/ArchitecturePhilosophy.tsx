"use client";

import React from "react";
import { ShieldCheck, Database, Cpu, Compass, CheckCircle2, AlertOctagon, Terminal } from "lucide-react";

export function ArchitecturePhilosophy() {
  return (
    <section id="architecture" className="py-20 md:py-28 relative border-t border-white/[0.08] bg-[#020612]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>ENGINEERING CREED & ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The 3-Tier Ground Truth Paradigm
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            In critical systems—whether predicting cyclonic landfall or blocking zero-day phishing—AI must never hallucinate certainty. 
            Every metric is grounded in explicit verification tiers.
          </p>
        </div>

        {/* 3 Tiers Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          
          {/* Tier 1 */}
          <div className="p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 relative overflow-hidden group hover:border-emerald-400 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Tier 01: Physical Reality
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">🟢 OBSERVED DATA</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
              Empirical ground truth measured by certified physical sensors and institutional authorities. Zero synthetic extrapolation.
            </p>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400 border-t border-emerald-500/20 pt-4">
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>IMD RSMC Official Weather Bulletins</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>AWS Rain Gauges & 30m DEM Elevation</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>RFC 1918 Private IP Hard Blocks</span>
              </li>
            </ul>
          </div>

          {/* Tier 2 */}
          <div className="p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-cyan-950/10 relative overflow-hidden group hover:border-cyan-400 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Tier 02: Analytical Physics
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">🔵 MODELLED PIPELINE</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
              Deterministic physics simulations, topological routing, and explainable ML inference with calibrated confidence metrics.
            </p>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400 border-t border-cyan-500/20 pt-4">
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Copernicus 30m Hydraulic Inundation</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Random Forest (98% Acc) & 38 Signals</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>YOLOv8 IRC:82-2023 Structural Scoring</span>
              </li>
            </ul>
          </div>

          {/* Tier 3 */}
          <div className="p-6 sm:p-8 rounded-2xl border border-amber-500/30 bg-amber-950/10 relative overflow-hidden group hover:border-amber-400 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-amber-400"></span>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                Tier 03: Decision Automation
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">🟡 ACTIONABLE OUTPUTS</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
              Synthesizing model risk into unambiguous operational directives: parametric liquidity triggers, detour routes, or procurement POs.
            </p>
            <ul className="space-y-2.5 text-xs font-mono text-slate-400 border-t border-amber-500/20 pt-4">
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Parametric Index Liquidity Directives</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>GeM Rule 149(viii) Statutory Orders</span>
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Automated NDRF & Hospital Advisories</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Philosophy Quotation Banner */}
        <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.1] bg-gradient-to-r from-indigo-950/30 via-slate-900/60 to-cyan-950/30 backdrop-blur-md flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.08] shrink-0 text-cyan-400">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <p className="text-base sm:text-lg font-medium text-slate-100">
              &quot;Never tell users a system is safe just because an external lookup returns zero threat match.&quot;
            </p>
            <p className="text-xs font-mono text-slate-400">
              — Defensive Engineering Tenet from Digital Fraud Portal & TrustLink AI
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
