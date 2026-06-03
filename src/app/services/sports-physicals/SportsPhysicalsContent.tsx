"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function SportsPhysicalsContent() {
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
              Sports Physicals
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-off-white mb-4">
              Sports Physicals in{" "}
              <span className="italic text-gold-metallic">Murfreesboro, TN</span>
            </h1>
            <p className="text-gray-text leading-relaxed max-w-xl mx-auto">
              Quick, thorough pre-participation physicals for student athletes —
              forms signed same day by Casey Meeks, FNP-BC.
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
              Get Cleared to Play — Same Day
            </h2>
            <div className="space-y-4 text-gray-text text-sm leading-relaxed">
              <p>
                A pre-participation physical exam, commonly called a sports
                physical, is required for most middle school, high school, and
                college athletes in Tennessee before each season. At Outreach
                Wellness in Murfreesboro, TN, Casey Meeks, FNP-BC offers
                thorough, efficient sports physicals designed to get your
                student-athlete cleared and on the field without delay.
              </p>
              <p>
                Our sports physicals are scheduled in short, focused
                appointments so families do not have to spend half a day in a
                waiting room. We complete the standard Tennessee Secondary
                School Athletic Association (TSSAA) forms or whatever
                paperwork your school requires, and forms are signed before
                you walk out the door.
              </p>
              <p>
                During the exam, Casey reviews your athlete&apos;s personal and
                family medical history, takes vital signs including blood
                pressure and resting heart rate, checks vision, performs a
                cardiovascular screening to listen for any abnormalities, and
                runs through a musculoskeletal assessment to identify any
                flexibility limitations or prior injuries that might need
                attention. If anything raises a flag, we discuss it with you
                directly and explain what to do next.
              </p>
              <p>
                Beyond simply clearing your athlete for sport, a thorough
                physical is an opportunity to catch issues early. Heart
                conditions, asthma, prior concussion concerns, and nutritional
                gaps that may affect performance often show up first in this
                kind of exam. Casey&apos;s functional health background means
                she looks at the whole picture, not just whether the box gets
                checked.
              </p>
              <p>
                We welcome student athletes and their families from
                Murfreesboro, Smyrna, La Vergne, Eagleville, and the
                surrounding Rutherford County area. Walk-ins are not
                guaranteed, so please call ahead to book — especially during
                peak pre-season weeks in July and August.
              </p>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper className="border-t border-dark-border">
        <div className="text-center mb-10">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            What&apos;s Included
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-off-white">
            A Full Sports Physical Covers
          </h2>
        </div>
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            "Personal and family medical history review",
            "Vital signs — blood pressure, heart rate, and more",
            "Vision screening",
            "Cardiovascular assessment",
            "Musculoskeletal exam for joint and flexibility check",
            "TSSAA or school-required form completion, signed same day",
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
            Get Your Athlete Cleared
          </h2>
          <p className="text-gray-text mb-8 max-w-md mx-auto">
            Book a sports physical with Casey Meeks, FNP-BC — fast appointments
            and same-day forms.
          </p>
          <Button href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book Sports Physical
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
