"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, ChevronLeft, LayoutDashboard, BedDouble,
  Users, BarChart3, Wallet, FileText, CheckCircle2,
  AlertTriangle, Zap, Shield, ArrowRight, MessageCircle,
  Minus, Target, MapPin, Globe, Rocket, UserPlus, ExternalLink,
} from "lucide-react";
import { pitch, type Lang } from "@/lib/i18n";

// ─── SLIDE TRANSITION ─────────────────────────────────────────────────────────
const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};
const transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

const moduleIcons = [LayoutDashboard, BedDouble, Users, Wallet, BarChart3, Shield];
const gtmIcons = [Target, MapPin, MessageCircle, Zap];

// ─── SHARED PIECES ────────────────────────────────────────────────────────────
function SlideHeader({ label, heading, sub }: { label: string; heading: string; sub?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#F5C100", textTransform: "uppercase", marginBottom: 12 }}>{label}</p>
      <h2 className="slide-title">{heading}</h2>
      {sub && <p style={{ fontSize: "clamp(14px, 1.8vw, 17px)", color: "#555", margin: "14px 0 0", lineHeight: 1.5 }}>{sub}</p>}
    </motion.div>
  );
}

const cardStyle: React.CSSProperties = { background: "#0c0c0c", border: "1px solid #191919", borderRadius: 14 };

// ─── LANG SWITCHER ────────────────────────────────────────────────────────────
function LangBtn({ lang, current, set }: { lang: Lang; current: Lang; set: (l: Lang) => void }) {
  const active = lang === current;
  return (
    <button onClick={() => set(lang)} style={{
      background: active ? "#F5C100" : "transparent", color: active ? "#000" : "#444",
      border: "none", cursor: "pointer", fontWeight: 700, fontSize: 12,
      padding: "4px 10px", borderRadius: 6, transition: "all 0.2s", letterSpacing: "0.05em",
    }}>
      {lang.toUpperCase()}
    </button>
  );
}

// ─── SLIDE COMPONENTS ─────────────────────────────────────────────────────────

// 1 · Title
function Slide1({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-center" style={{ textAlign: "center", gap: 32 }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
        <span style={{ fontSize: "clamp(13px, 1.5vw, 15px)", fontWeight: 700, letterSpacing: "0.25em", color: "#F5C100", textTransform: "uppercase" }}>
          {T.s1.badge}
        </span>
      </motion.div>
      <motion.h1 initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
        style={{ fontSize: "clamp(80px, 16vw, 180px)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.9, margin: 0 }}>
        <span style={{ color: "#F5C100" }}>N</span>atus
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
        style={{ fontSize: "clamp(16px, 2.5vw, 24px)", color: "#555", maxWidth: 620, lineHeight: 1.5 }}>
        {T.s1.sub}
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.6 }}
        style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {T.s1.tags.map(tag => (
          <span key={tag} style={{ fontSize: 13, fontWeight: 600, color: "#333", padding: "6px 16px", border: "1px solid #1e1e1e", borderRadius: 99 }}>{tag}</span>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}
        style={{ fontSize: 14, color: "#3a3a3a", marginTop: 16, fontWeight: 600 }}>
        {T.s1.footer}
      </motion.div>
    </div>
  );
}

// 2 · Problem
function Slide2({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-content" style={{ gap: 40 }}>
      <SlideHeader label={T.s2.label} heading={T.s2.heading} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
        {T.s2.problems.map((text, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "16px 20px", background: "rgba(255,60,60,0.04)", border: "1px solid rgba(255,60,60,0.12)", borderRadius: 12 }}>
            <AlertTriangle size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />
            <span style={{ fontSize: 14, color: "#555", lineHeight: 1.5 }}>{text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// 3 · Solution
function Slide3({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-content" style={{ gap: 40 }}>
      <SlideHeader label={T.s3.label} heading={T.s3.heading} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {T.s3.modules.map(({ title, desc }, i) => {
          const Icon = moduleIcons[i];
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
              style={{ ...cardStyle, padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(245,193,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon size={16} color="#F5C100" />
              </div>
              <p style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>{title}</p>
              <p style={{ fontSize: 12, color: "#444", margin: 0, lineHeight: 1.5 }}>{desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// 4 · Traction
function Slide4({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-content" style={{ gap: 36 }}>
      <SlideHeader label={T.s4.label} heading={T.s4.heading} sub={T.s4.sub} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
        {T.s4.stats.map(({ value, label }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
            style={{ ...cardStyle, padding: "26px 20px" }}>
            <p style={{ fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 900, color: "#F5C100", margin: "0 0 8px", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>{value}</p>
            <p style={{ fontSize: 13, color: "#555", margin: 0, lineHeight: 1.45 }}>{label}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5 }}
        style={{ display: "flex", alignItems: "center", gap: 12, padding: "18px 24px", background: "rgba(245,193,0,0.05)", border: "1px solid rgba(245,193,0,0.25)", borderRadius: 14 }}>
        <Globe size={18} color="#F5C100" style={{ flexShrink: 0 }} />
        <span style={{ fontSize: 15, color: "#999", fontWeight: 600 }}>{T.s4.demo}</span>
      </motion.div>
    </div>
  );
}

// 5 · Market
function Slide5({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-content" style={{ gap: 36 }}>
      <SlideHeader label={T.s5.label} heading={T.s5.heading} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {T.s5.stats.map(({ value, label }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
            style={{ ...cardStyle, padding: "24px 24px", display: "flex", alignItems: "baseline", gap: 18 }}>
            <p style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 900, color: "#F5C100", margin: 0, letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>{value}</p>
            <p style={{ fontSize: 13, color: "#555", margin: 0, lineHeight: 1.45 }}>{label}</p>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5 }}
        style={{ padding: "18px 24px", background: "rgba(245,193,0,0.05)", border: "1px solid rgba(245,193,0,0.25)", borderRadius: 14, textAlign: "center" }}>
        <span style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "#bbb", fontWeight: 700 }}>{T.s5.conclusion}</span>
      </motion.div>
    </div>
  );
}

// 6 · Competitors — 3-column compare
function Slide6({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-content" style={{ gap: 40 }}>
      <SlideHeader label={T.s6.label} heading={T.s6.heading} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, alignItems: "stretch" }}>
        {T.s6.cols.map(({ title, sub, points }, i) => {
          const isNatus = i === T.s6.cols.length - 1;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              style={{
                padding: 24, borderRadius: 16, display: "flex", flexDirection: "column", gap: 8,
                background: isNatus ? "rgba(245,193,0,0.06)" : "#0c0c0c",
                border: isNatus ? "1px solid rgba(245,193,0,0.4)" : "1px solid #191919",
                boxShadow: isNatus ? "0 0 40px rgba(245,193,0,0.08)" : "none",
              }}>
              <p style={{ fontSize: 16, fontWeight: 800, margin: 0, color: isNatus ? "#F5C100" : "#ddd" }}>{title}</p>
              <p style={{ fontSize: 12, color: "#444", margin: "0 0 12px" }}>{sub}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {points.map((p, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    {isNatus
                      ? <CheckCircle2 size={14} color="#F5C100" style={{ flexShrink: 0, marginTop: 2 }} />
                      : <Minus size={14} color="#3a3a3a" style={{ flexShrink: 0, marginTop: 2 }} />}
                    <span style={{ fontSize: 13, color: isNatus ? "#999" : "#555", lineHeight: 1.45 }}>{p}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// 7 · Business model
function Slide7({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-content" style={{ gap: 36 }}>
      <SlideHeader label={T.s7.label} heading={T.s7.heading} sub={T.s7.note} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {T.s7.plans.map(({ name, price, feat }, i) => {
          const featured = i === 1;
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              style={{
                padding: "26px 24px", borderRadius: 16, position: "relative", textAlign: "center",
                background: featured ? "rgba(245,193,0,0.06)" : "#0c0c0c",
                border: featured ? "1px solid rgba(245,193,0,0.4)" : "1px solid #191919",
              }}>
              {featured && (
                <span style={{ position: "absolute", top: -11, left: "50%", transform: "translateX(-50%)", fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", background: "#F5C100", color: "#000", padding: "3px 12px", borderRadius: 99 }}>
                  {T.s7.featured}
                </span>
              )}
              <p style={{ fontSize: 14, fontWeight: 700, color: "#888", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>{name}</p>
              <p style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 900, color: featured ? "#F5C100" : "#fff", margin: "0 0 4px", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>{price}</p>
              <p style={{ fontSize: 12, color: "#444", margin: "0 0 12px" }}>{T.s7.period}</p>
              <p style={{ fontSize: 13, color: "#555", margin: 0 }}>{feat}</p>
            </motion.div>
          );
        })}
      </div>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.5 }}
        style={{ padding: "18px 24px", background: "rgba(245,193,0,0.05)", border: "1px solid rgba(245,193,0,0.25)", borderRadius: 14, textAlign: "center" }}>
        <span style={{ fontSize: "clamp(15px, 1.8vw, 18px)", color: "#bbb", fontWeight: 700 }}>{T.s7.mrr}</span>
      </motion.div>
    </div>
  );
}

// 8 · Go-to-market
function Slide8({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-content" style={{ gap: 40 }}>
      <SlideHeader label={T.s8.label} heading={T.s8.heading} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        {T.s8.points.map(({ title, desc }, i) => {
          const Icon = gtmIcons[i];
          return (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + i * 0.1, duration: 0.5 }}
              style={{ ...cardStyle, padding: "22px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(245,193,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={17} color="#F5C100" />
              </div>
              <div>
                <p style={{ fontSize: 15, fontWeight: 700, margin: "0 0 6px" }}>{title}</p>
                <p style={{ fontSize: 13, color: "#555", margin: 0, lineHeight: 1.5 }}>{desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

// 9 · Roadmap — timeline
function Slide9({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-content" style={{ gap: 48 }}>
      <SlideHeader label={T.s9.label} heading={T.s9.heading} />
      <div style={{ position: "relative" }}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.2, duration: 0.9, ease: "easeOut" }}
          style={{ position: "absolute", top: 7, left: "5%", right: "5%", height: 2, background: "linear-gradient(90deg, rgba(245,193,0,0.6), rgba(245,193,0,0.15))", transformOrigin: "left" }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {T.s9.steps.map(({ when, title, desc }, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.18, duration: 0.5 }}
              style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 16 }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#0c0c0c", border: "2px solid #F5C100", boxShadow: "0 0 16px rgba(245,193,0,0.4)", marginLeft: "5%" }} />
              <div style={{ ...cardStyle, padding: "22px 24px", width: "100%" }}>
                <p style={{ fontSize: 12, fontWeight: 800, letterSpacing: "0.12em", color: "#F5C100", textTransform: "uppercase", margin: "0 0 10px" }}>{when}</p>
                <p style={{ fontSize: 16, fontWeight: 700, margin: "0 0 8px", lineHeight: 1.3 }}>{title}</p>
                <p style={{ fontSize: 13, color: "#555", margin: 0, lineHeight: 1.5 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 10 · Team
function Slide10({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-content" style={{ gap: 40 }}>
      <SlideHeader label={T.s10.label} heading={T.s10.heading} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {T.s10.members.map(({ name, role, desc, hiring }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.15, duration: 0.5 }}
            style={{
              padding: 28, borderRadius: 16, display: "flex", flexDirection: "column", gap: 14,
              background: hiring ? "transparent" : "#0c0c0c",
              border: hiring ? "1px dashed #2a2a2a" : "1px solid #191919",
            }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                background: hiring ? "rgba(255,255,255,0.03)" : "rgba(245,193,0,0.12)",
                border: hiring ? "1px dashed #2a2a2a" : "1px solid rgba(245,193,0,0.3)",
              }}>
                {hiring
                  ? <UserPlus size={20} color="#3a3a3a" />
                  : <span style={{ fontSize: 20, fontWeight: 900, color: "#F5C100" }}>{name.charAt(0)}</span>}
              </div>
              <div>
                <p style={{ fontSize: 18, fontWeight: 800, margin: 0, color: hiring ? "#555" : "#fff" }}>{name}</p>
                <p style={{ fontSize: 13, fontWeight: 700, margin: 0, color: "#F5C100" }}>{role}</p>
              </div>
            </div>
            <p style={{ fontSize: 14, color: hiring ? "#3f3f3f" : "#666", margin: 0, lineHeight: 1.6 }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// 11 · Ask
function Slide11({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-content" style={{ gap: 36 }}>
      <SlideHeader label={T.s11.label} heading={T.s11.heading} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        {T.s11.asks.map(({ title, desc }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + i * 0.1, duration: 0.5 }}
            style={{ ...cardStyle, padding: "20px 22px", display: "flex", gap: 12, alignItems: "flex-start" }}>
            <CheckCircle2 size={16} color="#F5C100" style={{ flexShrink: 0, marginTop: 3 }} />
            <div>
              <p style={{ fontSize: 15, fontWeight: 700, margin: "0 0 4px" }}>{title}</p>
              <p style={{ fontSize: 13, color: "#555", margin: 0, lineHeight: 1.5 }}>{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.55, duration: 0.5 }}
        style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18, padding: "20px 24px", background: "rgba(245,193,0,0.05)", border: "1px solid rgba(245,193,0,0.25)", borderRadius: 14 }}>
        <Rocket size={22} color="#F5C100" />
        <span style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 900, color: "#F5C100", letterSpacing: "-0.03em" }}>{T.s11.goalValue}</span>
        <span style={{ fontSize: "clamp(14px, 1.8vw, 17px)", color: "#999", fontWeight: 600 }}>{T.s11.goalLabel}</span>
      </motion.div>
    </div>
  );
}

// 12 · Contacts
function Slide12({ T }: { T: typeof pitch.ru }) {
  return (
    <div className="slide-center" style={{ textAlign: "center", gap: 36 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#F5C100", textTransform: "uppercase", marginBottom: 24 }}>{T.s12.label}</p>
        <h2 style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, margin: 0 }}>
          {T.s12.heading}
        </h2>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
        style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(220px, 280px))", gap: 12, justifyContent: "center" }}>
        {T.s12.links.map(({ url, label }, i) => (
          <a key={i} href={`https://${url}`} target="_blank" rel="noreferrer"
            style={{ ...cardStyle, padding: "16px 20px", textDecoration: "none", display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 800, color: "#F5C100" }}>
              {url} <ExternalLink size={12} color="#3a3a3a" />
            </span>
            <span style={{ fontSize: 12, color: "#555" }}>{label}</span>
          </a>
        ))}
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
        <a href="https://t.me/sqd_dev" target="_blank" rel="noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#F5C100", color: "#000", fontWeight: 800, fontSize: 17, padding: "16px 36px", borderRadius: 14, textDecoration: "none", boxShadow: "0 0 40px rgba(245,193,0,0.35)" }}>
          <MessageCircle size={18} />
          {T.s12.button}
          <ArrowRight size={16} />
        </a>
        <p style={{ fontSize: 15, color: "#666", fontWeight: 600, margin: 0 }}>{T.s12.note}</p>
      </motion.div>
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

const slideComponents = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12];

export default function PitchPage() {
  const [lang, setLang] = useState<Lang>("ru");
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const T = pitch[lang];
  const total = slideComponents.length;

  const go = useCallback((next: number) => {
    if (next < 0 || next >= total) return;
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  }, [current, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") go(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go]);

  const SlideComponent = slideComponents[current];

  return (
    <div style={{ background: "#060606", color: "#fff", height: "100vh", width: "100vw", overflow: "hidden", position: "relative", fontFamily: "var(--font-inter), sans-serif", userSelect: "none" }}>

      {/* Ambient */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,193,0,0.05) 0%, transparent 65%)" }} />
      </div>

      {/* Slide */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={transition}
          style={{ position: "absolute", inset: 0, zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 60px 100px" }}>
          <div style={{ width: "100%", maxWidth: 1000 }}>
            <SlideComponent T={T} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Top bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 10, padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.05em" }}>
          <span style={{ color: "#F5C100" }}>N</span>atus
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", background: "#111", border: "1px solid #222", borderRadius: 8, padding: 2 }}>
            <LangBtn lang="ru" current={lang} set={setLang} />
            <LangBtn lang="uz" current={lang} set={setLang} />
          </div>
          <span style={{ fontSize: 12, color: "#2a2a2a", fontWeight: 600 }}>{current + 1} / {total}</span>
        </div>
      </div>

      {/* Dots */}
      <div style={{ position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", gap: 8, alignItems: "center" }}>
        {slideComponents.map((_, i) => (
          <button key={i} onClick={() => go(i)} title={T.slides[i]}
            style={{ width: i === current ? 24 : 6, height: 6, borderRadius: 99, background: i === current ? "#F5C100" : "#222", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }} />
        ))}
      </div>

      {/* Nav arrows */}
      <button onClick={() => go(current - 1)} disabled={current === 0}
        style={{ position: "fixed", left: 20, top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "transparent", border: "1px solid #1a1a1a", color: current === 0 ? "#1a1a1a" : "#444", cursor: current === 0 ? "default" : "pointer", borderRadius: 10, padding: 10, display: "flex" }}>
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => go(current + 1)} disabled={current === total - 1}
        style={{ position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "transparent", border: "1px solid #1a1a1a", color: current === total - 1 ? "#1a1a1a" : "#444", cursor: current === total - 1 ? "default" : "pointer", borderRadius: 10, padding: 10, display: "flex" }}>
        <ChevronRight size={20} />
      </button>

      <style>{`
        .slide-center { display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; }
        .slide-content { display: flex; flex-direction: column; width: 100%; }
        .slide-title { font-size: clamp(32px, 5vw, 58px); font-weight: 900; letter-spacing: -0.04em; line-height: 1.1; margin: 0; }
      `}</style>
    </div>
  );
}
