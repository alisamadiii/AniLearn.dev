import path from "path";
import fs from "fs";
import inquirer from "inquirer";

const ContentTSX = `import React from "react";
import Workplace, { LiveChanges, BringChanges } from "../";

type Props = {};

export default function Template({}: Props) {
  return (
    // All your code must be inside the Workplace for writing a clean codes
    // You can utility classes. (optional)

    <Workplace className="">
      <LiveChanges className="">
        {/* This is the place where you can see your changes live */}
      </LiveChanges>
      <BringChanges className="">
        {/* This is the place where you can add your setting to change your items, e.g: buttons, ranges and more */}
      </BringChanges>
    </Workplace>
  );
}
`;

const ContentMDX = (fileName, tech) => {
  return `---
title: ${fileName}
tech: ${tech}
order: 
---

<Small_Gradient>${fileName}</Small_Gradient>

# ${fileName}`;
};

function createFiles(fileName, tech) {
  const folderPathForTSX = `../anilearn/src/Workplace/${tech}`;
  const folderPathForMDX = `../anilearn/src/docs/${tech}`;

  const filePathTSX = path.join(folderPathForTSX, `${fileName}.tsx`);
  const filePathMDX = path.join(folderPathForMDX, `${fileName}.mdx`);

  fs.writeFile(filePathTSX, ContentTSX, (err) => {
    if (err) {
      console.error(`Error creating file ${fileName}: ${err}`);
    } else {
      console.log(`File ${fileName} created successfully! -- TSX`);
    }
  });

  fs.writeFile(filePathMDX, ContentMDX(fileName, tech), (err) => {
    if (err) {
      console.error(`Error creating file ${fileName}: ${err}`);
    } else {
      console.log(`File ${fileName} created successfully! -- MDX`);
    }
  });
}

inquirer
  .prompt([
    {
      type: "input",
      name: "FileName",
      message: "FileName: ",
      default: "position",
    },
    {
      type: "list",
      name: "Tech",
      message: "Tech Stack: ",
      choices: ["HTML", "CSS"],
      default: "CSS",
    },
  ])
  .then((answers) => {
    createFiles(answers.FileName.toLowerCase(), answers.Tech.toLowerCase());
  });
