import { ReactNode } from "react";

export const metadata = {
  title: "About | Portfolio",
  description: "Learn about me.",
  keywords:
    "about, portfolio, web development, mobile app, full-stack, front-end, back-end, software, ,projects, contact, about",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
