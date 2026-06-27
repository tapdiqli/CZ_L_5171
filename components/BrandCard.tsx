"use client";

import { useEffect, useState } from "react";
import type { Partner } from "@/lib/types";
import { BrandLogo } from "./BrandLogo";
import { StarRating } from "./StarRating";
import { useGclid, appendGclid } from "@/lib/useGclid";

interface BrandCardProps {
  partner: Partner;
  rating: number;
  stars: number;
  rank: number;
  rankLabel: string;
  variant: "desktop" | "mobile";
}

function RankBadge({ rank, label }: { rank: number; label: string }) {
  const top = rank <= 3;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-[11px] font-bold ${
        top
          ? "bg-gradient-to-r from-gold to-gold-soft text-bg"
          : "border border-border bg-surface-2 text-muted"
      }`}
    >
      {top && (
        <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
          <path d="M5 16L3 5l5.5 4L12 4l3.5 5L21 5l-2 11H5zm0 2h14v2H5v-2z" />
        </svg>
      )}
      {label}
    </span>
  );
}

function CtaButton({ full = false }: { full?: boolean }) {
  return (
    <span
      className={`inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-gold to-gold-soft px-5 py-2.5 text-sm font-bold text-bg shadow-[0_8px_24px_-8px_rgba(242,132,91,0.75)] transition-transform group-hover:scale-[1.02] ${
        full ? "w-full" : ""
      }`}
    >
      Aceder ao Casino
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M13 5l7 7-7 7-1.4-1.4 4.6-4.6H4v-2h12.2l-4.6-4.6L13 5z" />
      </svg>
    </span>
  );
}

export function BrandCard({
  partner,
  rating,
  stars,
  rank,
  rankLabel,
  variant,
}: BrandCardProps) {
  const gclid = useGclid();
  const [linkUrl, setLinkUrl] = useState(partner.partnerUrl);

  useEffect(() => {
    setLinkUrl(appendGclid(partner.partnerUrl, gclid));
  }, [gclid, partner.partnerUrl]);

  const commonAnchorProps = {
    href: linkUrl,
    target: "_blank",
    rel: "nofollow sponsored noopener",
  } as const;

  const accentBorder =
    rank === 1
      ? "border-l-gold"
      : rank === 2
        ? "border-l-emerald"
        : rank === 3
          ? "border-l-gold-soft"
          : "border-l-border";

  if (variant === "mobile") {
    return (
      <a
        {...commonAnchorProps}
        className={`group relative block overflow-hidden rounded-xl border border-border border-l-4 ${accentBorder} bg-surface p-4 transition-all hover:border-gold/40 hover:shadow-[0_8px_32px_-12px_rgba(242,132,91,0.2)]`}
      >
        <div className="absolute right-3 top-3">
          <RankBadge rank={rank} label={rankLabel} />
        </div>

        <div className="mt-1 flex items-center justify-between gap-3 pr-24">
          <BrandLogo
            logo={partner.logo}
            name={partner.name}
            className="h-20 w-40 shrink-0"
          />
          <div className="flex flex-col items-end">
            <span className="text-2xl font-extrabold leading-none text-gold">
              {rating.toFixed(1)}
            </span>
            <StarRating stars={stars} className="mt-1" />
          </div>
        </div>

        <div className="mt-3 rounded-lg border border-gold/20 bg-gradient-to-br from-gold/12 to-transparent px-4 py-3 text-center">
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-gold">
            Oferta de Boas-Vindas
          </span>
          <p className="text-base font-extrabold leading-tight text-ink">
            {partner.bonusText}
          </p>
        </div>

        <div className="mt-3">
          <CtaButton full />
        </div>
      </a>
    );
  }

  return (
    <a
      {...commonAnchorProps}
      className={`group relative flex items-center gap-5 overflow-hidden rounded-xl border border-border border-l-4 ${accentBorder} bg-surface px-5 py-4 transition-all hover:border-gold/40 hover:shadow-[0_8px_32px_-12px_rgba(242,132,91,0.18)]`}
    >
      <div className="absolute right-5 top-3">
        <RankBadge rank={rank} label={rankLabel} />
      </div>

      <BrandLogo
        logo={partner.logo}
        name={partner.name}
        className="h-28 w-40 shrink-0"
      />

      <div className="min-w-0 flex-1 pr-28">
        <p className="text-lg font-extrabold text-ink">{partner.bonusText}</p>

      </div>

      <div className="flex shrink-0 flex-col items-center gap-1">
        <span className="text-3xl font-extrabold leading-none text-gold">
          {rating.toFixed(1)}
        </span>
        <StarRating stars={stars} />
        <span className="text-[11px] font-medium text-muted">Muito Bom</span>
      </div>

      <div className="shrink-0">
        <CtaButton />
      </div>
    </a>
  );
}
