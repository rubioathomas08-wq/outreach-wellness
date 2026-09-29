"use client";

import { useEffect, useState } from "react";
import { useMoveState } from "@/lib/useMoveState";
import {
  MOVE_DATE_LABEL,
  MOVE_DATE_SHORT,
  NEW_LOCATION,
  mapsSearchUrl,
} from "@/lib/location";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";
const DISMISS_KEY = "moving-announcement-dismissed";

/**
 * Site-wide move announcement. Copy is Casey's own wording; the headline and
 * first line shift from "We're Moving" to "We've Moved" on move day. Shown
 * once per browser session until ANNOUNCEMENT_END.
 */
export default function MovingAnnouncement() {
  const { mounted, moved, showAnnouncement } = useMoveState();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!mounted || !showAnnouncement) return;
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
    } catch {
      /* storage unavailable — still show once */
    }
    const timer = setTimeout(() => setIsVisible(true), 1200);
    return () => clearTimeout(timer);
  }, [mounted, showAnnouncement]);

  const handleClose = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "true");
    } catch {
      /* ignore */
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="moving-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-md bg-dark-bg border border-gold/40 rounded-sm shadow-2xl animate-fade-in">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-off-white/60 hover:text-off-white transition-colors z-10"
          aria-label="Close announcement"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

        <div className="px-6 py-8 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-medium tracking-[0.2em] uppercase bg-gold/10 border border-gold/30 text-gold rounded-full">
            {moved ? "New Location" : `Beginning ${MOVE_DATE_SHORT}`}
          </span>

          <h2
            id="moving-title"
            className="font-display text-3xl md:text-4xl text-gold-metallic mb-3"
          >
            {moved ? "We’ve Moved!" : "We’re Moving!"} 📍
          </h2>

          <p className="text-off-white/80 text-sm leading-relaxed mb-6">
            {moved
              ? `Outreach Wellness is excited to welcome you to our new location, open since ${MOVE_DATE_LABEL}.`
              : `Outreach Wellness is excited to welcome you to our new location beginning ${MOVE_DATE_LABEL}.`}
          </p>

          <div className="bg-white/5 border border-gold/20 rounded-sm px-4 py-4 mb-6">
            <p className="text-gold text-[10px] tracking-[0.25em] uppercase mb-2">
              New Location
            </p>
            <p className="font-display text-xl text-off-white leading-snug">
              {NEW_LOCATION.street}
            </p>
            <p className="text-gray-text text-sm">
              {NEW_LOCATION.city}, {NEW_LOCATION.state} {NEW_LOCATION.zip}
            </p>
          </div>

          <p className="text-off-white/70 text-sm leading-relaxed mb-4">
            {moved
              ? "Please use our new address for all appointments."
              : `Please use our new address for all appointments scheduled on or after ${MOVE_DATE_SHORT}.`}
          </p>

          <p className="font-display italic text-gold text-base leading-relaxed mb-6">
            Same personalized care. New space. More opportunities to help you
            look, feel, and live your best.
          </p>

          <div className="flex flex-col gap-3">
            <a
              href={mapsSearchUrl(NEW_LOCATION)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-7 py-3 rounded-sm text-sm font-medium tracking-wider uppercase bg-gold-metallic text-dark-bg transition-all duration-300"
            >
              Get Directions
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-7 py-3 rounded-sm text-sm font-medium tracking-wider uppercase border border-gold text-gold hover:bg-gold-metallic hover:text-dark-bg hover:border-transparent transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>

          <p className="text-off-white/50 text-xs mt-5">
            We look forward to seeing you at our new location!
          </p>
        </div>
      </div>
    </div>
  );
}
