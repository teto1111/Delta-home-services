import { MessageCircle } from "lucide-react";
import { site } from "@/config/site";
import { dicts, waUrl, type Locale } from "@/lib/i18n";
export default function WhatsAppButton({ locale, label, variant = "primary" }: { locale: Locale; label?: string; variant?: "primary" | "ghost" }) {
  const d = dicts[locale];
  const href = waUrl(site.whatsapp, d.waMessage);
  const cls = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"}`;
  const text = label ?? d.cta.quote;
  if (!href) return (
    <button type="button" disabled title={d.cta.disabled} aria-label={`${text} (${d.cta.disabled})`} className={cls}>
      <MessageCircle size={18} aria-hidden /> {text}
    </button>
  );
  return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}><MessageCircle size={18} aria-hidden /> {text}</a>;
}
