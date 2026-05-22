"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 sm:pt-36 lg:pt-48 pb-16 md:pb-20 overflow-hidden flex flex-col justify-center bg-background">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-accent/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-secondary text-primary font-semibold text-xs sm:text-sm mb-4 sm:mb-6 border border-primary/10">
            Next-Gen Security Operations
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground leading-[1.1] mb-5 md:mb-6 tracking-tight">
            If You Are Not Monitoring, <br className="hidden md:block" />
            <span className="text-gradient">You Are Not Managing.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Guard Monitor & Manage (M&M App) is a real-time mobile-based guard patrolling and workforce management platform built for modern security operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => {
                const element = document.querySelector("#pricing");
                if (element) {
                  // @ts-ignore
                  if (window.lenis) {
                    // @ts-ignore
                    window.lenis.scrollTo(element, { duration: 1.2 });
                  } else {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="w-full sm:w-auto bg-primary hover:bg-accent text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium shadow-premium transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-secondary text-foreground border border-border px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-base sm:text-lg shadow-sm">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>
        </motion.div>

        {/* 3D Dashboard/App Showcase Mock */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-12 md:mt-20 relative mx-auto max-w-5xl"
        >
          {/* Main Dashboard UI Mockup */}
          <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-border/50 bg-white/50 backdrop-blur-xl">
            {/* Browser top bar */}
            <div className="h-8 md:h-10 bg-slate-100 border-b border-border flex items-center px-3 md:px-4 gap-1.5 md:gap-2">
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-400" />
              <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-400" />
              <div className="mx-auto w-1/2 h-4 md:h-5 bg-white rounded-md shadow-sm border border-slate-200" />
            </div>
            {/* Dashboard content */}
            <div className="h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] bg-slate-50 p-3 sm:p-4 md:p-6 flex gap-4 md:gap-6">
              {/* Sidebar */}
              <div className="w-32 md:w-48 lg:w-64 hidden md:flex flex-col gap-3 md:gap-4">
                <div className="h-6 md:h-8 bg-slate-200 rounded w-3/4 mb-3 md:mb-4" />
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-8 md:h-10 bg-slate-200/50 rounded-lg w-full" />
                ))}
              </div>
              {/* Main Content */}
              <div className="flex-1 flex flex-col gap-4 md:gap-6">
                <div className="h-20 sm:h-28 md:h-32 bg-white rounded-lg md:rounded-xl shadow-sm border border-slate-100 p-3 sm:p-4 md:p-6 flex justify-between gap-2 sm:gap-4">
                  <div className="h-full flex-1 bg-blue-50 rounded-lg" />
                  <div className="h-full flex-1 bg-green-50 rounded-lg" />
                  <div className="h-full flex-1 bg-purple-50 rounded-lg" />
                </div>
                <div className="flex-1 bg-white rounded-lg md:rounded-xl shadow-sm border border-slate-100 flex gap-3 md:gap-4 p-3 sm:p-4 md:p-6">
                  <div className="w-2/3 h-full bg-slate-50 rounded-lg" />
                  <div className="w-1/3 h-full bg-slate-50 rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Mobile App Mockup - hidden on very small screens */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -right-2 sm:-right-4 md:-right-12 bottom-4 sm:bottom-10 md:bottom-20 w-28 sm:w-36 md:w-48 lg:w-64 h-[200px] sm:h-[280px] md:h-[400px] lg:h-[500px] bg-white rounded-2xl md:rounded-[2.5rem] shadow-2xl border-2 md:border-4 border-slate-800 overflow-hidden hidden sm:flex flex-col"
          >
            <div className="h-full w-full bg-slate-50 relative p-2 sm:p-3 md:p-4 flex flex-col gap-2 sm:gap-3 md:gap-4">
              <div className="w-1/2 h-4 md:h-6 bg-slate-200 rounded mx-auto mt-4 md:mt-6" />
              <div className="w-full h-16 sm:h-20 md:h-32 bg-blue-100 rounded-lg md:rounded-xl" />
              <div className="flex gap-1.5 md:gap-2">
                <div className="w-1/2 h-12 md:h-20 bg-white rounded-lg md:rounded-xl shadow-sm" />
                <div className="w-1/2 h-12 md:h-20 bg-white rounded-lg md:rounded-xl shadow-sm" />
              </div>
              <div className="w-full h-8 md:h-12 bg-primary rounded-lg md:rounded-xl mt-auto shadow-md" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
