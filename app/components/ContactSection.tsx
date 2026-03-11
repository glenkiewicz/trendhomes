"use client";

import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
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
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Imię"
                className="h-[42px] w-full bg-[#d9d9d9]/50 px-6 text-sm text-dark outline-none placeholder:text-dark/70 focus:ring-1 focus:ring-pink"
              />
              <input
                type="email"
                placeholder="E-mail"
                className="h-[42px] w-full bg-[#d9d9d9]/50 px-6 text-sm text-dark outline-none placeholder:text-dark/70 focus:ring-1 focus:ring-pink"
              />
              <input
                type="tel"
                placeholder="Numer telefonu (opcjonalnie)"
                className="h-[42px] w-full bg-[#d9d9d9]/50 px-6 text-sm text-dark outline-none placeholder:text-dark/70 focus:ring-1 focus:ring-pink"
              />
              <input
                type="text"
                placeholder="Kod miejscowości"
                className="h-[42px] w-full bg-[#d9d9d9]/50 px-6 text-sm text-dark outline-none placeholder:text-dark/70 focus:ring-1 focus:ring-pink"
              />

              {/* Select */}
              <div className="relative">
                <select className="h-[42px] w-full appearance-none border border-dark/15 bg-white px-6 pr-12 text-sm text-dark outline-none focus:ring-1 focus:ring-pink">
                  <option>Wybierz z listy czego dotyczy zapytanie</option>
                  <option>Okna</option>
                  <option>Drzwi</option>
                  <option>Rolety</option>
                  <option>Bramy garażowe</option>
                  <option>Pergole</option>
                  <option>Inne</option>
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

              {/* File upload */}
              <label className="flex h-[42px] w-full cursor-pointer items-center border border-dark/15 bg-white px-6 text-sm text-dark">
                <span>Dołącz plik</span>
                <svg
                  className="ml-auto text-pink"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 16V4M12 4L8 8M12 4L16 8M4 18H20" />
                </svg>
                <input type="file" className="hidden" />
              </label>

              {/* Textarea */}
              <textarea
                placeholder="Napisz nam, czego dokładnie potrzebujesz"
                rows={7}
                className="w-full bg-[#d9d9d9]/50 p-6 text-base leading-relaxed text-dark outline-none placeholder:text-dark/70 focus:ring-1 focus:ring-pink"
              />

              {/* Info text */}
              <p className="text-sm leading-relaxed text-dark">
                Na wiadomości odpowiadamy zazwyczaj w ciągu 24 godzin w dni
                robocze. Jeśli sprawa jest pilna, najlepiej od razu zadzwoń.
              </p>

              {/* Checkbox */}
              <label className="flex cursor-pointer items-start gap-3.5">
                <input
                  type="checkbox"
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

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn-pink h-[55px] w-full px-[42px] text-base sm:w-auto"
                >
                  Wyślij zapytanie
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
