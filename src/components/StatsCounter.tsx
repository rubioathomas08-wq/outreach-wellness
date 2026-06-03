"use client";

/**
 * Animated stats — numbers count up from 0 once the section enters the
 * viewport. Hits the "moving numbers" brief without making any claim Casey
 * hasn't given me data for (years experience + service count are factual;
 * "1-on-1" / "100%" are values/promises).
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  /** Format the displayed number — defaults to integer. */
  format?: (n: number) => string;
};

const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years of Experience" },
  { value: 6, label: "Wellness Services" },
  { value: 60, suffix: " min", label: "Initial Consultation" },
  { value: 100, suffix: "%", label: "Personalized Care" },
];

function CountUp({
  value,
  prefix = "",
  suffix = "",
  start,
  format,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  start: boolean;
  format?: (n: number) => string;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1200;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  const formatted = format ? format(display) : Math.round(display).toString();
  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="border-y border-dark-border bg-dark-card/30"
      aria-label="Practice highlights"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="font-display text-4xl md:text-5xl text-gold-metallic tabular-nums leading-none mb-3">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  start={inView}
                  format={stat.format}
                />
              </p>
              <p className="text-gray-text text-xs md:text-sm tracking-[0.18em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
