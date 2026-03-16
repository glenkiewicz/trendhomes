import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { blogPosts } from "../lib/blog-data";
import BlogContent from "./BlogContent";

export const metadata = {
  title: "Blog – Trendhomes | Strefa wiedzy",
  description:
    "Porady, realizacje i aktualności ze świata stolarki okiennej i drzwiowej. Trendhomes Sanok.",
};

export default function BlogPage() {
  const featured = blogPosts[0];

  return (
    <>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[400px] w-full overflow-hidden sm:h-[500px] md:h-[600px] lg:h-[714px]">
        <Image
          src="/images/blog-hero.png"
          alt=""
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

        {/* Breadcrumb */}
        <div className="relative z-10 mx-auto max-w-[1440px] px-3 pt-6 md:px-5">
          <p className="text-sm uppercase text-white md:text-base">
            home | strefa wiedzy
          </p>
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-3 md:px-5">
          <div className="flex max-w-[928px] flex-col gap-4 md:gap-6">
            <h1 className="text-[26px] font-semibold leading-tight text-white sm:text-[32px] md:text-[42px] lg:text-[52px]">
              Porady i inspiracje
              <br />
              do Twojej inwestycji
            </h1>
            <p className="max-w-[552px] text-sm leading-relaxed text-white md:text-base lg:text-lg">
              Zanim podejmiesz decyzję o oknach, drzwiach, roletach czy pergoli,
              warto wiedzieć, na co zwrócić uwagę. W naszych materiałach
              pokazujemy praktyczne przykłady z budowy, remontów i lokali
              usługowych w Sanoku i okolicach.
            </p>
            <div>
              <Link
                href={`/blog/${featured.slug}`}
                className="btn-pink h-11 px-6 text-sm sm:h-[52px] sm:px-8 sm:text-base"
              >
                Czytaj najnowszy wpis
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BlogContent posts={blogPosts} />

      <Footer />
    </>
  );
}
