import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import Container from "@/layouts/Container";
import { userSelector } from "@/redux/user/user.selector";

type Props = {};

import { MdAnimation } from "react-icons/md";
import { AiOutlineMenu, AiOutlineUser, AiOutlineClose } from "react-icons/ai";

import { isSignedIn, logOut } from "@/utils/Firebase/authentication";

import { userAction } from "@/redux/user/user.action";
import { USER_TYPES } from "@/redux/user/user.types";

export default function Navbar({}: Props) {
  const [isUserToggle, setIsUserToggle] = useState<boolean>(false);
  const CURRENT_USER = useSelector(userSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    isSignedIn((user: any) => {
      dispatch(userAction(USER_TYPES.user, user));
    });
  });

  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-4 font-medium bg-white">
      <Container className="items-center justify-between hidden h-20 md:flex">
        <Link
          href={"/"}
          className="flex items-center gap-1 text-xl font-bold text-[#334155]"
        >
          <MdAnimation />
          AniLearn.dev
        </Link>
        <ul className="items-center hidden gap-8 md:flex">
          <Link
            href="/products/animated-content/buy"
            className="text-[#64748B] hover:text-slate-700"
          >
            Buy Now
          </Link>
          {CURRENT_USER == null ? (
            <Link
              href={"/authentication"}
              className="px-4 py-2 font-bold duration-150 rounded-md text-slate-700 bg-slate-100 focus:shadow-button"
            >
              Log In / Sign Up
            </Link>
          ) : (
            <div className="relative">
              <div onClick={() => setIsUserToggle(!isUserToggle)}>
                {isUserToggle ? (
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/753/753345.png"
                    className="w-8"
                  />
                ) : (
                  <Image
                    src={
                      CURRENT_USER.photoURL == null
                        ? "https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                        : CURRENT_USER.photoURL
                    }
                    width={60}
                    height={60}
                    alt=""
                    className="w-8 rounded-full"
                  />
                )}
              </div>
              <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-primary"></div>
              <AnimatePresence mode="wait">
                {isUserToggle && (
                  <UserToggle
                    currentUser={CURRENT_USER}
                    classNames="absolute right-0 top-16 w-48 rounded-xl"
                  />
                )}
              </AnimatePresence>
            </div>
          )}
        </ul>
      </Container>
      <NavbarSmall />
    </nav>
  );
}

type UserToggleTypes = {
  currentUser: any;
  classNames: string;
};

export const UserToggle = ({ currentUser, classNames }: UserToggleTypes) => {
  return (
    <motion.div
      {...userToggleAnimation}
      className={`${classNames} flex flex-col items-center p-2 pt-4 text-center bg-white border-2 shadow-anilearn`}
    >
      <Image
        src={
          currentUser.photoURL == null
            ? "https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            : currentUser.photoURL
        }
        width={200}
        height={200}
        alt=""
        className="w-12 rounded-full"
      />
      <h3>{currentUser.displayName || "User"}</h3>
      <small className="text-xs opacity-70">{currentUser.email}</small>
      <button
        onClick={logOut}
        className="w-full py-1 mt-8 text-white duration-150 bg-red-700 rounded-md focus:shadow-button"
      >
        log out
      </button>
    </motion.div>
  );
};

const userToggleAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.1 },
};

const NavbarSmall = () => {
  const CURRENT_USER = useSelector(userSelector);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <Container className="flex items-center h-20 md:hidden">
      <div
        className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:text-slate-500"
        onClick={() => setIsNavOpen(true)}
      >
        <AiOutlineMenu />
      </div>
      <Link
        href={"/"}
        className="text-xl font-bold text-center text-black grow"
      >
        AniLearn.dev
      </Link>
      <div className="text-xl">
        {CURRENT_USER == null ? (
          <AiOutlineUser />
        ) : (
          <Link href={"/authentication"}>
            <Image
              src={
                CURRENT_USER.photoURL == null
                  ? "https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                  : CURRENT_USER.photoURL
              }
              width={60}
              height={60}
              alt=""
              className="w-8 rounded-full"
            />
          </Link>
        )}
      </div>

      <AnimatePresence mode="wait">
        {isNavOpen && (
          <ul className="absolute top-0 left-0 w-full h-screen p-4 isolate">
            <div
              className="absolute top-0 left-0 w-full h-full bg-slate-800/30 -z-10"
              onClick={() => setIsNavOpen(false)}
            ></div>
            <motion.div
              {...userToggleAnimation}
              className="w-full h-auto p-4 bg-white rounded-xl"
            >
              <div className="flex items-center justify-between">
                <Link href={"/"} className="text-xl font-bold text-slate-700">
                  AniLearn.dev
                </Link>
                <div
                  className="p-2 rounded-lg bg-slate-100 text-slate-400 hover:text-slate-500"
                  onClick={() => setIsNavOpen(false)}
                >
                  <AiOutlineClose />
                </div>
              </div>
              <div className="flex flex-col mt-2 text-lg font-medium">
                <Link href={"/products/animated-content/buy"} className="py-4">
                  Buy Now
                </Link>
                {CURRENT_USER == null ? (
                  <Link
                    href={"/authentication"}
                    className="px-4 py-2 mt-8 text-base font-bold text-center text-white duration-150 bg-black rounded-md focus:shadow-button"
                  >
                    Log In / Sign Up
                  </Link>
                ) : (
                  <small className="self-start px-4 py-1 mt-2 font-bold rounded-md bg-primary/20 text-primary">
                    Signed In
                  </small>
                )}
              </div>
            </motion.div>
          </ul>
        )}
      </AnimatePresence>
    </Container>
  );
};
