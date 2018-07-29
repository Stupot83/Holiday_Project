// Require in the Booking and Employee classes
const Booking = require("./booking.js");
const Employee = require("./employee.js");

// Include the file system module
var fs = require('fs');

// EmployeeStore class

class EmployeeStore {
    constructor() {
        this.employees = [];
    }

    // Function to add an employee to the EmployeeStore
    add(employee) {
        this.employees.push(employee)
    }

    // Function to remove the employee from the EmployeeStore
    remove(employee) {
        this.employees.pop(employee)
    }
    
    // Function to save employees from EmployeeStore into employeeStore.json file
    save() {

        var employeeList = this.employees

        fs.writeFile("./employeeStore.json", JSON.stringify(employeeList, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("Employee file has been amended" + '\n');
    });
}

    // Function to load the current contents of the employeeStore.json file
    load() {
        
        fs.readFile('employeeStore.json', (err, data) => {  
            if (err) throw err;
            let employeeStore = JSON.parse(data);
            console.log('Current contents of employee file' + '\n');  
            console.log(employeeStore);
        });
    }

    // Function to return in JSON format
    toJSON() {
        return (this)
    }

}

module.exports = EmployeeStore