import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

export default function HTML({}: Props) {
  const router = useRouter();
  useEffect(() => {
    router.push("/css/flex-position");
  }, []);
  return;
}
