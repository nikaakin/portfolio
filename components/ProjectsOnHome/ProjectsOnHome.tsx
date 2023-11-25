import { projects } from "@/config";
import { ProjectCard } from "@/components";

export const ProjectsOnHome = ({ theme }: { theme: string }) => {
  return (
    <div className="flex flex-wrap ">
      {projects(theme).map((project) => (
        <ProjectCard
          project={project}
          key={project.name + "project"}
          theme={theme}
        />
      ))}
    </div>
  );
};
