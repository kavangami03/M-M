"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9, y: 50 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="absolute inset-0 bg-slate-900 border border-slate-700/50 rounded-xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col z-20"
               >
                 <div className="h-10 md:h-12 border-b border-slate-800 bg-slate-950 flex items-center px-4 md:px-6 justify-between">
                    <div className="flex gap-3 md:gap-4">
                      <div className="w-16 md:w-24 h-3 md:h-4 bg-slate-800 rounded" />
                      <div className="w-10 md:w-16 h-3 md:h-4 bg-slate-800 rounded" />
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-slate-800" />
                 </div>
                 <div className="flex-1 p-3 sm:p-4 md:p-6 flex flex-col gap-4 md:gap-6 bg-slate-900/50">
                    <div className="flex justify-between items-center">
                       <div className="w-32 md:w-48 h-6 md:h-8 bg-slate-800 rounded-lg" />
                       <div className="w-20 md:w-32 h-6 md:h-8 bg-primary rounded-lg" />
                    </div>
                    <div className="flex-1 bg-slate-950 rounded-lg md:rounded-xl border border-slate-800 p-3 md:p-4">
                       <div className="flex gap-2 sm:gap-4 mb-3 md:mb-4 border-b border-slate-800 pb-3 md:pb-4">
                          <div className="w-1/4 h-3 md:h-4 bg-slate-800 rounded" />
                          <div className="w-1/4 h-3 md:h-4 bg-slate-800 rounded" />
                          <div className="w-1/4 h-3 md:h-4 bg-slate-800 rounded" />
                          <div className="w-1/4 h-3 md:h-4 bg-slate-800 rounded" />
                       </div>
                       {[...Array(4)].map((_, i) => (
                         <div key={i} className="flex gap-2 sm:gap-4 py-2 md:py-3">
                            <div className="w-1/4 h-3 md:h-4 bg-slate-800/50 rounded" />
                            <div className="w-1/4 h-3 md:h-4 bg-slate-800/50 rounded" />
                            <div className="w-1/4 h-3 md:h-4 bg-slate-800/50 rounded" />
                            <div className="w-1/4 flex gap-1 md:gap-2">
                               <div className="w-6 md:w-8 h-3 md:h-4 bg-green-500/20 rounded" />
                               <div className="w-6 md:w-8 h-3 md:h-4 bg-blue-500/20 rounded" />
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
