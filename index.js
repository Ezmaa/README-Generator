// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        }, 
        {
            type: "input",
            message: "What is the description of your project?",
            name: "description",
        }, 
        {
            type: "input",
            message: "What is your github username?",
            name: "name",
        }, 
        {
            type: "input",
            message: "What does the user need to install for this application?",
            name: "installation",
        }, 
        {
            type: "input",
            message: "What command is used to run this application?",
            name: "command",
        }, 
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
        {
            type: "input",
            message: "Who contributed to the project?",
            name: "contributions",
        },
        {
            type: "input",
            message: "What is the license being used?",
            name: "license",
        }, 
        {
            type: "input",
            message: "Table of Contents",
            name: "table of contents",
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("README Successfully Generated")
        }
    })
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
 }

// Function call to initialize app
init();
