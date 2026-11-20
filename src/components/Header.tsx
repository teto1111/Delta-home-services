"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/config/site";
import { dicts, type Locale } from "@/lib/i18n";
export default function Header({ locale }: { locale: Locale }) {
  const d = dicts[locale]; const path = usePathname() || `/${locale}`; const [open, setOpen] = useState(false);
  const other: Locale = locale === "en" ? "ar" : "en";
  const switchHref = path.replace(/^\/(en|ar)/, `/${other}`);
  const links = [["", d.nav.home], ["/services", d.nav.services], ["/about", d.nav.about], ["/contact", d.nav.contact]];
  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-paper/95 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-bold">
          <span aria-hidden className="grid h-9 w-9 place-items-center rounded-xl bg-navy text-lg text-white">Δ</span>
          <span>{site.name[locale]}</span>
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map(([h, l]) => <Link key={h} href={`/${locale}${h}`} className="hover:text-accent">{l}</Link>)}
          <Link href={switchHref} hrefLang={other} className="rounded-lg border border-navy/20 px-3 py-1.5 hover:bg-navy hover:text-white">{d.cta.lang}</Link>
          <Link href={`/${locale}/contact`} className="btn btn-primary !py-2">{d.cta.quote}</Link>
        </nav>
        <button className="md:hidden" aria-expanded={open} aria-label={d.cta.menu} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="wrap flex flex-col gap-1 pb-5 md:hidden">
          {links.map(([h, l]) => <Link key={h} href={`/${locale}${h}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium hover:bg-navy/5">{l}</Link>)}
          <Link href={switchHref} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 font-medium text-accent">{d.cta.lang}</Link>
          <Link href={`/${locale}/contact`} onClick={() => setOpen(false)} className="btn btn-primary mt-2">{d.cta.quote}</Link>
        </nav>
      )}
    </header>
  );
}
