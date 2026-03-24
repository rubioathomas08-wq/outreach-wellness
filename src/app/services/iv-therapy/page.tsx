import { Metadata } from "next";
import IVTherapyContent from "./IVTherapyContent";

export const metadata: Metadata = {
  title: "IV Therapy in Murfreesboro, TN — Outreach Wellness",
  description:
    "IV vitamin infusions and hydration therapy in Murfreesboro, TN. Immune boosting, energy drips & recovery infusions from Casey Meeks, FNP-BC.",
  alternates: {
    canonical: "/services/iv-therapy",
  },
  openGraph: {
    title: "IV Therapy in Murfreesboro, TN — Outreach Wellness",
    description:
      "IV vitamin infusions and hydration therapy in Murfreesboro, TN. Immune boosting, energy drips & recovery infusions.",
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
            name: "IV Therapy",
            description:
              "Intravenous vitamin infusions and hydration therapy for immune support, energy, athletic recovery, and overall wellness.",
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
              telephone: "",
              url: "https://www.outreachwellness.com/services/iv-therapy",
            },
          }),
        }}
      />
      <IVTherapyContent />
    </>
  );
}
