import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "امضا کردن - Unterschreiben";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 64,
        background: "linear-gradient(to bottom right, #1a202c, #2d3748)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "40px",
      }}
    >
      <div style={{ fontSize: 96, fontWeight: "bold", marginBottom: 20 }}>
        امضا کردن
      </div>
      <div style={{ fontSize: 48, opacity: 0.9 }}>Unterschreiben</div>
      <div
        style={{
          fontSize: 32,
          marginTop: 40,
          textAlign: "center",
          maxWidth: "80%",
          opacity: 0.8,
        }}
      >
        پلتفرم دیجیتال کمپین‌های اجتماعی و حمایت از حقوق بشر
      </div>
    </div>,
    {
      ...size,
    },
  );
}
