export interface ColorSwatch {
	code: string;
	image: string;
}

export interface ProductSystem {
	slug: string;
	manufacturer: string;
	name: string;
	fullName: string;
	image: string;
	depth: string;
	glazing: string;
	seals: string;
	chambers: string;
	uw: string;
	uwNote: string;
	description: string;
	features: { label: string; value: string }[];
	manufacturerDescription: string;
	manufacturerLogo?: string;
	crossSection?: string;
	ctaText: string;
	colors: ColorSwatch[];
	featureSections: {
		heading: string[];
		blocks: {
			title: string;
			text: string;
			image?: string;
		}[];
	};
}

const salamanderColors: ColorSwatch[] = [
	"3","8","11","18","19","21","25","26","27","30","33","34","37","39","42","43","50","51","52","55","59","69","71","72","73","74","77","78","84","87","88","90","91","92","95","96","98","107","108","109","110","111","112","113","115","116",
].map((n) => ({ code: `SAL-${n.padStart(2, "0")}`, image: `/images/products/colors/salamander/sal${n}.jpg` }));

const ekosunColors: ColorSwatch[] = [
	"2","5","6","15","19","20","23","27","28","29","30","32","33","34","40","41","43","44","50","52","60","61","63","70","71","88","95","106","106r","118","119","120",
].map((n) => ({ code: n === "119" || n === "120" ? `DO ${n}` : `AP ${n.toUpperCase()}`, image: `/images/products/colors/ekosun/ekosun-${n}.jpg` }));

const rehauColors: ColorSwatch[] = Array.from({ length: 44 }, (_, i) => ({
	code: `REH ${String(i + 1).padStart(2, "0")}`,
	image: `/images/products/colors/rehau/rehau-${i + 1}.jpg`,
}));

const aluplastColors: ColorSwatch[] = [
	"01","02","03","04","05","06","07","08","11","12","14","15","19","20","21","22","23","25","26","27","28","29","30","32","34","35","36","37","39","40","41","43","44","47","50","52","60","61","62","63","65","69","70","71","75","79","88","95","102","103","105","106","107","108","109","110","111","112","113","115","116","121","122",
].map((n) => ({ code: `AP-${n}`, image: `/images/products/colors/aluplast/ap-${n}.jpg` }));

const gealanColors: ColorSwatch[] = [
	{ code: "GEA 01 Orzech", image: "/images/products/colors/gealan/gea-01.jpg" },
	{ code: "GEA 02 Złoty dąb", image: "/images/products/colors/gealan/gea-02.jpg" },
	{ code: "GEA 03 Mahoń", image: "/images/products/colors/gealan/gea-03.jpg" },
	{ code: "GEA 04 Antracytowy", image: "/images/products/colors/gealan/gea-04.jpg" },
	{ code: "GEA 07 Antracyt piaskowany", image: "/images/products/colors/gealan/gea-07.jpg" },
	{ code: "GEA 08 Sosna górska", image: "/images/products/colors/gealan/gea-08.jpg" },
	{ code: "GEA 09 Jasny dąb", image: "/images/products/colors/gealan/gea-09.jpg" },
	{ code: "GEA 10 Czekoladowy brąz", image: "/images/products/colors/gealan/gea-10.jpg" },
	{ code: "GEA 11 Kremowy deko", image: "/images/products/colors/gealan/gea-11.jpg" },
	{ code: "GEA 12 Szary deko", image: "/images/products/colors/gealan/gea-12.jpg" },
	{ code: "GEA 13 Winchester", image: "/images/products/colors/gealan/gea-13.jpg" },
	{ code: "GEA 16 AnTeak", image: "/images/products/colors/gealan/gea-16.jpg" },
	{ code: "GEA 17 Ciemny dąb", image: "/images/products/colors/gealan/gea-17.jpg" },
	{ code: "GEA 19 Szary bazaltowy", image: "/images/products/colors/gealan/gea-19.jpg" },
	{ code: "GEA 20 Szary antracyt", image: "/images/products/colors/gealan/gea-20.jpg" },
	{ code: "GEA 21 Dąb bielony", image: "/images/products/colors/gealan/gea-21.jpg" },
	{ code: "GEA 22 Czarno szary", image: "/images/products/colors/gealan/gea-22.jpg" },
	{ code: "GEA 23 Szary kwarcowy", image: "/images/products/colors/gealan/gea-23.jpg" },
	{ code: "GEA 24 Biały", image: "/images/products/colors/gealan/gea-24.jpg" },
	{ code: "GEA 25 Granatowy", image: "/images/products/colors/gealan/gea-25.jpg" },
	{ code: "GEA 27 Zielony deko", image: "/images/products/colors/gealan/gea-27.jpg" },
	{ code: "GEA 28 Oregon", image: "/images/products/colors/gealan/gea-28.jpg" },
	{ code: "GEA 30 Siena PN Noce", image: "/images/products/colors/gealan/gea-30.jpg" },
	{ code: "GEA 31 Daglezja", image: "/images/products/colors/gealan/gea-31.jpg" },
	{ code: "GEA 32 Mosiądz", image: "/images/products/colors/gealan/gea-32.jpg" },
	{ code: "GEA 34 Brylantowo biały", image: "/images/products/colors/gealan/gea-34.jpg" },
	{ code: "GEA 35 Srebrny", image: "/images/products/colors/gealan/gea-35.jpg" },
	{ code: "GEA 37 Czerwony", image: "/images/products/colors/gealan/gea-37.jpg" },
	{ code: "GEA 40 Szary sygnałowy", image: "/images/products/colors/gealan/gea-40.jpg" },
	{ code: "GEA 41 Zielony", image: "/images/products/colors/gealan/gea-41.jpg" },
	{ code: "GEA 42 Szary agatowy", image: "/images/products/colors/gealan/gea-42.jpg" },
	{ code: "GEA 43 Szary bazaltowy", image: "/images/products/colors/gealan/gea-43.jpg" },
	{ code: "GEA 46 Szary kwarcowy", image: "/images/products/colors/gealan/gea-46.jpg" },
	{ code: "GEA 055 Turner oak", image: "/images/products/colors/gealan/gea-055.jpg" },
	{ code: "GEA 056 Black Ulti-matt", image: "/images/products/colors/gealan/gea-056.jpg" },
];

const P = "/images/products/colors/drewniane";
export const woodenWindowColors: ColorSwatch[] = [
	// Sosna – lazury
	{ code: "Surowe drewno (sosna)", image: `${P}/surowe-drewno.jpg` },
	{ code: "Lakier bezbarwny (sosna)", image: `${P}/lakier-bezbarwny.jpg` },
	{ code: "Pinia (sosna)", image: `${P}/sosnapinia.jpg` },
	{ code: "Orzech (sosna)", image: `${P}/sosnaorzech.jpg` },
	{ code: "Wenge (sosna)", image: `${P}/sosnawenge.jpg` },
	{ code: "Dąb (sosna)", image: `${P}/sosnadab.jpg` },
	{ code: "Ciemny kasztan (sosna)", image: `${P}/sosnadarkchestnut.jpg` },
	{ code: "Cyprys (sosna)", image: `${P}/sosnacyprys.jpg` },
	{ code: "Afromozja (sosna)", image: `${P}/sosnaafromozja.jpg` },
	// Meranti – lazury
	{ code: "Surowe drewno (meranti)", image: `${P}/meranti-surowe-drewno.jpg` },
	{ code: "Lakier bezbarwny (meranti)", image: `${P}/meranti-lakier-bezbarwny.jpg` },
	{ code: "Pinia (meranti)", image: `${P}/merantipinia.jpg` },
	{ code: "Orzech (meranti)", image: `${P}/merantiorzech.jpg` },
	{ code: "Wenge (meranti)", image: `${P}/merantiwenge.jpg` },
	{ code: "Dąb (meranti)", image: `${P}/merantidab.jpg` },
	{ code: "Ciemny kasztan (meranti)", image: `${P}/merantidrakchestnut.jpg` },
	{ code: "Cyprys (meranti)", image: `${P}/cyprys-meranti.jpg` },
	{ code: "Afromozja (meranti)", image: `${P}/merantiafromozja.jpg` },
	// RAL
	{ code: "RAL 7016", image: `${P}/ral-7016.png` },
	{ code: "RAL 7021", image: `${P}/ral-7021.jpg` },
	{ code: "RAL 7035", image: `${P}/ral-7035.png` },
	{ code: "RAL 7039", image: `${P}/ral-7039.png` },
	{ code: "RAL 8017", image: `${P}/ral-8017.jpg` },
	{ code: "RAL 9001", image: `${P}/ral-9001.png` },
	{ code: "RAL 9005", image: `${P}/ral-9005.jpg` },
	{ code: "RAL 9010", image: `${P}/ral-9010.png` },
	{ code: "RAL 9016", image: `${P}/ral-9016.png` },
];

export const pvcSystems: ProductSystem[] = [
	{
		slug: "system-76",
		crossSection: "/images/products/przekroje/system-76.svg",
		manufacturer:"Salamander",
		name: "BluEvolution System 76",
		fullName: "Salamander System 76",
		image: "/images/products/salamander-greenevolution-flex.webp",
		depth: "76 mm",
		glazing: "do 48 mm",
		seals: "2/3",
		chambers: "5/6",
		uw: "0,83",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"Nowe rozwiązanie z zakresu energooszczędnej stolarki okiennej z PVC, przystosowane także do wymagań budownictwa pasywnego. Jego zastosowanie pozwala ograniczyć straty ciepła i tym samym obniżyć rachunki za ogrzewanie oraz zmniejszyć ślad węglowy.",
		features: [
			{ label: "Głębokość zabudowy", value: "76 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 48 mm" },
			{ label: "Uszczelki / komory", value: "2/3 uszczelki, 5/6 komór" },
			{ label: "Wybór oklein", value: "Szeroki wybór oklein" },
			{
				label: "Profile klasy A",
				value: "System dostępny także z profilami klasy A",
			},
			{
				label: "Warianty",
				value: "System dostępny w wariantach z dwoma i trzema uszczelkami",
			},
		],
		manufacturerDescription:
			"Salamander to wiodący producent profili okiennych PVC, którego systemy doskonale sprawdzają się tam, gdzie równie istotne jak parametry techniczne są estetyka oraz harmonijne dopasowanie do elewacji budynku.\n\nProfile tej marki często wybierane są do nowoczesnych domów jednorodzinnych oraz obiektów, w których kluczową rolę odgrywa efekt dużych, eleganckich przeszkleń.\n\nTo rozwiązanie dla klientów ceniących nie tylko funkcjonalność i trwałość, ale także dbałość o detale i spójny wygląd całej bryły budynku.",
		ctaText: "Kup okna Salamander w Trendhomes",
		colors: salamanderColors,
		featureSections: {
			heading: ["Precyzja zamknięta", "w solidnej ramie"],
			blocks: [
				{
					title: "System greenEvolution (76/nazwa wł.)",
					text: "Nowe rozwiązanie z zakresu energooszczędnej stolarki okiennej z PVC, przystosowane także do wymagań budownictwa pasywnego. Jego zastosowanie pozwala ograniczyć straty ciepła i tym samym obniżyć rachunki za ogrzewanie oraz zmniejszyć ślad węglowy.",
				},
				{
					title: "Szeroki wachlarz możliwości",
					text: "Ulepszone parametry zostały uzyskane dzięki wykorzystaniu uszczelki środkowej MD, poprawiającej szczelność okna. Klasyczny kształt profili w połączeniu z szeroką gamą dostępnych oklein gwarantują łatwość dostosowania okien greenEvolution do wizji każdego inwestora.",
				},
			],
		},
	},
	{
		slug: "system-82",
		crossSection: "/images/products/przekroje/system-82.svg",
		manufacturer: "Salamander",
		name: "BluEvolution System 82",
		fullName: "Salamander System 82",
		image: "/images/products/salamander-bluevolution82.png",
		depth: "82 mm",
		glazing: "do 53 mm",
		seals: "3",
		chambers: "6",
		uw: "0,74",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"System 82 mm to krok wyżej pod względem izolacyjności i możliwości konfiguracji. Często stosujemy go w nowych domach, gdzie ważne jest połączenie energooszczędności z estetyką elewacji i stolarki.",
		features: [
			{ label: "Głębokość zabudowy", value: "82 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 53 mm" },
			{ label: "Uszczelki / komory", value: "3 uszczelki, 6 komór" },
			{ label: "Wybór oklein", value: "Szeroki wybór oklein" },
			{
				label: "Profile klasy A",
				value: "System dostępny z profilami klasy A",
			},
			{
				label: "Izolacyjność",
				value: "Podwyższona izolacyjność termiczna i akustyczna",
			},
		],
		manufacturerDescription:
			"Salamander to wiodący producent profili okiennych PVC, którego systemy doskonale sprawdzają się tam, gdzie równie istotne jak parametry techniczne są estetyka oraz harmonijne dopasowanie do elewacji budynku.\n\nProfile tej marki często wybierane są do nowoczesnych domów jednorodzinnych oraz obiektów, w których kluczową rolę odgrywa efekt dużych, eleganckich przeszkleń.",
		ctaText: "Kup okna Salamander w Trendhomes",
		colors: salamanderColors,
		featureSections: {
			heading: ["Wysoka izolacyjność", "w eleganckim profilu"],
			blocks: [
				{
					title: "BluEvolution 82",
					text: "System o głębokości 82 mm z trzema uszczelkami i sześcioma komorami. Zapewnia doskonałą izolację termiczną przy zachowaniu klasycznego wyglądu profili.",
				},
				{
					title: "Nowoczesne rozwiązania",
					text: "Dobrze współgra z roletami zewnętrznymi i pozostałymi elementami nowoczesnej architektury. Sprawdza się w nowych domach jednorodzinnych i bardziej wymagających projektach.",
				},
			],
		},
	},
	{
		slug: "system-92",
		crossSection: "/images/products/przekroje/system-92.svg",
		manufacturer: "Salamander",
		name: "BluEvolution System 92",
		fullName: "Salamander System 92",
		image: "/images/products/salamander-bluevolution92.png",
		depth: "92 mm",
		glazing: "do 61 mm",
		seals: "3",
		chambers: "6",
		uw: "0,73",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"System 92 mm Salamander kierujemy do klientów, którzy planują budynek o bardzo wysokim standardzie cieplnym. Taki profil pozwala mocniej ograniczyć straty energii przez okna.",
		features: [
			{ label: "Głębokość zabudowy", value: "92 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 61 mm" },
			{ label: "Uszczelki / komory", value: "3 uszczelki, 6 komór" },
			{ label: "Wybór oklein", value: "Szeroki wybór oklein" },
			{
				label: "Budownictwo pasywne",
				value: "Spełnia wymagania budownictwa pasywnego",
			},
			{
				label: "Energooszczędność",
				value: "Maksymalna izolacja termiczna w klasie premium",
			},
		],
		manufacturerDescription:
			"Salamander to wiodący producent profili okiennych PVC, którego systemy doskonale sprawdzają się tam, gdzie równie istotne jak parametry techniczne są estetyka oraz harmonijne dopasowanie do elewacji budynku.\n\nTo rozwiązanie, które warto rozważyć w projektach, gdzie stolarka ma realnie \u201Epracować\u201D na bilans energetyczny domu.",
		ctaText: "Kup okna Salamander w Trendhomes",
		colors: salamanderColors,
		featureSections: {
			heading: ["Najwyższy standard", "cieplny w PVC"],
			blocks: [
				{
					title: "BluEvolution 92",
					text: "Flagowy system o głębokości 92 mm pozwala mocniej ograniczyć straty energii przez okna, co ma znaczenie przy rosnących kosztach ogrzewania.",
				},
				{
					title: "Premium dla wymagających",
					text: "Większa głębokość profilu umożliwia zaawansowane konfiguracje szklenia, które przekładają się na mniejsze straty ciepła. Idealne rozwiązanie do budynków pasywnych i energooszczędnych.",
				},
			],
		},
	},
	{
		slug: "synego",
		crossSection: "/images/products/przekroje/synego.svg",
		manufacturer: "Rehau",
		name: "SYNEGO",
		fullName: "Rehau SYNEGO",
		image: "/images/products/rehau-synego.png",
		depth: "80 mm",
		glazing: "do 51 mm",
		seals: "3",
		chambers: "6-7",
		uw: "0,76",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"System SYNEGO to propozycja skierowana do wymagających inwestorów, którzy oczekują wysokiej jakości, trwałości i realnych oszczędności energii.",
		features: [
			{ label: "Głębokość zabudowy", value: "80 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 51 mm" },
			{ label: "Uszczelki / komory", value: "3 uszczelki, 6-7 komór" },
			{
				label: "Bezpieczeństwo",
				value: "Certyfikowana odporność na włamanie",
			},
			{
				label: "Akustyka",
				value: "Bardzo dobre właściwości akustyczne",
			},
			{
				label: "Energooszczędność",
				value: "Spełnia aktualne i przyszłe standardy budownictwa",
			},
		],
		manufacturerDescription:
			"Rehau to jedna z marek, które najczęściej wybieramy przy domach jednorodzinnych i bardziej wymagających inwestycjach. Systemy tej firmy dobrze łączą parametry cieplne z solidnym wykonaniem profili.\n\nTo dobry wybór, jeśli zależy Ci na spokojnym użytkowaniu przez wiele lat.",
		ctaText: "Kup okna Rehau w Trendhomes",
		colors: rehauColors,
		featureSections: {
			heading: ["Jakość potwierdzona", "wieloletnim doświadczeniem"],
			blocks: [
				{
					title: "Przemyślana konstrukcja",
					text: "Przemyślana konstrukcja profili zapewnia doskonałą izolację termiczną oraz bardzo dobre właściwości akustyczne, spełniając jednocześnie aktualne i przyszłe standardy budownictwa energooszczędnego.",
				},
				{
					title: "Bezpieczeństwo i komfort",
					text: "Dodatkowym atutem jest potwierdzona certyfikatami odporność na włamanie, zwiększająca bezpieczeństwo użytkowników. System dobrze łączy się z roletami i innymi elementami wyposażenia.",
				},
			],
		},
	},
	{
		slug: "ideal-4000",
		crossSection: "/images/products/przekroje/ideal-4000.svg",
		manufacturer: "Aluplast",
		name: "Ideal 4000",
		fullName: "Aluplast Ideal 4000",
		image: "/images/products/aluplast-ideal-4000.png",
		depth: "70 mm",
		glazing: "do 41 mm",
		seals: "2",
		chambers: "5",
		uw: "1,0",
		uwNote: "Uw dla Ug = 0,7 (ramka Ultimate)*",
		description:
			"System 70 mm Aluplast dobrze sprawdza się przy wymianach okien w blokach oraz w standardowych domach. Jest kompromisem między ceną a parametrami.",
		features: [
			{ label: "Głębokość zabudowy", value: "70 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 41 mm" },
			{ label: "Uszczelki / komory", value: "2 uszczelki, 5 komór" },
			{ label: "Zastosowanie", value: "Mieszkania i standardowe domy" },
			{ label: "Klasa", value: "Profile klasy A wg PN-EN 12608" },
			{ label: "Budżet", value: "Rozsądna baza dla typowych realizacji" },
		],
		manufacturerDescription:
			"Aluplast to producent, którego systemy często stosuje się w budownictwie jednorodzinnym i wielorodzinnym. Daje szerokie możliwości konfiguracji – od prostszych okien do mieszkań, po większe przeszklenia w domach.",
		ctaText: "Kup okna Aluplast w Trendhomes",
		colors: aluplastColors,
		featureSections: {
			heading: ["Sprawdzone rozwiązanie", "w rozsądnej cenie"],
			blocks: [
				{
					title: "Uniwersalny system",
					text: "Dobrze sprawdza się przy wymianach okien w blokach oraz w standardowych domach. Jest kompromisem między ceną a parametrami, dzięki czemu często proponujemy go klientom szukającym dobrego okna bez dużego budżetu.",
				},
				{
					title: "Elastyczna konfiguracja",
					text: "Szerokie możliwości konfiguracji – od prostszych okien do mieszkań, po większe przeszklenia w domach. To dobry wybór, gdy zależy Ci na elastyczności i dopasowaniu do konkretnego budynku.",
				},
			],
		},
	},
	{
		slug: "ideal-neo",
		crossSection: "/images/products/przekroje/ideal-neo.svg",
		manufacturer: "Aluplast",
		name: "Ideal Neo",
		fullName: "Aluplast Ideal Neo",
		image: "/images/products/aluplast-ideal-neo.webp",
		depth: "76 mm",
		glazing: "do 60 mm",
		seals: "2",
		chambers: "5-6",
		uw: "0,8",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"System 76 mm daje lepsze możliwości izolacji cieplnej i akustycznej, co docenią szczególnie mieszkańcy domów przy ruchliwych ulicach lub w chłodniejszych lokalizacjach.",
		features: [
			{ label: "Głębokość zabudowy", value: "76 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 60 mm" },
			{ label: "Uszczelki / komory", value: "2 uszczelki, 5-6 komór" },
			{
				label: "Izolacja akustyczna",
				value: "Podwyższona izolacja akustyczna",
			},
			{ label: "Izolacja cieplna", value: "Lepsze parametry termiczne" },
			{
				label: "Zastosowanie",
				value: "Nowe domy i wymagające modernizacje",
			},
		],
		manufacturerDescription:
			"Aluplast to producent, którego systemy często stosuje się w budownictwie jednorodzinnym i wielorodzinnym. Daje szerokie możliwości konfiguracji.",
		ctaText: "Kup okna Aluplast w Trendhomes",
		colors: aluplastColors,
		featureSections: {
			heading: ["Lepsza izolacja", "w kompaktowym profilu"],
			blocks: [
				{
					title: "Ideal Neo – nowa generacja",
					text: "System 76 mm daje lepsze możliwości izolacji cieplnej i akustycznej. Wybieramy go tam, gdzie stolarka ma realnie poprawić komfort codziennego użytkowania budynku.",
				},
				{
					title: "Dla wymagających lokalizacji",
					text: "Sprawdza się w nowych domach i bardziej wymagających modernizacjach. Docenią go szczególnie mieszkańcy domów przy ruchliwych ulicach lub w chłodniejszych lokalizacjach.",
				},
			],
		},
	},
	{
		slug: "ideal-8000",
		crossSection: "/images/products/przekroje/ideal-8000.svg",
		manufacturer: "Aluplast",
		name: "Ideal 8000",
		fullName: "Aluplast Ideal 8000",
		image: "/images/products/aluplast-ideal-8000.png",
		depth: "85 mm",
		glazing: "do 52 mm",
		seals: "3",
		chambers: "6",
		uw: "0,74",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"System 85 mm kierujemy do klientów, którzy chcą maksymalnie ograniczyć straty energii przez okna.",
		features: [
			{ label: "Głębokość zabudowy", value: "85 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 52 mm" },
			{ label: "Uszczelki / komory", value: "3 uszczelki, 6 komór" },
			{
				label: "Energooszczędność",
				value: "Maksymalne ograniczenie strat energii",
			},
			{ label: "Klasa", value: "Profile klasy A" },
			{
				label: "Zastosowanie",
				value: "Domy z nowoczesnymi źródłami ogrzewania",
			},
		],
		manufacturerDescription:
			"Aluplast to producent, którego systemy często stosuje się w budownictwie jednorodzinnym i wielorodzinnym.",
		ctaText: "Kup okna Aluplast w Trendhomes",
		colors: aluplastColors,
		featureSections: {
			heading: ["Maksymalna oszczędność", "energii w profilu 85 mm"],
			blocks: [
				{
					title: "Ideal 8000 – top w gamie",
					text: "System 85 mm kierujemy do klientów, którzy chcą maksymalnie ograniczyć straty energii przez okna. Ma sens przy domach projektowanych z myślą o niskich kosztach eksploatacji.",
				},
				{
					title: "Długoterminowe oszczędności",
					text: "To rozwiązanie, które warto rozważyć w inwestycjach z nowoczesnymi źródłami ogrzewania. Większa głębokość profilu przekłada się na realnie niższe rachunki za ogrzewanie.",
				},
			],
		},
	},
	{
		slug: "ekosun-70",
		crossSection: "/images/products/przekroje/ekosun-70.png",
		manufacturer: "EkoSun",
		name: "EkoSun 70",
		fullName: "EkoSun 70",
		image: "/images/products/ekosun-70.png",
		depth: "70 mm",
		glazing: "do 44 mm",
		seals: "2",
		chambers: "6",
		uw: "0,89",
		uwNote: "Uw dla Ug = 0,6 (ramka Ultimate)*",
		description:
			"System 70 mm EkoSun to dobra baza dla wielu standardowych realizacji \u2013 od mieszkań po domy jednorodzinne. Pozwala poprawić komfort cieplny i akustyczny bez dużego obciążenia budżetu.",
		features: [
			{ label: "Głębokość zabudowy", value: "70 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 44 mm" },
			{ label: "Uszczelki / komory", value: "2 uszczelki, 6 komór" },
			{ label: "Zastosowanie", value: "Mieszkania i domy jednorodzinne" },
			{ label: "Klasa", value: "Profile klasy A wg PN-EN 12608" },
			{ label: "Budżet", value: "Rozwiązanie w rozsądnym budżecie" },
		],
		manufacturerDescription:
			"Systemy EkoSun wybieramy, gdy ważne są dobre parametry przy zachowaniu rozsądnego budżetu i możliwość spójnego dopasowania stolarki w całym budynku.\n\nTo często rozwiązanie dla klientów, którzy chcą \u201Epo prostu mieć dobre okna\u201D, nie wchodząc w najwyższe widełki cenowe. Dobrze sprawdza się zarówno w domach, jak i mieszkaniach.",
		ctaText: "Kup okna EkoSun w Trendhomes",
		colors: ekosunColors,
		featureSections: {
			heading: ["Solidna baza", "w rozsądnym budżecie"],
			blocks: [
				{
					title: "Sprawdzone rozwiązanie",
					text: "System 70 mm EkoSun to dobra baza dla wielu standardowych realizacji. Pozwala poprawić komfort cieplny i akustyczny bez dużego obciążenia budżetu. To częsty wybór przy remontach, gdzie trzeba pogodzić zakres prac z możliwościami finansowymi.",
				},
				{
					title: "Uniwersalne zastosowanie",
					text: "Sprawdza się zarówno w mieszkaniach, jak i domach jednorodzinnych. Dobrze współpracuje z roletami zewnętrznymi i innymi elementami stolarki, co ułatwia kompleksową wymianę okien.",
				},
			],
		},
	},
	{
		slug: "ekosun-6",
		crossSection: "/images/products/przekroje/ekosun-6.png",
		manufacturer: "EkoSun",
		name: "EkoSun 6",
		fullName: "EkoSun 6",
		image: "/images/products/ekosun-6.png",
		depth: "81 mm",
		glazing: "do 55 mm",
		seals: "2",
		chambers: "6",
		uw: "0,76",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"System 81 mm celuje w inwestycje, w których chcesz mieć wyraźnie lepszą izolacyjność okien niż podstawowa. Dobrze współgra z nowoczesnymi instalacjami grzewczymi i rekuperacją.",
		features: [
			{ label: "Głębokość zabudowy", value: "81 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 55 mm" },
			{ label: "Uszczelki / komory", value: "2 uszczelki, 6 komór" },
			{
				label: "Izolacyjność",
				value: "Wyraźnie lepsza izolacyjność termiczna",
			},
			{
				label: "Kompatybilność",
				value: "Współgra z rekuperacją i pompą ciepła",
			},
			{ label: "Zastosowanie", value: "Nowe domy i świadome remonty" },
		],
		manufacturerDescription:
			"Systemy EkoSun wybieramy, gdy ważne są dobre parametry przy zachowaniu rozsądnego budżetu i możliwość spójnego dopasowania stolarki w całym budynku.\n\nTo często rozwiązanie dla klientów, którzy chcą \u201Epo prostu mieć dobre okna\u201D, nie wchodząc w najwyższe widełki cenowe.",
		ctaText: "Kup okna EkoSun w Trendhomes",
		colors: ekosunColors,
		featureSections: {
			heading: ["Lepsza izolacyjność", "dla nowoczesnego domu"],
			blocks: [
				{
					title: "Podwyższony standard cieplny",
					text: "System 81 mm celuje w inwestycje, w których chcesz mieć wyraźnie lepszą izolacyjność okien niż podstawowa. Dobrze współgra z nowoczesnymi instalacjami grzewczymi i rekuperacją, bo pomaga lepiej utrzymać ciepło wewnątrz.",
				},
				{
					title: "Dla świadomego inwestora",
					text: "Polecamy go przy nowych domach i bardziej świadomych remontach. To rozwiązanie, które łączy rozsądną cenę z parametrami odpowiadającymi współczesnym standardom budownictwa energooszczędnego.",
				},
			],
		},
	},
	{
		slug: "ekosun-7",
		crossSection: "/images/products/przekroje/ekosun-7.png",
		manufacturer: "EkoSun",
		name: "EkoSun 7",
		fullName: "EkoSun 7",
		image: "/images/products/ekosun-7.webp",
		depth: "81 mm",
		glazing: "do 55 mm",
		seals: "3",
		chambers: "7",
		uw: "0,76",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"System 81 mm EkoSun stosujemy wtedy, gdy stolarka ma być jednym z filarów energooszczędności budynku. Większa głębokość profilu umożliwia zaawansowane konfiguracje.",
		features: [
			{ label: "Głębokość zabudowy", value: "81 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 55 mm" },
			{ label: "Uszczelki / komory", value: "3 uszczelki, 7 komór" },
			{
				label: "Energooszczędność",
				value: "Filar energooszczędności budynku",
			},
			{
				label: "Konfiguracje",
				value: "Zaawansowane konfiguracje szklenia",
			},
			{ label: "Zastosowanie", value: "Domy z wyższej półki cieplnej" },
		],
		manufacturerDescription:
			"Systemy EkoSun wybieramy, gdy ważne są dobre parametry przy zachowaniu rozsądnego budżetu i możliwość spójnego dopasowania stolarki w całym budynku.\n\nTo opcja do rozważenia, jeśli planujesz dom z wyższej półki pod względem standardu cieplnego.",
		ctaText: "Kup okna EkoSun w Trendhomes",
		colors: ekosunColors,
		featureSections: {
			heading: ["Energooszczędność", "na najwyższym poziomie"],
			blocks: [
				{
					title: "Maksymalna wydajność cieplna",
					text: "System EkoSun 7 stosujemy wtedy, gdy stolarka ma być jednym z filarów energooszczędności budynku. Większa głębokość profilu umożliwia zaawansowane konfiguracje, które przekładają się na mniejsze straty ciepła.",
				},
				{
					title: "Wyższa półka w dobrej cenie",
					text: "To opcja do rozważenia, jeśli planujesz dom z wyższej półki pod względem standardu cieplnego. Połączenie 7 komór i 3 uszczelek zapewnia parametry porównywalne z droższymi systemami premium.",
				},
			],
		},
	},
	{
		slug: "s8000",
		crossSection: "/images/products/przekroje/s8000.png",
		manufacturer: "Gealan",
		name: "S8000",
		fullName: "Gealan S8000",
		image: "/images/products/gealan-s8000.png",
		depth: "74 mm",
		glazing: "do 48 mm",
		seals: "2",
		chambers: "5/6",
		uw: "0,8",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"System 74 mm Gealan to uniwersalne rozwiązanie do wielu typów budynków. Dobrze spisuje się przy remontach oraz w standardowych nowych domach.",
		features: [
			{ label: "Głębokość zabudowy", value: "74 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 48 mm" },
			{ label: "Uszczelki / komory", value: "2 uszczelki, 5/6 komór" },
			{ label: "Design", value: "Nowoczesny wygląd profili" },
			{ label: "Zastosowanie", value: "Remonty i standardowe nowe domy" },
			{ label: "Budżet", value: "Porządny produkt w rozsądnej cenie" },
		],
		manufacturerDescription:
			"Systemy Gealan często wybieramy przy nowoczesnych projektach, w których pojawiają się większe przeszklenia i wyraźnie zarysowana architektura.\n\nTo profile, które dobrze wypadają zarówno pod względem parametrów, jak i wizualnie. Sprawdzają się w domach, mieszkaniach oraz wybranych realizacjach w lokalach usługowych.",
		ctaText: "Kup okna Gealan w Trendhomes",
		colors: gealanColors,
		featureSections: {
			heading: ["Uniwersalność", "i nowoczesny design"],
			blocks: [
				{
					title: "Solidna klasa średnia",
					text: "System 74 mm Gealan to uniwersalne rozwiązanie do wielu typów budynków. Dobrze spisuje się przy remontach oraz w standardowych nowych domach, gdzie chcesz poprawić komfort i wygląd okien.",
				},
				{
					title: "Estetyka i funkcjonalność",
					text: "To rozsądna propozycja tam, gdzie liczy się porządny produkt bez konieczności wchodzenia na najwyższe poziomy cenowe. Profile wyglądają nowocześnie i dobrze komponują się z różnymi elewacjami.",
				},
			],
		},
	},
	{
		slug: "s9000",
		crossSection: "/images/products/przekroje/s9000.png",
		manufacturer: "Gealan",
		name: "S9000",
		fullName: "Gealan S9000",
		image: "/images/products/gealan-s9000.png",
		depth: "82,5 mm",
		glazing: "do 54 mm",
		seals: "3",
		chambers: "6",
		uw: "0,73",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"System 82,5 mm kierujemy do inwestycji, w których oczekujesz bardzo dobrego balansu między parametrami cieplnymi, akustyką i designem.",
		features: [
			{ label: "Głębokość zabudowy", value: "82,5 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 54 mm" },
			{ label: "Uszczelki / komory", value: "3 uszczelki, 6 komór" },
			{ label: "Akustyka", value: "Bardzo dobre parametry akustyczne" },
			{ label: "Design", value: "Elegancki profil do dużych przeszkleń" },
			{
				label: "Zastosowanie",
				value: "Nowoczesne domy z dużymi przeszkleniami",
			},
		],
		manufacturerDescription:
			"Systemy Gealan często wybieramy przy nowoczesnych projektach, w których pojawiają się większe przeszklenia i wyraźnie zarysowana architektura.\n\nTo dobre rozwiązanie dla osób, które myślą długoterminowo o komfortowym użytkowaniu budynku.",
		ctaText: "Kup okna Gealan w Trendhomes",
		colors: gealanColors,
		featureSections: {
			heading: ["Balans parametrów", "i nowoczesnego designu"],
			blocks: [
				{
					title: "Premium w gamie Gealan",
					text: "System 82,5 mm kierujemy do inwestycji, w których oczekujesz bardzo dobrego balansu między parametrami cieplnymi, akustyką i designem. Często stosujemy go w nowoczesnych domach z dużymi przeszkleniami.",
				},
				{
					title: "Długoterminowy komfort",
					text: "Duże przeszklenia mają być jednocześnie estetyczne i funkcjonalne. To dobre rozwiązanie dla osób, które myślą długoterminowo o komfortowym użytkowaniu budynku i niskich kosztach eksploatacji.",
				},
			],
		},
	},
];

export interface WoodenWindowSystem {
	slug: string;
	manufacturer: string;
	name: string;
	fullName: string;
	image: string;
	depth: string;
	glazing: string;
	seals: string;
	layers: string;
	uw: string;
	uwNote: string;
	description: string;
	features: { label: string; value: string }[];
	manufacturerDescription: string;
	crossSection?: string;
	ctaText: string;
	colors: ColorSwatch[];
	featureSections: {
		heading: string[];
		blocks: {
			title: string;
			text: string;
		}[];
	};
}

export const woodenSystems: WoodenWindowSystem[] = [
	{
		slug: "naturo-68",
		manufacturer: "Naturo",
		name: "Naturo 68",
		fullName: "Naturo 68",
		image: "/images/products/naturo-68.png",
		depth: "68 mm",
		glazing: "24–32 mm",
		seals: "2",
		layers: "3",
		uw: "1,07",
		uwNote: "Uw dla Ug = 0,8 (ramka Ultimate)*",
		description:
			"Naturo 68 traktujemy jako solidny punkt startowy wśród okien drewnianych. Profil o głębokości 68 mm, wykonany z klejonego warstwowo drewna, dobrze sprawdza się w klasycznych domach i modernizowanych budynkach. To propozycja dla inwestorów, którzy chcą mieć drewnianą stolarkę o porządnych parametrach bez wchodzenia od razu w najwyższe systemy.",
		features: [
			{ label: "Głębokość zabudowy", value: "68 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości 24–32 mm" },
			{ label: "Uszczelki", value: "2" },
			{ label: "Warstwy drewna", value: "3" },
			{ label: "Materiał", value: "Klejone warstwowo drewno sosnowe lub meranti" },
			{ label: "Zastosowanie", value: "Klasyczne domy i modernizacje" },
		],
		manufacturerDescription:
			"Linia Naturo to seria drewnianych systemów okiennych jednego z największych producentów na rynku. Profile wykonane z klejonego warstwowo drewna łączą naturalny wygląd z solidnymi parametrami technicznymi.\n\nTo rozwiązanie dla inwestorów ceniących autentyczny charakter drewna i chcących dopasować stolarkę do charakteru budynku.",
		ctaText: "Kup okna Naturo w Trendhomes",
		colors: woodenWindowColors,
		featureSections: {
			heading: ["Solidny start", "w drewnianej stolarce"],
			blocks: [
				{
					title: "Klasyka w dobrym standardzie",
					text: "Profil o głębokości 68 mm, wykonany z klejonego warstwowo drewna, dobrze sprawdza się w klasycznych domach i modernizowanych budynkach. To propozycja dla inwestorów, którzy chcą mieć drewnianą stolarkę o porządnych parametrach.",
				},
				{
					title: "Naturalne drewno, sprawdzone rozwiązanie",
					text: "Jeśli budynek nie wymaga ekstremalnej izolacyjności, a zależy Ci na naturalnym wyglądzie okien – Naturo 68 będzie rozsądnym wyborem na start. Dostępne w drewnie sosnowym i meranti.",
				},
			],
		},
	},
	{
		slug: "naturo-68-alu",
		manufacturer: "Naturo",
		name: "Naturo 68 ALU",
		fullName: "Naturo 68 ALU",
		image: "/images/products/naturo-68-alu.png",
		depth: "68 mm",
		glazing: "24–32 mm",
		seals: "2",
		layers: "3",
		uw: "1,07",
		uwNote: "Uw dla Ug = 0,8 (ramka Ultimate)*",
		description:
			"Naturo 68 ALU to ten sam drewniany rdzeń, ale z zewnętrzną nakładką aluminiową. Od środka wciąż widzisz naturalne drewno, a od strony elewacji pracuje aluminium, które nie wymaga malowania i lepiej znosi warunki atmosferyczne.",
		features: [
			{ label: "Głębokość zabudowy", value: "68 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości 24–32 mm" },
			{ label: "Uszczelki", value: "2" },
			{ label: "Warstwy drewna", value: "3" },
			{ label: "Nakładka", value: "Aluminiowa nakładka zewnętrzna" },
			{ label: "Konserwacja", value: "Bezobsługowość od strony elewacji" },
		],
		manufacturerDescription:
			"Linia Naturo to seria drewnianych systemów okiennych jednego z największych producentów na rynku. Wersje ALU łączą naturalne drewno wewnątrz z trwałą nakładką aluminiową od strony zewnętrznej.\n\nTo rozwiązanie dla klientów, którzy lubią drewno w środku, ale nie chcą się martwić o konserwację od zewnątrz.",
		ctaText: "Kup okna Naturo w Trendhomes",
		colors: woodenWindowColors,
		featureSections: {
			heading: ["Drewno wewnątrz,", "aluminium na zewnątrz"],
			blocks: [
				{
					title: "Dwumateriałowa konstrukcja",
					text: "Od środka widzisz naturalne drewno, a od strony elewacji pracuje aluminium, które nie wymaga malowania i lepiej znosi warunki atmosferyczne. To połączenie komfortu z praktycznością.",
				},
				{
					title: "Bezobsługowość od zewnątrz",
					text: "Sprawdza się szczególnie w budynkach narażonych na silne opady, nasłonecznienie lub tam, gdzie dostęp do okien od strony elewacji jest utrudniony. Nie musisz wracać do tematu malowania ram.",
				},
			],
		},
	},
	{
		slug: "naturo-80",
		manufacturer: "Naturo",
		name: "Naturo 80",
		fullName: "Naturo 80",
		image: "/images/products/naturo-80.png",
		depth: "80 mm",
		glazing: "34–44 mm",
		seals: "2–3",
		layers: "3–4",
		uw: "0,81",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"Naturo 80 jest rozwinięciem systemu 68 – z większą głębokością profilu i możliwością zastosowania szerszych pakietów szybowych. Dzięki temu okna lepiej izolują cieplnie i akustycznie, co ma znaczenie w domach z pompą ciepła lub w lokalizacjach, gdzie liczy się cisza.",
		features: [
			{ label: "Głębokość zabudowy", value: "80 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości 34–44 mm" },
			{ label: "Uszczelki", value: "2–3" },
			{ label: "Warstwy drewna", value: "3–4" },
			{ label: "Izolacyjność", value: "Lepsza izolacja cieplna i akustyczna" },
			{ label: "Zastosowanie", value: "Domy z pompą ciepła, ciche lokalizacje" },
		],
		manufacturerDescription:
			"Linia Naturo to seria drewnianych systemów okiennych jednego z największych producentów na rynku. Profile wykonane z klejonego warstwowo drewna łączą naturalny wygląd z solidnymi parametrami technicznymi.\n\nNaturo 80 wybieramy, gdy budynek wymaga lepszych parametrów niż podstawowa klasa.",
		ctaText: "Kup okna Naturo w Trendhomes",
		colors: woodenWindowColors,
		featureSections: {
			heading: ["Wyższy standard", "cieplny i akustyczny"],
			blocks: [
				{
					title: "Rozwinięcie sprawdzonego systemu",
					text: "Naturo 80 to rozwinięcie systemu 68 – z większą głębokością profilu i możliwością zastosowania szerszych pakietów szybowych. Okna lepiej izolują cieplnie i akustycznie.",
				},
				{
					title: "Dla wymagających budynków",
					text: "Wybieramy ten system, gdy budynek wymaga lepszych parametrów niż podstawowa klasa, ale inwestor nie potrzebuje jeszcze najgrubszego profilu 92 mm. Dobrze współgra z pompami ciepła.",
				},
			],
		},
	},
	{
		slug: "naturo-80-alu",
		manufacturer: "Naturo",
		name: "Naturo 80 ALU",
		fullName: "Naturo 80 ALU",
		image: "/images/products/naturo-80-alu.png",
		depth: "80 mm",
		glazing: "35–64 mm",
		seals: "3",
		layers: "3–4",
		uw: "0,82",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"Naturo 80 ALU łączy wyższy standard cieplny z ochroną drewna przez nakładkę aluminiową po stronie zewnętrznej. To kompromis między komfortem użytkowania drewna wewnątrz a trwałością i bezobsługowością od strony pogody.",
		features: [
			{ label: "Głębokość zabudowy", value: "80 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości 35–64 mm" },
			{ label: "Uszczelki", value: "3" },
			{ label: "Warstwy drewna", value: "3–4" },
			{ label: "Nakładka", value: "Aluminiowa nakładka zewnętrzna" },
			{ label: "Zastosowanie", value: "Domy wymagające trwałości i ciepła" },
		],
		manufacturerDescription:
			"Linia Naturo to seria drewnianych systemów okiennych jednego z największych producentów na rynku. Wersje ALU łączą naturalne drewno wewnątrz z trwałą nakładką aluminiową od strony zewnętrznej.\n\nPolecamy go w domach, gdzie zależy na dobrym Uw okna, a jednocześnie inwestor nie chce wracać do tematu malowania ram co kilka lat.",
		ctaText: "Kup okna Naturo w Trendhomes",
		colors: woodenWindowColors,
		featureSections: {
			heading: ["Wyższy standard cieplny", "z ochroną aluminium"],
			blocks: [
				{
					title: "Ciepło i trwałość w jednym",
					text: "Naturo 80 ALU łączy wyższy standard cieplny z ochroną drewna przez nakładkę aluminiową po stronie zewnętrznej. To kompromis między komfortem użytkowania drewna wewnątrz a trwałością.",
				},
				{
					title: "Bez konserwacji od zewnątrz",
					text: "Polecamy go w domach, gdzie zależy na dobrym Uw okna, a jednocześnie inwestor nie chce wracać do tematu malowania ram co kilka lat. Szerokie możliwości szklenia do 64 mm.",
				},
			],
		},
	},
	{
		slug: "naturo-92",
		manufacturer: "Naturo",
		name: "Naturo 92",
		fullName: "Naturo 92",
		image: "/images/products/naturo-92.png",
		depth: "92 mm",
		glazing: "46–56 mm",
		seals: "2–3",
		layers: "4",
		uw: "0,77",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"Naturo 92 to system z najwyższej półki w linii Naturo. Grubość profilu 92 mm pozwala na montaż potrójnych pakietów szybowych o bardzo dobrych parametrach cieplnych i akustycznych. To rozwiązanie kierujemy do domów energooszczędnych i budynków pasywnych.",
		features: [
			{ label: "Głębokość zabudowy", value: "92 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości 46–56 mm" },
			{ label: "Uszczelki", value: "2–3" },
			{ label: "Warstwy drewna", value: "4" },
			{ label: "Energooszczędność", value: "Spełnia wymagania budownictwa pasywnego" },
			{ label: "Zastosowanie", value: "Domy pasywne i energooszczędne" },
		],
		manufacturerDescription:
			"Linia Naturo to seria drewnianych systemów okiennych jednego z największych producentów na rynku. Naturo 92 to flagowy system o najwyższych parametrach cieplnych.\n\nJeśli projektujesz dom z myślą o niskich kosztach ogrzewania w dłuższej perspektywie – Naturo 92 będzie jednym z pierwszych systemów, które zaproponujemy.",
		ctaText: "Kup okna Naturo w Trendhomes",
		colors: woodenWindowColors,
		featureSections: {
			heading: ["Najwyższa półka", "w drewnianej stolarce"],
			blocks: [
				{
					title: "Premium w linii Naturo",
					text: "Grubość profilu 92 mm pozwala na montaż potrójnych pakietów szybowych o bardzo dobrych parametrach cieplnych i akustycznych. To rozwiązanie dla domów energooszczędnych i budynków pasywnych.",
				},
				{
					title: "Inwestycja w niskie koszty",
					text: "Jeśli projektujesz dom z myślą o niskich kosztach ogrzewania w dłuższej perspektywie – Naturo 92 będzie jednym z pierwszych systemów, które zaproponujemy. Stolarka realnie wpływa na bilans energetyczny.",
				},
			],
		},
	},
	{
		slug: "esperia-life-74-alu",
		manufacturer: "Esperia Life",
		name: "Esperia Life 74 ALU",
		fullName: "Esperia Life 74 ALU",
		image: "/images/products/esperia-life-74-alu.png",
		depth: "74 mm",
		glazing: "do 48 mm",
		seals: "3",
		layers: "4",
		uw: "0,8",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"Esperia Life 74 ALU to system dla klientów, którzy oczekują od stolarki drewnianej bardziej wyrafinowanego wyglądu i smuklejszych profili. Konstrukcja drewniano-aluminiowa daje czystą, nowoczesną linię od zewnątrz, zachowując ciepło drewna w środku.",
		features: [
			{ label: "Głębokość zabudowy", value: "74 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 48 mm" },
			{ label: "Uszczelki", value: "3" },
			{ label: "Warstwy drewna", value: "4" },
			{ label: "Design", value: "Smukłe profile, nowoczesna linia" },
			{ label: "Nakładka", value: "Aluminiowa nakładka zewnętrzna" },
		],
		manufacturerDescription:
			"Linia Esperia Life to seria premium drewnianych systemów okiennych o smukłych profilach i dopracowanych detalach. Wyróżnia się nowoczesną estetyką i wysokimi parametrami technicznymi.\n\nSprawdza się w projektach architektonicznych, gdzie liczy się proporcja i detal – np. w domach z dużymi przeszkleniami i minimalistycznymi elewacjami.",
		ctaText: "Kup okna Esperia Life w Trendhomes",
		colors: woodenWindowColors,
		featureSections: {
			heading: ["Wyrafinowany design", "z ciepłem drewna"],
			blocks: [
				{
					title: "Smukłe profile, nowoczesna linia",
					text: "Esperia Life 74 ALU to system dla klientów, którzy oczekują od stolarki drewnianej bardziej wyrafinowanego wyglądu i smuklejszych profili. Konstrukcja drewniano-aluminiowa daje czystą linię od zewnątrz.",
				},
				{
					title: "Architektura i detal",
					text: "Sprawdza się w projektach architektonicznych, gdzie liczy się proporcja i detal – np. w domach z dużymi przeszkleniami, minimalistycznymi elewacjami lub tam, gdzie stolarka ma współgrać z aluminiowymi elementami budynku.",
				},
			],
		},
	},
	{
		slug: "esperia-life-80",
		manufacturer: "Esperia Life",
		name: "Esperia Life 80",
		fullName: "Esperia Life 80",
		image: "/images/products/esperia-life-80.png",
		depth: "80 mm",
		glazing: "do 48 mm",
		seals: "3",
		layers: "4",
		uw: "0,83",
		uwNote: "Uw dla Ug = 0,5 (ramka Ultimate)*",
		description:
			"Esperia Life 80 to linia premium wśród drewnianych okien producenta. Głębszy profil pozwala na jeszcze lepsze parametry cieplne i akustyczne, a linia Esperia Life wyróżnia się smukłymi kształtami i dopracowanymi detalami.",
		features: [
			{ label: "Głębokość zabudowy", value: "80 mm" },
			{ label: "Szklenie pakietami", value: "o szerokości do 48 mm" },
			{ label: "Uszczelki", value: "3" },
			{ label: "Warstwy drewna", value: "4" },
			{ label: "Design", value: "Smukłe kształty, dopracowane detale" },
			{ label: "Zastosowanie", value: "Nowoczesne projekty, duże formaty okien" },
		],
		manufacturerDescription:
			"Linia Esperia Life to seria premium drewnianych systemów okiennych o smukłych profilach i dopracowanych detalach. Wyróżnia się nowoczesną estetyką i wysokimi parametrami technicznymi.\n\nTen system wybieramy do domów, w których stolarka ma być nie tylko funkcjonalna, ale też stanowić widoczny element architektury.",
		ctaText: "Kup okna Esperia Life w Trendhomes",
		colors: woodenWindowColors,
		featureSections: {
			heading: ["Premium w drewnie", "z dopracowanymi detalami"],
			blocks: [
				{
					title: "Linia premium producenta",
					text: "Głębszy profil pozwala na jeszcze lepsze parametry cieplne i akustyczne, a linia Esperia Life wyróżnia się smukłymi kształtami i dopracowanymi detalami. To stolarka, która jest widocznym elementem architektury.",
				},
				{
					title: "Dla wymagających projektów",
					text: "Dobrze współgra z nowoczesnymi projektami, dużymi formatami okien i inwestycjami, gdzie jakość wykończenia ma kluczowe znaczenie. To rozwiązanie dla klientów, którzy nie idą na kompromis.",
				},
			],
		},
	},
];

export function getWoodenSystemBySlug(slug: string): WoodenWindowSystem | undefined {
	return woodenSystems.find((s) => s.slug === slug);
}

export function getRelatedWoodenSystems(currentSlug: string): WoodenWindowSystem[] {
	return woodenSystems.filter((s) => s.slug !== currentSlug).slice(0, 3);
}

export function getSystemBySlug(slug: string): ProductSystem | undefined {
	return pvcSystems.find((s) => s.slug === slug);
}

export function getRelatedSystems(currentSlug: string): ProductSystem[] {
	return pvcSystems.filter((s) => s.slug !== currentSlug).slice(0, 3);
}
