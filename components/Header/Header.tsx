"use client";
import { LIGHT_THEME, routes } from "@/config";
import { useHeader } from "./useHeader";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LightThemeIcon, DarkThemeIcon } from "@/Icons";

export const Header = () => {
  const { theme, toggleTheme, pathname } = useHeader();

  return (
    <div
      className={`z-50 fixed flex justify-center items-center top-5 left-1/2 -translate-x-1/2  w-fit gap-6 md:gap-12 shadow-header rounded-3xl py-1 md:py-2 px-4 md:px-10
      ${
        theme === LIGHT_THEME
          ? "shadow-slate-300 bg-zinc-50"
          : "shadow-black bg-main-forefront"
      }
      `}
    >
      <div className="flex gap-3 md:gap-6">
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
      <div className="flex items-center">
        <button
          onClick={toggleTheme}
          className="outline-none rounded-full active:rotate-90 rotate-0 transition-all duration-300"
        >
          {theme === LIGHT_THEME ? <LightThemeIcon /> : <DarkThemeIcon />}
        </button>
      </div>
    </div>
  );
};

export const DynamicHeader = dynamic(
  () => import("./Header").then((mod) => mod.Header),
  {
    ssr: false,
  }
);
