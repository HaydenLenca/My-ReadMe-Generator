// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge = '';
  if(license == 'MIT'){
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)'
  }else if(license == 'GNU'){
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else if (license == 'Apache'){
    badge = '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  else{
    badge = ' ';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let link = '';
  if(license == 'MIT'){
    link = 'https://www.mit.edu/~amini/LICENSE.md'
  }else if(license == 'GNU'){
    link = 'https://www.gnu.org/licenses/';
  }else if(license == 'Apache'){
    link = 'https://www.apache.org/licenses/LICENSE-2.0';
  }
  else {
    link = ' ';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  let section = "";
  if(license == 'N/A'){
    section = "";
  }else{
    section = ('License: ', license)
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} \n
  
  ### Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Contribution](#contribution)
  * [Usage](#usage)
  * [Links](#links)
  * [Features](#features)
  * [License](#license)
  * [Questions](#questions)
  \n

  ### Installation
  ${data.installation}

  ### Contribution
  ${data.contribution}

  ### Tests
  ${data.test}
 
  ### Usage 
  ${data.usage}
  ![imageOne](./Assets/Images/${data.imageOne})
  ![imageTwo](./Assets/Images/${data.imageTwo})
  ![imageThree](./Assets/Images/${data.imageThree})

  ### Links
  [Git Hub](${data.repolink})
  [Deployed Site](${data.deployedlink})

  ### Features
  ${data.features}

  ### License 
  ${renderLicenseSection(data.license)} \n
  ${renderLicenseLink(data.license)}

  ### Questions
  #### Github: https://github.com/${data.username}
  #### Contact Email: ${data.email}
`;
}

module.exports = generateMarkdown;
