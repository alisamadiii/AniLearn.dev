import React from "react";
// import Image from "next/image";

type Props = {};

export default function Image({ ...props }: Props) {
  return <img {...props} className="rounded-xl" />;
}
