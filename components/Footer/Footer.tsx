import { LIGHT_THEME, routes } from "@/config";
import { ThemePropType } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Footer = ({ theme }: ThemePropType) => {
  const pathname = usePathname();
  return (
    <div
      className={`border-t-4 w-full  md:pt-10 pt-5 ${
        theme === LIGHT_THEME ? "border-zinc-200" : "border-zinc-600"
      }`}
    >
      <div className="flex gap-3 ">
        {routes.map((route) => (
          <Link
            href={route}
            key={route}
            className={`capitalize hover:text-cyan-700 transition-colors ${
              pathname === route && "text-cyan-700"
            }`}
          >
            {route === "/" ? "home" : route.slice(1)}
          </Link>
        ))}
      </div>
    </div>
  );
};
