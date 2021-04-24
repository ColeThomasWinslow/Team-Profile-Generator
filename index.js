const inquirer = require("inquirer");
const fs = require('fs');


const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Profile Generator</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<div>
  <div class="card">
  <h3 class="position">${answers.position}</h3>
    <h3 class="name">${answers.name}</h3>
    <ul class="elementBody">
      <li class="element"> Manager ID : ${answers.Id} </li>
      <li class="element"> Email : ${answers.Email}</li>
      <li class="element"> Office : ${answers.Office}</li>
    </ul>
  </div>
</div>
</body>
</html>`;
inquirer.prompt([
  {
    type: 'list',
    message: "What Position do you want to add",
    name: "position",
    choices: ["Developer", "Manager", "Intern"],
  },
  {
    type: "input",
    message: "What is this Employee name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is the Employee ID?",
    name: "Id",
  },
  {
    type: "input",
    message: "What is the Employee Email:",
    name: "Email",
  },
  {
    type: "list",
    message: "What Office Location does the employee work out of?",
    name: "Office",
    choices: ["Phoenix", "Glendale", "Mesa"],
  },
])
.then((answers) => {
  const htmlPageContent = generateHTML(answers);

  fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created the Employee Card')
  );
});
