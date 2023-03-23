import Container from "@/layouts/Container";
import { userSelector } from "@/redux/user/user.selector";
import { logOut } from "@/utils/Firebase/authentication";
import Image from "next/image";
import React from "react";
import { GoVerified } from "react-icons/go";
import { useSelector } from "react-redux";

type Props = {};

export default function SignedIn({}: Props) {
  const CURRENT_USER = useSelector(userSelector);
  return (
    <Container className="flex flex-col items-center px-4">
      <Image
        src={
          CURRENT_USER.photoURL == null
            ? "https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
            : CURRENT_USER.photoURL
        }
        width={200}
        height={200}
        alt=""
        className="w-24 rounded-full"
      />
      <div className="flex items-center gap-2 mt-2">
        <h1 className="text-xl font-semibold text-slate-700">
          {CURRENT_USER.displayName || "Unknown"}
        </h1>
        {CURRENT_USER.emailVerified == true && (
          <GoVerified className="text-blue-600" />
        )}
      </div>
      <small>{CURRENT_USER.email}</small>
      <button onClick={logOut} className="mt-8">
        Log Out
      </button>
    </Container>
  );
}
