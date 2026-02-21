import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

const title = "Natus — Система управления отелем";
const description = "Natus — профессиональная система управления отелем. Номера, проживания, финансы, аналитика и роли сотрудников в одном интерфейсе.";
const url = "https://natus.uz";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "система управления отелем",
    "hotel management system",
    "Hotel PMS",
    "управление номерами",
    "hotel software",
    "Natus",
    "отель ERP",
    "бронирование отеля",
    "аналитика отеля",
    "управление персоналом отеля",
  ],
  authors: [{ name: "Natus", url }],
  creator: "Natus",
  metadataBase: new URL(url),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: "Natus",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@sqd_dev",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Natus",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              url,
              description,
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              author: { "@type": "Organization", name: "Natus", url },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
