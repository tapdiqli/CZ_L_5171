import type { Partner } from "@/lib/types";
import { BrandCard } from "./BrandCard";
import { calculateRating, calculateStars, rankBadge } from "@/lib/ratings";

export function BrandList({
  desktopPartners,
  mobilePartners,
  limit,
}: {
  desktopPartners: Partner[];
  mobilePartners: Partner[];
  limit?: number;
}) {
  const desktop = limit ? desktopPartners.slice(0, limit) : desktopPartners;
  const mobile = limit ? mobilePartners.slice(0, limit) : mobilePartners;

  return (
    <>
      {/* Desktop list */}
      <div className="hidden flex-col gap-4 lg:flex">
        {desktop.map((partner, i) => {
          const order = i + 1;
          return (
            <BrandCard
              key={partner.id}
              partner={partner}
              rank={order}
              rankLabel={rankBadge(order)}
              rating={calculateRating(order)}
              stars={calculateStars(order)}
              variant="desktop"
            />
          );
        })}
      </div>

      {/* Mobile list */}
      <div className="flex flex-col gap-5 lg:hidden">
        {mobile.map((partner, i) => {
          const order = i + 1;
          return (
            <BrandCard
              key={partner.id}
              partner={partner}
              rank={order}
              rankLabel={rankBadge(order)}
              rating={calculateRating(order)}
              stars={calculateStars(order)}
              variant="mobile"
            />
          );
        })}
      </div>
    </>
  );
}
