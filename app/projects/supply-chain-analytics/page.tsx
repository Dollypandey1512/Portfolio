"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Award,
  BarChart2,
  CheckCircle2,
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
  const [lightboxImage, setLightboxImage] = useState("");
  const [lightboxTitle, setLightboxTitle] = useState("");

  const openLightbox = (imgSrc: string, title: string) => {
    setLightboxImage(imgSrc);
    setLightboxTitle(title);
    setLightboxOpen(true);
  };

  const galleryItems = [
    {
      id: "executive",
      label: "Executive Dashboard",
      img: "/capstone_images/image2.png",
      title: "Executive Dashboard Overview",
      desc: "Overall production performance, equipment utilization, maintenance status impact, and payload utilization summary.",
    },
    {
      id: "production",
      label: "Equipment-wise Production Analysis",
      img: "/capstone_images/image4.png",
      title: "Equipment-wise Production Analysis",
      desc: "Production contribution breakdown showing top-performing assets (EX8044, EX8047, EX8051) versus long-tail equipment.",
    },
    {
      id: "trips",
      label: "Trips vs Production",
      img: "/capstone_images/image6.png",
      title: "Trips vs Production Relationship",
      desc: "Evaluating trip count against total tonnage yield to identify trip efficiency vs. loading gaps.",
    },
    {
      id: "efficiency",
      label: "Efficiency Analysis",
      img: "/capstone_images/image7.png",
      title: "Daily Efficiency Analysis (Per Day View)",
      desc: "Production per day and trips per day metrics highlighting equipment loading efficiency.",
    },
    {
      id: "payload",
      label: "Payload Utilization",
      img: "/capstone_images/image8.png",
      title: "Payload Utilization Focus",
      desc: "Loading efficiency distribution identifying optimal loading vs. underutilized equipment.",
    },
    {
      id: "lowperf",
      label: "Low Performing Equipment",
      img: "/capstone_images/image9.png",
      title: "Low-Performing Equipment Analysis",
      desc: "Isolating active assets that contribute minimal production output while increasing operational cost.",
    },
  ];

  const currentTabItem = galleryItems.find((item) => item.id === activeTab) || galleryItems[0];

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
            <Sparkles size={14} /> ⭐ Featured Capstone Project
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl">
            Supply Chain Analytics – Open-Pit Mining Equipment
          </h1>

          <div className="space-y-1">
            <p className="font-mono text-base md:text-lg text-accent-soft font-semibold">
              IIIT Bangalore | Executive PG Programme in Data Science & AI
            </p>
            <p className="font-mono text-xs text-amber-300">
              Final Team Capstone Project (Team Members: Anshul Mishra, Dolly Pandey, Ankita Singh)
            </p>
          </div>

          <p className="text-slate-200 text-base md:text-lg max-w-3xl leading-relaxed">
            An end-to-end Supply Chain Analytics project analyzing the operational performance of open-pit mining equipment using SQL and Power BI to identify inefficiencies in production, equipment utilization, trips, and payload capacity.
          </p>

          {/* Quick Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-left">
            <div className="glass rounded-xl p-4 border border-line/60 bg-surface-2/60">
              <span className="font-mono text-xs text-ink-dim uppercase block mb-1">Institution</span>
              <span className="font-display font-semibold text-sm text-white">IIIT Bangalore</span>
            </div>
            <div className="glass rounded-xl p-4 border border-line/60 bg-surface-2/60">
              <span className="font-mono text-xs text-ink-dim uppercase block mb-1">Domain</span>
              <span className="font-display font-semibold text-sm text-white">Supply Chain & Mining</span>
            </div>
            <div className="glass rounded-xl p-4 border border-line/60 bg-surface-2/60">
              <span className="font-mono text-xs text-ink-dim uppercase block mb-1">Project Type</span>
              <span className="font-display font-semibold text-sm text-white">Final Team Capstone</span>
            </div>
            <div className="glass rounded-xl p-4 border border-line/60 bg-surface-2/60">
              <span className="font-mono text-xs text-ink-dim uppercase block mb-1">Core Tools</span>
              <span className="font-display font-semibold text-sm text-accent-soft">Power BI • MySQL • SQL</span>
            </div>
          </div>
        </section>

        {/* 2. BUSINESS PROBLEM */}
        <section className="glass rounded-xl2 p-8 border border-line/60 space-y-6 bg-surface-2/60">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent-soft">
              <Target size={20} />
            </div>
            <div>
              <span className="font-mono text-xs text-accent-soft uppercase tracking-wider block font-semibold">Business Problem</span>
              <h2 className="font-display text-2xl font-bold text-white">Open-Pit Mining Equipment Utilization</h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-200 text-sm md:text-base leading-relaxed">
            <p>
              Open-pit mining operations depend heavily on efficient equipment utilization to maximize production while minimizing operational costs.
            </p>
            <p className="font-semibold text-white">
              Underperforming equipment leads to:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="glass p-4 rounded-xl border border-red-500/30 bg-red-500/10 space-y-1">
                <ShieldAlert size={20} className="text-red-400" />
                <h3 className="font-display font-semibold text-sm text-white">Higher Cost per Ton</h3>
                <p className="text-xs text-slate-300">Increased operating and maintenance expenses without proportional tonnage output.</p>
              </div>
              <div className="glass p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 space-y-1">
                <TrendingDown size={20} className="text-amber-400" />
                <h3 className="font-display font-semibold text-sm text-white">Lower Production Efficiency</h3>
                <p className="text-xs text-slate-300">Bottlenecks and uneven utilization reducing overall mine haulage throughput.</p>
              </div>
              <div className="glass p-4 rounded-xl border border-purple-500/30 bg-purple-500/10 space-y-1">
                <Wrench size={20} className="text-purple-400" />
                <h3 className="font-display font-semibold text-sm text-white">Increased Maintenance Overhead</h3>
                <p className="text-xs text-slate-300">Active usage of low-performing equipment driving up wear and repair costs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. OBJECTIVE */}
        <section className="glass rounded-xl2 p-8 border border-line/60 space-y-5 bg-surface-2/60">
          <h2 className="font-display text-2xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 size={22} className="text-accent-soft" /> Project Objectives
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            {[
              { title: "Analyze Equipment Performance", desc: "Evaluate production efficiency and operational metrics at the equipment level." },
              { title: "Identify Performance Gaps", desc: "Distinguish top-performing equipment from low-performing equipment." },
              { title: "Evaluate Payload Utilization", desc: "Measure loading efficiency to identify underloading or overloading trends." },
              { title: "Analyze Trips vs. Production", desc: "Study the relationship between trip count and actual tonnage production." },
              { title: "Recommend Operational Improvements", desc: "Generate actionable recommendations for dispatch, maintenance, and asset management." },
            ].map((obj, i) => (
              <div key={i} className="glass p-4 rounded-xl border border-line space-y-1 bg-surface/50">
                <span className="font-mono text-xs text-accent-soft font-bold block">Objective {i + 1}</span>
                <h3 className="font-display font-semibold text-sm text-white">{obj.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. DATASET & TOOLS */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-xl2 p-8 border border-line/60 space-y-5 bg-surface-2/60">
            <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Database size={20} className="text-accent-soft" /> Dataset & Metrics Analyzed
            </h2>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="glass p-3 rounded-lg border border-line bg-surface/50">
                <span className="text-accent-soft font-semibold block">Equipment-wise Production</span>
                <span className="text-slate-300">Tonnage output per machine</span>
              </div>
              <div className="glass p-3 rounded-lg border border-line bg-surface/50">
                <span className="text-accent-soft font-semibold block">Trips per Day</span>
                <span className="text-slate-300">Completed haul trip frequency</span>
              </div>
              <div className="glass p-3 rounded-lg border border-line bg-surface/50">
                <span className="text-accent-soft font-semibold block">Payload Utilization %</span>
                <span className="text-slate-300">Loading capacity ratio</span>
              </div>
              <div className="glass p-3 rounded-lg border border-line bg-surface/50">
                <span className="text-accent-soft font-semibold block">Maintenance Status</span>
                <span className="text-slate-300">Active vs maintenance counts</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl2 p-8 border border-line/60 space-y-5 bg-surface-2/60">
            <h2 className="font-display text-xl font-bold text-white flex items-center gap-2">
              <Wrench size={20} className="text-accent-soft" /> Tools Used
            </h2>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="glass px-4 py-2.5 rounded-xl flex items-center gap-2 border border-amber-400/40 text-amber-300 font-mono text-sm font-semibold">
                <BarChart2 size={18} /> Power BI
              </div>
              <div className="glass px-4 py-2.5 rounded-xl flex items-center gap-2 border border-sky-400/40 text-sky-300 font-mono text-sm font-semibold">
                <Server size={18} /> MySQL
              </div>
              <div className="glass px-4 py-2.5 rounded-xl flex items-center gap-2 border border-blue-400/40 text-blue-300 font-mono text-sm font-semibold">
                <Database size={18} /> SQL (Stored Procedures)
              </div>
              <div className="glass px-4 py-2.5 rounded-xl flex items-center gap-2 border border-emerald-400/40 text-emerald-300 font-mono text-sm font-semibold">
                <FileSpreadsheet size={18} /> Excel
              </div>
              <div className="glass px-4 py-2.5 rounded-xl flex items-center gap-2 border border-orange-400/40 text-orange-300 font-mono text-sm font-semibold">
                <FileText size={18} /> PowerPoint
              </div>
            </div>
          </div>
        </section>

        {/* 5. TEAM & MY CONTRIBUTION */}
        <section className="glass rounded-xl2 p-8 border-l-4 border-accent bg-surface-2/80 space-y-4">
          <div className="flex items-center gap-3">
            <Users size={22} className="text-accent-soft" />
            <h2 className="font-display text-2xl font-bold text-white">Team Capstone Project & My Contribution</h2>
          </div>
          <p className="text-sm md:text-base text-slate-200 leading-relaxed">
            This was the final team capstone project completed during the <strong className="text-white">Executive PG Programme in Data Science & AI at IIIT Bangalore</strong>.
          </p>
          <div className="glass p-5 rounded-xl border border-accent/40 bg-accent/10">
            <span className="font-mono text-xs text-accent-soft font-semibold uppercase tracking-wider block mb-1">My Specific Contributions</span>
            <p className="text-sm md:text-base text-white font-mono leading-relaxed">
              &quot;My contributions included SQL-based data preparation, Power BI dashboard development, data analysis, business insight generation, visualization, and presentation support.&quot;
            </p>
          </div>
        </section>

        {/* 6. KPI CARDS */}
        <section className="space-y-6">
          <div className="text-center md:text-left">
            <span className="font-mono text-xs text-accent-soft uppercase tracking-wider font-semibold block">Metrics Overview</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Key Performance Indicators Tracked</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="glass rounded-xl p-6 border border-line text-center bg-surface-2/60">
              <Truck size={24} className="text-accent-soft mx-auto mb-2" />
              <div className="font-display text-xl md:text-2xl font-bold text-white">Total Production</div>
              <div className="font-mono text-xs text-slate-300 mt-1">Tonnage Output</div>
            </div>

            <div className="glass rounded-xl p-6 border border-line text-center bg-surface-2/60">
              <Layers size={24} className="text-emerald-400 mx-auto mb-2" />
              <div className="font-display text-xl md:text-2xl font-bold text-white">Total Trips</div>
              <div className="font-mono text-xs text-slate-300 mt-1">Haul Trip Count</div>
            </div>

            <div className="glass rounded-xl p-6 border border-line text-center bg-surface-2/60">
              <TrendingUp size={24} className="text-sky-400 mx-auto mb-2" />
              <div className="font-display text-xl md:text-2xl font-bold text-white">Production / Day</div>
              <div className="font-mono text-xs text-slate-300 mt-1">Daily Tonnage Rate</div>
            </div>

            <div className="glass rounded-xl p-6 border border-line text-center bg-surface-2/60">
              <LineChart size={24} className="text-purple-400 mx-auto mb-2" />
              <div className="font-display text-xl md:text-2xl font-bold text-white">Trips / Day</div>
              <div className="font-mono text-xs text-slate-300 mt-1">Daily Trip Rate</div>
            </div>

            <div className="glass rounded-xl p-6 border border-line text-center col-span-2 md:col-span-1 bg-surface-2/60">
              <PieChart size={24} className="text-amber-400 mx-auto mb-2" />
              <div className="font-display text-xl md:text-2xl font-bold text-accent-soft">Payload Utilization %</div>
              <div className="font-mono text-xs text-slate-300 mt-1">Loading Ratio</div>
            </div>
          </div>
        </section>

        {/* 7. AUTHENTIC POWER BI DASHBOARD GALLERY */}
        <section className="glass rounded-xl2 p-8 border border-line/60 space-y-6 bg-surface-2/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-accent-soft uppercase tracking-wider font-semibold block">Dashboard Showcase</span>
              <h2 className="font-display text-2xl font-bold text-white">Power BI Dashboard Gallery</h2>
            </div>

            {/* Gallery Tab Switcher */}
            <div className="flex flex-wrap gap-2">
              {galleryItems.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-mono text-xs px-3.5 py-1.5 rounded-lg transition-colors font-medium ${
                    activeTab === tab.id
                      ? "bg-accent text-slate-950 font-bold"
                      : "glass text-slate-200 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive High-Res Screenshot Showcase */}
          <div className="relative glass rounded-2xl p-6 border border-line space-y-4 bg-surface/80">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <span className="font-mono text-xs text-slate-300 ml-2 font-semibold">{currentTabItem.title}</span>
              </div>
              <button
                onClick={() => openLightbox(currentTabItem.img, currentTabItem.title)}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-soft hover:underline font-medium"
              >
                <Maximize2 size={14} /> Expand Full Screen
              </button>
            </div>

            {/* Screenshot Container */}
            <div
              className="relative w-full rounded-xl overflow-hidden border border-line/80 cursor-pointer group bg-black/40 min-h-[300px] md:min-h-[420px] flex items-center justify-center"
              onClick={() => openLightbox(currentTabItem.img, currentTabItem.title)}
            >
              <img
                src={currentTabItem.img}
                alt={currentTabItem.title}
                className="w-full h-auto object-contain max-h-[500px] group-hover:scale-[1.01] transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-mono text-xs text-white bg-black/70 px-4 py-2 rounded-full border border-white/20 inline-flex items-center gap-2">
                  <Maximize2 size={14} /> Click to Expand Screenshot
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-300 font-mono leading-relaxed">
              {currentTabItem.desc}
            </p>
          </div>
        </section>

        {/* 8. KEY INSIGHTS */}
        <section className="glass rounded-xl2 p-8 border border-line/60 space-y-6 bg-surface-2/60">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent-soft">
              <Lightbulb size={20} />
            </div>
            <div>
              <span className="font-mono text-xs text-accent-soft uppercase tracking-wider font-semibold block">Analytical Findings</span>
              <h2 className="font-display text-2xl font-bold text-white">Key Insights</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass rounded-xl p-6 border border-line/60 space-y-2 bg-surface/50">
              <span className="font-mono text-xs text-accent-soft font-semibold block">01 — Production Concentration</span>
              <p className="text-sm md:text-base text-slate-100 leading-relaxed font-medium">
                Production is concentrated among a small number of high-performing equipment (e.g. EX8044, EX8047, EX8051).
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-line/60 space-y-2 bg-surface/50">
              <span className="font-mono text-xs text-accent-soft font-semibold block">02 — Trip Count Evaluation</span>
              <p className="text-sm md:text-base text-slate-100 leading-relaxed font-medium">
                Trip count alone is not a reliable performance indicator. Production does not increase linearly with trips due to payload variations.
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-line/60 space-y-2 bg-surface/50">
              <span className="font-mono text-xs text-accent-soft font-semibold block">03 — Payload Efficiency</span>
              <p className="text-sm md:text-base text-slate-100 leading-relaxed font-medium">
                Payload utilization is one of the strongest indicators of operational efficiency across haulage equipment.
              </p>
            </div>

            <div className="glass rounded-xl p-6 border border-line/60 space-y-2 bg-surface/50">
              <span className="font-mono text-xs text-accent-soft font-semibold block">04 — Operational Cost Impact</span>
              <p className="text-sm md:text-base text-slate-100 leading-relaxed font-medium">
                Low-performing equipment increase operational cost without contributing proportional production output.
              </p>
            </div>
          </div>
        </section>

        {/* 9. RECOMMENDATIONS */}
        <section className="space-y-6">
          <div className="text-center md:text-left">
            <span className="font-mono text-xs text-accent-soft uppercase tracking-wider font-semibold block">Project Recommendations</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Actionable Recommendations</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="glass rounded-xl2 p-6 border border-line/60 space-y-3 bg-surface-2/60">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Truck size={20} />
              </div>
              <h3 className="font-display font-bold text-base text-white">Payload Optimization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Standardize loading practices across equipment to ensure optimal haul payload capacity.
              </p>
            </div>

            <div className="glass rounded-xl2 p-6 border border-line/60 space-y-3 bg-surface-2/60">
              <div className="h-10 w-10 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400">
                <LineChart size={20} />
              </div>
              <h3 className="font-display font-bold text-base text-white">Trip Optimization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Reduce high-trip / low-output equipment usage to improve overall fleet dispatch efficiency.
              </p>
            </div>

            <div className="glass rounded-xl2 p-6 border border-line/60 space-y-3 bg-surface-2/60">
              <div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                <Wrench size={20} />
              </div>
              <h3 className="font-display font-bold text-base text-white">Maintenance Prioritization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Focus maintenance on medium performers with high potential to protect core tonnage capacity.
              </p>
            </div>

            <div className="glass rounded-xl2 p-6 border border-line/60 space-y-3 bg-surface-2/60">
              <div className="h-10 w-10 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                <Layers size={20} />
              </div>
              <h3 className="font-display font-bold text-base text-white">Asset Rationalization</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Review low-performing equipment for operational route redeployment or decommissioning.
              </p>
            </div>
          </div>
        </section>

        {/* 10. PROJECT LINKS & DELIVERABLES */}
        <section className="glass rounded-xl2 p-8 border border-line/60 text-center space-y-6 bg-surface-2/70">
          <h2 className="font-display text-2xl font-bold text-white">Project Deliverables & Repository Links</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://github.com/Dollypandey1512/Supply-Chain-Analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent text-slate-950 font-bold text-sm hover:bg-accent-soft transition-colors shadow-lg"
            >
              <Github size={16} /> GitHub Repository
            </a>
            <a
              href="https://github.com/Dollypandey1512/Supply-Chain-Analytics/blob/main/capestone_ppt.pptx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass font-bold text-sm text-white hover:bg-surface-2 transition-all border border-line"
            >
              <FileText size={16} /> Presentation Deck
            </a>
            <a
              href="https://drive.google.com/file/d/1YF0urw14xzN1HDYaNsUF_b0oTeD0MYkp/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass font-bold text-sm text-accent-soft hover:bg-surface-2 transition-all border border-accent/40"
            >
              <Play size={16} /> Demo Video Walkthrough
            </a>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-accent-soft hover:underline font-semibold"
          >
            <ArrowLeft size={16} /> Return to Portfolio Home
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
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="glass rounded-2xl p-6 max-w-5xl w-full border border-line space-y-4 bg-surface-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-line pb-3">
                <h3 className="font-display font-bold text-lg text-white">{lightboxTitle}</h3>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="relative w-full overflow-hidden rounded-xl border border-line bg-black flex items-center justify-center max-h-[75vh]">
                <img
                  src={lightboxImage}
                  alt={lightboxTitle}
                  className="w-full h-auto object-contain max-h-[75vh]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
