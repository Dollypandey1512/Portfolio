"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % profile.roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid-fade bg-grid pt-28 pb-16"
    >
      {/* ambient lighting - desktop only for maximum mobile performance */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute -top-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-[100px] animate-float"
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute top-40 -right-16 h-80 w-80 rounded-full bg-violet/20 blur-[110px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Subheading pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/30 text-accent-soft font-mono text-xs md:text-sm mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          {profile.subheading}
        </motion.div>

        {/* Primary Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-5xl md:text-7xl font-semibold tracking-tight gradient-text"
        >
          {profile.name}
        </motion.h1>

        {/* Rotating titles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 h-10 flex items-center justify-center font-mono text-xl md:text-2xl font-medium"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={profile.roles[roleIndex]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-accent-soft font-bold"
            >
              {profile.roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal"
          style={{ color: "#ffffff" }}
        >
          {profile.headline}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group inline-flex items-center gap-2 rounded-full bg-accent text-slate-950 px-6 py-3.5 text-sm font-bold hover:bg-accent-soft transition-all shadow-lg"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold hover:bg-surface-2 transition-all"
            style={{ color: "#ffffff" }}
          >
            View Analytical Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold hover:bg-surface-2 transition-all"
            style={{ color: "#ffffff" }}
          >
            <Mail size={16} /> Contact Me
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center h-12 w-12 rounded-full glass hover:bg-surface-2 transition-all"
            style={{ color: "#ffffff" }}
          >
            <Github size={18} />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center h-12 w-12 rounded-full glass hover:bg-surface-2 transition-all"
            style={{ color: "#ffffff" }}
          >
            <Linkedin size={18} />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-300 hover:text-white transition-colors"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
