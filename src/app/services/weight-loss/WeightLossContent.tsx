"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function WeightLossContent() {
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
              Weight Loss
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Medical Weight Loss in{" "}
              <span className="italic text-gold">Murfreesboro, TN</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              A medically supervised, sustainable approach to weight management
              from Casey Meeks, FNP-BC at Outreach Wellness.
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
              Why Medical Weight Loss Is Different from Dieting
            </h2>
            <div className="space-y-4 text-gray-text text-sm leading-relaxed">
              <p>
                If you have tried countless diets, workout programs, and
                supplements without lasting results, you are not alone. The
                truth is that sustainable weight loss is rarely about
                willpower. It is about understanding the unique metabolic,
                hormonal, and lifestyle factors that influence how your body
                stores and burns fat. At Outreach Wellness in Murfreesboro,
                TN, Casey Meeks, FNP-BC provides medically supervised weight
                loss programs designed to address those underlying factors so
                you can achieve results that actually last.
              </p>
              <p>
                Your weight loss journey begins with a comprehensive metabolic
                assessment. This includes lab work to evaluate your thyroid
                function, blood sugar regulation, hormone levels, and
                inflammatory markers. These results give us a clear picture of
                what may be working against your efforts and allow us to
                create a program that is specifically built for your body, not
                a one-size-fits-all plan pulled from a template.
              </p>
              <p>
                Depending on your assessment, your treatment plan may include
                prescription medications such as GLP-1 receptor agonists like
                semaglutide, which have shown significant effectiveness in
                helping patients achieve and maintain weight loss. These
                medications work by regulating appetite signals and improving
                how your body processes food. Casey carefully evaluates
                whether medication is appropriate for your situation and
                monitors you closely throughout the process.
              </p>
              <p>
                Nutrition counseling is a cornerstone of our program. Rather
                than restrictive diets that leave you feeling deprived, we
                focus on building practical eating habits that align with your
                metabolism, your preferences, and your daily routine. We
                discuss meal timing, macronutrient balance, hydration, and
                simple strategies that make healthy eating sustainable for the
                long term. The goal is not perfection but progress.
              </p>
              <p>
                Ongoing monitoring sets medical weight loss apart from
                anything you can do on your own. Regular check-ins allow us to
                track your progress, adjust your plan when needed, and
                address any plateaus or challenges that come up along the way.
                We look at more than just the number on the scale. We
                evaluate body composition, energy levels, lab trends, and how
                you feel overall. This data-driven approach keeps your
                program aligned with your goals every step of the way.
              </p>
              <p>
                At Outreach Wellness, we believe that weight management is a
                health issue, not a cosmetic one. Carrying excess weight can
                contribute to chronic conditions including heart disease,
                diabetes, joint pain, and hormonal imbalance. By addressing
                weight through a medical lens, we help you reduce your risk
                for these conditions while improving your quality of life. We
                welcome patients from Murfreesboro, Smyrna, La Vergne, and
                throughout the Middle Tennessee area who are ready for a
                smarter, more sustainable path to their goals.
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
            Who Is Medical Weight Loss For?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            "You have tried dieting and exercise without lasting results",
            "You suspect a metabolic or hormonal issue is affecting your weight",
            "You want medically supervised support rather than guesswork",
            "You are interested in GLP-1 medications like semaglutide",
            "You want accountability and regular progress monitoring",
            "You are looking for a sustainable plan built around your lifestyle",
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
            Take the First Step Toward Lasting Results
          </h2>
          <p className="text-gray-text mb-8 max-w-md mx-auto">
            Schedule your consultation and find out what a medically guided
            approach to weight loss can do for you.
          </p>
          <Button href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book Your Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
