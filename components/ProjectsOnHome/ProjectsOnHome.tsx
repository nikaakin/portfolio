import { projects } from "@/config";
import { ProjectCard } from "@/components";

export const ProjectsOnHome = ({ theme }: { theme: string }) => {
  return (
    <div className="flex flex-wrap mt-10">
      {projects(theme).map((project) => (
        <ProjectCard project={project} key={project.name} theme={theme} />
      ))}
    </div>
  );
};
