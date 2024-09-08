"use client";

import React from "react";

import { Index } from "@/__registry__";

interface Props {
  name: string;
  children: React.ReactNode;
}

export default function ComponentPreview({ name }: Props) {
  const Component = Index[name].component;

  return <Component />;
}
