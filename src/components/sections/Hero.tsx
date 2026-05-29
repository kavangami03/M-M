"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const lineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 sm:pt-36 lg:pt-48 pb-16 md:pb-20 overflow-hidden flex flex-col justify-center bg-[#020817]">

      {/* ── Background image overlay ── */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          quality={90}
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#020817]/40" />
        {/* Bottom gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/20 via-transparent to-[#020817]/90" />
      </div>

      {/* Background glow effects (on top of image) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px] relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/[0.06] backdrop-blur-sm text-cyan-300 font-semibold text-xs sm:text-sm mb-4 sm:mb-6 border border-white/[0.08] overflow-hidden"
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-block w-2 h-2 rounded-full bg-cyan-400"
            />
            Next-Gen Security Operations
          </motion.span>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-5 md:mb-6 tracking-tight">
            <motion.span
              aria-hidden
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="block text-white"
            >
              {"If you are not monitoring,".split(" ").map((word, i) => (
                <motion.span
                  key={`l1-${i}`}
                  variants={wordVariants}
                  className="inline-block mr-[0.25em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
            <motion.span
              aria-hidden
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="block"
            >
              {"you are not managing.".split(" ").map((word, i) => (
                <motion.span
                  key={`l2-${i}`}
                  variants={wordVariants}
                  className="hero-text-gradient inline-block mr-[0.25em] last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>
            {/* Accessible, non-animated version for screen readers */}
            <span className="sr-only">Monitor Every Guard. Manage Every Site.</span>
          </h1>

          {/* Animated accent underline */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
            className="mx-auto mb-6 md:mb-8 h-1 w-24 sm:w-32 origin-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"
          />
          <p className="text-base sm:text-lg md:text-xl text-slate-300/80 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            M&M App is a mobile-based guard patrolling & monitoring system that replaces physical patrol devices and manual processes. Every guard activity is recorded in real time and turned into instant, document-ready reports &mdash; making security operations smarter, faster, and more cost-effective.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => {
                const element = document.querySelector("#pricing");
                if (element) {
                  // @ts-ignore
                  if (window.lenis) {
                    // @ts-ignore
                    window.lenis.scrollTo(element, { offset: -100, duration: 1.2 });
                  } else {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="group w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium shadow-[0_0_30px_rgba(37,99,235,0.25)] transition-all hover:shadow-[0_0_50px_rgba(37,99,235,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="relative flex items-center gap-2">Start Free Trial <ArrowRight className="w-5 h-5" /></span>
            </button>
            <button 
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  // @ts-ignore
                  if (window.lenis) {
                    // @ts-ignore
                    window.lenis.scrollTo(element, { offset: -100, duration: 1.2 });
                  } else {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
              className="w-full sm:w-auto bg-white/[0.06] backdrop-blur-sm hover:bg-white/[0.1] text-white border border-white/[0.08] hover:border-white/[0.15] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
            >
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020817] to-transparent z-[5]" />
    </section>
  );
}
