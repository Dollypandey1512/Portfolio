"use client";

import Reveal from "./Reveal";
import { toolsList } from "@/lib/data";
import {
  Database,
  BarChart2,
  FileSpreadsheet,
  GitBranch,
  Github,
  Bot,
  Brain,
  Sparkles,
  LineChart,
  Search,
  Server,
  Cloud,
  Workflow,
  Terminal,
  Cpu,
} from "lucide-react";

const toolIcons: Record<string, React.ReactNode> = {
  Python: <Terminal size={22} className="text-yellow-400" />,
  SQL: <Database size={22} className="text-sky-400" />,
  "Power BI": <BarChart2 size={22} className="text-amber-400" />,
  Tableau: <LineChart size={22} className="text-blue-400" />,
  Excel: <FileSpreadsheet size={22} className="text-emerald-400" />,
  Git: <GitBranch size={22} className="text-orange-400" />,
  GitHub: <Github size={22} className="text-slate-100" />,
  ChatGPT: <Bot size={22} className="text-teal-400" />,
  Claude: <Brain size={22} className="text-amber-300" />,
  Cursor: <Sparkles size={22} className="text-purple-400" />,
  OpenAI: <Cpu size={22} className="text-emerald-400" />,
  "Google Analytics": <LineChart size={22} className="text-orange-400" />,
  "Google Search Console": <Search size={22} className="text-blue-400" />,
  MySQL: <Server size={22} className="text-cyan-400" />,
  AWS: <Cloud size={22} className="text-amber-400" />,
  Azure: <Cloud size={22} className="text-sky-400" />,
  n8n: <Workflow size={22} className="text-pink-400" />,
};

export default function ToolsGrid() {
  return (
    <div className="mt-16 pt-12 border-t border-line">
      <Reveal>
        <div className="space-y-2 mb-8">
          <span className="font-mono text-xs text-accent-soft font-semibold uppercase tracking-wider block">
            Analytical & Automation Ecosystem
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white">
            Tools & Platform Proficiency
          </h3>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {toolsList.map((tool, i) => (
          <Reveal delay={i * 0.03} key={tool.name}>
            <div className="glass rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2.5 border border-line/80 hover:border-accent/60 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 bg-surface-2/70 group cursor-default">
              <div className="h-11 w-11 rounded-xl bg-surface border border-line flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                {toolIcons[tool.name] || <Database size={22} className="text-accent-soft" />}
              </div>
              <span className="font-display text-sm font-bold text-white group-hover:text-accent-soft transition-colors">
                {tool.name}
              </span>
              <span className="font-mono text-[10px] text-slate-300 font-medium px-2 py-0.5 rounded bg-surface border border-line/60">
                {tool.category}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
