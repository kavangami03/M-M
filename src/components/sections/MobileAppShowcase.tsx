"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { CheckCircle2 } from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Image from "next/image";

export default function MobileAppShowcase() {
  return (
    <section id="mobile-app" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Real App Screenshots */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 order-2 lg:order-1 relative w-full flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl rounded-full pointer-events-none" />

            <div className="relative flex gap-4 md:gap-6 items-start">
              {/* Phone 1 - Patrolling Schedule */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative w-[200px] sm:w-[240px] md:w-[280px] z-20"
              >
                <Image
                  src="/home-screen.png"
                  alt="M&M app — guard patrolling schedule with clock-in / clock-out"
                  width={1208}
                  height={2328}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Phone 2 - Live Location */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                className="relative w-[170px] sm:w-[200px] md:w-[230px] z-10 mt-10 md:mt-16 hidden sm:block"
              >
                <Image
                  src="/map-screen.png"
                  alt="M&M app — live GPS location tracking of guards"
                  width={1094}
                  height={2208}
                  className="w-full h-auto drop-shadow-2xl"
                />
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
            <SectionHeader
              eyebrow="On-The-Field App"
              title={<>Mobile App <br /> <span className="text-gradient">Powerful Tools In Their Pocket.</span></>}
              description="Equip your guards with a native mobile app designed for speed and reliability. From GPS tracking to instant SOS alerts, it has everything they need and nothing they don't."
              align="left"
            />

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
