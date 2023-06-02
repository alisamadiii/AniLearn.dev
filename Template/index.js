import path from "path";
import fs from "fs";
import inquirer from "inquirer";

const capitalizeWord = (word) => {
  const firstLetter = word.charAt(0).toUpperCase();
  const remainingLetters = word.slice(1);
  return firstLetter + remainingLetters;
};

const ContentTSX = (fileName) => {
  return `import React from "react";
import Workplace, { LiveChanges, BringChanges } from "../";

type Props = {};

export default function ${capitalizeWord(
    fileName.replaceAll("-", "")
  )}({}: Props) {
  return (
    // All your code must be inside the Workplace for writing a clean codes
    // You can utility classes. (optional)

    <Workplace className="">
      <LiveChanges className="">
        {/* This is the place where you can see your changes live */}
        <p>This is the place where you can see your changes live</p>
      </LiveChanges>
      <BringChanges className="">
        {/* This is the place where you can add your setting to change your items, e.g: buttons, ranges and more */}
        <p>
          This is the place where you can add your setting to change your items,
          e.g: buttons, ranges and more
        </p>
      </BringChanges>
    </Workplace>
  );
}
`;
};

const ContentMDX = (fileName, tech) => {
  return `---
title: ${fileName}
tech: ${tech}
order: 
---

<Small_Gradient>${fileName}</Small_Gradient>

# ${fileName}

{/* You will get an error, You need to add this Components to MDXComponent so that MDX can read it. */}
{/* Simply go to "./src/components/Tech/MDXComponent.ts" */}
{/* Import your file and choose tech (HTML, CSS) correctly */}
{/* Once You imported, Add it to the list of Components */}
{/* Now You can brings and change the world 😀 */}

<${capitalizeWord(fileName.replaceAll("-", ""))} />
`;
};

const ContentImportFileTSX = (fileName) =>
  `export { default as ${capitalizeWord(
    fileName.replaceAll("-", "")
  )} } from "./${fileName}";`;

function createFiles(fileName, tech) {
  const folderPathForTSX = `../anilearn/src/Workplace/${tech}`;
  const importingFileTSX = `../anilearn/src/Workplace/${tech}/index.ts`;
  const folderPathForMDX = `../anilearn/src/docs/${tech}`;

  const filePathTSX = path.join(folderPathForTSX, `${fileName}.tsx`);
  const filePathMDX = path.join(folderPathForMDX, `${fileName}.mdx`);

  fs.writeFile(filePathTSX, ContentTSX(fileName), (err) => {
    if (err) {
      console.error(`Error creating file ${fileName}: ${err}`);
    } else {
      console.log(`✅ File ${fileName} created successfully! -- TSX`);
    }
  });

  fs.writeFile(filePathMDX, ContentMDX(fileName, tech), (err) => {
    if (err) {
      console.error(`Error creating file ${fileName}: ${err}`);
    } else {
      console.log(`✅ File ${fileName} created successfully! -- MDX`);
    }
  });

  fs.appendFile(importingFileTSX, ContentImportFileTSX(fileName), (err) => {
    if (err) {
      console.error(`Error creating file ${fileName}: ${err}`);
    } else {
      console.log(`✅ Imported File successfully -- TSX`);
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
