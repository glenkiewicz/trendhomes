import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

type StrapiWebhookPayload = {
  event: string;
  model: string;
  entry?: {
    id?: number;
    documentId?: string;
    slug?: string;
    productType?: string;
  };
};

/** Next.js 16 requires a CacheLife profile on revalidateTag. */
const CACHE_PROFILE = "default";

function invalidateTag(tag: string) {
  revalidateTag(tag, CACHE_PROFILE);
}

export async function POST(req: NextRequest) {
  const secret =
    req.headers.get("x-strapi-secret") ||
    req.headers.get("X-Strapi-Secret") ||
    new URL(req.url).searchParams.get("secret");

  if (!process.env.STRAPI_REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, error: "STRAPI_REVALIDATE_SECRET not configured" },
      { status: 500 }
    );
  }
  if (secret !== process.env.STRAPI_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: "invalid secret" }, { status: 401 });
  }

  let body: StrapiWebhookPayload;
  try {
    body = (await req.json()) as StrapiWebhookPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const slug = body.entry?.slug;
  const model = body.model;

  switch (model) {
    case "article":
      invalidateTag("articles");
      revalidatePath("/blog");
      if (slug) {
        invalidateTag(`article:${slug}`);
        revalidatePath(`/blog/${slug}`);
      }
      break;

    case "category":
      invalidateTag("articles");
      revalidatePath("/blog");
      break;

    case "product-system": {
      invalidateTag("products");
      const base = body.entry?.productType === "wooden"
        ? "/produkty/okna-drewniane"
        : "/produkty/okna";
      revalidatePath(base);
      if (slug) {
        invalidateTag(`product:${slug}`);
        revalidatePath(`${base}/${slug}`);
      }
      break;
    }

    case "realization":
      invalidateTag("realizations");
      revalidatePath("/realizacje");
      break;

    case "review":
      invalidateTag("reviews");
      revalidatePath("/opinie");
      revalidatePath("/");
      break;

    case "home-page":
      invalidateTag("home");
      revalidatePath("/");
      break;

    case "global-settings":
    case "navigation":
      invalidateTag("global");
      revalidatePath("/", "layout");
      break;

    case "page":
    case "product-category-page":
      if (slug) revalidatePath(`/${slug}`.replace(/^\/\//, "/"));
      break;

    default:
      invalidateTag("global");
  }

  revalidatePath("/sitemap.xml");

  return NextResponse.json({
    ok: true,
    model,
    slug: slug ?? null,
    revalidatedAt: new Date().toISOString(),
  });
}
