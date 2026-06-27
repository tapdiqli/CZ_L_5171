import Link from "next/link";
import { Logo } from "./Logo";
import { FooterSigns } from "./FooterSigns";
import { mainNav, legalNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-border bg-bg-soft">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              O {site.name} é um comparador editorial independente que analisa
              casinos online com licença SRIJ em Portugal. Não somos operador de
              jogo — ajudamos jogadores a escolher plataformas legais, seguras
              e adequadas ao mercado português.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted">
                <span className="grid h-4 w-4 place-items-center rounded bg-gold/20 text-[9px] font-bold text-gold">
                  18
                </span>
                Só +18
              </span>
              <span className="rounded-lg border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted">
                Licença SRIJ
              </span>
              <span className="rounded-lg border border-emerald/30 bg-emerald/10 px-3 py-1.5 text-xs font-semibold text-emerald">
                Jogo Consciente
              </span>
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:max-w-lg">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold">
                Páginas
              </h3>
              <ul className="mt-4 space-y-2.5">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5">
                {legalNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/jogo-responsavel"
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    Jogo Responsável
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gold">
                Contacto
              </h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 block text-sm font-medium text-ink transition-colors hover:text-gold"
              >
                {site.email}
              </a>
              <p className="mt-2 text-sm text-muted">Portugal · PT</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border/80 bg-surface/50 p-5 lg:p-6">
          <p className="text-xs leading-relaxed text-muted">
            <strong className="text-ink">Aviso legal:</strong> O jogo pode
            provocar dependência. Defina limites e jogue apenas por diversão. As
            ofertas apresentadas dependem dos termos de cada operador. Este
            portal destina-se exclusivamente a maiores de 18 anos em território
            português, onde o jogo online é regulado pelo SRIJ. Apoio gratuito:{" "}
            <span className="font-semibold text-ink">SICAD 1414</span>.
          </p>
        </div>

        <FooterSigns />

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.domain}. Todos os direitos
            reservados.
          </p>
          <p>
            {site.name} · {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
