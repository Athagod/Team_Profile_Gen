const Employee = require("./Employee");

class Manager extends Employee {

    constructor(name, id, email, school) {

        super(name, id, email);
        this.officeNumber = this.officeNumber; 
    }

    getRole() {
        return "Manager"; 
    }

    getofficerNumber () {
        return this.officeNumber; 
    }
}

module.exports = Manager 