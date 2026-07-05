import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bußmann Sassenberg – Meisterbetrieb für Haus- & Energietechnik",
    template: "%s | Bußmann Sassenberg",
  },
  description:
    "Ihr moderner Meisterbetrieb aus Sassenberg: Hausgeräte, Elektro, Heizung, Sanitär, Photovoltaik, Smart Home und E-Mobilität – alles aus einer Hand.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={manrope.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
