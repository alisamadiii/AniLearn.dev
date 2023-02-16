import React, { useEffect } from "react";
import { useRouter } from "next/router";

type Props = {};

export default function Index() {
  const router = useRouter();
  useEffect(() => {
    router.push("/docs/intro");
  }, []);
}
