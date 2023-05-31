import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

export default function HTML({}: Props) {
  const router = useRouter();

  useEffect(() => {
    router.push("/html/open-graph");
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <h1 className="text-3xl font-black text-center uppercase animate-pulse">
        taking you to another page...
      </h1>
    </div>
  );
}
