import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="fixed top-0 left-0 z-[9999] w-full h-screen flex justify-center items-center">
      <h1 className="px-4 py-2 text-xl bg-white rounded-md shadow-button animate-bounce">
        Loading...
      </h1>
    </div>
  );
}
