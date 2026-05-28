import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../SectionHeading";
import { listArticles, mediaUrl } from "../../lib/strapi";
import type { BlockBlogList } from "../../types/strapi";

export default async function BlogListBlock({ block }: { block: BlockBlogList }) {
  const articles = (await listArticles()).slice(0, block.limit);

  return (
    <section id="blog" className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <SectionHeading lines={block.headingLines} />

        {block.description && (
          <p className="mt-4 max-w-[867px] text-base leading-relaxed text-dark md:mt-6 md:text-xl">
            {block.description}
          </p>
        )}

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 lg:grid-cols-2 lg:gap-8">
          {articles.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-6 transition-transform duration-300 hover:-translate-y-1 sm:flex-row sm:items-start"
            >
              <div className="relative h-[240px] w-full shrink-0 overflow-hidden sm:h-[342px] sm:w-[342px]">
                <Image
                  src={mediaUrl(post.coverImage, "medium")}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 342px"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-4 sm:gap-6">
                <h3 className="text-lg font-bold leading-tight text-dark transition-colors group-hover:text-pink md:text-xl">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-dark">{post.excerpt}</p>
                <div className="inline-flex flex-col items-start gap-1.5 py-3">
                  <span className="text-sm text-dark">Czytaj więcej</span>
                  <span className="block h-[2px] w-[98px] bg-dark" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {block.ctaLabel && (
          <div className="mt-10 flex justify-center md:mt-14">
            <Link href={block.ctaUrl ?? "/blog"} className="btn-pink h-12 px-[34px] text-sm">
              {block.ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
