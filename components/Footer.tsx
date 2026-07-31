import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-dim font-mono">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>Data Analyst &amp; Business Intelligence Portfolio</span>
      </div>
    </footer>
  );
}
