"use client";

import { motion } from "framer-motion";
import { Copyright, Cpu } from "lucide-react";

const CERTIFICATES = [
  { 
    icon: Cpu, 
    title: "MySTI Certified", 
    desc: "Malaysia Scientific & Technology Innovation",
    file: "/mysti-certificate.png",
    badge: "Official Certificate"
  },
  { 
    icon: Copyright, 
    title: "Copyright Registered", 
    desc: "Voluntary Copyright Notification (CRLY2023W00694)",
    file: "/copyright-certificate-full.jpg",
    badge: "Voluntary Notification"
  },
];

export default function Certificates() {
  return (
    <section className="py-20 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 max-w-[1520px]">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2">
            Recognized & Certified
          </h3>
          <h2 className="text-3xl font-bold font-heading text-foreground">
            Built to Government Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {CERTIFICATES.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative h-full"
              >
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-border flex flex-col items-center justify-between text-center group hover:shadow-premium hover:-translate-y-1 hover:border-primary/20 transition-all duration-300 cursor-pointer relative min-h-[220px]"
                >
                  {cert.badge && (
                    <div className="absolute top-3 right-3 text-[9px] font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{cert.badge}</span>
                    </div>
                  )}
                  <div className="flex flex-col items-center w-full">
                    <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-primary/5 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-primary/90 transition-colors" />
                    </div>
                    <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors text-lg">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground mb-4 max-w-[280px]">{cert.desc}</p>
                  </div>
                  <span className="text-xs font-bold text-primary group-hover:underline flex items-center gap-1">
                    View Certificate →
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
