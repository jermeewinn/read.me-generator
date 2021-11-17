// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = 
    ([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: title => {
                if (title) {
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
            choices: ['No License','MIT','MPL-2.0','Apache-2.0','BSL-1.0'],
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
            message: 'What is your GitHub username?',
            validate: questions1 => {
                if (questions1) {
                    return true;
                } else {
                    console.log('We need your GitHub username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions2',
            message: 'What is the best email address to contact you?',
            validate: questions2 => {
                if (questions2) {
                    return true;
                } else {
                    console.log('We need a way to contact you through email. Please provide an email address for us to reach you.');
                    return false;
                }
            }
        }
    ])
    // User answers go here
    
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
if(err) throw err;

console.log('Your README file has been created');
});

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => writeToFile('READ.md',generateMarkdown(data)))
    .catch((err) => {
        console.log('There was an error', err);
    })
}

// Function call to initialize app
init();
//Note to self. Make a folder called "output." Save the output READ.me files to this file.
//Check the curriculum in Module 9 to see how exactly one is able to save their work and where to targe the saved work.