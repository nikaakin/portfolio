import { DARK_THEME, LIGHT_THEME, THEME_KEY } from "@/config";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useHeader = () => {
  const queryClient = useQueryClient();

  const { data: theme } = useQuery({
    queryKey: [THEME_KEY],
    queryFn: getTheme,
  });

  function toggleTheme() {
    const currentTheme = theme || LIGHT_THEME;

    if (currentTheme === DARK_THEME) {
      localStorage.setItem(THEME_KEY, LIGHT_THEME);
      queryClient.setQueryData([THEME_KEY], LIGHT_THEME);
    } else {
      localStorage.setItem(THEME_KEY, DARK_THEME);
    }
  }

  function getTheme() {
    const theme = localStorage.getItem(THEME_KEY);
    if (theme === DARK_THEME) {
      return LIGHT_THEME;
    } else {
      return DARK_THEME;
    }
  }

  return {
    toggleTheme,
    theme,
  };
};
