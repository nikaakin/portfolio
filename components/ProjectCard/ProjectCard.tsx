import { GithubIcon, LinkIcon } from "@/Icons";
import { ProjectType } from "@/types";

type ProjectCardProps = { project: ProjectType; theme: string };

export const ProjectCard = ({ project, theme }: ProjectCardProps) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden">
      <div className="flex flex-row gap-2 md:gap-3">
        {project.tags.map((tag) => tag.imgUrl)}
      </div>

      <h1 className="font-semibold ms:text-lg text-base capitalize">
        {project.name}
      </h1>

      <p>{project.description}</p>

      <div className="flex justify-between">
        <a href={project.websiteUrl}>
          <LinkIcon theme={theme} />
        </a>

        <a href={project.websiteUrl}>
          <GithubIcon theme={theme} />
        </a>
      </div>
    </div>
  );
};
