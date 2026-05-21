import type { Metadata } from "next";
import { FaFileContract, FaKey, FaCreditCard, FaBalanceScale, FaUserShield, FaServer } from "react-icons/fa";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Monitor & Manage",
  description: "Terms and Conditions for Guard Monitor & Manage App.",
};

const termsSections = [
  {
    title: "1. General Agreement",
    icon: FaFileContract,
    points: [
      "Guard Monitor & Manage Sdn Bhd (Monitor & Manage) agrees to provide the service (Mobile App/Web Portal) once the User has subscribed as specified in the Form.",
      "Unless otherwise expressly agreed in writing, these terms govern all rights and obligations of the parties.",
      "All terms and conditions contained herein together with the registration form shall form an agreement between Monitor & Manage and the Security Company and/or Property Management.",
      "The terms may be amended or revoked at any time. Continuing to use the app indicates agreement to new terms."
    ]
  },
  {
    title: "2. Access & Registration",
    icon: FaKey,
    points: [
      "Upon e-form completion and management acceptance, users gain access. Activation takes 24 working hours.",
      "Web portal is accessed via designated password; mobile portal via one-time password (OTP).",
      "Property Management can access the Web Portal and register up to four (4) mobile users without payment.",
      "Property Management must provide corporate info only (no personal contact/email of person-in-charge). Changing incorrectly registered individual details incurs new user creation costs.",
      "Using fake, illegal, or unauthorized details will result in immediate termination without refund, and potential legal action."
    ]
  },
  {
    title: "3. Payments & Billing",
    icon: FaCreditCard,
    points: [
      "Users receive a 1-month free trial. Post-trial, a registration fee of RM 100.00 is required for every new user.",
      "Service fee is RM 39.90 per guard per month (excluding SST). Discounts apply: 5% off (RM 37.90) for 6 months upfront, and 10% off (RM 35.90) for 12 months upfront.",
      "Payments must be via online banking (Am Bank: 8881051139828) or cheque to Guard Monitor & Manage Sdn Bhd. No cash or third-party account payments.",
      "Payments are non-refundable. All payments must be made within two (2) weeks of invoice issuance.",
      "Disputes regarding invoices must be raised in writing within seven (7) working days."
    ]
  },
  {
    title: "4. User Obligations & Compliance",
    icon: FaBalanceScale,
    points: [
      "Services must be used in accordance with Malaysian applicable laws for lawful purposes only.",
      "Users are strictly prohibited from selling, reselling, hiring, leasing, licensing, or tampering with the service.",
      "Users must maintain all information, data, and marketing plans relating to Monitor & Manage in strict confidence.",
      "If any provision is held contrary to applicable laws, remaining provisions remain in full force and effect."
    ]
  },
  {
    title: "5. Responsibilities & Liabilities",
    icon: FaUserShield,
    points: [
      "Monitor & Manage assumes no responsibility for the conduct of security guards, quotation tenders, or conflicts between users and management bodies.",
      "Security Companies/Branch Managers are solely responsible for creating and maintaining schedules and adding their guards. Schedules take 24 hours to reflect.",
      "Monitor & Manage is not liable for damages resulting from user fault or negligence.",
      "The User assumes full liability for all losses, costs, and expenses arising from their use of the platform."
    ]
  },
  {
    title: "6. Service Operations & Support",
    icon: FaServer,
    points: [
      "Inactive accounts (no access for 1 year) will be deactivated/deleted. Reactivation costs are borne by the user.",
      "Monitor & Manage does not guarantee error-free or uninterrupted service and is not responsible for unavoidable unavailability.",
      "Users must immediately notify Monitor & Manage of any service interruptions.",
      "Operational hours for support: Mon-Fri 10.00 am - 10.00 pm, Saturdays 10.00 am - 2.00 pm. Closed on Sundays and public holidays."
    ]
  }
];

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden pt-36">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-blue-600 to-transparent blur-3xl transform -skew-x-12"></div>
          <div className="absolute top-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-indigo-600 to-transparent blur-3xl transform skew-x-12"></div>
        </div>
        
        <div className="w-full px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
            Terms & <span className="text-gradient">Conditions</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            GUARD MONITOR & MANAGE SDN BHD
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-6 lg:px-12 py-16 -mt-12 relative z-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {termsSections.map((section, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 md:p-12 shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-slate-100"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 border-b border-slate-100 pb-8">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                  <section.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-heading tracking-tight">{section.title}</h3>
              </div>
              
              <ul className="space-y-6">
                {section.points.map((point, ptIndex) => (
                  <li key={ptIndex} className="flex items-start gap-5">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2.5 shrink-0 shadow-sm shadow-blue-500/50"></div>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
