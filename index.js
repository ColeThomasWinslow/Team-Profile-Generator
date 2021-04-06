const inquirer = require("inquirer");
inquirer.prompt([
  {
    type: "input",
    message: "Who is your Manager for this team?",
    name: "manager",
  },
  {
    type: "input",
    message: "What is the manager ID?",
    name: "managerId",
  },
  {
    type: "input",
    message: "Manager Email:",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Managers office:",
    name: "managerOffice",
  },
  {
    type: "list",
    message: "Managers office:",
    name: "What would you like to update?",
    choices: ["add a developer", "add a manager", "show teams "],
  },
]);
//   .then((response) =>

//   );
