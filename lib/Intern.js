const Employee = require('./Employee');

class Intern extends Employee {
    // using constructor for vairables of Intern
    constructor(name, id, email, school){
        // using super for items required from Employee
        super(name, id, email);
        // using this. to pull school specifically from Intern
        this.school = school;
    };

    getSchool() {
        // return this.school to return user input of school
        return this.school;
    };
    // Overridden to return intern
    getRole() {
        // return Intern in quotes to return Intern as a word and not name of Intern
        return "Intern";
    };
};

module.exports = Intern;