import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isNavbar: boolean;
  setIsNavbar: (a: boolean) => void;
};

import { HTML, CSS } from "@contents/Data";

// Icons
import { IoIosArrowDown } from "react-icons/io";
import { HiMenuAlt2 } from "react-icons/hi";

export default function Navbar_Tech({ isNavbar, setIsNavbar }: Props) {
  return (
    <Fragment>
      <nav
        className={`fixed md:sticky top-0 left-0 w-full md:w-[220px] px-2 py-3 border-r-2 border-white-low-opacity h-screen bg-background-clr/50 backdrop-blur-lg md:translate-x-0 duration-200 z-50 ${
          isNavbar ? "translate-y-0" : "-translate-y-full md:-translate-y-0"
        }`}
      >
        <Link
          href={"/"}
          onClick={() => setIsNavbar(false)}
          className="text-lg font-black text-white"
        >
          AniLearn.dev
        </Link>
        <p className="text-xs">
          Learning something with animation doesn&apos;t get easier than this
        </p>
        <ul className="mt-4">
          <Links techName="HTML" tech={HTML} />
          <Links techName="CSS" tech={CSS} />
        </ul>
      </nav>
      {/* Opening and Closing Navbar in small devices */}
      <motion.div
        className={`fixed p-2 text-2xl rounded-full bottom-4 left-4 md:hidden bg-box duration-200 z-50 ${
          isNavbar && "ml-auto bg-red-700 !rotate-45"
        }`}
        onClick={() => setIsNavbar(!isNavbar)}
      >
        <HiMenuAlt2 />
      </motion.div>
    </Fragment>
  );
}

type LinksProps = {
  tech: {
    id: number;
    name: string;
    link: string;
  }[];
  techName: string;
};

export const Links = ({ tech, techName }: LinksProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  return (
    <li className="mt-2">
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded mb-2 text-white cursor-pointer ${
          open && "bg-white-low-opacity"
        }`}
        onClick={() => setOpen(!open)}
      >
        <span className="grow">{techName}</span>
        <IoIosArrowDown
          className={`duration-200 ${open ? "rotate-0" : "-rotate-90"} `}
        />
      </div>
      <div className="px-2">
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-col overflow-hidden font-light"
            >
              {tech.map((t) => (
                <Link
                  key={t.id}
                  href={t.link}
                  className={`w-full inline-block py-1 px-2 hover:text-white border-l-2 ${
                    router.asPath == t.link
                      ? "text-white border-white"
                      : "border-white-low-opacity"
                  }`}
                >
                  {t.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
};
