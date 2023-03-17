import React, { useEffect, useState } from "react";
import { Toggle, ToggleItem } from "@tremor/react";

type Props = {};

import { FcGoogle } from "react-icons/fc";
import {
  createWithEmailAndPasswordAuth,
  logOut,
  savingUserInformation,
  signInWithEmailAndPasswordAuth,
  signInWithGoogleProvider,
} from "@/utils/Firebase/authentication";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "@/redux/user/user.action";
import { USER_TYPES } from "@/redux/user/user.types";
import { userSelector } from "@/redux/user/user.selector";
import Container from "@/layouts/Container";
import Image from "next/image";

import { GoVerified } from "react-icons/go";

const INITIAL_VALUE = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

export default function Authentication({}: Props) {
  const [formData, setFormData] = useState(INITIAL_VALUE);
  const [toggle, setToggle] = useState("1");

  const CURRENT_USER = useSelector(userSelector);

  const onChangeHandler = (value: any) => {
    const { name, value: values } = value.target;
    setFormData({ ...formData, [name]: values });
  };

  const onSubmitHandler = async (e: any) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) return;

    const { user } = await createWithEmailAndPasswordAuth(
      formData.email,
      formData.password
    );

    await savingUserInformation(user, {
      displayName: formData.name,
    });
  };

  const onSubmitHandler2 = async (e: any) => {
    e.preventDefault();
    const { user } = await signInWithEmailAndPasswordAuth(
      formData.email,
      formData.password
    );
  };

  const dispatch = useDispatch();
  const signInWith = async () => {
    const { user } = await signInWithGoogleProvider();
    await savingUserInformation(user);
    dispatch(userAction(USER_TYPES.user, user));
  };

  return (
    <div className="flex flex-col items-center mt-24">
      {CURRENT_USER == null ? (
        <>
          <Toggle
            color="zinc"
            defaultValue="1"
            onValueChange={(value) => setToggle(value)}
          >
            <ToggleItem value="1" text="Sign Up" />
            <ToggleItem value="2" text="Log In" />
          </Toggle>
          {toggle == "1" ? (
            <form
              className="w-full rounded-lg max-w-[350px] space-y-4 mt-8"
              onSubmit={onSubmitHandler}
            >
              <input
                type="text"
                placeholder="name"
                name="name"
                onChange={(e) => onChangeHandler(e)}
                className="w-full px-4 py-2 text-sm font-medium border border-gray-300 rounded-md outline-none focus:ring-2 ring-primary/50 placeholder:text-gray-500"
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={(e) => onChangeHandler(e)}
                className="w-full px-4 py-2 text-sm font-medium border border-gray-300 rounded-md outline-none invalid:border-red-700 focus:ring-2 ring-primary/50 placeholder:text-gray-500"
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => onChangeHandler(e)}
                className="w-full px-4 py-2 text-sm font-medium border border-gray-300 rounded-md outline-none focus:ring-2 ring-primary/50 placeholder:text-gray-500"
              />
              <input
                type="password"
                placeholder="confirm password"
                name="confirm_password"
                onChange={(e) => onChangeHandler(e)}
                className="w-full px-4 py-2 text-sm font-medium border border-gray-300 rounded-md outline-none focus:ring-2 ring-primary/50 placeholder:text-gray-500"
              />
              <button className="flex items-center justify-center gap-4 px-4 py-2 text-sm font-medium duration-150 rounded-md bg-slate-100 focus:shadow-button">
                Sign Up
              </button>
            </form>
          ) : (
            <form
              className="w-full rounded-lg max-w-[350px] space-y-4 mt-8"
              onSubmit={onSubmitHandler2}
            >
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={(e) => onChangeHandler(e)}
                className="w-full px-4 py-2 text-sm font-medium border border-gray-300 rounded-md outline-none invalid:border-red-700 focus:ring-2 ring-primary/50 placeholder:text-gray-500"
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                onChange={(e) => onChangeHandler(e)}
                className="w-full px-4 py-2 text-sm font-medium border border-gray-300 rounded-md outline-none focus:ring-2 ring-primary/50 placeholder:text-gray-500"
              />
              <button className="flex items-center justify-center gap-4 px-4 py-2 text-sm font-medium duration-150 rounded-md bg-slate-100 focus:shadow-button">
                Log In
              </button>
            </form>
          )}

          <h3 className="my-5 text-xl">or</h3>

          <p className="w-full max-w-[350px] text-xs md:text-sm mb-3 text-red-900">
            We recommend you to sign in with Google *
          </p>
          <button
            onClick={signInWith}
            className="flex items-center justify-center py-2 rounded-md w-full max-w-[350px] gap-4 bg-slate-100 focus:shadow-button duration-150"
          >
            <FcGoogle />
            Sign In
          </button>
        </>
      ) : (
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
      )}
    </div>
  );
}
