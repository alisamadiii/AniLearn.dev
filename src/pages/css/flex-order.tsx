/* It is an open-source project, this page is going to be written by Ali Reza */

import React, { useState } from "react";
import { motion } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks, Input } from "@components/Tech";

type Props = {};

const INITIAL_VALUE = [
  {
    id: 1,
    order: 1
  },
  {
    id: 2,
    order: 2
  },
  {
    id: 3,
    order: 3
  },
  {
    id: 4,
    order: 4
  }
];

export default function FlexOrder({}: Props) {
  const [rects, setRects] = useState(INITIAL_VALUE);
  const [selected, setSelected] = useState(1);
  const Codes = `.rect1 {
  order: ${rects[0].order};
}

.rect2 {
  order: ${rects[1].order};
}

.rect3 {
  order: ${rects[2].order};
}

.rect4 {
  order: ${rects[3].order};
}`; // Use backtick for writing your code

  const filteringValues = (value: number) => {
    const filtered = rects.find((rect) => rect.id == selected);

    return filtered?.order;
  };

  const updatingValues = (selected: number, inputValue: number) => {
    setRects((prevRects) => {
      return prevRects.map((rect) => {
        if (rect.id === selected) {
          return {
            ...rect,
            order: inputValue
          };
        }
        return rect;
      });
    });
  };

  return (
    <>
      <MetaTag
        title="flex-order"
        image={null}
        description=""
      />
      <Container>
        <Information content="<h1>flex-order</h1><p>tell us information about flex-order</p>" />
        <CodeBlocks
          codeString={Codes}
          language="css"
          fileName="style.css"
        />

        <Workplace className="">
          <LiveChanges className="flex w-full gap-2 p-4 mx-auto border rounded-lg max-w-playground playground__background">
            {rects.map((rect) => (
              <motion.div
                key={rect.id}
                layout
                className={`bg-black dark:bg-white rounded-lg w-11 h-11 text-white dark:text-black flex justify-center items-center transition-colors duration-200 ${
                  rect.id == selected && "ring ring-primary/70"
                }`}
                style={{ order: rect.order }}
                onClick={() => setSelected(rect.id)}>
                {rect.id}
              </motion.div>
            ))}
          </LiveChanges>
          <BringChanges className="flex flex-col items-start w-full mx-auto mt-8 max-w-playground">
            <Input
              name="order"
              value={filteringValues(selected)!}
              onChange={(e) => updatingValues(selected, e.target.valueAsNumber)}
            />
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}
