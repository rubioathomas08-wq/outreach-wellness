"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function HormoneReplacementContent() {
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
              Hormone Replacement Therapy
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Hormone Replacement Therapy in{" "}
              <span className="italic text-gold">Murfreesboro, TN</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              Restore hormonal balance and reclaim your vitality with
              bioidentical hormone therapy from Casey Meeks, FNP-BC.
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
              Understanding Hormonal Imbalance and BHRT
            </h2>
            <div className="space-y-4 text-gray-text text-sm leading-relaxed">
              <p>
                Hormones regulate nearly every function in your body, from
                your energy levels and mood to your metabolism, sleep quality,
                and libido. When those hormones fall out of balance, whether
                due to aging, stress, medical conditions, or lifestyle
                factors, the effects can be widespread and debilitating. At
                Outreach Wellness in Murfreesboro, TN, Casey Meeks, FNP-BC
                offers bioidentical hormone replacement therapy (BHRT) for
                both men and women who are experiencing the symptoms of
                hormonal decline or imbalance.
              </p>
              <p>
                Bioidentical hormones are derived from plant sources and are
                structurally identical to the hormones your body produces
                naturally. This makes them a preferred option for many
                patients because they are designed to work with your body
                rather than introducing synthetic compounds. BHRT can be used
                to address deficiencies in testosterone, estrogen,
                progesterone, and thyroid hormones, depending on what your lab
                work reveals.
              </p>
              <p>
                For women, hormonal shifts often become most noticeable during
                perimenopause and menopause, though imbalances can occur at
                any age. Symptoms may include hot flashes, night sweats, mood
                swings, weight gain around the midsection, thinning hair,
                difficulty sleeping, low libido, and persistent fatigue.
                Estrogen and progesterone therapy can help alleviate these
                symptoms and support bone density, cardiovascular health, and
                cognitive function as you age.
              </p>
              <p>
                For men, testosterone levels naturally begin to decline after
                the age of thirty, and that decline can accelerate due to
                stress, poor sleep, and other factors. Low testosterone can
                present as reduced energy, decreased muscle mass, increased
                body fat, difficulty concentrating, irritability, and a drop
                in motivation or sex drive. Testosterone replacement therapy
                can help restore these levels to an optimal range, improving
                how you feel and function on a daily basis.
              </p>
              <p>
                Thyroid dysfunction is another common hormonal issue that we
                evaluate and treat. An underactive thyroid can cause fatigue,
                weight gain, cold sensitivity, dry skin, and brain fog. Many
                patients have been told their thyroid levels are normal based
                on standard screening, but a comprehensive thyroid panel often
                tells a more complete story. We run detailed labs that include
                TSH, free T3, free T4, reverse T3, and thyroid antibodies to
                get the full picture of your thyroid health.
              </p>
              <p>
                Your hormone replacement journey at Outreach Wellness begins
                with a thorough consultation and comprehensive lab work. Once
                we have your results, Casey will walk you through each marker,
                explain how it connects to your symptoms, and discuss treatment
                options in detail. If BHRT is appropriate for you, we develop
                a personalized protocol and schedule regular follow-up labs
                to monitor your levels and make adjustments as needed. This
                ongoing monitoring is essential for ensuring your therapy
                remains safe and effective over time.
              </p>
              <p>
                Hormone replacement is not about chasing a number on a lab
                report. It is about helping you feel like yourself again. We
                serve patients throughout Murfreesboro, Smyrna, La Vergne,
                and the broader Middle Tennessee region who are ready to
                address the root cause of their symptoms and restore their
                quality of life.
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
            Who Is Hormone Replacement Therapy For?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            "You experience persistent fatigue, brain fog, or mood changes",
            "You are going through perimenopause, menopause, or andropause",
            "You have low libido or difficulty with sexual health",
            "You have unexplained weight gain or difficulty losing weight",
            "You suspect a thyroid issue despite being told your labs are normal",
            "You want a data-driven approach with ongoing lab monitoring",
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
            Restore Your Balance
          </h2>
          <p className="text-gray-text mb-8 max-w-md mx-auto">
            Book your hormone consultation and take the first step toward
            feeling like yourself again.
          </p>
          <Button href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book Your Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
