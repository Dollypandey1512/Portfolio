import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import ToolsGrid from "./ToolsGrid";
import {
  BarChart3,
  Database,
  BrainCircuit,
  Cloud,
  GitBranch,
  LineChart,
  CheckCircle2,
} from "lucide-react";

const categoryIcons = [
  BarChart3,
  LineChart,
  BrainCircuit,
  Database,
  Cloud,
  GitBranch,
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        <Reveal>
          <div className="space-y-2">
            <span className="font-mono text-sm text-accent-soft font-semibold tracking-wider block">
              02 — EXPERTISE & COMPETENCIES
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">
              Data Analytics & Automation Stack
            </h2>
            <p className="text-slate-200 text-base max-w-xl">
              Targeted skills built for Data Analyst, Business Intelligence, Analytics Engineering, and AI Workflow Automation roles.
            </p>
          </div>
        </Reveal>

        {/* 6 Core Skill Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => {
            const Icon = categoryIcons[i % categoryIcons.length];
            return (
              <Reveal delay={i * 0.08} key={group.category}>
                <div className="glass rounded-xl2 p-6 h-full border border-line/80 hover:border-accent/60 hover:shadow-glow transition-all duration-300 bg-surface-2/60 flex flex-col justify-between space-y-4 group">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent-soft group-hover:bg-accent group-hover:text-slate-950 transition-colors">
                          <Icon size={20} />
                        </div>
                        <h3 className="font-display text-lg font-bold text-white">
                          {group.category}
                        </h3>
                      </div>
                      <span className="font-mono text-[11px] text-accent-soft bg-accent/10 px-2.5 py-1 rounded-full border border-accent/20">
                        {group.items.length} items
                      </span>
                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs font-mono px-3 py-1.5 rounded-lg bg-surface text-slate-100 border border-line/80 font-medium hover:border-accent/50 hover:text-white transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Dedicated Interactive Tools Icon Grid */}
        <ToolsGrid />
      </div>
    </section>
  );
}
