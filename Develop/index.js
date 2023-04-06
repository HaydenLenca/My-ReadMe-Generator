// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

console.log("Welcome to Hayden Lenca's ReadMe generator");

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
        message: 'Installation Instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is this project used for:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test Instructions',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is the deployed url:',
        name: 'deployedLink',
    },
    {
        type: 'input',
        message: 'What is the github repo url:',
        name: 'repoLink',
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
        message: 'What license are you using:',
        name: 'license',
        choices: ['MIT License', 'GNU General Public License v3.0', 'Apache License 2.0', 'N/A']
    },
    {
        type: 'input',
        message: 'What badges do you have:',
        name: 'badges',
    },
    {
        type: 'input',
        message: 'What features does the project offer:',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Next is linking images. If you did not set up your project with a Assets folder please hit enter four times!',
        name: 'image',
    },
    {
        type: 'input',
        message: 'Add image one name:',
        name: 'imageOne',
    },
    {
        type: 'input',
        message: 'Add image two name:',
        name: 'imageTwo',
    },
    {
        type: 'input',
        message: 'Add image three name:',
        name: 'imageThree',
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./Sample/readme.md', data, (err) =>
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
