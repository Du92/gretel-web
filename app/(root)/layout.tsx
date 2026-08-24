import type { Metadata } from "next";
import "../globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Gretel Quintero Angulo",
  description: "Física, escritora, investigadora, profesora y divulgadora científica.",
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
  manifest: `${basePath}/site.webmanifest`,
};

export default function SpanishRootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
