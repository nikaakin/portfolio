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
      <div className="md:mb-16 mb-8">
        <Introduction theme={theme} />
        <PersonalLinks theme={theme} />
      </div>
      <ProjectsOnHome theme={theme} />
    </main>
  );
}
