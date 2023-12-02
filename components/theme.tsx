"use client";

import React from "react";
import { useTheme } from "next-themes";

export default function Theme() {
  const { theme, setTheme } = useTheme();

  console.log(theme);

  return (
    <div className="fixed bottom-0 left-0 bg-background p-4">
      <button onClick={() => { setTheme("light"); }}>light</button>
      <button onClick={() => { setTheme("dark"); }}>dark</button>
    </div>
  );
}
