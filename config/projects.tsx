import {
  ReactIcon,
  TypescriptIcon,
  SCSSIcon,
  NextjsIcon,
  LaravelIcon,
  TailwindIcon,
  NodeIcon,
  MongoIcon,
  ExpressIcon,
  JavaScriptIcon,
} from "@/Icons";
import { ProjectType } from "@/types";

export const projects: (theme: string) => ProjectType[] = (theme) => [
  {
    id: "1",
    name: "Movie quotes",
    createdAt: "2023-06-05",
    route: "movie-quotes",
    tags: [
      {
        imgUrl: <NextjsIcon theme={theme} key="next-movie-quotes" />,
        name: "Next.js",
      },
      {
        imgUrl: <LaravelIcon key="laravel-movie-quotes" />,
        name: "Laravel",
      },
      {
        imgUrl: <TypescriptIcon theme={theme} key="typescript-movie-quotes" />,
        name: "Typescript",
      },
      {
        imgUrl: <TailwindIcon key="tailwind-movie-quotes" />,
        name: "tailwind",
      },
    ],
    websiteUrl: "https://movie-quotes.nnteam.ge/",
    githubUrl: "https://github.com/nikaakin/movie-quotes-front",
    description:
      "Movie Quotes - Website where users can share their favourite movie quotes. Every user will be able to delete any number of quotes and movies they have made. Reacting or commenting to someones quote will result to notifying the receiver.",
    images: [
      {
        url: "/projects/movie-quotes/1.png",
        alt: "movie quotes 1",
      },
      {
        url: "/projects/movie-quotes/2.png",
        alt: "movie quotes 2",
      },
      {
        url: "/projects/movie-quotes/3.png",
        alt: "movie quotes 3",
      },
      {
        url: "/projects/movie-quotes/4.png",
        alt: "movie quotes 4",
      },
      {
        url: "/projects/movie-quotes/5.png",
        alt: "movie quotes 5",
      },
      {
        url: "/projects/movie-quotes/6.png",
        alt: "movie quotes 6",
      },
    ],
  },
  {
    id: "2",
    name: "Natours",
    createdAt: "2022-11-05",
    route: "natours",
    tags: [
      {
        imgUrl: <NodeIcon theme={theme} key="node-natours" />,
        name: "Nodejs",
      },
      {
        imgUrl: <MongoIcon key="mongo-natours" />,
        name: "Mongo DB",
      },
      {
        imgUrl: <ExpressIcon theme={theme} key="express-natours" />,
        name: "Express.js",
      },
    ],
    websiteUrl: "https://natours-ljuy.onrender.com/",
    githubUrl: "https://github.com/nikaakin/Natours-nodejs",
    description:
      "Tour booking website. Users can either book a tour or register a tour and become a guide. Users will see all the tours available and choose one they like.",
    images: [
      {
        url: "/projects/natours/1.png",
        alt: "natours 1",
      },
      {
        url: "/projects/natours/2.png",
        alt: "natours 2",
      },
      {
        url: "/projects/natours/3.png",
        alt: "natours 3",
      },
      {
        url: "/projects/natours/4.png",
        alt: "natours 4",
      },
      {
        url: "/projects/natours/5.png",
        alt: "natours 5",
      },
    ],
  },
  {
    id: "3",
    name: "covid questionare",
    createdAt: "2023-05-05",
    route: "covid-questionare",
    tags: [
      {
        imgUrl: <ReactIcon theme={theme} key="react-covid-questionare" />,
        name: "React",
      },
      {
        imgUrl: (
          <TypescriptIcon theme={theme} key="typescript-covid-questionare" />
        ),
        name: "Typescript",
      },
      {
        imgUrl: <TailwindIcon key="tailwind-covid-questionare" />,
        name: "Tailwind",
      },
    ],
    websiteUrl: "https://covid-questionnaire-nikaakin.vercel.app/",
    githubUrl: "https://github.com/nikaakin/covid-questionnaire",
    description:
      "Covid Questionaire - multi page form application with dynamic animations.",
    images: [
      {
        url: "/projects/covid-questionare/1.png",
        alt: "covid-questionare 1",
      },
      {
        url: "/projects/covid-questionare/2.png",
        alt: "covid-questionare 2",
      },
      {
        url: "/projects/covid-questionare/3.png",
        alt: "covid-questionare 3",
      },
      {
        url: "/projects/covid-questionare/4.png",
        alt: "covid-questionare 4",
      },
      {
        url: "/projects/covid-questionare/5.png",
        alt: "covid-questionare 5",
      },
    ],
  },
  {
    id: "4",
    name: "cv maker",
    createdAt: "2023-03-05",
    route: "cv-maker",
    tags: [
      {
        imgUrl: <ReactIcon theme={theme} key="react-cv-maker" />,
        name: "React",
      },
      {
        imgUrl: <TypescriptIcon theme={theme} key="typescript-cv-maker" />,
        name: "Typescript",
      },
      {
        imgUrl: <SCSSIcon key="scss-cv-maker" />,
        name: "SCSS",
      },
    ],
    websiteUrl: "https://cv-maker-rose.vercel.app/",
    githubUrl: "https://github.com/nikaakin/cv-maker",
    description:
      "CV Maker - multi page form application to create your own CV.",
    images: [
      {
        url: "/projects/cv-maker/1.png",
        alt: "cv-maker 1",
      },
      {
        url: "/projects/cv-maker/2.png",
        alt: "cv-maker 2",
      },
      {
        url: "/projects/cv-maker/3.png",
        alt: "cv-maker 3",
      },
      {
        url: "/projects/cv-maker/4.png",
        alt: "cv-maker 4",
      },
    ],
  },
  {
    id: "5",
    name: "forkify",
    createdAt: "2022-11-02",
    route: "forkify",
    tags: [
      {
        imgUrl: <JavaScriptIcon key="javascript-forkify" />,
        name: "javascript",
      },
    ],
    websiteUrl: "https://forkify-nikakin.netlify.app/",
    githubUrl: "https://github.com/nikaakin/forkify-js-course",
    description:
      "Forkify - recipe search application. Users can search for recipes and save them to their favourites.",
    images: [
      {
        url: "/projects/forkify/1.png",
        alt: "forkify photo 1",
      },
      {
        url: "/projects/forkify/2.png",
        alt: "forkify photo 2",
      },
      {
        url: "/projects/forkify/3.png",
        alt: "forkify photo 3",
      },
      {
        url: "/projects/forkify/4.png",
        alt: "forkify photo 4",
      },
    ],
  },
  {
    id: "6",
    name: "CSS Challenges",
    createdAt: "2023-04-02",
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
        url: "/projects/css-challenges/1.png",
        alt: "CSS Challenges photo 1",
      },
      {
        url: "/projects/css-challenges/2.png",
        alt: "CSS Challenges photo 2",
      },
    ],
  },
];
