"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import Image from "next/image";

export default function About() {
  const scrollToFeatures = () => {
    const element = document.querySelector("#features");
    if (element) {
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.scrollTo(element, { offset: -100, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <SectionHeader
              eyebrow="All-In-One Ecosystem"
              title={<>One System. <br /> <span className="text-gradient">Everything Runs Automatically.</span></>}
              align="left"
            />
            <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed mt-[-20px]">
              M&M App brings together all essential tools into a single, easy-to-use platform. It provides real-time guard monitoring through live GPS location tracking, giving supervisors complete visibility of every guard on duty. The smart QR Code combined with GPS checkpoint system ensures highly accurate patrol verification while being extremely easy to replace whenever needed.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Management and guards simply download the app and start operating immediately. Go device-free, reduce unnecessary costs, and manage security operations smarter. Manage guards, patrols, attendance, incidents, reports, and live locations in one powerful real-time system.
            </p>

            <div>
              <button
                onClick={scrollToFeatures}
                className="w-full sm:w-auto bg-foreground hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all hover:-translate-y-0.5"
              >
                Learn More About Features
              </button>
            </div>
          </motion.div>

          {/* Code-built System Architecture Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-3xl" />
            <div className="relative w-full bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-border p-5 sm:p-6 md:p-8">
              
              {/* Logo + Title */}
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image src="/logo.svg" alt="M&M Logo" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm md:text-base">M&M App Ecosystem</h3>
                  <p className="text-xs text-muted-foreground">All-in-one Guard Management</p>
                </div>
              </div>

              {/* Real product — web portal + mobile app */}
              <div className="relative pb-6 pl-6">
                {/* Web portal */}
                <div className="rounded-xl overflow-hidden border border-border shadow-md">
                  <Image
                    src="/web-dashboard.png"
                    alt="M&M web management portal — guard list"
                    width={700}
                    height={409}
                    className="w-full h-auto"
                  />
                </div>
                {/* Floating mobile app */}
                <div className="absolute bottom-0 left-0 w-[26%] max-w-[110px] rounded-[1.1rem] overflow-hidden shadow-2xl border-2 border-white">
                  <Image
                    src="/home-screen.png"
                    alt="M&M guard mobile app — patrolling schedule"
                    width={1208}
                    height={2328}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Footer stats */}
              <div className="mt-5 md:mt-6 pt-4 border-t border-border flex justify-between text-center gap-2">
                {[
                  { val: "Always On", label: "99.9% Reliable" },
                  { val: "Instant", label: "Live Updates" },
                  { val: "Ultra-Safe", label: "Bank-Grade Security" },
                ].map((s, i) => (
                  <div key={i} className="flex-1 px-1">
                    <p className="text-sm md:text-base font-bold text-foreground">{s.val}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
