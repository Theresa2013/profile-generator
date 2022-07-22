const Manager = require('../lib/Manager');
const manager = new Manager('joe', '8', 'joe@gmail.com', '1768');

test('creates new manager object', () => {
    expect(manager.name).toBe('joe');
    expect(manager.id).toBe('8');
    expect(manager.email).toBe('joe@gmail.com');
    expect(manager.officeNumber).toBe('1768');
});

test('gets managers name from the getName() method', () => {
    expect(manager.getName()).toBe('joe');
});

test('gets managers id from the getId() method', () => {
    expect(manager.getId()).toBe('8');
});

test('gets managers email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('joe@gmail.com');
});

test('gets managers office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('1768');
});

test('gets managers role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});