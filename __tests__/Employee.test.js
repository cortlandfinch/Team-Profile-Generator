const Employee = require('../lib/Employee');

test('a name is passed in for the new employee', () => {
    const name = new Name('Big Tony');

    expect(name.name).toBe('Big Tony');
});