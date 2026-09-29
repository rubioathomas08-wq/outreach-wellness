"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useMoveState } from "@/lib/useMoveState";
import { MOVE_DATE_SHORT, NEW_LOCATION } from "@/lib/location";

const DISMISS_KEY = "moving-banner-dismissed";

/**
 * Slim persistent notice pinned just below the fixed navbar, so the move is
 * visible on every page even after the popup is dismissed. Sits in the
 * 80–120px band that page hero padding (pt-32) already leaves clear.
 */
export default function MovingBanner() {
  const { mounted, moved, showAnnouncement } = useMoveState();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (!mounted) return;
    try {
      setDismissed(!!sessionStorage.getItem(DISMISS_KEY));
    } catch {
      setDismissed(false);
    }
  }, [mounted]);

  if (!mounted || !showAnnouncement || dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "true");
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      className="fixed top-20 left-0 right-0 z-40 bg-dark-card/95 backdrop-blur-md border-b border-gold/30"
      role="status"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-20 h-10 flex items-center justify-center gap-3 text-xs sm:text-sm">
        <span aria-hidden="true">📍</span>
        <p className="text-off-white truncate">
          <span className="text-gold font-medium">
            {moved ? "We’ve moved!" : `We’re moving ${MOVE_DATE_SHORT}!`}
          </span>{" "}
          <span className="hidden sm:inline">
            {moved ? "Find us at" : "New location:"} {NEW_LOCATION.street},{" "}
            {NEW_LOCATION.city}
          </span>
          <span className="sm:hidden">{NEW_LOCATION.street}</span>
        </p>
        <Link
          href="/contact#location"
          className="text-gold underline underline-offset-4 decoration-gold/40 hover:decoration-gold whitespace-nowrap"
        >
          Details
        </Link>
        <button
          onClick={handleDismiss}
          className="ml-1 text-off-white/50 hover:text-off-white transition-colors"
          aria-label="Dismiss moving notice"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
