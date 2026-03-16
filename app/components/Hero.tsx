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
			<div className="relative z-30 mx-auto flex h-full max-w-[1440px] items-center px-3 md:px-5">
				<div className="flex max-w-full flex-col gap-4 py-6 pr-10 sm:gap-5 sm:p-6 md:max-w-[620px] md:gap-6 md:p-8 lg:max-w-[726px]">
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
								className={`text-[22px] font-semibold leading-[1.15] text-white transition-opacity duration-500 sm:text-[29px] md:text-[35px] lg:text-[42px] ${
									i === current ? "opacity-100" : "opacity-0"
								}`}
							>
								{slide.title}
							</h1>
							<p
								className={`max-w-[552px] text-sm leading-relaxed text-white transition-opacity delay-100 duration-500 sm:text-sm md:text-base lg:text-lg ${
									i === current ? "opacity-100" : "opacity-0"
								}`}
							>
								{slide.description}
							</p>
							<div
								className={`flex flex-col items-start gap-3 transition-opacity delay-200 duration-500 sm:flex-row sm:items-center sm:gap-6 ${
									i === current ? "opacity-100" : "opacity-0"
								}`}
							>
								<Link
									href="#kontakt"
									className="btn-pink h-11 px-5 text-sm sm:h-[52px] sm:px-8 sm:text-sm"
								>
									Umów pomiar w 48 h
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* Vertical slide navigation */}
				<div className="absolute right-3 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3 py-4 sm:right-4 sm:gap-4 sm:py-5 md:right-8 lg:right-12">
					<span className="text-xs font-bold text-white sm:text-sm md:text-lg">
						1
					</span>
					{Array.from({ length: NAV_TOTAL }).map((_, i) => (
						<button
							key={i}
							onClick={() => {
								if (i < slides.length) goTo(i);
							}}
							aria-label={`Slajd ${i + 1}`}
							className="flex cursor-pointer items-center justify-center p-1"
						>
							<span
								className={`block rounded-full transition-all duration-300 ${
									i === current
										? "h-8 w-1 bg-pink sm:h-10 md:h-16 md:w-1.5"
										: "h-4 w-1 bg-white/40 hover:bg-white/70 sm:h-5 md:h-8 md:w-1.5"
								}`}
							/>
						</button>
					))}
					<span className="text-xs font-bold text-white sm:text-sm md:text-lg">
						{NAV_TOTAL}
					</span>
				</div>
			</div>

			{/* Bottom tabs */}
			<div className="absolute bottom-0 left-0 right-0 z-30 flex items-stretch justify-center">
				{bottomTabs.map((label, i) => (
					<div key={i} className="flex min-w-0 flex-1 items-center sm:flex-none">
						{i > 0 && (
							<div className="mx-0 hidden h-[40px] w-px rotate-[24deg] bg-white/40 sm:block" />
						)}
						<button
							onClick={() => goTo(i)}
							className={`w-full px-2 py-3 text-center text-[11px] font-bold leading-tight text-white transition-opacity sm:w-auto sm:px-5 sm:py-3 sm:text-sm md:px-8 md:text-base ${
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
