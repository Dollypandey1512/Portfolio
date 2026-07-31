# Dolly Pandey — Portfolio

A production Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion portfolio.

## Stack

- Next.js 14 (App Router, Server Components by default)
- TypeScript
- Tailwind CSS (custom dark theme tokens — see `tailwind.config.ts`)
- Framer Motion (scroll reveals, hero animation, page interactions)
- lucide-react (icons)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Before you deploy — things you need to fill in

1. **`public/resume.pdf`** — add your actual resume PDF here. The "Download Resume" buttons already link to `/resume.pdf`.
2. **`public/og-image.png`** — a 1200×630 image used for social share previews (LinkedIn/Twitter link cards). Placeholder referenced in `app/layout.tsx`; add a real image or remove the reference.
3. **Domain in `app/layout.tsx`, `public/robots.txt`, `public/sitemap.xml`** — currently set to `https://dollypandey.dev` as a placeholder. Replace with your real deployed URL once you have one (e.g. your Vercel URL or a custom domain).
4. **Profile initials avatar** — the hero uses "DP" in a circle instead of a photo. If you want a real photo, replace the div in `components/Hero.tsx` with a Next.js `<Image>` component.

## Deploying (Vercel — recommended, free)

1. Push this project to a new GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click Deploy.
4. Once deployed, update the domain references (see above) to your real Vercel URL and redeploy.

## What's intentionally NOT included

To keep this honest and shippable rather than bloated with unused scaffolding:

- **No individual case-study subpages per project.** A real case study (problem → architecture → challenges → business impact → screenshots) needs actual project detail I don't have — repo READMEs alone aren't enough to write "business impact" or "lessons learned" without inventing them. Happy to build these out with you project-by-project if you want to go deeper on 1–2 flagship projects.
- **No live GitHub contribution graph / stats API.** This needs a GitHub personal access token wired into an API route (`app/api/github/route.ts`) to avoid rate limits — doable, but it's a real backend integration decision, not a static content decision, so I left it out rather than fake it with mock data.
- **No testimonials section** — none exist yet, so it's omitted rather than left as an empty placeholder that looks incomplete.
- **Contact form has no backend.** It currently builds a `mailto:` link on submit. For a form that actually sends without opening the visitor's email client, wire it to something like [Resend](https://resend.com) or [Formspree](https://formspree.io) via an API route.

## Project structure

```
app/
  layout.tsx       — fonts, SEO metadata, JSON-LD schema
  page.tsx         — assembles all sections
  globals.css      — base styles, glass utility, reduced-motion handling
components/
  Header.tsx       — sticky glass nav
  Hero.tsx         — animated hero, typing role text
  About.tsx
  Skills.tsx
  Experience.tsx   — timeline
  Projects.tsx     — filterable, featured badges
  Certifications.tsx
  Achievements.tsx
  Contact.tsx
  Footer.tsx
  ScrollProgress.tsx, CursorSpotlight.tsx, BackToTop.tsx, Reveal.tsx — shared UI/motion utilities
lib/
  data.ts          — all content (edit this file to update copy without touching components)
public/
  robots.txt, sitemap.xml
```

To update any content (experience bullets, project descriptions, skills), edit `lib/data.ts` — nothing else needs to change.
