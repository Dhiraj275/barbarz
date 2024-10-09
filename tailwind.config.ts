import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#CCA34C",
          light: "#FDF8E9"
        }
      },
      fontFamily: {
        "poppins": "poppins",
        "roboto": "roboto",
        "prata": "Prata"
      }
    },
  },
  plugins: [],
};
export default config;
