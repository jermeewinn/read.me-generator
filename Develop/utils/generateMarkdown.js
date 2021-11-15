// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Collaboration](#collaboration)
  * [Licenses](#licenses)
  * [Testing](#testing)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Licenses
  The license we are using for this project is the ${data.licenses}.

  ## Testing
  ${data.testing}

  ## Questions
  The link to my GitHub profile can be found at: https://github.com/${data.questions1}.

  If you have any further questions, you can reach me directly at me email at:
  ${data.questions2}
`;
}

module.exports = generateMarkdown;
