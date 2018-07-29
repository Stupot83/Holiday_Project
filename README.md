//////////////////////////////////////////////////////////////////////////////////   Testing and Automation Assignment   ///////////////
////////////////////////////////////////////////////////////////////

Here I have implemented a holiday booking system using JavaScript classes, which is fully covered with a range of unit tests. There is no UI, the backend system is run through a nodeJS terminal.

////////////////////////////////////////////////////////////////////

SETUP

////////////////////////////////////////////////////////////////////

To use the holiday booking system for yourself, you will need to make sure you have the correct setup. You may need to run the following:

npm install 
npm init
npm install mocha chai

You will also need to have the use of a Terminal, I used iTerm for example on my MacBook Pro, and you may want to have an editor such as VS Code. You can clone the repo from Github my user name is Stupot83.

To start using the system, enter the terminal and make sure you are in the directory where the files are situated, and type:

node repl.js

This will start the system and allow you to play with the different functions that are available. The different commands, functions etc are described in more detail for each class later on in this document.

////////////////////////////////////////////////////////////////////

TESTING

////////////////////////////////////////////////////////////////////

To use the testing suite I have created run:

npm test

There should be 65 tests all passing as green. The tests that I wrote were designed to prove that the code fulfills all of the criteria listed in the next sections for each class, and therefore that the code works correctly with the expected end results.

Because there are tests for the employeeStore class, when you run npm test it will also confirm that a new file employeeStore.json has been created, and that the test employee data has been written to it, which is displayed in the terminal. If you don't want to have this happen before you play with the other options, wait until the end of your usage to run the tests.

////////////////////////////////////////////////////////////////////

THE BOOKING CLASS

////////////////////////////////////////////////////////////////////

An instance of this class represents a holiday booking made by an employee. Bookings can be authorized by a manager. 

The booking class is setup with two arguments, a startDate and an endDate, in the format "2018-09-01".

The booking class exposes the following interface:

booking = ​new​ Booking(​new​ Date(​"2018-09-01"​), ​new​ Date(​"2018-09-05"​) //=> Instantiate a new booking.

booking.startDate ​//=> Returns Date object for "2018-09-01".

booking.endDate ​//=> Returns Date object for "2018-09-05".

booking.numberOfDays() ​//=> Returns number of days as 5.

booking.isAuthorized() ​//=> New booking is not authorized, so returns false.

booking.authorizedBy() ​//=> New booking is not authorized, so returns null.

booking.authorizedOn() ​//=> New booking is not authorized, so returns null.

booking.authorize(​"Mr Boss Man"​) //=> Authorize a booking by a manager of name "Mr Boss Man".

booking.isAuthorized() ​//=> Booking has been authorized, so returns true.

booking.authorizedBy() ​//=> Booking has been authorized, so returns name of manager, "Mr Boss Man".

booking.authorizedOn() ​//=> Booking has been authorized, with no specified date, so returns Date object for today's Date.

booking.authorize(​"Mr Boss Man Again"​, ​new​ Date(​"2018-07-01"​)) ​// This function takes an optional argument representing the date it was authorized on.

booking.isAuthorized() ​//=> Booking is authorized, so returns true.

booking.authorizedBy() ​//=> Booking is authorized, so returns name of manager "Mr Boss Man Again".
booking.authorizedOn() ​//=> Booking has been authorized with a specified date, so returns Date object for "2018-07-01" (the date
provided).

////////////////////////////////////////////////////////////////////

THE EMPLOYEE CLASS

////////////////////////////////////////////////////////////////////

This represents an employee of the company and is setup with the following arguments, Payroll number, Name, Email address & Holiday allowance. The class exposes the following interface:

employee = new ​Employee​(​"E123"​, ​"joe bloggs"​, ​"joe@bloggs.com"​, ​25​) //=> Instantiate a new employee.

employee.payrollNo ​//=> Returns payrollNo of new employee as "E123".

employee.name ​//=> Returns name of new employee as "Joe Bloggs" (function toCapital() capitalizes first letter of each name and makes sure other letter are lowercase).

employee.email ​//=> Returns email address of new employee as "joe@bloggs.com".

employee.bookings ​//=> Returns booking array for new employee as empty array [].

employee.holidayAllowance ​//=> Returns holiday allowance of new employee as 25 days.

employee.bookings = ​'nonsense'​ ​//=> Raises an exception to stop employee bookings from being overwritten (A test has been included for this even though not in the specification).

employee.daysRemaining() ​//=> Returns number of days remanining to book as holiday for new employee as 25 days.

employee.daysBooked() ​//=> Returns number of days booked as holiday by new employee as 0 days.

employee.daysBookedAndAuthorized() ​//=> Returns the number of days of holiday booked and authorized for new employee as 0 days.

////////////////////////////////////////////////////////////////////

*** Please check code - have added extra functionality so that an error is thrown if you try to book holiday dates longer than the number of days the employee has left. Automatically removes anything added on and reverts back to original state for employees bookings. So you cannot book employee in for more holiday allowance than they are entitled to.

employee.makeBooking(​"2018-09-01"​, ​"2018-09-05"​) ​//=> sets up a Booking object with these start/end dates.

employee.makeBooking(​"2018-01-01"​, ​"2018-01-05"​) ​//=> sets up another Booking object with these start/end dates.

employee.daysRemaining() ​//=> As the 2 bookings are both 5 days each, returns number of days holiday allowance remaining as 15 days.

employee.daysBooked() ​//=> Returns the number of days holiday booked for the employee as 10 days (2 x 5).

employee.daysBookedAndAuthorized() ​//=> Returns the number of days holiday booked and authorized for the employee as 0 days.

employee.futureBookings() ​//=> Returns the [Booking] Array of all future bookings.

employee.pastBookings() ​//=> Returns the [Booking] Array of all past bookings.

employee.futureBookings()[​0​].authorize(​"Mr Boss Man"​) ​// Authorise a booking as before, from the futureBookings array.

employee.daysBooked() ​//=> Returns the number of employee holiday days booked as 10.

employee.daysBookedAndAuthorized() ​//=> Returns number of days holiday that have been booked and authorized as 5 as only one of the two bookings made has been authorized.

employee.futureBookings(​true​) ​//=> Returns uthorized bookings.

employee.pastBookings(​true​) ​//=> Returns authorized bookings.

////////////////////////////////////////////////////////////////////

THE EMPLOYEESTORE CLASS

This one is a utility class that exposes several methods:

The first option is to create a new EmployeeStore for example:

store = new EmployeeStore

The EmployeeStore will create with an empty employee list as an array. You can then add or remove employees from this list.

To add an employee that you have already created with all its data including any bookings, you would do the following:

store.add(employee)

To remove and employee listed in the EmployeeStore, you would do the following:

store.remove(employee)

This allows you to add or remove employees to the EmployeeStore at your own choosing. If you want to write your list of employee data to a file, follow the next part of the Readme. 

EmployeeStore.save() will save all the employees in the current EmployeeStore into a file employeeStore.json. This file can be overwritten with the latest contents of your EmployeeStore.

EmployeeStore.load() should read the employeeStore.json file and return an array of Employee objects contained within the file.

The ease of this setup is that you can add or remove anything you want from your EmployeeStore and then overwrite the employeeStore.json file with any changes if you want to. 

Alternatively, you can store what you have in the employeeStore.json and make changes to the EmployeeStore, then load the file up later if you want to use that old data again.
