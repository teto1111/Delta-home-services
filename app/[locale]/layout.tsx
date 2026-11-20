import "../globals.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Cairo } from "next/font/google";
import { site } from "@/config/site";
import { dicts, isLocale, locales } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-en", display: "swap" });
const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-ar", display: "swap" });
export const generateStaticParams = () => locales.map((locale) => ({ locale }));
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const l = params.locale; const d = dicts[l];
  return {
    metadataBase: new URL(site.url),
    title: { default: site.name[l], template: `%s | ${site.name[l]}` },
    description: d.meta.description,
    alternates: { languages: { en: "/en", ar: "/ar" } },
    openGraph: { title: site.name[l], description: d.meta.description, locale: l === "ar" ? "ar_EG" : "en_US", type: "website" },
  };
}
export default function Layout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const l = params.locale;
  // LocalBusiness data uses only values configured in src/config/site.ts
  const ld = { "@context": "https://schema.org", "@type": "HomeAndConstructionBusiness", name: site.name[l], url: site.url,
    ...(site.phone && { telephone: site.phone }), ...(site.email && { email: site.email }),
    areaServed: site.areas[l] };
  return (
    <html lang={l} dir={dicts[l].dir} className={`${inter.variable} ${cairo.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        <Header locale={l} />
        <main id="main">{children}</main>
        <Footer locale={l} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      </body>
    </html>
  );
}
