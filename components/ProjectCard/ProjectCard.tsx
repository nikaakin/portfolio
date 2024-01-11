import { GithubIcon, LinkIcon } from "@/Icons";
import { LIGHT_THEME } from "@/config";
import { ProjectType } from "@/types";
import { useRouter } from "next/navigation";
import { Fragment } from "react";

type ProjectCardProps = { project: ProjectType; theme: string };

export const ProjectCard = ({ project, theme }: ProjectCardProps) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/projects/" + project.route)}
      className={`flex flex-col h-full w-80 overflow-hidden shadow-header rounded-lg md:rounded-3xl px-2 py-3 md:px-4 md:py-6 transition-shadow
    ${
      theme === LIGHT_THEME
        ? "hover:shadow-slate-300 bg-slate-100 bg-opacity-70"
        : "hover:shadow-black bg-black bg-opacity-10"
    }`}
    >
      <div className="flex flex-row gap-2 md:gap-3 mb-2 md:mb-4">
        {project.tags.map((tag) => tag.imgUrl)}
      </div>

      <h1 className="font-semibold ms:text-lg text-base capitalize mb-2 md:mb-3">
        {project.name}
      </h1>

      <p className="line-clamp-3 mb-3 md:mb-6 font-light text-left">
        {project.description}
      </p>

      <div className="flex w-full">
        <a
          onClick={(e) => e.stopPropagation()}
          target="_blank"
          href={project.githubUrl}
          className="flex flex-1 items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
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
    </button>
  );
};
