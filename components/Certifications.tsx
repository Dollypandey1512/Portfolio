import { certifications } from "@/lib/data";
import Reveal from "./Reveal";
import { GraduationCap, ExternalLink } from "lucide-react";

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
          {certifications.map((cert, i) => {
            const certData = cert as typeof cert & { url?: string };
            const cardContent = (
              <div className="glass rounded-xl2 p-6 h-full flex flex-col gap-3 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center text-accent-soft group-hover:bg-accent/25 transition-colors">
                    <GraduationCap size={18} />
                  </div>
                  {certData.url && certData.url !== "#" && (
                    <ExternalLink size={16} className="text-ink-dim group-hover:text-accent-soft transition-colors" />
                  )}
                </div>
                <h3 className="font-display font-semibold text-sm leading-snug group-hover:text-accent-soft transition-colors">
                  {cert.title}
                </h3>
                <p className="text-ink-dim text-xs">{cert.org}</p>
                {cert.meta && (
                  <p className="font-mono text-[11px] text-accent-soft mt-auto pt-2">
                    {cert.meta}
                  </p>
                )}
              </div>
            );

            return (
              <Reveal delay={i * 0.08} key={cert.title}>
                {certData.url ? (
                  <a
                    href={certData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
