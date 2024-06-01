"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  // useEffect(() => {
  //   if (pathname === "/") {
  //     document.body.style.background = "#F3F7F9";
  //   } else {
  //     document.body.style.background = "#ffffff";
  //   }
  // }, [pathname]);

  return (
    // <ThemeProvider>
    <main>{children}</main>
    // </ThemeProvider>
  );
}
