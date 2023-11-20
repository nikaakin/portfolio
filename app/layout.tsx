import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context";
import { DynamicWrapper } from "./wrapper";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore my projects and contact me.",
  keywords:
    "portfolio, React, Next.js, TypeScript, Tailwind CSS, Laravel, Flutter, Dart, web development, mobile app, full-stack, front-end, back-end, software, ,projects, contact, about",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <DynamicWrapper>{children}</DynamicWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
