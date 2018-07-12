// Employee class

class Employee {
    constructor(payrollNo, name, email, holidayAllowance) {
        this.payrollNo = payrollNumber
        this.name = this.titleCase(name)
        this.email = emailAddress
        this._bookings =[]
        this.holidayAllowance = allowance
        this.daysBookedOff = 0
        this.daysAuthorised = 0
    }


set bookings (booking) {
    //this._bookings = booking
    throw ("Can't mutate bookings property")
    }

get bookings() {
    return this._bookings
    }

// Function to return number of days of holiday remaining
daysRemaining() {

}

// Function to return how many days of holiday have been booked
daysBooked() {

}

// Function to return how many days of holiday booked have been authorised
daysBookedAndAuthorised() {

}

// Function to return any bookings for future dates
futureBookings() {

}

// Function to return any bookings from dates that have passed already
pastBookings() {

}

// Function to convert inputted name so that first letters of each name are 
// capitalised and rest of names are lowercase
titleCase(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

// Function to create a booking
makeBooking(startDate, endDate) { 

}

toJSON(){
    return (this)
}

}

module.exports = Employee