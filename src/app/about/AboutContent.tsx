"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

const values = [
  {
    title: "Prevention First",
    description:
      "We believe in addressing health concerns before they become problems. Our approach focuses on prevention, not just treatment.",
  },
  {
    title: "Personalized Care",
    description:
      "No two patients are the same. Every treatment plan is tailored to your unique body, goals, and lifestyle.",
  },
  {
    title: "Education & Empowerment",
    description:
      "We don't just treat you — we teach you. Understanding your health gives you the power to make lasting changes.",
  },
  {
    title: "Whole-Body Wellness",
    description:
      "True health goes beyond symptoms. We look at nutrition, hormones, lifestyle, and more to help you thrive.",
  },
];

export default function AboutContent() {
  return (
    <>
      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Casey Meeks",
            jobTitle: "Family Nurse Practitioner, Board Certified",
            honorificSuffix: "FNP-BC",
            worksFor: {
              "@type": "MedicalBusiness",
              name: "Outreach Wellness",
              address: {
                "@type": "PostalAddress",
                streetAddress: "321 W. McKnight Dr, Suite C",
                addressLocality: "Murfreesboro",
                addressRegion: "TN",
                postalCode: "37129",
              },
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Middle Tennessee State University",
            },
            memberOf: {
              "@type": "Organization",
              name: "American Association of Nurse Practitioners",
            },
            knowsAbout: [
              "Functional Medicine",
              "IV Therapy",
              "Hormone Replacement Therapy",
              "Weight Management",
              "Aesthetic Medicine",
              "Preventative Health",
            ],
            image: "https://www.outreachwellness.com/images/casey-meeks.jpg",
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Meet <span className="italic text-gold">Casey Meeks</span>
            </h1>
            <p className="text-gray-text leading-relaxed">
              Family Nurse Practitioner, Board Certified — with a passion for
              helping people live healthier, fuller lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="aspect-[3/4] bg-dark-card border border-dark-border rounded-sm overflow-hidden relative">
              <Image
                src="/images/casey-meeks.jpg"
                alt="Casey Meeks, FNP-BC — Founder of Outreach Wellness"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
            <p className="text-gray-text text-xs tracking-wider uppercase text-center mt-3">
              Casey Meeks, FNP-BC
            </p>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 space-y-6"
          >
            <h2 className="font-display text-2xl md:text-3xl text-off-white">
              20+ Years of{" "}
              <span className="italic text-gold">Dedicated Care</span>
            </h2>
            <p className="text-gray-text leading-relaxed">
              Casey Meeks founded Outreach Wellness with a simple but powerful
              mission: to provide healthcare that puts prevention, nutrition,
              and education first — rather than waiting for problems to develop
              and then reacting.
            </p>
            <p className="text-gray-text leading-relaxed">
              With over two decades of experience spanning neonatal, pediatric,
              internal medicine, and oncology nursing, Casey brings a rare depth
              of knowledge to every patient interaction. She earned her degrees
              from Middle Tennessee State University and is a member of the
              American Association of Nurse Practitioners.
            </p>
            <p className="text-gray-text leading-relaxed">
              At Outreach Wellness, every patient receives one-on-one attention
              from Casey herself. There are no rushed appointments, no
              cookie-cutter plans — just personalized care designed around your
              goals, your body, and your life.
            </p>
            <div className="pt-4">
              <Button
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule a Visit
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="border-t border-dark-border">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Our Approach
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-off-white">
            What Sets Us Apart
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-dark-card border border-dark-border rounded-sm p-8"
            >
              <h3 className="font-display text-lg text-gold mb-2">
                {value.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="bg-dark-card border border-dark-border rounded-sm p-10 md:p-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-off-white mb-4">
            Start Your Wellness Journey
          </h2>
          <p className="text-gray-text max-w-lg mx-auto mb-8 leading-relaxed">
            Whether you&apos;re looking to optimize your health, manage weight, or
            explore hormone therapy — Casey is here to help you every step of
            the way.
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
