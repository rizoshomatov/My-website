"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

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

export default function FactoryPage() {
  return (
    <main className="bg-white min-h-screen">
      <style>{`
        .p-container { max-width: 1280px; margin: 0 auto; padding: 5rem 3rem; }
        .p-container-flush { max-width: 1280px; margin: 0 auto; padding: 0 3rem; }
        .p-nav { max-width: 1280px; margin: 0 auto; padding: 1.25rem 3rem; display: flex; justify-content: space-between; align-items: center; }
        .p-hero { max-width: 1280px; margin: 0 auto; padding: 8rem 3rem 3rem; }
        .p-grid-sidebar { display: grid; grid-template-columns: 1fr 3fr; gap: 3rem; }
        .p-grid-contact { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5rem; }
        .p-grid-workshops { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; }
        @media (max-width: 768px) {
          .p-container { padding: 3rem 1.25rem; }
          .p-container-flush { padding: 0 1.25rem; }
          .p-nav { padding: 1rem 1.25rem; }
          .p-hero { padding: 5rem 1.25rem 2rem; }
          .p-grid-sidebar { grid-template-columns: 1fr; gap: 1.5rem; }
          .p-grid-contact { grid-template-columns: 1fr; gap: 2rem; }
          .p-grid-workshops { grid-template-columns: 1fr; gap: 0.75rem; }
        }
      `}</style>

      {/* Navbar */}
      <div className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-100">
        <div className="p-nav">
          <BackButton />
          <span className="text-xs font-mono tracking-widest uppercase text-gray-300">The Galactic Factory · 2026</span>
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
          <p className="text-[10px] font-mono tracking-[0.35em] uppercase text-gray-400 mb-5">
            Browser Game · Next.js · TypeScript
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
            <h1 className="text-[clamp(3.5rem,7vw,8rem)] font-bold leading-[0.88] tracking-[-0.04em] text-gray-900">
              The Galactic<br />Factory
            </h1>
            <p className="text-base text-gray-500 leading-relaxed max-w-sm pb-2">
              A browser-based 2D factory management game set on the Moon. Build workshops, manage production lines
              and manufacture rare galactic resources impossible to find anywhere else in the universe.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-gray-100 pt-6">
            <div>
              <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-gray-300 mb-0.5">Year</p>
              <p className="text-sm font-medium text-gray-700">2026</p>
            </div>
            <div className="w-px h-7 bg-gray-100" />
            <div>
              <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-gray-300 mb-0.5">Type</p>
              <p className="text-sm font-medium text-gray-700">Browser Game</p>
            </div>
            <div className="w-px h-7 bg-gray-100" />
            <div>
              <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-gray-300 mb-1.5">Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js 14", "TypeScript", "React", "CSS Modules", "REST API"].map(t => (
                  <span key={t} className="text-[10px] font-mono text-gray-400 border border-gray-100 bg-gray-50 px-2.5 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <div className="p-container-flush">

        <FadeIn className="py-20 border-b border-gray-100">
          <div className="p-grid-sidebar">
            <div>
              <p className="text-[9px] font-mono tracking-[0.35em] uppercase text-gray-400 mb-3">About the game</p>
            </div>
            <div>
              <p className="text-xl text-gray-700 leading-relaxed">
                The Galactic Factory is a strategic idle game where you manage a lunar industrial complex.
                Start with ruins and turn them into a fully operational factory.
                <strong className="text-gray-900 font-semibold"> Build. Upgrade. Produce. Dominate the galaxy.</strong>
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="py-16">
          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
            <img src="/MocFac1.png" alt="Lunar workshops mockup" className="w-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.minHeight = "300px"; (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
          <p className="text-[10px] font-mono text-gray-300 mt-3 tracking-widest uppercase">Lunar workshops — build from ruins</p>
        </FadeIn>

        <FadeIn className="py-16 border-t border-gray-100">
          <div className="p-grid-sidebar">
            <div>
              <p className="text-[9px] font-mono tracking-[0.35em] uppercase text-gray-400 mb-3">Gameplay</p>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Build, upgrade, produce</h2>
            </div>
            <div>
              <p className="text-base text-gray-500 leading-relaxed">
                Every workshop starts as a ruin. Pay to repair it and bring it online, then assign a specialist
                to boost its output. Each workshop runs one or two production lines on real-time timers —
                start a line, wait for it to complete, collect your resources. Upgrade workshops from Level 1 to
                Level 2 to unlock better visuals, higher output and new production slots. The central Factory
                building can also be leveled up, unlocking new workshops and increasing overall capacity.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="py-16">
          <div className="rounded-2xl overflow-hidden border border-gray-100 bg-gray-50">
            <img src="/MocFac2.png" alt="Production lines mockup" className="w-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).parentElement!.style.minHeight = "300px"; (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>
          <p className="text-[10px] font-mono text-gray-300 mt-3 tracking-widest uppercase">Production lines — real-time timers</p>
        </FadeIn>

        <FadeIn className="py-16 border-t border-gray-100">
          <div className="p-grid-sidebar">
            <div>
              <p className="text-[9px] font-mono tracking-[0.35em] uppercase text-gray-400 mb-3">Workshops</p>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Rare galactic resources</h2>
            </div>
            <div className="p-grid-workshops">
              {[
                { name: "Brick Workshop",  resource: "🧱 Indestructible Bricks", desc: "The foundation of your lunar empire" },
                { name: "Glue Lab",        resource: "💧 Galactic Glue",          desc: "Holds the universe together" },
                { name: "Ammo Factory",    resource: "🔫 Magic Bullets",          desc: "Enchanted ammunition forged on the Moon" },
                { name: "Gear Workshop",   resource: "⚙️ Spare Parts",            desc: "Essential components for all machinery" },
                { name: "Acorn Reactor",   resource: "☢️ Nuclear Acorns",         desc: "Mysterious energy source from deep space" },
                { name: "DNA Synthesizer", resource: "🧬 DNA Synthesis",          desc: "Advanced biological material for rare crafting" },
              ].map(w => (
                <div key={w.name} className="border border-gray-100 rounded-xl p-4 bg-gray-50/60">
                  <p className="text-xs font-semibold text-gray-700 mb-1">{w.name}</p>
                  <p className="text-sm text-gray-500 mb-1">{w.resource}</p>
                  <p className="text-[11px] text-gray-400 leading-snug">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn className="py-16 border-t border-gray-100">
          <div className="p-grid-sidebar">
            <div>
              <p className="text-[9px] font-mono tracking-[0.35em] uppercase text-gray-400 mb-3">Architecture</p>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Config-driven design</h2>
            </div>
            <div>
              <p className="text-base text-gray-500 leading-relaxed">
                All building positions, sizes, conveyor paths and UI elements are controlled through dedicated
                config files — making it easy to adjust the entire game layout without touching component logic.
                The API layer supports both live backend integration and a mock offline client, so the game
                works seamlessly even without a server connection.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="py-16 border-t border-gray-100">
          <p className="text-[9px] font-mono tracking-[0.35em] uppercase text-gray-400 mb-12 text-center">Demo</p>
          <div className="flex justify-center">
            <div style={{ position: "relative", width: "280px" }}>
              <div style={{ position: "absolute", left: "-4px", top: "80px",  width: "4px", height: "28px", background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
              <div style={{ position: "absolute", left: "-4px", top: "120px", width: "4px", height: "28px", background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
              <div style={{ position: "absolute", right: "-4px", top: "100px", width: "4px", height: "52px", background: "#3a3a3c", borderRadius: "0 2px 2px 0" }} />
              <div style={{ background: "linear-gradient(160deg, #52525a 0%, #29292e 50%, #3a3a40 100%)", borderRadius: "42px", padding: "9px", boxShadow: "0 0 0 1px #5a5a5e, 0 2px 0 0 rgba(255,255,255,0.06) inset, 0 40px 100px rgba(0,0,0,0.55)" }}>
                <div style={{ background: "#000", borderRadius: "34px", overflow: "hidden", aspectRatio: "9 / 19.5", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.07)" }}>
                  <video style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", background: "#000" }} autoPlay muted loop playsInline poster="/Fac2.png">
                    <source src="/Fac3.MP4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[10px] font-mono text-gray-300 text-center mt-8 tracking-widest uppercase">Gameplay demo</p>
        </FadeIn>

        <FadeIn className="pt-20 pb-8 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <BackButton />
            <a href="https://github.com/rizoshomatov" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs tracking-widest uppercase px-6 py-3 rounded hover:bg-gray-700 transition-colors duration-200">
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
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="p-container">
          <div className="p-grid-contact">
            <div>
              <h2 className="text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.92] tracking-[-0.03em] text-gray-900 mb-10">
                Let&apos;s build<br /><span className="text-gray-300">something.</span>
              </h2>
              <a href="mailto:rizoshomatov@gmail.com"
                className="group inline-flex items-center gap-2 bg-gray-900 text-white text-xs tracking-widest uppercase px-7 py-3.5 hover:bg-gray-700 transition-colors font-medium rounded">
                Send a message
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="group-hover:translate-x-0.5 transition-transform">
                  <path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-[9px] font-mono tracking-[0.35em] uppercase text-gray-400 mb-4">Socials</p>
                {SOCIAL.map(({ label, handle, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center py-3.5 border-b border-gray-100 hover:border-gray-300 transition-colors">
                    <span className="text-xs tracking-widest uppercase text-gray-400 group-hover:text-gray-600 transition-colors" style={{width:"120px",flexShrink:0}}>{label}</span>
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors flex-1">{handle}</span>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <path d="M1 5.5h9M5.5 1l4.5 4.5L5.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                ))}
              </div>
              <div>
                <p className="text-[9px] font-mono tracking-[0.35em] uppercase text-gray-400 mb-4">Freelance</p>
                <div className="flex gap-2 flex-wrap">
                  {FREELANCE.map(({ label, href }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="text-xs tracking-widest uppercase border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-900 px-4 py-2.5 rounded transition-all">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[10px] font-mono text-gray-300">© 2026 Rizo — All rights reserved</p>
            <p className="text-[10px] font-mono text-gray-300">Built with Next.js · Framer Motion · Tailwind CSS</p>
          </div>
        </div>
      </section>

    </main>
  );
}