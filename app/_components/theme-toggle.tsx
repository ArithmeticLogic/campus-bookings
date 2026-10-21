"use client";

import { useEffect, useState } from "react";

// Union type, | means or
type Theme = "default" | "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("default");

  useEffect(() => {
    const savedTheme = localStorage.theme as Theme | null;
    // ??, returns the right hand if the left hand is null or undefined
    const currentTheme = savedTheme ?? "default";

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(currentTheme);
    // eslint-disable-next-line react-hooks/immutability
    applyTheme(currentTheme);
  }, []);

  function applyTheme(theme: Theme) {
    const isDark =
      theme === "default"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : theme === "dark";

    document.documentElement.classList.toggle("dark", isDark);
  }

  function toggleTheme(theme: Theme) {
    setTheme(theme);
    applyTheme(theme);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    theme === "default"
      ? localStorage.removeItem("theme")
      : localStorage.setItem("theme", theme);
  }

  return (
    <div className="inline-flex gap-0.75 rounded-lg bg-violet-100 dark:bg-violet-800 p-0.5">
      <button
        onClick={() => toggleTheme("default")}
        aria-label="Use system default theme"
        aria-pressed={theme === "default"}
        className={`px-3 py-2 rounded-lg transition-colors duration-300
          ${
            theme === "default"
              ? "bg-violet-700 shadow-sm"
              : "bg-transparent hover:bg-violet-200 dark:text-violet-200 dark:hover:bg-violet-700"
          }`}
      >
        Default
      </button>

      <button
        onClick={() => toggleTheme("light")}
        aria-label="Use light mode"
        aria-pressed={theme === "light"}
        className={`px-3 py-2 rounded-lg transition-colors duration-300 
          ${
            theme === "light"
              ? "bg-violet-700 shadow-sm"
              : "bg-transparent hover:bg-violet-200 dark:text-violet-200 dark:hover:bg-violet-700"
          }`}
      >
        Light
      </button>

      <button
        onClick={() => toggleTheme("dark")}
        aria-label="Use dark mode"
        aria-pressed={theme === "dark"}
        className={`px-3 py-2 rounded-lg transition-colors duration-300
          ${
            theme === "dark"
              ? "bg-violet-700 shadow-sm"
              : "bg-transparent hover:bg-violet-200 dark:text-violet-200 dark:hover:bg-violet-700"
          }`}
      >
        Dark
      </button>
    </div>
  );
}
