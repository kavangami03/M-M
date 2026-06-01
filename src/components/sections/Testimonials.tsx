"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px]">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <SectionHeader
              eyebrow="Unified Management"
              title={<>Monitor Every Guard. <br className="hidden sm:block" /> <span className="text-gradient">Manage Every Site.</span></>}
              dark={true}
              align="left"
            />
            <p className="text-base sm:text-lg text-slate-300 mb-5 md:mb-6 leading-relaxed font-medium mt-[-20px]">
              Guard Monitor & Manage (M&M App) sdn bhd is a mobile-based guard patrolling & monitoring system designed to replace physical patrol devices and manual processes. A modern guard monitoring and workforce management platform built for security companies and property management.
            </p>
            <p className="text-base sm:text-lg text-slate-300 mb-5 md:mb-6 leading-relaxed font-medium">
              All guard activities are recorded in real time, generated into instant, document-ready reports and free from device maintenance cost. The system operates fully through a mobile application, making security operations smarter, faster, and more cost-effective.
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
              The system also enhances your company&apos;s professional image with modern technology that impresses both clients and management. Whether you manage a small team of 10 guards or a large force of over 1,000, M&M App scales effortlessly to meet your needs, making security operations faster, smarter, and far more transparent.
            </p>
          </motion.div>

          {/* Code-built Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full" />
            <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-900">
              {/* Browser Chrome */}
              <div className="h-9 md:h-11 bg-slate-950 border-b border-slate-800 flex items-center px-3 md:px-4 gap-1.5 md:gap-2">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-amber-500/70" />
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/70" />
                <div className="mx-auto flex items-center gap-1.5 bg-slate-800 rounded-md px-3 py-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  <span className="text-[10px] md:text-xs text-slate-400 font-mono">dashboard.monitormanage.com.my</span>
                </div>
              </div>

              {/* Dashboard Header */}
              <div className="h-12 md:h-14 bg-slate-900 border-b border-slate-800 flex items-center px-3 md:px-5 justify-between">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="relative w-6 h-6 md:w-8 md:h-8">
                    <Image src="/logo.svg" alt="M&M" fill className="object-contain" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-white">M&M Dashboard</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/30 flex items-center justify-center">
                    <span className="text-[10px] md:text-xs font-bold text-primary">A</span>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="hidden sm:flex w-14 md:w-40 bg-slate-950 border-r border-slate-800 flex-col py-3 md:py-4 gap-1">
                  {["Dashboard", "Guards", "Patrols", "Reports", "Attendance", "Settings"].map((item, i) => (
                    <div key={i} className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-r-lg mx-1 ${i === 0 ? 'bg-primary/20 text-primary' : 'text-slate-500 hover:text-slate-300'}`}>
                      <div className={`w-2 h-2 rounded-sm ${i === 0 ? 'bg-primary' : 'bg-slate-700'}`} />
                      <span className="hidden md:block text-xs font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Main Area */}
                <div className="flex-1 p-3 md:p-5 bg-slate-900/50 space-y-3 md:space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-2 md:gap-3">
                    {[
                      { label: "Active Guards", value: "24", color: "text-green-400", bg: "bg-green-500/10" },
                      { label: "Patrols Today", value: "156", color: "text-blue-400", bg: "bg-blue-500/10" },
                      { label: "Incidents", value: "3", color: "text-amber-400", bg: "bg-amber-500/10" },
                    ].map((stat, i) => (
                      <div key={i} className={`${stat.bg} border border-slate-800 rounded-lg p-2 md:p-3`}>
                        <p className="text-[9px] md:text-xs text-slate-400">{stat.label}</p>
                        <p className={`text-lg md:text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Table */}
                  <div className="bg-slate-950 rounded-lg border border-slate-800 overflow-hidden">
                    <div className="grid grid-cols-4 gap-1 px-2 md:px-3 py-2 border-b border-slate-800 text-[8px] md:text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                      <span>Guard</span><span>Location</span><span>Status</span><span>Last Scan</span>
                    </div>
                    {[
                      { name: "Ahmad R.", loc: "Zone A", status: "On Patrol", statusColor: "bg-green-500", time: "08:32" },
                      { name: "Raju K.", loc: "Zone B", status: "Stationed", statusColor: "bg-blue-500", time: "08:28" },
                      { name: "Siti N.", loc: "Zone C", status: "On Patrol", statusColor: "bg-green-500", time: "08:35" },
                    ].map((row, i) => (
                      <div key={i} className="grid grid-cols-4 gap-1 px-2 md:px-3 py-1.5 md:py-2 border-b border-slate-800/50 text-[9px] md:text-xs text-slate-300">
                        <span className="font-medium">{row.name}</span>
                        <span className="text-slate-400">{row.loc}</span>
                        <span className="flex items-center gap-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${row.statusColor}`} />
                          <span className="hidden md:inline">{row.status}</span>
                        </span>
                        <span className="text-slate-500">{row.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
