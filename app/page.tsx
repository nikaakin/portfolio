"use client";
import {
  DynamicHeader,
  Introduction,
  PersonalLinks,
  ProjectsOnHome,
  Past,
  Footer,
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
      <div className="md:mb-16 mb-8">
        <ProjectsOnHome theme={theme} />
      </div>
      <div className="md:mb-16 mb-8">
        <Past theme={theme} />
      </div>
      <Footer theme={theme} />
    </main>
  );
}
