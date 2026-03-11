import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const benefits = [
	{
		title: "Termin i organizacja prac",
		description:
			"Ustalamy realny termin montażu i trzymamy się ustaleń, bo wiemy, że od tego zależy przeprowadzka, ekipa wykończeniowa albo otwarcie lokalu. Umawiamy konkretne dni prac i koordynujemy montaż tak, żeby nie blokować innych wykonawców.",
		image: "/images/why-1.jpg",
	},
	{
		title: "Gwarancja i serwis posprzedażowy",
		description:
			"Po montażu nie znikamy. Jeśli po czasie trzeba coś wyregulować, poprawić uszczelkę albo sprawdzić działanie rolet – możesz liczyć na nasz serwis. Pracujemy lokalnie, dlatego szybciej reagujemy na zgłoszenia i łatwiej dochować warunków gwarancji.",
		image: "/images/why-2.jpg",
	},
	{
		title: "Lokalna ekipa i nadzór",
		description:
			"Działamy w Sanoku i okolicach, dzięki czemu znamy specyfikę lokalnych inwestycji – od domów jednorodzinnych po lokale usługowe. Montaż realizują nasze stałe ekipy, a prace od początku do końca inwestycji nadzoruje dedykowany opiekun klienta.",
		image: "/images/why-3.jpg",
	},
	{
		title: "Bezpieczeństwo i normy prawne",
		description:
			"Przy lokalach usługowych i inwestycjach biznesowych zwracamy szczególną uwagę na wymagania ppoż. i odbiory techniczne. Dobieramy stolarkę tak, żeby spełniała normy, a dokumenty i parametry produktu były przygotowane do kontroli i odbioru.",
		image: "/images/why-4.jpg",
	},
	{
		title: "Porządek na budowie i przy remoncie",
		description:
			"Pracując w zamieszkałych domach zabezpieczamy pomieszczenia, ograniczamy kurz i zawsze sprzątamy po sobie. Zajmujemy się również wyniesieniem starych okien i drzwi, żeby nie zostawiać Ci dodatkowego problemu do rozwiązania.",
		image: "/images/why-5.jpg",
	},
];

export default function WhySection() {
	return (
		<section className="bg-white py-12 md:py-20">
			<div className="mx-auto max-w-[1440px] px-4 md:px-6">
				<SectionHeading
					lines={["Dlaczego warto", "wybrać Trendhomes"]}
				/>

				<p className="mt-4 max-w-[867px] text-lg leading-relaxed text-dark md:mt-6 md:text-2xl">
					Przy budowie nowego domu, remoncie mieszkania albo pracy nad
					lokalem usługowym liczy się coś więcej niż sama stolarka.
					Klienci wybierają nas, bo łączymy dobry produkt z terminami,
					porządkiem na budowie i lokalnym serwisem.
				</p>

				<div className="mt-10">
					{benefits.map((benefit, i) => {
						const textBlock = (
							<div
								className="flex flex-col gap-3 p-4 md:gap-6 md:p-6"
								key="text"
							>
								<h3 className="text-2xl font-light text-dark sm:text-3xl md:text-[36px]">
									{benefit.title}
								</h3>
								<p className="text-base leading-relaxed text-dark/80 md:text-xl">
									{benefit.description}
								</p>
							</div>
						);
						const imageBlock = (
							<div
								className="relative h-[200px] overflow-hidden md:h-[212px]"
								key="image"
							>
								<Image
									src={benefit.image}
									alt={benefit.title}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
									loading="lazy"
									className="object-cover"
								/>
							</div>
						);

						return (
							<AnimateOnScroll
								key={i}
								delay={i * 100}
								direction={i % 2 === 0 ? "left" : "right"}
							>
								<div className="grid grid-cols-1 border-t border-dark/10 md:grid-cols-2 items-center py-10">
									{/* On mobile: always text then image. On desktop: alternate */}
									<div className="md:hidden">
										{textBlock}
										{imageBlock}
									</div>
									<div className="hidden md:contents">
										{i % 2 === 0 ? (
											<>
												{textBlock}
												{imageBlock}
											</>
										) : (
											<>
												{imageBlock}
												{textBlock}
											</>
										)}
									</div>
								</div>
							</AnimateOnScroll>
						);
					})}
				</div>

				<div className="mt-8 flex justify-center md:mt-14">
					<Link
						href="#kontakt"
						className="btn-pink h-12 px-8 text-base md:px-10"
					>
						Skontaktuj się z Nami
					</Link>
				</div>
			</div>
		</section>
	);
}
