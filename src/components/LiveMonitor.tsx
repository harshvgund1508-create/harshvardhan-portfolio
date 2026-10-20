"use client";

import React, { useState } from "react";
import { Terminal, Play, RefreshCw, Cpu, CheckCircle2, AlertTriangle, ShieldCheck, Radio } from "lucide-react";
import { SIMULATED_SYSTEM_LOGS } from "../data/portfolioData";

type SystemKey = "cycloneshield" | "trustlink" | "mahainnovate" | "mirrorgate";

const SYSTEM_CONFIG = {
  cycloneshield: {
    title: "CycloneShield AI Spatial Engine",
    subtitle: "Bay of Bengal Track Ingestion • Copernicus 30m DEM Hydrodynamic Grid",
    status: "SIMULATING RECONSTRUCTION",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    metrics: [
      { label: "Target Landfall", value: "Bapatla, AP" },
      { label: "Sustained Winds", value: "90–100 km/h" },
      { label: "Peak Rainfall", value: "390 mm" },
      { label: "Inundation Threat", value: "HIGH (1.25m surge)" },
    ],
  },
  trustlink: {
    title: "TrustLink AI 38-Signal Inspector",
    subtitle: "Real-Time URL/Email Feature Extractor • RF Classification (98% Acc)",
    status: "INSPECTING THREAT STREAM",
    badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    metrics: [
      { label: "Classifier Model", value: "Random Forest" },
      { label: "Inference Latency", value: "18.4 ms" },
      { label: "Risk Verdict", value: "BLOCK (Score: 98/100)" },
      { label: "Primary Vector", value: "Unicode Homoglyph" },
    ],
  },
  mahainnovate: {
    title: "MahaInnovate SIH26136 Telemetry Hub",
    subtitle: "GovTech Public Procurement Pipeline • GeM Rule 149(viii) Pilot Tracker",
    status: "PILOT TELEMETRY ACTIVE",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    metrics: [
      { label: "Active Pilot", value: "Pune MC Ward 4 & 7" },
      { label: "Collection Eff.", value: "+31.5%" },
      { label: "Fuel Reduction", value: "-18.2%" },
      { label: "Contract State", value: "READY FOR PO (₹42L)" },
    ],
  },
  mirrorgate: {
    title: "MirrorGate AI Agent Policy Proxy",
    subtitle: "Contextual Tool-Call Inspection • Zero-Trust Deterministic Rules",
    status: "ENFORCING RUNTIME GATE",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    metrics: [
      { label: "Attacks Handled", value: "12 / 12 (100%)" },
      { label: "Prompt Bypass", value: "IMPOSSIBLE (Deterministic)" },
      { label: "Intercept Verdict", value: "CALL_BLOCKED" },
      { label: "Ledger", value: "SQLite SHA-256" },
    ],
  },
};

export function LiveMonitor() {
  const [activeSystem, setActiveSystem] = useState<SystemKey>("cycloneshield");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 600);
  };

  const currentConfig = SYSTEM_CONFIG[activeSystem];
  const logs = SIMULATED_SYSTEM_LOGS[activeSystem];

  return (
    <section id="monitor" className="py-16 md:py-24 relative border-t border-b border-white/[0.08] bg-[#02050e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-mono mb-3">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>LIVE SYSTEM TELEMETRY & RUNTIME LOGS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interactive Mission Control
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Inspect verified execution traces from my deployed prototypes: from IMD cyclone hydrodynamics to 
              zero-trust agent tool interception.
            </p>
          </div>

          {/* System Selection Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
            {(Object.keys(SYSTEM_CONFIG) as SystemKey[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSystem(key)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  activeSystem === key
                    ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                {key.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Live Terminal & Telemetry Card */}
        <div className="rounded-2xl border border-white/[0.12] bg-[#060a16] shadow-2xl overflow-hidden">
          
          {/* Terminal Window Header Bar */}
          <div className="px-4 py-3 border-b border-white/[0.08] bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
              <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>telemetry://{activeSystem}.runtime.internal</span>
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${currentConfig.badgeColor}`}>
                {currentConfig.status}
              </span>

              <button
                onClick={handleRefresh}
                className="p-1.5 rounded-md hover:bg-white/[0.06] text-slate-400 hover:text-white transition-all"
                title="Refresh Telemetry Feed"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin text-cyan-400" : ""}`} />
              </button>
            </div>
          </div>

          {/* Telemetry Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-b border-white/[0.08] bg-white/[0.01]">
            {currentConfig.metrics.map((m, idx) => (
              <div key={idx} className="p-4 sm:p-5 flex flex-col justify-center">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-1">
                  {m.label}
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-100 font-mono">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Log Stream Output */}
          <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm space-y-3 bg-[#030712] min-h-[220px]">
            <div className="text-slate-500 pb-2 border-b border-white/[0.05] flex items-center justify-between text-[11px]">
              <span>[KERNEL] Initialized runtime monitor context for {currentConfig.title}</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE FEED (24ms)
              </span>
            </div>

            {logs.map((log, index) => (
              <div key={index} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 group hover:bg-white/[0.02] p-1 rounded transition-colors">
                <span className="text-slate-500 text-[11px] select-none">
                  [{log.time}]
                </span>
                <span className="px-1.5 py-0.2 rounded bg-indigo-500/10 border border-indigo-500/20 text-cyan-400 text-[11px] font-semibold w-fit">
                  {log.level}
                </span>
                <span className="text-slate-300 group-hover:text-white transition-colors">
                  {log.msg}
                </span>
              </div>
            ))}

            <div className="pt-2 text-cyan-400 flex items-center gap-1.5 animate-pulse">
              <span>❯</span>
              <span className="inline-block w-2.5 h-4 bg-cyan-400"></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
