# Delta Home Services: bilingual (EN/AR) Next.js template
Demo content only. All business details are fictional.

## Run
npm install, then `npm run dev` (http://localhost:3000, redirects to /en), `npm run build`, `npm start`. Type-check: `npm run lint`.

## Customise for a new customer
- **Name, phone, WhatsApp, email, hours, areas, social:** `src/config/site.ts` (empty phone/WhatsApp/email disable those buttons).
- **Text, services, FAQ (English / Arabic):** `src/content/en.ts` and `src/content/ar.ts`. Keep both files in the same structure.
- **Service icons:** `src/components/icons.ts` (id to Lucide icon).
- **Colours:** RGB channels in `app/globals.css` (`--navy`, `--accent`, `--paper`).
- **Domain for SEO/sitemap:** `site.url`.

## Deploy
Push to GitHub, import the repo in Vercel, keep defaults (Next.js), deploy. Add your domain in Vercel settings.

## Licensing note (not legal advice)
Non-exclusive template licence: you resell the same base to many clients and keep the code rights. Exclusive handover: one client receives all rights and you may not reuse the code. Agree it in writing and consult a lawyer.
