// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is your Title?",
      },
      {
        type: "input",
        name: "Description",
        message: "What is your description?",
      },
      {
        type: "input",
        name: "Installation",
        message: "What are your installation requirements?",
      },
      {
        type: "input",
        name: "Usage",
        message: "What is your Usage?",
      },
      {
        type: "input",
        name: "Contributing",
        message: "What are you contributing?",
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL.",
      },
      {
        type: "input",
        name: "Github",
        message: "Enter your Github URL.",
      },
      {
        type: "list",
        name: "License",
        message: "Choose a License from the following:",
        choices: ["Apache license 2.0", "Boost Software License 1.0"],
      },
    ])
    .then((answers) => {
      const readmePageContent = generateMarkdown(answers);

      fs.writeFile("README.md", readmePageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created Readme!")
      );
    });
};
// TODO: Create a function to initialize app
const init = () => {
  promptUser();
  // // .then((answers) => writeFile("README.md", promptUser(answers)))
  // .then(() => console.log("Successfully wrote to Readme"))
  // .catch((err) => console.error(err));
};

init();
