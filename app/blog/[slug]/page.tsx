import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import TopBar from "../../components/TopBar";
import Footer from "../../components/Footer";
import { blogPosts, getPostBySlug } from "../../lib/blog-data";

export function generateStaticParams() {
	return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) return { title: "Nie znaleziono – Trendhomes" };
	return {
		title: `${post.title} – Trendhomes`,
		description: post.excerpt,
	};
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = getPostBySlug(slug);
	if (!post) notFound();

	return (
		<>
			<div className="sticky top-0 z-50">
				<TopBar />
				<Navbar />
			</div>

			{/* Hero section with image */}
			<section className="relative h-[300px] w-full sm:h-[400px] md:h-[500px]">
				<Image
					src={post.image}
					alt={post.title}
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-dark/10" />
				<div className="absolute inset-0 flex items-end">
					<div className="mx-auto w-full max-w-[1440px] px-3 pb-8 md:px-5 md:pb-14">
						{/* Breadcrumb */}
						<nav className="mb-4 flex items-center gap-2 text-sm text-white/70 md:mb-6 md:text-base">
							<Link
								href="/"
								className="transition-colors hover:text-white"
							>
								Strona główna
							</Link>
							<span>/</span>
							<Link
								href="/blog"
								className="transition-colors hover:text-white"
							>
								Blog
							</Link>
							<span>/</span>
							<span className="text-white/50 line-clamp-1">
								{post.title}
							</span>
						</nav>

						{/* Category & Date */}
						<div className="mb-4 flex items-center gap-4">
							<span className="bg-pink px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
								{post.category}
							</span>
							<span className="text-sm text-white/70">
								{post.date}
							</span>
						</div>

						{/* Title */}
						<h1 className="max-w-[900px] text-[22px] font-bold leading-tight text-white sm:text-[29px] md:text-[35px] lg:text-[42px]">
							{post.title}
						</h1>
					</div>
				</div>
			</section>

			<main className="bg-white">
				<article className="mx-auto max-w-[1440px] px-3 md:px-5">
					{/* Lead / excerpt */}
					<div className="mx-auto max-w-[867px] border-l-[3px] border-pink py-10 pl-6 md:py-16 md:pl-8 my-10">
						<p className="text-base leading-relaxed text-dark/80 md:text-lg lg:text-xl">
							{post.excerpt}
						</p>
					</div>

					{/* Content */}
					<div
						className="prose prose-lg mx-auto max-w-[867px] pb-12 text-dark md:pb-20
              [&_h2]:mb-4 [&_h2]:mt-12 [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-dark sm:[&_h2]:text-[22px] md:[&_h2]:text-[26px]
              [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:text-[17px] [&_h3]:font-bold [&_h3]:text-dark sm:[&_h3]:text-[19px] md:[&_h3]:text-[21px]
              [&_p]:mb-5 [&_p]:text-[15px] [&_p]:leading-[1.8] [&_p]:text-dark/80 md:[&_p]:text-base
              first:[&_>p]:mt-8 first:[&_>p]:mb-8 md:first:[&_>p]:mt-12 md:first:[&_>p]:mb-10
              [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 marker:[&_ul]:text-pink
              [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 marker:[&_ol]:text-pink marker:[&_ol]:font-bold
              [&_li]:mb-2 [&_li]:text-[15px] [&_li]:leading-[1.8] [&_li]:text-dark/80 [&_li]:pl-1 md:[&_li]:text-base
              [&_a]:text-pink [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-pink/80 [&_a]:transition-colors"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>

					{/* CTA banner */}
					<div className="mx-auto mb-12 max-w-[867px] bg-section-light px-6 py-10 text-center md:mb-20 md:px-12 md:py-14">
						<h3 className="mb-3 text-xl font-bold text-dark md:text-2xl">
							Potrzebujesz doradztwa?
						</h3>
						<p className="mb-6 text-sm text-dark/70 md:text-base">
							Skontaktuj się z nami. Ocenimy Twoje potrzeby i
							przygotujemy wycenę dopasowaną do projektu.
						</p>
						<Link
							href="/kontakt"
							className="btn-pink inline-flex h-11 items-center justify-center px-8 text-sm font-bold text-[#f6f6f6] sm:h-[52px] sm:px-10 sm:text-base"
						>
							Umów bezpłatną wycenę
						</Link>
					</div>

					{/* Back to blog */}
					<div className="flex justify-center pb-12 md:pb-20">
						<Link
							href="/blog"
							className="inline-flex items-center gap-2 text-sm text-dark/60 transition-colors hover:text-pink"
						>
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
							>
								<path
									d="M9 3L5 7L9 11"
									stroke="currentColor"
									strokeWidth="1.5"
								/>
							</svg>
							Wróć do wszystkich wpisów
						</Link>
					</div>
				</article>
			</main>
			<Footer />
		</>
	);
}
