"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Check, Sparkles, ShieldCheck, Zap, Info } from "lucide-react";

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
    badge: "For Gate Guards",
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
      "NFC/QR Patrol Checkpoint Scanning",
      "Geofenced Route Verification",
      "Optional Rugged Device Supply",
    ],
    highlighted: true,
  },
  {
    id: "in-charge",
    name: "In Charge (Monitoring)",
    badge: "For Supervisors",
    description:
      "Command and alert reception center for supervisors, operations managers, or control rooms.",
    basePrice: 30,
    features: [
      "Receive Live Alerts & Notifications",
      "All Guard Live GPS Locations",
      "Instant SOS Alarm Reception",
      "Real-time Dashboard Monitoring",
    ],
  },
  {
    id: "web-portal",
    name: "Web Portal (Managing)",
    badge: "For Agencies",
    description:
      "Primary agency administration console. Complete staff management, contract billing, and schedules.",
    basePrice: 30,
    features: [
      "Create Guards & In-Charge Profiles",
      "Create Contracts (Guards & Checkpoints)",
      "Automated Working & Patrol Schedules",
      "Receive Automated PDF Reports",
      "Manage Guard Leaves & Approvals",
      "Manage Guard Cash Advances",
    ],
  },
];

export default function Pricing() {
  const [packageTier, setPackageTier] = useState<"3" | "6" | "12">("3");
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
          title={
            <>
              Simple, Transparent{" "}
              <span className="text-gradient">Pricing Roles</span>
            </>
          }
          description="Build the perfect package for your agency. Choose roles for each team member and select a flexible billing plan with zero setup fees."
          align="center"
          dark={false}
        />

        {/* Highlighted 'One System' Badge */}
        <div className="flex justify-center mb-10 -mt-2">
          <span className="inline-flex items-center gap-2.5 py-2 px-6 rounded-full bg-blue-50 border border-blue-100 shadow-[0_4px_15px_rgba(37,99,235,0.03)] text-blue-700 text-xs font-black select-none">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-block w-2.5 h-2.5 rounded-full bg-blue-600" />
            </span>
            One System. Everything Runs Automatically.
          </span>
        </div>

        {/* Package Duration Switcher */}
        <div className="flex flex-col items-center justify-center mb-16">
          <div className="bg-slate-200/50 border border-slate-200/30 p-1.5 rounded-2xl inline-flex items-center gap-1 shadow-inner relative">
            {(["3", "6", "12"] as const).map((tier) => {
              const label =
                tier === "3"
                  ? "3 Months Package"
                  : tier === "6"
                    ? "6 Months Package"
                    : "12 Months Package";
              const discount =
                tier === "6" ? "5% Off" : tier === "12" ? "10% Off" : null;

              return (
                <button
                  key={tier}
                  onClick={() => setPackageTier(tier)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer relative flex items-center gap-2 z-10 ${
                    packageTier === tier
                      ? "text-slate-900"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {packageTier === tier && (
                    <motion.div
                      layoutId="activeBillingTier"
                      className="absolute inset-0 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-slate-200/40"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                    />
                  )}
                  <span className="relative z-20">{label}</span>
                  {discount && (
                    <span
                      className={`relative z-20 text-[9px] px-1.5 py-0.5 rounded font-black ${
                        packageTier === tier
                          ? "bg-emerald-500/10 text-emerald-700"
                          : "bg-emerald-500/10 text-emerald-600"
                      }`}
                    >
                      {discount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 mt-4 font-semibold flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-slate-200/60 shadow-sm">
            <Info className="w-4 h-4 text-blue-500" />1 Year Contract. No hidden
            hardware replacement fees.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
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
                        className={`text-[9px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          plan.highlighted
                            ? "bg-blue-50 text-blue-600 border-blue-100"
                            : "bg-slate-50 text-slate-500 border-slate-100"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 leading-relaxed mb-6 font-medium">
                      {plan.description}
                    </p>

                    {/* Pricing Display Console */}
                    <div className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.01] [background-image:radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:12px_12px]" />

                      {plan.id === "patrolling-guard" && (
                        <div className="mb-4 relative z-10">
                          <label className="text-[10px] uppercase font-bold text-slate-500 block mb-1.5 tracking-wider">
                            Choose Option
                          </label>
                          <div className="grid grid-cols-2 gap-1 bg-slate-200/60 border border-slate-200/35 p-1 rounded-xl text-[10px] font-black relative">
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
                        <span className="text-slate-500 font-bold text-xs">
                          RM
                        </span>
                        <span className="text-3xl sm:text-4.5xl font-black text-slate-950 tracking-tight leading-none transition-all duration-300">
                          {monthlyPrice.toLocaleString("en-US", {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                        <span className="text-xs text-slate-500 font-medium ml-1">
                          / month
                        </span>
                      </div>

                      <div className="mt-2.5 text-[11px] font-bold text-slate-600 relative z-10">
                        Total: RM{" "}
                        {totalPrice.toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 2,
                        })}{" "}
                        for {packageTier} Months
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
                          <span className="text-[11px] text-slate-600 font-bold leading-relaxed">
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
                      className={`w-full py-4 rounded-xl font-black text-xs sm:text-sm cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
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
      </div>
    </section>
  );
}
