// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
  "What's your project called?",
  "Whats is your description?",
  "What are your installation?",
  "What is your usage?",
  "What are you contributing?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "location",
        message: "Where are you from?",
      },
      {
        type: "input",
        name: "hobby",
        message: "What is your favorite hobby?",
      },
      {
        type: "input",
        name: "food",
        message: "What is your favorite food?",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username",
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL.",
      },
    ])
    .then((answers) => {
      const htmlPageContent = generateHTML(answers);

      fs.writeFile("README.md", htmlPageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md")
      );
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
