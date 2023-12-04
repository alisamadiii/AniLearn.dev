import React from "react";

import { PreviewWrapper } from "@/components/Wrapper";
import Checkbox from "@/components/checkbox";

export default function Text() {
  return (
    <PreviewWrapper className="space-y-4">
      <label className="flex cursor-pointer select-none items-center gap-2">
        <Checkbox />
        HTML
      </label>
      <label className="flex cursor-pointer select-none items-center gap-2">
        <Checkbox />
        CSS
      </label>
      <label className="flex cursor-pointer select-none items-center gap-2">
        <Checkbox />
        JavaScript
      </label>
    </PreviewWrapper>
  );
}
