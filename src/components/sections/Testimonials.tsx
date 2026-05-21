"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "M&M App completely transformed how we manage our 50+ properties. Real-time tracking means we never have to guess if a patrol happened.",
    author: "Dato' Ahmad",
    role: "Director of Operations",
    company: "Premier Property Management"
  },
  {
    quote: "The zero hardware cost is incredible. Our guards use their own phones, and the QR checkpoint system is flawless. Highly recommended.",
    author: "Sarah Lee",
    role: "Chief Security Officer",
    company: "Apex Security Solutions"
  },
  {
    quote: "Incident reporting used to take days. Now we get live photos and locations instantly. It has increased our client satisfaction by 200%.",
    author: "Michael Chen",
    role: "Facility Manager",
    company: "Global Tech Park"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-foreground text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6"
          >
            Trusted by Top <br className="hidden md:block" />
            <span className="text-gradient">Security Professionals</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
           {TESTIMONIALS.map((testimonial, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800/50 transition-colors"
             >
                <div className="flex gap-1 mb-6">
                   {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-amber-500 text-amber-500" />
                   ))}
                </div>
                <p className="text-lg leading-relaxed text-slate-300 mb-8 font-medium">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xl">
                      {testimonial.author.charAt(0)}
                   </div>
                   <div>
                      <h4 className="font-bold text-white">{testimonial.author}</h4>
                      <p className="text-sm text-slate-400">{testimonial.role}</p>
                      <p className="text-xs text-primary font-medium">{testimonial.company}</p>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
