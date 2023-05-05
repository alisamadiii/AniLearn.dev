import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar_Tech({}: Props) {
  return (
    <nav className="fixed md:sticky top-0 left-0 w-[197px] px-2 py-3 border-r-2 border-white-low-opacity h-screen bg-background-clr -translate-x-full md:translate-x-0">
      <Link href={"/"} className="text-lg font-black text-white">
        AniLearn.dev
      </Link>
      <p className="text-xs">
        Learning something with animation doesn&apos;t get easier than this
      </p>
    </nav>
  );
}
