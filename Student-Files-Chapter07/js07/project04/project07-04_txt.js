"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-04

      Project to create a customer queue
      Author: Amy Chiem
      Date:   5/1/24

      Filename: project07-04.js
*/

let customers = ["Alisha Jordan","Kurt Cunningham", "Ricardo Lopez", "Chanda Rao",
                 "Kevin Grant", "Thomas Bey", "Elizabeth Anderson", "Shirley Falk",
                 "David Babin", "Arthur Blanding", "Brian Vick", "Jaime Aguilar",
                 "Eileen Rios", "Gail Watts", "Margaret Wolfe", "Kathleen Newman",
                 "Jason Searl", "Stephen Gross", "Robin Steinfeldt", "Jacob Bricker",
                 "Gene Bearden", "Charles Sorensen", "John Hilton", "David Johnson",
                 "Wesley Cho"];

let customerName = document.getElementById("customerName");
let customerList = document.getElementById("customerList");

let addButton = document.getElementById("addButton");
let searchButton = document.getElementById("searchButton");
let removeButton = document.getElementById("removeButton");
let topButton = document.getElementById("topButton");

let status = document.getElementById("status");

generateCustomerList();

// Function to generate the ordered list based on the contents of the customers array
function generateCustomerList() {
   customerList.innerHTML = "";
   for (let i = 0; i < customers.length; i++) {
      let customerItem = document.createElement("li");      
      customerItem.textContent = customers[i];     
      customerList.appendChild(customerItem);
   }
}

addButton.onclick = function() {
   customers.push(customerName.value); // add value of the customerName to end of array
    
   generateCustomerList();  // run and update the contents of the list

   status.textContent = customerName.value + " added to the end of the queue";
};

searchButton.onclick = function () {
   // locate the index of the array value of the customerName 
   let index = customers.indexOf(customerName.value);
  
   // Add 1 to the index value and store the result in the place variable
   let place = index + 1;
  
   if (place === 0) {
      status.textContent = customerName.value + " is not found in the queue"; //if not found
   } else {
      status.textContent = customerName.value + " found in position " + place + " of the queue"; //if found
   }
};

removeButton.onclick = function () {
   let index = customers.indexOf(customerName.value);  // locate the index of the array value of the customerName 
   
   if (index !== -1) {
       customers.splice(index, 1);
       generateCustomerList();
       status.textContent = customerName.value + " removed from the queue"; //if found, removed
   } else {
       status.textContent = customerName.value + " is not found in the queue"; //if not found
   }
};

topButton.onclick = function () {
   if (customers.length > 0) {
       let topCustomer = customers.shift();
       status.textContent = topCustomer + " is the top customer from the queue";
       generateCustomerList();
   } else {
       status.textContent = "Queue is empty";
   }
};
