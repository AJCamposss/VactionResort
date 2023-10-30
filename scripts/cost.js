 window.onload = init;

function init () {
    const totalCost = document.getElementById("totalCost");

    totalCost.onsubmit = TotalCost; 
}

function TotalCost() {

    
    let fullName = document.getElementById("fullNameInput").value.trim();
    let email = document.getElementById("emailInput").value.trim();
    let phoneNumber = document.getElementById("phoneNumberInput").value.trim();
    let checkInDate = document.getElementById("checkInDateInput").value.trim();
    let numberOfNights = document.getElementById("numberOfNightsSelect").value.trim();


    console.log("full name " + fullName)
    console.log("Email " + email)
    console.log("Phone Number " + phoneNumber)
    console.log("Check-In Date " + checkInDate)
    console.log("Number of Nights " + numberOfNights)
}

