import React from "react";

type Props = {};

export default function Image({ ...props }: Props) {
  return <img {...props} className="rounded-xl" />;
}
