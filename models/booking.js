// Booking class

class Booking {
    constructor(startDate,endDate) {
        this.startDate = new Date(startDate)
        this.endDate = new Date(endDate)
        this.authorized = false
        this.authorizer = null
        this.authorizedOnDate = null
    }

    // Function to authorize a booking
    authorize(manager, specialDate) {
        var date = new Date().toLocaleDateString()
        if(typeof specialDate !== "undefined") {
            date = specialDate
        }
        this.authorized = true;
        this.authorizer = manager;
        this.authorizedOnDate = date;
        }

    // Function to calculate number of days a booking is for
    numberOfDays() {
        return Math.round(Math.abs(this.endDate - this.startDate) / 8.64e7 + 1)
    } 

    // Function to return if the booking has been authorised
    isAuthorized() {
        return this.authorized;
    } 

    // Function to return who the booking was authorised by
    authorizedBy() {
        return this.authorizer;
    }

    // Function to return the date the booking was authorised on
    authorizedOn() {
        return this.authorizedOnDate;
    } 

    // Function to return booking in JSON format
    toJSON() {
        return (this)
    }

}

module.exports = Booking