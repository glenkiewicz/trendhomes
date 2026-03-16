import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function BrandsSection() {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div className="grid grid-cols-1 gap-10 md:gap-16 lg:grid-cols-2">
          {/* Left — text */}
          <div>
            <SectionHeading
              lines={["O Trendhomes:", "ludzie i lokalność"]}
            />

            <p className="mt-6 text-sm leading-relaxed text-dark md:text-lg">
              Trendhomes to lokalna firma z Sanoka, która od lat pomaga
              właścicielom domów, mieszkań i lokali usługowych dobrze
              zaplanować i bezpiecznie zamontować stolarkę okienną, drzwiową,
              rolety, bramy oraz pergole. Łączymy doradztwo na miejscu
              inwestycji, solidny montaż i opiekę po zakończeniu prac.
            </p>

            <p className="mt-6 text-sm leading-relaxed text-dark md:text-lg">
              Pracujemy głównie w Sanoku, Bieszczadach i najbliższej okolicy.
              Dzięki temu znamy specyfikę lokalnych inwestycji – od domów
              jednorodzinnych, przez mieszkania w blokach, po małe i większe
              lokale usługowe. Współpracujemy zarówno z osobami prywatnymi,
              jak i przedsiębiorcami, dla których kluczowe są terminy,
              porządek na budowie i wsparcie przy formalnościach.
            </p>

            <a
              href="#kontakt"
              className="btn-pink mt-8 h-12 px-[34px] text-sm"
            >
              Poznaj nasz zespół
            </a>
          </div>

          {/* Right — image */}
          <div className="relative h-[300px] overflow-hidden sm:h-[400px] lg:h-[634px]">
            <Image
              src="/images/about-team.jpg"
              alt="Zespół Trendhomes w salonie w Sanoku"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
