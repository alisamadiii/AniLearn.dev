import React, { useEffect, useState } from "react";
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
  const [codeTheme, setCodeTheme] = useState(tomorrow);

  const copyFunction = () => {
    navigator.clipboard.writeText(codeString);
    setIsSaved(["Copied", true]);
    // confetti({
    //   particleCount: 100,
    //   startVelocity: 30,
    //   spread: 360,
    //   origin: {
    //     x: Math.random(),
    //     y: Math.random() - 0.2
    //   }
    // });

    setTimeout(() => {
      setIsSaved(["Copy", false]);
    }, 3000);
  };

  useEffect(() => {
    const themeChanging = () => {
      if (theme == "dark") return setCodeTheme(tomorrowNight);
      else return setCodeTheme(tomorrow);
    };

    themeChanging();
  }, [theme]);

  return (
    <div
      className={twMerge(
        `w-full my-8 border-2 rounded-lg playground__background ${widthFull ? "" : "max-w-input"}`,
        className
      )}>
      <div className="flex items-center justify-between px-4 py-2 border-b border-white-low-opacity dark:border-white-low-opacity-d">
        <p>{fileName}</p>
        <button
          className="flex items-center gap-1 p-1 text-sm duration-200 rounded cursor-pointer focus:shadow-copy-button"
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
          {/* <span>{isSaved[0]}</span> */}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={codeTheme}
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
