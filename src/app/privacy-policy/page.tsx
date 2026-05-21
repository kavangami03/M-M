import type { Metadata } from "next";
import { FaShieldAlt, FaUserEdit, FaClipboardList, FaShareAlt, FaDatabase, FaUsers } from "react-icons/fa";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Monitor & Manage",
  description: "Privacy Policy for Guard Monitor & Manage App.",
};

const policyPoints = [
  {
    title: "User Consent",
    icon: FaShieldAlt,
    content: "By using the services provided by Guard Monitor & Manage Sdn Bhd (herein after referred as Monitor & Manage) the user consents to the collection and/or usage and/or sharing of data under the Privacy Policy and agree to all the terms and conditions."
  },
  {
    title: "Policy Updates",
    icon: FaUserEdit,
    content: "The user consents to the changes on the privacy policy upon using the service subsequent to an update. Monitor & Manage may and/or will modify the privacy policy from time to time and a notice will be provided in regards to the changes in the mobile app and/or web portal. By continuing to use the app and/or web portal upon receiving the notice of any amendments and/or changes, the User consents to the latest privacy policy."
  },
  {
    title: "Information Collection",
    icon: FaClipboardList,
    content: "Monitor & Manage may collects information's such as user's name, company name, contact details of the user, correspondence address of the user (including e-mail address). These details may be obtained when the user registers to use the App and/or web portal. Personal data may be obtained when the user lodges any complaint and/or feedback to Monitor & Manage regarding the app and/or web portal."
  },
  {
    title: "Purpose of Collection",
    icon: FaDatabase,
    content: "The collected information will be used by Monitor & Manage to verify the identity of the user, to verify financial worthiness, preventing illegal activities, to smoothen process of communication, to provide update regarding the app, to investigate, respond and/or defend the company from any legal action and/or claims arising in the future, for any other purposes that is required and/or permitted by law, regulation, guidelines. The information's collected are also to enable Monitor & Manage to comply with the legal requirements, auditing purposes, analysing of data, and future researches done by Monitor & Manage and/or purposes required by the governing laws, regulations guidelines and relevant authorities."
  },
  {
    title: "Data Sharing & Disclosure",
    icon: FaShareAlt,
    content: "Monitor & Manage may and/or be required to provide the details collected from the user to law enforcement agencies, organisations that may be our agents, contractors, service providers and/or advisers and/or business associates, government agencies. Monitor & Manage will obtain and collect personal data of the users for as long as needed. Those Obtained data may be used by Monitor & Manage as it requires and/or deemed fit."
  },
  {
    title: "Third-Party Consent",
    icon: FaUsers,
    content: "Security Company's and/or Branch Managers are required to provide information's about the users and update Monitor & Manage if there are any changes and/or incorrect information. In the event the Security Company and/or Branch Manager must provide information about a third party, they must obtain prior consent from the third party before providing the information to the company."
  }
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative bg-slate-950 py-24 lg:py-32 overflow-hidden pt-36">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-primary to-transparent blur-3xl transform -skew-x-12"></div>
          <div className="absolute top-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-blue-600 to-transparent blur-3xl transform skew-x-12"></div>
        </div>
        
        <div className="w-full px-6 lg:px-12 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            How we collect, use, and protect your data to provide a secure operational environment.
          </p>
          <div className="mt-8 inline-flex items-center bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-full px-6 py-2.5 text-sm text-slate-300">
            <span className="w-2 h-2 rounded-full bg-green-500 mr-3 animate-pulse"></span>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full px-6 lg:px-12 py-16 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {policyPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-8 md:p-10 shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-slate-100 group flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                <point.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-5 font-heading tracking-tight">{point.title}</h3>
              <ul className="space-y-4 flex-1">
                <li className="flex items-start gap-4">
                   <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0"></div>
                   <p className="text-slate-600 leading-relaxed text-lg">
                     {point.content}
                   </p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
