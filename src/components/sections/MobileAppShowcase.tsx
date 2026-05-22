"use client";

import { motion } from "framer-motion";
import { CheckCircle2, QrCode, MapPin, ShieldAlert, FileText, Home, Navigation, Bell, User } from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Image from "next/image";

export default function MobileAppShowcase() {
  return (
    <section id="mobile-app" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Code-built Phone Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-2 lg:order-1 relative w-full flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl rounded-full" />
            
            <div className="relative flex gap-4 md:gap-6 items-start">
              {/* Phone 1 - Main */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative w-[180px] sm:w-[220px] md:w-[260px] bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 md:border-[6px] border-slate-800 overflow-hidden z-20"
              >
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-slate-900 rounded-b-2xl z-30" />
                
                {/* Screen */}
                <div className="bg-white pt-8 md:pt-10 pb-4 px-3 md:px-4 min-h-[340px] sm:min-h-[400px] md:min-h-[480px]">
                  {/* App Header */}
                  <div className="flex items-center justify-between mb-4 md:mb-5">
                    <div className="flex items-center gap-1.5 md:gap-2">
                      <div className="relative w-5 h-5 md:w-7 md:h-7">
                        <Image src="/logo.svg" alt="M&M" fill className="object-contain" />
                      </div>
                      <span className="text-[10px] md:text-xs font-bold text-slate-800">M&M App</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[8px] md:text-[10px] text-green-600 font-medium">Online</span>
                    </div>
                  </div>

                  {/* Welcome */}
                  <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-2.5 md:p-3 mb-3 md:mb-4">
                    <p className="text-white font-bold text-[10px] md:text-xs">Good Morning, Ahmad</p>
                    <p className="text-white/80 text-[8px] md:text-[10px]">Shift: 08:00 - 20:00 • Zone A</p>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {[
                      { icon: QrCode, label: "Scan QR", bg: "bg-blue-50", color: "text-blue-600" },
                      { icon: MapPin, label: "Check In", bg: "bg-green-50", color: "text-green-600" },
                      { icon: ShieldAlert, label: "SOS Alert", bg: "bg-red-50", color: "text-red-600" },
                      { icon: FileText, label: "Report", bg: "bg-amber-50", color: "text-amber-600" },
                    ].map((action, i) => {
                      const Icon = action.icon;
                      return (
                      <div key={i} className={`${action.bg} rounded-lg p-2 md:p-2.5 flex flex-col items-center border border-slate-100`}>
                        <Icon className={`w-4 h-4 md:w-5 md:h-5 ${action.color} mb-0.5`} />
                        <span className="text-[8px] md:text-[10px] font-semibold text-slate-700">{action.label}</span>
                      </div>
                    );})}
                  </div>

                  {/* Current Patrol */}
                  <div className="bg-slate-50 rounded-xl p-2.5 md:p-3 border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] md:text-[11px] font-bold text-slate-700">Current Patrol</span>
                      <span className="text-[8px] md:text-[10px] text-green-600 font-medium">65%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full" 
                      />
                    </div>
                    <p className="text-[8px] md:text-[10px] text-slate-400 mt-1.5">Checkpoints: 11/18 scanned</p>
                  </div>
                </div>

                {/* Bottom nav */}
                <div className="bg-white border-t border-slate-100 flex justify-around py-2 md:py-3">
                  {[Home, Navigation, Bell, User].map((NavIcon, i) => (
                    <NavIcon key={i} className={`w-3.5 h-3.5 md:w-4 md:h-4 ${i === 0 ? 'text-primary' : 'text-slate-300'}`} />
                  ))}
                </div>
              </motion.div>

              {/* Phone 2 - Secondary (hidden on very small) */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="relative w-[160px] sm:w-[190px] md:w-[220px] bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border-4 md:border-[6px] border-slate-800 overflow-hidden z-10 mt-10 md:mt-16 hidden sm:block"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-20 h-4 md:h-5 bg-slate-900 rounded-b-2xl z-30" />
                
                <div className="bg-slate-950 pt-7 md:pt-9 pb-3 px-3 md:px-4 min-h-[300px] sm:min-h-[350px] md:min-h-[420px]">
                  {/* GPS Map Header */}
                  <div className="flex items-center gap-1.5 mb-3 md:mb-4">
                    <div className="relative w-4 h-4 md:w-5 md:h-5">
                      <Image src="/logo.svg" alt="M&M" fill className="object-contain" />
                    </div>
                    <span className="text-[9px] md:text-[11px] font-bold text-white">GPS Tracking</span>
                  </div>

                  {/* Fake Map */}
                  <div className="bg-slate-800 rounded-xl p-2 md:p-3 mb-3 md:mb-4 relative overflow-hidden border border-slate-700">
                    <div className="w-full h-24 md:h-32 relative">
                      {/* Map grid lines */}
                      <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className="border border-slate-700/30" />
                        ))}
                      </div>
                      {/* Route line */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                        <motion.path
                          d="M 15 80 L 30 60 L 50 65 L 70 40 L 85 25"
                          fill="none"
                          stroke="hsl(217, 91%, 60%)"
                          strokeWidth="2"
                          strokeDasharray="5,3"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 2 }}
                        />
                      </svg>
                      {/* Guard markers */}
                      <motion.div animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute top-[20%] right-[15%] w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-white shadow-lg" />
                      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }} className="absolute top-[55%] left-[30%] w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg" />
                      <div className="absolute bottom-[15%] left-[10%] w-3 h-3 md:w-4 md:h-4 bg-amber-500 rounded-full border-2 border-white shadow-lg" />
                    </div>
                  </div>

                  {/* Guard List */}
                  <div className="space-y-1.5 md:space-y-2">
                    {[
                      { name: "Ahmad", status: "Moving", color: "bg-green-500" },
                      { name: "Raju", status: "Stopped", color: "bg-blue-500" },
                      { name: "Siti", status: "Break", color: "bg-amber-500" },
                    ].map((guard, i) => (
                      <div key={i} className="flex items-center justify-between bg-slate-800 rounded-lg px-2 md:px-3 py-1.5 md:py-2 border border-slate-700">
                        <div className="flex items-center gap-1.5">
                          <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${guard.color}`} />
                          <span className="text-[9px] md:text-[11px] text-white font-medium">{guard.name}</span>
                        </div>
                        <span className="text-[8px] md:text-[10px] text-slate-400">{guard.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-1 lg:order-2 w-full"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-5 md:mb-6 leading-tight">
              Mobile App <br />
              <span className="text-gradient">Powerful Tools In Their Pocket.</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Equip your guards with a native mobile app designed for speed and reliability. From GPS tracking to instant SOS alerts, it has everything they need and nothing they don&apos;t.
            </p>
            
            <ul className="space-y-3 sm:space-y-4 mb-8 md:mb-10">
               {[
                 "Live GPS & Route Monitoring",
                 "Instant QR Code Checkpoint Scans",
                 "Photo & Text Incident Uploads",
                 "Geofenced Attendance Check-ins",
                 "One-Tap Emergency SOS Button"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3">
                   <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                     <CheckCircle2 className="w-4 h-4 text-primary" />
                   </div>
                   <span className="text-foreground font-medium text-sm sm:text-base">{item}</span>
                 </li>
               ))}
            </ul>

             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.mandm.client&pli=1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-foreground hover:bg-slate-800 text-white px-5 sm:px-6 py-3 rounded-xl font-medium transition-all shadow-lg hover:-translate-y-0.5 text-sm sm:text-base">
                  <FaGooglePlay className="w-5 h-5 text-green-500" /> Download for Android
                </a>
                <a href="https://apps.apple.com/us/app/m-m-property-app/id1659629088" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-secondary hover:bg-slate-200 text-foreground px-5 sm:px-6 py-3 rounded-xl font-medium transition-all border border-border hover:-translate-y-0.5 text-sm sm:text-base">
                  <FaApple className="w-6 h-6" /> iOS App Store
                </a>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
