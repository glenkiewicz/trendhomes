import type { BlockMapEmbed } from "../../types/strapi";

/**
 * Pełna szerokość iframe Google Maps (lub innego embed URL).
 * 1:1 z prod https://trendhomes.pl/ — sekcja mapy na samym końcu strony.
 */
export default function MapEmbedBlock({ block }: { block: BlockMapEmbed }) {
  const height = block.height ?? 500;
  return (
    <section className="w-full">
      <iframe
        src={block.embedUrl}
        title={block.title ?? "Mapa Trendhomes"}
        width="100%"
        height={height}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="block border-0"
        allowFullScreen
      />
    </section>
  );
}
