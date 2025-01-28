"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-05

      Project to submit a registration form
      Author: Amy Chiem
      Date:   4/21/24

      Filename: project06-05.js
      //errors ive found
      //in anon function, i think all the erros are the missing addEventListener for each box
      //in sessionTest, setValidity changed to setCustomValidity 
      //in calcCart, index changed to selectedIndex, .check changed to .checked, element access was not correct
*/

window.addEventListener("load", function() {
   // Calculate the shopping cart when the page loads
   calcCart();
   
   // Verify that the user has selected a session to attend
   document.getElementById("regSubmit").addEventListener("click", sessionTest);   
   
   // Recalculate the shopping cart when any field loses the focus
   document.getElementById("fnBox").addEventListener("blur", calcCart);
   document.getElementById("lnBox").addEventListener("blur", calcCart); 
   document.getElementById("groupBox").addEventListener("blur", calcCart);   
   document.getElementById("mailBox").addEventListener("blur", calcCart);   
   document.getElementById("phoneBox").addEventListener("blur", calcCart);   
   document.getElementById("sessionBox").addEventListener("change", calcCart);   
   document.getElementById("banquetBox").addEventListener("blur", calcCart); 
   document.getElementById("mediaCB").addEventListener("click", calcCart);   
});


// Function to verify that a session was selected by the user
function sessionTest() {
   var confSession = document.getElementById("sessionBox");
   if (confSession.selectedIndex === -1) {
      confSession.setCustomValidity("Select a Session Package");
   } else {
      confSession.setCustomValidity("");
   }
}

// Function to calculate the shopping cart total
function calcCart() {
   
   // Calculate the banquet cost for all guests 
   let guestCost = parseInt(document.getElementById("banquetGuests").value) * 55;
   document.getElementById("regBanquet").textContent = document.getElementById("banquetGuests").value;
   
   // Determine the cost of the selected session
   let sessionCost = 0;       // Initial cost of the session
   let sessionChoice = "";    // Initial chosen session

   // Index of the chosen session
   let selectedSession = document.getElementById("sessionBox").selectedIndex;
   
   // Retrieve the name and cost of the selected session  
   if (selectedSession !== -1) {
      sessionChoice = document.getElementById("sessionBox").options[selectedSession].text;
      sessionCost = parseInt(document.getElementById("sessionBox").value);
   }
   
   // Determine the cost of the media pack
   let mediaCost = 0;      // Initial media cost
   let mediaChoice = "";   // Initial media choice
   
   // If the user selects the media pack, update the choice and cost
   if (document.getElementById("mediaCB").checked) {
      mediaChoice = "yes";
      mediaCost = 115;
   }
   
   // Calculate total cost of the conference
   // Multiply field values by 1 to convert them from text strings to numeric values
   let totalCost = guestCost + sessionCost + mediaCost;
   
   // Display the field values and calculated values in the Shopping Cart table
   document.getElementById("regName").textContent = document.getElementById("firstName").value + " " + document.getElementById("lastName").value;
   document.getElementById("regGroup").textContent = document.getElementById("group").value;
   document.getElementById("regEmail").textContent = document.getElementById("email").value;
   document.getElementById("regPhone").textContent = document.getElementById("phoneNumber").value;
   document.getElementById("regSession").textContent = sessionChoice;
   document.getElementById("regBanquet").textContent = document.getElementById("banquetGuests").value; 
   document.getElementById("regPack").textContent = mediaChoice;
   document.getElementById("regTotal").textContent = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
