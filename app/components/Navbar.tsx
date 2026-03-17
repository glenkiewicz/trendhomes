"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { productCategories } from "../lib/products-data";
import { MOCKUP_DATA } from "../lib/mockup-data";

const menuItems = MOCKUP_DATA.navigation.menuItems as readonly { label: string; href: string; hasDropdown?: boolean; bold?: boolean }[];

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
		if (!dropdownOpen) return;
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
	}, [dropdownOpen]);

	const handleDropdownEnter = () => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
		setDropdownOpen(true);
	};

	const handleDropdownLeave = () => {
		timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
	};

	return (
		<nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
			<div className="mx-auto flex max-w-[1440px] items-center justify-between px-3 py-2.5 md:px-5 md:py-3">
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
				<div className="hidden items-center gap-5 text-sm text-dark lg:flex">
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
									className={`absolute left-0 top-full z-50  pt-2.5 transition-all duration-200 ${
										dropdownOpen
											? "visible translate-y-0 opacity-100"
											: "invisible -translate-y-1 opacity-0"
									}`}
								>
									<div className="flex gap-0 border border-gray-100 bg-white shadow-lg shadow-dark/5">
										{productCategories.map((group) => (
											<div
												key={group.group}
												className="min-w-[240px] border-r border-gray-100 py-3 last:border-r-0"
											>
												<span className="block px-5 pb-2.5 text-xs font-semibold uppercase tracking-wider text-dark/40">
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
														className="flex items-center gap-3 px-5 py-2 text-[12px] text-dark transition-colors hover:bg-section-light hover:text-pink"
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
					className="btn-pink hidden shrink-0 px-5 py-2.5 text-sm font-normal md:block md:px-8 md:py-2.5.5 md:text-sm"
				>
					{MOCKUP_DATA.global.cta.umowPomiar}
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
				<div className="flex items-center px-3 py-2.5 md:px-5 md:py-3">
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
				<div className="flex flex-1 flex-col justify-center overflow-y-auto px-6 md:px-10">
					{menuItems.map((item, i) =>
						item.hasDropdown ? (
							<div key={item.label}>
								<button
									onClick={() =>
										setMobileProductsOpen((v) => !v)
									}
									className={`flex w-full items-center justify-between border-b border-white/10 py-2.5 text-base text-white hover:pl-2 hover:text-pink sm:text-lg md:py-3 md:text-xl ${
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
													<span className="block px-3 pb-1 pt-2.5 text-xs font-semibold uppercase tracking-wider text-white/30">
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
																className="py-1.5 pl-3 text-sm text-white/70 transition-colors hover:pl-5 hover:text-pink sm:text-base md:text-lg block"
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
								className={`border-b border-white/10 py-2.5 text-base text-white hover:pl-2 hover:text-pink sm:text-lg md:py-3 md:text-xl ${
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
					className="px-6 pb-6 md:px-10 md:pb-10"
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
						className="mb-6 inline-flex h-[52px] w-full items-center justify-center bg-pink text-sm text-white transition-opacity hover:opacity-90 sm:w-auto sm:px-10"
					>
						{MOCKUP_DATA.global.cta.umowPomiar}
					</Link>
					<div className="flex flex-col gap-1 text-sm text-white/50 sm:flex-row sm:gap-6">
						<span>{MOCKUP_DATA.global.phone}</span>
						<span>{MOCKUP_DATA.global.email}</span>
					</div>
				</div>
			</div>
		</nav>
	);
}
