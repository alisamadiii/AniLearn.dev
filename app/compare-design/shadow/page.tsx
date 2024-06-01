"use client";

import React, { type ChangeEvent, useState } from "react";

import Checkbox from "@/components/checkbox";
import ShadowBox from "@/components/ComparingDesign/components/shadow-box";

export interface ShadowsType {
  id: number;
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: string;
}

export default function ShadowSubject() {
  const [clipContent, setClipContent] = useState(false);

  const [shadows, setShadows] = useState<ShadowsType[]>([
    { id: 1, x: 0, y: 0, blur: 20, spread: 0, color: "red" },
    { id: 2, x: 0, y: 0, blur: 20, spread: 0, color: "red" },
  ]);

  const onAddingHandler = () => {
    const lastShadows = shadows[shadows.length - 1];

    setShadows([
      ...shadows,
      { id: lastShadows.id + 1, x: 0, y: 0, blur: 0, spread: 0, color: "red" },
    ]);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setClipContent(event.target.checked);
  };

  return (
    <div className="mx-auto mt-24 w-full max-w-2xl">
      <h2 key={"no-subject"} className="mb-8 text-center text-4xl font-bold">
        Shadows
      </h2>

      <div className="flex w-full flex-col items-center pb-12">
        <div className="flex gap-4">
          <button
            className="active-button h-8 rounded-md bg-primary px-4 text-sm text-white"
            onClick={onAddingHandler}
          >
            Add square
          </button>

          <label className="flex items-center gap-2">
            <Checkbox
              name="clip-content"
              checked={clipContent}
              onChange={onChangeHandler}
            />
            Clip content
          </label>
        </div>

        <ul className="mt-4 grid w-full justify-center gap-4 md:grid-cols-2">
          {shadows.map((shadow, index) => (
            <ShadowBox
              key={index}
              shadow={shadow}
              setShadows={setShadows}
              clipContent={clipContent}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
