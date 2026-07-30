import Image from "next/image";
import Link from "next/link";
import BlogContent, { type BlogPost, type BlogCategory } from "./BlogContent";
import { listArticles, mediaUrl, formatPlDate } from "../lib/strapi";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://trendhomes.pl";

const HERO = {
	image: "/images/blog-hero.png",
	breadcrumb: "Home / Blog",
	titleLines: ["Strefa wiedzy", "Trendhomes"],
	description:
		"Zanim podejmiesz decyzję o oknach, drzwiach, roletach czy pergoli, warto wiedzieć, na co zwrócić uwagę. W naszych materiałach pokazujemy praktyczne przykłady z budowy, remontów i lokali usługowych w Sanoku i okolicach.",
	cta: "Przeczytaj nasz najnowszy artykuł",
};

const OG_IMAGE = `${SITE_URL}${HERO.image}`;

export const metadata = {
	title: "Blog – Trendhomes",
	description:
		"Porady, inspiracje i aktualności od ekipy Trendhomes z Sanoka. Sprawdź, na co zwrócić uwagę przy wyborze okien, drzwi, rolet czy pergoli.",
	alternates: { canonical: `${SITE_URL}/blog` },
	openGraph: {
		type: "website" as const,
		url: `${SITE_URL}/blog`,
		title: "Blog – Trendhomes",
		description:
			"Porady, inspiracje i aktualności od ekipy Trendhomes z Sanoka. Sprawdź, na co zwrócić uwagę przy wyborze okien, drzwi, rolet czy pergoli.",
		images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
		siteName: "Trendhomes",
		locale: "pl_PL",
	},
	twitter: {
		card: "summary_large_image" as const,
		title: "Blog – Trendhomes",
		description:
			"Porady, inspiracje i aktualności od ekipy Trendhomes z Sanoka. Sprawdź, na co zwrócić uwagę przy wyborze okien, drzwi, rolet czy pergoli.",
		images: [OG_IMAGE],
	},
};

export default async function BlogPage() {
	const articles = await listArticles();
	const posts: BlogPost[] = articles.map((a) => ({
		slug: a.slug,
		image: mediaUrl(a.coverImage, "large"),
		title: a.title,
		excerpt: a.excerpt,
		category: (a.category?.name ?? "Porady") as BlogCategory,
		date: formatPlDate(a.publishedDate),
	}));
	const featured = posts[0];

	return (
		<>
			<section className="relative h-[400px] w-full overflow-hidden sm:h-[500px] md:h-[600px] lg:h-[714px]">
				<Image
					src={HERO.image}
					alt="Strefa wiedzy Trendhomes — porady o oknach, drzwiach i roletach"
					fill
					sizes="100vw"
					className="object-cover"
					priority
				/>
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(90deg, rgba(27,27,27,0.72) 15%, rgba(27,27,27,0.58) 43%, rgba(107,101,98,0.24) 79%, rgba(255,240,229,0) 100%)",
					}}
				/>

				<div className="relative z-10 mx-auto max-w-[1440px] px-3 pt-6 md:px-5">
					<p className="text-sm uppercase text-white md:text-base">
						{HERO.breadcrumb}
					</p>
				</div>

				<div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-3 md:px-5">
					<div className="flex max-w-[928px] flex-col gap-4 md:gap-6">
						<h1 className="text-[26px] font-semibold leading-tight text-white sm:text-[32px] md:text-[42px] lg:text-[52px]">
							{HERO.titleLines.map((line, i) => (
								<span key={i}>
									{i > 0 && <br />}
									{line}
								</span>
							))}
						</h1>
						<p className="max-w-[552px] text-sm leading-relaxed text-white md:text-base lg:text-lg">
							{HERO.description}
						</p>
						{featured && (
							<div>
								<Link
									href={`/blog/${featured.slug}`}
									className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-8 sm:text-base"
								>
									{HERO.cta}
								</Link>
							</div>
						)}
					</div>
				</div>
			</section>

			<BlogContent posts={posts} />
		</>
	);
}
