import Container from "@/layouts/Container";
import { userSelector } from "@/redux/user/user.selector";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

import { MdAnimation } from "react-icons/md";
import { AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { GENERAL_TYPES } from "@/redux/general/general.types";

export default function Navbar({}: Props) {
  const [isUserToggle, setIsUserToggle] = useState<boolean>(false);
  const CURRENT_USER = useSelector(userSelector);

  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-4 font-medium bg-white shadow-lg">
      <Container className="items-center justify-between hidden h-16 md:flex">
        <Link href={"/"} className="flex items-center gap-1 text-xl font-bold">
          <MdAnimation />
          AniLearn.dev
        </Link>
        <ul className="items-center hidden gap-8 md:flex">
          <a href="#" className="text-[#525252] hover:text-black">
            Buy Now
          </a>
          {CURRENT_USER == null ? (
            <Link
              href={"/authentication"}
              className="px-4 py-2 font-bold text-white duration-150 bg-black rounded-md focus:shadow-button"
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
                    src={CURRENT_USER.photoURL}
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
      className={`${classNames} flex flex-col items-center p-2 pt-4 text-center bg-white border-2`}
    >
      <Image
        src={currentUser.photoURL}
        width={200}
        height={200}
        alt=""
        className="w-12 rounded-full"
      />
      <h3>{currentUser.displayName}</h3>
      <small className="text-xs opacity-70">{currentUser.email}</small>
      <button className="w-full py-1 mt-8 text-white duration-150 bg-red-700 rounded-md focus:shadow-button">
        log out
      </button>
    </motion.div>
  );
};

const userToggleAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 0.2 },
};

const NavbarSmall = () => {
  const CURRENT_USER = useSelector(userSelector);
  const dispatch = useDispatch();

  return (
    <Container className="flex items-center h-16 md:hidden">
      <div
        className="text-xl"
        onClick={() => dispatch({ type: GENERAL_TYPES.navbar, payload: true })}
      >
        <AiOutlineMenu />
      </div>
      <Link href={"/"} className="text-xl font-bold text-center grow">
        AniLearn.dev
      </Link>
      <div className="text-xl">
        {CURRENT_USER == null ? (
          <AiOutlineUser />
        ) : (
          <Image
            src={CURRENT_USER.photoURL}
            width={60}
            height={60}
            alt=""
            className="w-8 rounded-full"
          />
        )}
      </div>
    </Container>
  );
};
