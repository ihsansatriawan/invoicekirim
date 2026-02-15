import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvoiceKirim - Bikin Invoice Profesional dalam 30 Detik",
  description: "Nggak perlu Excel, nggak perlu template ribet. Platform invoice untuk freelancer dan UMKM Indonesia. Gratis untuk memulai!",
  keywords: ["invoice", "freelancer", "UMKM", "Indonesia", "gratis", "invoice generator"],
  authors: [{ name: "InvoiceKirim" }],
  openGraph: {
    title: "InvoiceKirim - Invoice Profesional untuk Freelancer Indonesia",
    description: "Bikin dan kirim invoice dalam hitungan detik. Tanpa ribet, tanpa setup rumit.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
