"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useMainLayout } from "./hooks/useMainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore my projects and contact me.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { queryClient } = useMainLayout();

  return (
    <html lang="en">
      <body className={`${inter.className}  bg-zinc-50`}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <div className="w-300 mx-auto bg-white min-h-screen px-20 py-24">
            {children}
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
