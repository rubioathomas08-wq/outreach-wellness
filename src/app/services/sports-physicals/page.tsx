import { Metadata } from "next";
import SportsPhysicalsContent from "./SportsPhysicalsContent";

export const metadata: Metadata = {
  title: "Sports Physicals in Murfreesboro, TN — Outreach Wellness",
  description:
    "Quick, thorough pre-participation sports physicals in Murfreesboro, TN. Forms signed same day for student athletes by Casey Meeks, FNP-BC.",
  alternates: {
    canonical: "/services/sports-physicals",
  },
  openGraph: {
    title: "Sports Physicals in Murfreesboro, TN — Outreach Wellness",
    description:
      "Quick, thorough pre-participation sports physicals in Murfreesboro, TN. Forms signed same day for student athletes.",
    url: "/services/sports-physicals",
  },
};

export default function SportsPhysicalsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: "Sports Physical",
            description:
              "Pre-participation physical evaluations for student athletes including medical history review, vital signs, vision, cardiovascular screening, and musculoskeletal assessment.",
            procedureType: "https://schema.org/DiagnosticProcedure",
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
              url: "https://www.outreachwellness.com/services/sports-physicals",
            },
          }),
        }}
      />
      <SportsPhysicalsContent />
    </>
  );
}
