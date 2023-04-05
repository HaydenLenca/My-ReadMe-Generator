// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents:
  ####[Description](#description)
  ####[Installation](#installations)
  ####[Usage](#usage)
  ####[Credits](#credits)
  ####[Links](#links)
  ####[Username](#username)
  ####[Email](#email)
  ####[Licnese](#license)
  ####[Badge](#badges)
  ####[Features](#features)
  

  ## description
  ${data.description}

  ## installation
  ${data.installations}

  ## usage 
  ${data.usage}

  ## contribution
  ${data.credits}

  ## links
  ${data.links}

  

  ## license 
  ${renderLicenseSection(data.license)} 
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Github Profile: https://github.com/${data.username}
  ## Contact Email: ${data.email}
`;
}

module.exports = generateMarkdown;
