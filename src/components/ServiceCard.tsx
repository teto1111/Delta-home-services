import { Check } from "lucide-react";
import { serviceIcons } from "./icons";
import WhatsAppButton from "./WhatsAppButton";
import type { Dict, Locale } from "@/lib/i18n";
export default function ServiceCard({ s, locale, detailed }: { s: Dict["services"][number]; locale: Locale; detailed?: boolean }) {
  const Icon = serviceIcons[s.id];
  return (
    <article id={s.id} className="card scroll-mt-24">
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent"><Icon aria-hidden /></span>
      <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
      <p className="mt-2 text-navy/70">{s.desc}</p>
      {detailed && (<>
        <ul className="mt-4 space-y-2 text-sm">{s.benefits.map((b) => <li key={b} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />{b}</li>)}</ul>
        <p className="mt-4 rounded-lg bg-navy/5 p-3 text-sm">{s.info}</p>
        <div className="mt-5"><WhatsAppButton locale={locale} /></div>
      </>)}
    </article>
  );
}
