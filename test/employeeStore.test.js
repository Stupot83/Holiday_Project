const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-datetime'));

var fs = require("fs");

var EmployeeStore = require('../lib/employeeStore.js')
var Employee = require('../models/employee.js')

