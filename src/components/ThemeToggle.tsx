import { useEffect, useRef, useState } from "react";
import { useColorTheme } from "@/hooks/useColorTheme";
import { Check } from "lucide-react";

const ThemeToggle = () => {
  const { colorTheme, setColorTheme, themes } = useColorTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = themes.find((t) => t.id === colorTheme);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Cambiar color del tema"
        className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
      >
        <span
          className="w-4 h-4 rounded-full ring-2 ring-white/20"
          style={{ backgroundColor: current?.hex }}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-50 p-3 rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-elegant flex flex-col gap-1 min-w-[170px]">
          <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-2 mb-2">
            Color del tema
          </p>
          {themes.map((t) => {
            const active = colorTheme === t.id;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setColorTheme(t.id);
                  setOpen(false);
                }}
                className={`flex items-center gap-3 px-2 py-2 rounded-xl transition-colors ${
                  active ? "bg-secondary" : "hover:bg-secondary/60"
                }`}
              >
                <span
                  className="w-5 h-5 rounded-full shrink-0 ring-2 transition-all"
                  style={{
                    backgroundColor: t.hex,
                    ringColor: active ? "white" : "transparent",
                    boxShadow: active ? `0 0 0 2px white` : "none",
                  }}
                />
                <span className="text-sm text-foreground">{t.label}</span>
                {active && (
                  <Check className="w-3.5 h-3.5 text-primary ml-auto" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
