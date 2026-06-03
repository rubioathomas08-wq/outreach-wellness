"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function IVTherapyContent() {
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
              IV Therapy & Injectables
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              IV Therapy & Injectables in{" "}
              <span className="italic text-gold-metallic">Murfreesboro, TN</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              Full IV infusions for hydration and recovery, plus quick-shot
              injectables like B12 and lipotropic boosts — delivered with
              clinical precision at Outreach Wellness.
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
              IV Drips and Injectable Boosts — How They Work
            </h2>
            <div className="space-y-4 text-gray-text text-sm leading-relaxed">
              <p>
                Intravenous (IV) therapy delivers vitamins, minerals,
                antioxidants, and fluids directly into your bloodstream,
                bypassing the digestive system entirely. This means your body
                absorbs close to one hundred percent of the nutrients
                immediately, compared to the significantly lower absorption
                rate you get from oral supplements. At Outreach Wellness in
                Murfreesboro, TN, Casey Meeks, FNP-BC oversees every infusion
                to ensure your treatment is safe, comfortable, and tailored to
                your specific needs.
              </p>
              <p>
                IV therapy has become one of the most sought-after wellness
                treatments because of its versatility. Whether you are
                battling seasonal illness, recovering from a strenuous
                workout, dealing with chronic dehydration, or simply looking
                for a way to boost your energy and mental clarity, there is an
                IV formulation designed for you. Our infusions can include
                combinations of B vitamins, vitamin C, magnesium, zinc,
                glutathione, and amino acids, among other nutrients.
              </p>
              <p>
                A typical IV therapy session at our Murfreesboro office takes
                between thirty and sixty minutes. You will relax in a
                comfortable chair while the IV delivers your customized blend.
                Many patients describe feeling a noticeable improvement in
                energy, hydration, and overall well-being within hours of
                their session. There is no significant downtime, and most
                people return to their normal activities right away.
              </p>
              <p>
                Our immune boosting drips are popular during cold and flu
                season, providing a concentrated dose of vitamin C and zinc to
                help your body fight off illness or recover faster when you
                are already sick. Energy drips combine B-complex vitamins with
                amino acids to combat fatigue, brain fog, and the sluggish
                feeling that comes from nutrient depletion. Hydration therapy
                is ideal for post-illness recovery, hangover relief, or
                anyone who struggles to stay adequately hydrated throughout
                the day.
              </p>
              <p>
                Athletes and active individuals in the Murfreesboro area also
                benefit from our recovery infusions, which are formulated to
                reduce inflammation, replenish electrolytes, and support
                muscle repair after intense training or competition. Migraine
                sufferers have found relief through targeted IV blends that
                include magnesium and other calming nutrients known to reduce
                the frequency and severity of headaches.
              </p>
              <p>
                Alongside full IV infusions, we also offer quick-shot
                injectables for patients who want focused benefits without
                committing to a longer session. Vitamin B12 boosts support
                energy and metabolism in just a few minutes. Lipotropic
                injections, including MICC (methionine, inositol, choline, and
                B12), are popular adjuncts to a medically supervised weight
                loss plan because they help the body process and mobilize fat.
                Immune-focused shots can give you a fast boost during cold and
                flu season or before travel. Casey will recommend the right
                option based on your goals and ongoing care plan.
              </p>
              <p>
                Before your first session, Casey will review your health
                history and goals to recommend the right infusion or injection
                for you. Whether you choose a single session or schedule
                regular treatments as part of a maintenance plan, IV therapy
                and injectables at Outreach Wellness are a convenient and
                effective way to support your health from the inside out. We
                serve patients throughout Murfreesboro, Smyrna, La Vergne, and
                the surrounding Middle Tennessee communities.
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
            Who Are IV Therapy & Injectables For?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            "You feel chronically fatigued or run-down despite adequate sleep",
            "You want a B12 or lipotropic boost to support weight loss efforts",
            "You are recovering from illness and want to bounce back faster",
            "You are an athlete looking for quicker recovery after training",
            "You want a pre-event energy and hydration boost",
            "You struggle with dehydration or poor nutrient absorption",
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
            Recharge Your Body Today
          </h2>
          <p className="text-gray-text mb-8 max-w-md mx-auto">
            Book an IV therapy session and feel the difference that direct
            nutrient delivery can make.
          </p>
          <Button href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book Your IV Session
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
