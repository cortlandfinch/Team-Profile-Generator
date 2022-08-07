const Employee = require('./Employee')

class Manager extends Employee {
    // using constructor for variables  of Manager
    constructor(name, id, email, officeNumber) {
        // using super for items required from Employee
        super(name, id, email);
        // using this. to pull officenumber specifically from Manager
        this.officeNumber = officeNumber;
    };
    
    getOfficeNumber() {
        // return this.officeNumber to return user input of office number
        return this.officeNumber;
    };
    // Overridden to return manager
    getRole() {
        // return Manager in quotes to return Manager as a word and not name of Manager
        return "Manager";
    };
};

module.exports = Manager;