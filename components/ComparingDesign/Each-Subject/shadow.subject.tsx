import React, { ChangeEvent, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ShadowBox from "../components/shadow-box";
import Checkbox from "@/components/checkbox";

type Props = {};

export default function ShadowSubject({}: Props) {
  const [clipContent, setClipContent] = useState(false);
  const searchParams = useSearchParams();
  const squaresNum = Number(useSearchParams().get("squares"));

  const router = useRouter();

  const onAddingHandler = () => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    const newNum = squaresNum + 1;

    current.set("squares", `${newNum}`);
    current.set(`shadow-${newNum}`, `0px 0px 20px 0px #263c4871`);

    router.push(`compare-design?${current}`, { scroll: false });
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setClipContent(event.target.checked);
  };

  return (
    <div className="flex flex-col items-center pb-12">
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

      <ul className="mt-4 grid w-full gap-4 md:grid-cols-2">
        {Array(squaresNum)
          .fill("")
          .map((_, index) => (
            <ShadowBox
              key={index + 1}
              index={index + 1}
              clipContent={clipContent}
            />
          ))}
      </ul>
    </div>
  );
}
