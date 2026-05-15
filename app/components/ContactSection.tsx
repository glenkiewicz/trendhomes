"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionHeading from "./SectionHeading";
import { contactSchema, type ContactFormData } from "../lib/contact-schema";
import type { StrapiGlobalSettings } from "../types/strapi";

const inputBase =
  "h-[42px] w-full bg-[#d9d9d9]/50 px-5 text-sm text-dark outline-none placeholder:text-dark/70 focus:ring-1 focus:ring-pink";
const inputError = "ring-1 ring-red-500";

const FORM = {
  placeholders: {
    name: "Imię",
    email: "E-mail",
    phone: "Numer telefonu (opcjonalnie)",
    postalCode: "Kod miejscowości",
    categoryDefault: "Wybierz z listy czego dotyczy zapytanie",
    message: "Napisz nam, czego dokładnie potrzebujesz",
  },
  categories: ["Okna", "Drzwi", "Rolety", "Bramy garażowe", "Pergole", "Inne"],
  infoText:
    "Na wiadomości odpowiadamy zazwyczaj w ciągu 24 godzin w dni robocze. Jeśli sprawa jest pilna, najlepiej od razu zadzwoń.",
  privacyText:
    "Zapoznałem/am się i akceptuję informację dotyczące przetwarzania moich danych osobowych wyjaśnionych w",
  privacyLink: "Polityce Prywatności",
  submitButton: "Wyślij zapytanie",
  sendingButton: "Wysyłanie...",
  successTitle: "Wiadomość wysłana!",
  successDescription: "Odpowiemy najszybciej jak to możliwe.",
  successButton: "Wyślij kolejną wiadomość",
};

const COPY = {
  heading: ["Skontaktuj się", "z Nami"],
  description:
    "Napisz, zadzwoń albo umów spotkanie w salonie w Sanoku. Im więcej powiesz nam o swojej inwestycji, tym lepiej dopasujemy stolarkę i terminy.",
  addressHeading: "Adres i siedziba firmy",
  serviceArea:
    "Pracujemy głównie w Sanoku, Bieszczadach, Rzeszowie i okolicznych miejscowościach.",
  openingHoursHeading: "Godziny otwarcia salonu:",
  contactHeading: "Dane kontaktowe",
};

export default function ContactSection({ global }: { global: StrapiGlobalSettings }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", postalCode: "", category: "", message: "" },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Błąd serwera");
      }
      setStatus("success");
      reset();
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Wystąpił nieoczekiwany błąd");
      setStatus("error");
    }
  };

  const sanok = global.branches.find((b) => b.name === "sanok");
  const rzeszow = global.branches.find((b) => b.name === "rzeszow");

  return (
    <section id="kontakt" className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={COPY.heading} />

        <p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6 md:text-xl">
          {COPY.description}
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-12 md:gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-xl font-bold text-dark">{COPY.addressHeading}</h3>
              <div className="mt-4 text-lg leading-relaxed text-dark">
                {global.addressStreet && <p>{global.addressStreet.replace("ul. ", "")},</p>}
                {global.addressCity && <p>{global.addressCity}</p>}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-dark">{COPY.serviceArea}</p>
              <p className="mt-6 text-lg font-bold text-dark">{COPY.openingHoursHeading}</p>
              {global.openingHoursWeekdays && (
                <div className="mt-2 text-lg leading-relaxed text-dark">
                  <p>{global.openingHoursWeekdays}</p>
                </div>
              )}
              {global.openingHoursSaturday && (
                <div className="mt-4 text-lg leading-relaxed text-dark">
                  <p>{global.openingHoursSaturday}</p>
                </div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-dark">{COPY.contactHeading}</h3>
              {sanok && (
                <div className="mt-4 text-lg leading-relaxed text-dark">
                  {sanok.phone && (
                    <p>
                      Telefon:{" "}
                      <a href={`tel:${sanok.phone.replace(/\s/g, "")}`} className="hover:text-pink transition-colors">
                        {sanok.phone}
                      </a>
                    </p>
                  )}
                  {sanok.email && (
                    <p>
                      E-mail:{" "}
                      <a href={`mailto:${sanok.email}`} className="hover:text-pink transition-colors">
                        {sanok.email}
                      </a>
                    </p>
                  )}
                </div>
              )}
              {rzeszow && (
                <div className="mt-3 text-lg leading-relaxed text-dark">
                  {global.phoneMobile && (
                    <p>
                      Telefon:{" "}
                      <a href={`tel:${global.phoneMobile.replace(/\s/g, "")}`} className="hover:text-pink transition-colors">
                        {global.phoneMobile}
                      </a>
                    </p>
                  )}
                  {rzeszow.email && (
                    <p>
                      E-mail:{" "}
                      <a href={`mailto:${rzeszow.email}`} className="hover:text-pink transition-colors">
                        {rzeszow.email}
                      </a>
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center gap-4">
              {global.socialFacebook && (
                <a
                  href={global.socialFacebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="relative size-8 transition-transform duration-200 hover:scale-110"
                >
                  <Image src="/images/icon-facebook.svg" alt="Facebook" fill className="object-contain" />
                </a>
              )}
              {global.socialInstagram && (
                <a
                  href={global.socialInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="relative size-8 transition-transform duration-200 hover:scale-110"
                >
                  <Image src="/images/icon-instagram.svg" alt="Instagram" fill className="object-contain" />
                </a>
              )}
            </div>
          </div>

          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-green-50 p-8 text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <p className="text-lg font-bold text-green-700">{FORM.successTitle}</p>
                <p className="text-dark/70">{FORM.successDescription}</p>
                <button type="button" onClick={() => setStatus("idle")} className="btn-pink mt-2 h-[42px] px-6 text-sm">
                  {FORM.successButton}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                <div>
                  <input
                    type="text"
                    placeholder={FORM.placeholders.name}
                    {...register("name")}
                    className={`${inputBase} ${errors.name ? inputError : ""}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder={FORM.placeholders.email}
                    {...register("email")}
                    className={`${inputBase} ${errors.email ? inputError : ""}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>

                <input type="tel" placeholder={FORM.placeholders.phone} {...register("phone")} className={inputBase} />

                <input
                  type="text"
                  placeholder={FORM.placeholders.postalCode}
                  {...register("postalCode")}
                  className={inputBase}
                />

                <div>
                  <div className="relative">
                    <select
                      {...register("category")}
                      className={`h-[42px] w-full appearance-none border border-dark/15 bg-white px-5 pr-10 text-sm text-dark outline-none focus:ring-1 focus:ring-pink ${errors.category ? inputError : ""}`}
                    >
                      <option value="">{FORM.placeholders.categoryDefault}</option>
                      {FORM.categories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-pink"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>}
                </div>

                <div>
                  <textarea
                    placeholder={FORM.placeholders.message}
                    rows={7}
                    {...register("message")}
                    className={`w-full bg-[#d9d9d9]/50 p-5 text-sm leading-relaxed text-dark outline-none placeholder:text-dark/70 focus:ring-1 focus:ring-pink ${errors.message ? inputError : ""}`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                </div>

                <p className="text-sm leading-relaxed text-dark">{FORM.infoText}</p>

                <div>
                  <label className="flex cursor-pointer items-start gap-3.5">
                    <input
                      type="checkbox"
                      {...register("privacy")}
                      className="mt-1 size-4 shrink-0 appearance-none border border-pink checked:bg-pink"
                    />
                    <span className="text-sm leading-relaxed text-dark">
                      {FORM.privacyText}{" "}
                      <a href="/polityka-prywatnosci" className="text-dark underline">
                        {FORM.privacyLink}
                      </a>
                    </span>
                  </label>
                  {errors.privacy && <p className="mt-1 text-xs text-red-500">{errors.privacy.message}</p>}
                </div>

                {serverError && <p className="text-sm text-red-500">{serverError}</p>}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-pink h-[55px] w-full px-[34px] text-sm sm:w-auto disabled:opacity-50"
                  >
                    {status === "sending" ? FORM.sendingButton : FORM.submitButton}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
