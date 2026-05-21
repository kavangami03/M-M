"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Home", href: "/#home" },
  { name: "Features", href: "/#features" },
  { name: "Dashboard", href: "/#dashboard" },
  { name: "Mobile App", href: "/#mobile-app" },
  { name: "Pricing", href: "/#pricing" },
  { name: "About", href: "/#about" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-32 h-14 md:w-40 md:h-16 group-hover:scale-105 transition-transform">
             <Image src="/logo.svg" alt="Monitor & Manage Logo" fill className="object-contain object-left" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/#contact"
            className="text-sm font-medium hover:text-primary transition-colors mr-2"
          >
            Contact
          </Link>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-slate-200 transition-colors text-foreground">
              <FaGooglePlay className="w-4 h-4 text-primary" />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-slate-200 transition-colors text-foreground">
              <FaApple className="w-5 h-5" />
            </button>
          </div>
          <button className="bg-primary hover:bg-accent text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-premium transition-all hover:-translate-y-0.5">
            Free Trial
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg p-6 flex flex-col gap-4 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-foreground py-2 border-b border-secondary"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-foreground py-2 border-b border-secondary"
          >
            Contact
          </Link>
          
          <div className="flex gap-4 mt-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-secondary text-foreground font-medium">
              <FaGooglePlay className="w-4 h-4 text-primary" /> Play Store
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-secondary text-foreground font-medium">
              <FaApple className="w-5 h-5" /> App Store
            </button>
          </div>
          <button className="w-full bg-primary text-white py-3 rounded-lg font-medium mt-2">
            Start Free Trial
          </button>
        </motion.div>
      )}
    </header>
  );
}
