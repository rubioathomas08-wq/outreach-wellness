"use client";

/**
 * Floating Book Now button — fixed bottom-right, fades in once the user has
 * scrolled past the hero. Gives an always-available booking CTA without
 * crowding the initial fold. Subtle gold pulse to draw the eye without
 * shouting.
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function FloatingBookButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book an appointment"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.92 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40
                     flex items-center gap-2 bg-gold-metallic text-dark-bg
                     px-5 py-3 sm:px-6 sm:py-3.5 rounded-full
                     text-xs sm:text-sm font-medium tracking-wider uppercase
                     animate-gold-pulse"
        >
          <svg
            className="w-4 h-4 sm:w-[18px] sm:h-[18px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <span>Book Now</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
