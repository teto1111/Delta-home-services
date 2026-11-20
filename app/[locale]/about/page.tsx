import type { Metadata } from "next";
import { dicts, type Locale } from "@/lib/i18n";
export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata { return { title: dicts[params.locale].about.title }; }
export default function About({ params }: { params: { locale: Locale } }) {
  const a = dicts[params.locale].about;
  return <div className="wrap max-w-3xl pt-14"><h1 className="text-4xl font-bold sm:text-5xl">{a.title}</h1><p className="mt-5 text-lg text-navy/75">{a.intro}</p>
    <h2 className="mt-10 text-2xl font-bold">{a.missionTitle}</h2><p className="mt-2 text-navy/75">{a.mission}</p>
    <h2 className="mt-10 text-2xl font-bold">{a.valuesTitle}</h2><ul className="mt-3 space-y-2">{a.values.map((v) => <li key={v} className="card !p-4">{v}</li>)}</ul>
    <h2 className="mt-10 text-2xl font-bold">{a.approachTitle}</h2><p className="mt-2 text-navy/75">{a.approach}</p></div>;
}
