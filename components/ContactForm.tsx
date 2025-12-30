"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // ✅ Remplace par ton endpoint Formspree
  const FORMSPREE_URL = "https://formspree.io/f/mbdjbrvg";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
      <div>
        <label className="text-sm font-semibold">
          Votre <span className="text-violet-400">Nom</span>
        </label>
        <input
          name="name"
          required
          placeholder="Entrez votre nom"
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-400 outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">
          Votre <span className="text-violet-400">Email</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="Entrez votre email"
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-400 outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <div>
        <label className="text-sm font-semibold">
          Votre <span className="text-violet-400">Message</span>
        </label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder="Écrivez votre message ici..."
          className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-400 outline-none focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-xl bg-green-700 py-3 text-sm font-semibold hover:bg-green-500 transition disabled:opacity-60"
      >
        {status === "sending" ? "Envoi..." : "Envoyer"}
      </button>

      {status === "sent" && (
        <p className="text-sm text-emerald-400">✅ Message envoyé. Merci !</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">❌ Erreur. Réessaie ou contacte-moi par email.</p>
      )}
    </form>
  );
}
