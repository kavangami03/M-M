"use client";

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
} from "lucide-react";

const FEATURES = [
  {
    icon: Smartphone,
    title: "No Expensive Devices",
    desc: "Run entirely on standard smartphones. No need for specialized rugged devices.",
  },
  {
    icon: Cloud,
    title: "Zero Maintenance",
    desc: "Cloud-based architecture means no server maintenance or hardware costs.",
  },
  {
    icon: Radar,
    title: "Real-Time Tracking",
    desc: "Monitor guards live as they move between checkpoints with GPS accuracy.",
  },
  {
    icon: Route,
    title: "Patrol Monitoring",
    desc: "Automated logging of QR code and GPS checkpoint scans during patrols.",
  },
  {
    icon: ScanFace,
    title: "Attendance System",
    desc: "Facial recognition and geofenced check-ins for perfect time tracking.",
  },
  {
    icon: ClipboardList,
    title: "Incident Reporting",
    desc: "Submit photo and text reports directly from the field instantly.",
  },
  {
    icon: LayoutDashboard,
    title: "Live Dashboard",
    desc: "Get a bird's eye view of all operations from a unified command center.",
  },
  {
    icon: Siren,
    title: "SOS Alerts",
    desc: "One-tap panic button for guards to instantly alert central command.",
  },
  {
    icon: Network,
    title: "Centralized Control",
    desc: "Manage multiple sites and properties from a single master account.",
  },
];

// Helper to render highly informative, custom multi-layered tech badges
function renderTechBadge(title: string) {
  // Common visual container layout for the primary icon
  const primaryBoxClasses = "relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border border-blue-100/60 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 shadow-[0_4px_12px_-4px_rgba(37,99,235,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1.5 group-hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.25)] group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:border-blue-400/20";
  const primaryIconClasses = "h-5 w-5 md:h-6 md:w-6 text-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500";
  
  // Common visual layout for the floating secondary corner micro-badge
  const secondaryBoxClasses = "absolute -bottom-1 -right-1 flex h-4.5 w-4.5 sm:h-5 sm:w-5 items-center justify-center rounded-full border shadow-[0_2px_6px_rgba(0,0,0,0.06)] z-10 scale-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500";
  const secondaryIconClasses = "w-2.5 h-2.5 sm:w-3 sm:h-3 text-white";

  switch (title) {
    case "No Expensive Devices":
      return (
        <div className={primaryBoxClasses}>
          <Smartphone className={primaryIconClasses} />
          {/* Overlapping small green checkmark indicating standard device compliance */}
          <div className={`${secondaryBoxClasses} bg-emerald-500 border-emerald-400/20 shadow-emerald-500/10`}>
            <CheckCircle2 className={secondaryIconClasses} />
          </div>
        </div>
      );
    case "Zero Maintenance":
      return (
        <div className={primaryBoxClasses}>
          <Cloud className={primaryIconClasses} />
          {/* Overlapping indigo database indicating cloud managed server disks */}
          <div className={`${secondaryBoxClasses} bg-indigo-500 border-indigo-400/20 shadow-indigo-500/10`}>
            <Database className={secondaryIconClasses} />
          </div>
        </div>
      );
    case "Real-Time Tracking":
      return (
        <div className={primaryBoxClasses}>
          <Radar className={primaryIconClasses} />
          {/* Overlapping pulsing rose red map pin indicating live physical position */}
          <div className={`${secondaryBoxClasses} bg-rose-500 border-rose-400/20 shadow-rose-500/10`}>
            <MapPin className={secondaryIconClasses} />
          </div>
        </div>
      );
    case "Patrol Monitoring":
      return (
        <div className={primaryBoxClasses}>
          <Route className={primaryIconClasses} />
          {/* Overlapping scanner box indicating active waypoint routing scans */}
          <div className={`${secondaryBoxClasses} bg-blue-500 border-blue-400/20 shadow-blue-500/10`}>
            <Scan className={secondaryIconClasses} />
          </div>
        </div>
      );
    case "Attendance System":
      return (
        <div className={primaryBoxClasses}>
          <ScanFace className={primaryIconClasses} />
          {/* Overlapping green user verification badge indicating geofenced checks */}
          <div className={`${secondaryBoxClasses} bg-emerald-500 border-emerald-400/20 shadow-emerald-500/10`}>
            <UserCheck className={secondaryIconClasses} />
          </div>
        </div>
      );
    case "Incident Reporting":
      return (
        <div className={primaryBoxClasses}>
          <ClipboardList className={primaryIconClasses} />
          {/* Overlapping warning notification indicator indicating field danger reports */}
          <div className={`${secondaryBoxClasses} bg-amber-500 border-amber-400/20 shadow-amber-500/10`}>
            <AlertCircle className={secondaryIconClasses} />
          </div>
        </div>
      );
    case "Live Dashboard":
      return (
        <div className={primaryBoxClasses}>
          <LayoutDashboard className={primaryIconClasses} />
          {/* Overlapping pulsing green wave indicating constant metrics flow */}
          <div className={`${secondaryBoxClasses} bg-teal-500 border-teal-400/20 shadow-teal-500/10`}>
            <Activity className={secondaryIconClasses} />
          </div>
        </div>
      );
    case "SOS Alerts":
      return (
        <div className={primaryBoxClasses}>
          <Siren className={primaryIconClasses} />
          {/* Overlapping alarm beacon shield indicating high priority emergency dispatch */}
          <div className={`${secondaryBoxClasses} bg-red-500 border-red-400/20 shadow-red-500/10`}>
            <Shield className={secondaryIconClasses} />
          </div>
        </div>
      );
    case "Centralized Control":
      return (
        <div className={primaryBoxClasses}>
          <Network className={primaryIconClasses} />
          {/* Overlapping central check map marker indicating HQ multi-site nodes */}
          <div className={`${secondaryBoxClasses} bg-indigo-600 border-indigo-500/20 shadow-indigo-600/10`}>
            <MapPin className={secondaryIconClasses} />
          </div>
        </div>
      );
    default:
      return (
        <div className={primaryBoxClasses}>
          <Shield className={primaryIconClasses} />
        </div>
      );
  }
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
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.14] pointer-events-none"
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
          description="Everything you need to run a modern, efficient, and accountable security operation without the enterprise price tag."
          dark={false}
          align="center"
        />

        {/* Symmetrical 3x3 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden p-[1.5px] bg-gradient-to-b from-slate-200/60 via-slate-100/40 to-slate-200/30 hover:from-blue-500/40 hover:via-indigo-500/30 hover:to-blue-600/40 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.09)]"
              >
                {/* 1. Glowing sliding top accent border */}
                <span className="absolute top-0 left-0 h-[3.5px] w-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 group-hover:w-full transition-all duration-700 ease-out z-20" />
                
                {/* 2. Frosted glass card body with active background shift on hover */}
                <div className="relative h-full overflow-hidden rounded-[22px] bg-white/70 hover:bg-white/95 backdrop-blur-md p-6 sm:p-7 md:p-8 transition-all duration-500 flex flex-col justify-between min-h-[250px]">
                  
                  {/* 3. Diagonal hover gradient mesh overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-indigo-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  {/* Subtle inner radial hover spotlight */}
                  <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-blue-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                  
                  {/* Floating light monospaced index counter */}
                  <div className="absolute right-6 bottom-4 select-none pointer-events-none font-mono text-8xl font-black text-slate-900/5 group-hover:text-blue-500/[0.035] group-hover:scale-105 transition-all duration-700">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Custom illustrated multi-layered tech badge */}
                      <div className="mb-6">
                        {renderTechBadge(feature.title)}
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 mb-3 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-medium">
                        {feature.desc}
                      </p>
                    </div>
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
