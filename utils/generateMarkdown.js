// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
https://github.com/${data.name}/${data.title}
# Description
${data.description}
# Table of Contents
* [Installatioo]{#installation}
* [Usage]{#usage}
* [License]{#license}
* [Contributing]{#contributing}
* [Tests]{#tests}
* [Questions]{#questions}
# Installation 
${data.installation} is a required dependenci in order to run the application.
# Usage
In order to run the application, ${data.command}
# License 
This README.md generator is licensed under the ${data.license} license.
# Contributing 
Contributers: ${data.contributions}
# Contact Me:
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
