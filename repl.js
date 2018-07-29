// Import all the classes from our other files
const Booking = require("./models/Booking");
const Employee = require("./models/Employee");
const EmployeeStore = require("./models/EmployeeStore");

// Start up a repl - the options here
// make things work with repl.it and
// make sure the classes are available
const repl = require('repl').start({
    useColors: true,
    terminal: false,
  });

// Expose the variables explicitly to the REPL
repl.context.Booking = Booking;
repl.context.Employee = Employee;
repl.context.EmployeeStore = EmployeeStore;