import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://outreach-wellness.vercel.app"),
  title: "Outreach Wellness | Functional Health & IV Therapy in Murfreesboro, TN",
  description:
    "Outreach Wellness offers functional health, IV therapy, injectables, weight loss, and hormone replacement in Murfreesboro, TN. Led by Casey Meeks, FNP-BC with 20+ years of experience.",
  openGraph: {
    title: "Outreach Wellness | Functional Health & IV Therapy in Murfreesboro, TN",
    description:
      "A boutique wellness practice focused on prevention, nutrition, and education. Personalized care from Casey Meeks, FNP-BC.",
    url: "https://outreach-wellness.vercel.app",
    siteName: "Outreach Wellness",
    images: [
      {
        url: "/images/logo.png",
        width: 500,
        height: 500,
        alt: "Outreach Wellness Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Outreach Wellness | Murfreesboro, TN",
    description:
      "Functional health, IV therapy, weight loss, and more. Personalized care from Casey Meeks, FNP-BC.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-body bg-dark-bg text-off-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
