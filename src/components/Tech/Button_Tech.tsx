import React from "react";

type Props = {
  value: string;
  classNameValue: string;
  className: string;
  setClassName: (a: string) => void;
};

export default function Button_Tech({
  value,
  classNameValue,
  className,
  setClassName,
}: Props) {
  return (
    <button
      onClick={() => setClassName(classNameValue)}
      className={`relative text-sm md:text-base px-4 py-2 rounded-lg bg-button after:content after:w-full after:h-full after:bg-gradient-to-r after:from-primary after:to-secondary after:absolute after:inset-0 after:-z-10 after:opacity-0 after:duration-200 overflow-hidden duration-200 isolate ${
        className == classNameValue
          ? "after:opacity-100 shadow-main-button text-white"
          : "after:opacity-0 opacity-75 scale-95 text-font-clr-1"
      }`}
    >
      {value}
    </button>
  );
}
