export type ProjectType = {
  id: string;
  name: string;
  description: string;
  websiteUrl?: string;
  createdAt: string;
  githubUrl?: string;
  imageUrl: string;
  tags: {
    name: string;
    imgUrl: JSX.Element;
  }[];
};
