"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function ScalingDown({ children }: Props) {
  return (
    <div className="scaling_setting origin-top duration-200">{children}</div>
  );
}
