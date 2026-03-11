"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

const steps = [
	{
		number: "1.",
		title: "Kontakt i wstępna rozmowa",
		description:
			"Daj nam znać, w jakiej jesteś sytuacji: nowy dom, remont mieszkania, lokal usługowy albo pergola przy domu. Podczas krótkiej rozmowy telefonicznej lub mailowej pytamy o podstawowe informacje, termin, zakres prac i budżet. Na tej podstawie umawiamy pomiar lub prosimy o przesłanie zdjęć i rzutów.",
	},
	{
		number: "2.",
		title: "Pomiar i doradztwo na miejscu",
		description:
			"Przyjeżdżamy na miejsce inwestycji w umówionym terminie. Wykonujemy dokładny pomiar okien, drzwi, bramy lub przestrzeni pod pergolę, a po drodze doradzamy rozwiązania dopasowane do projektu, przepisów i Twojego sposobu użytkowania. Na tym etapie omawiamy też wstępny harmonogram montażu i możliwości podziału prac.",
	},
	{
		number: "3.",
		title: "Oferta i podpisanie umowy",
		description:
			"Na podstawie pomiaru przygotowujemy szczegółową ofertę z rozpisaniem zakresu, materiałów i kosztów. Po akceptacji ustalamy konkretny termin montażu i zapisujemy go w umowie. Dzięki temu wiesz, kiedy ekipa wejdzie na budowę lub do mieszkania i możesz spokojnie zaplanować kolejne etapy prac.",
	},
	{
		number: "4.",
		title: "Produkcja i dostawa",
		description:
			"Uruchamiamy produkcję i na bieżąco informujemy o postępach. Stolarkę dowozimy we wskazane miejsce, pilnując, żeby nic się nie uszkodziło.",
	},
	{
		number: "5.",
		title: "Montaż i odbiór",
		description:
			"Stałe, przeszkolone ekipy montują stolarkę zgodnie z normami. Po montażu wspólnie sprawdzamy efekt pracy, pokazujemy obsługę i przekazujemy dokumenty.",
	},
];

const investments = [
	{
		icon: "/images/home-icon.svg",
		title: "Nowy dom",
		description:
			"Pilnujemy terminów powiązanych z zamknięciem stanu surowego, pracami wykończeniowymi i przeprowadzką. Ustalamy montaż tak, aby nie blokować innych ekip.",
	},
	{
		icon: "/images/floor-plan-icon.svg",
		title: "Remont mieszkania lub domu",
		description:
			"Planujemy prace tak, żeby dało się normalnie funkcjonować w zamieszkałym wnętrzu. Zabezpieczamy pomieszczenia, ograniczamy kurz i umawiamy montaż na konkretne dni.",
	},
	{
		icon: "/images/apartment-icon.svg",
		title: "Lokal usługowy",
		description:
			"Dobieramy stolarkę pod przepisy i odbiory, a montaż planujemy poza godzinami pracy lub w przerwie między sezonami, żeby ograniczyć przestój w biznesie.",
	},
];

const GAP_LG = 32;
const GAP_SM = 24;

export default function StepsSection() {
	const [current, setCurrent] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);
	const [itemWidth, setItemWidth] = useState(0);
	const [gap, setGap] = useState(GAP_LG);
	const [visibleCount, setVisibleCount] = useState(3);

	const maxIndex = Math.max(0, steps.length - visibleCount);

	const measure = useCallback(() => {
		if (!trackRef.current) return;
		const container = trackRef.current.parentElement;
		if (!container) return;
		const w = container.clientWidth;
		let cols = 2;
		let g = GAP_LG;
		if (w < 640) {
			cols = 1;
			g = GAP_SM;
		} else if (w < 1024) {
			cols = 2;
			g = GAP_SM;
		}
		setVisibleCount(cols);
		setGap(g);
		setItemWidth((w - g * (cols - 1)) / cols);
	}, []);

	useEffect(() => {
		measure();
		window.addEventListener("resize", measure);
		return () => window.removeEventListener("resize", measure);
	}, [measure]);

	useEffect(() => {
		if (current > maxIndex) setCurrent(maxIndex);
	}, [maxIndex, current]);

	const prev = useCallback(() => {
		setCurrent((c) => (c > 0 ? c - 1 : maxIndex));
	}, [maxIndex]);

	const next = useCallback(() => {
		setCurrent((c) => (c < maxIndex ? c + 1 : 0));
	}, [maxIndex]);

	const totalDots = maxIndex + 1;

	return (
		<section className="bg-white py-12 md:py-20">
			<div className="mx-auto max-w-[1440px] px-4 md:px-6">
				{/* Header with nav arrows */}
				<div className="flex items-start justify-between">
					<SectionHeading
						lines={["Współpraca dopasowana", "w każdym profilu"]}
					/>
					<div className="mt-6 flex items-center gap-3 md:mt-8">
						<button
							onClick={prev}
							aria-label="Poprzedni krok"
							className="flex size-[30px] items-center justify-center rounded-full border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5"
						>
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
							>
								<path
									d="M9 3L5 7L9 11"
									stroke="currentColor"
									strokeWidth="1.5"
								/>
							</svg>
						</button>
						<button
							onClick={next}
							aria-label="Następny krok"
							className="flex size-[30px] items-center justify-center rounded-full border border-pink transition-colors hover:bg-pink/5"
						>
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
							>
								<path
									d="M5 3L9 7L5 11"
									stroke="#d2245f"
									strokeWidth="1.5"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Subtitle */}
				<p className="mt-4 max-w-[867px] text-lg leading-relaxed text-dark md:mt-6 md:text-2xl">
					Niezależnie od tego, czy budujesz nowy dom, remontujesz
					mieszkanie, czy przygotowujesz lokal usługowy - proces
					zawsze trzymamy w ryzach. Dzięki temu wiesz, na jakim etapie
					jesteśmy i czego możesz się spodziewać.
				</p>

				{/* Steps carousel */}
				<div className="mt-8 overflow-hidden md:mt-12">
					<div
						ref={trackRef}
						className="flex transition-transform duration-500 ease-in-out"
						style={{
							gap: `${gap}px`,
							transform: `translateX(-${current * (itemWidth + gap)}px)`,
						}}
					>
						{steps.map((step, i) => (
							<div
								key={i}
								className="shrink-0"
								style={{
									width:
										itemWidth > 0
											? `${itemWidth}px`
											: "100%",
								}}
							>
								{/* Step number + title */}
								<div className="flex items-baseline gap-3">
									<span
										className="text-4xl font-black text-pink"
										style={{
											opacity:
												1 - i * 0.2 > 0.3
													? 1 - i * 0.2
													: 0.3,
										}}
									>
										{step.number}
									</span>
									<h3 className="text-2xl font-light text-dark md:text-[36px]">
										{step.title}
									</h3>
								</div>

								{/* Description */}
								<p className="mt-4 text-base leading-relaxed text-dark md:text-xl">
									{step.description}
								</p>

								{/* Bottom line */}
								<div className="mt-6 h-[3px] w-full bg-pink" />
							</div>
						))}
					</div>
				</div>

				{/* Pagination dots */}
				{totalDots > 1 && (
					<div className="mt-8 flex items-center justify-center gap-3 md:mt-12">
						{Array.from({ length: totalDots }).map((_, i) => (
							<button
								key={i}
								onClick={() => setCurrent(i)}
								aria-label={`Krok ${i + 1}`}
								className="flex h-6 items-center py-2"
							>
								<span
									className={`block h-[3px] rounded-full transition-all duration-300 ${
										i === current
											? "w-10 bg-pink"
											: "w-6 bg-dark/20 hover:bg-dark/40"
									}`}
								/>
							</button>
						))}
					</div>
				)}

				{/* "Różne inwestycje" sub-section */}
				<div className="mt-16 md:mt-24">
					<SectionHeading
						lines={["Różne inwestycje,", "ten sam doskonały efekt"]}
					/>

					<div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 lg:gap-12">
						{investments.map((item, i) => (
							<div key={i} className="flex flex-col">
								<div className="relative size-[100px]">
									<Image
										src={item.icon}
										alt={item.title}
										fill
										className="object-contain"
									/>
								</div>
								<h3 className="mt-6 text-2xl font-bold text-dark">
									{item.title}
								</h3>
								<p className="mt-3 text-base leading-relaxed text-dark md:text-xl">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
