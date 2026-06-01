"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function DashboardShowcase() {
  return (
    <section id="dashboard" className="py-16 md:py-24 bg-foreground text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-10 sm:px-20 2xl:px-6 max-w-[1520px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full max-w-2xl">
            <SectionHeader
              eyebrow="Command Center"
              title={<>DASHBOARD (Web-Portal) <br /> <span className="text-gradient">Everything You Need In One Dashboard</span></>}
              description="Take complete control over your security operations. Our powerful web portal gives management real-time visibility and instant access to all essential reports."
              dark={true}
              align="left"
            />

            <motion.ul 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3 sm:space-y-4 mb-8 md:mb-10"
            >
              {[
                "Guards / E- Profile",
                "Audit Patrolling Report",
                "Attendance Report",
                "Incident Reports with Image and Description",
                "Contract Details"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-200 font-medium text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-white/10 ring-1 ring-black/5 z-20 bg-[#1e1e1e]"
            >
              {/* macOS Browser Title Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a2a] border-b border-white/5">
                {/* Traffic light dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                </div>

                {/* URL bar */}
                <div className="flex-1 mx-4">
                  <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-md px-3 py-1.5 border border-white/5">
                    <svg className="w-3 h-3 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-[11px] text-slate-400 font-mono truncate">
                      dashboard.mandmsecurity.com/setup/guards
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard Screenshot */}
              <Image
                src="/web-dashboard.png"
                alt="M&M Management Web Portal — Guard List"
                width={700}
                height={409}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
