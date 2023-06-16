import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight, tomorrow } from "react-syntax-highlighter/dist/esm/styles/hljs";
import confetti from "canvas-confetti";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";

type Props = {
  codeString: string;
  language: string;
  fileName: string;
  widthFull?: boolean;
  className?: string;
  wrapLongLines?: boolean;
};

// Icons
import { MdContentCopy } from "react-icons/md";
import { BsFillClipboard2CheckFill } from "react-icons/bs";

export default function CodeBlocks({
  codeString,
  language,
  fileName,
  widthFull = false,
  className,
  wrapLongLines = false
}: Props) {
  const [isSaved, setIsSaved] = useState<[string, boolean]>(["Copy", false]);
  const { theme, setTheme } = useTheme();

  const copyFunction = () => {
    navigator.clipboard.writeText(codeString);
    setIsSaved(["Copied", true]);
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });

    setTimeout(() => {
      setIsSaved(["Copy", false]);
    }, 3000);
  };

  const themeChanging = () => {
    if (theme == "dark") return tomorrowNight;
    else return tomorrow;
  };

  return (
    <div
      className={twMerge(
        `w-full my-8 border-2 rounded-lg bg-box border-white-low-opacity ${widthFull ? "" : "max-w-input"}`,
        className
      )}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-white-low-opacity">
        <p>{fileName}</p>
        <div
          className="flex items-center gap-1 text-sm cursor-pointer"
          onClick={copyFunction}>
          {isSaved[1] ? (
            <span>
              <BsFillClipboard2CheckFill />
            </span>
          ) : (
            <span>
              <MdContentCopy />
            </span>
          )}
          <span>{isSaved[0]}</span>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={tomorrowNight}
        wrapLongLines={wrapLongLines}
        customStyle={{
          background: "none",
          paddingInline: "1em"
        }}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}
