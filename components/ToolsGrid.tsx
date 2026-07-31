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
  Python: <Terminal size={20} className="text-yellow-400" />,
  SQL: <Database size={20} className="text-sky-400" />,
  "Power BI": <BarChart2 size={20} className="text-amber-400" />,
  Tableau: <LineChart size={20} className="text-blue-400" />,
  Excel: <FileSpreadsheet size={20} className="text-emerald-400" />,
  Git: <GitBranch size={20} className="text-orange-400" />,
  GitHub: <Github size={20} className="text-slate-200" />,
  ChatGPT: <Bot size={20} className="text-teal-400" />,
  Claude: <Brain size={20} className="text-amber-300" />,
  Cursor: <Sparkles size={20} className="text-purple-400" />,
  OpenAI: <Cpu size={20} className="text-green-400" />,
  "Google Analytics": <LineChart size={20} className="text-orange-400" />,
  "Google Search Console": <Search size={20} className="text-blue-400" />,
  MySQL: <Server size={20} className="text-cyan-400" />,
  AWS: <Cloud size={20} className="text-amber-400" />,
  Azure: <Cloud size={20} className="text-sky-400" />,
  n8n: <Workflow size={20} className="text-pink-400" />,
};

export default function ToolsGrid() {
  return (
    <div className="mt-16 pt-12 border-t border-line/60">
      <Reveal>
        <p className="font-mono text-sm text-accent-soft mb-2">
          Tools & Ecosystem
        </p>
        <h3 className="font-display text-2xl font-semibold tracking-tight mb-8">
          Analytical & Automation Toolkit
        </h3>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {toolsList.map((tool, i) => (
          <Reveal delay={i * 0.04} key={tool.name}>
            <div className="glass rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-accent/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group">
              <div className="h-10 w-10 rounded-lg bg-surface-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                {toolIcons[tool.name] || <Database size={20} className="text-accent-soft" />}
              </div>
              <span className="font-display text-sm font-medium text-ink group-hover:text-accent-soft transition-colors">
                {tool.name}
              </span>
              <span className="font-mono text-[10px] text-ink-dim">
                {tool.category}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
