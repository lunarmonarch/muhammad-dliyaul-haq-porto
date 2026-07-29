import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const fontHeading = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Dliya'ul Haq — Industrial Engineer & Data-Driven Operations",
  description:
    "Portofolio profesional Muhammad Dliya'ul Haq, lulusan Teknik Industri Untag Surabaya (IPK 3.70), dengan fokus pada operasional, K3, dan analisis data.",
  metadataBase: new URL("https://namaanda.vercel.app"),
  openGraph: {
    title: "Muhammad Dliya'ul Haq — Portofolio Profesional",
    description:
      "Industrial Engineer | Data-Driven Operations | K3 Certified",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${fontHeading.variable} ${fontBody.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
