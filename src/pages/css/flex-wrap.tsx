import React, { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, {
  BringChanges,
  LiveChanges,
} from "@components/Tech/Workplace";
import Information from "@components/Tech/Information";
import CodeBlocks from "@components/Tech/CodeBlocks";

// you can use these components
import Input from "@tech/Input";
import Checkbox from "@components/Checkbox";
import GivingComment from "@components/Comment";
import SaveButton from "@components/SaveButton";
import Range from "@tech/Range";
import Button_Tech from "@components/Button_Tech";

type Props = {};

export default function FlexWrap({}: Props) {
  const [flexWrap, setFlexWrap] = useState<boolean>(false);
  const [flexGrow, setFlexGrow] = useState<boolean>(false);
  const [flexBasis, setFlexBasis] = useState<number>(200);

  const [playground, { width: playgroundWidth }] = useMeasure();

  const onChangeHandler = (e: any) => {
    return e.target.value == 0
      ? setFlexBasis(200)
      : setFlexBasis(Number(e.target.value));
  };

  const Code = `.container {
  display: flex;
  flex-wrap: ${flexWrap ? "wrap" : "no-wrap"};
}

.items {
  flex-grow: ${flexGrow ? 1 : 0};
  flex-basis: ${flexBasis}px;
}`; // Use backtick for writing your code

  return (
    <>
      <MetaTag title="flex-wrap" image={null} description="" />
      <Container>
        <Information content="<h1>flex wrap</h1><p>The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.</p>" />
        <CodeBlocks codeString={Code} language="css" fileName="style.css" />

        <Workplace className="">
          <LiveChanges className="">
            <div
              className={`w-full min-w-[300px] max-w-playground mx-auto p-4 bg-box/50 border resize-x border-white-low-opacity rounded-lg flex gap-3 overflow-hidden ${
                flexWrap && "flex-wrap"
              }`}
              ref={playground}
            >
              {[...Array(4)].map((_, index) => (
                <Rectangular
                  key={index}
                  flexBasis={flexBasis}
                  flexGrow={flexGrow}
                />
              ))}
            </div>
            <div
              className={`relative flex items-center justify-center gap-3 mx-auto text-right mt-3`}
              style={{ width: playgroundWidth }}
            >
              <div
                className={`w-full h-1 rounded-full grow duration-200 absolute -z-10 ${
                  playgroundWidth == 300 ? "bg-red-700" : "bg-white-low-opacity"
                }`}
              />
              <p className="px-4 bg-background-clr">
                {Math.floor(playgroundWidth)}px
              </p>
            </div>
          </LiveChanges>
          <BringChanges className="w-full mx-auto mt-8 space-y-6 max-w-playground">
            <div>
              <h2 className="mb-4 text-xl text-white">Parent</h2>
              <GivingComment comment="The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines.">
                <Checkbox
                  name="Flex Wrap"
                  onChange={(e) => setFlexWrap(e.target.checked)}
                />
              </GivingComment>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="mb-4 text-xl text-white">Children</h2>
              <GivingComment comment="Flex-grow property assigns remaining space to flex items based on their specified grow factor.">
                <Checkbox
                  name="Flex Grow"
                  onChange={(e) => setFlexGrow(e.target.checked)}
                />
              </GivingComment>
              <GivingComment
                className="items-start"
                comment="The flex-basis CSS property sets the initial main size of a flex item."
              >
                <Input
                  name="Flex Basis"
                  value={flexBasis}
                  unit="px"
                  onChange={(e) => onChangeHandler(e)}
                />
              </GivingComment>
            </div>
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}

type RectangularProps = {
  flexGrow: boolean;
  flexBasis: number;
};

export const Rectangular = ({ flexGrow, flexBasis }: RectangularProps) => {
  const [ref, { width }] = useMeasure();

  return (
    <motion.div
      layout
      ref={ref}
      className={`flex flex-col rounded-lg h-24 ${flexGrow && "grow"}`}
      style={{ flexBasis }}
    >
      <div className={`bg-white rounded-lg w-full h-full`} />
      <div className="relative flex items-center justify-center">
        <div
          className={`w-full flex items-center justify-between h-1 rounded-full grow duration-200 bg-white-low-opacity absolute -z-10 before:w-[2px] before:h-3 before:absolute before:left-0 before:bg-white-low-opacity after:w-[2px] after:h-3 after:bg-white-low-opacity after:absolute after:right-0`}
        />
        <p className="px-4 bg-box/50">{Math.floor(width)}</p>
      </div>
    </motion.div>
  );
};
