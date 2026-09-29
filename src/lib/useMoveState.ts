"use client";

import { useEffect, useState } from "react";
import {
  NEW_LOCATION,
  OLD_LOCATION,
  announcementActive,
  hasMoved,
} from "./location";

/**
 * Client-side move state. Starts from the pre-move defaults so server HTML
 * and first client render match (no hydration mismatch), then resolves the
 * real date after mount. Pages are statically built, so this is what lets
 * the address flip on move day without a redeploy.
 */
export function useMoveState() {
  const [state, setState] = useState({
    mounted: false,
    moved: false,
    showAnnouncement: true,
  });

  useEffect(() => {
    const now = new Date();
    setState({
      mounted: true,
      moved: hasMoved(now),
      showAnnouncement: announcementActive(now),
    });
  }, []);

  return {
    ...state,
    location: state.moved ? NEW_LOCATION : OLD_LOCATION,
  };
}
