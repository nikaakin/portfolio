"use client";
import { Footer, Header } from "@/components";
import { ThemeContext } from "@/context";
import { useContext } from "react";

export default function AboutPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Header />
      <div>About</div>
      <Footer theme={theme} />
    </div>
  );
}
