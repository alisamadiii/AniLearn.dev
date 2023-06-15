import React, { useState } from "react";
import { motion } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Information, CodeBlocks, Button_Tech } from "@components/Tech";

type Props = {};

export default function DisplayProperty({}: Props) {
  const [display, setDisplay] = useState("block");

  const Codes = `h1 {
  display: ${display};
}`;

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
          <LiveChanges className="">
            <div className="relative w-full p-4 overflow-hidden border rounded-lg bg-box border-white-low-opacity">
              <h1
                className={`text-3xl text-font-clr-1 bg-primary`}
                style={{ display }}
              >
                Lorem Ipsum
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laboriosam fuga veniam eum doloremque!
                Pariatur aliquam sunt, quae nobis asperiores eligendi! Error sunt laborum dignissimos nostrum odit ipsum
                rem ut!
              </p>
            </div>
          </LiveChanges>
          <BringChanges className="">
            <motion.div
              layout
              className="flex flex-wrap gap-2 mt-12"
            >
              <Button_Tech
                value="Block"
                className={display}
                classNameValue="block"
                setClassName={setDisplay}
              />
              <Button_Tech
                value="Inline"
                className={display}
                classNameValue="inline"
                setClassName={setDisplay}
              />
              <Button_Tech
                value="Inline-Block"
                className={display}
                classNameValue="inline-block"
                setClassName={setDisplay}
              />
              <Button_Tech
                value="None"
                className={display}
                classNameValue="none"
                setClassName={setDisplay}
              />
            </motion.div>
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}
