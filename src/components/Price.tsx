import React from "react";

type Props = {};

export default function Price({}: Props) {
  return (
    <div className="space-x-3 text-xl">
      <del className="decoration-clone opacity-70">$29</del>
      <span>$9</span>
    </div>
  );
}
