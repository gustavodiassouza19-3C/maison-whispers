import type { Metadata } from "next";
import { Karla, Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maison Arcane — leituras de Tarot online e personalizadas",
  description:
    "Entre, sente-se: as cartas já estão sobre a mesa. Leituras de Tarot personalizadas, intuitivas e reservadas, enviadas pelo chat do Instagram.",
  openGraph: {
    title: "Maison Arcane — leituras de Tarot online",
    description:
      "Leituras de Tarot feitas de forma personalizada, intuitiva e reservada. Escolha sua leitura na Maison Arcane.",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${karla.variable} ${cormorant.variable} ${pinyon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
