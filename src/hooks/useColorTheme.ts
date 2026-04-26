import { useEffect, useState } from "react";

export type ColorThemeId = "cyan" | "mint" | "orange" | "purple";

export interface ColorTheme {
  id: ColorThemeId;
  label: string;
  hex: string;
  vars: Record<string, string>;
}

export const COLOR_THEMES: ColorTheme[] = [
  {
    id: "cyan",
    label: "Cyan",
    hex: "#09d0f9",
    vars: {
      "--primary": "190 95% 50%",
      "--primary-foreground": "215 40% 8%",
      "--primary-glow": "180 100% 65%",
      "--accent": "190 95% 50%",
      "--accent-foreground": "215 40% 8%",
      "--ring": "190 95% 50%",
      "--sidebar-primary": "190 95% 50%",
      "--sidebar-primary-foreground": "215 40% 8%",
      "--sidebar-ring": "190 95% 50%",
      "--gradient-primary": "linear-gradient(135deg, hsl(190 95% 50%), hsl(220 90% 60%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(190 95% 50% / 0.18), transparent 60%)",
      "--shadow-glow": "0 0 80px hsl(190 95% 50% / 0.35)",
    },
  },
  {
    id: "mint",
    label: "Mint",
    hex: "#58f6b3",
    vars: {
      "--primary": "155 88% 65%",
      "--primary-foreground": "155 60% 8%",
      "--primary-glow": "155 95% 75%",
      "--accent": "155 88% 65%",
      "--accent-foreground": "155 60% 8%",
      "--ring": "155 88% 65%",
      "--sidebar-primary": "155 88% 65%",
      "--sidebar-primary-foreground": "155 60% 8%",
      "--sidebar-ring": "155 88% 65%",
      "--gradient-primary": "linear-gradient(135deg, hsl(155 88% 65%), hsl(175 80% 48%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(155 88% 65% / 0.15), transparent 60%)",
      "--shadow-glow": "0 0 80px hsl(155 88% 65% / 0.35)",
    },
  },
  {
    id: "orange",
    label: "Naranja",
    hex: "#fe6a07",
    vars: {
      "--primary": "24 99% 51%",
      "--primary-foreground": "24 80% 8%",
      "--primary-glow": "30 100% 65%",
      "--accent": "24 99% 51%",
      "--accent-foreground": "24 80% 8%",
      "--ring": "24 99% 51%",
      "--sidebar-primary": "24 99% 51%",
      "--sidebar-primary-foreground": "24 80% 8%",
      "--sidebar-ring": "24 99% 51%",
      "--gradient-primary": "linear-gradient(135deg, hsl(24 99% 51%), hsl(38 96% 56%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(24 99% 51% / 0.18), transparent 60%)",
      "--shadow-glow": "0 0 80px hsl(24 99% 51% / 0.35)",
    },
  },
  {
    id: "purple",
    label: "Violeta",
    hex: "#714285",
    vars: {
      "--primary": "282 36% 57%",
      "--primary-foreground": "200 20% 96%",
      "--primary-glow": "282 50% 72%",
      "--accent": "282 36% 57%",
      "--accent-foreground": "200 20% 96%",
      "--ring": "282 36% 57%",
      "--sidebar-primary": "282 36% 57%",
      "--sidebar-primary-foreground": "200 20% 96%",
      "--sidebar-ring": "282 36% 57%",
      "--gradient-primary": "linear-gradient(135deg, hsl(282 36% 57%), hsl(300 42% 62%))",
      "--gradient-radial": "radial-gradient(circle at 50% 0%, hsl(282 36% 57% / 0.18), transparent 60%)",
      "--shadow-glow": "0 0 80px hsl(282 36% 57% / 0.35)",
    },
  },
];

const STORAGE_KEY = "ga-color-theme";

function applyTheme(id: ColorThemeId) {
  const theme = COLOR_THEMES.find((t) => t.id === id);
  if (!theme) return;
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export function useColorTheme() {
  const [colorTheme, setColorThemeState] = useState<ColorThemeId>(
    () => (localStorage.getItem(STORAGE_KEY) as ColorThemeId) ?? "cyan"
  );

  useEffect(() => {
    applyTheme(colorTheme);
  }, [colorTheme]);

  const setColorTheme = (id: ColorThemeId) => {
    setColorThemeState(id);
    localStorage.setItem(STORAGE_KEY, id);
  };

  return { colorTheme, setColorTheme, themes: COLOR_THEMES };
}
