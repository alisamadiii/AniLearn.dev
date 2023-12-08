"use client";

import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function BackButton() {
  return (
    <button
      className="absolute left-0 top-24 flex items-center gap-2 px-4 text-sm text-muted hover:text-foreground"
      onClick={() => { window.history.back(); }}
    >
      <FaArrowLeftLong />
      Back
    </button>
  );
}
