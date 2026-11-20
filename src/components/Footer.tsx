import Link from "next/link";
import { site } from "@/config/site";
import { dicts, type Locale } from "@/lib/i18n";
export default function Footer({ locale }: { locale: Locale }) {
  const d = dicts[locale];
  return (
    <footer className="mt-24 bg-navy text-white">
      <div className="wrap grid gap-8 py-12 sm:grid-cols-2">
        <div><p className="text-lg font-bold">{site.name[locale]}</p><p className="mt-2 max-w-sm text-sm text-white/70">{d.meta.description}</p></div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm sm:justify-end">
          {[["", d.nav.home], ["/services", d.nav.services], ["/about", d.nav.about], ["/contact", d.nav.contact]].map(([h, l]) => <Link key={h} href={`/${locale}${h}`} className="hover:text-accent">{l}</Link>)}
        </nav>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">© {new Date().getFullYear()} {site.name[locale]}. {d.rights} {d.demo}</div>
    </footer>
  );
}
