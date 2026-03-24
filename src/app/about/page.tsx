import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Casey Meeks, FNP-BC — Outreach Wellness in Murfreesboro, TN",
  description:
    "Meet Casey Meeks, FNP-BC, founder of Outreach Wellness in Murfreesboro, TN. 20+ years in functional health, IV therapy, hormones & weight loss.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Casey Meeks, FNP-BC — Outreach Wellness",
    description:
      "Meet Casey Meeks, FNP-BC. 20+ years of experience in functional health, IV therapy, and hormone replacement in Murfreesboro, TN.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
