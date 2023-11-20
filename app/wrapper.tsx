"use client";
import { LIGHT_THEME } from "@/config";
import { ThemeContext } from "@/context";
import dynamic from "next/dynamic";
import { ComponentType, PropsWithChildren, useContext } from "react";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === LIGHT_THEME
          ? "bg-zinc-100 text-black"
          : "bg-main-background text-white"
      }`}
    >
      <div
        className={`w-300 mx-auto  min-h-screen px-20 py-24 transition-all duration-500 ${
          theme === LIGHT_THEME ? "bg-zinc-50" : "bg-main-forefront"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export const DynamicWrapper = dynamic(
  () =>
    import("./wrapper").then(
      (mod) => mod.Wrapper as ComponentType<PropsWithChildren>
    ),
  {
    ssr: false,
  }
);
