import Image from "next/image";
import Link from "next/link";

const productLinks = [
	{ label: "Okna", href: "/produkty/okna" },
	{ label: "Drzwi", href: "/produkty/drzwi" },
	{ label: "Rolety i osłony", href: "/produkty/rolety" },
	{ label: "Drzwi przesuwne", href: "/produkty/drzwi-tarasowe" },
	{ label: "Pergole i ogrody zimowe", href: "/produkty/pergole" },
	{ label: "Dodatki", href: "/produkty/okna" },
];

const usefulLinks = [
	{ label: "Rozwiązania dla domu", href: "/rozwiazania-dla-ciebie" },
	{ label: "O nas", href: "/o-nas" },
	{ label: "Realizacje", href: "/realizacje" },
	{ label: "Porady", href: "/blog" },
	{ label: "Dla biznesu", href: "/stolarka-dla-biznesu" },
	{ label: "Dokumenty do pobrania", href: "#" },
	{ label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
	return (
		<footer
			className="relative overflow-hidden"
			style={{
				background:
					"linear-gradient(90deg, #d32360 0%, #e8574a 50%, #f0a030 100%)",
			}}
		>
			<div className="relative z-10 mx-auto max-w-[1440px] px-4 pb-0 pt-12 md:px-6 md:pt-20">
				{/* Main grid — 4 columns on desktop */}
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
					{/* Column 1: Logo + description */}
					<div>
						<Image
							src="/images/logo-about.png"
							alt="Trendhomes"
							width={443}
							height={70}
							className="h-auto w-[200px] md:w-[260px]"
						/>
						<div className="mt-6 space-y-4 text-base leading-relaxed text-white md:text-lg">
							<p>
								Projektujemy, dostarczamy i montujemy stolarkę
								okienną oraz drzwiową dla nowych domów, remontów
								i lokali usługowych.
							</p>
							<p>
								Od ponad 10 lat pracujemy w Sanoku, Rzeszowie,
								Bieszczadach i okolicznych miejscowościach
								zapewniając naszym klientom fachową pomoc.
							</p>
						</div>
					</div>

					{/* Column 2: Produkty */}
					<div>
						<h3 className="text-xl font-bold tracking-tight text-white">
							Produkty
						</h3>
						<ul className="mt-4 space-y-2 md:mt-6">
							{productLinks.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-base text-light transition-colors hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 3: Przydatne linki */}
					<div>
						<h3 className="text-xl font-bold tracking-tight text-white">
							Przydatne linki
						</h3>
						<ul className="mt-4 space-y-2 md:mt-6">
							{usefulLinks.map((link) => (
								<li key={link.label}>
									<Link
										href={link.href}
										className="text-base text-light transition-colors hover:text-white"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Column 4: Trendhomes contact */}
					<div>
						<h3 className="text-xl font-bold tracking-tight text-white">
							Trendhomes
						</h3>
						<div className="mt-4 space-y-1 text-base leading-relaxed text-light md:mt-6">
							<p>ul. Piastowska 3, 38-500 Sanok</p>
							<p>E-mail: kontakt@trendhomes.pl</p>
							<p>Telefon: 735 721 222</p>
						</div>
						<div className="mt-4 space-y-1 text-base leading-relaxed text-light">
							<p>Oddział Rzeszów</p>
							<p>E-mail: rzeszow@trendhomes.pl</p>
							<p>Telefon: 786 421 506 </p>
						</div>
						<div className="mt-4 space-y-1 text-base leading-relaxed text-light">
							<p>NIP 6871126807</p>
							<p>REGON 361509528</p>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-10 flex flex-col gap-3 border-t border-white/20 py-6 sm:flex-row sm:items-center sm:justify-between md:mt-16">
					<p className="text-base text-light md:text-lg">
						Polityka prywatności &nbsp;|&nbsp; Polityka cookies
						&nbsp;|&nbsp; Regulamin strony
					</p>
					<p className="text-base text-light md:text-lg">
						&copy; 2026 Trendhomes. Wszelkie prawa zastrzeżone.
					</p>
				</div>
			</div>

			{/* Realizacja bar */}
			<div className="relative z-10 bg-dark/50 py-2.5">
				<div className="mx-auto max-w-[1440px] px-4 text-center sm:text-right md:px-6">
					<p className="text-sm text-dark md:text-base">
						Projekt: Koala Marketing | Realizacja:{" "}
						<a href="mailto:grzegorz.lenkiewicz@gmail.com">GL</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
