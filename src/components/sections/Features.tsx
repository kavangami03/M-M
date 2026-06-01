"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import {
  Smartphone,
  Cloud,
  Radar,
  Route,
  ScanFace,
  ClipboardList,
  LayoutDashboard,
  Siren,
  Network,
  CheckCircle2,
  Database,
  MapPin,
  UserCheck,
  AlertCircle,
  Activity,
  Shield,
  Scan,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 *  Accent palette — full static class strings so Tailwind keeps them  *
 * ------------------------------------------------------------------ */
type Accent = {
  icon: string; // resting icon color
  wrap: string; // resting icon container gradient + border
  hoverWrap: string; // icon container on hover (solid accent)
  bar: string; // sliding top accent bar gradient
  badge: string; // floating micro-badge color
  num: string; // index watermark hover tint
  glow: string; // ambient corner glow
  spot: string; // cursor spotlight rgba
};

const ACCENTS: Record<string, Accent> = {
  emerald: {
    icon: "text-emerald-600",
    wrap: "from-emerald-50 to-emerald-100/40 border-emerald-100/70",
    hoverWrap: "group-hover:from-emerald-500 group-hover:to-teal-600 group-hover:border-emerald-400/30",
    bar: "from-emerald-500 via-teal-500 to-emerald-600",
    badge: "bg-emerald-500 border-emerald-300/40",
    num: "group-hover:text-emerald-500/[0.07]",
    glow: "bg-emerald-400/20",
    spot: "rgba(16,185,129,0.12)",
  },
  indigo: {
    icon: "text-indigo-600",
    wrap: "from-indigo-50 to-indigo-100/40 border-indigo-100/70",
    hoverWrap: "group-hover:from-indigo-500 group-hover:to-blue-600 group-hover:border-indigo-400/30",
    bar: "from-indigo-500 via-blue-500 to-indigo-600",
    badge: "bg-indigo-500 border-indigo-300/40",
    num: "group-hover:text-indigo-500/[0.07]",
    glow: "bg-indigo-400/20",
    spot: "rgba(99,102,241,0.12)",
  },
  rose: {
    icon: "text-rose-600",
    wrap: "from-rose-50 to-rose-100/40 border-rose-100/70",
    hoverWrap: "group-hover:from-rose-500 group-hover:to-pink-600 group-hover:border-rose-400/30",
    bar: "from-rose-500 via-pink-500 to-rose-600",
    badge: "bg-rose-500 border-rose-300/40",
    num: "group-hover:text-rose-500/[0.07]",
    glow: "bg-rose-400/20",
    spot: "rgba(244,63,94,0.12)",
  },
  blue: {
    icon: "text-blue-600",
    wrap: "from-blue-50 to-blue-100/40 border-blue-100/70",
    hoverWrap: "group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:border-blue-400/30",
    bar: "from-blue-500 via-indigo-500 to-blue-600",
    badge: "bg-blue-500 border-blue-300/40",
    num: "group-hover:text-blue-500/[0.07]",
    glow: "bg-blue-400/20",
    spot: "rgba(37,99,235,0.12)",
  },
  violet: {
    icon: "text-violet-600",
    wrap: "from-violet-50 to-violet-100/40 border-violet-100/70",
    hoverWrap: "group-hover:from-violet-500 group-hover:to-purple-600 group-hover:border-violet-400/30",
    bar: "from-violet-500 via-purple-500 to-violet-600",
    badge: "bg-violet-500 border-violet-300/40",
    num: "group-hover:text-violet-500/[0.07]",
    glow: "bg-violet-400/20",
    spot: "rgba(139,92,246,0.12)",
  },
  amber: {
    icon: "text-amber-600",
    wrap: "from-amber-50 to-amber-100/40 border-amber-100/70",
    hoverWrap: "group-hover:from-amber-500 group-hover:to-orange-600 group-hover:border-amber-400/30",
    bar: "from-amber-500 via-orange-500 to-amber-600",
    badge: "bg-amber-500 border-amber-300/40",
    num: "group-hover:text-amber-500/[0.07]",
    glow: "bg-amber-400/20",
    spot: "rgba(245,158,11,0.12)",
  },
  teal: {
    icon: "text-teal-600",
    wrap: "from-teal-50 to-teal-100/40 border-teal-100/70",
    hoverWrap: "group-hover:from-teal-500 group-hover:to-cyan-600 group-hover:border-teal-400/30",
    bar: "from-teal-500 via-cyan-500 to-teal-600",
    badge: "bg-teal-500 border-teal-300/40",
    num: "group-hover:text-teal-500/[0.07]",
    glow: "bg-teal-400/20",
    spot: "rgba(20,184,166,0.12)",
  },
  red: {
    icon: "text-red-600",
    wrap: "from-red-50 to-red-100/40 border-red-100/70",
    hoverWrap: "group-hover:from-red-500 group-hover:to-rose-600 group-hover:border-red-400/30",
    bar: "from-red-500 via-rose-500 to-red-600",
    badge: "bg-red-500 border-red-300/40",
    num: "group-hover:text-red-500/[0.07]",
    glow: "bg-red-400/20",
    spot: "rgba(239,68,68,0.12)",
  },
  sky: {
    icon: "text-sky-600",
    wrap: "from-sky-50 to-sky-100/40 border-sky-100/70",
    hoverWrap: "group-hover:from-sky-500 group-hover:to-blue-600 group-hover:border-sky-400/30",
    bar: "from-sky-500 via-blue-500 to-sky-600",
    badge: "bg-sky-500 border-sky-300/40",
    num: "group-hover:text-sky-500/[0.07]",
    glow: "bg-sky-400/20",
    spot: "rgba(14,165,233,0.12)",
  },
};

/* ------------------------------------------------------------------ *
 *  Feature data — span drives the bento layout (6-col grid on lg)     *
 *  spans tile cleanly: 4+2 / 2+4 / 2+2+2 / 3+3                          *
 * ------------------------------------------------------------------ */
type Feature = {
  icon: LucideIcon;
  badge: LucideIcon;
  title: string;
  desc: string;
  accent: keyof typeof ACCENTS;
  span: string; // lg col-span
};

const FEATURES: Feature[] = [
  {
    icon: Smartphone,
    badge: CheckCircle2,
    title: "No Expensive Devices",
    desc: "Run entirely on standard smartphones. No need for specialized rugged hardware or upfront device spend.",
    accent: "emerald",
    span: "lg:col-span-4",
  },
  {
    icon: Cloud,
    badge: Database,
    title: "Zero Maintenance",
    desc: "Cloud-based architecture means no servers to patch and no hardware costs.",
    accent: "indigo",
    span: "lg:col-span-2",
  },
  {
    icon: Radar,
    badge: MapPin,
    title: "Real-Time Tracking",
    desc: "Monitor guards live as they move between checkpoints with GPS accuracy.",
    accent: "rose",
    span: "lg:col-span-2",
  },
  {
    icon: Route,
    badge: Scan,
    title: "Patrol Monitoring",
    desc: "Automated logging of QR code and GPS checkpoint scans throughout every patrol route.",
    accent: "blue",
    span: "lg:col-span-4",
  },
  {
    icon: ScanFace,
    badge: UserCheck,
    title: "Attendance System",
    desc: "Facial recognition and geofenced check-ins for perfect time tracking.",
    accent: "violet",
    span: "lg:col-span-2",
  },
  {
    icon: ClipboardList,
    badge: AlertCircle,
    title: "Incident Reporting",
    desc: "Submit photo and text reports directly from the field, instantly.",
    accent: "amber",
    span: "lg:col-span-2",
  },
  {
    icon: LayoutDashboard,
    badge: Activity,
    title: "Live Dashboard",
    desc: "A bird's-eye view of every operation from one unified command center.",
    accent: "teal",
    span: "lg:col-span-2",
  },
  {
    icon: Siren,
    badge: Shield,
    title: "SOS Alerts",
    desc: "One-tap panic button lets guards instantly alert central command in an emergency.",
    accent: "red",
    span: "lg:col-span-3",
  },
  {
    icon: Network,
    badge: MapPin,
    title: "Centralized Control",
    desc: "Manage multiple sites and properties from a single master account.",
    accent: "sky",
    span: "lg:col-span-3",
  },
];

/* Cursor-following spotlight — updates CSS vars on the hovered card */
function handleSpotlight(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const a = ACCENTS[feature.accent];
  const Icon = feature.icon;
  const Badge = feature.badge;
  const isLarge = feature.span.includes("col-span-4");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.07, ease: [0.215, 0.61, 0.355, 1] }}
      whileHover={{ y: -6 }}
      onMouseMove={handleSpotlight}
      style={{ "--spot": a.spot } as React.CSSProperties}
      className={`group relative ${feature.span} rounded-[26px] p-[1.5px] bg-gradient-to-b from-slate-200/70 via-slate-100/40 to-slate-200/30 transition-shadow duration-500 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_24px_60px_-12px_rgba(37,99,235,0.16)]`}
    >
      {/* Animated gradient border on hover */}
      <span
        className={`pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-br ${a.bar} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
      />

      {/* Card body */}
      <div className="relative h-full overflow-hidden rounded-[25px] bg-white/75 backdrop-blur-md transition-colors duration-500 group-hover:bg-white/95 flex flex-col">
        {/* Sliding top accent bar */}
        <span
          className={`absolute top-0 left-0 z-20 h-[3px] w-0 bg-gradient-to-r ${a.bar} transition-all duration-700 ease-out group-hover:w-full`}
        />

        {/* Cursor-following spotlight */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(420px_circle_at_var(--mx)_var(--my),var(--spot),transparent_55%)]" />

        {/* Ambient corner glow */}
        <div
          className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full ${a.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Faint dotted grid texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle,rgba(15,23,42,0.5)_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* Index watermark */}
        <div
          className={`pointer-events-none absolute right-5 bottom-2 select-none font-mono text-[5.5rem] font-black leading-none text-slate-900/[0.045] transition-all duration-700 ${a.num} group-hover:scale-105`}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Oversized ghost icon for hero cards */}
        {isLarge && (
          <Icon
            aria-hidden
            className="pointer-events-none absolute -bottom-8 right-6 h-44 w-44 text-slate-900/[0.03] transition-all duration-700 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-3"
          />
        )}

        <div className={`relative z-10 flex h-full flex-col ${isLarge ? "p-7 md:p-9 min-h-[260px]" : "p-6 md:p-7 min-h-[230px]"}`}>
          {/* Layered icon badge */}
          <div className="mb-5">
            <div
              className={`relative flex items-center justify-center rounded-2xl border bg-gradient-to-br ${a.wrap} ${a.hoverWrap} shadow-[0_6px_16px_-6px_rgba(15,23,42,0.12)] transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-105 ${isLarge ? "h-16 w-16" : "h-14 w-14"}`}
            >
              <Icon
                className={`${a.icon} transition-all duration-500 group-hover:rotate-6 group-hover:text-white ${isLarge ? "h-8 w-8" : "h-6 w-6"}`}
              />
              {/* Floating micro-badge */}
              <span
                className={`absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full border shadow-[0_2px_6px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${a.badge}`}
              >
                <Badge className="h-2.5 w-2.5 text-white" />
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="mt-auto">
            <h3
              className={`font-heading font-bold tracking-tight text-slate-900 mb-2.5 ${isLarge ? "text-xl md:text-2xl" : "text-lg"}`}
            >
              {feature.title}
            </h3>
            <p
              className={`leading-relaxed font-medium text-slate-600 ${isLarge ? "text-[15px] md:text-base max-w-md" : "text-sm"}`}
            >
              {feature.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-16 md:py-28 bg-gradient-to-br from-[#f8faff] via-[#edf2ff] to-[#e0e6ff] text-slate-900"
    >
      {/* Technical blueprint background watermark */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: "url('/features_bg.png')" }}
      />

      {/* Ambient glowing orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-blue-300/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[480px] w-[480px] rounded-full bg-indigo-300/15 blur-[140px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-[1520px]">
        <SectionHeader
          eyebrow="Capabilities"
          title={<>Powerful Features. <br /> <span className="text-gradient-animated">Simple Execution.</span></>}
          description="Everything you need to run a modern, efficient, and accountable security operation — without the enterprise price tag."
          dark={false}
          align="center"
        />

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
