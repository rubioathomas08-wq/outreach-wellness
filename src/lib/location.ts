/**
 * Single source of truth for the practice address and the October 2026 move.
 *
 * Visible UI (footer, contact page, banner, popup) is date-aware via
 * useMoveState(): the old address shows until MOVE_DATE, then the new one —
 * no redeploy needed on move day. Structured data (JSON-LD) is static and
 * already carries the new address; Google recrawls on its own cadence.
 *
 * Display text for the new street is exactly as Casey supplied it.
 */

export type PracticeLocation = {
  street: string;
  city: string;
  state: string;
  zip: string;
};

export const OLD_LOCATION: PracticeLocation = {
  street: "321 W. McKnight Dr, Suite C",
  city: "Murfreesboro",
  state: "TN",
  zip: "37129",
};

export const NEW_LOCATION: PracticeLocation = {
  street: "2348 New Salem",
  city: "Murfreesboro",
  state: "TN",
  zip: "37128",
};

/** First day at the new location (Central time). */
export const MOVE_DATE = new Date("2026-10-12T00:00:00-05:00");
export const MOVE_DATE_LABEL = "October 12, 2026";
export const MOVE_DATE_SHORT = "October 12";

/** Stop showing the move announcement after this (≈7 weeks post-move). */
export const ANNOUNCEMENT_END = new Date("2026-12-01T00:00:00-06:00");

const MAPS_EMBED_KEY = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

export function hasMoved(now: Date = new Date()): boolean {
  return now >= MOVE_DATE;
}

export function announcementActive(now: Date = new Date()): boolean {
  return now < ANNOUNCEMENT_END;
}

export function currentLocation(now: Date = new Date()): PracticeLocation {
  return hasMoved(now) ? NEW_LOCATION : OLD_LOCATION;
}

export function formatAddress(loc: PracticeLocation): string {
  return `${loc.street}, ${loc.city}, ${loc.state} ${loc.zip}`;
}

export function mapsSearchUrl(loc: PracticeLocation): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    formatAddress(loc)
  )}`;
}

export function mapsEmbedUrl(loc: PracticeLocation): string {
  return `https://www.google.com/maps/embed/v1/place?key=${MAPS_EMBED_KEY}&q=${encodeURIComponent(
    formatAddress(loc)
  )}&zoom=15`;
}
