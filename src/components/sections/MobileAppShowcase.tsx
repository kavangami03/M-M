"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

export default function MobileAppShowcase() {
  return (
    <section id="mobile-app" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1520px]">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-2 lg:order-1 relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl rounded-full" />
            
            {/* Floating Phones Composition */}
            <div className="relative h-[600px] flex items-center justify-center perspective-1000">
               {/* Phone 1 (Back/Left) */}
               <motion.div 
                 animate={{ y: [0, -15, 0] }}
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 className="absolute left-10 md:left-20 top-20 w-[240px] h-[500px] bg-white rounded-[3rem] shadow-2xl border-[6px] border-slate-100 -rotate-12 scale-90 z-10 overflow-hidden"
               >
                  {/* Screen Content Mock */}
                  <div className="h-full w-full bg-slate-50 flex flex-col pt-10 px-4">
                     <div className="w-full h-32 bg-slate-200 rounded-xl mb-4" />
                     <div className="space-y-3">
                        <div className="w-full h-12 bg-white rounded-lg shadow-sm" />
                        <div className="w-full h-12 bg-white rounded-lg shadow-sm" />
                        <div className="w-full h-12 bg-white rounded-lg shadow-sm" />
                     </div>
                  </div>
               </motion.div>

               {/* Phone 2 (Front/Right) */}
               <motion.div 
                 animate={{ y: [0, 15, 0] }}
                 transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                 className="absolute right-10 md:right-20 bottom-10 w-[260px] h-[540px] bg-slate-900 rounded-[3rem] shadow-2xl border-[6px] border-slate-800 rotate-6 z-20 overflow-hidden"
               >
                  {/* Screen Content Mock (Dark Mode App) */}
                  <div className="h-full w-full bg-slate-950 flex flex-col pt-12 px-5">
                     <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                           <div className="w-6 h-6 rounded-full bg-primary" />
                        </div>
                        <div>
                           <div className="w-20 h-3 bg-slate-700 rounded mb-2" />
                           <div className="w-16 h-2 bg-slate-800 rounded" />
                        </div>
                     </div>
                     <div className="w-full h-40 bg-slate-900 rounded-2xl mb-6 border border-slate-800 flex items-center justify-center">
                         <div className="w-16 h-16 rounded-full border-4 border-primary/50 flex items-center justify-center">
                            <div className="w-8 h-8 rounded-full bg-primary" />
                         </div>
                     </div>
                     <div className="space-y-4">
                        <div className="w-full h-14 bg-slate-900 rounded-xl border border-slate-800" />
                        <div className="w-full h-14 bg-slate-900 rounded-xl border border-slate-800" />
                     </div>
                     <div className="mt-auto mb-6 w-full h-12 bg-primary rounded-xl" />
                  </div>
               </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
              Powerful Tools <br />
              <span className="text-gradient">In Their Pocket.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Equip your guards with a native mobile app designed for speed and reliability. From GPS tracking to instant SOS alerts, it has everything they need and nothing they don't.
            </p>
            
            <ul className="space-y-4 mb-10">
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
                   <span className="text-foreground font-medium">{item}</span>
                 </li>
               ))}
            </ul>

             <div className="flex flex-wrap gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.mandm.client&pli=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-foreground hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-lg hover:-translate-y-0.5">
                  <FaGooglePlay className="w-5 h-5 text-green-500" /> Download for Android
                </a>
                <a href="https://apps.apple.com/us/app/m-m-property-app/id1659629088" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-secondary hover:bg-slate-200 text-foreground px-6 py-3 rounded-xl font-medium transition-all border border-border hover:-translate-y-0.5">
                  <FaApple className="w-6 h-6" /> iOS App Store
                </a>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
