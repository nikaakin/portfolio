"use client";
import { DARK_THEME, LIGHT_THEME, THEME_KEY } from "@/config";
import { FC, PropsWithChildren, createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: LIGHT_THEME,
  toggleTheme: () => {},
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? (localStorage.getItem(THEME_KEY) as string)
      : LIGHT_THEME
  );

  const toggleTheme = () => {
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
    localStorage.setItem(THEME_KEY, theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
