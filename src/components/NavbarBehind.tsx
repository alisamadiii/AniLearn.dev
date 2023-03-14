import { navbarSelector } from "@/redux/general/general.selector";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

import { AiOutlineShoppingCart } from "react-icons/ai";
import { userSelector } from "@/redux/user/user.selector";
import Image from "next/image";

export default function NavbarBehind({}: Props) {
  const CURRENT_USER = useSelector(userSelector);
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-50 bg-[#f2f2f2]">
      {CURRENT_USER && (
        <div className="flex flex-col p-2 mb-4">
          <Image
            src={CURRENT_USER.photoURL}
            width={100}
            height={100}
            alt=""
            className="w-12 rounded-full"
          />
          <p className="mt-2 font-bold">{CURRENT_USER.displayName}</p>
          <small className="text-xs opacity-70">{CURRENT_USER.email}</small>
        </div>
      )}
      <Link href={"/"} className="flex items-center gap-2 p-2 border-b-2">
        <AiOutlineShoppingCart />
        Buy
      </Link>
    </div>
  );
}
