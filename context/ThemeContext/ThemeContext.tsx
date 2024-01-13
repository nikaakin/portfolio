"use client";
import { DARK_THEME, LIGHT_THEME, THEME_KEY } from "@/config";
import { FC, PropsWithChildren, createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: DARK_THEME,
  toggleTheme: () => {},
});

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem(THEME_KEY) || (DARK_THEME as string)
      : DARK_THEME
  );

  const toggleTheme = () => {
    const newTheme = theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
