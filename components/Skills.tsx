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
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent-soft mb-3">02 — Expertise</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-xl">
            Core Analytical & Technical Competencies
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => {
            const Icon = categoryIcons[i % categoryIcons.length];
            return (
              <Reveal delay={i * 0.08} key={group.category}>
                <div className="glass rounded-xl2 p-6 h-full border border-line/60 hover:border-accent/40 hover:shadow-glow transition-all duration-300">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent-soft">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1.5 rounded-md bg-surface-2 text-ink border border-line/80 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Dedicated Tools Icon Grid */}
        <ToolsGrid />
      </div>
    </section>
  );
}
