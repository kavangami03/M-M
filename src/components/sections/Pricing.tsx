"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Check, Sparkles, ShieldCheck, Zap, Info } from "lucide-react";
import Image from "next/image";

interface Plan {
  id: string;
  name: string;
  badge: string;
  description: string;
  basePrice: number;
  features: string[];
  highlighted?: boolean;
}

const PLANS: Plan[] = [
  {
    id: "gate-guard",
    name: "Gate Guard",
    badge: "Top Choice",
    description:
      "Essential attendance, incident, and location logging for gate/static guard points.",
    basePrice: 30,
    features: [
      "Audited Attendance Report",
      "Audited Incident Report",
      "Live Location Tracking",
      "Request for Advance",
      "Request for Leave",
      "SOS Panic Button & Alerting",
    ],
  },
  {
    id: "patrolling-guard",
    name: "Patrolling Guard",
    badge: "Most Popular",
    description:
      "Comprehensive active patrolling tracking. Choose between software-only or hardware inclusion.",
    basePrice: 80,
    features: [
      "Includes all Gate Guard features",
      "Audited Patrolling Report",
      "QR Patrol Checkpoint Scanning",
      "Geofenced Route Verification",
    ],
    highlighted: true,
  },
];

export default function Pricing() {
  const [packageTier] = useState<"3" | "6" | "12">("3");
  const [patrolWithDevice, setPatrolWithDevice] = useState<boolean>(false);

  // Discount calculation
  const getDiscountMultiplier = () => {
    if (packageTier === "6") return 0.95; // 5% discount
    if (packageTier === "12") return 0.9; // 10% discount
    return 1.0;
  };

  const getMonthlyPrice = (plan: Plan) => {
    let price = plan.basePrice;
    if (plan.id === "patrolling-guard") {
      price = patrolWithDevice ? 150 : 80;
    }
    return price * getDiscountMultiplier();
  };

  const getTotalPriceForTier = (plan: Plan) => {
    const monthlyPrice = getMonthlyPrice(plan);
    const months = parseInt(packageTier, 10);
    return monthlyPrice * months;
  };

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
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] relative overflow-hidden border-y border-slate-200/60"
    >
      {/* Decorative ambient background visual nodes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100/30 blur-[120px] rounded-full pointer-events-none" />

      {/* Fine Dot grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:28px_28px] z-0" />

      <div className="container mx-auto px-6 max-w-[1520px] relative z-10">
        {/* Header */}
        <SectionHeader
          eyebrow="Pricing Plans"
          title={<>One System. Everything Runs Automatically.</>}
          description={
            <>
              <span className="font-black text-slate-800 bg-gradient-to-r from-blue-500 to-indigo-500 bg-[length:100%_3px] bg-no-repeat bg-bottom pb-0.5">
                Zero Setup Fees
              </span>
              . Build the perfect package for your agency with flexible billing
              and customizable team.
            </>
          }
          align="center"
          dark={false}
        />

        {/* Billing Plans — Compact Light Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl mx-auto w-full"
        >
          <div className="relative bg-white rounded-2xl border border-slate-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-slate-100">
              {/* ── 3 Months ── */}
              <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-3">
                <span className="text-sm sm:text-base font-extrabold text-slate-800">
                  3 Months
                </span>
                <span className="text-xs font-bold text-slate-400">
                  Standard
                </span>
              </div>

              {/* ── 6 Months ── */}
              <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-3 bg-emerald-50/40">
                <span className="text-sm sm:text-base font-extrabold text-slate-800">
                  6 Months
                </span>
                <span className="text-base sm:text-lg font-black bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent leading-none">
                  SAVE 5%
                </span>
              </div>

              {/* ── 12 Months ── */}
              <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-3 bg-blue-50/40">
                <span className="text-sm sm:text-base font-extrabold text-slate-800">
                  12 Months
                </span>
                <span className="text-base sm:text-lg font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-none">
                  SAVE 10%
                </span>
                <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest">
                  Best Value
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards with Side Decorations */}
        <div className="relative">
          {/* ── Left Side CSS Decorations ── */}
          <div className="hidden lg:block absolute -left-6 xl:-left-16 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            {/* Large ring */}
            <div className="w-32 h-32 rounded-full border-2 border-blue-200/30 absolute -top-20 -left-4" />
            {/* Medium ring */}
            <div className="w-20 h-20 rounded-full border border-indigo-200/25 absolute top-8 left-6" />
            {/* Glow blob */}
            <div className="w-24 h-24 bg-blue-400/[0.06] blur-2xl rounded-full absolute top-0 left-0" />
            {/* Small dots */}
            <div className="w-2 h-2 rounded-full bg-blue-400/20 absolute top-24 left-2" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400/25 absolute -top-4 left-16" />
            <div className="w-2.5 h-2.5 rounded-full bg-blue-300/15 absolute top-36 left-10" />
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-300/20 absolute top-44 left-20" />
          </div>

          {/* ── Right Side CSS Decorations ── */}
          <div className="hidden lg:block absolute -right-6 xl:-right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            {/* Large ring */}
            <div className="w-28 h-28 rounded-full border-2 border-indigo-200/25 absolute -top-16 -right-2" />
            {/* Medium ring */}
            <div className="w-16 h-16 rounded-full border border-blue-200/20 absolute top-12 right-8" />
            {/* Glow blob */}
            <div className="w-28 h-28 bg-indigo-400/[0.05] blur-2xl rounded-full absolute -top-6 right-0" />
            {/* Small dots */}
            <div className="w-2 h-2 rounded-full bg-indigo-400/20 absolute top-28 right-4" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/25 absolute -top-2 right-14" />
            <div className="w-2 h-2 rounded-full bg-indigo-300/15 absolute top-40 right-12" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-300/20 absolute top-48 right-2" />
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-3xl mx-auto">
            {PLANS.map((plan, planIdx) => {
              const monthlyPrice = getMonthlyPrice(plan);
              const totalPrice = getTotalPriceForTier(plan);

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: planIdx * 0.08 }}
                  className="relative group flex flex-col h-full"
                >
                  <div
                    className={`relative flex-1 bg-white rounded-[2rem] p-7 border flex flex-col justify-between transition-all duration-300 shadow-[0_15px_45px_rgba(0,0,0,0.015)] hover:shadow-[0_25px_65px_rgba(37,99,235,0.08)] hover:-translate-y-1 ${
                      plan.highlighted
                        ? "border-blue-500/40 ring-1 ring-blue-500/25"
                        : "border-slate-200/80 hover:border-blue-500/20"
                    }`}
                  >
                    <div>
                      {/* Role Badge */}
                      <div className="mb-5">
                        <span
                          className={`text-xs font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                            plan.highlighted
                              ? "bg-blue-50 text-blue-600 border-blue-100"
                              : "bg-slate-50 text-slate-500 border-slate-100"
                          }`}
                        >
                          {plan.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-black text-slate-900 mb-6">
                        {plan.name}
                      </h3>

                      {/* Pricing Display Console */}
                      <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl mb-6 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.01] [background-image:radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:12px_12px]" />

                        {plan.id === "patrolling-guard" && (
                          <div className="mb-4 relative z-10">
                            <label className="text-xs uppercase font-bold text-slate-500 block mb-1.5 tracking-wider">
                              Choose Option
                            </label>
                            <div className="grid grid-cols-2 gap-1 bg-slate-200/60 border border-slate-200/35 p-1 rounded-xl text-xs font-black relative">
                              <button
                                type="button"
                                onClick={() => setPatrolWithDevice(false)}
                                className={`py-1.5 rounded-lg cursor-pointer relative z-10 transition-all duration-300 ${
                                  !patrolWithDevice
                                    ? "text-slate-900"
                                    : "text-slate-500 hover:text-slate-700"
                                }`}
                              >
                                {!patrolWithDevice && (
                                  <motion.div
                                    layoutId="patrolDeviceActive"
                                    className="absolute inset-0 bg-white border border-slate-200/50 rounded-lg shadow-sm"
                                    transition={{
                                      type: "spring",
                                      stiffness: 350,
                                      damping: 25,
                                    }}
                                  />
                                )}
                                <span className="relative z-20">
                                  Without Device
                                </span>
                              </button>
                              <button
                                type="button"
                                onClick={() => setPatrolWithDevice(true)}
                                className={`py-1.5 rounded-lg cursor-pointer relative z-10 transition-all duration-300 ${
                                  patrolWithDevice
                                    ? "text-slate-900"
                                    : "text-slate-500 hover:text-slate-700"
                                }`}
                              >
                                {patrolWithDevice && (
                                  <motion.div
                                    layoutId="patrolDeviceActive"
                                    className="absolute inset-0 bg-white border border-slate-200/50 rounded-lg shadow-sm"
                                    transition={{
                                      type: "spring",
                                      stiffness: 350,
                                      damping: 25,
                                    }}
                                  />
                                )}
                                <span className="relative z-20">
                                  With Device
                                </span>
                              </button>
                            </div>
                          </div>
                        )}

                        <div className="flex items-baseline gap-1 relative z-10">
                          <span className="text-slate-500 font-bold text-sm">
                            Only <span className="text-lg text-slate-800">RM</span>
                          </span>
                          <span className="text-3xl sm:text-4.5xl font-black text-slate-950 tracking-tight leading-none transition-all duration-300">
                            {plan.id === "gate-guard" ? "1" : monthlyPrice.toLocaleString("en-US", {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                          <span className="text-sm text-slate-500 font-medium ml-1">
                            {plan.id === "gate-guard" ? "Per Guard / Day" : "/ month"}
                          </span>
                        </div>
                      </div>

                      <div className="h-px bg-slate-100 mb-6" />

                      {/* Features checklist with premium glowing bullet points */}
                      <ul className="space-y-3.5 mb-8">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                              <Check
                                className="w-2.5 h-2.5 text-blue-600"
                                strokeWidth={3}
                              />
                            </div>
                            <span className="text-sm text-slate-600 font-bold leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button */}
                    <div>
                      <button
                        onClick={scrollToContact}
                        className={`w-full py-4 rounded-xl font-black text-sm sm:text-base cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
                          plan.highlighted
                            ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-[0_5px_20px_rgba(59,130,246,0.15)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] border border-blue-500/20"
                            : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                        }`}
                      >
                        Choose {plan.name}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Custom Plan CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-6 px-6 rounded-xl border border-slate-200/60 bg-slate-50/50"
          >
            <p className="text-slate-600 text-sm sm:text-base font-medium text-center sm:text-left">
              Looking for a custom plan?{" "}
              <span className="font-black text-slate-800">
                Let's build it together.
              </span>
            </p>
            <button
              onClick={scrollToContact}
              className="shrink-0 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-500 hover:to-blue-500 text-white text-sm font-black rounded-lg cursor-pointer transition-all duration-300 hover:-translate-y-0.5 shadow-[0_5px_15px_rgba(59,130,246,0.15)] hover:shadow-[0_8px_25px_rgba(59,130,246,0.25)] border border-blue-500/20"
            >
              Contact Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
