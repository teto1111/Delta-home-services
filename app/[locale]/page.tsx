import Link from "next/link";
import { ArrowRight, ArrowLeft, MapPin, ChevronDown } from "lucide-react";
import { site } from "@/config/site";
import { dicts, type Locale } from "@/lib/i18n";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
export default function Home({ params }: { params: { locale: Locale } }) {
  const l = params.locale; const d = dicts[l]; const Arrow = l === "ar" ? ArrowLeft : ArrowRight;
  return (<>
    <section className="bg-navy text-white">
      <div className="wrap grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">{d.hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{d.hero.title}</h1>
          <p className="mt-5 max-w-xl text-lg text-white/75">{d.hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton locale={l} />
            <Link href={`/${l}/services`} className="btn border border-white/30 hover:bg-white hover:text-navy">{d.cta.explore}<Arrow size={16} aria-hidden /></Link>
          </div>
        </div>
        <div aria-hidden className="hidden grid-cols-2 gap-3 lg:col-span-2 lg:grid">
          {d.services.slice(0, 4).map((s, i) => <div key={s.id} className={`rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 ${i % 2 ? "translate-y-6" : ""}`}><p className="font-semibold">{s.title}</p><div className="mt-6 h-1 w-10 rounded bg-accent" /></div>)}
        </div>
      </div>
    </section>
    <section className="wrap mt-20" aria-labelledby="svc">
      <h2 id="svc" className="h2">{d.servicesTitle}</h2><p className="mt-2 text-navy/70">{d.servicesIntro}</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{d.services.map((s) => <Link key={s.id} href={`/${l}/services#${s.id}`}><ServiceCard s={s} locale={l} /></Link>)}</div>
    </section>
    <section className="wrap mt-20"><h2 className="h2">{d.why.title}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">{d.why.items.map((i) => <div key={i.t} className="border-s-4 border-accent ps-5"><h3 className="font-bold">{i.t}</h3><p className="mt-1 text-navy/70">{i.d}</p></div>)}</div></section>
    <section className="wrap mt-20"><h2 className="h2">{d.steps.title}</h2>
      <ol className="mt-8 grid gap-5 md:grid-cols-3">{d.steps.items.map((s, n) => <li key={s.t} className="card"><span className="text-4xl font-bold text-accent">{n + 1}</span><h3 className="mt-2 font-bold">{s.t}</h3><p className="mt-1 text-navy/70">{s.d}</p></li>)}</ol></section>
    <section className="wrap mt-20"><h2 className="h2">{d.areas.title}</h2><p className="mt-2 text-navy/70">{d.areas.text}</p>
      <ul className="mt-6 flex flex-wrap gap-3">{site.areas[l].map((a) => <li key={a} className="flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-2 text-sm"><MapPin size={14} className="text-accent" aria-hidden />{a}</li>)}</ul></section>
    <section className="wrap mt-20 max-w-3xl"><h2 className="h2">{d.faq.title}</h2>
      <div className="mt-6 divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white">{d.faq.items.map((f) => (
        <details key={f.q} className="group p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{f.q}<ChevronDown size={18} className="shrink-0 transition group-open:rotate-180" aria-hidden /></summary><p className="mt-3 text-navy/70">{f.a}</p></details>))}</div></section>
    <section className="wrap mt-20"><div className="rounded-3xl bg-navy p-10 text-center text-white sm:p-14"><h2 className="h2">{d.final.title}</h2><p className="mt-3 text-white/75">{d.final.text}</p><div className="mt-7 flex justify-center"><WhatsAppButton locale={l} /></div></div></section>
  </>);
}
