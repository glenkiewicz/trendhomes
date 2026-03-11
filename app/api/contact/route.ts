import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/app/lib/contact-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Nieprawidłowe dane formularza", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, postalCode, category, message } = result.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Formularz kontaktowy" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "kontakt@trendhomes.pl",
      replyTo: email,
      subject: `Nowe zapytanie: ${category} — ${name}`,
      html: `
        <h2>Nowe zapytanie ze strony trendhomes.pl</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;">Imię:</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">E-mail:</td><td style="padding:8px;">${email}</td></tr>
          ${phone ? `<tr><td style="padding:8px;font-weight:bold;">Telefon:</td><td style="padding:8px;">${phone}</td></tr>` : ""}
          ${postalCode ? `<tr><td style="padding:8px;font-weight:bold;">Kod miejscowości:</td><td style="padding:8px;">${postalCode}</td></tr>` : ""}
          <tr><td style="padding:8px;font-weight:bold;">Kategoria:</td><td style="padding:8px;">${category}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Wiadomość:</td><td style="padding:8px;">${message.replace(/\n/g, "<br>")}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Nie udało się wysłać wiadomości. Spróbuj ponownie później." },
      { status: 500 }
    );
  }
}
