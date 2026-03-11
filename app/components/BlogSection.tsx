import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { blogPosts } from "../lib/blog-data";

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-12 md:py-20">
      <div className="mx-auto max-w-[1440px] px-4 md:px-6">
        <SectionHeading lines={["Strefa", "wiedzy"]} />

        <p className="mt-4 max-w-[867px] text-lg leading-relaxed text-dark md:mt-6 md:text-2xl">
          Zanim podejmiesz decyzję o oknach, drzwiach, roletach czy pergoli,
          warto wiedzieć, na co zwrócić uwagę. W naszych materiałach pokazujemy
          praktyczne przykłady z budowy, remontów i lokali usługowych w Sanoku
          i okolicach.
        </p>

        {/* Blog cards */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-12 lg:grid-cols-2 lg:gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-6 transition-transform duration-300 hover:-translate-y-1 sm:flex-row sm:items-start"
            >
              {/* Image */}
              <div className="relative h-[240px] w-full shrink-0 overflow-hidden sm:h-[342px] sm:w-[342px]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 342px"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-4 sm:gap-6">
                <h3 className="text-xl font-bold leading-tight text-dark transition-colors group-hover:text-pink md:text-2xl">
                  {post.title}
                </h3>
                <p className="text-base leading-relaxed text-dark">
                  {post.excerpt}
                </p>
                <div className="inline-flex flex-col items-start gap-1.5 py-4">
                  <span className="text-base text-dark">Czytaj więcej</span>
                  <span className="block h-[2px] w-[98px] bg-dark" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-10 flex justify-center md:mt-14">
          <Link
            href="/blog"
            className="btn-pink h-12 px-[42px] text-base"
          >
            Zobacz wszystkie porady
          </Link>
        </div>
      </div>
    </section>
  );
}
