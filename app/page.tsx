"use client";
import {
  DynamicHeader,
  Introduction,
  PersonalLinks,
  ProjectsOnHome,
} from "@/components";
import { ThemeContext } from "@/context";
import { useContext } from "react";

export default function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <main>
      <DynamicHeader />
      <Introduction theme={theme} />
      <PersonalLinks theme={theme} />
      <ProjectsOnHome theme={theme} />
    </main>
  );
}
