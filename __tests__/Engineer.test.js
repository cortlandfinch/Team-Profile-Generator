const Engineer = require('../lib/Engineer');
// pretend employee
const engineer = new Engineer('Mr. Chief', '987654', 'mrchief@email.com', 'chiefpaws');

// jest.mock('../lib/Employee');

// test for employee input information
test ('return the input of engineer', () => {
    expect(engineer.name).toBe('Mr. Chief');
    expect(engineer.id).toBe('987654');
    expect(engineer.email).toBe('mrchief@email.com');
    expect(engineer.gitHub).toBe('chiefpaws');

});

test ('return the input for name', () => {
    expect(engineer.getName()).toBe('Mr. Chief');
});

test ('return the input for id', () => {
    expect(engineer.getId()).toBe('987654');
});

test ('return the input for email', () => {
    expect(engineer.getEmail()).toBe('mrchief@email.com');
});

test ('return the input for GitHub', () => {
    expect(engineer.getGitHub()).toBe('chiefpaws');
});

test ('return to check if employee is returned', () => {
    expect(engineer.getRole()).toBe('Engineer');
});