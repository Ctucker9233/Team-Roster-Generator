const employeeCreator = require("./lib/employee");
const Manager = require("./lib/manager");
const inquirer = require("inquirer")

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email?"
        },
        {
            type: "list",
            name: "roll",
            message: "What is the employee's role?",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ])
    .then(function ({ name, id, email, roll }) {
        switch (roll) {
            case "Manager":
                {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "officeNumber",
                                message: "What is the manager's office number?"
                            }
                        ])
                        .then(function ({ officeNumber }) {
                            const manager = new Manager(name, id, email, officeNumber);
                        })

                }
            case "Engineer":
                {
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "github",
                                message: "What is the engineer's github page?"
                            }
                        ])
                }
        }
    })