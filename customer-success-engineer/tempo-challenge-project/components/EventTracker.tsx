"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

export default function EventTracker() {
  useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const el = target?.closest<HTMLElement>("[data-event]");
      if (!el) return;
      track(el.dataset.event as string, { type: e.type });
    };

    document.addEventListener("click", handler);
    document.addEventListener("submit", handler);
    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("submit", handler);
    };
  }, []);

  return null;
}
