"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

const services = [
  {
    slug: "functional-health",
    title: "Functional Health",
    description:
      "We take a whole-body approach to your health by identifying and addressing the root causes of your symptoms — not just covering them up. Through comprehensive lab work, detailed assessments, and personalized care plans, we help you understand what your body truly needs to thrive.",
    features: [
      "Comprehensive lab panels and analysis",
      "Personalized nutrition guidance",
      "Preventative health screenings",
      "Root cause identification",
    ],
  },
  {
    slug: "iv-therapy",
    title: "IV Therapy",
    description:
      "Get the vitamins, minerals, and hydration your body needs — delivered directly into your bloodstream for maximum absorption. Whether you're fighting fatigue, recovering from illness, or just want to feel your best, our custom IV infusions are designed for you.",
    features: [
      "Hydration and recovery infusions",
      "Immune boosting blends",
      "Energy and performance drips",
      "Custom formulations available",
    ],
  },
  {
    slug: "weight-loss",
    title: "Weight Loss",
    description:
      "We go beyond diets and quick fixes. Our medically supervised weight management program combines nutrition counseling, metabolic support, and ongoing monitoring to help you achieve lasting results — at your own pace and on your own terms.",
    features: [
      "Medically supervised programs",
      "Metabolic health assessment",
      "Ongoing support and monitoring",
      "Sustainable, personalized plans",
    ],
  },
  {
    slug: "injectables-aesthetics",
    title: "Injectables & Aesthetics",
    description:
      "Look and feel like the best version of yourself with our aesthetic treatments. From smoothing fine lines to enhancing natural features, Casey provides expert care with a focus on subtle, natural-looking results.",
    features: [
      "Wrinkle-smoothing treatments",
      "Dermal fillers",
      "Skin rejuvenation",
      "Natural-looking enhancements",
    ],
  },
  {
    slug: "hormone-replacement",
    title: "Hormone Replacement Therapy",
    description:
      "Hormonal imbalances can affect every part of your life — energy, mood, sleep, weight, and more. We offer bioidentical hormone replacement therapy (BHRT) tailored to your unique needs, helping you restore balance and feel like yourself again.",
    features: [
      "Bioidentical hormone therapy (BHRT)",
      "Comprehensive hormone panels",
      "Ongoing monitoring and adjustments",
      "Men's and women's programs",
    ],
  },
];

const faqs = [
  {
    question: "Do I need a referral to book an appointment?",
    answer:
      "No referral is needed. You can book directly through our online scheduling system or call our office.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "This is a cash pay practice. However, if a prescription needs to be sent to a local pharmacy, your insurance provider would be used to cover some or all the cost of medication, based on the formulary.",
  },
  {
    question: "How long is the initial consultation?",
    answer:
      "Your first visit typically takes 45-60 minutes so we can do a thorough assessment and discuss your health goals in detail.",
  },
  {
    question: "Is telehealth available?",
    answer:
      "Yes! We offer telehealth appointments for follow-ups and certain types of consultations. Ask us when you book.",
  },
];

export default function ServicesContent() {
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
              Our Services
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Personalized <span className="italic text-gold">Wellness</span>{" "}
              Solutions
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              From functional health to aesthetics, every service is tailored to
              your unique needs and goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <SectionWrapper>
        <div className="space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              id={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="bg-dark-card border border-dark-border rounded-sm p-8 md:p-10 hover:border-gold/30 transition-all duration-300 scroll-mt-24"
            >
              <div className="md:flex md:gap-10">
                <div className="md:flex-1">
                  <h2 className="font-display text-xl md:text-2xl text-off-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-text text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="text-xs"
                  >
                    Book This Service
                  </Button>
                </div>
                <div className="mt-6 md:mt-0 md:w-72 flex-shrink-0">
                  <h4 className="text-gold text-xs tracking-[0.2em] uppercase mb-3">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-gray-text text-sm"
                      >
                        <span className="text-gold mt-0.5">&#10003;</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="border-t border-dark-border">
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            FAQ
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-off-white">
            Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-dark-card border border-dark-border rounded-sm p-6"
            >
              <h3 className="font-display text-base text-off-white mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl text-off-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-text mb-8 max-w-md mx-auto">
            Book your consultation and take the first step toward a healthier
            you.
          </p>
          <Button
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Appointment
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
