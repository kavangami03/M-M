"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Check, Sparkles, Zap, Shield } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  badge: string;
  topBadge: string;
  price: string;
  pricePrefix?: string;
  priceSuffix?: string;
  savingsBadge: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    badge: "Basic Package",
    topBadge: "3-Month Contract",
    price: "RM 80",
    pricePrefix: "Starting at",
    priceSuffix: "/ Month",
    savingsBadge: "No Discount",
    description: "Ideal for single-site setups with essential monitoring requirements.",
    features: [
      "1 Web Portal User",
      "1 Gate Guard User",
      "1 Person In Charge",
      "20 Checkpoints",
      "Attendance Reports",
      "Incident Reporting",
      "Live GPS Tracking",
      "SOS Alerts"
    ],
    ctaText: "Get Started Free"
  },
  {
    id: "growth",
    name: "Growth Plan",
    badge: "Most Popular",
    topBadge: "6-Month Contract",
    price: "RM 150",
    pricePrefix: "Starting at",
    priceSuffix: "/ Month",
    savingsBadge: "5% Discount Included",
    description: "Includes a physical patrol device (with a 24-Month device contract).",
    features: [
      "Patrol Device Included",
      "1 Web Portal User",
      "1 Gate Guard User",
      "1 Person In Charge",
      "20 Checkpoints",
      "Attendance Reports",
      "Incident Reporting",
      "Live GPS Tracking",
      "SOS Alerts"
    ],
    ctaText: "Get Started Free",
    isPopular: true
  },
  {
    id: "enterprise",
    name: "Enterprise Plan",
    badge: "Custom Solutions",
    topBadge: "Best Value",
    price: "Contact Sales",
    pricePrefix: "",
    priceSuffix: "",
    savingsBadge: "10% Discount Included",
    description: "Advanced analytics, multiple guards, and 12-Month contract commitment.",
    features: [
      "Multiple Patrol Guards",
      "Unlimited Checkpoints",
      "Multi-Site Management",
      "Advanced Analytics",
      "Custom Workflows",
      "API Integrations",
      "Dedicated Support",
      "Enterprise Controls",
      "Priority Assistance"
    ],
    ctaText: "Contact Sales"
  }
];

export default function Pricing() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
    if (element) {
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.scrollTo(element, { offset: -80, duration: 1.2 });
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

      <div className="container mx-auto px-6 max-w-[1520px] relative z-10">
        {/* Header */}
        <SectionHeader
          eyebrow="Pricing Plans"
          title={<>Flexible Plans. <span className="text-gradient">No Hidden Costs.</span></>}
          description="Scale your security operations with transparent, affordable pricing models tailored to agencies of all sizes."
          align="center"
        />

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, planIdx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: planIdx * 0.15 }}
              className="relative group flex flex-col h-full"
            >
              {/* Glowing Border Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[2rem] blur transition duration-1000 group-hover:duration-200 animate-pulse ${
                plan.isPopular ? "opacity-35 group-hover:opacity-60" : "opacity-15 group-hover:opacity-35"
              }`} />

              <div className="relative flex-1 bg-gradient-to-b from-white to-[#f8fbff] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border border-border shadow-2xl flex flex-col overflow-hidden">
                {/* Top-Right Badge */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full border font-bold text-[10px] sm:text-xs uppercase tracking-wider shadow-sm ${
                    plan.isPopular 
                      ? "bg-blue-500 text-white border-blue-400" 
                      : "bg-blue-50 text-blue-700 border-blue-200/50"
                  }`}>
                    {plan.topBadge}
                  </span>
                </div>

                {/* Badge & Short Line */}
                <div className="flex items-center gap-2 mb-2 md:mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary font-semibold text-xs sm:text-sm border border-primary/10">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base font-semibold mb-5 md:mb-6 pr-24">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6 md:mb-8">
                  {plan.pricePrefix && <span className="text-muted-foreground font-medium text-sm sm:text-base">{plan.pricePrefix}</span>}
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-4xl sm:text-5xl font-bold font-heading text-foreground">{plan.price}</span>
                    {plan.priceSuffix && <span className="text-lg sm:text-xl text-muted-foreground">{plan.priceSuffix}</span>}
                    
                    {/* Savings highlight next to price */}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/50 font-semibold text-[10px] sm:text-xs">
                      {plan.savingsBadge}
                    </span>
                  </div>
                  
                  {/* Quick Value Props under price */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 mt-4 text-[10px] sm:text-[11px] font-semibold text-slate-600">
                    <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200/60">
                      <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                      <span>14-Day Free Trial</span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200/60">
                      <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                      <span>No Setup Fees</span>
                    </div>
                    <div className="flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-200/60">
                      <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={3} />
                      <span>Cancel Anytime</span>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6 md:mb-8" />

                {/* Features */}
                <div className="space-y-3 sm:space-y-4 mb-8 md:mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.05 }}
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
                  className={`w-full py-3.5 sm:py-4 rounded-xl font-bold transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                    plan.isPopular 
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white shadow-[0_12px_30px_rgba(59,130,246,0.25)] hover:-translate-y-[2px] hover:shadow-[0_15px_35px_rgba(59,130,246,0.4)]" 
                      : "bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:-translate-y-[2px]"
                  }`}
                >
                  {plan.ctaText}
                </button>

                <p className="text-center text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                  * Registration Fee: RM 200 Per Year • Trusted by security teams across multiple sites
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
