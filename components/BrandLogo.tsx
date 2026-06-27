import Image from "next/image";
import { getImageUrl } from "@/lib/images";

// Brand logos: always unoptimized, never a background colour.
export function BrandLogo({
  logo,
  name,
  className = "",
}: {
  logo: string;
  name: string;
  className?: string;
}) {
  if (!logo) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        aria-label={name}
      >
        <span className="text-center text-base font-extrabold leading-tight tracking-tight text-ink">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative bg-transparent ${className}`}>
      <Image
        src={getImageUrl(logo)}
        alt={name}
        fill
        unoptimized
        sizes="176px"
        className="object-contain object-left mix-blend-lighten"
      />
    </div>
  );
}
