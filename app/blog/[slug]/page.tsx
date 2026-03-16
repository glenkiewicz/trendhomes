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
      <TopBar />
      <Navbar />
      <main className="bg-white py-10 md:py-20">
        <article className="mx-auto max-w-[1440px] px-3 md:px-5">
          {/* Back link */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-dark/60 transition-colors hover:text-pink md:mb-12"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M9 3L5 7L9 11"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            Wróć do bloga
          </Link>

          {/* Title */}
          <h1 className="max-w-[867px] text-[22px] font-bold leading-tight text-dark sm:text-[26px] md:text-[26px]">
            {post.title}
          </h1>

          {/* Hero image */}
          <div className="relative mt-8 h-[300px] w-full overflow-hidden md:mt-12 md:h-[500px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg mx-auto mt-8 max-w-[867px] text-dark md:mt-12 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-dark [&_p]:mb-4 [&_p]:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA */}
          <div className="mt-12 flex justify-center md:mt-16">
            <Link
              href="/#kontakt"
              className="inline-flex h-12 items-center justify-center bg-pink px-[34px] text-sm text-[#f6f6f6] transition-opacity hover:opacity-90"
            >
              Umów pomiar
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
