import React, { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {};

export default function CSS({}: Props) {
  const router = useRouter();
  useEffect(() => {
    router.push("/css/flex-position");
  }, []);
  return;
}
