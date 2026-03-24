"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function FunctionalHealthContent() {
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
              Functional Health
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Functional Health in{" "}
              <span className="italic text-gold">Murfreesboro, TN</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              Find the root cause of your symptoms with personalized, whole-body
              care from Casey Meeks, FNP-BC at Outreach Wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content */}
      <SectionWrapper>
        <div className="bg-dark-card border border-dark-border rounded-sm p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-xl md:text-2xl text-off-white mb-6">
              A Different Approach to Your Health
            </h2>
            <div className="space-y-4 text-gray-text text-sm leading-relaxed">
              <p>
                Traditional primary care often focuses on managing symptoms with
                prescriptions, leaving the underlying causes of your health
                concerns unaddressed. Functional health takes a different path.
                At Outreach Wellness in Murfreesboro, TN, Casey Meeks, FNP-BC
                works with you to uncover the root cause of what you are
                experiencing, whether that is chronic fatigue, brain fog,
                digestive issues, autoimmune concerns, or a general sense that
                something just is not right.
              </p>
              <p>
                Functional health is built on the understanding that your body
                operates as an interconnected system. A problem in one area,
                such as gut health, can create a cascade of symptoms that
                affect your energy, your mood, your sleep, and even your skin.
                Rather than treating each symptom in isolation, we look at the
                full picture and build a plan that addresses the source.
              </p>
              <p>
                Your first visit begins with a thorough assessment. We take
                the time to listen to your health history, understand your
                daily habits, and learn about the symptoms that brought you in.
                From there, we order comprehensive lab panels that go well
                beyond the standard bloodwork you might receive at a
                conventional office. These panels can include markers for
                thyroid function, hormone levels, nutrient deficiencies,
                inflammatory markers, blood sugar regulation, and more.
              </p>
              <p>
                Once your results are in, we sit down together to review
                everything in detail. You will not receive a rushed
                five-minute summary. Instead, we walk through each marker,
                explain what it means, and discuss how it connects to the way
                you have been feeling. This level of education and
                transparency is central to our approach because we believe
                that understanding your own health is the first step toward
                improving it.
              </p>
              <p>
                Based on your lab results and assessment, we create a
                personalized care plan that may include targeted nutrition
                counseling, supplement recommendations, lifestyle
                modifications, and preventative screenings. We focus on
                sustainable changes that fit into your real life rather than
                rigid protocols that are impossible to maintain. Follow-up
                visits allow us to track your progress, adjust your plan as
                needed, and make sure you are moving in the right direction.
              </p>
              <p>
                Whether you are dealing with unexplained weight gain, hormonal
                shifts, chronic inflammation, or simply want a proactive
                approach to your long-term wellness, functional health at
                Outreach Wellness provides the comprehensive, patient-centered
                care you deserve. We serve patients throughout Murfreesboro,
                Smyrna, La Vergne, and the greater Middle Tennessee area.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Who Is This For */}
      <SectionWrapper className="border-t border-dark-border">
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            Is This Right for You?
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-off-white">
            Who Is Functional Health For?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            "You experience chronic fatigue or brain fog with no clear diagnosis",
            "You have digestive issues like bloating, IBS, or food sensitivities",
            "You suspect autoimmune or thyroid concerns",
            "You want lab work that goes beyond the standard annual physical",
            "You are tired of being told your labs are normal when you do not feel normal",
            "You want a proactive, prevention-focused approach to your health",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3 bg-dark-card border border-dark-border rounded-sm p-4"
            >
              <span className="text-gold mt-0.5">&#10003;</span>
              <span className="text-gray-text text-sm">{item}</span>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl text-off-white mb-4">
            Start Your Functional Health Journey
          </h2>
          <p className="text-gray-text mb-8 max-w-md mx-auto">
            Book a consultation with Casey Meeks, FNP-BC and discover what
            root-cause care can do for you.
          </p>
          <Button href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book Your Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
