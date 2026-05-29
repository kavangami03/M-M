"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const FEATURES = [
  { icon: Smartphone, title: "No Expensive Devices", desc: "Run entirely on standard smartphones. No need for specialized rugged devices." },
  { icon: Cloud, title: "Zero Maintenance", desc: "Cloud-based architecture means no server maintenance or hardware costs." },
  { icon: Radar, title: "Real-Time Tracking", desc: "Monitor guards live as they move between checkpoints with GPS accuracy." },
  { icon: Route, title: "Patrol Monitoring", desc: "Automated logging of QR code and GPS checkpoint scans during patrols." },
  { icon: ScanFace, title: "Attendance System", desc: "Facial recognition and geofenced check-ins for perfect time tracking." },
  { icon: ClipboardList, title: "Incident Reporting", desc: "Submit photo and text reports directly from the field instantly." },
  { icon: LayoutDashboard, title: "Live Dashboard", desc: "Get a bird's eye view of all operations from a unified command center." },
  { icon: Siren, title: "SOS Alerts", desc: "One-tap panic button for guards to instantly alert central command." },
  { icon: Network, title: "Centralized Control", desc: "Manage multiple sites and properties from a single master account." },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-16 md:py-28 bg-[#070b1a] text-white"
    >
      {/* Ambient background: grid + glowing orbs */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-primary/25 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[480px] w-[480px] rounded-full bg-indigo-500/20 blur-[140px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-[1520px]">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 backdrop-blur-sm mb-6"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4 md:mb-6"
          >
            Powerful Features. <br />
            <span className="text-gradient-animated">Simple Execution.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-white/60"
          >
            Everything you need to run a modern, efficient, and accountable security operation without the enterprise price tag.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl md:rounded-3xl p-[1px] bg-gradient-to-b from-white/15 to-white/5 hover:from-primary/60 hover:to-indigo-500/30 transition-colors duration-300"
              >
                <div className="relative h-full overflow-hidden rounded-2xl md:rounded-3xl bg-[#0c1228]/80 backdrop-blur-sm p-5 sm:p-6 md:p-8">
                  {/* Radial glow that follows the card on hover */}
                  <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-5 md:mb-6 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl md:rounded-2xl border border-white/10 bg-gradient-to-br from-primary/25 to-indigo-500/10 shadow-[0_0_24px_-6px_rgba(37,99,235,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_32px_-4px_rgba(37,99,235,0.85)]">
                      <Icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-2 md:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed text-white/55">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
