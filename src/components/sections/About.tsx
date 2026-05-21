"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Real-time guard tracking",
  "QR + GPS checkpoint verification",
  "Attendance monitoring",
  "Incident reports",
  "Patrol automation",
  "Live dashboard",
  "SOS alerts",
  "Multi-site management",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
              One System. <br />
              <span className="text-gradient">Everything Runs Automatically.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              M&M App brings together all essential tools into a single powerful platform. 
              Say goodbye to scattered data and manual reporting. Automate your entire security operation from patrol to payroll.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {FEATURES.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <button className="bg-foreground hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all hover:-translate-y-0.5">
                Learn More About Features
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            {/* Layered UI Composition */}
            <div className="relative w-full max-w-lg mx-auto aspect-square">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl" />
               
               {/* Main Card */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                 className="absolute top-10 left-10 right-20 bottom-20 bg-white rounded-3xl shadow-xl border border-border p-6 z-20"
               >
                 <div className="flex items-center justify-between mb-6">
                    <div className="h-6 w-32 bg-slate-100 rounded-md" />
                    <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                       <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="h-12 bg-slate-50 rounded-xl w-full" />
                    <div className="h-12 bg-slate-50 rounded-xl w-full" />
                    <div className="h-12 bg-slate-50 rounded-xl w-3/4" />
                 </div>
               </motion.div>
               
               {/* Floating Element 1 */}
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                 className="absolute -right-4 top-20 w-48 bg-white rounded-2xl shadow-2xl border border-border p-4 z-30 flex items-center gap-4"
               >
                 <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                 </div>
                 <div>
                    <div className="h-3 w-20 bg-slate-200 rounded mb-2" />
                    <div className="h-2 w-12 bg-slate-100 rounded" />
                 </div>
               </motion.div>
               
               {/* Floating Element 2 */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
                 className="absolute -left-8 bottom-10 w-56 bg-white rounded-2xl shadow-2xl border border-border p-4 z-30"
               >
                 <div className="h-3 w-24 bg-slate-200 rounded mb-4" />
                 <div className="flex gap-2 items-end h-16">
                    <div className="w-1/4 h-3/4 bg-primary/20 rounded-t-md" />
                    <div className="w-1/4 h-full bg-primary/40 rounded-t-md" />
                    <div className="w-1/4 h-1/2 bg-primary/60 rounded-t-md" />
                    <div className="w-1/4 h-full bg-primary rounded-t-md" />
                 </div>
               </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
