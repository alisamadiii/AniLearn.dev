"use client";

import React from "react";

import { Index } from "@/__registry__";

interface Props {
  name: string;
}

export default function ComponentPreview({ name }: Props) {
  const Component = Index[name].component;

  return (
    <div className="mb-12">
      <Component />
    </div>
  );
}
