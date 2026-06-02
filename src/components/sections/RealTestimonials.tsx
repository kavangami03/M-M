"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Star, Quote, ShieldCheck } from "lucide-react";

const reviews = [
  {
    name: "Ahmad Ridzuan",
    role: "Director of Security Operations",
    company: "Metro Safeguard Group",
    initials: "AR",
    rating: 5,
    text: "M&M App has completely transformed our patrol audits. We slashed manual reporting times down to absolute zero. Our clients are wowed by the automated, professional GPS-verified PDF reports they receive instantly.",
    color: "from-blue-500 to-indigo-500",
    badge: "Enterprise Partner",
    offset: "lg:translate-y-0",
  },
  {
    name: "Sarah Chen",
    role: "Senior Property Manager",
    company: "Lakeside Towers Management",
    initials: "SC",
    rating: 5,
    text: "Getting rid of expensive physical patrol sticks was the best decision we made. Every checkpoint scan is geofence-validated on the guard's phone, giving our management team absolute transparency and zero hardware maintenance costs.",
    color: "from-emerald-500 to-teal-500",
    badge: "Verified Client",
    offset: "lg:translate-y-6", // Staggered offset to break generic grid look
  },
  {
    name: "Rajesh Kumar",
    role: "Head of Security Force",
    company: "Sentosa Commercial Precinct",
    initials: "RK",
    rating: 5,
    text: "The real-time tracking, offline sync, and instant SOS cellular alerts give our command center complete operational control. This is the most reliable, comprehensive patrol app we have ever deployed.",
    color: "from-violet-500 to-purple-500",
    badge: "Security Admin",
    offset: "lg:translate-y-0",
  },
];

export default function RealTestimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 relative overflow-hidden">
      {/* Hand-crafted light glowing meshes */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100/40 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Premium Tech Grid Accent */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto px-10 sm:px-20 2xl:px-6 max-w-[1520px] relative z-10 pb-12">
        <SectionHeader
          eyebrow="Proven Success"
          title={<>What Our Clients Say <br /> <span className="text-gradient">Trusted by Leading Security Forces</span></>}
          description="Read real reviews from security operations directors, property managers, and field officers who rely on M&M App every day."
          dark={false}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 lg:gap-10">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -4 }}
              className={`relative p-8 sm:p-9 rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_24px_60px_rgba(59,130,246,0.06)] transition-all duration-500 flex flex-col justify-between group overflow-hidden ${review.offset}`}
            >
              {/* Premium Top Border Accent on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Header elements (Star ratings & verified tag pill) */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex gap-1.2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 py-1 px-3.5 rounded-full bg-blue-50/80 border border-blue-100/60 text-blue-700 font-bold text-[10px] tracking-wider uppercase">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    {review.badge}
                  </span>
                </div>

                {/* Decorative Giant Quote Watermark in Background */}
                <Quote className="absolute right-6 top-16 w-20 h-20 text-slate-100/70 pointer-events-none group-hover:text-blue-50/60 transition-colors duration-500" />

                {/* Review Text */}
                <p className="text-slate-650 leading-relaxed font-medium text-base sm:text-[17px] mb-8 relative z-10 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Reviewer details block */}
              <div className="border-t border-slate-100 pt-6 mt-auto flex items-center gap-4 relative z-10">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center font-black text-white text-base shadow-md shadow-blue-500/10 flex-shrink-0`}>
                  {review.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-slate-900 text-base truncate">{review.name}</p>
                  <p className="text-xs text-slate-500 font-semibold truncate mt-0.5">{review.role}</p>
                  <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-1">{review.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
