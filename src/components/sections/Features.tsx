"use client";

import { motion } from "framer-motion";
import { Shield, Smartphone, Activity, MapPin, Users, FileWarning, BarChart, AlertTriangle, Globe } from "lucide-react";

const FEATURES = [
  { icon: Smartphone, title: "No Expensive Devices", desc: "Run entirely on standard smartphones. No need for specialized rugged devices." },
  { icon: Shield, title: "Zero Maintenance", desc: "Cloud-based architecture means no server maintenance or hardware costs." },
  { icon: Activity, title: "Real-Time Tracking", desc: "Monitor guards live as they move between checkpoints with GPS accuracy." },
  { icon: MapPin, title: "Patrol Monitoring", desc: "Automated logging of QR code and GPS checkpoint scans during patrols." },
  { icon: Users, title: "Attendance System", desc: "Facial recognition and geofenced check-ins for perfect time tracking." },
  { icon: FileWarning, title: "Incident Reporting", desc: "Submit photo and text reports directly from the field instantly." },
  { icon: BarChart, title: "Live Dashboard", desc: "Get a bird's eye view of all operations from a unified command center." },
  { icon: AlertTriangle, title: "SOS Alerts", desc: "One-tap panic button for guards to instantly alert central command." },
  { icon: Globe, title: "Centralized Control", desc: "Manage multiple sites and properties from a single master account." },
];

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px]">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4 md:mb-6"
          >
            Powerful Features. <br />
            <span className="text-muted-foreground font-medium">Simple Execution.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground"
          >
            Everything you need to run a modern, efficient, and accountable security operation without the enterprise price tag.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-secondary hover:bg-white border border-transparent hover:border-border hover:shadow-premium transition-all duration-300"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl md:rounded-3xl transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-foreground mb-2 md:mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
