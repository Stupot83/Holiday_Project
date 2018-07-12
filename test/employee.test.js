const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-datetime'));

var Employee = require('../models/employee.js')
var Booking = require('../models/booking.js')

var employee = new Employee("E123", "joe bloggs", "joe@bloggs.com", 25)