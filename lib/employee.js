const inquirer = require("inquirer")
class Employee{
    constructor(name, id, email){
        this.name = name;
        this.id =id;
        this.email = email;
        this.title = "Employee"
        getName() {
            this.name;
        }
        
        getId() = function(){
            return this.id;
        }
        this.getEmail = function(){
            return this.email;
        }
        this.getRole = function(){
            return this.title;
        }
    }
    // set name(){
    //     this.name = inquirer.prompt("What is the employee's name?")
    // }
    // set id(){
    //     this.id = inquirer.prompt("What is the employee's id?")
    // }
}

module.exports = Employee;