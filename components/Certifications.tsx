import { certifications } from "@/lib/data";
import Reveal from "./Reveal";
import { GraduationCap } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent-soft mb-3">
            05 — Certifications
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-xl">
            Formal learning, applied on real problems.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <Reveal delay={i * 0.08} key={cert.title}>
              <div className="glass rounded-xl2 p-6 h-full flex flex-col gap-3 hover:shadow-glow transition-shadow duration-300">
                <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent-soft">
                  <GraduationCap size={18} />
                </div>
                <h3 className="font-display font-semibold text-sm leading-snug">
                  {cert.title}
                </h3>
                <p className="text-ink-dim text-xs">{cert.org}</p>
                {cert.meta && (
                  <p className="font-mono text-[11px] text-accent-soft mt-auto pt-2">
                    {cert.meta}
                  </p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
