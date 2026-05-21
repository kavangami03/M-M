"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Lock, FileCheck } from "lucide-react";

const CERTIFICATES = [
  { icon: ShieldCheck, title: "KDN Approved", desc: "Certified by Ministry of Home Affairs" },
  { icon: Award, title: "ISO 9001:2015", desc: "Quality Management System" },
  { icon: Lock, title: "PDPA Compliant", desc: "Strict Data Privacy Standards" },
  { icon: FileCheck, title: "CIDB Certified", desc: "Approved Contractor System" },
];

export default function Certificates() {
  return (
    <section className="py-20 bg-secondary/30 border-y border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <h3 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-2">
            Recognized & Certified
          </h3>
          <h2 className="text-3xl font-bold font-heading text-foreground">
            Built to Government Standards
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-border flex flex-col items-center text-center group hover:shadow-premium transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-1">{cert.title}</h4>
                <p className="text-xs text-muted-foreground">{cert.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
