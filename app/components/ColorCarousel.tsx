"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, useRef } from "react";
import type { ColorSwatch } from "../lib/product-systems";

const GAP = 12;

export default function ColorCarousel({ colors }: { colors: ColorSwatch[] }) {
	const [current, setCurrent] = useState(0);
	const trackRef = useRef<HTMLDivElement>(null);
	const [itemWidth, setItemWidth] = useState(0);
	const [visibleCount, setVisibleCount] = useState(8);

	const maxIndex = Math.max(0, colors.length - visibleCount);

	const measure = useCallback(() => {
		if (!trackRef.current) return;
		const container = trackRef.current.parentElement;
		if (!container) return;
		const w = container.clientWidth;
		let cols = 10;
		if (w < 480) cols = 5;
		else if (w < 640) cols = 6;
		else if (w < 768) cols = 7;
		else if (w < 1024) cols = 8;
		setVisibleCount(cols);
		setItemWidth((w - GAP * (cols - 1)) / cols);
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
		setCurrent((c) => {
			const step = Math.max(1, Math.floor(visibleCount / 2));
			return Math.max(0, c - step);
		});
	}, [visibleCount]);

	const next = useCallback(() => {
		setCurrent((c) => {
			const step = Math.max(1, Math.floor(visibleCount / 2));
			return Math.min(maxIndex, c + step);
		});
	}, [maxIndex, visibleCount]);

	return (
		<div>
			<div className="flex items-center justify-between">
				<p className="text-sm font-semibold text-dark/50 uppercase tracking-wide">
					{colors.length} kolorów
				</p>
				{maxIndex > 0 && (
					<div className="flex items-center gap-3">
						<button
							onClick={prev}
							aria-label="Poprzedni"
							disabled={current === 0}
							className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5 disabled:opacity-30 disabled:hover:border-dark/20 disabled:hover:bg-transparent"
						>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" />
							</svg>
						</button>
						<button
							onClick={next}
							aria-label="Następny"
							disabled={current >= maxIndex}
							className="flex size-[30px] items-center justify-center border border-dark/20 transition-colors hover:border-dark hover:bg-dark/5 disabled:opacity-30 disabled:hover:border-dark/20 disabled:hover:bg-transparent"
						>
							<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
								<path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" />
							</svg>
						</button>
					</div>
				)}
			</div>

			<div className="mt-4 overflow-hidden md:mt-6">
				<div
					ref={trackRef}
					className="flex transition-transform duration-500 ease-in-out"
					style={{
						gap: `${GAP}px`,
						transform: `translateX(-${current * (itemWidth + GAP)}px)`,
					}}
				>
					{colors.map((color) => (
						<div
							key={color.code}
							className="group flex shrink-0 flex-col items-center"
							style={{ width: itemWidth > 0 ? `${itemWidth}px` : "100%" }}
						>
							<div className="relative aspect-square w-full overflow-hidden border border-dark/10 transition-shadow duration-200 group-hover:shadow-md">
								<Image
									src={color.image}
									alt={color.code}
									fill
									sizes="120px"
									className="object-cover"
								/>
							</div>
							<span className="mt-1.5 text-center text-[10px] leading-tight text-dark/60 md:text-xs">
								{color.code}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
