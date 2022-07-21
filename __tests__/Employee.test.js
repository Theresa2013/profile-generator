// import Employee constructor
const Employee = require('../lib/Employee');

// employee object
test("creates a new employee object", () => {
    const employee = new Employee('John Doe', '1', 'johndoe@email.com');

    expect(employee.name).toBe('John Doe');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('johndoe@email.com');
});

test("gets employee's name", () => {
    const employee = new Employee('John Doe', '1', 'johndoe@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining('John Doe'));
});

test("gets employee's ID", () => {
    const employee = new Employee('John Doe', '1', 'johndoe@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining('1'));
});

test("gets employee's email", () => {
    const employee = new Employee('John Doe', '1', 'johndoe@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('johndoe@email.com'));
});

test("gets employee's role", () => {
    const employee = new Employee('John Doe', '1', 'johndoe@email.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});