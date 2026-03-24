import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.outreachwellness.com"),
  title: "Outreach Wellness — Functional Health & IV Therapy in Murfreesboro, TN",
  description:
    "Outreach Wellness offers functional health, IV therapy, weight loss & hormone replacement in Murfreesboro, TN. Personalized care from Casey Meeks, FNP-BC.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Outreach Wellness — Functional Health & IV Therapy in Murfreesboro, TN",
    description:
      "A boutique wellness practice focused on prevention, nutrition, and education. Personalized care from Casey Meeks, FNP-BC.",
    url: "/",
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
    card: "summary_large_image",
    title: "Outreach Wellness — Murfreesboro, TN",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-88WJ1D063H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-88WJ1D063H');
          `}
        </Script>
      </head>
      <body className="font-body bg-dark-bg text-off-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-dark-bg focus:px-4 focus:py-2 focus:rounded-sm focus:text-sm"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
