import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {};

export default function HTML({}: Props) {
  const router = useRouter();
  useEffect(() => {
    router.push("/html/open-graph");
  }, []);
  return;
}
