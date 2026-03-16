"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

const reviews = [
	{
		avatar: "/images/avatar-ania.jpg",
		name: "Ania Hania",
		text: "Zamówiłam w TRENDHOMES rolety i okna do całego domu i wszystko przebiegło bezproblemowo. Produkty są solidne, estetyczne i idealnie dopasowane. Ekipa montażowa bardzo profesjonalna i punktualna. Zdecydowanie polecam tę firmę każdemu, kto ceni jakość i dobrą obsługę.",
		date: "2 miesiące temu",
		rating: 5,
	},
	{
		avatar: "/images/avatar-pawel.svg",
		name: "Paweł Okarma",
		text: "Jesteśmy bardzo zadowoleni z usługi wymiany okien! Cały proces przebiega zawsze sprawnie i bezproblemowo. Zespół pracuje profesjonalnie, dbając o czystość i minimalizując uciążliwości. Nowe okna prezentują się świetnie. Serdecznie polecam!",
		date: "4 miesiące temu",
		rating: 5,
	},
	{
		avatar: "/images/avatar-monika.jpg",
		name: "Monika Zych",
		text: "Współpraca na najwyższym poziomie! Szczerze polecam :) Gdybym mogła to dałabym dużo więcej gwiazdek. Z firmy Trendhomes mam okna, drzwi wejściowe, drzwi do kotłowni, rolety zewnętrzne i ozdobne do wewnątrz oraz panel winylowy. Jakość naprawdę świetna, moje oczekiwania zostały spełnione :) Dodatkowo super kontakt z Panem Mateuszem, montaż w ustalonym terminie realizacji.",
		date: "6 miesięcy temu",
		rating: 5,
	},
	{
		avatar: "/images/avatar-ania.jpg",
		name: "Ania Haniaeee",
		text: "Zamówiłam w TRENDHOMES rolety i okna do całego domu i wszystko przebiegło bezproblemowo. Produkty są solidne, estetyczne i idealnie dopasowane. Ekipa montażowa bardzo profesjonalna i punktualna. Zdecydowanie polecam tę firmę każdemu, kto ceni jakość i dobrą obsługę.",
		date: "2 miesiące temu",
		rating: 5,
	},
	{
		avatar: "/images/avatar-pawel.svg",
		name: "Paweł Okarmafrgrg",
		text: "Jesteśmy bardzo zadowoleni z usługi wymiany okien! Cały proces przebiega zawsze sprawnie i bezproblemowo. Zespół pracuje profesjonalnie, dbając o czystość i minimalizując uciążliwości. Nowe okna prezentują się świetnie. Serdecznie polecam!",
		date: "4 miesiące temu",
		rating: 5,
	},
	{
		avatar: "/images/avatar-monika.jpg",
		name: "Monika Zychgrgr ds",
		text: "Współpraca na najwyższym poziomie! Szczerze polecam :) Gdybym mogła to dałabym dużo więcej gwiazdek. Z firmy Trendhomes mam okna, drzwi wejściowe, drzwi do kotłowni, rolety zewnętrzne i ozdobne do wewnątrz oraz panel winylowy. Jakość naprawdę świetna, moje oczekiwania zostały spełnione :) Dodatkowo super kontakt z Panem Mateuszem, montaż w ustalonym terminie realizacji.",
		date: "6 miesięcy temu",
		rating: 5,
	},
];

const GAP_LG = 32;
const GAP_SM = 24;

function Stars() {
	return (
		<div className="flex gap-1">
			{Array.from({ length: 5 }).map((_, i) => (
				<svg
					key={i}
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="#f5a623"
				>
					<path d="M10 1l2.47 5.56L18 7.28l-4 4.08 1 5.94L10 14.56l-5 2.74 1-5.94-4-4.08 5.53-.72L10 1z" />
				</svg>
			))}
		</div>
	);
}

export default function ReviewsSection() {
	const [current, setCurrent] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);
	const [itemWidth, setItemWidth] = useState(0);
	const [gap, setGap] = useState(GAP_LG);
	const [visibleCount, setVisibleCount] = useState(3);

	const maxIndex = Math.max(0, reviews.length - visibleCount);

	const measure = useCallback(() => {
		if (!trackRef.current) return;
		const container = trackRef.current.parentElement;
		if (!container) return;
		const w = container.clientWidth;
		let cols = 3;
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
		const ric = typeof requestIdleCallback === "function"
			? requestIdleCallback : (cb: () => void) => setTimeout(cb, 1);
		const id = ric(measure);
		let timer: ReturnType<typeof setTimeout>;
		const onResize = () => {
			clearTimeout(timer);
			timer = setTimeout(measure, 150);
		};
		window.addEventListener("resize", onResize);
		return () => {
			clearTimeout(timer);
			window.removeEventListener("resize", onResize);
			if (typeof cancelIdleCallback === "function") cancelIdleCallback(id as number);
		};
	}, [measure]);

	useEffect(() => {
		if (current > maxIndex) setCurrent(maxIndex);
	}, [maxIndex, current]);

	// auto-scroll every 5 seconds
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent((c) => (c < maxIndex ? c + 1 : 0));
		}, 5000);
		return () => clearInterval(timer);
	}, [maxIndex]);

	const prev = useCallback(() => {
		setCurrent((c) => (c > 0 ? c - 1 : maxIndex));
	}, [maxIndex]);

	const next = useCallback(() => {
		setCurrent((c) => (c < maxIndex ? c + 1 : 0));
	}, [maxIndex]);

	const totalDots = maxIndex + 1;

	return (
		<section id="opinie" className="bg-white py-12 md:py-20">
			<div className="mx-auto max-w-[1440px] px-4 md:px-6">
				{/* Header with nav */}
				<div className="flex items-start justify-between">
					<SectionHeading lines={["Opinie naszych", "klientów"]} />
					<div className="mt-6 flex items-center gap-3 md:mt-8">
						<button
							onClick={prev}
							aria-label="Poprzednia opinia"
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
							aria-label="Następna opinia"
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
					Przy wyborze wykonawcy stolarki liczy się nie tylko oferta
					na papierze, ale też doświadczenia innych. Dlatego
					zachęcamy, żeby sprawdzić, co o współpracy z Trendhomes
					mówią klienci z Sanoka i okolic.
				</p>

				{/* Slider */}
				<div className="mt-8 overflow-hidden md:mt-12">
					<div
						ref={trackRef}
						className="flex transition-transform duration-500 ease-in-out"
						style={{
							gap: `${gap}px`,
							transform: `translate3d(-${current * (itemWidth + gap)}px, 0, 0)`, willChange: "transform",
						}}
					>
						{reviews.map((review, i) => (
							<div
								key={i}
								className="flex shrink-0 flex-col gap-4 border border-dark/20 p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-dark/10 md:p-10"
								style={{
									width:
										itemWidth > 0
											? `${itemWidth}px`
											: "100%",
								}}
							>
								{/* Avatar + name */}
								<div className="flex items-center gap-4">
									<div className="relative size-[46px] shrink-0 overflow-hidden rounded-full bg-dark/10">
										<Image
											src={review.avatar}
											alt={review.name}
											fill
											sizes="46px"
											className="object-cover"
										/>
									</div>
									<span className="text-xl font-bold text-dark md:text-2xl">
										{review.name}
									</span>
								</div>

								{/* Stars */}
								<Stars />

								{/* Review text */}
								<p className="flex-1 text-base leading-relaxed text-dark md:text-lg">
									{review.text}
								</p>

								{/* Date */}
								<span className="text-sm text-dark/50 md:text-base">
									{review.date}
								</span>
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
								aria-label={`Pozycja ${i + 1}`}
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
			</div>
		</section>
	);
}
