"use client";

import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

// ─── Theme Context ────────────────────────────────────────────────────────────
type Theme = "light" | "dark";
const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({ theme: "light", toggle: () => {} });
const useTheme = () => useContext(ThemeCtx);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("rizo-theme") as Theme | null;
    if (saved === "dark" || saved === "light") setTheme(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("rizo-theme", theme);
  }, [theme, mounted]);

  const toggle = useCallback(() => setTheme(t => t === "light" ? "dark" : "light"), []);

  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>;
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const FRONTEND_PROJECTS = [
  {
    id: "game",
    slug: "factory",
    title: "Factory Game",
    subtitle: "Browser-based factory builder",
    description:
      "Deterministic simulation engine with entity-component architecture. Real-time resource flow graphs, WebWorker-powered tick loop, GLSL-rendered conveyor belts. Built entirely in TypeScript without any game engine.",
    tags: ["TypeScript", "ECS", "WebGL", "WebWorkers", "GLSL"],
    cover: "/Fac2.png",
    year: "2024",
  },
  {
    id: "constellations",
    slug: "constellations",
    title: "12 Constellations",
    subtitle: "Interactive star map experience",
    description:
      "Real-time procedural sky renderer with accurate constellation data. GLSL star field, mouse-driven parallax, animated constellation lines with custom Lottie transitions.",
    tags: ["Three.js", "GLSL", "Lottie", "React"],
    cover: "/Soz1.png",
    year: "2024",
  },
];

const ANIMATION_WORKS = [
  { title: "Family Road Trip",         type: "3D Animation",  src: "/3DFam.MP4",    desc: "3D animated family road trip scene" },
  { title: "Angel & Demon",            type: "3D Animation",  src: "/AD.MP4",       desc: "Creative concept — Angel vs Demon" },
  { title: "Cinematic Trailer",        type: "3D Animation",  src: "/Z.MP4",        desc: "Large-scale trailer, university project" },
  { title: "Deadpool vs Wolverine",    type: "2D Animation",  src: "/2DF.MP4",      desc: "2D animated fight scene" },
  { title: "UU Logo Reveal",           type: "Logo Animation", src: "/logoUU.MP4",  desc: "Animated logo reveal for UU" },
  { title: "Palm Logo Reveal",         type: "Logo Animation", src: "/PalmLogo.MP4", desc: "Animated logo reveal for Palm" },
  { title: "Able Logo Reveal",         type: "Logo Animation", src: "/Able.MP4",    desc: "Animated logo reveal for Able" },
  { title: "SaaS Product Promo",       type: "B2B Promo",      src: "/Saas1.MP4",   desc: "Promotional video for B2B app presentation" },
];

// ┌─────────────────────────────────────────────────────────────────────┐
// │  НАСТРОЙКИ ФОТОГРАФИЙ В СЕКЦИИ DESIGN                              │
// │                                                                     │
// │  scale   — масштаб изображения: 1 = 100%, 1.2 = 120%, 0.8 = 80%   │
// │  offsetX — сдвиг по горизонтали в пикселях: + вправо, - влево      │
// │  offsetY — сдвиг по вертикали в пикселях:   + вниз,   - вверх      │
// │  fit     — "cover" = заполнить (обрезает края)                      │
// │            "contain" = показать целиком (без обрезки)               │
// └─────────────────────────────────────────────────────────────────────┘
const DESIGN_WORKS = [
  { title: "Cosmo Game",         type: "Web Game Design",  src: "/Cosmo.png",   scale: 1,    offsetX: 0,  offsetY: 0,  fit: "cover" as const   },
  { title: "Statistical Application", type: "UX/UI Design",     src: "/Ux2.png",     scale: 1.1,  offsetX: 0,  offsetY: 0,  fit: "cover" as const   },
  { title: "Diverse App",        type: "App Design",       src: "/dia.png?v=2", scale: 0.95, offsetX: 0,  offsetY: 0,  fit: "contain" as const },
];

// ┌─────────────────────────────────────────────────────────────────────┐
// │  НАСТРОЙКИ ОТСТУПОВ ЗАГОЛОВКОВ РАЗДЕЛОВ                            │
// │                                                                     │
// │  marginBottom — отступ между заголовком и карточками (вниз)        │
// │  Больше цифра = заголовок дальше от карточек                        │
// │  Меньше цифра = заголовок ближе к карточкам                         │
// └─────────────────────────────────────────────────────────────────────┘
const SECTION_HEADER = {
  frontendMarginBottom: 20,   // px — отступ под заголовком "Frontend Development"
  animationMarginBottom: 20,  // px — отступ под заголовком "Animation"
  designMarginBottom: 20,     // px — отступ под заголовком "Design"
  contactMarginBottom: 40,    // px — отступ под заголовком "Contact"
};

const SOCIAL = [
  { label: "GitHub", handle: "@rizoshomatov", href: "https://github.com/rizoshomatov" },
  { label: "Email", handle: "rizoshomatov@gmail.com", href: "mailto:rizoshomatov@gmail.com" },
  { label: "Twitter / X", handle: "@Rizo1418575", href: "https://x.com/Rizo1418575" },
  { label: "Telegram", handle: "@haze_mr", href: "https://t.me/haze_mr" },
];

const FREELANCE = [
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~014af87ff0ce5ec169?mp_source=share" },
  { label: "Kwork", href: "https://kwork.ru/user/rizzzo" },
  { label: "Fiverr", href: "https://www.fiverr.com/r_shomatov" },
];

// ─── Speech Bubble ────────────────────────────────────────────────────────────
const BUBBLE_MESSAGES = [
  "Hi there! 👋",
  "My name is Rizo.",
  "Welcome to my portfolio site!",
  "I'd love to help you.",
  "You can reach me via the contacts at the bottom of the page.",
  "Let's build something. 🚀",
];

function SpeechBubble() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"hidden" | "typing" | "pause" | "fadeout">("hidden");
  const [opacity, setOpacity] = useState(0);

  // Запуск / перезапуск цикла
  const startCycle = () => {
    setMsgIndex(0);
    setDisplayed("");
    setPhase("typing");
    setOpacity(1);
  };

  // Первый запуск
  useEffect(() => {
    const t = setTimeout(startCycle, 1400);
    return () => clearTimeout(t);
  }, []);

  // Машина состояний
  useEffect(() => {
    if (phase === "typing") {
      const full = BUBBLE_MESSAGES[msgIndex];
      if (displayed.length < full.length) {
        const t = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 45);
        return () => clearTimeout(t);
      } else {
        // Текст напечатан — пауза перед следующим
        const isLast = msgIndex === BUBBLE_MESSAGES.length - 1;
        const t = setTimeout(() => setPhase(isLast ? "fadeout" : "pause"), isLast ? 3000 : 1600);
        return () => clearTimeout(t);
      }
    }
    if (phase === "pause") {
      // Смена на следующее сообщение
      const t = setTimeout(() => {
        setDisplayed("");
        setMsgIndex(i => i + 1);
        setPhase("typing");
      }, 350);
      return () => clearTimeout(t);
    }
    if (phase === "fadeout") {
      // Плавно скрываем
      setOpacity(0);
      // Через 10 сек перезапускаем
      const t = setTimeout(startCycle, 10000);
      return () => clearTimeout(t);
    }
  }, [phase, displayed, msgIndex]);

  // Хвостик — позиция настраивается через tailX / tailY в пикселях
  const tail = (cfg: { tailX: number; tailY: number }) => {
    return (
      <>
        {/* Внешний треугольник (обводка) */}
        <div style={{
          position: "absolute",
          bottom: -cfg.tailY,
          left: cfg.tailX,
          width: 0, height: 0,
          borderLeft: "9px solid transparent",
          borderRight: "9px solid transparent",
          borderTop: `${cfg.tailY}px solid var(--c-bubble-border)`,
        }} />
        {/* Внутренний треугольник (заливка) */}
        <div style={{
          position: "absolute",
          bottom: -(cfg.tailY - 3),
          left: cfg.tailX + 2,
          width: 0, height: 0,
          borderLeft: "7px solid transparent",
          borderRight: "7px solid transparent",
          borderTop: `${cfg.tailY - 2}px solid var(--c-bubble-bg)`,
        }} />
      </>
    );
  };

  return (
    <div className="rizo-bubble-wrap" style={{ opacity, transition: "opacity 0.6s ease" }}>
      <motion.div
        initial={{ scale: 0.7, y: 10 }}
        animate={{ scale: phase !== "hidden" ? 1 : 0.7, y: phase !== "hidden" ? 0 : 10 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: "none" }}
      >
        <div style={{
          background: "var(--c-bubble-bg)",
          border: "2px solid var(--c-bubble-border)",
          borderRadius: "18px",
          padding: "10px 16px",
          minWidth: 180,
          maxWidth: 240,
          boxShadow: "3px 3px 0px var(--c-bubble-border)",
          position: "relative",
        }}>
          <p style={{
            fontSize: 14, fontWeight: 600, color: "var(--c-bubble-border)",
            lineHeight: 1.4, minHeight: 20, fontFamily: "inherit",
          }}>
            {displayed}
            <span style={{
              display: "inline-block", width: 2, height: 14,
              background: "var(--c-bubble-border)", marginLeft: 2, verticalAlign: "middle",
              animation: "rizo-blink 0.7s steps(1) infinite",
            }} />
          </p>
          {/* Хвостик — desktop */}
          <div className="rizo-tail-desktop">{tail(BUBBLE_DESKTOP)}</div>
          {/* Хвостик — mobile */}
          <div className="rizo-tail-mobile">{tail(BUBBLE_MOBILE)}</div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rizo-nav"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.3s",
        background: scrolled ? "var(--c-nav-scrolled)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <div className="rizo-nav-inner">
        <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: "0.05em", color: "var(--c-text-primary)" }}>Rizo</span>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div className="hidden md:flex gap-6">
            {[["Work", "#frontend"], ["Animation", "#animation"], ["Design", "#design"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--c-text-muted)", transition: "color 0.2s", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--c-text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--c-text-muted)")}>{l}</a>
            ))}
          </div>
          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
              width: 36, height: 36, borderRadius: "50%",
              border: "1px solid var(--c-border)",
              background: "var(--c-card-bg)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.3s",
              color: "var(--c-text-secondary)",
              fontSize: 16,
            }}
          >
            {theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

// ┌─────────────────────────────────────────────────────────────────────┐
// │  НАСТРОЙКИ ФОТО — ГОРИЗОНТАЛЬ (desktop, > 768px)                   │
// └─────────────────────────────────────────────────────────────────────┘
const PHOTO_DESKTOP = {
  width:       500,   // px — ширина фото
  height:      620,   // px — высота фото
  right:         0,   // px — отступ от правого края контейнера
  bottom:      1,   // px — смещение вниз от нижней линии (минус = вверх над линией)
};

// ┌─────────────────────────────────────────────────────────────────────┐
// │  НАСТРОЙКИ ФОТО — ВЕРТИКАЛЬ (mobile, ≤ 768px)                      │
// └─────────────────────────────────────────────────────────────────────┘
const PHOTO_MOBILE = {
  width:       300,   // px — ширина фото
  height:      220,   // px — высота фото
  left:          -85,   // px — отступ от левого края
  marginBottom:  0,   // px — отступ снизу (до строки Creative Technologist)
};

// ┌─────────────────────────────────────────────────────────────────────┐
// │  НАСТРОЙКИ РАЗДЕЛА ABOUT                                           │
// └─────────────────────────────────────────────────────────────────────┘
const ABOUT = {
  marginTopDesktop: 80,   // px — отступ сверху на горизонтали
  marginTopMobile:  40,   // px — отступ сверху на вертикали
};

// ┌─────────────────────────────────────────────────────────────────────┐
// │  НАСТРОЙКИ ПУЗЫРЯ — ГОРИЗОНТАЛЬ (desktop, > 768px)                 │
// └─────────────────────────────────────────────────────────────────────┘
const BUBBLE_DESKTOP = {
  x:      1005,  // px — позиция пузыря: больше = правее, меньше = левее
  y:         -20,  // px — позиция пузыря: больше = ниже,   меньше = выше
  scale:   1,  // масштаб: 1.0 = обычный, 1.2 = крупнее, 0.8 = мельче
  tailX:    10,  // px — горизонтальное смещение хвостика от ЛЕВОГО края пузыря (18 = ровно у угла скругления)
  tailY:    15,  // px — высота хвостика (насколько выступает вниз из пузыря)
};

// ┌─────────────────────────────────────────────────────────────────────┐
// │  НАСТРОЙКИ ПУЗЫРЯ — ВЕРТИКАЛЬ (mobile, ≤ 768px)                    │
// └─────────────────────────────────────────────────────────────────────┘
const BUBBLE_MOBILE = {
  x:      100,   // px — позиция пузыря: больше = правее, меньше = левее
  y:       40,   // px — позиция пузыря: больше = ниже,   меньше = выше
  scale:  0.80,  // масштаб: 1.0 = обычный, 1.2 = крупнее, 0.8 = мельче
  tailX:    10,  // px — горизонтальное смещение хвостика от ЛЕВОГО края пузыря (18 = ровно у угла скругления)
  tailY:    15,  // px — высота хвостика (насколько выступает вниз из пузыря)
};

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "var(--c-bg-primary)" }}>
      <div className="rizo-hero-inner">

        {/* Фрейм — относительно него позиционируется фото на десктопе */}
        <div style={{ position: "relative" }}>

          {/* РЕЧЕВОЙ ПУЗЫРЬ */}
          <SpeechBubble />

          {/* ФОТО */}
          <motion.img
            src="/без.png"
            alt="Rizo"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            style={{
              // Десктопные стили (мобильные переопределяются через <style> ниже)
              position: "absolute",
              right:  PHOTO_DESKTOP.right,
              bottom: PHOTO_DESKTOP.bottom,
              width:  PHOTO_DESKTOP.width,
              height: PHOTO_DESKTOP.height,
              objectFit: "contain",
              objectPosition: "bottom center",
              filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.10))",
              pointerEvents: "none",
            }}
            className="rizo-photo"
          />

          {/* ТЕКСТ */}
          <div style={{ maxWidth: "55%" }} className="rizo-text-wrap">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="font-mono"
              style={{ fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--c-text-muted)", paddingTop: 20, paddingBottom: 20 }}
            >
              Creative Technologist · Available for work
            </motion.p>

            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="font-bold"
                style={{ fontSize: "clamp(4rem,11vw,9rem)", lineHeight: 0.9, letterSpacing: "-0.04em", color: "var(--c-text-primary)" }}
              >
                Rizo
              </motion.h1>
            </div>

            <div className="overflow-hidden mb-8">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
                className="font-light"
                style={{ fontSize: "clamp(1rem,3vw,2rem)", color: "var(--c-text-muted)", letterSpacing: "-0.025em" }}
              >
                Frontend · Animation · GameDev · UI/UX
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
              style={{ paddingBottom: 20 }}
            >
              <a href="#frontend"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-7 py-3.5 font-medium"
                style={{ background: "var(--c-btn-primary)", color: "var(--c-btn-primary)", transition: "color 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--c-btn-primary-text)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--c-btn-primary)"; }}>
                View Work
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <a href="#contact"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-7 py-3.5 transition-colors duration-200"
                style={{ border: "1px solid var(--c-border)", color: "var(--c-text-secondary)" }}>
                Contact
              </a>
            </motion.div>
          </div>

          {/* Нижняя линия */}
          <div style={{ width: "100%", height: 1, background: "var(--c-btn-primary)" }} />

        </div>

        {/* ABOUT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: ABOUT.marginTopDesktop }}
          className="pt-8 rizo-grid-2-lg rizo-about"
        >
          <div>
            <p className="font-mono" style={{ fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--c-text-muted)", marginBottom: 16 }}>About</p>
            <p style={{ fontSize: 18, color: "var(--c-text-secondary)", lineHeight: 1.7 }}>
              Hi there! I&apos;m a Frontend Engineer & Creative Developer. Commercial developer with 3 years of experience.
              I specialize in the intersection of{" "}
              <strong style={{ color: "var(--c-text-primary)", fontWeight: 600 }}>scalable frontend architecture</strong> and{" "}
              <strong style={{ color: "var(--c-text-primary)", fontWeight: 600 }}>real-time computer graphics.</strong>
            </p>
          </div>
          <div className="rizo-grid-2-sm">
            {[
              { label: "Languages", items: ["TypeScript", "JavaScript ES6+", "GLSL"] },
              { label: "Frontend", items: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS"] },
              { label: "Graphics & GameDev", items: ["PixiJS", "Three.js", "WebGL", "Canvas API"] },
              { label: "Motion", items: ["Adobe After Effects", "Blender", "Lottie", "Rive", "SVG Animation"] },
            ].map(({ label, items }) => (
              <div key={label}>
                <p className="font-mono" style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase" as const, color: "var(--c-text-faint)", marginBottom: 8 }}>{label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map(item => (
                    <span key={item} className="font-mono" style={{ fontSize: 10, color: "var(--c-text-secondary)", border: "1px solid var(--c-border-light)", background: "var(--c-card-bg)", padding: "2px 10px", borderRadius: 999 }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ num, title, marginBottom = 56 }: { num: string; title: string; marginBottom?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      style={{ marginBottom }}
      className="flex items-center gap-4"
    >
      <span className="font-mono" style={{ fontSize: 10, color: "var(--c-text-faint)" }}>{num}</span>
      <div style={{ height: 1, flex: 1, background: "var(--c-border-light)" }} />
      <span className="font-mono" style={{ fontSize: 10, letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--c-text-muted)" }}>{title}</span>
      <div style={{ height: 1, width: 24, background: "var(--c-border-light)" }} />
    </motion.div>
  );
}

// ─── Project Cover Card ────────────────────────────────────────────────────────
function ProjectCoverCard({ project, index }: { project: typeof FRONTEND_PROJECTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        {/* Cover image */}
        <div className="relative overflow-hidden rounded-lg aspect-[16/9]" style={{ background: "var(--c-card-bg)" }}>
          <img
            src={project.cover}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

          {/* Arrow indicator */}
          <div className="absolute top-4 right-4 w-9 h-9 rounded-full backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-all duration-300" style={{ background: "var(--c-bg-primary-alpha)" }}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="var(--c-text-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>


        </div>

        {/* Meta */}
        <div className="mt-4 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono" style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--c-text-muted)", marginBottom: 4 }}>{project.subtitle}</p>
            <h3 className="font-bold tracking-tight transition-colors duration-200" style={{ fontSize: 20, color: "var(--c-text-primary)" }}>
              {project.title}
            </h3>
          </div>
          <span className="font-mono" style={{ fontSize: 12, color: "var(--c-text-faint)", marginTop: 4, flexShrink: 0 }}>
            Open →
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map(tag => (
            <span key={tag} className="font-mono" style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "var(--c-text-muted)", border: "1px solid var(--c-border-light)", background: "var(--c-card-bg)", padding: "4px 10px", borderRadius: 999 }}>
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Animation Section ────────────────────────────────────────────────────────
function AnimationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section id="animation" style={{ background: "var(--c-bg-secondary)" }}>
      <div className="rizo-container">
        <SectionHeader num="03" title="Animation" marginBottom={SECTION_HEADER.animationMarginBottom} />
        <div ref={ref} className="rizo-grid-2-anim">
          {ANIMATION_WORKS.map((w, i) => (
            <motion.div key={w.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
            >
              {/* Video showcase — autoplay, loop, no interaction */}
              <div className="group relative aspect-video overflow-hidden rounded-lg" style={{ background: "var(--c-bg-primary)", border: "1px solid var(--c-border-light)" }}>
                <video
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-400"
                  autoPlay muted loop playsInline
                >
                  <source src={w.src} type="video/mp4" />
                </video>
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
              </div>
              {/* Description — always visible below video */}
              <div className="mt-2.5 px-1">
                <p className="font-mono" style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase" as const, color: "var(--c-text-muted)", marginBottom: 2 }}>{w.type}</p>
                <p className="font-semibold leading-snug" style={{ fontSize: 14, color: "var(--c-text-primary)" }}>{w.title}</p>
                <p style={{ fontSize: 12, color: "var(--c-text-muted)", marginTop: 2 }}>{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Design Card (вынесена наружу чтобы не пересоздавалась при ре-рендере) ────
function DesignCard({ w, i, inView, onClick }: {
  w: typeof DESIGN_WORKS[0];
  i: number;
  inView: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
      className="group relative overflow-hidden rounded-lg"
      style={{
        background: "var(--c-card-bg)",
        border: "1px solid var(--c-border-light)",
        cursor: "pointer",
        aspectRatio: "1 / 1",
      }}
      onClick={onClick}
    >
      <img src={w.src} alt={w.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: w.fit,
          transform: `scale(${w.scale}) translate(${w.offsetX}px, ${w.offsetY}px)`,
          transformOrigin: "center center",
          transition: "transform 0.5s ease",
        }}
        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-[8px] font-mono tracking-widest uppercase text-white/60 mb-0.5">{w.type}</p>
        <p className="font-semibold text-xs text-white leading-tight">{w.title}</p>
      </div>
    </motion.div>
  );
}

// ─── Design Section ───────────────────────────────────────────────────────────
function DesignSection() {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const inViewDesktop = useInView(desktopRef, { once: true, margin: "-8%" });
  const inViewMobile = useInView(mobileRef, { once: true, margin: "-8%" });
  const inView = inViewDesktop || inViewMobile;
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Закрытие по Escape
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  // Следим за скроллом — 2 позиции: 0 (начало) и 1 (конец)
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const idx = el.scrollLeft > maxScroll * 0.5 ? 1 : 0;
      setActiveIdx(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="design" style={{ background: "var(--c-bg-primary)" }}>
      <div className="rizo-container">
        <SectionHeader num="04" title="Design" marginBottom={SECTION_HEADER.designMarginBottom} />

        {/* ── Desktop: обычная сетка ── */}
        <div ref={desktopRef} className="rizo-grid-4 rizo-design-desktop">
          {DESIGN_WORKS.map((w, i) => (
            <DesignCard key={w.title} w={w} i={i} inView={inView} onClick={() => setLightbox({ src: w.src, title: w.title })} />
          ))}
        </div>

        {/* ── Mobile: карусель ── */}
        <div className="rizo-design-mobile" ref={mobileRef}>
          <div
            ref={carouselRef}
            style={{
              display: "flex",
              gap: "0.75rem",
              overflowX: "scroll",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              paddingBottom: "4px",
            }}
          >
            <style>{`.rizo-design-mobile [style*="overflow-x"]::-webkit-scrollbar { display: none; }`}</style>
            {DESIGN_WORKS.map((w, i) => (
              <div
                key={w.title}
                style={{
                  flex: "0 0 calc(50% - 0.375rem)",
                  scrollSnapAlign: "start",
                  minWidth: 0,
                }}
              >
                <DesignCard w={w} i={i} inView={inView} onClick={() => setLightbox({ src: w.src, title: w.title })} />
              </div>
            ))}
            {/* Пустой spacer чтобы последняя карточка не прилипала к краю */}
            <div style={{ flex: "0 0 0.5rem" }} />
          </div>

          {/* Точки-индикаторы — только 2: начало и конец */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 14 }}>
            {[0, 1].map((i) => (
              <div
                key={i}
                onClick={() => {
                  if (!carouselRef.current) return;
                  const el = carouselRef.current;
                  el.scrollTo({ left: i === 0 ? 0 : el.scrollWidth - el.clientWidth, behavior: "smooth" });
                }}
                style={{
                  width: activeIdx === i ? 18 : 6,
                  height: 6,
                  borderRadius: 99,
                  background: activeIdx === i ? "var(--c-text-primary)" : "var(--c-border)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Lightbox (крупный план) ── */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
            padding: "2rem",
          }}
        >
          {/* Кнопка закрытия */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            ✕
          </button>

          {/* Изображение */}
          <motion.img
            src={lightbox.src}
            alt={lightbox.title}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
              borderRadius: 8,
              boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
              cursor: "default",
            }}
          />
        </motion.div>
      )}
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="contact" style={{ background: "var(--c-bg-secondary)", borderTop: "1px solid var(--c-border-light)" }}>
      <div ref={ref} className="rizo-container">
        <SectionHeader num="05" title="Contact" marginBottom={SECTION_HEADER.contactMarginBottom} />

        <div className="rizo-grid-contact">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold"
              style={{ fontSize: "clamp(2.5rem,6vw,5rem)", lineHeight: 0.92, letterSpacing: "-0.03em", color: "var(--c-text-primary)", marginBottom: 32 }}
            >
              Let&apos;s build<br />
              <span style={{ color: "var(--c-text-faint)" }}>something.</span>
            </motion.h2>
            <motion.a href="mailto:rizoshomatov@gmail.com"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="group inline-flex items-center gap-2 text-xs tracking-widest uppercase px-7 py-3.5 font-medium rounded"
              style={{ background: "var(--c-btn-primary)", color: "var(--c-btn-primary)", transition: "color 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--c-btn-primary-text)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--c-btn-primary)"; }}>
              Send a message
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="group-hover:translate-x-0.5 transition-transform"><path d="M1.5 6.5h10M6.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="font-mono" style={{ fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--c-text-muted)", marginBottom: 12 }}>Socials</p>
              {SOCIAL.map(({ label, handle, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center py-3 transition-colors duration-200"
                  style={{ borderBottom: "1px solid var(--c-border-light)", textDecoration: "none" }}>
                  <span style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase" as const, color: "var(--c-text-muted)", width: 120, flexShrink: 0, transition: "color 0.2s" }}>{label}</span>
                  <span style={{ fontSize: 14, color: "var(--c-text-secondary)", flex: 1, transition: "color 0.2s" }}>{handle}</span>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity"><path d="M1 5.5h9M5.5 1l4.5 4.5L5.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
              ))}
            </div>

            <div>
              <p className="font-mono" style={{ fontSize: 9, letterSpacing: "0.35em", textTransform: "uppercase" as const, color: "var(--c-text-muted)", marginBottom: 12 }}>Freelance</p>
              <div className="flex gap-2 flex-wrap">
                {FREELANCE.map(({ label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase" as const, border: "1px solid var(--c-border)", color: "var(--c-text-secondary)", padding: "10px 16px", borderRadius: 4, transition: "all 0.2s", textDecoration: "none" }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-2" style={{ marginTop: 64, paddingTop: 24, borderTop: "1px solid var(--c-border-light)" }}>
          <p className="font-mono" style={{ fontSize: 10, color: "var(--c-text-faint)" }}>Built with Next.js · Framer Motion · Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Page() {
  return (
    <ThemeProvider>
    <main style={{ background: "var(--c-bg-primary)", color: "var(--c-text-primary)", transition: "background 0.4s ease, color 0.4s ease" }}>
      <style>{`
        /* ── Theme Variables ── */
        :root, [data-theme="light"] {
          --c-bg-primary: #ffffff;
          --c-bg-secondary: #f9fafb;
          --c-bg-primary-alpha: rgba(255,255,255,0.9);
          --c-nav-scrolled: rgba(255,255,255,0.8);
          --c-card-bg: #f9fafb;
          --c-text-primary: #111827;
          --c-text-secondary: #374151;
          --c-text-muted: #9ca3af;
          --c-text-faint: #d1d5db;
          --c-border: #e5e7eb;
          --c-border-light: #f3f4f6;
          --c-btn-primary: #111827;
          --c-btn-primary-text: #ffffff;
          --c-bubble-bg: #ffffff;
          --c-bubble-border: #111111;
        }
        [data-theme="dark"] {
          --c-bg-primary: #0f0f0f;
          --c-bg-secondary: #1a1a1a;
          --c-bg-primary-alpha: rgba(15,15,15,0.9);
          --c-nav-scrolled: rgba(15,15,15,0.85);
          --c-card-bg: #1a1a1a;
          --c-text-primary: #f0f0f0;
          --c-text-secondary: #a0a0a0;
          --c-text-muted: #666666;
          --c-text-faint: #3a3a3a;
          --c-border: #2a2a2a;
          --c-border-light: #222222;
          --c-btn-primary: #f0f0f0;
          --c-btn-primary-text: #0f0f0f;
          --c-bubble-bg: #1a1a1a;
          --c-bubble-border: #e0e0e0;
        }
        * { transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; }
        @keyframes rizo-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        /* Bubble Desktop */
        .rizo-bubble-wrap {
          position: absolute;
          left:  ${BUBBLE_DESKTOP.x}px;
          top:   ${BUBBLE_DESKTOP.y}px;
          transform: scale(${BUBBLE_DESKTOP.scale});
          transform-origin: top left;
          z-index: 10;
          pointer-events: none;
        }
        .rizo-tail-mobile { display: none; }
        .rizo-tail-desktop { display: block; }
        .rizo-container { max-width: 1280px; margin: 0 auto; padding: 5rem 3rem; }
        .rizo-nav-inner { max-width: 1280px; margin: 0 auto; padding: 1rem 3rem; display: flex; justify-content: space-between; align-items: center; }
        .rizo-hero-inner { max-width: 1280px; margin: 0 auto; width: 100%; padding: 6rem 3rem 4rem; }
        .rizo-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        .rizo-grid-2-lg { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5rem; }
        .rizo-grid-2-sm { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
        .rizo-grid-2-anim { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
        .rizo-grid-4 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
        .rizo-grid-contact { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4rem; }
        .rizo-design-desktop { display: grid; }
        .rizo-design-mobile  { display: none; }
        @media (max-width: 768px) {
          .rizo-container { padding: 3rem 1.25rem; }
          .rizo-nav-inner { padding: 1rem 1.25rem; }
          .rizo-hero-inner { padding: 4rem 1.25rem 3rem; }
          /* Mobile photo: relative flow, left-aligned, above Creative Technologist */
          .rizo-photo {
            position: relative !important;
            right: auto !important;
            bottom: auto !important;
            left: ${PHOTO_MOBILE.left}px !important;
            width: ${PHOTO_MOBILE.width}px !important;
            height: ${PHOTO_MOBILE.height}px !important;
            object-position: bottom left !important;
            display: block;
            margin-bottom: ${PHOTO_MOBILE.marginBottom}px;
          }
          /* Stack: photo, text, line */
          .rizo-photo { order: 1; }
          .rizo-text-wrap { max-width: 100% !important; order: 2; }
          div[style*="position: relative"] { display: flex; flex-direction: column; }
          /* About margin on mobile */
          .rizo-about { margin-top: ${ABOUT.marginTopMobile}px !important; }
          /* Bubble Mobile */
          .rizo-bubble-wrap {
            left:  ${BUBBLE_MOBILE.x}px !important;
            top:   ${BUBBLE_MOBILE.y}px !important;
            transform: scale(${BUBBLE_MOBILE.scale}) !important;
          }
          .rizo-tail-desktop { display: none !important; }
          .rizo-tail-mobile  { display: block !important; }
          .rizo-grid-2 { grid-template-columns: 1fr; gap: 1.5rem; }
          .rizo-grid-2-lg { grid-template-columns: 1fr; gap: 2rem; }
          .rizo-grid-2-sm { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
          .rizo-grid-2-anim { grid-template-columns: 1fr; gap: 1rem; }
          .rizo-grid-4 { grid-template-columns: 1fr; gap: 0.75rem; }
          .rizo-grid-contact { grid-template-columns: 1fr; gap: 2rem; }
          .rizo-design-desktop { display: none !important; }
          .rizo-design-mobile  { display: block !important; }
        }
      `}</style>
      <Nav />
      <Hero />

      <section id="frontend" style={{ background: "var(--c-bg-primary)" }}>
        <div className="rizo-container">
          <SectionHeader num="01 — 02" title="Frontend Development" marginBottom={SECTION_HEADER.frontendMarginBottom} />
          <div className="rizo-grid-2">
            {FRONTEND_PROJECTS.map((p, i) => (
              <ProjectCoverCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <AnimationSection />
      <DesignSection />
      <Contact />
    </main>
    </ThemeProvider>
  );
}