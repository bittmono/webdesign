/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Amy Chiem
      Date:   2/26/2024

      Filename: project02-03.js
 */

document.getElementById("square").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the square.";
}

document.getElementById("triangle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the triangle."
}

document.getElementById("circle").onmouseover = function() {
      document.getElementById("feedback").innerHTML = "You're hovering over the circle."
}
