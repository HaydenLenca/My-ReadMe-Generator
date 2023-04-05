// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

console.log('Welcome');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of the project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What installations are used:',
        name: 'installations',
    },
    {
        type: 'input',
        message: 'What is this project used for:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who helped build this project:',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What is the deployed url:',
        name: 'links',
    },
    {
        type: 'input',
        message: 'what is your github username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What license are you using',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'Apache License 2.0', 'N/A']
    },
    {
        type: 'input',
        message: 'What badges do you have',
        name: 'badges',
    },
    {
        type: 'input',
        message: 'What features does the project offer',
        name: 'features',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeToFile('readme.md', data, (err) =>
        err ? console.log(err) : console.log('File has been written.'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        writeToFile(generateMarkdown(answers))
    });
}

// Function call to initialize app
init();