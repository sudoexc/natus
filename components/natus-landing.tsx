"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  LayoutDashboard, BedDouble, UserCheck, Wallet,
  BarChart3, Settings, Shield, Globe, Lock,
  TrendingUp, CheckCircle2, ChevronRight,
  Building2, Menu, X, ArrowRight, Zap, Clock, Star,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const modules = [
  {
    icon: LayoutDashboard, title: "Дашборд",
    desc: "Заезды, выезды, загрузка, выручка и сетка статусов номеров — всё в реальном времени.",
    tags: ["Real-time", "Сетка номеров"],
  },
  {
    icon: BedDouble, title: "Номера",
    desc: "Управление номерным фондом: тип, этаж, вместимость, цена. Быстрый поиск и фильтрация.",
    tags: ["Поиск", "Фильтры"],
  },
  {
    icon: UserCheck, title: "Проживания",
    desc: "От брони до выезда одной кнопкой. Депозиты, скидки. Двойное бронирование исключено.",
    tags: ["Чек-ин / Аут", "Анти-овербукинг"],
  },
  {
    icon: Wallet, title: "Финансы",
    desc: "Мультикасса, приходы от гостей, расходы по категориям. Нельзя уйти в минус.",
    tags: ["Мультикасса", "Контроль баланса"],
  },
  {
    icon: BarChart3, title: "Отчёты",
    desc: "KPI, ADR, RevPAR. Тренды, топ-10 номеров, закрытие месяца, экспорт в Excel.",
    tags: ["ADR / RevPAR", "Excel"],
  },
  {
    icon: Settings, title: "Настройки",
    desc: "Пользователи, роли, кассы, часовой пояс. Только для администратора.",
    tags: ["Роли", "Кассы"],
  },
];

const whyItems = [
  { icon: Zap, number: "0", suffix: " овербукинга", title: "Защита от двойного бронирования", desc: "Система автоматически проверяет доступность и не позволит заселить в занятый номер." },
  { icon: Clock, number: "1", suffix: " клик", title: "Чек-ин и чек-аут", desc: "Весь процесс от брони до выселения — в одно нажатие. Быстрые платежи из карточки проживания." },
  { icon: Star, number: "100", suffix: "%", title: "Прозрачность финансов", desc: "Каждый сум проходит через кассу. Нельзя добавить расход если баланс кассы недостаточен." },
];

const adminFeatures = [
  "Все операции с данными",
  "Полные отчёты и аналитика",
  "Управление пользователями",
  "Создание и удаление касс",
  "Редактирование в закрытом месяце",
  "Видит расходы всех сотрудников",
];

const managerFeatures = [
  "Все операции с данными",
  "Чек-ин и чек-аут",
  "Приём платежей от гостей",
  "Добавление расходов",
  "Видит только свои расходы",
  "Нет доступа к отчётам",
];

const trustedBy = [
  "Grand Palace Hotel", "Atlas Boutique", "Silk Road Inn",
  "Registan Plaza", "Amir Temur Hotel", "Samarkand Suites",
];

const roomStatuses = [
  "occ","occ","free","occ","in","free","occ","occ",
  "free","occ","occ","free","out","occ","free","occ",
  "occ","free","occ","in","free","occ","occ","free",
];
const statusColor: Record<string, string> = {
  occ: "#F5C100", free: "#151515", in: "#22c55e", out: "#ef4444",
};

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

function FakeDashboard() {
  return (
    <div className="n-card n-card-featured" style={{ overflow: "hidden", width: "100%" }}>
      {/* Title bar */}
      <div style={{ background: "#0a0a0a", borderBottom: "1px solid #191919", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F5C100", display: "inline-block" }} className="dot-live" />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "-0.02em" }}>Natus — Дашборд</span>
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c }} />)}
        </div>
      </div>

      <div style={{ padding: "14px 16px" }}>
        {/* KPI */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 14 }}>
          {[
            { label: "Заездов", value: "8", color: "#F5C100" },
            { label: "Загрузка", value: "87%", color: "#fff" },
            { label: "Выручка", value: "4.2M", color: "#fff" },
          ].map(k => (
            <div key={k.label} style={{ background: "rgba(245,193,0,0.05)", border: "1px solid rgba(245,193,0,0.1)", borderRadius: 10, padding: "8px 10px" }}>
              <p style={{ fontSize: 9, color: "#444", marginBottom: 3 }}>{k.label}</p>
              <p style={{ fontSize: 18, fontWeight: 900, color: k.color, lineHeight: 1 }}>{k.value}</p>
            </div>
          ))}
        </div>

        {/* Room grid */}
        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", color: "#333", textTransform: "uppercase", marginBottom: 6 }}>Номера</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 3, marginBottom: 10 }}>
          {roomStatuses.map((s, i) => (
            <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.03, type: "spring", stiffness: 400, damping: 20 }}
              style={{ height: 18, borderRadius: 4, background: statusColor[s], border: s === "free" ? "1px solid #222" : "none" }} />
          ))}
        </div>

        {/* Legend */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[{ c: "#F5C100", l: "Занято" }, { c: "#22c55e", l: "Заезд" }, { c: "#ef4444", l: "Выезд" }, { c: "#222", l: "Свободно" }].map(item => (
            <div key={item.l} style={{ display: "flex", alignItems: "center", gap: 3 }}>
              <div style={{ width: 6, height: 6, borderRadius: 2, background: item.c }} />
              <span style={{ fontSize: 9, color: "#444" }}>{item.l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Finance bar */}
      <div style={{ borderTop: "1px solid #191919", padding: "10px 16px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
        {[
          { label: "Приходы", value: "8.4M", color: "#22c55e" },
          { label: "Расходы", value: "2.1M", color: "#ef4444" },
          { label: "Нетто", value: "6.3M", color: "#F5C100" },
        ].map(item => (
          <div key={item.label}>
            <p style={{ fontSize: 8, color: "#333", marginBottom: 2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</p>
            <p style={{ fontSize: 13, fontWeight: 800, color: item.color }}>{item.value} ₸</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── NAV LINKS ────────────────────────────────────────────────────────────────

const navLinks: [string, string][] = [
  ["#возможности", "Возможности"],
  ["#почему", "Почему Natus"],
  ["#финансы", "Финансы"],
  ["#отчёты", "Отчёты"],
];

// ─── MAIN ─────────────────────────────────────────────────────────────────────

export default function NatusLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <div style={{ minHeight: "100vh", overflowX: "hidden" }}>
      {/* Noise */}
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

          {/* Desktop nav */}
          <div className="hidden md:flex items-center" style={{ gap: 28 }}>
            {navLinks.map(([href, label]) => (
              <a key={label} href={href} style={{ fontSize: 13, color: "#666", fontWeight: 500, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#666")}>
                {label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#cta" className="btn-y" style={{ padding: "9px 20px", fontSize: 13, borderRadius: 10 }}>
              Запросить демо <ArrowRight size={13} />
            </a>
          </div>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(v => !v)} className="flex items-center justify-center md:hidden"
            style={{ background: "none", border: "1px solid #222", borderRadius: 10, color: "#fff", cursor: "pointer", padding: "8px" }}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
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
                  Запросить демо <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section style={{ position: "relative", overflow: "hidden", paddingTop: 100 }}>
          <div className="hero-grid" />

          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px", position: "relative" }}>
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: 48, alignItems: "center", minHeight: "calc(100vh - 100px)", paddingBottom: 60 }}>

              <motion.div initial="hidden" animate="visible" variants={stagger}>
                <motion.div variants={fadeUp} style={{ marginBottom: 28 }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(245,193,0,0.07)", border: "1px solid rgba(245,193,0,0.18)",
                    borderRadius: 99, padding: "7px 16px", fontSize: 12, fontWeight: 700, color: "#F5C100",
                  }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#F5C100", display: "inline-block" }} className="dot-live" />
                    Hotel Management System
                  </span>
                </motion.div>

                <motion.h1 variants={fadeUp} style={{ fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)", fontWeight: 900, lineHeight: 0.95, marginBottom: 28 }}>
                  <span className="y-text-glow">Управляй</span><br />
                  отелем<br />
                  <span className="y-text">без хаоса.</span>
                </motion.h1>

                <motion.p variants={fadeUp} style={{ fontSize: "clamp(15px, 2.5vw, 18px)", color: "#666", lineHeight: 1.75, marginBottom: 36, maxWidth: 460 }}>
                  Номера, проживания, финансы, аналитика и команда — всё в одном месте. Работает из коробки.
                </motion.p>

                <motion.div variants={fadeUp} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a href="#cta" className="btn-y y-glow" style={{ fontSize: "clamp(14px, 2vw, 16px)" }}>
                    Запросить демо <ArrowRight size={16} />
                  </a>
                  <a href="#возможности" className="btn-o" style={{ fontSize: "clamp(14px, 2vw, 16px)" }}>
                    Возможности
                  </a>
                </motion.div>

                <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
                  {[
                    [Shield, "Анти-овербукинг"],
                    [Globe, "RU / UZ"],
                    [Lock, "Ролевой доступ"],
                  ].map(([Ic, text]) => (
                    <div key={text as string} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      {/* @ts-ignore */}
                      <Ic size={12} color="#F5C100" />
                      <span style={{ fontSize: 12, color: "#444", fontWeight: 600 }}>{text as string}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Dashboard — visible on all screens */}
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className="float"
                style={{ filter: "drop-shadow(0 30px 60px rgba(245,193,0,0.1))" }}>
                <FakeDashboard />
              </motion.div>
            </div>
          </div>
        </section>

        <div className="section-line" />

        {/* ── STATS ─────────────────────────────────────────────────────────── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          style={{ padding: "48px 20px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 0 }}>
              {[
                { val: "6", label: "Модулей" },
                { val: "2", label: "Роли доступа" },
                { val: "RU/UZ", label: "Мультиязычность" },
                { val: "ADR", label: "+ RevPAR аналитика" },
              ].map((s, i, arr) => (
                <motion.div key={s.label} variants={fadeUp} style={{ textAlign: "center", padding: "16px 12px" }}>
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
                Модули
              </motion.p>
              <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1, maxWidth: 550 }}>
                Всё что нужно —<br /><span className="y-text">в одной системе</span>
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 12 }}>
              {modules.map((mod, idx) => (
                <motion.div key={mod.title} variants={fadeUp} className={`n-card n-card-glow ${idx === 0 ? "n-card-featured" : ""}`}
                  style={{ padding: "26px 24px" }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: "rgba(245,193,0,0.07)", border: "1px solid rgba(245,193,0,0.14)",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18,
                  }}>
                    <mod.icon size={19} color="#F5C100" />
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>{mod.title}</h3>
                  <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65, marginBottom: 18 }}>{mod.desc}</p>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {mod.tags.map(tag => (
                      <span key={tag} style={{
                        fontSize: 10, fontWeight: 700, padding: "3px 10px",
                        background: "rgba(245,193,0,0.06)", border: "1px solid rgba(245,193,0,0.12)",
                        borderRadius: 99, color: "#c9a200",
                      }}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        <div className="section-line" />

        {/* ── WHY NATUS ─────────────────────────────────────────────────────── */}
        <section id="почему" style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} style={{ textAlign: "center", marginBottom: 52 }}>
              <motion.p variants={fadeUp} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#F5C100", textTransform: "uppercase", marginBottom: 14 }}>
                Преимущества
              </motion.p>
              <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1 }}>
                Почему <span className="y-text">Natus</span>
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 12 }}>
              {whyItems.map(item => (
                <motion.div key={item.title} variants={fadeUp} className="n-card n-card-glow" style={{ padding: "32px 24px", textAlign: "center" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, margin: "0 auto 20px",
                    background: "rgba(245,193,0,0.08)", border: "1px solid rgba(245,193,0,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <item.icon size={22} color="#F5C100" />
                  </div>
                  <p style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "#F5C100", lineHeight: 1, marginBottom: 4 }}>
                    <Counter value={parseInt(item.number)} suffix={item.suffix} />
                  </p>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 10, marginTop: 12 }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: "#555", lineHeight: 1.65 }}>{item.desc}</p>
                </motion.div>
              ))}
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
                  Финансы
                </motion.p>
                <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
                  Полный контроль<br />над деньгами отеля
                </motion.h2>
                <motion.p variants={fadeUp} style={{ fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 32 }}>
                  Несколько касс, приходы от гостей, расходы по категориям. Система не даст добавить расход при недостатке баланса.
                </motion.p>
                <motion.ul variants={stagger} style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Наличные, Терминал, PayMe — любые методы",
                    "Каждая касса — отдельный баланс и история",
                    "Расходы: зарплата, ремонт, маркетинг, прочее",
                    "Фильтры по дате, типу, кассе",
                    "Нельзя уйти в минус — контроль автоматический",
                  ].map(item => (
                    <motion.li key={item} variants={fadeUp} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#777" }}>
                      <CheckCircle2 size={14} color="#F5C100" style={{ flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}>
                <div className="n-card n-card-featured" style={{ padding: "20px" }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#333", textTransform: "uppercase", marginBottom: 12 }}>Кассы</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {[
                      { name: "Наличные", balance: "3 200 000", delta: "+820 000", up: true },
                      { name: "Терминал", balance: "1 580 000", delta: "+340 000", up: true },
                      { name: "PayMe", balance: "420 000", delta: "−150 000", up: false },
                    ].map(cash => (
                      <div key={cash.name} style={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        background: "#121212", border: "1px solid #191919", borderRadius: 10, padding: "12px 14px",
                      }}>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{cash.name}</p>
                          <p style={{ fontSize: 10, color: "#333" }}>Баланс</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <p style={{ fontSize: 14, fontWeight: 800, color: "#F5C100", marginBottom: 2 }}>{cash.balance} ₸</p>
                          <p style={{ fontSize: 10, color: cash.up ? "#22c55e" : "#ef4444" }}>{cash.delta}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: 14, padding: 14, background: "rgba(245,193,0,0.03)", border: "1px solid rgba(245,193,0,0.1)", borderRadius: 10 }}>
                    {[
                      { label: "↑ Приходы", value: "8 400 000 ₸", color: "#22c55e" },
                      { label: "↓ Расходы", value: "2 100 000 ₸", color: "#ef4444" },
                    ].map(row => (
                      <div key={row.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                        <span style={{ fontSize: 12, color: "#444" }}>{row.label}</span>
                        <span style={{ fontSize: 12, fontWeight: 700, color: row.color }}>{row.value}</span>
                      </div>
                    ))}
                    <div style={{ height: 1, background: "#191919", margin: "10px 0" }} />
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>= Нетто</span>
                      <span style={{ fontSize: 13, fontWeight: 900, color: "#F5C100" }}>6 300 000 ₸</span>
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

              {/* Chart mockup */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }} className="order-2 lg:order-1">
                <div className="n-card n-card-featured" style={{ padding: 20 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#333", textTransform: "uppercase", marginBottom: 12 }}>KPI — текущий месяц</p>
                  <div className="grid grid-cols-2" style={{ gap: 6, marginBottom: 18 }}>
                    {[
                      { label: "Выручка", value: "42M ₸", up: true },
                      { label: "Загрузка", value: "87%", up: true },
                      { label: "ADR", value: "65 000 ₸", up: false },
                      { label: "RevPAR", value: "56 550 ₸", up: true },
                    ].map(kpi => (
                      <div key={kpi.label} style={{ background: "#121212", border: "1px solid #191919", borderRadius: 10, padding: "12px 14px" }}>
                        <p style={{ fontSize: 10, color: "#333", marginBottom: 5 }}>{kpi.label}</p>
                        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                          <span style={{ fontSize: 16, fontWeight: 900, color: "#fff" }}>{kpi.value}</span>
                          <TrendingUp size={11} color={kpi.up ? "#22c55e" : "#ef4444"} style={{ transform: kpi.up ? "none" : "rotate(180deg)" }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#333", textTransform: "uppercase", marginBottom: 10 }}>Тренд выручки</p>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 68 }}>
                    {[38, 52, 34, 61, 73, 87].map((h, i) => (
                      <motion.div key={i}
                        initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                        style={{
                          flex: 1, height: `${h}%`, borderRadius: "5px 5px 2px 2px", transformOrigin: "bottom",
                          background: i === 5 ? "linear-gradient(180deg, #F5C100 0%, #7a6000 100%)" : "rgba(245,193,0,0.15)",
                          border: i === 5 ? "none" : "1px solid rgba(245,193,0,0.08)",
                        }} />
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                    {["Сен","Окт","Ноя","Дек","Янв","Фев"].map(m => (
                      <span key={m} style={{ fontSize: 9, color: "#333" }}>{m}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="order-1 lg:order-2">
                <motion.p variants={fadeUp} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#F5C100", textTransform: "uppercase", marginBottom: 14 }}>
                  Отчёты
                </motion.p>
                <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(1.6rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 16 }}>
                  Аналитика<br />международного уровня
                </motion.h2>
                <motion.p variants={fadeUp} style={{ fontSize: 15, color: "#555", lineHeight: 1.75, marginBottom: 32 }}>
                  ADR, RevPAR, загрузка, закрытие месяца с защитой данных. Только для администратора.
                </motion.p>
                <motion.ul variants={stagger} style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Тренд выручки за 6 месяцев",
                    "Топ-10 номеров по доходу",
                    "Разбивка по методам оплаты",
                    "Расходы по категориям",
                    "Закрытие месяца — защита от правок",
                    "Экспорт в Excel одним кликом",
                  ].map(item => (
                    <motion.li key={item} variants={fadeUp} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13, color: "#777" }}>
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
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              style={{ textAlign: "center", marginBottom: 52 }}>
              <motion.p variants={fadeUp} style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: "#F5C100", textTransform: "uppercase", marginBottom: 14 }}>
                Роли доступа
              </motion.p>
              <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)", fontWeight: 900, lineHeight: 1.1 }}>
                Каждый видит только то,<br /><span className="y-text">что ему нужно</span>
              </motion.h2>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12, maxWidth: 760, margin: "0 auto" }}>
              {[
                { title: "Администратор", features: adminFeatures, primary: true, Icon: Shield },
                { title: "Менеджер", features: managerFeatures, primary: false, Icon: UserCheck },
              ].map(role => (
                <motion.div key={role.title} variants={fadeUp} className={`n-card ${role.primary ? "n-card-featured" : ""}`} style={{
                  padding: "28px 24px",
                  border: role.primary ? "1px solid rgba(245,193,0,0.22)" : "1px solid #191919",
                  boxShadow: role.primary ? "0 0 60px rgba(245,193,0,0.04)" : "none",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 10,
                      background: role.primary ? "rgba(245,193,0,0.1)" : "#121212",
                      border: role.primary ? "1px solid rgba(245,193,0,0.2)" : "1px solid #222",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <role.Icon size={16} color={role.primary ? "#F5C100" : "#444"} />
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 800, color: role.primary ? "#F5C100" : "#fff" }}>{role.title}</h3>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 9 }}>
                    {role.features.map(f => (
                      <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#777" }}>
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
          {/* CTA glow */}
          <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,193,0,0.06) 0%, transparent 60%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative" }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(245,193,0,0.07)", border: "1px solid rgba(245,193,0,0.18)",
                borderRadius: 99, padding: "7px 16px", fontSize: 12, fontWeight: 700, color: "#F5C100", marginBottom: 28,
              }}>
                <Building2 size={12} />
                Для малых и средних отелей
              </motion.div>

              <motion.h2 variants={fadeUp} style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 20 }}>
                Готовы навести<br /><span className="y-text">порядок в отеле?</span>
              </motion.h2>

              <motion.p variants={fadeUp} style={{ fontSize: "clamp(15px, 2.5vw, 18px)", color: "#555", lineHeight: 1.75, marginBottom: 44 }}>
                Покажем Natus в действии на реальных данных вашего отеля.
              </motion.p>

              <motion.div variants={fadeUp}>
                <a href="https://t.me/sqd_dev" target="_blank" rel="noreferrer" className="btn-y y-glow" style={{ fontSize: "clamp(14px, 2vw, 16px)", padding: "16px 32px" }}>
                  Написать в Telegram <ArrowRight size={16} />
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
