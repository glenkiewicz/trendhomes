"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { productCategories } from "../lib/products-data";

const menuItems = [
	{ label: "Produkty", href: "/produkty/okna", hasDropdown: true },
	{ label: "Rozwiązania dla Ciebie", href: "/rozwiazania-dla-ciebie" },
	{
		label: "Stolarka dla biznesu",
		href: "/stolarka-dla-biznesu",
		bold: true,
	},
	{ label: "Realizacje", href: "/realizacje" },
	{ label: "Strefa wiedzy", href: "/blog" },
	{ label: "Opinie", href: "/opinie" },
	{ label: "O nas", href: "/o-nas" },
	{ label: "Kontakt", href: "/kontakt" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);

	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node)
			) {
				setDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClick);
		return () => document.removeEventListener("mousedown", handleClick);
	}, []);

	const handleDropdownEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setDropdownOpen(true);
	};

	const handleDropdownLeave = () => {
		timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
	};

	return (
		<nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
			<div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 md:px-6 md:py-4">
				<Link href="/" className="shrink-0">
					<Image
						src="/images/logo.svg"
						alt="Trendhomes"
						width={125}
						height={82}
						className="h-[50px] w-auto md:h-[70px]"
					/>
				</Link>

				{/* Desktop menu */}
				<div className="hidden items-center gap-5 text-base text-dark lg:flex">
					{menuItems.map((item) =>
						item.hasDropdown ? (
							<div
								key={item.label}
								ref={dropdownRef}
								className="relative"
								onMouseEnter={handleDropdownEnter}
								onMouseLeave={handleDropdownLeave}
							>
								<button
									className="flex items-center gap-1 whitespace-nowrap transition-colors hover:text-pink"
									onClick={() => setDropdownOpen((v) => !v)}
								>
									{item.label}
									<svg
										width="10"
										height="10"
										viewBox="0 0 10 10"
										fill="none"
										className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
									>
										<path
											d="M2 4L5 7L8 4"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
									</svg>
								</button>

								{/* Mega-menu dropdown */}
								<div
									className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
										dropdownOpen
											? "visible translate-y-0 opacity-100"
											: "invisible -translate-y-1 opacity-0"
									}`}
								>
									<div className="flex gap-0 border border-gray-100 bg-white shadow-lg shadow-dark/5">
										{productCategories.map((group) => (
											<div
												key={group.group}
												className="min-w-[240px] border-r border-gray-100 py-4 last:border-r-0"
											>
												<span className="block px-6 pb-3 text-xs font-semibold uppercase tracking-wider text-dark/40">
													{group.group}
												</span>
												{group.items.map((product) => (
													<Link
														key={product.name}
														href={product.href}
														onClick={() =>
															setDropdownOpen(
																false,
															)
														}
														className="flex items-center gap-3 px-6 py-2.5 text-[15px] text-dark transition-colors hover:bg-section-light hover:text-pink"
													>
														<Image
															src={product.image}
															alt={product.name}
															width={28}
															height={28}
															className="size-7 object-contain"
														/>
														{product.name}
													</Link>
												))}
											</div>
										))}
									</div>
								</div>
							</div>
						) : (
							<Link
								key={item.label}
								href={item.href}
								className={`whitespace-nowrap transition-colors hover:text-pink ${
									item.bold ? "font-semibold" : "font-normal"
								}`}
							>
								{item.label}
							</Link>
						),
					)}
				</div>

				<Link
					href="/kontakt"
					className="btn-pink hidden shrink-0 px-6 py-3 text-sm font-normal md:block md:px-10 md:py-3.5 md:text-base"
				>
					Umów pomiar
				</Link>

				{/* Mobile hamburger */}
				<button
					onClick={() => setOpen(!open)}
					className="relative z-[60] flex size-10 flex-col items-center justify-center gap-1.5 lg:hidden"
					aria-label="Menu"
				>
					<span
						className={`block h-0.5 w-6 transition-all duration-300 ${
							open
								? "translate-y-2 rotate-45 bg-white"
								: "bg-dark"
						}`}
					/>
					<span
						className={`block h-0.5 w-6 transition-all duration-300 ${
							open ? "scale-x-0 opacity-0 bg-white" : "bg-dark"
						}`}
					/>
					<span
						className={`block h-0.5 w-6 transition-all duration-300 ${
							open
								? "-translate-y-2 -rotate-45 bg-white"
								: "bg-dark"
						}`}
					/>
				</button>
			</div>

			{/* Mobile menu — fullscreen overlay */}
			<div
				className={`fixed inset-0 z-50 flex flex-col bg-dark transition-all duration-500 ease-in-out lg:hidden ${
					open ? "visible opacity-100" : "invisible opacity-0"
				}`}
			>
				{/* Top area with logo */}
				<div className="flex items-center px-4 py-3 md:px-6 md:py-4">
					<Link
						href="/"
						onClick={() => setOpen(false)}
						className="shrink-0"
					>
						<Image
							src="/images/logo.svg"
							alt="Trendhomes"
							width={125}
							height={82}
							className="h-[50px] w-auto brightness-0 invert"
						/>
					</Link>
				</div>

				{/* Menu items */}
				<div className="flex flex-1 flex-col justify-center overflow-y-auto px-8 md:px-12">
					{menuItems.map((item, i) =>
						item.hasDropdown ? (
							<div key={item.label}>
								<button
									onClick={() =>
										setMobileProductsOpen((v) => !v)
									}
									className={`flex w-full items-center justify-between border-b border-white/10 py-4 text-2xl text-white hover:pl-2 hover:text-pink sm:text-3xl md:py-5 md:text-4xl ${
										item.bold
											? "font-semibold"
											: "font-light"
									}`}
									style={{
										transitionProperty:
											"opacity, transform, color, padding-left",
										transitionDuration: "300ms",
										transitionTimingFunction: "ease-out",
										transitionDelay: open
											? `${i * 50}ms`
											: "0ms",
										opacity: open ? 1 : 0,
										transform: open
											? "translateX(0)"
											: "translateX(-20px)",
									}}
								>
									{item.label}
									<svg
										width="14"
										height="14"
										viewBox="0 0 14 14"
										fill="none"
										className={`shrink-0 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
									>
										<path
											d="M3 5L7 9L11 5"
											stroke="currentColor"
											strokeWidth="1.5"
										/>
									</svg>
								</button>

								{/* Mobile product sub-links grouped */}
								<div
									className={`grid transition-all duration-300 ${
										mobileProductsOpen
											? "grid-rows-[1fr] opacity-100"
											: "grid-rows-[0fr] opacity-0"
									}`}
								>
									<div className="overflow-hidden">
										<div className="flex flex-col border-b border-white/10 py-2">
											{productCategories.map((group) => (
												<div key={group.group}>
													<span className="block px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-white/30">
														{group.group}
													</span>
													{group.items.map(
														(product) => (
															<Link
																key={
																	product.name
																}
																href={
																	product.href
																}
																onClick={() =>
																	setOpen(
																		false,
																	)
																}
																className="py-2 pl-4 text-lg text-white/70 transition-colors hover:pl-6 hover:text-pink sm:text-xl md:text-2xl block"
															>
																{product.name}
															</Link>
														),
													)}
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						) : (
							<Link
								key={item.label}
								href={item.href}
								onClick={() => setOpen(false)}
								className={`border-b border-white/10 py-4 text-2xl text-white hover:pl-2 hover:text-pink sm:text-3xl md:py-5 md:text-4xl ${
									item.bold ? "font-semibold" : "font-light"
								}`}
								style={{
									transitionProperty:
										"opacity, transform, color, padding-left",
									transitionDuration: "300ms",
									transitionTimingFunction: "ease-out",
									transitionDelay: open
										? `${i * 50}ms`
										: "0ms",
									opacity: open ? 1 : 0,
									transform: open
										? "translateX(0)"
										: "translateX(-20px)",
								}}
							>
								{item.label}
							</Link>
						),
					)}
				</div>

				{/* Bottom CTA + contact info */}
				<div
					className="px-8 pb-8 md:px-12 md:pb-12"
					style={{
						transitionProperty: "opacity, transform",
						transitionDuration: "500ms",
						transitionTimingFunction: "ease-out",
						transitionDelay: open ? "400ms" : "0ms",
						opacity: open ? 1 : 0,
						transform: open ? "translateY(0)" : "translateY(20px)",
					}}
				>
					<Link
						href="/kontakt"
						onClick={() => setOpen(false)}
						className="mb-6 inline-flex h-[52px] w-full items-center justify-center bg-pink text-base text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-12"
					>
						Umów pomiar
					</Link>
					<div className="flex flex-col gap-1 text-sm text-white/50 sm:flex-row sm:gap-6">
						<span>735 721 222</span>
						<span>kontakt@trendhomes.pl</span>
					</div>
				</div>
			</div>
		</nav>
	);
}
