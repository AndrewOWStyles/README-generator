import inquirer from 'inquirer';
import fs from "fs/promises"

let {
  description
} = await inquirer
  .prompt([{
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
    {
      type: 'input',
      name: 'contributions',
      message: "list any collaborators, feel free to link their github profiles",
    },
    {
      type: 'input',
      name: 'tests',
      message: "Describe how to use the application for someone seeing this README",
    },
    {
      type: 'input',
      name: 'githubName',
      message: "what is your github name? e.g. github.com/(githubName)",
    },
    {
      type: 'input',
      name: 'email',
      message: "what is your email address?",
    },

  ])

let READMEText = `
    # ${title}

    ## Description
      ${description}

    ## Table of Contents
      - [Installation](#installation)
      - [Usage](#usage)
      - [License](#license)
      - [Contributions](#contributions)
      - [Tests](#tests)
      - [Questions](#questions)

    ## Installation
      ${installation}

    ## Usage
      ${usage}

    ## License
      This project is licensed under the ${generateLicense(license)} license.
    
    ## Contributions
      ${contributions}

    ## Tests
      ${tests}
    
    ## Questions
    Created by [${githubName}](https://github.com/${githubName})  
    For questions or feedback, contact me at ${email}
`


fs.writeFile("README.md", READMEText)


function generateLicense() {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else {
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
  }
}