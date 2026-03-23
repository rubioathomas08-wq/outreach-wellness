import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Outreach Wellness — Casey Meeks, FNP-BC",
  description:
    "Meet Casey Meeks, FNP-BC — founder of Outreach Wellness in Murfreesboro, TN. Over 20 years of experience in functional health and wellness.",
};

export default function AboutPage() {
  return <AboutContent />;
}
