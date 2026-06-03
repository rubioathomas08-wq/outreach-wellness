import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Outreach Wellness — Hormone Therapy, Peptides, IV Therapy in Murfreesboro, TN";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1E1E1E",
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
            border: "1.5px solid rgba(212, 168, 46, 0.18)",
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
            border: "1px solid rgba(212, 168, 46, 0.1)",
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
              color: "#E8C547",
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
            color: "#B0B0B0",
            fontSize: "18px",
            marginTop: "32px",
            fontFamily: "sans-serif",
          }}
        >
          Hormone Therapy &bull; Peptides &bull; IV Therapy &bull; Murfreesboro, TN
        </span>
      </div>
    ),
    { ...size }
  );
}
