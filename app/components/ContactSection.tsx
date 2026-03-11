"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionHeading from "./SectionHeading";
import { contactSchema, type ContactFormData } from "../lib/contact-schema";

const inputBase =
  "h-[42px] w-full bg-[#d9d9d9]/50 px-6 text-sm text-dark outline-none placeholder:text-dark/70 focus:ring-1 focus:ring-pink";
const inputError = "ring-1 ring-red-500";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      postalCode: "",
      category: "",
      message: "",
    },
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

  return (
    <section id="kontakt" className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <SectionHeading lines={["Skontaktuj się", "z Nami"]} />

        <p className="mt-4 max-w-[867px] text-lg leading-relaxed text-dark md:mt-6 md:text-2xl">
          Napisz, zadzwoń albo umów spotkanie w salonie w Sanoku. Im więcej
          powiesz nam o swojej inwestycji, tym lepiej dopasujemy stolarkę
          i terminy.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-12 md:gap-16 lg:grid-cols-2">
          {/* Left — address & contact info */}
          <div className="flex flex-col gap-8">
            {/* Address */}
            <div>
              <h3 className="text-2xl font-bold text-dark">
                Adres i siedziba firmy
              </h3>
              <div className="mt-4 text-xl leading-relaxed text-dark">
                <p>Piastowska 3,</p>
                <p>38-500 Sanok</p>
              </div>
              <p className="mt-4 text-xl leading-relaxed text-dark">
                Pracujemy głównie w Sanoku, Bieszczadach, Rzeszowie
                i okolicznych miejscowościach.
              </p>
              <p className="mt-6 text-xl font-bold text-dark">
                Godziny otwarcia salonu:
              </p>
              <div className="mt-2 text-xl leading-relaxed text-dark">
                <p>Poniedziałek – piątek:</p>
                <p>8:00–16:00</p>
              </div>
              <div className="mt-4 text-xl leading-relaxed text-dark">
                <p>Sobota:</p>
                <p>po wcześniejszym umówieniu</p>
              </div>
            </div>

            {/* Contact details */}
            <div>
              <h3 className="text-2xl font-bold text-dark">
                Dane kontaktowe
              </h3>
              <div className="mt-4 text-xl leading-relaxed text-dark">
                <p>Telefon: 735 721 222</p>
                <p>E-mail: kontakt@trendhomes.pl</p>
              </div>
              <div className="mt-3 text-xl leading-relaxed text-dark">
                <p>Telefon: 601 941 619</p>
                <p>E-mail: rzeszow@trendhomes.pl</p>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="relative size-8 transition-transform duration-200 hover:scale-110"
              >
                <Image
                  src="/images/icon-facebook.svg"
                  alt="Facebook"
                  fill
                  className="object-contain"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="relative size-8 transition-transform duration-200 hover:scale-110"
              >
                <Image
                  src="/images/icon-instagram.svg"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </a>
            </div>
          </div>

          {/* Right — contact form */}
          <div>
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-green-50 p-10 text-center">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                <p className="text-xl font-bold text-green-700">Wiadomość wysłana!</p>
                <p className="text-dark/70">Odpowiemy najszybciej jak to możliwe.</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="btn-pink mt-2 h-[42px] px-8 text-sm"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                <div>
                  <input
                    type="text"
                    placeholder="Imię"
                    {...register("name")}
                    className={`${inputBase} ${errors.name ? inputError : ""}`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    {...register("email")}
                    className={`${inputBase} ${errors.email ? inputError : ""}`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>

                <input
                  type="tel"
                  placeholder="Numer telefonu (opcjonalnie)"
                  {...register("phone")}
                  className={inputBase}
                />

                <input
                  type="text"
                  placeholder="Kod miejscowości"
                  {...register("postalCode")}
                  className={inputBase}
                />

                {/* Select */}
                <div>
                  <div className="relative">
                    <select
                      {...register("category")}
                      className={`h-[42px] w-full appearance-none border border-dark/15 bg-white px-6 pr-12 text-sm text-dark outline-none focus:ring-1 focus:ring-pink ${errors.category ? inputError : ""}`}
                    >
                      <option value="">Wybierz z listy czego dotyczy zapytanie</option>
                      <option value="Okna">Okna</option>
                      <option value="Drzwi">Drzwi</option>
                      <option value="Rolety">Rolety</option>
                      <option value="Bramy garażowe">Bramy garażowe</option>
                      <option value="Pergole">Pergole</option>
                      <option value="Inne">Inne</option>
                    </select>
                    <svg
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-pink"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  {errors.category && <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>}
                </div>

                {/* Textarea */}
                <div>
                  <textarea
                    placeholder="Napisz nam, czego dokładnie potrzebujesz"
                    rows={7}
                    {...register("message")}
                    className={`w-full bg-[#d9d9d9]/50 p-6 text-base leading-relaxed text-dark outline-none placeholder:text-dark/70 focus:ring-1 focus:ring-pink ${errors.message ? inputError : ""}`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
                </div>

                {/* Info text */}
                <p className="text-sm leading-relaxed text-dark">
                  Na wiadomości odpowiadamy zazwyczaj w ciągu 24 godzin w dni
                  robocze. Jeśli sprawa jest pilna, najlepiej od razu zadzwoń.
                </p>

                {/* Checkbox */}
                <div>
                  <label className="flex cursor-pointer items-start gap-3.5">
                    <input
                      type="checkbox"
                      {...register("privacy")}
                      className="mt-1 size-4 shrink-0 appearance-none border border-pink checked:bg-pink"
                    />
                    <span className="text-sm leading-relaxed text-dark">
                      Zapoznałem/am się i akceptuję informację dotyczące
                      przetwarzania moich danych osobowych wyjaśnionych w{" "}
                      <a href="#" className="text-dark underline">
                        Polityce Prywatności
                      </a>
                    </span>
                  </label>
                  {errors.privacy && <p className="mt-1 text-xs text-red-500">{errors.privacy.message}</p>}
                </div>

                {/* Server error */}
                {serverError && (
                  <p className="text-sm text-red-500">{serverError}</p>
                )}

                {/* Submit */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-pink h-[55px] w-full px-[42px] text-base sm:w-auto disabled:opacity-50"
                  >
                    {status === "sending" ? "Wysyłanie..." : "Wyślij zapytanie"}
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
