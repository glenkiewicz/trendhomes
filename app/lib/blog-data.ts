export type BlogCategory = "Porady" | "Inspiracje" | "Aktualności" | "Technologie";

export interface BlogPost {
  slug: string;
  image: string;
  title: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "jak-zaplanowac-montaz-okien-i-drzwi",
    image: "/images/blog-montaz.jpg",
    title: "Jak zaplanować montaż okien i drzwi w nowym domu krok po kroku",
    excerpt:
      "Wyjaśniamy, na którym etapie budowy najlepiej montować okna i drzwi, jak dograć terminy z innymi ekipami i czego pilnować...",
    category: "Porady",
    date: "24.06.2026",
    content: `<p>Montaż okien i drzwi to jeden z kluczowych etapów budowy domu. Od właściwego zaplanowania tego procesu zależy nie tylko komfort termiczny, ale też trwałość całej stolarki.</p>

<h2>Na jakim etapie budowy montować okna?</h2>
<p>Najlepszy moment na montaż okien to etap po zakończeniu stanu surowego otwartego, ale przed rozpoczęciem prac wykończeniowych wewnątrz. Dzięki temu okna chronią wnętrze przed warunkami atmosferycznymi, a jednocześnie nie są narażone na uszkodzenia podczas ciężkich prac budowlanych.</p>

<h2>Jak dograć terminy z innymi ekipami?</h2>
<p>Kluczowe jest wcześniejsze uzgodnienie harmonogramu z wykonawcą stolarki. W Trendhomes ustalamy termin montażu już na etapie podpisywania umowy, dzięki czemu możesz spokojnie planować kolejne prace.</p>

<h2>Na co zwrócić uwagę?</h2>
<p>Przed montażem sprawdź, czy otwory okienne mają prawidłowe wymiary i czy są odpowiednio przygotowane. Ważne jest też zabezpieczenie okien po montażu – folie ochronne powinny pozostać do zakończenia prac wykończeniowych.</p>

<p>Potrzebujesz pomocy w zaplanowaniu montażu? Skontaktuj się z nami – doradzimy najlepsze rozwiązanie dla Twojej inwestycji.</p>`,
  },
  {
    slug: "wymiana-okien-w-bloku",
    image: "/images/blog-wymiana.jpg",
    title:
      "Wymiana okien w bloku w 1 dzień – co warto wiedzieć przed montażem",
    excerpt:
      "Podpowiadamy, jak przygotować mieszkanie do wymiany okien, jak rozmawiać ze wspólnotą i czego wymagać od ekipy...",
    category: "Porady",
    date: "24.06.2026",
    content: `<p>Wymiana okien w bloku to proces, który budzi wiele pytań. Czy trzeba informować wspólnotę? Jak przygotować mieszkanie? Ile to trwa? Odpowiadamy na najczęstsze wątpliwości.</p>

<h2>Czy potrzebuję zgody wspólnoty?</h2>
<p>W większości przypadków wymiana okien na takie same (lub zbliżone wizualnie) nie wymaga zgody wspólnoty. Warto jednak sprawdzić regulamin i poinformować zarząd o planowanych pracach, zwłaszcza jeśli zmienia się kolor ram od strony elewacji.</p>

<h2>Jak przygotować mieszkanie?</h2>
<p>Odsuwamy meble od okien na minimum 1,5 metra. Zabezpieczamy podłogę folią. Zdejmujemy zasłony i karnisze. Nasi monterzy dodatkowo zabezpieczają strefę pracy, ale im lepiej przygotujesz mieszkanie, tym szybciej i czyściej przebiegnie montaż.</p>

<h2>Ile trwa wymiana?</h2>
<p>Standardowa wymiana 3–4 okien w mieszkaniu zajmuje jeden dzień roboczy. Wieczorem możesz już normalnie korzystać z pomieszczeń. Montaż obejmuje demontaż starych okien, osadzenie nowych, uszczelnienie i obróbkę.</p>

<p>Chcesz wymienić okna w swoim mieszkaniu? Umów bezpłatny pomiar – przyjedziemy i doradzimy najlepsze rozwiązanie.</p>`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
