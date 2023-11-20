"use client";
import { LIGHT_THEME } from "@/config";
import { useHeader } from "./useHeader";
import { ComponentType } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { LightThemeIcon, DarkThemeIcon } from "@/Icons";

export const Header = () => {
  const { theme, toggleTheme } = useHeader();
  console.log("theme", theme);
  return (
    <div className="flex justify-between">
      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/projects">projects</Link>
      </div>
      <div>
        <button onClick={toggleTheme} className="outline-none">
          {theme === LIGHT_THEME ? <LightThemeIcon /> : <DarkThemeIcon />}
        </button>
      </div>
    </div>
  );
};

export const DynamicHeader = dynamic(
  () => import("./Header").then((mod) => mod.Header as ComponentType),
  {
    ssr: false,
  }
);
