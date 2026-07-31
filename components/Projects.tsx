"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  const allTech = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return ["All", ...Array.from(set)];
  }, []);

  const [filter, setFilter] = useState("All");

  const sorted = useMemo(
    () =>
      [...projects].sort((a, b) => Number(b.featured) - Number(a.featured)),
    []
  );

  const filtered = sorted.filter(
    (p) => filter === "All" || p.tech.includes(filter)
  );

  return (
    <section id="projects" className="section-pad bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent-soft mb-3">
            04 — Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8 max-w-xl">
            Work that made it out of the notebook.
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-wrap gap-2 mb-10">
            {allTech.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-full border transition-colors ${
                  filter === tech
                    ? "bg-ink text-base border-ink"
                    : "border-line text-ink-dim hover:text-ink hover:border-ink-dim"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((project, i) => (
            <Reveal delay={i * 0.08} key={project.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass rounded-xl2 p-6 h-full flex flex-col relative overflow-hidden"
              >
                {project.featured && (
                  <span className="absolute top-5 right-5 inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-full bg-accent/20 text-accent-soft">
                    <Star size={11} /> Featured
                  </span>
                )}
                <h3 className="font-display text-lg font-semibold pr-24 mb-2">
                  {project.title}
                </h3>
                <p className="text-ink-dim text-sm leading-relaxed mb-5 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-surface-2 border border-line text-ink-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto items-center">
                  {project.github === "#" ? (
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-dim/60 font-mono text-xs">
                      <Github size={15} /> repo not public yet
                    </span>
                  ) : (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent-soft transition-colors"
                    >
                      <Github size={15} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-accent-soft transition-colors"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
