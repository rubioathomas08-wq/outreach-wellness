import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Wellness Services — Outreach Wellness in Murfreesboro, TN",
  description:
    "Explore functional health, IV therapy, weight loss, injectables & hormone replacement services from Casey Meeks, FNP-BC in Murfreesboro, TN.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Wellness Services — Outreach Wellness in Murfreesboro, TN",
    description:
      "Functional health, IV therapy, weight loss, injectables & hormone replacement. Personalized care in Murfreesboro, TN.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
