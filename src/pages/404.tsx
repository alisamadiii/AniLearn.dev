import Link from "next/link";
import React from "react";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-background-clr dark:bg-background-clr-d">
      <h1 className="font-black text-black dark:text-white text-9xl animate-pulse">404</h1>
      <h2 className="mb-8 text-xl">Seems like this one doesn&apos;t exist.</h2>
      <Link
        href={"/"}
        className="inline-block px-4 py-2 text-white duration-150 rounded-lg bg-primary ring-4 ring-primary/20 active:scale-95">
        Back to home
      </Link>
    </div>
  );
}
