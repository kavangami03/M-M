import Hero from "@/components/sections/Hero";
import TrustStats from "@/components/sections/TrustStats";
import About from "@/components/sections/About";
import Features from "@/components/sections/Features";
import DashboardShowcase from "@/components/sections/DashboardShowcase";
import MobileAppShowcase from "@/components/sections/MobileAppShowcase";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import Certificates from "@/components/sections/Certificates";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustStats />
      <Testimonials />
      <About />
      <Features />
      <MobileAppShowcase />
      <DashboardShowcase />
      <HowItWorks />
      <Pricing />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
