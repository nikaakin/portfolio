import { ThemeContext } from "@/context/ThemeContext";
import { DARK_THEME, LIGHT_THEME, THEME_KEY } from "@/config";
import { useContext } from "react";

export const useHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return {
    toggleTheme,
    theme,
  };
};
