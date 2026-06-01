"use client";

import { motion } from "framer-motion";
import { Users, Radar, MonitorSmartphone, Building2, FileCheck } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../SectionHeader";

const STATS = [
  { icon: Users, kicker: "Workforce", label: "Guards Supported", value: "10K+", image: "/stat-guards.png" },
  { icon: Radar, kicker: "Tracking", label: "Live Monitoring", value: "Real-Time", image: "/stat-tracking.png" },
  { icon: MonitorSmartphone, kicker: "Infrastructure", label: "Hardware Maintenance", value: "Zero", image: "/stat-devices.png" },
  { icon: Building2, kicker: "Coverage", label: "Site Management", value: "Multi-Site", image: "/stat-sites.png" },
  { icon: FileCheck, kicker: "Reporting", label: "Field Reports", value: "Instant", image: "/stat-reports.png" },
];

function StatCard({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  const Icon = stat.icon;
  return (
    <article className="group relative w-[270px] md:w-[310px] h-[260px] md:h-[290px] flex-shrink-0 mr-4 md:mr-5 rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:border-blue-400 hover:shadow-[0_15px_40px_rgba(37,99,235,0.08)] hover:-translate-y-1 flex flex-col">
      {/* Image Container — clean and razor-sharp without overlays */}
      <div className="relative w-full h-[125px] md:h-[145px] overflow-hidden shrink-0">
        <Image
          src={stat.image}
          alt={stat.label}
          fill
          sizes="310px"
          className="object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-105"
        />
        {/* Soft, ultra-subtle vignette overlay for depth */}
        <div className="absolute inset-0 bg-slate-900/[0.02]" />
        
        {/* Floating Icon Badge */}
        <div className="absolute top-3 left-3 flex items-center justify-center w-8 h-8 rounded-lg bg-white/95 backdrop-blur-sm shadow-sm text-blue-600 border border-slate-200/50">
          <Icon className="w-4 h-4 text-blue-600" strokeWidth={2} />
        </div>
        
        {/* Floating Stat Index */}
        <div className="absolute top-3 right-3 text-[9px] font-mono font-bold text-white bg-slate-900/40 backdrop-blur-sm py-0.5 px-2 rounded-full">
          /{String(index + 1).padStart(2, "0")}
        </div>
      </div>

      {/* Content Body — solid white background with perfect typographic legibility */}
      <div className="p-4 md:p-5 flex flex-col justify-between flex-1 bg-white">
        <div>
          <div className="text-[10px] font-mono font-bold uppercase tracking-[0.18em] text-blue-600 mb-1">
            {stat.kicker}
          </div>
          <div className="text-2xl md:text-3xl font-bold font-heading text-slate-900 tracking-tight tabular-nums leading-tight">
            {stat.value}
          </div>
        </div>
        
        <div className="mt-2">
          <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
            {stat.label}
          </div>
          <span className="mt-2 md:mt-3 block h-0.5 w-8 group-hover:w-full bg-gradient-to-r from-blue-500 via-indigo-400 to-transparent transition-all duration-500" />
        </div>
      </div>
    </article>
  );
}

export default function TrustStats() {
  // Duplicated once so the -50% translate loops seamlessly
  const loop = [...STATS, ...STATS];

  return (
    <section className="relative overflow-hidden bg-[#ffffff] py-10 md:py-14">
      {/* Fine dot-grid texture - subtle and elegant */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(0,0,0,0.3)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-400/[0.05] blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-slate-200/50" />

      <div className="relative z-10">
        {/* Compact header — unified SectionHeader */}
        <div className="container mx-auto px-4 sm:px-6 max-w-[1520px]">
          <SectionHeader
            eyebrow="Trusted at scale"
            title="Built for security teams of every size."
            align="center"
          />
        </div>

        {/* Marquee */}
        <div className="marquee-track relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-marquee">
            {loop.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i % STATS.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
