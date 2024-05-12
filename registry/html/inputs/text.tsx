import { PreviewWrapper } from "@/components/Wrapper";
import Input from "@/components/input";
import React, { useState } from "react";

export default function Text() {
  const [value, setValue] = useState("");

  return (
    <PreviewWrapper className="space-y-4">
      <Input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <p className="text-muted">
        name: <span className="text-foreground">{value ?? "..."}</span>
      </p>
    </PreviewWrapper>
  );
}
