import React, { useState } from "react";
import { motion } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks, Button, Playground } from "@components/Tech";
import { activateButton } from "@utils/ClassName";

type Props = {};

export default function DisplayProperty({}: Props) {
  const [display, setDisplay] = useState("block");

  const Codes = `h1 {
  display: ${display};
}`;

  const IMAGE =
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80";

  return (
    <>
      <MetaTag
        title="display-property"
        image={null}
        description=""
      />
      <Container>
        <Information content="<h1>display property</h1><p>The display property specifies the display behavior (the type of rendering box) of an element.</p>" />
        <CodeBlocks
          codeString={Codes}
          language=""
          fileName="index.html"
        />

        <Workplace className="">
          <LiveChanges>
            <Playground>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                <span
                  style={{ display }}
                  className="text-white bg-primary">
                  Hello World
                </span>{" "}
                Iure fugiat, obcaecati laboriosam quis maxime facilis necessitatibus officiis hic asperiores sint ullam
                quo amet aliquam sunt, eius ea harum reprehenderit accusamus!
              </p>
            </Playground>
          </LiveChanges>
          <BringChanges className="">
            <motion.div
              layout
              className="flex flex-wrap gap-2 mt-12">
              <Button
                onClick={() => setDisplay("block")}
                variant={"workplace"}
                className={`${activateButton(display, "block")}`}>
                block
              </Button>
              <Button
                onClick={() => setDisplay("inline")}
                variant={"workplace"}
                className={`${activateButton(display, "inline")}`}>
                inline
              </Button>
              <Button
                onClick={() => setDisplay("inline-block")}
                variant={"workplace"}
                className={`${activateButton(display, "inline-block")}`}>
                inline-block
              </Button>
              <Button
                onClick={() => setDisplay("none")}
                variant={"workplace"}
                className={`${activateButton(display, "none")}`}>
                none
              </Button>
            </motion.div>
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}
