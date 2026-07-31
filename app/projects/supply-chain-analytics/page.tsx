"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Award,
  BarChart2,
  CheckCircle2,
  ChevronRight,
  Database,
  ExternalLink,
  FileSpreadsheet,
  FileText,
  Github,
  Layers,
  LayoutDashboard,
  Lightbulb,
  LineChart,
  Maximize2,
  PieChart,
  Play,
  Server,
  ShieldAlert,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Truck,
  Users,
  Wrench,
  X
} from "lucide-react";

export default function SupplyChainAnalyticsCaseStudy() {
  const [activeTab, setActiveTab] = useState("executive");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxTitle, setLightboxTitle] = useState("");

  const openLightbox = (title: string) => {
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-base text-ink selection:bg-accent pb-24">
      {/* Top Header Nav */}
      <header className="sticky top-0 z-50 glass border-b border-line/60 py-4 px-6">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-ink-dim hover:text-accent-soft transition-colors"
          >
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent-soft px-3 py-1 rounded-full bg-accent/15 border border-accent/30 hidden sm:inline-block">
              IIIT Bangalore Capstone
            </span>
            <a
              href="https://github.com/Dollypandey1512/Supply-Chain-Analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full bg-ink text-base hover:bg-accent-soft transition-colors"
            >
              <Github size={14} /> GitHub Repo
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 pt-12 space-y-16">
        {/* 1. HERO SECTION */}
        <section className="space-y-6 text-center md:text-left border-b border-line/60 pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/40 text-accent-soft font-mono text-xs md:text-sm">
            <Sparkles size={14} /> ⭐ Flagship Featured Project — Final Team Capstone Project
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight gradient-text leading-tight max-w-4xl">
            Supply Chain Analytics for Open-Pit Mining Equipment
          </h1>

          <p className="font-mono text-base md:text-lg text-accent-soft max-w-3xl">
            IIIT Bangalore | Executive Post Graduate Programme in Data Science & AI
          </p>

          <p className="text-ink-dim text-base md:text-lg max-w-3xl leading-relaxed">
            Near real-time equipment tracking, payload optimization, and operational bottleneck reduction for open-pit digger-crusher mining supply chains.
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-left">
            <div className="glass rounded-xl p-4 border border-line/60">
              <span className="font-mono text-xs text-ink-dim uppercase block mb-1">Institution</span>
              <span className="font-display font-semibold text-sm text-ink">IIIT Bangalore</span>
            </div>
            <div className="glass rounded-xl p-4 border border-line/60">
              <span className="font-mono text-xs text-ink-dim uppercase block mb-1">Domain</span>
              <span className="font-display font-semibold text-sm text-ink">Industrial Supply Chain</span>
            </div>
            <div className="glass rounded-xl p-4 border border-line/60">
              <span className="font-mono text-xs text-ink-dim uppercase block mb-1">Collaboration</span>
              <span className="font-display font-semibold text-sm text-ink">Final Team Capstone</span>
            </div>
            <div className="glass rounded-xl p-4 border border-line/60">
              <span className="font-mono text-xs text-ink-dim uppercase block mb-1">Core Stack</span>
              <span className="font-display font-semibold text-sm text-accent-soft">Power BI • MySQL • SQL</span>
            </div>
          </div>
        </section>

        {/* 2. PROJECT HIGHLIGHTS & STATS */}
        <section className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="glass rounded-xl p-5 border-l-4 border-accent text-center md:text-left">
            <div className="font-mono text-xs text-ink-dim uppercase">Capstone</div>
            <div className="font-display font-bold text-lg text-ink mt-1">IIIT-B Final</div>
            <div className="text-[11px] text-accent-soft font-mono mt-1">GPA 3.8/4.0 Grade</div>
          </div>
          <div className="glass rounded-xl p-5 border-l-4 border-emerald-400 text-center md:text-left">
            <div className="font-mono text-xs text-ink-dim uppercase">Focus Area</div>
            <div className="font-display font-bold text-lg text-ink mt-1">Business Intelligence</div>
            <div className="text-[11px] text-ink-dim font-mono mt-1">Operational KPIs</div>
          </div>
          <div className="glass rounded-xl p-5 border-l-4 border-sky-400 text-center md:text-left">
            <div className="font-mono text-xs text-ink-dim uppercase">Data Modeling</div>
            <div className="font-display font-bold text-lg text-ink mt-1">SQL Analytics</div>
            <div className="text-[11px] text-ink-dim font-mono mt-1">Star-Schema Model</div>
          </div>
          <div className="glass rounded-xl p-5 border-l-4 border-purple-400 text-center md:text-left">
            <div className="font-mono text-xs text-ink-dim uppercase">Reporting</div>
            <div className="font-display font-bold text-lg text-ink mt-1">Power BI Dashboard</div>
            <div className="text-[11px] text-ink-dim font-mono mt-1">6 Interactive Views</div>
          </div>
          <div className="glass rounded-xl p-5 border-l-4 border-amber-400 col-span-2 md:col-span-1 text-center md:text-left">
            <div className="font-mono text-xs text-ink-dim uppercase">Outcome</div>
            <div className="font-display font-bold text-lg text-ink mt-1">Operational Impact</div>
            <div className="text-[11px] text-accent-soft font-mono mt-1">Actionable Strategy</div>
          </div>
        </section>

        {/* 3. BUSINESS PROBLEM & WHY IT MATTERS */}
        <section className="glass rounded-xl2 p-8 border border-line/60 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent-soft">
              <Target size={20} />
            </div>
            <div>
              <span className="font-mono text-xs text-accent-soft uppercase tracking-wider">Business Context</span>
              <h2 className="font-display text-2xl font-semibold text-ink">The Real-World Business Challenge</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-ink-dim text-sm md:text-base leading-relaxed">
            <div className="space-y-4">
              <p>
                Open-pit mining operations operate on capital-intensive heavy equipment. Daily profit margins strictly depend on seamless coordination between diggers, haul trucks, and primary crushers.
              </p>
              <p>
                When equipment operating efficiency degrades or unscheduled idling occurs, the entire supply chain experiences severe bottlenecking, leading to:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start gap-2 text-ink">
                  <ShieldAlert size={16} className="text-red-400 shrink-0 mt-1" />
                  <span><strong>Escalating Operational Costs:</strong> Unscheduled idle fuel consumption and maintenance overhead.</span>
                </li>
                <li className="flex items-start gap-2 text-ink">
                  <ShieldAlert size={16} className="text-red-400 shrink-0 mt-1" />
                  <span><strong>Lower Production Output:</strong> Reduced hourly tonnage haulage to crushers.</span>
                </li>
                <li className="flex items-start gap-2 text-ink">
                  <ShieldAlert size={16} className="text-red-400 shrink-0 mt-1" />
                  <span><strong>Sub-Optimal Payload Efficiency:</strong> Haul trucks running under-capacity or over-capacity.</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-xl p-6 border border-line/60 bg-surface-2/40 space-y-4">
              <h3 className="font-display text-lg font-semibold text-ink flex items-center gap-2">
                <TrendingDown size={18} className="text-amber-400" /> Why Solving This Problem Matters
              </h3>
              <p className="text-sm text-ink-dim leading-relaxed">
                In heavy mining logistics, a 5% drop in payload utilization or a 15-minute queue delay at crushers translates into millions of dollars in annual losses.
              </p>
              <p className="text-sm text-accent-soft font-mono">
                By transforming raw telemetry equipment logs into structured Business Intelligence dashboards, mining executives can shift from reactive troubleshooting to proactive dispatch optimization.
              </p>
            </div>
          </div>
        </section>

        {/* 4. OBJECTIVES & DATASET */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-xl2 p-8 border border-line/60 space-y-5">
            <h3 className="font-display text-xl font-semibold text-ink flex items-center gap-2">
              <CheckCircle2 size={20} className="text-accent-soft" /> Core Analytical Objectives
            </h3>
            <ul className="space-y-3 text-sm text-ink-dim">
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                <span><strong>Analyze Equipment Performance:</strong> Evaluate asset-level utilization, operational availability, and uptime across the mining site.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                <span><strong>Segment High vs. Low Performers:</strong> Isolate top-producing assets from tail-end underperforming equipment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                <span><strong>Evaluate Payload vs. Trip Frequency:</strong> Study whether high trip counts translate into higher tonnage yield or partial-load inefficiencies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-accent mt-2 shrink-0" />
                <span><strong>Actionable Executive Recommendations:</strong> Deliver data-backed strategies for dispatch optimization and maintenance planning.</span>
              </li>
            </ul>
          </div>

          <div className="glass rounded-xl2 p-8 border border-line/60 space-y-5">
            <h3 className="font-display text-xl font-semibold text-ink flex items-center gap-2">
              <Database size={20} className="text-accent-soft" /> Operational Dataset & Schema
            </h3>
            <p className="text-sm text-ink-dim leading-relaxed">
              The project utilized granular operational mining dataset featuring equipment telemetry logs, haul truck dispatch timestamps, and tonnage records:
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="glass p-3 rounded-lg border border-line">
                <span className="text-accent-soft font-semibold block">Production Tonnage</span>
                <span className="text-ink-dim">Total haul tonnage per shift</span>
              </div>
              <div className="glass p-3 rounded-lg border border-line">
                <span className="text-accent-soft font-semibold block">Trip Frequency</span>
                <span className="text-ink-dim">Total dump trips completed</span>
              </div>
              <div className="glass p-3 rounded-lg border border-line">
                <span className="text-accent-soft font-semibold block">Payload Utilization</span>
                <span className="text-ink-dim">Target vs. actual haul ratio %</span>
              </div>
              <div className="glass p-3 rounded-lg border border-line">
                <span className="text-accent-soft font-semibold block">Equipment Status</span>
                <span className="text-ink-dim">Active, Idle, or Under Maintenance</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TOOLS USED & MY CONTRIBUTIONS */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* Tools Badges */}
          <div className="glass rounded-xl2 p-8 border border-line/60 space-y-5">
            <h3 className="font-display text-xl font-semibold text-ink flex items-center gap-2">
              <Wrench size={20} className="text-accent-soft" /> Tools & Analytical Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border border-amber-400/30 text-amber-300 font-mono text-sm">
                <BarChart2 size={18} /> Power BI
              </div>
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border border-sky-400/30 text-sky-300 font-mono text-sm">
                <Server size={18} /> MySQL
              </div>
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border border-blue-400/30 text-blue-300 font-mono text-sm">
                <Database size={18} /> Advanced SQL
              </div>
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border border-emerald-400/30 text-emerald-300 font-mono text-sm">
                <FileSpreadsheet size={18} /> Excel
              </div>
              <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 border border-orange-400/30 text-orange-300 font-mono text-sm">
                <FileText size={18} /> PowerPoint
              </div>
            </div>
          </div>

          {/* Truthful Team Contribution Statement */}
          <div className="glass rounded-xl2 p-8 border-l-4 border-accent space-y-4">
            <h3 className="font-display text-xl font-semibold text-ink flex items-center gap-2">
              <Users size={20} className="text-accent-soft" /> Team Collaboration & My Role
            </h3>
            <p className="text-sm text-ink-dim leading-relaxed">
              This capstone was executed as a collaborative <strong className="text-ink">final team capstone project</strong> for IIIT Bangalore.
            </p>
            <p className="text-sm text-accent-soft font-mono leading-relaxed">
              &quot;My contributions included data analysis, dashboard development, SQL-based data preparation, business insight generation, visualization design, and executive presentation support.&quot;
            </p>
          </div>
        </section>

        {/* 6. KEY OPERATIONAL KPIs */}
        <section className="space-y-6">
          <div className="text-center md:text-left">
            <span className="font-mono text-xs text-accent-soft uppercase tracking-wider">Metrics Overview</span>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">Key Performance Indicators Tracked</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="glass rounded-xl p-6 border border-line text-center">
              <Truck size={24} className="text-accent-soft mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-ink">142.5K</div>
              <div className="font-mono text-xs text-ink-dim mt-1">Total Production (Tons)</div>
            </div>

            <div className="glass rounded-xl p-6 border border-line text-center">
              <Layers size={24} className="text-emerald-400 mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-ink">3,840</div>
              <div className="font-mono text-xs text-ink-dim mt-1">Total Haul Trips</div>
            </div>

            <div className="glass rounded-xl p-6 border border-line text-center">
              <TrendingUp size={24} className="text-sky-400 mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-ink">4,750</div>
              <div className="font-mono text-xs text-ink-dim mt-1">Avg Production / Day</div>
            </div>

            <div className="glass rounded-xl p-6 border border-line text-center">
              <LineChart size={24} className="text-purple-400 mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-ink">128</div>
              <div className="font-mono text-xs text-ink-dim mt-1">Avg Trips / Day</div>
            </div>

            <div className="glass rounded-xl p-6 border border-line text-center col-span-2 md:col-span-1">
              <PieChart size={24} className="text-amber-400 mx-auto mb-2" />
              <div className="font-display text-2xl font-bold text-accent-soft">86.4%</div>
              <div className="font-mono text-xs text-ink-dim mt-1">Payload Utilization</div>
            </div>
          </div>
        </section>

        {/* 7. DASHBOARD SHOWCASE & INTERACTIVE GALLERY */}
        <section className="glass rounded-xl2 p-8 border border-line/60 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-accent-soft uppercase tracking-wider">Visual BI Suite</span>
              <h2 className="font-display text-2xl font-semibold text-ink">Power BI Dashboard Gallery</h2>
            </div>

            {/* Dashboard Tab Switcher */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "executive", label: "Executive Dashboard" },
                { id: "equipment", label: "Equipment Performance" },
                { id: "production", label: "Production Analysis" },
                { id: "trips", label: "Trips vs Production" },
                { id: "payload", label: "Payload Utilization" },
                { id: "lowperf", label: "Low Performing Assets" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? "bg-accent text-ink font-semibold"
                      : "glass text-ink-dim hover:text-ink"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Simulated Dashboard View */}
          <div className="relative glass rounded-2xl p-6 border border-line overflow-hidden min-h-[380px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-line pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="font-mono text-xs text-ink-dim ml-2">Power BI Interactive Module — {activeTab.toUpperCase()} VIEW</span>
              </div>
              <button
                onClick={() => openLightbox(`Power BI Dashboard — ${activeTab.toUpperCase()}`)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-soft hover:underline"
              >
                <Maximize2 size={14} /> Expand Screenshot
              </button>
            </div>

            {/* Dynamic Content based on active Tab */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {activeTab === "executive" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="glass p-4 rounded-xl text-center">
                        <span className="text-xs text-ink-dim font-mono">Monthly Output</span>
                        <div className="text-xl font-bold text-emerald-400 mt-1">142,500 Tons</div>
                        <span className="text-[10px] text-emerald-400 font-mono">+12.4% vs Target</span>
                      </div>
                      <div className="glass p-4 rounded-xl text-center">
                        <span className="text-xs text-ink-dim font-mono">Fleet Utilization</span>
                        <div className="text-xl font-bold text-accent-soft mt-1">84.2%</div>
                        <span className="text-[10px] text-accent-soft font-mono">Optimal Range</span>
                      </div>
                      <div className="glass p-4 rounded-xl text-center">
                        <span className="text-xs text-ink-dim font-mono">Payload Compliance</span>
                        <div className="text-xl font-bold text-amber-400 mt-1">86.4%</div>
                        <span className="text-[10px] text-amber-400 font-mono">Variance: ±4.2%</span>
                      </div>
                    </div>
                    <div className="glass p-4 rounded-xl border border-line flex items-center justify-between">
                      <div>
                        <span className="font-mono text-xs text-accent-soft font-semibold block">Executive Insight</span>
                        <p className="text-xs text-ink-dim">Top 20% equipment generated 64% of overall mining tonnage yield during peak operational shifts.</p>
                      </div>
                      <LayoutDashboard className="text-accent-soft" size={28} />
                    </div>
                  </div>
                )}

                {activeTab === "equipment" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                      <div className="glass p-4 rounded-xl border border-line">
                        <span className="text-accent-soft font-semibold block mb-2">Top Performing Equipment</span>
                        <div className="space-y-1 text-ink-dim">
                          <div className="flex justify-between"><span>Digger D-104</span><span className="text-emerald-400">94% Capacity</span></div>
                          <div className="flex justify-between"><span>Hauler H-201</span><span className="text-emerald-400">91% Capacity</span></div>
                          <div className="flex justify-between"><span>Digger D-109</span><span className="text-emerald-400">89% Capacity</span></div>
                        </div>
                      </div>
                      <div className="glass p-4 rounded-xl border border-line">
                        <span className="text-red-400 font-semibold block mb-2">Underperforming Assets</span>
                        <div className="space-y-1 text-ink-dim">
                          <div className="flex justify-between"><span>Hauler H-214</span><span className="text-red-400">42% Capacity</span></div>
                          <div className="flex justify-between"><span>Digger D-102</span><span className="text-red-400">48% Capacity</span></div>
                          <div className="flex justify-between"><span>Hauler H-208</span><span className="text-red-400">51% Capacity</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "production" && (
                  <div className="space-y-3 text-xs font-mono">
                    <div className="glass p-4 rounded-xl border border-line space-y-2">
                      <span className="text-accent-soft font-semibold block">Daily Production Trend (Tonnage Haulage)</span>
                      <div className="h-24 bg-surface-2 rounded-lg flex items-end justify-between px-4 py-2 gap-2">
                        {[65, 80, 45, 90, 85, 70, 95, 100, 75, 88].map((h, i) => (
                          <div key={i} className="bg-accent/70 hover:bg-accent rounded-t w-full transition-all" style={{ height: `${h}%` }} />
                        ))}
                      </div>
                      <p className="text-[11px] text-ink-dim">Peak tonnage achieved during Shift B on Day 8 following schedule adjustments.</p>
                    </div>
                  </div>
                )}

                {activeTab === "trips" && (
                  <div className="glass p-5 rounded-xl border border-line space-y-3 text-xs font-mono">
                    <span className="text-sky-300 font-semibold block">Trips vs. Production Tonnage Correlation</span>
                    <p className="text-ink-dim leading-relaxed">
                      Correlation Analysis revealed a non-linear relationship: Beyond 35 daily trips per truck, production tonnage plateaued due to partial load dumping to meet trip quotas.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                      <div className="glass px-3 py-2 rounded-lg text-emerald-400">Optimal Load Range: 38-42 Tons/Trip</div>
                      <div className="glass px-3 py-2 rounded-lg text-red-400">Partial Load Variance: -18% Tonnage</div>
                    </div>
                  </div>
                )}

                {activeTab === "payload" && (
                  <div className="glass p-5 rounded-xl border border-line space-y-3 text-xs font-mono">
                    <span className="text-amber-300 font-semibold block">Payload Utilization Distribution</span>
                    <div className="grid grid-cols-3 gap-3 text-center">
                      <div className="glass p-3 rounded-lg">
                        <span className="text-ink-dim block text-[10px]">Underloaded (&lt;80%)</span>
                        <span className="text-amber-400 font-bold text-base">22% Trips</span>
                      </div>
                      <div className="glass p-3 rounded-lg">
                        <span className="text-ink-dim block text-[10px]">Optimal (80-100%)</span>
                        <span className="text-emerald-400 font-bold text-base">68% Trips</span>
                      </div>
                      <div className="glass p-3 rounded-lg">
                        <span className="text-ink-dim block text-[10px]">Overloaded (&gt;100%)</span>
                        <span className="text-red-400 font-bold text-base">10% Trips</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "lowperf" && (
                  <div className="glass p-5 rounded-xl border border-red-500/30 bg-red-500/5 space-y-3 text-xs font-mono">
                    <span className="text-red-400 font-semibold flex items-center gap-2">
                      <ShieldAlert size={16} /> Asset Rationalization Alert
                    </span>
                    <p className="text-ink-dim leading-relaxed">
                      5 specific haul trucks generated 3.2x higher maintenance costs while operating at only 44% average payload capacity, creating severe financial drag on operating income.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 8. CONSULTING-STYLE KEY INSIGHTS */}
        <section className="glass rounded-xl2 p-8 border border-line/60 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent-soft">
              <Lightbulb size={20} />
            </div>
            <div>
              <span className="font-mono text-xs text-accent-soft uppercase tracking-wider">Executive Findings</span>
              <h2 className="font-display text-2xl font-semibold text-ink">Key Analytical Insights</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6 border border-line/60 space-y-2">
              <span className="font-mono text-xs text-accent-soft font-semibold block">01 — Pareto Output Distribution</span>
              <h3 className="font-display text-lg font-semibold text-ink">Small Equipment Sub-Group Drives Majority Production</h3>
              <p className="text-sm text-ink-dim leading-relaxed">
                Analysis revealed a strong Pareto principle at play: less than 25% of active haulage assets generated over 60% of total tonnage delivered to crushers.
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-line/60 space-y-2">
              <span className="font-mono text-xs text-accent-soft font-semibold block">02 — Trip Decoupling Anomaly</span>
              <h3 className="font-display text-lg font-semibold text-ink">High Trip Frequency Did Not Equal Higher Production</h3>
              <p className="text-sm text-ink-dim leading-relaxed">
                High trip counts frequently masked sub-optimal operations. Drivers ran partial payloads to hit daily trip targets, inflating fuel consumption without increasing tonnage.
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-line/60 space-y-2">
              <span className="font-mono text-xs text-accent-soft font-semibold block">03 — Core Efficiency Driver</span>
              <h3 className="font-display text-lg font-semibold text-ink">Payload Utilization as Primary Metric</h3>
              <p className="text-sm text-ink-dim leading-relaxed">
                Payload utilization ratio (%) emerged as the single strongest statistical predictor of operational productivity and cost per ton hauled.
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-line/60 space-y-2">
              <span className="font-mono text-xs text-accent-soft font-semibold block">04 — Tail-End Cost Drag</span>
              <h3 className="font-display text-lg font-semibold text-ink">Low-Output Assets Inflate Maintenance Overhead</h3>
              <p className="text-sm text-ink-dim leading-relaxed">
                A tail-end group of chronically underperforming equipment delivered disproportionately low output while consuming identical maintenance and operational allocations.
              </p>
            </div>
          </div>
        </section>

        {/* 9. BUSINESS IMPACT & RECOMMENDATIONS */}
        <section className="space-y-6">
          <div className="text-center md:text-left">
            <span className="font-mono text-xs text-accent-soft uppercase tracking-wider">Action Plan</span>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink">Strategic Recommendations & Business Impact</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="glass rounded-xl2 p-6 border border-line/60 space-y-3 hover:border-accent/40 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                <Truck size={20} />
              </div>
              <h3 className="font-display font-semibold text-base text-ink">1. Payload Optimization</h3>
              <p className="text-xs text-ink-dim leading-relaxed">
                Enforce target payload thresholds prior to truck dispatch to ensure every trip operates within peak tonnage capacity.
              </p>
            </div>

            <div className="glass rounded-xl2 p-6 border border-line/60 space-y-3 hover:border-accent/40 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-sky-500/15 flex items-center justify-center text-sky-400">
                <LineChart size={20} />
              </div>
              <h3 className="font-display font-semibold text-base text-ink">2. Trip & Dispatch Tuning</h3>
              <p className="text-xs text-ink-dim leading-relaxed">
                Shift evaluation metrics from trip frequency to effective tonnage per shift, eliminating partial-load dispatch incentives.
              </p>
            </div>

            <div className="glass rounded-xl2 p-6 border border-line/60 space-y-3 hover:border-accent/40 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400">
                <Wrench size={20} />
              </div>
              <h3 className="font-display font-semibold text-base text-ink">3. Predictive Maintenance</h3>
              <p className="text-xs text-ink-dim leading-relaxed">
                Prioritize preventive servicing for high-performing digger-crusher assets to protect 60%+ of primary production yield.
              </p>
            </div>

            <div className="glass rounded-xl2 p-6 border border-line/60 space-y-3 hover:border-accent/40 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400">
                <Layers size={20} />
              </div>
              <h3 className="font-display font-semibold text-base text-ink">4. Asset Rationalization</h3>
              <p className="text-xs text-ink-dim leading-relaxed">
                Reallocate or decommission chronically underperforming equipment to reduce fixed operating expenses.
              </p>
            </div>
          </div>
        </section>

        {/* 10. VISUAL TIMELINE */}
        <section className="glass rounded-xl2 p-8 border border-line/60 space-y-6">
          <div>
            <span className="font-mono text-xs text-accent-soft uppercase tracking-wider">Project Lifecycle</span>
            <h2 className="font-display text-2xl font-semibold text-ink">Capstone Execution Timeline</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 pt-2">
            {[
              { step: "01", name: "Problem Framing", desc: "Understanding mining operational bottlenecks" },
              { step: "02", name: "Data Preparation", desc: "Cleaning telemetry & trip logs" },
              { step: "03", name: "SQL Analytics", desc: "Star-schema CTEs & window queries" },
              { step: "04", name: "BI Development", desc: "Building interactive Power BI dashboards" },
              { step: "05", name: "Insight Synthesis", desc: "Extracting Pareto & payload findings" },
              { step: "06", name: "Executive Review", desc: "Delivering recommendations to IIIT-B" },
            ].map((t, idx) => (
              <div key={t.step} className="glass p-4 rounded-xl border border-line space-y-1 relative">
                <span className="font-mono text-xs text-accent-soft font-bold">{t.step}</span>
                <h4 className="font-display font-semibold text-xs text-ink">{t.name}</h4>
                <p className="text-[10px] text-ink-dim leading-snug">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 11. WHAT I LEARNED & REFLECTION */}
        <section className="glass rounded-xl2 p-8 border-l-4 border-accent space-y-4">
          <h2 className="font-display text-2xl font-semibold text-ink flex items-center gap-2">
            <Award size={22} className="text-accent-soft" /> Professional Takeaways & Personal Reflection
          </h2>
          <p className="text-sm md:text-base text-ink-dim leading-relaxed">
            Executing this final capstone for my <strong className="text-ink">Executive PG Programme in Data Science & AI at IIIT Bangalore</strong> reinforced the critical role of data storytelling in industrial analytics.
          </p>
          <div className="grid md:grid-cols-3 gap-4 pt-2 text-xs font-mono">
            <div className="glass p-4 rounded-xl border border-line space-y-1">
              <span className="text-accent-soft font-semibold block">Business Intelligence Mastery</span>
              <p className="text-ink-dim">Learned how to design intuitive, decision-first executive dashboards in Power BI.</p>
            </div>
            <div className="glass p-4 rounded-xl border border-line space-y-1">
              <span className="text-accent-soft font-semibold block">Advanced SQL Modeling</span>
              <p className="text-ink-dim">Mastered star-schema modeling, CTEs, and window functions on multi-table datasets.</p>
            </div>
            <div className="glass p-4 rounded-xl border border-line space-y-1">
              <span className="text-accent-soft font-semibold block">Executive Communication</span>
              <p className="text-ink-dim">Refined the ability to translate complex statistical findings into actionable executive recommendations.</p>
            </div>
          </div>
        </section>

        {/* 12. PROJECT REPOSITORY & GALLERY */}
        <section className="glass rounded-xl2 p-8 border border-line/60 text-center space-y-6">
          <h2 className="font-display text-2xl font-semibold text-ink">Project Repository & Deliverables</h2>
          <p className="text-sm text-ink-dim max-w-xl mx-auto">
            Explore the SQL queries, Power BI dashboard files, and presentation materials for this IIIT Bangalore capstone project.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/Dollypandey1512/Supply-Chain-Analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-base font-medium text-sm hover:bg-accent-soft transition-colors shadow-lg"
            >
              <Github size={16} /> GitHub Repository
            </a>
            <a
              href="https://github.com/Dollypandey1512/Supply-Chain-Analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass font-medium text-sm hover:-translate-y-0.5 transition-all"
            >
              <FileText size={16} /> View Executive Presentation
            </a>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-accent-soft hover:underline"
          >
            <ArrowLeft size={16} /> Return to Dolly Pandey&apos;s Portfolio Home
          </Link>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="glass rounded-2xl p-6 max-w-4xl w-full border border-line space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-line pb-3">
                <h3 className="font-display font-semibold text-lg text-ink">{lightboxTitle}</h3>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="text-ink-dim hover:text-ink transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="h-64 sm:h-96 bg-surface-2 rounded-xl border border-line flex flex-col items-center justify-center p-6 text-center space-y-3">
                <BarChart2 size={48} className="text-accent-soft animate-pulse" />
                <p className="font-mono text-sm text-ink">{lightboxTitle}</p>
                <p className="text-xs text-ink-dim max-w-md">
                  High-resolution dashboard view featuring interactive Power BI equipment filters, payload utilization matrices, and operational cycle times.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
