import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

const steps = [
  {
    number: "1.",
    title: "Rozmowa i plan",
    text: "Najpierw słuchamy, w jakiej jesteś sytuacji - budujesz nowy dom, remontujesz mieszkanie, wymieniasz stolarkę w domu jednorodzinnym czy urządzasz lokal usługowy. Na tym etapie często od razu widać, które rozwiązania odpadają.",
    opacity: "",
  },
  {
    number: "2.",
    title: "Pomiar i doradztwo na miejscu",
    text: "Przyjeżdżamy, mierzymy, sprawdzamy realne warunki. Tłumaczymy różnice między PVC, aluminium, drewnem, rodzajami rolet czy bram tak, żeby dało się to zrozumieć bez słownika technicznego.",
    opacity: "opacity-80",
  },
  {
    number: "3.",
    title: "Wycena i termin",
    text: "Dostajesz konkretną wycenę wraz z zakresem prac i terminem montażu. Bez \u201Emoże w przyszłym tygodniu\u201D - ustalamy dzień, który wpisujemy w kalendarz.",
    opacity: "opacity-60",
  },
];

const team = [
  {
    name: "Mateusz: właściciel i doradca",
    text: "Mateusz jest twarzą firmy i pierwszym kontaktem przy większości inwestycji. Przyjeżdża na pomiar, ogląda budowę lub mieszkanie, zadaje dużo pytań i pomaga poukładać temat stolarki tak, żeby pasował do projektu i etapu prac. Nie sprzedaje \u201Enajdroższego, bo najdroższe jest najlepsze\u201D, tylko szuka rozwiązań, które mają sens na lata. Pilnuje też, żeby to, co ustalicie na początku, nie rozmyło się po drodze.",
    image: "/images/onas-person.png",
  },
  {
    name: "Monika: wyceny, terminy, kontakt",
    text: "Monika jest tą osobą, która sprawia, że wszystko się spina w kalendarzu i w dokumentach. Dopina zamówienia, dzwoni w sprawie terminów. Jeśli chcesz wiedzieć, na jakim etapie jest Twoje zlecenie i kiedy dokładnie będzie montaż - najczęściej rozmawiasz właśnie z nią. Dba o to, żeby informacje nie ginęły \u201Epomiędzy\u201D, tylko wracały do klienta na czas.",
    image: "/images/onas-person.png",
  },
  {
    name: "Krystian - pomiar, montaże i szczegóły na budowie",
    text: "Krystian odpowiada za kontakt z Klientem, oferty i pomiary. Dodatkowo koordynuje ekipy montażowe i techniczne detale. To on patrzy, czy dane rozwiązanie da się zamontować tak, żeby było szczelnie, bezpiecznie i zgodnie ze sztuką. Na budowie często trzeba podejmować szybkie decyzje - Krystian robi to w taki sposób, żeby efekt końcowy był dobry zarówno wizualnie, jak i technicznie.",
    image: "/images/onas-person.png",
  },
];

export default function ONasPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/onas-hero.png"
          alt="Trendhomes: ludzie i lokalność"
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(27,27,27,0.72) 15%, rgba(27,27,27,0.58) 43%, rgba(107,101,98,0.24) 79%, rgba(255,240,229,0) 100%)",
          }}
        />
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-3 md:px-5">
          <nav className="mb-6 flex items-center gap-2 text-sm uppercase text-white/80 md:text-sm">
            <Link href="/" className="transition-colors hover:text-white">
              home
            </Link>
            <span>|</span>
            <span className="text-white">o nas</span>
          </nav>

          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            Trendhomes:
            <br />
            ludzie i lokalność
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
            Trendhomes to ekipa ze stolarką z Sanoka. Pomagamy ogarnąć okna,
            drzwi, rolety, bramy i pergole w jednym miejscu, tak żeby temat był
            po prostu zrobiony, a nie wisiał miesiącami w powietrzu.
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="#kontakt"
              className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
            >
              Skontaktuj się z Nami
            </Link>
          </div>
        </div>
      </section>

      {/* About section - Ludzie od stolarki */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading
                  lines={[
                    "Ludzie od stolarki, którzy",
                    "wolą dowozić niż obiecywać",
                  ]}
                />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark md:text-lg">
                  <p>
                    Pracujemy lokalnie - w Sanoku, Bieszczadach i okolicznych
                    miejscowościach. Dzięki temu znamy tutejsze projekty, typowe
                    problemy przy remontach i budowach oraz to, jak wygląda
                    prawdziwe życie na budowie, a nie tylko w katalogu.
                  </p>
                  <p>
                    Trendhomes powstał z bardzo prostej obserwacji: klienci są
                    zmęczeni gonieniem ekip, przekładanymi terminami i sytuacją,
                    w której nikt nie czuje się odpowiedzialny za całość. U nas
                    od pierwszej rozmowy do montażu odpowiada jedna firma.
                  </p>
                  <p>Nie obiecujemy cudów. Zamiast tego wolimy:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>
                      powiedzieć uczciwie, co ma sens przy Twoim budżecie,
                    </li>
                    <li>
                      dobrać systemy tak, żeby pasowały do projektu, a nie tylko
                      do cennika,
                    </li>
                    <li>umówić realny termin i się go trzymać.</li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link
                    href="#kontakt"
                    className="btn-pink h-12 px-[34px] text-sm"
                  >
                    Poznaj nasz zespół
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[672px]">
                <Image
                  src="/images/onas-team.png"
                  alt="Zespół Trendhomes"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Jak pracujemy */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={["Jak pracujemy", "dostarczając Ci stolarkę"]}
            />
            <p className="mt-6 text-sm leading-relaxed text-dark md:text-xl">
              Niezależnie od tego, czy budujesz nowy dom, remontujesz mieszkanie,
              czy przygotowujesz lokal usługowy - proces zawsze trzymamy w
              ryzach. Dzięki temu wiesz, na jakim etapie jesteśmy i czego możesz
              się spodziewać.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
              {steps.map((step, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="border-t-2 border-pink/30 pt-5">
                    <span
                      className={`text-3xl font-black text-pink ${step.opacity}`}
                    >
                      {step.number}
                    </span>
                    <h3 className="mt-2 text-xl font-light text-dark md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-dark md:text-lg">
                      {step.text}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Dlaczego warto wybrać Trendhomes */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading
              lines={["Dlaczego warto", "wybrać Trendhomes"]}
            />
            <p className="mt-6 text-sm leading-relaxed text-dark md:text-xl">
              Za Trendhomes stoją konkretne osoby, z którymi rozmawiasz po
              imieniu. To ważne szczególnie dla klientów, którzy chcą wiedzieć,
              kto realnie odpowiada za ich inwestycję.
            </p>

            <div className="mt-10 space-y-0 md:mt-14">
              {team.map((member, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div
                    className={`grid grid-cols-1 gap-6 border-b border-dark/10 py-6 last:border-b-0 md:grid-cols-[1fr_342px] md:gap-10 md:py-8 ${
                      i === 1 ? "md:grid-cols-[342px_1fr]" : ""
                    }`}
                  >
                    <div
                      className={
                        i === 1 ? "order-2 md:order-2" : "order-2 md:order-1"
                      }
                    >
                      <h3 className="text-xl font-light text-dark md:text-3xl">
                        {member.name}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-dark md:text-lg">
                        {member.text}
                      </p>
                    </div>
                    <div
                      className={`relative h-[220px] overflow-hidden sm:h-[284px] ${
                        i === 1 ? "order-1 md:order-1" : "order-1 md:order-2"
                      }`}
                    >
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="mt-10 flex justify-center md:mt-14">
              <Link
                href="#kontakt"
                className="btn-pink h-[52px] px-[34px] text-sm"
              >
                Skontaktuj się z Nami
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Zobacz gdzie działamy */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading
                  lines={["Zobacz gdzie działamy", "i zróbmy coś razem"]}
                />
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-dark md:text-lg">
                  <p>Skupiamy się na regionie, który znamy najlepiej:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Sanok i najbliższe okolice,</li>
                    <li>miejscowości w kierunku Bieszczad,</li>
                    <li>
                      sąsiednie gminy, gdzie trudno o solidną, lokalną ekipę od
                      stolarki.
                    </li>
                  </ul>
                  <p>
                    Pracujemy lokalnie - w Sanoku, Bieszczadach i okolicznych
                    miejscowościach. Dzięki temu znamy tutejsze projekty, typowe
                    problemy przy remontach i budowach oraz to, jak wygląda
                    prawdziwe życie na budowie, a nie tylko w katalogu.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    href="#kontakt"
                    className="btn-pink h-[52px] px-[34px] text-sm"
                  >
                    Umów pomiar w 48 h
                  </Link>
                </div>
              </div>
              <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[574px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82954.3!2d22.1!3d49.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c4b0f1e2b8c0f%3A0x3c4e7b8a4e8e1e0!2sSanok!5e0!3m2!1spl!2spl!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* FAQ */}
      <AnimateOnScroll>
        <FaqSection />
      </AnimateOnScroll>

      {/* Contact */}
      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>
      <MapSection />
      <Footer />
    </>
  );
}
