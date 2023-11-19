"use client";
import { LIGHT_THEME } from "@/config";
import { useHeader } from "./useHeader";
import Image from "next/image";
import dynamic, { Loader, LoaderComponent } from "next/dynamic";
import { ComponentType, PropsWithChildren } from "react";

export const Header = () => {
  // make this as floating header
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

export const DynamicHeader = dynamic(
  () => import("./Header").then((mod) => mod.Header as ComponentType),
  {
    ssr: false,
  }
) as ComponentType;
