"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function DashboardShowcase() {
  return (
    <section id="dashboard" className="py-16 md:py-24 bg-foreground text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-5 md:mb-6"
            >
              DASHBOARD (Web-Portal) <br />
              <span className="text-gradient">Everything You Need In One Dashboard</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-slate-400 mb-6 md:mb-8"
            >
              Take complete control over your security operations. Our powerful web portal gives management real-time visibility and instant access to all essential reports.
            </motion.p>

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

          <div className="flex-1 lg:flex-[1.5] w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-white/10 ring-1 ring-black/5 z-20"
            >
              {/* Real web portal screenshot */}
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
