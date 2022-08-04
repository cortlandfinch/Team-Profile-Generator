// Packages needed for this application
// Declaring reference to element using const for constant reference
// using node.js require statement to access fs, inquirer, Engineer, Employee, Intern, generateTeam to access the modules functions by the const assignment

const fs = require("fs");
const inquirer = require('inquirer');
const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');
// Array for user to add in team member information for Manager, Engineer, Employees, and Intern
// Array for Manager input
const manager = [
    {
        type: 'input',
        name: 'name',
        message: 'Provide your first and last name (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter a name in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Provide your assigned 6 digit ID number. (Required)',
        validate: idInput => {
            if (idInput >= 000000 && idInput <= 999999) {
                return true;
            } else {
                console.log('You need to enter an ID in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Provide your assigned employee email address. (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You need to enter an email in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNum',
        message: 'Provide your assigned office number. (Required)',
        validate: officeNumInput => {
            if (officeNumInput) {
                return true;
            } else {
                console.log('You need to enter an office number in this required field!');
                return false;
            }
        }
    }
];