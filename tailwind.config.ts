import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { CSSRuleObject } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(222, 194, 154)",
        },
        dark: {
          DEFAULT: "rgba(29, 42, 40, 0.93)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    plugin(function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, CSSRuleObject>) => void;
    }) {
      addUtilities({
        ".scrollbar-none": {
          "scrollbar-width": "none", // Firefox
          "-ms-overflow-style": "none", // IE 10+
        },
        ".scrollbar-none::-webkit-scrollbar": {
          display: "none", // WebKit browsers
        },
        ".card": {
          "@apply rounded-lg backdrop-blur-md bg-dark": {},
        },
      });
    }),
  ],
} satisfies Config;
