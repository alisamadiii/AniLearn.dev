import Container from "./Container";
import React from "react";

import { MdAnimation } from "react-icons/md";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full shadow-lg bg-white fixed top-0 left-0 px-4 md:px-8">
      <Container className="h-16 flex justify-between items-center">
        <Link href={"/"} className="flex gap-1 items-center text-xl font-bold">
          <MdAnimation />
          AniLearn.dev
        </Link>
        <ul className="space-x-8">
          <Link href={"/docs"}>Docs</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <button className="bg-black text-white py-2 px-8 rounded-md shadow-button">
            Start Watching
          </button>
        </ul>
      </Container>
    </div>
  );
}
