"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { CheckCircle2, Shield, Activity, Globe, MapPin, User, Settings, Folder, LayoutDashboard, Clock } from "lucide-react";
import Image from "next/image";

export default function DashboardShowcase() {
  return (
    <section id="dashboard" className="py-16 md:py-24 bg-foreground text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-10 sm:px-20 2xl:px-6 max-w-[1520px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full max-w-2xl">
            <SectionHeader
              eyebrow="Command Center"
              title={<>DASHBOARD (Web-Portal) <br /> <span className="text-gradient">Everything You Need In One Dashboard</span></>}
              description="Take complete control over your security operations. Our powerful web portal gives management real-time visibility and instant access to all essential reports."
              dark={true}
              align="left"
            />

            <motion.ul 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3 sm:space-y-4 mb-8 md:mb-10"
            >
              {[
                "Guards / E- Profile",
                "Audit Patrolling Report",
                "Attendance Report",
                "Incident Reports with Image and Description",
                "Contract Details"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-200 font-medium text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border border-white/10 ring-1 ring-black/5 z-20 bg-[#1e1e1e]"
            >
              {/* macOS Browser Title Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#2a2a2a] border-b border-white/5">
                {/* Traffic light dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                  <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                </div>

                {/* URL bar */}
                <div className="flex-1 mx-4">
                  <div className="flex items-center gap-2 bg-[#1a1a1a] rounded-md px-3 py-1.5 border border-white/5">
                    <svg className="w-3 h-3 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-[11px] text-slate-400 font-mono truncate">
                      dashboard.mandmsecurity.com/setup/guards
                    </span>
                  </div>
                </div>
              </div>

              {/* Dashboard Live Code-Built UI Console (100% Sharp Vector Interface) */}
              <div className="relative w-full aspect-[16/11.5] bg-[#0c101d] text-slate-100 flex overflow-hidden text-[9px] md:text-xs">
                {/* 1. Dashboard Mini Sidebar */}
                <div className="w-10 md:w-14 bg-[#080b14] border-r border-slate-800/80 flex flex-col items-center py-4 gap-4 flex-shrink-0">
                  <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <LayoutDashboard className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-6 h-6 rounded-lg hover:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-6 h-6 rounded-lg hover:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors">
                    <Folder className="w-3.5 h-3.5" />
                  </div>
                  <div className="w-6 h-6 rounded-lg hover:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-300 transition-colors">
                    <Settings className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* 2. Main Dashboard Panel Workspace */}
                <div className="flex-1 p-3 md:p-4 flex flex-col gap-3 min-w-0 overflow-y-auto">
                  {/* Dashboard Header Bar */}
                  <div className="flex items-center justify-between border-b border-slate-800/50 pb-2 flex-shrink-0">
                    <div>
                      <h4 className="font-bold text-[10px] md:text-[13px] text-white">Security Command Console</h4>
                      <p className="text-[7.5px] md:text-[9.5px] text-slate-500 font-bold">M&M Web Portal Management System</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[8px] md:text-[9.5px] text-slate-400 font-bold bg-[#0c1e19] px-2 py-0.5 rounded border border-emerald-900/50">LIVE REFRESH • ACTIVE</span>
                    </div>
                  </div>

                  {/* Dashboard Cards Grid (Proportional 2-column Layout) */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 flex-1">
                    {/* Left Column: Audit Patrolling Report (col-span-5) */}
                    <div className="sm:col-span-5 bg-[#0e1324] border border-slate-800/50 rounded-xl p-3 flex flex-col justify-between shadow-lg shadow-black/20">
                      <div>
                        {/* Title Header */}
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-[9px] md:text-[11px] text-white tracking-tight uppercase">Audit Patrolling Report</h5>
                          <span className="text-[7.5px] md:text-[8px] text-blue-400 font-bold uppercase tracking-wider">LIVE DATA</span>
                        </div>

                        {/* Interactive SVG Patrol Route Map (Highly Professional Blueprint Layout) */}
                        <div className="relative w-full aspect-[16/10] bg-[#060813] rounded-lg border border-slate-800/80 overflow-hidden mb-2.5">
                          <svg className="absolute inset-0 w-full h-full p-2.5" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id="grid-pattern" width="5" height="5" patternUnits="userSpaceOnUse">
                                <circle cx="0.5" cy="0.5" r="0.4" fill="#334155" opacity="0.2" />
                              </pattern>
                              {/* Marker for elegant route direction arrowheads */}
                              <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                                <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#10b981" />
                              </marker>
                            </defs>
                            
                            {/* Fine blueprint grid background */}
                            <rect width="100" height="60" fill="url(#grid-pattern)" />
                            
                            {/* CAD Architecture Walls (Deep gray borders, dark room fills) */}
                            {/* 1. Gatehouse */}
                            <rect x="6" y="42" width="18" height="12" rx="1" stroke="#334155" strokeWidth="0.8" fill="#0f172a" fillOpacity="0.4" />
                            <line x1="14" y1="42" x2="14" y2="54" stroke="#1e293b" strokeWidth="0.5" />
                            <text x="8" y="48" fill="#475569" fontSize="2.8" fontWeight="bold">GATEHOUSE</text>
                            <text x="16" y="48" fill="#475569" fontSize="2" fontWeight="bold">LOBBY</text>
                            
                            {/* 2. Server Room */}
                            <rect x="6" y="8" width="18" height="14" rx="1" stroke="#334155" strokeWidth="0.8" fill="#0f172a" fillOpacity="0.4" />
                            <line x1="15" y1="8" x2="15" y2="22" stroke="#1e293b" strokeWidth="0.5" />
                            <text x="8" y="14" fill="#475569" fontSize="2.5" fontWeight="bold">SERVER RM</text>
                            <text x="17" y="14" fill="#475569" fontSize="2" fontWeight="bold">HUB</text>
                            
                            {/* 3. Warehouse Zone A */}
                            <rect x="28" y="8" width="34" height="24" rx="1" stroke="#334155" strokeWidth="0.8" fill="#0f172a" fillOpacity="0.4" />
                            <line x1="45" y1="8" x2="45" y2="32" stroke="#1e293b" strokeWidth="0.5" />
                            <text x="31" y="14" fill="#475569" fontSize="3" fontWeight="bold">WAREHOUSE ZONE A</text>
                            <text x="48" y="28" fill="#475569" fontSize="2" fontWeight="bold">STORES</text>
                            
                            {/* 4. Office Suite B */}
                            <rect x="66" y="8" width="28" height="24" rx="1" stroke="#334155" strokeWidth="0.8" fill="#0f172a" fillOpacity="0.4" />
                            <line x1="80" y1="8" x2="80" y2="32" stroke="#1e293b" strokeWidth="0.5" />
                            <text x="69" y="14" fill="#475569" fontSize="2.8" fontWeight="bold">OFFICE SUITE B</text>
                            <text x="83" y="28" fill="#475569" fontSize="2" fontWeight="bold">ADMIN</text>
                            
                            {/* 5. Loading Dock */}
                            <rect x="34" y="42" width="32" height="12" rx="1" stroke="#334155" strokeWidth="0.8" fill="#0f172a" fillOpacity="0.4" />
                            <line x1="50" y1="42" x2="50" y2="54" stroke="#1e293b" strokeWidth="0.5" />
                            <text x="37" y="48" fill="#475569" fontSize="2.8" fontWeight="bold">LOADING DOCK</text>
                            
                            {/* 6. Main Corridors & Perimeter Boundary */}
                            <rect x="2" y="2" width="96" height="56" rx="2" stroke="#475569" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                            
                            {/* Outer Roadway fence representation */}
                            <line x1="2" y1="36" x2="98" y2="36" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="1 3" />
                            
                            {/* Solid, static elegant security patrol route line (Zero animations!) */}
                            <path d="M15,46 L15,15 L45,15 L45,46 L80,46 L80,15 L90,15" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15,46 L15,15 L45,15 L45,46 L80,46 L80,15 L90,15" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#arrow)" />
                            
                            {/* Symmetrical, elegant static checkpoint nodes */}
                            {/* Checkpoint 1 (Gatehouse Lobby): Verified Blue */}
                            <circle cx="15" cy="46" r="2.5" fill="#3b82f6" stroke="#060813" strokeWidth="0.8" />
                            
                            {/* Checkpoint 2 (Server Room): Verified Blue */}
                            <circle cx="15" cy="15" r="2.5" fill="#3b82f6" stroke="#060813" strokeWidth="0.8" />
                            
                            {/* Checkpoint 3 (Warehouse Stores): Verified Green */}
                            <circle cx="45" cy="15" r="2.5" fill="#10b981" stroke="#060813" strokeWidth="0.8" />
                            
                            {/* Checkpoint 4 (Loading Dock): Pending Orange (Static, no pulsing!) */}
                            <circle cx="45" cy="46" r="2.5" fill="#f59e0b" stroke="#060813" strokeWidth="0.8" />
                            
                            {/* Checkpoint 5 (Office Admin): Verified Green */}
                            <circle cx="80" cy="15" r="2.5" fill="#10b981" stroke="#060813" strokeWidth="0.8" />
                          </svg>
                          
                          {/* Map Legend Overlay */}
                          <div className="absolute bottom-1 right-1 bg-slate-950/85 backdrop-blur px-2 py-0.5 rounded text-[6px] md:text-[7.5px] border border-slate-800 text-slate-400 font-bold flex gap-2 shadow-md">
                            <span className="flex items-center gap-0.8"><span className="w-1.2 h-1.2 rounded-full bg-blue-500" />Verified</span>
                            <span className="flex items-center gap-0.8"><span className="w-1.2 h-1.2 rounded-full bg-yellow-500" />Pending</span>
                          </div>
                        </div>

                        {/* Checkpoints table */}
                        <div className="space-y-1 text-[7.5px] md:text-[9.5px]">
                          {[
                            { name: "Checkpoint 01 - Main Gate", time: "09:12 AM", status: "VERIFIED", color: "text-emerald-400 bg-emerald-500/10 border-emerald-950" },
                            { name: "Checkpoint 10 - Secure Entr", time: "09:28 AM", status: "VERIFIED", color: "text-emerald-400 bg-emerald-500/10 border-emerald-950" },
                            { name: "Checkpoint 18 - Loading Dock", time: "09:41 AM", status: "PENDING", color: "text-amber-400 bg-amber-500/10 border-amber-950" },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-[#080b14]/50 p-1 rounded border border-slate-800/80">
                              <span className="text-slate-300 font-medium truncate max-w-[55%]">{item.name}</span>
                              <span className="text-slate-500 font-mono text-[7px] md:text-[8px]">{item.time}</span>
                              <span className={`text-[6.5px] md:text-[7.5px] font-black py-0.2 px-1 rounded border ${item.color}`}>{item.status}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Route Completion Progress */}
                      <div className="mt-2.5 pt-2 border-t border-slate-800/50">
                        <div className="flex justify-between text-[7.5px] md:text-[9px] font-semibold text-slate-400 mb-1">
                          <span>Route Verification Progress</span>
                          <span className="text-blue-400">82% Completed</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="w-[82%] h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Attendance Report & Incident Reports (col-span-7) */}
                    <div className="sm:col-span-7 flex flex-col gap-3">
                      {/* Top: Attendance Report Card */}
                      <div className="bg-[#0e1324] border border-slate-800/50 rounded-xl p-3 flex flex-col shadow-lg shadow-black/20">
                        {/* Title Header */}
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-bold text-[9px] md:text-[11px] text-white tracking-tight uppercase">Attendance Report</h5>
                          <span className="text-[7.5px] md:text-[8px] text-emerald-400 font-bold uppercase tracking-wider">ACTIVE DUTY</span>
                        </div>

                        {/* Guard Roster List */}
                        <div className="space-y-1.5">
                          {[
                            { name: "JAMES WILSON", id: "0110", time: "08:00 AM", location: "Main Gate - Geofenced", initials: "JW", color: "from-blue-600 to-indigo-600" },
                            { name: "SARAH CHEN", id: "0145", time: "08:15 AM", location: "West Entry - Geofenced", initials: "SC", color: "from-emerald-600 to-teal-600" },
                            { name: "DAVID LEE", id: "0201", time: "08:32 AM", location: "Loading Area - Geofenced", initials: "DL", color: "from-violet-600 to-purple-600" }
                          ].map((guard, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-[#080b14]/50 p-1.5 rounded-lg border border-slate-800/50 text-[7.5px] md:text-[9.5px] hover:border-slate-700/60 transition-colors">
                              <div className="flex items-center gap-2 min-w-0">
                                {/* Profile Initials Avatar */}
                                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${guard.color} flex items-center justify-center font-black text-white text-[7.5px] md:text-[8px] shadow-md shadow-black/20 flex-shrink-0`}>
                                  {guard.initials}
                                </div>
                                <div className="min-w-0">
                                  <div className="font-bold text-slate-100 truncate">{guard.name} <span className="text-[6.5px] text-slate-500 font-bold">ID: {guard.id}</span></div>
                                  <div className="text-[7px] md:text-[8px] text-slate-400 flex items-center gap-1 font-semibold truncate mt-0.5">
                                    <MapPin className="w-2.5 h-2.5 text-slate-500 flex-shrink-0" />
                                    {guard.location}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                <span className="text-[7px] md:text-[8px] text-slate-500 font-mono">Clocked @ {guard.time}</span>
                                <div className="flex gap-1">
                                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-950 text-[5.5px] md:text-[6.5px] font-black uppercase py-0.2 px-1 rounded flex items-center gap-0.5"><span className="w-1 h-1 rounded-full bg-emerald-500" />ONLINE</span>
                                  <span className="bg-blue-500/10 text-blue-400 border border-blue-950 text-[5.5px] md:text-[6.5px] font-black uppercase py-0.2 px-1 rounded">PATROL</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom: Incident Reports Card */}
                      <div className="bg-[#0e1324] border border-slate-800/50 rounded-xl p-3 flex flex-col shadow-lg shadow-black/20  justify-between">
                        {/* Title Header */}
                        <div className="flex items-center justify-between mb-2 border-b border-slate-800 pb-1.5">
                          <h5 className="font-bold text-[9px] md:text-[11px] text-white tracking-tight uppercase">Incident Reports</h5>
                          <span className="text-[7.5px] md:text-[8px] text-red-400 font-bold uppercase tracking-wider animate-pulse flex items-center gap-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping flex-shrink-0" />
                            CRITICAL MONITOR
                          </span>
                        </div>

                        {/* Incident logs */}
                        <div className="space-y-2">
                          {[
                            {
                              id: "INCIDENT #119",
                              time: "09:30 AM",
                              severity: "Low Severity",
                              severityColor: "text-emerald-400 bg-emerald-500/10 border-emerald-950",
                              location: "Main Gate | Secure",
                              desc: "Gate lock verified secure",
                              status: "RESOLVED",
                              statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-950",
                              sig: "J. Wilson",
                              author: "By James Wilson"
                            },
                            {
                              id: "INCIDENT #120",
                              time: "09:45 AM",
                              severity: "High Severity",
                              severityColor: "text-red-400 bg-red-500/10 border-red-950",
                              location: "Patrol Route C | Perimeter",
                              desc: "Intrusive activity detected near perimeter fence",
                              status: "ACTIVE",
                              statusColor: "text-red-400 bg-red-500/10 border-red-950 animate-pulse",
                              sig: "S. Chen",
                              author: "By Sarah Chen"
                            }
                          ].map((item, idx) => (
                            <div key={idx} className="bg-[#080b14]/50 p-2 rounded-lg border border-slate-800/50 text-[7.5px] md:text-[9.5px]">
                              <div className="flex justify-between items-center mb-1.5 border-b border-slate-800/40 pb-1">
                                <span className="font-extrabold text-white text-[8px] md:text-[9px]">{item.id} <span className="text-slate-500 font-mono text-[7px] md:text-[8px] ml-1">{item.time}</span></span>
                                <div className="flex gap-1.5">
                                  <span className={`text-[6px] md:text-[7px] font-black uppercase py-0.2 px-1 rounded border ${item.severityColor}`}>{item.severity}</span>
                                  <span className="text-slate-500 font-medium">{item.location}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-start gap-2 min-w-0">
                                  {/* Real Verified Verification Photo Capture */}
                                  <div className="w-9 h-9 rounded-lg border border-slate-700/50 bg-[#070912] overflow-hidden flex-shrink-0 relative">
                                    <Image
                                      src={item.id === "INCIDENT #119" ? "/stat-sites.png" : "/stat-tracking.png"}
                                      alt="Verified Incident Capture"
                                      fill
                                      unoptimized
                                      className="object-cover pointer-events-none"
                                    />
                                  </div>
                                  <div className="min-w-0">
                                    <p className="text-slate-300 font-bold truncate">{item.desc}</p>
                                    <span className="text-[6.5px] md:text-[7.5px] text-slate-500 font-bold">{item.author}</span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-1 flex-shrink-0">
                                  <span className={`text-[6.5px] md:text-[7.5px] font-black py-0.2 px-1 rounded border ${item.statusColor}`}>{item.status}</span>
                                  <span className="text-slate-500 text-[6.5px] md:text-[7.5px]">Signature: <span className="italic font-bold text-slate-300 font-serif" style={{ fontFamily: "cursive" }}>{item.sig}</span></span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
