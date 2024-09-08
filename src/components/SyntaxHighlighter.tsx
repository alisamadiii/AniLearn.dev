import React from "react";
import { Prism } from "react-syntax-highlighter";
import { useTheme } from "next-themes";

import { githubLight, githubDark } from "@/components/github-theme";
import CopyButton from "./CopyButton";

type Props = {
  children?: React.ReactNode;
  language?: "css" | "html" | "javascript";
};

export default function SyntaxHighlighter({
  children,
  language = "javascript",
}: Props) {
  const { resolvedTheme } = useTheme();

  const getTextFromChildren = (children: React.ReactNode): string => {
    if (typeof children === "string") {
      return children;
    }
    if (Array.isArray(children)) {
      return children
        .map((child) => (typeof child === "string" ? child : ""))
        .join("");
    }
    return "";
  };

  const codeText = getTextFromChildren(children);

  return (
    <div className="animate-blur-in relative blur-[1.3px]">
      {/* @ts-ignore */}
      <Prism
        language={language}
        style={resolvedTheme === "light" ? githubLight : githubDark}
      >
        {children}
      </Prism>
      <CopyButton value={codeText} className="absolute right-2 top-2" />
    </div>
  );
}
