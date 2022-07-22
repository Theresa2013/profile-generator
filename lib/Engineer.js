const Employee = require('./Employee');

// Engineer constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call parent constructor
        super(name, id, email);

        this.github = github;
    }

    // github return
    getGithub() {
        return this.github;
    }

    // type of employee return
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;