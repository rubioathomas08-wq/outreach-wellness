import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Outreach Wellness in Murfreesboro, TN",
  description:
    "Contact Outreach Wellness in Murfreesboro, TN — call (615) 417-7050, email Casey, or visit us at 321 W. McKnight Dr, Suite C. Book your consultation today.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Outreach Wellness in Murfreesboro, TN",
    description:
      "Call (615) 417-7050 or visit us at 321 W. McKnight Dr, Suite C, Murfreesboro, TN 37129. Book your consultation today.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
