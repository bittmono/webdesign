/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Amy Chiem
      Date:   2/22/2024

      Filename: project02-01.js
 */

function FahrenheitToCelsius(degree) {
      celsius = (degree - 32) / 1.8
      return celsius;
}

function CelsiusToFahrenheit(degree) {
      fahrenheit = (degree * 1.8) + 32
      return fahrenheit;
}

//
document.getElementById("cValue").onchange = function() {
      var cDegree = document.getElementById("cValue").value

      var fahrenheitValue = CelsiusToFahrenheit(parseFloat(cDegree));

      document.getElementById("fValue").value = fahrenheitValue;
}

//
document.getElementById("fValue").onchange = function() {
      var fDegree = document.getElementById("fValue").value;

      var celsiusValue = FahrenheitToCelsius(parseFloat(fDegree));

      document.getElementById("cValue").value = celsiusValue;
}