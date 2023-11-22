"use client";
import { LIGHT_THEME } from "@/config";
import { ThemeContext } from "@/context";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useContext } from "react";

export const Introduction = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="mb-3 md:mb-5">
      <div className="mb-6 md:mb-8">
        <Image alt="avatar" src="/avatar.png" width={64} height={64} />
      </div>
      <div className="flex gap-8 md:gap-16 md:flex-row flex-col">
        <div className="basis-9/12">
          <h2 className="text-3xl font-bold md:mb-6 mb-4">
            Full-stack web and mobile app developer.
          </h2>
          <p className="md:mb-4 mb-2 font-light md:text-lg">
            I am a full-stack developer with expertise in React.js and Laravel.
            I have experience in building scalable web applications using
            various frameworks and technologies.
          </p>
          <p className="font-light md:text-lg">
            I enjoy solving complex problems and learning new skills. I am
            passionate about creating high-quality code that follows best
            practices and industry standards. I am always looking for new
            challenges and opportunities to grow as a developer.
          </p>
        </div>
        <div className="">
          {theme === LIGHT_THEME ? (
            <Image
              src="/keyboard_light.jpg"
              alt="keyboard"
              width={640}
              height={640}
              className="w-full rounded-lg h-auto rotate-3"
            />
          ) : (
            <Image
              src="/keyboard_dark.jpg"
              alt="keyboard"
              width={640}
              height={640}
              className="w-full rounded-lg h-auto rotate-3"
            />
          )}
        </div>
      </div>
      <div>
        <a href="">black link</a>
      </div>
    </div>
  );
};

export const DynamicIntroduction = dynamic(
  import("./Introduction").then((mod) => mod.Introduction),
  { ssr: false }
);
