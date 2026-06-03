"use client";

/**
 * Infinite horizontal scroll of service names — fills "moving letters" brief
 * without feeling like a noisy banner ad. The track contains TWO copies of the
 * list back-to-back; the keyframe shifts it by exactly -50%, creating a seamless
 * loop. Pauses on hover so readers can pin a name to click through.
 */

import Link from "next/link";

const items = [
  { label: "Hormone Replacement", href: "/services/hormone-replacement" },
  { label: "Peptide Therapy", href: "/services/peptide-therapy" },
  { label: "Weight Loss", href: "/services/weight-loss" },
  { label: "IV Therapy & Injectables", href: "/services/iv-therapy" },
  { label: "Aesthetics", href: "/services/aesthetics" },
  { label: "Sports Physicals", href: "/services/sports-physicals" },
];

export default function ServiceMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-dark-border bg-dark-card/40 py-6"
      role="region"
      aria-label="Wellness services"
    >
      {/* Edge fade so names dissolve into the bg instead of getting clipped */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-dark-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-dark-bg to-transparent" />

      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="group mx-8 flex items-center gap-8 font-display italic text-xl md:text-2xl text-gold-metallic transition-opacity hover:opacity-80"
          >
            <span>{item.label}</span>
            <span
              aria-hidden="true"
              className="text-gold/40 not-italic text-base"
            >
              ✦
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
