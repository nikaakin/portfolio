export type ProjectType = {
  name: string;
  description: string;
  websiteUrl?: string;
  createdAt: string;
  githubUrl?: string;
  images: {
    url: string;
    alt: string;
  }[];
  tags: {
    name: string;
    imgUrl: JSX.Element;
  }[];
  route: string;
};
