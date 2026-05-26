/**
 * Custom Image loader — Vercel image proxy /_next/image bywa flaky dla
 * obrazków ze Strapi (Railway): timeoutuje, zwraca 400 dla niektórych
 * kombinacji width/quality, race condition po deploy. Strapi już zwraca
 * preoptymalizowane warianty (small/medium/large/xlarge) w `formats`,
 * a `mediaUrl()` wybiera odpowiedni — więc Vercel optimization jest
 * redundantny i lokalne pliki też lepiej serwować bez proxy.
 *
 * Zwracamy raw URL, Next.js ignoruje width/quality params.
 */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }): string {
  return src;
}
