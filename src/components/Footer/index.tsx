import Logo from "@assets/Logo";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="flex flex-col justify-center w-full gap-4 p-4 mt-12 md:h-24 md:items-center md:flex-row bg-box dark:bg-box-d">
      <h1 className="flex items-center gap-2 text-2xl text-black dark:text-white">
        <Logo />
        AniLearn
      </h1>
      <ul className="flex flex-col md:flex-row">
        <Link
          href={"/"}
          className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-button-d">
          Home
        </Link>
        <Link
          href={"/about"}
          className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-button-d">
          About
        </Link>
        <Link
          href={"/html/inputs"}
          className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-button-d">
          Learning
        </Link>
        <Link
          href={"https://github.com/AliReza1083/AniLearn.dev"}
          className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-button-d">
          GitHub
        </Link>
        <Link
          href={"/features"}
          className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-button-d">
          Features
        </Link>
        <Link
          href={"https://github.com/AliReza1083/AniLearn.dev/issues/new/choose"}
          className="px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-button-d">
          Found issue?
        </Link>
      </ul>
    </div>
  );
}
