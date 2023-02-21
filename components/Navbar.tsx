import React, { useState, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Container from "./Container";

import { ContentsContext } from "@/context/Contents";

import { MdAnimation } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

type Props = {};

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const { setIsContentOpen } = useContext(ContentsContext);

  const onClickHandler = () => {
    const { pathname } = router;
    if (pathname == "/") {
      setIsContentOpen(true);
    } else {
      router.push("/");
    }
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 bg-white shadow-lg md:px-8">
      <Container className="flex items-center justify-between h-16">
        <Link
          href={"/"}
          className="flex items-center gap-1 text-xl font-bold group"
        >
          <MdAnimation className="duration-200 group-hover:rotate-45" />
          AniLearn.dev
        </Link>
        <RiMenu3Fill
          className="block text-xl md:hidden"
          onClick={() => setIsOpen(true)}
        />
        <ul className="hidden space-x-8 md:block">
          <Link href={"/docs"} className="opacity-80 hover:opacity-100">
            Docs
          </Link>
          <Link href={"/pricing"} className="opacity-80 hover:opacity-100">
            Pricing
          </Link>
          <button
            className="px-8 py-2 text-white bg-black rounded-md shadow-button"
            onClick={onClickHandler}
          >
            Start Watching
          </button>
        </ul>
        {isOpen && (
          <NavbarSmall setIsOpen={setIsOpen} onClickHandler={onClickHandler} />
        )}
      </Container>
    </nav>
  );
}

interface INavbarSmall {
  setIsOpen: (active: boolean) => void;
  onClickHandler: () => void;
}

const NavbarSmall = ({ setIsOpen, onClickHandler }: INavbarSmall) => {
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-screen bg-white bg-opacity-50 md:hidden"
        onClick={() => setIsOpen(false)}
      ></div>
      <motion.ul
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-0 right-0 flex flex-col w-3/4 h-screen p-4 bg-white sm:w-1/2 md:hidden"
      >
        <h1 className="flex items-center gap-1 mb-8 text-2xl font-bold">
          <MdAnimation />
          AniLearn.dev
        </h1>
        <Link
          href={"/docs/intro"}
          className="px-4 py-2"
          onClick={() => setIsOpen(false)}
        >
          Docs
        </Link>
        <Link
          href={"/pricing"}
          className="px-4 py-2 mb-4"
          onClick={() => setIsOpen(false)}
        >
          Pricing
        </Link>
        <button
          className="px-8 py-2 text-white bg-black rounded-md shadow-button"
          onClick={() => {
            onClickHandler();
            setIsOpen(false);
          }}
        >
          Start Watching
        </button>
      </motion.ul>
    </>
  );
};
