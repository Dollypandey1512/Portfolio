"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Github,
  ExternalLink,
  Star,
  ChevronDown,
  ChevronUp,
  Target,
  Database,
  Wrench,
  TrendingUp,
  Lightbulb,
  LayoutDashboard,
  ArrowRight,
  Sparkles,
  Award,
} from "lucide-react";
import { projects, Project } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const flagshipProject = projects.find((p) => p.isFlagship) || projects[0];
  const otherProjects = projects.filter((p) => !p.isFlagship);

  return (
    <section id="projects" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent-soft mb-3">
            04 — Featured Projects & Capstone
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4 max-w-2xl">
            Data Analytics Case Studies & Business Impact
          </h2>
          <p className="text-ink-dim text-base max-w-2xl mb-12">
            Structured analytical projects solving real-world business problems using SQL, Python, Power BI, Tableau, and Machine Learning.
          </p>
        </Reveal>

        {/* 🌟 1. FLAGSHIP CAPSTONE HERO CARD (MOST PROMINENT) */}
        <Reveal delay={0.05}>
          <div className="glass rounded-2xl p-8 md:p-10 border-2 border-accent/60 shadow-glow relative overflow-hidden mb-14 space-y-8">
            <div aria-hidden="true" className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />

            {/* Header badges */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-1.5 rounded-full bg-accent text-ink font-bold shadow-md">
                  <Star size={13} /> ⭐ Featured Capstone Project
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full glass border border-accent/30 text-accent-soft">
                  <Award size={13} /> IIIT Bangalore Final Team Capstone
                </span>
              </div>
              <span className="font-mono text-xs text-ink-dim">
                Executive PG in Data Science & AI
              </span>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-3">
              <h3 className="font-display text-2xl md:text-4xl font-bold text-ink">
                {flagshipProject.title}
              </h3>
              <p className="text-accent-soft font-mono text-base md:text-lg">
                {flagshipProject.tagline}
              </p>
            </div>

            {/* Summary Objective & Impact */}
            <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-line/60">
              <div className="space-y-2">
                <span className="font-mono text-xs text-ink-dim uppercase tracking-wider block">
                  🎯 Business Objective
                </span>
                <p className="text-ink text-sm md:text-base leading-relaxed font-medium">
                  {flagshipProject.businessObjective}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-ink-dim uppercase tracking-wider block">
                  ⚡ Key Business Impact
                </span>
                <p className="text-accent-soft text-sm md:text-base leading-relaxed font-medium">
                  {flagshipProject.businessImpact}
                </p>
              </div>
            </div>

            {/* Tools Badges */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex flex-wrap gap-2">
                {flagshipProject.toolsUsed.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-surface-2 border border-line text-ink font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Dedicated Case Study Route Link Button */}
              <Link
                href="/projects/supply-chain-analytics"
                className="inline-flex items-center gap-2 text-sm font-mono px-6 py-3.5 rounded-full bg-accent text-ink font-semibold hover:bg-accent-soft transition-all shadow-lg hover:-translate-y-0.5"
              >
                Explore Full Case Study Page <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* 2. OTHER ANALYTICAL PROJECTS */}
        <div className="space-y-8">
          <Reveal>
            <h3 className="font-display text-xl font-semibold text-ink mb-6">
              Additional Analytics Case Studies & Models
            </h3>
          </Reveal>

          {otherProjects.map((project: Project, index: number) => {
            const isExpanded = expandedIndex === index;

            return (
              <Reveal delay={index * 0.08} key={project.title}>
                <div className="glass rounded-xl2 p-6 md:p-8 border border-line/60 hover:border-accent/40 transition-all duration-300">
                  {/* Header Row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h4 className="font-display text-xl font-semibold text-ink">
                          {project.title}
                        </h4>
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-3 py-0.5 rounded-full bg-accent/20 text-accent-soft border border-accent/30">
                            <Star size={11} /> Featured
                          </span>
                        )}
                      </div>
                      <p className="text-accent-soft font-mono text-xs md:text-sm">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 flex-wrap pt-2 md:pt-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded-lg bg-surface-2 hover:bg-ink hover:text-base border border-line transition-colors"
                        >
                          <Github size={15} /> GitHub Repo
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded-lg bg-accent/20 text-accent-soft hover:bg-accent hover:text-ink border border-accent/30 transition-colors"
                        >
                          <ExternalLink size={15} /> Live Demo
                        </a>
                      )}
                      <button
                        onClick={() => toggleExpand(index)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono px-4 py-2 rounded-lg bg-ink text-base hover:bg-accent-soft transition-colors ml-auto md:ml-0"
                      >
                        {isExpanded ? (
                          <>
                            Collapse Details <ChevronUp size={15} />
                          </>
                        ) : (
                          <>
                            View Case Study <ChevronDown size={15} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Summary Badges & Objective */}
                  <div className="mt-5 pt-5 border-t border-line/50 grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-mono text-xs text-ink-dim uppercase tracking-wider block mb-1">
                        🎯 Business Objective
                      </span>
                      <p className="text-ink font-medium leading-relaxed">
                        {project.businessObjective}
                      </p>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-ink-dim uppercase tracking-wider block mb-1">
                        ⚡ Key Business Impact
                      </span>
                      <p className="text-accent-soft font-medium leading-relaxed">
                        {project.businessImpact}
                      </p>
                    </div>
                  </div>

                  {/* Tools list */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-surface-2 border border-line text-ink-dim"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Recruiter-Friendly Deep-Dive */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden mt-6 pt-6 border-t border-line space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Problem & Objective */}
                          <div className="glass rounded-xl p-5 border border-line/60 space-y-3">
                            <h5 className="font-display font-semibold text-sm text-ink flex items-center gap-2">
                              <Target size={16} className="text-accent-soft" />
                              Problem Statement
                            </h5>
                            <p className="text-ink-dim text-xs md:text-sm leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          {/* Dataset & Tools */}
                          <div className="glass rounded-xl p-5 border border-line/60 space-y-3">
                            <h5 className="font-display font-semibold text-sm text-ink flex items-center gap-2">
                              <Database size={16} className="text-accent-soft" />
                              Dataset & Data Sources
                            </h5>
                            <p className="text-ink-dim text-xs md:text-sm leading-relaxed">
                              {project.dataset}
                            </p>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Approach */}
                          <div className="glass rounded-xl p-5 border border-line/60 space-y-3">
                            <h5 className="font-display font-semibold text-sm text-ink flex items-center gap-2">
                              <Wrench size={16} className="text-accent-soft" />
                              Analytical Approach & Execution
                            </h5>
                            <p className="text-ink-dim text-xs md:text-sm leading-relaxed">
                              {project.approach}
                            </p>
                          </div>

                          {/* Dashboard */}
                          <div className="glass rounded-xl p-5 border border-line/60 space-y-3">
                            <h5 className="font-display font-semibold text-sm text-ink flex items-center gap-2">
                              <LayoutDashboard size={16} className="text-accent-soft" />
                              Dashboard & Reporting Visuals
                            </h5>
                            <p className="text-ink-dim text-xs md:text-sm leading-relaxed">
                              {project.dashboard}
                            </p>
                          </div>
                        </div>

                        {/* Key Insights */}
                        <div className="glass rounded-xl p-5 border border-line/60 space-y-3">
                          <h5 className="font-display font-semibold text-sm text-ink flex items-center gap-2">
                            <TrendingUp size={16} className="text-accent-soft" />
                            Key Analytical Insights
                          </h5>
                          <ul className="space-y-2">
                            {project.keyInsights.map((insight, idx) => (
                              <li
                                key={idx}
                                className="text-ink-dim text-xs md:text-sm leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent-soft"
                              >
                                {insight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Learning */}
                        <div className="glass rounded-xl p-5 border-l-4 border-accent space-y-2">
                          <h5 className="font-display font-semibold text-sm text-ink flex items-center gap-2">
                            <Lightbulb size={16} className="text-accent-soft" />
                            Key Learning & Takeaway
                          </h5>
                          <p className="text-ink-dim text-xs md:text-sm leading-relaxed">
                            {project.learning}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
