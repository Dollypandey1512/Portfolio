"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 mt-4">
        <div className="glass rounded-full px-5 py-3 flex items-center justify-between shadow-glass">
          <a href="#top" className="font-display font-semibold text-sm tracking-tight">
            dolly<span className="text-accent-soft">.</span>pandey
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm text-ink-dim">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="text-sm font-medium bg-ink text-base px-4 py-2 rounded-full hover:bg-accent-soft transition-colors"
            >
              Hire me
            </a>
          </div>

          <button
            className="md:hidden text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="glass mt-2 rounded-2xl p-4 flex flex-col gap-3 text-sm md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-ink-dim hover:text-ink transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
