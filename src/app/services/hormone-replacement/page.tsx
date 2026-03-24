import { Metadata } from "next";
import HormoneReplacementContent from "./HormoneReplacementContent";

export const metadata: Metadata = {
  title:
    "Hormone Replacement Therapy in Murfreesboro, TN — Outreach Wellness",
  description:
    "Bioidentical hormone replacement therapy (BHRT) in Murfreesboro, TN. Men's and women's programs with Casey Meeks, FNP-BC at Outreach Wellness.",
  alternates: {
    canonical: "/services/hormone-replacement",
  },
  openGraph: {
    title:
      "Hormone Replacement Therapy in Murfreesboro, TN — Outreach Wellness",
    description:
      "Bioidentical hormone replacement therapy for men and women in Murfreesboro, TN. Personalized care from Casey Meeks, FNP-BC.",
    url: "/services/hormone-replacement",
  },
};

export default function HormoneReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            name: "Hormone Replacement Therapy",
            description:
              "Bioidentical hormone replacement therapy (BHRT) for men and women including testosterone, estrogen, progesterone, and thyroid support with ongoing monitoring.",
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
              url: "https://www.outreachwellness.com/services/hormone-replacement",
            },
          }),
        }}
      />
      <HormoneReplacementContent />
    </>
  );
}
