import { Metadata } from "next";
import IVTherapyContent from "./IVTherapyContent";

export const metadata: Metadata = {
  title: "IV Therapy & Injectables in Murfreesboro, TN — Outreach Wellness",
  description:
    "IV vitamin infusions, energy & immune drips, plus quick-shot injectables like B12 and lipotropic boosts in Murfreesboro, TN. Casey Meeks, FNP-BC at Outreach Wellness.",
  alternates: {
    canonical: "/services/iv-therapy",
  },
  openGraph: {
    title: "IV Therapy & Injectables in Murfreesboro, TN — Outreach Wellness",
    description:
      "IV vitamin infusions, energy & immune drips, plus quick-shot injectables like B12 and lipotropic boosts in Murfreesboro, TN.",
    url: "/services/iv-therapy",
  },
};

export default function IVTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            name: "IV Therapy & Injectables",
            description:
              "Intravenous vitamin infusions, hydration therapy, and targeted injectable boosts (B12, lipotropic, MICC, immune blends) for energy, recovery, weight support, and wellness.",
            medicineSystem: "https://schema.org/WesternConventional",
            provider: {
              "@type": "MedicalBusiness",
              name: "Outreach Wellness",
              address: {
                "@type": "PostalAddress",
                streetAddress: "321 W. McKnight Dr, Suite C",
                addressLocality: "Murfreesboro",
                addressRegion: "TN",
                postalCode: "37129",
                addressCountry: "US",
              },
              telephone: "+1-615-417-7050",
              url: "https://www.outreachwellness.com/services/iv-therapy",
            },
          }),
        }}
      />
      <IVTherapyContent />
    </>
  );
}
