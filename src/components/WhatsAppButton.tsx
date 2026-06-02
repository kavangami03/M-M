"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { X, MessageSquare, Send } from "lucide-react";

export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // Check if user already dismissed the popup in this session
    const dismissed = sessionStorage.getItem("wa-popup-dismissed");
    if (dismissed) {
      setHasDismissed(true);
      return;
    }

    // Auto-show popup after 3 seconds for engagement
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setShowPopup(false);
    setHasDismissed(true);
    sessionStorage.setItem("wa-popup-dismissed", "true");
  };

  const whatsappNumber = "60109872885";
  const defaultMessage = encodeURIComponent(
    "Hello Monitor & Manage! I am visiting your website and would like to learn more about your AI-powered security operations platform."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Interactive Chat Popup */}
      <AnimatePresence>
        {showPopup && !hasDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden pointer-events-auto select-none"
          >
            {/* Header */}
            <div className="bg-slate-950 p-4 text-white relative">
              <button
                onClick={handleDismiss}
                className="absolute top-3 right-3 text-slate-400 hover:text-white transition-colors"
                aria-label="Close popup"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white text-lg font-bold">
                    <FaWhatsapp className="w-6 h-6" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-slate-950 rounded-full animate-pulse" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-wide">Monitor & Manage</h4>
                  <p className="text-[10px] text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    Typically replies in minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Message Body */}
            <div className="p-4 bg-slate-50 relative">
              {/* Decorative speech bubble arrow */}
              <div className="absolute right-6 -bottom-2 w-4 h-4 bg-slate-50 rotate-45 border-r border-b border-slate-100" />
              <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm text-xs text-slate-600 leading-relaxed">
                <p className="font-semibold text-slate-800 mb-1 flex items-center gap-1.5">
                  <span>Hey there!</span>
                  <span className="animate-bounce inline-block">👋</span>
                </p>
                Need help setting up your guard patrolling dashboard or trying out the mobile app? Chat with us now!
              </div>
            </div>

            {/* CTA Footer Link */}
            <div className="p-3 bg-white border-t border-slate-50">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setShowPopup(false);
                }}
                className="flex items-center justify-center gap-2 w-full bg-[#128C7E] hover:bg-[#075E54] text-white py-2 rounded-xl text-xs font-bold transition-all shadow-md shadow-green-500/10 hover:shadow-lg hover:shadow-green-500/25 active:scale-95"
              >
                <Send className="w-3.5 h-3.5" />
                Start Live Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="relative pointer-events-auto">
        {/* Pulsing Backlight Glows */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 blur-md animate-ping pointer-events-none" style={{ animationDuration: "2.5s" }} />
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 blur-lg pointer-events-none" />

        {/* Main Floating Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setShowPopup(false)}
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-green-500/20 transition-all hover:scale-105 active:scale-95 focus:outline-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
          whileHover={{
            y: -2,
            boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.4), 0 8px 10px -6px rgba(34, 197, 94, 0.4)",
          }}
        >
          <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9" />
          
          {/* Notification Alert Dot */}
          <AnimatePresence>
            {!showPopup && !hasDismissed && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute top-0.5 right-0.5 flex h-4 w-4"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border border-white text-[9px] text-white font-bold items-center justify-center">
                  1
                </span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.a>
      </div>
    </div>
  );
}
