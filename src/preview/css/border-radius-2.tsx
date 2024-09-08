import React, { useState } from "react";

import Wrapper from "@/components/Wrapper";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import { Slider } from "@/components/Slider";

export default function BorderRadius() {
  const [value, setValue] = useState({
    topLeft: 0,
    topRight: 0,
    bottomRight: 0,
    bottomLeft: 0,
  });

  const codeString = `div {
  border-radius: ${value.topLeft}px ${value.topRight}px ${value.bottomRight}px ${value.bottomLeft}px;
}`;

  return (
    <div>
      <SyntaxHighlighter language="css">{codeString}</SyntaxHighlighter>
      <Wrapper>
        <div
          className="h-44 w-44 bg-primary"
          style={{
            borderRadius: `${value.topLeft}px ${value.topRight}px ${value.bottomRight}px ${value.bottomLeft}px `,
          }}
        />
        <div className="w-full space-y-4">
          <Slider
            min={0}
            max={100}
            onValueChange={(newValue) =>
              setValue((prevValue) => ({ ...prevValue, topLeft: newValue[0] }))
            }
            className="mx-auto max-w-md"
          />
          <Slider
            min={0}
            max={100}
            onValueChange={(newValue) =>
              setValue((prevValue) => ({ ...prevValue, topRight: newValue[0] }))
            }
            className="mx-auto max-w-md"
          />
          <Slider
            min={0}
            max={100}
            onValueChange={(newValue) =>
              setValue((prevValue) => ({
                ...prevValue,
                bottomRight: newValue[0],
              }))
            }
            className="mx-auto max-w-md"
          />
          <Slider
            min={0}
            max={100}
            onValueChange={(newValue) =>
              setValue((prevValue) => ({
                ...prevValue,
                bottomLeft: newValue[0],
              }))
            }
            className="mx-auto max-w-md"
          />
        </div>
      </Wrapper>
    </div>
  );
}
