// Variables, nodes, file imports
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employees = []

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// function creating employee cards
employeeCreator()
function employeeCreator() {
    inquirer.prompt({
        
            type: "list",
            message: "Enter employee role.",
            name: "role",
            choices: ["Manager", "Engineer", "Intern", "Quit"]
    })
        // switch function creating choices for what type of card to create
        .then(function ({ role }) {
            switch (role) {
                case "Manager":
                    createManager();
                    break;
               
            case "Engineer":
                createEngineer()
                break;
            
            case "Intern":
                createIntern()
                break;
                
            default: 
                createPage()       
            
        }
        
    })
}

function createManager() {
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
            type: "input",
            message: "Enter employee email.",
            name: "email"
        },
        {
        type: "input",
        message: "Enter your office number",
        name: "officeNumber"
        }])
        // create employee information and push to employee array
        .then (answer => {
            const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            employees.push(newManager);
            console.log(employees)
            employeeCreator()
        })
}

function createEngineer() {
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
            type: "input",
            message: "Enter employee email.",
            name: "email"
        },
        {
        type: "input",
        message: "Enter your github url",
        name: "github"
    }])
    .then (answer => {
        const newEngineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
        employees.push(newEngineer);
        console.log(employees)
        employeeCreator()
    })
}
function createIntern() {
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
            type: "input",
            message: "Enter employee email.",
            name: "email"
        },
        {
        type: "input",
        message: "Enter your school",
        name: "school"
    }])
    .then (answer => {
        const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school);
        employees.push(newIntern);
        console.log(employees)
        employeeCreator()
    })
}

// creates new html with all employee info after choosing "Quit"
function createPage() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(employees), "utf-8");
};
