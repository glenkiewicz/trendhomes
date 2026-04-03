// ============================================================
// MOCKUP_DATA — Single source of truth for all website text content
// ============================================================

export const MOCKUP_DATA = {
	// ──────────────────────────────────────────────────────────
	// GLOBAL / SHARED
	// ──────────────────────────────────────────────────────────
	global: {
		companyName: "Trendhomes",
		phone: "735 721 222",
		phoneMobile: "786 421 506",
		email: "kontakt@trendhomes.pl",
		address: {
			street: "ul. Piastowska 3",
			city: "38-500 Sanok",
		},
		branches: {
			sanok: {
				phone: "735 721 222",
				email: "kontakt@trendhomes.pl",
			},
			rzeszow: {
				label: "Oddział Rzeszów",
				phone: "786 421 506",
				email: "rzeszow@trendhomes.pl",
			},
		},
		legal: {
			nip: "6871126807",
			regon: "361509528",
		},
		openingHours: {
			weekdays: "Poniedziałek \u2013 piątek: 8:00\u201316:00",
			saturday: "Sobota: po wcześniejszym umówieniu",
		},
		socials: {
			facebook: "https://facebook.com",
			instagram: "https://instagram.com",
		},
		cta: {
			umowPomiar: "Umów pomiar",
			umowPomiar48h: "Umów pomiar w 48 h",
			skontaktujSie: "Skontaktuj się z Nami",
			napisz: "Napisz do nas",
		},
	},

	// ──────────────────────────────────────────────────────────
	// TOP BAR
	// ──────────────────────────────────────────────────────────
	topBar: {
		text: 'Skorzystaj z dofinansowania "Czyste powietrze"',
		rightText: "nowości w ofercie | aktualności",
	},

	// ──────────────────────────────────────────────────────────
	// NAVIGATION
	// ──────────────────────────────────────────────────────────
	navigation: {
		menuItems: [
			{ label: "Produkty", href: "/produkty/okna", hasDropdown: true },
			{
				label: "Rozwiązania dla Ciebie",
				href: "/rozwiazania-dla-ciebie",
			},
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
		],
		productCategories: [
			{
				group: "Okna",
				items: [
					{
						name: "Okna PCV",
						href: "/produkty/okna",
						image: "/images/product-okna.png",
					},
					{
						name: "Okna Aluminiowe",
						href: "/produkty/okna-aluminiowe",
						image: "/images/product-okna.png",
					},
					{
						name: "Okna Drewniane",
						href: "/produkty/okna-drewniane",
						image: "/images/product-okna.png",
					},
					{
						name: "Okna Stalowe / Loftowe",
						href: "/produkty/okna-stalowe",
						image: "/images/product-okna.png",
					},
				],
			},
			{
				group: "Drzwi",
				items: [
					{
						name: "Drzwi Zewnętrzne",
						href: "/produkty/drzwi",
						image: "/images/product-drzwi.png",
					},
					{
						name: "Drzwi Wewnętrzne",
						href: "/produkty/drzwi-wewnetrzne",
						image: "/images/product-drzwi.png",
					},
					{
						name: "Drzwi Tarasowe Przesuwne",
						href: "/produkty/drzwi-tarasowe",
						image: "/images/product-drzwi-tarasowe.png",
					},
					{
						name: "Drzwi Stalowe / Loftowe",
						href: "/produkty/drzwi-stalowe",
						image: "/images/product-drzwi.png",
					},
					{
						name: "Drzwi Aluminiowe",
						href: "/produkty/drzwi-aluminiowe",
						image: "/images/product-drzwi.png",
					},
				],
			},
			{
				group: "Inne",
				items: [
					{
						name: "Rolety i Osłony",
						href: "/produkty/rolety",
						image: "/images/product-rolety.png",
					},
					{
						name: "Pergole i Ogrody zimowe",
						href: "/produkty/pergole",
						image: "/images/product-pergole.png",
					},
					{
						name: "Stolarka dla biznesu",
						href: "/produkty/dla-biznesu",
						image: "/images/product-biznes.png",
					},
				],
			},
		],
		mainProducts: [
			{
				name: "Okna",
				href: "/produkty/okna",
				image: "/images/product-okna.png",
			},
			{
				name: "Drzwi",
				href: "/produkty/drzwi",
				image: "/images/product-drzwi.png",
			},
			{
				name: "Drzwi Tarasowe",
				href: "/produkty/drzwi-tarasowe",
				image: "/images/product-drzwi-tarasowe.png",
			},
			{
				name: "Rolety i Osłony",
				href: "/produkty/rolety",
				image: "/images/product-rolety.png",
			},
			{
				name: "Pergole",
				href: "/produkty/pergole",
				image: "/images/product-pergole.png",
			},
			{
				name: "Dla biznesu",
				href: "/produkty/dla-biznesu",
				image: "/images/product-biznes.png",
			},
		],
	},

	// ──────────────────────────────────────────────────────────
	// FOOTER
	// ──────────────────────────────────────────────────────────
	footer: {
		description: [
			"Projektujemy, dostarczamy i montujemy stolarkę okienną oraz drzwiową dla nowych domów, remontów i lokali usługowych.",
			"Od ponad 10 lat pracujemy w Sanoku, Rzeszowie, Bieszczadach i okolicznych miejscowościach zapewniając naszym klientom fachową pomoc.",
		],
		columns: {
			produkty: {
				heading: "Produkty",
				links: [
					{ label: "Okna", href: "/produkty/okna" },
					{ label: "Drzwi", href: "/produkty/drzwi" },
					{ label: "Rolety i osłony", href: "/produkty/rolety" },
					{
						label: "Drzwi przesuwne",
						href: "/produkty/drzwi-tarasowe",
					},
					{
						label: "Pergole i ogrody zimowe",
						href: "/produkty/pergole",
					},
					{ label: "Dodatki", href: "/produkty/okna" },
				],
			},
			przydatneLinki: {
				heading: "Przydatne linki",
				links: [
					{
						label: "Rozwiązania dla domu",
						href: "/rozwiazania-dla-ciebie",
					},
					{ label: "O nas", href: "/o-nas" },
					{ label: "Realizacje", href: "/realizacje" },
					{ label: "Porady", href: "/blog" },
					{ label: "Dla biznesu", href: "/stolarka-dla-biznesu" },
					{ label: "Dokumenty do pobrania", href: "#" },
					{ label: "Kontakt", href: "/kontakt" },
				],
			},
		},
		bottomBar: {
			legalLinks: [
				{
					label: "Polityka prywatności",
					href: "/polityka-prywatnosci",
				},
				{ label: "Polityka cookies", href: "/polityka-cookies" },
				{ label: "Regulamin strony", href: "/regulamin" },
			],
			copyright: "\u00A9 2026 Trendhomes. Wszelkie prawa zastrzeżone.",
		},
	},

	// ──────────────────────────────────────────────────────────
	// HOMEPAGE SECTIONS
	// ──────────────────────────────────────────────────────────
	home: {
		hero: {
			slides: [
				{
					image: "/images/hero-bg.webp",
					titleLines: [
						"Okna, drzwi i rolety",
						"z montażem.",
						"W Bieszczadach.",
					],
					description:
						"Projektujemy, dostarczamy i montujemy stolarkę okienną oraz drzwiową dla nowych domów, remontów i lokali usługowych. Otrzymujesz kompletny pakiet: okna, rolety zewnętrzne, drzwi i bramę garażową z jednym terminem montażu i lokalnym serwisem.",
				},
				{
					image: "/images/hero-bg-2.webp",
					titleLines: [
						"Zadbaj o przyszłość już teraz! Dołącz do programu Czyste Powietrze",
					],
					description:
						"Skorzystaj z dofinansowania na wymianę okien i drzwi. Pomagamy przejść przez cały proces \u2013 od wniosku po montaż. Sprawdź, ile możesz zaoszczędzić.",
				},
				{
					image: "/images/hero-bg-3.webp",
					titleLines: [
						"Trendhomes dla biznesu",
						"Stolarka dopasowana do potrzeb inwestycyjnych",
					],
					description:
						"Trwałe okna i drzwi dla lokali usługowych, biur i obiektów komercyjnych. Zgodność z normami ppoż., terminowość i pełna dokumentacja odbiorcza.",
				},
			],
			bottomTabs: [
				"Buduję nowy dom",
				"Remontuję mieszkanie",
				"Trendhomes dla biznesu",
			],
		},

		solutions: {
			heading: ["Rozwiązania dopasowane", "do Twoich potrzeb"],
			items: [
				{
					title: "Buduję nowy dom",
					description:
						"Szukasz kompletnego pakietu okna + rolety zewnętrzne + drzwi z jednym terminem montażu przed przeprowadzką.",
					image: "/images/card-new-home.jpg",
				},
				{
					title: "Remontuję mieszkanie",
					description:
						"Potrzebujesz cichej, szybkiej i czystej wymiany okien i drzwi bez konfliktu z sąsiadami i problemów we wspólnocie.",
					image: "/images/card-renovation.jpg",
				},
				{
					title: "Trendhomes\ndla biznesu",
					description:
						"Trwała stolarka do lokalu, zgodna z przepisami ppoż. i odbiorem technicznym oraz z pewnym terminem wykonania.",
					image: "/images/card-business.jpg",
				},
				{
					title: "Dom z ogrodem (Pergola / Ogród zimowy)",
					description:
						"Wygodna strefa wypoczynku z dopasowaną konstrukcją, podłożem i odwodnieniem, która będzie estetyczna i komfortowa przez cały sezon.",
					image: "/images/card-new-home.jpg",
				},
				{
					title: "Remontuję dom jednorodzinny",
					description:
						"Wymiana okien, drzwi i bramy w zamieszkałym domu przeprowadzona przez jednego, sprawdzonego wykonawcę.",
					image: "/images/card-renovation.jpg",
				},
			],
		},

		products: {
			heading: ["Poznaj nasze", "produkty"],
		},

		cleanAir: {
			heading: [
				"Skorzystaj z dofinansowania",
				'w ramach programu "Czyste Powietrze"',
			],
			description:
				"Dzięki rządowemu wsparciu możesz zyskać nową stolarkę z dotacją od 40 do 100% poniesionych kosztów netto! Sprawdź już teraz i wybierz produkty Trendhomes z dofinansowaniem.",
		},

		why: {
			heading: ["Dlaczego warto", "wybrać Trendhomes"],
			intro: "Przy budowie nowego domu, remoncie mieszkania albo pracy nad lokalem usługowym liczy się coś więcej niż sama stolarka. Klienci wybierają nas, bo łączymy dobry produkt z terminami, porządkiem na budowie i lokalnym serwisem.",
			benefits: [
				{
					title: "Termin i organizacja prac",
					description:
						"Ustalamy realny termin montażu i trzymamy się ustaleń, bo wiemy, że od tego zależy przeprowadzka, ekipa wykończeniowa albo otwarcie lokalu. Umawiamy konkretne dni prac i koordynujemy montaż tak, żeby nie blokować innych wykonawców.",
					image: "/images/why-1.jpg",
				},
				{
					title: "Gwarancja i serwis posprzedażowy",
					description:
						"Po montażu nie znikamy. Jeśli po czasie trzeba coś wyregulować, poprawić uszczelkę albo sprawdzić działanie rolet \u2013 możesz liczyć na nasz serwis. Pracujemy lokalnie, dlatego szybciej reagujemy na zgłoszenia i łatwiej dochować warunków gwarancji.",
					image: "/images/why-2.jpg",
				},
				{
					title: "Lokalna ekipa i nadzór",
					description:
						"Działamy w Sanoku i okolicach, dzięki czemu znamy specyfikę lokalnych inwestycji \u2013 od domów jednorodzinnych po lokale usługowe. Montaż realizują nasze stałe ekipy, a prace od początku do końca inwestycji nadzoruje dedykowany opiekun klienta.",
					image: "/images/why-3.jpg",
				},
				{
					title: "Bezpieczeństwo i normy prawne",
					description:
						"Przy lokalach usługowych i inwestycjach biznesowych zwracamy szczególną uwagę na wymagania ppoż. i odbiory techniczne. Dobieramy stolarkę tak, żeby spełniała normy, a dokumenty i parametry produktu były przygotowane do kontroli i odbioru.",
					image: "/images/why-4b.webp",
				},
				{
					title: "Porządek na budowie i przy remoncie",
					description:
						"Pracując w zamieszkałych domach zabezpieczamy pomieszczenia, ograniczamy kurz i zawsze sprzątamy po sobie. Zajmujemy się również wyniesieniem starych okien i drzwi, żeby nie zostawiać Ci dodatkowego problemu do rozwiązania.",
					image: "/images/why-5.jpg",
				},
			],
		},

		steps: {
			heading: ["Współpraca dopasowana", "w każdym profilu"],
			subtitle:
				"Niezależnie od tego, czy budujesz nowy dom, remontujesz mieszkanie, czy przygotowujesz lokal usługowy - proces zawsze trzymamy w ryzach. Dzięki temu wiesz, na jakim etapie jesteśmy i czego możesz się spodziewać.",
			items: [
				{
					number: "1.",
					title: "Kontakt i wstępna rozmowa",
					description:
						"Daj nam znać, w jakiej jesteś sytuacji: nowy dom, remont mieszkania, lokal usługowy albo pergola przy domu. Podczas krótkiej rozmowy telefonicznej lub mailowej pytamy o podstawowe informacje, termin, zakres prac i budżet. Na tej podstawie umawiamy pomiar lub prosimy o przesłanie zdjęć i rzutów.",
				},
				{
					number: "2.",
					title: "Pomiar i doradztwo na miejscu",
					description:
						"Przyjeżdżamy na miejsce inwestycji w umówionym terminie. Wykonujemy dokładny pomiar okien, drzwi, bramy lub przestrzeni pod pergolę, a po drodze doradzamy rozwiązania dopasowane do projektu, przepisów i Twojego sposobu użytkowania. Na tym etapie omawiamy też wstępny harmonogram montażu i możliwości podziału prac.",
				},
				{
					number: "3.",
					title: "Oferta i podpisanie umowy",
					description:
						"Na podstawie pomiaru przygotowujemy szczegółową ofertę z rozpisaniem zakresu, materiałów i kosztów. Po akceptacji ustalamy konkretny termin montażu i zapisujemy go w umowie. Dzięki temu wiesz, kiedy ekipa wejdzie na budowę lub do mieszkania i możesz spokojnie zaplanować kolejne etapy prac.",
				},
				{
					number: "4.",
					title: "Produkcja i dostawa",
					description:
						"Uruchamiamy produkcję i na bieżąco informujemy o postępach. Stolarkę dowozimy we wskazane miejsce, pilnując, żeby nic się nie uszkodziło.",
				},
				{
					number: "5.",
					title: "Montaż i odbiór",
					description:
						"Stałe, przeszkolone ekipy montują stolarkę zgodnie z normami. Po montażu wspólnie sprawdzamy efekt pracy, pokazujemy obsługę i przekazujemy dokumenty.",
				},
			],
			investments: {
				heading: ["Różne inwestycje,", "ten sam doskonały efekt"],
				items: [
					{
						icon: "/images/home-icon.svg",
						title: "Nowy dom",
						description:
							"Pilnujemy terminów powiązanych z zamknięciem stanu surowego, pracami wykończeniowymi i przeprowadzką. Ustalamy montaż tak, aby nie blokować innych ekip.",
					},
					{
						icon: "/images/floor-plan-icon.svg",
						title: "Remont mieszkania lub domu",
						description:
							"Planujemy prace tak, żeby dało się normalnie funkcjonować w zamieszkałym wnętrzu. Zabezpieczamy pomieszczenia, ograniczamy kurz i umawiamy montaż na konkretne dni.",
					},
					{
						icon: "/images/apartment-icon.svg",
						title: "Lokal usługowy",
						description:
							"Dobieramy stolarkę pod przepisy i odbiory, a montaż planujemy poza godzinami pracy lub w przerwie między sezonami, żeby ograniczyć przestój w biznesie.",
					},
				],
			},
		},

		pergola: {
			heading: ["Nowoczesne i designerskie", "pergole ogrodowe"],
			description:
				"Miejsce błogiego odpoczynku i niezapomnianych spotkań z przyjaciółmi. Poznaj możliwości naszych pergol tarasowych i postaw na pewne rozwiązania od Trendhomes.",
		},

		realizations: {
			heading: ["Realizacje Trendhomes", "w południowej Polsce"],
			description:
				"Każdy projekt to inny dom, inne mieszkanie i inne potrzeby. Zobacz wybrane realizacje Trendhomes w Sanoku i okolicach \u2013 od nowych domów jednorodzinnych, przez mieszkania w blokach, aż po lokale usługowe i pergole w ogrodzie.",
			images: [
				{
					src: "/images/real-1.jpg",
					alt: "Realizacja \u2013 nowoczesny dom",
				},
				{
					src: "/images/real-2.jpg",
					alt: "Realizacja \u2013 dom z pergolą",
				},
				{
					src: "/images/real-3.jpg",
					alt: "Realizacja \u2013 drzwi wejściowe",
				},
				{
					src: "/images/real-4.jpg",
					alt: "Realizacja \u2013 klamka drzwi",
				},
				{
					src: "/images/real-5.jpg",
					alt: "Realizacja \u2013 okna w domu",
				},
				{
					src: "/images/real-6.jpg",
					alt: "Realizacja \u2013 okno z widokiem",
				},
				{
					src: "/images/real-7.jpg",
					alt: "Realizacja \u2013 ściana szklana w biurze",
				},
			],
			cta: "Zobacz więcej realizacji",
		},

		reviews: {
			heading: ["Opinie naszych", "klientów"],
			subtitle:
				"Przy wyborze wykonawcy stolarki liczy się nie tylko oferta na papierze, ale też doświadczenia innych. Dlatego zachęcamy, żeby sprawdzić, co o współpracy z Trendhomes mówią klienci z Sanoka i okolic.",
			googleMapsUrl:
				"https://www.google.com/maps/place/TRENDHOMES+Okna+i+Drzwi/@49.5655244,22.1742221,17z/data=!4m8!3m7!1s0x473c6d8672978b9f:0x1f8a04df91375c7b!8m2!3d49.5655244!4d22.1742221!9m1!1b1!16s%2Fg%2F11gr60qs3c?hl=pl",
			items: [
				{
					name: "Alicja",
					text: "Zamówiłam w firmie Trendhomes bramę garażową. Wszystko przebiegło sprawnie, działa bez zarzutu. Przedstawiciele firmy z dużą uwagą dobrali odpowiedni model, doradzili, odpowiedzieli na wszystkie pytania. Plus za dobrą komunikację i rozsądne ceny. Polecam",
					date: "Lipiec 2025",
					rating: 5,
				},
				{
					name: "Ania Hania",
					text: "Zamówiłam w TRENDHOMES rolety i okna do całego domu i wszystko przebiegło bezproblemowo. Produkty są solidne, estetyczne i idealnie dopasowane. Ekipa montażowa bardzo profesjonalna i punktualna. Zdecydowanie polecam tę firmę każdemu, kto ceni jakość i dobrą obsługę.",
					date: "Styczeń 2025",
					rating: 5,
				},
				{
					name: "Paweł Okarma",
					text: "Jesteśmy bardzo zadowoleni z usługi wymiany okien! Cały proces przebiega zawsze sprawnie i bezproblemowo. Zespół pracuje profesjonalnie, dbając o czystość i minimalizując uciążliwości. Nowe okna prezentują się świetnie. Serdecznie polecam!",
					date: "Październik 2024",
					rating: 5,
				},
				{
					name: "Monika Zych",
					text: "Współpraca na najwyższym poziomie! Szczerze polecam :) Gdybym mogła to dałabym dużo więcej gwiazdek. Z firmy Trendhomes mam okna, drzwi wejściowe, drzwi do kotłowni, rolety zewnętrzne i ozdobne do wewnątrz oraz panel winylowy. Jakość naprawdę świetna, moje oczekiwania zostały spełnione :) Dodatkowo super kontakt z Panem Mateuszem, montaż w ustalonym terminie realizacji.",
					date: "Czerwiec 2024",
					rating: 5,
				},
				{
					name: "Spy",
					text: "Polecam, pełen profesjonalizm",
					date: "Wrzesień 2022",
					rating: 5,
				},
				{
					name: "Marian Kaszycki",
					text: "Jestem niezwykle zadowolony z usług firmy Trendhomes! Zamówiłem u nich okna i drzwi wraz z montażem i muszę przyznać, że cały proces przebiegł wzorowo.",
					date: "Sierpień 2025",
					rating: 5,
				},
				{
					name: "Bartosz Serwatki",
					text: "Z czystym sumieniem mogę polecić tą firmę, nie tylko wykonali zadaszenie tarasu z dbałością o detale, ale zadbali również aby całość komponowała się z otoczeniem i pozwalała na pełny relaks 😀",
					date: "Sierpień 2025",
					rating: 5,
				},
				{
					name: "Monika S",
					text: "Doskonałe wykonanie!!! Z całym sercem polecam ,bałam się wymiany okien a zostałam bardzo pozytywnie zaskoczona,panowie perfekcyjnie zamontowali okna,bez żadnych uszkodzeń dodatkowo po sobie dokładnie posprzątali  ,o nic nie musiałam się martwić !! Pierwszy raz spotkałam się się tak miłym i profesjonalnym podejściem! Bardzo dziękuję firmie za profesjonalne wykonanie 🙂",
					date: "Kwiecień 2025",
					rating: 5,
				},
				{
					name: "Dom Rze",
					text: "Bardzo dobre okna, serwis na najwyższym poziomie. Kupiłem okna plastik i aluminium. Rzetelny kontakt i elastyczność. Szczerze polecam.",
					date: "Czerwiec 2025",
					rating: 5,
				},
			],
		},

		faq: {
			heading: ["Masz wątpliwości?", "Sprawdź FAQ"],
			cta: "Masz więcej pytań? Skontaktuj się",
			items: [
				{
					question:
						"Czy zdążycie z montażem okien i drzwi przed przeprowadzką?",
					answer: "Terminy montażu ustalamy z wyprzedzeniem już na etapie wyceny i pomiaru. Bierzemy pod uwagę harmonogram innych ekip wykończeniowych i realne możliwości produkcji. W umowie wpisujemy konkretny termin montażu, dzięki czemu możesz dopiąć przeprowadzkę i kolejne etapy prac.",
				},
				{
					question:
						"Na jakim etapie budowy najlepiej montować okna i drzwi zewnętrzne?",
					answer: "Najlepszy moment to etap po zamknięciu stanu surowego otwartego, przed rozpoczęciem prac wykończeniowych. Okna chronią wnętrze przed warunkami atmosferycznymi i pozwalają kontynuować prace wewnątrz.",
				},
				{
					question:
						"Czy wymiana okien w mieszkaniu naprawdę może odbyć się w 1 dzień?",
					answer: "Tak \u2013 standardowa wymiana 3\u20134 okien w mieszkaniu trwa jeden dzień roboczy. Wieczorem możesz już normalnie korzystać z pomieszczeń.",
				},
				{
					question:
						"Jak wygląda kwestia kurzu i sprzątania po wymianie okien lub drzwi?",
					answer: "Zabezpieczamy strefę pracy folią, ograniczamy pylenie i po zakończeniu montażu sprzątamy po sobie. Dbamy o to, żeby uciążliwości były jak najmniejsze.",
				},
				{
					question:
						"Czy potrzebuję zgody wspólnoty na wymianę okien w bloku?",
					answer: "W większości przypadków wymiana okien na takie same lub zbliżone wizualnie nie wymaga zgody wspólnoty. Warto jednak sprawdzić regulamin i poinformować zarząd o planowanych pracach.",
				},
				{
					question:
						"Czy stolarka do lokalu usługowego musi spełniać specjalne wymagania?",
					answer: "Tak \u2013 w zależności od rodzaju działalności mogą obowiązywać przepisy ppoż., normy akustyczne lub wymagania związane z odbiorem technicznym. Dobieramy stolarkę zgodną z przepisami.",
				},
				{
					question:
						"Jak zorganizować montaż stolarki, żeby nie zatrzymać całkowicie pracy lokalu?",
					answer: "Planujemy montaż poza godzinami pracy lub etapami \u2013 tak, żeby ograniczyć przestój w biznesie do minimum.",
				},
				{
					question: "Czy wycena i pomiar są płatne?",
					answer: "Pomiar i wycena są bezpłatne. Przyjeżdżamy na miejsce inwestycji, wykonujemy dokładne pomiary i przygotowujemy szczegółową ofertę bez żadnych zobowiązań.",
				},
				{
					question:
						"Czy pod pergolę lub ogród zimowy potrzebny jest specjalny fundament?",
					answer: "To zależy od konstrukcji i podłoża. W wielu przypadkach wystarczy istniejąca nawierzchnia \u2013 oceniamy to na miejscu podczas pomiaru i doradzamy optymalne rozwiązanie.",
				},
				{
					question:
						"Czy z pergoli albo ogrodu zimowego można korzystać cały rok?",
					answer: "Pergole z ruchomymi lamelami i ogrzewaniem pozwalają na użytkowanie przez większość roku. Ogrody zimowe z odpowiednim przeszkleniem i ogrzewaniem sprawdzają się również zimą.",
				},
				{
					question:
						"Jak działa gwarancja i co obejmuje serwis po montażu?",
					answer: "Po zakończeniu prac nie znikamy. Zapewniamy gwarancję na produkty i montaż. Regulacje, drobne poprawki i serwis gwarancyjny \u2013 wystarczy telefon.",
				},
			],
		},

		blog: {
			heading: ["Strefa", "wiedzy"],
			description:
				"Zanim podejmiesz decyzję o oknach, drzwiach, roletach czy pergoli, warto wiedzieć, na co zwrócić uwagę. W naszych materiałach pokazujemy praktyczne przykłady z budowy, remontów i lokali usługowych w Sanoku i okolicach.",
			readMore: "Czytaj więcej",
			cta: "Zobacz wszystkie porady",
		},

		brands: {
			heading: ["O Trendhomes:", "ludzie i lokalność"],
			paragraphs: [
				"Trendhomes to lokalna firma z Sanoka, która od lat pomaga właścicielom domów, mieszkań i lokali usługowych dobrze zaplanować i bezpiecznie zamontować stolarkę okienną, drzwiową, rolety, bramy oraz pergole. Łączymy doradztwo na miejscu inwestycji, solidny montaż i opiekę po zakończeniu prac.",
				"Pracujemy głównie w Sanoku, Bieszczadach i najbliższej okolicy. Dzięki temu znamy specyfikę lokalnych inwestycji \u2013 od domów jednorodzinnych, przez mieszkania w blokach, po małe i większe lokale usługowe. Współpracujemy zarówno z osobami prywatnymi, jak i przedsiębiorcami, dla których kluczowe są terminy, porządek na budowie i wsparcie przy formalnościach.",
			],
			cta: "Poznaj nasz zespół",
			image: {
				src: "/images/about-team.jpg",
				alt: "Zespół Trendhomes w salonie w Sanoku",
			},
		},

		contact: {
			heading: ["Skontaktuj się", "z Nami"],
			description:
				"Napisz, zadzwoń albo umów spotkanie w salonie w Sanoku. Im więcej powiesz nam o swojej inwestycji, tym lepiej dopasujemy stolarkę i terminy.",
			addressHeading: "Adres i siedziba firmy",
			serviceArea:
				"Pracujemy głównie w Sanoku, Bieszczadach, Rzeszowie i okolicznych miejscowościach.",
			openingHoursHeading: "Godziny otwarcia salonu:",
			contactHeading: "Dane kontaktowe",
			form: {
				placeholders: {
					name: "Imię",
					email: "E-mail",
					phone: "Numer telefonu (opcjonalnie)",
					postalCode: "Kod miejscowości",
					categoryDefault: "Wybierz z listy czego dotyczy zapytanie",
					message: "Napisz nam, czego dokładnie potrzebujesz",
				},
				categories: [
					"Okna",
					"Drzwi",
					"Rolety",
					"Bramy garażowe",
					"Pergole",
					"Inne",
				],
				infoText:
					"Na wiadomości odpowiadamy zazwyczaj w ciągu 24 godzin w dni robocze. Jeśli sprawa jest pilna, najlepiej od razu zadzwoń.",
				privacyText:
					"Zapoznałem/am się i akceptuję informację dotyczące przetwarzania moich danych osobowych wyjaśnionych w",
				privacyLink: "Polityce Prywatności",
				submitButton: "Wyślij zapytanie",
				sendingButton: "Wysyłanie...",
				successTitle: "Wiadomość wysłana!",
				successDescription: "Odpowiemy najszybciej jak to możliwe.",
				successButton: "Wyślij kolejną wiadomość",
			},
		},
	},

	// ──────────────────────────────────────────────────────────
	// PAGE: KONTAKT
	// ──────────────────────────────────────────────────────────
	pages: {
		kontakt: {
			hero: {
				image: "/images/kontakt-hero.jpg",
				breadcrumb: ["home", "kontakt"],
				titleLines: ["Skontaktuj się", "z Nami"],
				description:
					"Chcesz porozmawiać o oknach, drzwiach, roletach, bramie albo pergoli w okolicach Sanoka? Napisz, zadzwoń albo umów pomiar.",
			},
			howCanWeHelp: {
				heading: ["Jak możemy", "Ci pomóc"],
				description:
					"Najczęściej zaczynamy od krótkiej rozmowy i kilku podstawowych informacji o inwestycji. Na tej podstawie możemy wstępnie doradzić rozwiązania i zaproponować dalsze kroki: wycenę na podstawie projektu albo umówienie pomiaru na miejscu.",
			},
		},

		// ──────────────────────────────────────────────────────────
		// PAGE: O NAS
		// ──────────────────────────────────────────────────────────
		oNas: {
			hero: {
				image: "/images/onas-hero.png",
				breadcrumb: ["home", "o nas"],
				titleLines: ["Trendhomes:", "ludzie i lokalność"],
				description:
					"Trendhomes to ekipa ze stolarką z Sanoka. Pomagamy ogarnąć okna, drzwi, rolety, bramy i pergole w jednym miejscu, tak żeby temat był po prostu zrobiony, a nie wisiał miesiącami w powietrzu.",
			},
			about: {
				heading: [
					"Ludzie od stolarki, którzy",
					"wolą dowozić niż obiecywać",
				],
				paragraphs: [
					"Pracujemy lokalnie - w Sanoku, Bieszczadach i okolicznych miejscowościach. Dzięki temu znamy tutejsze projekty, typowe problemy przy remontach i budowach oraz to, jak wygląda prawdziwe życie na budowie, a nie tylko w katalogu.",
					"Trendhomes powstał z bardzo prostej obserwacji: klienci są zmęczeni gonieniem ekip, przekładanymi terminami i sytuacją, w której nikt nie czuje się odpowiedzialny za całość. U nas od pierwszej rozmowy do montażu odpowiada jedna firma.",
					"Nie obiecujemy cudów. Zamiast tego wolimy:",
				],
				listItems: [
					"powiedzieć uczciwie, co ma sens przy Twoim budżecie,",
					"dobrać systemy tak, żeby pasowały do projektu, a nie tylko do cennika,",
					"umówić realny termin i się go trzymać.",
				],
				image: {
					src: "/images/onas-team.png",
					alt: "Zespół Trendhomes",
				},
			},
			howWeWork: {
				heading: ["Jak pracujemy", "dostarczając Ci stolarkę"],
				description:
					"Niezależnie od tego, czy budujesz nowy dom, remontujesz mieszkanie, czy przygotowujesz lokal usługowy - proces zawsze trzymamy w ryzach. Dzięki temu wiesz, na jakim etapie jesteśmy i czego możesz się spodziewać.",
				steps: [
					{
						number: "1.",
						title: "Rozmowa i plan",
						text: "Najpierw słuchamy, w jakiej jesteś sytuacji - budujesz nowy dom, remontujesz mieszkanie, wymieniasz stolarkę w domu jednorodzinnym czy urządzasz lokal usługowy. Na tym etapie często od razu widać, które rozwiązania odpadają.",
					},
					{
						number: "2.",
						title: "Pomiar i doradztwo na miejscu",
						text: "Przyjeżdżamy, mierzymy, sprawdzamy realne warunki. Tłumaczymy różnice między PVC, aluminium, drewnem, rodzajami rolet czy bram tak, żeby dało się to zrozumieć bez słownika technicznego.",
					},
					{
						number: "3.",
						title: "Wycena i termin",
						text: "Dostajesz konkretną wycenę wraz z zakresem prac i terminem montażu. Bez \u201Emoże w przyszłym tygodniu\u201D - ustalamy dzień, który wpisujemy w kalendarz.",
					},
				],
			},
			whyTrendhomes: {
				heading: ["Dlaczego warto", "wybrać Trendhomes"],
				description:
					"Za Trendhomes stoją konkretne osoby, z którymi rozmawiasz po imieniu. To ważne szczególnie dla klientów, którzy chcą wiedzieć, kto realnie odpowiada za ich inwestycję.",
				team: [
					{
						name: "Mateusz: właściciel i doradca",
						text: "Mateusz jest twarzą firmy i pierwszym kontaktem przy większości inwestycji. Przyjeżdża na pomiar, ogląda budowę lub mieszkanie, zadaje dużo pytań i pomaga poukładać temat stolarki tak, żeby pasował do projektu i etapu prac. Nie sprzedaje \u201Enajdroższego, bo najdroższe jest najlepsze\u201D, tylko szuka rozwiązań, które mają sens na lata. Pilnuje też, żeby to, co ustalicie na początku, nie rozmyło się po drodze.",
						image: "/images/onas-person.png",
					},
					{
						name: "Monika: wyceny, terminy, kontakt",
						text: "Monika jest tą osobą, która sprawia, że wszystko się spina w kalendarzu i w dokumentach. Dopina zamówienia, dzwoni w sprawie terminów. Jeśli chcesz wiedzieć, na jakim etapie jest Twoje zlecenie i kiedy dokładnie będzie montaż - najczęściej rozmawiasz właśnie z nią. Dba o to, żeby informacje nie ginęły \u201Epomiędzy\u201D, tylko wracały do klienta na czas.",
						image: "/images/onas-person.png",
					},
					{
						name: "Adrian - pomiar, montaże i szczegóły na budowie",
						text: "Adrian odpowiada za kontakt z Klientem, oferty i pomiary. Dodatkowo wspiera ekipy montażowe i techniczne detale. To on patrzy, czy dane rozwiązanie da się zamontować tak, żeby było szczelnie, bezpiecznie i zgodnie ze sztuką. Na budowie często trzeba podejmować szybkie decyzje - Adrian robi to w taki sposób, żeby efekt końcowy był dobry zarówno wizualnie, jak i technicznie.",
						image: "/images/onas-person.png",
					},
				],
			},
			whereWeWork: {
				heading: ["Zobacz gdzie działamy", "i zróbmy coś razem"],
				paragraphs: [
					"Skupiamy się na regionie, który znamy najlepiej:",
				],
				listItems: [
					"Sanok i najbliższe okolice,",
					"miejscowości w kierunku Bieszczad,",
					"sąsiednie gminy, gdzie trudno o solidną, lokalną ekipę od stolarki.",
				],
				additionalText:
					"Pracujemy lokalnie - w Sanoku, Bieszczadach i okolicznych miejscowościach. Dzięki temu znamy tutejsze projekty, typowe problemy przy remontach i budowach oraz to, jak wygląda prawdziwe życie na budowie, a nie tylko w katalogu.",
			},
		},

		// ──────────────────────────────────────────────────────────
		// PAGE: OPINIE
		// ──────────────────────────────────────────────────────────
		opinie: {
			hero: {
				image: "/images/opinie-hero.jpg",
				breadcrumb: ["home", "opinie"],
				titleLines: ["Opinie, które mówią", "więcej niż 1000 słów"],
				description:
					"Zanim zaprosisz ekipę do domu, mieszkania albo lokalu, chcesz wiedzieć, jak poradziła sobie u innych. Tutaj znajdziesz opinie klientów Trendhomes z Sanoka i okolic.",
			},
			b2b: {
				heading: ["Tak o współpracy", "mówią klienci B2B"],
				testimonials: [
					{
						image: "/images/opinie-b2b-1.jpg",
						text: "Nunc nunc molestie sit risus nec at ac tristique lectus. Adipiscing elementum commodo sit turpis. Ut sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.\n\nAliquet in ac sodales porttitor ornare id nibh rhoncus tempus. Eget ac hac nunc nec malesuada pretium feugiat euismod.\n\nUt sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.",
						name: "",
						role: "",
					},
					{
						image: "/images/opinie-b2b-2.jpg",
						text: "Nunc nunc molestie sit risus nec at ac tristique lectus. Adipiscing elementum commodo sit turpis. Ut sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.\n\nAliquet in ac sodales porttitor ornare id nibh rhoncus tempus. Eget ac hac nunc nec malesuada pretium feugiat euismod.\n\nUt sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.",
						name: "",
						role: "",
					},
					{
						image: "/images/opinie-b2b-3.jpg",
						text: "Nunc nunc molestie sit risus nec at ac tristique lectus. Adipiscing elementum commodo sit turpis. Ut sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.\n\nAliquet in ac sodales porttitor ornare id nibh rhoncus tempus. Eget ac hac nunc nec malesuada pretium feugiat euismod.\n\nUt sed imperdiet pulvinar quis iaculis. Odio consequat eget dignissim molestie facilisi malesuada aliquam justo leo.",
						name: "",
						role: "",
					},
				],
			},
		},

		// ──────────────────────────────────────────────────────────
		// PAGE: REALIZACJE
		// ──────────────────────────────────────────────────────────
		realizacje: {
			hero: {
				image: "/images/realizacje-hero.jpg",
				breadcrumb: ["home", "realizacje"],
				titleLines: [
					"Realizacje Trendhomes:",
					"przestrzeń w najlepszej oprawie",
				],
				description:
					"Każdy projekt to inny dom, inne mieszkanie i inne potrzeby. Zobacz wybrane realizacje Trendhomes w Sanoku i okolicach \u2013 od nowych domów jednorodzinnych, przez mieszkania w blokach, aż po lokale usługowe i pergole w ogrodzie.",
			},
			newBuilds: {
				heading: ["Realizacje Trendhomes:", "okna i rolety"],
				items: [
					{
						title: "Realizacja\nw Polańczyku",
						image: "/images/realizacje/okna-polanczyk.jpg",
					},
					{
						title: "Domki\nw Bieszczadach",
						image: "/images/realizacje/okna-bieszczady.jpg",
					},
					{
						title: "Dom\nw Sanoku",
						image: "/images/realizacje/okna-sanok-1.jpg",
					},
					{
						title: "Dom\nw Sanoku",
						image: "/images/realizacje/okna-sanok-2.jpg",
					},
					{
						title: "Dom\nw Krakowie",
						image: "/images/realizacje/okna-krakow.jpg",
					},
					{
						title: "Dom\nw Kostarowcach",
						image: "/images/realizacje/okna-kostarowce.jpg",
					},
					{
						title: "Dom\nw Ustrzykach Dolnych",
						image: "/images/realizacje/okna-ustrzyki.jpg",
					},
				],
			},
			banner: {
				heading: ["Rozwiązania all in one:", "spójność i prostota"],
				description:
					"Coraz więcej klientów decyduje się na kompletny pakiet stolarki z jednego źródła. Okna, drzwi wejściowe, rolety zewnętrzne, brama garażowa \u2013 wszystko dopasowane kolorystycznie i technicznie, zamontowane w jednym terminie, z jednym punktem kontaktu.",
				cta: "Okna PVC",
			},
			renovations: {
				heading: ["Pergole i ogrody", "zimowe"],
				items: [
					{
						title: "Realizacja\nw Bieszczadach",
						image: "/images/realizacje/pergola-bieszczady.jpg",
					},
					{
						title: "Pergola\npod Rzeszowem",
						image: "/images/realizacje/pergola-rzeszow.jpg",
					},
					{
						title: "Ogród zimowy\nw Krośnie",
						image: "/images/realizacje/pergola-krosno.jpg",
					},
				],
			},
			products: {
				heading: ["Produkty, które", "dopasowują się do Ciebie"],
				paragraphs: [
					"Każda realizacja zaczyna się od dobrego doboru materiałów. W Trendhomes pracujemy ze sprawdzonymi systemami profili okiennych, drzwiowych, roletowych i bram garażowych, które dobieramy pod konkretny obiekt.",
					"Nie proponujemy jednego rozwiązania dla wszystkich. Zamiast tego dopasowujemy system, kolor, szklenie i akcesoria do Twoich potrzeb \u2013 niezależnie od tego, czy budujesz nowy dom, remontujesz mieszkanie czy urządzasz lokal usługowy.",
				],
				cta: "Zobacz produkty dla Ciebie",
				image: {
					src: "/images/realizacje-products.jpg",
					alt: "Produkty Trendhomes",
				},
			},
			b2b: {
				heading: ["Realizacje B2B", "od Trendhomes"],
				items: [
					{
						title: "Caritas\nw Myczkowcach",
						image: "/images/realizacje/b2b-caritas.jpg",
					},
					{
						title: "Biuro zarządu browaru\nVAN PUR w Rakszawie",
						image: "/images/realizacje/b2b-vanpur.jpg",
					},
					{
						title: "Laboratorium Rubber Company\nw Sanoku",
						image: "/images/realizacje/b2b-rubber-company.jpg",
					},
					{
						title: "Szpital\nw Lesku",
						image: "/images/realizacje/b2b-szpital-lesko.jpg",
					},
					{
						title: "OSP\nw Iwoniczu",
						image: "/images/realizacje/b2b-osp-iwonicz.jpg",
					},
					{
						title: "Zajazd Pod Lipą\nw Humiskach",
						image: "/images/realizacje/b2b-zajazd-humiski.jpg",
					},
					{
						title: "Centrum bankietowe\nRoyal Palace w Sanoku",
						image: "/images/realizacje/b2b-royal-palace.jpg",
					},
					{
						title: "Delikatesy Centrum\nw Sanoku",
						image: "/images/realizacje/b2b-delikatesy.jpg",
					},
				],
			},
			various: {
				heading: ["Różne realizacje", "Trendhomes"],
				items: [
					{
						title: "Montaż okien\nSanok",
						image: "/images/realizacje/rozne-1.jpg",
					},
					{
						title: "Montaż okien\nSanok",
						image: "/images/realizacje/rozne-2.jpg",
					},
					{
						title: "Realizacja\nSanok",
						image: "/images/realizacje/rozne-3.jpg",
					},
					{
						title: "Montaż okien\nSanok",
						image: "/images/realizacje/rozne-4.jpg",
					},
					{
						title: "Realizacja\nSanok",
						image: "/images/realizacje/rozne-5.jpg",
					},
					{
						title: "Realizacja\nSanok",
						image: "/images/realizacje/rozne-6.jpg",
					},
				],
			},
			office: {
				heading: ["Nasze biuro", "w Sanoku"],
				items: [
					{
						title: "Biuro Trendhomes\nSanok",
						image: "/images/realizacje/biuro-1.jpg",
					},
					{
						title: "Biuro Trendhomes\nSanok",
						image: "/images/realizacje/biuro-2.jpg",
					},
					{
						title: "Biuro Trendhomes\nSanok",
						image: "/images/realizacje/biuro-3.jpg",
					},
					{
						title: "Biuro Trendhomes\nSanok",
						image: "/images/realizacje/biuro-4.jpg",
					},
					{
						title: "Biuro Trendhomes\nSanok",
						image: "/images/realizacje/biuro-5.jpg",
					},
					{
						title: "Biuro Trendhomes\nSanok",
						image: "/images/realizacje/biuro-6.jpg",
					},
				],
			},
		},

		// ──────────────────────────────────────────────────────────
		// PAGE: ROZWIĄZANIA DLA CIEBIE
		// ──────────────────────────────────────────────────────────
		rozwiazania: {
			hero: {
				image: "/images/rozwiazania-hero.jpg",
				breadcrumb: ["home", "rozwiązania dla ciebie"],
				titleLines: ["Rozwiązania dopasowane", "do Twoich potrzeb"],
				description:
					"Niezależnie od tego, czy budujesz nowy dom, remontujesz mieszkanie, prowadzisz biznes, czy planujesz pergolę \u2014 dobieramy stolarkę i rozwiązania dopasowane do Twojej sytuacji.",
			},
			solutions: [
				{
					heading: ["Buduję nowy dom:", "rozwiązania od Trendhomes"],
					text: "Nowy dom to milion decyzji naraz. My bierzemy na siebie temat stolarki: dobieramy okna, rolety i drzwi tak, żeby pasowały do projektu, warunków zabudowy i Twojego budżetu. Ustalamy jeden termin montażu i koordynujemy prace z innymi ekipami, żeby nie blokować budowy.",
					image: "/images/rozwiazania-dom.jpg",
					banner: "Sprawdź pakiet okna + rolety + drzwi dla swojego projektu",
					imageRight: true,
				},
				{
					heading: [
						"Remontuję mieszkanie:",
						"rozwiązania od Trendhomes",
					],
					text: "Chcesz wymienić kilka okien w bloku i mieć to za sobą w 1 dzień, bez tygodniowego bałaganu. Planujemy prace tak, żeby nie paraliżować życia domowego i nie konfliktować Cię z sąsiadami. Dbamy o zabezpieczenie mieszkania, szybki montaż i wywóz starych okien.",
					image: "/images/rozwiazania-remont.jpg",
					banner: "Zobacz, jak wygląda wymiana okien w mieszkaniu krok po kroku",
					imageRight: false,
				},
				{
					heading: ["Prowadzę biznes:", "rozwiązania od Trendhomes"],
					text: "W lokalu liczy się pierwsze wrażenie, bezpieczeństwo i przepisy. Projektujemy i montujemy witryny, drzwi wejściowe i stolarkę p.poż tak, żeby było jednocześnie estetycznie, zgodnie z wymaganiami i na czas otwarcia. Ustalamy prace tak, aby jak najmniej ograniczać działanie Twojej firmy.",
					image: "/images/rozwiazania-biznes.jpg",
					banner: "Poznaj rozwiązania dla sklepów, biur, gabinetów i lokali usługowych",
					imageRight: true,
				},
			],
			businessCards: [
				{
					title: "Dla właścicieli lokali usługowych, sklepów, gabinetów czy biur",
					image: "/images/rozwiazania-biz-1.jpg",
				},
				{
					title: "Dla deweloperów i całych wspólnot mieszkaniowych",
					image: "/images/rozwiazania-biz-2.jpg",
				},
				{
					title: "Dla dużych inwestorów i obiektów publicznych m. in. szkół czy urzędów",
					image: "/images/rozwiazania-biz-3.jpg",
				},
			],
			businessHeading: ["Rozwiązania", "dla biznesu"],
			pergola: {
				heading: ["Dom z pergolą", "rozwiązania od Trendhomes"],
				description:
					"Pergola albo ogród zimowy to dodatkowy pokój, który żyje razem z Twoim ogrodem. Pomagamy dobrać konstrukcję, przeszklenia i zacienienie tak, żeby dało się tam odpocząć i latem, i w chłodniejsze dni. Patrzymy na całość: bryła domu, taras, sposób użytkowania.",
				image: "/images/rozwiazania-pergola.jpg",
				banner: "Zobacz, jak projektujemy pergole i ogrody zimowe w okolicach Sanoka",
				galleryHeading: [
					"Zobacz jakie pergole",
					"stworzyliśmy dla klientów",
				],
				gallery: [
					"/images/rozwiazania-gallery-1.jpg",
					"/images/rozwiazania-gallery-2.jpg",
					"/images/rozwiazania-gallery-3.jpg",
				],
			},
		},

		// ──────────────────────────────────────────────────────────
		// PAGE: STOLARKA DLA BIZNESU
		// ──────────────────────────────────────────────────────────
		stolarkaForBusiness: {
			hero: {
				image: "/images/biznes-hero.jpg",
				breadcrumb: ["home", "stolarka dla biznesu"],
				titleLines: [
					"Stolarka dla biznesu",
					"i instytucji publicznych",
					"\u2013 od projektu do montażu",
				],
				description:
					"W biznesie stolarka nie jest tylko \u201Eoknem w ścianie\u201D. W Trendhomes doskonale o tym wiemy, dlatego od pierwszej koncepcji do odbioru technicznego masz po swojej stronie zespół, który rozumie biznes, przepisy i budowę.",
			},
			intro: {
				heading: ["Trendhomes", "dla biznesu"],
				paragraphs: [
					"Wiemy, że w biznesie stolarka okienna ma przyciągać klientów, spełniać wymagania przepisów, współpracować z systemami przeciwpożarowymi i wytrzymać intensywne użytkowanie.",
					"W Trendhomes projektujemy i dostarczamy rozwiązania dla lokali usługowych, biur, sklepów, galerii handlowych, bloków mieszkalnych, basenów, budynków użyteczności publicznej, kościołów i szpitali. Pracujemy zarówno z właścicielami pojedynczych lokali, jak i z inwestorami oraz generalnymi wykonawcami.",
				],
				subheading: "Dla kogo jest ta oferta?",
			},
			targetAudience: [
				{
					title: "Dla właścicieli lokali usługowych, sklepów, gabinetów czy biur",
					image: "/images/biznes-card-1.jpg",
				},
				{
					title: "Dla deweloperów i całych wspólnot mieszkaniowych",
					image: "/images/biznes-card-2.jpg",
				},
				{
					title: "Dla dużych inwestorów i obiektów publicznych m. in. szkół czy urzędów",
					image: "/images/biznes-card-3.jpg",
				},
				{
					title: "Dla architektów i biur projektowych szukających partnera do stolarki",
					image: "/images/biznes-card-4.jpg",
				},
			],
			services: {
				heading: [
					"Stolarka w pełni dopasowana",
					"do potrzeb Twojej inwestycji",
				],
				categories: [
					{
						title: "Lokale usługowe",
						intro: "W lokalach usługowych i biurach stolarka pracuje zupełnie inaczej niż w domu. Drzwi otwierają się setki razy dziennie, witryna ma przyciągać wzrok z ulicy, a całość musi spełnić wymagania techniczne budynku i zarządcy.",
						details: [
							"drzwi wejściowe aluminiowe (automatyczne i manualne)",
							"ściany aluminiowo-szklane wewnętrzne",
							"systemy przesuwne i składane",
							"okna i fasady z profili ciepłych lub zimnych, zależnie od przeznaczenia",
							"rolety zewnętrzne i wewnętrzne, żaluzje fasadowe",
						],
					},
					{
						title: "Witryny",
						intro: "Witryna to wizytówka lokalu. Od tego, jak wygląda, zależy, czy klient zatrzyma się choć na chwilę przed Twoim miejscem. Jednocześnie witryna musi być bezpieczna, ciepła i zgodna z projektem budynku.",
						listTitle: "Jakie witryny realizujemy:",
						list: [
							"witryny sklepowe i usługowe w parterach budynków mieszkalnych",
							"przeszklenia wejść do galerii handlowych i pasaży",
							"przeszklone fasady w biurowcach i obiektach usługowych",
							"witryny w budynkach użyteczności publicznej (biblioteki, domy kultury, baseny)",
						],
						considerTitle:
							"Przy projektowaniu witryn bierzemy pod uwagę:",
						considerations: [
							"funkcję lokalu (handel, usługi, gastronomia, medycyna, edukacja)",
							"wymagania co do izolacyjności cieplnej i akustycznej",
							"oczekiwania inwestora co do wyglądu i sposobu ekspozycji towaru",
							"kwestie bezpieczeństwa \u2013 rodzaj szyb, podziały, balustrady, zabezpieczenia antywłamaniowe",
						],
					},
					{
						title: "Drzwi p.poż.",
						intro: "Drzwi przeciwpożarowe to przede wszystkim bezpieczeństwo i przepisy. W obiektach biznesowych i publicznych drzwi przeciwpożarowe nie są \u201Eopcją\u201D, tylko obowiązkiem. Dobór nieodpowiedniego systemu potrafi zablokować odbiór budynku. Dlatego ten temat traktujemy bardzo poważnie.",
					},
					{
						title: "Fasady",
						intro: "Przy większych inwestycjach często pojawia się potrzeba wykonania fasady aluminiowo-szklanej albo dużych przeszkleń łączących kilka kondygnacji. W takich miejscach stolarka jest ważnym elementem architektury budynku.",
					},
					{
						title: "Nietypowe realizacje",
						intro: "Część zleceń nie mieści się w prostych kategoriach. To są projekty, w których budynek ma trudną historię techniczną albo jest obiektem zabytkowym.",
					},
				],
				accordionLabels: { open: "Zwiń opis", closed: "Czytaj więcej" },
				detailsLabel: "Co dostarczamy do lokali:",
				vitrineCta: "Zobacz realizacje witryn",
			},
			process: {
				heading: [
					"Jak wygląda współpraca",
					"przy stolarce dla biznesu",
				],
				steps: [
					{
						number: "1.",
						title: "Rozmowa i analiza obiektu",
						text: "Ustalamy typ budynku, jego funkcję, status formalny (nowy, modernizacja, zabytek), zakres potrzebnej stolarki oraz harmonogram inwestycji.",
					},
					{
						number: "2.",
						title: "Propozycja rozwiązań",
						text: "Przygotowujemy koncepcję: podział na lokale, witryny, drzwi p.poż., fasady, dodatkowe elementy. Omawiamy różne warianty techniczne i budżetowe.",
					},
					{
						number: "3.",
						title: "Pomiar i doprecyzowanie detali",
						text: "Mierzymy otwory, weryfikujemy warunki techniczne, uzgadniamy podział prac i odpowiedzialności z innymi wykonawcami.",
					},
				],
			},
			partner: {
				heading: ["Trendhomes \u2013 Twój", "partner w biznesie"],
				paragraphs: [
					"Łączymy doświadczenie z budów, znajomość systemów stolarki i wymagania przepisów.",
					"Napisz, jakiego obiektu dotyczy inwestycja i w jakim jesteś etapie \u2013 przygotujemy propozycję rozwiązań dla stolarki biznesowej i pokażemy podobne realizacje z naszej galerii.",
				],
				image: {
					src: "/images/biznes-partner.jpg",
					alt: "Partner w biznesie",
				},
			},
		},

		// ──────────────────────────────────────────────────────────
		// PAGE: BLOG
		// ──────────────────────────────────────────────────────────
		blog: {
			metadata: {
				title: "Blog \u2013 Trendhomes | Strefa wiedzy",
				description:
					"Porady, realizacje i aktualności ze świata stolarki okiennej i drzwiowej. Trendhomes Sanok.",
			},
			hero: {
				image: "/images/blog-hero.png",
				breadcrumb: "home | strefa wiedzy",
				titleLines: ["Porady i inspiracje", "do Twojej inwestycji"],
				description:
					"Zanim podejmiesz decyzję o oknach, drzwiach, roletach czy pergoli, warto wiedzieć, na co zwrócić uwagę. W naszych materiałach pokazujemy praktyczne przykłady z budowy, remontów i lokali usługowych w Sanoku i okolicach.",
				cta: "Czytaj najnowszy wpis",
			},
			filters: [
				"Wszystkie",
				"Porady",
				"Inspiracje",
				"Aktualności",
				"Technologie",
			] as const,
			readArticle: "Czytaj artykuł",
			loadMore: "Wczytaj więcej wpisów",
		},

		// ──────────────────────────────────────────────────────────
		// PAGE: PRODUKTY / OKNA
		// ──────────────────────────────────────────────────────────
		produktyOkna: {
			hero: {
				image: "/images/okna-hero.png",
				breadcrumb: ["home", "Produkty", "Okna PVC"],
				titleLines: ["Okna PVC", "od Trendhomes"],
				description:
					"Wymieniamy i montujemy okna PVC w domach jednorodzinnych, mieszkaniach w blokach, lokalach usługowych, czy na inwestycjach deweloperskich w Sanoku i okolicy. Dobieramy system profili do projektu, budżetu i tego, jak naprawdę korzystasz z domu czy mieszkania, a potem dowozimy montaż w umówionym terminie.",
			},
			productsHeading: ["Poznaj nasze", "produkty"],
			manufacturerFilters: [
				"Wszystkie",
				"Salamander",
				"Rehau",
				"Aluplast",
				"EkoSun",
				"Gealan",
			],
			manufacturers: [
				{
					id: "salamander",
					name: "Salamander",
					description:
						"Salamander to wiodący producent profili okiennych PVC, którego systemy doskonale sprawdzają się tam, gdzie równie istotne jak parametry techniczne są estetyka oraz harmonijne dopasowanie do elewacji budynku. Profile tej marki często wybierane są do nowoczesnych domów jednorodzinnych oraz obiektów, w których kluczową rolę odgrywa efekt dużych, eleganckich przeszkleń. To rozwiązanie dla klientów ceniących nie tylko funkcjonalność i trwałość, ale także dbałość o detale i spójny wygląd całej bryły budynku.",
					cta: "Chcesz zobaczyć, jak okna Salamander wyglądają w realizacjach w Sanoku i okolicy? Zostaw maila, prześlemy Ci krótkie zestawienie.",
				},
				{
					id: "rehau",
					name: "Rehau",
					description:
						"Rehau to jedna z marek, które najczęściej wybieramy przy domach jednorodzinnych i bardziej wymagających inwestycjach. Systemy tej firmy dobrze łączą parametry cieplne z solidnym wykonaniem profili, dzięki czemu sprawdzają się zarówno w standardowych projektach, jak i przy większych przeszkleniach. To dobry wybór, jeśli zależy Ci na spokojnym użytkowaniu przez wiele lat.",
					cta: "Zostaw maila, wyślemy Ci pełną ofertę okien PCV Rehau w systemach 76, 82 i 92 z przykładowymi konfiguracjami.",
				},
				{
					id: "aluplast",
					name: "Aluplast",
					description:
						"Aluplast to producent, którego systemy często stosuje się w budownictwie jednorodzinnym i wielorodzinnym. Daje szerokie możliwości konfiguracji \u2013 od prostszych okien do mieszkań, po większe przeszklenia w domach. To dobry wybór, gdy zależy Ci na elastyczności i dopasowaniu do konkretnego budynku.",
					cta: "Zostaw maila, a wyślemy Ci porównanie systemów Aluplast 76, 82 i 92 z przykładowymi konfiguracjami okien.",
				},
				{
					id: "ekosun",
					name: "EkoSun",
					description:
						"Systemy EkoSun wybieramy, gdy ważne są dobre parametry przy zachowaniu rozsądnego budżetu i możliwość spójnego dopasowania stolarki w całym budynku. To często rozwiązanie dla klientów, którzy chcą \u201Epo prostu mieć dobre okna\u201D, nie wchodząc w najwyższe widełki cenowe. Dobrze sprawdza się zarówno w domach, jak i mieszkaniach.",
					cta: "Napisz do nas, a dobierzemy system EkoSun (76, 82 albo 92) do Twojego domu lub mieszkania na podstawie krótkiego wywiadu.",
				},
				{
					id: "gealan",
					name: "Gealan",
					description:
						"Systemy Gealan często wybieramy przy nowoczesnych projektach, w których pojawiają się większe przeszklenia i wyraźnie zarysowana architektura. To profile, które dobrze wypadają zarówno pod względem parametrów, jak i wizualnie. Sprawdzają się w domach, mieszkaniach oraz wybranych realizacjach w lokalach usługowych.",
					cta: "Jeśli interesują Cię okna Gealan i chcesz zobaczyć, który system pasuje do Twojej inwestycji, zostaw maila \u2013 przygotujemy wstępne propozycje.",
				},
			],
			why: {
				heading: ["Dlaczego warto zamówić", "okna PVC w Trendhomes"],
				items: [
					{
						icon: "/images/icon-profile.svg",
						title: "Pracujemy na sprawdzonych systemach profili",
						description:
							"Korzystamy z rozwiązań takich producentów jak Rehau, Salamander, Aluplast, EkoSun i Gealan w kilku głębokościach systemów (76, 82, 92). Dzięki temu możemy dobrać okno zarówno do standardowego remontu, jak i do bardziej wymagających projektów.",
					},
					{
						icon: "/images/icon-measure.svg",
						title: "Dobór pod konkretną sytuację, nie z katalogu",
						description:
							"Inaczej rozmawiamy z kimś, kto wchodzi do nowego domu, inaczej z kimś, kto wymienia okna w bloku, a jeszcze inaczej z właścicielem lokalu usługowego. Zawsze zaczynamy od krótkiego wywiadu i pomiaru.",
					},
					{
						icon: "/images/icon-helmet.svg",
						title: "Montaż i serwis lokalnej ekipy",
						description:
							"Nie sprzedajemy samych okien \u201Ena dostawę\u201D. Odpowiadamy za montaż, regulację i późniejszy serwis. Działamy lokalnie, więc w razie potrzeby łatwiej się z nami skontaktować.",
					},
					{
						icon: "/images/icon-profile.svg",
						title: "Jeden partner od okien i rolet",
						description:
							"Okna PVC łączymy od razu z roletami zewnętrznymi, dzięki czemu całość jest dobrze zgrana technicznie i terminowo.",
					},
				],
			},
			forWhom: {
				heading: ["Dla kogo są nasze", "okna PVC"],
				items: [
					{
						label: "Budujesz nowy dom",
						text: "Potrzebujesz stolarki, która wpisze się w projekt, spełni wymagania cieplne i nie opóźni prac wykończeniowych. Dobieramy okna pod elewację, rolety i bramę, a termin montażu ustalamy tak, żeby nie blokować innych ekip.",
					},
					{
						label: "Remontujesz mieszkanie w bloku",
						text: "Przy wymianie 3\u20135 okien liczy się czas, porządek i spokój sąsiadów. Planujemy prace tak, żeby zamknąć montaż w 1 dzień, zabezpieczyć mieszkanie i klatkę schodową, a jak trzeba, to wywieźć stare okna i odpady po montażu.",
					},
					{
						label: "Odświeżasz dom jednorodzinny",
						text: "Przy remoncie domu zwykle wchodzą w grę okna, drzwi i czasem brama. Pomagamy ułożyć to w sensowny etap prac, tak żeby dało się normalnie funkcjonować w zamieszkałym domu.",
					},
					{
						label: "Prowadzisz biznes lub lokal usługowy",
						text: "W lokalach ważne są parametry, przepisy i termin otwarcia. Dobieramy okna PVC pod wymagania budynku i charakter działalności, a montaż planujemy tak, żeby ograniczyć przerwy w pracy.",
					},
				],
			},
		},

		// ──────────────────────────────────────────────────────────
		// PAGE: PRODUKTY / DRZWI
		// ──────────────────────────────────────────────────────────
		produktyDrzwi: {
			hero: {
				image: "/images/okna-hero.png",
				breadcrumb: ["home", "Produkty", "Drzwi"],
				titleLines: ["Drzwi zewnętrzne", "z montażem"],
				description:
					"Drzwi zewnętrzne to pierwsza rzecz, z którą spotykają się domownicy, goście i klienci. W Trendhomes pomagamy dobrać drzwi do domu jednorodzinnego, mieszkania w bloku albo lokalu usługowego, a potem bierzemy na siebie pomiar, montaż i późniejszą regulację. Pracujemy na sprawdzonych producentach, dzięki czemu możesz dobrać wygląd, parametry i budżet do swojej inwestycji, a nie odwrotnie.",
			},
			forWhom: {
				heading: ["Dla kogo są nasze", "drzwi zewnętrzne"],
				items: [
					{
						label: "Dom jednorodzinny \u2013 nowy lub remontowany",
						text: "Dobieramy drzwi, które pasują do elewacji, okien i bramy, a przy tym spełniają wymagania cieplne i bezpieczeństwa. Ustalamy termin montażu tak, żeby nie blokować ekip wykończeniowych ani Twoich planów z przeprowadzką.",
					},
					{
						label: "Mieszkanie w bloku",
						text: "W mieszkaniach liczy się wygoda, akustyka i poczucie bezpieczeństwa. Proponujemy drzwi, które poprawią komfort na klatce schodowej, nie będą kłócić się z wytycznymi wspólnoty, a montaż postaramy się zamknąć w jednym dniu.",
					},
					{
						label: "Lokal usługowy / biuro",
						text: "Drzwi muszą dobrze wyglądać od ulicy, wytrzymać intensywne użytkowanie i ułatwiać klientom wejście do środka. Dobieramy rozwiązania z myślą o charakterze biznesu, godzinach pracy i ruchu klientów.",
					},
					{
						label: "Inwestor, który chce mieć święty spokój",
						text: "To opcja dla osób, które wolą powierzyć temat jednemu wykonawcy: od doboru modelu, przez montaż, po serwis. Ustalamy zakres, termin i po prostu dowozimy.",
					},
				],
			},
			why: {
				heading: [
					"Dlaczego warto zamówić",
					"drzwi zewnętrzne w Trendhomes",
				],
				items: [
					{
						icon: "/images/icon-profile.svg",
						title: "Kilku producentów, jedno miejsce kontaktu",
						description:
							"Pracujemy na ofercie kilku marek, dzięki czemu możemy dobrać drzwi do konkretnej sytuacji, a nie wciskać jednego \u201Eulubionego\u201D katalogu.",
					},
					{
						icon: "/images/icon-measure.svg",
						title: "Dobór pod cały budynek, nie tylko pod otwór w ścianie",
						description:
							"Patrzymy na drzwi razem z oknami, roletami i bramą. Chodzi o to, żeby całość wyglądała spójnie i działała sensownie pod względem cieplnym.",
					},
					{
						icon: "/images/icon-helmet.svg",
						title: "Lokalna ekipa montażowa",
						description:
							"Przyjeżdżamy na pomiar, montujemy drzwi i wracamy, kiedy trzeba je wyregulować. Nie znikamy po odbiorze.",
					},
					{
						icon: "/images/icon-profile.svg",
						title: "Jasny zakres prac i odpowiedzialności",
						description:
							"Już w ofercie rozpisujemy, co dokładnie obejmuje montaż: demontaż starych drzwi, przygotowanie otworu, obróbki, wykończenie. Dzięki temu nie ma \u201Eukrytych\u201D pozycji.",
					},
				],
			},
			manufacturers: {
				heading: [
					"Producenci drzwi zewnętrznych,",
					"z którymi pracujemy",
				],
				featuresLabel: "Cechy wyróżniające",
				items: [
					{
						id: "erkado",
						name: "Erkado",
						description:
							"Drzwi zewnętrzne Erkado dobrze sprawdzają się w domach jednorodzinnych i mieszkaniach, gdzie liczy się połączenie wyglądu z rozsądną ceną. W ofercie znajdziesz zarówno proste, klasyczne wzory, jak i bardziej nowoczesne skrzydła z przeszkleniami. Na etapie wyceny wybieramy kilka konkretnych modeli, które pasują do elewacji, koloru okien i bramy, zamiast przerzucać na Ciebie wybieranie z całego katalogu.",
						features: [
							{
								name: "Szeroki wybór kolorów i oklein",
								description:
									"Erkado oferuje szeroką gamę kolorów i oklein, dzięki czemu łatwo dopasować drzwi do elewacji, okien i bramy garażowej.",
							},
							{
								name: "Wersje z naświetlami bocznymi i górnymi",
								description:
									"Możliwość zamówienia drzwi z naświetlami bocznymi lub górnymi, co pozwala doświetlić wejście i optycznie powiększyć przestrzeń.",
							},
							{
								name: "Różne klasy wyposażenia pod kątem bezpieczeństwa",
								description:
									"Drzwi Erkado dostępne są w różnych klasach wyposażenia, co pozwala dobrać poziom bezpieczeństwa do potrzeb i budżetu.",
							},
						],
					},
					{
						id: "setto",
						name: "Setto",
						description:
							"Setto to dobry kierunek dla inwestorów, którzy szukają drzwi zewnętrznych o nowocześniejszym wyglądzie, ale dalej w rozsądnym budżecie. Wzornictwo dobrze pasuje do prostych brył domów, popularnych projektów katalogowych i budynków modernizowanych.",
						features: [
							{
								name: "Różne warianty przeszkleń i listew ozdobnych",
								description:
									"Setto oferuje wiele wariantów przeszkleń i listew ozdobnych, dzięki czemu drzwi można dopasować do stylu budynku.",
							},
							{
								name: "Możliwość dopasowania klamek i pochwytów do stylu budynku",
								description:
									"Szeroki wybór klamek i pochwytów pozwala dopełnić wygląd drzwi i dopasować je do charakteru całej elewacji.",
							},
						],
					},
					{
						id: "wegrzyn",
						name: "Węgrzyn",
						description:
							"Drzwi drewniane zewnętrzne Węgrzyn kierujemy głównie do klientów, którzy cenią solidny, bardziej tradycyjny charakter stolarki. Dobrze odnajdują się w domach o klasycznej architekturze, budynkach z dachem wielospadowym, elewacjami z cegły lub tynku strukturalnego.",
						features: [
							{
								name: "Mocniejszy, \u201Epełniejszy\u201D wygląd skrzydeł",
								description:
									"Drzwi Węgrzyn wyróżniają się solidną konstrukcją i pełnym, masywnym wyglądem, który dobrze komponuje się z tradycyjną architekturą.",
							},
							{
								name: "Dobre dopasowanie do tradycyjnej architektury i domów modernizowanych",
								description:
									"Wzornictwo i materiały idealnie pasują do domów o klasycznym charakterze oraz budynków poddawanych modernizacji.",
							},
						],
					},
					{
						id: "doorsy",
						name: "Doorsy",
						description:
							"Doorsy to producent, którego drzwi zewnętrzne drewniane często wybieramy do nowoczesnych domów i bardziej wymagających wizualnie projektów. Charakterystyczne wzory, szerokie przeszklenia i dopracowane detale sprawiają, że samo wejście staje się ważnym elementem elewacji.",
						features: [
							{
								name: "Szeroka gama nowoczesnych wzorów",
								description:
									"Doorsy oferuje bogatą kolekcję nowoczesnych wzorów, które wyróżniają wejście do budynku i nadają mu indywidualny charakter.",
							},
							{
								name: "Opcje z dużymi pochwytami",
								description:
									"Możliwość wyposażenia drzwi w duże, efektowne pochwyty, które podkreślają nowoczesny styl i ułatwiają codzienne użytkowanie.",
							},
						],
					},
					{
						id: "gerda",
						name: "Gerda",
						description:
							"Drzwi zewnętrzne Gerda polecamy szczególnie tam, gdzie priorytetem jest bezpieczeństwo i poczucie kontroli nad wejściem do budynku. To dobry wybór do mieszkań w blokach, domów w gęstej zabudowie oraz wszędzie tam, gdzie chcesz mieć wyższy standard zabezpieczeń.",
						features: [
							{
								name: "Modele z podwyższoną odpornością na włamanie",
								description:
									"Gerda oferuje drzwi o podwyższonej klasie antywłamaniowej, co zapewnia większe bezpieczeństwo domownikom.",
							},
							{
								name: "Możliwość dopasowania wyposażenia (zamki, wkładki, okucia)",
								description:
									"Szeroki wybór zamków, wkładek i okuć pozwala skonfigurować drzwi dokładnie pod indywidualne wymagania bezpieczeństwa.",
							},
						],
					},
				],
			},
			montaz: {
				heading: ["Montaż i serwis", "drzwi zewnętrznych"],
				steps: [
					{ number: "1", title: "Pomiar na miejscu" },
					{ number: "2", title: "Oferta z jasno opisanym zakresem" },
					{ number: "3", title: "Montaż w umówionym terminie" },
					{ number: "4", title: "Regulacja i opieka po montażu" },
				],
			},
			ctaSection:
				"Szukasz drzwi zewnętrznych do domu, mieszkania albo lokalu w Sanoku i okolicy? Przygotujemy dla Ciebie propozycje na bazie drzwi Erkado, Setto, Węgrzyn, Doorsy i Gerda, dopasowane do budynku, budżetu i terminu inwestycji.",
		},

		// ──────────────────────────────────────────────────────────
		// PRODUKTY > ROLETY
		// ──────────────────────────────────────────────────────────
		produktyRolety: {
			hero: {
				image: "/images/hero-bg-2.jpg",
				imageAlt: "Rolety zewnętrzne i wewnętrzne z montażem",
				breadcrumbs: ["home", "Produkty", "Rolety"],
				heading: ["Rolety zewnętrzne", "i wewnętrzne z montażem"],
				description:
					"Rolety pełnią kilka ról naraz: chronią przed słońcem, poprawiają komfort cieplny, dają poczucie prywatności i bezpieczeństwa. W Trendhomes dobieramy osłony okienne do okien, elewacji i sposobu życia domowników, a potem bierzemy na siebie pomiar, montaż i regulację. Pracujemy zarówno na roletach zewnętrznych, jak i systemach wewnętrznych, dopasowanych do mieszkań, domów i lokali w Sanoku oraz okolicach Bieszczad.",
				ctaText: "Umów pomiar w 48 h",
			},
			forWhom: {
				heading: ["Dla kogo są nasze", "rolety"],
				cards: [
					{
						title: "Budujesz nowy dom",
						text: "Dla osób budujących nowy dom i chcących od razu przewidzieć osłony okienne razem z oknami.",
					},
					{
						title: "Remontujesz mieszkanie",
						text: "Dla tych, którzy remontują mieszkanie w bloku i chcą poprawić komfort oraz prywatność.",
					},
					{
						title: "Masz dom jednorodzinny",
						text: "Dla właścicieli domów jednorodzinnych, którzy szukają lepszej ochrony przed słońcem, hałasem i włamaniem.",
					},
					{
						title: "Prowadzisz lokal lub biuro",
						text: "Dla właścicieli lokali usługowych i biur, w których trzeba pogodzić komfort klientów z pracą personelu przy ekranach.",
					},
				],
			},
			zewnetrzne: {
				heading: ["Rolety", "zewnętrzne"],
				description:
					"Rolety zewnętrzne chronią przed słońcem, hałasem i próbami włamania. Dobieramy je pod typ budynku, sposób montażu i oczekiwania inwestora. Pracujemy na dwóch głównych systemach: adaptacyjnym i podtynkowym.",
				items: [
					{
						name: "Rolety adaptacyjne",
						description:
							"Rolety adaptacyjne to rozwiązanie, które najczęściej stosujemy przy: istniejących domach i mieszkaniach, gdzie elewacja jest już gotowa; remontach, kiedy nie ma możliwości ingerencji w ocieplenie; sytuacjach, w których inwestor chce założyć rolety \u201Epo fakcie\u201D, bez dużych prac budowlanych. Kaseta montowana jest na zewnątrz okna, a prowadnice przykręca się do ościeżnicy lub ściany. Dobór koloru kasety i prowadnic do elewacji pozwala zachować estetykę budynku. Sterowanie może być ręczne (pasek, sprężyna) lub elektryczne (napęd rurowy z pilotem, integracja ze smart home).",
					},
					{
						name: "Rolety podtynkowe",
						description:
							"Rolety podtynkowe przewiduje się zazwyczaj na etapie projektu domu lub większej przebudowy. Kaseta schowana jest w warstwie ocieplenia, dzięki czemu po wykończeniu elewacji roleta jest praktycznie niewidoczna. Współpracujemy z ekipą budowlaną inwestora — ustalamy wymiary kasety, położenie prowadnic i trasowanie przewodów elektrycznych jeszcze przed tynkowaniem. To rozwiązanie wymaga planowania z wyprzedzeniem, ale efekt końcowy jest najbardziej estetyczny i trwały.",
					},
				],
				ctaText: "Zapytaj o rolety zewnętrzne",
			},
			wewnetrzne: {
				heading: ["Rolety", "wewnętrzne"],
				description:
					"Rolety wewnętrzne pozwalają precyzyjnie sterować ilością światła, zapewniają prywatność i stanowią element aranżacji wnętrza. Oferujemy kilka systemów, które dobieramy pod typ okna, pomieszczenie i styl wnętrza.",
				items: [
					{
						name: "Rolety dzień-noc",
						description:
							"Rolety dzień-noc składają się z naprzemiennych pasów tkaniny przezroczystej i nieprzezroczystej. Przesuwając pasy względem siebie, płynnie regulujesz ilość światła wpadającego do pomieszczenia — od pełnego prześwitu, przez delikatne filtrowanie, aż po znaczące zaciemnienie. Dobrze sprawdzają się w salonach, sypialniach i kuchniach, gdzie natężenie światła zmienia się w ciągu dnia.",
					},
					{
						name: "Plisy okienne",
						description:
							"Plisy to tkanina złożona w harmonijkę, którą można przesuwać zarówno od góry, jak i od dołu. Dzięki temu zasłonisz dolną część okna, pozostawiając światło u góry — lub odwrotnie. Plisy są szczególnie popularne na oknach o niestandardowych kształtach: trójkątnych, trapezowych czy półokrągłych.",
					},
					{
						name: "Żaluzje drewniane",
						description:
							"Żaluzje drewniane (tzw. żaluzje bambusowe lub baswoodowe) nadają wnętrzu ciepły, naturalny charakter. Lamele o szerokości 25, 35 lub 50 mm można obracać, regulując ilość światła. Dobrze komponują się z wnętrzami w stylu skandynawskim, klasycznym i rustykalnym. Montujemy je na ramie okna, w świetle ościeżnicy lub na ścianie.",
					},
					{
						name: "Rolety na okna dachowe",
						description:
							"Okna dachowe wymagają dedykowanych systemów rolet, dopasowanych do kąta nachylenia i sposobu otwierania. Oferujemy rolety zaciemniające, plisy i markizy zewnętrzne na okna dachowe wiodących producentów. Każdy system dobieramy pod konkretny model okna i warunki montażu na poddaszu.",
					},
					{
						name: "Rolety blackout",
						description:
							"Rolety o podwyższonym stopniu zaciemnienia (blackout) blokują praktycznie 100% światła. Stosuje się je przede wszystkim w sypialniach, pokojach dziecięcych, salach konferencyjnych i pomieszczeniach, w których pracuje się przy projektorach. Dostępne są w systemach kasetowych z prowadnicami, które eliminują przenikanie światła po bokach tkaniny.",
					},
				],
				ctaText: "Zapytaj o rolety wewnętrzne",
			},
			dobor: {
				heading: ["Dobór i montaż", "rolet wewnętrznych"],
				description:
					"Przy doborze rolet wewnętrznych zwracamy uwagę na kilka elementów, które mają bezpośredni wpływ na wybór systemu i sposób montażu.",
				details: [
					{
						label: "Sposób otwierania okna",
						text: "Okno rozwierno-uchylne, przesuwne czy stałe — każdy typ wymaga innego sposobu montażu rolety, żeby nie kolidować z klamką ani nie ograniczać otwierania.",
					},
					{
						label: "Rodzaj ramy okiennej",
						text: "Rama PVC, drewniana czy aluminiowa — od materiału i kształtu profilu zależy wybór uchwytu montażowego: klips, wkręt, taśma lub kaseta przyklejana.",
					},
					{
						label: "Głębokość ościeżnicy",
						text: "Przy płytkim wnęku może nie zmieścić się kaseta z roletą — wtedy proponujemy montaż na ścianie lub alternatywny system (np. plisy zamiast rolety kasetowej).",
					},
					{
						label: "Aranżacja wnętrza",
						text: "Kolor, faktura tkaniny i rodzaj kasety powinny współgrać ze stylem pomieszczenia. Pomagamy dobrać tkaninę z próbnika i podpowiadamy, co sprawdzi się w danym wnętrzu.",
					},
				],
			},
			cta: {
				heading:
					"Szukasz rolet do domu, mieszkania albo lokalu w Sanoku?",
				description:
					"Szukasz rolet zewnętrznych lub wewnętrznych do domu, mieszkania albo lokalu w Sanoku i okolicach? Dobierzemy rozwiązanie dopasowane do Twoich okien, elewacji i sposobu użytkowania pomieszczeń, a potem zajmiemy się pomiarem i montażem.",
				ctaText: "Skontaktuj się z Nami",
			},
		},

		// ──────────────────────────────────────────────────────────
		// PRODUKTY > PERGOLE
		// ──────────────────────────────────────────────────────────
		produktyPergole: {
			hero: {
				image: "/images/pergola-banner.jpg",
				imageAlt: "Pergole i ogrody zimowe od Trendhomes",
				breadcrumbs: ["home", "Produkty", "Pergole"],
				heading: "Pergole i ogrody zimowe",
				description:
					"Taras i ogród to dziś pełnoprawna część domu, a nie tylko miejsce na suszarkę do prania. Dobrze zaprojektowana pergola albo ogród zimowy pozwalają korzystać z tej przestrzeni dużo dłużej niż tylko w lipcu i sierpniu. W Trendhomes pomagamy zamienić zwykły taras w strefę wypoczynku, jadalnię na świeżym powietrzu albo domowe \u201Espa\u201D z widokiem na Bieszczady.",
				descriptionSecondary:
					"Zamiast katalogu systemów skupiamy się na Twoim domu, ogrodzie i sposobie, w jaki faktycznie chcesz z tej przestrzeni korzystać.",
				ctaText: "Umów pomiar w 48 h",
			},
			forWhom: {
				heading: ["Dla kogo są pergole", "i ogrody zimowe"],
				items: [
					{
						label: "Dom z ogrodem i tarasem",
						text: "Masz taras, ale w praktyce korzystasz z niego tylko w kilka najcieplejszych tygodni w roku. Chcesz mieć miejsce, gdzie można spokojnie napić się kawy, zjeść kolację, posiedzieć z gośćmi, nawet kiedy słońce świeci zbyt mocno albo wieje.",
					},
					{
						label: "Dom z pięknym widokiem (Bieszczady, okolice Sanoka)",
						text: "Widok z okien aż się prosi, żeby go wykorzystać, ale pogoda nie zawsze współpracuje. Ogród zimowy pozwala siedzieć \u201Ew ogrodzie\u201D, nawet kiedy jest chłodniej, a deszcz stuka w szyby.",
					},
					{
						label: "Rodziny z dziećmi",
						text: "Pergola lub ogród zimowy to bezpieczna przestrzeń do zabawy blisko domu, gdzie można rozłożyć zabawki, stolik czy wygodne fotele, bez wnoszenia wszystkiego do środka przy każdej zmianie pogody.",
					},
					{
						label: "Osoby, które lubią zapraszać gości",
						text: "Grille, spotkania, wieczory przy winie – dobrze zaprojektowana strefa zadaszonego tarasu robi ogromną różnicę. To po prostu dodatkowy salon na zewnątrz.",
					},
				],
			},
			solutions: {
				heading: ["Jakie rozwiązania", "projektujemy najczęściej"],
				items: [
					{
						title: "Pergole przyścienne nad tarasem",
						text: "Montowane bezpośrednio przy elewacji domu, tworzą naturalne przedłużenie salonu lub jadalni. Dzięki regulowanym lamelom lub tkaninie możesz kontrolować ilość światła i cienia, a odprowadzanie wody chroni przed deszczem. To najczęściej wybierane rozwiązanie przy domach jednorodzinnych w naszym regionie.",
					},
					{
						title: "Pergole wolnostojące w ogrodzie",
						text: "Dobre rozwiązanie, kiedy chcesz mieć dodatkową strefę wypoczynku trochę dalej od domu – na przykład przy jacuzzi, grillu lub nad stawem. Konstrukcja stoi niezależnie, więc nie ingeruje w elewację i można ją postawić w dowolnym miejscu ogrodu.",
					},
					{
						title: "Zabudowy tarasów – lekkie ogrody zimowe",
						text: "Przeszklone konstrukcje, które pozwalają korzystać z tarasu od wczesnej wiosny do późnej jesieni. Szyby osłaniają przed wiatrem i deszczem, a systemy wentylacji zapewniają komfort w cieplejsze dni. To świetna alternatywa dla tych, którzy chcą więcej niż pergolę, ale nie potrzebują pełnego ogrodu zimowego.",
					},
					{
						title: "Ogrody zimowe całoroczne",
						text: "Rozwiązania projektowane z myślą o użytkowaniu także zimą. Izolowane termicznie profile, szyby zespolone i ogrzewanie sprawiają, że ogród zimowy działa jak pełnoprawny pokój – możesz w nim pracować, czytać albo po prostu siedzieć z kawą, patrząc na zaśnieżony ogród.",
					},
				],
			},
			projectFactors: {
				heading: ["Co bierzemy pod uwagę", "przy projekcie"],
				items: [
					"Położenie domu i kierunki świata",
					"Sposób, w jaki obecnie korzystasz z tarasu i ogrodu",
					"Różnice poziomów, istniejące schody, balustrady",
					"Bryłę domu i kolorystykę elewacji oraz stolarki",
					"Budżet i etap prac",
				],
			},
			cta: {
				description:
					"Masz dom z tarasem lub ogrodem i czujesz, że ta przestrzeń mogłaby robić dużo więcej niż dziś? W Trendhomes projektujemy pergole i ogrody zimowe pod konkretny dom, widok i sposób życia domowników.",
				ctaText: "Skontaktuj się z nami",
			},
		},

		// ──────────────────────────────────────────────────────────
		// PRODUKTY > DRZWI TARASOWE
		// ──────────────────────────────────────────────────────────
		produktyDrzwiTarasowe: {
			hero: {
				image: "/images/okna-hero.png",
				imageAlt: "Drzwi tarasowe od Trendhomes",
				breadcrumbs: ["home", "Produkty", "Drzwi tarasowe"],
				heading: ["Drzwi tarasowe", "przesuwne"],
				description:
					"Drzwi tarasowe to dziś jeden z najważniejszych elementów domu. To przez nie wpada najwięcej światła i to one decydują, czy z salonu faktycznie korzystasz razem z tarasem, czy tylko patrzysz na niego przez szybę. W Trendhomes dobieramy systemy przesuwne tak, żeby pasowały do projektu domu, wielkości otworu, stylu elewacji i budżetu inwestora.",
				descriptionSecondary:
					"Pracujemy zarówno na rozwiązaniach z PCV, jak i aluminium. Dzięki temu możemy dobrać drzwi tarasowe do różnych domów – od klasycznych po nowoczesne, z dużymi przeszkleniami.",
				ctaText: "Umów pomiar w 48 h",
			},
			forWhom: {
				heading: ["Dla kogo są", "drzwi przesuwne"],
				items: [
					"dla osób, które chcą mieć możliwie szerokie, wygodne wyjście na taras lub do ogrodu",
					"dla osób budujących dom z dużymi przeszkleniami od strony ogrodu",
					"dla tych, którzy chcą zminimalizować barierę między salonem a tarasem (niski próg, duża szyba)",
					"dla inwestorów stawiających na nowoczesną bryłę, gdzie taras i salon tworzą jedną przestrzeń",
				],
			},
			systemTypes: {
				heading: [
					"Typy systemów przesuwnych,",
					"które najczęściej stosujemy",
				],
				description:
					"Przy każdym projekcie dobieramy system do: szerokości i wysokości planowanego przeszklenia, tego, w którą stronę ma się otwierać skrzydło, oraz tego, czy w salonie będzie miejsce na meble przy ścianach z drzwiami.",
				items: [
					{
						name: "Systemy podnoszono-przesuwne",
						description:
							"Dobre przy większych gabarytach. Skrzydło unosi się i przesuwa wzdłuż prowadnicy, co pozwala na uzyskanie dużych powierzchni przeszklenia i wygodne otwarcie nawet przy ciężkich pakietach szybowych.",
					},
					{
						name: "Systemy uchylno-przesuwne",
						description:
							"Stosowane przy mniejszych otworach i bardziej klasycznym układzie pomieszczeń. Skrzydło uchyla się do wewnątrz, a następnie przesuwa. Dobre rozwiązanie tam, gdzie nie ma potrzeby stosowania najszerszych przejść.",
					},
					{
						name: "Rozwiązania z niskim progiem",
						description:
							"Ułatwiają wyjście na taras, szczególnie dla dzieci, osób starszych i osób z ograniczoną mobilnością. Próg bezbarierowy minimalizuje barierę między wnętrzem a tarasem.",
					},
					{
						name: "Warianty jedno- i dwuskrzydłowe",
						description:
							"Różne układy otwierania dopasowane do szerokości otworu, sposobu użytkowania i tego, w którą stronę ma się przesuwać skrzydło.",
					},
				],
			},
			pcv: {
				heading: ["Drzwi tarasowe", "przesuwne PCV"],
				description:
					"Drzwi przesuwne z PCV dobrze sprawdzają się w domach jednorodzinnych, w których okna są również w systemie PCV, ważna jest dobra izolacyjność cieplna przy rozsądnym budżecie, a inwestorowi zależy na prostym, sprawdzonym rozwiązaniu.",
				advantagesLabel: "Zalety drzwi tarasowych z PCV:",
				advantages: [
					"dobre parametry cieplne przy korzystnej cenie",
					"możliwość dopasowania kolorystyki do pozostałych okien (biele, szarości, okleiny drewnopodobne)",
					"łatwa pielęgnacja i odporność na codzienne użytkowanie",
				],
				summary:
					"Drzwi tarasowe z PCV są dobrym wyborem, jeśli budujesz dom w klasycznym lub nowoczesnym stylu i całą stolarkę planujesz w PCV, chcesz mieć wygodne wyjście na taras bez wchodzenia w najwyższe półki cenowe, albo zależy Ci na ogarnięciu tematu okien i drzwi tarasowych u jednego producenta systemów.",
			},
			aluminium: {
				heading: ["Drzwi tarasowe", "przesuwne aluminiowe"],
				description:
					"Drzwi aluminiowe polecamy tam, gdzie planujesz naprawdę duże przeszklenia z wąskimi profilami, bryła domu jest bardzo nowoczesna z dużą ilością szkła, a ważna jest maksymalna stabilność konstrukcji i sztywność przy dużych wymiarach.",
				advantagesLabel: "Zalety drzwi tarasowych aluminiowych:",
				advantages: [
					"możliwość tworzenia większych przeszkleń niż w PCV",
					"smuklejsze profile, które dają więcej szkła i światła",
					"wysoka sztywność konstrukcji i dobra współpraca z dużymi przeszkleniami stałymi",
				],
				summary:
					"To dobry kierunek, jeśli masz projekt domu z dużymi oknami tarasowymi na całą wysokość kondygnacji, zależy Ci na bardzo nowoczesnym efekcie wizualnym (wąskie ramy, duże tafle szkła), albo myślisz o spójnym systemie aluminiowym w całym domu.",
			},
			considerations: {
				heading: ["Na co patrzymy", "przy doborze drzwi tarasowych"],
				items: [
					"wymiary otworu i nośność nadproża",
					"połączenie drzwi z posadzką tarasu i poziomami w środku",
					"sposób użytkowania (częstotliwość otwierania, obecność dzieci, kierunki ruchu)",
					"ekspozycja na wiatr i deszcz",
					"budżet oraz oczekiwany efekt wizualny",
				],
			},
			cta: {
				description:
					"Planujesz duże drzwi tarasowe w nowym domu albo wymianę starego wyjścia na taras na system przesuwny? Pomożemy dobrać odpowiedni system PCV lub aluminium, który udźwignie gabaryt, wpisze się w projekt domu i będzie wygodny w codziennym użytkowaniu.",
				descriptionSecondary:
					"Prześlij nam fragment projektu z zaznaczonym wyjściem na taras lub zdjęcia obecnego przeszklenia – przygotujemy propozycję drzwi przesuwnych z wyceną.",
				ctaText: "Skontaktuj się z Nami",
			},
		},

		// ──────────────────────────────────────────────────────────
		// PRODUKTY > OKNA ALUMINIOWE
		// ──────────────────────────────────────────────────────────
		produktyOknaAluminiowe: {
			hero: {
				image: "/images/okna-hero.png",
				imageAlt: "Okna aluminiowe od Trendhomes",
				breadcrumbs: ["home", "Produkty", "Okna Aluminiowe"],
				heading: "Okna aluminiowe",
				description:
					"Okna aluminiowe wybieramy przede wszystkim tam, gdzie liczy się duża wytrzymałość, sztywność profili i możliwość wykonania większych przeszkleń. Sprawdzają się w budynkach użyteczności publicznej, biurowcach, lokalach usługowych oraz w nowoczesnych domach z dużymi powierzchniami szkła. To rozwiązanie bardziej inwestycyjne niż masowe, z wyższej półki cenowej niż standardowe okna PCV.",
				ctaText: "Umów pomiar w 48\u00a0h",
			},
			forWhom: {
				heading: ["Dla kogo są", "okna aluminiowe"],
				items: [
					{
						title: "Budynki użyteczności publicznej i biurowce",
						description:
							"Aluminium dobrze znosi intensywne użytkowanie, zmiany temperatury i większe obciążenia konstrukcyjne. Dlatego wykorzystuje się je w budynkach, które muszą być trwałe i bezpieczne przez lata, przy dużej liczbie użytkowników.",
					},
					{
						title: "Lokale usługowe i witryny",
						description:
							"W lokalach usługowych i na parterach budynków okna aluminiowe pozwalają uzyskać duże, stabilne przeszklenia i wąskie profile. Dzięki temu witryna lepiej eksponuje wnętrze, a stolarka jest bardziej odporna na uszkodzenia mechaniczne niż standardowe okna domowe.",
					},
					{
						title: "Nowoczesne domy z dużymi przeszkleniami",
						description:
							"W części projektów rezydencjonalnych aluminium wykorzystuje się do dużych, często sięgających od podłogi do sufitu przeszkleń. To rozwiązanie droższe niż PVC, ale pozwalające uzyskać efekt wizualny, którego nie da się łatwo osiągnąć na klasycznych systemach.",
					},
				],
			},
			advantages: {
				heading: [
					"Dlaczego czasem warto wybrać",
					"aluminium zamiast PVC",
				],
				items: [
					{
						title: "Stabilność przy dużych gabarytach",
						description:
							"Aluminium lepiej znosi duże wymiary skrzydeł i ciężkie pakiety szybowe, co ma znaczenie przy witrynach, fasadach i przeszkleniach w lokalach usługowych.",
					},
					{
						title: "Odporność mechaniczna",
						description:
							"Profile aluminiowe są bardziej odporne na uszkodzenia mechaniczne niż typowa stolarka okienna w domach. To ważne w miejscach o większym natężeniu ruchu.",
					},
					{
						title: "Nowoczesny wygląd",
						description:
							"Aluminium daje możliwość uzyskania bardzo wąskich ram i nowoczesnego, minimalistycznego efektu. Dobrze komponuje się z nowoczesną architekturą i dużą ilością szkła.",
					},
				],
			},
			howWeWork: {
				heading: ["Jak pracujemy", "z oknami aluminiowymi"],
				description:
					"Okna aluminiowe proponujemy tam, gdzie ich potencjał naprawdę robi różnicę — w nowoczesnych projektach, dużych przeszkleniach i inwestycjach wymagających maksymalnej trwałości oraz sztywności konstrukcji. Na etapie rozmowy analizujemy projekt i pomagamy dobrać rozwiązanie, które najlepiej spełni wymagania inwestycji — czy będzie to aluminium, wysokiej klasy PVC, czy inny system.",
				descriptionSecondary:
					"Jeśli aluminium jest najlepszym wyborem, dobieramy odpowiedni system profili, technologię montażu i przygotowujemy ofertę z pełnym zakresem prac.",
			},
			cta: {
				description:
					"Szukasz okien aluminiowych do biura, lokalu usługowego albo nowoczesnego domu z dużymi przeszkleniami? Napisz do nas, przygotujemy propozycję dopasowaną do Twojej inwestycji.",
				ctaText: "Skontaktuj się z Nami",
			},
		},

		// ──────────────────────────────────────────────────────────
		// PRODUKTY > DRZWI ALUMINIOWE
		// ──────────────────────────────────────────────────────────
		produktyDrzwiAluminiowe: {
			hero: {
				image: "/images/okna-hero.png",
				imageAlt: "Drzwi aluminiowe od Trendhomes",
				breadcrumbs: ["home", "Produkty", "Drzwi Aluminiowe"],
				heading: "Drzwi aluminiowe",
				description:
					"Drzwi aluminiowe wybiera się tam, gdzie liczy się wytrzymałość, stabilność konstrukcji i nowoczesny wygląd. Sprawdzają się w wejściach do lokali usługowych, biur, budynków użyteczności publicznej, a także w części nowoczesnych domów jednorodzinnych.",
				ctaText: "Zapytaj o wycenę",
			},
			forWhom: {
				heading: ["Dla kogo są drzwi", "aluminiowe"],
				items: [
					{
						label: "Lokale usługowe i sklepy",
						text: "Drzwi aluminiowe wytrzymują intensywny ruch klientów, dobrze wyglądają od strony ulicy i pozwalają na duże przeszklenia, które eksponują wnętrze lokalu.",
					},
					{
						label: "Biura i budynki usługowe",
						text: "W budynkach biurowych liczy się stabilność, estetyka i możliwość integracji z systemami kontroli dostępu. Aluminium dobrze sprawdza się w takich zastosowaniach.",
					},
					{
						label: "Nowoczesne domy jednorodzinne",
						text: "Coraz więcej domów powstaje z dużymi przeszkleniami i prostą bryłą. Drzwi aluminiowe z wąskimi profilami idealnie pasują do takiej architektury i dobrze współgrają z oknami aluminiowymi.",
					},
					{
						label: "Wejścia narażone na trudniejsze warunki",
						text: "Tam, gdzie drzwi muszą wytrzymać wiatr, deszcz, częste otwieranie i zamykanie lub duże gabaryty, aluminium jest bardziej stabilne niż PCV.",
					},
				],
			},
			dlaczegoWarto: {
				heading: ["Dlaczego warto wybrać", "drzwi aluminiowe"],
				items: [
					{
						title: "Stabilność przy większych gabarytach",
						description:
							"Aluminiowe profile utrzymują sztywność nawet przy dużych wymiarach skrzydeł, co pozwala na realizację szerokich i wysokich drzwi bez ryzyka odkształceń.",
					},
					{
						title: "Odporność na intensywne użytkowanie",
						description:
							"Aluminium nie odkształca się, nie pęcznieje i nie wymaga malowania. Sprawdza się tam, gdzie drzwi otwiera się dziesiątki razy dziennie.",
					},
					{
						title: "Nowoczesny wygląd i wąskie profile",
						description:
							"Wąskie ramy aluminiowe maksymalizują powierzchnię przeszklenia i nadają drzwiom lekki, współczesny charakter, który dobrze komponuje się z nowoczesnymi elewacjami.",
					},
					{
						title: "Dopasowanie do reszty stolarki",
						description:
							"Drzwi aluminiowe można zestawić kolorystycznie i stylistycznie z oknami, fasadami i bramami, tworząc spójny wygląd całego budynku.",
					},
				],
			},
			zastosowania: {
				heading: ["Przykładowe", "zastosowania"],
				items: [
					"drzwi aluminiowe do lokali usługowych, biur i gabinetów",
					"drzwi wejściowe aluminiowe do domów jednorodzinnych",
					"drzwi aluminiowe z dużymi przeszkleniami",
					"drzwi w zabudowach witrynowych i fasadach",
					"drzwi z przygotowaniem pod automatykę",
				],
			},
			processSteps: {
				heading: ["Jak wygląda", "proces realizacji"],
				steps: [
					{ number: "1", title: "Rozpoznanie potrzeb i obiektu" },
					{ number: "2", title: "Dobór systemu i wstępna wycena" },
					{ number: "3", title: "Pomiar na miejscu" },
					{ number: "4", title: "Produkcja i montaż" },
					{ number: "5", title: "Odbiór i serwis" },
				],
			},
			cta: {
				description:
					"Potrzebujesz drzwi aluminiowych do lokalu, biura albo nowoczesnego domu w Sanoku i okolicach? Dobierzemy rozwiązanie dopasowane do budynku, ruchu klientów i Twojego budżetu.",
				ctaText: "Napisz do nas",
			},
		},

		// ──────────────────────────────────────────────────────────
		// PRODUKTY > DRZWI WEWNĘTRZNE
		// ──────────────────────────────────────────────────────────
		produktyDrzwiWewnetrzne: {
			hero: {
				image: "/images/okna-hero.png",
				imageAlt: "Drzwi wewnętrzne z montażem od Trendhomes",
				breadcrumbs: ["home", "Produkty", "Drzwi Wewnętrzne"],
				heading: ["Drzwi wewnętrzne", "z montażem"],
				description:
					"Drzwi wewnętrzne mają trzymać klimat we wnętrzu, pasować do podłóg i ścian, a przy tym po prostu wygodnie działać na co dzień. W Trendhomes dobieramy drzwi do gotowych aranżacji i nowych projektów, pomagamy ogarnąć ościeżnice regulowane, kierunek otwierania, przesuwki i detale wykończeniowe. Na końcu przyjeżdża ekipa, montuje wszystko w umówionym terminie i zostawia mieszkanie w takim stanie, żeby dało się normalnie funkcjonować.",
				ctaText: "Umów pomiar w 48 h",
			},
			forWhom: {
				heading: ["Dla kogo są nasze", "drzwi wewnętrzne"],
				items: [
					{
						label: "Nowy dom jednorodzinny",
						text: "Jeśli wykańczasz nowy dom, drzwi muszą zagrać z podłogami, listwami, kolorystyką ścian i stylem całego wnętrza. Pomagamy dobrać modele, ościeżnice i klamki tak, żeby całość wyglądała spójnie od samego początku.",
					},
					{
						label: "Remont mieszkania lub domu",
						text: "Przy remoncie często trzeba wpasować nowe drzwi w stare ściany, nierówne otwory i istniejące podłogi. Dobieramy ościeżnice regulowane i modele, które da się zamontować bez przerabiania połowy korytarza.",
					},
					{
						label: "Mieszkanie od dewelopera",
						text: "Jeśli odbierasz lokal \u201Epod biały montaż\u201D, pomagamy szybko przejść od katalogu do konkretnych modeli, które pasują do metrażu, rozkładu i planowanej aranżacji.",
					},
					{
						label: "Biuro lub lokal usługowy",
						text: "W biurach i lokalach drzwi wewnętrzne muszą wytrzymać więcej otwierania, a czasem też spełniać dodatkowe wymagania akustyczne lub przeciwpożarowe. Dobieramy rozwiązania dopasowane do charakteru działalności.",
					},
				],
			},
			whyTrendhomes: {
				heading: [
					"Dlaczego warto zamówić",
					"drzwi wewnętrzne w Trendhomes",
				],
				items: [
					{
						icon: "/images/icon-profile.svg",
						title: "Kilku producentów, jeden wykonawca",
						description:
							"Pracujemy z Erkado, Voster, Intenso i DRE, dzięki czemu możemy dobrać drzwi do wnętrza, budżetu i stylu, a nie wciskać jednego katalogu.",
					},
					{
						icon: "/images/icon-measure.svg",
						title: "Patrzymy na całe wnętrze, nie tylko na pojedyncze skrzydło",
						description:
							"Dobieramy drzwi razem z podłogami, listwami i kolorystyką ścian, żeby całość wyglądała spójnie i nie trzeba było potem niczego poprawiać.",
					},
					{
						icon: "/images/icon-helmet.svg",
						title: "Pomoc przy \u201Etechnicznych\u201D decyzjach",
						description:
							"Ościeżnice regulowane czy stałe, kierunek otwierania, podcięcia wentylacyjne, przesuwki – pomagamy ogarnąć detale, żebyś nie musiał się w to wgryzać.",
					},
					{
						icon: "/images/icon-profile.svg",
						title: "Lokalny montaż i serwis",
						description:
							"Przyjeżdżamy z ekipą montażową, montujemy drzwi w umówionym terminie i wracamy, kiedy trzeba coś wyregulować. Nie znikamy po odbiorze.",
					},
				],
			},
			manufacturers: {
				heading: [
					"Producenci drzwi wewnętrznych,",
					"z którymi pracujemy",
				],
				featuresLabel: "Cechy wyróżniające",
				items: [
					{
						id: "erkado",
						name: "Erkado",
						description:
							"Drzwi wewnętrzne Erkado to szeroki wybór wzorów, oklein i kolorów, które łatwo dopasować do podłóg, ścian i mebli. W ofercie znajdziesz wersje pełne, łazienkowe i przeszklone, a do każdego modelu można dobrać pasującą klamkę i ościeżnicę. To marka, którą często proponujemy klientom szukającym solidnych drzwi w rozsądnym budżecie.",
						features: [
							{
								name: "Dużo oklein i kolorów",
								description:
									"Erkado oferuje szeroką gamę oklein i kolorów, dzięki czemu łatwo dopasować drzwi do podłóg, ścian i mebli w każdym wnętrzu.",
							},
							{
								name: "Wersje pełne, łazienkowe i przeszklone",
								description:
									"W ofercie znajdziesz modele pełne do sypialni, łazienkowe z odpowiednią wentylacją oraz przeszklone, które doświetlają wnętrza.",
							},
							{
								name: "Dopasowanie klamek do modelu drzwi",
								description:
									"Do każdego modelu Erkado można dobrać pasującą klamkę i ościeżnicę, żeby całość wyglądała spójnie.",
							},
						],
					},
					{
						id: "voster",
						name: "Voster",
						description:
							"Voster to drzwi, które często wykorzystujemy w nowoczesnych wnętrzach. Charakteryzują się prostymi liniami, pionowymi lub poziomymi podziałami i dobrym wykończeniem powierzchni. Dobrze komponują się z minimalistycznymi aranżacjami, stylem skandynawskim i nowoczesnymi podłogami.",
						features: [
							{
								name: "Pionowe i poziome podziały",
								description:
									"Drzwi Voster wyróżniają się charakterystycznymi pionowymi lub poziomymi podziałami, które nadają im nowoczesny charakter.",
							},
							{
								name: "Styl nowoczesny i skandynawski",
								description:
									"Proste linie i dobre wykończenie sprawiają, że drzwi Voster świetnie pasują do minimalistycznych i skandynawskich aranżacji.",
							},
						],
					},
					{
						id: "intenso",
						name: "Intenso",
						description:
							"Drzwi Intenso to propozycja dla osób, które oczekują najwyższej jakości wykończenia i trwałości. Marka oferuje praktyczne modele o prostych, eleganckich wzorach, które dobrze sprawdzają się zarówno w mieszkaniach, jak i domach jednorodzinnych.",
						features: [
							{
								name: "Praktyczne modele",
								description:
									"Intenso stawia na funkcjonalność i trwałość, oferując drzwi, które wytrzymują codzienne użytkowanie przez wiele lat.",
							},
							{
								name: "Proste, eleganckie wzory",
								description:
									"Minimalistyczne wzornictwo sprawia, że drzwi Intenso pasują do większości stylów wnętrz, od klasycznych po nowoczesne.",
							},
						],
					},
					{
						id: "dre",
						name: "DRE",
						description:
							"DRE to marka, którą często polecamy klientom szukającym ciekawszego wyglądu drzwi wewnętrznych. W ofercie znajdziesz zarówno kolekcje klasyczne, jak i nowoczesne, z opcją ukrytych zawiasów i nietypowych przeszkleń. To dobry wybór, jeśli drzwi mają być widocznym elementem aranżacji.",
						features: [
							{
								name: "Kolekcje klasyczne i nowoczesne",
								description:
									"DRE oferuje zarówno klasyczne wzory z frezowaniami, jak i nowoczesne modele z gładkimi powierzchniami i przeszkleniami.",
							},
							{
								name: "Ukryte zawiasy",
								description:
									"Opcja ukrytych zawiasów sprawia, że drzwi wyglądają minimalistycznie i nowocześnie, bez widocznych elementów montażowych.",
							},
						],
					},
				],
			},
			doorTypes: {
				heading: ["Jakie rodzaje drzwi", "wewnętrznych montujemy"],
				items: [
					"drzwi pokojowe pełne i z przeszkleniami",
					"drzwi łazienkowe z podcięciami i tulejami wentylacyjnymi",
					"drzwi do garderoby i pomieszczeń gospodarczych",
					"drzwi przesuwne na systemach naściennych i w kasecie",
					"drzwi z ościeżnicami stałymi i regulowanymi",
				],
			},
			montaz: {
				heading: ["Jak wygląda montaż", "drzwi wewnętrznych"],
				steps: [
					{ number: "1", title: "Pomiar i weryfikacja otworów" },
					{ number: "2", title: "Dobór modeli i ościeżnic" },
					{ number: "3", title: "Montaż w umówionym terminie" },
					{ number: "4", title: "Regulacja i ewentualne poprawki" },
				],
			},
			cta: {
				description:
					"Wykańczasz dom albo remontujesz mieszkanie i potrzebujesz drzwi wewnętrznych z montażem? Dobierzemy modele z oferty Erkado, Voster, Intenso i DRE tak, żeby pasowały do Twojego wnętrza, planu prac i budżetu.",
				ctaText: "Umów pomiar w 48 h",
			},
		},

		// ──────────────────────────────────────────────────────────
		// PRODUKTY > OKNA DREWNIANE
		// ──────────────────────────────────────────────────────────
		produktyOknaDrewniane: {
			hero: {
				image: "/images/okna-hero.png",
				imageAlt: "Okna drewniane od Trendhomes",
				breadcrumbs: ["home", "Produkty", "Okna Drewniane"],
				heading: "Okna drewniane",
				description:
					"Okna drewniane są dla klientów, którzy chcą połączyć solidne parametry techniczne z naturalnym materiałem i bardziej \u201Eprzytulnym\u201D wyglądem stolarki. Dobrze sprawdzają się w domach jednorodzinnych, budynkach z historią oraz wszędzie tam, gdzie drewno pojawia się już w elewacji albo wewnątrz. Pracujemy na siedmiu systemach drewnianych jednego z największych producentów na rynku – seriach Naturo i Esperia Life.",
				ctaText: "Umów pomiar w 48 h",
			},
			systems: {
				heading: ["Systemy okien drewnianych,", "na których pracujemy"],
				description:
					"Pracujemy na siedmiu systemach drewnianych z linii Naturo, Esperia Life i Gueule de Loup. Każdy z nich różni się głębokością profilu, parametrami cieplnymi i konstrukcją – od klasycznych ram drewnianych po rozwiązania drewniano-aluminiowe. Na podstawie projektu, standardu energetycznego domu i budżetu dobieramy konkretny system do Twojej inwestycji.",
				items: [
					{
						name: "Naturo 68",
						image: "/images/products/naturo-68.png",
						depth: "68 mm",
						glazing: "24–32 mm",
						seals: "2",
						layers: "3",
						uw: "1,07",
						uwNote: "Uw dla Ug = 0,8 (ramka Ultimate)*",
						description:
							"Naturo 68 traktujemy jako solidny punkt startowy wśród okien drewnianych. Profil o głębokości 68 mm, wykonany z klejonego warstwowo drewna, dobrze sprawdza się w klasycznych domach i modernizowanych budynkach. To propozycja dla inwestorów, którzy chcą mieć drewnianą stolarkę o porządnych parametrach bez wchodzenia od razu w najwyższe systemy. Jeśli budynek nie wymaga ekstremalnej izolacyjności, a zależy Ci na naturalnym wyglądzie okien – Naturo 68 będzie rozsądnym wyborem na start.",
					},
					{
						name: "Naturo 68 ALU",
						image: "/images/products/naturo-68-alu.png",
						depth: "68 mm",
						glazing: "24–32 mm",
						seals: "2",
						layers: "3",
						uw: "1,07",
						uwNote: "Uw dla Ug = 0,8 (ramka Ultimate)*",
						description:
							"Naturo 68 ALU to ten sam drewniany rdzeń, ale z zewnętrzną nakładką aluminiową. Od środka wciąż widzisz naturalne drewno, a od strony elewacji pracuje aluminium, które nie wymaga malowania i lepiej znosi warunki atmosferyczne. To rozwiązanie dla klientów, którzy lubią drewno w środku, ale nie chcą się martwić o konserwację od zewnątrz. Sprawdza się szczególnie w budynkach narażonych na silne opady, nasłonecznienie lub tam, gdzie dostęp do okien od strony elewacji jest utrudniony.",
					},
					{
						name: "Naturo 80",
						image: "/images/products/naturo-80.png",
						depth: "80 mm",
						glazing: "34–44 mm",
						seals: "2–3",
						layers: "3–4",
						uw: "0,81",
						uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
						description:
							"Naturo 80 jest rozwinięciem systemu 68 – z większą głębokością profilu i możliwością zastosowania szerszych pakietów szybowych. Dzięki temu okna lepiej izolują cieplnie i akustycznie, co ma znaczenie w domach z pompą ciepła lub w lokalizacjach, gdzie liczy się cisza. Wybieramy ten system, gdy budynek wymaga lepszych parametrów niż podstawowa klasa, ale inwestor nie potrzebuje jeszcze najgrubszego profilu 92 mm.",
					},
					{
						name: "Naturo 80 ALU",
						image: "/images/products/naturo-80-alu.png",
						depth: "80 mm",
						glazing: "35–64 mm",
						seals: "3",
						layers: "3–4",
						uw: "0,82",
						uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
						description:
							"Naturo 80 ALU łączy wyższy standard cieplny z ochroną drewna przez nakładkę aluminiową po stronie zewnętrznej. To kompromis między komfortem użytkowania drewna wewnątrz a trwałością i bezobsługowością od strony pogody. Polecamy go w domach, gdzie zależy na dobrym Uw okna, a jednocześnie inwestor nie chce wracać do tematu malowania ram co kilka lat.",
					},
					{
						name: "Naturo 92",
						image: "/images/products/naturo-92.png",
						depth: "92 mm",
						glazing: "46–56 mm",
						seals: "2–3",
						layers: "4",
						uw: "0,77",
						uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
						description:
							"Naturo 92 to system z najwyższej półki w linii Naturo. Grubość profilu 92 mm pozwala na montaż potrójnych pakietów szybowych o bardzo dobrych parametrach cieplnych i akustycznych. To rozwiązanie kierujemy do domów energooszczędnych, budynków pasywnych lub inwestycji, w których stolarka ma realnie wpływać na bilans energetyczny. Jeśli projektujesz dom z myślą o niskich kosztach ogrzewania w dłuższej perspektywie – Naturo 92 będzie jednym z pierwszych systemów, które zaproponujemy.",
					},
					{
						name: "Esperia Life 74 ALU",
						image: "/images/products/esperia-life-74-alu.png",
						depth: "74 mm",
						glazing: "do 48 mm",
						seals: "3",
						layers: "4",
						uw: "0,8",
						uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
						description:
							"Esperia Life 74 ALU to system dla klientów, którzy oczekują od stolarki drewnianej bardziej wyrafinowanego wyglądu i smuklejszych profili. Konstrukcja drewniano-aluminiowa daje czystą, nowoczesną linię od zewnątrz, zachowując ciepło drewna w środku. Sprawdza się w projektach architektonicznych, gdzie liczy się proporcja i detal – np. w domach z dużymi przeszkleniami, minimalistycznymi elewacjami lub tam, gdzie stolarka ma współgrać z aluminiowymi elementami budynku.",
					},
					{
						name: "Esperia Life 80",
						image: "/images/products/esperia-life-80.png",
						depth: "80 mm",
						glazing: "do 48 mm",
						seals: "3",
						layers: "4",
						uw: "0,83",
						uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
						description:
							"Esperia Life 80 to linia premium wśród drewnianych okien producenta. Głębszy profil pozwala na jeszcze lepsze parametry cieplne i akustyczne, a linia Esperia Life wyróżnia się smukłymi kształtami i dopracowanymi detalami. Ten system wybieramy do domów, w których stolarka ma być nie tylko funkcjonalna, ale też stanowić widoczny element architektury. Dobrze współgra z nowoczesnymi projektami, dużymi formatami okien i inwestycjami, gdzie jakość wykończenia ma kluczowe znaczenie.",
					},
				],
			},
			summary: {
				heading: [
					"Podsumowanie –",
					"okna drewniane Naturo i Esperia Life",
				],
				description:
					"Okna drewniane z linii Naturo i Esperia Life to rozwiązanie dla inwestorów, którzy chcą połączyć naturalny materiał, dobry standard techniczny i dopasowanie do charakteru budynku. Na podstawie projektu, standardu energetycznego domu i budżetu dobieramy 2–3 konkretne systemy, zamiast zasypywać Cię pełnym katalogiem.",
			},
			cta: {
				description:
					"Prześlij nam rzut domu lub kilka zdjęć budynku – przygotujemy propozycję drewnianych okien Naturo lub Esperia Life dopasowaną do Twojego projektu.",
				ctaText: "Wyślij zapytanie",
				descriptionSecondary:
					"Zadzwoń lub napisz, a podpowiemy, który z 7 systemów drewnianych będzie rozsądnym wyborem do Twojego domu.",
				ctaTextSecondary: "Skontaktuj się z Nami",
			},
		},

		// ──────────────────────────────────────────────────────────
		// PRODUKTY > OKNA STALOWE
		// ──────────────────────────────────────────────────────────
		produktyOknaStalowe: {
			hero: {
				image: "/images/okna-hero.png",
				imageAlt: "Okna stalowe i loftowe od Trendhomes",
				breadcrumbs: ["home", "Produkty", "Okna Stalowe"],
				heading: ["Okna stalowe", "i loftowe"],
				description:
					"Stalowe okna i konstrukcje loftowe to rozwiązania, które traktujemy jako projekty indywidualne, a nie gotowe produkty z cennika. Wykorzystuje się je tam, gdzie stolarka ma być czymś więcej niż tylko \u201Eramą do szyby\u201D - jest ważnym elementem architektury, nawiązuje do przemysłowego charakteru budynku albo ma spełnić wymagania techniczne, których nie udźwigną standardowe systemy PCV czy aluminium.",
				ctaText: "Zapytaj o wycenę",
			},
			zewnatrz: {
				heading: ["Zastosowanie", "na zewnątrz"],
				description:
					"Na zewnątrz stal pojawia się między innymi w obiektach z historią, budynkach poprzemysłowych, adaptowanych magazynach czy bardziej wymagających projektach architektonicznych. Takie konstrukcje muszą połączyć trwałość, bezpieczeństwo i określony wygląd fasady.",
			},
			wnetrza: {
				heading: ["Zastosowanie", "we wnętrzach"],
				description:
					"We wnętrzach stalowe profile wykorzystujemy do lekkich, przeszklonych ścian i drzwi w stylu loftowym - dzielą przestrzeń, ale nie zabierają światła. Dobrze sprawdzają się w salonach z antresolą, domowych biurach, garderobach czy mieszkaniach urządzonych w industrialnym klimacie.",
			},
			forster: {
				heading: ["Systemy stalowe", "firmy Forster"],
				description:
					"Wszystkie tego typu realizacje wykonujemy w oparciu o systemy stalowe firmy Forster. To rozwiązania zaprojektowane specjalnie do drzwi, okien i przeszkleń o podwyższonych wymaganiach użytkowych. Dobieramy konkretny system i sposób wykonania dopiero po analizie projektu.",
			},
			wycena: {
				heading: ["Czego potrzebujemy,", "żeby przygotować wycenę"],
				description:
					"Żeby przygotować sensowną propozycję, potrzebujemy od Ciebie kilku informacji: krótkiego opisu pomysłu, podstawowych wymiarów oraz, jeśli to możliwe, rzutów lub zdjęć budynku czy wnętrza.",
				boxText: "Wycena indywidualna - prosimy o kontakt",
			},
			cta: {
				description:
					"Planujesz stalowe okna lub loftowe przeszklenia w domu, mieszkaniu albo lokalu? Napisz do nas i opisz swój projekt - przygotujemy indywidualną wycenę w oparciu o systemy Forster.",
				ctaText: "Napisz do nas",
				descriptionSecondary:
					"Nie wiesz, czy stolarka stalowa zmieści się w Twoim budżecie? Prześlij rzut lub zdjęcia wnętrza, a podpowiemy, jakie rozwiązania są realne do wykonania.",
				ctaTextSecondary: "Prześlij zdjęcia lub rzut",
			},
		},

		// ──────────────────────────────────────────────────────────
		// PRODUKTY > DRZWI STALOWE
		// ──────────────────────────────────────────────────────────
		produktyDrzwiStalowe: {
			hero: {
				image: "/images/okna-hero.png",
				imageAlt: "Drzwi stalowe i loftowe od Trendhomes",
				breadcrumbs: ["home", "Produkty", "Drzwi Stalowe"],
				heading: ["Drzwi stalowe", "i loftowe na wymiar"],
				description:
					"Drzwi stalowe i loftowe to rozwiązania dla inwestorów, którym zależy na konkretnym efekcie wizualnym albo na wytrzymałej konstrukcji dopasowanej do budynku. W Trendhomes realizujemy takie projekty w oparciu o systemy stalowe Forster (drzwi zewnętrzne i wewnętrzne) oraz rozwiązania loftowe stosowane wewnątrz budynków, również we współpracy z firmą Furmaniak.",
				ctaText: "Zapytaj o wycenę",
			},
			forWhom: {
				heading: ["Dla kogo są drzwi", "stalowe i loftowe"],
				items: [
					{
						label: "Adaptacje budynków z historią i obiektów przemysłowych",
						text: "Stalowe drzwi doskonale wpisują się w charakter kamienic, dawnych fabryk czy magazynów, gdzie ważne jest zachowanie klimatu budynku przy jednoczesnym spełnieniu współczesnych wymagań.",
					},
					{
						label: "Nowoczesne domy i mieszkania w stylu loft",
						text: "Loftowe drzwi przeszklone dzielą przestrzeń, nie zabierając światła. Sprawdzają się w salonach z antresolą, garderobach, domowych biurach i wszędzie tam, gdzie zależy Ci na industrialnym charakterze wnętrza.",
					},
					{
						label: "Biura, showroomy, lokale premium",
						text: "Stalowe konstrukcje nadają wnętrzom reprezentacyjny charakter i dobrze znoszą intensywne użytkowanie. Idealne do przestrzeni, które mają robić wrażenie na klientach i gościach.",
					},
					{
						label: "Inwestorzy i architekci szukający niestandardowych rozwiązań",
						text: "Jeśli standardowa stolarka nie spełnia wymagań projektu, drzwi stalowe pozwalają na realizację nietypowych gabarytów, kształtów i podziałów przeszkleń.",
					},
				],
			},
			systemy: {
				heading: ["Systemy, na których", "pracujemy"],
				items: [
					{
						name: "Forster",
						description:
							"Systemy stalowe Forster stosujemy zarówno w drzwiach zewnętrznych, jak i wewnętrznych. To rozwiązania zaprojektowane do konstrukcji o podwyższonych wymaganiach użytkowych, wytrzymałościowych i estetycznych. Dobieramy konkretny system dopiero po analizie projektu i warunków montażu.",
					},
					{
						name: "Furmaniak",
						description:
							"Rozwiązania loftowe firmy Furmaniak stosujemy wewnątrz budynków. Sprawdzają się w mieszkaniach, domach i lokalach, gdzie zależy na przeszklonych ścianach i drzwiach w industrialnym stylu. Lekkie profile, duże tafle szkła i spójny wygląd z resztą wnętrza.",
					},
				],
			},
			realizacje: {
				heading: ["Jakie realizacje", "wykonujemy"],
				items: [
					"drzwi stalowe zewnętrzne do budynków usługowych",
					"drzwi stalowe wewnętrzne w ciągach komunikacyjnych",
					"drzwi loftowe do mieszkań i domów",
					"przeszklone zabudowy stalowe",
					"drzwi do pomieszczeń technicznych",
				],
			},
			processSteps: {
				heading: ["Jak wygląda", "proces realizacji"],
				steps: [
					{ number: "1", title: "Rozmowa i koncepcja" },
					{ number: "2", title: "Dobór systemu i wstępna wycena" },
					{ number: "3", title: "Ustalenie szczegółów technicznych" },
					{ number: "4", title: "Produkcja i montaż" },
					{ number: "5", title: "Odbiór i ewentualne regulacje" },
				],
			},
			cta: {
				description:
					"Masz w głowie projekt drzwi stalowych lub loftowych do domu, mieszkania albo lokalu? Napisz do nas, dołącz rzut lub zdjęcia miejsca – przygotujemy indywidualną propozycję i wycenę.",
				ctaText: "Napisz do nas",
			},
		},

		// ──────────────────────────────────────────────────────────
		// PRODUKTY > DLA BIZNESU
		// ──────────────────────────────────────────────────────────
		produktyDlaBiznesu: {
			hero: {
				image: "/images/hero-bg-3.jpg",
				imageAlt:
					"Stolarka dla biznesu i obiektów użyteczności publicznej",
				breadcrumbs: ["home", "Produkty", "Dla biznesu"],
				heading: [
					"Stolarka dla biznesu",
					"i obiektów użyteczności publicznej",
				],
				description:
					"W biznesie stolarka nie jest tylko \u201Eoknem w ścianie\u201D. Ma przyciągać klientów, spełniać wymagania przepisów, współpracować z systemami przeciwpożarowymi i wytrzymać intensywne użytkowanie. W Trendhomes projektujemy i dostarczamy rozwiązania dla lokali usługowych, biur, sklepów, galerii handlowych, bloków mieszkalnych, basenów, budynków użyteczności publicznej, kościołów i szpitali.",
				descriptionSecondary:
					"Pracujemy zarówno z właścicielami pojedynczych lokali, jak i z inwestorami oraz generalnymi wykonawcami. Od pierwszej koncepcji do odbioru technicznego masz po swojej stronie zespół, który rozumie biznes, przepisy i budowę.",
				ctaText: "Umów pomiar w 48\u00a0h",
			},
			forWhom: {
				heading: ["Dla kogo jest", "ta oferta"],
				items: [
					"Właściciele lokali usługowych, sklepów, restauracji, gabinetów i biur",
					"Deweloperzy i wspólnoty mieszkaniowe",
					"Inwestorzy i zarządcy obiektów publicznych (szkoły, przychodnie, urzędy, baseny, kościoły)",
					"Architekci i biura projektowe",
					"Generalni wykonawcy",
				],
			},
			services: {
				heading: ["Co robimy", "dla biznesu"],
				items: [
					{
						title: "Lokale – wejścia, okna i drzwi do biznesu",
						content:
							"Drzwi wejściowe, przeszklenia, przegrody wewnętrzne – to elementy, które definiują charakter lokalu i wpływają na komfort użytkowania. Analizujemy przepływ klientów, dopasowujemy rozwiązania do rodzaju działalności i minimalizujemy czas przestoju w trakcie montażu. Dobieramy stolarkę tak, żeby spełniała wymagania techniczne i jednocześnie budowała wizerunek Twojego biznesu. Każde wejście, każde przeszklenie i każda przegroda są zaprojektowane z myślą o konkretnym obiekcie i sposobie jego użytkowania.",
					},
					{
						title: "Witryny – szkło, które sprzedaje",
						content:
							"Witryny sklepowe, przeszklenia wejść do galerii, fasady – to nie tylko element wizualny, ale też funkcjonalny. Uwzględniamy wymagania termiczne i akustyczne, dobieramy szkło o odpowiednich parametrach bezpieczeństwa i trwałości. Witryna ma przyciągać wzrok, ale też spełniać normy – od izolacyjności cieplnej, przez ochronę przed włamaniem, po odporność na warunki atmosferyczne. Projektujemy przeszklenia, które pracują na Twój biznes każdego dnia.",
					},
					{
						title: "Drzwi przeciwpożarowe – bezpieczeństwo i przepisy",
						content:
							"Dobór klasy ognioodporności (EI30, EI60, EI90), zabezpieczenie dróg ewakuacyjnych, przygotowanie dokumentacji i współpraca z rzeczoznawcą p.poż. – to obszar, w którym nie ma miejsca na kompromisy. Pomagamy spełnić wymagania przepisów, dostarczamy certyfikowaną stolarkę i koordynujemy montaż tak, żeby obiekt przeszedł odbiór bez uwag. Każde drzwi przeciwpożarowe dobieramy indywidualnie do obiektu, układu pomieszczeń i wymagań ochrony przeciwpożarowej.",
					},
					{
						title: "Fasady i większe przeszklenia",
						content:
							"Koncepcja przeszkleń, dobór systemów profili aluminiowych, koordynacja z innymi branżami – fasady to projekty, które wymagają doświadczenia i precyzji. Realizujemy fasady słupowo-ryglowe, strukturalne i półstrukturalne. Współpracujemy z architektami i konstruktorami, żeby przeszklenia były nie tylko efektowne, ale też spełniały wymagania statyczne, termiczne i akustyczne.",
					},
					{
						title: "Inne – trudne realizacje i nietypowe obiekty",
						content:
							"Budynki z historią, obiekty zabytkowe, baseny, szpitale, kościoły, bloki mieszkalne – każdy z tych obiektów ma specyficzne wymagania. W basenach liczy się odporność na wilgoć i chlor. W szpitalach – higiena, dostępność i przepisy sanitarne. W kościołach – estetyka i akustyka. W obiektach zabytkowych – zgodność z wytycznymi konserwatora. Podejmujemy się realizacji, których inni unikają.",
					},
				],
			},
			processSteps: {
				heading: [
					"Jak wygląda współpraca",
					"przy stolarce dla biznesu",
				],
				steps: [
					{
						number: "01",
						title: "Rozmowa i analiza obiektu",
						description:
							"Zaczynamy od poznania obiektu, potrzeb i wymagań. Omawiamy przeznaczenie budynku, przepisy, harmonogram i budżet.",
					},
					{
						number: "02",
						title: "Propozycja rozwiązań",
						description:
							"Przygotowujemy warianty rozwiązań dopasowane do obiektu – z uwzględnieniem systemów profili, szkła, okucia i wymagań technicznych.",
					},
					{
						number: "03",
						title: "Pomiar i doprecyzowanie detali",
						description:
							"Wykonujemy dokładne pomiary na obiekcie i precyzujemy szczegóły techniczne – kolorystykę, okucia, progi, uszczelnienia i wykończenia.",
					},
					{
						number: "04",
						title: "Produkcja i montaż",
						description:
							"Stolarka trafia do produkcji, a montaż planujemy w uzgodnionym terminie – z uwzględnieniem harmonogramu budowy i działalności lokalu.",
					},
					{
						number: "05",
						title: "Odbiór i dokumentacja",
						description:
							"Po montażu przeprowadzamy odbiór techniczny, przekazujemy dokumentację i instrukcje użytkowania. Zostajemy w kontakcie – serwis i regulacje w ramach gwarancji.",
					},
				],
			},
			cta: {
				description:
					"Szukasz partnera do stolarki w lokalu, galerii, obiekcie usługowym albo budynku użyteczności publicznej? W Trendhomes łączymy doświadczenie z budów, znajomość systemów stolarki i wymagania przepisów.",
				ctaText: "Skontaktuj się z Nami",
			},
		},
	},
} as const;
