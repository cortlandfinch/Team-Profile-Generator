// using class employee with constructor method to set name, id, and email of employee
// using module.exports equal to Employee to send as module
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `${this.name}`;
    }

    getId() {
        return `${this.id}`;
    }

    getEmail() {
        return `${this.email}`;
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;