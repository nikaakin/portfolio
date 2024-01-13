"use client";
import { Slider } from "@/components";
import { projects } from "@/config";
import { ThemeContext } from "@/context";
import { ProjectType } from "@/types";
import { useContext } from "react";

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
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
