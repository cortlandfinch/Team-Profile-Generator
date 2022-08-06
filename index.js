// Packages needed for this application
// Declaring reference to element using const for constant reference
// using node.js require statement to access fs, inquirer, Manager, Engineer, Employee, Intern, generateTeam to access the modules functions by the const assignment
const fs = require('fs');
const inquirer = require('inquirer');
// Employee is not needed to add
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateTeam = require('./utils/generateTeam.js');
// empty array to pass in teamProfile 
const teamProfile = [];

const employeeInput = () => {
// Array for Manager input required fields for user, first so manager will be prompted to choose team after inputing information
const managerInput = () => {
    inquirer.prompt([
    {    
        type: 'input',
        name: 'managerName',
        message: 'As Manager, please provide your first and last name (Required)',
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
    }])
        .then((data) => {
            const getManager = new Manager(data) 
            teamProfile.push(getManager)
            chooseTeam();
        })
        .catch((error) => {
            console.log(error)
        })
};

// prompt user to choose which team member they would like to add, once user chooses that team members questions will prompt
const chooseTeam = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'profile',
            message: 'Choose which team members you would like to add to your Team Profile:',
            choices: ['Engineer', 'Intern', 'Done']
        }
    ])
    .then(teamChoice => {
        // takes user to selected team member choices
        // using switch statement to select specific code block selected
        switch (teamChoice.profile) {
            // engineer input array
            case 'Engineer':
                engineerInput();
                break;
            // intern input array
            case 'Intern':
                internInput();
                break;
            // will generate the user input with team members for profile through html
            default:
                generateProfile();
        }
    })
}

// Array for Engineer required fields
const engineerInput = () => {
    inquirer.prompt([
    {    
        type: 'input',
        name: 'engineerName',
        message: 'Provide your first and last name (Required)',
        validate: engineerNameInput => {
            if (engineerNameInput) {
                return true;
            } else {
                console.log('You need to enter a name in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'Provide your assigned 6 digit ID number. (Required)',
        validate: engineerIdInput => {
            if (engineerIdInput > 000000 && engineerIdInput < 999999) {
                return true;
            } else {
                console.log('You need to enter an ID in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Provide your assigned employee email address. (Required)',
        validate: engineerEmailInput => {
            if (engineerEmailInput) {
                return true;
            } else {
                console.log('You need to enter an email in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'Provide your GitHub username. (Required)',
        validate: engineerGithubInput => {
            if (engineerGithubInput) {
                return true;
            } else {
                console.log('You need to enter a GitHub name in this required field!');
                return false;
            }
        }
    }])
    .then((data) => {
        const getEngineer = new Engineer(data) 
        teamProfile.push(getEngineer)
        chooseTeam();
    })
    .catch((error) => {
        console.log(error)
    })
};

// Array for Intern input required fields
const internInput = () => {
    inquirer.prompt([
    {    
        type: 'input',
        name: 'internName',
        message: 'Provide your first and last name (Required)',
        validate: internNameInput => {
            if (internNameInput) {
                return true;
            } else {
                console.log('You need to enter a name in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internId',
        message: 'Provide your assigned 6 digit ID number. (Required)',
        validate: internIdInput => {
            if (internIdInput > 000000 || internIdInput < 999999) {
                return true;
            } else {
                console.log('You need to enter an ID in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Provide your assigned employee email address. (Required)',
        validate: internEmailInput => {
            if (internEmailInput) {
                return true;
            } else {
                console.log('You need to enter an email in this required field!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Provide your School name. (Required)',
        validate: internSchoolInput => {
            if (internSchoolInput) {
                return true;
            } else {
                console.log('You need to enter a school in this required field!');
                return false;
            }
        }
    }])
    .then((data) => {
        const getIntern = new Intern(data) 
        teamProfile.push(getIntern)
        chooseTeam();
    })
    .catch((error) => {
        console.log(error)
    })
};

const generateProfile = () => {
    fs.writeFileSync('./dist/index.html', generateTeam(teamProfile))
}
managerInput();
};

// run the team profile generator
employeeInput();