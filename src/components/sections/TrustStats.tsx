"use client";

import { motion } from "framer-motion";
import { Users, Radar, MonitorSmartphone, Building2, FileCheck } from "lucide-react";
import Image from "next/image";

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
    <article className="group relative w-[270px] md:w-[310px] h-[230px] md:h-[260px] flex-shrink-0 mr-4 md:mr-5 rounded-2xl overflow-hidden bg-[#0c1322] border border-white/[0.07] transition-all duration-500 hover:border-cyan-400/35 hover:-translate-y-1">
      {/* Image — light unifying tint so photos stay vivid but cohesive */}
      <div className="absolute inset-0">
        <Image
          src={stat.image}
          alt={stat.label}
          fill
          sizes="310px"
          className="object-cover grayscale-[0.3] contrast-[1.05] brightness-[0.95] transition-transform duration-[1600ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-blue-950/20" />
        {/* Legibility gradient toward the text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] via-[#0a1120]/45 to-[#0a1120]/5" />
      </div>

      {/* Top row: outline icon + kicker + index */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg border border-white/20 bg-black/20 backdrop-blur-sm">
            <Icon className="w-3.5 h-3.5 text-cyan-300" strokeWidth={1.75} />
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/70">
            {stat.kicker}
          </span>
        </span>
        <span className="text-[10px] font-mono text-white/40">
          /{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="text-3xl md:text-4xl font-bold font-heading text-white tracking-tight tabular-nums leading-none">
          {stat.value}
        </div>
        <div className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-300/90">
          {stat.label}
        </div>
        <span className="mt-3 block h-px w-10 group-hover:w-full bg-gradient-to-r from-cyan-400/70 via-cyan-400/20 to-transparent transition-all duration-500" />
      </div>
    </article>
  );
}

export default function TrustStats() {
  // Duplicated once so the -50% translate loops seamlessly
  const loop = [...STATS, ...STATS];

  return (
    <section className="relative overflow-hidden bg-[#060b16] py-10 md:py-14">
      {/* Fine dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle,rgba(148,163,184,0.4)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-700/[0.07] blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.06]" />

      <div className="relative z-10">
        {/* Compact header — eyebrow + headline on one row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 sm:px-6 max-w-[1520px] mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-8 bg-cyan-400/50" />
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-cyan-300/80">
                Trusted at scale
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-white leading-tight">
              Built for security teams of <span className="text-slate-500">every size.</span>
            </h2>
          </div>
        </motion.div>

        {/* Marquee */}
        <div className="marquee-track relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-r from-[#060b16] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-l from-[#060b16] to-transparent" />

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
