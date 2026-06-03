"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function PeptideTherapyContent() {
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
              Peptide Therapy
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Peptide Therapy in{" "}
              <span className="italic text-gold-metallic">Murfreesboro, TN</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              Cellular-level support for healing, recovery, weight management,
              and longevity — guided by Casey Meeks, FNP-BC at Outreach Wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Content — LIGHT band */}
      <div className="bg-light-bg text-light-text">
      <SectionWrapper>
        <div className="bg-dark-card border border-dark-border rounded-sm p-8 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-xl md:text-2xl text-off-white mb-6">
              What Peptide Therapy Can Do for You
            </h2>
            <div className="space-y-4 text-gray-text text-sm leading-relaxed">
              <p>
                Peptides are short chains of amino acids that act as signaling
                molecules in your body. They tell cells what to do — when to
                heal, when to repair, when to release growth hormone, and how
                to regulate everything from inflammation to metabolism. At
                Outreach Wellness in Murfreesboro, TN, Casey Meeks, FNP-BC uses
                targeted peptide protocols to support specific health goals
                with precision rather than guesswork.
              </p>
              <p>
                Unlike many supplements that take a broad approach, peptide
                therapy is highly targeted. Different peptides do different
                things. Some support tissue repair and joint recovery. Others
                help regulate appetite, improve sleep quality, enhance immune
                function, or stimulate your body&apos;s natural growth hormone
                production. The right peptide protocol depends entirely on
                what you are trying to achieve.
              </p>
              <p>
                Your peptide therapy journey begins with a comprehensive
                consultation and lab work to understand your current health
                baseline. Based on your goals — whether that is faster recovery
                from training, better sleep, improved skin and hair quality,
                weight management support, or simply feeling more energetic and
                resilient — Casey selects a peptide protocol that is right for
                you. Most peptides are administered as small subcutaneous
                injections that you can do at home after a quick teaching
                session.
              </p>
              <p>
                Common peptides used in functional health practices include
                growth hormone secretagogues like CJC-1295 and ipamorelin for
                anti-aging and recovery, BPC-157 and TB-500 for healing and
                joint support, and others targeted at specific concerns. Every
                protocol is personalized, and we monitor your progress with
                follow-up labs to make sure the therapy is working safely and
                effectively for you.
              </p>
              <p>
                Peptide therapy is not a magic bullet. It works best as part of
                a broader wellness approach that includes good nutrition,
                appropriate exercise, and quality sleep. But for the right
                patient with the right protocol, peptides can provide
                noticeable improvements in how you feel, recover, and age.
                Casey serves patients throughout Murfreesboro, Smyrna, La
                Vergne, and the surrounding Middle Tennessee area.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Who Is This For — LIGHT band (continues) */}
      <SectionWrapper className="border-t border-light-border">
        <div className="text-center mb-10">
          <p className="text-gold-dark text-xs tracking-[0.3em] uppercase mb-3">
            Is This Right for You?
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-light-text">
            Who Is Peptide Therapy For?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            "You want targeted support for recovery from injury or training",
            "You are interested in anti-aging and longevity protocols",
            "You struggle with sleep quality or restoration",
            "You want to optimize natural growth hormone production",
            "You need support for joint, tendon, or soft tissue healing",
            "You want a personalized, lab-guided approach to wellness",
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
      </div>

      {/* CTA — DARK */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="font-display text-2xl md:text-3xl text-off-white mb-4">
            Discover What Peptides Can Do for You
          </h2>
          <p className="text-gray-text mb-8 max-w-md mx-auto">
            Book a consultation with Casey Meeks, FNP-BC and find out whether
            peptide therapy fits your goals.
          </p>
          <Button href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book Your Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
