import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

export default function KontaktPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[620px]">
        <Image
          src="/images/kontakt-hero.jpg"
          alt="Skontaktuj się z Nami"
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
            <span className="text-white">kontakt</span>
          </nav>

          <h1 className="max-w-[660px] text-[22px] font-semibold leading-[1.15] text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
            Skontaktuj się
            <br />
            z Nami
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-sm md:mt-6 md:text-lg">
            Chcesz porozmawiać o oknach, drzwiach, roletach, bramie albo
            pergoli w okolicach Sanoka? Napisz, zadzwoń albo umów pomiar.
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

      {/* Jak możemy Ci pomóc */}
      <AnimateOnScroll>
        <section className="bg-white py-10 md:py-20">
          <div className="mx-auto max-w-[1440px] px-3 md:px-5">
            <SectionHeading lines={["Jak możemy", "Ci pomóc"]} />
            <p className="mt-6 text-sm leading-relaxed text-dark md:text-xl">
              Najczęściej zaczynamy od krótkiej rozmowy i kilku podstawowych
              informacji o inwestycji. Na tej podstawie możemy wstępnie doradzić
              rozwiązania i zaproponować dalsze kroki: wycenę na podstawie
              projektu albo umówienie pomiaru na miejscu.
            </p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Contact form section */}
      <AnimateOnScroll>
        <ContactSection />
      </AnimateOnScroll>

      <MapSection />
      <Footer />
    </>
  );
}
