import inquirer from 'inquirer';
import fs from "fs/promises"

let {description} = await inquirer
  .prompt([
    {
        type: 'input',
        name: 'title',
        message: "Give a title for your project",
    },
    {
        type: 'input',
        name: 'description',
        message: "Give a description for your project",
    },
    {
        type: 'input',
        name: 'installation',
        message: "How can you install the project?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use",
    },
  ])

let READMEText = `
    # ${title}

    ## Description
        ${description}
`


  fs.writeFile("README.md", READMEText)
  console.log(description);

  // when selecting license use a list to pick
  // create a function and call it in the READMEText using ${generateLicense(license)}

//   function generateLicense() {
//     if (license === "option") {
//        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
//     }
//   }