const Employee = require('../lib/Employee');
// pretend employee
const employee = new Employee('Mr. Muffins', '123456', 'mrmuffins@email.com');

// jest.mock('../lib/Employee');

// test for employee input information
test ('return the input of employee', () => {
    expect(employee.name).toBe('Mr. Muffins');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('mrmuffins@email.com');
});

test ('return the input for name', () => {
    expect(employee.getName()).toBe('Mr. Muffins');
});

test ('return the input for id', () => {
    expect(employee.getId()).toBe('123456');
});

test ('return the input for email', () => {
    expect(employee.getEmail()).toBe('mrmuffins@email.com');
});

test ('return to check if employee is returned', () => {
    expect(employee.getRole()).toBe('Employee');
});
