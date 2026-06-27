"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Mensagem de ${name || "visitante"}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-lg border border-border bg-bg-soft px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-gold/55";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-ink">
          Nome
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={field}
          placeholder="Introduza o seu nome"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-ink">
          Email
        </label>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={field}
          placeholder="o.seu.email@exemplo.pt"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-semibold text-ink">
          Mensagem
        </label>
        <textarea
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${field} resize-none`}
          placeholder="Em que podemos ajudar?"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-gradient-to-r from-gold to-gold-soft px-5 py-3 text-sm font-bold text-bg transition-transform hover:scale-[1.01]"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
