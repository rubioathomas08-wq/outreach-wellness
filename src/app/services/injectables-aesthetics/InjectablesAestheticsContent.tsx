"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function InjectablesAestheticsContent() {
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
              Injectables & Aesthetics
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Injectables & Aesthetics in{" "}
              <span className="italic text-gold">Murfreesboro, TN</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              Subtle, natural-looking aesthetic treatments administered by Casey
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
              Treatments That Enhance Your Natural Beauty
            </h2>
            <div className="space-y-4 text-gray-text text-sm leading-relaxed">
              <p>
                Looking your best should feel like an extension of who you
                already are, not a dramatic transformation. At Outreach
                Wellness in Murfreesboro, TN, Casey Meeks, FNP-BC brings a
                medical perspective to aesthetic treatments, combining clinical
                expertise with an eye for natural results. Whether you want to
                soften fine lines, restore lost volume, or refresh your
                overall appearance, our injectable and aesthetic services are
                designed to help you look as good as you feel.
              </p>
              <p>
                Botox is one of the most popular and well-studied cosmetic
                treatments available. It works by temporarily relaxing the
                muscles that cause dynamic wrinkles, the lines that form from
                repeated facial expressions like frowning, squinting, and
                raising your eyebrows. Common treatment areas include forehead
                lines, crow&apos;s feet around the eyes, and the lines
                between the brows often called frown lines or eleven lines.
                Results typically appear within a few days and last three to
                four months. The procedure itself takes only minutes, and
                there is no downtime required.
              </p>
              <p>
                Dermal fillers address a different concern. As we age, we
                naturally lose volume in areas like the cheeks, lips, jawline,
                and under-eye hollows. Fillers use hyaluronic acid, a
                substance that occurs naturally in your skin, to restore that
                lost volume and smooth deeper lines and folds. Lip enhancement
                is one of our most requested filler treatments, and Casey
                takes a conservative approach to ensure results look full and
                balanced rather than overdone. Filler results are visible
                immediately and can last anywhere from six months to over a
                year depending on the product used and the treatment area.
              </p>
              <p>
                Skin rejuvenation treatments help improve your skin&apos;s
                overall tone, texture, and radiance. These treatments can
                address concerns such as dullness, uneven skin tone, fine
                surface lines, and early signs of aging. By stimulating your
                skin&apos;s natural renewal process, rejuvenation treatments
                create improvements that build over time and complement your
                injectable results.
              </p>
              <p>
                Your aesthetic consultation begins with an open conversation
                about your goals. Casey will assess your facial anatomy,
                discuss what treatments are appropriate, and explain exactly
                what you can expect in terms of results, timeline, and any
                temporary side effects. Common side effects from injectables
                are mild and short-lived, typically limited to minor swelling,
                redness, or bruising at the injection site that resolves
                within a day or two. Most patients return to their normal
                routine immediately after treatment.
              </p>
              <p>
                What sets aesthetic care at Outreach Wellness apart is the
                medical foundation behind every treatment. Casey is not just
                an injector. As a board-certified family nurse practitioner,
                she understands facial anatomy, skin health, and the way
                internal wellness connects to your outward appearance. This
                clinical expertise means safer treatments and more refined
                results. We welcome patients from Murfreesboro, Smyrna, La
                Vergne, and the greater Middle Tennessee area who want
                thoughtful, expert aesthetic care.
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
            Who Are Injectables & Aesthetics For?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            "You want to soften forehead lines, crow's feet, or frown lines",
            "You have lost facial volume in your cheeks, lips, or jawline",
            "You want lip enhancement with natural, balanced results",
            "You are looking for a refreshed appearance without surgery",
            "You want treatments administered by a medical professional",
            "You prefer subtle improvements over dramatic changes",
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
            Look and Feel Your Best
          </h2>
          <p className="text-gray-text mb-8 max-w-md mx-auto">
            Book your aesthetic consultation and discover what subtle,
            expert-administered treatments can do for your confidence.
          </p>
          <Button href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book Your Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
