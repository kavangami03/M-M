import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Monitor & Manage",
  description: "Terms and Conditions for Guard Monitor & Manage App.",
};

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
