import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Outreach Wellness — Murfreesboro, TN",
  description:
    "Contact Outreach Wellness in Murfreesboro, TN. Call (615) 417-7050 or send us a message. Located at 321 W. McKnight Dr, Suite C.",
};

export default function ContactPage() {
  return <ContactContent />;
}
