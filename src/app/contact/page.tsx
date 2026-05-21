import type { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Monitor & Manage",
  description: "Get in touch with Guard Monitor & Manage.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <div className="relative bg-slate-950 pb-32 overflow-hidden pt-40 lg:pt-48">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-primary to-transparent blur-3xl transform -skew-x-12"></div>
          <div className="absolute top-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-blue-600 to-transparent blur-3xl transform skew-x-12"></div>
        </div>

        <div className="w-full px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to our team.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl flex-1 mb-20 pt-20 relative z-20">

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

          {/* Left Column: Contact Info */}
          <div className="lg:w-1/3 bg-slate-900 text-white p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full -ml-20 -mb-20 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold mb-2">Get in touch</h2>
              <p className="text-slate-400 mb-12">
                We'd love to hear from you. Our friendly team is always here to chat.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">07-01, Plaza Kiara, Jalan Semenyih,<br /> 43500 Selangor, Malaysia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">010-987-2885</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">admin@monitormanage.com.my</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:w-2/3 p-10 lg:p-16">
            <h3 className="text-3xl font-heading font-bold text-slate-900 mb-10">Send a message</h3>

            <form className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors rounded-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors rounded-none"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors rounded-none"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-mail*"
                    className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors rounded-none"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full bg-transparent border-b border-slate-200 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors rounded-none resize-none"
                ></textarea>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  className="bg-primary hover:bg-slate-800 text-white font-medium px-10 py-3.5 rounded-lg shadow-sm transition-all hover:-translate-y-0.5"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
