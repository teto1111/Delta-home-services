import type { Metadata } from "next";
import { dicts, type Locale } from "@/lib/i18n";
import ServiceCard from "@/components/ServiceCard";
export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata { return { title: dicts[params.locale].servicesTitle }; }
export default function Services({ params }: { params: { locale: Locale } }) {
  const l = params.locale; const d = dicts[l];
  return <div className="wrap pt-14"><h1 className="text-4xl font-bold sm:text-5xl">{d.servicesTitle}</h1><p className="mt-3 text-navy/70">{d.servicesIntro}</p>
    <div className="mt-10 grid gap-6 md:grid-cols-2">{d.services.map((s) => <ServiceCard key={s.id} s={s} locale={l} detailed />)}</div></div>;
}
