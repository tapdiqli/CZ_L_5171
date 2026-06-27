import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-11 w-auto" }: LogoProps) {
  return (
    <Link
      href="/"
      className="group inline-block shrink-0"
      aria-label={`${site.name} - página inicial`}
    >
      <Image
        src="/logo.svg"
        alt={site.name}
        width={240}
        height={48}
        unoptimized
        priority
        className={`block transition-opacity group-hover:opacity-90 ${className}`}
      />
    </Link>
  );
}
