// Require the mocha and chai modules for testing
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;

var Employee = require('../models/employee.js')
var Booking = require('../models/booking.js')

var employee = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25)

// Testing of the Employee Class

describe("Testing Employee Class" + '\n', function() {
    describe("Instantiate a new Employee", function() {
        it("should create Employee payrollNo", function() {
            expect(employee.payrollNo).to.eql("E123");
        });
        it("should create Employee name", function() {
            expect(employee.name).to.eql("Joe Bloggs");
        });
        it("should create Employee email address", function() {
            expect(employee.email).to.eql("joe@bloggs.com");
        });
        it("should create empty Employee bookings array", function() {
            expect(employee._bookings).to.eql([]);
        })
        it("should create Employee holiday allowance", function(){
            expect(employee.holidayAllowance).to.eql(25);
        });
        it("should expect Employee to have all above properties" + '\n', function() {
            expect(employee).to.have.all.keys('payrollNo','name','email',
            'holidayAllowance','_bookings','daysAuthorized','daysBookedOff')
        });
    })

    describe("Initial Holiday Allowance", function() {
        it("should create number of days holiday remaining", function(){
            expect(employee.daysRemaining()).to.eql(25);
        });
        it("should create number of days holiday booked", function() {
            expect(employee.daysBooked()).to.eql(0);
        });
        it("should create number of days booked and authorized" + '\n', function() {
            expect(employee.daysBookedAndAuthorized()).to.eql(0);
        });
    })

    describe("Test PastBookings Initial", function() {
        it("returns empty array of PastBookings" + '\n', function() {
            expect(employee.pastBookings()).to.eql([]);
        });
    })

    describe("Test FutureBookings Initial", function() {
        it("returns empty array of PastBookings" + '\n', function() {
            expect(employee.futureBookings()).to.eql([]);
        });
    })

    describe("Making a Booking", function() {
        it("should update days remaining", function() { 
            employee.makeBooking("2018-09-01","2018-09-05")
            employee.makeBooking("2018-01-01","2018-01-05")
            expect(employee.daysRemaining()).to.eql(15);
         });
        it("should update days booked", function() { 
            expect(employee.daysBooked()).to.eql(10);
        });
        it("shouldn't update days booked and Authorized", function() { 
            expect(employee.daysBookedAndAuthorized()).to.eql(0);
        });
        it("should increase length of _bookings array", function() { 
            expect(employee._bookings.length).to.eql(2);
        });
        it("first booking should not be authorized", function() {
            expect(employee._bookings[0].isAuthorized()).to.eql(false);
        });
        it("second booking should not be authorized", function() {
            expect(employee._bookings[1].isAuthorized()).to.eql(false);
        });
        it("should show first booking has no authorizer", function() {
            expect(employee._bookings[0].approver).to.eql(null);
        });
        it("should show second booking has no authorizer", function() {
            expect(employee._bookings[1].approver).to.eql(null);
        });
        it("should show first booking has no authorized date", function() {
            expect(employee._bookings[0].approvedOnDate).to.eql(null);
        });
        it("should show second booking has no authorized date", function() {
            expect(employee._bookings[1].approvedOnDate).to.eql(null);
        });
        it("should expect _bookings to have one property" + '\n', function() {
            expect(employee._bookings).to.have.all.keys('0', '1')
        });
    })

    describe("Authorization of an Employees Booking", function() {
        it("first booking from Employee Booking array can be authorized by a manager", function() {
            employee._bookings[0].authorize("Mr Boss Man")
            expect(employee._bookings[0].isAuthorized()).to.eql(true);
        });
        it("first booking from Employee Booking array will show name of authorizer", function() {
            expect(employee._bookings[0].approver).to.eql("Mr Boss Man");
        });
        it("first booking from Employee Booking array will show date of authorization", function() {
            expect(employee._bookings[0].approvedOnDate).to.eql(new Date().toLocaleDateString());
        });
        it("should update number of days Authorized for Employee", function() {
            expect(employee.daysBookedAndAuthorized()).to.eql(5);
        });
        it("second booking from Employee Booking array can be authorized by a manager", function() {
            employee._bookings[1].authorize("Mr John Smith")
            expect(employee._bookings[1].isAuthorized()).to.eql(true);
        });
        it("second booking from Employee Booking array will show name of authorizer", function() {
            expect(employee._bookings[1].approver).to.eql("Mr John Smith");
        });
        it("second booking from Employee Booking array will show date of authorization", function() {
            expect(employee._bookings[1].approvedOnDate).to.eql(new Date().toLocaleDateString());
        });
        it("should update number of days Authorized for Employee", function() {
            expect(employee.daysBookedAndAuthorized()).to.eql(10);
        });
        it("should expect _bookings to have one property" + '\n', function() {
        expect(employee._bookings).to.have.all.keys('0', '1')
        });
    })
    
    describe("Data Types for Bookings", function() {
        it("booking Array should have the correct data type", function() {
            expect(typeof employee._bookings).to.eql(typeof (new Booking))
        });
        it("booking Array should have the correct data type", function() {
            expect(typeof employee.pastBookings()).to.eql(typeof (new Booking))
        });
        it("booking Array should have the correct data type" + '\n', function() {
            expect(typeof employee.futureBookings()).to.eql(typeof (new Booking))
        });
    })
    
    describe("Test PastBookings When Populated", function() {
        it("Should only see authorized past bookings in array", function() {
            expect(employee.pastBookings(true)[0].isAuthorized()).to.eql(true);
        });
        it("Should show 5 days booked in past bookings array", function () {
            expect(employee.pastBookings()[0].numberOfDays()).to.eql(5)
        });
        it("Should have one booking in the array", function() {
            expect(employee.pastBookings().length).to.eql(1)
        });
        it("should expect past bookings to have one property" + '\n', function() {
            expect(employee.pastBookings()).to.have.all.keys('0')
        });
    })

    describe("Test FutureBookings When Populated", function() {
        it("Should only see authorized future bookings in array", function() {
            expect(employee.futureBookings(true)[0].isAuthorized()).to.eql(true);
        });
        it("Should show 5 days booked in future bookings array", function () {
            expect(employee.futureBookings()[0].numberOfDays()).to.eql(5)
        });
        it("Should have one booking in the array", function() {
            expect(employee.futureBookings().length).to.eql(1)
        });
        it("should expect past bookings to have one property" + '\n', function() {
            expect(employee.pastBookings()).to.have.all.keys('0')
        });
    });
    
    describe("Test throw error when trying to manipulate a booking", function() {
        it("Should throw an error when manipulating bookings" + '\n', function() {
            expect(function() { employee.bookings = "nonsense"; }).to.throw("Exception: You cannot manipulate bookings")
        });
        })

    describe("Test throw error when trying to manipulate a booking", function() {
        it("Should throw an error when manipulating bookings" + '\n', function() {
            expect(function() { employee.makeBooking("2018-10-01","2018-10-30") }).to.throw("Holiday allowance exceeded please try again")
        });
    })
})