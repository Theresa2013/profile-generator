const Engineer = require('../lib/Engineer');
const engineer = new Engineer('theresa', '5', 'tab61295@gmail.com', 'Theresa2013');

test('creates new engineer object', () => {
    expect(engineer.name).toBe('theresa');
    expect(engineer.id).toBe('5');
    expect(engineer.email).toBe('tab61295@gmail.com');
    expect(engineer.github).toBe('Theresa2013');
});

test('gets engineer name from the getName() method', () => {
    expect(engineer.getName()).toBe('theresa');
});

test('gets engineer id from the getId() method', () => {
    expect(engineer.getId()).toBe('5');
});

test('gets engineer email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('tab61295@gmail.com');
});

test('gets engineer github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('Theresa2013');
});

test('gets engineer role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});