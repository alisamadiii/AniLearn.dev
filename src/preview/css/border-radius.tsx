import React, { useState } from "react";

import Wrapper from "@/components/Wrapper";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import { Slider } from "@/components/Slider";

export default function BorderRadius() {
  const [value, setValue] = useState(0);

  const codeString = `div {
  border-radius: ${value}px;
}`;

  return (
    <div>
      <SyntaxHighlighter language="css">{codeString}</SyntaxHighlighter>
      <Wrapper>
        <div className="h-44 w-44 bg-primary" style={{ borderRadius: value }} />
        <Slider
          min={0}
          max={100}
          onValueChange={(value) => setValue(value[0])}
          className="max-w-md"
        />
      </Wrapper>
    </div>
  );
}
