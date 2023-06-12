const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const { createSpinner } = require("nanospinner");
const figlet = require("figlet");
const gradient = require("gradient-string");

const { TemplateTSX } = require("./Templates/TSX");

function createFiles(fileName, tech, contributor) {
  const folderPathForTSX = `../anilearn/src/pages/${tech}`;

  const filePathTSX = path.join(folderPathForTSX, `${fileName}.tsx`);

  const Template_1 = createSpinner(
    `File ${fileName} created successfully! -- TSX`
  ).start();

  fs.writeFile(filePathTSX, TemplateTSX(fileName, tech, contributor), (err) => {
    if (err) {
      console.error(`Error creating file ${fileName}: ${err}`);
    } else {
      setTimeout(() => {
        Template_1.success();
      }, 1000);
    }
  });

  setTimeout(() => {
    figlet("Have FUN", (err, data) =>
      console.log(gradient.pastel.multiline(data))
    );
  }, 1500);
}

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Your Name: ",
      default: "Ali Reza",
    },
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
    createFiles(
      answers.FileName.toLowerCase(),
      answers.Tech.toLowerCase(),
      answers.name
    );
  });
