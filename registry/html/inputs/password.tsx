import { PreviewWrapper } from "@/components/Wrapper";
import Input from "@/components/input";
import React, { useState } from "react";

export default function Password() {
  const [value, setValue] = useState("");

  return (
    <PreviewWrapper className="space-y-4">
      <Input type="password" onChange={(e) => { setValue(e.target.value); }} />
      <p className="text-muted">
        password: <span className="text-foreground">{value ?? "..."}</span>
      </p>
    </PreviewWrapper>
  );
}
