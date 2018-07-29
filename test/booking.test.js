// Require the mocha and chai modules for testing
const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;

var Booking = require('../models/booking.js')

var booking = new Booking(new Date("2018-09-01"), new Date("2018-09-05"))

// Testing of the Booking Class

describe("Testing Booking class" + '\n', function() {
    describe("Instantiate a new Booking", function() {
        it("instantiates new booking with correct start date", function() {
            expect(booking.startDate).to.eql(new Date("2018-09-01"));
        });
        it("instantiates new booking with correct end date", function() {
            expect(booking.endDate).to.eql(new Date("2018-09-05"));
        });
        it("Should have the properties of a booking" + '\n', function() {
            expect(booking).to.have.all.keys('startDate','endDate','approved','approvedOnDate','approver')
        })
    })

    describe("Number of Days", function() {
        it("returns booking length in number of days" + '\n', function() {
            expect(booking.numberOfDays()).to.eql(5);
        });
    })
    describe("New booking Authorization", function() {
        it("new booking is not authorized when created", function() {
            expect(booking.isAuthorized()).to.eql(false);
        });
        it("new booking has no authorizer when created", function() {
            expect(booking.authorizedBy()).to.eql(null);
        });
        it("new booking has no authorized date when created" + '\n', function() {
            expect(booking.authorizedOn()).to.eql(null);
        });
    })
    describe("Booking Authorized by Manager", function() {
        it("should show booking as authorized by manager", function() {
            booking.authorize("Mr Boss Man")
            expect(booking.isAuthorized()).to.eql(true);
        });
        it("should have a managers name as authorizer ", function() {
            expect(booking.authorizedBy()).to.eql("Mr Boss Man");
        })
        it("date authorized on should be todays date" + '\n', function() {
            expect(booking.authorizedOn()).to.eql(new Date().toLocaleDateString()); 
        });
    })

    describe("Booking Authorized with special date", function() {
        it("should show booking to be authorized by manager", function(){
            booking.authorize("Mr Boss Man Again", new Date("2018-07-01"))
            expect(booking.isAuthorized()).to.eql(true);
        });
        it("should show managers name as authorizer", function(){
            expect(booking.authorizedBy()).to.eql("Mr Boss Man Again");
        });
        it("date authorized on should be special date specified" + '\n', function(){
            expect(booking.authorizedOn()).to.eql(new Date("2018-07-01"));
        });
    })
})
