// Booking class

class Booking {
    constructor(startDate, endDate) {
        this.startDate = new Date(startDate)
        this.endDate = new Date(endDate)
        this.authorised = false
        this.authorisedVia = null
        this.authorisedOnDate = null
    }

// Function to return number of days a booking is for
numberOfDays() {

} 

// Function to return if the booking has been authorised
isAuthorised() {
    return this.authorised
} 

// Function to return who the booking was authorised by
authorisedBy() {

}

// Function to return the date the booking was authorised on
authorisedOn() {

} 

// Function to authorize a booking
authorise(manager, optionalDate) {
    {
        var date = new Date().toLocaleDateString()
        if(typeof optionalDate !== "undefined") {
            //console.log("option !undefined")
            date = optionalDate
        }

        this.authorised = true
        this.authorisedVia = personel
        this.authorisedOnDate = date
    }

}

toJSON(){
    return this
}

}



module.exports = Booking