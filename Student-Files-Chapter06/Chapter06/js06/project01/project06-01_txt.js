"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Amy Chiem
      Date:   4/21/2024

      Filename: project06-01.js
      note: the first if statement is not working correctly
*/

const submitButton = document.getElementById("submitButton")
const pwd = document.getElementById("pwd")
const pwd2 = document.getElementById("pwd2")

submitButton.addEventListener("click", function() {
      let pattern = /^.{8,}$/ //rgx for minimum 8 passwords

      if (!pattern.test(pwd)) {
            pwd.setCustomValidity("must be 8 characters long")
      } else if (pwd.value != pwd2.value) {
            pwd.setCustomValidity("passwords do not match")
      } else {
            pwd.setCustomValidity("")
      }
})