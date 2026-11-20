import en from "@/content/en";
import ar from "@/content/ar";
export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];
export type Dict = typeof en;
export const dicts: Record<Locale, Dict> = { en, ar };
export const isLocale = (l: string): l is Locale => (locales as readonly string[]).includes(l);
export const waUrl = (num: string, msg: string) =>
  num ? `https://wa.me/${num.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}` : "";
