import { Metadata } from "next";
import FunctionalHealthContent from "./FunctionalHealthContent";

export const metadata: Metadata = {
  title: "Functional Health in Murfreesboro, TN — Outreach Wellness",
  description:
    "Root cause functional health care in Murfreesboro, TN. Comprehensive labs, nutrition counseling & preventative screenings from Casey Meeks, FNP-BC.",
  alternates: {
    canonical: "/services/functional-health",
  },
  openGraph: {
    title: "Functional Health in Murfreesboro, TN — Outreach Wellness",
    description:
      "Root cause functional health care in Murfreesboro, TN. Comprehensive labs, nutrition counseling & preventative screenings.",
    url: "/services/functional-health",
  },
};

export default function FunctionalHealthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            name: "Functional Health",
            description:
              "Root cause functional health care including comprehensive lab panels, nutrition counseling, preventative screenings, and personalized wellness plans.",
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
              url: "https://www.outreachwellness.com/services/functional-health",
            },
          }),
        }}
      />
      <FunctionalHealthContent />
    </>
  );
}
