"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "gclid";

/**
 * Reads the `gclid` click identifier from the URL and persists it in
 * sessionStorage so it survives navigation between pages. Returns the raw
 * VALUE only (never the word "gclid").
 */
export function useGclid(): string {
  const [gclid, setGclid] = useState("");

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const fromUrl = params.get("gclid");

      if (fromUrl) {
        sessionStorage.setItem(STORAGE_KEY, fromUrl);
        setGclid(fromUrl);
        return;
      }

      const stored = sessionStorage.getItem(STORAGE_KEY);
      if (stored) setGclid(stored);
    } catch {
      // window/sessionStorage unavailable - ignore
    }
  }, []);

  return gclid;
}

/**
 * Appends ONLY the gclid value to a partner URL. The partner template already
 * ends with the trailing parameter key + `=` (e.g. `...&tpdeh=`), so we append
 * the bare value to complete it.
 */
export function appendGclid(partnerUrl: string, gclid: string): string {
  if (!gclid) return partnerUrl;
  return `${partnerUrl}${gclid}`;
}
