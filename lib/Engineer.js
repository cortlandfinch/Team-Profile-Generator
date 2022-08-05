const Employee = require('./Employee')

class Engineer extends Employee {
    // using constructor for variables  of Engineer
    constructor(name, id, email, gitHub) {
        // using super for items required from Employee
        super(name, id, email);
        // using this. to pull gitHub specifically from Engineer
        this.gitHub = gitHub;
    };

    getGitHub() {
        // return this.gitHub to return user input of gitHub
        return this.gitHub;
    };
    // Overridden to return engineer
    getRole() {
        // return Engineer in quotes to return Engineer as a word and not name of Engineer
        return 'Engineer';
    };
};

module.exports = Engineer;