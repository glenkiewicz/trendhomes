"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";

const solutions = [
	{
		title: "Buduję nowy dom",
		description:
			"Szukasz kompletnego pakietu okna + rolety zewnętrzne + drzwi z jednym terminem montażu przed przeprowadzką.",
		image: "/images/card-new-home.jpg",
	},
	{
		title: "Remontuję mieszkanie",
		description:
			"Potrzebujesz cichej, szybkiej i czystej wymiany okien i drzwi bez konfliktu z sąsiadami i problemów we wspólnocie.",
		image: "/images/card-renovation.jpg",
	},
	{
		title: "Trendhomes\ndla biznesu",
		description:
			"Trwała stolarka do lokalu, zgodna z przepisami ppoż. i odbiorem technicznym oraz z pewnym terminem wykonania.",
		image: "/images/card-business.jpg",
	},
	{
		title: "Dom z ogrodem (Pergola / Ogród zimowy)",
		description:
			"Wygodna strefa wypoczynku z dopasowaną konstrukcją, podłożem i odwodnieniem, która będzie estetyczna i komfortowa przez cały sezon.",
		image: "/images/card-new-home.jpg",
	},
	{
		title: "Remontuję dom jednorodzinny",
		description:
			"Wymiana okien, drzwi i bramy w zamieszkałym domu przeprowadzona przez jednego, sprawdzonego wykonawcę.",
		image: "/images/card-renovation.jpg",
	},
];

// gap in px matching lg:gap-8 (32px), fallback gap-6 (24px)
const GAP_LG = 32;
const GAP_SM = 24;

export default function SolutionsSection() {
	const [current, setCurrent] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);
	const [itemWidth, setItemWidth] = useState(0);
	const [gap, setGap] = useState(GAP_LG);
	const [visibleCount, setVisibleCount] = useState(3);

	const maxIndex = Math.max(0, solutions.length - visibleCount);

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
		measure();
		window.addEventListener("resize", measure);
		return () => window.removeEventListener("resize", measure);
	}, [measure]);

	// clamp current if resize reduces maxIndex
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
		<section id="rozwiazania" className="bg-white py-12 md:py-20">
			<div className="mx-auto max-w-[1440px] px-4 md:px-6">
				<div className="flex items-center justify-between">
					<SectionHeading
						lines={["Rozwiązania dopasowane", "do Twoich potrzeb"]}
					/>
					<div className="flex items-center gap-3">
						<button
							onClick={prev}
							aria-label="Poprzedni"
							className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5"
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
							aria-label="Następny"
							className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5"
						>
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
							>
								<path
									d="M5 3L9 7L5 11"
									stroke="currentColor"
									strokeWidth="1.5"
								/>
							</svg>
						</button>
					</div>
				</div>

				{/* Slider */}
				<div className="mt-6 overflow-hidden md:mt-10">
					<div
						ref={trackRef}
						className="flex transition-transform duration-500 ease-in-out"
						style={{
							gap: `${gap}px`,
							transform: `translateX(-${current * (itemWidth + gap)}px)`,
						}}
					>
						{solutions.map((solution, i) => (
							<div
								key={i}
								className="group flex shrink-0 cursor-pointer flex-col overflow-hidden bg-card transition-shadow duration-300 hover:shadow-lg hover:shadow-dark/10"
								style={{
									width:
										itemWidth > 0
											? `${itemWidth}px`
											: "100%",
								}}
							>
								<div className="flex-1 p-6 pb-0 md:p-10 md:pb-0">
									<h3 className="whitespace-pre-line text-[28px] font-bold leading-tight text-dark md:text-[32px] lg:text-[40px]">
										{solution.title}
									</h3>
									<p className="mt-4 text-base leading-relaxed text-dark md:mt-6 md:text-lg">
										{solution.description}
									</p>
								</div>
								<div className="relative mt-6 h-[160px] w-full shrink-0 overflow-hidden md:h-[180px]">
									<Image
										src={solution.image}
										alt={solution.title}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>
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
