import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="absolute bottom-0 left-0 w-full py-4 md:px-8">
      <p className="text-xs text-center md:text-sm">
        AniLearn.dev | Developed by{" "}
        <a
          href="https://www.alirezasamadi.com/"
          target={"_blank"}
          rel="noreferrer"
          className="italic font-bold"
        >
          Ali Reza
        </a>{" "}
        © 2023
      </p>
    </div>
  );
}
