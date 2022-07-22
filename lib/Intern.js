const Employee = require('./Employee');

// Engineer constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent constructor
        super(name, id, email);

        this.school = school;
    }

    // github return
    getSchool() {
        return this.school;
    }

    // type of employee return
    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;