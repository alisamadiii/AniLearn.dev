import React, { useState } from "react";
import { Toggle, ToggleItem } from "@tremor/react";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

import {
  createWithEmailAndPasswordAuth,
  savingUserInformation,
  signInWithEmailAndPasswordAuth,
  signInWithGoogleProvider,
} from "@/utils/Firebase/authentication";
import { userSelector } from "@/redux/user/user.selector";

import { FcGoogle } from "react-icons/fc";
import SignUp from "@/components/Sign-Up";
import LogIn from "@/components/Log-In";
import SignedIn from "@/components/Signed-In";

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
            <SignUp
              onSubmitHandler={onSubmitHandler}
              onChangeHandler={onChangeHandler}
            />
          ) : (
            <LogIn
              onSubmitHandler2={onSubmitHandler2}
              onChangeHandler={onChangeHandler}
            />
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
        <SignedIn />
      )}
    </div>
  );
}
