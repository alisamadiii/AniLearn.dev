const { capitalizeWord } = require(".");

const TemplateTSX = (fileName, tech, contributor) => {
  return `/* It is an open-source project, this page is going to be written by ${contributor} */
  
import React from "react";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, {
  BringChanges,
  LiveChanges,
} from "@components/Tech/Workplace";

// you can use these components
import {
  Checkbox,
  Information,
  CodeBlocks,
  Button_Tech,
  GivingComment,
  Input,
  Range,
  Tabs,
  Dropdown
} from "@components/Tech";

type Props = {};

export default function ${capitalizeWord(fileName)}({}: Props) {
  const Codes = ""; // Use backtick for writing your code

  return (
    <>
      <MetaTag title="${fileName}" image={null} description="" />
      <Container>
        <Information content="<h1>${fileName}</h1><p>tell us information about ${fileName}</p>" />
        <CodeBlocks codeString={Codes} language="${
          tech == "html" ? "htmlbars" : "css"
        }" fileName="${tech == "html" ? "index.html" : "style.css"}" />

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
`;
};

module.exports = { TemplateTSX };
