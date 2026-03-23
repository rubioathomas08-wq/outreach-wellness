"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

const services = [
  {
    title: "Functional Health",
    description:
      "Get to the root cause of your health concerns with personalized functional medicine assessments and treatment plans.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "IV Therapy",
    description:
      "Replenish your body with custom IV infusions designed to boost energy, immunity, and overall wellness.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Weight Loss",
    description:
      "Achieve lasting results with medically supervised weight management programs tailored to your body and goals.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "Hormone Replacement",
    description:
      "Restore balance and vitality with bioidentical hormone replacement therapy customized to your needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Book Your Consultation",
    description:
      "Schedule your initial visit online or by phone. We'll discuss your health goals and concerns.",
  },
  {
    number: "02",
    title: "Personalized Assessment",
    description:
      "Casey will conduct a comprehensive evaluation to understand your unique health needs.",
  },
  {
    number: "03",
    title: "Your Custom Plan",
    description:
      "Receive a personalized treatment plan focused on prevention, nutrition, and long-term wellness.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-bg to-dark-bg">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
        </div>

        {/* Decorative gold ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-gold/10 opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-gold/5 opacity-20" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6">
              Murfreesboro, Tennessee
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-off-white leading-tight mb-6">
              Wellness{" "}
              <span className="italic text-gold">Redefined</span>
            </h1>
            <p className="text-gray-text text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              A boutique wellness practice focused on prevention, nutrition, and
              education. Personalized care from Casey Meeks, FNP-BC — with over
              20 years of experience helping you feel your best.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Appointment
              </Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-bg to-transparent" />
      </section>

      {/* Services Overview */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            What We Offer
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-off-white">
            Comprehensive Wellness Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-dark-card border border-dark-border rounded-sm p-8 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="text-gold mb-4 group-hover:text-gold-light transition-colors">
                {service.icon}
              </div>
              <h3 className="font-display text-lg text-off-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/services" variant="secondary">
            See All Services
          </Button>
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper className="border-t border-dark-border">
        <div className="text-center mb-12">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">
            How It Works
          </p>
          <h2 className="font-display text-2xl md:text-4xl text-off-white">
            Your Path to Better Health
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <span className="font-display text-5xl text-gold/20 block mb-4">
                {step.number}
              </span>
              <h3 className="font-display text-lg text-off-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-text text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper>
        <div className="bg-dark-card border border-dark-border rounded-sm p-10 md:p-16 text-center">
          <h2 className="font-display text-2xl md:text-4xl text-off-white mb-4">
            Ready to Take Control of{" "}
            <span className="italic text-gold">Your Health</span>?
          </h2>
          <p className="text-gray-text max-w-xl mx-auto mb-8 leading-relaxed">
            Schedule your consultation today and discover a personalized
            approach to wellness that puts prevention first.
          </p>
          <Button
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Consultation
          </Button>
        </div>
      </SectionWrapper>
    </>
  );
}
