"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const NAV_LINKS = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Features", href: "/#features" },
  { name: "Dashboard", href: "/#dashboard" },
  { name: "Mobile App", href: "/#mobile-app" },
  { name: "Pricing", href: "/#pricing" },

];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/", "");
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200 ${isScrolled ? "py-3 shadow-sm" : "py-5"
        }`}
    >
      <div className="container mx-auto px-6 max-w-[1520px] flex items-center justify-between">
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
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors mr-2"
          >
            Contact
          </Link>
          <div className="flex items-center gap-2">
            <a href="https://play.google.com/store/apps/details?id=com.mandm.client&pli=1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-slate-200 transition-colors text-foreground">
              <FaGooglePlay className="w-4 h-4 text-primary" />
            </a>
            <a href="https://apps.apple.com/us/app/m-m-property-app/id1659629088" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-slate-200 transition-colors text-foreground">
              <FaApple className="w-5 h-5" />
            </a>
          </div>
          <a
            href="https://portal.monitormanage.com.my/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-accent text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-premium transition-all hover:-translate-y-0.5 inline-block"
          >
            Sign Up
          </a>
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
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleNavClick(e, link.href);
              }}
              className="text-base font-medium text-foreground py-2 border-b border-secondary"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-foreground py-2 border-b border-secondary"
          >
            Contact
          </Link>

          <div className="flex gap-4 mt-4">
            <a href="https://play.google.com/store/apps/details?id=com.mandm.client&pli=1" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-secondary text-foreground font-medium">
              <FaGooglePlay className="w-4 h-4 text-primary" /> Play Store
            </a>
            <a href="https://apps.apple.com/us/app/m-m-property-app/id1659629088" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-secondary text-foreground font-medium">
              <FaApple className="w-5 h-5" /> App Store
            </a>
          </div>
          <a
            href="https://portal.monitormanage.com.my/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full bg-primary text-white py-3 rounded-lg font-medium mt-2 text-center block"
          >
            Sign Up
          </a>
        </motion.div>
      )}
    </header>
  );
}
