"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Shield } from "lucide-react";

const FEATURES = [
  "Full Access to All Features",
  "Unlimited Report",
  "Real time tracking – Alerts",
  "Multi Location Management",
  "One Stop Solution",
];

const HIGHLIGHTS = [
  { icon: Zap, label: "Instant Setup", desc: "Get started in minutes" },
  { icon: Shield, label: "No Lock-in", desc: "Cancel anytime" },
  { icon: Sparkles, label: "Free Trial", desc: "2 weeks on us" },
];

export default function Pricing() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.scrollTo(element, { duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-b from-white via-secondary/20 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px] relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-semibold text-xs sm:text-sm mb-4 md:mb-6 border border-primary/10"
          >
            Simple & Transparent Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-4 md:mb-6"
          >
            One Plan. <span className="text-gradient">Everything Included.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-muted-foreground leading-relaxed"
          >
            No hidden fees. No complicated tiers. Just one affordable plan that gives your team full access to every feature from real-time tracking to unlimited reports.
          </motion.p>
        </div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-lg mx-auto relative group"
        >
          {/* Glowing Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse" />

          <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-border shadow-2xl flex flex-col">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-5 md:mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold text-xs sm:text-sm border border-primary/10">
                <Sparkles className="w-3.5 h-3.5" />
                All-in-One Solution
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 md:mb-8">
              <span className="text-muted-foreground font-medium text-sm sm:text-base">Price From</span>
              <div className="flex items-baseline gap-2 mt-1.5">
                <span className="text-4xl sm:text-5xl font-bold font-heading text-foreground">RM 80</span>
                <span className="text-lg sm:text-xl text-muted-foreground">/ Month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Per guard, billed monthly. Volume discounts available.</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6 md:mb-8" />

            {/* Features */}
            <div className="space-y-3 sm:space-y-4 mb-8 md:mb-10 flex-1">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-600" />
                  </div>
                  <span className="text-foreground font-medium text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white py-3.5 sm:py-4 rounded-xl font-semibold shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl text-sm sm:text-base"
            >
              Contact Us to sign up for 2 Week Free trial
            </button>

            <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
              No credit card required • Setup in under 5 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
