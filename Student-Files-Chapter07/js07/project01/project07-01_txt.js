"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Amy Chiem
      Date:   4/21/24

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");
   e.preventDefault() //prevent the browser from responding to the submit event

   var regex1 = /[A-Z]/        //meets one Uppercase character
   var regex2 = /\d/           //meets at least one digit
   var regex3 = /[!$#%.]/      //special characters !$#%

   if (pwd.length < 8) {
      feedback.textContent = "Your password must be at least 8 characters."
  } else if (!regex1.test(pwd)) {
      feedback.textContent = "Your password must include an uppercase letter."
  } else if (!regex2.test(pwd)) {
      feedback.textContent = "Your password must include a number."
  } else if (!regex3.test(pwd)) {
      feedback.textContent = "Your password must include a special character [!$#%.] "
  } else {
      e.target.submit();
  }
});


