// SINGLE SOURCE OF TRUTH for business details. Empty values disable the related buttons/links.
export const site = {
  name: { en: "Delta Home Services", ar: "دلتا لخدمات المنازل" },
  url: "https://delta-home-services.vercel.app", // replace with your real domain
  phone: "",     // e.g. "+20XXXXXXXXXX"
  whatsapp: "",  // international format, digits only e.g. "20XXXXXXXXXX"
  email: "",
  address: { en: "", ar: "" },
  hours: { en: "Sat–Thu, 9:00 AM – 6:00 PM (demo)", ar: "السبت–الخميس، ٩ ص – ٦ م (تجريبي)" },
  areas: {
    en: ["Cairo", "Giza", "New Cairo", "6th of October"],
    ar: ["القاهرة", "الجيزة", "القاهرة الجديدة", "السادس من أكتوبر"],
  },
  social: { facebook: "", instagram: "" },
};
