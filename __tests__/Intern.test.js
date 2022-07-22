const Intern = require('../lib/Intern');
const intern = new Intern('brooklyn', '6', 'brooklyn@gmail.com', 'Kirkwood');

test('creates new intern object', () => {
    expect(intern.name).toBe('brooklyn');
    expect(intern.id).toBe('6');
    expect(intern.email).toBe('brooklyn@gmail.com');
    expect(intern.school).toBe('Kirkwood');
});

test('gets intern name from the getName() method', () => {
    expect(intern.getName()).toBe('brooklyn');
});

test('gets intern id from the getId() method', () => {
    expect(intern.getId()).toBe('6');
});

test('gets intern email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('brooklyn@gmail.com');
});

test('gets intern school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Kirkwood');
});

test('gets intern role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});