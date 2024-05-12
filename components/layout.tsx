"use client";

import React, { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const pathname = usePathname();

  // useEffect(() => {
  //   if (pathname === "/") {
  //     document.body.style.background = "#F3F7F9";
  //   } else {
  //     document.body.style.background = "#ffffff";
  //   }
  // }, [pathname]);

  return (
    <ThemeProvider attribute="class">
      <main>{children}</main>
    </ThemeProvider>
  );
}
