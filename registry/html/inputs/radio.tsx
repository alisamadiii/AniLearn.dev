import React from "react";

import { PreviewWrapper } from "@/components/Wrapper";
import Radio from "@/components/radio";

export default function Text() {
  return (
    <PreviewWrapper className="space-y-4">
      <label className="flex cursor-pointer select-none items-center gap-2">
        <Radio name="test" />
        HTML
      </label>
      <label className="flex cursor-pointer select-none items-center gap-2">
        <Radio name="test" />
        CSS
      </label>
      <label className="flex cursor-pointer select-none items-center gap-2">
        <Radio name="test" />
        JavaScript
      </label>
    </PreviewWrapper>
  );
}
