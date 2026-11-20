import type { Config } from "tailwindcss";
const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;
export default {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: { extend: { colors: { navy: c("navy"), accent: c("accent"), paper: c("paper") } } },
  plugins: [],
} satisfies Config;
