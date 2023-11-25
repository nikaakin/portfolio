import { GithubIcon, LinkIcon } from "@/Icons";
import { LIGHT_THEME } from "@/config";
import { ProjectType } from "@/types";

type ProjectCardProps = { project: ProjectType; theme: string };

export const ProjectCard = ({ project, theme }: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col w-80 overflow-hidden shadow-header rounded-3xl px-2 py-3 md:px-4 md:py-6 transition-shadow
    ${theme === LIGHT_THEME ? "hover:shadow-slate-300" : "hover:shadow-black"}`}
    >
      <div className="flex flex-row gap-2 md:gap-3 mb-2 md:mb-4">
        {project.tags.map((tag) => tag.imgUrl)}
      </div>

      <h1 className="font-semibold ms:text-lg text-base capitalize mb-2 md:mb-3">
        {project.name}
      </h1>

      <p className="line-clamp-3 mb-3 md:mb-6 font-light">
        {project.description}
      </p>

      <div className="flex justify-between">
        <a
          href={project.websiteUrl}
          className="flex items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
        >
          <LinkIcon theme={theme} />
          <span
            className={`text-sm  ${
              theme === LIGHT_THEME ? "text-cyan-700" : "text-cyan-400"
            }`}
          >
            View project
          </span>
        </a>

        <a
          href={project.websiteUrl}
          className="flex mx-2 md:mx-3 items-center gap-3 opacity-70 hover:opacity-100 transition-opacity"
        >
          <GithubIcon
            theme={theme}
            light="#009d8f"
            dark="#2fad8f"
            width="24"
            height="24"
          />
          <span
            className={`text-sm  ${
              theme === LIGHT_THEME ? "text-teal-800" : "text-teal-600"
            }`}
          >
            View source
          </span>
        </a>
      </div>
    </div>
  );
};
