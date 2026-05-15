"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import SectionHeading from "./SectionHeading";
import { MOCKUP_DATA } from "../lib/mockup-data";

const d = MOCKUP_DATA.home.reviews;
const reviews = d.items;

const GAP_LG = 32;
const GAP_SM = 24;

const GOOGLE_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#34A853", "#FF6D01", "#46BDC6"];

function getInitials(name: string) {
	return name
		.split(" ")
		.map((w) => w[0])
		.join("")
		.toUpperCase()
		.slice(0, 2);
}

function getColor(name: string) {
	let hash = 0;
	for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
	return GOOGLE_COLORS[Math.abs(hash) % GOOGLE_COLORS.length];
}

function Stars({ rating }: { rating: number }) {
	return (
		<div className="flex gap-0.5">
			{Array.from({ length: 5 }).map((_, i) => (
				<svg
					key={i}
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill={i < rating ? "#FBBC05" : "#E0E0E0"}
				>
					<path d="M9 1l2.22 5L16.2 6.55l-3.6 3.67.9 5.35L9 13.1l-4.5 2.47.9-5.35-3.6-3.67L7.78 6 9 1z" />
				</svg>
			))}
		</div>
	);
}

function GoogleIcon() {
	return (
		<svg width="20" height="20" viewBox="0 0 48 48">
			<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
			<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
			<path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 019.5 24c0-1.59.28-3.14.76-4.59l-7.98-6.19A23.99 23.99 0 000 24c0 3.77.9 7.35 2.56 10.53l7.97-5.94z"/>
			<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 5.94C6.51 42.62 14.62 48 24 48z"/>
		</svg>
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
		<section id="opinie" className="bg-white py-10 md:py-20">
			<div className="mx-auto max-w-[1440px] px-3 md:px-5">
				{/* Header with nav */}
				<div className="flex items-start justify-between">
					<SectionHeading lines={[...d.heading]} />
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
				<p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6 md:text-xl">
					{d.subtitle}
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
								className="flex shrink-0 flex-col gap-4 border border-dark/20 p-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-dark/10 md:p-8"
								style={{
									width:
										itemWidth > 0
											? `${itemWidth}px`
											: "100%",
								}}
							>
								{/* Avatar + name + Google icon */}
								<div className="flex items-center justify-between">
									<div className="flex items-center gap-3">
										<div
											className="flex size-[40px] shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
											style={{ backgroundColor: getColor(review.name) }}
										>
											{getInitials(review.name)}
										</div>
										<div>
											<span className="text-base font-bold text-dark md:text-lg">
												{review.name}
											</span>
											<p className="text-xs text-dark/50">
												{review.date}
											</p>
										</div>
									</div>
									<GoogleIcon />
								</div>

								{/* Stars */}
								<Stars rating={review.rating} />

								{/* Review text */}
								<p className="flex-1 text-sm leading-relaxed text-dark md:text-base">
									{review.text}
								</p>
							</div>
						))}
					</div>
				</div>

				{/* Pagination dots + Google link */}
				<div className="mt-8 flex flex-col items-center gap-6 md:mt-12">
					{totalDots > 1 && (
						<div className="flex items-center gap-3">
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
					<a
						href={d.googleMapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm font-medium text-dark/70 transition-colors hover:text-dark"
					>
						<GoogleIcon />
						Zobacz wszystkie opinie w Google
					</a>
				</div>
			</div>
		</section>
	);
}
