import { certifications } from "@/lib/data";
import Reveal from "./Reveal";
import { GraduationCap, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section-pad">
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        <Reveal>
          <div className="space-y-2">
            <span className="font-mono text-sm text-accent-soft font-semibold tracking-wider block uppercase">
              05 — Academic & Professional Certifications
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white max-w-2xl">
              Education & Certified Qualifications
            </h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const cardContent = (
              <div className="glass rounded-xl2 p-6 h-full flex flex-col justify-between gap-4 border border-line/80 hover:border-accent/60 hover:shadow-glow transition-all duration-300 bg-surface-2/60 group">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent-soft group-hover:bg-accent group-hover:text-slate-950 transition-colors">
                      <GraduationCap size={20} />
                    </div>
                    {cert.url && (
                      <ExternalLink size={16} className="text-slate-400 group-hover:text-accent-soft transition-colors" />
                    )}
                  </div>
                  <h3 className="font-display font-bold text-base text-white leading-snug group-hover:text-accent-soft transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-mono font-medium">{cert.org}</p>
                </div>

                {cert.meta && (
                  <div className="pt-3 border-t border-line/60">
                    <span className="font-mono text-[11px] text-amber-300 font-semibold block">
                      {cert.meta}
                    </span>
                  </div>
                )}
              </div>
            );

            return (
              <Reveal delay={i * 0.08} key={cert.title}>
                {cert.url ? (
                  <a
                    href={cert.url}
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
