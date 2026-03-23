import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Services | Outreach Wellness — Murfreesboro, TN",
  description:
    "Explore our wellness services including functional health, IV therapy, injectables, weight loss, and hormone replacement therapy in Murfreesboro, TN.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
