import { skills } from "@/lib/data";
import Reveal from "./Reveal";
import {
  Code2,
  BarChart3,
  BrainCircuit,
  Bot,
  LayoutDashboard,
} from "lucide-react";

const icons = [Code2, BarChart3, BrainCircuit, Bot, LayoutDashboard];

export default function Skills() {
  return (
    <section id="skills" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent-soft mb-3">02 — Skills</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-xl">
            The stack I actually build with.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal delay={i * 0.08} key={group.category}>
                <div className="glass rounded-xl2 p-6 h-full hover:shadow-glow transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent-soft">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-display font-semibold">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1.5 rounded-full bg-surface-2 text-ink-dim border border-line"
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
      </div>
    </section>
  );
}
