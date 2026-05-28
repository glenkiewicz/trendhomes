import SectionHeading from "../SectionHeading";
import type { BlockRichText } from "../../types/strapi";

export default function RichTextBlock({ block }: { block: BlockRichText }) {
  if (block.headingLines && block.headingLines.length > 0) {
    return (
      <section className="bg-white py-10 md:py-20">
        <div className="mx-auto max-w-[1440px] px-3 md:px-5">
          <SectionHeading lines={block.headingLines} />
          <div
            className="mt-6 text-sm leading-relaxed text-dark md:text-xl
              [&_p]:mb-4 [&_p:last-child]:mb-0
              [&_strong]:font-semibold
              [&_a]:text-pink [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-pink/80
              [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 marker:[&_ul]:text-pink
              [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 marker:[&_ol]:text-pink
              [&_li]:mb-2"
            dangerouslySetInnerHTML={{ __html: block.body }}
          />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-10 md:py-20">
      <div className="mx-auto max-w-[1440px] px-3 md:px-5">
        <div
          className="prose prose-lg mx-auto max-w-[867px] text-dark
            [&_h2]:mb-4 [&_h2]:mt-8 [&_h2]:text-[20px] [&_h2]:font-bold [&_h2]:text-dark md:[&_h2]:text-[26px]
            [&_h3]:mb-3 [&_h3]:mt-6 [&_h3]:text-[17px] [&_h3]:font-bold [&_h3]:text-dark md:[&_h3]:text-[21px]
            [&_p]:mb-5 [&_p]:text-[15px] [&_p]:leading-[1.8] [&_p]:text-dark/80 md:[&_p]:text-base
            [&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 marker:[&_ul]:text-pink
            [&_ol]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 marker:[&_ol]:text-pink
            [&_li]:mb-2 [&_li]:text-[15px] [&_li]:leading-[1.8] [&_li]:text-dark/80
            [&_a]:text-pink [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-pink/80"
          dangerouslySetInnerHTML={{ __html: block.body }}
        />
      </div>
    </section>
  );
}
