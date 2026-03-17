import Image from "next/image";
import Link from "next/link";
import { MOCKUP_DATA } from "../lib/mockup-data";

const g = MOCKUP_DATA.global;
const f = MOCKUP_DATA.footer;

export default function Footer() {
	return (
		<footer
			className="relative overflow-hidden"
			style={{
				background:
					"linear-gradient(90deg, #d32360 0%, #e8574a 50%, #f0a030 100%)",
			}}
		>
			<div className="relative z-10 mx-auto max-w-[1440px] px-3 pb-0 pt-10 md:px-5 md:pt-20">
				{/* Main grid — 4 columns on desktop */}
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
					{/* Column 1: Logo + description */}
					<div>
						<Image
							src="/images/logo-white.png"
							alt={g.companyName}
							width={443}
							height={70}
							className="h-auto w-[200px] md:w-[260px]"
						/>
						<div className="mt-6 space-y-4 text-sm leading-relaxed text-white md:text-base">
							{f.description.map((text, i) => (
								<p key={i}>{text}</p>
							))}
						</div>
					</div>

					{/* Column 2: Produkty */}
					<div>
						<h3 className="text-lg font-bold tracking-tight text-white">
							{f.columns.produkty.heading}
						</h3>
						<ul className="mt-4 space-y-2 md:mt-6">
							{f.columns.produkty.links.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-sm text-light transition-colors hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 3: Przydatne linki */}
					<div>
						<h3 className="text-lg font-bold tracking-tight text-white">
							{f.columns.przydatneLinki.heading}
						</h3>
						<ul className="mt-4 space-y-2 md:mt-6">
							{f.columns.przydatneLinki.links.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-sm text-light transition-colors hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 4: Trendhomes contact */}
					<div>
						<h3 className="text-lg font-bold tracking-tight text-white">
							{g.companyName}
						</h3>
						<div className="mt-4 space-y-1 text-sm leading-relaxed text-light md:mt-6">
							<p>{g.address.street}, {g.address.city}</p>
							<p>E-mail: {g.branches.sanok.email}</p>
							<p>Telefon: {g.branches.sanok.phone}</p>
						</div>
						<div className="mt-4 space-y-1 text-sm leading-relaxed text-light">
							<p>{g.branches.rzeszow.label}</p>
							<p>E-mail: {g.branches.rzeszow.email}</p>
							<p>Telefon: {g.branches.rzeszow.phone} </p>
						</div>
						<div className="mt-4 space-y-1 text-sm leading-relaxed text-light">
							<p>NIP {g.legal.nip}</p>
							<p>REGON {g.legal.regon}</p>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-10 flex flex-col gap-3 border-t border-white/20 py-5 sm:flex-row sm:items-center sm:justify-between md:mt-16">
					<p className="text-sm text-light md:text-base">
						{f.bottomBar.legal}
					</p>
					<p className="text-sm text-light md:text-base">
						{f.bottomBar.copyright}
					</p>
				</div>
			</div>

			{/* Realizacja bar */}
			<div className="relative z-10 bg-dark/50 py-2">
				<div className="mx-auto max-w-[1440px] px-3 text-center sm:text-right md:px-5">
					<p className="text-sm text-dark md:text-sm">
						Projekt: Koala Marketing | Realizacja:{" "}
						<a href="mailto:grzegorz.lenkiewicz@gmail.com">GL</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
