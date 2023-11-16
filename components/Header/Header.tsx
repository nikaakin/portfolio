import { LIGHT_THEME } from "@/config";
import { useHeader } from "./useHeader";
import Image from "next/image";

export const Header = () => {
  const { theme, toggleTheme } = useHeader();
  return (
    <div>
      <button onClick={toggleTheme}>
        <Image
          src={theme === LIGHT_THEME ? "/light_theme.png" : "/dark_theme.png"}
          alt="theme icon"
          width={32}
          height={32}
        />
      </button>
    </div>
  );
};
