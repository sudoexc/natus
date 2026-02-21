"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight, ChevronLeft, LayoutDashboard, BedDouble,
  Users, BarChart3, Wallet, FileText, CheckCircle2,
  AlertTriangle, Zap, Shield, Clock, TrendingUp, ArrowRight,
  MessageCircle,
} from "lucide-react";

// ─── SLIDE TRANSITION ─────────────────────────────────────────────────────────
const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};
const transition = { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] };

// ─── SLIDE COMPONENTS ─────────────────────────────────────────────────────────

function Slide1() {
  return (
    <div className="slide-center" style={{ textAlign: "center", gap: 32 }}>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
        <span style={{ fontSize: "clamp(13px, 1.5vw, 15px)", fontWeight: 700, letterSpacing: "0.25em", color: "#F5C100", textTransform: "uppercase" }}>
          Hotel Management System
        </span>
      </motion.div>

      <motion.h1 initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }}
        style={{ fontSize: "clamp(80px, 16vw, 180px)", fontWeight: 900, letterSpacing: "-0.06em", lineHeight: 0.9, margin: 0 }}>
        <span style={{ color: "#F5C100" }}>N</span>atus
      </motion.h1>

      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
        style={{ fontSize: "clamp(16px, 2.5vw, 24px)", color: "#555", maxWidth: 560, lineHeight: 1.5 }}>
        Профессиональная система управления отелем — всё в одном интерфейсе
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.6 }}
        style={{ display: "flex", gap: 16, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {["Номера", "Проживания", "Финансы", "Аналитика", "Роли"].map((t, i) => (
          <span key={t} style={{ fontSize: 13, fontWeight: 600, color: "#333", padding: "6px 16px", border: "1px solid #1e1e1e", borderRadius: 99 }}>
            {t}
          </span>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}
        style={{ fontSize: 13, color: "#2a2a2a", marginTop: 16 }}>
        @sqd_dev · natus.uz
      </motion.div>
    </div>
  );
}

function Slide2() {
  const problems = [
    { icon: AlertTriangle, text: "Excel-таблицы с историей проживаний теряются и путаются" },
    { icon: AlertTriangle, text: "Нет единого учёта финансов — всё на бумаге или в блокноте" },
    { icon: AlertTriangle, text: "Сотрудники путают номера, двойные бронирования" },
    { icon: AlertTriangle, text: "Руководитель не видит реальную картину по отелю онлайн" },
    { icon: AlertTriangle, text: "Нет аналитики — не ясно какие номера прибыльнее" },
    { icon: AlertTriangle, text: "Отчёты формируются вручную часами" },
  ];
  return (
    <div className="slide-content" style={{ gap: 40 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#F5C100", textTransform: "uppercase", marginBottom: 12 }}>Проблема</p>
        <h2 className="slide-title">Как отели<br />работают сегодня</h2>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
        {problems.map(({ icon: Icon, text }, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
            style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "16px 20px", background: "rgba(255,60,60,0.04)", border: "1px solid rgba(255,60,60,0.12)", borderRadius: 12 }}>
            <Icon size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: 2 }} />
            <span style={{ fontSize: 14, color: "#555", lineHeight: 1.5 }}>{text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Slide3() {
  return (
    <div className="slide-content" style={{ gap: 40 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#F5C100", textTransform: "uppercase", marginBottom: 12 }}>Решение</p>
        <h2 className="slide-title">Natus — всё<br />в одном месте</h2>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {[
          { icon: BedDouble, title: "Номера", desc: "Визуальная карта всех номеров с реальным статусом" },
          { icon: Users, title: "Гости", desc: "Полная история проживаний каждого гостя" },
          { icon: Wallet, title: "Финансы", desc: "Доходы, расходы, нетто в реальном времени" },
          { icon: BarChart3, title: "Аналитика", desc: "Загруженность, выручка, тренды по периодам" },
          { icon: FileText, title: "Отчёты", desc: "Автоматические отчёты одной кнопкой" },
          { icon: Shield, title: "Роли", desc: "Администратор и менеджер с разными правами" },
        ].map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
            style={{ padding: "20px", background: "#0c0c0c", border: "1px solid #191919", borderRadius: 14, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(245,193,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon size={16} color="#F5C100" />
            </div>
            <p style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>{title}</p>
            <p style={{ fontSize: 12, color: "#444", margin: 0, lineHeight: 1.5 }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Slide4() {
  return (
    <div className="slide-content" style={{ gap: 40 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#F5C100", textTransform: "uppercase", marginBottom: 12 }}>Финансы & Аналитика</p>
        <h2 className="slide-title">Полный контроль<br />над деньгами</h2>
      </motion.div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {/* Finance card */}
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}
          style={{ padding: 24, background: "#0c0c0c", border: "1px solid #191919", borderRadius: 16 }}>
          <p style={{ fontSize: 12, color: "#444", marginBottom: 16, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Текущий месяц</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { label: "Доходы", value: "124M сум", color: "#22c55e", pct: 80 },
              { label: "Расходы", value: "31M сум", color: "#ef4444", pct: 25 },
              { label: "Нетто", value: "93M сум", color: "#F5C100", pct: 60 },
            ].map(({ label, value, color, pct }) => (
              <div key={label}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: "#555" }}>{label}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color }}>{value}</span>
                </div>
                <div style={{ height: 4, background: "#191919", borderRadius: 99, overflow: "hidden" }}>
                  <motion.div initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ height: "100%", background: color, borderRadius: 99 }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { label: "Заполняемость", value: "87%", sub: "выше среднего по рынку" },
            { label: "Средний чек", value: "420K сум", sub: "за ночь / номер" },
            { label: "Активных гостей", value: "24", sub: "прямо сейчас" },
          ].map(({ label, value, sub }, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
              style={{ padding: "18px 20px", background: "#0c0c0c", border: "1px solid #191919", borderRadius: 14, flex: 1 }}>
              <p style={{ fontSize: 11, color: "#444", marginBottom: 6, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</p>
              <p style={{ fontSize: 28, fontWeight: 900, color: "#F5C100", margin: "0 0 4px", letterSpacing: "-0.03em" }}>{value}</p>
              <p style={{ fontSize: 11, color: "#333", margin: 0 }}>{sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Slide5() {
  const roles = [
    {
      role: "Администратор",
      color: "#F5C100",
      perms: [
        "Полный доступ ко всем модулям",
        "Управление сотрудниками и ролями",
        "Финансовые отчёты и аналитика",
        "Настройки системы и номерного фонда",
        "Просмотр всей истории операций",
      ],
    },
    {
      role: "Менеджер",
      color: "#60a5fa",
      perms: [
        "Управление номерами и бронированиями",
        "Регистрация заезда и выезда гостей",
        "Базовая кассовая операция",
        "Просмотр расписания номеров",
        "Без доступа к финансовым итогам",
      ],
    },
  ];
  return (
    <div className="slide-content" style={{ gap: 40 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#F5C100", textTransform: "uppercase", marginBottom: 12 }}>Роли сотрудников</p>
        <h2 className="slide-title">Каждый видит<br />только своё</h2>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {roles.map(({ role, color, perms }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.15, duration: 0.5 }}
            style={{ padding: 24, background: "#0c0c0c", border: `1px solid ${color}22`, borderRadius: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: color }} />
              <p style={{ fontSize: 16, fontWeight: 800, margin: 0, color }}>{role}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {perms.map((p, j) => (
                <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <CheckCircle2 size={14} color={color} style={{ flexShrink: 0, marginTop: 1 }} />
                  <span style={{ fontSize: 13, color: "#555", lineHeight: 1.4 }}>{p}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Slide6() {
  const advantages = [
    { icon: Zap, title: "Быстрый старт", desc: "Настройка и запуск за 1 день. Обучение персонала — 2 часа." },
    { icon: Clock, title: "-70% времени", desc: "На рутинные операции: заезд, выезд, отчёты." },
    { icon: TrendingUp, title: "Рост выручки", desc: "Аналитика помогает заполнять номера и управлять ценами." },
    { icon: Shield, title: "Безопасность", desc: "Разграничение прав — никто не видит лишнего." },
    { icon: BarChart3, title: "Отчёты мгновенно", desc: "Любой отчёт за любой период — одна кнопка." },
    { icon: LayoutDashboard, title: "Один экран", desc: "Весь отель на одном дашборде в реальном времени." },
  ];
  return (
    <div className="slide-content" style={{ gap: 40 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#F5C100", textTransform: "uppercase", marginBottom: 12 }}>Почему Natus</p>
        <h2 className="slide-title">Конкретные<br />результаты</h2>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {advantages.map(({ icon: Icon, title, desc }, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i, duration: 0.5 }}
            style={{ padding: "18px 20px", background: "#0c0c0c", border: "1px solid #191919", borderRadius: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <Icon size={15} color="#F5C100" />
              <p style={{ fontSize: 14, fontWeight: 700, margin: 0 }}>{title}</p>
            </div>
            <p style={{ fontSize: 12, color: "#444", margin: 0, lineHeight: 1.5 }}>{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Slide7() {
  return (
    <div className="slide-center" style={{ textAlign: "center", gap: 36 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.2em", color: "#F5C100", textTransform: "uppercase", marginBottom: 24 }}>Начать работу</p>
        <h2 style={{ fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.1, margin: "0 0 20px" }}>
          Готовы запустить<br />Natus в вашем отеле?
        </h2>
        <p style={{ fontSize: "clamp(15px, 2vw, 20px)", color: "#444", maxWidth: 500, margin: "0 auto", lineHeight: 1.6 }}>
          Покажем систему вживую на демо-данных.<br />Первый месяц — бесплатно.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }}
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <a href="https://t.me/sqd_dev" target="_blank" rel="noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#F5C100", color: "#000", fontWeight: 800, fontSize: 17, padding: "16px 36px", borderRadius: 14, textDecoration: "none", boxShadow: "0 0 40px rgba(245,193,0,0.35)" }}>
          <MessageCircle size={18} />
          Написать в Telegram
          <ArrowRight size={16} />
        </a>
        <p style={{ fontSize: 14, color: "#2a2a2a" }}>@sqd_dev · natus.uz</p>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
        style={{ display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap" }}>
        {[
          { num: "1 день", label: "быстрый запуск" },
          { num: "24/7", label: "работает без остановок" },
          { num: "∞", label: "номеров и гостей" },
        ].map(({ num, label }) => (
          <div key={num} style={{ textAlign: "center" }}>
            <p style={{ fontSize: 28, fontWeight: 900, color: "#F5C100", margin: "0 0 4px", letterSpacing: "-0.03em" }}>{num}</p>
            <p style={{ fontSize: 12, color: "#333", margin: 0 }}>{label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ─── SLIDES CONFIG ────────────────────────────────────────────────────────────
const slides = [
  { id: 1, label: "Natus", component: Slide1 },
  { id: 2, label: "Проблема", component: Slide2 },
  { id: 3, label: "Решение", component: Slide3 },
  { id: 4, label: "Финансы", component: Slide4 },
  { id: 5, label: "Роли", component: Slide5 },
  { id: 6, label: "Почему Natus", component: Slide6 },
  { id: 7, label: "Контакт", component: Slide7 },
];

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function PitchPage() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number) => {
    if (next < 0 || next >= slides.length) return;
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  }, [current]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") go(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, go]);

  const SlideComponent = slides[current].component;

  return (
    <div style={{ background: "#060606", color: "#fff", height: "100vh", width: "100vw", overflow: "hidden", position: "relative", fontFamily: "var(--font-inter), sans-serif", userSelect: "none" }}>

      {/* Ambient glow */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(245,193,0,0.05) 0%, transparent 65%)" }} />
      </div>

      {/* Slide */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div key={current} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={transition}
          style={{ position: "absolute", inset: 0, zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 60px 100px" }}>
          <div style={{ width: "100%", maxWidth: 1000 }}>
            <SlideComponent />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Top bar */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 10, padding: "20px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.05em" }}>
          <span style={{ color: "#F5C100" }}>N</span>atus
        </span>
        <span style={{ fontSize: 12, color: "#2a2a2a", fontWeight: 600 }}>
          {current + 1} / {slides.length}
        </span>
      </div>

      {/* Dots */}
      <div style={{ position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", gap: 8, alignItems: "center" }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => go(i)}
            style={{ width: i === current ? 24 : 6, height: 6, borderRadius: 99, background: i === current ? "#F5C100" : "#222", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease" }} />
        ))}
      </div>

      {/* Nav arrows */}
      <button onClick={() => go(current - 1)} disabled={current === 0}
        style={{ position: "fixed", left: 20, top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "transparent", border: "1px solid #1a1a1a", color: current === 0 ? "#1a1a1a" : "#444", cursor: current === 0 ? "default" : "pointer", borderRadius: 10, padding: 10, display: "flex" }}>
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => go(current + 1)} disabled={current === slides.length - 1}
        style={{ position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)", zIndex: 10, background: "transparent", border: "1px solid #1a1a1a", color: current === slides.length - 1 ? "#1a1a1a" : "#444", cursor: current === slides.length - 1 ? "default" : "pointer", borderRadius: 10, padding: 10, display: "flex" }}>
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
