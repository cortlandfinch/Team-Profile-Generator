// Packages needed for this application
// Declaring reference to element using const for constant reference
// using node.js require statement to access fs, inquirer, Manager, Engineer, Employee, Intern, generateTeam to access the modules functions by the const assignment
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const generateTeam = require('./lib/generateTeam');
const { userInfo } = require("os");
// empty array to pass in teamProfile 
const teamProfile = [];

// prompt user to choose which team member they would like to add, once user chooses that team members questions will prompt
// const chooseTeam = () => {
//     return inquirer.prompt ([
//         {
//             type: 'list',
//             name: 'profile',
//             message: 'Choose which team member you are adding -',
//             choices: ['Manager', 'Engineer', 'Intern', 'Done']
//         }
//     ])
//     .then(teamChoice => {
//         // takes user to selected team member choices
//         switch (teamChoice.profile) {
//             // manager input array
//             case 'Manager':
//                 managerInput();
//                 break;
//             // engineer input array
//             case 'Engineer':
//                 engineerInput();
//                 break;
//             // intern input array
//             case 'Intern':
//                 internInput();
//                 break;
//             // will generate the user input with team members for profile through html
//             default:
//                 generateProfile();
//         }
//     })
// }

// Array for Manager input required fields
const managerInput = ([
    {    
        type: 'input',
        name: 'managerName',
        message: 'Provide your first and last name (Required)',
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log('You need to enter a name in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Provide your assigned 6 digit ID number. (Required)',
        validate: managerIdInput => {
            if (managerIdInput > 000000 && managerIdInput < 999999) {
                return true;
            } else {
                console.log('You need to enter an ID in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Provide your assigned employee email address. (Required)',
        validate: managerEmailInput => {
            if (managerEmailInput) {
                return true;
            } else {
                console.log('You need to enter an email in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'Provide your assigned office number. (Required)',
        validate: managerOfficeInput => {
            if (managerOfficeInput) {
                return true;
            } else {
                console.log('You need to enter an office number in this required field!');
                return false;
            }
        }
    }
]);

function generateManager() {
    return inquirer.prompt(managerInput)
        .then((data) => {
            const getManager = new Manager(data) 
            teamProfile.push(getManager)
        })
        .catch((error) => {
            console.log(error)
        })
};

generateManager();

// Array for Engineer required fields


