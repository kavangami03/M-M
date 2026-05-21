"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, UploadCloud, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
           
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex-1 lg:pr-10"
           >
             <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
               Ready to Upgrade Your <span className="text-gradient">Security Operation?</span>
             </h2>
             <p className="text-lg text-muted-foreground mb-12">
               Start your 2-week free trial today. Fill out the form, and our team will get your enterprise dashboard set up within 24 hours.
             </p>

             <div className="space-y-8">
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Headquarters</h4>
                    <p className="text-muted-foreground">07-01, Plaza Kiara, Jalan Semenyih, <br /> 43500 Selangor, Malaysia</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground">010-987-2885</p>
                 </div>
               </div>
               
               <div className="flex items-start gap-4">
                 <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">admin@monitormanage.com.my</p>
                 </div>
               </div>
             </div>
           </motion.div>

           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex-[1.2]"
           >
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-border relative overflow-hidden">
                 <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-accent" />
                 <h3 className="text-2xl font-bold font-heading mb-8 text-foreground">Start Free Trial</h3>
                 
                 <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-5">
                       <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Company Name</label>
                          <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="e.g. Apex Security" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Person In Charge</label>
                          <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="John Doe" />
                       </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-5">
                       <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Email Address</label>
                          <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="john@company.com" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-medium text-slate-700">Phone Number</label>
                          <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow" placeholder="+60 12-345 6789" />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-sm font-medium text-slate-700">Upload Logo & Company Profile</label>
                       <div className="w-full border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:bg-slate-50 hover:border-primary/50 transition-colors cursor-pointer group">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                             <UploadCloud className="w-6 h-6 text-primary" />
                          </div>
                          <p className="font-medium text-foreground mb-1">Click to upload or drag and drop</p>
                          <p className="text-xs text-muted-foreground">PDF, PNG, JPG (max. 10MB)</p>
                       </div>
                    </div>

                    <button className="w-full bg-primary hover:bg-accent text-white py-4 rounded-xl font-medium shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 mt-4">
                       Submit Application <ArrowRight className="w-5 h-5" />
                    </button>
                 </form>
              </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
}
