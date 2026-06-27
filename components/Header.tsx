"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { mainNav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-gold/20 bg-bg/96 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            : "border-b border-border/50 bg-bg/70 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-[62px] max-w-7xl items-center gap-6 px-4 lg:h-[76px]">
          <Logo className="h-9 w-auto lg:h-10" />

          <nav
            className="hidden flex-1 items-center justify-center gap-1 lg:flex"
            aria-label="Navegação principal"
          >
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3 py-2 text-[12px] font-semibold transition-colors xl:px-4 xl:text-[13px] ${
                    active ? "text-gold" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-[17px] h-0.5 rounded-full bg-gradient-to-r from-gold to-emerald lg:-bottom-[21px]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <span className="rounded-lg border border-border bg-surface/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-muted">
              <span className="mr-1.5 inline-grid h-4 w-4 place-items-center rounded bg-gold/20 text-[9px] text-gold">
                18
              </span>
              SRIJ
            </span>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className={`relative ml-auto grid h-10 w-10 place-items-center rounded-lg border transition-all lg:hidden ${
              open
                ? "border-gold/50 bg-gold/15 text-gold"
                : "border-border bg-surface text-ink"
            }`}
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  open ? "w-0 opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-bg/80 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`header-drawer absolute inset-x-0 top-[63px] border-b border-gold/20 bg-surface shadow-2xl transition-all duration-300 ${
            open ? "is-open translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="border-b border-border/60 px-4 py-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              {site.name}
            </p>
          </div>

          <nav className="flex flex-col p-3" aria-label="Navegação móvel">
            {mainNav.map((item, i) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`header-drawer-link flex items-center gap-3 rounded-lg px-3 py-3.5 ${
                    active
                      ? "bg-gold/12 text-gold"
                      : "text-ink hover:bg-bg-soft"
                  }`}
                  style={{ animationDelay: `${i * 55}ms` }}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg text-xs font-extrabold ${
                      active ? "bg-gold text-bg" : "bg-bg-soft text-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
