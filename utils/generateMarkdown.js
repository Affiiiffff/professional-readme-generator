// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## license 
    The project ${license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project title :
   ${data.title}
  ${renderLicenseBadge(data.license)}
  # Description : 
  ${data.Description}
  # Installation :
   ${data.Installation}
  # Usage :
   ${data.Usage}
  ${renderLicenseLink(data.license)}
  # Contributing ;
   ${data.Contributing}
  # linkedin : 
  ${data.linkedin}
  # Github ; 
  ${data.Github}
  # License : 
  ${data.license}
  ${renderLicenseSection(data.license)}


  
  `;
}

module.exports = generateMarkdown;
