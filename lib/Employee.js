// Employee constructor
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // name return
    getName() {
        return this.name;
    }

    // id return
    getId() {
        return this.id;
    }

    // email return
    getEmail() {
        return this.email;
    }

    // type of employee return
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee
