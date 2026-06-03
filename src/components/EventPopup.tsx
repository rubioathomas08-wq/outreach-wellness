"use client";

import { useState, useEffect } from "react";

const EVENT_DATE = new Date("2026-04-04T23:59:59");
const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function EventPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Don't show if the event has passed
    if (new Date() > EVENT_DATE) return;

    // Don't show if user already dismissed it this session
    const dismissed = sessionStorage.getItem("event-popup-dismissed");
    if (dismissed) return;

    // Show after a short delay so page loads first
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("event-popup-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Spring Refresh Event"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-dark-bg border border-gold/40 rounded-sm shadow-2xl animate-fade-in">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-off-white/60 hover:text-off-white transition-colors z-10"
          aria-label="Close event popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Gold top accent line */}
        <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

        <div className="px-6 py-8 text-center">
          {/* Event badge */}
          <span className="inline-block px-4 py-1 mb-4 text-xs font-medium tracking-[0.2em] uppercase bg-gold/10 border border-gold/30 text-gold rounded-full">
            Limited-Time Event
          </span>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl text-gold mb-2">
            Spring Refresh Event
          </h2>

          <p className="text-off-white/70 text-sm mb-6">
            Elevate your wellness this season with exclusive treatments
          </p>

          {/* Date & Time */}
          <div className="bg-white/5 border border-gold/20 rounded-sm px-4 py-3 mb-6">
            <p className="font-display text-lg text-off-white">
              Saturday, April 4th
            </p>
            <p className="text-gold text-sm tracking-wider">
              10:00 AM &ndash; 2:00 PM &bull; In-Clinic
            </p>
          </div>

          {/* Specials */}
          <div className="mb-6 space-y-3">
            <div>
              <p className="text-gold font-medium text-sm tracking-wider uppercase mb-1">
                20% OFF Injectables
              </p>
              <p className="text-off-white/70 text-sm">
                MICC (Fat Burner) &bull; Lipo Lean &bull; Vitamin B12 Boost
              </p>
            </div>
            <div className="w-12 h-px bg-gold/30 mx-auto" />
            <div>
              <p className="text-gold font-medium text-sm tracking-wider uppercase mb-1">
                IV Therapy Available
              </p>
              <p className="text-off-white/70 text-sm">
                Rehydrate, detox &amp; recharge with customized blends
              </p>
            </div>
          </div>

          {/* CTA */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-7 py-3 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-300 bg-gold text-dark-bg hover:bg-gold-light mb-3"
          >
            Book Your Spot
          </a>

          <p className="text-off-white/40 text-xs">
            Limited spots available &bull; 321 W. McKnight Dr, Suite C,
            Murfreesboro
          </p>
        </div>
      </div>
    </div>
  );
}
