/*    JavaScript 7th Edition
      Chapter 2
      Project 02-05

      Application to create an online calculator
      Author: Amy Chiem
      Date:   2/27/2024

      Filename: project02-05.js
 */ 
// error 1: change from runcalculator to runCalculator
// error 2: added missing parentheses after function
// error 3: around line 20 changed click to onclick
// error 4: line 85-87, clearCalculator is not within an anonymous function
//
// error 5: around line 93, changed from ??? to ?
// error 6: around line 96, change calc_value to calcValue
// error 7: line 109, changed id from calcwindow to calcWindow
 
// Add event handlers for each calculator button sending that buttons value to the runCalculator() function
document.getElementById("button0").click = function() {
   runCalculator(0);
}

document.getElementById("button1").onclick = function() {
   runCalculator(1);
}

document.getElementById("button2").onclick = function() {
   runCalculator(2);
}

document.getElementById("button3").onclick = function() {
   runCalculator(3);
}

document.getElementById("button4").onclick = function() {
   runCalculator(4);
}

document.getElementById("button5").onclick = function() {
   runCalculator(5);
}

document.getElementById("button6").onclick = function() {
   runCalculator(6);
}

document.getElementById("button7").onclick = function() {
   runCalculator(7);
}

document.getElementById("button8").onclick = function() {
   runCalculator(8);
}

document.getElementById("button9").onclick = function() {
   runCalculator(9);
}

document.getElementById("buttonAdd").onclick = function() {
   runCalculator("+");
}

document.getElementById("buttonMinus").onclick = function() {
   runCalculator("-");
}

document.getElementById("buttonMultiply").onclick = function() {
   runCalculator("*");
}

document.getElementById("buttonDivide").onclick = function() {
   runCalculator("/");
}

document.getElementById("buttonDecimal").onclick = function() {
   runCalculator(".");
}

// Send an empty text string if the Enter key is clicked
document.getElementById("buttonEnter").onclick = function() {
   runCalculator("");
}

// Clear the calculator window if the C key is clicked
document.getElementById("buttonClear").onclick = function() {
   clearCalculator();
}


// Function to enter characters into the calculator window based on what is clicked

function runCalculator(character) {
   // Retrieve the characters in the calculator window
   let calcValue = document.getElementById("calcWindow").value;
   
   // Add the character to the calculator string or if its empty (the enter key) evaluate the equation
   (character) ? calcValue += character : calcValue += " = " + evalEq(calcValue) + "\n";
   
   // Update the characters displayed in the calculator window.
   document.getElementById("calcWindow").value = calcValue;
}


// Function to clear the calculator window

function clearCalculator() {
   document.getElementById("calcWindow").value ="";
}






/* ===================================================================== */

// Function to evaluate a text string containing an equation, returning a numeric value to a specified number of decimals
function evalEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(6);
}  
