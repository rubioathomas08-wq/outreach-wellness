"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function AestheticsContent() {
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
              Aesthetics
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Aesthetic Treatments in{" "}
              <span className="italic text-gold-metallic">Murfreesboro, TN</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              Skin rejuvenation and aesthetic care that enhances your natural
              beauty — administered by Casey Meeks, FNP-BC at Outreach Wellness.
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
              Treatments That Enhance Your Natural Glow
            </h2>
            <div className="space-y-4 text-gray-text text-sm leading-relaxed">
              <p>
                Glowing, healthy skin is one of the most visible signs of
                overall wellness. At Outreach Wellness in Murfreesboro, TN,
                Casey Meeks, FNP-BC offers thoughtful aesthetic treatments
                designed to enhance your natural appearance without the
                overdone look. Our focus is on subtle, long-term improvements
                that complement the wellness work you are already doing on the
                inside.
              </p>
              <p>
                Microneedling is one of the most popular treatments we offer.
                Using a precision device with fine sterile needles, we create
                controlled micro-channels in the skin that stimulate your
                body&apos;s natural collagen and elastin production. Over a
                series of treatments, microneedling can improve skin texture,
                reduce the appearance of fine lines, soften scarring including
                acne scars, and even out skin tone. It works on the face,
                neck, decolletage, and other areas where collagen support is
                wanted.
              </p>
              <p>
                Chemical peels offer another path to fresher, brighter skin.
                Using carefully selected acid blends, peels gently remove dull
                surface layers to reveal the smoother, more even-toned skin
                underneath. Different peel strengths address different
                concerns — light peels for radiance and texture, medium peels
                for more visible improvements in fine lines and pigmentation.
                Casey will recommend the right option based on your skin and
                goals.
              </p>
              <p>
                Skin rejuvenation treatments help address everyday concerns
                like dullness, uneven pigmentation, large pores, and early
                signs of aging. These treatments work with your body&apos;s
                natural renewal process, so results build over time rather
                than appearing artificial overnight. We are happy to combine
                aesthetic treatments with broader functional health care so
                your inside and outside reflect each other.
              </p>
              <p>
                Your aesthetic consultation begins with an honest conversation
                about your goals, your skin history, and your budget. Casey
                will design a realistic plan, walk you through what to expect
                in terms of downtime and results, and only recommend the
                treatments you actually need. We serve patients throughout
                Murfreesboro, Smyrna, La Vergne, and the greater Middle
                Tennessee area.
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
            Who Are Aesthetic Treatments For?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            "You want brighter, smoother, more even-toned skin",
            "You have early signs of aging you want to address gently",
            "You have acne scars, large pores, or texture concerns",
            "You prefer non-injectable treatments that work with your body",
            "You want a personalized plan, not a one-size-fits-all package",
            "You want aesthetic care delivered by a medical professional",
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
            Glow From the Inside Out
          </h2>
          <p className="text-gray-text mb-8 max-w-md mx-auto">
            Book an aesthetic consultation with Casey Meeks, FNP-BC and discuss
            what subtle, expert treatments can do for your skin.
          </p>
          <Button href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book Your Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
