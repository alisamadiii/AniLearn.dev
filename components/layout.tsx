"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();

  return (
    <ThemeProvider attribute="class">
      <main className={`${pathname === "/" && "grid-background"}`}>
        {children}
      </main>
    </ThemeProvider>
  );
}
