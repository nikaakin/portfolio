"use client";
import { Header, ProjectOverviewCard } from "@/components";
import { projects } from "@/config";
import { ThemeContext } from "@/context";
import { useContext } from "react";

export default function ProjectsPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="mb-20">
      <Header />
      <div className="flex flex-wrap gap-4">
        {projects(theme).map((project) => (
          <ProjectOverviewCard
            project={project}
            key={project.name + "project-page"}
          />
        ))}
      </div>
    </div>
  );
}
