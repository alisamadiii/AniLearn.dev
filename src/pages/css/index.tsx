import { useRouter } from "next/router";
import React from "react";

type Props = {};

export default function CSS({}: Props) {
  const router = useRouter();
  router.push("/css/flex-position");

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <h1 className="text-3xl font-black text-center uppercase animate-pulse">
        taking you to another page...
      </h1>
    </div>
  );
}
