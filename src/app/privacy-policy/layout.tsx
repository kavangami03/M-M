import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Monitor & Manage",
  description: "Privacy Policy for Guard Monitor & Manage App.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
