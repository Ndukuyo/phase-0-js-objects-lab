// object attendee 
let attendee = {
  attendeeId :"T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};
console.log(attendee.name);

// function to log attendee name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}
let result = logAttendeeName(attendee);  // invoke the function here 
console.log(result);  // log attendee name here 

//function to log ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}
let a = logTicketPrice(attendee); // invoking function 
console.log(a); // logging function output here

// function to update ticket type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
  return attendee;
}

// function to update ticket price 
function updateTicketPrice(attendee, newTicketType){
  attendee.ticketPrice = newTicketType;
  return attendee
}

// function to remove the event property
function removeEventProperty(attendee) {
  delete attendee.event;
  return attendee;
}

// function to add a Cheked-in property 
function addChekedInProperty(attendee) {
  attendee["chekedIn"] = true;
  return attendee;
}


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};