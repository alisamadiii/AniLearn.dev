import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Container from "./Container";

import { MdAnimation } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav className="w-full shadow-lg bg-white fixed top-0 left-0 px-4 md:px-8 z-50">
      <Container className="h-16 flex justify-between items-center">
        <Link href={"/"} className="flex gap-1 items-center text-xl font-bold">
          <MdAnimation />
          AniLearn.dev
        </Link>
        <RiMenu3Fill
          className="block md:hidden text-xl"
          onClick={() => setIsOpen(true)}
        />
        <ul className="space-x-8 hidden md:block">
          <Link href={"/docs"}>Docs</Link>
          <Link href={"/pricing"}>Pricing</Link>
          <button className="bg-black text-white py-2 px-8 rounded-md shadow-button">
            Start Watching
          </button>
        </ul>
        {isOpen && <NavbarSmall setIsOpen={setIsOpen} />}
      </Container>
    </nav>
  );
}

interface INavbarSmall {
  setIsOpen: (active: boolean) => void;
}

const NavbarSmall = ({ setIsOpen }: INavbarSmall) => {
  return (
    <>
      <div
        className="w-full h-screen bg-white bg-opacity-50 absolute top-0 left-0"
        onClick={() => setIsOpen(false)}
      ></div>
      <motion.ul
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-white flex flex-col p-4 md:hidden"
      >
        <h1 className="flex gap-1 items-center text-2xl font-bold mb-8">
          <MdAnimation />
          AniLearn.dev
        </h1>
        <Link href={"/docs"} className="px-4 py-2">
          Docs
        </Link>
        <Link href={"/pricing"} className="px-4 py-2 mb-4">
          Pricing
        </Link>
        <button className="bg-black text-white py-2 px-8 rounded-md shadow-button">
          Start Watching
        </button>
      </motion.ul>
    </>
  );
};
