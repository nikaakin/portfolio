import { ThemeContext } from "@/context";
import { useParams, usePathname } from "next/navigation";
import { useContext } from "react";

export const useHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const pathname = usePathname();

  return {
    toggleTheme,
    theme,
    pathname,
  };
};
