"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaApple, FaGooglePlay, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/", "");
      const element = document.querySelector(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
           {/* Brand & App Download */}
           <div className="col-span-1 lg:col-span-2">
             <Link href="/" className="flex items-center mb-6">
               <div className="relative w-32 h-14 md:w-40 md:h-16">
                  <Image src="/logo.svg" alt="Monitor & Manage Logo" fill className="object-contain object-left brightness-0 invert" />
               </div>
             </Link>
             <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
               The next-generation security operations platform. Guard monitoring, attendance, and reporting all in one place.
             </p>
             <div className="flex gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.mandm.client&pli=1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-lg border border-slate-800 transition-colors">
                   <FaGooglePlay className="w-5 h-5 text-green-500" />
                   <div className="text-left">
                     <div className="text-[10px] leading-none text-slate-400">GET IT ON</div>
                     <div className="text-sm font-semibold leading-tight">Google Play</div>
                   </div>
                </a>
                <a href="https://apps.apple.com/us/app/m-m-property-app/id1659629088" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2.5 rounded-lg border border-slate-800 transition-colors">
                   <FaApple className="w-5 h-5" />
                   <div className="text-left">
                     <div className="text-[10px] leading-none text-slate-400">Download on the</div>
                     <div className="text-sm font-semibold leading-tight">App Store</div>
                   </div>
                </a>
             </div>
           </div>

           {/* Quick Links */}
           <div>
             <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
             <ul className="space-y-4">
               <li><Link href="/#home" onClick={(e) => handleNavClick(e, "/#home")} className="hover:text-primary transition-colors">Home</Link></li>
               <li><Link href="/#features" onClick={(e) => handleNavClick(e, "/#features")} className="hover:text-primary transition-colors">Features</Link></li>
               <li><Link href="/#dashboard" onClick={(e) => handleNavClick(e, "/#dashboard")} className="hover:text-primary transition-colors">Dashboard</Link></li>
               <li><Link href="/#mobile-app" onClick={(e) => handleNavClick(e, "/#mobile-app")} className="hover:text-primary transition-colors">Mobile App</Link></li>
               <li><Link href="/#pricing" onClick={(e) => handleNavClick(e, "/#pricing")} className="hover:text-primary transition-colors">Pricing</Link></li>
             </ul>
           </div>

           {/* Legal & Social */}
           <div>
             <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal & Social</h4>
             <ul className="space-y-4 mb-8">
               <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
               <li><Link href="/terms-and-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
             </ul>
             <div className="flex gap-4">
               <a href="https://www.facebook.com/guardmonitormanage/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors">
                  <FaFacebook className="w-5 h-5" />
               </a>
               <a href="https://www.instagram.com/guardmonitormanage/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary transition-colors">
                  <FaInstagram className="w-5 h-5" />
               </a>
             </div>
           </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
           &copy; {new Date().getFullYear()} Monitor & Manage. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
