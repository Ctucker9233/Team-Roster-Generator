const employeeCreator = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");

function init() {
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
                                console.log(manager);
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
                            .then(function ({ github }) {
                                const engineer = new Engineer(name, id, email, github)
                                console.log(engineer)
                            })
                    }
                case "Intern":
                    {
                        inquirer
                            .prompt([
                                {
                                    type: "input",
                                    name: "school",
                                    message: "Where does the intern go to school?"
                                }
                            ])
                            .then(function({ school }){
                                const intern = new Intern(name, id, email, school)
                                console.log(intern)
                            })
                    }
                break;

            }
        })
}

init();