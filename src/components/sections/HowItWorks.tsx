"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Download the App",
    desc: "Guards download the M&M app on their smartphones. No extra hardware required.",
  },
  {
    num: "02",
    title: "Manage Guards & Patrols",
    desc: "Set up routes, checkpoints, and schedules from the central web dashboard.",
  },
  {
    num: "03",
    title: "Monitor in Real-Time",
    desc: "Watch your operation run smoothly with live GPS tracking and instant reporting.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Deploy your modern security operation in three simple steps.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 z-0" />

          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative z-10 text-center"
            >
              <div className="w-24 h-24 mx-auto bg-white rounded-full shadow-premium flex items-center justify-center mb-8 border border-border group hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-bold font-heading text-gradient">
                  {step.num}
                </span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
