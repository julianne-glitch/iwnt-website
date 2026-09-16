import { ImageResponse } from "next/og";

export const alt = "IWNT Workforce Network Technologies for African markets";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #070D19 0%, #0D1B2E 55%, #0B3D2E 100%)",
          padding: "64px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: "#4ADE80",
            textTransform: "uppercase",
          }}
        >
          IWNT
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            Hire, pay, and manage teams across Africa
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#CBD5E1",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            Workforce infrastructure from DIFC Dubai, connected to African markets.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#94A3B8",
          }}
        >
          <span>iwnt.ae</span>
          <span>Intel Workforce Network Technologies</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
