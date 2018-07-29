// Require the mocha and chai modules for testing
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;

var Employee = require('../models/employee.js');
var Booking = require('../models/booking.js');
var EmployeeStore = require('../models/EmployeeStore');

var EmployeeStore = new EmployeeStore;
var employee1 = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25);
var employee2 = new Employee("E124", "jon harris", "jon@harris.com", 25);

// Testing of the EmployeeStore class

describe("Testing EmployeeStore Class" + '\n', function() {
    describe("instantiate a new EmployeeStore", function () {
        it("should create a new EmployeeStore", function() {
            expect(EmployeeStore).to.eql({employees: []});
        });
        it("should have an empty array of employees", function() {
            expect(EmployeeStore.employees).to.eql([]);
        });
        it("should have the properties as described", function() {
            expect(EmployeeStore).to.have.all.keys("employees");
        });
        it("booking Array should have the correct data type" + '\n', function() {
            expect(typeof EmployeeStore.employees).to.eql(typeof (new Array));
        });
    })

    describe("Adding an employee to the EmployeeStore", function() {
        it("add an employee to the EmployeeStore" + '\n', function () {
            EmployeeStore.add(employee1);
            expect(EmployeeStore.employees).to.eql([{"bookingsList": [],"holidayApproved": 0,
            "holidayBooked": 0,"email": "joe@bloggs.com","holidayAllowance": 25,"name": "Joe Bloggs","payrollNo": "E123"}]);
        });
    })

    describe("Removing an employee to the EmployeeStore", function() {
        it("add an employee to the EmployeeStore" + '\n', function () {
            EmployeeStore.remove(employee1);
            expect(EmployeeStore.employees).to.eql([]);
        });
    })

    describe("Testing writing to the file, employeeStore.json", function() {
        it("should write employees from EmployeeStore to the file" + '\n', function() {
            EmployeeStore.add(employee1);
            EmployeeStore.add(employee2);
            EmployeeStore.save();
        });
    })

    describe("Testing loading the contents of the file, employeeStore.json", function() {
        it("should load employees from EmployeeStore" + '\n', function() {
            EmployeeStore.load();
        });
    })
})
