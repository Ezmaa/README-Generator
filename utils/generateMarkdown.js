// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let badge = "";

  if(license === "MIT") {
    badge = '![GitHub](https://img.shields.io/github/license/Ezmaa/README-Generator)'
  } else if (license = 'Apache License 2.0') {
    badge = '![License](https://img.shields.io/github/license/Ezmaa/README-Generator)'
  } else if (license = 'GNU General Public License v3.0') {
    badge = '![License](![License: GPL v3](https://img.shields.io/github/license/Ezmaa/README-Generator))'
  } else {
     badge = ""
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

    if(license === 'MIT') {
      licenseLink = 'http://choosealicense.com/licenses/mit/'
    } else if (license === 'Apache License 2.0') {
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
    } else if (license === 'GNU General Public License v3.0') {
      licenseLink = 'https://www.gnu.org/licenses'
    } else {
      licenseLink = ''
    }
    return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSect = ""
  if(license === 'None') {
    licenseSect = ''
  } else {
    licenseSect =
    `License: ${license}`
  }
  return licenseSect;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
# ${renderLicenseLink(data.license)}

https://github.com/${data.name}/${data.title}
# Description
${data.description}
# Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation 
Please install the ${data.installation} dependencey in order to run the application.
# Usage
In order to run the application use the command: ${data.command}
# License 
This README.md generator is licensed under the ${data.license} license.
# Contributing
${data.contributions}
# Questions:
* Email: ${data.email}
* Github: https://github.com/${data.name}

`;
}

module.exports = generateMarkdown;
