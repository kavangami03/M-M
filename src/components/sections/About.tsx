"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Smartphone, Cloud, Monitor } from "lucide-react";
import Image from "next/image";

const FEATURES = [
  "No expensive devices and Zero maintenance costs.",
  "Real-Time Guard Tracking & notifications",
  "Automated Patrol Monitoring",
  "Instant Incident Reporting",
  "Attendance & Clock-In System",
  "Live Dashboard & Reports",
  "SOS alerts",
  "Monitor multiple sites from one centralized platform.",
];

export default function About() {
  const scrollToFeatures = () => {
    const element = document.querySelector("#dashboard");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-5 md:mb-6 leading-tight">
              One System. <br />
              <span className="text-gradient">Everything Runs Automatically.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
              M&M App brings together all essential tools into a single, easy-to-use platform. It provides real-time guard monitoring through live GPS location tracking, giving supervisors complete visibility of every guard on duty. The smart QR Code combined with GPS checkpoint system ensures highly accurate patrol verification while being extremely easy to replace whenever needed.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Management and guards simply download the app and start operating immediately. Go device-free, reduce unnecessary costs, and manage security operations smarter. Manage guards, patrols, attendance, incidents, reports, and live locations in one powerful real-time system.
            </p>

            <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-8 md:mb-10">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <button 
                onClick={scrollToFeatures}
                className="w-full sm:w-auto bg-foreground hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all hover:-translate-y-0.5"
              >
                Learn More About Features
              </button>
            </div>
          </motion.div>

          {/* Code-built System Architecture Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-3xl" />
            <div className="relative w-full bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-border p-5 sm:p-6 md:p-8">
              
              {/* Logo + Title */}
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image src="/logo.svg" alt="M&M Logo" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm md:text-base">M&M App Ecosystem</h3>
                  <p className="text-xs text-muted-foreground">All-in-one Guard Management</p>
                </div>
              </div>

              {/* Architecture Flow */}
              <div className="space-y-4 md:space-y-5">
                {/* Guard Layer */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-3 md:p-4 border border-blue-100">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Smartphone className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                    <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-wider">Guard Mobile App</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["QR Scan", "GPS Track", "SOS Alert"].map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-2 text-center shadow-sm border border-blue-50">
                        <span className="text-[10px] md:text-xs font-medium text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-0.5">
                    <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-0.5 h-4 bg-gradient-to-b from-blue-400 to-primary rounded-full" />
                    <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-primary rotate-45 -mt-1" />
                  </div>
                </div>

                {/* Cloud / Processing Layer */}
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-3 md:p-4 border border-primary/10">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Cloud className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                    <p className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-wider">Cloud Processing</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {["Real-Time Sync", "Data Analysis", "Report Generation", "Alert Engine"].map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-2 text-center shadow-sm border border-primary/5">
                        <span className="text-[10px] md:text-xs font-medium text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-0.5">
                    <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }} className="w-0.5 h-4 bg-gradient-to-b from-primary to-green-500 rounded-full" />
                    <div className="w-2.5 h-2.5 border-r-2 border-b-2 border-green-500 rotate-45 -mt-1" />
                  </div>
                </div>

                {/* Dashboard Layer */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3 md:p-4 border border-green-100">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Monitor className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                    <p className="text-[10px] md:text-xs font-bold text-green-600 uppercase tracking-wider">Management Dashboard</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {["Live Map", "Reports", "Alerts"].map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-2 text-center shadow-sm border border-green-50">
                        <span className="text-[10px] md:text-xs font-medium text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer stats */}
              <div className="mt-5 md:mt-6 pt-4 border-t border-border flex justify-between text-center">
                {[
                  { val: "99.9%", label: "Uptime" },
                  { val: "<1s", label: "Sync Speed" },
                  { val: "256-bit", label: "Encryption" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-sm md:text-base font-bold text-foreground">{s.val}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
