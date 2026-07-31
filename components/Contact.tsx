"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, ExternalLink, Download } from "lucide-react";
import { profile } from "@/lib/data";
import Reveal from "./Reveal";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="font-mono text-sm text-accent-soft mb-3">
            07 — Contact
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4 max-w-xl">
            Let&apos;s talk about a role.
          </h2>
          <p className="text-ink-dim mb-12 max-w-xl">
            Open to Data Analyst, Business Intelligence, and AI Automation
            roles. The fastest way to reach me is email.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass rounded-xl2 p-6 space-y-4">
              <div>
                <label htmlFor="name" className="text-xs font-mono text-ink-dim">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 w-full rounded-lg bg-surface-2 border border-line px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-mono text-ink-dim">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 w-full rounded-lg bg-surface-2 border border-line px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-mono text-ink-dim">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 w-full rounded-lg bg-surface-2 border border-line px-3.5 py-2.5 text-sm outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about the role..."
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-ink text-base px-5 py-3 text-sm font-medium hover:bg-accent-soft transition-colors"
              >
                <Mail size={15} /> Send message
              </button>
              <p className="text-[11px] text-ink-dim/70 font-mono">
                Opens your default email app to send directly.
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass rounded-xl2 p-6 h-full flex flex-col gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm hover:text-accent-soft transition-colors"
              >
                <Mail size={17} /> {profile.email}
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-accent-soft transition-colors"
              >
                <Linkedin size={17} /> LinkedIn profile
                <ExternalLink size={12} className="ml-auto text-ink-dim" />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-accent-soft transition-colors"
              >
                <Github size={17} /> GitHub profile
                <ExternalLink size={12} className="ml-auto text-ink-dim" />
              </a>
              <a
                href={profile.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-3 text-sm hover:text-accent-soft transition-colors mt-auto pt-4 border-t border-line"
              >
                <Download size={17} /> Download resume (PDF)
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
