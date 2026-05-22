"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, UploadCloud, ArrowRight, X, AlertCircle, CheckCircle2 } from "lucide-react";
import { useState, useRef, FormEvent } from "react";
import Image from "next/image";

interface FormErrors {
  companyName?: string;
  personInCharge?: string;
  email?: string;
  phone?: string;
  logo?: string;
  certificate?: string;
}

export default function Contact() {
   const [companyName, setCompanyName] = useState("");
   const [personInCharge, setPersonInCharge] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [errors, setErrors] = useState<FormErrors>({});
   const [touched, setTouched] = useState<Record<string, boolean>>({});
   const [submitted, setSubmitted] = useState(false);

   const [file, setFile] = useState<File | null>(null);
   const [preview, setPreview] = useState<string | null>(null);
   const fileInputRef = useRef<HTMLInputElement>(null);

   const [certFile, setCertFile] = useState<File | null>(null);
   const [certPreview, setCertPreview] = useState<string | null>(null);
   const certInputRef = useRef<HTMLInputElement>(null);

   const validate = (): FormErrors => {
      const newErrors: FormErrors = {};
      
      if (!companyName.trim()) {
         newErrors.companyName = "Company name is required";
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

      if (!certFile) {
         newErrors.certificate = "Government certificate is required";
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
         personInCharge: true,
         email: true,
         phone: true,
         logo: true,
         certificate: true,
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

   const handleCertChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
         setCertFile(selectedFile);
         if (selectedFile.type.startsWith("image/")) {
            const objectUrl = URL.createObjectURL(selectedFile);
            setCertPreview(objectUrl);
         } else {
            setCertPreview(null);
         }
         setTouched((prev) => ({ ...prev, certificate: true }));
         setErrors((prev) => {
            const next = { ...prev };
            delete next.certificate;
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

   const removeCertFile = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCertFile(null);
      setCertPreview(null);
      if (certInputRef.current) {
         certInputRef.current.value = "";
      }
   };

   const getInputClasses = (field: keyof FormErrors) => {
      const base = "w-full bg-slate-50 border rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none transition-all";
      if (touched[field] && errors[field]) {
         return `${base} border-red-300 focus:ring-2 focus:ring-red-200 bg-red-50/30`;
      }
      if (touched[field] && !errors[field]) {
         return `${base} border-green-300 focus:ring-2 focus:ring-green-200`;
      }
      return `${base} border-slate-200 focus:ring-2 focus:ring-primary/50`;
   };

   if (submitted) {
      return (
         <section id="contact" className="py-16 md:py-24 bg-secondary/30 relative">
            <div className="container mx-auto px-4 sm:px-6 max-w-[1520px] relative z-10">
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
                        setPersonInCharge("");
                        setEmail("");
                        setPhone("");
                        setFile(null);
                        setPreview(null);
                        setCertFile(null);
                        setCertPreview(null);
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
      <section id="contact" className="py-16 md:py-24 bg-secondary/30 relative">
         <div className="container mx-auto px-4 sm:px-6 max-w-[1520px] relative z-10">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex-1 lg:pr-10"
               >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-5 md:mb-6">
                     Ready to Upgrade Your <span className="text-gradient">Security Operation?</span>
                  </h2>
                  <p className="text-base sm:text-lg text-muted-foreground mb-8 md:mb-12">
                     Start your 2-week free trial today. Fill out the form, and our team will get your enterprise dashboard set up within 24 hours.
                  </p>

                  <div className="space-y-6 md:space-y-8">
                     <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                           <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-foreground text-base sm:text-lg mb-1">Headquarters</h4>
                           <p className="text-muted-foreground text-sm sm:text-base">07-01,Plaza Kiara , Jalan Semenyih,<br />43500 Selangor</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                           <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-foreground text-base sm:text-lg mb-1">Phone</h4>
                           <p className="text-muted-foreground text-sm sm:text-base">0109872885</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                           <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <div>
                           <h4 className="font-bold text-foreground text-base sm:text-lg mb-1">Email</h4>
                           <p className="text-muted-foreground text-sm sm:text-base">admin@monitormanage.com.my</p>
                        </div>
                     </div>
                  </div>
               </motion.div>

               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex-[1.2] w-full"
               >
                  <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-10 shadow-2xl border border-border relative overflow-hidden">
                     <div className="absolute top-0 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r from-primary to-accent" />
                     <h3 className="text-xl sm:text-2xl font-bold font-heading mb-6 md:mb-8 text-foreground">Start Free Trial</h3>

                     <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit} noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                           <div className="space-y-1.5">
                              <label className="text-xs sm:text-sm font-medium text-slate-700">
                                 Company Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                 type="text"
                                 value={companyName}
                                 onChange={(e) => setCompanyName(e.target.value)}
                                 onBlur={() => handleBlur("companyName")}
                                 className={getInputClasses("companyName")}
                                 placeholder="e.g. Apex Security"
                              />
                              {touched.companyName && errors.companyName && (
                                 <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.companyName}
                                 </p>
                              )}
                           </div>
                           <div className="space-y-1.5">
                              <label className="text-xs sm:text-sm font-medium text-slate-700">
                                 Person In Charge <span className="text-red-500">*</span>
                              </label>
                              <input
                                 type="text"
                                 value={personInCharge}
                                 onChange={(e) => setPersonInCharge(e.target.value)}
                                 onBlur={() => handleBlur("personInCharge")}
                                 className={getInputClasses("personInCharge")}
                                 placeholder="John Doe"
                              />
                              {touched.personInCharge && errors.personInCharge && (
                                 <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.personInCharge}
                                 </p>
                              )}
                           </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                           <div className="space-y-1.5">
                              <label className="text-xs sm:text-sm font-medium text-slate-700">
                                 Email Address <span className="text-red-500">*</span>
                              </label>
                              <input
                                 type="email"
                                 value={email}
                                 onChange={(e) => setEmail(e.target.value)}
                                 onBlur={() => handleBlur("email")}
                                 className={getInputClasses("email")}
                                 placeholder="john@company.com"
                              />
                              {touched.email && errors.email && (
                                 <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.email}
                                 </p>
                              )}
                           </div>
                           <div className="space-y-1.5">
                              <label className="text-xs sm:text-sm font-medium text-slate-700">
                                 Phone Number <span className="text-red-500">*</span>
                              </label>
                              <input
                                 type="tel"
                                 value={phone}
                                 onChange={(e) => setPhone(e.target.value)}
                                 onBlur={() => handleBlur("phone")}
                                 className={getInputClasses("phone")}
                                 placeholder="+60 12-345 6789"
                              />
                              {touched.phone && errors.phone && (
                                 <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                                 </p>
                              )}
                           </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                           <div className="space-y-1.5">
                              <label className="text-xs sm:text-sm font-medium text-slate-700">
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
                                 className={`w-full border-2 border-dashed rounded-lg sm:rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group relative overflow-hidden ${touched.logo && errors.logo ? 'border-red-300 bg-red-50/30' : 'border-slate-300 hover:border-primary/50'}`}
                                 style={{ minHeight: '120px' }}
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
                                         className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                                       >
                                         <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
                                       </button>
                                    </>
                                 ) : file ? (
                                    <>
                                       <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                                          <UploadCloud className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                       </div>
                                       <p className="font-medium text-foreground mb-1 text-xs sm:text-sm truncate max-w-full">{file.name}</p>
                                       <p className="text-xs text-muted-foreground">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                       <button 
                                         onClick={removeFile}
                                         type="button"
                                         className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                                       >
                                         <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
                                       </button>
                                    </>
                                 ) : (
                                    <>
                                       <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                                          <UploadCloud className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                       </div>
                                       <p className="font-medium text-foreground mb-1 text-xs sm:text-sm">Click to upload</p>
                                       <p className="text-xs text-muted-foreground">PDF, PNG, JPG</p>
                                    </>
                                 )}
                              </div>
                              {touched.logo && errors.logo && (
                                 <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.logo}
                                 </p>
                              )}
                           </div>
                           
                           <div className="space-y-1.5">
                              <label className="text-xs sm:text-sm font-medium text-slate-700">
                                 Upload Government Certificate <span className="text-red-500">*</span>
                              </label>
                              <input
                                 type="file"
                                 ref={certInputRef}
                                 onChange={handleCertChange}
                                 className="hidden"
                                 accept="image/*,.pdf"
                              />
                              <div 
                                 onClick={() => certInputRef.current?.click()}
                                 className={`w-full border-2 border-dashed rounded-lg sm:rounded-xl p-4 flex flex-col items-center justify-center text-center hover:bg-slate-50 transition-colors cursor-pointer group relative overflow-hidden ${touched.certificate && errors.certificate ? 'border-red-300 bg-red-50/30' : 'border-slate-300 hover:border-primary/50'}`}
                                 style={{ minHeight: '120px' }}
                              >
                                 {certPreview ? (
                                    <>
                                       <div className="absolute inset-0 w-full h-full p-2">
                                         <div className="relative w-full h-full rounded-lg overflow-hidden">
                                           <Image src={certPreview} alt="Preview" fill className="object-contain" />
                                         </div>
                                       </div>
                                       <button 
                                         onClick={removeCertFile}
                                         type="button"
                                         className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                                       >
                                         <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
                                       </button>
                                    </>
                                 ) : certFile ? (
                                    <>
                                       <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                                          <UploadCloud className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                       </div>
                                       <p className="font-medium text-foreground mb-1 text-xs sm:text-sm truncate max-w-full">{certFile.name}</p>
                                       <p className="text-xs text-muted-foreground">{(certFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                                       <button 
                                         onClick={removeCertFile}
                                         type="button"
                                         className="absolute top-2 right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                                       >
                                         <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
                                       </button>
                                    </>
                                 ) : (
                                    <>
                                       <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                                          <UploadCloud className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                       </div>
                                       <p className="font-medium text-foreground mb-1 text-xs sm:text-sm">Click to upload</p>
                                       <p className="text-xs text-muted-foreground">PDF, PNG, JPG</p>
                                    </>
                                 )}
                              </div>
                              {touched.certificate && errors.certificate && (
                                 <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                                    <AlertCircle className="w-3 h-3" /> {errors.certificate}
                                 </p>
                              )}
                           </div>
                        </div>

                        <button
                           type="submit"
                           className="w-full bg-primary hover:bg-accent text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2 mt-3 sm:mt-4 text-sm sm:text-base"
                        >
                           Submit Application <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                     </form>
                  </div>
               </motion.div>

            </div>
         </div>
      </section>
   );
}
