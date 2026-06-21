"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
        company: formData.get("company"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const result = await response.json().catch(() => null);
      setStatus("error");
      setFeedback(result?.error || "Invio non riuscito. Riprova tra qualche minuto.");
      return;
    }

    form.reset();
    setStatus("success");
    setFeedback("Messaggio inviato correttamente.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 shadow-2xl sm:p-8"
    >
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-500">
            Nome
          </span>
          <input
            type="text"
            name="name"
            required
            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-sm text-zinc-200 outline-none transition-colors placeholder:text-zinc-700 focus:border-emerald-500"
            placeholder="Il tuo nome"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-500">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full rounded-lg border border-zinc-800 bg-black px-4 py-3 text-sm text-zinc-200 outline-none transition-colors placeholder:text-zinc-700 focus:border-emerald-500"
            placeholder="nome@example.com"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-zinc-500">
          Messaggio
        </span>
        <textarea
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-lg border border-zinc-800 bg-black px-4 py-3 text-sm text-zinc-200 outline-none transition-colors placeholder:text-zinc-700 focus:border-emerald-500"
          placeholder="Scrivi qui il tuo messaggio..."
        />
      </label>

      <div className="flex flex-col gap-4 border-t border-zinc-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p
          className={`text-xs ${
            status === "success"
              ? "text-emerald-400"
              : status === "error"
                ? "text-red-400"
                : "text-zinc-500"
          }`}
          aria-live="polite"
        >
          {feedback || "Niente spam. Non serve nessuna registrazione."}
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400"
        >
          {status === "sending" ? "Invio..." : "Invia messaggio"}
        </button>
      </div>
    </form>
  );
}
