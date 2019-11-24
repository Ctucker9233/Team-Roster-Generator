const fs = require('fs');
const templatesDir = "./templates";
const path = require('path')
const outputDir = "./output"
const employeeCreator = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let team = "";

function replacePlaceholders(template, placeholder, replacement)
{
    var regex = new RegExp("{{ "+placeholder+" }}", "g")
        var template = template.replace(regex, replacement);
        return template

}


const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getName());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getEmail());
    template = replacePlaceholders(template, "id", engineer.getId());
    template = replacePlaceholders(template, "github", engineer.getGithub());
    return team + template;
  };

  const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getName());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getEmail());
    template = replacePlaceholders(template, "id", intern.getId());
    template = replacePlaceholders(template, "github", intern.getGithub());
    return team + template;
  };

  const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getName());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getEmail());
    template = replacePlaceholders(template, "id", manager.getId());
    template = replacePlaceholders(template, "github", manager.getGithub());
    return team + template;
  };

function createManager(name, id, email, officeNumber){
    const manager = new Manager(name, id, email, officeNumber)
    console.log("manager: ", manager)
    renderManager(manager)
}

const renderMain = team =>{
    let masterTemplate = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8")
    masterTemplate = replacePlaceholders(masterTemplate, "team", team);
    let file = path.join(__dirname, 'output', "/index.html");
    fs.writeFileSync(file, masterTemplate);
}

  module.exports = {
      createManager: createManager,
      renderMain: renderMain
  }