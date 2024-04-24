"use client";
import Image from "next/image";
import { GithubIcon, LeetcodeIcon, LinkedinIcon, EmailIcon } from "@/Icons";
import { ThemeContext } from "@/context";
import { useContext } from "react";

export default function AboutPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className="flex gap-10  flex-col items-center justify-between">
      <div>
        <h1 className="font-bold md:text-4xl text-xl md:mb-6 mb-3 ">
          I&apos;m Nika Cuckiridze, I live in Georgia
        </h1>

        <p className="leading-loose">
          I&apos;ve worked on a variety of projects over the years and I&apos;m
          proud of the progress I&apos;ve made. If you&apos;re interested in any
          of the projects I&apos;ve worked on, please feel free to check out the
          code and suggest any improvements or enhancements you might have in
          mind by leaving an issue or mailing me through
          <span className="underline"> nikacuckiridze47@gmail.com</span>.
          Collaborating with others is a great way to learn and grow, and
          I&apos;m always open to new ideas and feedback.
        </p>
      </div>
      <div>
        <Image
          src="/about.png"
          alt="about page image"
          width={640}
          height={370}
          className="rounded-lg w-full h-auto"
          priority
        />
      </div>

      <div className="md:mb-7 mb-5">
        <div className="flex gap-3 md:gap-7 items-center">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nika-cuckiridze-387063228/"
            className="opacity-70 hover:opacity-100 transition-opacity flex flex-col items-center"
          >
            <LinkedinIcon theme={theme} />{" "}
            <span className="pt-2">LinkedIn</span>
          </a>
          <a
            target="_blank"
            href="https://github.com/nikaakin"
            className="opacity-70 hover:opacity-100 transition-opacity flex flex-col items-center"
          >
            <GithubIcon theme={theme} /> <span className="pt-2">Github</span>
          </a>

          <a
            target="_blank"
            href="https://leetcode.com/nikakin/"
            className="opacity-70 hover:opacity-100 transition-opacity flex flex-col items-center"
          >
            <LeetcodeIcon theme={theme} />{" "}
            <span className="pt-2">Leetcode</span>
          </a>

          <a
            target="_blank"
            href="mailto:nikacuckiridze47@gmail.com"
            className="opacity-70 hover:opacity-100 transition-opacity flex flex-col items-center"
          >
            <EmailIcon theme={theme} /> <span>Email</span>
          </a>
        </div>
      </div>
    </main>
  );
}
