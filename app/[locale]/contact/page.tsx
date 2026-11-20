import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { site } from "@/config/site";
import { dicts, type Locale } from "@/lib/i18n";
import WhatsAppButton from "@/components/WhatsAppButton";
export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata { return { title: dicts[params.locale].contact.title }; }
export default function Contact({ params }: { params: { locale: Locale } }) {
  const l = params.locale; const c = dicts[l].contact; const d = dicts[l];
  const Row = ({ icon: I, label, children }: { icon: typeof Phone; label: string; children: React.ReactNode }) =>
    <div className="card flex gap-4"><I className="shrink-0 text-accent" aria-hidden /><div><p className="text-sm font-semibold text-navy/60">{label}</p><div className="mt-1 font-medium">{children}</div></div></div>;
  return <div className="wrap max-w-3xl pt-14"><h1 className="text-4xl font-bold sm:text-5xl">{c.title}</h1><p className="mt-3 text-navy/70">{c.text}</p>
    <div className="mt-6"><WhatsAppButton locale={l} label={d.cta.whatsapp} /></div>
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      <Row icon={Phone} label={c.phone}>{site.phone ? <a className="text-accent" dir="ltr" href={`tel:${site.phone}`}>{site.phone}</a> : c.notSet}</Row>
      <Row icon={Mail} label={c.email}>{site.email ? <a className="text-accent" href={`mailto:${site.email}`}>{site.email}</a> : c.notSet}</Row>
      <Row icon={Clock} label={c.hours}>{site.hours[l]}</Row>
      <Row icon={MapPin} label={c.areas}>{site.areas[l].join(l === "ar" ? "، " : ", ")}</Row>
    </div><p className="mt-6 text-sm text-navy/60">{c.note}</p></div>;
}
