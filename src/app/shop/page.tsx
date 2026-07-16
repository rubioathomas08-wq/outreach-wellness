import { Metadata } from "next";
import ShopContent from "./ShopContent";

export const metadata: Metadata = {
  title: "Shop Supplements — Outreach Wellness Dispensary in Murfreesboro, TN",
  description:
    "Shop professional-grade Thorne supplements through the Outreach Wellness dispensary. Practitioner-selected products, FSA/HSA eligible, shipped to your door.",
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Shop Supplements — Outreach Wellness Dispensary",
    description:
      "Professional-grade Thorne supplements selected by Casey Meeks, FNP-BC. FSA/HSA eligible, shipped direct.",
    url: "/shop",
  },
};

export default function ShopPage() {
  return <ShopContent />;
}
