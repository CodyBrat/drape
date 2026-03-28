import type { Metadata } from "next";
import { Instrument_Serif, Barlow, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-heading",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Drape — Built for Indian Brands",
  description: "Start your brand in 5 minutes. We handle everything.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${barlow.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
