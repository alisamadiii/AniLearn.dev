import React, { ChangeEvent } from "react";

type Props = {
  onSubmitHandler: (e: any) => void;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SignUp({ onSubmitHandler, onChangeHandler }: Props) {
  return (
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
  );
}
