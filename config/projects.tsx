import { ReactIcon, TypescriptIcon } from "@/Icons";
import { SCSSIcon } from "@/Icons/SCSSIcon";
import { ProjectType } from "@/types";

export const projects: ProjectType[] = [
  {
    id: "1",
    name: "CSS Challenges",
    imageUrl: "/css_challenges_1",
    createdAt: "2021-05-01",
    tags: [
      {
        imgUrl: <ReactIcon />,
        name: "React",
      },
      {
        imgUrl: <TypescriptIcon />,
        name: "Typescript",
      },
      {
        imgUrl: <SCSSIcon />,
        name: "SCSS",
      },
    ],
    websiteUrl: "https://css-challenges-nikakin.netlify.app/",
    githubUrl: "https://github.com/nikaakin/CSS-Challenges",
    description:
      "CSS Challenges, from 100 days of CSS. I'm did few of them. I'm planning to do more.",
  },
];
