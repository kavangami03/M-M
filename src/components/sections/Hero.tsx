"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Shield, Activity } from "lucide-react";
import Image from "next/image";

// Text animation variants
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
    <section id="home" className="relative min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-16 md:pb-24 overflow-hidden flex items-center bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e4e8ff]">
      
      {/* 1. Sleek High-Definition Sharp Security Operations Background Image in Widescreen Landscape */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40 z-0">
        <Image
          src="/security_sharp_bg.png"
          alt="Security Operations Control Room Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 2. Soft Gradient Overlays for Perfect Edge Blending */}
      {/* Vertical fade: blends with header and trust stats sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/90 via-transparent to-[#e4e8ff] z-0" />
      {/* Horizontal fade: ensures left-hand text is perfectly readable while background stays visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc]/95 via-[#f8fafc]/40 to-transparent z-0" />
      
      {/* 3. Glowing Ambient Mesh Light behind the mockups */}
      <div className="absolute right-[-10%] top-[20%] w-[450px] md:w-[700px] h-[450px] md:h-[600px] bg-blue-300/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute right-[20%] bottom-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[500px] bg-indigo-300/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* 4. Fine Dot Grid Network for Tech Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      <div className="container mx-auto px-10 sm:px-20 2xl:px-6 max-w-[1520px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Column: Text & CTAs (Intact exact original styling) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-6/12 flex flex-col items-start text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50/80 backdrop-blur-sm text-blue-700 font-semibold text-xs sm:text-sm mb-6 border border-blue-100/80 overflow-hidden"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="inline-block w-2 h-2 rounded-full bg-blue-500"
              />
              Next-Gen Security Operations
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7.5xl font-bold font-heading leading-[1.1] mb-6 tracking-tight capitalize">
              <motion.span
                aria-hidden
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block text-slate-900"
              >
                {"If you are not monitoring,".split(" ").map((word, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.2em] last:mr-0"
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
                className="block text-slate-900"
              >
                {"you are not managing.".split(" ").map((word, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.2em] last:mr-0 leading-[120%]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
              <span className="sr-only">Monitor Every Guard. Manage Every Site.</span>
            </h1>

            {/* Animated accent underline */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
              className="mb-6 h-1 w-24 sm:w-32 origin-left rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600"
            />
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600/95 mb-8 max-w-xl leading-relaxed font-medium">
              M&M App is a mobile-based guard patrolling & monitoring system that replaces physical patrol devices and manual processes. Every guard activity is recorded in real time and turned into instant, document-ready reports &mdash; making security operations smarter, faster, and more cost-effective.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  const element = document.querySelector("#pricing");
                  if (element) {
                    // @ts-ignore
                    if (window.lenis) {
                      // @ts-ignore
                      window.lenis.scrollTo(element, { offset: -80, duration: 1.2 });
                    } else {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="group w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_35px_rgba(37,99,235,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <span className="relative flex items-center gap-2">Start Free Trial <ArrowRight className="w-5 h-5" /></span>
              </button>
              {/* <button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    // @ts-ignore
                    if (window.lenis) {
                      // @ts-ignore
                      window.lenis.scrollTo(element, { offset: -80, duration: 1.2 });
                    } else {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
              >
                <Play className="w-5 h-5 text-slate-500 fill-slate-500" /> Watch Demo
              </button> */}
            </div>
          </motion.div>

          {/* Right Column: Premium High-Fidelity Responsive Showcase (Native Razor-Sharp 2D Layered Collage) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-6/12 flex justify-center items-center relative py-12 px-2 z-10 select-none"
          >
            <div className="relative w-full aspect-[4.3/3] max-w-[560px] lg:max-w-none flex items-center justify-center select-none">
              
              {/* A. Live Telemetry SVG Sync Lines with smooth self-contained flow animation */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-50" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                  <style>{`
                    @keyframes svg-telemetry-flow {
                      to {
                        stroke-dashoffset: -26;
                      }
                    }
                    .telemetry-flow-path {
                      stroke-dasharray: 6 8;
                      stroke-dashoffset: 26;
                      animation: svg-telemetry-flow 1.8s linear infinite;
                    }
                  `}</style>
                </defs>
                {/* Proportional sync path from Phone to Laptop */}
                <path d="M 330,210 C 330,160 260,160 220,130" stroke="url(#lineGrad)" strokeWidth="2.5" fill="none" className="telemetry-flow-path" />
              </svg>

              {/* B. Laptop Deck (Percentage Width & Absolute Positioned - Scales Perfectly) */}
              <div className="absolute w-[88%] left-[0%] top-[8%] z-10 shadow-[0_25px_60px_rgba(15,23,42,0.14)]">
                {/* Outer premium screen bezel with black frame */}
                <div className="relative w-full aspect-[700/409] rounded-t-2xl border-t-[8px] border-x-[8px] border-b-[4px] md:border-t-[10px] md:border-x-[10px] md:border-b-[6px] border-slate-900 bg-slate-950 overflow-hidden flex flex-col">
                  
                  {/* Webcam dot simulation */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-900 rounded-full z-20 border border-slate-800 flex items-center justify-center">
                    <div className="w-[3px] h-[3px] bg-blue-900/70 rounded-full" />
                  </div>
                  
                  {/* Screen Content Wrapper */}
                  <div className="relative flex-1 w-full h-full bg-slate-900">
                    <Image
                      src="/web-dashboard.png"
                      alt="M&M Web Dashboard Setup"
                      fill
                      unoptimized
                      className="object-fill pointer-events-none select-none"
                      priority
                    />
                    
                    {/* Ultra-realistic physical glass reflection */}
                    <div 
                      className="absolute inset-0 pointer-events-none z-15"
                      style={{
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 40%, transparent 60%)"
                      }}
                    />
                  </div>
                </div>
                
                {/* Laptop Base (Sleek Matte-Black Metallic Keyboard Hinge) */}
                <div className="relative w-[110%] -ml-[5%] h-3.5 md:h-4.5 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 rounded-b-2xl shadow-[0_20px_45px_rgba(0,0,0,0.4)] z-10 origin-top [transform:perspective(800px)_rotateX(22deg)] border-t border-slate-700/50">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 bg-black/60 rounded-b-md" />
                </div>
              </div>

              {/* C. iPhone Mobile Mockup (Rendered directly with its own pre-rendered bezel, floating bobbing) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                whileHover={{ scale: 1.04, y: -12 }}
                className="absolute w-[32%] right-[0%] bottom-[-5%] z-25 select-none cursor-default"
              >
                <Image
                  src="/home-screen.png"
                  alt="M&M Guard App Home Screen"
                  width={1208}
                  height={2328}
                  unoptimized
                  className="w-full h-auto drop-shadow-[0_20px_40px_rgba(15,23,42,0.20)] pointer-events-none"
                  priority
                />
              </motion.div>

              {/* D. FLOATING WIDGET 1: Real-Time Guard Tracking Card (Top-Left, floating bobbing) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="absolute w-[46%] max-w-[210px] top-[-8%] left-[-10%] z-20 hidden sm:flex items-center gap-3 py-2 px-3 sm:py-2.5 sm:px-4 rounded-2xl bg-white border border-slate-200/80 shadow-[0_12px_28px_rgba(15,23,42,0.08)] select-none"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <Activity className="w-4 h-4 animate-pulse" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[10px] font-black text-slate-800 leading-tight truncate">Sarah Jenkins</h5>
                  <p className="text-[9px] text-slate-500 flex items-center gap-1 font-bold mt-0.5 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                    Patrolling Site A
                  </p>
                </div>
              </motion.div>

              {/* E. FLOATING WIDGET 2: Security Checked Status Badge (Mid-Left, floating bobbing) */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.03, y: 2 }}
                className="absolute w-[40%] max-w-[170px] top-[45%] left-[-15%] z-20 hidden sm:flex items-center gap-2.5 py-1.5 px-3 rounded-xl bg-white border border-slate-200/80 shadow-[0_8px_18px_rgba(15,23,42,0.06)] select-none"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[9px] font-black text-slate-800 leading-none truncate">Checkpoint 7</h5>
                  <span className="text-[8px] text-blue-600 font-extrabold mt-0.5 block whitespace-nowrap">VERIFIED • 10s ago</span>
                </div>
              </motion.div>

              {/* F. FLOATING WIDGET 3: SOS Alert Warning Badge (Top-Right, floating bobbing) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 6.5, ease: "easeInOut", delay: 1.5 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="absolute w-[44%] max-w-[200px] top-[-8%] right-[0%] z-20 hidden sm:flex items-center gap-3 py-2 px-3 sm:py-2.5 sm:px-4 rounded-2xl bg-white border border-red-200/80 shadow-[0_15px_30px_rgba(15,23,42,0.08)] select-none"
              >
                <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-600 animate-pulse flex-shrink-0">
                  <Shield className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[10px] font-black text-slate-800 leading-tight truncate">SOS Alert System</h5>
                  <p className="text-[9px] text-red-600 font-extrabold flex items-center gap-1 mt-0.5 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping flex-shrink-0" />
                    Live Cellular Sync
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
