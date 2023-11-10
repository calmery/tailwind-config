import type { OptionalConfig } from "tailwindcss/types/config";

const config: Partial<OptionalConfig> = {
  theme: {
    colors: {
      gradient: {
        blue: "#55ACEE",
        pink: "#EA596E",
      },
      primary: "#202020",
      secondary: "#606060",
      tertiary: "#A0A0A0",
      transparent: "transparent",
    },
    fontSize: {
      12: "0.75rem",
      16: "1rem",
      20: "1.25rem",
      32: "2rem",
    },
    spacing: {
      0: "0",
      4: "0.25rem",
      8: "0.5rem",
      16: "1rem",
      24: "1.5rem",
      40: "2.5rem",
      64: "4rem",
    },
  },
};

export = config;
