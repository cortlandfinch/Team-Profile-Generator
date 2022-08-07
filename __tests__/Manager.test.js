const Manager = require('../lib/Manager');
// pretend employee
const manager = new Manager('Mr. Cookies', '654321', 'mrcookies@email.com', '987');

// jest.mock('../lib/Employee');

// test for employee input information
test ('return the input of manager', () => {
    expect(manager.name).toBe('Mr. Cookies');
    expect(manager.id).toBe('654321');
    expect(manager.email).toBe('mrcookies@email.com');
    expect(manager.officeNumber).toBe('987');

});

test ('return the input for name', () => {
    expect(manager.getName()).toBe('Mr. Cookies');
});

test ('return the input for id', () => {
    expect(manager.getId()).toBe('654321');
});

test ('return the input for email', () => {
    expect(manager.getEmail()).toBe('mrcookies@email.com');
});

test ('return the input for office number', () => {
    expect(manager.getOfficeNumber()).toBe('987');
});

test ('return to check if employee is returned', () => {
    expect(manager.getRole()).toBe('Manager');
});