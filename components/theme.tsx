import React from "react";
import { useTheme } from "next-themes";

import { IoSunny, IoMoon } from "react-icons/io5";

export default function Theme() {
  const { theme: themeColor, setTheme } = useTheme();

  const themes = ["light", "dark"];

  return (
    <div className="flex overflow-hidden rounded">
      {themes.map((theme, index) => (
        <button
          key={index}
          onClick={() => { setTheme(theme); }}
          className={`relative isolate p-[5px] text-lg [&:nth-of-type(1)]:shadow-[inset_2px_2px_4px_rgba(0,0,0,.1)] dark:[&:nth-of-type(1)]:shadow-[inset_2px_2px_4px_rgba(255,255,255,.1)] [&:nth-of-type(2)]:shadow-[inset_-2px_2px_4px_rgba(0,0,0,.1)] dark:[&:nth-of-type(2)]:shadow-[inset_-2px_2px_4px_rgba(255,255,255,.1)] ${
            themeColor === theme ? "bg-muted/20" : ""
          }`}
        >
          {theme === "light" ? <IoSunny /> : <IoMoon />}
        </button>
      ))}
    </div>
  );
}
