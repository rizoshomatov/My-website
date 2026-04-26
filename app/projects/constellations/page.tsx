"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const saved = localStorage.getItem("rizo-theme") as "light" | "dark" | null;
    const t = saved === "dark" ? "dark" : "light";
    setTheme(t);
    document.documentElement.setAttribute("data-theme", t);
  }, []);
  return theme;
}

const SOCIAL = [
  { label: "GitHub",      handle: "@rizoshomatov",          href: "https://github.com/rizoshomatov" },
  { label: "Email",       handle: "rizoshomatov@gmail.com", href: "mailto:rizoshomatov@gmail.com" },
  { label: "Twitter / X", handle: "@1_rizo51823",           href: "https://x.com/1_rizo51823" },
  { label: "Telegram",    handle: "@haze_mr",               href: "https://t.me/haze_mr" },
];

const FREELANCE = [
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~014af87ff0ce5ec169?mp_source=share" },
  { label: "Kwork",  href: "https://kwork.ru/user/rizzzo" },
  { label: "Fiverr", href: "https://www.fiverr.com/s/pd1KmgY" },
];

function BackButton() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors duration-200">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:-translate-x-0.5 transition-transform duration-200">
        <path d="M12.5 7H1.5M6.5 2L1.5 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Back to portfolio
    </Link>
  );
}

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

export default function ConstellationsPage() {
  useTheme();
  return (
    <main style={{ background: "var(--c-bg-primary)", color: "var(--c-text-primary)", minHeight: "100vh", transition: "background 0.4s ease, color 0.4s ease" }}>
      <style>{`
        :root, [data-theme="light"] {
          --c-bg-primary: #ffffff; --c-bg-secondary: #f9fafb;
          --c-nav-bg: rgba(255,255,255,0.85);
          --c-card-bg: #f9fafb; --c-card-border: #f3f4f6;
          --c-text-primary: #111827; --c-text-secondary: #374151;
          --c-text-muted: #9ca3af; --c-text-faint: #d1d5db;
          --c-border: #e5e7eb; --c-border-light: #f3f4f6;
          --c-btn-bg: #111827; --c-btn-text: #ffffff; --c-btn-hover: #374151;
          --c-tag-bg: #f9fafb; --c-tag-border: #f3f4f6;
          --c-contact-bg: #f9fafb; --c-contact-border: #f3f4f6;
          --c-divider: #f3f4f6;
        }
        [data-theme="dark"] {
          --c-bg-primary: #0f0f0f; --c-bg-secondary: #1a1a1a;
          --c-nav-bg: rgba(15,15,15,0.85);
          --c-card-bg: #1a1a1a; --c-card-border: #2a2a2a;
          --c-text-primary: #f0f0f0; --c-text-secondary: #a0a0a0;
          --c-text-muted: #666666; --c-text-faint: #3a3a3a;
          --c-border: #2a2a2a; --c-border-light: #222222;
          --c-btn-bg: #f0f0f0; --c-btn-text: #0f0f0f; --c-btn-hover: #cccccc;
          --c-tag-bg: #1a1a1a; --c-tag-border: #2a2a2a;
          --c-contact-bg: #1a1a1a; --c-contact-border: #222222;
          --c-divider: #222222;
        }
        * { transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; }
        .p-container { max-width: 1280px; margin: 0 auto; padding: 5rem 3rem; }
        .p-container-flush { max-width: 1280px; margin: 0 auto; padding: 0 3rem; }
        .p-nav { max-width: 1280px; margin: 0 auto; padding: 1.25rem 3rem; display: flex; justify-content: space-between; align-items: center; }
        .p-hero { max-width: 1280px; margin: 0 auto; padding: 8rem 3rem 3rem; }
        .p-grid-sidebar { display: grid; grid-template-columns: 1fr 3fr; gap: 3rem; }
        .p-grid-contact { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5rem; }
        @media (max-width: 768px) {
          .p-container { padding: 3rem 1.25rem; }
          .p-container-flush { padding: 0 1.25rem; }
          .p-nav { padding: 1rem 1.25rem; }
          .p-hero { padding: 5rem 1.25rem 2rem; }
          .p-grid-sidebar { grid-template-columns: 1fr; gap: 1.5rem; }
          .p-grid-contact { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      {/* Navbar */}
      <div className="fixed top-0 inset-x-0 z-50 backdrop-blur-md" style={{ background: "var(--c-nav-bg)", borderBottom: "1px solid var(--c-border-light)" }}>
        <div className="p-nav">
          <BackButton />
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--c-text-faint)" }}>12 Constellations · 2024</span>
        </div>
      </div>

      {/* Hero */}
      <section>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="p-hero"
        >
          <p className="text-[10px] font-mono tracking-[0.35em] uppercase mb-5" style={{ color: "var(--c-text-muted)" }}>
            Frontend Development · Interactive Experience
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <h1 className="text-[clamp(3.5rem,7vw,8rem)] font-bold leading-[0.88] tracking-[-0.04em]" style={{ color: "var(--c-text-primary)" }}>
              12<br />Constellations
            </h1>
            <p className="text-base leading-relaxed max-w-sm pb-2" style={{ color: "var(--c-text-secondary)" }}>
              A high-performance interactive system featuring the 12 zodiac constellations with detailed descriptions,
              star-by-star animations, and a dynamic deep-space environment.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 pt-6" style={{ borderTop: "1px solid var(--c-border-light)" }}>
            <div>
              <p className="text-[9px] font-mono tracking-[0.3em] uppercase mb-0.5" style={{ color: "var(--c-text-faint)" }}>Year</p>
              <p className="text-sm font-medium" style={{ color: "var(--c-text-secondary)" }}>2024</p>
            </div>
            <div className="w-px h-7" style={{ background: "var(--c-border-light)" }} />
            <div>
              <p className="text-[9px] font-mono tracking-[0.3em] uppercase mb-0.5" style={{ color: "var(--c-text-faint)" }}>Type</p>
              <p className="text-sm font-medium" style={{ color: "var(--c-text-secondary)" }}>Interactive Experience</p>
            </div>
            <div className="w-px h-7" style={{ background: "var(--c-border-light)" }} />
            <div>
              <p className="text-[9px] font-mono tracking-[0.3em] uppercase mb-1.5" style={{ color: "var(--c-text-faint)" }}>Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {["JavaScript ES6+", "TypeScript", "Canvas API", "Procedural Animation"].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full" style={{ color: "var(--c-text-muted)", border: "1px solid var(--c-tag-border)", background: "var(--c-tag-bg)" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <div className="p-container-flush">

        <FadeIn className="py-20" style={{ borderBottom: "1px solid var(--c-border-light)" }}>
          <div className="p-grid-sidebar">
            <div>
              <p className="text-[9px] font-mono tracking-[0.35em] uppercase mb-3" style={{ color: "var(--c-text-muted)" }}>Overview</p>
            </div>
            <div>
              <p className="text-xl leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>
                A high-performance interactive system featuring the 12 zodiac constellations with precise star positioning,
                individual star animations, and technical descriptions.
                <strong style={{ color: "var(--c-text-primary)", fontWeight: 600 }}> A procedurally animated star-field environment creates a fully immersive deep-space experience.</strong>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="py-16">
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--c-card-border)", background: "var(--c-card-bg)" }}>
            <img src="/MocSoz1.png" alt="12 Constellations — star field view" className="w-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.minHeight = "300px"; (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
          <p className="text-[10px] font-mono mt-3 tracking-widest uppercase" style={{ color: "var(--c-text-faint)" }}>GLSL star field — procedural generation</p>
        </FadeIn>

        <FadeIn className="py-16" style={{ borderTop: "1px solid var(--c-border-light)" }}>
          <div className="p-grid-sidebar">
            <div>
              <p className="text-[9px] font-mono tracking-[0.35em] uppercase mb-3" style={{ color: "var(--c-text-muted)" }}>Constellation Engine</p>
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--c-text-primary)" }}>12-Zodiac Visualization</h2>
            </div>
            <div>
              <p className="text-base leading-relaxed" style={{ color: "var(--c-text-secondary)" }}>
                The core engine renders all 12 zodiac constellations with precise star positioning across the sky.
                Each star features individual animations and detailed technical descriptions. The dynamic background
                is a procedurally animated star-field that responds to user interaction — creating a convincing
                sense of depth and immersion in deep space.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="py-16">
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--c-card-border)", background: "var(--c-card-bg)" }}>
            <img src="/MocSoz2.png" alt="12 Constellations — constellation detail" className="w-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.minHeight = "300px"; (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
          <p className="text-[10px] font-mono mt-3 tracking-widest uppercase" style={{ color: "var(--c-text-faint)" }}>Constellation lines — animated reveal</p>
        </FadeIn>

        <FadeIn className="py-16" style={{ borderTop: "1px solid var(--c-border-light)" }}>
          <div className="p-grid-sidebar">
            <div>
              <p className="text-[9px] font-mono tracking-[0.35em] uppercase mb-3" style={{ color: "var(--c-text-muted)" }}>Exploration Modes</p>
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--c-text-primary)" }}>Three ways to explore</h2>
            </div>
            <div>
              <div className="space-y-6">
                <div className="rounded-xl p-5" style={{ border: "1px solid var(--c-card-border)", background: "var(--c-card-bg)" }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: "var(--c-text-secondary)" }}>Star Study Mode</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-muted)" }}>In-depth focus on individual stellar objects — each star has its own animation sequence and technical data panel.</p>
                </div>
                <div className="rounded-xl p-5" style={{ border: "1px solid var(--c-card-border)", background: "var(--c-card-bg)" }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: "var(--c-text-secondary)" }}>Constellation Mode</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-muted)" }}>Specialized view for studying specific star patterns, their mythology, and positional data within the zodiac.</p>
                </div>
                <div className="rounded-xl p-5" style={{ border: "1px solid var(--c-card-border)", background: "var(--c-card-bg)" }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: "var(--c-text-secondary)" }}>Zodiac Circle Mode</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--c-text-muted)" }}>A comprehensive 360-degree view of the entire 12-constellation system rendered in a single interactive canvas.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="py-16">
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--c-card-border)", background: "var(--c-card-bg)" }}>
            <img src="/MocSoz3.png" alt="12 Constellations — parallax detail" className="w-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.minHeight = "300px"; (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
          <p className="text-[10px] font-mono mt-3 tracking-widest uppercase" style={{ color: "var(--c-text-faint)" }}>Mouse parallax — depth illusion</p>
        </FadeIn>

        <FadeIn className="py-16" style={{ borderTop: "1px solid var(--c-border-light)" }}>
          <div className="p-grid-sidebar">
            <div>
              <p className="text-[9px] font-mono tracking-[0.35em] uppercase mb-3" style={{ color: "var(--c-text-muted)" }}>Technical Excellence</p>
              <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--c-text-primary)" }}>Built for performance</h2>
            </div>
            <div>
              <p className="text-base leading-relaxed mb-6" style={{ color: "var(--c-text-secondary)" }}>
                Smooth transitions between all three exploration modes run at a stable 60 FPS.
                The modular architecture allows seamless data updates and state management across the entire system.
                High-resolution asset handling ensures visual fidelity on Retina displays and modern browsers.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["60 FPS Rendering", "Retina Ready", "Modular Architecture", "Math-based Animations", "ES6+ Modules"].map(t => (
                  <span key={t} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full" style={{ color: "var(--c-text-muted)", border: "1px solid var(--c-tag-border)", background: "var(--c-tag-bg)" }}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="py-16 border-t border-gray-100">
          <p className="text-[9px] font-mono tracking-[0.35em] uppercase mb-12 text-center" style={{ color: "var(--c-text-muted)" }}>Demo</p>
          <div className="rounded-2xl overflow-hidden border-2 bg-gray-950" style={{ borderColor: "var(--c-border)" }}>
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-3 text-[10px] font-mono text-gray-500 tracking-widest uppercase">12 Constellations · Interactive Demo</span>
            </div>
            <video className="w-full" autoPlay muted loop playsInline>
              <source src="/Soz5.MP4" type="video/mp4" />
            </video>
          </div>
          <p className="text-[10px] font-mono text-center mt-4 tracking-widest uppercase" style={{ color: "var(--c-text-faint)" }}>Full interactive demo</p>
        </FadeIn>

        <FadeIn className="pt-20 pb-8" style={{ borderTop: "1px solid var(--c-border-light)" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <BackButton />
            <a href="https://github.com/rizoshomatov" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-6 py-3 rounded transition-colors duration-200"
              style={{ background: "var(--c-btn-bg)", color: "var(--c-btn-text)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>
        </FadeIn>

        <div className="h-24" />
      </div>

      {/* Contacts */}
      <section style={{ background: "var(--c-bg-secondary)", borderTop: "1px solid var(--c-border-light)" }}>
        <div className="p-container">
          <div className="p-grid-contact">
            <div>
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.92] tracking-[-0.03em] mb-10" style={{ color: "var(--c-text-primary)" }}>
                Let&apos;s build<br /><span style={{ color: "var(--c-text-faint)" }}>something.</span>
              </h2>
              <a href="mailto:rizoshomatov@gmail.com"
                className="group inline-flex items-center gap-2 text-xs tracking-widest uppercase px-7 py-3.5 transition-colors font-medium rounded"
                style={{ background: "var(--c-btn-bg)", color: "var(--c-btn-text)" }}>
                Send a message
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-[9px] font-mono tracking-[0.35em] uppercase mb-4" style={{ color: "var(--c-text-muted)" }}>Socials</p>
                {SOCIAL.map(({ label, handle, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center py-3.5 transition-colors"
                    style={{ borderBottom: "1px solid var(--c-border-light)" }}>
                    <span className="text-xs tracking-widest uppercase transition-colors" style={{ color: "var(--c-text-muted)", width: "120px", flexShrink: 0 }}>{label}</span>
                    <span className="text-sm transition-colors flex-1" style={{ color: "var(--c-text-secondary)" }}>{handle}</span>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <path d="M1 5.5h9M5.5 1l4.5 4.5L5.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ))}
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.35em] uppercase mb-4" style={{ color: "var(--c-text-muted)" }}>Freelance</p>
                <div className="flex gap-2 flex-wrap">
                  {FREELANCE.map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="text-xs tracking-widest uppercase px-4 py-2.5 rounded transition-all"
                      style={{ border: "1px solid var(--c-border)", color: "var(--c-text-secondary)" }}>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-3" style={{ borderTop: "1px solid var(--c-border-light)" }}>
            <p className="text-[10px] font-mono" style={{ color: "var(--c-text-faint)" }}>© 2026 Rizo — All rights reserved</p>
            <p className="text-[10px] font-mono" style={{ color: "var(--c-text-faint)" }}>Built with Next.js · Framer Motion · Tailwind CSS</p>
          </div>
        </div>
      </section>

    </main>
  );
}