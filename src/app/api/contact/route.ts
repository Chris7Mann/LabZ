import { NextResponse } from "next/server";

const MAX_FIELD_LENGTH = 2000;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

function normalizeField(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, MAX_FIELD_LENGTH) : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ error: "Payload non valido." }, { status: 400 });
  }

  const honeypot = normalizeField(payload.company);

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const name = normalizeField(payload.name);
  const email = normalizeField(payload.email);
  const message = normalizeField(payload.message);

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json(
      {
        error: "Campi non validi.",
        details:
          process.env.NODE_ENV === "development"
            ? {
                hasName: Boolean(name),
                hasEmail: Boolean(email),
                hasMessage: Boolean(message),
                isValidEmail: isValidEmail(email),
              }
            : undefined,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "LabZ <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    return NextResponse.json({ error: "Servizio contatti non configurato." }, { status: 500 });
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Nuovo contatto da LabZ: ${name}`,
      text: [
        "Nuovo messaggio dal form contatti LabZ.",
        "",
        `Nome: ${name}`,
        `Email: ${email}`,
        "",
        "Messaggio:",
        message,
      ].join("\n"),
    }),
  });

  if (!resendResponse.ok) {
    const resendError = await resendResponse.json().catch(() => null);

    console.error("Resend contact form error", {
      status: resendResponse.status,
      error: resendError,
    });

    return NextResponse.json(
      {
        error: "Invio email non riuscito.",
        details: process.env.NODE_ENV === "development" ? resendError : undefined,
        status: process.env.NODE_ENV === "development" ? resendResponse.status : undefined,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
