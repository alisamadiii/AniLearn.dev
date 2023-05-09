import Container from "@layouts/Container";
import React, { useState } from "react";

type Props = {};

import {
  Heading_1,
  Heading_2,
  Paragraph,
} from "@components/Tech/Typography_Tech";
import { Range } from "@components/Tech/Range";

export default function Box_Model({}: Props) {
  const [margin, setMargin] = useState(0);
  const [padding, setPadding] = useState(0);
  const [border, setBorder] = useState(0);

  return (
    <Container className="py-12 pb-20">
      <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
        Box-Model
      </small>

      <Heading_1>Box Model</Heading_1>
      <Paragraph>
        In CSS, the term &quot;box model&quot; is used when talking about design
        and layout. The CSS box model is essentially a box that wraps around
        every HTML element. It consists of:{" "}
        <span className="text-white">margins</span>,{" "}
        <span className="text-white">borders</span>,
        <span className="text-white">padding</span>, and the actual{" "}
        <span className="text-white">content</span>.
      </Paragraph>

      <Heading_2 margin={true}>Working Place</Heading_2>
      <Paragraph>This is the place where you can try them.</Paragraph>

      {/* Place for changing values */}
      <div className="mt-12 space-y-4">
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
      </div>

      <div className="relative w-full mt-12 overflow-hidden border rounded-lg bg-box border-white-low-opacity">
        {/* Changing Value */}
        <div
          className={`text-3xl font-medium text-white bg-primary`}
          style={{ margin, padding, border: `${border}px solid` }}
        >
          Content
        </div>
      </div>
    </Container>
  );
}
