import React from "react";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, {
  BringChanges,
  LiveChanges,
} from "@components/Tech/Workplace";
import Information from "@components/Tech/Information";
import CodeBlocks from "@components/Tech/CodeBlocks";

// you can use these components 
import Input from "@components/Tech/Input";
import Checkbox from "@components/Checkbox";
import GivingComment from "@components/Comment";
import SaveButton from "@components/SaveButton";

type Props = {};

export default function OpenGraph({}: Props) {
  const Codes = ""; // Use backtick for writing your code

  return (
    <>
      <MetaTag title="open-graph" image={null} description="" />
      <Container>
        <Information content="<h1>open-graph</h1><p>tell us information about open-graph</p>" />
        <CodeBlocks codeString={Codes} language="" fileName="index.html" />

        <Workplace className="">
          <LiveChanges className="">
            {/* This is the place where you can see your changes live */}
            <p>This is the place where you can see your changes live</p>
          </LiveChanges>
          <BringChanges className="">
            {/* This is the place where you can add your setting to change your items, e.g: buttons, ranges and more */}
            <p>
              This is the place where you can add your setting to change your
              items, e.g: buttons, ranges and more
            </p>
          </BringChanges>
        </Workplace>
      </Container>
    </>
  );
}
