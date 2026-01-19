import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "امضا کردن - پلتفرم دیجیتال کمپین‌های اجتماعی و حمایت از حقوق بشر";
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
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "60px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Logo/Icon */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 72,
          }}
        >
          ✍️
        </div>
      </div>

      {/* Main Title */}
      <div
        style={{
          fontSize: 80,
          fontWeight: "bold",
          marginBottom: 20,
          textAlign: "center",
          textShadow: "0 4px 8px rgba(0,0,0,0.3)",
        }}
      >
        امضا کردن
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: 40,
          opacity: 0.95,
          marginBottom: 30,
          textShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        Unterschreiben
      </div>

      {/* Description */}
      <div
        style={{
          fontSize: 28,
          textAlign: "center",
          maxWidth: "900px",
          opacity: 0.9,
          lineHeight: 1.4,
          textShadow: "0 2px 4px rgba(0,0,0,0.2)",
        }}
      >
        پلتفرم دیجیتال کمپین‌های اجتماعی و حمایت از حقوق بشر
      </div>

      {/* Domain */}
      <div
        style={{
          fontSize: 24,
          marginTop: 40,
          opacity: 0.8,
          display: "flex",
          alignItems: "center",
        }}
      >
        🌐 iranwing.com
      </div>
    </div>,
    {
      ...size,
    },
  );
}

