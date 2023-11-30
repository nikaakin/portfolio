"use client";
import { DynamicHeader, Footer } from "@/components";
import { LIGHT_THEME } from "@/config";
import { ThemeContext } from "@/context";
import dynamic from "next/dynamic";
import { useContext } from "react";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={` font-heebo
      ${
        theme === LIGHT_THEME
          ? "bg-zinc-100 text-black"
          : "bg-main-background text-white"
      }`}
    >
      <div
        className={`flex flex-col text-sm md:text-base w-full md:w-3/4 mx-auto min-h-screen px-6 md:px-20 pt-20 md:pt-28 pb-10 md:pb-20 md:py-24  ${
          theme === LIGHT_THEME ? "bg-zinc-50" : "bg-main-forefront"
        }`}
      >
        <DynamicHeader />
        <div className="flex-1">{children}</div>
        <div className="justify-self-end">
          <Footer theme={theme} />
        </div>
      </div>
    </div>
  );
};

export const DynamicWrapper = dynamic(
  () => import("./wrapper").then((mod) => mod.Wrapper),
  {
    ssr: false,
  }
);
