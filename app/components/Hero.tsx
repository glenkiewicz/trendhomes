"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const slides = [
	{
		image: "/images/hero-bg.webp",
		title: (
			<>
				Okna, drzwi i rolety
				<br />
				z montażem.
				<br />W Bieszczadach.
			</>
		),
		description:
			"Projektujemy, dostarczamy i montujemy stolarkę okienną oraz drzwiową dla nowych domów, remontów i lokali usługowych. Otrzymujesz kompletny pakiet: okna, rolety zewnętrzne, drzwi i bramę garażową z jednym terminem montażu i lokalnym serwisem.",
	},
	{
		image: "/images/hero-bg-2.webp",
		title: (
			<>
				Zadbaj o przyszłość już teraz! Dołącz do programu Czyste
				Powietrze
			</>
		),
		description:
			"Skorzystaj z dofinansowania na wymianę okien i drzwi. Pomagamy przejść przez cały proces – od wniosku po montaż. Sprawdź, ile możesz zaoszczędzić.",
	},
	{
		image: "/images/hero-bg-3.webp",
		title: (
			<>
				Trendhomes dla biznesu
				<br className="hidden md:block" /> Stolarka dopasowana do
				potrzeb inwestycyjnych
			</>
		),
		description:
			"Trwałe okna i drzwi dla lokali usługowych, biur i obiektów komercyjnych. Zgodność z normami ppoż., terminowość i pełna dokumentacja odbiorcza.",
	},
];

const NAV_TOTAL = 3;
const AUTO_PLAY_MS = 10000;

const bottomTabs = [
	"Buduję nowy dom",
	"Remontuję mieszkanie",
	"Trendhomes dla biznesu",
];

export default function Hero() {
	const [current, setCurrent] = useState(0);

	const goTo = useCallback((index: number) => {
		setCurrent(index);
	}, []);

	const goNext = useCallback(() => {
		setCurrent((prev) => (prev + 1) % slides.length);
	}, []);

	useEffect(() => {
		const timer = setInterval(goNext, AUTO_PLAY_MS);
		return () => clearInterval(timer);
	}, [goNext]);

	return (
		<section className="relative h-[480px] w-full overflow-hidden sm:h-[560px] md:h-[650px] lg:h-[714px]">
			{/* Slide backgrounds */}
			{slides.map((slide, i) => (
				<div
					key={i}
					className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
						i === current ? "z-10 opacity-100" : "z-0 opacity-0"
					}`}
				>
					<Image
						src={slide.image}
						alt=""
						fill
						sizes="100vw"
						className="object-cover"
						priority={i === 0}
						loading={i === 0 ? "eager" : "lazy"}
						{...(i === 0 ? { unoptimized: true } : {})}
					/>
				</div>
			))}

			{/* Gradient overlay */}
			<div
				className="absolute inset-0 z-20"
				style={{
					background:
						"linear-gradient(90deg, rgba(27,27,27,0.78) 10%, rgba(27,27,27,0.62) 40%, rgba(107,101,98,0.24) 75%, rgba(255,240,229,0) 100%)",
				}}
			/>

			{/* Content */}
			<div className="relative z-30 mx-auto flex h-full max-w-[1440px] items-center px-4 md:px-6">
				<div className="flex max-w-full flex-col gap-4 py-8 pr-12 sm:gap-5 sm:p-8 md:max-w-[620px] md:gap-6 md:p-10 lg:max-w-[726px]">
					{slides.map((slide, i) => (
						<div
							key={i}
							className={`flex flex-col gap-4 sm:gap-5 md:gap-6 ${
								i === current
									? "visible relative"
									: "invisible absolute"
							}`}
						>
							<h1
								className={`text-[28px] font-semibold leading-[1.15] text-white transition-opacity duration-500 sm:text-[36px] md:text-[44px] lg:text-[52px] ${
									i === current
										? "opacity-100"
										: "opacity-0"
								}`}
							>
								{slide.title}
							</h1>
							<p
								className={`max-w-[552px] text-sm leading-relaxed text-white transition-opacity delay-100 duration-500 sm:text-base md:text-lg lg:text-xl ${
									i === current
										? "opacity-100"
										: "opacity-0"
								}`}
							>
								{slide.description}
							</p>
							<div
								className={`flex flex-col items-start gap-3 transition-opacity delay-200 duration-500 sm:flex-row sm:items-center sm:gap-6 ${
									i === current
										? "opacity-100"
										: "opacity-0"
								}`}
							>
								<Link
									href="#kontakt"
									className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-10 sm:text-base"
								>
									Umów pomiar w 48 h
								</Link>
								<Link
									href="#wycena"
									className="btn-light h-11 px-6 text-sm sm:h-[52px] sm:px-10 sm:text-base"
								>
									Wycena online
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* Vertical slide navigation */}
				<div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 py-4 md:right-8 md:gap-4 md:py-6 lg:right-12">
					<span className="text-sm font-bold text-dark md:text-xl">
						1
					</span>
					{Array.from({ length: NAV_TOTAL }).map((_, i) => (
						<button
							key={i}
							onClick={() => {
								if (i < slides.length) goTo(i);
							}}
							aria-label={`Slajd ${i + 1}`}
							className="flex cursor-pointer items-center justify-center"
						>
							<span
								className={`block w-0.5 rounded-full transition-all duration-300 md:w-[3px] ${
									i === current
										? "h-10 bg-dark md:h-16"
										: "h-5 bg-dark/30 hover:bg-dark/50 md:h-8"
								}`}
							/>
						</button>
					))}
					<span className="text-sm font-bold text-dark md:text-xl">
						{NAV_TOTAL}
					</span>
				</div>
			</div>

			{/* Bottom tabs */}
			<div className="absolute bottom-0 left-0 right-0 z-30 flex items-stretch justify-center overflow-x-auto">
				{bottomTabs.map((label, i) => (
					<div key={i} className="flex shrink-0 items-center">
						{i > 0 && (
							<div className="mx-0 hidden h-[40px] w-px rotate-[24deg] bg-white/40 sm:block" />
						)}
						<button
							onClick={() => goTo(i)}
							className={`px-4 py-3 text-center text-sm font-bold text-white transition-opacity sm:px-6 sm:py-4 sm:text-base md:px-10 md:text-lg ${
								i === current
									? "opacity-100"
									: "opacity-60 hover:opacity-80"
							}`}
						>
							{label}
						</button>
					</div>
				))}
			</div>
		</section>
	);
}
