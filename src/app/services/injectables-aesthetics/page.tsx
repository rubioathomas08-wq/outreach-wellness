import { Metadata } from "next";
import InjectablesAestheticsContent from "./InjectablesAestheticsContent";

export const metadata: Metadata = {
  title: "Injectables & Aesthetics in Murfreesboro, TN — Outreach Wellness",
  description:
    "Botox, dermal fillers & skin rejuvenation in Murfreesboro, TN. Natural-looking aesthetic treatments from Casey Meeks, FNP-BC at Outreach Wellness.",
  alternates: {
    canonical: "/services/injectables-aesthetics",
  },
  openGraph: {
    title: "Injectables & Aesthetics in Murfreesboro, TN — Outreach Wellness",
    description:
      "Botox, dermal fillers & skin rejuvenation in Murfreesboro, TN. Natural-looking results from Casey Meeks, FNP-BC.",
    url: "/services/injectables-aesthetics",
  },
};

export default function InjectablesAestheticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            name: "Injectables & Aesthetics",
            description:
              "Aesthetic injectable treatments including Botox, dermal fillers, lip enhancement, and skin rejuvenation for natural-looking results.",
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
              url: "https://www.outreachwellness.com/services/injectables-aesthetics",
            },
          }),
        }}
      />
      <InjectablesAestheticsContent />
    </>
  );
}
