import Image from "next/image";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import SectionHeading from "../components/SectionHeading";
import ReviewsSection from "../components/ReviewsSection";
import FaqSection from "../components/FaqSection";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";
import Footer from "../components/Footer";
import AnimateOnScroll from "../components/AnimateOnScroll";

const b2bTestimonials = [
  {
    image: "/images/opinie-b2b-1.jpg",
    text: "Nunc nunc molestie sit risus nec at ac tristique lectus. Adipiscing elementum commodo sit turpis. Ut sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.\n\nAliquet in ac sodales porttitor ornare id nibh rhoncus tempus. Eget ac hac nunc nec malesuada pretium feugiat euismod.\n\nUt sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.",
    name: "Jan Kowalski,",
    role: "prezes zarządu DevelopRes",
  },
  {
    image: "/images/opinie-b2b-2.jpg",
    text: "Nunc nunc molestie sit risus nec at ac tristique lectus. Adipiscing elementum commodo sit turpis. Ut sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.\n\nAliquet in ac sodales porttitor ornare id nibh rhoncus tempus. Eget ac hac nunc nec malesuada pretium feugiat euismod.\n\nUt sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.",
    name: "Jan Kowalski,",
    role: "prezes zarządu DevelopRes",
  },
  {
    image: "/images/opinie-b2b-3.jpg",
    text: "Nunc nunc molestie sit risus nec at ac tristique lectus. Adipiscing elementum commodo sit turpis. Ut sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.\n\nAliquet in ac sodales porttitor ornare id nibh rhoncus tempus. Eget ac hac nunc nec malesuada pretium feugiat euismod.\n\nUt sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.",
    name: "Jan Kowalski,",
    role: "prezes zarządu DevelopRes",
  },
];

export default function OpiniePage() {
  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[480px] md:h-[560px] lg:h-[714px]">
        <Image
          src="/images/opinie-hero.jpg"
          alt="Opinie klientów Trendhomes"
          fill
          sizes="100vw"
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
            <span className="text-white">opinie</span>
          </nav>

          <h1 className="max-w-[660px] text-[28px] font-semibold leading-[1.15] text-white sm:text-[36px] md:text-[44px] lg:text-[52px]">
            Opinie, które mówią
            <br />
            więcej niż 1000 słów
          </h1>
          <p className="mt-4 max-w-[552px] text-sm leading-relaxed text-white sm:text-base md:mt-6 md:text-xl">
            Zanim zaprosisz ekipę do domu, mieszkania albo lokalu, chcesz
            wiedzieć, jak poradziła sobie u innych. Tutaj znajdziesz opinie
            klientów Trendhomes z Sanoka i okolic.
          </p>
          <div className="mt-6 md:mt-8">
            <Link
              href="#kontakt"
              className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-10 sm:text-base"
            >
              Skontaktuj się z Nami
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews carousel */}
      <AnimateOnScroll>
        <ReviewsSection />
      </AnimateOnScroll>

      {/* B2B testimonials */}
      <AnimateOnScroll>
        <section className="bg-white py-12 md:py-20">
          <div className="mx-auto max-w-[1440px] px-4 md:px-6">
            <SectionHeading
              lines={["Tak o współpracy", "mówią klienci B2B"]}
            />

            <div className="mt-10 flex flex-col gap-12 md:mt-16 md:gap-16">
              {b2bTestimonials.map((item, i) => {
                const imageBlock = (
                  <div
                    key="img"
                    className="relative h-[260px] overflow-hidden sm:h-[320px] md:h-[389px]"
                  >
                    <Image
                      src={item.image}
                      alt={`${item.name} ${item.role}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                );

                const textBlock = (
                  <div key="text" className="flex gap-6 p-4 md:p-6">
                    <div className="hidden w-px shrink-0 bg-pink md:block" />
                    <div className="flex flex-col gap-6">
                      <p className="text-base leading-relaxed text-dark whitespace-pre-line md:text-xl">
                        {item.text}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="hidden h-px w-14 bg-pink md:block" />
                        <div>
                          <p className="text-lg font-bold text-dark md:text-2xl">
                            {item.name}
                          </p>
                          <p className="text-lg font-bold text-dark md:text-2xl">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );

                return (
                  <AnimateOnScroll
                    key={i}
                    delay={i * 100}
                    direction={i % 2 === 0 ? "left" : "right"}
                  >
                    <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-10">
                      {i % 2 === 0 ? (
                        <>
                          {imageBlock}
                          {textBlock}
                        </>
                      ) : (
                        <>
                          <div className="order-1 lg:order-2">{imageBlock}</div>
                          <div className="order-2 lg:order-1">{textBlock}</div>
                        </>
                      )}
                    </div>
                  </AnimateOnScroll>
                );
              })}
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
