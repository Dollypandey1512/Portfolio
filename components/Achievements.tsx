import { achievements } from "@/lib/data";
import Reveal from "./Reveal";
import { Trophy } from "lucide-react";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent-soft mb-3">
            06 — Achievements
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-xl">
            Worth calling out.
          </h2>
        </Reveal>

        <div className="space-y-4">
          {achievements.map((item, i) => (
            <Reveal delay={i * 0.1} key={item}>
              <div className="glass rounded-xl2 p-5 flex items-start gap-4">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-accent/15 flex items-center justify-center text-accent-soft">
                  <Trophy size={16} />
                </div>
                <p className="text-ink-dim text-sm leading-relaxed pt-1.5">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
