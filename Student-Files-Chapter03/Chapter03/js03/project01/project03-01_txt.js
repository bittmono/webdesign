/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Amy Chiem
      Date:   3/16/2024

      Filename: project03-01.js
*/


var menuItems = document.getElementsByClassName(menuItem);

//for loop that goes through the menuItem collection
for (let i = 0; i < objects.length; i++) {
      menuItems[i].addEventListener('click', calcTotal)
}

// Calculates the total cost of the customer's order with the selected items
function calcTotal() {
      var orderTotal = 0;

      for (let i = 0; i < menuItems.length; i++) {
            if(menuItems[i].checked) {
                  orderTotal += Number(menuItems[i].value);
            }
      }

      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal)
}

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }