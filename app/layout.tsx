import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { WhatsAppButton } from "@/components/Blocks";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Nixora — Smart Home & IoT Solutions in Nigeria`,
    template: "%s — Nixora",
  },
  description: site.description,
  keywords: [
    "smart home Nigeria",
    "smart home Owerri",
    "smart home automation Nigeria",
    "IoT company Nigeria",
    "IoT solutions Nigeria",
    "home automation Nigeria",
    "smart security Nigeria",
    "energy monitoring Nigeria",
    "smart building Nigeria",
    "smart office Nigeria",
    "smart home installation",
  ],
  openGraph: {
    type: "website",
    siteName: "Nixora",
    title: "Nixora — Intelligent Living. Connected Spaces. Smarter Future.",
    description: site.description,
    locale: "en_NG",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Nixora",
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: "Owerri", addressCountry: "NG" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
