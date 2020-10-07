const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employees = []

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

function employeeCreator() {
    inquirer.prompt({
        {
            type: "list",
            message: "role",
            name: "Enter employee role.",
            choices: ["Manager", "Engineer", "Intern", "Quit"]
        }).then(function ({ choice }) {
            switch (choice) {
                case "Manager":
                    creatManager();
                    break;
               
            case "Engineer":
                createEngineer()
                break;
            
            case "Intern":
                createIntern()
                break;
        
                case "Quit":
                    
                    break;
        
            
            
        }
        
    })
}

function creatManager() {
    inquirer.prompt([
        {
        type: "input",
        message: "Enter employee name.",
        name: "name"
    },
        {
            type: "input",
            message: "Enter employee ID.",
            name: "id"
        },
        {
            type: "email",
            message: "Enter employee email.",
            name: "email"
        },
        {
        type: "input",
        message: "Enter your office number",
        name: "officeNumber"
    }])
        .then(function ({ officeNumber }) {
            const newManager = new Manager(name, id, email, officeNumber);
            employees.push(newManager);
            console.log(employees)
            employeeCreator()
        })
}

function creatEngineer() {
    inquirer.prompt([
        {
        type: "input",
        message: "Enter employee name.",
        name: "name"
    },
        {
            type: "input",
            message: "Enter employee ID.",
            name: "id"
        },
        {
            type: "email",
            message: "Enter employee email.",
            name: "email"
        },
        {
        type: "input",
        message: "Enter your github url",
        name: "github"
    }])
        .then(function ({ github }) {
            const newEngineer = new Engineer(name, id, email, github);
            employees.push(newEngineer);
            console.log(employees)
            employeeCreator()
        })
}
function creatIntern() {
    inquirer.prompt([
        {
        type: "input",
        message: "Enter employee name.",
        name: "name"
    },
        {
            type: "input",
            message: "Enter employee ID.",
            name: "id"
        },
        {
            type: "email",
            message: "Enter employee email.",
            name: "email"
        },
        {
        type: "input",
        message: "Enter your school",
        name: "school"
    }])
        .then(function ({ school }) {
            const newIntern = new Intern(name, id, email, school);
            employees.push(newIntern);
            console.log(employees)
            employeeCreator()
        })
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
