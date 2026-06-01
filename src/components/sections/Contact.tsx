"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { MapPin, Phone, Mail, UploadCloud, ArrowRight, X, AlertCircle, CheckCircle2, Building2, User, FileText, Hash } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import Image from "next/image";

interface FormErrors {
  companyName?: string;
  companyNumber?: string;
  companyAddress?: string;
  personInCharge?: string;
  email?: string;
  phone?: string;
  logo?: string;
}

export default function Contact() {
   const [companyName, setCompanyName] = useState("");
   const [companyNumber, setCompanyNumber] = useState("");
   const [companyAddress, setCompanyAddress] = useState("");
   const [personInCharge, setPersonInCharge] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [errors, setErrors] = useState<FormErrors>({});
   const [touched, setTouched] = useState<Record<string, boolean>>({});
   const [submitted, setSubmitted] = useState(false);

   const [file, setFile] = useState<File | null>(null);
   const [preview, setPreview] = useState<string | null>(null);
   const fileInputRef = useRef<HTMLInputElement>(null);

   const validate = (): FormErrors => {
      const newErrors: FormErrors = {};
      
      if (!companyName.trim()) {
         newErrors.companyName = "Company name is required";
      }

      if (!companyNumber.trim()) {
         newErrors.companyNumber = "Company registration number is required";
      }

      if (!companyAddress.trim()) {
         newErrors.companyAddress = "Company address is required";
      }
      
      if (!personInCharge.trim()) {
         newErrors.personInCharge = "Person in charge is required";
      }
      
      if (!email.trim()) {
         newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
         newErrors.email = "Please enter a valid email";
      }
      
      if (!phone.trim()) {
         newErrors.phone = "Phone number is required";
      } else if (!/^[\d\s+\-()]{7,}$/.test(phone)) {
         newErrors.phone = "Please enter a valid phone number";
      }

      if (!file) {
         newErrors.logo = "Company logo/profile is required";
      }
      
      return newErrors;
   };

   const handleBlur = (field: string) => {
      setTouched((prev) => ({ ...prev, [field]: true }));
      const validationErrors = validate();
      setErrors(validationErrors);
   };

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      const allTouched: Record<string, boolean> = {
         companyName: true,
         companyNumber: true,
         companyAddress: true,
         personInCharge: true,
         email: true,
         phone: true,
         logo: true,
      };
      setTouched(allTouched);
      
      const validationErrors = validate();
      setErrors(validationErrors);
      
      if (Object.keys(validationErrors).length === 0) {
         setSubmitted(true);
         // Form is valid — submit logic would go here
      }
   };

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
         setFile(selectedFile);
         if (selectedFile.type.startsWith("image/")) {
            const objectUrl = URL.createObjectURL(selectedFile);
            setPreview(objectUrl);
         } else {
            setPreview(null);
         }
         setTouched((prev) => ({ ...prev, logo: true }));
         setErrors((prev) => {
            const next = { ...prev };
            delete next.logo;
            return next;
         });
      }
   };

   const removeFile = (e: React.MouseEvent) => {
      e.stopPropagation();
      setFile(null);
      setPreview(null);
      if (fileInputRef.current) {
         fileInputRef.current.value = "";
      }
   };

    const getInputClasses = (field: keyof FormErrors) => {
       const base = "w-full bg-slate-50/50 border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none transition-all placeholder:text-slate-400/70";
       if (touched[field] && errors[field]) {
          return `${base} border-red-300 focus:ring-2 focus:ring-red-200 bg-red-50/20`;
       }
       if (touched[field] && !errors[field]) {
          return `${base} border-green-300 focus:ring-2 focus:ring-green-200`;
       }
       return `${base} border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary`;
    };

   if (submitted) {
      return (
         <section id="contact" className="py-16 md:py-24 bg-secondary/30 relative">
            <div className="container mx-auto px-10 sm:px-20 2xl:px-6 max-w-[1520px] relative z-10">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-lg mx-auto text-center py-20"
               >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                     <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Application Submitted!</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                     Thank you for your interest. Our team will review your application and set up your dashboard within 24 hours.
                  </p>
                  <button
                     onClick={() => {
                        setSubmitted(false);
                        setCompanyName("");
                        setCompanyNumber("");
                        setCompanyAddress("");
                        setPersonInCharge("");
                        setEmail("");
                        setPhone("");
                        setFile(null);
                        setPreview(null);
                        setTouched({});
                        setErrors({});
                     }}
                     className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-xl font-medium shadow-lg transition-all hover:-translate-y-0.5"
                  >
                     Submit Another Application
                  </button>
               </motion.div>
            </div>
         </section>
      );
   }
   return (
      <section id="contact" className="py-12 md:py-16 bg-secondary/30 relative">
         <div className="container mx-auto px-10 sm:px-20 2xl:px-6 max-w-[1520px] relative z-10">
            <SectionHeader
               eyebrow="Get Started"
               title={<>Ready to Upgrade Your <span className="text-gradient">Security Operation?</span></>}
               description="Start your 2-week free trial today. Fill out the form, and our team will get your enterprise dashboard set up within 24 hours."
               align="center"
            />

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="max-w-4xl mx-auto w-full"
            >
               <div className="bg-white rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 shadow-2xl border border-border relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r from-primary to-accent" />
                  <h3 className="text-lg sm:text-xl font-bold font-heading mb-4 md:mb-5 text-foreground text-center">Start Free Trial</h3>

                  <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} noValidate>
                     
                     {/* Section 1: Company Details */}
                     <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                           <Building2 className="w-4 h-4 text-primary" />
                           <h4 className="text-xxs sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">Company Information</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                           <div className="space-y-1">
                              <label className="text-xs font-semibold text-slate-600">
                                 Company Name <span className="text-red-500">*</span>
                              </label>
                              <div className="relative group">
                                 <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors pointer-events-none">
                                    <Building2 className="w-4 h-4" />
                                 </div>
                                 <input
                                    type="text"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    onBlur={() => handleBlur("companyName")}
                                    className={getInputClasses("companyName")}
                                    placeholder="e.g. Apex Security"
                                 />
                              </div>
                              {touched.companyName && errors.companyName && (
                                 <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.companyName}
                                 </p>
                              )}
                           </div>
                           
                           <div className="space-y-1">
                              <label className="text-xs font-semibold text-slate-600">
                                 Company Number <span className="text-red-500">*</span>
                              </label>
                              <div className="relative group">
                                 <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors pointer-events-none">
                                    <Hash className="w-4 h-4" />
                                 </div>
                                 <input
                                    type="text"
                                    value={companyNumber}
                                    onChange={(e) => setCompanyNumber(e.target.value)}
                                    onBlur={() => handleBlur("companyNumber")}
                                    className={getInputClasses("companyNumber")}
                                    placeholder="e.g. 123456-A"
                                 />
                              </div>
                              {touched.companyNumber && errors.companyNumber && (
                                 <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.companyNumber}
                                 </p>
                              )}
                           </div>
                        </div>

                        {/* Company Address */}
                        <div className="space-y-1">
                           <label className="text-xs font-semibold text-slate-600">
                              Company Address <span className="text-red-500">*</span>
                           </label>
                           <div className="relative group">
                              <div className="absolute left-3.5 top-2.5 text-slate-400 group-focus-within:text-primary transition-colors pointer-events-none">
                                 <MapPin className="w-4 h-4" />
                              </div>
                              <textarea
                                 value={companyAddress}
                                 onChange={(e) => setCompanyAddress(e.target.value)}
                                 onBlur={() => handleBlur("companyAddress")}
                                 className={`${getInputClasses("companyAddress")} resize-none h-14`}
                                 placeholder="e.g. 07-01, Plaza Kiara, Jalan Semenyih, 43500 Selangor"
                              />
                           </div>
                           {touched.companyAddress && errors.companyAddress && (
                              <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                 <AlertCircle className="w-3 h-3" /> {errors.companyAddress}
                              </p>
                           )}
                        </div>
                     </div>

                     {/* Section 2: Authorized Person Details */}
                     <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                           <User className="w-4 h-4 text-primary" />
                           <h4 className="text-xxs sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">Authorized Person</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                           <div className="space-y-1">
                              <label className="text-xs font-semibold text-slate-600">
                                 Person In Charge <span className="text-red-500">*</span>
                              </label>
                              <div className="relative group">
                                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors pointer-events-none">
                                    <User className="w-4 h-4" />
                                 </div>
                                 <input
                                    type="text"
                                    value={personInCharge}
                                    onChange={(e) => setPersonInCharge(e.target.value)}
                                    onBlur={() => handleBlur("personInCharge")}
                                    className={getInputClasses("personInCharge")}
                                    placeholder="John Doe"
                                 />
                              </div>
                              {touched.personInCharge && errors.personInCharge && (
                                 <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.personInCharge}
                                 </p>
                              )}
                           </div>
                           
                           <div className="space-y-1">
                               <label className="text-xs font-semibold text-slate-600">
                                  Phone Number <span className="text-red-500">*</span>
                               </label>
                               <div className="relative group">
                                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors pointer-events-none">
                                     <Phone className="w-4 h-4" />
                                  </div>
                                  <input
                                     type="tel"
                                     value={phone}
                                     onChange={(e) => setPhone(e.target.value)}
                                     onBlur={() => handleBlur("phone")}
                                     className={getInputClasses("phone")}
                                     placeholder="+60 12-345 6789"
                                  />
                               </div>
                               {touched.phone && errors.phone && (
                                  <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                     <AlertCircle className="w-3 h-3" /> {errors.phone}
                                  </p>
                                )}
                           </div>

                           <div className="space-y-1">
                              <label className="text-xs font-semibold text-slate-600">
                                 Email Address <span className="text-red-500">*</span>
                              </label>
                              <div className="relative group">
                                 <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors pointer-events-none">
                                    <Mail className="w-4 h-4" />
                                 </div>
                                 <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() => handleBlur("email")}
                                    className={getInputClasses("email")}
                                    placeholder="john@company.com"
                                 />
                              </div>
                              {touched.email && errors.email && (
                                 <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.email}
                                 </p>
                              )}
                           </div>
                        </div>
                     </div>

                     {/* Section 3: Supporting Profile File */}
                     <div className="space-y-3 sm:space-y-4">
                        <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
                           <UploadCloud className="w-4 h-4 text-primary" />
                           <h4 className="text-xxs sm:text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">Verification & Profile</h4>
                        </div>

                        <div className="space-y-1">
                           <label className="text-xs font-semibold text-slate-600">
                              Upload Logo & Company Profile <span className="text-red-500">*</span>
                           </label>
                           <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileChange}
                              className="hidden"
                              accept="image/*,.pdf"
                           />
                           <div 
                              onClick={() => fileInputRef.current?.click()}
                              className={`w-full border-2 border-dashed rounded-lg sm:rounded-xl p-3 flex flex-col items-center justify-center text-center hover:bg-slate-50/50 transition-colors cursor-pointer group relative overflow-hidden ${touched.logo && errors.logo ? 'border-red-300 bg-red-50/30' : 'border-slate-300 hover:border-primary/50'}`}
                              style={{ minHeight: '80px' }}
                           >
                              {preview ? (
                                 <>
                                    <div className="absolute inset-0 w-full h-full p-2">
                                      <div className="relative w-full h-full rounded-lg overflow-hidden">
                                        <Image src={preview} alt="Preview" fill className="object-contain" />
                                      </div>
                                    </div>
                                    <button 
                                      onClick={removeFile}
                                      type="button"
                                      className="absolute top-1.5 right-1.5 w-6 h-6 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:bg-white hover:scale-105 transition-all z-20"
                                    >
                                      <X className="w-3.5 h-3.5 text-slate-600" />
                                    </button>
                                 </>
                              ) : file ? (
                                 <>
                                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
                                       <FileText className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <p className="font-semibold text-foreground mb-0.5 text-xs truncate max-w-[260px]">{file.name}</p>
                                    <p className="text-[10px] text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                    <button 
                                      onClick={removeFile}
                                      type="button"
                                      className="absolute top-1.5 right-1.5 w-6 h-6 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:bg-white hover:scale-105 transition-all z-20"
                                    >
                                      <X className="w-3.5 h-3.5 text-slate-600" />
                                    </button>
                                 </>
                              ) : (
                                 <>
                                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mb-1 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                       <UploadCloud className="w-3.5 h-3.5 text-primary" />
                                    </div>
                                    <p className="font-semibold text-foreground mb-0.5 text-xs">Click to upload logo / profile</p>
                                    <p className="text-[10px] text-muted-foreground">Support PDF, PNG, JPG (Max 5MB)</p>
                                 </>
                              )}
                           </div>
                           {touched.logo && errors.logo && (
                              <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                 <AlertCircle className="w-3 h-3" /> {errors.logo}
                              </p>
                           )}
                        </div>
                     </div>

                     <button
                        type="submit"
                        className="group w-full bg-primary hover:bg-accent text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 mt-3 sm:mt-4 text-sm cursor-pointer"
                     >
                        Submit Application <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                     </button>
                  </form>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
