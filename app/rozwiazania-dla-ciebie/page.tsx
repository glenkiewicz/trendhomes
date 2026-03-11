import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import BrandsSection from "../components/BrandsSection";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

const solutions = [
  {
    heading: ["Buduję nowy dom:", "rozwiązania od Trendhomes"],
    text: "Nowy dom to milion decyzji naraz. My bierzemy na siebie temat stolarki: dobieramy okna, rolety i drzwi tak, żeby pasowały do projektu, warunków zabudowy i Twojego budżetu. Ustalamy jeden termin montażu i koordynujemy prace z innymi ekipami, żeby nie blokować budowy.",
    image: "/images/rozwiazania-dom.jpg",
    banner: "Sprawdź pakiet okna + rolety + drzwi dla swojego projektu",
    imageRight: true,
  },
  {
    heading: ["Remontuję mieszkanie:", "rozwiązania od Trendhomes"],
    text: "Chcesz wymienić kilka okien w bloku i mieć to za sobą w 1 dzień, bez tygodniowego bałaganu. Planujemy prace tak, żeby nie paraliżować życia domowego i nie konfliktować Cię z sąsiadami. Dbamy o zabezpieczenie mieszkania, szybki montaż i wywóz starych okien.",
    image: "/images/rozwiazania-remont.jpg",
    banner: "Zobacz, jak wygląda wymiana okien w mieszkaniu krok po kroku",
    imageRight: false,
  },
  {
    heading: ["Prowadzę biznes:", "rozwiązania od Trendhomes"],
    text: "W lokalu liczy się pierwsze wrażenie, bezpieczeństwo i przepisy. Projektujemy i montujemy witryny, drzwi wejściowe i stolarkę p.poż tak, żeby było jednocześnie estetycznie, zgodnie z wymaganiami i na czas otwarcia. Ustalamy prace tak, aby jak najmniej ograniczać działanie Twojej firmy.",
    image: "/images/rozwiazania-biznes.jpg",
    banner: "Poznaj rozwiązania dla sklepów, biur, gabinetów i lokali usługowych",
    imageRight: true,
  },
];

const businessCards = [
  {
    title: "Dla właścicieli lokali usługowych, sklepów, gabinetów czy biur",
    image: "/images/rozwiazania-biz-1.jpg",
  },
  {
    title: "Dla deweloperów i całych wspólnot mieszkaniowych",
    image: "/images/rozwiazania-biz-2.jpg",
  },
  {
    title: "Dla dużych inwestorów i obiektów publicznych m. in. szkół czy urzędów",
    image: "/images/rozwiazania-biz-3.jpg",
  },
];

const pergolaGallery = [
  "/images/rozwiazania-gallery-1.jpg",
  "/images/rozwiazania-gallery-2.jpg",
  "/images/rozwiazania-gallery-3.jpg",
];

export default function RozwiazaniaPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/rozwiazania-hero.jpg"
          alt="Rozwiązania dopasowane do Twoich potrzeb"
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
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-center px-4 md:px-6">
          <nav className="mb-6 flex items-center gap-2 text-sm uppercase text-white/80 md:text-base">
            <Link href="/" className="transition-colors hover:text-white">
              home
            </Link>
            <span>|</span>
            <span className="text-white">rozwiązania dla ciebie</span>
          </nav>

          <h1 className="max-w-[660px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Rozwiązania dopasowane
            <br />
            do Twoich potrzeb
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-base md:mt-6 md:text-xl">
            Niezależnie od tego, czy budujesz nowy dom, remontujesz mieszkanie,
            prowadzisz biznes, czy planujesz pergolę — dobieramy stolarkę i
            rozwiązania dopasowane do Twojej sytuacji.
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="#kontakt"
              className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-10 sm:text-base"
            >
              Umów pomiar w 48 h
            </Link>
          </div>
        </div>
      </section>

      {/* Solution sections */}
      {solutions.map((solution, i) => (
        <div key={i}>
          <AnimateOnScroll>
            <section className="bg-white py-12 md:py-20">
              <div className="mx-auto max-w-[1440px] px-4 md:px-6">
                <div
                  className={`grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2 ${
                    !solution.imageRight ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Text */}
                  <div className={solution.imageRight ? "order-1" : "order-1 lg:order-2"}>
                    <SectionHeading lines={solution.heading} />
                    <p className="mt-6 text-base leading-relaxed text-dark md:text-2xl">
                      {solution.text}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    className={`relative h-[200px] overflow-hidden sm:h-[260px] md:h-[212px] ${
                      solution.imageRight ? "order-2" : "order-2 lg:order-1"
                    }`}
                  >
                    <Image
                      src={solution.image}
                      alt={solution.heading[0]}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          </AnimateOnScroll>

          {/* Pink CTA banner */}
          <AnimateOnScroll>
            <div className="bg-pink">
              <div className="mx-auto max-w-[1440px] px-4 py-6 md:px-6 md:py-7">
                <p className="text-center text-lg font-normal text-white md:text-[32px]">
                  {solution.banner}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      ))}

      {/* Business solutions grid */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading lines={["Rozwiązania", "dla biznesu"]} />

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {businessCards.map((card, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="group flex flex-col bg-card">
                    <div className="p-6 pb-0 md:p-10 md:pb-0">
                      <h3 className="text-xl font-bold leading-tight text-dark md:text-[32px] md:leading-[42px]">
                        {card.title}
                      </h3>
                    </div>
                    <div className="relative mt-6 h-[180px] w-full overflow-hidden md:mt-8">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Pergola section */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <div className="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading
                  lines={["Dom z pergolą", "rozwiązania od Trendhomes"]}
                />
                <p className="mt-6 text-base leading-relaxed text-dark md:text-2xl">
                  Pergola albo ogród zimowy to dodatkowy pokój, który żyje razem
                  z Twoim ogrodem. Pomagamy dobrać konstrukcję, przeszklenia i
                  zacienienie tak, żeby dało się tam odpocząć i latem, i w
                  chłodniejsze dni. Patrzymy na całość: bryła domu, taras, sposób
                  użytkowania.
                </p>
              </div>
              <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[500px]">
                <Image
                  src="/images/rozwiazania-pergola.jpg"
                  alt="Pergola ogrodowa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Pergola CTA banner */}
      <AnimateOnScroll>
        <div className="bg-pink">
          <div className="mx-auto max-w-[1440px] px-4 py-6 md:px-6 md:py-7">
            <p className="text-center text-lg font-normal text-white md:text-[32px]">
              Zobacz, jak projektujemy pergole i ogrody zimowe w okolicach Sanoka
            </p>
          </div>
        </div>
      </AnimateOnScroll>

      {/* Pergola gallery */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Zobacz jakie pergole", "stworzyliśmy dla klientów"]}
            />

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
              {pergolaGallery.map((img, i) => (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="group relative h-[300px] overflow-hidden sm:h-[380px] lg:h-[464px]">
                    <Image
                      src={img}
                      alt={`Pergola realizacja ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* About section */}
      <AnimateOnScroll>
        <BrandsSection />
      </AnimateOnScroll>

      <Footer />
    </>
  );
}
