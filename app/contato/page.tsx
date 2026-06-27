import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    `Entre em contacto com a equipa ${site.name}. Sugestões, dúvidas ou propostas — estamos disponíveis para responder.`,
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Estamos aqui"
        title="Contacto"
        description="Tem uma sugestão, questão ou proposta? Envie-nos uma mensagem e responderemos o mais brevemente possível."
      />

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-lg font-extrabold text-ink">
              Dados de contacto
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Somos um comparador editorial independente. Para qualquer assunto,
              utilize o formulário ou envie email directamente.
            </p>

            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-border bg-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-sm font-semibold text-ink hover:text-gold"
                >
                  {site.email}
                </a>
              </div>
              <div className="rounded-xl border border-border bg-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                  País
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  Portugal
                </p>
              </div>
              <div className="rounded-xl border border-emerald/30 bg-emerald/10 p-4">
                <p className="text-xs font-semibold text-emerald">
                  Apoio ao jogador
                </p>
                <p className="mt-1 text-sm text-muted">
                  Para questões sobre jogo responsável, contacte a linha SICAD{" "}
                  <strong className="text-ink">1414</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-xl border border-border bg-surface p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
