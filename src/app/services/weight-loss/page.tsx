import { Metadata } from "next";
import WeightLossContent from "./WeightLossContent";

export const metadata: Metadata = {
  title: "Medical Weight Loss in Murfreesboro, TN — Outreach Wellness",
  description:
    "Medically supervised weight loss programs in Murfreesboro, TN. Metabolic assessments, GLP-1 options & nutrition counseling from Casey Meeks, FNP-BC.",
  alternates: {
    canonical: "/services/weight-loss",
  },
  openGraph: {
    title: "Medical Weight Loss in Murfreesboro, TN — Outreach Wellness",
    description:
      "Medically supervised weight loss in Murfreesboro, TN. Metabolic assessments, GLP-1 options & personalized nutrition plans.",
    url: "/services/weight-loss",
  },
};

export default function WeightLossPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            name: "Medical Weight Loss",
            description:
              "Medically supervised weight loss programs including metabolic assessment, GLP-1 medications, nutrition counseling, and ongoing monitoring.",
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
              url: "https://www.outreachwellness.com/services/weight-loss",
            },
          }),
        }}
      />
      <WeightLossContent />
    </>
  );
}
