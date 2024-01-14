"use client";
import { GithubIcon, LinkIcon } from "@/Icons";
import { Slider } from "@/components";
import { LIGHT_THEME, projects } from "@/config";
import { ThemeContext } from "@/context";
import { ProjectType } from "@/types";
import { Fragment, useContext } from "react";

export default function ProjectPage({
  params,
}: {
  params: { project: string };
}) {
  const { theme } = useContext(ThemeContext);
  const project = projects(theme).find(
    ({ route }) => route === params.project
  ) as ProjectType;

  return (
    <div>
      <div>
        <Slider images={project.images} />
      </div>

      <div className="flex justify-center items-center flex-col mt-5">
        <h1 className="text-xl font-bold mb-4 md:mb-6 uppercase">
          {project.name}
        </h1>
        <section className="flex flex-wrap justify-center gap-14 mb-16">
          {project.tags.map(({ imgUrl, name }) => (
            <div className="relative" key={`project-view-${name}`}>
              {imgUrl}
              <span className="absolute bottom-0 left-1/2 translate-y-full -translate-x-1/2 text-sm text-center">
                {name}
              </span>
            </div>
          ))}
        </section>
        <h2 className="text-xl text-slate-400 uppercase text-center pb-4 tracking-widest">
          Description
        </h2>
        <p className="mb-4 md:mb-8 text-gray-500">{project.description}</p>

        <div className="flex w-full justify-end gap-6 mb-10">
          <a
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            href={project.githubUrl}
            className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
          >
            {project.githubUrl && (
              <Fragment>
                <GithubIcon
                  theme={theme}
                  light="#0aad8f"
                  dark="#009d8f"
                  width="24"
                  height="24"
                />
                <span
                  className={`text-sm  ${
                    theme === LIGHT_THEME ? "text-teal-700" : "text-teal-500"
                  }`}
                >
                  View Source
                </span>
              </Fragment>
            )}
          </a>

          <a
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            href={project.websiteUrl}
            className="flex mr-2 md:mr-3 items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
          >
            {project.websiteUrl && (
              <Fragment>
                <LinkIcon theme={theme} />
                <span
                  className={`text-sm  ${
                    theme === LIGHT_THEME ? "text-sky-700" : "text-cyan-600"
                  }`}
                >
                  View Project
                </span>
              </Fragment>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
