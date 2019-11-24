const inquirer = require("inquirer");
const createTemplates = require("./generateHtml")
const createManager = createTemplates.createManager
const renderMain = createTemplates.renderMain

function askManagerQuestions(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the manager's name.",
                name: "name",
                validate: function validateName(name) {
                    return name !== '';
                }
            },
            {
                type: "input",
                message: "Enter the manager's id number.",
                name: "id",
                validate: function validateAge(id) {
                    var reg = /^\d+$/;
                    return reg.test(id) || "Id should be a number.";
                }
            },
            {
                type: "input",
                message: "Enter the manager's email.",
                name: "email",
                validate: function ValidateEmail(email) {
                    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    return reg.test(email) || "You have entered an invalid email address!"

                }
            },
            {
                type: "input",
                message: "Enter the manager's office number.",
                name: "officeNumber",
                validate: function validateAge(officeNumber) {
                    var reg = /^\d+$/;
                    return reg.test(officeNumber) || "Office Number should be a number.";
                }
            }
        ])
        .then(function( {name, id, email, officeNumber}){
            console.log({name, id, email, officeNumber})
            createManager(name, id, email, officeNumber)
            askNextMember()
        })
}

function askNextMember(){
    inquirer
    .prompt([
        {
           type: "list",
           message: "Select the next team member to add.",
           name: "choice",
           choices: ["Engineer", "Intern", "Don't add anybody else."]
        }
        
    ])
    .then(function ({ choice }){
        if (choice === "Engineer"){
            askEngineerQuestions()
        }
        else if(choice === "Intern"){
            askInternQuestions()
        }
        else if(choice === "Don't add anybody else."){
            renderMain
        }
    })
}

function askEngineerQuestions(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the engineer's name.",
                name: "name",
                validate: function validateName(name) {
                    return name !== '';
                }
            },
            {
                type: "input",
                message: "Enter the engineer's id number.",
                name: "id",
                validate: function validateAge(id) {
                    var reg = /^\d+$/;
                    return reg.test(id) || "Id should be a number.";
                }
            },
            {
                type: "input",
                message: "Enter the engineers's email.",
                name: "email",
                validate: function ValidateEmail(email) {
                    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    return reg.test(email) || "You have entered an invalid email address!"

                }
            },
            {
                type: "input",
                message: "Enter the engineer's github.",
                name: "github",
                validate: function validURL(github) {
                    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
                    return !!pattern.test(github);
                  }
            }
        ])
        .then(function(answers){
            console.log(answers)
            askNextMember()
        })
}
function askInternQuestions(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "Enter the intern's name.",
                name: "name",
                validate: function validateName(name) {
                    return name !== '';
                }
            },
            {
                type: "input",
                message: "Enter the intern's id number.",
                name: "id",
                validate: function validateAge(id) {
                    var reg = /^\d+$/;
                    return reg.test(id) || "Id should be a number.";
                }
            },
            {
                type: "input",
                message: "Enter the intern's email.",
                name: "email",
                validate: function ValidateEmail(email) {
                    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    return reg.test(email) || "You have entered an invalid email address!"

                }
            },
            {
                type: "input",
                message: "Enter the intern's school.",
                name: "school",
                validate: function validateSchool(name) {
                    return name !== '';
                }
            }
        ])
        .then(function(answers){
            console.log(answers)
            askNextMember()
        })
}
function init() {
    askManagerQuestions()
}

init();