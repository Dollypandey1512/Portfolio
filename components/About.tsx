import { profile, stats } from "@/lib/data";
import Reveal from "./Reveal";
import { Award, BarChart3, Binary, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent-soft mb-3">01 — About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12 max-w-2xl">
            Bridging raw business data and executive decision-making.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div className="space-y-5 text-base md:text-lg leading-relaxed" style={{ color: "#ffffff" }}>
            <Reveal delay={0.1}>
              <p>
                I am a Data Analyst holding an{" "}
                <strong className="font-bold" style={{ color: "#ffffff" }}>
                  Executive PG Programme in Data Science & AI from IIIT Bangalore (GPA 3.8/4.0)
                </strong>{" "}
                and a background rooted in analytical problem-solving. I specialize in turning complex, unorganized datasets into clear, actionable business strategies.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                During my analytics internship at <strong className="font-bold" style={{ color: "#ffffff" }}>Devot AI</strong>, I managed digital KPI tracking, analyzed lead conversion funnels across 12+ content clusters, and engineered automated ETL data pipelines using n8n and SQL. I also leveraged AI automation tools (Smartlead AI, LLMs) to streamline operational workflows and eliminate manual reporting overhead.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                My core strength lies in combining rigorous data analysis (SQL, Python, statistical testing) with intuitive data visualization (Power BI, Tableau) to communicate insights that non-technical stakeholders can immediately measure and execute on.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <div className="pt-4 grid grid-cols-2 gap-4 text-sm font-mono">
                <div className="flex items-center gap-2 text-white">
                  <BarChart3 size={16} className="text-accent-soft" />
                  <span>SQL & Power BI Expert</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <BrainCircuit size={16} className="text-accent-soft" />
                  <span>AI Workflow Automation</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Award size={16} className="text-accent-soft" />
                  <span>IIIT-B Data Science (3.8 GPA)</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <Binary size={16} className="text-accent-soft" />
                  <span>KPI & Funnel Analytics</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {stats.map((stat, i) => (
              <Reveal delay={0.15 + i * 0.1} key={stat.label}>
                <div className="glass rounded-xl2 p-6 border-l-4 border-accent hover:shadow-glow transition-all">
                  <div className="font-display text-3xl font-bold text-accent-soft">
                    {stat.value}
                  </div>
                  <div className="text-sm mt-2 font-mono leading-snug" style={{ color: "#ffffff" }}>
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
