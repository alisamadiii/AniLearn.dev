import { USER_TYPES } from "@/redux/user/user.types";
import {
  isSignedIn,
  savingUserInformation,
  signInWithGoogleProvider,
} from "../utils/Firebase/authentication";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userAction } from "@/redux/user/user.action";

type Props = {};

export default function Buttons({}: Props) {
  const dispatch = useDispatch();
  const signInWith = async () => {
    const { user } = await signInWithGoogleProvider();
    await savingUserInformation(user);
    dispatch(userAction(USER_TYPES.user, user));
  };

  useEffect(() => {
    isSignedIn((user: any) => {
      dispatch(userAction(USER_TYPES.user, user));
    });
  });

  return (
    <div
      className="inline-block px-4 py-2 m-4 mt-24 text-white duration-100 bg-black rounded-md active:scale-95"
      onClick={signInWith}
    >
      Buy Now
    </div>
  );
}
