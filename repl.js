var repl = require('repl').start({
    useColors: true,
    terminal: false,
  });

  repl.context.Booking = Booking;
  repl.context.Employee = Employee;
  repl.context.EmployeeStore = EmployeeStore;