"use client";

import { motion } from "framer-motion";
import { Users, Activity, Settings, Map, FileText } from "lucide-react";

const STATS = [
  { icon: Users, label: "Guards Supported", value: "1,000+" },
  { icon: Activity, label: "Monitoring", value: "Real-Time" },
  { icon: Settings, label: "Hardware Maintenance", value: "Zero" },
  { icon: Map, label: "Site Management", value: "Multi-Site" },
  { icon: FileText, label: "Reports", value: "Instant" },
];

export default function TrustStats() {
  return (
    <section className="py-12 bg-white relative z-20 border-y border-border">
      <div className="container mx-auto px-6 max-w-[1520px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary group-hover:bg-primary/10 flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-2xl font-bold font-heading text-foreground mb-1 group-hover:text-primary transition-colors">
                  {stat.value}
                </h4>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
