/* It is an open-source project, this page is going to be written by Ali Reza */

import React, { useState } from "react";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks, Input, Playground } from "@components/Tech";

type Props = {};

export default function RoundedCorners({}: Props) {
  const [topLeft, setTopLeft] = useState(10);
  const [topRight, setTopRight] = useState(30);
  const [bottomLeft, setBottomLeft] = useState(40);
  const [bottomRight, setBottomRight] = useState(5);

  const Codes = `border-radius: ${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px;`; // Use backtick for writing your code

  return (
    <>
      <MetaTag
        title="rounded-corners"
        image={null}
        description=""
      />
      <Container>
        <Information content="<h1>rounded-corners</h1><p>The <code>border-radius</code> property defines the radius of the element's corners.</p>" />
        <CodeBlocks
          codeString={Codes}
          language="css"
          fileName="style.css"
        />

        <Workplace className="">
          <LiveChanges className="">
            <Playground
              className="h-40 duration-100 max-w-input"
              style={{ borderRadius: `${topLeft}px ${topRight}px ${bottomLeft}px ${bottomRight}px` }}
            />
          </LiveChanges>
          <BringChanges className="flex flex-wrap items-start w-full mx-auto mt-8 gap-x-4 max-w-input">
            <Input
              name="Top Left"
              value={topLeft}
              unit="px"
              onChange={(e) => setTopLeft(e.target.valueAsNumber)}
            />
            <Input
              name="Top Right"
              value={topRight}
              unit="px"
              onChange={(e) => setTopRight(e.target.valueAsNumber)}
            />
            <Input
              name="Bottom Left"
              value={bottomLeft}
              unit="px"
              onChange={(e) => setBottomLeft(e.target.valueAsNumber)}
            />
            <Input
              name="Bottom Left"
              value={bottomRight}
              unit="px"
              onChange={(e) => setBottomRight(e.target.valueAsNumber)}
            />
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}
