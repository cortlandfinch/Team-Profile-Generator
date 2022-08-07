const Intern = require('../lib/Intern');
// pretend employee
const intern = new Intern('Mr. Madden', '345678', 'mrmadden@email.com', 'Paws University');

// jest.mock('../lib/Employee');

// test for employee input information
test ('return the input of intern', () => {
    expect(intern.name).toBe('Mr. Madden');
    expect(intern.id).toBe('345678');
    expect(intern.email).toBe('mrmadden@email.com');
    expect(intern.school).toBe('Paws University');

});

test ('return the input for name', () => {
    expect(intern.getName()).toBe('Mr. Madden');
});

test ('return the input for id', () => {
    expect(intern.getId()).toBe('345678');
});

test ('return the input for email', () => {
    expect(intern.getEmail()).toBe('mrmadden@email.com');
});

test ('return the input for School', () => {
    expect(intern.getSchool()).toBe('Paws University');
});

test ('return to check if employee is returned', () => {
    expect(intern.getRole()).toBe('Intern');
});