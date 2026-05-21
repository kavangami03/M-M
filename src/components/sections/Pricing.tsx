"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const FEATURES = [
  "Full Access to All Features",
  "Unlimited Reports",
  "Real-Time Tracking & Alerts",
  "Multi Location Management",
  "One Stop Solution",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6"
          >
            Simple Pricing. <br />
            <span className="text-gradient">Powerful Management.</span>
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-lg mx-auto relative group"
        >
          {/* Glowing Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative bg-white rounded-3xl p-10 border border-border shadow-2xl flex flex-col">
             <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm w-fit mb-6">
                Enterprise Grade
             </div>
             <div className="mb-8">
               <span className="text-muted-foreground font-medium">From</span>
               <div className="flex items-baseline gap-2 mt-2">
                 <span className="text-5xl font-bold font-heading text-foreground">RM 80</span>
                 <span className="text-xl text-muted-foreground">/ Month</span>
               </div>
             </div>

             <div className="space-y-4 mb-10 flex-1">
               {FEATURES.map((feature, i) => (
                 <div key={i} className="flex items-center gap-3">
                   <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600 font-bold" />
                   </div>
                   <span className="text-foreground font-medium">{feature}</span>
                 </div>
               ))}
             </div>

             <button className="w-full bg-foreground hover:bg-slate-800 text-white py-4 rounded-xl font-medium shadow-lg transition-all hover:-translate-y-1">
               Start 2 Week Free Trial
             </button>
             <p className="text-center text-sm text-muted-foreground mt-4">
               No credit card required. Cancel anytime.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
