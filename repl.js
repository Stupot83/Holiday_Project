const Booking = require("./models/Booking");
const Employee = require("./models/Employee");
const employeeStore = require("./models/employeeStore");

const repl = require('repl').start({
    useColors: true,
    terminal: false,
  });

  repl.context.Booking = Booking;
  repl.context.Employee = Employee;
  repl.context.EmployeeStore = EmployeeStore;