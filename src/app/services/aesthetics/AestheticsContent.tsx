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
              Neurotoxin Injections in{" "}
              <span className="italic text-gold-metallic">Murfreesboro, TN</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              Smooth, natural-looking wrinkle relaxers — administered by Casey
              Meeks, FNP-BC at Outreach Wellness.
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
              A Refreshed, Natural Look — Without the Overdone Vibe
            </h2>
            <div className="space-y-4 text-gray-text text-sm leading-relaxed">
              <p>
                Wrinkle-relaxing neurotoxin injections are one of the most
                popular and well-studied aesthetic treatments available. At
                Outreach Wellness in Murfreesboro, TN, Casey Meeks, FNP-BC
                offers neurotoxin treatments with a medical eye for safety,
                anatomy, and subtle, natural-looking results. The goal is
                always you, just a little more rested and refreshed.
              </p>
              <p>
                Neurotoxin injections work by temporarily relaxing the small
                muscles that cause dynamic wrinkles — the lines that form from
                repeated facial expressions like frowning, squinting, and
                raising your eyebrows. Common treatment areas include forehead
                lines, crow&apos;s feet around the eyes, and the lines between
                the brows often called frown lines or eleven lines. Many
                patients also choose to soften lip and chin lines, treat a
                gummy smile, or address jaw tension with a masseter treatment.
              </p>
              <p>
                Results typically begin to appear within three to five days,
                with full effect around two weeks. Most patients enjoy their
                results for three to four months before scheduling a touch up.
                The procedure itself takes only a few minutes, and there is no
                significant downtime. You can usually get back to your day
                right after your appointment, with the only common after-
                effects being mild redness or small pinpoint marks at the
                injection sites that fade quickly.
              </p>
              <p>
                Your appointment begins with a consultation. Casey will assess
                your facial anatomy, talk through your goals, and walk you
                through exactly what to expect — including dosing, areas
                treated, results timeline, and any rare side effects to be
                aware of. We dose conservatively and customize every treatment.
                If you have never tried neurotoxin before, we would rather
                start light and add than over-treat.
              </p>
              <p>
                What sets neurotoxin care at Outreach Wellness apart is the
                medical foundation behind every injection. Casey is not just
                an injector — as a board-certified family nurse practitioner,
                she brings a deep understanding of facial anatomy, muscle
                function, and overall skin health to every appointment. We
                welcome patients from Murfreesboro, Smyrna, La Vergne, and the
                greater Middle Tennessee area.
              </p>
              <p className="text-gray-text/70 text-xs italic pt-2">
                At this time, Outreach Wellness Aesthetics focuses exclusively
                on neurotoxin injections. We are not currently offering dermal
                fillers, microneedling, or other skin treatments.
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
            Who Is Neurotoxin For?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            "You want to soften forehead lines, crow's feet, or frown lines",
            "You are starting to notice expression lines you didn't have before",
            "You want subtle, natural results — not a frozen look",
            "You are curious about masseter treatment for jaw clenching",
            "You want a quick treatment with virtually no downtime",
            "You want injectables administered by a medical professional",
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
            Subtle, Expert-Administered Treatments
          </h2>
          <p className="text-gray-text mb-8 max-w-md mx-auto">
            Book a neurotoxin consultation with Casey Meeks, FNP-BC and discuss
            what natural-looking results could do for you.
          </p>
          <Button href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book Your Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
