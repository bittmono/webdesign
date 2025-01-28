/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Amy Chiem
      Date:   2/26/2024

      Filename: project02-04.js
*/
 
//declared values for products
let CHICKEN_PRICE = 10.95;
let HALIBUT_PRICE = 13.95;
let BURGER_PRICE = 9.95;
let SALMON_PRICE = 18.95;
let SALAD_PRICE = 7.95;
let SALES_TAX = 0.07;

//event handler, triggers an event from clicking on a product
document.getElementById("chicken").addEventListener("click", calcTotal);
document.getElementById("halibut").addEventListener("click", calcTotal);
document.getElementById("burger").addEventListener("click", calcTotal);
document.getElementById("salmon").addEventListener("click", calcTotal);
document.getElementById("salad").addEventListener("click", calcTotal);


function calcTotal () {
   //current cart, starting empty
   var cost = 0;

   //declared product 
   let buyChicken = document.getElementById("chicken").checked;
   let buyHalibut = document.getElementById("halibut").checked;
   let buyBurger = document.getElementById("burger").checked;
   let buySalmon = document.getElementById("salmon").checked;
   let buySalad = document.getElementById("salad").checked;

   //comparison operator, increase cost by assigned price
   cost += buyChicken ? CHICKEN_PRICE : 0;
   cost += buyHalibut ? HALIBUT_PRICE : 0;
   cost += buyBurger ? BURGER_PRICE : 0;
   cost += buySalmon ? SALMON_PRICE : 0;
   cost += buySalad ? SALAD_PRICE : 0;

   //innerHTML for subtotal
   document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

   //declare and set tax value
   let tax = cost * SALES_TAX;

   //innerHTML for tax
   document.getElementById("foodTax").innerHTML = formatCurrency(tax);

   //calculate total cost
   let totalCost = cost + tax;

   //innerHTML for total cost
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

}



// Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
