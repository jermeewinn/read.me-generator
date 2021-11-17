// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  if (licenses == 'MIT') {
    return `https://img.shields.io/badge/License-MIT-red.svg`
  };
  if (licenses == 'MPL-2.0') {
    return `https://img.shields.io/badge/License-Mozilla2.0-orange.svg`
  };
  if (licenses == 'Apache-2.0') {
    return `https://img.shields.io/badge/License-Apache2.0-yellow.svg`
  };
  if (licenses == 'BSL-1.0') {
    return `https://img.shields.io/badge/License-Boost1.0-green.svg`
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  if (licenses == 'No License') {
    return `https://choosealicense.com/no-permission/`
  };
  if (licenses == 'MIT') {
    return `https://opensource.org/licenses/MIT`
  };
  if (licenses == 'MPL-2.0') {
    return `https://opensource.org/licenses/MPL-2.0`
  };
  if (licenses == 'Apache-2.0') {
    return `https://opensource.org/licenses/Apache-2.0`
  };
  if (licenses == 'BSL-1.0') {
    return `https://opensource.org/licenses/BSL-1.0`
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  if (licenses == 'No ') {
    return ''
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Collaboration](#Collaboration)
  * [Licenses](#Licenses)
  * [Testing](#Testing)
  * [Questions](#Questions)
  
  ## Installation
  ${data.installation}

  ## Licenses
  ![licenses](${renderLicenseBadge(data.licenses)})

  The license we are using for this project is the ${data.licenses}.

  Terms and conditions of this license can be found here: 
  ${renderLicenseLink(data.licenses)}

  ## Collaboration
  If you would like to contribute to this project, please do the following:
  1) Read through the Contributor Covenenat at https://www.contributor-covenant.org/version/2/1/code_of_conduct/.
  2) Contact the project owner. Contact information can be found in the "Questions" section

  
  ## Testing
  ${data.testing}

  ## Questions
  The link to my GitHub profile can be found at: https://github.com/${data.questions1}.

  If you have any further questions, you can reach me directly at me email at:
  ${data.questions2}
`;
}

module.exports = generateMarkdown;
