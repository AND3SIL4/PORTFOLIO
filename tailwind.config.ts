import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

import coloradix, { slate, orange, blue, green } from "@coloradix/tailwindcss";

const radix = coloradix({
  slate,
  orange,
  blue,
  green,
})
  .alias({
    neutral: "slate",
    primary: "orange",
    secondary: "blue",
    tertiary: "green",
  })
  .build();

export default {
  content: ["./src/**/*.{ts,tsx,astro}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...radix.colors,
    },
    extend: {
      fontFamily: {
        sans: ["Inter"].concat(defaultTheme.fontFamily.sans),
        mono: ["Roboto Mono"].concat(defaultTheme.fontFamily.mono),
      },
      backgroundImage: {
        codicon: "/img/asiste_project.webp",
        senasoft: "/img/pandemission_project.webp",
      },
    },
  },
  plugins: [radix.plugin],
} satisfies Config;
