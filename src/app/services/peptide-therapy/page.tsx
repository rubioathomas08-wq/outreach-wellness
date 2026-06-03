import { Metadata } from "next";
import PeptideTherapyContent from "./PeptideTherapyContent";

export const metadata: Metadata = {
  title: "Peptide Therapy in Murfreesboro, TN — Outreach Wellness",
  description:
    "Personalized peptide therapy in Murfreesboro, TN to support healing, recovery, weight management, and longevity. Casey Meeks, FNP-BC at Outreach Wellness.",
  alternates: {
    canonical: "/services/peptide-therapy",
  },
  openGraph: {
    title: "Peptide Therapy in Murfreesboro, TN — Outreach Wellness",
    description:
      "Personalized peptide therapy in Murfreesboro, TN to support healing, recovery, weight management, and longevity.",
    url: "/services/peptide-therapy",
  },
};

export default function PeptideTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            name: "Peptide Therapy",
            description:
              "Personalized peptide therapy protocols supporting recovery, healing, weight management, and longevity through targeted bioregulatory signaling.",
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
              url: "https://www.outreachwellness.com/services/peptide-therapy",
            },
          }),
        }}
      />
      <PeptideTherapyContent />
    </>
  );
}
