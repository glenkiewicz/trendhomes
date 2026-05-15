import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
	title: "Polityka cookies – Trendhomes",
	description:
		"Polityka cookies serwisu Trendhomes. Informacje o plikach cookies, ich rodzajach i sposobach zarządzania.",
};

export default function PolitykaCookiesPage() {
	return (
		<>
			<div className="sticky top-0 z-50">
				<TopBar />
				<Navbar />
			</div>

			<section className="bg-white py-10 md:py-20">
				<div className="mx-auto max-w-[900px] px-3 md:px-5">
					<h1 className="text-3xl font-bold text-dark md:text-4xl">
						Polityka cookies
					</h1>

					<div className="mt-8 space-y-10 text-base leading-relaxed text-dark/90 md:text-lg [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-dark md:[&_h2]:text-2xl [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-dark [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
						{/* 2.1 */}
						<div>
							<h2>1.1. Czym są cookies</h2>
							<p className="mt-4">
								Cookies to niewielkie pliki tekstowe zapisywane na urządzeniu
								użytkownika w&nbsp;związku z&nbsp;korzystaniem ze strony
								internetowej. Mogą być wykorzystywane również inne technologie
								o&nbsp;podobnym działaniu.
							</p>
						</div>

						{/* 2.2 */}
						<div>
							<h2>1.2. Do czego używamy cookies</h2>
							<p className="mt-4">Na stronie mogą być stosowane cookies:</p>
							<ul className="mt-2">
								<li>
									<strong>niezbędne</strong> — potrzebne do prawidłowego
									działania strony,
								</li>
								<li>
									<strong>funkcjonalne</strong> — zapamiętujące wybrane
									ustawienia użytkownika,
								</li>
								<li>
									<strong>analityczne</strong> — do mierzenia ruchu
									i&nbsp;sposobu korzystania ze strony,
								</li>
								<li>
									<strong>marketingowe</strong> — do prowadzenia działań
									reklamowych i&nbsp;pomiaru ich skuteczności.
								</li>
							</ul>
						</div>

						{/* 2.3 */}
						<div>
							<h2>1.3. Zgoda na cookies</h2>
							<p className="mt-4">
								Cookies niezbędne mogą działać bez zgody użytkownika.
							</p>
							<p className="mt-2">
								Cookies analityczne, marketingowe i&nbsp;inne nieniezbędne
								powinny być uruchamiane dopiero po uzyskaniu zgody użytkownika
								za pośrednictwem banera cookies lub platformy zarządzania
								zgodami.
							</p>
							<p className="mt-4">Użytkownik powinien mieć możliwość:</p>
							<ul className="mt-2">
								<li>zaakceptowania wszystkich cookies,</li>
								<li>odrzucenia wszystkich cookies poza niezbędnymi,</li>
								<li>wyboru kategorii cookies,</li>
								<li>późniejszej zmiany ustawień.</li>
							</ul>
						</div>

						{/* 2.4 */}
						<div>
							<h2>1.4. Narzędzia, które mogą wykorzystywać cookies</h2>
							<p className="mt-4">
								Jeżeli zostaną wdrożone na stronie, cookies lub podobne
								technologie mogą pochodzić m.in. od:
							</p>
							<ul className="mt-2">
								<li>Google Analytics 4,</li>
								<li>Google Ads,</li>
								<li>Meta Pixel,</li>
								<li>Hotjar,</li>
								<li>Google Maps,</li>
								<li>Google reCAPTCHA,</li>
								<li>narzędzi czatu online,</li>
								<li>osadzonych treści z&nbsp;mediów społecznościowych.</li>
							</ul>
						</div>

						{/* 2.5 */}
						<div>
							<h2>1.5. Jak zarządzać cookies</h2>
							<p className="mt-4">Użytkownik może zarządzać cookies:</p>
							<ul className="mt-2">
								<li>z&nbsp;poziomu banera cookies na stronie,</li>
								<li>z&nbsp;poziomu ustawień przeglądarki,</li>
								<li>
									przez usunięcie zapisanych cookies z&nbsp;urządzenia.
								</li>
							</ul>
							<p className="mt-4">
								Ograniczenie stosowania cookies może wpłynąć na niektóre
								funkcje strony.
							</p>
						</div>

						{/* 2.6 */}
						<div>
							<h2>1.6. Czas przechowywania cookies</h2>
							<p className="mt-4">
								Okres przechowywania cookies zależy od ich rodzaju
								i&nbsp;dostawcy. Niektóre wygasają po zakończeniu sesji, inne
								pozostają na urządzeniu do czasu ich usunięcia lub upływu
								określonego czasu.
							</p>
						</div>

						{/* Back link */}
						<div className="pt-4">
							<Link
								href="/"
								className="text-pink underline transition-colors hover:text-dark"
							>
								← Wróć na stronę główną
							</Link>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}
