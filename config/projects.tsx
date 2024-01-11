import { ReactIcon, TypescriptIcon, SCSSIcon } from "@/Icons";
import { ProjectType } from "@/types";

export const projects: (theme: string) => ProjectType[] = (theme) => [
  {
    id: "1",
    name: "CSS Challenges",
    createdAt: "2021-05-01",
    route: "css-challenges",
    tags: [
      {
        imgUrl: <ReactIcon theme={theme} key="react-css-challenges" />,
        name: "React",
      },
      {
        imgUrl: (
          <TypescriptIcon theme={theme} key="typescript-css-challenges" />
        ),
        name: "Typescript",
      },
      {
        imgUrl: <SCSSIcon key="scss-css-challenges" />,
        name: "SCSS",
      },
    ],
    websiteUrl: "https://css-challenges-nikakin.netlify.app/",
    githubUrl: "https://github.com/nikaakin/CSS-Challenges",
    description:
      "CSS Challenges, from 100 days of CSS. I'm did few of them. I'm planning to do more.",
    images: [
      {
        url: "/projects/css_challenges_1.png",
        alt: "CSS Challenges",
      },
      {
        url: "/projects/css_challenges_2.png",
        alt: "CSS Challenges",
      },
    ],
  },
];
