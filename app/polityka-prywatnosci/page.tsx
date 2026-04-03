import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
	title: "Polityka prywatności – Trendhomes",
	description:
		"Polityka prywatności serwisu Trendhomes. Informacje o przetwarzaniu danych osobowych, prawach użytkownika i stosowanych zabezpieczeniach.",
};

export default function PolitykaPrywatnosciPage() {
	return (
		<>
			<div className="sticky top-0 z-50">
				<TopBar />
				<Navbar />
			</div>

			<section className="bg-white py-10 md:py-20">
				<div className="mx-auto max-w-[900px] px-3 md:px-5">
					<h1 className="text-3xl font-bold text-dark md:text-4xl">
						Polityka prywatności
					</h1>

					<div className="mt-8 space-y-10 text-base leading-relaxed text-dark/90 md:text-lg [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-dark md:[&_h2]:text-2xl [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-dark [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
						{/* 1.1 */}
						<div>
							<h2>1.1. Administrator danych</h2>
							<p className="mt-4">
								Administratorem danych osobowych jest Trendhomes Janusz Romanek
								z&nbsp;siedzibą przy ul.&nbsp;Piastowskiej&nbsp;3, 38-500 Sanok,
								woj.&nbsp;podkarpackie, NIP:&nbsp;6871126807,
								REGON:&nbsp;361509528, dalej jako „Administrator" lub
								„Trendhomes".
							</p>
							<p className="mt-4 font-semibold">Kontakt z&nbsp;Administratorem:</p>
							<ul className="mt-2">
								<li>adres: ul.&nbsp;Piastowska&nbsp;3, 38-500 Sanok</li>
								<li>
									e-mail:{" "}
									<a
										href="mailto:kontakt@trendhomes.pl"
										className="text-pink underline"
									>
										kontakt@trendhomes.pl
									</a>
								</li>
								<li>
									telefon:{" "}
									<a href="tel:735721222" className="text-pink underline">
										735&nbsp;721&nbsp;222
									</a>
								</li>
							</ul>
							<p className="mt-4">
								Dodatkowy kontakt handlowy dla obsługi regionu Rzeszowa jest
								publikowany na stronie jako punkt kontaktowy:
							</p>
							<ul className="mt-2">
								<li>
									e-mail:{" "}
									<a
										href="mailto:rzeszow@trendhomes.pl"
										className="text-pink underline"
									>
										rzeszow@trendhomes.pl
									</a>
								</li>
								<li>
									telefon:{" "}
									<a href="tel:601941619" className="text-pink underline">
										601&nbsp;941&nbsp;619
									</a>
								</li>
							</ul>
						</div>

						{/* 1.2 */}
						<div>
							<h2>1.2. Zakres polityki</h2>
							<p className="mt-4">
								Niniejsza Polityka prywatności opisuje zasady przetwarzania
								danych osobowych w&nbsp;związku z:
							</p>
							<ul className="mt-2">
								<li>korzystaniem ze strony internetowej Trendhomes,</li>
								<li>wysyłaniem zapytań przez formularz kontaktowy,</li>
								<li>
									kontaktem telefonicznym, mailowym lub przez media
									społecznościowe,
								</li>
								<li>
									działaniami marketingowymi, jeśli użytkownik wyraził na nie
									zgodę,
								</li>
								<li>
									stosowaniem plików cookies i&nbsp;podobnych technologii.
								</li>
							</ul>
						</div>

						{/* 1.3 */}
						<div>
							<h2>1.3. Jakie dane możemy przetwarzać</h2>
							<p className="mt-4">
								W&nbsp;zależności od sposobu kontaktu lub korzystania ze strony
								możemy przetwarzać:
							</p>
							<ul className="mt-2">
								<li>imię i&nbsp;nazwisko,</li>
								<li>numer telefonu,</li>
								<li>adres e-mail,</li>
								<li>miejscowość inwestycji,</li>
								<li>treść wiadomości i&nbsp;załączone materiały,</li>
								<li>dane techniczne dotyczące urządzenia i&nbsp;przeglądarki,</li>
								<li>adres IP,</li>
								<li>
									dane dotyczące aktywności na stronie, jeśli zostały wdrożone
									narzędzia analityczne lub marketingowe.
								</li>
							</ul>
						</div>

						{/* 1.4 */}
						<div>
							<h2>1.4. Cele i&nbsp;podstawy przetwarzania danych</h2>
							<p className="mt-4">
								Dane mogą być przetwarzane w&nbsp;następujących celach:
							</p>

							<h3>
								Udzielenie odpowiedzi na zapytanie przesłane przez formularz,
								e-mail lub telefon
							</h3>
							<p className="mt-2">Podstawa prawna:</p>
							<ul className="mt-1">
								<li>
									art.&nbsp;6 ust.&nbsp;1 lit.&nbsp;f RODO — prawnie
									uzasadniony interes Administratora polegający na obsłudze
									zapytań,
								</li>
								<li>
									lub art.&nbsp;6 ust.&nbsp;1 lit.&nbsp;b RODO — gdy kontakt
									zmierza do podjęcia działań przed zawarciem umowy.
								</li>
							</ul>

							<h3>
								Przygotowanie oferty, kontakt handlowy, ustalenie zakresu prac,
								terminu pomiaru lub realizacji
							</h3>
							<p className="mt-2">Podstawa prawna:</p>
							<ul className="mt-1">
								<li>art.&nbsp;6 ust.&nbsp;1 lit.&nbsp;b RODO.</li>
							</ul>

							<h3>
								Prowadzenie dalszego kontaktu handlowego i&nbsp;marketingowego
								drogą elektroniczną lub telefoniczną
							</h3>
							<p className="mt-2">
								Jeśli użytkownik wyraził odrębną zgodę. Podstawa prawna:
							</p>
							<ul className="mt-1">
								<li>art.&nbsp;6 ust.&nbsp;1 lit.&nbsp;a RODO.</li>
							</ul>

							<h3>
								Ustalenie, dochodzenie lub obrona przed roszczeniami
							</h3>
							<p className="mt-2">Podstawa prawna:</p>
							<ul className="mt-1">
								<li>art.&nbsp;6 ust.&nbsp;1 lit.&nbsp;f RODO.</li>
							</ul>

							<h3>
								Zapewnienie bezpieczeństwa strony, administrowanie serwisem,
								prowadzenie statystyk i&nbsp;analiz ruchu
							</h3>
							<p className="mt-2">Podstawa prawna:</p>
							<ul className="mt-1">
								<li>art.&nbsp;6 ust.&nbsp;1 lit.&nbsp;f RODO,</li>
								<li>
									w&nbsp;zakresie cookies i&nbsp;podobnych technologii również
									zgoda użytkownika, jeśli jest wymagana.
								</li>
							</ul>

							<h3>
								Wykonanie obowiązków prawnych, w&nbsp;szczególności podatkowych,
								rachunkowych i&nbsp;związanych z&nbsp;reklamacjami
							</h3>
							<p className="mt-2">Podstawa prawna:</p>
							<ul className="mt-1">
								<li>art.&nbsp;6 ust.&nbsp;1 lit.&nbsp;c RODO.</li>
							</ul>
						</div>

						{/* 1.5 */}
						<div>
							<h2>1.5. Czy podanie danych jest obowiązkowe</h2>
							<p className="mt-4">
								Podanie danych jest dobrowolne, ale w&nbsp;części przypadków
								niezbędne do:
							</p>
							<ul className="mt-2">
								<li>udzielenia odpowiedzi,</li>
								<li>przygotowania oferty,</li>
								<li>umówienia pomiaru,</li>
								<li>prowadzenia kontaktu handlowego.</li>
							</ul>
							<p className="mt-2">
								Brak podania danych może uniemożliwić obsługę zapytania.
							</p>
						</div>

						{/* 1.6 */}
						<div>
							<h2>1.6. Odbiorcy danych</h2>
							<p className="mt-4">
								Dane mogą być przekazywane podmiotom, które wspierają
								Administratora w&nbsp;prowadzeniu strony i&nbsp;obsłudze
								biznesu, w&nbsp;szczególności:
							</p>
							<ul className="mt-2">
								<li>dostawcy hostingu,</li>
								<li>dostawcy poczty elektronicznej,</li>
								<li>dostawcy systemów formularzy kontaktowych,</li>
								<li>firmy IT i&nbsp;serwisowe,</li>
								<li>podmioty obsługujące analitykę internetową,</li>
								<li>podmioty obsługujące reklamę internetową,</li>
								<li>
									dostawcy narzędzi map, czatu lub zabezpieczeń formularza,
								</li>
								<li>biuro rachunkowe lub kancelaria prawna,</li>
								<li>
									uprawnione organy publiczne, jeśli obowiązek przekazania
									danych wynika z&nbsp;przepisów prawa.
								</li>
							</ul>
							<p className="mt-4">
								Na stronie mogą być wdrożone narzędzia zewnętrzne, w&nbsp;tym
								Google Analytics&nbsp;4, Meta Pixel, Hotjar, Google Maps, Google
								reCAPTCHA oraz czat. W&nbsp;związku z&nbsp;tym dane mogą być
								przekazywane dostawcom tych usług na zasadach wynikających
								z&nbsp;ich własnych polityk prywatności.
							</p>
						</div>

						{/* 1.7 */}
						<div>
							<h2>1.7. Okres przechowywania danych</h2>
							<p className="mt-4">
								Dane przechowujemy przez okres nie dłuższy niż jest to potrzebne
								do realizacji celu, dla którego zostały zebrane,
								w&nbsp;szczególności:
							</p>
							<ul className="mt-2">
								<li>
									dane z&nbsp;zapytań — przez czas obsługi sprawy,
									a&nbsp;następnie przez okres potrzebny do archiwizacji
									i&nbsp;obrony przed roszczeniami,
								</li>
								<li>
									dane ofertowe i&nbsp;przedumowne — przez czas negocjacji
									oraz przez okres uzasadniony interesem Administratora,
								</li>
								<li>
									dane przetwarzane na podstawie zgody marketingowej — do czasu
									wycofania zgody,
								</li>
								<li>
									dane związane z&nbsp;wykonaniem umowy i&nbsp;dokumentacją
									księgową — przez okres wymagany przepisami prawa,
								</li>
								<li>
									dane z&nbsp;cookies — zgodnie z&nbsp;okresem życia danego
									pliku cookie lub do czasu jego usunięcia przez użytkownika.
								</li>
							</ul>
						</div>

						{/* 1.8 */}
						<div>
							<h2>1.8. Prawa osoby, której dane dotyczą</h2>
							<p className="mt-4">Użytkownik ma prawo do:</p>
							<ul className="mt-2">
								<li>dostępu do danych,</li>
								<li>sprostowania danych,</li>
								<li>usunięcia danych,</li>
								<li>ograniczenia przetwarzania,</li>
								<li>przenoszenia danych,</li>
								<li>
									wniesienia sprzeciwu wobec przetwarzania opartego na
									uzasadnionym interesie,
								</li>
								<li>
									cofnięcia zgody w&nbsp;dowolnym momencie, jeśli przetwarzanie
									odbywa się na podstawie zgody,
								</li>
								<li>
									wniesienia skargi do Prezesa Urzędu Ochrony Danych
									Osobowych.
								</li>
							</ul>
							<p className="mt-4">
								Cofnięcie zgody nie wpływa na zgodność z&nbsp;prawem
								przetwarzania, którego dokonano przed jej cofnięciem.
							</p>
						</div>

						{/* 1.9 */}
						<div>
							<h2>1.9. Profilowanie i&nbsp;zautomatyzowane decyzje</h2>
							<p className="mt-4">
								Dane użytkowników nie są wykorzystywane do podejmowania decyzji
								wywołujących wobec nich skutki prawne wyłącznie w&nbsp;sposób
								zautomatyzowany.
							</p>
							<p className="mt-2">
								Jeżeli na stronie wdrożone zostaną narzędzia reklamowe lub
								analityczne, mogą one służyć do tworzenia segmentów odbiorców
								lub analizy zachowań użytkowników na stronie.
							</p>
						</div>

						{/* 1.10 */}
						<div>
							<h2>1.10. Dane pozyskane przez media społecznościowe</h2>
							<p className="mt-4">
								Jeżeli użytkownik kontaktuje się z&nbsp;Trendhomes za
								pośrednictwem Facebooka, Instagrama lub innych mediów
								społecznościowych, dane są przetwarzane również zgodnie
								z&nbsp;zasadami danego operatora platformy.
							</p>
						</div>

						{/* 1.11 */}
						<div>
							<h2>1.11. Zmiany polityki prywatności</h2>
							<p className="mt-4">
								Administrator może aktualizować niniejszą Politykę prywatności
								w&nbsp;przypadku zmiany przepisów prawa, funkcjonalności strony
								lub stosowanych narzędzi.
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
