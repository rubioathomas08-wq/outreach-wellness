import { Metadata } from "next";
import AestheticsContent from "./AestheticsContent";

export const metadata: Metadata = {
  title: "Aesthetics & Neurotoxin Injections in Murfreesboro, TN — Outreach Wellness",
  description:
    "Wrinkle-relaxing neurotoxin injections in Murfreesboro, TN. Natural-looking, expert-administered treatments from Casey Meeks, FNP-BC at Outreach Wellness.",
  alternates: {
    canonical: "/services/aesthetics",
  },
  openGraph: {
    title: "Aesthetics & Neurotoxin Injections in Murfreesboro, TN — Outreach Wellness",
    description:
      "Wrinkle-relaxing neurotoxin injections in Murfreesboro, TN. Natural-looking results from Casey Meeks, FNP-BC.",
    url: "/services/aesthetics",
  },
};

export default function AestheticsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalTherapy",
            name: "Aesthetics — Neurotoxin Injections",
            description:
              "Wrinkle-relaxing neurotoxin injections for natural-looking softening of dynamic wrinkles in the forehead, glabella, and around the eyes.",
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
              url: "https://www.outreachwellness.com/services/aesthetics",
            },
          }),
        }}
      />
      <AestheticsContent />
    </>
  );
}
