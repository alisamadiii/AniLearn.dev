import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Wrapper from "@/components/Wrapper";
import { cn } from "@/utils";
import { Button } from "@/components/Button";

type value = "flexbox" | "gridbox" | "translate";

const buttons: value[] = ["flexbox", "gridbox", "translate"];

export default function CenteringADiv() {
  const [value, setValue] = useState<value>("flexbox");

  const codeString = {
    flexbox: `div {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
    gridbox: `div {
  display: grid;
  justify-content: center;
  align-items: center;
}`,
    translate: `div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}`,
  }[value];

  return (
    <div>
      <div className="space-x-1">
        {buttons.map((button) => (
          <Button
            key={button}
            onClick={() => setValue(button)}
            className={cn(
              "capitalize duration-0",
              button !== value && "bg-opacity-80"
            )}
          >
            {button}
          </Button>
        ))}
      </div>
      <SyntaxHighlighter key={value} language="css">
        {codeString}
      </SyntaxHighlighter>
      <Wrapper>
        <Rectangular key={value} />
      </Wrapper>
    </div>
  );
}

function Rectangular() {
  const [classNames, setClassNames] = useState<null | string>(null);

  useEffect(() => {
    setTimeout(() => {
      setClassNames("flex justify-center items-center");
    }, 100);
  }, []);

  return (
    <div className={cn("h-96 w-full", classNames)}>
      <motion.div
        layout
        className="h-44 w-44 rounded-xl bg-primary"
      ></motion.div>
    </div>
  );
}
