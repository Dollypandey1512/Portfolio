import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-pad bg-surface/30">
      <div className="mx-auto max-w-4xl px-6 space-y-12">
        <Reveal>
          <div className="space-y-2">
            <span className="font-mono text-sm text-accent-soft font-semibold tracking-wider block uppercase">
              03 — Professional Experience
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">
              Data Analytics & Impact in Production
            </h2>
            <p className="text-slate-200 text-base max-w-xl">
              Real-world industry experience delivering data analytics, funnel monitoring, ETL automation, and business intelligence solutions.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal delay={i * 0.1} key={job.org}>
              <div className="glass rounded-2xl p-6 md:p-8 border border-line bg-surface-2/90 space-y-6 shadow-xl">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-line/80 pb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full bg-accent/20 text-accent-soft font-semibold mb-2">
                      <Briefcase size={13} /> {job.role}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {job.org}
                    </h3>
                  </div>

                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-300 font-semibold px-3.5 py-1.5 rounded-lg bg-surface border border-line w-fit">
                    <Calendar size={14} />
                    {job.date}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-4 pt-1">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-white text-sm md:text-base leading-relaxed font-normal flex items-start gap-3 bg-surface/40 p-3.5 rounded-xl border border-line/50"
                    >
                      <CheckCircle2 size={18} className="text-accent-soft shrink-0 mt-0.5" />
                      <span className="text-slate-100">{point}</span>
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
