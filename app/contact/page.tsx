import type { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";

export const metadata: Metadata = {
  title: "Kontak — Muhammad Dliya'ul Haq",
  description: "Hubungi Muhammad Dliya'ul Haq melalui email atau LinkedIn, atau unduh CV lengkapnya.",
};

export default function ContactPage() {
  return <ContactContent />;
}
