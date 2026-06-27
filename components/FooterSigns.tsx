import Image from "next/image";
import Link from "next/link";
import { regulatorySigns } from "@/lib/regulatory-signs";

export function FooterSigns() {
  return (
    <div className="mt-10 border-t border-border pt-8">
      <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
        Organismos de regulação e jogo responsável
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
        {regulatorySigns.map((sign) => {
          const whiteFilter = sign.whiteFilter !== false;
          return (
          <Link
            key={sign.href}
            href={sign.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-12 items-center rounded-lg border border-transparent px-2 py-1 transition-colors hover:border-border hover:bg-surface/50"
            aria-label={sign.alt}
          >
            <Image
              src={sign.src}
              alt={sign.alt}
              width={120}
              height={48}
              unoptimized
              className={`h-10 w-auto max-w-[120px] object-contain opacity-80 transition-opacity group-hover:opacity-100 sm:h-11 sm:max-w-[140px] ${
                whiteFilter ? "brightness-0 invert" : ""
              }`}
            />
          </Link>
          );
        })}
      </div>
    </div>
  );
}
