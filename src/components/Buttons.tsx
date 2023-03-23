import React from "react";
import { useRouter } from "next/router";

type Props = {};

export default function Buttons({}: Props) {
  const router = useRouter();
  const buyingProduct = () => {
    router.push("/products/animated-content/buy");
  };
  return (
    <button
      onClick={buyingProduct}
      className="px-4 py-2 font-bold duration-150 rounded-md text-slate-100 bg-slate-900 focus:shadow-button"
    >
      Buy Now
    </button>
  );
}
