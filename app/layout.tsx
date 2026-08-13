import type { Metadata } from "next";
import "./globals.css";

const requestedBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const basePath = requestedBasePath === "/" ? "" : requestedBasePath;

export const metadata: Metadata = {
  title: "Gretel Quintero — Escritora y Editora",
  description:
    "Portfolio de Gretel Quintero: escritora, física y futura editora freelance. Ciencia, narrativa y edición con mirada propia.",
  keywords: [
    "Gretel Quintero",
    "editora freelance",
    "escritora",
    "edición científica",
    "divulgación científica",
  ],
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
    shortcut: `${basePath}/favicon.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
