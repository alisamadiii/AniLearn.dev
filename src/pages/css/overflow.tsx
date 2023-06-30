/* It is an open-source project, this page is going to be written by Ali Reza */

import React, { useState } from "react";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, { BringChanges, LiveChanges } from "@components/Tech/Workplace";

// you can use these components
import { Checkbox, Information, CodeBlocks } from "@components/Tech";

type Props = {};

export default function Overflow({}: Props) {
  const [overflow, setOverflow] = useState("visible");

  const Codes = `p {
  overflow: ${overflow};
}`; // Use backtick for writing your code

  return (
    <>
      <MetaTag
        title="overflow"
        image={null}
        description=""
      />
      <Container>
        <Information content="<h1>overflow</h1><p>The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.</p>" />
        <CodeBlocks
          codeString={Codes}
          language="css"
          fileName="style.css"
        />

        <Workplace className="">
          <LiveChanges className="">
            {/* This is the place where you can see your changes live */}
            <p
              className="w-full max-w-[300px] h-40 mx-auto bg-box dark:bg-box-d p-4 rounded-lg"
              style={{ overflow }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolorem dolor et ut eum, magnam
              exercitationem excepturi laboriosam odio optio unde neque incidunt repellat iure id totam magni minus
              perspiciatis?
            </p>
          </LiveChanges>
          <BringChanges className="w-full mx-auto mt-12 space-y-3 max-w-input">
            {/* This is the place where you can add your setting to change your items, e.g: buttons, ranges and more */}
            <Checkbox
              name="Visible"
              checked={overflow == "visible" ? true : false}
              onChange={(e) => setOverflow("visible")}
            />
            <Checkbox
              name="Hidden"
              checked={overflow == "hidden" ? true : false}
              onChange={(e) => setOverflow("hidden")}
            />
            <Checkbox
              name="Scroll"
              checked={overflow == "scroll" ? true : false}
              onChange={(e) => setOverflow("scroll")}
            />
            <Checkbox
              name="Auto"
              checked={overflow == "auto" ? true : false}
              onChange={(e) => setOverflow("auto")}
            />
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}
