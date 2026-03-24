"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

const contactMethods = [
  {
    label: "Book Online",
    description: "Schedule your appointment directly through our booking portal.",
    action: (
      <Button
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4"
      >
        Book Appointment
      </Button>
    ),
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    label: "Call Us",
    description: "Speak with us directly during business hours.",
    action: (
      <a
        href="tel:6154177050"
        className="inline-flex items-center gap-2 text-off-white hover:text-gold transition-colors mt-4 text-lg font-medium"
      >
        (615) 417-7050
      </a>
    ),
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    description: "Send us a message and we'll get back to you.",
    action: (
      <a
        href="mailto:Casey@outreachwellness.com"
        className="inline-flex items-center gap-2 text-off-white hover:text-gold transition-colors mt-4 text-sm"
      >
        Casey@outreachwellness.com
      </a>
    ),
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

export default function ContactContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              Contact Us
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Get In <span className="italic text-gold">Touch</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              Ready to start your wellness journey? Book an appointment online,
              give us a call, or send us an email.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, i) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-dark-card border border-dark-border rounded-sm p-8 text-center hover:border-gold/30 transition-all duration-300"
            >
              <div className="text-gold mb-4 flex justify-center">
                {method.icon}
              </div>
              <h3 className="font-display text-lg text-off-white mb-2">
                {method.label}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                {method.description}
              </p>
              <div>{method.action}</div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Location */}
      <SectionWrapper className="border-t border-dark-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
              Our Location
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-off-white mb-4">
              Visit Us in Murfreesboro
            </h2>
            <div className="space-y-3 text-gray-text leading-relaxed">
              <p>321 W. McKnight Dr, Suite C</p>
              <p>Murfreesboro, TN 37129</p>
            </div>
            <div className="mt-6">
              <Button
                href="https://www.google.com/maps/search/?api=1&query=321+W+McKnight+Dr+Suite+C+Murfreesboro+TN+37129"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="text-xs"
              >
                Get Directions
              </Button>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-video rounded-sm overflow-hidden border border-dark-border"
          >
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=321+W+McKnight+Dr+Suite+C,Murfreesboro,TN+37129&zoom=15"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Outreach Wellness Location"
            />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="bg-dark-card border border-dark-border rounded-sm p-10 md:p-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-off-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-text max-w-lg mx-auto mb-8 leading-relaxed">
            Book your consultation today. Casey will work with you one-on-one to
            create a personalized plan for your health and wellness goals.
          </p>
          <Button
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
