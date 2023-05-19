import React, { useState } from "react";

import Workplace from "..";
import { Range } from "@components/Tech/Range";
import SaveButton from "@components/SaveButton";

type Props = {};

export default function BoxModel({}: Props) {
  const [margin, setMargin] = useState(0);
  const [padding, setPadding] = useState(0);
  const [border, setBorder] = useState(0);

  const Content = `
margin: ${margin}px;
padding: ${padding}px;
border: ${border}px solid white;
`;

  return (
    <Workplace>
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

      <SaveButton content={Content} />

      <div className="relative w-full mt-12 overflow-hidden border rounded-lg bg-box border-white-low-opacity">
        {/* Changing Value */}
        <div
          className={`text-3xl font-medium text-white bg-primary`}
          style={{ margin, padding, border: `${border}px solid` }}
        >
          Content
        </div>
      </div>
    </Workplace>
  );
}
