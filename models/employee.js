// Require in the Booking class
const Booking = require("./Booking.js");

// Employee class

class Employee {
    constructor(payrollNo, name, email, holidayAllowance) {
        this.name = this.toCapital(name)
        this.email = email
        this.payrollNo = payrollNo
        this.holidayAllowance = holidayAllowance
        this.holidayBooked = 0
        this.holidayApproved = 0
        this.bookingsList = []
    }

     // Function to create a booking
     makeBooking(startDate,endDate) {
        var booking = new Booking(startDate,endDate)
        this.holidayBooked += booking.numberOfDays()
        this.holidayAllowance -= booking.numberOfDays()
        this.bookingsList.push(booking)

        // If booking exceeds holiday allowance, refuse, wipe booking and
        // add allowance back on
        if (this.holidayAllowance <= 0) {
        this.holidayBooked -= booking.numberOfDays()
        this.holidayAllowance += booking.numberOfDays()
        this.bookingsList.pop(booking)
        throw ("Holiday allowance exceeded please try again")   
        }    
    }

    // Function to return how many days of holiday have been booked
    daysBooked() {
        return this.holidayBooked
    }

    // Function to return number of days of holiday remaining
    daysRemaining() {
        return this.holidayAllowance
    }

    // Function to return how many days of holiday booked have been authorised
    daysBookedAndAuthorized(){
        this.holidayApproved = 0
        for (var booking of this.bookingsList) {
        if (booking.approved == true) {
            this.holidayApproved += booking.numberOfDays()
        }
    }
        return this.holidayApproved
    }

    // Function to return any bookings for future dates by filtering bookingsList
    futureBookings() {
        return this.bookingsList.filter(booking => ((booking.isAuthorized() == true) 
        && (booking.startDate > new Date())))
    }

    // Function to return any bookings from dates that have passed already by filtering bookingsList
    pastBookings() {
        return this.bookingsList.filter(booking => ((booking.isAuthorized() == true) 
        && (booking.startDate < new Date())))
    }

    // Function to convert inputted name so that first letters of each name are 
    // capitalised and rest of names are lowercase
    toCapital(str)
    {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() 
        + txt.substr(1).toLowerCase();});
    }

    // Function to return employee bookings
    get bookings() {
        return this.bookingsList;
    }

    // Function to throw an error if bookings is manipulated
    set bookings(stuff) {
        throw ("Exception: You cannot manipulate bookings")
    }

    // Function to return in JSON format
    toJSON() {
        return (this)
    }

}

module.exports = Employee