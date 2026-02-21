"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  LayoutDashboard, BedDouble, UserCheck, Wallet,
  BarChart3, Settings, Shield, Globe, Lock,
  TrendingUp, CheckCircle2, ChevronRight,
  Building2, Menu, X, ArrowRight, Zap, Clock, Star,
} from "lucide-react";
import { landing, type Lang } from "@/lib/i18n";

// ─── ANIMATIONS ───────────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

// ─── COUNTER ──────────────────────────────────────────────────────────────────

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 45;
    const step = () => {
      frame++;
      const progress = Math.min(frame / total, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (frame < total) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

// ─── FAKE DASHBOARD ───────────────────────────────────────────────────────────

const roomStatuses = [
  "occ","occ","free","occ","in","free","occ","occ",
  "free","occ","occ","free","out","occ","free","occ",
  "occ","free","occ","in","free","occ","occ","free",
];
const statusColor: Record<string, string> = {
  occ: "#F5C100", free: "#151515", in: "#22c55e", out: "#ef4444",
};

function FakeDashboard() {
  return (
    <div className="n-card n-card-featured" style={{ overflow: "hidden", width: "100%" }}>
      <div style={{ background: "#0a0a0a", borderBottom: "1px solid #191919", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F5C100", display: "inline-block" }} className="dot-live" />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Natus — Dashboard</span>
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
      </div>
      <div style={{ padding: "14px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 14 }}>
          {[
            { label: "Check-in", value: "8", color: "#F5C100" },
            { label: "Occupancy", value: "87%", color: "#fff" },
            { label: "Revenue", value: "4.2M", color: "#fff" },
          ].map(k => (
            <div key={k.label} style={{ background: "rgba(245,193,0,0.05)", border: "1px solid rgba(245,193,0,0.1)", borderRadius: 10, padding: "8px 10px" }}>
              <p style={{ fontSize: 9, color: "#444", marginBottom: 3 }}>{k.label}</p>
              <p style={{ fontSize: 18, fontWeight: 900, color: k.color, lineHeight: 1 }}>{k.value}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", color: "#333", textTransform: "uppercase", marginBottom: 6 }}>Rooms</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 3, marginBottom: 10 }}>
          {roomStatuses.map((s, i) => (
            <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.03, type: "spring", stiffness: 400, damping: 20 }}
              style={{ height: 18, borderRadius: 4, background: statusColor[s], border: s === "free" ? "1px solid #222" : "none" }} />
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[{ c: "#F5C100", l: "Occupied" }, { c: "#22c55e", l: "Check-in" }, { c: "#ef4444", l: "Check-out" }, { c: "#222", l: "Free" }].map(item => (
            <div key={item.l} style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <div style={{ width: 6, height: 6, borderRadius: 2, background: item.c }} />
              <span style={{ fontSize: 9, color: "#444" }}>{item.l}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ borderTop: "1px solid #191919", padding: "10px 16px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
        {[
          { label: "Income", value: "84M", color: "#22c55e" },
          { label: "Expense", value: "21M", color: "#ef4444" },
          { label: "Net", value: "63M", color: "#F5C100" },
        ].map(item => (
          <div key={item.label}>
            <p style={{ fontSize: 8, color: "#333", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</p>
            <p style={{ fontSize: 13, fontWeight: 800, color: item.color }}>{item.value} сум</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MODULE ICONS ─────────────────────────────────────────────────────────────

const moduleIcons = [LayoutDashboard, BedDouble, UserCheck, Wallet, BarChart3, Settings];
const whyIcons = [Zap, Clock, Star];

// ─── LANG SWITCHER ────────────────────────────────────────────────────────────

function LangBtn({ lang, current, set }: { lang: Lang; current: Lang; set: (l: Lang) => void }) {
  const active = lang === current;
  return (
    <button onClick={() => set(lang)} style={{
      background: active ? "#F5C100" : "transparent",
      color: active ? "#000" : "#444",
      border: "none", cursor: "pointer", fontWeight: 700, fontSize: 12,
      padding: "4px 10px", borderRadius: 6, transition: "all 0.2s",
      letterSpacing: "0.05em",
    }}>
      {lang.toUpperCase()}
    </button>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function NatusLanding() {
  const [lang, setLang] = useState<Lang>("ru");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const T = landing[lang];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navLinks: [string, string][] = [
    ["#возможности", T.nav.features],
    ["#почему", T.nav.why],
    ["#финансы", T.nav.finance],
    ["#отчёты", T.nav.reports],
  ];

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <div className="noise" />

      {/* BG ambient */}
      <div aria-hidden style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -350, left: "50%", transform: "translateX(-50%)", width: 1000, height: 1000, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,193,0,0.08) 0%, transparent 60%)" }} />
        <div style={{ position: "absolute", bottom: -300, right: -200, width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,193,0,0.04) 0%, transparent 55%)" }} />
        <div style={{ position: "absolute", top: "40%", left: -200, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,193,0,0.03) 0%, transparent 60%)" }} />
      </div>

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(6,6,6,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(1.2)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.2)" : "none",
        borderBottom: scrolled ? "1px solid #151515" : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px" }}>
          <a href="#" style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.05em", flexShrink: 0 }}>
            <span style={{ color: "#F5C100" }}>N</span>atus
          </a>

          <div className="hidden md:flex items-center" style={{ gap: 28 }}>
            {navLinks.map(([href, label]) => (
              <a key={label} href={href} style={{ fontSize: 13, color: "#666", fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#666")}>
                {label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center" style={{ gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", background: "#111", border: "1px solid #222", borderRadius: 8, padding: 2 }}>
              <LangBtn lang="ru" current={lang} set={setLang} />
              <LangBtn lang="uz" current={lang} set={setLang} />
            </div>
            <a href="#cta" className="btn-y" style={{ padding: "9px 20px", fontSize: 13, borderRadius: 10 }}>
              {T.nav.demo} <ArrowRight size={13} />
            </a>
          </div>

          <div className="flex md:hidden items-center" style={{ gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", background: "#111", border: "1px solid #222", borderRadius: 8, padding: 2 }}>
              <LangBtn lang="ru" current={lang} set={setLang} />
              <LangBtn lang="uz" current={lang} set={setLang} />
            </div>
            <button onClick={() => setMenuOpen(v => !v)} className="flex items-center justify-center"
              style={{ background: "none", border: "1px solid #222", borderRadius: 10, color: "#fff", cursor: "pointer", padding: "8px" }}>
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            style={{ overflow: "hidden", borderTop: "1px solid #191919", background: "rgba(6,6,6,0.98)", backdropFilter: "blur(20px)" }}>
            <div style={{ padding: "12px 20px 20px" }}>
              {navLinks.map(([href, label]) => (
                <a key={label} href={href} onClick={() => setMenuOpen(false)}
                  style={{ display: "block", padding: "14px 0", fontSize: 16, fontWeight: 600, color: "#ccc", borderBottom: "1px solid #151515" }}>
                  {label}
                </a>
              ))}
              <a href="#cta" onClick={() => setMenuOpen(false)} className="btn-y"
                style={{ marginTop: 16, width: "100%", textAlign: "center", padding: "14px 0" }}>
                {T.nav.demo} <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section style={{ position: "relative", overflow: "hidden", paddingTop: 100 }}>
          <div className="hero-grid" />
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", position: "relative" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 48, alignItems: "center", minHeight: "calc(100vh - 100px)", paddingBottom: 60 }}>
              <motion.div initial="hidden" animate="visible" variants={stagger} style={{ minWidth: 0 }}>
                <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,193,0,0.07)", border: "1px solid rgba(245,193,0,0.18)", borderRadius: 99, padding: "7px 16px", fontSize: 12, fontWeight: 700, color: "#F5C100" }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F5C100", display: "inline-block" }} className="dot-live" />
                    Hotel Management System
                  </span>
                </motion.div>
                <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)", fontWeight: 900, lineHeight: 0.95, marginBottom: 28, wordBreak: "break-word" }}>
                  <span className="y-text-glow">{T.hero.heading1}</span><br />
                  {T.hero.heading2}<br />
                  <span className="y-text">{T.hero.heading3}</span>
                </motion.h1>
                <motion.p variants={fadeUp} style={{ fontSize: "clamp(15px, 2.5vw, 18px)", color: "#666", lineHeight: 1.75, marginBottom: 36, maxWidth: 460 }}>
                  {T.hero.sub}
                </motion.p>
                <motion.div variants={fadeUp} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="#cta" className="btn-y y-glow" style={{ fontSize: "clamp(14px, 2vw, 16px)" }}>
                    {T.hero.demo} <ArrowRight size={16} />
                  </a>
                  <a href="#возможности" className="btn-o" style={{ fontSize: "clamp(14px, 2vw, 16px)" }}>
                    {T.hero.features}
                  </a>
                </motion.div>
                <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
                  {([Shield, Globe, Lock] as const).map((Ic, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Ic size={12} color="#F5C100" />
                      <span style={{ fontSize: 12, color: "#444", fontWeight: 600 }}>{T.hero.pills[i]}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="float" style={{ filter: "drop-shadow(0 30px 60px rgba(245,193,0,0.1))" }}>
                <FakeDashboard />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-line" />

        {/* ── STATS ─────────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ padding: "48px 20px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 0 }}>
              {T.stats.map((s, i) => (
                <motion.div key={i} variants={fadeUp} style={{ textAlign: "center", padding: "16px 12px" }}>
                  <p style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 900, color: "#F5C100", lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontSize: 11, color: "#444", marginTop: 6, fontWeight: 500 }}>{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <div className="section-line" />

        {/* ── MODULES ───────────────────────────────────────────────────────── */}
        <section id="возможности" style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ marginBottom: 52 }}>
              <motion.p variants={fadeUp} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#F5C100", textTransform: "uppercase", marginBottom: 14 }}>
                {T.modules.label}
              </motion.p>
              <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, maxWidth: 600 }}>
                {T.modules.heading1}<br /><span className="y-text">{T.modules.heading2}</span>
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 12 }}>
              {T.modules.items.map((mod, idx) => {
                const Icon = moduleIcons[idx];
                return (
                  <motion.div key={idx} variants={fadeUp} className={`n-card n-card-glow ${idx === 0 ? "n-card-featured" : ""}`} style={{ padding: "26px 24px" }}>
                    <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(245,193,0,0.07)", border: "1px solid rgba(245,193,0,0.14)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                      <Icon size={19} color="#F5C100" />
                    </div>
                    <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>{mod.title}</h3>
                    <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, marginBottom: 18 }}>{mod.desc}</p>
                    <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                      {mod.tags.map(tag => (
                        <span key={tag} style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", background: "rgba(245,193,0,0.06)", border: "1px solid rgba(245,193,0,0.12)", borderRadius: 99, color: "#c9a200" }}>{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
        <div className="section-line" />

        {/* ── WHY NATUS ─────────────────────────────────────────────────────── */}
        <section id="почему" style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ textAlign: "center", marginBottom: 52 }}>
              <motion.p variants={fadeUp} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#F5C100", textTransform: "uppercase", marginBottom: 14 }}>
                {T.why.label}
              </motion.p>
              <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1 }}>
                {T.why.heading} <span className="y-text">{T.why.headingY}</span>
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 12 }}>
              {T.why.items.map((item, i) => {
                const Icon = whyIcons[i];
                return (
                  <motion.div key={i} variants={fadeUp} className="n-card n-card-glow" style={{ padding: "32px 24px", textAlign: "center" }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, margin: "0 auto 20px", background: "rgba(245,193,0,0.08)", border: "1px solid rgba(245,193,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={22} color="#F5C100" />
                    </div>
                    <p style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#F5C100", lineHeight: 1, marginBottom: 4 }}>
                      <Counter value={parseInt(item.number)} suffix={item.suffix} />
                    </p>
                    <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10, marginTop: 12 }}>{item.title}</h3>
                    <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{item.desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
        <div className="section-line" />

        {/* ── FINANCE SPOTLIGHT ─────────────────────────────────────────────── */}
        <section id="финансы" style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.p variants={fadeUp} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#F5C100", textTransform: "uppercase", marginBottom: 14 }}>
                  {T.finance.label}
                </motion.p>
                <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
                  {T.finance.heading1}<br />{T.finance.heading2}
                </motion.h2>
                <motion.p variants={fadeUp} style={{ fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 32 }}>
                  {T.finance.sub}
                </motion.p>
                <motion.ul variants={stagger} style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {T.finance.items.map((item, _i) => (
                    <motion.li key={_i} variants={fadeUp} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#777" }}>
                      <CheckCircle2 size={14} color="#F5C100" style={{ flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}>
                <div className="n-card n-card-featured" style={{ padding: "20px" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#333", textTransform: "uppercase", marginBottom: 12 }}>{T.finance.kassaLabel}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {T.finance.kassas.map(cash => (
                      <div key={cash.name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#121212", border: "1px solid #191919", borderRadius: 10, padding: "12px 14px" }}>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{cash.name}</p>
                          <p style={{ fontSize: 10, color: "#333" }}>{T.finance.balanceLabel}</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <p style={{ fontSize: 14, fontWeight: 800, color: "#F5C100", marginBottom: 2 }}>{cash.balance} сум</p>
                          <p style={{ fontSize: 10, color: cash.up ? "#22c55e" : "#ef4444" }}>{cash.delta}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 14, padding: 14, background: "rgba(245,193,0,0.03)", border: "1px solid rgba(245,193,0,0.1)", borderRadius: 10 }}>
                    {[
                      { label: T.finance.income, value: "84 000 000 сум", color: "#22c55e" },
                      { label: T.finance.expense, value: "21 000 000 сум", color: "#ef4444" },
                    ].map(row => (
                      <div key={row.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontSize: 12, color: "#444" }}>{row.label}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: row.color }}>{row.value}</span>
                      </div>
                    ))}
                    <div style={{ height: 1, background: "#191919", margin: "10px 0" }} />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{T.finance.netto}</span>
                      <span style={{ fontSize: 13, fontWeight: 900, color: "#F5C100" }}>63 000 000 сум</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <div className="section-line" />

        {/* ── REPORTS SPOTLIGHT ─────────────────────────────────────────────── */}
        <section id="отчёты" style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: "clamp(40px, 6vw, 80px)", alignItems: "center" }}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }} className="order-2 lg:order-1">
                <div className="n-card n-card-featured" style={{ padding: 20 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#333", textTransform: "uppercase", marginBottom: 12 }}>{T.reports.kpiLabel}</p>
                  <div className="grid grid-cols-2" style={{ gap: 6, marginBottom: 18 }}>
                    {T.reports.kpis.map(kpi => (
                      <div key={kpi.label} style={{ background: "#121212", border: "1px solid #191919", borderRadius: 10, padding: "12px 14px" }}>
                        <p style={{ fontSize: 10, color: "#333", marginBottom: 5 }}>{kpi.label}</p>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ fontSize: 16, fontWeight: 900, color: "#fff" }}>{kpi.value}</span>
                          <TrendingUp size={11} color={kpi.up ? "#22c55e" : "#ef4444"} style={{ transform: kpi.up ? "none" : "rotate(180deg)" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#333", textTransform: "uppercase", marginBottom: 10 }}>{T.reports.trendLabel}</p>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 68 }}>
                    {[38, 52, 34, 61, 73, 87].map((h, i) => (
                      <motion.div key={i} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                        style={{ flex: 1, height: `${h}%`, borderRadius: "5px 5px 2px 2px", transformOrigin: "bottom", background: i === 5 ? "linear-gradient(180deg, #F5C100 0%, #7a6000 100%)" : "rgba(245,193,0,0.15)", border: i === 5 ? "none" : "1px solid rgba(245,193,0,0.08)" }} />
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                    {T.reports.months.map(m => (
                      <span key={m} style={{ fontSize: 9, color: "#333" }}>{m}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="order-1 lg:order-2">
                <motion.p variants={fadeUp} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#F5C100", textTransform: "uppercase", marginBottom: 14 }}>
                  {T.reports.label}
                </motion.p>
                <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
                  {T.reports.heading1}<br />{T.reports.heading2}
                </motion.h2>
                <motion.p variants={fadeUp} style={{ fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 32 }}>
                  {T.reports.sub}
                </motion.p>
                <motion.ul variants={stagger} style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {T.reports.items.map((item, _i) => (
                    <motion.li key={_i} variants={fadeUp} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#777" }}>
                      <CheckCircle2 size={14} color="#F5C100" style={{ flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </section>
        <div className="section-line" />

        {/* ── ROLES ─────────────────────────────────────────────────────────── */}
        <section id="роли" style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ textAlign: "center", marginBottom: 52 }}>
              <motion.p variants={fadeUp} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#F5C100", textTransform: "uppercase", marginBottom: 14 }}>
                {T.roles.label}
              </motion.p>
              <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1 }}>
                {T.roles.heading1}<br /><span className="y-text">{T.roles.heading2}</span>
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12, maxWidth: 760, margin: "0 auto" }}>
              {[
                { title: T.roles.admin, features: T.roles.adminFeatures, primary: true, Icon: Shield },
                { title: T.roles.manager, features: T.roles.managerFeatures, primary: false, Icon: UserCheck },
              ].map((role, ri) => (
                <motion.div key={ri} variants={fadeUp} className={`n-card ${role.primary ? "n-card-featured" : ""}`} style={{ padding: "28px 24px", border: role.primary ? "1px solid rgba(245,193,0,0.22)" : "1px solid #191919", boxShadow: role.primary ? "0 0 60px rgba(245,193,0,0.04)" : "none" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: role.primary ? "rgba(245,193,0,0.1)" : "#121212", border: role.primary ? "1px solid rgba(245,193,0,0.2)" : "1px solid #222", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <role.Icon size={16} color={role.primary ? "#F5C100" : "#444"} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: role.primary ? "#F5C100" : "#fff" }}>{role.title}</h3>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                    {role.features.map((f, fi) => (
                      <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#777" }}>
                        <ChevronRight size={12} color={role.primary ? "#F5C100" : "#2a2a2a"} style={{ flexShrink: 0, marginTop: 3 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <div className="section-line" />

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section id="cta" style={{ padding: "100px 20px", position: "relative" }}>
          <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,193,0,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(245,193,0,0.07)", border: "1px solid rgba(245,193,0,0.18)", borderRadius: 99, padding: "7px 16px", fontSize: 12, fontWeight: 700, color: "#F5C100", marginBottom: 28 }}>
                <Building2 size={12} />
                {T.cta.badge}
              </motion.div>
              <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
                {T.cta.heading1}<br /><span className="y-text">{T.cta.heading2}</span>
              </motion.h2>
              <motion.p variants={fadeUp} style={{ fontSize: "clamp(15px, 2.5vw, 18px)", color: "#555", lineHeight: 1.75, marginBottom: 44 }}>
                {T.cta.sub}
              </motion.p>
              <motion.div variants={fadeUp}>
                <a href="https://t.me/sqd_dev" target="_blank" rel="noreferrer" className="btn-y y-glow" style={{ fontSize: "clamp(14px, 2vw, 16px)", padding: "16px 32px" }}>
                  {T.cta.button} <ArrowRight size={16} />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────────────────── */}
        <div className="section-line" />
        <footer style={{ padding: "32px 20px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.05em" }}>
              <span style={{ color: "#F5C100" }}>N</span>atus
            </span>
            <p style={{ fontSize: 12, color: "#2a2a2a", fontWeight: 500 }}>© 2025 Natus</p>
          </div>
        </footer>

      </div>
    </div>
  );
}
