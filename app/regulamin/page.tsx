import type { Metadata } from "next";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
	title: "Regulamin strony – Trendhomes",
	description:
		"Regulamin korzystania ze strony internetowej Trendhomes. Zasady użytkowania, formularz kontaktowy, własność intelektualna.",
};

export default function RegulaminPage() {
	return (
		<>
			<div className="sticky top-0 z-50">
				<TopBar />
				<Navbar />
			</div>

			<section className="bg-white py-10 md:py-20">
				<div className="mx-auto max-w-[900px] px-3 md:px-5">
					<h1 className="text-3xl font-bold text-dark md:text-4xl">
						Regulamin strony
					</h1>

					<div className="mt-8 space-y-10 text-base leading-relaxed text-dark/90 md:text-lg [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-dark md:[&_h2]:text-2xl [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-dark [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
						{/* 3.1 */}
						<div>
							<h2>1.1. Postanowienia ogólne</h2>
							<p className="mt-4">
								Niniejszy Regulamin określa zasady korzystania ze strony
								internetowej Trendhomes dostępnej pod adresem trendhomes.pl
								oraz jej podstron.
							</p>
							<p className="mt-2">
								Właścicielem strony i&nbsp;usługodawcą jest Trendhomes Janusz
								Romanek, ul.&nbsp;Piastowska&nbsp;3, 38-500 Sanok,
								NIP:&nbsp;6871126807, REGON:&nbsp;361509528.
							</p>
						</div>

						{/* 3.2 */}
						<div>
							<h2>1.2. Charakter strony</h2>
							<p className="mt-4">
								Strona ma charakter informacyjny, wizerunkowy i&nbsp;kontaktowy.
							</p>
							<p className="mt-2">
								Za pośrednictwem strony użytkownik może w&nbsp;szczególności:
							</p>
							<ul className="mt-2">
								<li>zapoznać się z&nbsp;ofertą Trendhomes,</li>
								<li>wysłać zapytanie,</li>
								<li>umówić kontakt lub pomiar,</li>
								<li>przejść do kanałów społecznościowych,</li>
								<li>
									zapoznać się z&nbsp;poradami, realizacjami
									i&nbsp;opiniami.
								</li>
							</ul>
							<p className="mt-4">
								Informacje zamieszczone na stronie nie stanowią oferty
								w&nbsp;rozumieniu Kodeksu cywilnego, chyba że wyraźnie wskazano
								inaczej.
							</p>
						</div>

						{/* 3.3 */}
						<div>
							<h2>1.3. Warunki techniczne</h2>
							<p className="mt-4">Do korzystania ze strony potrzebne są:</p>
							<ul className="mt-2">
								<li>urządzenie z&nbsp;dostępem do internetu,</li>
								<li>aktualna przeglądarka internetowa,</li>
								<li>
									aktywny adres e-mail lub numer telefonu, jeśli użytkownik
									chce skontaktować się z&nbsp;Trendhomes.
								</li>
							</ul>
						</div>

						{/* 3.4 */}
						<div>
							<h2>1.4. Zasady korzystania ze strony</h2>
							<p className="mt-4">
								Użytkownik zobowiązuje się korzystać ze strony zgodnie
								z&nbsp;prawem, dobrymi obyczajami i&nbsp;w&nbsp;sposób
								nienaruszający praw Administratora ani osób trzecich.
							</p>
							<p className="mt-2">Zakazane jest w&nbsp;szczególności:</p>
							<ul className="mt-2">
								<li>dostarczanie treści bezprawnych,</li>
								<li>
									podejmowanie działań mogących zakłócać funkcjonowanie
									strony,
								</li>
								<li>
									próby uzyskania nieuprawnionego dostępu do strony lub
									danych,
								</li>
								<li>
									kopiowanie i&nbsp;wykorzystywanie treści strony w&nbsp;sposób
									wykraczający poza dozwolony użytek bez zgody właściciela.
								</li>
							</ul>
						</div>

						{/* 3.5 */}
						<div>
							<h2>1.5. Formularz kontaktowy</h2>
							<p className="mt-4">
								Korzystanie z&nbsp;formularza kontaktowego wymaga podania danych
								wskazanych jako wymagane.
							</p>
							<p className="mt-2">
								Użytkownik powinien podawać dane prawdziwe, aktualne
								i&nbsp;dotyczące jego sprawy.
							</p>
							<p className="mt-4">
								Administrator może pozostawić wiadomość bez odpowiedzi, jeżeli:
							</p>
							<ul className="mt-2">
								<li>
									jest anonimowa w&nbsp;stopniu uniemożliwiającym kontakt,
								</li>
								<li>nie dotyczy działalności Trendhomes,</li>
								<li>
									ma charakter spamu, nadużycia lub zawiera treści bezprawne.
								</li>
							</ul>
						</div>

						{/* 3.6 */}
						<div>
							<h2>1.6. Własność intelektualna</h2>
							<p className="mt-4">
								Treści, grafiki, układ strony, zdjęcia, teksty, logotypy
								i&nbsp;inne elementy strony są chronione prawem autorskim,
								prawem własności przemysłowej lub innymi przepisami prawa.
							</p>
							<p className="mt-2">
								Ich kopiowanie, rozpowszechnianie lub wykorzystywanie
								w&nbsp;celach komercyjnych bez uprzedniej zgody jest
								zabronione.
							</p>
						</div>

						{/* 3.7 */}
						<div>
							<h2>1.7. Linki zewnętrzne</h2>
							<p className="mt-4">
								Strona może zawierać odnośniki do stron zewnętrznych.
								Administrator nie odpowiada za treści, polityki prywatności ani
								praktyki stosowane przez podmioty trzecie.
							</p>
						</div>

						{/* 3.8 */}
						<div>
							<h2>1.8. Odpowiedzialność</h2>
							<p className="mt-4">
								Administrator dokłada starań, aby informacje na stronie były
								aktualne i&nbsp;rzetelne, jednak nie gwarantuje ich pełnej
								kompletności lub aktualności w&nbsp;każdym momencie.
							</p>
							<p className="mt-2">
								Administrator nie ponosi odpowiedzialności za:
							</p>
							<ul className="mt-2">
								<li>czasowe przerwy w&nbsp;działaniu strony,</li>
								<li>
									problemy wynikające z&nbsp;przyczyn technicznych niezależnych
									od Administratora,
								</li>
								<li>
									skutki korzystania ze strony w&nbsp;sposób sprzeczny
									z&nbsp;Regulaminem lub prawem.
								</li>
							</ul>
						</div>

						{/* 3.9 */}
						<div>
							<h2>1.9. Reklamacje dotyczące działania strony</h2>
							<p className="mt-4">
								Uwagi i&nbsp;reklamacje dotyczące działania strony można
								zgłaszać na adres{" "}
								<a
									href="mailto:kontakt@trendhomes.pl"
									className="text-pink underline"
								>
									kontakt@trendhomes.pl
								</a>
								.
							</p>
							<p className="mt-2">Zgłoszenie powinno zawierać:</p>
							<ul className="mt-2">
								<li>dane kontaktowe zgłaszającego,</li>
								<li>opis problemu,</li>
								<li>datę jego wystąpienia,</li>
								<li>
									w&nbsp;miarę możliwości zrzut ekranu lub inne materiały
									pomocnicze.
								</li>
							</ul>
							<p className="mt-4">
								Administrator rozpatrzy zgłoszenie w&nbsp;rozsądnym terminie,
								nie później niż w&nbsp;ciągu 14 dni roboczych, chyba że
								charakter sprawy wymaga dłuższego czasu.
							</p>
						</div>

						{/* 3.10 */}
						<div>
							<h2>1.10. Postanowienia końcowe</h2>
							<p className="mt-4">
								Regulamin może być zmieniany w&nbsp;przypadku zmiany przepisów
								prawa, funkcjonalności strony lub zakresu usług.
							</p>
							<p className="mt-2">
								W&nbsp;sprawach nieuregulowanych zastosowanie mają przepisy
								prawa polskiego.
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
