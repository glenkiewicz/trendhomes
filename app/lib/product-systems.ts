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
  description: string;
  features: { label: string; value: string }[];
  manufacturerDescription: string;
  manufacturerLogo?: string;
  ctaText: string;
  featureSections: {
    heading: string[];
    blocks: {
      title: string;
      text: string;
      image?: string;
    }[];
  };
}

export const pvcSystems: ProductSystem[] = [
  {
    slug: "system-76",
    manufacturer: "Salamander",
    name: "System 76",
    fullName: "Salamander System 76",
    image: "/images/okna-system-76.png",
    depth: "76 mm",
    glazing: "do 48 mm",
    seals: "2/3",
    chambers: "5/6",
    uw: "0,84",
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
    manufacturer: "Salamander",
    name: "System 82",
    fullName: "Salamander System 82",
    image: "/images/okna-system-82.png",
    depth: "82 mm",
    glazing: "do 53 mm",
    seals: "3",
    chambers: "6",
    uw: "0,72",
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
    manufacturer: "Salamander",
    name: "System 92",
    fullName: "Salamander System 92",
    image: "/images/okna-system-92.png",
    depth: "92 mm",
    glazing: "do 61 mm",
    seals: "3",
    chambers: "6",
    uw: "0,62",
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
    manufacturer: "Rehau",
    name: "SYNEGO",
    fullName: "Rehau SYNEGO",
    image: "/images/okna-system-82.png",
    depth: "80 mm",
    glazing: "do 51 mm",
    seals: "3",
    chambers: "6-7",
    uw: "0,75",
    description:
      "System SYNEGO to propozycja skierowana do wymagających inwestorów, którzy oczekują wysokiej jakości, trwałości i realnych oszczędności energii.",
    features: [
      { label: "Głębokość zabudowy", value: "80 mm" },
      { label: "Szklenie pakietami", value: "o szerokości do 51 mm" },
      { label: "Uszczelki / komory", value: "3 uszczelki, 6-7 komór" },
      { label: "Bezpieczeństwo", value: "Certyfikowana odporność na włamanie" },
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
    manufacturer: "Aluplast",
    name: "Ideal 4000",
    fullName: "Aluplast Ideal 4000",
    image: "/images/okna-system-76.png",
    depth: "70 mm",
    glazing: "do 41 mm",
    seals: "2",
    chambers: "5",
    uw: "1,0",
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
    manufacturer: "Aluplast",
    name: "Ideal Neo",
    fullName: "Aluplast Ideal Neo",
    image: "/images/okna-system-76.png",
    depth: "76 mm",
    glazing: "do 60 mm",
    seals: "2",
    chambers: "5-6",
    uw: "0,85",
    description:
      "System 76 mm daje lepsze możliwości izolacji cieplnej i akustycznej, co docenią szczególnie mieszkańcy domów przy ruchliwych ulicach lub w chłodniejszych lokalizacjach.",
    features: [
      { label: "Głębokość zabudowy", value: "76 mm" },
      { label: "Szklenie pakietami", value: "o szerokości do 60 mm" },
      { label: "Uszczelki / komory", value: "2 uszczelki, 5-6 komór" },
      { label: "Izolacja akustyczna", value: "Podwyższona izolacja akustyczna" },
      { label: "Izolacja cieplna", value: "Lepsze parametry termiczne" },
      { label: "Zastosowanie", value: "Nowe domy i wymagające modernizacje" },
    ],
    manufacturerDescription:
      "Aluplast to producent, którego systemy często stosuje się w budownictwie jednorodzinnym i wielorodzinnym. Daje szerokie możliwości konfiguracji.",
    ctaText: "Kup okna Aluplast w Trendhomes",
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
    manufacturer: "Aluplast",
    name: "Ideal 8000",
    fullName: "Aluplast Ideal 8000",
    image: "/images/okna-system-92.png",
    depth: "85 mm",
    glazing: "do 52 mm",
    seals: "3",
    chambers: "6",
    uw: "0,70",
    description:
      "System 85 mm kierujemy do klientów, którzy chcą maksymalnie ograniczyć straty energii przez okna.",
    features: [
      { label: "Głębokość zabudowy", value: "85 mm" },
      { label: "Szklenie pakietami", value: "o szerokości do 52 mm" },
      { label: "Uszczelki / komory", value: "3 uszczelki, 6 komór" },
      { label: "Energooszczędność", value: "Maksymalne ograniczenie strat energii" },
      { label: "Klasa", value: "Profile klasy A" },
      { label: "Zastosowanie", value: "Domy z nowoczesnymi źródłami ogrzewania" },
    ],
    manufacturerDescription:
      "Aluplast to producent, którego systemy często stosuje się w budownictwie jednorodzinnym i wielorodzinnym.",
    ctaText: "Kup okna Aluplast w Trendhomes",
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
    manufacturer: "EkoSun",
    name: "EkoSun 70",
    fullName: "EkoSun 70",
    image: "/images/okna-system-76.png",
    depth: "70 mm",
    glazing: "do 41 mm",
    seals: "2",
    chambers: "5",
    uw: "1,0",
    description:
      "System 70 mm EkoSun to dobra baza dla wielu standardowych realizacji \u2013 od mieszkań po domy jednorodzinne. Pozwala poprawić komfort cieplny i akustyczny bez dużego obciążenia budżetu.",
    features: [
      { label: "Głębokość zabudowy", value: "70 mm" },
      { label: "Szklenie pakietami", value: "o szerokości do 41 mm" },
      { label: "Uszczelki / komory", value: "2 uszczelki, 5 komór" },
      { label: "Zastosowanie", value: "Mieszkania i domy jednorodzinne" },
      { label: "Klasa", value: "Profile klasy A wg PN-EN 12608" },
      { label: "Budżet", value: "Rozwiązanie w rozsądnym budżecie" },
    ],
    manufacturerDescription:
      "Systemy EkoSun wybieramy, gdy ważne są dobre parametry przy zachowaniu rozsądnego budżetu i możliwość spójnego dopasowania stolarki w całym budynku.\n\nTo często rozwiązanie dla klientów, którzy chcą \u201Epo prostu mieć dobre okna\u201D, nie wchodząc w najwyższe widełki cenowe. Dobrze sprawdza się zarówno w domach, jak i mieszkaniach.",
    ctaText: "Kup okna EkoSun w Trendhomes",
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
    manufacturer: "EkoSun",
    name: "EkoSun 6",
    fullName: "EkoSun 6",
    image: "/images/okna-system-82.png",
    depth: "81 mm",
    glazing: "do 48 mm",
    seals: "2/3",
    chambers: "6",
    uw: "0,80",
    description:
      "System 81 mm celuje w inwestycje, w których chcesz mieć wyraźnie lepszą izolacyjność okien niż podstawowa. Dobrze współgra z nowoczesnymi instalacjami grzewczymi i rekuperacją.",
    features: [
      { label: "Głębokość zabudowy", value: "81 mm" },
      { label: "Szklenie pakietami", value: "o szerokości do 48 mm" },
      { label: "Uszczelki / komory", value: "2/3 uszczelki, 6 komór" },
      { label: "Izolacyjność", value: "Wyraźnie lepsza izolacyjność termiczna" },
      { label: "Kompatybilność", value: "Współgra z rekuperacją i pompą ciepła" },
      { label: "Zastosowanie", value: "Nowe domy i świadome remonty" },
    ],
    manufacturerDescription:
      "Systemy EkoSun wybieramy, gdy ważne są dobre parametry przy zachowaniu rozsądnego budżetu i możliwość spójnego dopasowania stolarki w całym budynku.\n\nTo często rozwiązanie dla klientów, którzy chcą \u201Epo prostu mieć dobre okna\u201D, nie wchodząc w najwyższe widełki cenowe.",
    ctaText: "Kup okna EkoSun w Trendhomes",
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
    manufacturer: "EkoSun",
    name: "EkoSun 7",
    fullName: "EkoSun 7",
    image: "/images/okna-system-92.png",
    depth: "81 mm",
    glazing: "do 52 mm",
    seals: "3",
    chambers: "7",
    uw: "0,72",
    description:
      "System 81 mm EkoSun stosujemy wtedy, gdy stolarka ma być jednym z filarów energooszczędności budynku. Większa głębokość profilu umożliwia zaawansowane konfiguracje.",
    features: [
      { label: "Głębokość zabudowy", value: "81 mm" },
      { label: "Szklenie pakietami", value: "o szerokości do 52 mm" },
      { label: "Uszczelki / komory", value: "3 uszczelki, 7 komór" },
      { label: "Energooszczędność", value: "Filar energooszczędności budynku" },
      { label: "Konfiguracje", value: "Zaawansowane konfiguracje szklenia" },
      { label: "Zastosowanie", value: "Domy z wyższej półki cieplnej" },
    ],
    manufacturerDescription:
      "Systemy EkoSun wybieramy, gdy ważne są dobre parametry przy zachowaniu rozsądnego budżetu i możliwość spójnego dopasowania stolarki w całym budynku.\n\nTo opcja do rozważenia, jeśli planujesz dom z wyższej półki pod względem standardu cieplnego.",
    ctaText: "Kup okna EkoSun w Trendhomes",
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
    manufacturer: "Gealan",
    name: "S8000",
    fullName: "Gealan S8000",
    image: "/images/okna-system-76.png",
    depth: "74 mm",
    glazing: "do 48 mm",
    seals: "2",
    chambers: "6",
    uw: "0,87",
    description:
      "System 74 mm Gealan to uniwersalne rozwiązanie do wielu typów budynków. Dobrze spisuje się przy remontach oraz w standardowych nowych domach.",
    features: [
      { label: "Głębokość zabudowy", value: "74 mm" },
      { label: "Szklenie pakietami", value: "o szerokości do 48 mm" },
      { label: "Uszczelki / komory", value: "2 uszczelki, 6 komór" },
      { label: "Design", value: "Nowoczesny wygląd profili" },
      { label: "Zastosowanie", value: "Remonty i standardowe nowe domy" },
      { label: "Budżet", value: "Porządny produkt w rozsądnej cenie" },
    ],
    manufacturerDescription:
      "Systemy Gealan często wybieramy przy nowoczesnych projektach, w których pojawiają się większe przeszklenia i wyraźnie zarysowana architektura.\n\nTo profile, które dobrze wypadają zarówno pod względem parametrów, jak i wizualnie. Sprawdzają się w domach, mieszkaniach oraz wybranych realizacjach w lokalach usługowych.",
    ctaText: "Kup okna Gealan w Trendhomes",
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
    manufacturer: "Gealan",
    name: "S9000",
    fullName: "Gealan S9000",
    image: "/images/okna-system-92.png",
    depth: "82,5 mm",
    glazing: "do 53 mm",
    seals: "3",
    chambers: "6",
    uw: "0,71",
    description:
      "System 82,5 mm kierujemy do inwestycji, w których oczekujesz bardzo dobrego balansu między parametrami cieplnymi, akustyką i designem.",
    features: [
      { label: "Głębokość zabudowy", value: "82,5 mm" },
      { label: "Szklenie pakietami", value: "o szerokości do 53 mm" },
      { label: "Uszczelki / komory", value: "3 uszczelki, 6 komór" },
      { label: "Akustyka", value: "Bardzo dobre parametry akustyczne" },
      { label: "Design", value: "Elegancki profil do dużych przeszkleń" },
      { label: "Zastosowanie", value: "Nowoczesne domy z dużymi przeszkleniami" },
    ],
    manufacturerDescription:
      "Systemy Gealan często wybieramy przy nowoczesnych projektach, w których pojawiają się większe przeszklenia i wyraźnie zarysowana architektura.\n\nTo dobre rozwiązanie dla osób, które myślą długoterminowo o komfortowym użytkowaniu budynku.",
    ctaText: "Kup okna Gealan w Trendhomes",
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

export function getSystemBySlug(slug: string): ProductSystem | undefined {
  return pvcSystems.find((s) => s.slug === slug);
}

export function getRelatedSystems(currentSlug: string): ProductSystem[] {
  return pvcSystems.filter((s) => s.slug !== currentSlug).slice(0, 3);
}
