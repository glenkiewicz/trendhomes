import { ImageResponse } from "next/og";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #1b1b1b 0%, #2a2a2a 55%, #3a2f2b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            letterSpacing: "0.02em",
            color: "#ec4899",
          }}
        >
          TRENDHOMES
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Okna, drzwi i rolety z montażem
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ width: 4, height: 56, background: "#ec4899" }} />
            <div style={{ fontSize: 28, opacity: 0.85 }}>
              Sanok · Podkarpacie · trendhomes.pl
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
