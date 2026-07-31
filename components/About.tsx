import { profile, stats } from "@/lib/data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent-soft mb-3">01 — About</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-xl">
            From biotech to data — I chase evidence, not assumptions.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <Reveal delay={0.1}>
            <p className="text-ink-dim text-lg leading-relaxed max-w-xl">
              {profile.summary}
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-6">
            {stats.map((stat, i) => (
              <Reveal delay={0.15 + i * 0.1} key={stat.label}>
                <div className="glass rounded-xl2 p-5 border-l-2 border-accent">
                  <div className="font-display text-2xl font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-sm text-ink-dim mt-1 font-mono">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
