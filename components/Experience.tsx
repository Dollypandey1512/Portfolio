import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent-soft mb-3">
            03 — Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-14 max-w-xl">
            Analytics & Automation in Action.
          </h2>
        </Reveal>

        <div className="relative border-l border-line ml-3 space-y-12">
          {experience.map((job, i) => (
            <Reveal delay={i * 0.12} key={job.org}>
              <div className="relative pl-10">
                <span className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full bg-accent shadow-glow" />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display text-xl font-semibold text-ink flex items-center gap-2">
                    <Briefcase size={18} className="text-accent-soft inline" />
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-ink-dim flex items-center gap-1">
                    <Calendar size={13} />
                    {job.date}
                  </span>
                </div>
                <p className="font-mono text-sm text-accent-soft mb-5 font-medium">
                  {job.org}
                </p>

                <ul className="space-y-3">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-ink-dim text-sm md:text-base leading-relaxed pl-5 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent-soft"
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
