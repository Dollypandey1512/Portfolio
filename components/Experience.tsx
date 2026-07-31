import { experience } from "@/lib/data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent-soft mb-3">
            03 — Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-14 max-w-xl">
            Where the work actually happened.
          </h2>
        </Reveal>

        <div className="relative border-l border-line ml-3">
          {experience.map((job, i) => (
            <Reveal delay={i * 0.12} key={job.org}>
              <div className="relative pl-10 pb-14 last:pb-0">
                <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-accent shadow-glow" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-xl font-semibold">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-ink-dim">
                    {job.date}
                  </span>
                </div>
                <p className="font-mono text-sm text-accent-soft mb-4">
                  {job.org}
                </p>
                <ul className="space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-ink-dim text-sm leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-ink-dim"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
