"use client";
import { ThemeContext } from "@/context";
import Image from "next/image";
import { useContext } from "react";

export default function AboutPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="flex md:gap-10 md:flex-row flex-col">
      <div>
        <h1 className="font-bold md:text-4xl text-xl md:mb-6 mb-3 ">
          I&apos;m Nika Cuckiridze I live in Georgia
        </h1>

        <p>
          I&apos;ve worked on a variety of projects over the years and I&apos;m
          proud of the progress I&apos;ve made. Many of these projects are
          open-source and available for others to explore and contribute to. If
          you&apos;re interested in any of the projects I&apos;ve worked on,
          please feel free to check out the code and suggest any improvements or
          enhancements you might might have in mind. Collaborating with others
          is a great way to learn and grow, and I&apos;m always open to new
          ideas and feedback.
        </p>
      </div>
      <div>
        <Image
          src="/about.png"
          alt="about page image"
          width={640}
          height={640}
          className="w-full rounded-lg h-auto rotate-3"
          priority
        />
      </div>
    </main>
  );
}
