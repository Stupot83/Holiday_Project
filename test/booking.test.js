const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-datetime'));

var Booking = require('../models/booking.js')

var booking = new Booking(new Date("2018-09-01"), new Date("2018-09-05"))


// Test: Booking creation, day calculation, initial authorisation check, authorisation creation,employee creation,
// employee days taken initial setup, should create days remaining