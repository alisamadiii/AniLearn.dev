import React from "react";

type Props = {};

export default function Buttons({}: Props) {
  return (
    <button className="px-4 py-2 font-bold duration-150 rounded-md shadow-2xl text-slate-700 bg-slate-200 focus:shadow-button">
      Buy Now
    </button>
  );
}
