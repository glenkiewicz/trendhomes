"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { BlogPost, BlogCategory } from "../lib/blog-data";

const categories: ("Wszystkie" | BlogCategory)[] = [
  "Wszystkie",
  "Porady",
  "Inspiracje",
  "Aktualności",
  "Technologie",
];

const POSTS_PER_PAGE = 9;

export default function BlogContent({ posts }: { posts: BlogPost[] }) {
  const [active, setActive] = useState<"Wszystkie" | BlogCategory>(
    "Wszystkie"
  );
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const filtered =
    active === "Wszystkie"
      ? posts
      : posts.filter((p) => p.category === active);

  const featured = filtered[0];
  const gridPosts = filtered.slice(1, visibleCount + 1);
  const hasMore = filtered.length > visibleCount + 1;

  return (
    <main className="bg-white">
      {/* Category filter */}
      <div className="bg-gray-200/50">
        <div className="mx-auto flex max-w-[1440px] items-center gap-2 overflow-x-auto px-3 py-4 md:gap-6 md:px-5 md:py-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              className={`flex items-center gap-2 whitespace-nowrap px-3 py-2 text-sm transition-colors md:text-lg lg:text-xl ${
                active === cat
                  ? "font-bold text-dark"
                  : "text-dark/60 hover:text-dark"
              }`}
            >
              <span
                className={`flex size-4 shrink-0 items-center justify-center border transition-colors ${
                  active === cat
                    ? "border-pink bg-pink"
                    : "border-dark/30"
                }`}
              >
                {active === cat && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 3.5L3.5 6L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {featured && (
        <div className="mx-auto max-w-[1440px] px-3 py-8 md:px-5 md:py-12">
          {/* Featured article */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block"
          >
            {/* Featured image */}
            <div className="relative h-[260px] w-full overflow-hidden sm:h-[380px] md:h-[480px] lg:h-[572px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Featured text */}
            <div className="mt-6 md:mt-8">
              <div className="flex items-start justify-between gap-4">
                <h2 className="max-w-[900px] text-xl font-bold leading-tight text-dark transition-colors group-hover:text-pink md:text-2xl lg:text-[32px]">
                  {featured.title}
                </h2>
                <span className="shrink-0 text-sm text-dark/60 md:text-base">
                  {featured.date}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-dark md:text-base lg:text-lg">
                {featured.excerpt}
              </p>
              <div className="mt-4 inline-flex flex-col items-start gap-1">
                <span className="text-sm text-dark md:text-base">
                  Czytaj artykuł
                </span>
                <span className="block h-[2px] w-[131px] bg-dark" />
              </div>
            </div>
          </Link>

          {/* Article grid */}
          {gridPosts.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3 lg:gap-10">
              {gridPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  {/* Square image */}
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Category + date */}
                  <div className="mt-4 flex items-center justify-between gap-2">
                    <span className="bg-gray-200/50 px-3 py-1.5 text-sm text-dark">
                      {post.category}
                    </span>
                    <span className="text-sm text-dark/60">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-lg font-bold leading-tight text-dark transition-colors group-hover:text-pink md:text-xl lg:text-2xl">
                    {post.title}
                  </h3>
                </Link>
              ))}
            </div>
          )}

          {/* Load more */}
          {hasMore && (
            <div className="mt-10 flex justify-center md:mt-14">
              <button
                onClick={() =>
                  setVisibleCount((c) => c + POSTS_PER_PAGE)
                }
                className="btn-pink h-12 px-8 text-sm md:text-base"
              >
                Wczytaj więcej wpisów
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
