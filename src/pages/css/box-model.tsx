import React, { useState } from "react";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, {
  BringChanges,
  LiveChanges,
} from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks, Range } from "@components/Tech";

type Props = {};

export default function BoxModel({}: Props) {
  const [margin, setMargin] = useState(0);
  const [padding, setPadding] = useState(0);
  const [border, setBorder] = useState(0);

  const Codes = `margin: ${margin}px;
padding: ${padding}px;
border: ${border}px solid white;
`; // Use backtick for writing your code

  return (
    <>
      <MetaTag title="box-model" image={null} description="" />
      <Container>
        <Information content="<h1>Box Model</h1><p>In CSS, the term 'box model' is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: <code>margins</code>, <code>borders</code>, <code>padding</code>, and the actual <code>content</code>.</p>" />
        <CodeBlocks codeString={Codes} language="css" fileName="index.html" />

        <Workplace className="">
          <BringChanges className="space-y-4">
            <Range
              maxNum={100}
              filterName="Margin"
              value={margin}
              onChange={(e) => setMargin(Number(e.target.value))}
            />
            <Range
              maxNum={100}
              filterName="Border"
              value={border}
              onChange={(e) => setBorder(Number(e.target.value))}
            />
            <Range
              maxNum={100}
              filterName="Padding"
              value={padding}
              onChange={(e) => setPadding(Number(e.target.value))}
            />
          </BringChanges>
          <LiveChanges className="">
            <div className="relative w-full mt-12 overflow-hidden border rounded-lg bg-box border-white-low-opacity">
              {/* Changing Value */}
              <div
                className={`text-3xl font-medium text-font-clr bg-primary`}
                style={{ margin, padding, border: `${border}px solid` }}
              >
                Content
              </div>
            </div>
          </LiveChanges>
        </Workplace>
      </Container>
    </>
  );
}
