"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-01

      Application to calculate total moving cost
      Author: Amy Chiem
      Date:   3/24/2024

      Filename: project04-01.js
*/

// Global Constants - logic errors?
const COST_PER_LB = 0.50;
const COST_PER_MILE = 0.75;
const SETUP_COST = 500;

// Global Variables
let wgtBox = document.getElementById("wgtBox");
let distBox = document.getElementById("distBox");
let msgBox = document.getElementById("msgBox");


// Event Handlers
document.getElementById("wgtBox").onchange = calcTotal;
document.getElementById("distBox").onchange = calcTotal;
document.getElementById("setupBox").onclick = calcTotal;

// Function to calculate an estimate of the total moving cost
function calcTotal() {
   let totalCost = 0;      // Set the initial estimate to $0
   msgBox.innerHTML = "";  // Erase any warnings in the message box
    
      try {
         //if value is not greater, throw exception
          if (!(wgtBox.value > 0)) {
            throw "!! Enter a positive weight"
          }

          //if no exception
          totalCost += wgtBox.value * COST_PER_LB;

          //if exception caught
      }  catch (error) {
         msgBox.innerHTML = "!! Enter a positive weight"
      } 
  
      try {
         if (!(distBox.value > 0)) {
           throw "!! Enter a positive mileage"
         }
         totalCost += distBox.value * COST_PER_MILE;
     }  catch (error) {
        msgBox.innerHTML = "!! Enter a positive mileage"
     } 

   
   if (document.getElementById("setupBox").checked) {
      totalCost += SETUP_COST
   }
   
   // Display the moving cost estimate in the totalBox, formatted as currency
   document.getElementById("totalBox").innerHTML = formatCurrency(totalCost);
}



 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }