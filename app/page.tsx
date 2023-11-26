"use client";
import {
  DynamicHeader,
  Introduction,
  PersonalLinks,
  ProjectsOnHome,
} from "@/components";
import { Past } from "@/components/Past";
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
      <div className="md:mb-16 mb-8">
        <ProjectsOnHome theme={theme} />
      </div>
      <div className="md:mb-16 mb-8">
        <Past theme={theme} />
      </div>
    </main>
  );
}
