import React, { useState } from "react";
import { motion } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Information, Range, Dropdown, Button, Playground } from "@components/Tech";
import { activateButton } from "@utils/ClassName";

type Props = {};

const INITIAL_VALUE: {
  top: number;
  right: number;
  bottom: number;
  left: number;
} = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

export default function Position({}: Props) {
  const [position, setPosition] = useState("static");
  const [positionValue, setPositionValue] = useState(INITIAL_VALUE);
  const [validPosition, setValidPosition] = useState<"top" | "bottom">("top");

  const onChangeHandler = (e: any) => {
    const { value, name } = e.target;
    setPositionValue({ ...positionValue, [name]: Number(value) });
  };

  return (
    <>
      <MetaTag
        title="position"
        image={null}
        description=""
      />
      <Container>
        <Information content="<h1>position</h1><p>The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).</p>" />

        <Workplace className="">
          <LiveChanges className="">
            <Playground className="relative p-0 overflow-y-auto h-96">
              <nav
                className={`${position} flex items-center w-full h-12 px-4 text-black dark:text-white z-20 ${
                  position == "absolute" ? "bg-white/90 dark:bg-black/90" : "bg-white dark:bg-black"
                }`}
                style={
                  validPosition == "top"
                    ? {
                        top: positionValue.top,
                        left: positionValue.left
                      }
                    : {
                        right: positionValue.right,
                        bottom: positionValue.bottom
                      }
                }>
                <h1>Navbar</h1>
              </nav>
              <motion.section
                layout="position"
                className="p-4">
                {[...Array(5)].map(() => (
                  <>
                    <h2 className="mb-3 text-3xl text-black dark:text-white">Lorem Ipsum</h2>
                    <p className="mb-8">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur aliquam amet, illum
                      quasi, explicabo impedit sed ut dolore doloremque eum et debitis repellendus inventore accusamus
                      deserunt corrupti autem officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis pariatur aliquam amet, illum quasi, explicabo impedit sed ut dolore doloremque eum et
                      debitis repellendus inventore accusamus deserunt corrupti autem officiis? Lorem ipsum dolor sit
                      amet consectetur adipisicing elit. Reiciendis pariatur aliquam amet, illum quasi, explicabo
                      impedit sed ut dolore doloremque eum et debitis repellendus inventore accusamus deserunt corrupti
                      autem officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis pariatur
                      aliquam amet, illum quasi, explicabo impedit sed ut dolore doloremque eum et debitis repellendus
                      inventore accusamus deserunt corrupti autem officiis?
                    </p>
                  </>
                ))}
              </motion.section>
            </Playground>
          </LiveChanges>
          <BringChanges className="">
            <div className="flex flex-wrap gap-4 mt-12">
              <Button
                onClick={() => setPosition("static")}
                variant={"workplace"}
                className={`${activateButton(position, "static")}`}>
                static
              </Button>
              <Button
                onClick={() => setPosition("relative")}
                variant={"workplace"}
                className={`${activateButton(position, "relative")}`}>
                relative
              </Button>
              <Button
                onClick={() => setPosition("absolute")}
                variant={"workplace"}
                className={`${activateButton(position, "absolute")}`}>
                absolute
              </Button>
              <Button
                onClick={() => setPosition("fixed")}
                variant={"workplace"}
                className={`${activateButton(position, "fixed")}`}>
                fixed
              </Button>
              <Button
                onClick={() => setPosition("sticky")}
                variant={"workplace"}
                className={`${activateButton(position, "sticky")}`}>
                sticky
              </Button>
            </div>
            <div className="mt-8 mb-4">
              <Dropdown
                name="Direction"
                lists={["top", "bottom"]}
                stateValue={validPosition}
                setStateValue={setValidPosition}
                margin={true}
              />
            </div>
            {/* Range for changing the position of the navbar  */}
            <div className="grid gap-8 md:grid-cols-2">
              <Range
                filterName="top"
                maxNum={300}
                value={positionValue.top}
                onChange={onChangeHandler}
              />
              <Range
                filterName="left"
                maxNum={300}
                value={positionValue.left}
                onChange={onChangeHandler}
              />
              <Range
                filterName="bottom"
                maxNum={300}
                value={positionValue.bottom}
                onChange={onChangeHandler}
              />
              <Range
                filterName="right"
                maxNum={300}
                value={positionValue.right}
                onChange={onChangeHandler}
              />
            </div>
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}
