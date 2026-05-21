"use client";

import { motion } from "framer-motion";

export default function DashboardShowcase() {
  return (
    <section id="dashboard" className="py-24 bg-foreground text-white overflow-hidden relative">
      {/* Dark theme background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-[1520px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6"
          >
            Everything You Need In <br className="hidden md:block" />
            <span className="text-gradient">One Dashboard</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Manage Guard E-Profiles, Audit Patrol Reports, Attendance, Incident Reports, and Contract Details from a unified web portal.
          </motion.p>
        </div>

        {/* Dashboard 3D Showcase Composition */}
        <div className="relative w-full max-w-5xl mx-auto h-[500px] md:h-[700px] mt-10 perspective-1000">
           {/* Center Main Window */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.9, y: 50 }}
             whileInView={{ opacity: 1, scale: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="absolute inset-x-0 bottom-0 md:inset-10 bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-20"
           >
             {/* Header */}
             <div className="h-12 border-b border-slate-800 bg-slate-950 flex items-center px-6 justify-between">
                <div className="flex gap-4">
                  <div className="w-24 h-4 bg-slate-800 rounded" />
                  <div className="w-16 h-4 bg-slate-800 rounded" />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800" />
             </div>
             {/* Content */}
             <div className="flex-1 p-6 flex flex-col gap-6 bg-slate-900/50">
                <div className="flex justify-between items-center">
                   <div className="w-48 h-8 bg-slate-800 rounded-lg" />
                   <div className="w-32 h-8 bg-primary rounded-lg" />
                </div>
                {/* Data Table Mock */}
                <div className="flex-1 bg-slate-950 rounded-xl border border-slate-800 p-4">
                   <div className="flex gap-4 mb-4 border-b border-slate-800 pb-4">
                      <div className="w-1/4 h-4 bg-slate-800 rounded" />
                      <div className="w-1/4 h-4 bg-slate-800 rounded" />
                      <div className="w-1/4 h-4 bg-slate-800 rounded" />
                      <div className="w-1/4 h-4 bg-slate-800 rounded" />
                   </div>
                   {[...Array(5)].map((_, i) => (
                     <div key={i} className="flex gap-4 py-3">
                        <div className="w-1/4 h-4 bg-slate-800/50 rounded" />
                        <div className="w-1/4 h-4 bg-slate-800/50 rounded" />
                        <div className="w-1/4 h-4 bg-slate-800/50 rounded" />
                        <div className="w-1/4 flex gap-2">
                           <div className="w-8 h-4 bg-green-500/20 rounded" />
                           <div className="w-8 h-4 bg-blue-500/20 rounded" />
                        </div>
                     </div>
                   ))}
                </div>
             </div>
           </motion.div>

           {/* Floating Left Panel (Analytics) */}
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             animate={{ y: [0, -10, 0] }}
             className="absolute top-10 md:top-20 -left-4 md:-left-12 w-64 md:w-80 bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl p-6 z-30"
           >
              <div className="w-32 h-4 bg-slate-700 rounded mb-6" />
              <div className="w-full h-32 bg-slate-950 rounded-xl mb-4 flex items-end px-4 gap-2 pt-4">
                 <div className="w-1/6 h-1/3 bg-blue-500/50 rounded-t-sm" />
                 <div className="w-1/6 h-2/3 bg-blue-500/70 rounded-t-sm" />
                 <div className="w-1/6 h-1/2 bg-blue-500/60 rounded-t-sm" />
                 <div className="w-1/6 h-full bg-blue-500 rounded-t-sm" />
                 <div className="w-1/6 h-3/4 bg-blue-500/80 rounded-t-sm" />
                 <div className="w-1/6 h-1/4 bg-blue-500/40 rounded-t-sm" />
              </div>
              <div className="flex gap-4">
                 <div className="flex-1 h-16 bg-slate-800/50 rounded-lg" />
                 <div className="flex-1 h-16 bg-slate-800/50 rounded-lg" />
              </div>
           </motion.div>

           {/* Floating Right Panel (Guard Profile) */}
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             animate={{ y: [0, 15, 0] }}
             className="absolute bottom-10 md:bottom-32 -right-4 md:-right-12 w-60 md:w-72 bg-slate-900 border border-slate-700/50 rounded-2xl shadow-2xl p-6 z-30"
           >
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 rounded-full bg-slate-700" />
                 <div>
                    <div className="w-24 h-4 bg-slate-700 rounded mb-2" />
                    <div className="w-16 h-3 bg-slate-600 rounded" />
                 </div>
              </div>
              <div className="space-y-3">
                 <div className="w-full h-8 bg-slate-800/50 rounded-md" />
                 <div className="w-full h-8 bg-slate-800/50 rounded-md" />
                 <div className="w-3/4 h-8 bg-slate-800/50 rounded-md" />
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
