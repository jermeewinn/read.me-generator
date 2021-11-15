// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project?',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please provide the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'What does your project do?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use your application, and examples of its use.'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Which license are you using for your project?',
            choices: ['No License','MIT License','Mozilla Public License 2.0','Apache License 2.0','Boost Software License 1.0'],
            validate: licenses => {
                if (licenses) {
                    return true;
                } else {
                    console.log('Please provide a license you are using. If you are using none of the licenses listed, then choose "No License."');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How would you go about testing your application?'
        },
        {
            type: 'input',
            name: 'questions1',
            message: 'Enter the link to your the GitHub repository for your project.',
            validate: questions1 => {
                if (questions1) {
                    return true;
                } else {
                    console.log('We need a link to the GitHub repository in order to create a quality READ.me file.');
                    return false;
                }
            }
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
