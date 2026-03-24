import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Outreach Wellness — Functional Health & IV Therapy in Murfreesboro, TN";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "1.5px solid rgba(201, 168, 76, 0.15)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            border: "1px solid rgba(201, 168, 76, 0.08)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontSize: "72px",
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              color: "#C9A84C",
              lineHeight: 1,
            }}
          >
            Outreach
          </span>
          <span
            style={{
              fontSize: "20px",
              letterSpacing: "0.35em",
              color: "#F5F0EB",
              textTransform: "uppercase" as const,
              fontFamily: "sans-serif",
            }}
          >
            Wellness
          </span>
        </div>

        {/* Tagline */}
        <span
          style={{
            color: "#9B9B9B",
            fontSize: "18px",
            marginTop: "32px",
            fontFamily: "sans-serif",
          }}
        >
          Functional Health &bull; IV Therapy &bull; Weight Loss &bull; Murfreesboro, TN
        </span>
      </div>
    ),
    { ...size }
  );
}
