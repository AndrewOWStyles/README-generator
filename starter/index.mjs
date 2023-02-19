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
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to use?',
      choices: ['MIT', 'IBM', 'Mozilla', 'Unlicensed'],
    },
  ])

let READMEText = `
    # ${title}

    ## Description
        ${description}
`


  fs.writeFile("README.md", READMEText)

  // when selecting license use a list to pick
  // create a function and call it in the READMEText using ${generateLicense(license)}

  function generateLicense() {
    if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    }
    else if (license === "IBM") {
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    }
    else if (license === "Mozilla") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else {
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
  }