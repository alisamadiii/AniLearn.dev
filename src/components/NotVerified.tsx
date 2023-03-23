import { userSelector } from "@/redux/user/user.selector";
import React from "react";
import { useSelector } from "react-redux";
import { Callout } from "@tremor/react";

type Props = {};

import { AiOutlineMail } from "react-icons/ai";
import { logOut } from "@/utils/Firebase/authentication";

export default function NotVerified({}: Props) {
  const CURRENT_USER = useSelector(userSelector);
  return (
    <>
      {CURRENT_USER && CURRENT_USER.emailVerified == false && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-slate-800/30 backdrop-blur-sm">
          <div className="w-full max-w-[500px] bg-white p-4 rounded-md border-2 border-slate-300">
            <h1 className="mb-3 text-4xl font-bold text-slate-800">
              Not Verified
            </h1>
            <p>
              You have to verify your account so that you can access the
              website.
            </p>
            <Callout
              className="mt-4"
              title="Email Verification"
              icon={AiOutlineMail}
              color="rose"
            >
              We have sent you an email to verify your account. <br />
              When you are done, then refresh the page.
            </Callout>
            <button
              onClick={logOut}
              className="w-full py-2 mt-4 text-white duration-150 bg-red-700 rounded-md focus:shadow-button"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </>
  );
}
